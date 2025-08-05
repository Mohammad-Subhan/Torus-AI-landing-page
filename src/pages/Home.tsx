import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import FeatureCard from '@/components/FeatureCard'
import Footer from '@/components/Footer'
import TrendingPrompts from '@/components/TrendingPrompts'
import { motion } from "motion/react"
import magicWandIcon from '../assets/magic-wand.svg'
import starIcon from '../assets/star.svg'
import star2Icon from '../assets/star2.svg'
import star3Icon from '../assets/star3.svg'
import trendingPromptsImg from '../assets/trending-prompts.svg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'

const Home = () => {
    return (
        <div className="bg-bg min-h-screen text-text w-full">
            <Navbar />

            {/* Top Section */}
            <div className="flex flex-col items-center justify-center h-screen gap-3 overflow-hidden relative">
                <h1 className="text-lg font-medium">Torus AI</h1>
                <div className="flex flex-col text-5xl font-medium text-center gap-3">
                    <p>Find Inspiration.</p>
                    <p>Create, Generate,</p>
                    <p>Produce & Automate</p>
                </div>
                <div className="text-center max-w-[590px] pt-3">
                    <p className="text-[13px] text-text/70 font-light leading-6 z-[1]">
                        Welcome to PromptVerse. Effortlessly create content, explore endless prompts, and stay ahead with real-time trends. Automate emails, social media, and more while our AI extracts knowledge from any document or URL. Experience a stunning, futuristic design that boosts productivity.
                    </p>
                </div>
                <div className="flex items-center gap-3 pt-5">
                    <Button variant="outline" className="z-[1] rounded-full text-text px-6 py-5 cursor-pointer">
                        Start Generating
                        <img src={magicWandIcon} className="text-text h-5" alt="" />
                    </Button>
                    <Button className="z-[1] bg-primary cursor-pointer rounded-full text-bg px-6 py-5">
                        Download
                    </Button>
                </div>
                <div>
                    <img src={starIcon} alt="" className="h-7 w-7 absolute z-[1] left-[566px] -bottom-3.5" />
                    <img src={starIcon} alt="" className="h-3 w-3 absolute z-[1] left-[254px] top-[313px]" />
                    <img src={starIcon} alt="" className="h-3 w-3 absolute z-[1] left-[72px] top-[100px]" />
                    <img src={starIcon} alt="" className="h-3 w-3 absolute z-[1] left-[1000px] top-[155px]" />
                    <img src={starIcon} alt="" className="h-3 w-3 absolute z-[1] left-[1300px] top-[650px]" />
                    <img src={starIcon} alt="" className="h-5 w-5 absolute z-[1] left-[500px] top-[170px]" />
                    <img src={starIcon} alt="" className="h-5 w-5 absolute z-[1] left-[1450px] top-[300px]" />
                    <img src={starIcon} alt="" className="h-4 w-4 absolute z-[1] left-[83px] top-[600px]" />
                </div>
                <div className="absolute -bottom-[500px] w-[1000px] h-[1000px] rounded-tr-full rounded-tl-full circular-gradient"></div>
            </div>

            {/* Prompts Section */}
            <div className="flex flex-col items-center justify-center gap-3 h-screen w-full">
                <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="text-4xl font-medium">Create more with Torus</h1>
                    <p className="text-center max-w-[600px] pt-5 text-xs leading-6 text-text/60">Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.</p>
                </div>
                <div className="pt-12 w-full">
                    <TrendingPrompts />
                </div>
            </div>

            {/* Trending Prompts */}
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-medium">See Trending Prompts</h1>
                    <p className="text-center max-w-[600px] pt-5 text-xs leading-6 text-text/60">Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.</p>
                    <div className="flex items-center gap-3 pt-5">
                        <Button variant="outline" className="rounded-full text-text px-6 py-5 cursor-pointer">
                            Start Generating
                            <img src={magicWandIcon} className="text-text h-5" alt="" />
                        </Button>
                        <Button className="bg-primary cursor-pointer rounded-full text-bg px-6 py-5">
                            Download
                        </Button>
                    </div>
                </div>
                <div className="pt-24">
                    <img src={trendingPromptsImg} alt="trending prompts" className="w-full max-w-5xl" />
                </div>
            </div>

            {/* Images like never seen before */}
            <div className="flex flex-col gap-3 items-center justify-center pt-56">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-medium">Images like never seen before</h1>
                    <p className="text-center max-w-[600px] pt-5 text-xs leading-6 text-text/60">Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.</p>
                </div>
                <div className="mt-24 bg-text/5 p-8 rounded-md flex gap-4 justify-center items-center">
                    <img src={img1} alt="" className="h-[480px] rounded-md" />
                    <div className="grid grid-cols-2 gap-4">
                        <img src={img2} alt="" className="h-[234px] rounded-md" />
                        <img src={img3} alt="" className="h-[234px] rounded-md" />
                        <img src={img4} alt="" className="h-[234px] rounded-md" />
                        <img src={img5} alt="" className="h-[234px] rounded-md" />
                    </div>
                </div>
            </div>

            {/* Generate audio and music */}
            <div className="flex flex-col gap-3 items-center justify-center pt-56">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-medium">Generate audio and music</h1>
                    <p className="text-center max-w-[600px] pt-5 text-xs leading-6 text-text/60">Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.</p>
                </div>
                <div className="mt-24 bg-text/5 p-8 rounded-md grid gap-4 grid-cols-2 max-w-5xl">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-[27px] font-medium">Enhance Your Projects with Ultra-Realistic AI Voices</h1>
                        <p className="text-sm leading-6 text-text/60">Create engaging voice content with unique AI Voices perfect for your audience.</p>
                        <p className="text-sm leading-6 text-text/60">Generate Conversational, Long-form or Short-form Voice Content With Consistent Quality and Performances.</p>
                        <p className="text-sm leading-6 text-text/60">Secure and Private Voice Generations with Full Commercial and Copyrights.</p>
                        <div className="flex gap-3">
                            <div className="flex items-center justify-center border border-white rounded-full w-fit py-2.5 px-7 text-sm">Train Voice Models</div>
                            <div className="flex items-center justify-center border border-white rounded-full w-fit py-2.5 px-7 text-sm">Text-to-Speech</div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex items-center justify-center border border-white rounded-full w-fit py-2.5 px-7 text-sm">AI voice generation</div>
                            <div className="flex items-center justify-center border border-white rounded-full w-fit py-2.5 px-7 text-sm">AI music production</div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex items-center justify-center border border-white rounded-full w-fit py-2.5 px-7 text-sm">AI Composition</div>
                            <Button className="flex h-[42px] cursor-pointer items-center justify-center bg-white text-bg rounded-full w-fit py-2.5 px-7 text-xs font-bold">Generate now</Button>
                        </div>
                    </div>
                    <div>
                        <img src={img6} alt="" className="rounded-md" />
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3 items-center justify-center pt-56">
                <div className="max-w-5xl w-full pb-5">
                    <h1 className="text-5xl text-text/50">More Features</h1>
                    <h1 className=" flex text-5xl text-text/50 pt-3"><p className="text-text">Torus AI&nbsp;</p> offers to an individual</h1>
                </div>
                <div className="grid grid-cols-3 w-full max-w-5xl gap-10 py-14 border-t border-text">
                    <FeatureCard heading="Write mails and  replies" description="We are visionaries We will tell you everything you need about the market at the moment, but also predict how the cost of housing and your area will change in a few years" />
                    <FeatureCard heading="Read pdf and attachments" description="We do not want to sell you any specific object, our goal is to find the 'right' apartment for you and remain partners for many years." />
                    <FeatureCard heading="Scans Images" description="We provide a full range of services for the purchase and sale of real estate, from searching for an object and ending with paperwork." />
                    <FeatureCard heading="Write codes & programs" description="The housing should make your life better. Therefore, when selecting real estate, we carefully learn your request and find only what is ideal." />
                    <FeatureCard heading="Research" description="We have more than 130 objects in our portfolio, but for you we will make an individual selection with only suitable options." />
                    <FeatureCard heading="Automation" description="Whether it's the legal execution of a transaction, interior design or the technical details of a building, our brokers will tell you everything." />
                </div>
            </div>


            {/* Call to Action */}
            <div className="w-full h-screen flex items-center justify-center">
                <div className="relative overflow-hidden w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-3 bg-white/5 rounded-md pt-24 pb-16">
                    <h1 className="text-4xl z-10 font-semibold">Torus AI has no limitation.</h1>
                    <h1 className="text-4xl z-10 font-semibold">Get started in a journey with Torus AI.</h1>
                    <Button className="bg-primary z-10 cursor-pointer text-xs font-semibold rounded-full text-bg px-6 py-5 mt-10">
                        Create an Account
                    </Button>
                    <div>
                        <img src={star3Icon} className="absolute top-0 left-0 z-10" alt="" />
                        <img src={star2Icon} className="absolute top-10 left-52 z-10" alt="" />
                        <img src={star2Icon} className="absolute h-14 w-14 top-5 right-10 z-10" alt="" />
                        <img src={star2Icon} className="absolute h-10 w-10 bottom-10 right-56 z-10" alt="" />
                    </div>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                        className="absolute -bottom-[1900px] w-[2000px] h-[2000px] rounded-tr-full rounded-tl-full circular-gradient">
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div >
    )
}

export default Home