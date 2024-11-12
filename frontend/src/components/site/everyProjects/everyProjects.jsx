import { Link } from "react-router-dom";
import useEveryProjects from "../../../hooks/site/useEveryProjects";

function EveryProjects() {
  const { projects, isLoading, error } = useEveryProjects();

  if (isLoading) {
    return <div className="text-white">Carregando projetos...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-[1000px] mx-auto mt-6 md:mt-14 px-4 md:px-0">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/projeto/${project.id}`}
          className="md:flex md:justify-between cursor-pointer md:items-center mt-10 w-full"
        >
          <div className="md:w-[50%] md:mr-[30px] mt-10 md:mt-0">
            {project.image && (
              <img
                className="h-[250px] w-full"
                src={project.image}
                alt={project.title}
              />
            )}
          </div>
          <div className="text-white md:w-[50%] md:ml-[30px] mt-5 md:mt-0">
            <h2 className="text-3xl overflow-hidden">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
            <Link
              to={`/projeto/${project.id}`}
              className="h-[40px] w-[100px] text-[14px] text-white bg-[#af9155] mt-6 cursor-pointer flex justify-center items-center"
            >
              Ver mais
            </Link>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default EveryProjects;
