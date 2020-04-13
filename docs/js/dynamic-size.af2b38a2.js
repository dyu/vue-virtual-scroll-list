(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dynamic-size"],{2146:function(e,t,n){"use strict";var a=n("fe3f"),i=n.n(a);i.a},"2a05":function(e,t,n){},4676:function(e,t,n){"use strict";var a=n("2a05"),i=n.n(a);i.a},"960e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"example"},[n("github-corner"),n("introduction",{attrs:{description:"The size of each item is dynamic, you don't have to care about size, it will calculate automatic, but you have to make sure that there's an unique id for every array data."}}),n("div",{staticClass:"example-content"},[n("tab",{on:{"tab-change":e.onTabChange}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowView,expression:"isShowView"}]},[n("virtual-list",{staticClass:"list-dynamic",attrs:{size:80,keeps:30,"item-class":"list-item-dynamic","data-key":"id","data-sources":e.items,"data-component":e.itemComponent}})],1),n("codeblock",{directives:[{name:"show",rawName:"v-show",value:!e.isShowView,expression:"!isShowView"}]})],1)],1)},i=[],s=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item-inner"},[n("div",{staticClass:"head"},[n("span",[e._v("# "+e._s(e.index))]),n("span",[e._v(e._s(e.name))])]),n("div",{staticClass:"desc"},[e._v(e._s(e.desc))])])}),o=[],c=(n("a9e3"),{name:"dynamic-size-item",props:{index:Number,name:String,desc:String}}),r=c,d=(n("4676"),n("2877")),m=Object(d["a"])(r,s,o,!1,null,"7c6cb0cd",null),l=m.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("code-high-light",{attrs:{type:"html",code:e.html}}),n("code-high-light",{attrs:{type:"js",code:e.js}})],1)},h=[],p='\n<virtual-list class="list"\n  :size="80" // just assign a estimate value.\n  :keeps="30"\n  :data-key="\'id\'"\n  :data-sources="items"\n  :data-component="itemComponent"\n/>\n',v="\nimport Item from './Item'\nconst items = [\n  {\n    id: 'unique-id-xxx',\n    ...\n  },\n  ....\n]\n\nexport default {\n  ...\n  data () {\n    return {\n      items: items,\n      itemComponent: Item,\n    }\n  }\n  ...\n}\n",w={name:"dynamic-size-code",data:function(){return{html:p,js:v}}},f=w,b=Object(d["a"])(f,u,h,!1,null,null,null),y=b.exports,x=n("835c"),g=n("adf9"),C=n("c57d"),_=n("b95e"),k=[],j=_["c"];while(j--){var z=_["c"]-j;k.push({index:z,name:g["Random"].name(),id:Object(C["a"])(z),desc:g["Random"].paragraph(g["Random"].integer(0,x["a"]?1:3))})}var S={name:"dynamic-size",components:{codeblock:y},data:function(){return{items:k,itemComponent:l,isShowView:_["a"]===_["b"].VIEW}},methods:{onTabChange:function(e){this.isShowView=e===_["b"].VIEW}}},V=S,E=(n("2146"),Object(d["a"])(V,a,i,!1,null,null,null));t["default"]=E.exports},fe3f:function(e,t,n){}}]);
//# sourceMappingURL=dynamic-size.af2b38a2.js.map