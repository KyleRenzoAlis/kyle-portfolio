import React from 'react';

const Dashboard = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="dashboard">
     
      <ul className="nav-links">
        <li onClick={() => scrollToSection("me")}>About</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
      </ul>
    </nav>
  );
};

export default Dashboard;