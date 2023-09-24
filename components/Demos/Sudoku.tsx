import SudokuBoard from "./SudokuBoard";

export default async function Sudoku() {

    type ResponseData = {
        message: string,
        data: string
    }

    const fetcher = (url: string, headers: Object) => fetch(url, headers).then(res => res.json());
    
    async function getData() {
        try {
            const res: ResponseData = await fetcher(`http://localhost:${process.env.API_PORT}/api/sudoku`,
            {
                method: "GET",
                cache: "no-store"
            });
            return JSON.parse(res.data);
        } catch {
            return [];
        }
    }

    let data = await getData();
    let random = Math.floor(Math.random() * data.length)

    return (
        <>
            <SudokuBoard sudoku={data[random]}/>
        </>
    )
}