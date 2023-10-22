"use client";
import Image from "next/image";

interface CarouselComponentProps {
    image: string;
    icon: string;
    title: string;
    description: string;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({
    image,
    icon,
    title,
    description
    
}) => {
    return (
        <div className="h-[90vh] lg:h-full  border-neutral-200 relative border-[1px] w-[100vw] lg:w-[50vw] icon-box group/carousels overflow-hidden ">
            <div>
                <Image src={image} layout="fill" objectFit="cover" alt={""} className="lg:opacity-0 group-hover/carousels:opacity-100 group-hover/carousels:scale-[1.05] duration-700"/>
            </div>
            <div className="flex flex-col justify-center top-0 left-0 h-full absolute w-[100vw] lg:w-[50vw] px-[5vw] group-hover/carousels:bg-[#00000091] bg-[#00000091] lg:bg-[#00000000] text-white  lg:text-black" >
                <div className="icon group-hover/carousels:opacity-0 duration-100"><i className="fas fa-dna"></i></div>
                <div>
                <h1 className="group-hover/carousels:text-white  text-3xl lg:text-7xl mb-4 group-hover/carousels:translate-y-48 duration-1000">{title}</h1>
                <p className="group-hover/carousels:text-white !text-2xl group-hover/carousels:opacity-0 duration-300">{description}</p>
                </div>
            </div>
        </div>    
    );
}
 
export default CarouselComponent;