import React, { ReactNode, ReactElement } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { Icon } from "./Icon";
import { Button } from "./Button";

export type TreeItemProps = {
  children?: ReactElement | ReactElement[];

  /** Sets the node ID. */
  id: number;

  /** Sets the node label slot. */
  label: ReactNode;
  /** Sets the prepend slot. */
  prepend?: ReactNode;
  /** Sets the append slot. */
  append?: ReactNode;

  /** Sets the icon. Basically, set by TreeView component.  */
  icon?: string;
  /** Sets the depth. Basically, set by TreeView component.  */
  depth?: number;
  /** Sets the open. Basically, set by TreeView component.  */
  open?: boolean;

  active?: boolean;
  hover?: boolean;
  shaped?: boolean;
  rounded?: boolean;
  openOnClick?: boolean;

  onIconClick?: (id: number) => void;
  onLabelClick?: (id: number) => void;
};

export function TreeItem({
  depth = 0,
  open = false,
  active = false,
  hover = false,
  shaped = false,
  rounded = false,
  openOnClick = false,
  children,
  id,
  label,
  icon,
  onIconClick,
  onLabelClick,
}: TreeItemProps) {
  const className = classnames({ active, hover, shaped, rounded, openOnClick });
  const clickIconHandler = () => onIconClick && onIconClick(id);
  const clickLabelHandler = () => onLabelClick && onLabelClick(id);

  const iconButton = icon ? (
    <Button icon onClick={clickIconHandler}>
      <Icon>{icon}</Icon>
    </Button>
  ) : (
    <Button icon disabled />
  );

  return (
    <>
      <Header depth={depth} onClick={clickLabelHandler}>
        {iconButton}
        <Label className={className}>{label}</Label>
      </Header>
      <Body open={open}>{children}</Body>
    </>
  );
}

type HeaderProps = {
  depth: number;
};

const Header = styled.div<HeaderProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: ${(props) => props.depth * 20}px;

  &:hover {
    cursor: pointer;
  }
`;

const Label = styled.div`
  &.active {
    color: ${(props) => props.theme.primary};
  }
`;

type BodyProps = {
  open: boolean;
};

const Body = styled.div<BodyProps>`
  height: ${({ open }) => (open ? "auto" : 0)};
  overflow: hidden;
  transition: all 0.1s linear;
`;
