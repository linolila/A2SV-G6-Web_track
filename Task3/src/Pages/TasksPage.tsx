import React, { useState } from 'react';

interface Task {
  id: number;
  text: string;
}




const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const [error, setError] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Task description is required.');
      return;
    }
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
      },

    ]);
    setText('');
    setError('');
  };
const handleEdit = (id: number) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      setEditId(id);
      setEditText(task.text);
    }
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editText.trim()) {
      setError('Task description is required.');
      return;
    }
    setTasks(tasks.map(t => t.id === editId ? { ...t, text: editText } : t));
    setEditId(null);
    setEditText('');
    setError('');
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div
      style={{
        minHeight: '100dvh',
        width: '100%',
        background: 'linear-gradient(120deg, #f8fafc 0%, #e0eafc 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: 600, width: '100%', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <h2 style={{ color: '#3182ce', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 700 }}>Task Manager</h2>
        <form onSubmit={editId ? handleSaveEdit : handleAddTask} style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="Task description"
            value={editId ? editText : text}
            onChange={e => editId ? setEditText(e.target.value) : setText(e.target.value)}
            style={{ padding: '0.5rem 1rem', borderRadius: '1rem', border: '1px solid #cbd5e1', width: '40%', minWidth: 120 , color: '#222', background: '#f8fafc' }}
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
              padding: '0.5rem 1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(49,130,206,0.10)',
              transition: 'background 0.2s',
            }}
          >
            {editId ? 'Save' : 'Add'}
          </button>
          {error && <span style={{ color: 'red', fontSize: '0.9rem' }}>{error}</span>}
        </form>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
          {tasks.map(task => (
            <li
              key={task.id}
              style={{
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
                borderRadius: '1rem',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(49,130,206,0.06)',
                listStyleType: 'disc',
              }}
            >
              <span style={{ fontWeight: 500, color: '#2d3748' }}>{task.text}</span>
              <div>
                <button onClick={() => handleEdit(task.id)} style={{ marginRight: '0.5rem', background: '#fff', border: '1px solid #3182ce', borderRadius: '1rem', padding: '0.3rem 1rem', color: '#3182ce', fontWeight: 500, cursor: 'pointer' }}>Edit</button>
                <button onClick={() => handleDelete(task.id)} style={{ background: '#fff', border: '1px solid #e53e3e', borderRadius: '1rem', padding: '0.3rem 1rem', color: '#e53e3e', fontWeight: 500, cursor: 'pointer' }}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksPage;
