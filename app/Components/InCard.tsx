'use client'
import React, { Fragment } from 'react'
import { type IntegrationType } from '../sections/Integration'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const InCard = (props: {
    className?: string; 
    integrations: IntegrationType;
    reverce?: boolean
}) => {
    const { integrations , className, reverce } = props
  return (

            <motion.div
                initial={{ y: reverce ? "-50%" : 0 }}
                animate={{ y: reverce ? 0 : "-50%" }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className={twMerge("flex flex-col gap-4", className)}>
                    {Array.from({ length: 2 }).map((_, i) => (
                        <Fragment key={i}>
                            {integrations.map((integration, index) => (
                                <div key={index} className=" p-6 rounded-3xl bg-neutral-900 border border-white/10 ">
                                    <div className="flex justify-center">
                                        <Image 
                                            src={integration.icon} 
                                            alt={integration.name} 
                                            width={50}
                                            height={50}
                                            className="size-24" 
                                        />
                                    </div>
                                    <h3 className="text-3xl font-medium mt-4 text-center">{integration.name}</h3>
                                    <p className="text-center px-5 text-white/50  mt-2">{integration.description}</p>
                                </div>
                             ))}
                        </Fragment>
                    ))}
                
                </motion.div>

  )
}

export default InCard