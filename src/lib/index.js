import VueImagesSwipe from './vue-images-swipe';
const comment = {
  install: function(Vue) {
    Vue.component('VueImagesSwipe', VueImagesSwipe);
  },
};
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment);
}
// 导出模块
export default comment;
