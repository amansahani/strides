import React from "react";
import { Routes, Route } from "react-router-dom";
import PersonalDetails from "../pages/personalDetails";
import AcademicDetails from "../pages/academicDetails";
import Documents from "../pages/documents";

export const RouteContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalDetails />} />
      <Route path="academic" element={<AcademicDetails />} />
      <Route path="documents" element={<Documents />} />
    </Routes>
  );
};
