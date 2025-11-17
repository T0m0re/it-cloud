import { useEffect, useState } from "react"
import BorderContainer from "./BorderContainer"
import { Button } from "./ui/button"
import { cn } from "~/lib/utils"
import { Link } from "react-router"
import { ChevronDown } from "lucide-react"

const MobileNavbar = () => {
const [menuOpen, setMenuOpen] = useState(false)
    useEffect(() => {
  if (menuOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
}, [menuOpen]);
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
    {menuOpen && <NavItems setMenuOpen={setMenuOpen}/>}
    </>
  )
}
export default MobileNavbar

const NavItems = ({setMenuOpen} : {setMenuOpen: (value: boolean) => void}) => {
    const [dropDownOpen, setDropDownOpen] = useState(false)
    return(
        <nav className="w-full h-dvh left-0 right-0 bg-black z-10 overflow-hidden">
            <BorderContainer className="h-full">
                <div className="flex flex-col items-start gap-6 pt-6 px-2">
                    <div className="flex items-center justify-between w-full">
                        <div className="w-20">
                            <img src="/Logo.svg" alt="logo" className="w-full"/>
                        </div>

                        <button className="w-7 flex flex-col items-center gap-4 cursor-pointer" onClick={()=>{setMenuOpen(false)}}>
                            <div className="w-full h-0.5 bg-white rounded-lg group-hover:bg-white/70 rotate-45 translate-y-3"/>
                            <div className="w-full h-0.5 bg-white rounded-lg group-hover:bg-white/70 -rotate-45 -translate-y-2"/>
                        </button>
                    </div>

                    <div className="w-full px-0.5">
                        <ul className="flex flex-col items-start justify-between gap-6">
                            <li className="w-full border-b border-white/30 py-3 font-medium">
                                <div className="inline-flex items-center gap-0.5 w-full cursor-pointer hover:text-white/60 transition-colors" onClick={()=>{setDropDownOpen(!dropDownOpen)}}>
                                    <span>Services</span>
                                    <ChevronDown className="pt-1"/>
                                </div>

                                {dropDownOpen && <div className="w-full px-2 my-4">
                                    <ul className="w-full flex flex-col gap-4">
                                        <li className="flex gap-1 items-center w-full hover:text-white/60 transition-colors">
                                            <img src="/cloud-migration.svg" alt="icon" className="w-6"/>
                                            <Link to="/" className="w-full">
                                            <p className="w-fit">Cloud Migration</p>
                                            </Link>
                                        </li>
                                        <li className="flex gap-1 items-center w-full hover:text-white/60 transition-colors">
                                            <img src="/manged-It.svg" alt="icon" className="w-6"/>
                                            <Link className="w-full" to="/">
                                                <p className="w-fit">Managed IT</p>
                                            </Link>
                                        </li>
                                        <li className="flex gap-1 items-center w-full hover:text-white/60 transition-colors">
                                            <img src="/self-ai.svg" alt="icon" className="w-6"/>
                                            <Link className="w-full" to="/">
                                                <p className="w-fit">Self AI Integration</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>}
                            </li>
                            <li className="w-full border-b border-white/30 py-3 font-medium hover:text-white/60 transition-colors">
                                <Link to="/" className="w-full">About Us</Link>
                            </li>
                            <li className="w-full border-b border-white/30 py-3 font-medium hover:text-white/60 transition-colors">
                                <Link to="/" className="w-full">Case Study</Link>
                            </li>
                            <li className="w-full border-b border-white/30 py-3 font-medium hover:text-white/60 transition-colors">
                                <Link to="/" className="w-full">Blog</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-3 justify-between w-full">
                        <Button className="text-black font-semibold bg-white cursor-pointer hover:bg-white/80 rounded-xs transition-all px-6 flex-3">
                            Sign In
                        </Button>
                        <div className="flex flex-1 justify-end">
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