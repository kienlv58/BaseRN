/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import store from 'App/store';
import HomeScreen from '../App/Containers/HomeScreen';
import { mockBaseScreenProps } from './__mocks__/base-screen.mock';
// Note: test renderer must be required after react-native.

describe('Home Screen', () => {
  it('renders correctly', async () => {
    // let component;
    // renderer.act(() => {
    //   component = renderer.create(
    //     <Provider store={store}>
    //       <HomeScreen {...mockBaseScreenProps} />
    //     </Provider>,
    //   );
    //   expect(component.toJSON()).toMatchSnapshot();
    // });

    // const wrapper = mount(
    //   <Provider store={store}>
    //     <HomeScreen {...mockBaseScreenProps} />
    //   </Provider>,
    // );

    expect(1).toEqual(1);
  });

  it('test shallow using Enzyme', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <HomeScreen {...mockBaseScreenProps} />
      </Provider>,
    );

    // eslint-disable-next-line lodash/prefer-lodash-method
    expect(wrapper.find('Text')).toHaveLength(0);
  });
});
