import { css } from "styled-components";

export type FlexboxProps = {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  alignContent?: "start" | "center" | "space-between" | "space-around";
  alignItems?: "stretch" | "center" | "start" | "end";
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  order?: number;
  flex?: number;
  flexGrow?: number;
  flexShrink?: number;
  alignSelf?: "stretch" | "center" | "start" | "end";
};

export const flexbox = css<FlexboxProps>`
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  flex-wrap: ${(props) => props.flexWrap};
  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
  justify-content: ${(props) => props.justifyContent};
  order: ${(props) => props.order};
`;
