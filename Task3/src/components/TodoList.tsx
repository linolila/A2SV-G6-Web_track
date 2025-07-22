
import React from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  startTime: string;
  endTime: string;
  extended: boolean;
}

interface TodoListProps {
  tasks: Task[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onExtend: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onEdit, onDelete, onToggleComplete, onExtend }) => {
  return (
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
          <div>
            <input type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task.id)} />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none', marginLeft: '0.5rem', fontWeight: 500, color: '#2d3748' }}>{task.text}</span>
            <div style={{ fontSize: '0.9rem', color: '#4a5568' }}>
              {task.startTime && task.endTime ? (
                <>
                  <span>Start: {task.startTime.replace('T', ' ')}</span>
                  <span style={{ marginLeft: '1rem' }}>End: {task.endTime.replace('T', ' ')}</span>
                </>
              ) : ''}
            </div>
          </div>
          <div>
            <button onClick={() => onEdit(task.id)} style={{ marginRight: '0.5rem', background: '#fff', border: '1px solid #3182ce', borderRadius: '1rem', padding: '0.3rem 1rem', color: '#3182ce', fontWeight: 500, cursor: 'pointer' }}>Edit</button>
            <button onClick={() => onDelete(task.id)} style={{ marginRight: '0.5rem', background: '#fff', border: '1px solid #e53e3e', borderRadius: '1rem', padding: '0.3rem 1rem', color: '#e53e3e', fontWeight: 500, cursor: 'pointer' }}>Delete</button>
            {!task.completed && !task.extended && new Date(task.endTime) < new Date() && (
              <button onClick={() => onExtend(task.id)} style={{ background: '#fff', border: '1px solid #fbbf24', borderRadius: '1rem', padding: '0.3rem 1rem', color: '#b7791f', fontWeight: 500, cursor: 'pointer' }}>Extend</button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
