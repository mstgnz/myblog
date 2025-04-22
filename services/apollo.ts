import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';
import { ApolloClient, InMemoryCache, createHttpLink, split, from } from '@apollo/client';

const httpUrl = process.env.NEXT_PUBLIC_HASURA_GQL_URL || 'http://localhost:8080/v1/graphql';
const wsUrl = process.env.NEXT_PUBLIC_HASURA_WS_URL || 'ws://localhost:8080/v1/graphql';

const createApolloClient = (initialState = {}, token?: string) => {

  const tokenHeaders: Record<string, string> = {
    'Authorization': `Bearer ${token || process.env.NEXT_PUBLIC_HASURA_ANONYMOUS}`
  }

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...tokenHeaders,
        ...headers,
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.error(
          `GraphQL error\nMessage: ${message}\nLocation: ${locations}\nPath: ${path}`
        );
      });
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  // Retry logic for network failures
  const retryLink = new RetryLink({
    delay: {
      initial: 300, // ms
      max: 5000,    // max delay
      jitter: true
    },
    attempts: {
      max: 3,       // retry up to 3 times
      retryIf: (error, _operation) => {
        // Only retry on network errors, not GraphQL errors
        return !!error && error.name !== 'ServerError';
      }
    }
  });

  const httpLink = createHttpLink({
    uri: httpUrl,
    credentials: 'include',
    // Increase timeout for longer queries
    fetchOptions: {
      timeout: 60000, // 60 seconds
    }
  });

  // WebSocket link'i sadece client-side'da oluştur
  const wsLink = typeof window !== 'undefined' ? new WebSocketLink({
    uri: wsUrl,
    options: {
      reconnect: true,
      lazy: true, // Sadece gerektiğinde bağlan
      timeout: 60000, // Timeout değerini artır (60 saniye)
      connectionParams: () => {
        // Token ve diğer header'ları ekle
        return {
          headers: {
            ...tokenHeaders,
          },
        };
      },
      // Hata ayıklama fonksiyonları
      connectionCallback: (error) => {
        if (error) {
          console.error('WebSocket connection error:', error);
        } else {
          console.log('WebSocket connected successfully');
        }
      },
      inactivityTimeout: 120000, // 2 dakika inaktivite süresi
    },
  }) : null;

  const link = typeof window !== 'undefined' && wsLink
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

  return new ApolloClient({
    link: from([retryLink, authLink, errorLink, link]),
    cache: new InMemoryCache({ addTypename: false }).restore(initialState),
    defaultOptions: {
      watchQuery: { 
        errorPolicy: 'all',
        fetchPolicy: 'network-only',
        notifyOnNetworkStatusChange: true,
      },
      mutate: { 
        errorPolicy: 'all',
        fetchPolicy: 'no-cache',
      },
      query: { 
        errorPolicy: 'all',
        fetchPolicy: 'network-only',
      },
    },
  });
};

// Client-side için default client
export const client = createApolloClient();

// Server-side için SSR client (Apollo Route için)
export const createSSRClient = (token?: string) => {
  return createApolloClient({}, token);
};