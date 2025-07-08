'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavGeneric, NavLinkDropDawn } from "../../NavLink"


export default function DropDownMenu() {
    return (
        <div>
            <DropdownMenu>

                <NavGeneric>
                    <DropdownMenuTrigger className="p-[2px] px-2 rounded-[5px] hover:cursor-pointer hover:bg-[#00000038]">
                        Contas
                    </DropdownMenuTrigger>
                </NavGeneric>

                <DropdownMenuContent className="ml-[60px] bg-[#636363c5] border-none">

                    <NavLinkDropDawn href={'/pendentes'} label="Pendentes" />
                    <NavLinkDropDawn href={'/pagas'} label="Pagas" />

                </DropdownMenuContent>

            </DropdownMenu>
        </div>
    )
}