import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { TreeView, TreeViewProps } from "./TreeView";
import { TreeItem } from "./TreeItem";

export default {
  title: "Navigation/TreeView",
  component: TreeView,
  subcomponents: { TreeItem },
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

const Template = (args: TreeViewProps) => (
  <TreeView {...args}>
    <TreeItem id={1} label="One">
      <TreeItem id={2} label="Two" />
      <TreeItem id={3} label="Three" />
      <TreeItem id={4} label="Four">
        <TreeItem id={7} label="Seven" />
        <TreeItem id={8} label="Eight" />
      </TreeItem>
    </TreeItem>
    <TreeItem id={5} label="Five" />
    <TreeItem id={6} label="Six" />
  </TreeView>
);

export const Basic = Template.bind({});

Basic.args = {
  expandIcon: "chevron-right",
  collapseIcon: "chevron-down",
};
