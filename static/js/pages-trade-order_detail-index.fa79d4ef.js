(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-order_detail-index"],{"04a3":function(a,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return e}));var e={uniIcons:i("a58e").default,uniPopup:i("a776").default,uniPopupDialog:i("e59a").default},n=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("v-uni-view",{staticClass:"body"},[i("v-uni-view",{staticClass:"row middle fixed widthMax",style:"height:"+(a.statusHeight+45)+"px;paddingTop:"+(a.statusHeight+5)+"px"},[i("v-uni-image",{staticClass:"widthMax absolute",attrs:{src:"/static/images/order-nav-bar.png"}}),i("v-uni-navigator",{staticClass:"row middle",attrs:{"open-type":"navigateBack","hover-class":"none"}},[i("uni-icons",{attrs:{type:"arrowleft",size:"24"}}),i("v-uni-text",{staticClass:"size30"},[a._v("返回")])],1),i("v-uni-text",{staticClass:"margin-left-base red"},[a._v(a._s(a.states[a.tradeInfo.state]))])],1),i("v-uni-view",{staticClass:"pad-sm bg-white margin-sm radius-sm",style:"marginTop:"+(a.statusHeight+45)+"px"},[i("v-uni-view",{staticClass:"row between middle"},[i("v-uni-text",{staticClass:"size30 margin-xs"},[a._v("卖家信息")]),a.tradeInfo.uid===a.uid?i("v-uni-view",{staticClass:"pad-xs row"},[1===a.tradeInfo.state?i("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.sellCancel.apply(void 0,arguments)}}},[a._v("取消")]):a._e(),3===a.tradeInfo.state?i("v-uni-button",{staticClass:"margin-left-base",attrs:{type:"warn",size:"mini"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.appeal.apply(void 0,arguments)}}},[a._v("申诉")]):a._e(),3===a.tradeInfo.state?i("v-uni-button",{staticClass:"margin-left-base",attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.collected.apply(void 0,arguments)}}},[a._v("确认收款")]):a._e()],1):a._e()],1),i("v-uni-view",{staticClass:"row between head pad-base radius-base margin-xs gradient-pink",attrs:{elevation:"5px"}},[i("v-uni-view",{staticClass:"row middle"},[i("v-uni-view",{staticClass:"bg-white radius-lg"},[i("v-uni-image",{staticClass:"img radius-lg",attrs:{src:a.collectInfo[0].img}})],1),i("v-uni-view",{staticClass:"margin-left-xs between"},[i("v-uni-text",{staticClass:"white size24"},[a._v("支付宝")]),i("v-uni-text",{staticClass:"light-gray size20 margin-top-xs"},[a._v("二维码扫码支付")])],1)],1),a.collectInfo[0].qrcode?i("v-uni-image",{staticClass:"img",attrs:{src:a.collectInfo[0].qrcode},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.previewImg(a.collectInfo[0].qrcode)}}}):i("v-uni-text",{staticClass:"size30 white"},[a._v("暂无该支付")])],1),i("v-uni-view",{staticClass:"row between head pad-base radius-base margin-xs gradient-blue",attrs:{elevation:"5px"}},[i("v-uni-view",{staticClass:"row middle"},[i("v-uni-view",{staticClass:"bg-white radius-lg"},[i("v-uni-image",{staticClass:"img radius-lg",attrs:{src:a.collectInfo[1].img}})],1),i("v-uni-view",{staticClass:"margin-left-xs between"},[i("v-uni-text",{staticClass:"white size24"},[a._v("微信")]),i("v-uni-text",{staticClass:"light-gray size20 margin-top-xs"},[a._v("二维码扫码支付")])],1)],1),a.collectInfo[1].qrcode?i("v-uni-image",{staticClass:"img",attrs:{src:a.collectInfo[1].qrcode},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.previewImg(a.collectInfo[1].qrcode)}}}):i("v-uni-text",{staticClass:"size30 white"},[a._v("暂无该支付")])],1),i("v-uni-view",{staticClass:"row between head pad-base radius-base margin-xs gradient-cyan",attrs:{elevation:"5px"}},[i("v-uni-view",{staticClass:"row middle"},[i("v-uni-view",{staticClass:"bg-white radius-lg"},[i("v-uni-image",{staticClass:"img radius-lg",attrs:{src:a.collectInfo[2].img}})],1),i("v-uni-view",{staticClass:"margin-left-xs between"},[i("v-uni-text",{staticClass:"white size24"},[a._v("银行卡")]),i("v-uni-text",{staticClass:"light-gray size20 margin-top-xs"},[a._v("银行转账支付, 可跨行")])],1)],1),i("v-uni-view",[i("v-uni-text",{staticClass:"white size20"},[a._v(a._s(a.tradeInfo.seller_name||"未绑定"))]),i("v-uni-text",{staticClass:"white size20 margin-top-xs"},[a._v(a._s(a.collectInfo[2].bank||"未绑定"))])],1)],1)],1),i("v-uni-view",{staticClass:"trade-detail middle end"},[i("v-uni-image",{staticClass:"widthMax absolute bg-detail",attrs:{src:"/static/images/tab.png"}}),i("v-uni-view",{staticClass:"margin-base"},[i("v-uni-view",{staticClass:"row middle"},[i("v-uni-text",{staticClass:"size24 white"},[a._v(a._s(a._f("dateFilter")(a.tradeInfo.addtime)))]),i("v-uni-text",{staticClass:"size24 white margin-left-xl"},[a._v("订单号: "+a._s(a.tradeInfo.order_sn))])],1),i("v-uni-view",{staticClass:"row foot margin-top-xs"},[i("v-uni-view",[i("v-uni-text",{staticClass:"size24 orange"},[a._v("总额: "+a._s(a.tradeInfo.all_price))]),i("v-uni-view",{staticClass:"row margin-top-xs"},[i("v-uni-text",{staticClass:"size24 orange"},[a._v("单价: "+a._s(a.tradeInfo.money_one))]),i("v-uni-text",{staticClass:"size24 orange margin-left-xs"},[a._v("数量: "+a._s(parseInt(a.tradeInfo.ga_quota)))])],1)],1),i("v-uni-view",{staticClass:"margin-left-xl"},[i("v-uni-text",{staticClass:"size24 orange"},[a._v("姓名: "+a._s(a.tradeInfo.seller_name))]),i("v-uni-text",{staticClass:"size24 orange margin-top-xs"},[a._v("手机: "+a._s(a.tradeInfo.seller_phone))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"pad-sm bg-peachpuff margin-left-sm margin-right-sm radius-sm margin-top-xs"},[i("v-uni-view",{staticClass:"row between middle"},[i("v-uni-text",{staticClass:"size30 red margin-left-xs"},[a._v("买家支付凭证")]),a.tradeInfo.pid===a.uid?i("v-uni-view",{staticClass:"pad-xs row"},[2===a.tradeInfo.state||3===a.tradeInfo.state?i("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.buyCancel.apply(void 0,arguments)}}},[a._v("取消")]):a._e()],1):a._e()],1),i("v-uni-view",{staticClass:"middle"},[a.tradeInfo.transaction_img||a.newProof?i("v-uni-image",{staticClass:"margin-lg image radius-sm",attrs:{src:a.tradeInfo.transaction_img||a.newProof},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.previewImg(a.tradeInfo.transaction_img||a.newProof)}}}):i("v-uni-image",{staticClass:"image radius-sm",attrs:{src:"/static/images/noImg.png",mode:""}}),a.tradeInfo.pid===a.uid?i("v-uni-view",[a.tradeInfo.transaction_img||a.newProof?a._e():i("v-uni-button",{staticClass:"margin-top-xl",attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.upProof.apply(void 0,arguments)}}},[a._v("上传凭证")]),a.newProof?i("v-uni-button",{attrs:{type:"warn",size:"mini"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.submitProof.apply(void 0,arguments)}}},[a._v("确认提交")]):a._e(),a.tradeInfo.transaction_img&&3===a.tradeInfo.state?i("v-uni-button",{attrs:{type:"warn",size:"mini"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.appeal.apply(void 0,arguments)}}},[a._v("申诉")]):a._e()],1):a._e()],1)],1),i("v-uni-view",{staticClass:"middle margin-top-xs"},[i("v-uni-text",{staticClass:"size30 orange margin-left-xs"},[a._v("温馨提示:")])],1),i("v-uni-view",{staticClass:"tips"},[i("v-uni-image",{staticClass:"widthMax absolute bg-detail",attrs:{src:"/static/images/tips.png"}})],1),i("uni-popup",{ref:"popup",attrs:{type:"dialog"}},[i("uni-popup-dialog",{attrs:{mode:"input",title:a.popupTitle},on:{confirm:function(t){arguments[0]=t=a.$handleEvent(t),a.confirm.apply(void 0,arguments)}}})],1)],1)},o=[]},"2f56":function(a,t,i){var e=i("24fb");t=e(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 布局 */.row[data-v-159b520a]{display:flex;flex-direction:row}.column[data-v-159b520a]{display:flex;flex-direction:column}.index-1[data-v-159b520a]{z-index:1}.index-10[data-v-159b520a]{z-index:10}.index-100[data-v-159b520a]{z-index:10}.lines-1[data-v-159b520a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page[data-v-159b520a]{top:0;left:0;right:0;bottom:0}.fixed[data-v-159b520a]{position:fixed}.top-right[data-v-159b520a]{top:0;right:0}.top-left[data-v-159b520a]{top:0;left:0}.bottom-right[data-v-159b520a]{bottom:0;right:0}.top[data-v-159b520a]{top:0}.bottom[data-v-159b520a]{bottom:0}.absolute[data-v-159b520a]{position:absolute}.relative[data-v-159b520a]{position:relative}.row-reverse[data-v-159b520a]{flex-direction:row-reverse}.between[data-v-159b520a]{justify-content:space-between}.around[data-v-159b520a]{justify-content:space-around}.widthMax[data-v-159b520a]{width:%?750?%}.height-750[data-v-159b520a]{height:%?750?%}.margin-base[data-v-159b520a]{margin:%?30?% %?30?%}.margin-lg[data-v-159b520a]{margin:%?40?% %?40?%}.margin-xl[data-v-159b520a]{margin:%?50?% %?50?%}.margin-sm[data-v-159b520a]{margin:%?20?% %?20?%}.margin-xs[data-v-159b520a]{margin:%?10?% %?10?%}.margin-right-xl[data-v-159b520a]{margin-right:%?50?%}.margin-right-lg[data-v-159b520a]{margin-right:%?40?%}.margin-right-base[data-v-159b520a]{margin-right:%?30?%}.margin-right-xs[data-v-159b520a]{margin-right:%?10?%}.margin-right-sm[data-v-159b520a]{margin-right:%?20?%}.margin-left-xl[data-v-159b520a]{margin-left:%?50?%}.margin-left-lg[data-v-159b520a]{margin-left:%?40?%}.margin-left-base[data-v-159b520a]{margin-left:%?30?%}.margin-left-sm[data-v-159b520a]{margin-left:%?20?%}.margin-left-xs[data-v-159b520a]{margin-left:%?10?%}.margin-top-xl[data-v-159b520a]{margin-top:%?50?%}.margin-top-lg[data-v-159b520a]{margin-top:%?40?%}.margin-top-base[data-v-159b520a]{margin-top:%?30?%}.margin-top-sm[data-v-159b520a]{margin-top:%?20?%}.margin-top-xs[data-v-159b520a]{margin-top:%?10?%}.margin-bottom-xl[data-v-159b520a]{margin-bottom:%?50?%}.margin-bottom-base[data-v-159b520a]{margin-bottom:%?30?%}.margin-bottom-sm[data-v-159b520a]{margin-bottom:%?20?%}.margin-bottom-xs[data-v-159b520a]{margin-bottom:%?10?%}.margin-horizontal-xs[data-v-159b520a]{margin-left:%?10?%;margin-right:%?10?%}.margin-horizontal-sm[data-v-159b520a]{margin-left:%?20?%;margin-right:%?20?%}.margin-horizontal-base[data-v-159b520a]{margin-left:%?30?%;margin-right:%?30?%}.margin-horizontal-lg[data-v-159b520a]{margin-left:%?40?%;margin-right:%?40?%}.margin-horizontal-xl[data-v-159b520a]{margin-left:%?50?%;margin-right:%?50?%}.margin-vertical-xs[data-v-159b520a]{margin-top:%?10?%;margin-bottom:%?10?%}.margin-vertical-sm[data-v-159b520a]{margin-top:%?20?%;margin-bottom:%?20?%}.margin-vertical-base[data-v-159b520a]{margin-top:%?30?%;margin-bottom:%?30?%}.margin-vertical-lg[data-v-159b520a]{margin-top:%?40?%;margin-bottom:%?40?%}.margin-vertical-xl[data-v-159b520a]{margin-top:%?50?%;margin-bottom:%?50?%}.pad-xl[data-v-159b520a]{padding:%?50?% %?50?%}.pad-lg[data-v-159b520a]{padding:%?40?% %?40?%}.pad-base[data-v-159b520a]{padding:%?30?% %?30?%}.pad-sm[data-v-159b520a]{padding:%?20?% %?20?%}.pad-xs[data-v-159b520a]{padding:%?10?% %?10?%}.pad-top-lg[data-v-159b520a]{padding-top:%?40?%}.pad-top-xl[data-v-159b520a]{padding-top:%?50?%}.pad-top-base[data-v-159b520a]{padding-top:%?30?%}.pad-top-sm[data-v-159b520a]{padding-top:%?20?%}.pad-top-xs[data-v-159b520a]{padding-top:%?10?%}.pad-left-xl[data-v-159b520a]{padding-left:%?50?%}.pad-left-lg[data-v-159b520a]{padding-left:%?40?%}.pad-left-base[data-v-159b520a]{padding-left:%?30?%}.pad-left-sm[data-v-159b520a]{padding-left:%?20?%}.pad-left-xs[data-v-159b520a]{padding-left:%?10?%}.pad-right-xl[data-v-159b520a]{padding-right:%?50?%}.pad-right-lg[data-v-159b520a]{padding-right:%?40?%}.pad-right-base[data-v-159b520a]{padding-right:%?30?%}.pad-right-sm[data-v-159b520a]{padding-right:%?20?%}.pad-right-xs[data-v-159b520a]{padding-right:%?10?%}.pad-bottom-xl[data-v-159b520a]{padding-bottom:%?50?%}.pad-bottom-base[data-v-159b520a]{padding-bottom:%?30?%}.pad-bottom-sm[data-v-159b520a]{padding-bottom:%?20?%}.pad-bottom-xs[data-v-159b520a]{padding-bottom:%?10?%}.pad-horizontal-xs[data-v-159b520a]{padding-left:%?10?%;padding-right:%?10?%}.pad-horizontal-sm[data-v-159b520a]{padding-left:%?20?%;padding-right:%?20?%}.pad-horizontal-base[data-v-159b520a]{padding-left:%?30?%;padding-right:%?30?%}.pad-horizontal-lg[data-v-159b520a]{padding-left:%?40?%;padding-right:%?40?%}.pad-horizontal-xl[data-v-159b520a]{padding-left:%?50?%;padding-right:%?50?%}.pad-vertical-xs[data-v-159b520a]{padding-top:%?10?%;padding-bottom:%?10?%}.pad-vertical-sm[data-v-159b520a]{padding-top:%?20?%;padding-bottom:%?20?%}.pad-vertical-base[data-v-159b520a]{padding-top:%?30?%;padding-bottom:%?30?%}.pad-vertical-lg[data-v-159b520a]{padding-top:%?40?%;padding-bottom:%?40?%}.pad-vertical-xl[data-v-159b520a]{padding-top:%?50?%;padding-bottom:%?50?%}.text-center[data-v-159b520a]{text-align:center}.center[data-v-159b520a]{justify-content:center}.start[data-v-159b520a]{justify-content:flex-start}.end[data-v-159b520a]{justify-content:flex-end}.middle[data-v-159b520a]{align-items:center}.head[data-v-159b520a]{align-items:flex-start}.foot[data-v-159b520a]{align-items:flex-end}.flex-1[data-v-159b520a]{flex:1}.nowrap[data-v-159b520a]{flex-wrap:nowrap}.wrap[data-v-159b520a]{flex-wrap:wrap}.wrap-reverse[data-v-159b520a]{flex-wrap:wrap-reverse}\r\n/* 样式 */.ellipsis[data-v-159b520a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ellipsis[data-v-159b520a]{text-overflow:ellipsis}.lines-1[data-v-159b520a]{lines:1}.bg-white[data-v-159b520a]{background-color:#fff}.bg-gray[data-v-159b520a]{background-color:grey}.bg-green[data-v-159b520a]{background-color:green}.bg-orange[data-v-159b520a]{background-color:orange}.bg-pink[data-v-159b520a]{background-color:pink}.bg-base[data-v-159b520a]{background-color:#ebebeb}.bg-black[data-v-159b520a]{background-color:#000}.bg-ghostwhite[data-v-159b520a]{background-color:#f8f8f8}.bg-blue[data-v-159b520a]{background-color:#00f}.bg-red[data-v-159b520a]{background-color:red}.bg-firebrick[data-v-159b520a]{background-color:#b22222}.bg-firebrick[data-v-159b520a]{background-color:#b22222}.bg-lightyellow[data-v-159b520a]{background-color:#ffffe0}.bg-peachpuff[data-v-159b520a]{background-color:#ffdab9}.gradient-peachpuff[data-v-159b520a]{background:linear-gradient(180deg,#ffdab9,#fdb676)}.gradient-blue[data-v-159b520a]{background:linear-gradient(180deg,#589cf8,#035acf)}.gradient-pink[data-v-159b520a]{background:linear-gradient(180deg,#fb8484,#fd5454)}.gradient-yellow[data-v-159b520a]{background:linear-gradient(180deg,#f3ea8b,#635424)}.gradient-pink-row[data-v-159b520a]{background:linear-gradient(90deg,#fb8484,#fd5454)}.gradient-cyan[data-v-159b520a]{background:linear-gradient(180deg,#05d4ce,#01939e)}.gradient-red[data-v-159b520a]{background:linear-gradient(180deg,red,#f5f5f5)}.gradient-base[data-v-159b520a]{background:linear-gradient(180deg,#fff,#f8f8f8)}.size12[data-v-159b520a]{font-size:%?12?%}.size20[data-v-159b520a]{font-size:%?20?%}.size24[data-v-159b520a]{font-size:%?24?%}.size30[data-v-159b520a]{font-size:%?30?%}.size40[data-v-159b520a]{font-size:%?40?%}.size80[data-v-159b520a]{font-size:%?80?%}.bold[data-v-159b520a]{font-weight:700}.text-center[data-v-159b520a]{text-align:center}.border-white[data-v-159b520a]{border:1px solid #f1f1f1}.border-red[data-v-159b520a]{border:1px solid #ee5a52}.border-gray[data-v-159b520a]{border:1px dashed grey}.border-gray-s[data-v-159b520a]{border:1px solid grey}.border-base[data-v-159b520a]{border:1px solid #ebebeb}.border-black[data-v-159b520a]{border:1px solid #000}.border-top[data-v-159b520a]{border-top:1px solid #ebebeb}.border-bottom[data-v-159b520a]{border-bottom:1px solid #ebebeb}.border-bottom-lightgray[data-v-159b520a]{border-bottom:1px solid #d3d3d3}.border-bottom-gray[data-v-159b520a]{border-bottom:1px solid #e0e0e0}.border-bottom-2[data-v-159b520a]{border-bottom:%?2?% solid #f0f0f0}.line-coffee[data-v-159b520a]{border-bottom:%?1?% solid #af6a5b}.radius-xl[data-v-159b520a]{border-radius:%?50?%}.radius-lg[data-v-159b520a]{border-radius:%?30?%}.radius-base[data-v-159b520a]{border-radius:%?20?%}.radius-sm[data-v-159b520a]{border-radius:%?12?%}.radius-xs[data-v-159b520a]{border-radius:%?8?%}.black[data-v-159b520a]{color:#000}.orange[data-v-159b520a]{color:orange}.dark-orange[data-v-159b520a]{color:#d84606}.white[data-v-159b520a]{color:#fff}.gray[data-v-159b520a]{color:grey}.red[data-v-159b520a]{color:red}.green[data-v-159b520a]{color:#33ae84}.firebrick[data-v-159b520a]{color:#b22222}.blue[data-v-159b520a]{color:#00f}.light-blue[data-v-159b520a]{color:#87cefa}.turquoise[data-v-159b520a]{color:#40e0d0}.base[data-v-159b520a]{color:#ebebeb}.slateblue[data-v-159b520a]{color:#6a5acd}.light-gray[data-v-159b520a]{color:hsla(0,0%,100%,.6)}.line-through[data-v-159b520a]{text-decoration:line-through}.body[data-v-159b520a]{background:linear-gradient(180deg,#0883f3,#9bdaf6)}.image[data-v-159b520a]{width:%?414?%;height:%?336?%}.img[data-v-159b520a]{width:%?60?%;height:%?60?%}.show-box[data-v-159b520a]{width:%?600?%;height:%?600?%}.top[data-v-159b520a]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.bottom[data-v-159b520a]{width:%?600?%;height:%?40?%}.input[data-v-159b520a]{height:%?60?%;width:%?380?%}.gradient-pink[data-v-159b520a]{height:%?200?%}.gradient-blue[data-v-159b520a]{height:%?200?%;margin-top:%?-100?%}.gradient-cyan[data-v-159b520a]{height:%?200?%;margin-top:%?-100?%}.trade-detail[data-v-159b520a]{margin-top:%?-140?%;height:%?250?%}.bg-detail[data-v-159b520a]{top:0;left:0;height:%?250?%}.tips[data-v-159b520a]{height:%?250?%}.portrait[data-v-159b520a]{width:%?50?%;height:%?50?%}',""]),a.exports=t},"6ac3":function(a,t,i){"use strict";i.r(t);var e=i("e8f0"),n=i.n(e);for(var o in e)"default"!==o&&function(a){i.d(t,a,(function(){return e[a]}))}(o);t["default"]=n.a},7927:function(a,t,i){var e=i("2f56");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var n=i("4f06").default;n("65d101a6",e,!0,{sourceMap:!1,shadowMode:!1})},db99:function(a,t,i){"use strict";var e=i("7927"),n=i.n(e);n.a},dfd1:function(a,t,i){"use strict";i.r(t);var e=i("04a3"),n=i("6ac3");for(var o in n)"default"!==o&&function(a){i.d(t,a,(function(){return n[a]}))}(o);i("db99");var r,d=i("f0c5"),s=Object(d["a"])(n["default"],e["b"],e["c"],!1,null,"159b520a",null,!1,e["a"],r);t["default"]=s.exports},e8f0:function(a,t,i){"use strict";var e=i("4ea4");i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("fb67"),o=i("3df4"),r=e(i("c61c")),d={data:function(){return{statusHeight:getApp().globalData.systemInfo.statusBarHeight,collectInfo:[{account:"",qrcode:"",img:"../../static/images/icon/alipay.png"},{account:"",qrcode:"",img:"../../static/images/icon/wechat.png"},{account:"",bank:"",img:"../../static/images/icon/bank.png"}],tradeInfo:{},newProof:"",uid:null,states:["已取消","售卖中","交易中","待确认","已完成"],popupTitle:""}},onLoad:function(a){var t=this;this.uid=this.$store.state.app.uid,console.log(a.id),(0,o.tradeDetail)({id:a.id}).then((function(a){console.log(a.data),t.tradeInfo=a.data,t.collectInfo=[JSON.parse(a.data.seller_alipay),JSON.parse(a.data.seller_wechat),JSON.parse(a.data.seller_card)]}))},methods:{previewImg:function(a){uni.previewImage({urls:[a]})},upProof:function(){var a=this;r.default.uploadImageOne("upload/image",(function(t){a.newProof=t.data.url}))},sellCancel:function(){var a=this;uni.showModal({title:"确认取消该订单",content:"单价: "+a.tradeInfo.money_one+"\n数量: "+parseInt(a.tradeInfo.ga_quota)+"\n总价: "+a.tradeInfo.all_price,success:function(t){t.confirm?(0,o.sellCancel)(a.tradeInfo.id).then((function(a){uni.showToast({title:a.msg,icon:"success"}),setTimeout((function(){uni.switchTab({url:"/pages/trade/index"})}),1e3)})).catch((function(a){uni.showToast({title:a,icon:"loading"})})):t.cancel&&console.log("用户点击取消")}})},buyCancel:function(){var a=this;uni.showModal({title:"确认取消该订单",content:"单价: "+a.tradeInfo.money_one+"\n数量: "+parseInt(a.tradeInfo.ga_quota)+"\n总价: "+a.tradeInfo.all_price,success:function(t){t.confirm?(0,o.buyCancel)(a.tradeInfo.id).then((function(a){uni.showToast({title:a.msg,icon:"success"}),setTimeout((function(){uni.switchTab({url:"/pages/trade/index"})}),1e3)})).catch((function(a){uni.showToast({title:a,icon:"loading"})})):t.cancel&&console.log("用户点击取消")}})},submitProof:function(){var a=this;uni.showModal({title:"确认凭证无误",success:function(t){t.confirm?(0,o.postProof)({id:a.tradeInfo.id,transaction_img:a.newProof}).then((function(a){uni.showToast({title:a.msg,icon:"success"}),setTimeout((function(){uni.switchTab({url:"/pages/trade/index"})}),1e3)})).catch((function(a){uni.showToast({title:a,icon:"loading"})})):t.cancel&&console.log("用户点击取消")}})},collected:function(){this.popupTitle='请输入"ok"完成提交',this.$refs.popup.open("center")},appeal:function(){this.popupTitle="请输入申诉说明",this.$refs.popup.open("center")},confirm:function(a){var t=this;if('请输入"ok"完成提交'===this.popupTitle){if("ok"!==a)return uni.showToast({title:"正确输入才能完成提交",icon:"loading"});(0,o.confirmTrade)(this.tradeInfo.id).then((function(a){uni.showToast({title:a.msg,icon:"success"}),setTimeout((function(){uni.switchTab({url:"/pages/trade/index"})}),1e3)})).catch((function(a){uni.showToast({title:a,icon:"loading"})}))}else"请输入申诉说明"===this.popupTitle&&(0,o.appeal)(this.tradeInfo.id,a).then((function(a){uni.showToast({title:a.msg,icon:"success"}),setTimeout((function(){uni.redirectTo({url:"/pages/trade/order_detail?id="+t.tradeInfo.id})}),1e3)})).catch((function(a){uni.showToast({title:a,icon:"loading"})}))}},filters:{dateFilter:function(a){return(0,n.formatDate)(1e3*a)}}};t.default=d}}]);