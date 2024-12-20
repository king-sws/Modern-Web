"use client"
import Image from 'next/image';
import React from 'react';
import Button from '../Components/Button';
import Link from 'next/link';
import { BiMenu, BiX } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';

const NavbarLinks = [
    { label: "#home", name: "Home" },
    { label: "#features", name: "Features" },
    { label: "#integration", name: "Integrations" },
    { label: "#faqs", name: "FAQs" }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <section className=" fixed w-full z-[100] top-0 ">
            <div className='px-6 md:px-12 lg:px-24 py-8'>
                <div className="flex justify-between items-center border border-white/15 bg-neutral-950/75 backdrop-blur rounded-full px-6 py-2">
                    <div className="">
                        <Link href="/">
                            <Image src="/logo.svg" alt="logo" width={100} height={100} className='outline-none border-none' />
                        </Link>
                    </div>
                    <div className="hidden lg:flex md:gap-1 gap-5">
                        {NavbarLinks.map((link, index) => (
                            <div key={index} className="px-4">
                                <Link href={`${link.label}`} className='font-medium hover:text-lime-400 transition-all '>{link.name}</Link>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:flex gap-5">
                        <Button variant="secondary" className='hover:bg-white/15 transition-all'>Log In</Button>
                        <Button variant="primary" className='hover:bg-lime-500 transition-all'>Sign Up</Button>
                    </div>
                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none transition">
                            {!isOpen ? <BiMenu size={24} /> : <BiX size={24} />}
                        </button>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{hanging: 0}}
                            className={`overflow-hidden`}
                        >
                            <div className="md:hidden bg-neutral-950/75 backdrop-blur z-[99999] flex flex-col p-6 rounded-xl items-center mt-4 gap-3">
                                {NavbarLinks.map((link, index) => (
                                    <Link key={index} href={link.label} className='font-medium'>
                                        {link.name}
                                    </Link>
                                ))}
                                <Button variant="secondary" className='hover:bg-white/15 transition-all'>Log In</Button>
                                <Button variant="primary" className='hover:bg-lime-500 transition-all'>Sign Up</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
        
    );
}

export default Navbar;
