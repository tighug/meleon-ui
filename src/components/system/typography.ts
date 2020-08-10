import { css } from "styled-components";

type Global = "inherit" | "initial" | "unset";

export type TypographyProps = {
  fontSize?: string;
  fontStyle?: "normal" | "italic" | Global;
  fontWeight?: "normal" | "bold" | "lighter" | "bolder" | number;
  lineHeight?: number | string;
  textAlign?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent"
    | Global;
  letterSpacing?: string;
};

export const typography = css<TypographyProps>`
  font-size: ${(props) => props.fontSize};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  letter-spacing: ${(props) => props.letterSpacing};
`;
