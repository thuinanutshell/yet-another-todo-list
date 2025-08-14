import { Environment, Network, RecordSource, RequestParameters, Store, Variables } from 'relay-runtime';

async function fetchGraphQL(params: RequestParameters, variables: Variables) {
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text, // Relay sends compiled query text here
      variables,
    }),
  });

  return await response.json();
}

export const RelayEnvironment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});
