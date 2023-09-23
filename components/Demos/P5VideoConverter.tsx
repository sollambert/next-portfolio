'use client'

import { useEffect } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

export default function P5VideoConverter() {
    let density = "    _.,-=+:;!?$W#@Ñ"

    function sketch(p5: any) {
        let video: any;

        p5.preload = () => {
            video = p5.createVideo(['../assets/porcorosso.webm']);
        }

        p5.setup = () => {
            video.loadPixels();
            p5.noCanvas();
            video.autoplay();
            video.loop();
            video.size(170, 96)
            // video.style("width: fit-content(100em); height: fit-content(100em)");
            video.volume(0);
        }

        p5.draw = () => {
            video.loadPixels();
            let asciiImage: any = "";
            for (let j = 0; j < video.height; j++) {
                let newLine = ''
                for (let i = 0; i < video.width; i++) {
                    const pixelIndex = (i + j * video.width) * 4;
                    const r = video.pixels[pixelIndex + 0];
                    const g = video.pixels[pixelIndex + 1];
                    const b = video.pixels[pixelIndex + 2];
                    const avg = ((r + g + b) / 3);
                    const charIndex = p5.floor(p5.map(avg, 0, 255, 0, density.length));
                    const c = density.charAt(charIndex);
                    newLine += c;
                }
                asciiImage += newLine + '<br/>';
            }
            const asciiElement = document.getElementById("ascii-pre");
            if (asciiElement) {
                asciiElement.innerHTML = asciiImage;
            }
        }
    }

    const getMediaQueryPreference = () => {
        const mediaQuery = "(prefers-color-scheme: dark)";
        const mql = window.matchMedia(mediaQuery);
        const hasPreference = typeof mql.matches === "boolean";
        if (hasPreference) {
            return mql.matches ? "dark" : "light";
        }
    };

    useEffect(() => {
        let mode = getMediaQueryPreference();
        if (mode === "light") {
            density = "Ñ@#W$?!;:+=-,._    ";
        }
    }, []);

    return (
        <div className="self-center">
            {window != undefined &&     
                <ReactP5Wrapper sketch={sketch} />
            }
            <pre id="ascii-pre" className="text-xxxs sm:text-xxs lg:text-xs xl:text-sm"  style={{lineHeight: ".5em"}}>
            </pre>
        </div>
    )
}