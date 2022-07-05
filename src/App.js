import React from 'react' // , { useState }
import './App.css';
import Candlestick from './apex/Candlestick'
import Bar from './apex/Bar'
import Scatter from './apex/Scatter'
import Treemap from './apex/Treemap'
// import Bar from './chart/Bar'
import Nav from './Nav'


function App() {

  return <div className="w-full mt-2">
    <Nav />
    <div className="flex flex-row">
      <div className="w-48 border-r min-h-screen dark:bg-gray-700">
        <button className="w-full p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">Link 1</button>
        <button className="w-full p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">Link 2</button>
        <button className="w-full p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">Link 3</button>
        <button className="w-full p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">Link 4</button>
        <button className="w-full p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">Link 5</button>
        <button className="w-full p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">Link 6</button>
      </div>
      <div className="flex-1 bg-gray-50 dark:bg-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div><Bar /></div>
          <div><Candlestick /></div>
          <div><Scatter /></div>

          {/* <div><Bar/></div> */}
        </div>
        <div className="p-2"><Treemap /></div>
      </div>
    </div>

  </div>
}

export default App;
