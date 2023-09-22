import ProjectLink from "@/components/ProjectLink";

type ResponseData = {
    message: string,
    data: string
}

type Project = {
    name: string,
    displayName: string,
    description: string
}

const fetcher = (url: string, headers: Object) => fetch(url, headers).then(res => res.json());

async function getData() {
    const res: ResponseData = await fetcher('http://localhost:3000/api/projects',
        {
            method: "GET",
            cache: "no-store"
        });
    return JSON.parse(res.data);
}

export default async function ProjectsPage() {
    const data: Array<Project> = await getData();
    console.log(typeof data)
    return (
        <div className="border-white border-solid m-8 flex flex-col items-start justify-evenly text-blue-400 text-2xl font-bold">
            {data && data.map(project => {
                return (
                    <ProjectLink name={project.name} displayName={project.displayName}>
                        <p className="text-base text-gray-300">
                            {project.description}
                        </p>
                    </ProjectLink>
                )
            })}
        </div>
    )
}