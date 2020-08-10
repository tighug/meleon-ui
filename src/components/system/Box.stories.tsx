import React from "react";
import Box from "./Box";

export default {
  component: Box,
  title: "Layout/Box",
};

export const box = () => (
  <Box color="white" bgcolor="black" width={200} pa={2}>
    Box
  </Box>
);

const widthDefault = {
  color: "white",
  bgcolor: "black",
  pa: 2,
  my: 2,
};

export const width = () => (
  <div>
    <Box {...widthDefault}>Width auto</Box>
    <Box width={150} {...widthDefault}>
      Width 150px
    </Box>
    <Box width={300} {...widthDefault}>
      Width 300px
    </Box>
    <Box width="75%" {...widthDefault}>
      Width 75%
    </Box>
  </div>
);

const heightDefault = {
  color: "white",
  bgcolor: "black",
  pa: 2,
};

export const height = () => (
  <Box display="flex" justifyContent="space-between" height={300}>
    <Box {...heightDefault}>Height auto</Box>
    <Box height={100} {...heightDefault}>
      Height 100px
    </Box>
    <Box height={200} {...heightDefault}>
      Height 200px
    </Box>
    <Box height="75%" {...heightDefault}>
      Height 75%
    </Box>
  </Box>
);

const borderDefault = {
  color: "white",
  bgcolor: "black",
  height: 100,
  width: 100,
};

export const border = () => (
  <div>
    <Box display="flex" justifyContent="space-between" my={2}>
      <Box borderTop={2} borderColor="white" {...borderDefault} />
      <Box borderRight={2} borderColor="white" {...borderDefault} />
      <Box borderBottom={2} borderColor="white" {...borderDefault} />
      <Box borderLeft={2} borderColor="white" {...borderDefault} />
    </Box>
    <Box display="flex" justifyContent="space-between" my={2}>
      <Box borderColor="red" border={2} {...borderDefault} />
      <Box borderColor="green" border={2} {...borderDefault} />
      <Box borderColor="blue" border={2} {...borderDefault} />
    </Box>
    <Box display="flex" justifyContent="space-between" my={2}>
      <Box borderRadius="50%" {...borderDefault} />
      <Box borderRadius="5px" {...borderDefault} />
      <Box borderRadius="20px" {...borderDefault} />
    </Box>
    <Box display="flex" justifyContent="space-between" my={2}>
      <Box
        border={2}
        borderStyle="dotted"
        borderColor="white"
        {...borderDefault}
      />
      <Box
        border={2}
        borderStyle="double"
        borderColor="white"
        {...borderDefault}
      />
      <Box
        border={2}
        borderStyle="dashed"
        borderColor="white"
        {...borderDefault}
      />
    </Box>
  </div>
);

const displayDefault = {
  color: "white",
  bgcolor: "black",
  ma: 2,
  pa: 2,
};

export const display = () => (
  <div>
    <Box>
      <Box display="inline" {...displayDefault}>
        inline
      </Box>
      <Box display="inline" {...displayDefault}>
        inline
      </Box>
    </Box>
    <Box my={3}>
      <Box display="block" {...displayDefault}>
        block
      </Box>
      <Box display="block" {...displayDefault}>
        block
      </Box>
    </Box>
    <Box my={3} whiteSpace="nowrap">
      <Box overflow="hidden" width={150} {...displayDefault}>
        Overflow Hidden. Overflow Hidden. Overflow Hidden. Overflow Hidden.
      </Box>
      <Box overflow="auto" width={150} {...displayDefault}>
        Overflow Auto. Overflow Auto. Overflow Auto. Overflow Auto.
      </Box>
    </Box>
    <Box mt={3} whiteSpace="nowrap">
      <Box
        textOverflow="clip"
        overflow="hidden"
        width={150}
        {...displayDefault}
      >
        Text Overflow Clip. Text Overflow Clip.
      </Box>
      <Box
        textOverflow="ellipsis"
        overflow="hidden"
        width={150}
        {...displayDefault}
      >
        Text Overflow Ellipsis. Text Overflow Ellipsis.
      </Box>
    </Box>
  </div>
);

const shadowDefault = {
  color: "white",
  bgcolor: "black",
  height: 100,
  width: 100,
  pa: 2,
};

export const shadow = () => (
  <Box display="flex" justifyContent="space-between">
    <Box elevation={0} {...shadowDefault}>
      0
    </Box>
    <Box elevation={1} {...shadowDefault}>
      1
    </Box>
    <Box elevation={2} {...shadowDefault}>
      2
    </Box>
    <Box elevation={3} {...shadowDefault}>
      3
    </Box>
    <Box elevation={4} {...shadowDefault}>
      4
    </Box>
    <Box elevation={8} {...shadowDefault}>
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
