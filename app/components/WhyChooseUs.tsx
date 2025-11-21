import { Button } from "./ui/button";

const benefits = [
    {
        title: "Expert Team",
        description: "Our team consists of certified professionals with years of experience in the IT industry.",
    },
    {
        title: "24/7 Support",
        description: "We are always available to assist you, ensuring your business never faces downtime.",
    },
    {
        title: "Tailored Solutions",
        description: "We understand that every business is unique, so we customize our solutions to fit your specific needs.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 px-4 md:px-20 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sora">Why Choose Nimbus IT?</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        We are dedicated to providing top-notch IT services that empower your business to thrive.
                        With a focus on reliability, security, and innovation, we are your trusted technology partner.
                    </p>

                    <div className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 font-sora">{benefit.title}</h3>
                                    <p className="text-slate-600">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10">
                        <Button className="bg-slate-900 text-white px-8 py-6 rounded-lg text-lg hover:bg-slate-800 transition-colors">
                            Get Started Today
                        </Button>
                    </div>
                </div>

                <div className="lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-2xl transform rotate-3"></div>
                    <img
                        src="/hero-bg1.png"
                        alt="Team working"
                        className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
                    />
                </div>
            </div>
        </section>
    );
}
