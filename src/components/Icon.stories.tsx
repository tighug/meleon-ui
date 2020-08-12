import React from "react";
import Box from "./system/Box";
import Icon from "./Icon";

export default {
  title: "Surface/Icon",
  component: Icon,
};

export const icon = () => (
  <Box display="flex" justifyContent="space-around">
    <Icon size="lg">account</Icon>
    <Icon size="lg">message</Icon>
    <Icon size="lg">email</Icon>
  </Box>
);

export const color = () => (
  <Box display="flex" justifyContent="space-around">
    <Icon size="lg" color="red">
      account
    </Icon>
    <Icon size="lg" color="green">
      message
    </Icon>
    <Icon size="lg" color="blue">
      email
    </Icon>
  </Box>
);

export const disabled = () => (
  <Box display="flex" justifyContent="space-around">
    <Icon size="lg" disabled>
      account
    </Icon>
    <Icon size="lg" disabled>
      message
    </Icon>
    <Icon size="lg" disabled>
      email
    </Icon>
  </Box>
);
