import { lazyWithRetries } from '@/utils/index';

export const HOME = '/';
export const REGISTER = '/register';
export const DASHBOARD = '/dashboard';

export const routes = [
  {
    name: 'Home',
    path: HOME,
    component: lazyWithRetries(() => import('./pages/Home')),
  },
  {
    name: 'Bank_Accounts',
    path: DASHBOARD,
    component: lazyWithRetries(() => import('./pages/Dashboard/Index')),
    protected: true,
  },
  // {
  //     name: 'PageNotFound',
  //     path: '*',
  //     component: lazy(() => retryLazyLoad((_) => import('./pages/PageNotFound'))),
  //     parentComponent: Route,
  //     layout: false,
  // },
];
