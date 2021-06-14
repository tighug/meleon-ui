import React, { ReactNode } from "react";
import styled from "styled-components";
import { SpacingProps, spacing } from "@systems/spacing";
import { PaletteProps, palette } from "@systems/palette";
import { DisplayProps, display } from "@systems/display";
import { FlexboxProps, flexbox } from "@systems/flexbox";
import { BorderProps, border } from "@systems/border";
import { PositionProps, position } from "@systems/position";
import { ShadowProps, shadow } from "@systems/shadow";
import { SizingProps, sizing } from "@systems/sizing";
import { TypographyProps, typography } from "@systems/typography";

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

export function Box({ ...props }: BoxProps) {
  return <StyledBox {...props} />;
}

export const StyledBox = styled.div<BoxProps>`
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
