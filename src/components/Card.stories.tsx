import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Card, { CardProps } from "./Card";
import CardTitle from "./CardTitle";
import CardSubTitle from "./CardSubTitle";
import CardText from "./CardText";
import CardActions from "./CardActions";
import Button from "./Button";

export default {
  title: "Surface/Card",
  component: Card,
  subcomponents: { CardTitle, CardSubTitle, CardText, CardActions },
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

const Template = (args: CardProps) => (
  <Card {...args}>
    <CardTitle>Card Title</CardTitle>
    <CardSubTitle>Card Sub Title</CardSubTitle>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </CardText>
    <CardActions>
      <Button text>Button</Button>
      <Button text>Button</Button>
    </CardActions>
  </Card>
);

export const Basic = Template.bind({});

Basic.args = {
  maxWidth: 350,
};

export const Outlined = Template.bind({});

Outlined.args = {
  maxWidth: 350,
  outlined: true,
};
