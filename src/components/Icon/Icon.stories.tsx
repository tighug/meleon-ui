import React from "react";
import { Box } from "@components/Box";
import { Icon, IconProps } from "./Icon";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Surface/Icon",
  component: Icon,
  argTypes: {
    color: { control: "color" },
  },
};

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: "account",
  color: "white",
};

export const color = () => (
  <Box display="flex" justifyContent="space-around">
    <Icon color="primary">account</Icon>
    <Icon color="secondary">message</Icon>
    <Icon color="info">email</Icon>
  </Box>
);

export const disabled = () => (
  <Box display="flex" justifyContent="space-around">
    <Icon disabled>account</Icon>
    <Icon disabled>message</Icon>
    <Icon disabled>email</Icon>
  </Box>
);
