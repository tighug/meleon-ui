import React, { ReactNode, useContext } from "react";
import styled from "styled-components";
import { SpacingProps, spacing } from "./spacing";
import { PaletteProps, palette } from "./palette";
import { DisplayProps, display } from "./display";
import { FlexboxProps, flexbox } from "./flexbox";
import { BorderProps, border } from "./border";
import { PositionProps, position } from "./position";
import { ShadowProps, shadow } from "./shadow";
import { SizingProps, sizing } from "./sizing";
import { TypographyProps, typography } from "./typography";
import { ThemeContext } from "styled-components";

type BaseProps = {
  children?: ReactNode;
};

export type BoxProps = BaseProps &
  BorderProps &
  DisplayProps &
  FlexboxProps &
  PaletteProps &
  PositionProps &
  ShadowProps &
  SizingProps &
  SpacingProps &
  TypographyProps;

export default function Box({ ...props }: BoxProps) {
  return <BaseBox {...props} />;
}

export const BaseBox = styled.div<BoxProps>`
  ${border}
  ${display}
  ${flexbox}
  ${palette}
  ${position}
  ${shadow}
  ${sizing}
  ${spacing}
  ${typography}
`;
