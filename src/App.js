import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout/layout';
import Footer from './components/footer/footer';
import Body from './components/body/body';
import Header from './components/headers/Header';


class App extends Component {
  render() {
    return (

      <Layout>

        <Header></Header>
        <Body></Body>
        <Footer></Footer>

      </Layout>

    )
  }
}

export default App
