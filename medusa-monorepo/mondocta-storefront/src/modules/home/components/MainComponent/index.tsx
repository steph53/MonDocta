"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FeatureCarousel from "../FeatureCarousel";
import FeaturesContainer from "../FeaturesContainer";
import JoinUs from "../JoinUs";
import Hero from "../hero";
import WhyUs from "../why-us";


const MainComponent = () => {
    gsap.registerPlugin(ScrollTrigger);
    const navGradientRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const joinUsRef2 = useRef<HTMLDivElement>(null);
    const whyUsRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const blue = gsap.context(() => {
            gsap.to(".nav-gradient", {
                backgroundImage: "linear-gradient(#ffffff 12.5%, rgba(255, 255, 255, 0)",
                scrollTrigger: {
                    trigger: whyUsRef.current,
                    start: "top top",
                    end: "top -40%",
                    scrub: true,
                    invalidateOnRefresh: true,
                    },
                    duration: 1,
            });
            gsap.to(".nav-gradient", {
                backgroundImage: "linear-gradient(#badaf7 25%, rgba(255, 255, 255, 0)",
                scrollTrigger: {
                    trigger: joinUsRef2.current,
                    start: "top top",
                    end: "top -40%",
                    scrub: true,
                    invalidateOnRefresh: true,
                    },
                    duration: 1,
            });
            let mm = gsap.matchMedia();
            mm.add("(max-width: 1024px)", () => {
                gsap.to(".nav-gradient", {
                    backgroundImage: "linear-gradient(#badaf700 12.5%, rgba(255, 255, 255, 0)",
                    scrollTrigger: {
                        trigger: carouselRef.current,
                        start: "top 5%",
                        end: "top top",
                        scrub: true,
                        invalidateOnRefresh: true,
                        },
                        duration: 1,
                });
            },navGradientRef);       
        });
        return() => blue.revert();
    },[]);

    return ( 
        <div className="relative">
            <div ref={navGradientRef} className="sticky z-40 overflow-visible top-0 h-[1px] w-full">
                <div  className="nav-gradient h-16 w-full"></div>
            </div>
            <div className="">
                <Hero />
            </div>
            <div ref={whyUsRef}>
                <WhyUs />
            </div>
            <div>
                <FeaturesContainer/>
            </div>
            <div ref={carouselRef}>
                <FeatureCarousel />
            </div>
            <div ref={joinUsRef2}>
                <JoinUs />
            </div>
        </div>
     );
}
 
export default MainComponent;