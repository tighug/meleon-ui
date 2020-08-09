import { css } from "styled-components";

export type BorderProps = {
  border?: number;
  borderTop?: number;
  borderRight?: number;
  borderBottom?: number;
  borderLeft?: number;

  borderColor?: string;
  borderStyle?: string;
  borderRadius?: string;
};

export const border = css<BorderProps>`
  border-color: ${(props) => props.borderColor};
  border-style: ${(props) => props.borderStyle};
  border-width: ${(props) => props.border}px;
  border-top-width: ${(props) => props.borderTop}px;
  border-right-width: ${(props) => props.borderRight}px;
  border-bottom-width: ${(props) => props.borderBottom}px;
  border-left-width: ${(props) => props.borderLeft}px;
  border-radius: ${(props) => props.borderRadius};
`;
