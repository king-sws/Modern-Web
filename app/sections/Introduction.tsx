"use client"
import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineStar } from "react-icons/md";
import { useScroll, useTransform } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const text = "You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves."
const word = text.split(" ")
const Introduction = () => {
  const scrollTarget = useRef<HTMLEmbedElement>(null)
  const { scrollYProgress } = useScroll({target: scrollTarget, offset:["start end", "end end"]})
  const [currentWord, setCurrentWord] = useState(0)
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, word.length] )
  useEffect(()=>{
    wordIndex.on("change", (e)=>{
      setCurrentWord(e)
    })
  }, [wordIndex])

  return (
    <section id="introduction" className="pb-16 pt-20 lg:pt-20 lg:pb-32">
      <div className="flex justify-center flex-col w-full items-center text-center p-[1rem] lg:p-[2rem]  ">
        <div className="sticky top-24 md:top-28 lg:top-32">
          <h1 className='inline-flex gap-2 border text-sm border-lime-400 rounded-full items-center justify-center px-4 py-2  text-lime-400 '> 
              <MdOutlineStar />
              INTRODUCING LAYERS
          </h1>
          <div className="">
              <h2 className='text-4xl md:text-6xl lg:text-7xl font-semibold mt-4  text-white/15'><span className='text-white' > 
                Your creative process deserves better.</span> 
                {word.map((item, wordIndex)=>(
                  <span key={wordIndex} 
                    className={twMerge("transition duration-500",
                      wordIndex < currentWord && 'text-white'
                    )} 
                  >
                    {`${item} `}
                  </span>
                ))}
              <p className='text-lime-400' >That&apos;s why we build Layers. </p></h2>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget} ></div>
      </div>
    </section>
  )
}

export default Introduction