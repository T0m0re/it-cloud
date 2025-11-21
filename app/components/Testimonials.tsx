
const testimonials = [
    {
        quote: "Nimbus IT transformed our infrastructure. We are now more efficient and secure than ever before.",
        author: "Sarah Jenkins",
        role: "CTO, TechFlow Inc.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
        quote: "The support team is amazing. They resolved our network issues in minutes. Highly recommended!",
        author: "Michael Chen",
        role: "Operations Manager, GreenLeaf",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
        quote: "Moving to the cloud was seamless with Nimbus. They handled everything perfectly.",
        author: "Emily Rodriguez",
        role: "CEO, StartUp Hub",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 px-4 md:px-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sora">What Our Clients Say</h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Hear from businesses we've helped succeed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative">
                            <div className="text-4xl text-blue-400 absolute top-4 left-6 font-serif">"</div>
                            <p className="text-slate-300 mb-8 mt-4 relative z-10 italic leading-relaxed">
                                {testimonial.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full border-2 border-blue-400"
                                />
                                <div>
                                    <h4 className="font-semibold font-sora">{testimonial.author}</h4>
                                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
