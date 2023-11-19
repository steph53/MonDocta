"use client";

import Spacer from "@modules/common/components/spacer";
import FeatureLeft from "../FeatureLeft";
import FeatureRight from "../FeatureRight";
import { useEffect, useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Container from "../Container";

const FeaturesContainer = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const blue = gsap.context(() => {
    gsap.to(containerRef.current, {
        scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom top",
        onEnter: () => gsap.to(containerRef, {backgroundColor:"#badaf7"}),
        scrub: true,
        invalidateOnRefresh: true,
        },
        duration: 1,
    });
    });
    return() => blue.revert();
},[]);

    return ( 
        <>
            <Spacer height="l" />
            <Container>
                <div className="section-title">
                    <h2 className=" text-3xl lg:text-6xl">Our Services</h2>
                    <div>&nbsp;</div>
                    <p className="text-3xl">Whether it&apos;s nursing care, kinesitherapy, home support services or palliative care, our team is here to meet your needs in a professional and caring way. MonDocta offers a range of healthcare services.
                    </p>
                </div>
            </Container>
            <Spacer />

            <div ref={containerRef}>
                <Spacer />
                <FeatureLeft title={"For Expectant Mothers:"} description={"At MonDocta, we celebrate the beauty of motherhood and are dedicated to ensuring that your journey towards motherhood is filled with care, support, and the best possible medical attention. Our prenatal care programs are designed to nurture both you and your baby, ensuring a safe and joyful pregnancy."} image={"pregnant"} />
                <Spacer/>
                <FeatureRight title={"For Children:"} description={"Every child deserves a healthy and happy start life. MonDocta is here to provide pediatric care that&apos;s centered around your child&apos;s well-being. From routine check-ups to vaccinations, we&apos;re commited to keeping your little ones smiling and thriving."} image={""} />
                <Spacer/>
                <FeatureLeft title={"Health Education:"} description={"Welcome to MonDocta's Health Education program! Our comprehensive program covers a wide range of topics to promote good health and well-being. ​​We start with the basics in Introduction to Health and Hygiene, emphasizing the importance of personal hygiene practices such as hand washing and teeth brushing. We also highlight the significance of a balanced diet for overall health."} image={""} />
                <Spacer/>
            </div>
      </>
     );
}
 
export default FeaturesContainer;