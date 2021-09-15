介绍
--
vue3sketchRuler是对原vue-sketch-ruler重新打包, 这边对代码进行了vue3的eslint修复和styleLint和pretty的代码格式化,支持适应vue3中使用sketchRuler
# Vue 3 + Vite打包sketchRuler
由于项目升级成vite, 发现原来的插件vue-sketch-ruler,用到vue3中会报错, 这边我重新用vite打包了一份, 打包后的插件和原来功一样, 且支持在vue3中使用
更多信息,请参看源码, 地址: [https://github.com/chuxiaoguo/vue-sketch-ruler.git](https://github.com/chuxiaoguo/vue-sketch-ruler.git)
## 引入方式
将打包后的dist包拷贝,用import导入,支持下面两种引用方式
```
import { SketchRule } from '/dist/index.es.js?3242'
 components: { SketchRule }
```
也可以是这样子
```
import SketchRule  from '/dist/index.es.js?3242'
 components: SketchRule
```
同时不要忘了引入样式
```
import '/dist/style.css'
```
