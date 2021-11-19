export const getCountries = async () => Promise.resolve({
  Testing1: {
    All: {
      confirmed: 17,
      country: 'Country Test',
    },
  },
  Testing2: {
    All: {
      confirmed: 3,
      country: 'Country test',
    },
  },
});

export const getCountry = async () => Promise.resolve({
  All: {
    confirmed: 81,
    country: 'All',
  },
  Testing3: {
    confirmed: 4,
  },
});
