import React from 'react';

import './globals.css';

import Graphic from './components/Graphic';
import Banner from './components/Banner';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Banner/>
      <main>
        <Form/>
        <Graphic/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
