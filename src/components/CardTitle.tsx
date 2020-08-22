import React, { ReactNode } from "react";
import styled from "styled-components";
import { Wrapper as CardSubTitle } from "./CardSubTitle";
import { Wrapper as CardText } from "./CardText";

export type CardTitleProps = {
  children?: ReactNode;
};

export default function CardTitle({ children }: CardTitleProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em;
  word-break: break-break-all;

  + ${CardSubTitle} {
    padding-top: 0;
    margin-top: -16px;
  }

  + ${CardText} {
    padding-top: 0;
  }
`;
