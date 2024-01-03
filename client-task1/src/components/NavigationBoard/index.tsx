import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="p-2  w-full" style={{ backgroundColor: "#55BC7A" }}>
      <nav className="container mx-auto">
        <ul className="flex justify-center space-x-4 sm:space-x-8 md:space-x-32 lg:space-x-52">
          <li>
            <Link to="/" className="text-gray-900">
              Personal Details
            </Link>
          </li>
          <li>
            <Link to="/academic" className="text-gray-900">
              Academic Details
            </Link>
          </li>
          <li>
            <Link to="/documents" className="text-gray-900">
              Documents
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
