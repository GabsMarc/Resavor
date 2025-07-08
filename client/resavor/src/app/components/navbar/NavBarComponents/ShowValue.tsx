'use client'

import { LuEye, LuEyeClosed  } from "react-icons/lu";


interface IShowValue {
    show?: boolean
}


export default function ShowValue({ show }: IShowValue) {
    return (
    
        <div className="text-[25px] p-[2px] px-2 hover:bg-[#00000038] rounded-[5px] hover:cursor-pointer">
            {show ? <LuEye/> : <LuEyeClosed/> }
        </div>
    )
}