import { useState } from "react";
import { HexColorPicker, } from "react-colorful";

export function ThemeColorSelect() {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  )
}
