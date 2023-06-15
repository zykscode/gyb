import { Link } from 'lucide-react';
import React from 'react';

import { siteConfig } from '#/config/site';
import { useLockBody } from '#/hooks/use-lock-body';

import { Icons } from './icons';

type Props = {
  children: any;
};

const NavsList = ({ children }: Props) => {
  useLockBody();
  return (
    <div className="relative z-20 grid gap-6 rounded-md bg-primary p-4 text-primaryFg shadow-xl">
      <Link href="/" passHref className="flex items-center space-x-2">
        <Icons.logo />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <nav className="grid grid-flow-row auto-rows-max text-sm">
        {/* {items.map((navItem, index) => (
      <Link
        key={index}
        href={navItem.disabled ? '#' : navItem.href}
        passHref
        className={cn(
          'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline',
          navItem.disabled && 'cursor-not-allowed opacity-60',
        )}
      >
        {navItem.title}
      </Link>
    ))} */}
      </nav>
      {children}
    </div>
  );
};

export default NavsList;
