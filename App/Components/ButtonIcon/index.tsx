import React, {ReactElement} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const ButtonIcon = (): ReactElement => {
  //TODO

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: ''}} />
      <Text>test button</Text>
    </TouchableOpacity>
  );
};
export default ButtonIcon;
