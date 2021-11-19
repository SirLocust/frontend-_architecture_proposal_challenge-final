import { HomePageComponent } from '../pages/home/HomePageComponent';

export const routesApp = [
  {
    path: '/home',
    name: 'Home',
    component: <HomePageComponent />,
    exact: true,
  },
];
