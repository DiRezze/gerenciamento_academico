import { useEffect, useState } from "react";
import { SquarePlus, ArrowUpWideNarrow, RefreshCcw } from "lucide-react";
import CreateStudentForm from "../components/forms/createStudent";
import SearchBar from "../components/searchBar";
import ButtonWithIcon from "../components/buttonIcon";
import StudentsTable from "../components/tables/studentsTable";

const StudentPage = () => {
  const [alunos, setAlunos] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [createVisible, setCreateVisible] = useState(false);

  const fetchStudents = () => {
    setIsRefreshing(true);
    fetch("http://localhost:8089/students")
      .then((response) => response.json())
      .then((data) => {
        setAlunos(data);
        setIsRefreshing(false);
      })
      .catch((err) => {
        console.log("Erro ao recarregar: ", err);
        setIsRefreshing(false);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleRefresh = () => {
    fetchStudents();
  };

  return (
    <>
      <div className="flex flex-col items-center min-h-[75%]">
        <h1 className="my-4 font-medium">Lista de Alunos</h1>

        <div className="flex flex-row gap-2 justify-start w-[90vw]">
          <SearchBar />
          <ButtonWithIcon
            text={"Cadastrar"}
            iconComponent={<SquarePlus />}
            onClick={() => setCreateVisible(true)}
          />
          <ButtonWithIcon
            text={"Ordenar"}
            iconComponent={<ArrowUpWideNarrow />}
          />
        </div>

        {isRefreshing ? (
          <div className="flex flex-row items-center justify-center mt-2">
            <RefreshCcw className="m-2 hover:scale-[1.02] refreshing-icon" />
            <span>Carregando</span>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center mt-2">
            <span className="text-gray-200">
              {alunos.length > 0
                ? `Foram encontrados ${alunos.length} alunos.`
                : "Tentar buscar a lista de alunos novamente:"}
            </span>
            <RefreshCcw
              className="m-2 hover:scale-[1.02] refresh-spin-icon"
              onClick={handleRefresh}
            />
          </div>
        )}
        <StudentsTable tableData={alunos} />

        <CreateStudentForm
          open={createVisible}
          setOpen={setCreateVisible}
          callback={handleRefresh}
        />
      </div>
    </>
  );
};

export default StudentPage;
