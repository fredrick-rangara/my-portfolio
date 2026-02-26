import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiExternalLink, HiEye } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.textMuted};
  margin-bottom: 2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Header = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(0, 212, 255, 0.1);
  color: ${props => props.theme.colors.primary};
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Description = styled.div`
  color: ${props => props.theme.colors.textMuted};
  line-height: 1.8;
  font-size: 1.1rem;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Button = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &.primary {
    background: ${props => props.theme.colors.primary};
    color: #000;
  }
  
  &.secondary {
    background: transparent;
    border: 2px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const Stats = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid ${props => props.theme.colors.border};
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
  
  span {
    color: ${props => props.theme.colors.textMuted};
  }
  
  strong {
    color: ${props => props.theme.colors.text};
  }
`;

// Helper function to find project by ID
const getProjectById = (id) => projects.find(p => p.id === parseInt(id));

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <Container>
        <Title>Project Not Found</Title>
        <BackLink to="/">
          <HiArrowLeft /> Back to Projects
        </BackLink>
      </Container>
    );
  }

  return (
    <Container>
      <BackLink to="/#projects">
        <HiArrowLeft /> Back to Projects
      </BackLink>
      
      <Header>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {project.title}
        </Title>
        
        <Tags>
          {project.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Header>
      
      <Image
        src={project.image}
        alt={project.title}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      />
      
      <Content>
        <Description>
          <p>{project.longDescription}</p>
        </Description>
        
        <Sidebar>
          <Button 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <HiExternalLink /> Live Demo
          </Button>
          
          <Button 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGithub /> View Code
          </Button>
          
          <Stats>
            <StatItem>
              <span>Views</span>
              <strong>{project.stats.views}</strong>
            </StatItem>
            <StatItem>
              <span>Likes</span>
              <strong>{project.stats.likes}</strong>
            </StatItem>
          </Stats>
        </Sidebar>
      </Content>
    </Container>
  );
};

export default ProjectDetailPage;