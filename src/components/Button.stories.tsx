import React from "react";
import { Button, ButtonProps } from "./Button";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Input/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

const Template = (args: ButtonProps) => <Button {...args}>Normal</Button>;

export const Basic = Template.bind({});

export const Normal = () => (
  <div>
    <Box display="flex" justifyContent="space-around">
      <Button>Normal</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
    </Box>
    <Box display="flex" justifyContent="space-around" mt={6}>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
    </Box>
  </div>
);

export const Block = () => {
  const BaseButton = (args: ButtonProps) => <Button block {...args} />;

  return (
    <div>
      <Box>
        <BaseButton>Block</BaseButton>
      </Box>
      <Box mt={4}>
        <BaseButton color="primary">Primary</BaseButton>
      </Box>
      <Box mt={4}>
        <BaseButton color="secondary">Secondary</BaseButton>
      </Box>
      <Box mt={4}>
        <BaseButton disabled>Disabled</BaseButton>
      </Box>
    </div>
  );
};

export const Depressed = () => {
  const BaseButton = (args: ButtonProps) => <Button depressed {...args} />;

  return (
    <Box display="flex" justifyContent="space-around">
      <BaseButton>Normal</BaseButton>
      <BaseButton color="primary">Primary</BaseButton>
      <BaseButton color="secondary">Secondary</BaseButton>
      <BaseButton disabled>Disabled</BaseButton>
    </Box>
  );
};

export const Fab = () => {
  const BaseButton = (args: ButtonProps) => <Button fab {...args} />;

  return (
    <Box display="flex" justifyContent="space-around">
      <BaseButton>
        <Icon>account</Icon>
      </BaseButton>
      <BaseButton color="primary">
        <Icon>account</Icon>
      </BaseButton>
      <BaseButton color="secondary">
        <Icon>account</Icon>
      </BaseButton>
      <BaseButton disabled>
        <Icon>account</Icon>
      </BaseButton>
    </Box>
  );
};

export const icon = () => (
  <Box display="flex" justifyContent="space-around">
    <Button icon>
      <Icon>account</Icon>
    </Button>
    <Button icon color="primary">
      <Icon>account</Icon>
    </Button>
    <Button icon color="secondary">
      <Icon>account</Icon>
    </Button>
    <Button icon disabled>
      <Icon>account</Icon>
    </Button>
  </Box>
);

export const WithIcon = () => (
  <Box display="flex" justifyContent="space-around">
    <Button>
      <Icon left>account</Icon>
      Normal
    </Button>
    <Button color="primary" outlined>
      <Icon left>account</Icon>
      Primary
    </Button>
    <Button color="secondary" rounded>
      Secondary
      <Icon right>account</Icon>
    </Button>
    <Button disabled text>
      Disabled
      <Icon right>account</Icon>
    </Button>
  </Box>
);

export const Outlined = () => {
  const BaseButton = (args: ButtonProps) => <Button outlined {...args} />;

  return (
    <Box display="flex" justifyContent="space-around">
      <BaseButton>Normal</BaseButton>
      <BaseButton color="primary">Primary</BaseButton>
      <BaseButton color="secondary">Secondary</BaseButton>
      <BaseButton disabled>Disabled</BaseButton>
    </Box>
  );
};

export const Rounded = () => {
  const BaseButton = (args: ButtonProps) => <Button rounded {...args} />;

  return (
    <Box display="flex" justifyContent="space-around">
      <BaseButton>Normal</BaseButton>
      <BaseButton color="primary">Primary</BaseButton>
      <BaseButton color="secondary">Secondary</BaseButton>
      <BaseButton disabled>Disabled</BaseButton>
    </Box>
  );
};

export const Text = () => {
  const BaseButton = (args: ButtonProps) => <Button text {...args} />;

  return (
    <Box display="flex" justifyContent="space-around">
      <BaseButton>Normal</BaseButton>
      <BaseButton color="primary">Primary</BaseButton>
      <BaseButton color="secondary">Secondary</BaseButton>
      <BaseButton disabled>Disabled</BaseButton>
    </Box>
  );
};

export const Tile = () => {
  const BaseButton = (args: ButtonProps) => <Button tile {...args} />;

  return (
    <Box display="flex" justifyContent="space-around">
      <BaseButton>Normal</BaseButton>
      <BaseButton color="primary">Primary</BaseButton>
      <BaseButton color="secondary">Secondary</BaseButton>
      <BaseButton disabled>Disabled</BaseButton>
    </Box>
  );
};
