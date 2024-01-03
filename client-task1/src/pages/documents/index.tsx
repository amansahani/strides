// pages/Documents.tsx
import React, { useState } from "react";
import { Typography } from "@mui/material";
import FileUploadButton from "../../components/InputFileUpload";

const Documents: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const acceptedFileTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "application/pdf",
      ];
      const selectedFiles = Array.from(files).filter((file) =>
        acceptedFileTypes.includes(file.type)
      );

      setUploadedFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    }
  };

  return (
    <>
      <Typography
        variant="h5"
        className="text-2xl font-bold pt-8 text-gray-700"
      >
        Documents
      </Typography>
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-x-14 lg:gap-y-4 mb-4 px-4 sm:px-10">
          <FileUploadButton
            label="Upload 11th Marksheet"
            accept=".jpg, .jpeg, .png, .pdf"
            onFileUpload={handleFileUpload}
          />

          <FileUploadButton
            label="Upload 12th Marksheet"
            accept=".jpg, .jpeg, .png, .pdf"
            onFileUpload={handleFileUpload}
          />

          <FileUploadButton
            label="Upload Applicant ID Card"
            accept=".jpg, .jpeg, .png, .pdf"
            onFileUpload={handleFileUpload}
          />

          <FileUploadButton
            label="Upload Applicant's Photo"
            accept=".jpg, .jpeg, .png, .pdf"
            onFileUpload={handleFileUpload}
          />
        </div>

        {/* Display the uploaded files */}
        {uploadedFiles.length > 0 && (
          <div>
            <Typography variant="subtitle1" className="text-gray-700">
              Uploaded Files:
            </Typography>
            <ul>
              {uploadedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </>
  );
};

export default Documents;
