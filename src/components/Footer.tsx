import { Link } from "react-router-dom"
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaYoutube, FaGooglePlusG, FaViber, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import SocialButton from "./SocialButton";

const followUsIcons = [
    { icon: <ImFacebook2 className="text-text h-3 w-3" />, },
    { icon: <FaGooglePlusG className="text-text h-5 w-5" />, },
    { icon: <FaInstagram className="text-text h-4 w-4" />, },
    { icon: <FaYoutube className="text-text h-5 w-5" />, },
]

const letsChatIcons = [
    { icon: <FaViber className="text-text h-5 w-5" />, },
    { icon: <FaTelegramPlane className="text-text h-5 w-5" />, },
    { icon: <FaWhatsapp className="text-text h-5 w-5" />, },
];

const Footer = () => {
    return (
        <div className="relative overflow-hidden w-full border-t border-text/20">
            <div className="flex flex-col w-full max-w-5xl mx-auto py-10">
                <div className="flex gap-3 h-96">
                    <div>
                        <p className="text-[9px] text-text/40 tracking-wider pb-5">Navigation</p>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="flex flex-col gap-1 w-36">
                                <Link className="text-[11px] tracking-wider" to="#">Schedule</Link>
                                <Link className="text-[11px] tracking-wider" to="#">Courses</Link>
                                <Link className="text-[11px] tracking-wider" to="#">Pricing</Link>
                                <Link className="text-[11px] tracking-wider" to="#">Payment</Link>
                            </div>
                            <div className="flex flex-col gap-1 w-36">
                                <Link className="text-[11px] tracking-wider" to="#">Gallery</Link>
                                <Link className="text-[11px] tracking-wider" to="#">News</Link>
                                <Link className="text-[11px] tracking-wider" to="#">Contacts</Link>
                            </div>
                            <div className="w-36"></div>
                        </div>
                    </div>
                    <div className="">
                        <div className="pb-14">
                            <p className="text-[9px] text-text/40 tracking-wider pb-4">Contact Us</p>
                            <div className="grid grid-cols-2">
                                <p className="text-[11px] tracking-wider">+1 (406) 555-0120</p>
                                <p className="text-[11px] tracking-wider">help@torusai.com</p>
                                <p className="text-[11px] tracking-wider">+1 (406) 555-0120</p>
                            </div>
                        </div>
                        <div className="flex gap-16 pb-14">
                            <div>
                                <p className="text-[9px] text-text/40 tracking-wider pb-4">Follow Us</p>
                                <div className="flex gap-2">
                                    {followUsIcons.map((item, index) => (
                                        <SocialButton key={index} icon={item.icon} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-[9px] text-text/40 tracking-wider pb-4">Lets Chat</p>
                                <div className="flex gap-2">
                                    {letsChatIcons.map((item, index) => (
                                        <SocialButton key={index} icon={item.icon} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[9px] text-text/40 tracking-wider pb-4">Location</p>
                            <p className="text-[11px] tracking-wider">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-end text-[9px] text-text/40 tracking-wider">
                    <div className="flex flex-col gap-1">
                        <p>Copyright</p>
                        <p>Privacy</p>
                        <p>All rights reserved</p>
                    </div>
                    <div className="pr-10">
                        <p>&copy;2025 — Torus AI</p>
                    </div>
                    <div className="flex gap-6">
                        <p>En</p>
                        <p>Es</p>
                    </div>
                </div>
            </div>
            <div className="absolute -top-[1150px] w-[1500px] h-[1500px] rounded-tr-full rounded-tl-full circular-gradient"></div>
        </div>
    )
}

export default Footer