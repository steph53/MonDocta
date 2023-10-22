"use client";

import Link from "next/link";

interface LinkNavProps {
    link: string;
    text: string;
}

const LinkNav: React.FC<LinkNavProps> = ({
    link,
    text
}) => {
    return ( 
        <Link href={link} className="group/link text-base flex flex-row">
                <div className="overflow-hidden flex flex-col justify-center w-5 group-hover/link:ml-3 duration-500">
                  <div className="translate-x-5 group-hover/link:-translate-x-0 duration-500 w-3"><hr className="h-[1.5px] bg-black border-white group-hover/link:border-black"/></div>
                </div>
                {text}
        </Link>
    );
}
 
export default LinkNav;