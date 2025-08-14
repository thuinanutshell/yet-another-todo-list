import { Environment, Network, RecordSource, RequestParameters, Store, Variables } from 'relay-runtime';

async function fetchGraphQL(params: RequestParameters, variables: Variables) {
  // Replace with your actual Railway backend URL
  const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://yet-another-todo-list-production.up.railway.app'  // Update this with your actual Railway URL
    : 'http://localhost:4000/graphql';
    
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return await response.json();
}

export const RelayEnvironment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});