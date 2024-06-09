import { Suspense } from 'react'
import { FormContent } from './ThemePickerForm'
import Cookies from 'js-cookie'
import { DARK_MODE_COOKIE_NAME, HUE_COOKIE_NAME, THEME_HUE_DEFAULT_CORLOR } from '@/consts'

function getHue() {
  return Cookies.get(HUE_COOKIE_NAME) ?? String(THEME_HUE_DEFAULT_CORLOR)
}

function getDarkMode() {
  return Cookies.get(DARK_MODE_COOKIE_NAME) ?? "no"
}

export function ThemePicker() {
  return (
    <form className="md:col-span-2">
      <Suspense>
        <FormContent darkMode={getDarkMode() === "yes"} hue={getHue()} />
      </Suspense>
    </form>
  )
}
