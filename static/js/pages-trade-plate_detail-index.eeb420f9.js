(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-plate_detail-index"],{"1d46":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var a={mpHtml:n("376d").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("mp-html",{attrs:{content:t.description}})],1)},u=[]},"3df4":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.plateList=u,e.plateDetail=i,e.userScore=o,e.payType=d,e.payTypeEdit=f,e.tradeList=c,e.sell=s,e.sellThree=l,e.pay=p,e.buy=m,e.confirmOrder=g,e.placeOrdercom=_,e.sellInfo=v,e.sellList=b,e.buyList=y,e.tradeDetail=h,e.postProof=G,e.sellCancel=O,e.buyCancel=w,e.confirmTrade=L,e.appeal=U,e.getUser=x,e.transfer=j,e.confirmReceive=T,e.concelReceive=q,e.tradeLog=z;var r=a(n("f3de"));function u(t){return r.default.post("User/bantongList",t)}function i(t){return r.default.post("User/bantongGetOne",{bantong_id:t})}function o(){return r.default.post("User/getUserzhi")}function d(){return r.default.post("User/getWithdrawal")}function f(t){return r.default.post("User/setWithdrawal",t)}function c(t){return r.default.get("/gamai/selectGamai",t)}function s(t){return r.default.post("/gamai/add",t)}function l(t){return r.default.post("/Gamai/addbantong3",t)}function p(t){return r.default.post("/User/user_pay",t)}function m(t,e){return r.default.post("/gamai/transaction",{id:t,pay_pwd:e})}function g(t){return r.default.post("Order/confirmOrder",{zhicount:t})}function _(t){return r.default.post("Order/placeOrdercom",{zhicount:t})}function v(){return r.default.get("/gamai/userOneGamai")}function b(t){return r.default.get("/gamai/gamaiList",t)}function y(t){return r.default.post("/Gamai/orderList",t)}function h(t){return r.default.post("/gamai/oneGamai",t)}function G(t){return r.default.post("/gamai/addComplete",t)}function O(t){return r.default.post("/gamai/shqxGamai",{id:t})}function w(t){return r.default.post("/gamai/mjqxGamai",{id:t})}function L(t){return r.default.post("/gamai/confirmGamai",{id:t})}function U(t,e){return r.default.post("/gamai/addAppeal",{gamai_id:t,appeal_content:e})}function x(t){return r.default.post("/User/pay_get_user",{name:t})}function j(t){return r.default.post("/User/user_pay",t)}function T(t){return r.default.post("/Gamai/user_transaction",t)}function q(t){return r.default.post("/Gamai/user_qx_gamai",t)}function z(t){return r.default.post("/Gamai/moneyLog_list",t)}},"966b":function(t,e,n){"use strict";n("a4d3"),n("e01a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("3df4"),r={data:function(){return{description:""}},onLoad:function(t){var e=this,n=t.id;(0,a.plateDetail)(n).then((function(t){e.description=t.data.product_details}))}};e.default=r},d330:function(t,e,n){"use strict";n.r(e);var a=n("966b"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},e63c:function(t,e,n){"use strict";n.r(e);var a=n("1d46"),r=n("d330");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);var i,o=n("f0c5"),d=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"5401981a",null,!1,a["a"],i);e["default"]=d.exports}}]);