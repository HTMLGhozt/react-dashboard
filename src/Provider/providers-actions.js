import {
  PROVIDER_IS_LOADING,
  PROVIDER_DATA,
  PROVIDER_ERROR,
} from './providers-context';

const mainUrl = 'https://api.db.nomics.world/v22';

const getConfigOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

// eslint-disable-next-line import/prefer-default-export
export const getProviders = async (dispatch, offset = 0) => {
  const url = `${mainUrl}/providers?limit=100&offset=${offset * 100}`;
  dispatch({
    type: PROVIDER_IS_LOADING,
  });
  try {
    const data = await fetch(url, getConfigOptions).then(resp => {
      return resp.json();
    });
    return dispatch({
      type: PROVIDER_DATA,
      providers: data.providers.docs,
    });
  } catch ({ message }) {
    console.error(message);
  }
  return dispatch({
    type: PROVIDER_ERROR,
  });
};
