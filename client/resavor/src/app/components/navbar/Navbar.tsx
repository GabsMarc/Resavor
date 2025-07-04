
import { useState } from "react";
import ShowValue from "./NavBarComponents/ShowValue";


export function Navbar() {

    const [showValue, setShowValue] = useState(true)
    const [value, setValue] = useState<number>(5000.00)

    return (
        <div className="bg-[#8f8f8f] w-[98%] h-[90px] fixed top-1 inset-x-0 mx-auto rounded-[10px] flex">
            <div className="bg-purple-400 flex-1 w-[100%] h-[100%]">

            </div>
            <div className="bg-blue-400 flex flex-1 w-[100%] h-[100%] items-center justify-end px-2 font-semibold text-[18px]">
                <span>R$</span>
                <div className="pl-1">
                    <span className={` ${showValue ? '' : 'align-[-10px] text-[20px]'} `}>
                        {showValue ? value.toFixed(2) : '*****'}
                    </span>
                </div>
                <div className="px-3"
                    onClick={() => setShowValue(!showValue)}>
                    <ShowValue show={showValue} />
                </div>
            </div>
        </div>
    )
}