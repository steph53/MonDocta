"use client";

import ContactForm from "@modules/contact-us";
import Lottie from "lottie-react";
import patientAnim from "../../../../../lottie/patient.json";



const SubContactUs = () => {
    
    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:justify-around lg:h-[100vh] px-10 pb-10" >
                <div className="text-4xl lg:text-7xl lg:max-w-[50vw] pt-20"> 
                    <p className="flex place-items-center text-[#0a78b4]">The Future of Better Health has Arrived</p>
                    <Lottie className="h-[59vh]" animationData={patientAnim} />
                </div>
                <div className="flex flex-row justify-center w-full lg:max-w-[30vw] items-center">
                    <ContactForm/>
                    
                </div>
            </div>
        </div> 
        
    );
}
 
export default SubContactUs;