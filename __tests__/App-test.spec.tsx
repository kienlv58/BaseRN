/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import store from 'App/store';
import DetailScreen from '../App/Containers/DetailScreen';
import { mockBaseScreenProps } from './__mocks__/base-screen.mock';
// Note: test renderer must be required after react-native.

describe('Home Screen', () => {
  it('renders correctly', async () => {
    expect(
      renderer
        .create(
          <Provider store={store}>
            <DetailScreen {...mockBaseScreenProps} />
          </Provider>,
        )
        .toJSON(),
    ).toMatchSnapshot();

    expect(1).toEqual(1);
  });
});
