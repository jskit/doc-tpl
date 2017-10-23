import KitDoc from './KitDoc'

const modules = require.context('./components', false, /\.vue$/)

// At build-time cache will be populated with all required modules.
// 返回对象
// const components = modules.keys().reduce((module, key) => {
//   // export default 语法导出不友好，特殊处理
//   module[key.replace(/(^\.\/)|(.vue)$/g, '')] = modules(key).default
//   return module
// }, {})

const cache = {}
const components = modules.keys().map((key) => {
  // TODO: 这里 export default 语法在不同的使用场景，
  // 导出不友好，需特殊处理
  // 当前项目引用，import .vue 文件 OK
  // 提供给外部引用，则需要 .default 特殊处理
  // console.log(modules(key))
  return cache[key.replace(/(^\.\/)|(.vue)$/g, '')] = modules(key).default || modules(key)
})

console.log('kit-doc components:')
console.log(components)
// console.log(KitDoc)
components.push(KitDoc)

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  components.map(Component => {
    Vue.component(Component.name, Component)
  })
}

export default install

