import { RotateCcwIcon } from "lucide-react";
import type { PropsWithChildren, ReactNode } from "react";

export function Field({
  children,
  id,
  label,
  hue,
}: PropsWithChildren<{ id: string; label: ReactNode, hue: number }>) {
  return (
    <div>
      <label className="w-full text-sm font-medium leading-6 flex justify-between pb-2" htmlFor={id}>
        <div className="flex gap-2 items-center">
          {label}
          {/* <button className="text-base bg-accent-400/50 p-2 rounded">
            <RotateCcwIcon className="w-4 h-4" />
          </button> */}
        </div>
        <div className="p-2 bg-accent-400/50 rounded text-xs">
          {hue}
        </div>
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
