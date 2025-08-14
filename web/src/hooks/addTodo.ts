import { useMutation } from 'react-relay/hooks';
import type { AddTodoFormMutation } from '../../relay/__generated__/AddTodoFormMutation.graphql';
import { addTodoMutation } from '../components/AddTodoForm';

export function useAddTodo() {
  return useMutation<AddTodoFormMutation>(addTodoMutation);
}