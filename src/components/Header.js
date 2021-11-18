import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { HiMicrophone } from 'react-icons/hi';
import { MdSettings } from 'react-icons/md';
import '../css/Header.css';

const Header = () => (
  <div className="header">
    <div>
      <Link className="link" to="/">
        <FiChevronLeft />
      </Link>
    </div>
    <div>
      <p className="middle-text">most cases</p>
    </div>
    <div className="right-icons">
      <div>
        <HiMicrophone />
      </div>
      <div>
        <MdSettings />
      </div>
    </div>
  </div>
);

export default Header;
