import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import NotFoundPage from './pages/notFoundPage';
import NavBar from './components/navbar';
import StudentPage from './pages/studentPage';
import './App.css';
import EventsPage from './pages/eventsPage';

const App = () => {
  return(
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/> 
        <Route path="/alunos" element={<StudentPage />}/> 
        <Route path="/eventos" element={<EventsPage />}/> 
        <Route path={"*"} element={<NotFoundPage />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;
