import { css } from "styled-components";

export type SizingProps = {
  boxSizing?: "content-box" | "border-box";
  width?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
};

export function size(val: string | number = "auto"): string {
  if (typeof val === "string") return val;

  if (val < 0) return "auto";
  if (val <= 1) return `${val * 100}%`;

  return `${val}px`;
}

export const sizing = css<SizingProps>`
  box-sizing: ${(props) => props.boxSizing};
  width: ${(props) => size(props.width)};
  min-width: ${(props) => size(props.minWidth)};
  max-width: ${(props) => size(props.maxWidth)};
  height: ${(props) => size(props.height)};
  min-height: ${(props) => size(props.minHeight)};
  max-height: ${(props) => size(props.maxHeight)};
`;
