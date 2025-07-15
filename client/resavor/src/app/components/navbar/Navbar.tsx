'use client'

import { useState } from "react";
import ShowValue from "./NavBarComponents/ShowValue";
import DropDownMenu from "./NavBarComponents/DropDawnMenu";
import Link from "next/link";
import { NavLink } from "../NavLink";


export function Navbar() {

    const [showValue, setShowValue] = useState(true)
    const [value, setValue] = useState<number>(5000)

    return (
        <div className="bg-gradient-to-r from-[#2d2d2d] via-[#1d1d1d] to-[#171717] w-[98%] h-[90px] fixed top-3 inset-x-0 mx-auto rounded-[10px] flex">
            <div className="flex-1 w-[100%] h-[100%] flex items-center gap-5 pl-5 text-[18px]">
                
                    <NavLink href="/" label="Visão Geral" />
                
                <DropDownMenu />
            </div>

            <div className="flex flex-1 w-[100%] h-[100%] items-center justify-end px-2 font-semibold text-[18px]">
                <span>Valor a pagar R$</span>
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