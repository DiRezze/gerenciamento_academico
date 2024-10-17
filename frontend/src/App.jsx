import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import NotFound from './pages/notFound';
import NavBar from './components/navbar';
import StudentPage from './pages/studentPage';
import './App.css';

const App = () => {
  return(
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/> 
        <Route path="/alunos" element={<StudentPage />}/> 
        <Route path={"*"} element={<NotFound />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
