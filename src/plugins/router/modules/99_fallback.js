const routes = [
  // TODO:
  // * [] add vue-press?
  // * [] add styleguide?
  // * [] add storybook?
  {
    path: '/under-construction',
    name: 'UnderConstruction',
    component: () => import('@/views/UnderConstruction.vue'),
    props: true,
  },
  {
    path: '/',
    redirect: '/app',
  },
  {
    path: '*',
    component: () => import('@/views/NotFound.vue'),
  },
];

export default routes;
