
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';
import People from '../components/List';

describe('Testing our app components', () => {
  it('should display hello world', async () => {
    render(<App />);
    const DOMElement = await screen.findByTestId('display-text');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });

  it('People should display a list', async () => {
    render(<People list={[{ name: 'jacob' }]} />);
    const list = await screen.findByTestId('output');
    expect(list).toHaveTextContent('jacob');
  });
});