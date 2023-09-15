import React from 'react';
import './app.css'
import { Profile, Navbar, About, Projects, Contact } from './components';

function App() {
  return (
    <>
      <header className="section">
        <Navbar />
        <Profile />
      </header>
      <main>
        <About />
        <Projects />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
