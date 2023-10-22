"use-client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";


interface WhyUsPointProps {
    title: string;
    description: string;
    number: string;
}

const WhyUsPoint: React.FC<WhyUsPointProps> = ({
    title,
    description,
    number,
}) => {
    const TextRef = useRef<HTMLDivElement>(null);
    const HeadingRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        let tl2 = gsap.fromTo(TextRef.current,{opacity: 0}, {
            opacity: 1,
            scrollTrigger: {
                trigger: TextRef.current,
                start: "top 80%",
                end: "top 40%",
                scrub: true,
                invalidateOnRefresh: true,
            }
        });
        let tl3 = gsap.fromTo(HeadingRef.current,{opacity: 0}, {
            opacity: 1,
            scrollTrigger: {
                trigger: TextRef.current,
                start: "top 80%",
                end: "top 40%",
                scrub: true,
                invalidateOnRefresh: true,
            }
        });
        
    },[]);
    return ( 
            <div className="flex flex-row m-8 h-[90vh]">
                <div className="flex flex-col h-full justify-between">
                    <h1 className="text-7xl ">{number}</h1>
                    <h2 className="max-w-[90%] pb-28 ml-2 text-8xl">{title}</h2>
                </div>
                <div className=" flex flex-col max-w-[50%] justify-between pb-28 pt-16 h-full">
                    <div className="flex flex-row gap-8 justify-center ">
                        <div className="flex flex-col gap-4">
                            <Image className="items-center" src="/graph.svg" width={50} height={50} alt={""} />
                            <p className="max-w-[20vw]">The probability of dying between the exact ages of 15 and 50 in cameroon is estimated at 155 ‰ for women and 185 ‰</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image src="/person.svg" width={50} height={50} alt={""} />
                            <p className="max-w-[20vw]">La probabilité de décéder entre les âges exacts 15 et 50 ans est estimée à 155 ‰ pour les femmes et 185 ‰</p>
                        </div>
                    </div>
                    <p className="text-3xl">{description}</p>
                </div>
            </div>
    );
}

export default WhyUsPoint;