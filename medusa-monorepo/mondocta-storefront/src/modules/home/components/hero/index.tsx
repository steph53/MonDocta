"use client";
import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react"
import {BsArrowRight} from "react-icons/bs"

const Hero = () => {

  gsap.registerPlugin (ScrollTrigger);
  const mainTextRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
      gsap.registerPlugin(ScrollTrigger);
      if(mainTextRef.current ){
         {/* gsap.fromTo(projectRef.current, {
              y: 0,
          },{
              y:-50,
              scrollTrigger: {
                  trigger: projectRef.current,
                  start: "top 200",
                  end: "bottom 300",
                  markers: true,
                  invalidateOnRefresh: true,
              }
          });
        */}
        var tl = gsap.timeline({});
        tl.fromTo(mainTextRef.current,{
          opacity: 0,
        },{
            opacity: 1,
            y: -50, 
            duration: 1
        });
        tl.fromTo(textRef.current,{ 
            opacity: 0
        },{ 
            opacity:1, y: -50, 
            duration: 0.5
        });
        tl.to("#id", {opacity: 1, duration: 1});
      }
  },[]);

   return (
    <div className="h-[100vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center  backdrop-blur-sm">
        <h1 className="text-4xl lg:text-8xl mb-4 drop-shadow-md shadow-black opacity-0" ref={mainTextRef}>
          Welcome to <br/> MonDocta Association
        </h1>
        <p className="text-xl max-w-[32rem] mb-6 drop-shadow-md shadow-black opacity-0" ref={textRef}>
          Your Path to a Healthier tomorrow!
        </p>
        <div className="rounded-full border bg-[#1977cc] lg:bg-transparent border-[#1977cc] lg:border-white group/cta  hover:bg-[#1977cc]  hover:border-[#1977cc] duration-700 p-4 cursor-pointer" >
          <Link href="/">Book an appointment 
            <BsArrowRight className="inline text-lg ml-2 group-hover/cta:scale-[1.2] group-hover/cta:translate-x-5 duration-700 lg:mr-5" />
          </Link>
        </div>
      </div>
      <Image
        src="/hero_new.webp"
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default Hero
