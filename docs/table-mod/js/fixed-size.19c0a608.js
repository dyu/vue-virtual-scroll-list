(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fixed-size"],{3188:function(e,t,n){},5976:function(e,t,n){"use strict";var i=n("ab99"),s=n.n(i);s.a},ab99:function(e,t,n){},c227:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"example"},[n("github-corner"),n("introduction",{attrs:{description:"The size of each item is equal."}}),n("div",{staticClass:"example-content"},[n("tab",{on:{"tab-change":e.onTabChange}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowView,expression:"isShowView"}]},[n("virtual-list",{staticClass:"list scroll-touch",attrs:{"data-key":"id","data-sources":e.items,"data-component":e.itemComponent,"estimate-size":50,"item-class":"list-item-fixed"}})],1),n("codeblock",{directives:[{name:"show",rawName:"v-show",value:!e.isShowView,expression:"!isShowView"}]})],1)],1)},s=[],a=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item-inner"},[n("span",[e._v("# "+e._s(e.source.index))]),n("span",[e._v(e._s(e.source.name))])])}),o=[],c=n("a178"),r={name:"fix-size-item",mixins:[c["b"]],props:Object.assign({source:{type:Object}},c["a"])},l=r,u=(n("5976"),n("2877")),m=Object(u["a"])(l,a,o,!1,null,"42dac2b2",null),d=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("code-high-light",{attrs:{type:"html",code:e.html}}),n("code-high-light",{attrs:{type:"js",code:e.js}})],1)},p=[],f='\n<virtual-list class="list"\n  :data-key="\'id\'"\n  :data-sources="items"\n  :data-component="itemComponent"\n  :estimate-size="60"\n/>\n',b="\nimport Item from './Item'\nconst items = [\n  {\n    id: 'unique-id-xxx',\n    ...\n  },\n  ....\n]\n\nexport default {\n  ...\n  data () {\n    return {\n      items: items,\n      itemComponent: Item,\n    }\n  }\n  ...\n}\n",w={name:"fix-size-code",data:function(){return{html:f,js:b}}},v=w,x=Object(u["a"])(v,h,p,!1,null,null,null),g=x.exports,C=n("adf9"),_=n("c57d"),j=n("b95e"),S=1e4,V=[],z=S;while(z--){var k=S-z;V.push({index:k,name:C["Random"].name(),id:Object(_["a"])(k)})}var O={name:"fix-size",components:{codeblock:g},data:function(){return{total:S.toLocaleString(),items:V,itemComponent:d,isShowView:j["a"]===j["b"].VIEW}},methods:{onTabChange:function(e){this.isShowView=e===j["b"].VIEW}}},y=O,E=(n("e3d2"),Object(u["a"])(y,i,s,!1,null,null,null));t["default"]=E.exports},c57d:function(e,t,n){"use strict";n("99af"),n("d3b7"),n("25f0");t["a"]=function(e){return"".concat(e,"$").concat(Math.random().toString(16).substr(9))}},e3d2:function(e,t,n){"use strict";var i=n("3188"),s=n.n(i);s.a}}]);