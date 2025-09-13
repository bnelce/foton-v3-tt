import { Primitive } from "@diceui/shared";
import * as React from "react";
import { useComboboxGroupContext } from "./combobox-group";

const GROUP_LABEL_NAME = "ComboboxGroupLabel";

interface ComboboxGroupLabelProps
  extends React.ComponentPropsWithoutRef<typeof Primitive.div> {}

const ComboboxGroupLabel = React.forwardRef<
  HTMLDivElement,
  ComboboxGroupLabelProps
>((props, forwardedRef) => {
  const groupContext = useComboboxGroupContext(GROUP_LABEL_NAME);

  return (
    <Primitive.div id={groupContext.labelId} {...props} ref={forwardedRef} />
  );
});

ComboboxGroupLabel.displayName = GROUP_LABEL_NAME;

const GroupLabel = ComboboxGroupLabel;

export { ComboboxGroupLabel, GroupLabel };

export type { ComboboxGroupLabelProps };
