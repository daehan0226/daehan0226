import React from 'react';

import './App.css';
import {Header} from "./components"
import {Home} from "./components/home"
import {About} from "./components/about"
import {Project} from "./components/project"
import {Blog} from "./components/blog"


function App() {

  return (
      <div className="App">
        <Header />
        <main>
          <Home />
          <About />
          <Project />
          <Blog />
        </main>
      </div>
  );
}

export default App;
