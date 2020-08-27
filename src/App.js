import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './component/Head/Head';
import Courses from './component/Courses/Courses';

function App() {
  return (
    <div className="App">
      <Head></Head>
      <Courses></Courses>
    </div>
  );
}

export default App;
