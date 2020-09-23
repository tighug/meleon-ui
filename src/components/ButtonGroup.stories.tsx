import { Meta } from "@storybook/react/types-6-0";
import React, { useState } from "react";
import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
import { Button } from "./Button";

export default {
  title: "Input/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    color: { control: "color" },
    bgColor: { control: "color" },
  },
} as Meta;

const Template = (args: ButtonGroupProps) => {
  const [selected, setSelected] = useState(0);
  const textItems = ["One", "Two", "Three"].map((item, i) => (
    <Button key={i} active={selected === i} onClick={() => setSelected(i)}>
      {item}
    </Button>
  ));

  return <ButtonGroup {...args}>{textItems}</ButtonGroup>;
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
