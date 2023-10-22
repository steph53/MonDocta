"use client";

interface SpacerProps {
    height?: string;
}

const Spacer: React.FC<SpacerProps> = ({
    height
}) => {
    return ( 
        <div className={`${height == "l" ? "lg:h-[300px] h-[50px]" : "lg:h-[100px] h-[25px]" } w-full`}> &nbsp;</div> 
    );
}
 
export default Spacer;
