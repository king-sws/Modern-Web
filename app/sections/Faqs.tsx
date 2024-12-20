"use client"
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { MdOutlineStar } from 'react-icons/md'
import { twMerge } from 'tailwind-merge';

const faqs = [
    {
        question: "How is Layers different from other design tools?",
        answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
    },
    {
        question: "How do you handle version control?",
        answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
    },
    {
        question: "Can I work offline?",
        answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
    },
    {
        question: "How does Layers handle collaboration?",
        answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
    },
];

const Faqs = () => {
    const [selectFaqs, setSelectFaqs] = useState(0)
  return (
    <section id="faqs" className="pt-24">
      <div className="flex flex-col justify-center items-center text-center p-[1rem] lg:p-[2rem]  ">
        <h1 className='inline-flex gap-2 border text-sm border-lime-400 rounded-full items-center justify-center px-4 py-2  text-lime-400 '> 
            <MdOutlineStar /> 
            FAQs</h1>
        <div className=" mt-4 ">
            <h2 className='text-6xl text-center max-w-xl mx-auto mt-4 font-medium'>Questions? We&apos;ve got <span className='text-lime-400'> answers</span> </h2>
        </div>
        <div className="flex flex-col max-w-xl mx-auto gap-6 mt-12">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-neutral-900 p-6 rounded-xl ">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => setSelectFaqs(index)} >
                        <h3 className='font-medium'>{faq.question}</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                        className={twMerge("feather feather-plus flex-shrink-0 transition duration-300 text-lime-400", index === selectFaqs && "rotate-45")}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </div>
                    {selectFaqs === index && (
                        <AnimatePresence>
                            <motion.div
                                initial={{ height: 0, marginTop: 0 }}
                                animate={{ height: "auto", marginTop: 24 }}
                                exit={{ height: 0, marginTop: 0 }}
                                className={twMerge("overflow-hidden")}>
                                <p className='text-white/50'>{faq.answer}</p>
                            </motion.div>
                        </AnimatePresence>
                       
                    )}
                    
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Faqs