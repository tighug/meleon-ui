import { Meta } from "@storybook/react/types-6-0";
import React, { useState } from "react";
import { List, ListProps } from "./List";
import { ListItem, ListItemProps } from "./ListItem";
import { Card } from "./Card";

export default {
  title: "Data Display/List",
  component: List,
  subcomponents: { ListItem },
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

const Template = (args: ListProps | ListItemProps) => {
  const [selected, setSelected] = useState(0);
  const listItems = ["One", "Two", "Three"].map((item, i) => (
    <ListItem key={i} active={selected === i} onClick={() => setSelected(i)}>
      {item}
    </ListItem>
  ));

  return (
    <Card maxWidth={300}>
      <List {...args}>{listItems}</List>
    </Card>
  );
};

export const Basic = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

export const Shaped = Template.bind({});

Shaped.args = {
  shaped: true,
};

export const Dense = Template.bind({});

Dense.args = {
  dense: true,
};

export const Flat = Template.bind({});

Flat.args = {
  flat: true,
};

export const Rounded = Template.bind({});

Rounded.args = {
  rounded: true,
};
