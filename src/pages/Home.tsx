import { Box, Typography, Button, Container, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Hi, I'm <span style={{ color: '#90caf9' }}>Daiji Kuriakose</span>
          </Typography>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Full Stack Developer
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            I create beautiful and functional web applications with modern technologies.
            Let's build something amazing together!
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              sx={{ px: 4 }}
              onClick={() => window.location.href = '#contact'}
            >
              Get in Touch
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ px: 4 }}
              onClick={() => window.location.href = '#projects'}
            >
              View My Work
            </Button>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
            <IconButton
              color="primary"
              size="large"
              onClick={() => window.open('https://github.com/yourusername', '_blank')}
            >
              <FaGithub />
            </IconButton>
            <IconButton
              color="primary"
              size="large"
              onClick={() => window.open('https://linkedin.com/in/yourusername', '_blank')}
            >
              <FaLinkedin />
            </IconButton>
            <IconButton
              color="primary"
              size="large"
              onClick={() => window.open('https://twitter.com/yourusername', '_blank')}
            >
              <FaTwitter />
            </IconButton>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home; 