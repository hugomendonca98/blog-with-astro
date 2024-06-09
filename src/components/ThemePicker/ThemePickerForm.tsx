import { lazy } from "react";

import { Field } from "./Field";
import { Switch } from "./Switch";
import { defineCustomVariables, getVariables, updateVariables } from "@/lib/themeRuntime";
import { DARK_MODE_COOKIE_NAME, HUE_COOKIE_NAME } from "@/consts";

const HuePicker = lazy(() => import('simple-hue-picker/react'));

export const FormContent = ({
  darkMode,
  hue,
}: {
  darkMode: boolean;
  hue: string;
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
  }

  function makeOnChange({ hue }: { hue: number }) {
    return updateTheme({ hue: hue })
  }

  return (
    <div
      className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"
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

