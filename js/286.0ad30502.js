"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[286],{2286:function(e,t,a){a.r(t),a.d(t,{default:function(){return O}});var s=a(6252),l=a(3577);const o={class:"container fluid mt-3"},n={class:"row"},r={class:"col-12 col-md-12"},c={class:"nav nav-tabs",id:"myTab",role:"tablist"},i={class:"nav-item",role:"presentation"},d={class:"nav-item",role:"presentation"},b={class:"nav-item",role:"presentation"},u={class:"tab-content",id:"myTabContent"},h={class:"tab-pane fade show active table-responsive",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},p={class:"table-responsive table-responsive-xxl"},_={class:"table"},v=(0,s._)("thead",null,[(0,s._)("tr",{class:"d-none d-md-table-row"},[(0,s._)("th",{scope:"col"},"訂單編號"),(0,s._)("th",{scope:"col"},"訂單成立日"),(0,s._)("th",{scope:"col"},"付款方式"),(0,s._)("th",{scope:"col"},"出貨狀態"),(0,s._)("th",{scope:"col"},"操作")])],-1),m=(0,s._)("td",null,[(0,s._)("button",{class:"btn btn-secondary"}," 查看詳細 ")],-1);function g(e,t,a,g,y,f){return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",n,[(0,s._)("div",r,[(0,s._)("ul",c,[(0,s._)("li",i,[(0,s._)("button",{onClick:t[0]||(t[0]=e=>g.serachOrders(9)),class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"},"全部訂單")]),(0,s._)("li",d,[(0,s._)("button",{onClick:t[1]||(t[1]=e=>g.serachOrders(0)),class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"false"},"待出貨")]),(0,s._)("li",b,[(0,s._)("button",{onClick:t[2]||(t[2]=e=>g.serachOrders(1)),class:"nav-link",id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"false"},"已出貨")])]),(0,s._)("div",u,[(0,s._)("div",h,[(0,s._)("div",p,[(0,s._)("table",_,[v,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.items,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.orderId},[(0,s._)("td",null,(0,l.zw)(e.orderId),1),(0,s._)("td",null,(0,l.zw)(e.orderDate),1),(0,s._)("td",null,(0,l.zw)(e.payMethod),1),(0,s._)("td",null,(0,l.zw)(e.deliveryStatus),1),m])))),128))])])])])])])])])}var y=a(2262),f=a(6154),k={name:"BackEndOrders",setup(){let e=(0,y.iH)("all"),t=(0,y.qj)({items:{}});function a(e){f.Z.post("/getorders",{deliveryStatus:e},{headers:{contentType:"application/json"}}).then((e=>{t.items=e.data,console.log(t.items)})).catch((e=>{console.log(e.message)}))}return(0,s.bv)((()=>{f.Z.post("/getorders",{deliveryStatus:9},{headers:{contentType:"application/json"}}).then((e=>{t.items=e.data,console.log(t.items)})).catch((e=>{console.log(e.message)}))})),{text:e,serachOrders:a,...(0,y.BK)(t)}}},w=a(3744);const C=(0,w.Z)(k,[["render",g]]);var O=C}}]);
//# sourceMappingURL=286.0ad30502.js.map