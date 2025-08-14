import TodoItem from './TodoItem';

type Props = {
  todos: readonly { readonly id: string; readonly text: string; readonly completed: boolean }[];
};

export default function TodoList({ todos }: Props) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
