import { css } from "styled-components";
import boxShadow from "../../utils/boxShadow";

export type ShadowProps = {
  boxShadow?: string;
};

export const shadow = css<ShadowProps>`
  box-shadow: ${(props) => props.boxShadow};
`;
