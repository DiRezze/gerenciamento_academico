import { useEffect, useState } from 'react';
import axios from 'axios';
import { SquarePlus, ArrowUpWideNarrow } from 'lucide-react';
import CreateStudentForm from '../components/forms/createStudent';
import SearchBar from '../components/searchBar';

function Aluno() {
  const [alunos, setAlunos] = useState([]);
  const [createVisible, setCreateVisible] = useState(false);

  useEffect(()=>{
    fetch('http://localhost:8089/students')
    .then(response => response.json())
    .then(data => setAlunos(data))
    .catch(error => console.error('Erro ao buscar alunos:', error));
  }, []);

  const createStudent = async (studentData) => {
    try {
        const response = await axios.post('http://localhost:8089/students', studentData);
        console.log(response.data);
    } catch (error) {
        console.error("Erro ao criar aluno:", error);
    }
};

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='my-2'>Lista de Alunos</h1>
        <div className='flex flex-row gap-2 justify-start w-[90vw]'>
          <SearchBar />
          <button onClick={()=>setCreateVisible(true)} className='bg-blue-500 flex items-center justify-start p-2 text-white rounded-md transform transition-transform duration-200 ease-in-out hover:scale-[1.02] active:scale-95'>
            <SquarePlus className='px-1' />
            <span className='font-medium'>Cadastrar alunos</span>
          </button>
          <button onClick={()=>setCreateVisible(true)} className='bg-blue-500 flex items-center justify-start p-2 text-white rounded-md transform transition-transform duration-200 ease-in-out hover:scale-[1.02] active:scale-95'>
            <ArrowUpWideNarrow className="px=1"/>
            <span className='font-medium'>Filtrar</span>
          </button>
        </div>
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
      <CreateStudentForm open={createVisible} setOpen={setCreateVisible} />
    </div>
    </>
  )
}

export default Aluno
