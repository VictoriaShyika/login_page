import { routesInit } from './router.core';

import { LoginRouter, LOGIN_ROUTE_PATH } from '../../core/login';

export const routes = {
  [LOGIN_ROUTE_PATH]: LoginRouter,
};

export const Router = routesInit(routes);
