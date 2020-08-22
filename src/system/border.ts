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
  border-color: ${(props) => props.borderColor || "white"};
  border-style: ${(props) => props.borderStyle || "solid"};
  border-top-width: ${(props) => props.borderTop || props.border || 0}px;
  border-right-width: ${(props) => props.borderRight || props.border || 0}px;
  border-bottom-width: ${(props) => props.borderBottom || props.border || 0}px;
  border-left-width: ${(props) => props.borderLeft || props.border || 0}px;
  border-radius: ${(props) => props.borderRadius};
`;
