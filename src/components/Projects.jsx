import { motion } from "framer-motion";

const Projects = () => {
  const myProjects = [
    { 
      title: "Localis", 
      desc: "Community event platform for local engagement.",
      img: "/assets/localis.png" 
    },
    { 
      title: "E-vet Clinic app", 
      desc: "Easy appointment booking for pet care.",
      img: "/assets/Evet.png" 
    },
    { 
      title: "Wetell", 
      desc: "UI/UX refresh for campus services.",
      img: "/assets/wetell.png" 
    },
    { 
      title: " Music Player", 
      desc: "Music Player",
      img: "/assets/Music.png" 
    },
   
  ];

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span style={{ color: '#646cff', fontWeight: 'bold' }}>PORTFOLIO</span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>My Works</h2>
        
        <div className="project-grid">
          {myProjects.map((p, i) => (
            <motion.div 
              key={i} 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <img src={p.img} alt={p.title} />
              <h3>{p.title}</h3>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;