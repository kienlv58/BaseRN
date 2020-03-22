import * as React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
  SafeAreaView as SafeAreaViewDefault,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SafeAreaView as SafeAreaViewReactNavigation } from 'react-native-safe-area-context';
import ScreenConfig from 'App/Config/ScreenConfig';
import { ScreenProps } from './screen.props';
import { isNonScrolling, offsets, presets } from './screen.presets';

const isIos = Platform.OS === 'ios';
const StatusBarHeight = getStatusBarHeight();

function ScreenWithoutScrolling(props: ScreenProps) {
  const preset = presets.fixed;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {};
  const safeAreaColor = props.safeAreaColor
    ? { backgroundColor: props.safeAreaColor }
    : { backgroundColor: ScreenConfig.safeAreaColor };
  const isCustomizeHeader = props.isCustomizeHeader || false;
  const keyboardVerticalOffset = isCustomizeHeader ? offsets[props.keyboardOffset || 'none'] : 44 + StatusBarHeight;
  const Wrapper = props.unsafe ? View : isCustomizeHeader ? SafeAreaViewReactNavigation : SafeAreaViewDefault;

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <StatusBar barStyle={props.statusBar || 'light-content'} />
      <Wrapper style={safeAreaColor}>
        <View style={[preset.inner, style]}>{props.children}</View>
      </Wrapper>
    </KeyboardAvoidingView>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const preset = presets.scroll;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {};
  const safeAreaColor = props.safeAreaColor
    ? { backgroundColor: props.safeAreaColor }
    : { backgroundColor: ScreenConfig.safeAreaColor };
  const isCustomizeHeader = props.isCustomizeHeader || false;
  const keyboardVerticalOffset = isCustomizeHeader ? offsets[props.keyboardOffset || 'none'] : 44 + StatusBarHeight;
  const Wrapper = props.unsafe ? View : isCustomizeHeader ? SafeAreaViewReactNavigation : SafeAreaViewDefault;

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <StatusBar barStyle={props.statusBar || 'light-content'} />
      <Wrapper style={[preset.outer, backgroundStyle, safeAreaColor]}>
        <ScrollView style={[preset.outer, backgroundStyle]} contentContainerStyle={[preset.inner, style]}>
          {props.children}
        </ScrollView>
      </Wrapper>
    </KeyboardAvoidingView>
  );
}

/**
 * The starting component on every Screen in the app.
 *
 * @param props The Screen props
 */
function Screen(props: ScreenProps) {
  if (props.preset && isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} />;
  } else {
    return <ScreenWithScrolling {...props} />;
  }
}
export default Screen;
