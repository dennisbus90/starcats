import React from "react";
import { Button } from "../../utils/styles/general";

// TODO - Complete component

interface DropdownProps {
  options: { label: string; value: string }[];
  label?: string;
  onSelect?: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({}) => {
  return <Button>Sort By ▼</Button>;
};
