"use client";

import Spacer from "@modules/common/components/spacer";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

interface FeatureLeftProps {
    title: string;
    description: string;
    image: string;
}

const FeatureLeft: React.FC<FeatureLeftProps> = ({
    title,
    description,
    image
}) => {
    gsap.registerPlugin(ScrollTrigger);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        if(imageRef.current ){
          var tl = gsap.timeline({});
          tl.fromTo(imageRef.current,{
            opacity: 0,
          },{
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: imageRef.current,
                start: "top 70%",
                end: "top 40%",
                once: true,
                scrub: true,
                invalidateOnRefresh: true,
            }
          });
          tl.fromTo(imageRef.current,{
            y: -220,
          },{
              y: -150,
              scrollTrigger: {
                trigger: imageRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
            }
          });
          tl.fromTo(textRef.current,{ 
              opacity: 0
          },{ 
              opacity:1, x: 50, 
              duration: 0.5
          });
        }
    },[]);

    return ( 
        <div className="h-[100vh] w-full flex flex-col lg:flex-row">
            <div className="w-[100vw] lg:w-[50vw] h-[50vh] lg:h-[80%]">
                <div className=" h-full w-[95%] lg:ml-[5%] rounded-xl overflow-hidden m-auto">
                    <div ref={imageRef} className={`${image== "pregnant"? "pregnant-feature": "stethoscope-feature"} image-feature w-[120%] bg-cover h-[130%] opacity-0 -translate-y-[220px]`}></div>
                </div>
            </div>
            <div className="w-[90vw] lg:w-[50vw] lg:h-[80%] flex flex-col m-auto lg:m-0 items-center">
                <div className="h-fit lg:h-full w-full flex flex-col justify-end  lg:items-start lg:pl-10">
                    <h1 className="text-3xl text-[#074668] lg:text-8xl mb-4">
                        {title}
                    </h1>
                    <div className="hidden lg:block">
                        <Spacer />
                    </div>
                    <div className="text-2xl  text-[#074668] lg:max-w-[32rem]">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FeatureLeft;