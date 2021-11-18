import reducer, { loadCountry } from '../redux/countries/countries';

test('should return the initial state', () => {
  const initialState = {
    totalConfirmed: 0,
    countries: [],
    selected: null,
  };

  const newState = reducer(undefined, {});

  expect(newState).toEqual(initialState);
});

test('should handle adding selected country', () => {
  const prevState = {
    totalConfirmed: 0,
    countries: [],
    selected: null,
  };
  const data = {
    All: {
      country: 'Testing',
    },
  };

  const newState = reducer(prevState, loadCountry(data));

  expect(newState).toEqual({
    totalConfirmed: 0,
    countries: [],
    selected: data,
  });
});
