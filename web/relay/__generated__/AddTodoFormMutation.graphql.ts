/**
 * @generated SignedSource<<dd81e411526b3e37890657c45d5f8f4e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AddTodoFormMutation$variables = {
  text: string;
};
export type AddTodoFormMutation$data = {
  readonly addTodo: {
    readonly completed: boolean;
    readonly id: string;
    readonly text: string;
  };
};
export type AddTodoFormMutation = {
  response: AddTodoFormMutation$data;
  variables: AddTodoFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "text"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "text",
        "variableName": "text"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "addTodo",
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
        "name": "text",
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
    "name": "AddTodoFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddTodoFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f4d9169c6dd72d9e09fb1698f4030383",
    "id": null,
    "metadata": {},
    "name": "AddTodoFormMutation",
    "operationKind": "mutation",
    "text": "mutation AddTodoFormMutation(\n  $text: String!\n) {\n  addTodo(text: $text) {\n    id\n    text\n    completed\n  }\n}\n"
  }
};
})();

(node as any).hash = "21c367fed7f69d9e414bb00bed52fdea";

export default node;
