'use client';

import { graphql, useLazyLoadQuery } from 'react-relay';
import type { pageQuery } from '../__generated__/pageQuery.graphql';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';

export default function Page() {
  const data = useLazyLoadQuery<pageQuery>(
    graphql`
      query pageQuery {
        todos {
          id
          text
          completed
        }
      }
    `,
    {}
  );

  return (
    <main style={{ padding: '1rem' }}>
      <h1>My Todo List</h1>
      <AddTodoForm />
      <TodoList todos={data.todos} />
    </main>
  );
}