'use-client';

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


interface JoinUsPointProps {
    title: string;
    description: string;
}

const JoinUsPoint: React.FC<JoinUsPointProps> = ({
    title,
    description,
}) => {
    const TextRef = useRef<HTMLDivElement>(null);
    const HeadingRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
         gsap.fromTo(TextRef.current,{opacity: 0}, {
            opacity: 1,
            scrollTrigger: {
                trigger: TextRef.current,
                start: "top 80%",
                end: "top 40%",
                scrub: true,
                invalidateOnRefresh: true,
            }
        });
         gsap.fromTo(HeadingRef.current,{opacity: 0}, {
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
        <div className="gap-5 flex flex-col">
            <h2 ref={HeadingRef} className="opacity-0 text-4xl">{title}</h2>
            <div  className="overflow-hidden" >
                <div ref={TextRef} className="opacity-0 lg:max-w-[40vw] overflow-hidden lg:text-2xl">{description}</div>
            </div>
        </div>
    );
}
 
export default JoinUsPoint;