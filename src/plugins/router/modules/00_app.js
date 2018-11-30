export const APP_HOME = 'AppHome';

const routes = [
  // App
  {
    path: '/app',
    component: () => import('@/views/App/AppLayout.vue'),
    props: true,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: APP_HOME,
        component: () => import('@/views/App/AppHome.vue'),
        props: true,
      },
    ],
  },
];

export default routes;
