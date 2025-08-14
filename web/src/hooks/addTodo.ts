import { useMutation } from 'react-relay/hooks';
import { addTodoMutation } from '../components/AddTodoForm';
import type { AddTodoMutation } from '../graphql/__generated__/AddTodoMutation.graphql';

export function useAddTodo() {
  return useMutation<AddTodoMutation>(addTodoMutation);
}
