'use client'

import { FormEvent, useEffect, useState } from "react";

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

    let [message, setMessage] = useState("");

    useEffect(() => {
        setSudoku(props.sudoku);
    }, []);

    const inputHandler = (x: number, y: number, e: any) => {
        let value = e.nativeEvent.data;
        if (!isNaN(Number(value)) && value != "0") {
            let tempSudoku = [...sudoku];
            tempSudoku[y][x] = value ? value : '';
            setSudoku(tempSudoku);
        }
    }

    const keyDownHandler = (x: number, y: number, key: string) => {
        let element = undefined;
        if (key == "w" || key == "ArrowUp") {
            element = document.getElementById(`su-${x}-${y-1}`);
        }
        if (key == "a" || key == "ArrowLeft") {
            element = document.getElementById(`su-${x-1}-${y}`);
        }
        if (key == "s" || key == "ArrowDown") {
            element = document.getElementById(`su-${x}-${y+1}`);
        }
        if (key == "d" || key == "ArrowRight") {
            element = document.getElementById(`su-${x+1}-${y}`);
        }
        if (key == "Backspace" || key == "Delete") {
            let tempSudoku = [...sudoku];
            tempSudoku[y][x] = '';
            setSudoku(tempSudoku);
        }
        if (element) {
            element.focus();
        }
    }

    const validateSudoku = () => {
        let success = true;
        for (let y in sudoku) {
            let rowSum = 0;
            let colSum = 0;
            for (let x in sudoku[y]) {
                rowSum += Number(sudoku[y][x]);
                colSum += Number(sudoku[x][y]);
            }
            if (rowSum != 45 || colSum != 45) {
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
                                return <input id={`su-${x}-${y}`} className={rowBorder + colBorder + "w-6 h-6 mx-0.5 text-center md:w-8 md:m-1 md:h-8 caret-transparent"} key={x} value={value} onChange={() => {}} onKeyDown={e => keyDownHandler(x, y, e.key)} onInput={e => inputHandler(x, y, e)} />
                            })}
                        </div>)
                })}
            </div>
            <div className="flex flex-row items-center">
                <button
                    className="m-1 bg-white dark:bg-black hover:bg-stone-200 dark:hover:bg-stone-700 text-gray-800 dark:text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={validateSudoku}
                >Validate</button>
                <p className="m-2 font-bold">{message}</p>
            </div>
        </>
    )
}