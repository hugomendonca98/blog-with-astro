import { Suspense, useState } from 'react'
import { FormContent } from './ThemePickerForm'
import { IoIosColorPalette } from "react-icons/io";
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
  return Cookies.get(DARK_MODE_COOKIE_NAME) ?? "yes"
}

export function ThemePicker() {
  const [currentHue, setCurrentHue] = useState(getHue())

  return (
    <form>
      <Popover>
        <PopoverTrigger>
          <Button type='button' className='bg-transparent hover:bg-transparent p-0 py-0'>
            <IoIosColorPalette className='w-7 h-7' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[300px] bg-cardBg'>
          <div className='w-full'>
            <Suspense>
              <FormContent
                darkMode={getDarkMode() === "yes"}
                hue={currentHue}
                setCurrentHue={setCurrentHue}
              />
            </Suspense>
          </div>
        </PopoverContent>
      </Popover>
    </form>
  )
}
