import { Button } from "./ui/button";
import LogoTicker from "./LogoTicker";

const Hero = () => {
    return (
        <>
            <section className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center relative overflow-hidden py-20">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border mb-8 animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">System Status: All Systems Operational</span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] tracking-tight mb-6 max-w-4xl animate-fade-in-up delay-100">
                        Managed IT for <br />
                        <span className="text-muted-foreground italic">Growing Teams</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-200">
                        Secure your data, reduce downtime, and scale with confidence.
                        We handle the complex infrastructure so you can focus on building your business.
                    </p>

                    {/* CTA */}
                    <div className="animate-fade-in-up delay-300 flex gap-4">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-full text-lg font-medium shadow-xl shadow-primary/20 transition-all hover:shadow-primary/40 hover:-translate-y-0.5 cursor-pointer">
                            Get a Quote
                        </Button>
                        <Button variant="outline" className="h-12 px-8 rounded-full text-lg font-medium border-border hover:bg-muted transition-all cursor-pointer">
                            View Services
                        </Button>
                    </div>

                    {/* 3D Floating Elements */}
                    <div className="relative w-full max-w-5xl mt-20 h-[400px] md:h-[600px] perspective-[2000px]">
                        {/* Main Interface - Server Dashboard */}
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80%] md:w-[60%] aspect-video bg-white rounded-xl shadow-2xl border border-border/50 transform rotate-x-12 rotate-y-[-10deg] rotate-z-2 hover:rotate-y-[-5deg] hover:rotate-x-6 transition-all duration-700 ease-out group">
                            <div className="absolute inset-0 bg-linear-to-br from-white to-slate-50 rounded-xl overflow-hidden flex flex-col">
                                {/* Window Header */}
                                <div className="w-full h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2 justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="text-xs text-slate-400 font-mono">admin@nimbus-server:~</div>
                                </div>
                                {/* Dashboard Content */}
                                <div className="p-6 flex-1 bg-slate-50/50">
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                            <div className="text-xs text-slate-400 mb-1">CPU Usage</div>
                                            <div className="text-2xl font-bold text-slate-700">12%</div>
                                            <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                                <div className="w-[12%] h-full bg-green-500"></div>
                                            </div>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                            <div className="text-xs text-slate-400 mb-1">Memory</div>
                                            <div className="text-2xl font-bold text-slate-700">4.2 GB</div>
                                            <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                                <div className="w-[40%] h-full bg-blue-500"></div>
                                            </div>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                            <div className="text-xs text-slate-400 mb-1">Network</div>
                                            <div className="text-2xl font-bold text-slate-700">1.2 Gbps</div>
                                            <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                                <div className="w-[70%] h-full bg-purple-500"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg border border-slate-100 shadow-sm p-4 h-40 flex items-end gap-2">
                                        {[40, 70, 45, 90, 60, 75, 50, 80, 95, 60, 70, 85].map((h, i) => (
                                            <div key={i} className="flex-1 bg-blue-500/10 rounded-t-sm relative group hover:bg-blue-500/20 transition-colors" style={{ height: `${h}%` }}>
                                                <div className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-sm transition-all duration-500" style={{ height: '0%', animation: `grow 1s ease-out ${i * 0.1}s forwards` }}></div>
                                            </div>
                                        ))}
                                        <style>{`
                                            @keyframes grow {
                                                to { height: 100%; }
                                            }
                                        `}</style>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Panel 1 (Left) - Security Status */}
                        <div className="absolute left-[5%] top-[20%] w-[25%] aspect-3/4 bg-white rounded-lg shadow-xl border border-border/50 transform translate-z-20 rotate-y-12 rotate-x-6 hover:-translate-y-2 transition-all duration-500 delay-100 hidden md:block">
                            <div className="p-4 space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">🛡️</div>
                                    <div>
                                        <div className="text-sm font-bold">Security</div>
                                        <div className="text-xs text-green-600">Protected</div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-500">Firewall</span>
                                        <span className="text-green-600">Active</span>
                                    </div>
                                    <div className="h-px bg-slate-100"></div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-500">Threats</span>
                                        <span className="text-slate-900">0 Detected</span>
                                    </div>
                                    <div className="h-px bg-slate-100"></div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-500">Last Scan</span>
                                        <span className="text-slate-900">Just now</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Panel 2 (Right) - Cloud Uptime */}
                        <div className="absolute right-[5%] top-[10%] w-[30%] aspect-square bg-white rounded-lg shadow-xl border border-border/50 transform translate-z-40 rotate-y-[-15deg] rotate-x-12 hover:-translate-y-2 transition-all duration-500 delay-200 hidden md:block backdrop-blur-xl bg-white/90">
                            <div className="p-5 flex flex-col h-full justify-between">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-bold text-slate-700">Cloud Uptime</div>
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                </div>
                                <div className="text-4xl font-bold text-slate-900 font-mono">99.99%</div>
                                <div className="flex gap-1 mt-2">
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className="flex-1 h-8 bg-green-500 rounded-sm opacity-80 hover:opacity-100 transition-opacity" title="Operational"></div>
                                    ))}
                                </div>
                                <div className="text-xs text-slate-400 text-right mt-2">Last 30 Days</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LogoTicker />
        </>
    );
};

export default Hero;
