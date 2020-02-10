import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import ButtonIcon from 'App/Components/ButtonIcon';
import { BaseScreenProps } from 'App/@types/screen-type';

const DetailScreen = (props: BaseScreenProps): ReactElement => {
  //TODO
  console.log(props);

  return (
    <View>
      <Text>this is detail screen</Text>
      <ButtonIcon />
    </View>
  );
};
export default DetailScreen;
