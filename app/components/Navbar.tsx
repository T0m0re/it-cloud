import { Link } from "react-router";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <nav className="w-full py-4 sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <NavLink to="/">
                        <span className="font-serif font-bold text-xl tracking-tight">Nimbus IT</span>
                    </NavLink>
                </div>

                <div className="hidden md:flex items-center gap-1 p-1 bg-muted/50 rounded-full border border-border/50">
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/case-studies">Case Studies</NavLink>
                    <NavLink to="/pricing">Pricing</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </div>

                <div className="flex items-center gap-4">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6 rounded-full shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 cursor-pointer">
                        Client Portal
                    </Button>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
        to={to}
        className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-background"
    >
        {children}
    </Link>
);

export default Navbar;