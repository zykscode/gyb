'use client';

/* eslint-disable no-nested-ternary */
import { motion } from 'framer-motion';
import React, { useState } from 'react';

type PathProps = {
  isHovered: boolean;
  isClicked: boolean;
  props: any;
};

const Path = ({ isHovered, isClicked, ...props }: PathProps) => (
  <motion.path
    strokeWidth={isClicked ? '8' : '8'}
    className="stroke-primaryFg"
    strokeLinecap="round"
    {...props}
    initial="initial"
    animate={isClicked ? 'click' : isHovered ? 'hover' : 'initial'}
  />
);

const LargeScreenMenu: React.FC<any> = React.memo(({ className, toggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
    toggle();
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} cursor-pointer `}
      height={'1em'}
      width={'1em'}
      viewBox="0 0 100 100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <Path
        variants={{
          initial: {
            d: 'M 20,25 L 80,25',
            pathLength: 1,
          },
          hover: {
            pathLength: [0.33, 0.66, 0.66, 1],
          },
          click: {
            d: 'M 20,25 L 80,75',
            pathLength: 1,
          },
        }}
        isHovered={isHovered}
        isClicked={isClicked}
      />

      <Path
        variants={{
          initial: { d: 'M 20,50 L 80,50', pathLength: 0.66, opacity: 1 },
          hover: {
            pathLength: [0.66, 0.5, 0.3, 1],
            opacity: 1,
          },
          click: {
            opacity: 0,
            transition: { duration: 0.1 },
          },
        }}
        isHovered={isHovered}
        isClicked={isClicked}
      />
      <Path
        variants={{
          initial: {
            d: 'M 20,75 L 80,75',
            pathLength: 1,
          },
          hover: {
            pathLength: [0.66, 0.5, 0.66, 1],
          },
          click: {
            d: 'M20,75L80,25',
            pathLength: 1,
          },
        }}
        isHovered={isHovered}
        isClicked={isClicked}
      />
    </svg>
  );
});

LargeScreenMenu.displayName = 'LargeScreenMenu';

export default LargeScreenMenu;
