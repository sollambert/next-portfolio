import ClientMarkdown from "@/components/ClientMarkdown";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const url = `https://raw.githubusercontent.com/sollambert/${params.slug}/main/README.md`

    const getMarkdown = async (url: string) => {
        await new Promise((resolve) => {
            setTimeout(() => resolve(1), 1000) 
        })
        let response = await fetch(url, { cache: "no-cache" });
        return response.text();
    }

    const markdown = await getMarkdown(url);

    const extraInfo = (slug: string) => {
        switch (slug) {
            case 'cloud-quest':
                return (
                    <>
                        CloudQuest
                    </>
                )
            case 'dnd-buddy':
                return (
                    <>
                        D&D-Buddy
                    </>
                )
            case 'omi-live':
                return (
                    <>
                        Omi-Live
                    </>
                )
            default:
                <></>
        }
    }

    return (
        <>
            <div className="m-10">
                {extraInfo(params.slug)}
                <ClientMarkdown className="p-10 rounded" source={markdown} />
            </div>
        </>
    );
}