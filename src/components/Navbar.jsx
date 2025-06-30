import React from "react";
import Button from "./Button";

const Navbar = ({ title = "Task App" }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="space-x-2">
          <Button variant="secondary" size="sm">
            Login
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;