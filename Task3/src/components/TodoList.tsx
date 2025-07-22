import React from 'react';

interface Task {
  id: number;
  text: string;
}

interface TodoListProps {
  tasks: Task[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
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
  );
};

export default TodoList;

