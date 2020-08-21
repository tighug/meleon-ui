import React from "react";
import Box, { BoxProps } from "./Box";

export default {
  title: "Layout/Box",
  component: Box,
  argTypes: {
    color: { control: "color" },
    bgcolor: { control: "color" },
  },
};

const Template = (args: BoxProps) => <Box {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: "Box",
  color: "white",
  bgcolor: "black",
  width: 150,
  pa: 2,
  ma: 2,
};

export const Width = () => (
  <div>
    <Box {...Basic.args} width="auto">
      Width auto
    </Box>
    <Box {...Basic.args} width={150}>
      Width 150px
    </Box>
    <Box {...Basic.args} width={300}>
      Width 300px
    </Box>
    <Box {...Basic.args} width="75%">
      Width 75%
    </Box>
  </div>
);

export const height = () => (
  <Box display="flex" justifyContent="space-between" height={300}>
    <Box {...Basic.args} height="auto">
      Height auto
    </Box>
    <Box {...Basic.args} height={100}>
      Height 100px
    </Box>
    <Box {...Basic.args} height={200}>
      Height 200px
    </Box>
    <Box {...Basic.args} height="75%">
      Height 75%
    </Box>
  </Box>
);

export const border = () => (
  <div>
    <Box display="flex" justifyContent="space-between" my={2}>
      <Box
        {...Basic.args}
        height={100}
        width={100}
        borderTop={2}
        borderColor="white"
      />
      <Box
        {...Basic.args}
        height={100}
        width={100}
        borderRight={2}
        borderColor="white"
      />
      <Box
        {...Basic.args}
        height={100}
        width={100}
        borderBottom={2}
        borderColor="white"
      />
      <Box
        {...Basic.args}
        height={100}
        width={100}
        borderLeft={2}
        borderColor="white"
      />
    </Box>
    <Box display="flex" justifyContent="space-between" my={2}>
      <Box
        {...Basic.args}
        height={100}
        width={100}
        borderColor="red"
        border={2}
      />
      <Box
        {...Basic.args}
        height={100}
        width={100}
        borderColor="green"
        border={2}
      />
      <Box
        {...Basic.args}
        height={100}
        width={100}
        borderColor="blue"
        border={2}
      />
    </Box>
    <Box display="flex" justifyContent="space-between" my={2}>
      <Box {...Basic.args} height={100} width={100} borderRadius="50%" />
      <Box {...Basic.args} height={100} width={100} borderRadius="5px" />
      <Box {...Basic.args} height={100} width={100} borderRadius="20px" />
    </Box>
    <Box display="flex" justifyContent="space-between" my={2}>
      <Box
        {...Basic.args}
        height={100}
        width={100}
        border={2}
        borderStyle="dotted"
        borderColor="white"
      />
      <Box
        {...Basic.args}
        height={100}
        width={100}
        border={2}
        borderStyle="double"
        borderColor="white"
      />
      <Box
        {...Basic.args}
        height={100}
        width={100}
        border={2}
        borderStyle="dashed"
        borderColor="white"
      />
    </Box>
  </div>
);

export const display = () => (
  <div>
    <Box>
      <Box {...Basic.args} width="auto" display="inline">
        inline
      </Box>
      <Box {...Basic.args} width="auto" display="inline">
        inline
      </Box>
    </Box>
    <Box my={3}>
      <Box {...Basic.args} width="auto" display="block">
        block
      </Box>
      <Box {...Basic.args} width="auto" display="block">
        block
      </Box>
    </Box>
    <Box my={3} whiteSpace="nowrap">
      <Box {...Basic.args} overflow="hidden">
        Overflow Hidden. Overflow Hidden. Overflow Hidden. Overflow Hidden.
      </Box>
      <Box {...Basic.args} overflow="auto">
        Overflow Auto. Overflow Auto. Overflow Auto. Overflow Auto.
      </Box>
    </Box>
    <Box mt={3} whiteSpace="nowrap">
      <Box {...Basic.args} textOverflow="clip" overflow="hidden">
        Text Overflow Clip. Text Overflow Clip.
      </Box>
      <Box {...Basic.args} textOverflow="ellipsis" overflow="hidden">
        Text Overflow Ellipsis. Text Overflow Ellipsis.
      </Box>
    </Box>
  </div>
);

export const shadow = () => (
  <Box display="flex" justifyContent="space-between">
    <Box {...Basic.args} width={100} height={100} elevation={0}>
      0
    </Box>
    <Box {...Basic.args} width={100} height={100} elevation={1}>
      1
    </Box>
    <Box {...Basic.args} width={100} height={100} elevation={2}>
      2
    </Box>
    <Box {...Basic.args} width={100} height={100} elevation={3}>
      3
    </Box>
    <Box {...Basic.args} width={100} height={100} elevation={4}>
      4
    </Box>
    <Box {...Basic.args} width={100} height={100} elevation={8}>
      8
    </Box>
  </Box>
);

export const palette = () => (
  <div>
    <Box color="red" bgcolor="black" ma={2} pa={2}>
      Red
    </Box>
    <Box color="green" bgcolor="black" ma={2} pa={2}>
      Green
    </Box>
    <Box color="blue" bgcolor="black" ma={2} pa={2}>
      Blue
    </Box>
    <Box color="white" bgcolor="red" ma={2} pa={2}>
      Red
    </Box>
    <Box color="white" bgcolor="green" ma={2} pa={2}>
      Green
    </Box>
    <Box color="white" bgcolor="blue" ma={2} pa={2}>
      Blue
    </Box>
  </div>
);
