import React from "react";

const StudentsTable = ({tableData}) => {
    return (
        <table className="m-8 w-[90vw] table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default StudentsTable;
