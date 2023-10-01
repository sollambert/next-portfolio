'use client'

import Image from "next/image";
import { useState } from "react";
import HamburgerLink from "./HamburgerLink";
import Link from "next/link";

export default function HamburgerMenu() {

    const [open, setOpen] = useState(false);

    function clickHandler() {
        setOpen(!open);
    }

    return (
        <>
            {open ?
                <>
                    <div className={`fixed z-10 top-0 inset-0 h-screen w-screen opacity-50 bg-stone-600 dark:bg-black`} />
                    <div className={`px-4 py-4 fixed flex flex-col justify-between z-20 top-0 inset-0 w-min h-full bg-stone-100 dark:bg-black`}>
                        <div>
                            <HamburgerLink
                                display="Projects"
                                url="/projects"
                                onClick={clickHandler} />
                            <HamburgerLink
                                display="Demos"
                                url="/demos"
                                onClick={clickHandler} />
                            <HamburgerLink
                                display="About"
                                url="/about"
                                onClick={clickHandler} />
                        </div>
                        <div className="mx-2 flex flex-row justify-between">
                            <Link href="/">
                                <Image
                                    src="/icons/home.svg"
                                    alt="Home button"
                                    className="dark:invert md:hidden"
                                    width={32}
                                    height={32}
                                    priority
                                    onClick={clickHandler} />
                            </Link>
                            <Image
                                src="/icons/close.svg"
                                alt="Close button"
                                className="dark:invert md:hidden"
                                width={32}
                                height={32}
                                priority
                                onClick={clickHandler} />
                        </div>
                    </div>
                </>
                :
                <Image
                    src="/icons/menu-black.svg"
                    alt="Hamburger menu"
                    className="dark:invert md:hidden"
                    width={32}
                    height={32}
                    priority
                    onClick={clickHandler}
                />}
        </>
    )
}