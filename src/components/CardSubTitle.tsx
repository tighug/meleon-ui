import React, { ReactNode } from "react";
import styled from "styled-components";
import { StyledCardText } from "./CardText";

export type CardSubTitleProps = {
  children?: ReactNode;
};

export function CardSubTitle({ children }: CardSubTitleProps) {
  return <StyledCardSubTitle>{children}</StyledCardSubTitle>;
}

export const StyledCardSubTitle = styled.div`
  padding: 16px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${(props) => props.theme.text.secondary || "rgba(255,255,255,0.7"};
  letter-spacing: 0.01em;

  + ${StyledCardText} {
    padding-top: 0;
  }
`;
