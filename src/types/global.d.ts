import "styled-components";
import { Theme } from "../components/ThemeProvider";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
