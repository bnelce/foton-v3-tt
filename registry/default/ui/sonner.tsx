"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--cbm-popover)",
          "--normal-text": "var(--cbm-popover-foreground)",
          "--normal-border": "var(--cbm-border)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          description: "text-muted-foreground!",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
