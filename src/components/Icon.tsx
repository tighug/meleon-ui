import React from "react";
import styled from "styled-components";
import classnames from "classnames";

const fontSize = {
  xs: "12px",
  sm: "16px",
  md: "20px",
  lg: "36px",
  xl: "40px",
} as const;

interface IconProps {
  children: string;

  /** Sets the font-size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Sets the color. */
  color?: string;
  /** Places the icon on the left. (used inside a button) */
  left?: boolean;
  /** Places the icon on the right. (used inside a button) */
  right?: boolean;
  /** Disables the click. */
  disabled?: boolean;
}

export default function Icon({
  children,
  color = "white",
  size = "md",
  left = false,
  right = false,
  disabled = false,
}: IconProps) {
  const icon = `mdi mdi-${children}`;
  const className = classnames(icon, { left, right, disabled });

  return (
    <Wrapper className={className} color={color} fontSize={fontSize[size]} />
  );
}

const Wrapper = styled.span<{ color: string; fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};

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