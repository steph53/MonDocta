"use-client";

import { useRef, useEffect } from "react";
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
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        var timeline = gsap.context(() => {
            let tl2 = gsap.fromTo(TextRef.current,{opacity: 0}, {
                opacity: 1,
                scrollTrigger: {
                    trigger: TextRef.current,
                    start: "top 80%",
                    end: "top 70%",
                    onLeave: () => gsap.to(HeadingRef.current, {opacity: 0}),
                    onEnterBack: () => gsap.to(HeadingRef.current, {opacity: 1}),
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
        });
        return() => timeline.revert();
    },[]);
    return ( 
            <div ref={TextRef} className="flex flex-col gap-16 sm:justify-around lg:justify-normal lg:flex-row mx-8 h-[90vh] opacity-0">
                <div className="flex flex-col lg:h-full sm:justify-between pt-8 sm:pt-4  sm:gap-8 md:gap-10">
                    <h1 className="hidden sm:block text-3xl sm:text-5xl lg:text-7xl ">{number}</h1>
                    <h2 className="max-w-[90%] lg:pb-28 ml-2 text-2xl sm:text-3xl md:text-5xl lg:text-8xl">{title}</h2>
                </div>
                <div className=" flex flex-col lg:max-w-[50%] justify-around lg:justify-between gap-6 lg:pb-28 lg:pt-16 h-[60vh] lg:h-full">
                    <div className="flex flex-col lg:flex-row gap-8 justify-center ">
                        <div className="flex flex-col gap-2 sm:gap-4">
                            <Image className="items-center w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] " src="/graph.svg" width={50} height={50} alt={""} />
                            <p className="lg:max-w-[20vw] md:text-xl lg:text">The probability of dying between the exact ages of 15 and 50 in cameroon is estimated at 155 ‰ for women and 185 ‰</p>
                        </div>
                        <div className="flex flex-col gap-2 sm:gap-4">
                            <Image src="/person.svg" className="w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] " width={50} height={50} alt={""} />
                            <p className="lg:max-w-[20vw] md:text-xl lg:text">La probabilité de décéder entre les âges exacts 15 et 50 ans est estimée à 155 ‰ pour les femmes et 185 ‰</p>
                        </div>
                    </div>
                    <p className="text-md sm:text-xl sm:pb-5 lg:text-3xl">{description}</p>
                </div>
            </div>
    );
}

export default WhyUsPoint;