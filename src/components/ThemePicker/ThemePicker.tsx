// import { useCookies } from 'astro/util'
import { Suspense } from 'react'
import { FormContent } from './ThemePickerForm'
import Cookies from 'js-cookie'

const hueCookie = "theme-hue"
const darkModeCookie = "theme-dark-mode"

function getHue() {
  // const { get } = useCookies()
  return Cookies.get(hueCookie) ?? "40"
}

function getDarkMode() {
  // const { get } = useCookies()
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

  function updateTheme(form: FormData) {
    Cookies.set(hueCookie, form.get("hue") as string, { maxAge: 1704085200 })
    Cookies.set(darkModeCookie, form.get("force-dark") === "on" ? "yes" : "no", { maxAge: 1704085200 })

    // Astro doesn't have built-in revalidation, handle it on server if needed
  }

  const handleSubit = (e) => updateTheme(e.target)

  return (
    //onSubmit={updateTheme}
    //action={updateTheme}
    <form className="md:col-span-2" onSubmit={handleSubit}>
      <Suspense>
        <FormContent darkMode={getDarkMode() === "yes"} hue={getHue()} />
      </Suspense>
    </form>
  )
}
