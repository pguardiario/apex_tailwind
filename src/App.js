import React from 'react' // , { useState }
import './App.css';
import Candlestick from './apex/Candlestick'
// import Bar from './chart/Bar'
import Nav from './Nav'


function App() {

  return <div className="container m-auto mt-10">
    <Nav/>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      <div><Candlestick/></div>
      <div><Candlestick/></div>
      <div><Candlestick/></div>
      <div><Candlestick/></div>
      <div><Candlestick/></div>
      <div><Candlestick/></div>
      {/* <div><Bar/></div> */}
    </div>
  </div>
}

export default App;
