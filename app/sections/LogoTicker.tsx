"use client"
import React from 'react';
import Image from 'next/image';
import quantumLogo from '@/public/quantum.svg';
import acmeLogo from '@/public/acme-corp.svg';
import echoValleyLogo from '@/public/echo-valley.svg';
import pulseLogo from '@/public/pulse.svg';
import outsideLogo from '@/public/outside.svg';
import { motion } from 'framer-motion';
import apexLogo from '@/public/apex.svg';
import celestialLogo from '@/public/celestial.svg';
import twiceLogo from '@/public/twice.svg';

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

const LogoTicker = () => {
  return (
    <section className="pt-0 lg:py-24 overflow-x-hidden">
      <div className="px-5">
        <h3 className="text-center text-white/50 text-xl">Already chosen by these market leaders</h3>
        <div className="flex overflow-hidden mt-12" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0">
                    <Image src={logo.image} alt={logo.name} width={150} height={150} />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LogoTicker;
