import Vue from 'vue';
import Router from 'vue-router';
import appRoutes from './appRoutes';

Vue.use(Router);

const appRouter = new Router({
  mode: 'history',
});

appRouter.addRoutes(appRoutes);

export default appRouter;
