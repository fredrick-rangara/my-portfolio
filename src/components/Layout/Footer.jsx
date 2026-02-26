import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiHeart, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.backgroundLight};
  padding: 3rem 2rem 2rem;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.textMuted};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.textDark};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink 
            href="https://github.com/fredrick-rangara" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink 
            href="mailto:fredrick.rangara@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiMail />
          </SocialLink>
          <SocialLink 
            href="https://linkedin.com/in/fredrick-rangara" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </SocialLink>
        </SocialLinks>
        
        <Copyright>
          Made with <HiHeart /> by Fredrick Rangara © {currentYear}
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;