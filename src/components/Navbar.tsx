import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <div className="fixed top-0 z-10 w-full bg-bg/40 backdrop-blur-xl text-text h-20 border-b border-text/10 flex items-center justify-evenly">
            <div className="flex items-center gap-6 text-xs">
                <Link to="#">About</Link>
                <Link to="#">Technologies</Link>
                <Link to="#">Products</Link>
                <Link to="#">Discover</Link>
            </div>
            <div className="flex items-center gap-3 text-base">
                <img src="src/assets/logo.svg" alt="Torus AI Logo" className="h-6" />
                Torus AI
            </div>
            <div className="flex items-center gap-6 text-xs">
                <Link to="#">Team</Link>
                <Link to="#">Pricing</Link>
                <Link to="#">Buy Premium</Link>
                <Link to="#">
                    <Button className="bg-primary cursor-pointer rounded-full text-bg text-xs px-5">
                        Get Started
                    </Button>
                </Link>
            </div >
        </div >
    )
}

export default Navbar