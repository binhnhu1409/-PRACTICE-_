import React from 'react';

import Header from './components/Header';
import Homepage from './components/Homepage';
import Services from './components/Services';
import TechStack from './components/Techstack';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Homepage />
        <Services />
        <TechStack />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>

  );
}

export default App;
