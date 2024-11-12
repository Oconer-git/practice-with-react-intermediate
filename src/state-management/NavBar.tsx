import LoginStatus from './auths/LoginStatus';
import React from 'react';
import useCounterStore from './counter/store';

const NavBar = () => {  
  const counter = useCounterStore(s => s.counter)

  console.log('navbar rerenders')
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
