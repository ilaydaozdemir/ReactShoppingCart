import React, { Component } from 'react';

const NavBar = props => {
  return (
    <nav class='navbar navbar-light bg-light'>
      <a class='navbar-brand' href='#'>
        Navbar
        <span className='badge badge-pill badge-secondary m-1'>
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
