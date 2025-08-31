import { useId } from "react"

import { Label } from "@/registry/default/ui/label"
import { Switch } from "@/registry/default/ui/switch"

export default function Component() {
  const id = useId()
  return (
    <div className="inline-flex items-center gap-2 [--cbm-primary:var(--color-indigo-500)] [--cbm-ring:var(--color-indigo-300)] in-[.dark]:[--cbm-primary:var(--color-indigo-500)] in-[.dark]:[--cbm-ring:var(--color-indigo-900)]">
      <Switch id={id} defaultChecked />
      <Label htmlFor={id} className="sr-only">
        Colored switch
      </Label>
    </div>
  )
}
