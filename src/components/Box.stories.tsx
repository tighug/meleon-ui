import React from "react";
import { Box, BoxProps } from "./Box";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Layout/Box",
  component: Box,
  argTypes: {
    color: { control: "color" },
    bgcolor: { control: "color" },
    borderColor: { control: "color" },
  },
} as Meta;

const Template = (args: BoxProps) => <Box {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: "Box",
  bgcolor: "black",
  width: 150,
  pa: 2,
};

export const Width = () => {
  const BaseBox = (args: BoxProps) => (
    <Box bgcolor="black" pa={2} ma={2} {...args} />
  );

  return (
    <div>
      <BaseBox>auto</BaseBox>
      <BaseBox width={150}>150px</BaseBox>
      <BaseBox width={300}>300px</BaseBox>
      <BaseBox width="75%">75%</BaseBox>
    </div>
  );
};

export const Height = () => {
  const BaseBox = (args: BoxProps) => (
    <Box bgcolor="black" width={100} pa={2} ma={2} {...args} />
  );

  return (
    <Box display="flex" justifyContent="space-between" height={300}>
      <BaseBox>auto</BaseBox>
      <BaseBox height={100}>100px</BaseBox>
      <BaseBox height={200}>200px</BaseBox>
      <BaseBox height="75%">75%</BaseBox>
    </Box>
  );
};

export const Border = () => {
  const BaseBox = (args: BoxProps) => (
    <Box bgcolor="black" width={100} height={100} ma={2} {...args} />
  );

  return (
    <div>
      <Box display="flex" justifyContent="space-between" my={2}>
        <BaseBox borderTop={2} />
        <BaseBox borderRight={2} />
        <BaseBox borderBottom={2} />
        <BaseBox borderLeft={2} />
      </Box>
      <Box display="flex" justifyContent="space-between" my={2}>
        <BaseBox borderColor="red" border={2} />
        <BaseBox borderColor="green" border={2} />
        <BaseBox borderColor="blue" border={2} />
      </Box>
      <Box display="flex" justifyContent="space-between" my={2}>
        <BaseBox borderRadius="50%" />
        <BaseBox borderRadius="5px" />
        <BaseBox borderRadius="20px" />
      </Box>
      <Box display="flex" justifyContent="space-between" my={2}>
        <BaseBox border={2} borderStyle="dotted" />
        <BaseBox border={2} borderStyle="double" />
        <BaseBox border={2} borderStyle="dashed" />
      </Box>
    </div>
  );
};

export const Display = () => {
  const BaseBox = (args: BoxProps) => (
    <Box bgcolor="black" pa={2} ma={2} {...args} />
  );

  return (
    <div>
      <Box>
        <BaseBox display="inline">inline</BaseBox>
        <BaseBox display="inline">inline</BaseBox>
      </Box>
      <Box my={3}>
        <BaseBox display="block">block</BaseBox>
        <BaseBox display="block">block</BaseBox>
      </Box>
      <Box my={3} whiteSpace="nowrap">
        <BaseBox width={200} overflow="hidden">
          Overflow Hidden. Overflow Hidden. Overflow Hidden. Overflow Hidden.
        </BaseBox>
        <BaseBox width={200} overflow="auto">
          Overflow Auto. Overflow Auto. Overflow Auto. Overflow Auto.
        </BaseBox>
      </Box>
      <Box mt={3} whiteSpace="nowrap">
        <BaseBox width={200} textOverflow="clip" overflow="hidden">
          Text Overflow Clip. Text Overflow Clip.
        </BaseBox>
        <BaseBox width={200} textOverflow="ellipsis" overflow="hidden">
          Text Overflow Ellipsis. Text Overflow Ellipsis.
        </BaseBox>
      </Box>
    </div>
  );
};

export const Shadow = () => {
  const BaseBox = (args: BoxProps) => (
    <Box bgcolor="black" width={100} height={100} pa={2} ma={2} {...args} />
  );

  return (
    <Box display="flex" justifyContent="space-between">
      <BaseBox elevation={0}>0</BaseBox>
      <BaseBox elevation={1}>1</BaseBox>
      <BaseBox elevation={2}>2</BaseBox>
      <BaseBox elevation={3}>3</BaseBox>
      <BaseBox elevation={4}>4</BaseBox>
      <BaseBox elevation={8}>8</BaseBox>
    </Box>
  );
};

export const palette = () => {
  const BaseBox = (args: BoxProps) => <Box pa={2} ma={2} {...args} />;

  return (
    <div>
      <BaseBox color="red" bgcolor="black">
        Red
      </BaseBox>
      <BaseBox color="green" bgcolor="black">
        Green
      </BaseBox>
      <BaseBox color="blue" bgcolor="black">
        Blue
      </BaseBox>
      <BaseBox color="white" bgcolor="red">
        Red
      </BaseBox>
      <BaseBox color="white" bgcolor="green">
        Green
      </BaseBox>
      <BaseBox color="white" bgcolor="blue">
        Blue
      </BaseBox>
    </div>
  );
};
