import React, { ReactElement, Children, cloneElement, useState } from "react";
import styled from "styled-components";
import { str2color } from "../utils/str2color";

export type TabsProps = {
  children?: ReactElement | ReactElement[];

  /** Sets the bg color. */
  color?: string;
  /** Sets the accent color. */
  accent?: string;
};

export function Tabs({ children, color, accent }: TabsProps) {
  const [selected, setSelected] = useState<number>();
  const clickHandler = (id: number) => setSelected(id);

  const fixedChildren = (children?: ReactElement | ReactElement[]) =>
    Children.map(children, (child) => {
      if (child === undefined) return;

      const id = child.props.id;
      const active = selected === id;

      return cloneElement(child, {
        onClick: clickHandler,
        active,
        accent,
      });
    });

  return <StyledTabs color={color}>{fixedChildren(children)}</StyledTabs>;
}

export const StyledTabs = styled.div.attrs((props) => ({
  color: str2color(props.color, props.theme),
}))<{ color?: string }>`
  display: inline-flex;
  color: ${(props) => props.theme.text.disabled};
  background-color: ${(props) => props.color};
`;
