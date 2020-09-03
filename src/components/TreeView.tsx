import React, { cloneElement, Children, ReactElement, useState } from "react";
import styled from "styled-components";

const fontSize = {
  xs: "10px",
  sm: "12px",
  md: "14px",
  lg: "16px",
  xl: "18px",
} as const;

export type TreeViewProps = {
  children: ReactElement[];

  /** Sets the font-size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Sets the color when activated. */
  color?: string;

  /** Sets the default icon used to expand the node. */
  expandIcon?: string;
  /** Sets the default icon used to collape the node. */
  collapseIcon?: string;

  /** Enables the active state when click a node. */
  activatable?: boolean;
  /** Applies the effect when hovered. */
  hoverable?: boolean;
  /** Makes the border-radius of node larger.  */
  rounded?: boolean;
  /** Makes the right border-radius of node larger.  */
  shaped?: boolean;
};

export function TreeView({
  size = "md",
  expandIcon,
  collapseIcon,
  children,
}: TreeViewProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selected, setSelected] = useState<number>();

  const clickIconHandler = (id: number) => {
    const index = openItems.findIndex((item) => item === id);

    if (index === -1) {
      setOpenItems((oldItems) => [...oldItems, id]);
    } else {
      setOpenItems((oldItems) => oldItems.filter((item) => item !== id));
    }
  };
  const clickLabelHandler = (id: number) => setSelected(id);

  const fixedChildren = (
    children: ReactElement[],
    depth: number
  ): ReactElement[] =>
    Children.map(children, (child) => {
      const grandchildren: ReactElement[] = child.props.children;
      const fixedGrandchildren =
        Children.count(grandchildren) > 0
          ? fixedChildren(grandchildren, depth + 1)
          : undefined;
      const id = child.props.id;
      const open = openItems.includes(id);
      const active = selected === id;
      const hasItem = fixedGrandchildren !== undefined;
      const icon = hasItem ? (open ? collapseIcon : expandIcon) : undefined;

      return cloneElement(child, {
        children: fixedGrandchildren,
        onIconClick: clickIconHandler,
        onLabelClick: clickLabelHandler,
        icon,
        open,
        active,
        depth,
      });
    });

  return (
    <Wrapper fontSize={fontSize[size]}>{fixedChildren(children, 0)}</Wrapper>
  );
}

type WrapperProps = {
  fontSize: string;
};

export const Wrapper = styled.div<WrapperProps>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.text.secondary};
`;
