import { Suspense, lazy, useState } from "react";

import { Field } from "./Field";
import { Switch } from "./Switch";
import { defineCustomVariables, getVariables, updateVariables } from "@/lib/themeRuntime";
import { DARK_MODE_COOKIE_NAME, HUE_COOKIE_NAME } from "@/consts";
import { PaletteIcon } from "lucide-react";

const HuePicker = lazy(() => import('simple-hue-picker/react'));

export const FormContent = ({
  darkMode,
  hue,
  setCurrentHue,
}: {
  darkMode: boolean;
  hue: string;
  setCurrentHue: (hue: string) => void
}) => {



  function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts?.pop()?.split(';').shift();
  }

  function updateTheme({ hue }: { hue: number }) {
    const isDark = getCookie(DARK_MODE_COOKIE_NAME)

    if (!isDark) {
      document.cookie = `${DARK_MODE_COOKIE_NAME}=${'no'}; max-age=${1704085200}`
    }

    if (isDark === 'yes') {
      document.cookie = `${DARK_MODE_COOKIE_NAME}=${'yes'}; max-age=${1704085200}`
    }

    document.cookie = `${HUE_COOKIE_NAME}=${String(hue)}; max-age=${1704085200}`;

    let accent = getVariables({ baseName: "accent", hue: +hue });

    const customVariables = defineCustomVariables(+hue, isDark === 'yes');

    accent.push(...customVariables);

    updateVariables(accent);

    setCurrentHue(String(hue))
  }

  function makeOnChange({ hue }: { hue: number }) {
    return updateTheme({ hue: hue })
  }

  return (
    <div className="w-full">
      <div className="w-full">
        <Field id="hue" label="Cor do tema" hue={+hue}>
          <div className="mb-4 flex gap-2 items-center">
            <span className="font-semibold text-lg w-2 h-5 bg-accent-400 rounded"></span>
            <HuePicker name="hue" onChange={(e) => makeOnChange({ hue: e.detail as any })} value={hue} step={5} />
          </div>
        </Field>
      </div>
      {/* <div className="col-span-full">
        <Field id="dark-mode" label="Force dark mode">
          <Switch
            defaultChecked={darkMode}
            label="Force dark mode"
            name="force-dark"
            onChange={onChangeDebounced}
          />
        </Field>
      </div> */}
    </div>
  );
};

