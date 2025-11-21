import Footer from "~/components/Footer";

export default function CaseStudies() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="font-serif text-4xl md:text-6xl mb-6">Success Stories</h1>
                    <p className="text-xl text-muted-foreground">See how we help businesses transform their IT.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-video bg-muted rounded-xl border border-border hover:border-primary/50 transition-colors cursor-pointer group relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                                <h3 className="text-2xl font-serif mb-2">Client Success Story {i}</h3>
                                <p className="text-muted-foreground">How we reduced downtime by 99%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
