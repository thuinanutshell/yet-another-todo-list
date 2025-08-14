'use client';

import { graphql, useMutation } from 'react-relay';
import type { TodoItemToggleMutation } from '../../relay/__generated__/TodoItemToggleMutation.graphql';

const toggleMutation = graphql`
  mutation TodoItemToggleMutation($id: ID!) {
    toggleTodo(id: $id) {
      id
      completed
    }
  }
`;

type Props = {
  todo: { id: string; text: string; completed: boolean };
};

export default function TodoItem({ todo }: Props) {
  const [commit] = useMutation<TodoItemToggleMutation>(toggleMutation);

  const handleToggle = () => {
    commit({
      variables: { id: todo.id },
      optimisticResponse: {
        toggleTodo: {
          id: todo.id,
          completed: !todo.completed,
        },
      },
    });
  };

  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        style={{ marginRight: '0.5rem' }}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
    </li>
  );
}
