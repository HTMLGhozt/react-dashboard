import { hot } from 'react-hot-loader/root';
import React from 'react';
import Provider from './Provider/Provider';
import ProvidersProvider from './Provider/providers-context';

function App() {
  return (
    <ProvidersProvider>
      <Provider />
    </ProvidersProvider>
  );
}

export default hot(App);
