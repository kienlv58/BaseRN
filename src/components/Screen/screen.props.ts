import React from 'react';
import {ViewStyle} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';
import {ScreenPresets} from './screen.presets';

export interface ScreenProps {
  /**
   * Children components.
   */
  children?: React.ReactNode;
  safeAreaViewProps?: SafeAreaViewProps;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle;

  /**
   * One of the different types of presets.
   */
  preset?: ScreenPresets;

  /**
   * An optional background color
   */
  backgroundColor?: string;

  /**
   * An optional status bar setting. Defaults to light-content.
   */
  statusBar?: 'light-content' | 'dark-content';

  /**
   * Should we not wrap in SafeAreaView? Defaults to false.
   */
  unsafe?: boolean;

  /**
   * By how much should we offset the keyboard? Defaults to none.
   */
  keyboardOffset?: number;
  customHeader?: React.ReactNode;
  customBottom?: React.ReactNode;
  scrollViewStyle?: ViewStyle;
  safeAreaColor?: string;
}
