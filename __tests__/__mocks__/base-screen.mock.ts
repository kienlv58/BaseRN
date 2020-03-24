import { BaseScreenProps } from 'App/@types/screen-type';
import { ScreenMap } from 'App/Config/NavigationConfig';

export const mockBaseScreenProps: BaseScreenProps<ScreenMap.Home> = {
  navigation: {
    navigate: jest.fn(),
    dispatch: jest.fn(),
    pop: jest.fn(),
    goBack: jest.fn(),
    push: jest.fn(),
    addListener: jest.fn(),
    popToTop: jest.fn(),
    canGoBack: jest.fn(),
    replace: jest.fn(),
    reset: jest.fn(),
    removeListener: jest.fn(),
    setParams: jest.fn(),
    setOptions: jest.fn(),
    dangerouslyGetParent: jest.fn(),
    isFocused: jest.fn(),
    dangerouslyGetState: jest.fn(),
  },
  route: {
    key: '',
    name: ScreenMap.Home,
    params: {},
  },
};
