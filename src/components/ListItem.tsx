import React, { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { Ripples } from "./Ripples";

export type ListItemProps = {
  children?: ReactNode;

  color?: string;

  active?: boolean;
  clickable?: boolean;
  disabled?: boolean;
  ripple?: boolean;

  onClick?: MouseEventHandler;
};

export function ListItem({
  active = false,
  clickable = true,
  disabled = false,
  ripple = true,
  ...props
}: ListItemProps) {
  const className = classnames({
    active,
    clickable,
    disabled,
  });

  return (
    <Ripples disabled={!clickable || !ripple}>
      <StyledDiv className={className} {...props} />
    </Ripples>
  );
}

export const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 100%;
  align-items: center;
  min-height: 48px;
  padding: 0 16px;
  overflow: hidden;
  text-decoration: none;
  outline: none;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    content: "";
    background-color: currentColor;
    opacity: 0;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  }

  &:hover:before {
    opacity: 0.08;
  }

  &.active {
    &:before {
      opacity: 0.24;
    }
  }

  &.clickable {
    cursor: pointer;
  }

  &.disabled {
    pointer-events: none;
  }
`;
