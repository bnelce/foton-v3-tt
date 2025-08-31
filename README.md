# Origin UI

**Beautiful UI components built with Tailwind CSS and React.**

Origin UI is an extensive collection of copy-and-paste components for quickly building app UIs. It includes hundreds of components and is constantly updated with new designs.

**Demo** → [https://originui.com](https://originui.com)

![Origin UI](https://github.com/user-attachments/assets/a6428743-1628-4498-8b45-7000e30bdc24)

## Getting Started

Origin UI is designed to integrate seamlessly with Next.js projects, but the components are also compatible with any React-based project. The components follow shadcn conventions, so they'll feel familiar to anyone who has used shadcn before.

**1. Set up the required files:**

- Copy all `.tsx` files from Origin UI's `registry/default/ui` folder to your project's `components/ui` folder.
- Copy `utils.ts` from Origin UI's `registry/default/lib` folder to your project's `lib` folder.

Note: If you're using shadcn, you may likely already have these files - however, I would recommend using our components over shadcn's for a consistent styling experience.

**2. Add the following CSS variables to your stylesheet (you don't need to overwrite them if you already have them):**

```
:root {
  --cbm-radius: 0.625rem;
  --cbm-background: oklch(1 0 0);
  --cbm-foreground: oklch(0.141 0.005 285.823);
  --cbm-card: oklch(1 0 0);
  --cbm-card-foreground: oklch(0.141 0.005 285.823);
  --cbm-popover: oklch(1 0 0);
  --cbm-popover-foreground: oklch(0.141 0.005 285.823);
  --cbm-primary: oklch(0.21 0.006 285.885);
  --cbm-primary-foreground: oklch(0.985 0 0);
  --cbm-secondary: oklch(0.967 0.001 286.375);
  --cbm-secondary-foreground: oklch(0.21 0.006 285.885);
  --cbm-muted: oklch(0.967 0.001 286.375);
  --cbm-muted-foreground: oklch(0.552 0.016 285.938);
  --cbm-accent: oklch(0.967 0.001 286.375);
  --cbm-accent-foreground: oklch(0.21 0.006 285.885);
  --cbm-destructive: oklch(0.637 0.237 25.331);
  --cbm-destructive-foreground: oklch(0.637 0.237 25.331);
  --cbm-border: oklch(0.92 0.004 286.32);
  --cbm-input: oklch(0.871 0.006 286.286);
  --cbm-ring: oklch(0.871 0.006 286.286);
  --cbm-chart-1: oklch(0.646 0.222 41.116);
  --cbm-chart-2: oklch(0.6 0.118 184.704);
  --cbm-chart-3: oklch(0.398 0.07 227.392);
  --cbm-chart-4: oklch(0.828 0.189 84.429);
  --cbm-chart-5: oklch(0.769 0.188 70.08);
  --cbm-sidebar: oklch(0.985 0 0);
  --cbm-sidebar-foreground: oklch(0.141 0.005 285.823);
  --cbm-sidebar-primary: oklch(0.21 0.006 285.885);
  --cbm-sidebar-primary-foreground: oklch(0.985 0 0);
  --cbm-sidebar-accent: oklch(0.967 0.001 286.375);
  --cbm-sidebar-accent-foreground: oklch(0.21 0.006 285.885);
  --cbm-sidebar-border: oklch(0.92 0.004 286.32);
  --cbm-sidebar-ring: oklch(0.871 0.006 286.286);
}

.dark {
  --cbm-background: oklch(0.141 0.005 285.823);
  --cbm-foreground: oklch(0.985 0 0);
  --cbm-card: oklch(0.141 0.005 285.823);
  --cbm-card-foreground: oklch(0.985 0 0);
  --cbm-popover: oklch(0.141 0.005 285.823);
  --cbm-popover-foreground: oklch(0.985 0 0);
  --cbm-primary: oklch(0.985 0 0);
  --cbm-primary-foreground: oklch(0.21 0.006 285.885);
  --cbm-secondary: oklch(0.274 0.006 286.033);
  --cbm-secondary-foreground: oklch(0.985 0 0);
  --cbm-muted: oklch(0.21 0.006 285.885);
  --cbm-muted-foreground: oklch(0.65 0.01 286);
  --cbm-accent: oklch(0.21 0.006 285.885);
  --cbm-accent-foreground: oklch(0.985 0 0);
  --cbm-destructive: oklch(0.396 0.141 25.723);
  --cbm-destructive-foreground: oklch(0.637 0.237 25.331);
  --cbm-border: oklch(0.274 0.006 286.033);
  --cbm-input: oklch(0.274 0.006 286.033);
  --cbm-ring: oklch(0.442 0.017 285.786);
  --cbm-chart-1: oklch(0.488 0.243 264.376);
  --cbm-chart-2: oklch(0.696 0.17 162.48);
  --cbm-chart-3: oklch(0.769 0.188 70.08);
  --cbm-chart-4: oklch(0.627 0.265 303.9);
  --cbm-chart-5: oklch(0.645 0.246 16.439);
  --cbm-sidebar: oklch(0.205 0 0);
  --cbm-sidebar-foreground: oklch(0.985 0 0);
  --cbm-sidebar-primary: oklch(0.488 0.243 264.376);
  --cbm-sidebar-primary-foreground: oklch(0.985 0 0);
  --cbm-sidebar-accent: oklch(0.269 0 0);
  --cbm-sidebar-accent-foreground: oklch(0.985 0 0);
  --cbm-sidebar-border: oklch(0.274 0.006 286.033);
  --cbm-sidebar-ring: oklch(0.442 0.017 285.786);
}
```

After completing these steps, you can copy and use the components in your project. Note that some components (e.g., number inputs, date pickers, time pickers, phone number inputs) may require additional libraries.

## Tailwind v4 support

Our UI library has been updated to Tailwind CSS v4 as of February 25, 2025. Legacy components built with v3 remain available by adding `/legacy/` to the component URL:

```bash
# v3 legacy component
pnpm dlx shadcn@latest add https://originui.com/r/legacy/comp-01.json
```

Note: New components will only be developed for Tailwind v4.

## Contributing

We welcome contributions to Origin UI! Please read our [contributing guidelines](CONTRIBUTING.md) on how to submit improvements and new components.

## License

Licensed under the [MIT License](https://github.com/origin-space/originui/blob/main/LICENSE.md).

If you have any questions or just want to say hi, feel free to reach out to us on X 👉 [@pacovitiello](https://x.com/pacovitiello) & [@DavidePacilio](https://x.com/DavidePacilio).
