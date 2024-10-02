import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Aluno from './pages/alunosPage';
import './App.css';
import HomePage from './pages/homePage';
import NotFound from './pages/notFound';
import NavBar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/> 
        <Route path="/alunos" element={<Aluno />}/> 
        <Route path={"*"} element={<NotFound />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
