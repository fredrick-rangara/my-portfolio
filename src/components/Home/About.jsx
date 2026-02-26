import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiCode, HiServer, HiDeviceMobile } from 'react-icons/hi';

const Section = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  
  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 20px;
    z-index: -1;
  }
`;

const Content = styled.div``;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled(motion.p)`
  color: ${props => props.theme.colors.textMuted};
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid ${props => props.theme.colors.border};
  text-align: center;
  
  svg {
    font-size: 2rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text};
  }
  
  p {
    font-size: 0.85rem;
    color: ${props => props.theme.colors.textMuted};
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Grid>
          <ImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/assets/images/profile.jpg" alt="Fredrick Rangara" />
          </ImageContainer>
          
          <Content>
            <Title
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Me
            </Title>
            
            <Text
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I'm Fredrick Rangara, a passionate software developer in the making. 
              I love building digital experiences that not only work but work well. 
              My journey in tech is driven by curiosity and the desire to create 
              meaningful solutions through code.
            </Text>
            
            <Text
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Always learning, always improving — one commit at a time. I specialize 
              in React, Node.js, and modern web technologies, with a growing interest 
              in 3D web experiences and interactive applications.
            </Text>
            
            <Skills>
              <SkillCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <HiCode />
                <h3>Frontend</h3>
                <p>React, JavaScript, HTML/CSS</p>
              </SkillCard>
              
              <SkillCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <HiServer />
                <h3>Backend</h3>
                <p>Node.js, Express, MongoDB</p>
              </SkillCard>
              
              <SkillCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <HiDeviceMobile />
                <h3>Responsive</h3>
                <p>Mobile-first, Cross-browser</p>
              </SkillCard>
            </Skills>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default About;