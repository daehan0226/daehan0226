import React from 'react';

import { ThemeProvider } from '@mui/material/styles'

import './App.css';
import {Header, Footer} from "./components"
import {Home} from "./components/home"
import {About} from "./components/about"
import {Project} from "./components/project"
import {Blog} from "./components/blog"

import theme from "./ui/theme"

function App() {

  return (
    
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <main>
          <Home />
          <About />
          <Project />
          <Blog />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
