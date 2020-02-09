import React, { ReactElement } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ButtonIcon = (): ReactElement => {
  //TODO

  return (
    <TouchableOpacity style={styles.container}>
      <Text>test button</Text>
    </TouchableOpacity>
  );
};
export default ButtonIcon;
