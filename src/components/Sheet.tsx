import React, { ReactNode } from "react";
import Box from "./Box";
import { lightText } from "meleon-palette";
export type SheetProps = {
  /** children */
  children?: ReactNode;

  /** color */
  color?: string;

  /** elevation */
  elevation?: number;
  /** width */
  width?: number | string;
  /** max width */
  maxWidth?: number | string;
  /** min width */
  minWidth?: number | string;
  /** height */
  height?: number | string;
  /** max height*/
  maxHeight?: number | string;
  /** min height */
  minHeight?: number | string;

  /** Removes elevation & adds a thin border. */
  outlined?: boolean;
  /** Designates the border-radius applied to the component. */
  rounded?: boolean;
};

export default function Sheet({
  outlined = false,
  rounded = false,
  color,
  ...props
}: SheetProps) {
  const elevation = outlined ? 0 : props.elevation;
  const borderWidth = outlined ? 1 : 0;
  const borderRadius = rounded ? 4 : 0;

  return (
    <Box
      bg={color}
      elevation={elevation}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      {...props}
    />
  );
}
