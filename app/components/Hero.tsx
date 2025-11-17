import { Button } from "./ui/button"

const Hero = () => {
  return (
    <>
        <section className="w-full h-[calc(100dvh-80px)] bg-[url(/mobile-hero-bg.png)] md:bg-[url(/hero-bg1.png)] bg-cover bg-position-[0%_-40%] md:bg-position-[10%_30%] bg-no-repeat">
            <div className="pt-20 px-4 md:px-0 lg:pt-50 flex flex-col gap-4 md:flex-row items-center justify-between font-sora">
                <h1 className="scroll-m-20 text-left text-5xl font-medium tracking-tight text-balance flex-3">Managed IT & Cloud Services for growing teams</h1>
                <p className="flex-2 text-balance font-light md:leading-loose">Achieve continuous uptime, safeguard mission-critical data, and expand your digital capabilities without interruption. We architect, monitor, and optimize your entire IT and cloud infrastructure—so your team can stay productive while we handle the technology.</p>
            </div>
            <div className="ml-2 mt-4">
                <Button className="bg-white text-black font-semibold px-10 py-6 rounded font-sora hover:bg-white/70 cursor-pointer transition-all text-start">
                    Get a Quote
                    <img src="/quote-icon1.svg" alt="icon" />
                </Button>
            </div>
        </section>

        <section>
            <div className="flex flex-col items-center justify-between">
                <div className="border-b py-6 w-full text-center">
                    <p className="font-sona">Trusted by +2000 SMB clients</p>
                </div>
                <div className="py-6"></div>
            </div>
        </section>
    </>
  )
}
export default Hero