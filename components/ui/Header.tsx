import React from 'react';

import { MainNav } from '../main-nav';

type Props = {};

function Header({}: Props) {
  return (
    <header className="container sticky top-0 z-40  backdrop-blur-sm 2xl:max-w-full">
      <div className="flex h-20 items-center justify-between px-2">
        <MainNav />
      </div>
    </header>
  );
}

export default Header;
