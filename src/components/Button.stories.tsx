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

export const depressed = () => (
  <Box display="flex" justifyContent="space-around">
    <Button depressed>Normal</Button>
    <Button depressed color="red">
      Red
    </Button>
    <Button depressed color="green">
      Green
    </Button>
    <Button depressed color="blue">
      Blue
    </Button>
    <Button depressed disabled>
      Disabled
    </Button>
  </Box>
);

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

export const outlined = () => (
  <Box display="flex" justifyContent="space-around">
    <Button outlined>Normal</Button>
    <Button outlined color="red">
      Red
    </Button>
    <Button outlined color="green">
      Green
    </Button>
    <Button outlined color="blue">
      Blue
    </Button>
    <Button outlined disabled>
      Disabled
    </Button>
  </Box>
);

export const rounded = () => (
  <Box display="flex" justifyContent="space-around">
    <Button rounded>Normal</Button>
    <Button rounded color="red">
      Red
    </Button>
    <Button rounded color="blue">
      Blue
    </Button>
    <Button rounded color="green">
      Green
    </Button>
    <Button rounded disabled>
      Disabled
    </Button>
  </Box>
);

export const text = () => (
  <Box display="flex" justifyContent="space-around">
    <Button text>Normal</Button>
    <Button text color="red">
      Red
    </Button>
    <Button text color="green">
      Green
    </Button>
    <Button text color="blue">
      Blue
    </Button>
    <Button text disabled>
      Disabled
    </Button>
  </Box>
);

export const tile = () => (
  <Box display="flex" justifyContent="space-around">
    <Button tile>Normal</Button>
    <Button tile color="red">
      Red
    </Button>
    <Button tile color="green">
      Green
    </Button>
    <Button tile color="blue">
      Blue
    </Button>
    <Button tile disabled>
      Disabled
    </Button>
  </Box>
);
