"use client";

import Spacer from "@modules/common/components/spacer";
import Container from "../Container";
import {BsArrowRight} from "react-icons/bs";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import JoinUsPoint from "./components/JoinUsPoint";


const JoinUs = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const blue = gsap.context(() => {
        gsap.fromTo(".box", {
            backgroundColor:"#ffffff",
            
        },{
            backgroundColor:"#badaf7",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "top -40%",
                scrub: true,
                invalidateOnRefresh: true,
                },
                duration: 1,
        });
    });
    return() => blue.revert();
    },[]);
    return (
        <div ref={containerRef} className=" box h-fit lg:h-fit ">
            <Container>
                <Spacer height="l"/>
                <div  className="flex  lg:flex-row flex-col justify-between gap-8">
                    <div className="lg:sticky lg:top-48 h-fit">
                        <h1 className="text-3xl lg:text-8xl lg:w-[50vw]">Are you a medical personnel?, Join <span className="text-[#074668]">MonDocta:</span> Together, lets save lives and prevent diseases!</h1>
                    </div>
                    <div className=" flex flex-col jusitfy-between lg:w-[50vw] justify-around lg:gap-32 gap-6">
                        <div className="hidden lg:block">
                            <Spacer height="l"/>
                        </div>
                        <JoinUsPoint title="Your Expertise Can Change Destinies:" description="In the medical field, every day counts. Your expertise and dedication can make the difference between life and death. Joining MonDocta is an opportunity to put your medical skills to work for the communities that need them most."/>                        
                        <JoinUsPoint title="Prevention rather than cure:" description="We firmly believe in the adage 'prevention is better than cure.' By joining MonDocta, you can help raise awareness of preventive health practices, diagnose health problems early, and prevent serious illness. Together, we can educate and act to save lives."/>                        
                        <JoinUsPoint title="Avoiding needless deaths:" description="Too many lives are lost every day due to lack of access to appropriate medical care. You can make a difference by offering your time and skills. Your presence can mean the difference between a patient surviving and a patient losing his or her life."/>                        
                        <JoinUsPoint title="All Medical Disciplines Are Welcome:" description="MonDocta is not limited to doctors and nurses. We welcome all medical disciplines, because we know that health is a team effort. Whether you're a pharmacist, physiotherapist, nutritionist, or in any other medical profession, your expertise is invaluable."/>                        
                        <div className="gap-5 flex flex-col">
                            <p  className=" lg:max-w-[40vw]  lg:text-2xl"> Joining MonDocta is an opportunity to give deeper meaning to your medical career, touch lives in an unforgettable way, and contribute to a healthier, brighter future.</p>
                        </div>
                        <a className="p-3 bg-[#074668] rounded-full text-white text-xl flex justify-between w-fit gap-3 group/arrow ml-2 px-4" href="#" > 
                                Join Us <BsArrowRight className="text-2xl text-white group-hover/arrow:translate-x-2 group-hover/arrow:scale-[1.1] duration-700 mr-1" />
                        </a>
                    </div>
                </div> 
                <Spacer height="l"/>
            </Container>
        </div>
    );
}
 
export default JoinUs;

