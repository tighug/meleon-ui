import React, { ReactNode } from "react";
import styled from "styled-components";
import { Wrapper as CardText } from "./CardText";

export type CardSubTitleProps = {
  children?: ReactNode;
};

export default function CardSubTitle({ children }: CardSubTitleProps) {
  return <Wrapper>{children}</Wrapper>;
}

export const Wrapper = styled.div`
  padding: 16px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${(props) => props.theme.text.secondary || "rgba(255,255,255,0.7"};
  letter-spacing: 0.01em;

  + ${CardText} {
    padding-top: 0;
  }
`;
