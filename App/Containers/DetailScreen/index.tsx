import React, { ReactElement, useEffect } from 'react';
import { Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import ButtonIcon from 'App/Components/ButtonIcon';
import { BaseScreenProps, NavigationScreenProps, RouteScreenProps } from 'App/@types/screen-type';
import Screen from 'App/Components/Screen';
import { Actions as GlobalAction } from 'App/Redux/GlobalRedux';
import { useDispatch } from 'react-redux';
import { ScreenMap } from 'App/Config/NavigationConfig';

const DetailScreen = (props: BaseScreenProps<ScreenMap.Detail>): ReactElement => {
  const dispatch = useDispatch();
  const route = useRoute<RouteScreenProps<ScreenMap.Detail>>();
  const navigation = useNavigation<NavigationScreenProps<ScreenMap.Detail>>();

  //TODO
  console.log(props);
  console.log(route);
  console.log(navigation);

  useEffect(() => {
    dispatch(GlobalAction.setShowLoading({ isLoading: true }));
    setTimeout(() => {
      dispatch(GlobalAction.setShowLoading({ isLoading: false }));
    }, 1000);
  }, [dispatch]);

  const { userName } = props.route.params;

  return (
    <Screen preset={'fixed'} safeAreaColor={'white'}>
      <Text>this is detail screen</Text>
      <Text>{userName}</Text>
      <ButtonIcon />
    </Screen>
  );
};
export default DetailScreen;
