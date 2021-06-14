import React, { MouseEventHandler, ReactNode } from "react";
import classnames from "classnames";
import styled from "styled-components";
import { boxShadow } from "@systems/shadow";
import { SizingProps, sizing } from "@systems/sizing";
import { nameToColor } from "@utils/nameToColor";

export type CardProps = {
  /** children */
  children?: ReactNode;

  /** Sets the color. */
  color?: string;
  /** Sets the elevation. */
  elevation?: number;
  /** Sets the width. */
  width?: number | string;
  /** Sets the max-width. */
  maxWidth?: number | string;
  /** Sets the min-width. */
  minWidth?: number | string;
  /** Sets the height. */
  height?: number | string;
  /** Sets the max-height. */
  maxHeight?: number | string;
  /** Sets the min-height. */
  minHeight?: number | string;

  /** Removes elevation & adds a thin border. */
  outlined?: boolean;
  /** Designates the border-radius applied to the component. */
  rounded?: boolean;
  /** Disables the click. */
  disabled?: boolean;
  /** Removes the elevation. */
  flat?: boolean;
  /** Applies an elevation of 4dp when hovered. */
  hover?: boolean;
  /** Applies an elevation of 8dp. */
  raised?: boolean;
  /** Applies the ripple effect on click. */
  ripple?: boolean;
  /** Makes the border-radius zero. */
  tile?: boolean;

  /** Event on click */
  onClick?: MouseEventHandler;
};

export function Card({
  elevation = 2,
  outlined = false,
  rounded = false,
  disabled = false,
  flat = false,
  hover = false,
  raised = false,
  ripple = false,
  tile = false,
  ...props
}: CardProps) {
  const className = classnames({
    outlined,
    rounded,
    disabled,
    flat,
    hover,
    raised,
    ripple,
    tile,
  });

  return <StyledCard className={className} elevation={elevation} {...props} />;
}

type StyledCardProps = {
  color?: string;
  elevation: number;
};

export const StyledCard = styled.div.attrs((props) => ({
  color: nameToColor(props.color, props.theme),
}))<StyledCardProps & SizingProps>`
  ${sizing}

  color: ${(props) => props.theme.text.primary || "white"};
  background-color: ${(props) =>
    props.color || props.theme.bg.secondary || "#303030"};
  border: 0 solid;
  border-color: ${(props) =>
    props.theme.text.dividers || "rgba(255, 255, 255, 0.12)"};
  border-radius: 0;
  box-shadow: ${(props) => boxShadow(props.elevation)};

  &.flat {
    box-shadow: none;
  }
  &:hover {
    &.hover {
      box-shadow: ${boxShadow(4)};
    }
  }
  &.raised {
    box-shadow: ${boxShadow(8)};
  }
  &.tile {
    border-radius: 0;
  }
  &.outlined {
    border-width: 1px;
    box-shadow: none;
  }
  &.rounded {
    border-radius: 4px;
  }
  &.disabled {
    color: ${(props) =>
      props.theme.text.disabled || "rgba(255, 255, 255, 0.3)"};
    pointer-events: none;
    background-color: ${(props) =>
      props.theme.bg.disabled || "rgba(255, 255, 255, 0.12)"};
    box-shadow: none;
  }
`;
