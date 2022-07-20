import React from 'react';
import './App.css';
import Bottombar from './components/Bottombar/Bottombar';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import FindYN from './components/Bottombar/pages/FindYourNetwork/FindYN';
import Profile from './components/Bottombar/pages/Profile/Profile';
import Settings from './components/Bottombar/pages/Settings/Settings';
import Messages from './components/Bottombar/pages/Messages/Messages';
import { useMoralis } from "react-moralis";
import { ConnectButton, Icon } from "web3uikit";
import SelectedList from './components/Bottombar/pages/SelectedList/SelectedList';

function App() {
  const { isAuthenticated, Moralis } = useMoralis();

  return (
    <>
      {isAuthenticated ? (
        <div className='page'>
          <div className='bottomBar'>
            <Bottombar />
            <div
              className='logout'
              onClick={() => {
                Moralis.User.logOut().then(() => {
                  window.location.reload();
                });

              }}>Logout
            </div>
            
          </div>
          <div className='mainWindow'>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/SelectedList" element={<SelectedList />} />
              <Route path="/team" element={<FindYN />} />
              <Route path="/messages" element={<Messages />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div>
          <Icon fill="#fffff" size={40} svg="twitter" />
          <ConnectButton />
        </div>
      )

      }


    </>
  );
};

export default App;
