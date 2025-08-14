'use client';

import React, { useState } from 'react';
import { commitMutation, graphql, useRelayEnvironment } from 'react-relay';
import type { AddTodoFormMutation } from '../../relay/__generated__/AddTodoFormMutation.graphql';

export const addTodoMutation = graphql`
  mutation AddTodoFormMutation($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`;

export default function AddTodoForm() {
  const [text, setText] = useState('');
  const environment = useRelayEnvironment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    commitMutation<AddTodoFormMutation>(environment, {
      mutation: addTodoMutation,
      variables: { text },
      updater: (store) => {
        const newTodo = store.getRootField('addTodo');
        if (!newTodo) return;

        const root = store.getRoot();
        const todos = root.getLinkedRecords('todos') || [];
        root.setLinkedRecords([...todos, newTodo], 'todos');
      },
      onCompleted: () => setText(''),
      onError: (err) => console.error(err),
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button type="submit">Add</button>
    </form>
  );
}