import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
import './Navbar.css'; // Create this CSS file
import { FaBeer } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <button className="nav-toggle" onClick={handleSidebarToggle}>
          {/* <FaBars /> */}
          <FaBeer />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
