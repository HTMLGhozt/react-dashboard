import React from 'react';
// Jest doesn't run through Webpack so It doesn't resolve modules
import ReactDOM from '@hot-loader/react-dom';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<App />, document.createElement('div'));
  });
});
