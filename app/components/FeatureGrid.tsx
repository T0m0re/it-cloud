import { Button } from "./ui/button";

const FeatureGrid = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                        Enterprise-grade <br />
                        <span className="text-muted-foreground italic">Infrastructure</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        We provide the robust technology foundation your business needs to thrive.
                        From round-the-clock support to advanced threat protection, we've got you covered.
                    </p>
                    <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-full text-lg shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 cursor-pointer">
                        Explore Solutions
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-[800px] md:h-[600px]">
                    {/* Large Card Left - Support */}
                    <div className="md:col-span-2 md:row-span-2 bg-muted/30 border border-border/50 rounded-2xl p-8 relative group overflow-hidden hover:border-primary/20 transition-colors">
                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-medium mb-2">24/7 Dedicated Support</h3>
                                <p className="text-muted-foreground text-sm">Expert technicians ready to help, anytime, anywhere.</p>
                            </div>
                            <div className="w-full h-64 bg-white rounded-lg shadow-sm border border-border/50 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 flex flex-col">
                                {/* Chat UI Mock */}
                                <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">IT</div>
                                    <div>
                                        <div className="text-sm font-bold">Support Agent</div>
                                        <div className="text-xs text-green-600 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 space-y-3 flex-1 bg-slate-50/50">
                                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100 text-sm max-w-[80%]">
                                        Hello! How can we assist you with your server today?
                                    </div>
                                    <div className="bg-primary/10 p-3 rounded-lg rounded-tr-none text-sm max-w-[80%] ml-auto text-primary-foreground text-slate-900">
                                        We're experiencing some latency on the main database.
                                    </div>
                                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-100 text-sm max-w-[80%]">
                                        I'm checking the logs now. It looks like a load spike. Optimizing...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small Card Top Right - Security */}
                    <div className="bg-muted/30 border border-border/50 rounded-2xl p-6 relative group overflow-hidden hover:border-primary/20 transition-colors">
                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
                        <h3 className="text-lg font-medium mb-2">Cloud Security</h3>
                        <div className="mt-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                🔒
                            </div>
                            <div className="flex-1">
                                <div className="h-2 w-full bg-slate-200 rounded-full mb-1"></div>
                                <div className="h-2 w-2/3 bg-slate-200 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Small Card Middle Right - Network */}
                    <div className="bg-muted/30 border border-border/50 rounded-2xl p-6 relative group overflow-hidden hover:border-primary/20 transition-colors">
                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
                        <h3 className="text-lg font-medium mb-2">Global Network</h3>
                        <div className="mt-4 relative h-12 w-full">
                            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200"></div>
                            <div className="absolute top-1/2 left-0 w-3 h-3 bg-primary rounded-full -translate-y-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full -translate-y-1/2"></div>
                            <div className="absolute top-1/2 right-0 w-3 h-3 bg-primary rounded-full -translate-y-1/2"></div>
                        </div>
                    </div>

                    {/* Wide Card Bottom - Uptime */}
                    <div className="md:col-span-3 bg-muted/30 border border-border/50 rounded-2xl p-8 relative group overflow-hidden hover:border-primary/20 transition-colors flex items-center justify-between">
                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-medium mb-2">99.99% Uptime Guarantee</h3>
                            <p className="text-muted-foreground text-sm">Reliability you can count on.</p>
                        </div>
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="px-3 py-1 bg-white border border-border rounded text-xs font-mono text-green-600">Mon: 100%</div>
                            <div className="px-3 py-1 bg-white border border-border rounded text-xs font-mono text-green-600">Tue: 100%</div>
                            <div className="px-3 py-1 bg-primary text-primary-foreground border border-primary rounded text-xs font-mono">Today: 100%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
