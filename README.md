# vue-images-swipe

> 图片切换，支持键盘事件

## demo

![](./example/demo.gif)

## use

1. install vue-images-swipe

   npm install vue-images-swipe --save

2. main.js import

```main.js
import VueImagesSwipe from 'vue-images-swipe';
Vue.use(VueImagesSwipe);
```

## example

```html
 <VueImagesSwipe :listData="imgList" :slideTime="2000" position="right" :keyStyleActive="{'font-size':'20px'}" @toggleCallback="_toggleCallback"></VueImagesSwipe>
```

## api explain

```js
* @param {Array} listData 列表数据
* @param {Number} slideTime 定时，默认 1000ms
* @param {Boolean} isShowTimer 是否显示定时器，默认显示
* @param {String} id 容器 ID
* @param {String} position 轮播-定位，默认有定位右侧
* @param {Boolean} isKeyboardEvents 是否支持键盘事件，默认不支持
* @param {Object} keyStyle key 样式
* @param {Object} keyStyle key 样式
* @param {Object} keyStyleActive key 选中样式
* @param {Function} toggleCallback 回调函数
```

## Browser support

ie9+ chrome firefox ...

## Project depend

vue node-sass sass-loader
