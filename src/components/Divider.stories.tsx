import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { Box } from "./Box";
import { Divider, DividerProps } from "./Divider";

export default {
  title: "Data Display/Divider",
  component: Divider,
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

const Template = (args: DividerProps) => <Divider {...args} />;

export const Basic = Template.bind({});

export const Vertical = () => (
  <Box display="flex" align-items="center" height="50px">
    <Divider vertical />
  </Box>
);
