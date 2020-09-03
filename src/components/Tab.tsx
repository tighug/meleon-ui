import React, { ReactNode } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { nameToColor } from "../utils/nameToColor";

export type TabProps = {
  children?: ReactNode;

  id: number;
  active?: boolean;
  accent?: string;

  onClick?: (id: number) => void;
};

export function Tab({
  active = false,
  children,
  id,
  accent,
  onClick,
}: TabProps) {
  const className = classnames({ active });

  const clickHandler = () => onClick && onClick(id);

  return (
    <StyledTab className={className} color={accent} onClick={clickHandler}>
      {children}
    </StyledTab>
  );
}

export type StyledTabProps = {
  color?: string;
};

export const StyledTab = styled.div.attrs((props) => ({
  accent: nameToColor(props.color, props.theme),
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(4em - 20px);
  padding: 0 1.2em;
  overflow: hidden;
  font-weight: 500;
  line-height: 22px;

  &:hover {
    cursor: pointer;
  }
  &.active {
    color: ${(props) => props.accent};
    border-bottom: 1px solid currentColor;
  }
`;
