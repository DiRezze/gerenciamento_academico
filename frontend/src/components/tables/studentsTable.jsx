import React from "react";
import { UserRoundX } from 'lucide-react';

const StudentsTable = ({ tableData }) => {
  if (tableData.lenght) {
    return (
      <table className="mx-8 mt-2 mb-8 w-[90vw] table-auto border-collapse border min-h-full border-gray-300">
        <thead>
          <tr>
            <th className="flex-1 px-4 py-2 border border-gray-300 font-medium">
              Nome
            </th>
            <th className="flex-1 px-4 py-2 border border-gray-300 font-medium">
              Email
            </th>
            <th className="flex-1 px-4 py-2 border border-gray-300 font-medium">
              Telefone
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((aluno) => (
            <tr key={aluno.rm}>
              <td className="px-4 py-2 border border-gray-300">{aluno.nome}</td>
              <td className="px-4 py-2 border border-gray-300">{aluno.email}</td>
              <td className="px-4 py-2 border border-gray-300">
                {aluno.telefone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return(
    <div className="flex flex-col items-center justify-center m-4 flex-grow">
      <UserRoundX size={64}/>
      <span>Não foi possível encontrar registros de alunos.</span>
    </div>
  );
};

export default StudentsTable;
