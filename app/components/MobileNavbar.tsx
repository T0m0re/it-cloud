import { useState } from "react"
import BorderContainer from "./BorderContainer"
import { Button } from "./ui/button"
import { cn } from "~/lib/utils"
import { Link } from "react-router"

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
        <nav className="w-full h-dvh left-0 right-0 bg-black scroll-none z-10">
            <BorderContainer className="h-full">
                <div className="flex flex-col items-start gap-6 pt-4 px-1">
                    <div className="flex items-center justify-between w-full">
                        <div className="w-[70px]">
                            <img src="/Logo.svg" alt="logo" className="w-full"/>
                        </div>

                        <div className="w-7 flex flex-col items-center gap-4">
                            <div className="w-full h-0.5 bg-white rounded-lg group-hover:bg-white/70 rotate-45 translate-y-3"/>
                            <div className="w-full h-0.5 bg-white rounded-lg group-hover:bg-white/70 -rotate-45 -translate-y-2"/>
                        </div>
                    </div>

                    <div className="w-full">
                        <ul>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>Case Study</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-3 justify-between">
                        <Button className="text-black font-semibold bg-white cursor-pointer hover:bg-white/80 rounded-xs transition-all px-6">
                            Sign In
                        </Button>
                        <div className="flex ">
                            <Link to="/">
                                 <img src="/linkedIn_icon.png" alt="linkedIn_icon" className="w-7 opacity-70 hover:opacity-100"/>
                            </Link>
                            <Link to="/">
                                <img src="/x_icon.png" alt="X_icon" className="w-7 opacity-70 hover:opacity-100"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </BorderContainer>
        </nav>
    )
}