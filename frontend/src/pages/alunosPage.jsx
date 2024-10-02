import { useEffect, useState } from 'react'

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
      <div>
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
