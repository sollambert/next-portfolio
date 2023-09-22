import { NextResponse } from "next/server"
import path from 'path';
import {promises as fs} from 'fs';

export async function GET() {
    const directory = path.join(process.cwd(), "json")
    const data = await fs.readFile(directory + "/demos.json", "utf8");
    return NextResponse.json({message: "Projects GET success", data});
}