import Footer from "~/components/Footer";
import { Button } from "~/components/ui/button";

export default function Pricing() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="font-serif text-4xl md:text-6xl mb-6">Simple, transparent pricing</h1>
                    <p className="text-xl text-muted-foreground">Choose the plan that fits your business needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Startup Plan */}
                    <div className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors">
                        <h3 className="text-xl font-medium mb-2">Startup</h3>
                        <div className="text-4xl font-bold mb-6">$499<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                        <p className="text-muted-foreground mb-8">Essential IT for small teams.</p>
                        <Button variant="outline" className="w-full mb-8">Get Started</Button>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-2">✓ Remote Helpdesk</li>
                            <li className="flex items-center gap-2">✓ Antivirus & Security</li>
                            <li className="flex items-center gap-2">✓ M365 Management</li>
                            <li className="flex items-center gap-2">✓ 9-5 Support</li>
                        </ul>
                    </div>

                    {/* Growth Plan */}
                    <div className="p-8 rounded-2xl border border-primary bg-primary/5 relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>
                        <h3 className="text-xl font-medium mb-2">Growth</h3>
                        <div className="text-4xl font-bold mb-6">$999<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                        <p className="text-muted-foreground mb-8">Full-service IT for growing companies.</p>
                        <Button className="w-full mb-8">Get Started</Button>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-2">✓ Everything in Startup</li>
                            <li className="flex items-center gap-2">✓ 24/7 Monitoring</li>
                            <li className="flex items-center gap-2">✓ On-site Support</li>
                            <li className="flex items-center gap-2">✓ Cloud Backups</li>
                            <li className="flex items-center gap-2">✓ Network Management</li>
                        </ul>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors">
                        <h3 className="text-xl font-medium mb-2">Enterprise</h3>
                        <div className="text-4xl font-bold mb-6">Custom</div>
                        <p className="text-muted-foreground mb-8">Tailored solutions for complex needs.</p>
                        <Button variant="outline" className="w-full mb-8">Contact Sales</Button>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-2">✓ Dedicated IT Manager</li>
                            <li className="flex items-center gap-2">✓ Compliance Audits</li>
                            <li className="flex items-center gap-2">✓ Disaster Recovery</li>
                            <li className="flex items-center gap-2">✓ Strategic Planning</li>
                            <li className="flex items-center gap-2">✓ 24/7 Priority Support</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
