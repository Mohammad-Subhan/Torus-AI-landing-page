import { motion } from "motion/react"
import assets from '@/assets/assets'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="bg-bg flex flex-col items-center justify-center min-h-screen text-text w-full overflow-hidden relative">
            {/* Decorative stars */}
            <div>
                <img src={assets.starIcon} alt="" className="h-3 w-3 absolute z-[1] left-[4.73%] top-[100px]" />
                <img src={assets.starIcon} alt="" className="h-3 w-3 absolute z-[1] right-[15.75%] top-[155px]" />
                <img src={assets.starIcon} alt="" className="h-3 w-3 hidden sm:flex absolute z-[1] left-[85.5%] top-[200px]" />
                <img src={assets.starIcon} alt="" className="h-5 w-5 hidden sm:flex absolute z-[1] left-[12.86%] top-[170px]" />
                <img src={assets.starIcon} alt="" className="h-5 w-5 hidden xs:flex absolute z-[1] right-[5.3%] top-[400px]" />
                <img src={assets.starIcon} alt="" className="h-4 w-4 hidden xs:flex absolute z-[1] left-[5.5%] bottom-[200px]" />
                <img src={assets.starIcon2} alt="" className="h-6 w-6 absolute z-[1] right-[10%] bottom-[150px]" />
                <img src={assets.starIcon3} alt="" className="h-4 w-4 absolute z-[1] left-[20%] bottom-[300px]" />
            </div>

            {/* Main content */}
            <div className="flex flex-col items-center justify-center gap-6 px-4 z-[1] text-center">
                {/* 404 Number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[8rem] xs:text-[12rem] sm:text-[16rem] font-bold leading-none"
                    style={{
                        background: 'linear-gradient(45deg, #ffffff, rgba(255, 255, 255, 0.7))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
                    }}
                >
                    404
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl xs:text-4xl sm:text-5xl font-medium"
                >
                    Page Not Found
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center max-w-[590px] mx-4 text-xs xs:text-sm text-text/70 font-light leading-6"
                >
                    The page you're looking for seems to have vanished into the digital void.
                    Don't worry, even the most advanced AI can't predict every path. Let's get you back on track.
                </motion.p>

                {/* Action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center gap-3 pt-5 flex-wrap justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        onClick={() => navigate('/')}
                        className="z-[1] bg-primary cursor-pointer text-xs sm:text-sm font-medium rounded-full text-bg px-6 py-2.5 flex items-center gap-2"
                    >
                        Return Home
                        <img src={assets.magicWandIcon} className="h-4 filter invert" alt="" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        onClick={() => navigate(-1)}
                        className="z-[1] border border-white flex items-center justify-center text-xs sm:text-sm font-medium gap-2 rounded-full text-text px-6 py-2.5 cursor-pointer"
                    >
                        Go Back
                    </motion.button>
                </motion.div>
            </div>

            {/* Background gradient */}
            <div className="absolute -bottom-[500px] w-[1000px] h-[1000px] rounded-tr-full rounded-tl-full circular-gradient"></div>
        </div>
    )
}

export default NotFound