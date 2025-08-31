import { useId } from "react"

import { Checkbox } from "@/registry/default/ui/checkbox"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  return (
    <div className="flex items-center gap-2 [--cbm-primary:var(--color-indigo-500)] [--cbm-ring:var(--color-indigo-300)] in-[.dark]:[--cbm-primary:var(--color-indigo-500)] in-[.dark]:[--cbm-ring:var(--color-indigo-900)]">
      <Checkbox id={id} defaultChecked />
      <Label htmlFor={id}>Colored checkbox</Label>
    </div>
  )
}
