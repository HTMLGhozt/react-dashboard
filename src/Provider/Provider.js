import React, { useEffect } from 'react';
import { useProviderState } from './providers-context';
import { getProviders } from './providers-actions';

function Provider() {
  const [{ providers }, providersDispatch] = useProviderState();
  useEffect(() => {
    getProviders(providersDispatch);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return providers.map(provider => (
    <div key={provider.json_data_commit_ref}>
      <h2>
        <a href={provider.website}>
          {provider.name} ({provider.code})
        </a>
      </h2>
      {provider.terms_of_use ? (
        <span>
          <a href={provider.terms_of_use}>Terms of use</a>
        </span>
      ) : null}
    </div>
  ));
}

export default Provider;
