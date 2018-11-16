import Vue from 'vue';
import KitDoc from './KitDoc';
import Nav from './components/Nav';
import Block from './components/Block';
import Title from './components/Title';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Container from './components/Container';
import FooterNav from './components/FooterNav';
import Simulator from './components/Simulator';
import DemoBlock from './components/DemoBlock';
import DemoSection from './components/DemoSection';
import nprogress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css";

const components = [
  Nav,
  Title,
  Header,
  Footer,
  KitDoc,
  Block,
  Content,
  Container,
  FooterNav,
  Simulator,
  DemoBlock,
  DemoSection
];

// const cache = {};
// const reqModules = require.context("./components", false, /\.vue$/);
// const components = reqModules.keys().map(key => {
//   // TODO: 这里 export default 语法在不同的使用场景，
//   // 导出不友好，需特殊处理
//   // 当前项目引用，import .vue 文件 OK
//   // 提供给外部引用，则需要 .default 特殊处理
//   // console.log(reqModules(key))
//   return (cache[key.replace(/(^\.\/)|(.vue)$/g, "")] =
//     reqModules(key).default || reqModules(key));
// });

// At build-time cache will be populated with all required modules.
// 返回对象
// const components = modules.keys().reduce((module, key) => {
//   // export default 语法导出不友好，特殊处理
//   module[key.replace(/(^\.\/)|(.vue)$/g, '')] = modules(key).default
//   return module
// }, {})

// components.push(KitDoc);

/* eslint no-unused-vars: 0 */
export default function install() {
  components.map(Component => {
    Vue.component(Component.name, Component);
  });
};

export {
  Nav,
  Title,
  Header,
  Footer,
  KitDoc,
  Block,
  Content,
  Container,
  FooterNav,
  Simulator,
  DemoBlock,
  DemoSection,
  progress,
};
