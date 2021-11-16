import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries/countries';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state);

  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries);
    }
  }, []);

  return (
    <>
      <h1>Home...</h1>
    </>
  );
};

export default Home;
