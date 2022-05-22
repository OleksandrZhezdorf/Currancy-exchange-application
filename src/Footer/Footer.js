import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  constructor (props) {
    super (props);
  }

  
  render() {
    return (
        <footer className = 'footer'>
          <div className = 'footer-bottom'>
            <div className = 'footer-item'>
              <div>
                <ul>
                  <li><a style={{textDecoration: 'none'}} href='/sitemap' tooltip = 'Карта сайта'>Карта сайта</a></li>
                  <li><a style={{textDecoration: 'none'}} href='/sitemaps.xml' target='_blank' tooltip = 'Google Sitemap'>Google Sitemap</a></li>
                </ul>
              </div>
            </div>
            <div className = 'footer-item'>
              <div>
                <ul>
                  <li><a style={{textDecoration: 'none'}} href='/contact/' tooltip = 'Контакты'>Контакты</a></li>
                  <li><a style={{textDecoration: 'none'}} href='/d'>Гарантии</a></li>
                  <li><a style={{textDecoration: 'none'}} href='/s'>О сервисе</a></li>
                  <li><a style={{textDecoration: 'none'}} href='/o'>Условия возврата</a></li>
                  <li><a style={{textDecoration: 'none'}} href='/p'>Соглашение о использовании сервиса</a></li>
                </ul>
              </div>
            </div>
          </div>
      </footer>
    )}
}
export default Footer;
