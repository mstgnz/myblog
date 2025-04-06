import { ApolloClient, InMemoryCache, createHttpLink, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { onError } from '@apollo/client/link/error';

const httpUrl = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL || 'http://localhost:8080/v1/graphql';
const wsUrl = process.env.NEXT_PUBLIC_HASURA_WS_URL || 'ws://localhost:8080/v1/graphql';

const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('access_token');
  }
  return null;
};

const createApolloClient = (initialState = {}, token?: string) => {
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
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

  const httpLink = createHttpLink({
    uri: httpUrl,
  });

  // WebSocket link'i sadece client-side'da oluştur
  const wsLink = typeof window !== 'undefined' ? new WebSocketLink({
    uri: wsUrl,
    options: {
      reconnect: true,
      connectionParams: () => ({
        headers: {
          Authorization: `Bearer ${token ?? ''}`,
        },
      }),
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
    link: authLink.concat(errorLink).concat(link),
    cache: new InMemoryCache({ addTypename: false }).restore(initialState),
    defaultOptions: {
      watchQuery: { errorPolicy: 'all' },
      mutate: { errorPolicy: 'all' },
      query: { errorPolicy: 'all' },
    },
  });
};

// Client-side için default client
export const client = createApolloClient();

// Server-side için client oluşturma fonksiyonu
export const createSSRClient = (token?: string) => {
  return createApolloClient({}, token);
}; 