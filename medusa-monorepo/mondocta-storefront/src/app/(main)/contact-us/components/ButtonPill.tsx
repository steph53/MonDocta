"use client";

interface ButtonPillsProps {
    text: string;
    color: string;
    onClick: () => void;
    state: boolean;
    className?: string;
}

const ButtonPill = ({text, color, className, onClick, state}: ButtonPillsProps) => {
    return (
        <div onClick={onClick}  className={`flex flex-row items-center justify-center border group border-[#0a78b4] hover:bg-[#0a78b4] ${className} ${state ? "bg-[#0a78b4] " : ""} min-w-[0] min-h-[0] rounded-full duration-700 p-2 sm:px-3 md:px-6 lg:px-10 cursor-pointer`}>
            <p className={`text-black group-hover:text-white ${state ? "text-white " : ""} text-md`}>{text}</p>
        </div>
    );
}

export default ButtonPill;