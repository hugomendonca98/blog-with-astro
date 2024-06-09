import { makeVariable, shades } from "./common";
import { consistentChroma } from "./runtime";

export function dynamicTwClasses(baseName: string, baseHue: number) {


  console.log('aqui dynamicTwClasses', baseName, baseHue)
  return Object.fromEntries(
    shades.map((shade, i) => {
      const color = consistentChroma(i, baseHue);

      // console.log('aqui dynamicTwClasses', color, shade, i, baseHue, baseName)

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
