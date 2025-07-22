
import './App.css';

import HomePage from './Pages/HomePage';
import Accomplishment from './Pages/Accomplishment';
import TasksPage from './Pages/TasksPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accomplishment" element={<Accomplishment />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </>
  );
}

export default App;
