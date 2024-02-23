const path = require('path')
const { ejsCompile, writeFile, mkdirSync } = require('../utils');


const handleEjsToFile = async (name, dest, dirs, template, filename) => {
  // 1.获取模块引擎的路径
  const templatePath = path.resolve(__dirname, template);
  const dir = dirs?.split('/')[1]
  const result = await ejsCompile(templatePath, {name, lowerName: name.toLowerCase(),dir });

  // 2.写入文件中
  // 判断文件不存在,那么就创建文件
  mkdirSync(dest);
  const targetPath = path.resolve(dest, filename);
  writeFile(targetPath, result);
}

const addComponent = async (name, dest) => {
  handleEjsToFile(name, dest,dest,'../template/component.vue.ejs', `${name}.vue`);
}

const addPage = async (name, dest) => {
  addComponent(name, dest);
  handleEjsToFile(name, dest.replace(dest.split('/')[1], 'router'), dest, '../template/vue-router.js.ejs', `${name}.js`)
}

// const addStore = async (name, dest) => {
//   handleEjsToFile(name, dest, '../template/vue-store.js.ejs', 'index.js')
//   handleEjsToFile(name, dest, '../template/vue-types.js.ejs', 'types.js')
// }

module.exports = {
  addComponent,
  addPage,
}