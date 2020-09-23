import { Meta } from "@storybook/react/types-6-0";
import React, { useState } from "react";
import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Box } from "./Box";

export default {
  title: "Input/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    color: { control: "color" },
    bgColor: { control: "color" },
  },
} as Meta;

const Template = (args: ButtonGroupProps) => {
  const [selectedText, setSelectedText] = useState(0);
  const [selectedIcon, setSelectedIcon] = useState(0);
  const textItems = ["One", "Two", "Three"].map((item, i) => (
    <Button
      key={i}
      active={selectedText === i}
      onClick={() => setSelectedText(i)}
    >
      {item}
    </Button>
  ));
  const iconItems = [
    "format-align-left",
    "format-align-center",
    "format-align-right",
  ].map((item, i) => (
    <Button
      key={i}
      active={selectedIcon === i}
      onClick={() => setSelectedIcon(i)}
    >
      <Icon>{item}</Icon>
    </Button>
  ));

  return (
    <Box display="flex" justifyContent="space-around">
      <ButtonGroup {...args}>{textItems}</ButtonGroup>
      <ButtonGroup {...args}>{iconItems}</ButtonGroup>
    </Box>
  );
};

export const Basic = Template.bind({});

export const Normal = Template.bind({});

export const Borderless = Template.bind({});

Borderless.args = {
  borderless: true,
};

export const Rounded = Template.bind({});

Rounded.args = {
  rounded: true,
};

export const Tile = Template.bind({});

Tile.args = {
  tile: true,
};
