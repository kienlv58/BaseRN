import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
export interface ScreenParams extends ParamListBase {
  // [ScreenMap.LIST_BOOK_SCREEN]: {
  //   type: BookType;
  //   title: string;
  //   categoryId?: number;
  // };
  // [ScreenMap.REGISTER_SCREEN]: {id?: string};
  // [ScreenMap.LOGIN_SCREEN]: {id?: string};
}

interface BaseScreenProps<
  RouteName extends keyof ParamList,
  ParamList extends ParamListBase = ScreenParams,
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

type RouteScreenProps<
  RouteName extends keyof ParamList,
  ParamList extends ParamListBase = ScreenParams,
> = RouteProp<ParamList, RouteName>;

type NavigationScreenProps<
  RouteName extends keyof ParamList,
  ParamList extends ParamListBase = ScreenParams,
> = StackNavigationProp<ParamList, RouteName>;
