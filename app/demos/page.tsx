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
    try {
        const res: ResponseData = await fetcher('http://localhost:3000/api/demos',
            {
                method: "GET",
                cache: "no-store"
            });
        return JSON.parse(res.data);
    } catch {
        return [];
    }
}

export default async function DemosPage() {
    const data: Array<Project> = await getData();
    console.log(typeof data)
    return (
        <div className="lg:w-1/2 border-white border-solid mx-8 my-4 flex flex-col items-start justify-evenly text-blue-400 text-2xl font-bold">
            {data && data.map((project, index) => {
                return (
                    <ProjectLink key={index} name={project.name} displayName={project.displayName} directory="demos">
                        <p className="text-base font-normal text-gray-700 dark:text-gray-300" style={{whiteSpace: "pre-wrap"}}>
                            {project.description}
                        </p>
                    </ProjectLink>
                )
            })}
        </div>
    )
}