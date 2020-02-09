'use strict';
/**
 * @format
 */
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
require('react-native');
const react_1 = __importDefault(require('react'));
const react_test_renderer_1 = __importDefault(require('react-test-renderer'));
require('react-native-gesture-handler');
const App_1 = __importDefault(require('../App/Containers/App'));
// Note: test renderer must be required after react-native.
it('renders correctly', () => {
  react_test_renderer_1.default.create(<App_1.default />);
  // expect(1).toContainEqual(2);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3Z0cF9raWVubHYvRG9jdW1lbnRzL1JlYWN0IE5hdGl2ZS9CYXNlUk4vX190ZXN0c19fL0FwcC10ZXN0LnRzeCIsIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7Ozs7O0FBRUgsd0JBQXNCO0FBQ3RCLGtEQUEwQjtBQUMxQiw4RUFBMkM7QUFDM0Msd0NBQXNDO0FBRXRDLGdFQUF3QztBQUN4QywyREFBMkQ7QUFFM0QsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtJQUMzQiw2QkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQUcsQ0FBQyxBQUFELEVBQUcsQ0FBQyxDQUFDO0lBQ3pCLCtCQUErQjtBQUNqQyxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvdnRwX2tpZW5sdi9Eb2N1bWVudHMvUmVhY3QgTmF0aXZlL0Jhc2VSTi9fX3Rlc3RzX18vQXBwLXRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgJ3JlYWN0LW5hdGl2ZS1nZXN0dXJlLWhhbmRsZXInO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcC9Db250YWluZXJzL0FwcCc7XG4vLyBOb3RlOiB0ZXN0IHJlbmRlcmVyIG11c3QgYmUgcmVxdWlyZWQgYWZ0ZXIgcmVhY3QtbmF0aXZlLlxuXG5pdCgncmVuZGVycyBjb3JyZWN0bHknLCAoKSA9PiB7XG4gIHJlbmRlcmVyLmNyZWF0ZSg8QXBwIC8+KTtcbiAgLy8gZXhwZWN0KDEpLnRvQ29udGFpbkVxdWFsKDIpO1xufSk7XG4iXSwidmVyc2lvbiI6M30=
