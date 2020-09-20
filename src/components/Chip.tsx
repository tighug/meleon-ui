import React, { ReactNode } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { str2color } from "../utils/str2color";
import { Ripples } from "./Ripples";

export type ChipProps = {
  children?: ReactNode;

  color?: string;

  close?: boolean;
  closeIcon?: string;
  dark?: boolean;

  outlined?: boolean;
  label?: boolean;
  disabled?: boolean;
  ripple?: boolean;
};

export function Chip({
  outlined = false,
  label = false,
  disabled = false,
  ripple = true,
  children,
  ...props
}: ChipProps) {
  const className = classnames({ outlined, label, disabled });

  return (
    <Ripples disabled={!ripple}>
      <StyledSpan className={className} {...props}>
        {children}
      </StyledSpan>
    </Ripples>
  );
}

export const StyledSpan = styled.span.attrs((props) => ({
  color: str2color(props.color, props.theme),
}))<{ color?: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 32px;
  padding: 0 12px;
  overflow: hidden;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.text.primary};
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background-color: ${(props) =>
    props.color || props.theme.normal || "#272727"};
  border: 0 solid;
  border-radius: 16px;
  outline: none;

  &.outlined {
    color: ${(props) => props.color || props.theme.text.primary};
    background-color: transparent;
    border-color: currentColor;
    border-width: 1px;
  }

  &.label {
    border-radius: 4px;
  }

  &.disabled {
    color: ${(props) => props.theme.text.disabled};
    pointer-events: none;
    background-color: ${(props) => props.theme.text.dividers};

    &.outlined {
      background-color: transparent;
    }
  }
`;
