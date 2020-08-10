import { css } from "styled-components";

export type Size = number | "auto";

export type MarginProps = {
  ma?: Size;
  mx?: Size;
  my?: Size;
  mt?: Size;
  mr?: Size;
  mb?: Size;
  ml?: Size;
};

export type PaddingProps = {
  pa?: Size;
  px?: Size;
  py?: Size;
  pt?: Size;
  pr?: Size;
  pb?: Size;
  pl?: Size;
};

export type SpacingProps = MarginProps & PaddingProps;

function space(size: Size = 0): string {
  if (size === "auto") return size;

  return `${size * 4}px`;
}

export const margin = css<MarginProps>`
  margin-top: ${(props) => space(props.mt || props.my || props.ma)};
  margin-right: ${(props) => space(props.mr || props.mx || props.ma)};
  margin-bottom: ${(props) => space(props.mb || props.my || props.ma)};
  margin-left: ${(props) => space(props.ml || props.mx || props.ma)};
`;

export const padding = css<PaddingProps>`
  padding: ${(props) => space(props.pa)};
  padding-top: ${(props) => space(props.pt || props.py || props.pa)};
  padding-right: ${(props) => space(props.pr || props.px || props.pa)};
  padding-bottom: ${(props) => space(props.pb || props.py || props.pa)};
  padding-left: ${(props) => space(props.pl || props.px || props.pa)};
`;

export const spacing = css<SpacingProps>`
  ${margin}
  ${padding}
`;
