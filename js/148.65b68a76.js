"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[148],{3988:function(e,l,t){t.d(l,{W:function(){return s}});var a=t(9876);const s=(0,a.Q_)("payanddeliinfo",{state:()=>({paymentStatus:{payMethod:"",deliveryMethod:""}}),actions:{setPaymentStatus(e,l){this.paymentStatus.payMethod=e,this.paymentStatus.deliveryMethod=l}}})},7148:function(e,l,t){t.r(l),t.d(l,{default:function(){return ne}});var a=t(6252),s=t(3577),i=t(9963);const n={class:"container my-3 animate__animated animate__fadeIn"},d={class:"row"},r={class:"col-12 col-md-12"},o={class:"card"},c={class:"accordion",id:"accordionExample"},u={class:"accordion-item"},m={class:"accordion-header"},b={class:"d-grid accordion-button text-center",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},p={id:"collapseOne",class:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},_={class:"accordion-body"},h={class:"table-responsive-md"},v={class:"table align-middle text-center"},f=(0,a._)("thead",null,[(0,a._)("tr",{class:"d-none d-md-table-row text-start"},[(0,a._)("th",{colspan:"2"},"商品資料"),(0,a._)("th",null,"單件價格"),(0,a._)("th",null,"數量"),(0,a._)("th",null,"小計")])],-1),y={class:"w-25 h-25"},g=["src"],w={class:"container my-3 animate__animated animate__fadeIn"},k={class:"row"},N={class:"col-12 col-md-6"},I={class:"card p-1"},x=(0,a._)("table",{class:"table"},[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,[(0,a._)("h4",null,"顧客資料")])])])],-1),C={class:"p-2"},S={class:"mb-3"},P=(0,a._)("label",{for:"fullName",class:"form-label"},"顧客姓名：",-1),U={class:"mb-3"},q={class:"mb-3"},M=(0,a._)("label",{for:"phoneNumber",class:"form-label"},"手機號碼：",-1),A=(0,a.uE)('<div class="row my-4"><div class="col-12 col-md-12"><div class="card p-1"><table class="table"><thead><tr><th><h4>訂單備註</h4></th></tr></thead></table><div class="p-2"><label for="phoneNumber" class="form-label">留下想說的話：</label><textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea></div></div></div></div>',1),F={class:"col-12 col-md-6"},O={class:"card p-1"},z=(0,a._)("table",{class:"table"},[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,[(0,a._)("h4",null,"送貨資料")])])])],-1),D={class:"p-2"},H={class:"my-3"},V={class:"my-3"},j={class:"form-check mb-3"},E=(0,a._)("label",{class:"form-check-label",for:"flexCheckChecked"}," 收件人資料與顧客資料相同 ",-1),Y={class:"mb-3"},T=(0,a._)("label",{for:"deliveryFullName",class:"form-label"},"收件者姓名：",-1),W={class:"mb-3"},Z=(0,a._)("label",{for:"deliveryPhoneNumber",class:"form-label"},"手機號碼：",-1),B={class:"mb-3"},J=(0,a._)("label",{for:"deliveryAddress",class:"form-label"},"配送地址：",-1),K={key:1,class:"spinner-border spinner-border-sm",role:"status"},L=(0,a._)("span",{class:"visually-hidden"},"Loading...",-1),Q=[L],$={key:0,class:"alert alert-success mt-3 animate__animated animate__fadeIn",role:"alert"},G={key:1,class:"alert alert-danger mt-3",role:"alert"};function R(e,l,t,L,R,X){const ee=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",n,[(0,a._)("div",d,[(0,a._)("div",r,[(0,a._)("div",o,[(0,a._)("div",c,[(0,a._)("div",u,[(0,a._)("h2",m,[(0,a._)("button",b,[(0,a._)("span",null,[(0,a._)("h3",null,"合計 "+(0,s.zw)(L.totalPrice)+" 元",1)]),(0,a._)("span",null,[(0,a._)("h3",null,"購物車共 "+(0,s.zw)(L.cartItemsCount)+" 件商品",1)])])]),(0,a._)("div",p,[(0,a._)("div",_,[(0,a._)("div",h,[(0,a._)("table",v,[f,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.items,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id,class:"text-start"},[(0,a._)("td",y,[(0,a._)("img",{class:"img-fluid w-100 h-100",src:e.productImg,style:{"min-width":"60px","min-height":"60px"}},null,8,g)]),(0,a._)("td",null,(0,s.zw)(e.productName),1),(0,a._)("td",null,(0,s.zw)(e.productPrice),1),(0,a._)("td",null,(0,s.zw)(e.quantity),1),(0,a._)("td",null,(0,s.zw)(e.productPrice*e.quantity),1)])))),128))])])])])])])])])])])]),(0,a._)("div",w,[(0,a._)("div",k,[(0,a._)("div",N,[(0,a._)("div",I,[x,(0,a._)("div",C,[(0,a._)("div",S,[P,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"fullName","onUpdate:modelValue":l[0]||(l[0]=e=>L.userInfo.fullName=e)},null,512),[[i.nr,L.userInfo.fullName]])]),(0,a._)("div",U,[(0,a.Uk)(" Email： "),(0,a.wy)((0,a._)("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":l[1]||(l[1]=e=>L.userInfo.email=e),disabled:""},null,512),[[i.nr,L.userInfo.email]])]),(0,a._)("div",q,[M,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"phoneNumber","onUpdate:modelValue":l[2]||(l[2]=e=>L.userInfo.phoneNumber=e)},null,512),[[i.nr,L.userInfo.phoneNumber]])])])]),A]),(0,a._)("div",F,[(0,a._)("div",O,[z,(0,a._)("div",D,[(0,a._)("div",H,"您選擇的支付方式："+(0,s.zw)(L.paymentStatus.payMethod),1),(0,a._)("div",V,"您選擇的送貨方式："+(0,s.zw)(L.paymentStatus.deliveryMethod),1),(0,a._)("div",j,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":l[3]||(l[3]=e=>L.isChecked=e),id:"flexCheckChecked",checked:""},null,512),[[i.e8,L.isChecked]]),E]),(0,a._)("div",Y,[T,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"deliveryFullName","onUpdate:modelValue":l[4]||(l[4]=e=>L.deliveryInfo.deliFullName=e)},null,512),[[i.nr,L.deliveryInfo.deliFullName]])]),(0,a._)("div",W,[Z,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"deliveryPhoneNumber","onUpdate:modelValue":l[5]||(l[5]=e=>L.deliveryInfo.deliPhoneNumber=e)},null,512),[[i.nr,L.deliveryInfo.deliPhoneNumber]])]),(0,a._)("div",B,[J,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"deliveryAddress","onUpdate:modelValue":l[6]||(l[6]=e=>L.deliveryInfo.deliAddress=e)},null,512),[[i.nr,L.deliveryInfo.deliAddress]])]),(0,a._)("button",{onClick:l[7]||(l[7]=(...e)=>L.submitOrder&&L.submitOrder(...e)),id:"submitbtn",class:"w-100 btn btn-success btn-gradient text-center"},[L.submiting?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a.Uk)(" 提交訂單 ")],64)),L.submiting?((0,a.wg)(),(0,a.iD)("div",K,Q)):(0,a.kq)("",!0)]),L.submitSuccess?((0,a.wg)(),(0,a.iD)("div",$,[(0,a.Uk)(" 訂單提交成功！2秒後將自動跳轉頁面... "),(0,a.Wm)(ee,{to:"/memberpage/orders"},{default:(0,a.w5)((()=>[(0,a.Uk)("查看訂單")])),_:1})])):(0,a.kq)("",!0),L.submiterror?((0,a.wg)(),(0,a.iD)("div",G," 請正確填寫配送資訊! ")):(0,a.kq)("",!0)])])])])])],64)}t(7658);var X=t(2262),ee=t(6154),le=t(2201),te=t(3988),ae={name:"CheckOut",setup(){const e=(0,le.tv)();let l=(0,X.qj)(JSON.parse(localStorage.getItem("cart"))),t=(0,a.Fl)((()=>{let e=0;for(var t=0;t<l.items.length;t++)e+=l.items[t].quantity*l.items[t].productPrice;return e})),s=(0,te.W)().paymentStatus,i=(0,a.Fl)((()=>l.items.length)),n=(0,X.qj)({fullName:"",address:"",phoneNumber:"",email:"",id:""}),d=(0,X.qj)({deliFullName:"",deliAddress:"",deliPhoneNumber:"",customId:"",totalAmount:t.value,payMethod:s.payMethod,deliveryMethod:s.deliveryMethod}),r=(0,X.iH)(!1),o=(0,X.iH)(!1),c=(0,X.iH)(!1),u=(0,X.iH)(!1);function m(){for(var t in d){if(null===d[t]||""===d[t])return void(r.value=!0);r.value=!1}this.submiting=!0;const a=(0,X.IU)(d),s=(0,X.IU)(l.items),i={jsonDeliveryInfo:a,jsonCartItems:s};console.log(i);const n=document.getElementById("submitbtn");n.setAttribute("disabled","true"),ee.Z.post("/submitorder",i,{headers:{"Content-Type":"application/json"}}).then((l=>{console.log(l),this.submiting=!1,this.submitSuccess=!0,localStorage.setItem("cart",JSON.stringify({items:[]})),setTimeout((()=>{e.push("/memberpage/orders")}),2e3)})).catch((e=>{console.log(e.message),n.removeAttribute("disabled")}))}return(0,a.YP)(u,(()=>{u.value&&(d.deliFullName=n.fullName,d.deliAddress=n.address,d.deliPhoneNumber=n.phoneNumber)}),{deep:!0}),(0,a.bv)((()=>{let e=localStorage.getItem("isLogin");ee.Z.get(`/userinfo?account=${e}`).then((e=>{let l=e.data;n.fullName=l.fullName,n.phoneNumber="0"+l.phoneNumber,n.email=l.email,n.address=l.address,n.id=l.id,d.customId=n.id,d.deliEmail=n.email})).catch((e=>{console.log(e.message)}))})),{...(0,X.BK)(l),totalPrice:t,cartItemsCount:i,userInfo:n,deliveryInfo:d,isChecked:u,submiting:o,submitOrder:m,submitSuccess:c,submiterror:r,paymentStatus:s}}},se=t(3744);const ie=(0,se.Z)(ae,[["render",R]]);var ne=ie}}]);
//# sourceMappingURL=148.65b68a76.js.map