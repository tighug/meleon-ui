import React, { ReactNode } from "react";
import styled, { DefaultTheme } from "styled-components";
import { StyledButton as Button, Size, fontSize } from "./Button";
import classnames from "classnames";
import { str2color } from "../utils/str2color";

export type ButtonGroupProps = {
  children?: ReactNode;

  color?: string;
  bgColor?: string;
  size?: Size;

  borderless?: boolean;
  rounded?: boolean;
  tile?: boolean;
};

export function ButtonGroup({
  borderless = false,
  rounded = false,
  tile = false,
  ...props
}: ButtonGroupProps) {
  const className = classnames({ borderless, rounded, tile });

  return <StyledDiv className={className} {...props} />;
}

type StyledDivProps = {
  color?: string;
  bgColor?: string;
  size: Size;
  theme?: DefaultTheme;
};

const StyledDiv = styled.div.attrs((props: StyledDivProps) => ({
  color: str2color(props.color, props.theme),
  bgColor: str2color(props.bgColor, props.theme),
  size: fontSize[props.size],
}))<StyledDivProps>`
  position: relative;
  display: inline-flex;
  flex: 0 1 auto;
  max-width: 100%;
  border-radius: 4px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);

  &.borderless {
    ${Button} {
      border-width: 0px;
    }
  }
  &.rounded {
    border-radius: 24px;
  }
  &.tile {
    border-radius: 0px;
  }

  ${Button} {
    padding: 0 12px;
    font-size: ${(props) => props.size};
    background-color: ${(props) => props.bgColor};
    border-color: ${(props) => props.theme.text.dividers};
    border-style: solid;
    border-width: 1px;
    border-radius: 0;
    box-shadow: none;
    opacity: 0.8;

    &:first-child {
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
    }
    &:not(:first-child) {
      border-left-width: 0;
    }
    &:last-child {
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
    }
    &.active {
      color: ${(props) => props.color || props.theme.primary};
      opacity: 1;
    }
  }
`;
