import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { str2color } from "../utils/str2color";

export type DividerProps = {
  color?: string;
  vertical?: boolean;
};

export function Divider({ vertical = false, color }: DividerProps) {
  const className = classnames({ vertical });

  return <StyledHr className={className} color={color} />;
}

const StyledHr = styled.hr.attrs((props) => ({
  color: str2color(props.color, props.theme),
}))<{ color?: string }>`
  display: block;
  flex: 1 1 0px;
  max-width: 100%;
  height: 0;
  max-height: 0;
  border-color: ${(props) =>
    props.color || props.theme.text.dividers || "rgba(255, 255, 255, 0.12)"};
  border-style: solid;
  border-width: thin 0 0;
  transition: inherit;

  &.vertical {
    display: inline-flex;
    align-self: stretch;
    width: 0;
    max-width: 0;
    height: inherit;
    min-height: 100%;
    max-height: 100%;
    vertical-align: text-bottom;
    border-width: 0 thin 0 0;
  }
`;
