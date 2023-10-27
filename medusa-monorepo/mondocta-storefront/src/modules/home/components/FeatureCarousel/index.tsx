"use client";
import {gsap} from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import CarouselComponent from "./components/CarouselComponent";
import Spacer from "@modules/common/components/spacer";


const FeatureCarousel = () => {
    gsap.registerPlugin(ScrollTrigger);
    const carouselRef = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);
    useLayoutEffect(()=>{
      gsap.registerPlugin(ScrollTrigger);
      if(carouselRef.current ){
        const blue = gsap.context(() => {
          let mm = gsap.matchMedia();

          mm.add("(min-width: 1024px)", () => {
            let scrollTween = gsap.fromTo(carouselRef.current,{
              x: 0,
            },{
                x: "-200vw",
                scrollTrigger: {
                  trigger: carouselRef.current,
                  start: "top 6%",
                  end: "bottom -300%",
                  pin: true,
                  anticipatePin: 1,
                  scrub: true,
                  invalidateOnRefresh: true,
              }
            });
          },container);
        });
        return() => blue.revert();
      }
    },[]);
    return (
      <> 
          <div ref={container} className=" overflow-hidden h-fit lg:h-[500vh] services">
              <div className="flex lg:flex-row flex-col w-[600vw] overflow-scroll" ref={carouselRef}>
                  <div className=" lg:w-[100vw] lg:h-[93vh]  flex lg:flex-row flex-col justify-between">
                    <CarouselComponent image={"/africa.webp"} icon={""} title={"Preventive Healthcare"} description={"Don&apos;t wait until you&apos;re sick to seek help! Our mission is to shift the paradigm form reactive to proactive healthcare. Regular check-ups and early intervention can prevent illness and lead to longer and, healthier life."}/>
                    <CarouselComponent image={"/radiologist.jpg"} icon={""} title={"Support for the ill"} description={"For those facing health challenges, you are not alone. MonDocta stands with you, offering support, guidance, and access to medical professionals. Together, we&apos;ll navigate the path to recovery and improved quality of life."}/>
                    
                  </div>
                  <div className=" lg:w-[100vw] lg:h-[93vh]  flex lg:flex-row flex-col justify-between">
                    <CarouselComponent image={"/healthy.jpg"} icon={""} title={"Healthy Living"} description={"For those already enjoying good health, MonDocta is your partner in maintaining your well-being. Our wellness programs, fitness tips, and dietary advice help you make the most of your healthy life."}/>
                    <CarouselComponent image={"/group.webp"} icon={""} title={"Teachers and health educators"} description={"Educators play a crucial role in shaping healthy futures. MonDocta collaborates with teachers and health educators to develop comprehensive health education programs that empower students to make informed choices about their well-being. MonDocta recognizes your dedication to shaping young minds and offers specialized healthcare support to keep you in best health, so you can continue to inspire and educate."}/>
                    
                  </div>
                  <div className="lg:w-[100vw] lg:h-[93vh] flex lg:flex-row flex-col justify-between">
                    <CarouselComponent image={"/depression.jpg"} icon={""} title={"Managing stress and depression"} description={"Mental health matters. MonDocta is dedicated to breaking the stigma around mental health issues. Our support services and resources can help you manage stress, combat depression, and embrace a happier, more balanced life."}/>
                    <CarouselComponent image={"/chronic.jpg"} icon={""} title={"Chronic illness support"} description={"If you or a loved one are living with a chronic illness, we&apos;re here for you. MonDocta offers specialized care and resources to help you manage your condition and improve your quality of life."}/>
                  </div>
              </div>
          </div>
      </>
     );
}
 
export default FeatureCarousel;