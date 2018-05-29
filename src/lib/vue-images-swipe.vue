<template>
  <div class="vueImagesSwipe" :id="newID">
    <ul class="vueImagesSwipe__index">
      <li :class="['vueImagesSwipe__index-item',{'is-active':selected==index}]" v-for="(item,index) in newListData" :key="index">
        <img class="vueImagesSwipe__index-item-img" :src="item.src" :alt="item.name">
      </li>
    </ul>
    <ul v-if="isShowTimer" :class="['vueImagesSwipe__key',position]">
      <li :class="['vueImagesSwipe__key-item',{'is-active': selected==index}]" :style="[keyStyle,selected==index ? keyStyleActive : '' ]" @click="_toggle(index)" v-for="(item,index) in itemElementLen" :key="index">{{index+1}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    //列表数据
    listData: {
      type: Array,
      default() {
        return [];
      },
    },
    //定时，默认1000ms
    slideTime: {
      type: Number,
      default() {
        return 1000;
      },
    },
    //是否显示定时器，默认显示
    isShowTimer: {
      type: Boolean,
      default() {
        return true;
      },
    },
    //容器ID
    id: {
      type: String,
      default() {
        return 'swipeID';
      }
    },
    //轮播-定位，默认有定位右侧
    position: {
      type: [String],
      default() {
        return 'right';
      }
    },
    //是否支持键盘事件，默认支持
    isKeyboardEvents: {
      type: Boolean,
      default() {
        return true;
      }
    },
    //key样式
    keyStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    //key选中样式
    keyStyleActive: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      selected: 0,//当前选中
      oTimer: null,//定时器
      itemElementLen: 0,//所有项
    };
  },
  computed: {
    //列表数据
    newListData() {
      return this.listData;
    },
    //容器ID，【加随机数解决一个页面多次调用时唯一性问题】
    newID() {
      return this.id + '_' + Math.floor(Math.random() * 100000);
    },
  },
  beforeCreate() {
    //重置第一个选中
    this.selected = 0;
  },
  mounted() {
    this._swipe();
    if (this.isKeyboardEvents) {
      document.addEventListener('keydown', this._keydown);
    }
  },
  beforeDestroy() {
    //清除定时器
    clearTimeout(this.oTimer);
    //清除键盘事件
    if (this.isKeyboardEvents) {
      document.removeEventListener('keydown', this._keydown);
    }
  },
  methods: {
    //切换回调函数
    _callbackFn() {
      this.$emit('toggleCallback');
    },
    //选中后，经过设定时间再轮播
    _setTimeOutSwipe() {
      //先清除定时器
      clearTimeout(this.oTimer);
      this._callbackFn();
      this.oTimer = setTimeout(() => {
        this._swipe();
      }, this.slideTime);
    },
    //轮播
    _swipe() {
      let _itemElement = document.querySelectorAll(`#${this.newID} .vueImagesSwipe__index-item`);//获取所有图片元素
      this.itemElementLen = _itemElement.length;//获取所有图片个数
      this._goSwipe();
      this._setTimeOutSwipe();
    },
    //向前切换
    _goSwipe() {
      //选中值索引小于所有项长度时，对选中值加加；否则回到初始位置
      if (this.selected < this.itemElementLen - 1) {
        ++this.selected;
      } else {
        this.selected = 0;
      }
    },
    //向后切换
    _backSwipe() {
      //选中值索引小于0时，对选中值重置到最大值；否则当前值减减
      if (this.selected < 1) {
        this.selected = this.itemElementLen - 1;
      } else {
        --this.selected;
      }
    },
    //切换
    _toggle(index) {
      //选中当前项
      this.selected = index;
      this._setTimeOutSwipe();
    },
    //键盘事件
    _keydown(e) {
      //键盘code
      let keyCode = e.keyCode;
      //上左键37,38；下右键39,40切换不同的页面
      if (keyCode === 37 || keyCode === 38) {
        this._backSwipe();
      } else if (keyCode === 39 || keyCode === 40) {
        this._goSwipe();
      }
      this._setTimeOutSwipe();
    }
  }
};
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
