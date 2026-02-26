import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiGithub, HiEye } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tilt from 'react-tilt';

const Card = styled(motion.div)`
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    border-color: #00d4ff;
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${Card}:hover & {
    opacity: 1;
  }
`;

const IconButton = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #00d4ff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transform: translateY(20px);
  transition: all 0.3s ease;
  
  ${Card}:hover & {
    transform: translateY(0);
  }
  
  &:hover {
    background: #fff;
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const Description = styled.p`
  color: #b0b0b0;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  background: rgba(0, 212, 255, 0.1);
  color: #00d4ff;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const Stats = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.85rem;
  color: #888;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Tilt options={{ max: 15, scale: 1.02 }}>
      <Card
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ImageContainer>
          <img 
            src={project.image} 
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
          <Overlay>
            <IconButton href={project.demo} target="_blank" rel="noopener noreferrer">
              <HiExternalLink />
            </IconButton>
            <IconButton href={project.github} target="_blank" rel="noopener noreferrer">
              <HiGithub />
            </IconButton>
            <IconButton as={Link} to={`/project/${project.id}`}>
              <HiEye />
            </IconButton>
          </Overlay>
        </ImageContainer>
        
        <Content>
          <Title>{project.title}</Title>
          <Description>{project.description}</Description>
          
          <Tags>
            {project.tags.slice(0, 3).map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
            {project.tags.length > 3 && <Tag>+{project.tags.length - 3}</Tag>}
          </Tags>
          
          <Stats>
            <span><HiEye /> {project.stats.views}</span>
            <span>❤️ {project.stats.likes}</span>
          </Stats>
        </Content>
      </Card>
    </Tilt>
  );
};

export default ProjectCard;