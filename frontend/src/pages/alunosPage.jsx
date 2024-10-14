import { useEffect, useState } from 'react'

function Aluno() {
  const [alunos, setAlunos] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8089/students')
    .then(response => response.json())
    .then(data => setAlunos(data))
    .catch(error => console.error('Erro ao buscar alunos:', error));
  }, []);

  return (
    <>
      <div className='flex flex-col items-center'>
      <h1 className='my-2'>Lista de Alunos</h1>
      <table className="m-8 w-[90vw] table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.rm}>
              <td className="px-4 py-2 border border-gray-300">
                {aluno.nome}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {aluno.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Aluno
