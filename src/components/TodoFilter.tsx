// TodoFilter.tsx

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
};

const TodoFilter = (props: Props) => {
  const { setFilter, filter } = props;
  return (
    <div className="flex items-center justify-center gap-6 pt-6">
      <button
        className={(filter == 'all' ? 'underline underline-offset-4' : 'no-underline') + ' font-bold text-blue-500'}
        onClick={() => setFilter('all')}
      >
        すべて
      </button>
      <button
        className={(filter == 'active' ? 'underline underline-offset-4' : 'no-underline') + ' font-bold text-blue-500'}
        onClick={() => setFilter('active')}
      >
        未完了
      </button>
      <button
        className={
          (filter == 'completed' ? 'underline underline-offset-4' : 'no-underline') + ' font-bold text-blue-500'
        }
        onClick={() => setFilter('completed')}
      >
        完了
      </button>
    </div>
  );
};

export default TodoFilter;
