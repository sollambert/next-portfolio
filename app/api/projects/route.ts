import { NextResponse } from "next/server"
import path from 'path';
import {promises as fs} from 'fs';

type ResponseData = {
    message: string,
    projects?: Array<Project>
}

type Project = {
    name: string,
    displayName: string,
    description: string
}

export async function GET() {
        console.log("I AM IN THE HANDLER")
        const directory = path.join(process.cwd(), "json")
        const data = await fs.readFile(directory + "/projects.json", "utf8");
        // console.log(data);
        return NextResponse.json({message: "Projects GET success", data});
}