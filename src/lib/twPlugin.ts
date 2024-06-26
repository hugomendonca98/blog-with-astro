import { makeVariable, shades } from "./common";
import { consistentChroma } from "./themeRuntime";

export function dynamicTwClasses(baseName: string, baseHue: number) {
  return Object.fromEntries(
    shades.map((shade, i) => {
      const color = consistentChroma(i, baseHue);
      return [
        shade,
        `oklch(${makeVariable({
          fallbackValue: color,
          name: baseName,
          shade,
          withVar: true,
        })} / <alpha-value>)`,
      ];
    }),
  );
}
