import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  space,
  color,
  layout,
  flexbox,
  typography,
  grid,
  background,
  position,
  shadow,
  border,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from "styled-system";
import { darkText, lightText } from "meleon-palette";

type BaseProps = {
  children?: ReactNode;
};

type ColorProps = {
  color?: string;
  bg?: string;
  opacity?: string | number;
};

type TextOverflowProps = {
  whiteSpace?:
    | "normal"
    | "pre"
    | "nowrap"
    | "pre-wrap"
    | "pre-line"
    | "break-spaces";
  textOverflow?: "clip" | "ellipsis";
};

export type BoxProps = BaseProps &
  SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  TextOverflowProps;

export default function Box({
  borderWidth = 0,
  borderStyle = "solid",
  borderColor = darkText.primary,
  ...props
}: BoxProps) {
  return (
    <Wrapper
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      borderColor={borderColor}
      {...props}
    />
  );
}

const Wrapper = styled.div<BoxProps>`
  ${color}
  ${space}
  ${layout}
  ${typography}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}

  text-overflow: ${(props) => props.textOverflow};
  white-space: ${(props) => props.whiteSpace}
`;
