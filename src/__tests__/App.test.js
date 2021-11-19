import { render, screen } from '../utils/test-utils';
import App from '../App';

jest.mock('../__mocks__/api.js');

test('home page should fetch and render countries', async () => {
  render(<App />);

  expect(await screen.findByText(/EUROPE/)).toBeInTheDocument();
});
