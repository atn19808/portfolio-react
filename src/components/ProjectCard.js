import { ProjectList } from "../data/ProjectData";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <div
          key={index}
          className="mb-16  grid grid-cols-[1fr] gap-8 border-b-[1px_solid_black] pb-8 lg:grid-cols-[1fr_1fr] lg:border-b-0 lg:pb-0"
        >
          <div className="justify-self-center rounded bg-indigo-700 p-1">
            <img className="h-auto rounded" src={list.img} alt={list.name} />
          </div>
          <div className="flex flex-col items-center justify-center lg:mt-4 lg:items-start">
            <h4 className="text-xl font-medium">{list.title}</h4>
            <p className="mb-4 mt-2 max-w-sm text-center font-normal text-gray-900 lg:text-start">
              {list.description}
            </p>
            <div className="mb-1 flex items-center">
              <span className="mr-2 text-base font-medium">Tech Stack -</span>
              <span className="text-sm font-normal">{list.tech_stack}</span>
            </div>
            <div className="flex h-20 items-center">
              <a
                className="btn btn2 SecondarBtn"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="btn PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo ➜
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
