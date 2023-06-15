'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

const Path = ({ ...props }) => (
  <motion.path
    strokeWidth="1"
    className=" stroke-[#1a1a1a] dark:stroke-[#fdfdfd]"
    strokeLinecap="round"
    {...props}
    initial={false}
  />
);

export const Menu = ({ toggle, className }) => (
  <button
    className={`${className}  bg-transparent p-2 dark:border-[#fdfdfd]`}
    onClick={toggle}
  >
    <svg
      width="1em"
      height="1em"
      className="flex flex-col"
      viewBox="0 -1.5 21.5 21.5"
    >
      <Path
        variants={{
          hidden: { d: 'M 2 2.5 L 20 2.5' },
          show: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          hidden: { opacity: 1 },
          show: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          hidden: { d: 'M 2 16.346 L 20 16.346' },
          show: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);
