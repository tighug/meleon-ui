import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { Input, InputProps } from "./Input";
import { Box } from "./Box";

export default {
  title: "Input/Input",
  component: Input,
} as Meta;

const Template = (args: InputProps) => (
  <Box display="flex" width={250}>
    <Input {...args}>Children</Input>
  </Box>
);

export const Basic = Template.bind({});

Basic.args = {
  message: "message",
  prependIcon: "phone",
  appendIcon: "close",
};

export const Error = Template.bind({});

Error.args = {
  error: true,
  errorMessage: "errorMessage",
  prependIcon: "phone",
  appendIcon: "close",
};

export const Success = Template.bind({});

Success.args = {
  success: true,
  successMessage: "successMessage",
  prependIcon: "phone",
  appendIcon: "close",
};
