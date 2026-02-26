import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import GlobalStyles from './styles/global';
import { theme } from './styles/variables';