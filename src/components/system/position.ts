import { css } from "styled-components";

export type PositionProps = {
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  zIndex?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export const position = css<PositionProps>`
  position: ${(props) => props.position};
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
  bottom: ${(props) => props.bottom}px;
  left: ${(props) => props.left}px;
  z-index: ${(props) => props.zIndex};
`;
