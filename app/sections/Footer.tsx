import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className="pt-24 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center px-5 lg:px-14">
            <div className="mb-4 cursor-pointer">
                <Link href="/" >
                    <Image src="/logo.svg"  alt='logo' width={150} height={150} />
                </Link>
            </div>
            <div className="flex gap-4 lg:gap-8 text-sm text-neutral-500 cursor-pointer ">
                <p className='hover:text-white transition-all'>Contact</p>
                <p className='hover:text-white transition-all'>Privacy Policy</p>
                <p className='hover:text-white transition-all'>Terms & Conditions</p>
            </div>
        </div>
    </section>
)
}

export default Footer