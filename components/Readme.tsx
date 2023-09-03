import ClientMarkdown from "./ClientMarkdown";
import { Suspense } from "react";
import BounceLoader from "./BounceLoader";

type Props = {
    url: string
}

export default function Readme(props: Props) {
    return (
        <Suspense fallback={<BounceLoader />}>
        <ClientMarkdown  url={props.url} className="p-10 rounded" />
        </Suspense>
    );
}