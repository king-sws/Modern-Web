import React from 'react'
import { MdOutlineStar } from 'react-icons/md'
import FeaturesCard from '../Components/FeaturesCard'
import Av1 from '@/public/avatar-ashwin-santiago.jpg'
import Av2 from '@/public/avatar-lula-meyers.jpg'
import Av3 from '@/public/avatar-florence-shaw.jpg'
import Av4 from '@/public/avatar-owen-garcia.jpg'
import Image from 'next/image'
import Av from '../Components/Av'

const features = [
    "Asset Library",
    "Code Previews",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
]

const Features = () => {
  return (
    <section id="features" className="pt-20 pb-28 lg:py-24">
      <div className="flex justify-center flex-col w-full items-center text-center p-[1rem] lg:p-[2rem]  ">
        <div>
            <h1 className='inline-flex uppercase gap-2 border text-sm border-lime-400 rounded-full items-center justify-center px-4 py-2  text-lime-400 '> 
            <MdOutlineStar />
             features
            </h1>
            <div className="text-center">
                <h2 className='text-4xl md:text-6xl lg:text-7xl mt-4 font-medium text-white'>Where power meets</h2>
                <p className='text-4xl md:text-6xl lg:text-7xl text-lime-400 font-medium  ' >simplicity</p>
            </div>
        </div>
        <div className="flex justify-center mt-5">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 mt-12">
                <FeaturesCard
                    title="Real-time collaboration" 
                    description="Work together seamlessly with conflict-free team editing." 
                    className='col-span-1 md:col-span-2 lg:col-span-1 group '
                >
                    <div className="flex justify-center items-center aspect-video ">
                        <Av className="z-50">
                            <Image src={Av1} alt='Avatar' className='rounded-full' />
                        </Av>
                        <Av className="z-40 -ml-6 border-indigo-500 ">
                            <Image src={Av2} alt='Avatar' className='rounded-full' />
                        </Av>
                        <Av className="z-20 -ml-6 border-amber-500">
                            <Image src={Av3} alt='Avatar' className='rounded-full ' />
                        </Av>
                        <Av className=" -ml-6 border-transparent group-hover:border-green-400 transition relative flex justify-center items-center">
                            <Image src={Av4} alt='Avatar' className='rounded-full duration-500 absolute size-full opacity-0 p-1 transition group-hover:opacity-100' />
                            <div className="bg-neutral-700 gap-1 size-full rounded-full inline-flex items-center justify-center">
                                <span className='size-1.5 bg-white rounded-full  ' />
                                <span className='size-1.5 bg-white rounded-full  ' />
                                <span className='size-1.5 bg-white rounded-full  ' />

                            </div>
                        </Av>
                    </div>
                </FeaturesCard>
                <FeaturesCard
                    title="Interactive Prototyping" 
                    description="Engage your clients with prototyping tools that make your designs come to life." 
                    className='col-span-1 md:col-span-2 lg:col-span-1 group'
                >
                    <div className="aspect-video flex items-center justify-center group ">
                        <p className='text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center relative' >We&apos;re achived
                            <span className='block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ' >incredible</span>
                            <video src='/assets/gif-incredible.mp4' height={150} width={150} className='absolute bottom-full left-1/2 transition -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 ' autoPlay loop muted playsInline  />
                        growth this years</p>
                    </div>
                </FeaturesCard>
                <FeaturesCard
                    title="Keyboard Quick Actions" 
                    description="Powerful commands to help you create designs more quickly"
                    className='col-span-1 md:col-span-2 md:col-start-2 group  lg:col-span-1'
                    >
                        <div className="aspect-video flex justify-center items-center">
                            <div className="flex items-center justify-center gap-4 ">
                                <span className='flex justify-center group-hover:outline outline-2 outline-offset-2 transition-all outline-lime-400  group-hover:translate-y-1 items-center font-medium text-black  bg-neutral-300 size-14 rounded-xl w-[100px] ' >shift</span>
                                <span className='flex justify-center group-hover:outline outline-2 outline-offset-2 transition-all outline-lime-400 items-center group-hover:translate-y-1 delay-150 font-medium text-black bg-neutral-300 size-14 rounded-xl '>alt</span>
                                <span className='flex justify-center group-hover:outline outline-2 outline-offset-2 transition-all outline-lime-400 group-hover:translate-y-1 items-center font-medium delay-300 text-black bg-neutral-300 size-14 rounded-xl '>C</span>
                            </div>
                        </div>
                    </FeaturesCard>
            </div>
        </div>
            <div className="mt-8  flex-wrap flex justify-center px-1 lg:px-12 gap-3 lg:gap-4">
                    {features.map((feature, index) => (
                        <div className="bg-neutral-900 hover:scale-105 transition duration-500 cursor-pointer group border border-white/10 rounded-xl inline-flex  items-center justify-center gap-3 text-sm px-3 py-2 md:px-5 md:py-2" key={index} >
                            <span className='bg-lime-400 group-hover:rotate-45 transition duration-500 text-black rounded-full size-5 inline-flex  items-center justify-center text-xl  ' > &#10038; </span>
                            <p className='font-medium md:text-lg ' > {feature} </p>
                        </div>
                    ))}
            </div>
        </div>
    </section>
  )
}

export default Features