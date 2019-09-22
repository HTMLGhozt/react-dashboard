import React from 'react';
import PropTypes from 'prop-types';

export const PROVIDER_IS_LOADING = 'PROVIDER_IS_LOADING';
export const PROVIDER_DATA = 'PROVIDER_DATA';
export const PROVIDER_ERROR = 'PROVIDER_ERROR';

const ProviderContext = React.createContext();

const providerReducer = (state, { type, providers }) => {
  switch (type) {
    case PROVIDER_IS_LOADING: {
      return {
        ...state,
        isProviderLoading: true,
      };
    }
    case PROVIDER_DATA: {
      return {
        ...state,
        isProviderLoading: false,
        providers,
      };
    }
    case PROVIDER_ERROR: {
      return {
        ...state,
        isProviderLoading: false,
        isProviderError: true,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

export const useProviderState = () => React.useContext(ProviderContext);

const initialProviderProps = {
  isProviderLoading: false,
  isProviderError: true,
  providers: [],
};

function ProvidersProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    providerReducer,
    initialProviderProps,
  );
  return (
    <ProviderContext.Provider value={[state, dispatch]}>
      {children}
    </ProviderContext.Provider>
  );
}

export default ProvidersProvider;

ProviderContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
