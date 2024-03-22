// TodoItem.tsx
import type { Todo } from '@/types/todo';
type Props = {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoItem = (props: Props) => {
  const { todo, toggleTodo, deleteTodo } = props;
  return (
    <li className="mt-3 flex items-center">
      <input checked={todo.completed} onChange={() => toggleTodo(todo.id)} type="checkbox" />
      <div className={(todo.completed ? 'line-through' : 'no-underline') + ' flex-auto'}>
        <span className="pl-2 text-sm">{todo.date}</span>
        <span className="pl-2">{todo.text}</span>
      </div>
      <button
        className="w-[70px] rounded bg-orange-400 py-1 text-sm text-white hover:bg-orange-500"
        onClick={() => deleteTodo(todo.id)}
      >
        消す
      </button>
    </li>
  );
};

export default TodoItem;
