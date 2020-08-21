import React from "react";
import Button, { ButtonProps } from "./Button";
import Box from "./Box";
import Icon from "./Icon";

export default {
  title: "Input/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args: ButtonProps) => <Button {...args}>Normal</Button>;

export const Basic = Template.bind({});

export const Normal = () => (
  <Box display="flex" justifyContent="space-between">
    <Button>Normal</Button>
    <Button color="red">Red</Button>
    <Button color="green">Green</Button>
    <Button color="blue">Blue</Button>
    <Button disabled>Disabled</Button>
  </Box>
);

export const Block = () => (
  <div>
    <Button block>Block</Button>
  </div>
);

export const Depressed = () => {
  const BaseButton = (args: ButtonProps) => <Button depressed {...args} />;

  return (
    <Box display="flex" justifyContent="space-around">
      <BaseButton>Normal</BaseButton>
      <BaseButton color="red">Red</BaseButton>
      <BaseButton color="green">Green</BaseButton>
      <BaseButton color="blue">Blue</BaseButton>
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
      <BaseButton color="red">
        <Icon>account</Icon>
      </BaseButton>
      <BaseButton color="green">
        <Icon>account</Icon>
      </BaseButton>
      <BaseButton color="blue">
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
    <Button icon color="red">
      <Icon>account</Icon>
    </Button>
    <Button icon color="green">
      <Icon>account</Icon>
    </Button>
    <Button icon color="blue">
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
    <Button color="red" outlined>
      <Icon left>account</Icon>
      Red
    </Button>
    <Button color="green" rounded>
      Green
      <Icon right>account</Icon>
    </Button>
    <Button color="blue" rounded>
      Blue
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
      <BaseButton color="red">Red</BaseButton>
      <BaseButton color="green">Green</BaseButton>
      <BaseButton color="blue">Blue</BaseButton>
      <BaseButton disabled>Disabled</BaseButton>
    </Box>
  );
};

export const Rounded = () => {
  const BaseButton = (args: ButtonProps) => <Button rounded {...args} />;

  return (
    <Box display="flex" justifyContent="space-around">
      <BaseButton>Normal</BaseButton>
      <BaseButton color="red">Red</BaseButton>
      <BaseButton color="blue">Blue</BaseButton>
      <BaseButton color="green">Green</BaseButton>
      <BaseButton disabled>Disabled</BaseButton>
    </Box>
  );
};

export const Text = () => {
  const BaseButton = (args: ButtonProps) => <Button text {...args} />;

  return (
    <Box display="flex" justifyContent="space-around">
      <BaseButton>Normal</BaseButton>
      <BaseButton color="red">Red</BaseButton>
      <BaseButton color="green">Green</BaseButton>
      <BaseButton color="blue">Blue</BaseButton>
      <BaseButton disabled>Disabled</BaseButton>
    </Box>
  );
};

export const Tile = () => {
  const BaseButton = (args: ButtonProps) => <Button tile {...args} />;

  return (
    <Box display="flex" justifyContent="space-around">
      <BaseButton>Normal</BaseButton>
      <BaseButton color="red">Red</BaseButton>
      <BaseButton color="green">Green</BaseButton>
      <BaseButton color="blue">Blue</BaseButton>
      <BaseButton disabled>Disabled</BaseButton>
    </Box>
  );
};
