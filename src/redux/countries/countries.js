/* eslint-disable no-case-declarations */
const URL = 'https://covid-api.mmediagroup.fr/v1/cases/?continent=Europe';
const LOAD_COUNTRIES = 'COUNTRIES/LOADED';
const FETCHING_COUNTRIES_FAILED = 'COUNTRIES/FETCHING_COUNTRIES_FAILED';

const initialState = {
  countries: [],
  totalConfirmed: 0,
  error: '',
};

const loadCountries = (countries) => ({
  type: LOAD_COUNTRIES,
  payload: countries,
});

const fetchingDataFailed = (err) => ({
  type: FETCHING_COUNTRIES_FAILED,
  payload: err,
});

export const fetchCountries = async (dispatch) => {
  try {
    const response = await fetch(URL);
    const missions = await response.json();
    const countries = Object.entries(missions).map(([country, v]) => ({
      country,
      ...v,
    }));

    countries.sort((a, b) => b.All.confirmed - a.All.confirmed);

    dispatch(
      loadCountries(
        countries.map((country) => ({
          country: country.country,
          cases: country.All.confirmed,
        })),
      ),
    );
  } catch (err) {
    err.description = 'An error occurred, please try again later';
    dispatch(fetchingDataFailed(err.description));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        totalConfirmed: action.payload.map((item) => item.cases)
          .reduce((prev, curr) => prev + curr, 0),
      };
    case FETCHING_COUNTRIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
