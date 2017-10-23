
import { camelCase, upperFirst } from 'lodash'
import config, { components } from '@/config/docs'

function lazyLoad(page) {
  return () => import(/* webpackChunkName: "docs" */ `./${page}`)
}

const tplDocs = lazyLoad('_tpl')
const Index = () => import(/* webpackChunkName: "docs" */ `@root/README.md`)
const ChangeLog = () => import(/* webpackChunkName: "docs" */ `@root/CHANGELOG.md`)

// const isComming = {
//   template: `
//     <div>docs isComming</div>
//   `,
// }

export default {
  // 使用默认子路由，则父路由的 name 就得去掉
  // 否则使用 `:to="{name: 'demo'"` 会导致默认子路由不会render
  path: '/docs', // `/${config.navBase}`,
  component: tplDocs,
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
    { path: '*', component: lazyLoad('is-comming.md') },
  ],
}
