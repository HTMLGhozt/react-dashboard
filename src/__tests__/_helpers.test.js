import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ErrorBoundry from '../_helpers/Error';

const TestComponent = () => {
  return this.methodDoesntExist.value;
};

describe('Error', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    console.error.mockImplementation(() => {});
  });
  it('renders that there was a problem', () => {
    const { container } = render(
      <ErrorBoundry>
        <TestComponent />
      </ErrorBoundry>,
    );

    expect(container).toHaveTextContent('Something went wrong.');
  });
});
