import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from 'web3uikit';


ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="UeDf4aXe9hEhU9zt143J9wMaqDvvic4T6hjRedOY" serverUrl="https://xy6we1sxuzrb.usemoralis.com:2053/server">
      <NotificationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
