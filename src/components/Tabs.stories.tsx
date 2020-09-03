import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Tabs, TabsProps } from "./Tabs";
import { Tab } from "./Tab";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  subcomponents: { Tab },
  argTypes: {
    color: { control: "color" },
    accent: { control: "color" },
  },
} as Meta;

const Template = (args: TabsProps) => (
  <Tabs {...args}>
    <Tab id={1}>Item One</Tab>
    <Tab id={2}>Item Two</Tab>
    <Tab id={3}>Item Three</Tab>
  </Tabs>
);

export const Basic = Template.bind({});

Basic.args = {
  color: "#242424",
  accent: "primary",
};
