import React from "react";
import Sheet, { SheetProps } from "./Sheet";
import Box from "./Box";

export default {
  title: "Surface/Sheet",
  component: Sheet,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args: SheetProps) => <Sheet {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  height: 100,
  width: "auto",
  color: "secondary",
};

export const outlined = () => <Sheet height={100} outlined />;

export const rounded = () => <Sheet height={100} rounded />;

export const elevation = () => (
  <Box display="flex" justifyContent="space-between">
    <Sheet height={100} width={100} elevation={0} />
    <Sheet height={100} width={100} elevation={1} />
    <Sheet height={100} width={100} elevation={2} />
    <Sheet height={100} width={100} elevation={3} />
    <Sheet height={100} width={100} elevation={4} />
    <Sheet height={100} width={100} elevation={8} />
  </Box>
);
