"use client";

import SubContactUs from "./templates/SubContactUs";
import ButtonPill from "./components/ButtonPill";
import { useEffect, useState } from "react";
import JoinUs from "@modules/home/components/JoinUs";
import { join } from "path";
import JoinContact from "./templates/JoinContact";
import { use } from "chai";
import DoctorContact from "./templates/DoctorContact";

const ContactUs = () => {
    const [joinUs, setJoinUs] = useState(false);
    const [joinUsDoctors, setJoinUsDoctors] = useState(false);
    const [contactUs, setContactUs] = useState(true);

    const setOthersFalse = () => {
        setJoinUs(false);
        setJoinUsDoctors(false);
        setContactUs(false);
        console.log("setOthersFalse");
    }
    let bodyContent = null;
   
    if(joinUsDoctors){
         bodyContent = ( 
            <div className="overflow-hidden">
                <div className="flex flex-row gap-2 sm:gap-5 lg:px-20 overflow-x-auto  flex-nowrap whitespace-nowrap">
                    <ButtonPill  text="Join Us" className="ml-auto" color="blue" onClick={() => { setOthersFalse(); setJoinUs(true); } } state={joinUs}/>
                    <ButtonPill text="Join Us - Doctors" color="blue" onClick={() => { setOthersFalse(); setJoinUsDoctors(true); } } state={joinUsDoctors}/>
                    <ButtonPill text="Contact Us" className="mr-auto" color="blue" onClick={() => { setOthersFalse(); setContactUs(true); } } state={contactUs}/>
                </div>
                <DoctorContact/>
            </div> 
        );
    }
    else if(joinUs){
       bodyContent = ( 
            <div className="overflow-hidden w-[100vw]">
                <div className="flex flex-row gap-2 sm:gap-5  lg:px-20 overflow-x-auto">
                    <ButtonPill text="Join Us" className="ml-auto" color="blue" onClick={() => { setOthersFalse; setJoinUs(true); } } state={joinUs}/>
                    <ButtonPill text="Join Us - Doctors" color="blue" onClick={() => { setOthersFalse; setJoinUsDoctors(true); } } state={joinUsDoctors}/>
                    <ButtonPill text="Contact Us" className="mr-auto" color="blue" onClick={() => { setOthersFalse; setContactUs(true); } } state={contactUs}/>
                </div>
                <JoinContact/>
            </div> 
        );
    }
    else if(contactUs){
       bodyContent = ( 
            <div className="overflow-hidden w-[100vw]">
                <div className="flex flex-row gap-2 sm:gap-5 lg:px-20 overflow-x-auto">
                    <ButtonPill text="Join Us" className="ml-auto" color="blue" onClick={() => { setOthersFalse; setJoinUs(true); } } state={joinUs}/>
                    <ButtonPill text="Join Us - Doctors" color="blue" onClick={() => { setOthersFalse; setJoinUsDoctors(true); } } state={joinUsDoctors}/>
                    <ButtonPill text="Contact Us" className="mr-auto" color="blue" onClick={() => { setOthersFalse; setContactUs(true); } } state={contactUs}/>
                </div>
                <SubContactUs/>
            </div> 
        );
    }
    return ( 
        <div className="mt-20">
            {bodyContent}
        </div> 
    );
    
}
 
export default ContactUs;