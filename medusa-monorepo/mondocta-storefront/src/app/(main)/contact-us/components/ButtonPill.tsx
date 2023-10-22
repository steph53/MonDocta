"use client";

interface ButtonPillsProps {
    text: string;
    color: string;
    onClick: () => void;
    state: boolean;
}

const ButtonPill = ({text, color, onClick}: ButtonPillsProps) => {
    return (
        <div onClick={onClick} className={`flex flex-row items-center justify-center border group border-[#0a78b4] hover:bg-[#0a78b4] rounded-full duration-700 p-2 px-10 cursor-pointer`}>
            <p className="text-black group-hover:text-white text-md">{text}</p>
        </div>
    );
}

export default ButtonPill;