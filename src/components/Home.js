import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries/countries';
import Header from './Header';
import europe from '../assets/maps/europe.svg';
import covid from '../assets/icons/virus.svg';
import '../css/Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

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
          <p>
            {countries.totalConfirmed}
            {' '}
            cases
          </p>
        </div>
      </div>
      <div className="lists-title">
        <h6>STATS BY COUNTRY</h6>
      </div>
      <ul className="countries-list">
        {countries.countries.map(({ country, cases }) => (
          <Link className="link-lists" key={country} to={`/countries/${country}`}>
            <div className="list-item">
              <div className="item-1">
                <BsArrowRightCircle />
              </div>
              <img src={covid} alt="covid-icon" />
              <div className="cases">
                <h4>{country.toUpperCase()}</h4>
                <div>{cases}</div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
