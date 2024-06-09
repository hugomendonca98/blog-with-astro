// import { useCookies } from 'astro/util'
import { Suspense } from 'react'
import { FormContent } from './ThemePickerForm'
import Cookies from 'js-cookie'

const hueCookie = "theme-hue"
const darkModeCookie = "theme-dark-mode"

function getHue() {
  // const { get } = useCookies()
  console.log('aqui cookies', Cookies.get(hueCookie))


  return Cookies.get(hueCookie) ?? "40"
}

function getDarkMode() {
  return Cookies.get(darkModeCookie) ?? "no"
}

export function getThemeDataFromCookies() {
  return {
    darkMode: getDarkMode(),
    hue: getHue(),
  }
}

export function getThemeData(hue: string, darkMode: boolean) {
  const accent = import.meta.env.THEME_VARIABLES?.accent?.[hue] ?? {}

  return {
    className: darkMode ? "dark" : "",
    style: accent,
  }
}

export function ThemePicker() {
  // const { cookies } = useCookies()

  function updateTheme({ hue }: { hue: string }) {
    // Cookies.set(hueCookie, form.get("hue") as string, { maxAge: 1704085200 })
    // Cookies.set(darkModeCookie, form.get("force-dark") === "on" ? "yes" : "no", { maxAge: 1704085200 })

    // Astro doesn't have built-in revalidation, handle it on server if needed

    // console.log('aqui anstes do cookies', hue)

    // Cookies.set(hueCookie, hue as string, { maxAge: 1704085200 })
  }

  return (
    <form className="md:col-span-2">
      <Suspense>
        <FormContent darkMode={getDarkMode() === "yes"} hue={getHue()} />
      </Suspense>
    </form>
  )
}
