import React, { ReactNode, MouseEventHandler } from "react";
import styled, { DefaultTheme } from "styled-components";
import classnames from "classnames";
import { Ripples } from "./Ripples";
import { boxShadow } from "../system/shadow";
import { str2color } from "../utils/str2color";

export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export const fontSize = {
  xs: "10px",
  sm: "12px",
  md: "14px",
  lg: "16px",
  xl: "18px",
} as const;
export type ButtonProps = {
  children?: ReactNode;

  /** Sets the font-size. */
  size?: Size;
  /** Sets the color. */
  color?: string;

  active?: boolean;
  /** Applies 100% to the width. */
  block?: boolean;
  /** Removes the box-shadow. */
  depressed?: boolean;
  /** Disables the click. */
  disabled?: boolean;
  /** Designates the button as a circle one. */
  fab?: boolean;
  /** Designates the button as icon. */
  icon?: boolean;
  /** Makes the background transparent and applies a border. */
  outlined?: boolean;
  /** Makes the border-radius larger.  */
  rounded?: boolean;
  /** Makes the background transparent. */
  text?: boolean;
  /** Makes the border-radius zero. */
  tile?: boolean;

  /** Applies the ripple effect on click. */
  ripple?: boolean;

  /** Event on click */
  onClick?: MouseEventHandler;
};

export function Button({
  size = "md",
  active = false,
  block = false,
  depressed = false,
  disabled = false,
  fab = false,
  icon = false,
  outlined = false,
  ripple = true,
  rounded = false,
  tile = false,
  text = false,
  ...props
}: ButtonProps) {
  const className = classnames({
    active,
    block,
    depressed,
    disabled,
    fab,
    icon,
    outlined,
    rounded,
    text,
    tile,
  });

  return (
    <Ripples disabled={!ripple}>
      <StyledButton className={className} size={size} {...props} />
    </Ripples>
  );
}

type StyledButtonProps = {
  color?: string;
  size: Size;
  theme?: DefaultTheme;
};

export const StyledButton = styled.button.attrs((props: StyledButtonProps) => ({
  color: str2color(props.color, props.theme),
  size: fontSize[props.size],
}))<StyledButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(4em - 20px);
  padding: 0 1.2em;
  overflow: hidden;
  font-size: ${(props) => props.size};
  font-weight: 500;
  line-height: 22px;
  color: ${(props) => props.theme.text.primary};
  text-transform: uppercase;
  letter-spacing: 0.09em;
  vertical-align: middle;
  cursor: pointer;
  background-color: ${(props) =>
    props.color || props.theme.normal || "#272727"};
  border: 0 solid;
  border-radius: 4px;
  box-shadow: ${boxShadow(2)};
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;

  &:focus {
    outline: none;
  }

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
  }

  &:hover:before {
    opacity: 0.2;
  }

  &.active {
    &:before {
      opacity: 0.24;
    }
  }

  &.block {
    width: 100%;
  }
  &.depressed {
    box-shadow: none;
  }
  &.fab {
    width: 4em;
    height: 4em;
    padding: 0;
    border-radius: 50%;
  }
  &.icon {
    width: calc(4em - 20px);
    padding: 0;
    color: ${(props) => props.color || props.theme.text.primary};
    background-color: transparent;
    border-radius: 50%;
    box-shadow: none;
  }
  &.outlined {
    color: ${(props) => props.color || props.theme.text.primary};
    background-color: transparent;
    border-color: currentColor;
    border-width: 1px;
    box-shadow: none;
  }
  &.rounded {
    border-radius: 28px;
  }
  &.text {
    color: ${(props) => props.color || props.theme.text.primary};
    background-color: transparent;
    box-shadow: none;
  }
  &.tile {
    border-radius: 0;
  }
  &.disabled {
    color: ${(props) =>
      props.theme.text.disabled || "rgba(255, 255, 255, 0.3)"};
    pointer-events: none;
    background-color: ${(props) =>
      props.theme.text.dividers || "rgba(255, 255, 255, 0.12)"};
    box-shadow: none;

    &.text,
    &.outlined,
    &.icon {
      background-color: transparent;
    }
  }
`;
