import { css } from "styled-components";

export type SizingProps = {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
  boxSizing?: "content-box" | "border-box";
};

export const sizing = css<SizingProps>`
  box-sizing: ${(props) => props.boxSizing};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
`;
