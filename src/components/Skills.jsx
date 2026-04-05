const Skills = () => {
  const skills = ["React", "Git", "Figma", "MongoDB", "Networking"];
  
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-pill">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;