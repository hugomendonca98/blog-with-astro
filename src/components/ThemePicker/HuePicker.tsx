import type { ComponentProps } from "react";

import Picker from "simple-hue-picker/react";

export default function HuePicker(props: ComponentProps<typeof Picker>) {
  return <Picker step={10} {...props} />;
}
