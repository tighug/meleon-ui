import React, { MouseEventHandler } from "react";
import classnames from "classnames";
import styled from "styled-components";
import Sheet, { SheetProps } from "./Sheet";
import { boxShadow } from "./system/shadow";

export type CardProps = {
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
} & SheetProps;

export default function Card({
  disabled = false,
  flat = false,
  hover = false,
  raised = false,
  ripple = false,
  tile = false,
  ...props
}: CardProps) {
  const className = classnames({ disabled, flat, hover, raised, ripple, tile });

  return <Wrapper className={className} {...props} />;
}

type WrapperProps = {
  className: string;
};
const Wrapper = styled(Sheet)<WrapperProps>`
  box-shadow: ${boxShadow(2)};

  &.disabled {
    color: rgba(255, 255, 255, 0.3);
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0.12);
    box-shadow: none;
  }
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
`;
