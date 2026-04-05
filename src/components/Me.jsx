import { motion } from "framer-motion";

const Me = () => {
  return (
    <section id="me" className="section">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* --- YOUR IMAGE ADDED HERE --- */}
        <motion.img 
          src="/assets/kyle.png" 
          alt="kyle"
          className="profile-img"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        />

        <span style={{ color: '#646cff', fontWeight: 'bold', letterSpacing: '1px', display: 'block', marginTop: '1rem' }}>
          INTRODUCTION
        </span>
        
        <h1>Hi, I'm Kyle</h1>
        
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
          I am a student at the <strong>Western Institute of Technology</strong>. 
          While I love building web interfaces, I 
          <span style={{ color: '#646cff' }}> currently studying in Networking</span>.
        </p>
      </motion.div>
    </section>
  );
};

export default Me;