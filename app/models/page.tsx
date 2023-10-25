import ProjectLink from "@/components/ProjectLink";

type ResponseData = {
    message: string,
    data: string
}

type Model = {
    name: string,
    displayName: string,
    description: string,
    meshUrl: string,
    textureUrl: string
}

const fetcher = (url: string, headers: Object) => fetch(url, headers).then(res => res.json());

async function getData() {
    try {
        const res: ResponseData = await fetcher(`http://localhost:${process.env.API_PORT}/api/models`,
        {
            method: "GET",
            cache: "no-store"
        });
        return JSON.parse(res.data);
    } catch {
        return [];
    }
}

export default async function modelsPage() {
    const data: Array<Model> = await getData();
    console.log(typeof data)
    return (
        <div className="
            border-white border-solid
            mx-8 my-4
            lg:w-1/2
            flex flex-col items-start justify-evenly
            text-blue-400 text-2xl font-bold
        ">
            {data && data.map((model, index) => {
                return (
                    <ProjectLink key={index} name={model.name} displayName={model.displayName} directory="models">
                        <p className="text-base font-normal text-gray-700 dark:text-gray-300" style={{whiteSpace: "pre-wrap"}}>
                            {model.description}
                        </p>
                    </ProjectLink>
                )
            })}
        </div>
    )
}