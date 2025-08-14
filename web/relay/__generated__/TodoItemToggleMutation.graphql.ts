/**
 * @generated SignedSource<<bfdef19549b7b7af3d65512363fb9a8a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TodoItemToggleMutation$variables = {
  id: string;
};
export type TodoItemToggleMutation$data = {
  readonly toggleTodo: {
    readonly completed: boolean;
    readonly id: string;
  };
};
export type TodoItemToggleMutation = {
  response: TodoItemToggleMutation$data;
  variables: TodoItemToggleMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "toggleTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "completed",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoItemToggleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoItemToggleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2d6eef220ad91b0b2ea026be25755e29",
    "id": null,
    "metadata": {},
    "name": "TodoItemToggleMutation",
    "operationKind": "mutation",
    "text": "mutation TodoItemToggleMutation(\n  $id: ID!\n) {\n  toggleTodo(id: $id) {\n    id\n    completed\n  }\n}\n"
  }
};
})();

(node as any).hash = "19e4d7fc88953e242e37a269d3ecd0c8";

export default node;
