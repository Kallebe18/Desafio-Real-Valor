import React from 'react';

import './globals.css';

import Graphic from './components/Graphic';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {
  return (
    <>
      <Banner/>
      <main>
        <Form/>
        <Graphic/>
      </main>
    </>
  );
}

export default App;
