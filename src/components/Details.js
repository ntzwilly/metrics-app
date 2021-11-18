import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCountry } from '../redux/countries/countries';
import Header from './Header';
import virus from '../assets/icons/virus.svg';
import '../css/Details.css';

const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  const { country } = useSelector((state) => ({
    country: state.countries.selected,
  }));

  useEffect(() => {
    dispatch(fetchCountry(name));
  }, []);

  if (!country) {
    return null;
  }

  const { All } = country;
  const list = Object.entries(country).slice(1);

  return (
    <div>
      <Header />
      <div className="top-section">
        <img className="virus-img" src={virus} alt="europe-map" />
        <div className="virus-txt">
          <h3>{All.country.toUpperCase()}</h3>
          <div>
            {All.confirmed.toLocaleString('en-US')}
            {' '}
            cases
          </div>
        </div>
      </div>
      <div className="title-h6">
        <h6>CITY/TOWN BREAKDOWN - TODAY</h6>
      </div>
      <ul className="regions-list">
        {list.map(([name, { confirmed }]) => (
          <li className="region" key={name}>
            <h4>{name}</h4>
            <div className="statistics">
              <p className="numbers">
                { confirmed.toLocaleString('en-US') }
                {' '}
                cases
              </p>
              <BsArrowRightCircle />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Details;
