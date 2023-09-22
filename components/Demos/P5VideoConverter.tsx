'use client'

import { ReactP5Wrapper } from "react-p5-wrapper";

export default function P5VideoConverter() {
    const density = "    _.,-=+:;!?$W#@Ñ"

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
                    // console.log(`${r} ${g} ${b}`)
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

    return (
        <div className="self-center">
            {window != undefined &&     
                <ReactP5Wrapper sketch={sketch} />
            }
            <pre id="ascii-pre" className="xs: text-xxs sm:text-xs lg:text-sm xl:text-base"  style={{lineHeight: ".5em"}}>
            </pre>
        </div>
    )
}