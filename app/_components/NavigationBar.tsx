import { HomeIcon, Menu, SquareMenu, X } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"
import { useState } from "react";

export default function NavigationBar() {
    const [open, setOpen] = useState(false);
    const animateVariants = {
        close: { height: '0px', opacity: 0 },
        open: { height: '100%', opacity: 1 },
    }

    return (
        <motion.nav className={" md:w-fit mt-3 mx-3 md:px-5 fixed md:left-1/2 md:-translate-x-1/2 py-3 bg-stone-600/70 backdrop-blur-sm z-50 text-shadow-lg text-shadow-white/30 rounded-xl"}>
            <button className="mx-3 p-1 rounded md:hidden hover:cursor-pointer" onClick={() => setOpen(!open)}>
                {open ? <X /> : <Menu />}
            </button>

            <motion.ul id="large-screen-nav" className={"hidden gap-1 md:flex md:flex-row md:gap-5 items-center justify-center"}>
                <li><Link href="#hero">Home</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#about-me">About</Link></li>
                <li><Link href="#contact-me">Contacts</Link></li>
            </motion.ul>

            <motion.div id="small-screen-nav" variants={animateVariants} animate={open ? 'open' : 'close'} className={"md:hidden" + (open ? " inline" : " hidden")}>
                <ul className="flex flex-col gap-1 px-3 my-2 justify-center w-[50svh]">
                    <li><Link href="#hero">Home</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#about-me">About</Link></li>
                    <li><Link href="#contact-me">Contacts</Link></li>
                </ul>
            </motion.div>
        </motion.nav>
    );
}