import { useEffect, useState } from 'react'
import { Server } from 'lucide-react';
import '../App.css'
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';

function Aluno() {
  const [alunos, setAlunos] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8089/alunos')
    .then(response => response.json())
    .then(data => setAlunos(data))
    .catch(error => console.error('Erro ao buscar alunos:', error));
  }, []);

  return (
    <>
      <NavBar />
      <div>
        <a>
          <Link to={"/"}>Voltar</Link>
        </a>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.rm}>
            {aluno.nome} - {aluno.email} - {aluno.telefone}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Aluno
