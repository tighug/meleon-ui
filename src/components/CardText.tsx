import React, { ReactNode } from "react";
import styled from "styled-components";

export type CardTextProps = {
  children?: ReactNode;
};

export default function CardText({ children }: CardTextProps) {
  return <StyledCardText>{children}</StyledCardText>;
}

export const StyledCardText = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${(props) => props.theme.text.secondary || "rgba(255,255,255,0.7"};
  letter-spacing: 0.01em;
`;
