import React, { Component } from 'react';
import Header from '@components/Header';
import Intro from '@components/Intro';
import Main from '@components/Main';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import './App.css';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="app center">
        <Header />
        <Intro />
        <Main />
        <Footer />
        <Contact />
      </div>
    );
  }
}

export default App;
