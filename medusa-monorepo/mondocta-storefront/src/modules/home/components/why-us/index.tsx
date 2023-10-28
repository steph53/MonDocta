"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import WhyUsPoint from "./components/WhyUsPoint";
import Spacer from "@modules/common/components/spacer";
import Container from "@modules/home/components/Container";


const WhyUs = () => {
    const TextRef = useRef<HTMLDivElement>(null);
        useEffect(()=>{
            gsap.registerPlugin(ScrollTrigger);
            var timeline = gsap.context(() => {
                let tl3 = gsap.fromTo(TextRef.current,
                {
                    y:0,
                },{
                    opacity: 1,
                    yPercent: -100,
                    scrollTrigger: {
                        trigger: TextRef.current,
                        start: "top 8%",
                        end: "bottom 70%",
                        scrub: true,
                        pin: ".pinned-container",
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        snap: {
                            snapTo: [0,0.3,1],
                            duration: 1.3,
                            delay: 0.3,
                            ease: "power1.inOut"
                        },
                        refreshPriority: 2,
                    }
                });
            });
            return() => timeline.revert();
        },[]);
    
    return ( 
            <div>
                <Spacer height="l" />
                <Container>
                    <div className="section-title">
                        <h2 className=" text-3xl lg:text-6xl">Why Us</h2>
                        <div>&nbsp;</div>
                    </div>
                </Container>
                <Spacer />
                <div>
                    <div  className="pinned-container bg-[#badaf7] flex flex-col sm:m-10 mx-5 gap-28  rounded-xl h-[90vh] overflow-hidden">                        
                        <div ref={TextRef} className="flex flex-col h-[180vh]  ">
                            <div className=" section h-[90vh]">
                                <WhyUsPoint title="Combating Healthcare Access Inequalities" description="The MonDocta association was created with a noble aim: to tackle the glaring disparities in access to healthcare that affect many regions. We know that unequal access to medical services leads to higher mortality rates, particularly in disadvantaged communities." number={"01"}/>
                            </div>
                            <div className="section h-[90vh]">
                                <WhyUsPoint title="Prevent Diseases through Education:" description="One of MonDocta&apos;s main raisons d&apos;être is to tackle the prevalence of preventable diseases. These diseases and conditions can be effectively managed, or even prevented, through timely medical intervention. By providing education, early detection and necessary care, MonDocta aims to reduce preventable deaths and save lives." number={"02"}/>
                            </div>
                            <div className="section h-[90vh]">                            
                                <WhyUsPoint title="Bridging Healthcare Gaps and Fostering Early Intervention:" description="Another crucial aspect of MonDocta&apos;s work is its medical outreach program. By actively reaching out to communities, MonDocta brings healthcare services closer to those who need them most. This approach not only identifies health problems at an early stage, but also provides essential care, reducing the burden of untreated illness." number={"03"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default WhyUs;
