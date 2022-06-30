import * as React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenProps} from './screen.props';
import {isNonScrolling, presets} from './screen.presets';
import {palette} from 'theme';

const isIos = Platform.OS === 'ios';

function ScreenWithoutScrolling(props: ScreenProps) {
  const preset = presets.fixed;
  const {
    style,
    backgroundColor,
    children,
    keyboardOffset,
    customHeader,
    customBottom,
    safeAreaColor,
    statusBar,
    safeAreaViewProps,
  } = props || {};
  const backgroundStyle = backgroundColor ? {backgroundColor} : {};

  return (
    <SafeAreaView
      {...safeAreaViewProps}
      style={[
        {
          flex: 1,
          backgroundColor: safeAreaColor || palette.primary,
        },
      ]}>
      <StatusBar barStyle={statusBar} />
      <KeyboardAvoidingView
        style={[preset.outer, backgroundStyle]}
        behavior={isIos ? 'padding' : undefined}
        keyboardVerticalOffset={keyboardOffset || 0}>
        <View style={[preset.inner, style]}>
          {customHeader}
          {children}
          {customBottom}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const preset = presets.scroll;
  const {
    style,
    backgroundColor,
    children,
    keyboardOffset,
    customHeader,
    customBottom,
    scrollViewStyle,
    safeAreaColor,
    statusBar,
    safeAreaViewProps,
  } = props || {};
  const backgroundStyle = backgroundColor ? {backgroundColor} : {};
  // return children;

  return (
    <SafeAreaView
      {...safeAreaViewProps}
      style={[
        {
          flex: 1,
          backgroundColor: safeAreaColor || palette.primary,
        },
      ]}>
      <StatusBar barStyle={statusBar} />
      <KeyboardAvoidingView
        style={[preset.outer, backgroundStyle]}
        behavior={isIos ? 'padding' : undefined}
        keyboardVerticalOffset={keyboardOffset || 0}>
        <View style={[preset.outer, backgroundStyle]}>
          {customHeader}
          <ScrollView
            // keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
            style={[preset.outer, backgroundStyle, scrollViewStyle]}
            contentContainerStyle={[preset.inner, style]}>
            {children}
          </ScrollView>
          {customBottom}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/**
 * The starting component on every Screen in the app.
 *
 * @param props The Screen props
 */
const Screen = (props: ScreenProps) => {
  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} />;
  }

  return <ScreenWithScrolling {...props} />;
};
export default Screen;
