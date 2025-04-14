import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';

const skills = [
  { name: 'Frontend Development', icon: <FaReact size={40} />, description: 'React, TypeScript, Material-UI' },
  { name: 'Backend Development', icon: <FaNodeJs size={40} />, description: 'Node.js, Express, REST APIs' },
  { name: 'Database', icon: <FaDatabase size={40} />, description: 'MongoDB, PostgreSQL, Redis' },
  { name: 'Other Skills', icon: <FaCode size={40} />, description: 'Git, Docker, AWS, CI/CD' },
];

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          About Me
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}>
          I'm a passionate Full Stack Developer with a strong focus on creating efficient and scalable web applications.
          With expertise in both frontend and backend technologies, I strive to deliver high-quality solutions that
          meet user needs while maintaining clean and maintainable code.
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid> item xs={12} sm={6} md={3} key={skill.name}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>{skill.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {skill.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Experience
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            With several years of experience in web development, I've worked on various projects ranging from
            small business websites to large-scale enterprise applications. I'm constantly learning new
            technologies and best practices to stay at the forefront of web development.
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About; 