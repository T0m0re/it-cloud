import Footer from "~/components/Footer";

export default function About() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-24">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-serif text-4xl md:text-6xl mb-12 text-center">About Nimbus IT</h1>

                    <div className="prose prose-lg mx-auto text-muted-foreground">
                        <p className="mb-6">
                            Founded in 2015, Nimbus IT was built on a simple premise: technology should enable business growth, not hinder it.
                        </p>
                        <p className="mb-6">
                            We started as a small team of network engineers and have grown into a full-service managed IT provider serving clients across the globe. Our mission is to provide enterprise-grade technology solutions to growing businesses.
                        </p>
                        <p>
                            We believe in proactive support, transparent pricing, and building long-term partnerships with our clients. When you succeed, we succeed.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
