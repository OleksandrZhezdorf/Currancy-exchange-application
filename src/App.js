import React, {useEffect, useState} from 'react';
import './App.css';

import Header from './Header/Header';
import Calc from './Calc/Calc'
import Footer from './Footer/Footer';

const BASE_URL = 'https://www.cbr-xml-daily.ru/latest.js'




class App extends React.Component {
  constructor (props) {
    super (props);

  }


  
  render() {
    return (
    <div className = 'site'>
     <Header />
    <div className = 'container'>
      <main>
      <div className='calculator'>
         <h2>Калькулятор</h2>
        <div className = 'block'>
          <p>Количество</p>
          <Calc  />
        </div>
      </div>
      </main>
    </div>
    <Footer />
    </div>
    )}
}
export default App;
