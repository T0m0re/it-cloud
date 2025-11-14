import { Link } from "react-router"
import { Button } from "./ui/button"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./ui/menubar"
import { ChevronDown } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="w-full border-b border-white text-white font-sona sticky top-0 z-10 bg-black">
        <div className="mx-auto max-w-9/10 flex items-center justify-between py-6">
            <div className="flex items-center gap-6 xl:gap-18">
                <div className="w-[100px] ">
                    <img src="/Logo.svg" alt="logo" className="w-full"/>
                </div>
                <MenuBar/>
            </div>

            <div className="flex items-center gap-4 lg:gap-8 justify-between">

            <Link to="/">
                <img src="/linkedIn_icon.png" alt="linkedIn_icon" className="w-7 opacity-70 hover:opacity-100"/>
            </Link>
            <Link to="/">
                <img src="/x_icon.png" alt="X_icon" className="w-7 opacity-70 hover:opacity-100"/>
            </Link>
                <Button className="text-black font-semibold bg-white cursor-pointer hover:bg-white/80 rounded-xs transition-all px-6">
                    Sign in
                </Button>
            </div>
        </div>
       
    </nav>
  )
}
export default Navbar

const MenuBar = () => {
    return(
        <Menubar>
        <MenubarMenu>
            <MenubarTrigger className="text-[16px] cursor-pointer flex items-center gap-0.5">
                <p>Services</p> 
                <ChevronDown className="size-5 mt-1"/>
            </MenubarTrigger>
            <MenubarContent className="flex flex-col gap-1 ">
                <MenubarItem >
                    Cloud Migration 
                </MenubarItem>
                <MenubarItem>
                    Managed IT 
                </MenubarItem>
                <MenubarItem>
                    Managed IT 
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem disabled>Self AI Integration           <MenubarShortcut className="text-blue-700 border/50 p-[3px] bg-blue-500/20 f">Coming soon</MenubarShortcut>
                </MenubarItem>
            </MenubarContent>
        </MenubarMenu>
      <MenubarMenu>
        <Link to="/about-us" className="text-nowrap font-medium hover:border hover:border-white/30 px-3 py-1 transition-all">
            About Us
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link to="/about-us" className="text-nowrap font-medium hover:border hover:border-white/30 px-3 py-1 transition-all">
            Case Studies
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link to="/about-us" className="font-medium hover:border hover:border-white/30 px-3 py-1 transition-all">
            Blog
        </Link>
      </MenubarMenu>
    </Menubar>
    )
}