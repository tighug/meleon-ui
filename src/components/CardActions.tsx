import React, { ReactNode } from "react";
import styled from "styled-components";
import { Wrapper as Button } from "./Button";

export type CardActionsProps = {
  children?: ReactNode;
};

export default function CardActions({ children }: CardActionsProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  + ${Button} {
    padding: 0 8px;
  }
`;
