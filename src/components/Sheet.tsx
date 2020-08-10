import React, { ReactNode } from "react";
import Box from "./system/Box";

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
  color = "#272727",
  elevation = 0,
  outlined = false,
  rounded = false,
  ...props
}: SheetProps) {
  return (
    <Box
      bgcolor={color}
      elevation={outlined ? 0 : elevation}
      border={outlined ? 1 : 0}
      borderRadius={rounded ? "4px" : "0px"}
      borderColor="rgba(255, 255, 255, 0.12)"
      {...props}
    />
  );
}
