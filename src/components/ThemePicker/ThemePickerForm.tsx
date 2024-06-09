import { type MutableRefObject, useMemo, useRef, lazy } from "react";
import Cookies from 'js-cookie'
// import HuePicker from "simple-hue-picker/react";

import { Field } from "./Field";
import { Switch } from "./Switch";
import { getVariables, updateVariables } from "@/lib/runtime";


// const HuePicker = dynamic(() => import("simple-hue-picker/react"), {
//   ssr: false,
// });

const HuePicker = lazy(() => import('simple-hue-picker/react'));
const hueCookie = "theme-hue"
const darkModeCookie = "darkMode"

export const FormContent = ({
  darkMode,
  hue,
}: {
  darkMode: boolean;
  hue: string;
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  // const onChangeDebounced = useMemo((hue) => makeOnChange(hue), []);

  // const onChangeDebounced = useMemo((themeObj: { hue: string }) => {
  //   return makeOnChange({ hue: themeObj.hue })
  // }, [])



  return (
    <div
      className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"
      ref={rootRef}
    >
      <div className="sm:col-span-3">
        <Field id="hue" label="Favorite Color">
          <div className="h-2">
            <HuePicker name="hue" onChange={(e) => makeOnChange({ hue: e.detail as any })} value={hue} />
          </div>
        </Field>
      </div>
      <div className="col-span-full">
        <Field id="dark-mode" label="Force dark mode">
          {/* <Switch
            defaultChecked={darkMode}
            label="Force dark mode"
            name="force-dark"
            onChange={onChangeDebounced}
          /> */}
        </Field>
      </div>
    </div>
  );
};

function debounce<F extends (...args: unknown[]) => unknown>(
  func: F,
  delay: number,
): F {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return ((...args: Parameters<F>) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  }) as F;
}

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts?.pop()?.split(';').shift();
}

function updateTheme({ hue }: { hue: number }) {
  // Cookies.set(hueCookie, form.get("hue") as string, { maxAge: 1704085200 })
  // Cookies.set(darkModeCookie, form.get("force-dark") === "on" ? "yes" : "no", { maxAge: 1704085200 })

  // Astro doesn't have built-in revalidation, handle it on server if needed

  const isDark = getCookie(darkModeCookie)

  document.cookie = `${darkModeCookie}=${isDark}; max-age=${1704085200}`
  document.cookie = `${hueCookie}=${String(hue)}; max-age=${1704085200}`;


  const accent = getVariables({ baseName: "accent", hue: +hue });
  updateVariables(accent);

  //Cookies.set(hueCookie, String(hue), { maxAge: 1704085200 })
}

function makeOnChange({ hue }: { hue: number }) {
  console.log('hue', hue)
  return updateTheme({ hue: hue })
  // return debounce(() => {
  // if (!rootRef.current) return;

  // let current: HTMLElement | null | undefined = rootRef.current;
  // while (current?.tagName !== "FORM") {
  //   current = current?.parentElement;
  // }
  // if (current?.tagName === "FORM") {
  //   (current as HTMLFormElement).requestSubmit();
  // }

  //   updateTheme({ hue: hue })
  // }, 300);
}
