import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Chip, ChipProps } from "./Chip";
import { Box } from "./Box";

export default {
  title: "Data Display/Chip",
  component: Chip,
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

const Template = (args: ChipProps) => <Chip {...args}>Chip</Chip>;

export const Basic = Template.bind({});

export const Normal = () => (
  <Box display="flex" justifyContent="space-around">
    <Chip>Default</Chip>
    <Chip color="primary">Primary</Chip>
    <Chip color="secondary">Secondary</Chip>
    <Chip disabled>Disabled</Chip>
  </Box>
);

export const Outline = () => (
  <Box display="flex" justifyContent="space-around">
    <Chip outlined>Default</Chip>
    <Chip outlined color="primary">
      Primary
    </Chip>
    <Chip outlined color="secondary">
      Secondary
    </Chip>
    <Chip outlined disabled>
      Disabled
    </Chip>
  </Box>
);

export const Label = () => (
  <Box display="flex" justifyContent="space-around">
    <Chip label>Default</Chip>
    <Chip label color="primary">
      Primary
    </Chip>
    <Chip label color="secondary">
      Secondary
    </Chip>
    <Chip label disabled>
      Disabled
    </Chip>
  </Box>
);
