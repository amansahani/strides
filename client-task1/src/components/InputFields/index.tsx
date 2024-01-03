// components/InputField.tsx

import React from "react";
import TextField from "@mui/material/TextField";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
      <TextField
        label={label}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        variant="outlined"
        fullWidth
        margin="dense"
      />
    </div>
  );
};

export default InputField;
