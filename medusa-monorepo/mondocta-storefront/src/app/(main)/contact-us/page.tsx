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
            <div>
                <div className="flex flex-row gap-5 px-20 justify-center overflow-scroll">
                    <ButtonPill text="Join Us" color="blue" onClick={() => { setOthersFalse(); setJoinUs(true); } } state={joinUs}/>
                    <ButtonPill text="Join Us - Doctors" color="blue" onClick={() => { setOthersFalse(); setJoinUsDoctors(true); } } state={joinUsDoctors}/>
                    <ButtonPill text="Contact Us" color="blue" onClick={() => { setOthersFalse(); setContactUs(true); } } state={contactUs}/>
                </div>
                <DoctorContact/>
            </div> 
        );
    }
    else if(joinUs){
       bodyContent = ( 
            <div>
                <div className="flex flex-row gap-5 px-20 justify-center overflow-scroll">
                    <ButtonPill text="Join Us" color="blue" onClick={() => { setOthersFalse; setJoinUs(true); } } state={joinUs}/>
                    <ButtonPill text="Join Us - Doctors" color="blue" onClick={() => { setOthersFalse; setJoinUsDoctors(true); } } state={joinUsDoctors}/>
                    <ButtonPill text="Contact Us" color="blue" onClick={() => { setOthersFalse; setContactUs(true); } } state={contactUs}/>
                </div>
                <JoinContact/>
            </div> 
        );
    }
    else if(contactUs){
       bodyContent = ( 
            <div>
                <div className="flex flex-row gap-5 px-20 justify-center overflow-scroll">
                    <ButtonPill text="Join Us" color="blue" onClick={() => { setOthersFalse; setJoinUs(true); } } state={joinUs}/>
                    <ButtonPill text="Join Us - Doctors" color="blue" onClick={() => { setOthersFalse; setJoinUsDoctors(true); } } state={joinUsDoctors}/>
                    <ButtonPill text="Contact Us" color="blue" onClick={() => { setOthersFalse; setContactUs(true); } } state={contactUs}/>
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