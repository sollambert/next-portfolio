import ClientMarkdown from "@/components/ClientMarkdown";

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const url = `https://raw.githubusercontent.com/sollambert/${params.slug}/main/README.md`

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

    // ts-expect-error Async Server Component
    return (
        <>
            <div className="m-10">
                {extraInfo(params.slug)}
                {/* @ts-expect-error Async Server Component */}
                <ClientMarkdown  url={url} className="p-10 rounded" />
            </div>
        </>
    );
}