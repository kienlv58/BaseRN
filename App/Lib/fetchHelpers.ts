import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { merge } from 'lodash';
// import Config from 'react-native-config';
import env from 'App/Config/Enviroment/env';

import { throwErrorIfEmpty, throwErrorIfMalformed } from './errorHelpers';

const API_ENDPOINT = env.API_ENDPOINT;

/**
 * Universal user object
 * This user object is used throughout the app
 */

interface User {
  accessToken: string;
}
let user: User | undefined;

/**
 * Update access token into universal user object
 * @param authorizedUser
 */
export function updateAccessTokenToHeader(authorizedUser: User | undefined): void {
  if (authorizedUser) {
    user = {
      ...user,
      ...authorizedUser,
    };
  }
}

/**
 * Configure default request config
 * @param requestConfig
 */
export const configure = (requestConfig: AxiosRequestConfig = {}): AxiosRequestConfig => {
  const targetConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    timeout: 30000,
  };
  if (user && user.accessToken) {
    merge(targetConfig, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  }

  return merge(targetConfig, requestConfig);
};

/**
 * app API instance
 */
export const appApi = axios.create({
  baseURL: API_ENDPOINT,
});

appApi.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    return configure(config);
  },
  (error): Promise<Error> => {
    return Promise.reject(error);
  },
);

appApi.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    throwErrorIfMalformed(response);
    throwErrorIfEmpty(response);
    return response;
  },
  (error): Promise<Error> => {
    return Promise.reject(error);
  },
);

export default {
  appApi,
};
