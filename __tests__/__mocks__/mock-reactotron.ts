const reactotron = {
  configure: jest.fn(),
  useReactNative: jest.fn(),
  use: jest.fn(),
  connect: jest.fn(),
};

jest.mock('tron', () => reactotron);
export default reactotron;
