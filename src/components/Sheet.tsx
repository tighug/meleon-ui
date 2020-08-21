import React, { ReactNode } from "react";
import classnames from "classnames";
import Box from "./system/Box";
import styled from "styled-components";
import { strToColor } from "../utils/strToColor";
import { boxShadow } from "./system/shadow";
import { SizingProps, sizing } from "./system/sizing";

export type SheetProps = {
  /** children */
  children?: ReactNode;

  /** Sets the color. */
  color?: string;

  /** Sets the elevation. */
  elevation?: number;
  /** Sets the width. */
  width?: number | string;
  /** Sets the max-width. */
  maxWidth?: number | string;
  /** Sets the min-width. */
  minWidth?: number | string;
  /** Sets the height. */
  height?: number | string;
  /** Sets the max-height. */
  maxHeight?: number | string;
  /** Sets the min-height. */
  minHeight?: number | string;

  /** Removes elevation & adds a thin border. */
  outlined?: boolean;
  /** Designates the border-radius applied to the component. */
  rounded?: boolean;
};

export default function Sheet({
  color,
  elevation = 0,
  outlined = false,
  rounded = false,
  ...props
}: SheetProps) {
  const className = classnames({ outlined, rounded });

  return (
    <Wrapper
      className={className}
      color={color}
      elevation={elevation}
      {...props}
    />
  );
}

type WrapperProps = {
  color?: string;
  elevation: number;
};

const Wrapper = styled.div<WrapperProps & SizingProps>`
  ${sizing}

  background-color: ${(props) =>
    strToColor(
      strToColor("#272727", "bg.secondary", props.theme),
      props.color,
      props.theme
    )};
  border: 0 solid;
  border-color: ${(props) =>
    strToColor("rgba(255, 255, 255, 0.12)", "text.dividers", props.theme)};
  border-radius: 0;
  box-shadow: ${(props) => boxShadow(props.elevation)};

  &.outlined {
    border-width: 1px;
    box-shadow: none;
  }
  &.rounded {
    border-radius: 4px;
  }
`;
