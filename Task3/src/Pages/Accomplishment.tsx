

const Accomplishment = () => {
  
  let accomplishedToday = 0;
  type Task = {
    completed: boolean;
    completedDate?: string;
    // add other properties if needed
  };

  try {
    const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
    const today = new Date().toISOString().slice(0, 10);
    accomplishedToday = tasks.filter((task: Task) => task.completed && task.completedDate && task.completedDate.slice(0, 10) === today).length;
  } catch {
    accomplishedToday = 0;
  }
  return (
    <div style={{ maxWidth: 700, margin: '3rem auto', padding: '2rem', background: '#e0eafc', borderRadius: '1.5rem', boxShadow: '0 2px 16px rgba(49,130,206,0.08)' }}>
      {accomplishedToday > 0 ? (
        <p style={{ fontSize: '1.15rem', color: '#2d3748', lineHeight: 1.7, textAlign: 'center' }}>
          🎉 Congratulations! You have accomplished <span style={{ color: '#38a169', fontWeight: 600 }}>{accomplishedToday}</span> {accomplishedToday === 1 ? 'task' : 'tasks'} today.<br/>
          <span style={{ color: '#3182ce', fontWeight: 500 }}>Keep up the great work and remember to plan for tomorrow. Consistency is the key to success!</span>
        </p>
      ) : (
        <p style={{ fontSize: '1.15rem', color: '#2d3748', lineHeight: 1.7, textAlign: 'center' }}>
          You haven't completed any tasks today yet. Stay motivated and try to finish at least one task. Every step counts!
        </p>
      )}
    </div>
  )
}

export default Accomplishment
