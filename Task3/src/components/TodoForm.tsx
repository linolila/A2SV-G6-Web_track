import React, { useState } from 'react';

interface Task {
  id: number;
  text: string;
}

interface TodoFormProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ tasks, setTasks }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) {
      setError('Task description is required.');
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: trimmedText }]);
    setText('');
    setError('');
  };

  return (
    <>
      <form
        onSubmit={handleAddTask}
        style={{
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
          margin: '1rem 0',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Task description"
          style={{
            padding: '0.5rem',
            borderRadius: '0.5rem',
            border: '1px solid #cbd5e1',
            minWidth: 200,
          }}
          autoFocus
          autoComplete="off"
        />
        <button
          type="submit"
          style={{
            background: 'linear-gradient(90deg, #3182ce 0%, #63b3ed 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '2rem',
            padding: '0.5rem 1.2rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Add
        </button>
        {error && (
          <span style={{ color: 'red', fontSize: '0.9rem' }}>{error}</span>
        )}
      </form>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          marginTop: '1.5rem',
        }}
      >
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              background: '#f8fafc',
              borderRadius: '0.5rem',
              padding: '0.5rem 1rem',
              marginBottom: '0.7rem',
              fontWeight: 500,
              color: '#2d3748',
              fontSize: '1rem',
              display: 'block',
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoForm;
