'use client'

import * as React from 'react'
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet'

import { cn } from '@/lib/utils'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'


import { Button } from '../ui/button'



import { useState } from 'react'
import { MenuIcon } from 'lucide-react'


export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="min-h-10">
            <div
               
            >
                <NavigationMenu className="flex  w-full max-w-[1300px] m-auto mt-2 justify-between px-4">
                    <div className="w-full flex items-center justify-between gap-4">
                        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                            <div>
                                {/* <Logo /> */}
                            </div>
                            <SheetTrigger asChild className="md:hidden relative">
                                <Button className="lg:hidden" size="icon" variant="outline">
                                    <MenuIcon className="h-6 w-6" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                onOpenAutoFocus={(e) => e.preventDefault()}
                                onCloseAutoFocus={(e) => e.preventDefault()}
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
                        </Sheet>
                    </div>

                    <NavigationMenuList className="hidden md:flex">
                        <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={`hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-red-500 hover:to-yellow-500`}
                                >
                                    INÍCIO
                                </NavigationMenuLink>
                          
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="#about">
                                <NavigationMenuLink
                                    className={`hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-purple-500 hover:via-red-500 hover:to-yellow-500`}
                                >
                                    SOBRE
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="#projects">
                                <NavigationMenuLink
                                    className={`hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-purple-500 hover:via-red-500 hover:to-yellow-500`}
                                >
                                    PROJETOS
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="#technologies">
                                <NavigationMenuLink
                                    className={`hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-purple-500 hover:via-red-500 hover:to-yellow-500`}
                                >
                                    CONHECIMENTOS
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <a href="#contact">
                                <NavigationMenuLink
                                    className={`hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-purple-500 hover:via-red-500 hover:to-yellow-500`}
                                >
                                    CONTATO
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>

                        <span className={cn('text-gray-500')}>|</span>

                        <NavigationMenuItem>
                            {/* <SwitchThemeButton /> */}
                        </NavigationMenuItem>

                       
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = 'ListItem'