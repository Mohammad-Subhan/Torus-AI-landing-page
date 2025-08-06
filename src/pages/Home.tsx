import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import FeatureCard from '@/components/FeatureCard'
import Footer from '@/components/Footer'
import TrendingPrompts from '@/components/TrendingPrompts'
import { motion } from "motion/react"
import assets from '@/assets/assets'

const Home = () => {
    return (
        <div className="bg-bg flex flex-col overflow-hidden min-h-screen text-text w-full">
            <Navbar />

            {/* Top Section */}
            <div className="flex flex-col items-center justify-center h-screen gap-3 overflow-hidden relative">
                <h1 className="sm:text-lg xs:text-base text-xs font-medium">Torus AI</h1>
                <div className="flex flex-col text-3xl xs:text-4xl sm:text-5xl font-medium text-center gap-3">
                    <p>Find Inspiration.</p>
                    <p>Create, Generate,</p>
                    <p>Produce & Automate</p>
                </div>
                <div className="text-center max-w-[590px] mx-8 pt-3">
                    <p className="sm:text-[13px] text-[11px] xs:text-xs text-text/70 font-light leading-6 z-[1]">
                        Welcome to PromptVerse. Effortlessly create content, explore endless prompts, and stay ahead with real-time trends. Automate emails, social media, and more while our AI extracts knowledge from any document or URL. Experience a stunning, futuristic design that boosts productivity.
                    </p>
                </div>
                <div className="flex items-center gap-3 pt-5">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="z-[1] border border-white flex items-center justify-center text-xs sm:text-sm font-medium gap-2 rounded-full text-text px-6 py-2.5 cursor-pointer">
                        Start Generating
                        <img src={assets.magicWandIcon} className="text-text h-4" alt="" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="z-[1] bg-primary cursor-pointer text-xs sm:text-sm font-medium rounded-full text-bg px-6 py-2.5">
                        Download
                    </motion.button>
                </div>
                <div>
                    <img src={assets.starIcon} alt="" className="h-7 w-7 hidden xs:flex absolute z-[1] left-[37.25%] -bottom-3.5" />
                    <img src={assets.starIcon} alt="" className="hidden sm:flex absolute h-3 w-3 z-[1] left-[16.73%] top-[313px]" />
                    <img src={assets.starIcon} alt="" className="h-3 w-3 absolute z-[1] left-[4.73%] top-[100px]" />
                    <img src={assets.starIcon} alt="" className="h-3 w-3 absolute z-[1] left-[65.75%] top-[155px]" />
                    <img src={assets.starIcon} alt="" className="h-3 w-3 hidden sm:flex absolute z-[1] left-[85.5%] top-[650px]" />
                    <img src={assets.starIcon} alt="" className="h-5 w-5 hidden sm:flex absolute z-[1] left-[32.86%] top-[170px]" />
                    <img src={assets.starIcon} alt="" className="h-5 w-5 hidden xs:flex absolute z-[1] left-[95.3%] top-[300px]" />
                    <img src={assets.starIcon} alt="" className="h-4 w-4 hidden xs:flex absolute z-[1] left-[5.5%] top-[600px]" />
                </div>
                <div className="absolute -bottom-[500px] w-[1000px] h-[1000px] rounded-tr-full rounded-tl-full circular-gradient"></div>
            </div>

            {/* Prompts Section */}
            <div className="flex flex-col items-center justify-center gap-3 px-4 pt-32 w-full">
                <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="text-2xl xs:text-4xl text-center font-medium">Create more with Torus</h1>
                    <p className="text-center max-w-[600px] pt-5 text-[11px] leading-6 text-text/60">Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.</p>
                </div>
                <div className="pt-12 w-full">
                    <TrendingPrompts />
                </div>
            </div>

            {/* Trending Prompts */}
            <div className="flex flex-col gap-3 items-center justify-center pt-32 px-4">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl xs:text-4xl text-center font-medium">See Trending Prompts</h1>
                    <p className="text-center max-w-[600px] pt-5 text-xs leading-6 text-text/60">Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.</p>
                    <div className="flex items-center gap-3 pt-5">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            className="z-[1] border border-white flex items-center justify-center text-xs xs:text-sm font-medium gap-2 rounded-full text-text px-6 py-2.5 cursor-pointer">
                            Start Generating
                            <img src={assets.magicWandIcon} className="text-text h-4" alt="" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            className="z-[1] bg-primary cursor-pointer text-xs xs:text-sm font-medium rounded-full text-bg px-6 py-2.5">
                            Download
                        </motion.button>
                    </div>
                </div>
                <div className="pt-24">
                    <img src={assets.trendingPromptImage} alt="trending prompts" className="w-full max-w-5xl" />
                </div>
            </div>

            {/* Images like never seen before */}
            <div className="flex flex-col gap-3 items-center justify-center pt-32 px-4">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl xs:text-4xl text-center font-medium">Images like never seen before</h1>
                    <p className="text-center max-w-[600px] pt-5 text-xs leading-6 text-text/60">Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.</p>
                </div>
                <div className="mt-24 bg-text/5 p-8 rounded-md flex xs:flex-row flex-col gap-4 justify-center items-center">
                    <img src={assets.img1} alt="" className="h-[260px] xs:h-[480px] rounded-md" />
                    <div className="grid grid-cols-2 gap-4">
                        <img src={assets.img2} alt="" className="h-[124px] xs:h-[234px] rounded-md" />
                        <img src={assets.img3} alt="" className="h-[124px] xs:h-[234px] rounded-md" />
                        <img src={assets.img4} alt="" className="h-[124px] xs:h-[234px] rounded-md" />
                        <img src={assets.img5} alt="" className="h-[124px] xs:h-[234px] rounded-md" />
                    </div>
                </div>
            </div>

            {/* Generate audio and music */}
            <div className="flex flex-col gap-3 items-center justify-center pt-32 px-4">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl xs:text-4xl text-center font-medium">Generate audio and music</h1>
                    <p className="text-center max-w-[600px] pt-5 text-xs leading-6 text-text/60">Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.</p>
                </div>
                <div className="mt-24 bg-text/5 p-8 rounded-md grid gap-4 grid-cols-1 xs:grid-cols-2 max-w-5xl">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-[27px] font-medium">Enhance Your Projects with Ultra-Realistic AI Voices</h1>
                        <p className="text-sm leading-6 text-text/60">Create engaging voice content with unique AI Voices perfect for your audience.</p>
                        <p className="text-sm leading-6 text-text/60">Generate Conversational, Long-form or Short-form Voice Content With Consistent Quality and Performances.</p>
                        <p className="text-sm leading-6 text-text/60">Secure and Private Voice Generations with Full Commercial and Copyrights.</p>
                        <div className="xs:hidden block">
                            <img src={assets.img6} alt="" className="rounded-md" />
                        </div>
                        <div className="flex gap-3">
                            <div className="flex items-center text-center justify-center border border-white rounded-full w-fit py-2.5 px-7 text-sm">Train Voice Models</div>
                            <div className="flex items-center text-center justify-center border border-white rounded-full w-fit py-2.5 px-7 text-sm">Text-to-Speech</div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex items-center text-center justify-center border border-white rounded-full w-fit py-2.5 px-7 text-sm">AI voice generation</div>
                            <div className="flex items-center text-center justify-center border border-white rounded-full w-fit py-2.5 px-7 text-sm">AI music production</div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex items-center text-center justify-center border border-white rounded-full w-fit py-2.5 px-7 text-sm">AI Composition</div>
                            <Button className="flex h-[42px] cursor-pointer items-center justify-center bg-white text-bg rounded-full w-fit py-2.5 px-7 text-xs font-bold">Generate now</Button>
                        </div>
                    </div>
                    <div className="hidden xs:block">
                        <img src={assets.img6} alt="" className="rounded-md" />
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3 items-center justify-center pt-32 px-4">
                <div className="max-w-5xl w-full pb-5">
                    <h1 className="xs:text-5xl text-2xl text-text/50">More Features</h1>
                    <h1 className="flex text-2xl xs:text-5xl text-text/50 pt-3"><p className="text-text">Torus AI&nbsp;</p> offers to an individual</h1>
                </div>
                <div className="grid xs:grid-cols-3 grid-cols-1 w-full max-w-5xl gap-10 px-10 xs:px-0 py-14 border-t border-text">
                    <FeatureCard heading="Write mails and  replies" description="We are visionaries We will tell you everything you need about the market at the moment, but also predict how the cost of housing and your area will change in a few years" />
                    <FeatureCard heading="Read pdf and attachments" description="We do not want to sell you any specific object, our goal is to find the 'right' apartment for you and remain partners for many years." />
                    <FeatureCard heading="Scans Images" description="We provide a full range of services for the purchase and sale of real estate, from searching for an object and ending with paperwork." />
                    <FeatureCard heading="Write codes & programs" description="The housing should make your life better. Therefore, when selecting real estate, we carefully learn your request and find only what is ideal." />
                    <FeatureCard heading="Research" description="We have more than 130 objects in our portfolio, but for you we will make an individual selection with only suitable options." />
                    <FeatureCard heading="Automation" description="Whether it's the legal execution of a transaction, interior design or the technical details of a building, our brokers will tell you everything." />
                </div>
            </div>


            {/* Call to Action */}
            <div className="w-full flex items-center justify-center py-32 px-4">
                <div className="relative overflow-hidden w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-3 bg-white/5 rounded-md pt-24 pb-16">
                    <h1 className="text-2xl xs:text-4xl z-[1] font-semibold">Torus AI has no limitation.</h1>
                    <h1 className="text-2xl text-center xs:text-4xl z-[1] font-semibold">Get started in a journey with Torus AI.</h1>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="z-[1] bg-primary cursor-pointer text-xs font-medium rounded-full text-bg px-6 py-2.5 mt-10">
                        Create an account
                    </motion.button>
                    <div>
                        <img src={assets.starIcon3} className="xs:block hidden absolute top-0 left-0 z-[1]" alt="" />
                        <img src={assets.starIcon2} className="xs:block hidden absolute top-10 left-52 z-[1]" alt="" />
                        <img src={assets.starIcon2} className="absolute h-14 w-14 top-5 right-10 z-[1]" alt="" />
                        <img src={assets.starIcon2} className="xs:block hidden absolute h-10 w-10 bottom-10 right-56 z-[1]" alt="" />
                        <img src={assets.starIcon2} className="absolute h-10 w-10 bottom-10 right-80 z-[1]" alt="" />
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