import React from 'react';
import './Header.css';


class Header extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      'date': '',
      'currencyRate': {}
    };
    this.currency = ['USD', 'EUR', 'UAH'];
    this.getRate();
  }

  getRate = () => {
    fetch('https://www.cbr-xml-daily.ru/latest.js')
    .then(data => {
      return data.json()
    }).then (data => {
      console.log(data);
      this.setState({date: data.date});
      let result = {};
      for (let i = 0; i < this.currency.length; i++) {
        result[this.currency[i]] = data.rates[this.currency[i]];
      }
      console.log(result);
      this.setState({currencyRate: result});
    });
  }
  render() {
    return (
      <header className='rate'>
      <div className='top-bar animate-dropdown'></div>
      <div className = 'main-header'>
        <div className = 'container'>
          <h1 className = 'site-title'>Актуальный курс валют на {this.state.date}</h1>
          <div className = 'flex-container'>
            {Object.keys(this.state.currencyRate).map((keyName, i) => (
            <div className = 'block flex-item' key = {keyName}>
              <div className = 'currency-name'>{keyName}</div>
              <div className = 'currency-in'>{(1/(this.state.currencyRate[keyName]/this.state.currencyRate['UAH'])).toFixed(2)}*</div>
              <p>Курс {keyName} по отношению к гривне</p>
            </div>))}
          </div>
        </div>
      </div>
    </header>
    )}
}
export default Header;
