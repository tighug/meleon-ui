import { css } from "styled-components";

export type PaletteProps = {
  color?: string;
  bgcolor?: string;
};

export const palette = css<PaletteProps>`
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.bgcolor || "transparent"};
`;
