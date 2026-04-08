import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <section id="contact" className="section">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="contact-container"
      >
        <span style={{ color: '#646cff', fontWeight: 'bold', letterSpacing: '2px' }}>GET IN TOUCH</span>
        <h2>Contact Me</h2>
        <p>Currently open to networking projects or junior roles.</p>
        
        <div className="contact-details">
          <div className="contact-item">
            <strong>Email:</strong>
            <p>kenzosomes@gmail.com</p> 
          </div>
          <div className="contact-item">
            <strong>Location:</strong>
            <p>Iloilo City, Philippines (WIT)</p>
          </div>
        </div>

        <motion.a 
          href="mailto:kenzosomes@gmail.com"
          className="pro-btn"
          style={{ display: 'inline-block', textDecoration: 'none', marginTop: '2rem' }}
          whileHover={{ scale: 1.05 }}
        >
          Send a Message
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contacts;