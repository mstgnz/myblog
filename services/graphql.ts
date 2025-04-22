class GraphQLService {
  private static instance: GraphQLService;
  
  private constructor() {}
  
  public static getInstance(): GraphQLService {
    if (!GraphQLService.instance) {
      GraphQLService.instance = new GraphQLService();
    }
    return GraphQLService.instance;
  }

  async executeQuery<T = any>(
    queryStr: string, 
    variables: Record<string, any> = {}, 
    token?: string
  ): Promise<T> {
    try {
      
      const headers: Record<string, string> = {}
      
      headers['Authorization'] = `Bearer ${token || process.env.NEXT_PUBLIC_HASURA_ANONYMOUS}`
      
      const response = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: JSON.stringify({
          query: queryStr,
          variables
        })
      });
      
      const result = await response.json();
      
      if (result.errors) {
        throw new Error(result.errors[0]?.message || 'GraphQL query failed');
      }
      
      return result.data as T;
    } catch (error) {
      console.error('GraphQL Query Error:', error);
      throw new Error('Failed to execute GraphQL query');
    }
  }

}

export const graphqlService = GraphQLService.getInstance(); 