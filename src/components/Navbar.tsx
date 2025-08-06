import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { motion } from "motion/react"
import { Menu, X } from 'lucide-react'
import assets from '@/assets/assets'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const winH = window.innerHeight;

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (Math.abs(currentY - lastScrollY) < 10) return;

            if (currentY > lastScrollY && currentY > winH) {
                setShowHeader(false); // moving down
            } else {
                setShowHeader(true); // moving up
            }

            setLastScrollY(currentY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, winH]);

    return (
        <div className={`fixed ${!showHeader && "top-[-80px]"} transition-all duration-200 ease-linear top-0 z-10 w-full bg-bg/40 backdrop-blur-xl text-text h-20 border-b border-text/10 flex items-center justify-evenly`}>
            <div className="hidden md:flex items-center gap-6 text-xs">
                <Link to="#">About</Link>
                <Link to="#">Technologies</Link>
                <Link to="#">Products</Link>
                <Link to="#">Discover</Link>
            </div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-base">
                <img src={assets.logo} alt="Torus AI Logo" className="h-6" />
                Torus AI
            </motion.div>
            <div className="hidden md:flex items-center gap-6 text-xs">
                <Link to="#">Team</Link>
                <Link to="#">Pricing</Link>
                <Link to="#">Buy Premium</Link>
                <Link to="#">
                    <Button className="bg-primary cursor-pointer rounded-full text-bg text-xs px-5">
                        Get Started
                    </Button>
                </Link>
            </div >
            <div className="md:hidden absolute right-10 cursor-pointer gap-3" onClick={() => setIsOpen(!isOpen)}>
                <Menu />
            </div>

            {/* Mobile Menu */}
            <div onClick={() => setIsOpen(false)} className={`md:hidden fixed h-screen w-full bg-bg/70 top-0 left-0 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            </div>
            <div className={`fixed h-screen w-full max-w-sm bg-bg ${isOpen ? 'right-0' : '-right-full'} top-0 transition-all duration-300 border-l border-text/10`}>
                <div className="flex justify-end p-4">
                    <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-6 text-lg">
                    <Link to="#">About</Link>
                    <Link to="#">Technologies</Link>
                    <Link to="#">Products</Link>
                    <Link to="#">Discover</Link>
                </div>
            </div>
        </div >
    )
}

export default Navbar