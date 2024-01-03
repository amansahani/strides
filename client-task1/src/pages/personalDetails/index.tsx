// pages/PersonalDetails.tsx

import React, { useState } from "react";
import InputField from "../../components/InputFields";
import { Header } from "../../components/NavigationBoard";

type PersonalDetailsState = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  fatherName: string;
  motherName: string;
  parentsIncome: string;
  address: {
    flatPlotNo: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
  };
};

const PersonalDetails: React.FC = () => {
  const [formData, setFormData] = useState<PersonalDetailsState>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    fatherName: "",
    motherName: "",
    parentsIncome: "",
    address: {
      flatPlotNo: "",
      area: "",
      city: "",
      state: "",
      pincode: "",
    },
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    nestedKey?: string
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      if (
        nestedKey &&
        Object.prototype.hasOwnProperty.call(prevData, nestedKey)
      ) {
        return {
          ...prevData,
          [nestedKey]: {
            ...(prevData[nestedKey as keyof typeof prevData] as Record<
              string,
              string
            >),
            [name]: value,
          },
        };
      } else if (!nestedKey) {
        return {
          ...prevData,
          [name]: value,
        };
      } else {
        console.error(`Invalid nestedKey: ${nestedKey}`);
        return prevData;
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <h2 className="text-2xl font-bold pt-8 text-gray-700">
        Personal Details
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-x-14 lg:gap-y-4 mb-4 px-4 sm:px-10">
          <InputField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleChange(e)}
          />
          <InputField
            label="Middle Name"
            name="middleName"
            value={formData.middleName}
            onChange={(e) => handleChange(e)}
          />
          <InputField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleChange(e)}
          />
          <InputField
            label="Email ID"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
          <InputField
            label="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={(e) => handleChange(e)}
          />
          <InputField
            label="Father Name"
            name="fatherName"
            value={formData.fatherName}
            onChange={(e) => handleChange(e)}
          />
          <InputField
            label="Mother Name"
            name="motherName"
            value={formData.motherName}
            onChange={(e) => handleChange(e)}
          />
          <InputField
            label="Parents Income"
            name="parentsIncome"
            value={formData.parentsIncome}
            onChange={(e) => handleChange(e)}
          />

          <InputField
            label="Flat/Plot No"
            name="flatPlotNo"
            value={formData.address.flatPlotNo}
            onChange={(e) => handleChange(e, "address")}
          />
          <InputField
            label="Area"
            name="area"
            value={formData.address.area}
            onChange={(e) => handleChange(e, "address")}
          />
          <InputField
            label="City"
            name="city"
            value={formData.address.city}
            onChange={(e) => handleChange(e, "address")}
          />
          <InputField
            label="State"
            name="state"
            value={formData.address.state}
            onChange={(e) => handleChange(e, "address")}
          />
          <InputField
            label="Pincode"
            name="pincode"
            value={formData.address.pincode}
            onChange={(e) => handleChange(e, "address")}
          />
        </div>
        <div className="mt-6 box-content my-5">
          <button
            type="submit"
            style={{ backgroundColor: "#55BC7A" }}
            className="px-4 py-2 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalDetails;
