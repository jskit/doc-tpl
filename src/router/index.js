import Vue from 'vue';
import Router from 'vue-router';

import layoutDocs from '../layout/docs';
import layoutDemo from '../layout/demo';

const Index = () => import(/* webpackChunkName: "docs" */ `@root/README.md`)
const ChangeLog = () => import(/* webpackChunkName: "docs" */ `@root/CHANGELOG.md`)

const lazyLoad =
  process.env.NODE_ENV === 'production'
    ? file => () =>
        import(/* webpackChunkName: "x-[index]" */ '@/views/' + file)
    : file => require('@/views/' + file).default;

Vue.use(Router);

const routes = [
  {
    path: '*',
    name: '404',
    redirect: {
      path: '/',
    },
  },
];

const docsRoutes = [{
  path: '/docs', // `/${config.navBase}`,
  component: layoutDocs,
  children: [
    {
      path: '/',
      redirect: {
        name: 'docs',
      },
    },
    {
      path: 'quickstart',
      name: 'docs',
      component: Index,
      meta: {
        title: '快速上手',
      },
    },
    {
      path: 'changelog',
      name: 'changelog',
      component: ChangeLog,
      meta: {
        title: '更新日志',
      },
    },
    // ...
    {
      path: '*',
      component: lazyLoad('docs/is-comming.md'),
    },
  ],
}];

const isComming = {
  template: `
    <div>demo isComming</div>
  `,
}
const demoRoutes = [{
  path: '/demo', // `/${config.navBase}`,
  component: layoutDemo,
  children: [
    {
      path: '/',
      alias: 'index',
      name: 'demo',
      meta: {
        title: 'Demo 示例',
      },
      component: lazyLoad('demo/index.vue'),
    },
    // ...
    { path: '*', component: isComming },
  ],
}];

const router = new Router({
  routes: [
    {
      path: '/',
      meta: { },
      redirect: {
        name: 'docs',
      },
    },
    ...docsRoutes,
    ...demoRoutes,
  ],
});

export default router;
