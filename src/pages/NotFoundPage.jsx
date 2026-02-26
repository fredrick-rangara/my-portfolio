import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const ErrorCode = styled(motion.h1)`
  font-size: 8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff 0%, #ff6b6b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const Description = styled.p`
  color: ${props => props.theme.colors.textMuted};
  margin-bottom: 2rem;
  max-width: 400px;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  color: #000;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
  }
`;

const NotFoundPage = () => {
  return (
    <Container>
      <ErrorCode
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </ErrorCode>
      <Title>Page Not Found</Title>
      <Description>
        The page you're looking for doesn't exist or has been moved.
      </Description>
      <BackButton to="/">
        <HiArrowLeft /> Back to Home
      </BackButton>
    </Container>
  );
};

export default NotFoundPage;