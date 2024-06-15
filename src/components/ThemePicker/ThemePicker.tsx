import { Suspense, useState } from 'react'
import { FormContent } from './ThemePickerForm'
import Cookies from 'js-cookie'
import { DARK_MODE_COOKIE_NAME, HUE_COOKIE_NAME, THEME_HUE_DEFAULT_CORLOR } from '@/consts'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PaletteIcon } from 'lucide-react'
import { Button } from '../ui/button'


function getHue() {
  return Cookies.get(HUE_COOKIE_NAME) ?? String(THEME_HUE_DEFAULT_CORLOR)
}

function getDarkMode() {
  return Cookies.get(DARK_MODE_COOKIE_NAME) ?? "no"
}

export function ThemePicker() {



  return (
    <form>
      <Popover>
        <PopoverTrigger>
          <Button type='button' className='p-2 bg-accent-400/50'><PaletteIcon /></Button>
        </PopoverTrigger>
        <PopoverContent className='w-[300px] bg-cardBg'>
          <div className='w-full'>
            <Suspense>
              <FormContent darkMode={getDarkMode() === "yes"} hue={getHue()} />
            </Suspense>
          </div>
        </PopoverContent>
      </Popover>
    </form>
  )
}
