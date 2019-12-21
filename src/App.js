import React, { Component } from 'react'
import "./App.scss";
import NavBar from './components/NavBar/NavBar'
import TourList from './components/TourList'


export default class App extends Component {
  render() {
    return (
      <main>
       <NavBar/>
       <TourList/>
      </main>
    )
  }
}
