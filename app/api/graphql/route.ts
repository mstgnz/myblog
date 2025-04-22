import { gql } from '@apollo/client';
import { NextRequest, NextResponse } from 'next/server';
import { createSSRClient } from '@/services/apollo';

export async function POST(request: NextRequest) {
  try {
    // Extract headers
    const token = request.headers.get('Authorization')?.split(' ')[1];
    const contentType = request.headers.get('Content-Type');

    // Validate content type
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { errors: [{ message: 'Content-Type must be application/json' }] },
        { status: 415 }
      );
    }

    // Parse the request body
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json(
        { errors: [{ message: 'Invalid JSON in request body' }] },
        { status: 400 }
      );
    }

    const { query, variables, operationName } = body;

    // Validate required GraphQL parameters
    if (!query) {
      return NextResponse.json(
        { errors: [{ message: 'GraphQL query is required' }] },
        { status: 400 }
      );
    }

    // Create Apollo client with auth token if provided
    const client = createSSRClient(token);
    
    // Parse the query string into a gql object if it's a string
    const parsedQuery = typeof query === 'string' ? gql`${query}` : query;

    // Determine if this is a mutation or a query
    const isMutation = typeof query === 'string' 
      ? query.trim().toUpperCase().startsWith('MUTATION')
      : parsedQuery.definitions.some((def: any) => 
          def.kind === 'OperationDefinition' && def.operation === 'mutation'
        );

    // Set timeout for the operation (30 seconds)
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('GraphQL operation timed out after 30 seconds'));
      }, 30000);
    });

    // Execute the appropriate operation with timeout
    const operationPromise = isMutation
      ? client.mutate({
          mutation: parsedQuery,
          variables,
          context: {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
            }
          }
        })
      : client.query({
          query: parsedQuery,
          variables,
          fetchPolicy: 'no-cache', // Ensure fresh data
          context: {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
            }
          }
        });

    // Race between operation and timeout
    const result = await Promise.race([operationPromise, timeoutPromise]);

    return NextResponse.json(result);
  } catch (error) {
    console.error('GraphQL Error:', error);
    
    // Format the error response based on GraphQL spec
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    // Daha detaylı hata mesajı için stack ve diğer bilgileri ekleyelim
    const formattedError = {
      errors: [{ 
        message: errorMessage,
        details: error instanceof Error ? error.stack : 'Unknown error details'
      }]
    };

    return NextResponse.json(
      formattedError,
      { status: error instanceof Error ? 400 : 500 }
    );
  }
}

/*
Example usage:

fetch('/api/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    query: `query USERS($where: users_bool_exp, $limit: Int) {
      users(where: $where, limit: $limit) {
        id
        firstname
        lastname
      }
    }`,
    variables: {
      where: { active: { _eq: true } },
      limit: 10
    }
  })
})
*/