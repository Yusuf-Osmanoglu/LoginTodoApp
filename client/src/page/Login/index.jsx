import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, Link, HStack, Image } from '@chakra-ui/react';
import X from '../../assets/icons/x.svg';
import Github from '../../assets/icons/github.svg';
import Google from '../../assets/icons/google.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import { useAuth } from '../../auth/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:8082/auth/login', {
        username,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setError('');
        const { token, user } = response.data.data;
        
        // Save token and user ID to LocalStorage
        localStorage.setItem('token', token);
        localStorage.setItem('userId', user.id);

        // Call login function to store token in context or state
        login(token);

        // Navigate to /todo
        navigate('/todo');
      } else {
        setError('Kullanıcı adı veya şifre hatalı!');
      }
    } catch (error) {
      console.error(error);
      setError('Giriş yaparken bir hata oluştu!');
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password Clicked');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleSocialLogin = (platform) => {
    console.log(`Login with ${platform} Clicked`);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      w="100%"
      p={8}
      backgroundColor="gray.50"
    >
      <Box
        w="100%"
        maxW="md"
        borderWidth={1}
        borderRadius="lg"
        p={8}
        bg="white"
      >
        <Heading mb={6} textAlign="center">Login</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="Username giriniz"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            {error && <Text color="red.500">{error}</Text>}
            <HStack spacing={4} mt={4} justify="center">
              <Button onClick={() => handleSocialLogin('Google')} variant="outline" leftIcon={<Image src={Google} boxSize="20px" />}>
                Google
              </Button>
              <Button onClick={() => handleSocialLogin('X')} variant="outline" leftIcon={<Image src={X} boxSize="20px" />}>
                Twitter
              </Button>
              <Button onClick={() => handleSocialLogin('LinkedIn')} variant="outline" leftIcon={<Image src={Linkedin} boxSize="20px" />}>
                LinkedIn
              </Button>
              <Button onClick={() => handleSocialLogin('GitHub')} variant="outline" leftIcon={<Image src={Github} boxSize="20px" />}>
                GitHub
              </Button>
            </HStack>
            <Button type="submit" colorScheme="teal" width="full">Giriş Yap</Button>
            <Text mt={4}>
              <Link color="teal.500" onClick={handleForgotPassword}>Forgot Password?</Link>
            </Text>
            <Text mt={4}>
              <Link color="teal.500" onClick={handleRegister}>Register</Link>
            </Text>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
