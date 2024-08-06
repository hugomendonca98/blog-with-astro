import * as React from 'react';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { Button } from '../ui/button';

import { useState } from 'react';
import { Github, GithubIcon, MenuIcon } from 'lucide-react';
import { ThemePicker } from '@/components/ThemePicker/ThemePicker';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-20 w-full border-b border-b-cardBg flex items-center">
      <div className="w-full flex md:hidden items-center justify-between gap-4 bg-red-300">
        {/* <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen} >

          <SheetTrigger asChild className="md:hidden relative">
            <Button className="lg:hidden" size="icon" variant="outline" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            forceMount
            side="left"
            onOpenAutoFocus={e => e.preventDefault()}
            onCloseAutoFocus={e => e.preventDefault()}
          >
            <div className="grid gap-4 py-6">
              <a
                className="flex w-full items-center gap-2 py-2 text-lg font-semibold"
                href="#header"
                onClick={() => setIsMenuOpen(false)}
              >
                INÍCIO
              </a>
              <a
                className="flex w-full items-center gap-2 py-2 text-lg font-semibold"
                href="#about"
              >
                SOBRE
              </a>
              <a
                className="flex w-full items-center gap-2 py-2 text-lg font-semibold"
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
              >
                PROJETOS
              </a>
              <a
                className="flex w-full items-center gap-2 py-2 text-lg font-semibold"
                href="#technologies"
                onClick={() => setIsMenuOpen(false)}
              >
                CONHECIMENTOS
              </a>
              <a
                className="flex w-full items-center gap-2 py-2 text-lg font-semibold"
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTATO
              </a>
            </div>
          </SheetContent>
        </Sheet> */}
      </div>

      <nav className='w-full max-w-[1000px] mx-auto flex gap-10 items-center'>
        <a href="#" className='text-2xl whitespace-nowrap'><span className='text-accent-400'>{'{ '}</span>{`Hugo Mendonça`}<span className='text-accent-400'>{' }'}</span></a>

        <ul className='flex justify-between items-center w-full'>

          <div className='flex gap-10'>
            <li>
              <a className='relative px-1 block h-20 leading-[5rem] text-base text-gray-400 font-semibold cursor-pointer hover:text-white transition-colors after:content-[" "] after:h-[3px] after:w-full after:bg-accent-400 after:absolute after:bottom-[1px] after:left-0 after:rounded-t-[3px] after:rounded-b-[0] after:rounded-tl-[3px] after:rounded-tr-[3px]'>Posts</a>
            </li>
            <li>
              <a className='relative px-1 block h-20 leading-[5rem] text-base text-gray-400 font-semibold  cursor-pointer hover:text-white transition-colors'>Sobre</a>
            </li>
          </div>

          <div className='flex gap-5 items-center'>
            <li>
              <a href="#">
                <FaGithub className='h-6 w-6' />
              </a>
            </li>
            <li>
              <a href="">
                <FaGitlab className='h-6 w-6' />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin className='h-6 w-6' />
              </a>
            </li>
            <li>
              <ThemePicker />
            </li>
          </div>

        </ul>
      </nav>
    </div >
  );
}


