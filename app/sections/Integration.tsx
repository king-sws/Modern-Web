import React from 'react'
import { MdOutlineStar } from 'react-icons/md';
import InCard from '../Components/InCard';


const integrations = [
    { name: "Figma", icon: "figma-logo.svg", description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: "notion-logo.svg", description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: "slack-logo.svg", description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: "relume-logo.svg", description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: "framer-logo.svg", description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: "github-logo.svg", description: "GitHub is the leading platform for code collaboration." },
];

export type IntegrationType = typeof integrations;

const Integration = () => {
  return (
    <section id="integration" className="">
      <div className="grid  lg:grid-cols-2 justify-center flex-col w-full lg:gap-16 items-center text-center p-[1rem] lg:p-[2rem]  ">
        <div className="flex flex-col  items-start ">
            <h1 className='inline-flex uppercase gap-2 border text-sm border-lime-400 rounded-full items-center justify-center px-4 py-2  text-lime-400 '> 
            <MdOutlineStar />
             Integrations
            </h1>
        <div className="text-start">
            <h2 className='text-6xl md:text-6xl lg:text-7xl mt-4 font-medium text-white'>Play well with 
                <span className='text-lime-400' > others</span> 
            </h2>
            <p className='mt-4 text-lg text-white/50'>Layers seamlessly connects with favorite tools, making it easy to plug into any workflow and collaborate across platforms.</p>
        </div>
        </div>

        <div className="h-[400px] lg:h-[800px] overflow-hidden  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 mt-8 lg:mt-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" >
            <InCard integrations={integrations} />
            <InCard reverce integrations={integrations.slice().reverse()} className='hidden md:flex' />
        </div>
        
      </div>

    </section>
  )
}

export default Integration