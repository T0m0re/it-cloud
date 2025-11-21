import { Button } from "./ui/button";

const services = [
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure to support your growing business needs. Secure, reliable, and efficient.",
    icon: "☁️",
  },
  {
    title: "Network Security",
    description: "Protect your data and infrastructure with our advanced network security services. Stay safe from threats.",
    icon: "🔒",
  },
  {
    title: "IT Support",
    description: "24/7 expert IT support to resolve issues quickly and keep your operations running smoothly.",
    icon: "🛠️",
  },
  {
    title: "Data Backup",
    description: "Automated and secure data backup solutions to ensure your critical business information is never lost.",
    icon: "💾",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 md:px-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sora">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-start">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 font-sora">{service.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
              <Button variant="link" className="p-0 h-auto text-blue-600 font-medium hover:text-blue-700">
                Learn more &rarr;
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
