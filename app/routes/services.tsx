import Footer from "~/components/Footer";

export default function Services() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-24">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h1 className="font-serif text-4xl md:text-6xl mb-6">Comprehensive IT Solutions</h1>
                    <p className="text-xl text-muted-foreground">Everything you need to secure and scale your infrastructure.</p>
                </div>

                <div className="space-y-32">
                    {/* Service 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="aspect-video bg-muted rounded-2xl border border-border relative overflow-hidden group">
                                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
                                {/* Mock UI */}
                                <div className="absolute inset-8 bg-white rounded-lg shadow-lg border border-border/50 flex items-center justify-center">
                                    <div className="text-6xl">☁️</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-serif mb-4">Cloud Migration & Management</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Seamlessly move your operations to the cloud. We handle architecture, migration, and ongoing management for AWS, Azure, and Google Cloud.
                            </p>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="flex-1">
                            <div className="aspect-video bg-muted rounded-2xl border border-border relative overflow-hidden group">
                                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
                                {/* Mock UI */}
                                <div className="absolute inset-8 bg-white rounded-lg shadow-lg border border-border/50 flex items-center justify-center">
                                    <div className="text-6xl">🛡️</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-serif mb-4">Cybersecurity & Compliance</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Protect your business from evolving threats. Our comprehensive security suite includes 24/7 monitoring, threat detection, and compliance audits.
                            </p>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="aspect-video bg-muted rounded-2xl border border-border relative overflow-hidden group">
                                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
                                {/* Mock UI */}
                                <div className="absolute inset-8 bg-white rounded-lg shadow-lg border border-border/50 flex items-center justify-center">
                                    <div className="text-6xl">💻</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-serif mb-4">Managed IT Support</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Your dedicated IT department. We provide helpdesk support, device management, and strategic planning to keep your team productive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
