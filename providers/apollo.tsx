'use client';

import { client } from '@/services/apollo';
import { ApolloProvider } from '@apollo/client';

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
