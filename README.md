# kit-doc

preview doc template by Vue

## Usage

Use [kit-doc](https://github.com/jskit/kit-doc)

```js
import KitDoc from 'kit-doc'
Vue.use(KitDoc)
```

Usage example:

```vue
// template
<section class="tpl-docs">
  <kit-doc :simulator="getSimulatorPath" :config="config">
    <router-view></router-view>
  </kit-doc>
</section>

// script
import docsConfig from '@/docs.config'

function map(arr, key) {
  return arr.map(item => {
    return item[key]
  })
}
const docs = map(docsConfig.nav[0].groups[0].list, 'path')
export default {
  name: 'tpl-docs',
  components: {
  },

  data() {
    return {
      // simulator: this.getSimulatorPath(),
      config: docsConfig,
      pathDir: '',
    }
  },

  computed: {
    getSimulatorPath() {
      const dir = this.$route.path.split('/').pop()
      console.log(dir)
      if (docs.indexOf(dir) > -1) {
        return '/#/demo/'
      }
      return `/#/demo/${dir}`
    },
  },
}
```

### config/docs

data examples:

```js
export const components = [
  {
    title: '基础组件',
    list: [
      {
        icon: '',
        path: 'layout',
        title: 'layout 布局排版',
        desc: '',
        status: 'doing',
      },
      // ...
    ],
  },
  // ...
]
export default {
  header: {
    '首页': '/',
    '组件': '/component',
    '实战': '/practical-projects',
  },
  footer: {
    github: 'https://github.com/jskit/kit-doc',
    nav: {
      '加入我们': 'https://devnode.cn/',
      '意见反馈': 'https://github.com/jskit/kit-doc/issues',
    },
  },
  navBase: '/docs',
  nav: [
    {
      title: '开发指南',
      groups: [
        {
          title: '',
          list: [
            {
              path: 'quickstart',
              title: '快速上手',
              status: 'doing',
            },
            {
              path: 'practical-projects',
              title: '项目实战',
              status: 'doing',
            },
            {
              path: 'changelog',
              title: '更新日志',
              status: 'done',
            },
          ],
        },
      ],
    },
    {
      title: '组件',
      groups: components,
    },
  ],
}

```
