import React from "react";
import Box from "./Box";
import Icon, { IconProps } from "./Icon";

export default {
  title: "Surface/Icon",
  component: Icon,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args: IconProps) => <Icon {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: "account",
  color: "white",
};

export const color = () => (
  <Box display="flex" justifyContent="space-around">
    <Icon color="red">account</Icon>
    <Icon color="green">message</Icon>
    <Icon color="blue">email</Icon>
  </Box>
);

export const disabled = () => (
  <Box display="flex" justifyContent="space-around">
    <Icon disabled>account</Icon>
    <Icon disabled>message</Icon>
    <Icon disabled>email</Icon>
  </Box>
);
