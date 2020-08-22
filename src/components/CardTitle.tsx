import React, { ReactNode } from "react";
import styled from "styled-components";
import { StyledCardSubTitle } from "./CardSubTitle";
import { StyledCardText } from "./CardText";

export type CardTitleProps = {
  children?: ReactNode;
};

export function CardTitle({ children }: CardTitleProps) {
  return <StyledCardTitle>{children}</StyledCardTitle>;
}

export const StyledCardTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em;
  word-break: break-break-all;

  + ${StyledCardSubTitle} {
    padding-top: 0;
    margin-top: -16px;
  }

  + ${StyledCardText} {
    padding-top: 0;
  }
`;
