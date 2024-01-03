// components/FileUploadButton.tsx
import React from "react";
import { Button } from "@mui/material";

interface FileUploadButtonProps {
  label: string;
  accept: string;
  onFileUpload: (files: FileList | null) => void;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  label,
  accept,
  onFileUpload,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    onFileUpload(files);
  };

  return (
    <Button variant="outlined" component="label" fullWidth>
      {label}
      <input type="file" accept={accept} hidden onChange={handleFileChange} />
    </Button>
  );
};

export default FileUploadButton;
