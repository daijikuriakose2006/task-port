import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product management, and payment integration.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://task-manager-demo.com',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing projects and skills with smooth animations.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://portfolio-demo.com',
  },
];

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          My Projects
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }} align="center">
          Here are some of the projects I've worked on. Each project represents a unique challenge
          and an opportunity to learn and grow as a developer.
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={project.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <Typography
                        key={tech}
                        variant="caption"
                        sx={{
                          mr: 1,
                          px: 1,
                          py: 0.5,
                          bgcolor: 'primary.main',
                          color: 'white',
                          borderRadius: 1,
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<FaGithub />}
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      Code
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<FaExternalLinkAlt />}
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      Demo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 