import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Aluno from './pages/alunosPage';
import './App.css';
import HomePage from './pages/homePage';
import NotFound from './pages/notFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/> 
        <Route path="/alunos" element={<Aluno />}/> 
        <Route path={"*"} element={<NotFound />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
