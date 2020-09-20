import React, { ReactNode } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { StyledDiv as ListItem } from "./ListItem";
import { str2color } from "../utils/str2color";

export type ListProps = {
  children?: ReactNode;
  color?: string;

  dense?: boolean;
  rounded?: boolean;
  shaped?: boolean;
  flat?: boolean;
  disabled?: boolean;
};

export function List({
  dense = false,
  rounded = false,
  shaped = false,
  flat = false,
  disabled = false,
  ...props
}: ListProps) {
  const className = classnames({ dense, rounded, shaped, flat, disabled });

  return <StyledDiv className={className} {...props} />;
}

const StyledDiv = styled.div.attrs((props) => ({
  color: str2color(props.color, props.theme),
}))<{ color?: string }>`
  position: static;
  display: block;
  padding: 8px 0;
  color: ${(props) => props.theme.text.primary};
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: box-shadow;

  &.dense {
    ${ListItem} {
      min-height: 40px;
    }
  }

  &.rounded {
    ${ListItem} {
      border-radius: 32px;
    }
  }

  &.shaped {
    ${ListItem} {
      border-top-right-radius: 32px;
      border-bottom-right-radius: 32px;
    }
  }

  &.disabled {
    ${ListItem} {
      pointer-events: none;
    }
  }

  ${ListItem}.active {
    color: ${(props) => props.color || props.theme.primary};
  }

  &.flat {
    ${ListItem}.active:before {
      opacity: 0;
    }
  }
`;
