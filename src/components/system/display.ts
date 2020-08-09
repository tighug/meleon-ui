import { css } from "styled-components";

export type DisplayProps = {
  display?: "none" | "block" | "inline" | "inline-block" | "flex";
  overflow?: "auto" | "visible" | "hidden" | "clip" | "scroll";
  textOverflow?: "clip" | "ellipsis";
  whiteSpace?:
    | "normal"
    | "nowrap"
    | "pre"
    | "pre-wrap"
    | "pre-line"
    | "break-spaces";
  visibility?: "visible" | "hidden" | "collapse";
};

export const display = css<DisplayProps>`
  display: ${(props) => props.display};
  overflow: ${(props) => props.overflow};
  text-overflow: ${(props) => props.textOverflow};
  white-space: ${(props) => props.whiteSpace};
  visibility: ${(props) => props.visibility};
`;
