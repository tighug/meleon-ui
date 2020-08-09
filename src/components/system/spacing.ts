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
  margin: ${(props) => space(props.ma)};
  margin-top: ${(props) => space(props.mt || props.my)};
  margin-right: ${(props) => space(props.mr || props.mx)};
  margin-bottom: ${(props) => space(props.mb || props.my)};
  margin-left: ${(props) => space(props.ml || props.mx)};
`;

export const padding = css<PaddingProps>`
  padding: ${(props) => space(props.pa)};
  padding-top: ${(props) => space(props.pt || props.py)};
  padding-right: ${(props) => space(props.pr || props.px)};
  padding-bottom: ${(props) => space(props.pb || props.py)};
  padding-left: ${(props) => space(props.pl || props.px)};
`;

export const spacing = css<SpacingProps>`
  ${margin}
  ${padding}
`;
