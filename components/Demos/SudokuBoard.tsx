'use client'

import { useEffect, useState } from "react";

type Props = {
    sudoku: Array<Array<string>>
}

export default function SudokuBoard(props: Props) {

    let [sudoku, setSudoku] = useState([
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','','']
    ]);

    useEffect(() => {
        setSudoku(props.sudoku);
    }, []);

    let [message, setMessage] = useState("");

    useEffect(() => {
        setTimeout(() => {setMessage("")}, 5000)
    }, [message]);

    const handleChange = (x: number, y: number, value: string) => {
        if (!isNaN(Number(value))) {
            let tempSudoku = [...sudoku];
            tempSudoku[y][x] = value ? value : '';
            setSudoku(tempSudoku);
        } else if (value == "Backspace" || value == "Delete") {
            let tempSudoku = [...sudoku];
            tempSudoku[y][x] = '';
            setSudoku(tempSudoku);
        }
    }

    const validateSudoku = () => {
        let success = true;
        for (let y in sudoku) {
            let sum = 0;
            for (let x in sudoku[y]) {
                sum += Number(sudoku[y][x]);
            }
            if (sum != 45) {
                success = false;
                break;
            }
        }
        if (success) {
            setMessage("Success! Sudoku is valid!");
        } else {
            setMessage("That doesn't seem right...");
        }
    }
    return (
        <>
            <div className="text-xl flex flex-col">
                {sudoku.map((row, y) => {
                    let rowBorder = "border-2 dark:border-black "
                    if ((y + 1) % 3 == 0) {
                        rowBorder += "border-b-black dark:border-b-white ";
                    } else if ((y + 1) % 3 == 1) {
                        rowBorder += "border-t-black dark:border-t-white ";
                    }
                    return (
                        <div key={y} className="">
                            {row.map((value, x) => {
                                let colBorder = "";
                                if ((x + 1) % 3 == 0) {
                                    colBorder = "border-r-black dark:border-r-white ";
                                } else if ((x + 1) % 3 == 1) {
                                    colBorder = "border-l-black dark:border-l-white ";
                                }
                                return <input readOnly className={rowBorder + colBorder + "w-8 m-1 text-center"} key={x} value={value} onKeyDown={e => handleChange(x, y, e.key)} />
                            })}
                        </div>)
                })}
            </div>
            <div className="flex flex-row items-center">
                <button className="m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={validateSudoku}>Validate</button>
                <p className="m-2 font-bold">{message}</p>
            </div>
        </>
    )
}