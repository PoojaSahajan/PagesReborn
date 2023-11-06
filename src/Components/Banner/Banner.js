import React from 'react';

import './Banner.css';
import Logo from '../../booksBanner.jpg';
import Arrow from '../../assets/Arrow'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span>Fiction</span>
            <span>Non Fiction</span>
            <span>Reference Books</span>
            <span>Notes</span>
            <span>Lab Manuals</span>
            <span>Competitive Books</span>
            <span>For Rent</span>
          </div>
        </div>
        <div className="banner">
          <img
            src={Logo}
            alt="bookpic"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
