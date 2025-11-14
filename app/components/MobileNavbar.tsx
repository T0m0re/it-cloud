import { useState } from "react"
import BorderContainer from "./BorderContainer"
import { Button } from "./ui/button"
import { cn } from "~/lib/utils"

const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    <nav className={cn("sticky top-0 z-15 bg-black w-full", menuOpen && "hidden")}>
        <div className="mx-auto max-w-9/10 flex items-center justify-between py-4">
            <div className="w-[60px]">
                <img src="/Logo.svg" alt="logo" className="w-full"/>
            </div>

            <div className="flex items-center gap-5">
                <Button className="text-black font-semibold bg-white cursor-pointer hover:bg-white/80 rounded-xs transition-all">
                    Sign in
                </Button>

                <div className="w-7 flex flex-col items-end-safe justify-between gap-2 py-1 cursor-pointer group" onClick={()=>setMenuOpen(true)}>
                    <div className="w-full h-0.5 bg-white rounded-lg group-hover:bg-white/70"/>
                    <div className="w-full h-0.5 bg-white rounded-lg group-hover:bg-white/70"/>
                    <div className="w-full h-0.5 bg-white rounded-lg group-hover:bg-white/70"/>
                </div>
            </div>
        </div>
    </nav>
    {menuOpen && <NavItems/>}
    </>
  )
}
export default MobileNavbar

const NavItems = () => {
    return(
        <nav className="w-full h-dvh  left-0 right-0 bg-black scroll-none z-10">
            <BorderContainer>
                <div className="flex items-center justify-between">
                    <div className="w-[60px]">
                        <img src="/Logo.svg" alt="logo" className="w-full"/>
                    </div>

                    <div className="w-7 flex flex-col items-center gap-4">
                        <div className="w-full h-0.5 bg-white rounded-lg group-hover:bg-white/70 rotate-45"/>
                        <div className="w-full h-0.5 bg-white rounded-lg group-hover:bg-white/70 -rotate-45"/>
                    </div>
                </div>
            </BorderContainer>
        </nav>
    )
}