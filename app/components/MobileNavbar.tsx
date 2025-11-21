import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [menuOpen]);

    return (
        <>
            <nav className={cn("sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50 transition-all", menuOpen && "bg-background")}>
                <div className="container mx-auto px-4 flex items-center justify-between py-4">
                    <div className="flex items-center gap-2">
                        <MobileNavLink to="/" onClick={() => setMenuOpen(false)}>
                            <span className="font-serif font-bold text-xl tracking-tight">Nimbus IT</span>
                        </MobileNavLink>
                    </div>

                    <button
                        className="p-2 text-foreground hover:bg-muted rounded-md transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 top-[73px] z-40 bg-background/95 backdrop-blur-xl animate-in slide-in-from-top-5 duration-200">
                    <div className="container mx-auto px-4 py-8 flex flex-col gap-6 h-full overflow-y-auto pb-20">
                        <div className="flex flex-col gap-2">
                            <MobileNavLink to="/" onClick={() => setMenuOpen(false)}>Overview</MobileNavLink>
                            <MobileNavLink to="/services" onClick={() => setMenuOpen(false)}>Services</MobileNavLink>
                            <MobileNavLink to="/case-studies" onClick={() => setMenuOpen(false)}>Case Studies</MobileNavLink>
                            <MobileNavLink to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</MobileNavLink>
                            <MobileNavLink to="/about" onClick={() => setMenuOpen(false)}>About</MobileNavLink>
                        </div>

                        <div className="h-px bg-border/50 w-full my-2"></div>

                        <div className="flex flex-col gap-4">
                            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg font-medium shadow-lg shadow-primary/20">
                                Client Portal
                            </Button>
                            <p className="text-center text-sm text-muted-foreground">
                                Need help? <a href="#" className="text-primary hover:underline">Contact Support</a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
    <Link
        to={to}
        onClick={onClick}
        className="text-2xl font-serif font-medium text-foreground/80 hover:text-foreground py-4 border-b border-border/30 hover:pl-2 transition-all"
    >
        {children}
    </Link>
);

export default MobileNavbar;