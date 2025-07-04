import { LuEye, LuEyeClosed  } from "react-icons/lu";


interface IShowValue {
    show?: boolean
}


export default function ShowValue({ show }: IShowValue) {
    return (
    
        <div className="text-[25px]">
            {show ? <LuEye/> : <LuEyeClosed/> }
        </div>
    )
}