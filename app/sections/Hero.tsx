'use client'
import React, { useEffect } from 'react';
import Button from '../Components/Button';
import designEx1 from '@/public/design-example-1.png';
import designEx2 from '@/public/design-example-2.png';
import Image from 'next/image';
import Pointer from '../Components/Pointer';
import { motion, useAnimate } from 'framer-motion';
import cursorYouImage from "@/public/cursor-you.svg"

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [LeftPointerScope, LeftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [RightPointerScope, RightPointerAnimate] = useAnimate();


  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, {opacity: 1 }, {duration: 0.5} ],
      [leftDesignScope.current, {y: 0, x: 0}, {duration: 0.5}],
    ]);
    LeftPointerAnimate([
      [LeftPointerScope.current, {opacity: 1 }, {duration: 0.5}],
      [LeftPointerScope.current, {y: 0, x: -100 }, {duration: 0.5}],
      [LeftPointerScope.current, {x: 0, y: [0, 16, 0] }, {duration: 0.5, ease: "easeInOut"}],
    ])
    rightDesignAnimate([
      [rightDesignScope.current, {opacity: 1 }, {duration: 0.5, delay: 1.5}],
      [rightDesignScope.current, {y: 0, x: 0}, {duration: 0.5}]
      ]);
      RightPointerAnimate([
        [RightPointerScope.current, {opacity: 1 }, {duration: 0.5, delay: 1.5}],
        [RightPointerScope.current, {y: 0, x: 175 }, {duration: 0.5}],
        [RightPointerScope.current, {x: 0, y: [0, 20, 0] }, {duration: 0.5}]

      ])
  }, [])
  

  return (
  <section id='home' className="pb-[11rem] pt-[9rem] md:pt-[11rem] lg:pt-[11rem] overflow-x-clip" style={{ cursor: `url(${cursorYouImage.src}), auto`, }} >
      <div className="flex justify-center relative flex-col items-center text-center">

        <motion.div initial={{opacity: 0, y: 100, x: -100}} drag ref={leftDesignScope} className="absolute -left-32 top-16 hidden lg:flex">
          <Image src={designEx1} alt="design example 1" draggable='false' className='' />
        </motion.div>

        <motion.div ref={LeftPointerScope} initial={{opacity: 0, y: 100, x: -200}} className="absolute left-56 top-[22rem] hidden lg:flex">
          <Pointer name="Andrea" />
        </motion.div>

        <motion.div ref={rightDesignScope} drag initial={{opacity: 0, x: 100, y: 100}} className="absolute -right-[14rem] -top-6 hidden lg:flex">
          <Image src={designEx2} draggable='false' alt="design example 2" className='' />
        </motion.div>

        <motion.div ref={RightPointerScope}  initial={{opacity: 0, x:275, y:100}} className="absolute right-80 -top-4 hidden lg:flex">
          <Pointer name="Bryan" color='red' />
        </motion.div>

        <div className="inline-flex text-black font-medium py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full">$7.5M seed round raised</div>
        <h1 className='text-6xl px-1 md:text-7xl lg:text-[5rem] font-semibold mt-4 mb-6 lg:max-w-[800px]'>
          Impactful design, created effortlessly
        </h1>
        <p className='max-w-[620px] px-2 mt-4 text-zinc-500'>
          Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow.
        </p>
        <form className='flex border border-zinc-700 rounded-full mt-8'>
          <input type="email" name="email" className='bg-transparent border-none outline-none px-6 py-2' placeholder='Enter your email' />
          <Button variant="primary" className='hover:bg-lime-500 transition-all whitespace-nowrap'>Sign Up</Button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
