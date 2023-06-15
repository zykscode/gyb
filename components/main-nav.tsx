'use client';

import { motion, useCycle } from 'framer-motion';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as React from 'react';

import { MobileNav } from '#/components/mobile-nav';
import type { NavItem } from '#/types';

import LargeScreenMenu from './big-menutoggle';
import { Icons } from './icons';

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

const container = {
  hidden: {
    transition: {
      when: 'afterChildren',
      staggerDirection: -1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerDirection: 1,
    },
  },
};

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <div className="hidden w-full bg-yellow-400 px-8 md:flex md:justify-between md:gap-6 ">
        <Icons.logo className="hidden h-12 w-12 rounded-full md:block" />
        <nav className=""></nav>
      </div>
      <motion.div
        variants={container}
        initial={'hidden'}
        animate={isOpen ? 'show' : 'hidden'}
        className={`flex w-full items-center justify-between px-2 md:hidden `}
      >
        
        <MobileNav
          className=""
          items={items!}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
        >
          {children}
        </MobileNav>
        <LargeScreenMenu
          className={'z-50 h-10 w-10 md:hidden'}
          toggle={() => toggleOpen()}
        />
      </motion.div>
    </>
  );
}
