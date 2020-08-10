import React, { ReactNode, MouseEventHandler } from "react";
import styled from "styled-components";
import Ripples from "./Ripples";
import { BaseBox } from "./system/Box";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

export type ButtonProps = {
  children: ReactNode;

  size?: Size;
  color?: string;

  active?: boolean;
  block?: boolean;
  depressed?: boolean;
  disabled?: boolean;
  fab?: boolean;
  icon?: boolean;
  outlined?: boolean;
  ripple?: boolean;
  rounded?: boolean;
  text?: boolean;
  tile?: boolean;

  /** クリックイベント */
  onClick?: MouseEventHandler;
};

export default function Button({
  color = "#272727",
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
  return (
    <Ripples disabled={!ripple}>
      <Wrapper
        as="button"
        color={outlined || text ? color : "white"}
        bgcolor={outlined || text ? "transparent" : color}
        border={outlined ? 1 : 0}
        borderColor={color}
        borderRadius={tile ? "0px" : rounded ? "28px" : "4px"}
        fontSize={fontSize(size)}
        width={block ? "100%" : "auto"}
        elevation={depressed || outlined || text ? 0 : 2}
        {...props}
      />
    </Ripples>
  );
}

const Wrapper = styled(BaseBox)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(4em - 20px);
  padding: 0 1.2em;
  overflow: hidden;
  line-height: 22px;
  text-transform: uppercase;
  letter-spacing: 0.09em;

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
    transition: opacity 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  }

  &:hover:before {
    opacity: 0.2;
  }
`;

function fontSize(size?: Size): string {
  switch (size) {
    case "xs":
      return "10px";
    case "sm":
      return "12px";
    case "md":
      return "14px";
    case "lg":
      return "16px";
    case "xl":
      return "18px";
    default:
      return "14px";
  }
}
