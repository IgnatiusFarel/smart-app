import React from 'react';
import { SidebarTrigger } from '../ui/sidebar';
import { Separator } from '../ui/separator';
import { Breadcrumbs } from '../breadcrumbs';
import { NavUser } from './nav-user';
// import ThemeToggle from './ThemeToggle/theme-toggle';

export default function Header() {
  const user = {
    name: 'Ignatius Farel',
    role: 'Superadmin',
    email: 'ignatiusloyolafarel17@gmail.com',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYU4g4GM3rNxTabtXMuU2o8W9xKG-8vW14ig&s',
  };

  return (
    <header className="sticky top-0 flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumbs />
      </div>

      <div className="flex items-center gap-2 px-4">
        {/* <div className="hidden md:flex">
          <SearchInput />
        </div> */}
        <NavUser user={user}/>
        {/* <UserNav /> */}
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
