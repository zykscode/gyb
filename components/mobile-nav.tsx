'use client';

import type { Cycle } from 'framer-motion';
import { motion } from 'framer-motion';
import * as React from 'react';

import { Icons } from '#/components/icons';
import { cn } from '#/lib/utils';
import type { NavItem } from '#/types';

import NavsList from './navs-small';

interface MobileNavProps {
  items: NavItem[];
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  toggleOpen: Cycle;
}

const mobileCard = {
  hidden: {
    transition: {
      duration: 0.6,
    },
  },
  show: {
    transition: {
      duration: 0.6,
    },
  },
};
const mobileTab = {
  hidden: {
    opacity: 0,
    scale: [1, 0],
    transition: {
      duration: 0.6,
      type: 'ease-in',
    },
  },
  show: {
    y: [150, 0],

    opacity: [0, 1],
    transition: {
      type: 'ease-in',
      duration: 0.6,
      delay: 1.2,
    },
  },
};

export function MobileNav({
  items,
  isOpen,
  toggleOpen,
  className,
  children,
}: MobileNavProps) {
  return (
    <div className="">
      <svg className="h-8 w-8 fill-primaryFg" viewBox="0 0 17 17">
        <path d="M6.78027 13.6729C8.24805 13.6729 9.60156 13.1982 10.709 12.4072L14.875 16.5732C15.0684 16.7666 15.3232 16.8633 15.5957 16.8633C16.167 16.8633 16.5713 16.4238 16.5713 15.8613C16.5713 15.5977 16.4834 15.3516 16.29 15.1582L12.1504 11.0098C13.0205 9.86719 13.5391 8.45215 13.5391 6.91406C13.5391 3.19629 10.498 0.155273 6.78027 0.155273C3.0625 0.155273 0.0214844 3.19629 0.0214844 6.91406C0.0214844 10.6318 3.0625 13.6729 6.78027 13.6729ZM6.78027 12.2139C3.87988 12.2139 1.48047 9.81445 1.48047 6.91406C1.48047 4.01367 3.87988 1.61426 6.78027 1.61426C9.68066 1.61426 12.0801 4.01367 12.0801 6.91406C12.0801 9.81445 9.68066 12.2139 6.78027 12.2139Z"></path>
      </svg>
      <div className="flex">
        <Icons.logo className="flex h-12 w-12 rounded-full " />
        <div className="flex flex-col justify-center text-xs">
          <span className="text-[0.75rem] font-extrabold">KOGI STATE</span>
          <span className="text-[10px] font-normal ">GOVERNMENT</span>
        </div>
      </div>
      <motion.div
        variants={mobileCard}
        className={`absolute inset-0 -z-20 grid grid-cols-4 ${
          isOpen ? 'bg-secondaryFg  backdrop-blur-sm ' : '4 inset-0 scale-0'
        } md:hidden `}
      >
        <div className="absolute inset-0 -z-20 grid  h-screen grid-cols-4">
          grid
        </div>
      </motion.div>
      <motion.div
        className={cn(
          'fixed inset-0 z-30 top-16 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md  md:hidden ',
        )}
        variants={mobileTab}
      >
        {isOpen && <NavsList></NavsList>}
      </motion.div>
    </div>
  );
}
