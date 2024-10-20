import React from "react";

const StudentsTable = ({tableData}) => {
    return (
        <table className="mx-8 mt-2 mb-8 w-[90vw] table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="flex-1 px-4 py-2 border border-gray-300 font-medium">Nome</th>
            <th className="flex-1 px-4 py-2 border border-gray-300 font-medium">Email</th>
            <th className="flex-1 px-4 py-2 border border-gray-300 font-medium">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((aluno) => (
            <tr key={aluno.rm}>
              <td className="px-4 py-2 border border-gray-300">
                {aluno.nome}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {aluno.email}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {aluno.telefone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default StudentsTable;
