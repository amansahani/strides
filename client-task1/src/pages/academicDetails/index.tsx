// AcademicDetails.tsx
import React, { ChangeEvent, useState } from "react";
import InputField from "../../components/InputFields";
import SelectField from "../../components/SelectField";

type AcademicDetailsState = {
  tenthSchool: string;
  examBoard10th: string;
  passingYear10th: string;
  percentage10th: string;
  rollNo10th: string;
  twelfthSchool: string;
  examBoard12th: string;
  passingYear12th: string;
  percentage12th: string;
  rollNo12th: string;
  stream12th: string;
};

const AcademicDetails: React.FC = () => {
  const [academicFormData, setAcademicFormData] =
    useState<AcademicDetailsState>({
      tenthSchool: "",
      examBoard10th: "",
      passingYear10th: "",
      percentage10th: "",
      rollNo10th: "",
      twelfthSchool: "",
      examBoard12th: "",
      passingYear12th: "",
      percentage12th: "",
      rollNo12th: "",
      stream12th: "",
    });

  const handleAcademicChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    fieldName: keyof AcademicDetailsState
  ) => {
    const { value } = e.target;

    setAcademicFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleAcademicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Academic Form submitted:", academicFormData);
  };

  return (
    <>
      <h2 className="text-2xl font-bold pt-8 text-gray-700">
        Academic Details
      </h2>

      {/* 10th Standard Details */}
      <h3 className="text-lg font-bold pt-4 text-gray-700">10th Standard</h3>
      <form onSubmit={handleAcademicSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4 px-4 sm:px-10">
          <InputField
            label="School"
            name="tenthSchool"
            value={academicFormData.tenthSchool}
            onChange={(e) => handleAcademicChange(e, "tenthSchool")}
          />
          <InputField
            label="Exam Board"
            name="examBoard10th"
            value={academicFormData.examBoard10th}
            onChange={(e) => handleAcademicChange(e, "examBoard10th")}
          />
          <InputField
            label="Passing Year"
            name="passingYear10th"
            value={academicFormData.passingYear10th}
            onChange={(e) => handleAcademicChange(e, "passingYear10th")}
          />
          <InputField
            label="Percentage"
            name="percentage10th"
            value={academicFormData.percentage10th}
            onChange={(e) => handleAcademicChange(e, "percentage10th")}
          />
          <InputField
            label="Roll No"
            name="rollNo10th"
            value={academicFormData.rollNo10th}
            onChange={(e) => handleAcademicChange(e, "rollNo10th")}
          />
        </div>
      </form>

      {/* 12th Standard Details */}
      <h3 className="text-lg font-bold pt-4 text-gray-700">12th Standard</h3>
      <form onSubmit={handleAcademicSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4 px-4 sm:px-10">
          <InputField
            label="School"
            name="twelfthSchool"
            value={academicFormData.twelfthSchool}
            onChange={(e) => handleAcademicChange(e, "twelfthSchool")}
          />
          <InputField
            label="Exam Board"
            name="examBoard12th"
            value={academicFormData.examBoard12th}
            onChange={(e) => handleAcademicChange(e, "examBoard12th")}
          />
          <InputField
            label="Passing Year"
            name="passingYear12th"
            value={academicFormData.passingYear12th}
            onChange={(e) => handleAcademicChange(e, "passingYear12th")}
          />
          <InputField
            label="Percentage"
            name="percentage12th"
            value={academicFormData.percentage12th}
            onChange={(e) => handleAcademicChange(e, "percentage12th")}
          />
          <InputField
            label="Roll No"
            name="rollNo12th"
            value={academicFormData.rollNo12th}
            onChange={(e) => handleAcademicChange(e, "rollNo12th")}
          />
          <SelectField
            label="Stream"
            name="stream12th"
            value={academicFormData.stream12th}
            options={["Commerce", "Science", "Arts"]}
            onChange={(e) => handleAcademicChange(e as any, "stream12th")}
          />
        </div>
        <div className="mt-6 box-content my-5">
          <button
            type="submit"
            style={{ backgroundColor: "#55BC7A" }}
            className="px-4 py-2 text-white rounded-md hover:bg-blue-600"
          >
            Submit Academic Details
          </button>
        </div>
      </form>
    </>
  );
};

export default AcademicDetails;
