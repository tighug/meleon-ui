import React from "react";
import Button, { ButtonProps } from "./Button";
import Box from "./Box";

export default {
  title: "Input/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args: ButtonProps) => <Button {...args}>Normal</Button>;

export const Basic = Template.bind({});

export const normal = () => (
  <Box display="flex" justifyContent="space-between">
    <Button>Normal</Button>
    <Button color="red">Red</Button>
    <Button color="green">Green</Button>
    <Button color="blue">Blue</Button>
    <Button disabled>Disabled</Button>
  </Box>
);

export const block = () => (
  <div>
    <Button block>Block</Button>
  </div>
);

export const depressed = () => {
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

// export const fab = () => (
//   <Box display="flex" justifyContent="space-around">
//     <Button fab>
//       <Icon icon={FaUser} />
//     </Button>
//     <Button fab color="primary">
//       <Icon icon={FaUser} />
//     </Button>
//     <Button fab color="secondary">
//       <Icon icon={FaUser} />
//     </Button>
//     <Button fab disabled>
//       <Icon icon={FaUser} />
//     </Button>
//   </Box>
// );

// export const icon = () => (
//   <Box display="flex" justifyContent="space-around">
//     <Button icon>
//       <Icon icon={FaUser} />
//     </Button>
//     <Button icon color="primary">
//       <Icon icon={FaUser} />
//     </Button>
//     <Button icon color="secondary">
//       <Icon icon={FaUser} />
//     </Button>
//     <Button icon disabled>
//       <Icon icon={FaUser} />
//     </Button>
//   </Box>
// );

// export const withIcon = () => (
//   <Box display="flex" justifyContent="space-around">
//     <Button>
//       <Icon icon={FaUser} left />
//       Normal
//     </Button>
//     <Button color="primary" outlined>
//       <Icon icon={FaUser} left />
//       Primary
//     </Button>
//     <Button color="secondary" rounded>
//       <Icon icon={FaUser} left />
//       Secondary
//     </Button>
//     <Button disabled text>
//       <Icon icon={FaUser} left />
//       Disabled
//     </Button>
//   </Box>
// );

export const outlined = () => {
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

export const rounded = () => {
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

export const text = () => {
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

export const tile = () => {
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
