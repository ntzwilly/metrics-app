import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { HiMicrophone } from 'react-icons/hi';
import { MdSettings } from 'react-icons/md';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries/countries';
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
      <div className="header">
        <div className="header-left">
          <FiChevronLeft className="right-arrow" />
          <p>2021</p>
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
      <div className="home-cover">
        <img className="home-image" src={europe} alt="europe-map" />
        <div className="home-div">
          <h3>EUROPE</h3>
          <p className="home-paragraph">
            {countries.totalConfirmed.toLocaleString('en-US')}
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
          <Link
            className="link-lists"
            key={country}
            to={`/countries/${country}`}
          >
            <div className="list-item">
              <div className="item-1">
                <BsArrowRightCircle />
              </div>
              <img src={covid} alt="covid-icon" />
              <div className="cases">
                <h4>{country.toUpperCase()}</h4>
                <div>{cases.toLocaleString('en-US')}</div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
