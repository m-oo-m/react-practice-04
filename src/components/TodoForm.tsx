import type { FormEvent } from 'react';
import { useState } from 'react';

type Props = {
  addTodo: (text: string) => void;
};

const TodoForm = (props: Props) => {
  const { addTodo } = props;
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        className="flex-auto rounded-l border-y-2 border-l-2 border-blue-100 px-2 py-1 focus:outline-none"
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
      />
      <button className="w-[80px] rounded-r bg-blue-500  text-white" type="submit">
        追加
      </button>
    </form>
  );
};

export default TodoForm;
