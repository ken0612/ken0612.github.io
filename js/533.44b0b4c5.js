"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[533],{3533:function(l,e,a){a.r(e),a.d(e,{default:function(){return tl}});var s=a(6252),t=a(3577);const o={class:"container my-3 animate__animated animate__fadeIn"},n={class:"row"},d={class:"col-12 col-md-12"},c={class:"card"},i={class:"accordion",id:"accordionExample"},r={class:"accordion-item"},u={class:"accordion-header"},m={class:"d-grid accordion-button text-center",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},_={id:"collapseOne",class:"accordion-collapse collapse hide","data-bs-parent":"#accordionExample"},v={class:"accordion-body"},b={class:"table-responsive-md"},p={class:"table align-middle text-center"},h=(0,s._)("thead",null,[(0,s._)("tr",{class:"d-none d-md-table-row text-start"},[(0,s._)("th",{colspan:"2"},"商品資料"),(0,s._)("th",null,"單件價格"),(0,s._)("th",null,"數量"),(0,s._)("th",null,"小計")])],-1),f={class:"w-25 h-25"},y=["src"],g={class:"container my-3 animate__animated animate__fadeIn"},w={class:"row"},x={class:"col-12 col-md-6"},I={class:"card p-1"},N=(0,s._)("table",{class:"table"},[(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,[(0,s._)("h4",null,"顧客資料")])])])],-1),z={class:"p-2"},k={class:"mb-3"},D=(0,s._)("label",{for:"fullName",class:"form-label"},"顧客姓名：",-1),H=["value"],q={class:"mb-3"},E=["value"],O={class:"mb-3"},A=(0,s._)("label",{for:"phoneNumber",class:"form-label"},"手機號碼：",-1),C=["value"],F=(0,s.uE)('<div class="row my-4"><div class="col-12 col-md-12"><div class="card p-1"><table class="table"><thead><tr><th><h4>訂單備註</h4></th></tr></thead></table><div class="p-2"><label for="phoneNumber" class="form-label">留下想說的話：</label><textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea></div></div></div></div>',1),Z={class:"col-12 col-md-6"},j={class:"card p-1"},K=(0,s._)("table",{class:"table"},[(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,[(0,s._)("h4",null,"送貨資料")])])])],-1),L={class:"p-2"},M={class:"my-3"},P={class:"my-3"},T={class:"mb-3"},Y=(0,s._)("label",{for:"deliveryFullName",class:"form-label"},"收件者姓名：",-1),B=["value"],R={class:"mb-3"},S=(0,s._)("label",{for:"deliveryPhoneNumber",class:"form-label"},"手機號碼：",-1),U=["value"],$={class:"mb-3"},G=(0,s._)("label",{for:"deliveryAddress",class:"form-label"},"配送地址：",-1),J=["value"],Q=(0,s._)("button",{id:"submitbtn",disabled:"",class:"w-100 btn btn-success btn-gradient text-center"}," 提交訂單 ",-1);function V(l,e,a,V,W,X){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",o,[(0,s._)("div",n,[(0,s._)("div",d,[(0,s._)("div",c,[(0,s._)("div",i,[(0,s._)("div",r,[(0,s._)("h2",u,[(0,s._)("button",m,[(0,s._)("span",null,[(0,s._)("h3",null,"合計 "+(0,t.zw)(l.items.totalAmount)+" 元",1)]),(0,s._)("span",null,[(0,s._)("h3",null,"購物車共 "+(0,t.zw)(V.cartItems)+" 件商品",1)])])]),(0,s._)("div",_,[(0,s._)("div",v,[(0,s._)("div",b,[(0,s._)("table",p,[h,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.items.orderDetails,(l=>((0,s.wg)(),(0,s.iD)("tr",{key:l.id,class:"text-start"},[(0,s._)("td",f,[(0,s._)("img",{class:"img-fluid w-100 h-100",src:l.productImg,style:{"min-width":"60px","min-height":"60px"}},null,8,y)]),(0,s._)("td",null,(0,t.zw)(l.productName),1),(0,s._)("td",null,(0,t.zw)(l.price),1),(0,s._)("td",null,(0,t.zw)(l.quantity),1),(0,s._)("td",null,(0,t.zw)(l.price*l.quantity),1)])))),128))])])])])])])])])])])]),(0,s._)("div",g,[(0,s._)("div",w,[(0,s._)("div",x,[(0,s._)("div",I,[N,(0,s._)("div",z,[(0,s._)("div",k,[D,(0,s._)("input",{disabled:"",type:"text",class:"form-control",id:"fullName",value:V.userInfo.userInfo.fullName},null,8,H)]),(0,s._)("div",q,[(0,s.Uk)(" Email： "),(0,s._)("input",{type:"email",class:"form-control",id:"email",value:V.userInfo.userInfo.email,disabled:""},null,8,E)]),(0,s._)("div",O,[A,(0,s._)("input",{type:"text",class:"form-control",id:"phoneNumber",disabled:"",value:"0"+V.userInfo.userInfo.phoneNumber},null,8,C)])])]),F]),(0,s._)("div",Z,[(0,s._)("div",j,[K,(0,s._)("div",L,[(0,s._)("div",M,"您選擇的支付方式："+(0,t.zw)(l.items.payMethod),1),(0,s._)("div",P,"您選擇的送貨方式："+(0,t.zw)(l.items.deliveryMethod),1),(0,s._)("div",T,[Y,(0,s._)("input",{type:"text",class:"form-control",value:l.items.customerName,id:"deliveryFullName",disabled:""},null,8,B)]),(0,s._)("div",R,[S,(0,s._)("input",{type:"text",class:"form-control",value:"0"+l.items.phoneNumber,id:"deliveryPhoneNumber",disabled:""},null,8,U)]),(0,s._)("div",$,[G,(0,s._)("input",{type:"text",class:"form-control",value:l.items.address,id:"deliveryAddress",disabled:""},null,8,J)]),Q])])])])])],64)}var W=a(2262),X=a(6154),ll=a(2201),el={name:"HistoryOrderDetail",setup(){const l=(0,ll.tv)();console.log(l);const e=l.currentRoute.value.query.orderid;console.log(e);const a=localStorage.getItem("isLogin"),t=(0,W.iH)({userInfo:{}});let o=(0,W.qj)({items:{}}),n=(0,W.iH)(0);return(0,s.bv)((()=>{const l={isLogin:a,orderid:e};console.log(l),X.Z.post("/gethistoryorder",l,{headers:{contentType:"application/json"}}).then((l=>{o.items=l.data,console.log(o),n.value=o.items.orderDetails.length})).catch((l=>{console.log(l.message)})),X.Z.get(`/userinfo?account=${a}`).then((l=>{t.value.userInfo=l.data})).catch((l=>{console.log(l.message)}))})),{...(0,W.BK)(o),userInfo:t,cartItems:n}}},al=a(3744);const sl=(0,al.Z)(el,[["render",V]]);var tl=sl}}]);
//# sourceMappingURL=533.44b0b4c5.js.map