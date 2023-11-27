"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[903],{5118:function(e,t,a){a.d(t,{l:function(){return l}});var s=a(9876);const l=(0,s.Q_)("backendinfotemp",{state:()=>({product:{id:"",productName:"",productDesc:"",productPrice:"",productStock:"",category:"",productImg:""},customer:{account:"",address:"",birth:"",email:"",fullName:"",id:"",lastLoginDate:"",phoneNumber:""},productId:""}),actions:{saveProduct(e){this.product.id=e.id,this.product.productName=e.productName,this.product.productDesc=e.productDesc,this.product.productPrice=e.productPrice,this.product.productStock=e.productStock,this.product.category=e.category,this.product.productImg=e.productImg},saveCustomer(e){this.customer.account=e.account,this.customer.address=e.address,this.customer.birth=e.birth,this.customer.email=e.email,this.customer.fullName=e.fullName,this.customer.id=e.id,this.customer.lastLoginDate=e.lastLoginDate,this.customer.phoneNumber="0"+e.phoneNumber},saveProductId(e){this.productId=e}}})},1903:function(e,t,a){a.r(t),a.d(t,{default:function(){return O}});var s=a(6252),l=a(9963),o=a(3577);const c={class:"container-fluid"},i={class:"row"},d={class:"col-12 col-md-12"},n={class:"row"},r=(0,s.uE)('<div class="col-12 col-md-8"><h2 class="my-3"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-wrench-adjustable" viewBox="0 0 16 16"><path d="M16 4.5a4.492 4.492 0 0 1-1.703 3.526L13 5l2.959-1.11c.027.2.041.403.041.61Z"></path><path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.49 4.49 0 0 0 11.5 9Zm-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376ZM3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg> 產品管理 </h2></div>',1),u={class:"col-12 col-md-2 my-auto mx-start"},m=(0,s._)("option",{value:"20",selected:""},"每頁顯示數量",-1),v=(0,s._)("option",{value:"10"},"10",-1),p=(0,s._)("option",{value:"20"},"20",-1),g=(0,s._)("option",{value:"30"},"30",-1),h=[m,v,p,g],b={class:"col-12 col-md-2 my-auto mx-start"},_=(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-plus-square-fill",viewBox:"0 0 16 16"},[(0,s._)("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"})],-1),f=(0,s._)("span",{class:"p-3"},"添加新產品",-1),P=[_,f],y={class:"table-responsive-sm"},w={class:"table table-bordered table-striped table-hover table-dark text-center"},k=(0,s._)("thead",null,[(0,s._)("tr",{class:"d-none d-md-table-row"},[(0,s._)("th",{scope:"col",class:"col-2"},"產品ID"),(0,s._)("th",{scope:"col",class:"col-2"},"產品名稱"),(0,s._)("th",{scope:"col",class:"col-2"},"產品分類"),(0,s._)("th",{scope:"col",class:"col-2"},"產品價格"),(0,s._)("th",{scope:"col",class:"col-2"},"操作")])],-1),I={class:""},x=["onClick"],C=["onClick"],L={"aria-label":"Page navigation example"},N={class:"pagination justify-content-center"},D=(0,s._)("a",{class:"page-link",href:"#"},"上一頁",-1),M=[D],B=["onClick"],A={class:"page-link"},z=(0,s._)("a",{class:"page-link",href:"#"},"下一頁",-1),E=[z],H={class:"modal fade",id:"deleteItem",tabindex:"-1","aria-labelledby":"deleteItemModalLabel","aria-hidden":"true"},Z={class:"modal-dialog modal-dialog-centered"},j={class:"modal-content"},T=(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},"警告"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Y=(0,s._)("div",{class:"modal-body"}," 確定要刪除此項產品嗎 ",-1),q={class:"modal-footer"},K=(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function S(e,t,a,m,v,p){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",c,[(0,s._)("div",i,[(0,s._)("div",d,[(0,s._)("div",n,[r,(0,s._)("div",u,[(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>m.itemsPerPage=e),class:"form-select","aria-label":"Default select example"},h,512),[[l.bM,m.itemsPerPage,void 0,{number:!0}]])]),(0,s._)("div",b,[(0,s._)("button",{onClick:t[1]||(t[1]=(...e)=>m.goAddProduct&&m.goAddProduct(...e)),class:"btn btn-success w-100"},P)])]),(0,s._)("div",y,[(0,s._)("table",w,[k,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(m.paginatedItems.items,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("th",null,(0,o.zw)(e.id),1),(0,s._)("td",null,(0,o.zw)(e.productName),1),(0,s._)("td",null,(0,o.zw)(e.category),1),(0,s._)("td",null,(0,o.zw)(e.productPrice),1),(0,s._)("td",I,[(0,s._)("button",{onClick:t=>m.editProduct(e.id),class:"btn btn-secondary mx-3"}," 編輯 ",8,x),(0,s._)("button",{onClick:t=>m.saveProductId(e.id),class:"btn btn-danger","data-bs-toggle":"modal","data-bs-target":"#deleteItem"}," 刪除 ",8,C)])])))),128))])]),(0,s._)("nav",L,[(0,s._)("ul",N,[(0,s._)("li",{onClick:t[2]||(t[2]=e=>m.goPreviousPage()),id:"previous",class:"page-item"},M),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(m.totalPages,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s._)("li",{onClick:t=>m.changePage(e),class:"page-item"},[(0,s._)("a",A,(0,o.zw)(e),1)],8,B)])))),128)),(0,s._)("li",{onClick:t[3]||(t[3]=e=>m.goNextPage(m.currentPage)),id:"next",class:"page-item"},E)])])])])])]),(0,s._)("div",H,[(0,s._)("div",Z,[(0,s._)("div",j,[T,Y,(0,s._)("div",q,[K,(0,s._)("button",{onClick:t[4]||(t[4]=e=>m.deleteProduct()),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"},"確定")])])])])],64)}a(7658);var U=a(2262),V=a(6154),Q=a(2201),X=a(5118),F={name:"BackEndProducts",setup(){let e=(0,X.l)(),t=(0,Q.tv)(),a=(0,U.qj)({items:{}}),l=(0,U.iH)(20),o=(0,U.iH)(0),c=(0,U.iH)(1),i=(0,U.qj)({items:{}},{deep:!0});function d(e){c.value=e;const t=(c.value-1)*l.value,s=c.value*l.value;i.items=a.items.slice(t,s);let o=document.getElementsByClassName("page-item"),d=Array.from(o);for(let a=0;a<d.length;a++)parseInt(d[a].innerText)===e?d[a].classList.add("active"):d[a].classList.remove("active")}function n(){t.push("addproduct")}function r(s){for(let t in a.items)if(a.items[t].id===s){let s=(0,U.IU)(a.items[t]);e.saveProduct(s)}t.push("editproduct")}function u(){c.value--;let e=document.getElementsByClassName("page-item"),t=Array.from(e);for(let a=0;a<t.length;a++)parseInt(t[a].innerText)===c.value?t[a].classList.add("active"):t[a].classList.remove("active")}function m(){let t=e.productId;console.log(t),V.Z.post("/deleteproductbyid",{productId:t},{headers:{contentType:"application/json"}}).then((e=>{console.log(e.data),a.items=e.data})).catch((e=>{console.log(e.message)}))}function v(t){e.saveProductId(t)}function p(){c.value++;let e=document.getElementsByClassName("page-item"),t=Array.from(e);for(let a=0;a<t.length;a++)parseInt(t[a].innerText)===c.value?t[a].classList.add("active"):t[a].classList.remove("active")}return(0,s.bv)((()=>{V.Z.get("/getproducts?category=all").then((e=>{a.items=e.data,console.log(a),o.value=Math.ceil(a.items.length/l.value);const t=(c.value-1)*l.value,s=c.value*l.value;i.items=a.items.slice(t,s)})).catch((e=>{console.log(e.message)}))})),(0,s.Xn)((()=>{o.value=Math.ceil(a.items.length/l.value);const e=(c.value-1)*l.value,t=c.value*l.value;i.items=a.items.slice(e,t);let s=document.getElementById("previous"),d=document.getElementById("next");1===c.value?s.classList.add("disabled"):s.classList.remove("disabled"),o.value===c.value?d.classList.add("disabled"):d.classList.remove("disabled")})),(0,s.YP)((()=>a.items),(()=>{console.log("products.items changed"),o.value=Math.ceil(a.items.length/l.value);const e=(c.value-1)*l.value,t=c.value*l.value;i.items=a.items.slice(e,t)}),{deep:!0}),{...(0,U.BK)(a),paginatedItems:i,totalPages:o,changePage:d,currentPage:c,itemsPerPage:l,goPreviousPage:u,goNextPage:p,goAddProduct:n,deleteProduct:m,editProduct:r,saveProductId:v}}},G=a(3744);const J=(0,G.Z)(F,[["render",S]]);var O=J}}]);
//# sourceMappingURL=903.97590259.js.map