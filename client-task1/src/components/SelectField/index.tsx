// components/SelectField.tsx
import React from "react";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void; // Use React.ChangeEvent here
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  options,
  onChange,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        label={label}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e as React.ChangeEvent<{ value: unknown }>)}
        // Cast the event to React.ChangeEvent
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
