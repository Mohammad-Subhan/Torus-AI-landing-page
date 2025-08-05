import Prompt from "./Prompt"
import { motion } from "motion/react"

const TrendingPrompts = () => {

    return (
        <div className="flex flex-col gap-5">
            <div className="flex overflow-hidden">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    className="flex justify-around">
                    {Array.from({ length: 3 }).map((_, i) => <Prompt key={i} />)}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    className="flex justify-around">
                    {Array.from({ length: 3 }).map((_, i) => <Prompt key={i} />)}
                </motion.div>
            </div>
            <div className="flex overflow-hidden">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    className="flex justify-around">
                    {Array.from({ length: 3 }).map((_, i) => <Prompt key={i} />)}
                </motion.div>
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    className="flex justify-around">
                    {Array.from({ length: 3 }).map((_, i) => <Prompt key={i} />)}
                </motion.div>
            </div>
            <div className="flex overflow-hidden">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    className="flex justify-around">
                    {Array.from({ length: 3 }).map((_, i) => <Prompt key={i} />)}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    className="flex justify-around">
                    {Array.from({ length: 3 }).map((_, i) => <Prompt key={i} />)}
                </motion.div>
            </div>
        </div>
    )
}

export default TrendingPrompts