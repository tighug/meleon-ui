import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { nameToColor } from "../utils/nameToColor";

const fontSize = {
  xs: "12px",
  sm: "16px",
  md: "20px",
  lg: "36px",
  xl: "40px",
} as const;

export type IconProps = {
  children: string;

  /** Sets the font-size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Sets the color. */
  color?: string;

  /** Disables the click. */
  disabled?: boolean;
  /** Places the icon on the left. (used inside a button) */
  left?: boolean;
  /** Places the icon on the right. (used inside a button) */
  right?: boolean;
};

export function Icon({
  children,
  color,
  size = "md",
  left = false,
  right = false,
  disabled = false,
}: IconProps) {
  const icon = `mdi mdi-${children}`;
  const className = classnames(icon, { left, right, disabled });

  return (
    <StyledIcon className={className} color={color} fontSize={fontSize[size]} />
  );
}

export const StyledIcon = styled.span.attrs((props) => ({
  color: nameToColor(props.color, props.theme),
}))<{ color?: string; fontSize: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.fontSize};
  line-height: 1;
  color: ${(props) => props.color || "white"};
  vertical-align: middle;

  &.right {
    width: 1em;
    height: 1em;
    margin-right: -4px;
    margin-left: 8px;
  }

  &.left {
    width: 1em;
    height: 1em;
    margin-right: 8px;
    margin-left: -4px;
  }

  &.disabled {
    color: rgba(255, 255, 255, 0.3);
    pointer-events: none;
  }
`;
