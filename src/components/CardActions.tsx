import React, { ReactNode } from "react";
import styled from "styled-components";
import { StyledButton } from "./Button";

export type CardActionsProps = {
  children?: ReactNode;
};

export function CardActions({ children }: CardActionsProps) {
  return <StyledCardActions>{children}</StyledCardActions>;
}

export const StyledCardActions = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  + ${StyledButton} {
    padding: 0 8px;
  }
`;
