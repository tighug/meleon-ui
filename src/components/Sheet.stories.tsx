import React from "react";
import Sheet from "./Sheet";
import Box from "./Box";

export default {
  title: "Surface/Sheet",
  component: Sheet,
};

export const sheet = () => <Sheet height={100} color="bg.secondary" />;

export const outlined = () => (
  <Sheet height={100} color="bg.secondary" outlined />
);

export const rounded = () => (
  <Sheet height={100} color="bg.secondary" rounded />
);

export const elevation = () => (
  <Box display="flex" justifyContent="space-between">
    <Sheet height={100} width={100} color="bg.secondary" elevation={0} />
    <Sheet height={100} width={100} color="bg.secondary" elevation={1} />
    <Sheet height={100} width={100} color="bg.secondary" elevation={2} />
    <Sheet height={100} width={100} color="bg.secondary" elevation={3} />
    <Sheet height={100} width={100} color="bg.secondary" elevation={4} />
  </Box>
);