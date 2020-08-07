import React from "react";
import Box from "./Box";

export default {
  component: Box,
  title: "Layout/Box",
};

export const box = () => (
  <Box color="text.primary" bg="bg.primary" width={250} p={2}>
    Box
  </Box>
);

export const width = () => (
  <div>
    <Box color="text.primary" bg="bg.primary" width={150} p={2} m={2}>
      Width 150px
    </Box>
    <Box color="text.primary" bg="bg.primary" width={300} p={2} m={2}>
      Width 300px
    </Box>
    <Box color="text.primary" bg="bg.primary" width="75%" p={2} m={2}>
      Width 75%
    </Box>
    <Box color="text.primary" bg="bg.primary" p={2} m={2}>
      Width auto
    </Box>
  </div>
);

export const height = () => (
  <Box height={300} display="flex" justifyContent="space-between">
    <Box color="text.primary" bg="bg.primary" height={100} p={2}>
      Height 100px
    </Box>
    <Box color="text.primary" bg="bg.primary" height={200} p={2}>
      Height 200px
    </Box>
    <Box color="text.primary" bg="bg.primary" height="75%" p={2}>
      Height 75%
    </Box>
    <Box color="text.primary" bg="bg.primary" p={2}>
      Height auto
    </Box>
  </Box>
);

export const border = () => (
  <div>
    <Box display="flex" justifyContent="space-between">
      <Box
        color="text.primary"
        bg="bg.primary"
        height={100}
        width={100}
        borderColor="white"
        borderTopWidth={2}
      />
      <Box
        color="text.primary"
        bg="bg.primary"
        height={100}
        width={100}
        borderColor="white"
        borderRightWidth={2}
      />
      <Box
        color="text.primary"
        bg="bg.primary"
        height={100}
        width={100}
        borderColor="white"
        borderBottomWidth={2}
      />
      <Box
        color="text.primary"
        bg="bg.primary"
        height={100}
        width={100}
        borderColor="white"
        borderLeftWidth={2}
      />
    </Box>
    <Box bg="transparent" display="flex" justifyContent="space-between" my={20}>
      <Box
        color="text.primary"
        bg="bg.primary"
        height={100}
        width={100}
        borderColor="red"
        borderWidth={2}
      />
      <Box
        color="text.primary"
        bg="bg.primary"
        height={100}
        width={100}
        borderColor="green"
        borderWidth={2}
      />
      <Box
        color="text.primary"
        bg="bg.primary"
        height={100}
        width={100}
        borderColor="blue"
        borderWidth={2}
      />
    </Box>
    <Box bg="transparent" display="flex" justifyContent="space-between" my={20}>
      <Box
        color="text.primary"
        bg="bg.primary"
        height={100}
        width={100}
        borderRadius="50%"
      />
      <Box
        color="text.primary"
        bg="bg.primary"
        height={100}
        width={100}
        borderRadius="5px"
      />
      <Box
        color="text.primary"
        bg="bg.primary"
        height={100}
        width={100}
        borderRadius="20px"
      />
    </Box>
    <Box bg="transparent" display="flex" justifyContent="space-between" my={20}>
      <Box
        height={100}
        width={100}
        borderWidth={2}
        borderStyle="dotted"
        borderColor="white"
      />
      <Box
        height={100}
        width={100}
        borderWidth={2}
        borderStyle="double"
        borderColor="white"
      />
      <Box
        height={100}
        width={100}
        borderWidth={2}
        borderStyle="dashed"
        borderColor="white"
      />
    </Box>
  </div>
);

export const display = () => (
  <div>
    <Box>
      <Box color="text.primary" bg="bg.primary" display="inline" m={2} p={2}>
        inline
      </Box>
      <Box color="text.primary" bg="bg.primary" display="inline" m={2} p={2}>
        inline
      </Box>
    </Box>
    <Box mt={3}>
      <Box color="text.primary" bg="bg.primary" display="block" m={2} p={2}>
        block
      </Box>
      <Box color="text.primary" bg="bg.primary" display="block" m={2} p={2}>
        block
      </Box>
    </Box>
    <Box mt={3} whiteSpace="nowrap">
      <Box
        color="text.primary"
        bg="bg.primary"
        overflow="hidden"
        width={150}
        m={2}
        p={2}
      >
        Overflow Hidden. Overflow Hidden. Overflow Hidden. Overflow Hidden.
      </Box>
      <Box
        color="text.primary"
        bg="bg.primary"
        overflow="auto"
        width={150}
        m={2}
        p={2}
      >
        Overflow Auto. Overflow Auto. Overflow Auto. Overflow Auto.
      </Box>
    </Box>
    <Box mt={3} whiteSpace="nowrap">
      <Box
        color="text.primary"
        bg="bg.primary"
        textOverflow="clip"
        overflow="hidden"
        width={150}
        m={2}
        p={2}
      >
        Text Overflow Clip. Text Overflow Clip.
      </Box>
      <Box
        color="text.primary"
        bg="bg.primary"
        textOverflow="ellipsis"
        overflow="hidden"
        width={150}
        m={2}
        p={2}
      >
        Text Overflow Ellipsis. Text Overflow Ellipsis.
      </Box>
    </Box>
  </div>
);

export const shadow = () => (
  <Box display="flex" justifyContent="space-between">
    <Box
      color="text.primary"
      bg="bg.primary"
      height={100}
      width={100}
      p={2}
      elevation={0}
    >
      0
    </Box>
    <Box
      color="text.primary"
      bg="bg.primary"
      height={100}
      width={100}
      p={2}
      elevation={1}
    >
      1
    </Box>
    <Box
      color="text.primary"
      bg="bg.primary"
      height={100}
      width={100}
      p={2}
      elevation={2}
    >
      2
    </Box>
    <Box
      color="text.primary"
      bg="bg.primary"
      height={100}
      width={100}
      p={2}
      elevation={3}
    >
      3
    </Box>
    <Box
      color="text.primary"
      bg="bg.primary"
      height={100}
      width={100}
      p={2}
      elevation={4}
    >
      4
    </Box>
    <Box
      color="text.primary"
      bg="bg.primary"
      height={100}
      width={100}
      p={2}
      elevation={8}
    >
      8
    </Box>
  </Box>
);

export const palette = () => (
  <div>
    <Box color="red" bg="bg.primary" m={2} p={2}>
      Red
    </Box>
    <Box color="green" bg="bg.primary" m={2} p={2}>
      Green
    </Box>
    <Box color="blue" bg="bg.primary" m={2} p={2}>
      Blue
    </Box>
    <Box color="text.primary" bg="red" m={2} p={2}>
      Red
    </Box>
    <Box color="text.primary" bg="green" m={2} p={2}>
      Green
    </Box>
    <Box color="text.primary" bg="blue" m={2} p={2}>
      Blue
    </Box>
  </div>
);
