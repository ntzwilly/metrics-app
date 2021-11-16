import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries/countries';
import Header from './Header';
import europe from '../assets/maps/europe.svg';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state);

  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries);
    }
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="top-section">
        <img className="europe-img" src={europe} alt="europe-map" />
        <div className="europe-txt">
          <h3>EUROPE</h3>
          <p>6598 views</p>
        </div>
      </div>
      <div className="lists-title">
        <h6>STATS BY COUNTRY</h6>
      </div>
    </div>
  );
};

export default Home;
