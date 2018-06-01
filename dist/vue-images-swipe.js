!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueImagesSwipe",[],t):"object"==typeof exports?exports.VueImagesSwipe=t():e.VueImagesSwipe=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={props:{listData:{type:Array,default:function(){return[]}},slideTime:{type:Number,default:function(){return 1e3}},isShowTimer:{type:Boolean,default:function(){return!0}},id:{type:String,default:function(){return"swipeID"}},position:{type:[String],default:function(){return"right"}},isKeyboardEvents:{type:Boolean,default:function(){return!1}},keyStyle:{type:Object,default:function(){return{}}},keyStyleActive:{type:Object,default:function(){return{}}}},data:function(){return{selected:0,oTimer:null,itemElementLen:0}},computed:{newListData:function(){return this.listData},newID:function(){return this.id+"_"+Math.floor(1e5*Math.random())}},beforeCreate:function(){this.selected=0},mounted:function(){this._swipe(),this.isKeyboardEvents&&document.addEventListener("keydown",this._keydown)},beforeDestroy:function(){clearTimeout(this.oTimer),this.isKeyboardEvents&&document.removeEventListener("keydown",this._keydown)},methods:{_callbackFn:function(e){this.$emit("toggleCallback",e)},_setTimeOutSwipe:function(){var e=this;clearTimeout(this.oTimer),this._callbackFn(this.selected),this.oTimer=setTimeout(function(){e._goSwipe()},this.slideTime)},_swipe:function(){var e=document.querySelectorAll("#"+this.newID+" .vueImagesSwipe__index-item");this.itemElementLen=e.length,this.selected=0,this._setTimeOutSwipe()},_goSwipe:function(){this.selected<this.itemElementLen-1?++this.selected:this.selected=0,this._setTimeOutSwipe()},_backSwipe:function(){this.selected<1?this.selected=this.itemElementLen-1:--this.selected},_toggle:function(e){this.selected=e,this._setTimeOutSwipe()},_keydown:function(e){var t=e.keyCode;37===t||38===t?this._backSwipe():39!==t&&40!==t||this._goSwipe(),this._setTimeOutSwipe()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r={install:function(e){e.component("VueImagesSwipe",i.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),t.default=r},function(e,t,n){"use strict";function i(e){n(3)}var r=n(0),o=n(9),s=n(8),a=i,u=s(r.a,o.a,!1,a,"data-v-d26f8d56",null);t.a=u.exports},function(e,t,n){var i=n(4);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(6)("5d3b50c3",i,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,'[data-v-d26f8d56]{margin:0;padding:0}li[data-v-d26f8d56]{list-style:none}.vueImagesSwipe[data-v-d26f8d56]{position:relative;width:100%;height:100%}.vueImagesSwipe__index[data-v-d26f8d56]{width:100%;height:100%}.vueImagesSwipe__index-item[data-v-d26f8d56]{display:none;width:100%;height:100%}.vueImagesSwipe__index-item.is-active[data-v-d26f8d56]{display:block}.vueImagesSwipe__index-item-img[data-v-d26f8d56]{overflow:hidden;width:100%;height:100%}.vueImagesSwipe__key[data-v-d26f8d56]{position:fixed;zoom:1}.vueImagesSwipe__key[data-v-d26f8d56]:after{display:block;visibility:hidden;clear:both;height:0;content:".";line-height:0}.vueImagesSwipe__key.right[data-v-d26f8d56]{right:50px;top:50%;transform:translateY(-50%)}.vueImagesSwipe__key.left[data-v-d26f8d56]{left:50px;top:50%;transform:translateY(-50%)}.vueImagesSwipe__key.top[data-v-d26f8d56]{top:50px;left:50%;transform:translateX(-50%)}.vueImagesSwipe__key.top .vueImagesSwipe__key-item[data-v-d26f8d56]{float:left}.vueImagesSwipe__key.bottom[data-v-d26f8d56]{bottom:50px;left:50%;transform:translateX(-50%)}.vueImagesSwipe__key.bottom .vueImagesSwipe__key-item[data-v-d26f8d56]{float:left}.vueImagesSwipe__key-item[data-v-d26f8d56]{margin-bottom:8px;padding:5px 12px;border-radius:50%;color:#333;text-align:center;font-weight:600;font-size:14px;cursor:pointer}.vueImagesSwipe__key-item.is-active[data-v-d26f8d56]{background:#ccc}',""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=i(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=c[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(o(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var t,n,i=document.querySelector("style["+g+'~="'+e.id+'"]');if(i){if(m)return v;i.parentNode.removeChild(i)}if(_){var o=p++;i=l||(l=r()),t=s.bind(null,i,o,!1),n=s.bind(null,i,o,!0)}else i=r(),t=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function s(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(i&&e.setAttribute("media",i),h.ssrId&&e.setAttribute(g,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(7),c={},f=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,m=!1,v=function(){},h=null,g="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){m=n,h=r||{};var o=d(e,t);return i(o),function(t){for(var n=[],r=0;r<o.length;r++){var s=o[r],a=c[s.id];a.refs--,n.push(a)}t?(o=d(e,t),i(o)):o=[];for(var r=0;r<n.length;r++){var a=n[r];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete c[a.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=o[0],a=o[1],u=o[2],d=o[3],c={id:e+":"+r,css:a,media:u,sourceMap:d};i[s]?i[s].parts.push(c):n.push(i[s]={id:s,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,i,r,o){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var d="function"==typeof a?a.options:a;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),r&&(d._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=c):i&&(c=i),c){var f=d.functional,l=f?d.render:d.beforeCreate;f?(d._injectStyles=c,d.render=function(e,t){return c.call(t),l(e,t)}):d.beforeCreate=l?[].concat(l,c):[c]}return{esModule:s,exports:a,options:d}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vueImagesSwipe",attrs:{id:e.newID}},[n("ul",{staticClass:"vueImagesSwipe__index"},e._l(e.newListData,function(t,i){return n("li",{key:i,class:["vueImagesSwipe__index-item",{"is-active":e.selected==i}]},[n("img",{staticClass:"vueImagesSwipe__index-item-img",attrs:{src:t.src,alt:t.name}})])})),e._v(" "),e.isShowTimer?n("ul",{class:["vueImagesSwipe__key",e.position]},e._l(e.itemElementLen,function(t,i){return n("li",{key:i,class:["vueImagesSwipe__key-item",{"is-active":e.selected==i}],style:[e.keyStyle,e.selected==i?e.keyStyleActive:""],on:{click:function(t){e._toggle(i)}}},[e._v(e._s(i+1))])})):e._e()])},r=[],o={render:i,staticRenderFns:r};t.a=o}])});
//# sourceMappingURL=vue-images-swipe.js.map