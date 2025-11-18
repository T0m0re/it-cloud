import { Button } from "./ui/button"

const Hero = () => {
  return (
    <>
        <section className="w-full h-[calc(100dvh-68px)] bg-[url(/mobile.png)] md:bg-[url(/hero-bg1.png)] bg-cover bg-position-[5S0%_-150%] md:bg-position-[10%_30%] bg-no-repeat">
        {/* <section className="w-full h-[calc(100dvh-80px)] bg-none md:bg-[url(/hero-bg1.png)] bg-cover bg-position-[0%_-40%] md:bg-position-[10%_30%] bg-no-repeat"> */}
            <div className="pt-20 px-4 md:px-0 lg:pt-50 flex flex-col gap-4 md:flex-row items-center justify-between font-sora">
                <h1 className="scroll-m-20 text-left text-5xl font-medium tracking-tight text-balance flex-3">Managed IT for growing teams</h1>
                <p className="flex-2 text-balance font-light md:leading-loose">seasoned IT and Cloud service - Reduce downtime, secure your data, and scale with confidence — we handle the tech so you can focus on business.</p>
            </div>
            <div className="ml-2 mt-4">
                <Button className="bg-white text-black font-semibold px-10 py-6 rounded font-sora hover:bg-white/70 cursor-pointer transition-all text-start">
                    Get a Quote
                    <img src="/quote-icon1.svg" alt="icon" />
                </Button>
            </div>
        </section>

        <section className="max-w-full">
            <div className="flex flex-col md:flex-row items-center justify-between my-6 py-2 px-15 border-y-[0.5px]">
                <div className="md:border-r">
                    <p className="font-sona font-medium text-center capitalize">200+ SMB clients<br/>99.9% uptime</p>
                </div>
                <div className="carousel flex overflow-x-auto mask-edge-fade max-w-full w-full">
                        <div className="groups flex items-center justify-center gap-2 pr-2 ">
                            <div className="flex-[0_0_10rem] w-35"> 
                                <img src="/Automation=Default.svg" alt="Auto_icon" className="w-full"/>
                            </div>
                            <div className="flex-[0_0_10rem] w-35">
                                <img src="/Blossom=Default.svg" alt="Blossom_icon" className="w-full"/>
                            </div>
                            <div className="flex-[0_0_10rem] w-35">
                                <img src="/Ebooks=Light.svg" alt="Ebook_icon" className="w-full"/>
                            </div>
                            <div className="flex-[0_0_10rem] w-35">
                                <img src="/Leafe=Default.svg" alt="Leafe_icon" className="w-full"/>
                            </div>
                            <div className="flex-[0_0_10rem] w-35">
                                <img src="/Minty=Default.svg" alt="Minty_icon" className="w-full"/>
                            </div>
                            <div className="flex-[0_0_10rem] w-35">
                                <img src="/SnapShot=Light.svg" alt="SnapShot_icon" className="w-full"/>
                            </div>
                            <div className="flex-[0_0_10rem] w-35">
                                <img src="/Snowflake=Light.svg" alt="AutoSnowflake_icon" className="w-full"/>
                            </div>
                        </div>

                        <div aria-hidden className="groups flex items-center justify-center gap-2 pr-2">
                            <div className="flex-[0_0_10rem] w-35"> 
                                <img src="/Automation=Default.svg" alt="Auto_icon" className="w-full"/>
                            </div>
                            <div className="flex-[0_0_10rem] w-35">
                                <img src="/Blossom=Default.svg" alt="Blossom_icon" className="w-full"/>
                            </div>
                            <div className="flex-[0_0_10rem] w-35">
                                <img src="/Ebooks=Light.svg" alt="Ebook_icon" className="w-full"/>
                            </div>
                            <div className="flex-[0_0_10rem] w-35">
                                <img src="/Leafe=Default.svg" alt="Leafe_icon" className="w-full"/>
                            </div>
                            <div className="flex-[0_0_10rem] w-35">
                                <img src="/Minty=Default.svg" alt="Minty_icon" className="w-full"/>
                            </div>
                            <div className="flex-[0_0_10rem] w-35">
                                <img src="/SnapShot=Light.svg" alt="SnapShot_icon" className="w-full"/>
                            </div>
                            <div className="flex-[0_0_10rem] w-35">
                                <img src="/Snowflake=Light.svg" alt="AutoSnowflake_icon" className="w-full"/>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </>
  )
}
export default Hero