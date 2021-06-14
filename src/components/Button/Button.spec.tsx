import React from "react";
import { render, screen } from "@utils/test-utils";
import { Button } from "./Button";
import { dark } from "@themes/dark";
import "jest-styled-components";

describe("<Button />", () => {
  test("can render a text primary button", () => {
    render(<Button color="primary">Hello</Button>);

    expect(screen.getByRole("button")).toHaveStyleRule(
      "color",
      dark.text.primary
    );
  });
});
