import React from "react";
import Sheet from "./Sheet";
import Box from "./system/Box";

export default {
  title: "Surface/Sheet",
  component: Sheet,
};

export const sheet = () => <Sheet height={100} width="auto" />;

export const outlined = () => <Sheet height={100} width="auto" outlined />;

export const rounded = () => <Sheet height={100} width="auto" rounded />;

export const elevation = () => (
  <Box display="flex" justifyContent="space-between">
    <Sheet height={100} width={100} elevation={0} />
    <Sheet height={100} width={100} elevation={1} />
    <Sheet height={100} width={100} elevation={2} />
    <Sheet height={100} width={100} elevation={3} />
    <Sheet height={100} width={100} elevation={4} />
    <Sheet height={100} width={100} elevation={8} />
  </Box>
);
