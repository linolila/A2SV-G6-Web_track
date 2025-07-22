import React, { useState, useRef } from 'react';

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
  const [editId, setEditId] = useState<number | null>(null);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddOrSave = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) {
      setError('Task description is required.');
      return;
    }

    if (editId !== null) {
      setTasks(tasks.map(t => (t.id === editId ? { ...t, text: trimmedText } : t)));
      setEditId(null);
      setText('');
    } else {
      setTasks([...tasks, { id: Date.now(), text: trimmedText }]);
      setText('');
    }
    setError('');
  };

  const handleEdit = (id: number) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      setEditId(id);
      setText(task.text);
      setError('');
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
    if (editId === id) {
      setEditId(null);
      setText('');
      setError('');
    }
  };

  return (
    <>
      <form onSubmit={handleAddOrSave} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
        <input
          ref={inputRef}
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
          {editId !== null ? 'Save' : 'Add'}
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
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.7rem',
              background: '#f8fafc',
              borderRadius: '0.5rem',
              padding: '0.5rem 1rem',
            }}
          >
            <span style={{ flex: 1 }}>{task.text}</span>
            <button
              onClick={() => handleEdit(task.id)}
              style={{
                background: '#3182ce',
                color: '#fff',
                border: 'none',
                borderRadius: '0.3rem',
                padding: '0.3rem 0.7rem',
                fontWeight: 500,
              }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task.id)}
              style={{
                background: '#e53e3e',
                color: '#fff',
                border: 'none',
                borderRadius: '0.3rem',
                padding: '0.3rem 0.7rem',
                fontWeight: 500,
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoForm;
