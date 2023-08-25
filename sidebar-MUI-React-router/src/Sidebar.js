import React from 'react';
import './Sidebar.css'; // Create this CSS file

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      {/* Add your sidebar content here */}
    </aside>
  );
};
export default Sidebar;
