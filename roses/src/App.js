import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className="container">
        <h1 className='title'>Wine and Roses</h1>
        <div className="info">
          <h2 className='contact-title'>BOOK A PRIVATE CLASS</h2>
          <div className='contacts'>
            <a href='https://m.me/flowersandclasses?fbclid=IwAR3IgNUGCt8RWVpBAjfbKPDpaM_xgi4r1uMzCJa0_EtgQ5gnPNLlJtieh-E'>Send a Message</a>
            <div className='item'>
              <label>Phone</label>
              <p>(773) 209-4805</p>
            </div>
            <div className='item'>
              <label>Email</label>
              <p>cmfairygardens@yahoo.com</p>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
}

export default App;