import { ParamListBase } from '@react-navigation/native';

export enum ScreenMap {
  Home = 'Home',
  Detail = 'Detail',
}

export interface ScreenParams extends ParamListBase {
  [ScreenMap.Home]: {};
  [ScreenMap.Detail]: { userName: string };
}
