import { Outlet } from "react-router"
import BorderContainer from "~/components/BorderContainer"
import MobileNavbar from "~/components/MobileNavbar"
import Navbar from "~/components/Navbar"
import { useScreenWidth } from "~/lib/utils"

const Layout = () => {
    const width = useScreenWidth()
  return (
    <main className="relative">
        {width > 768 
        ? <Navbar/>
          : <MobileNavbar/>
      }
        
        <BorderContainer>
            <Outlet/>
        </BorderContainer>
    </main>
  )
}
export default Layout