import React, { ReactNode } from "react";
import styled from "styled-components";
import { SpacingProps, spacing } from "./system/spacing";
import { PaletteProps, palette } from "./system/palette";
import { DisplayProps, display } from "./system/display";
import { FlexboxProps, flexbox } from "./system/flexbox";
import { BorderProps, border } from "./system/border";
import { PositionProps, position } from "./system/position";
import { ShadowProps, shadow } from "./system/shadow";
import { SizingProps, sizing } from "./system/sizing";
import { TypographyProps, typography } from "./system/typography";

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
