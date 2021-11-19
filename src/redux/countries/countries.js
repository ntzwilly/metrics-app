const URL = 'https://covid-api.mmediagroup.fr/v1/cases';
const LOAD_COUNTRIES = 'countries/loaded';
const FETCHING_COUNTRIES_FAILED = 'countries/fetchingFailed';
const LOAD_COUNTRY = 'country/loaded';

const initialState = {
  countries: [],
  totalConfirmed: 0,
  selected: null,
};

export const loadCountry = (payload) => ({
  type: LOAD_COUNTRY,
  payload,
});

export const loadCountries = (countries) => ({
  type: LOAD_COUNTRIES,
  payload: countries,
});

const fetchingDataFailed = (err) => ({
  type: FETCHING_COUNTRIES_FAILED,
  payload: err,
});

export const fetchCountry = (name) => async (dispatch) => {
  const response = await fetch(`${URL}?country=${name}`);
  const data = await response.json();
  dispatch(loadCountry(data));
};

export const fetchCountries = async (dispatch) => {
  try {
    const response = await fetch(`${URL}?continent=Europe`);
    const data = await response.json();
    const countries = Object.entries(data).map(([country, v]) => ({
      country,
      ...v,
    }));

    countries.sort((a, b) => b.All.confirmed - a.All.confirmed);

    dispatch(
      loadCountries(
        countries.map((country) => ({
          country: country.country,
          cases: country.All.confirmed,
          regions: Object.entries(country),
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
        totalConfirmed: action.payload
          .map((item) => item.cases)
          .reduce((prev, curr) => prev + curr, 0),
      };
    case LOAD_COUNTRY:
      return { ...state, selected: action.payload };
    case FETCHING_COUNTRIES_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
