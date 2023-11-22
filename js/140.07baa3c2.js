"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[140],{5118:function(t,e,r){r.d(e,{l:function(){return o}});var c=r(9876);const o=(0,c.Q_)("backendinfotemp",{state:()=>({product:{id:"",productName:"",productDesc:"",productPrice:"",productStock:"",category:"",productImg:""},customer:{account:"",address:"",birth:"",email:"",fullName:"",id:"",lastLoginDate:"",phoneNumber:""},productId:""}),actions:{saveProduct(t){this.product.id=t.id,this.product.productName=t.productName,this.product.productDesc=t.productDesc,this.product.productPrice=t.productPrice,this.product.productStock=t.productStock,this.product.category=t.category,this.product.productImg=t.productImg},saveCustomer(t){this.customer.account=t.account,this.customer.address=t.address,this.customer.birth=t.birth,this.customer.email=t.email,this.customer.fullName=t.fullName,this.customer.id=t.id,this.customer.lastLoginDate=t.lastLoginDate,this.customer.phoneNumber="0"+t.phoneNumber},saveProductId(t){this.productId=t}}})},1140:function(t,e,r){r.r(e),r.d(e,{default:function(){return H}});var c=r(6252),o=r(9963);const s={class:"container-fluid"},d={class:"row"},l={class:"col-12 col-md-12"},u=(0,c._)("div",{class:"row"},[(0,c._)("div",{class:"col-12 m-3"},[(0,c._)("h2",null,[(0,c._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-pencil-fill",viewBox:"0 0 16 16"},[(0,c._)("path",{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"})]),(0,c.Uk)(" 編輯商品 ")])])],-1),i={class:"mb-3"},a=(0,c._)("label",{for:"newProductName",class:"form-label"},"商品名稱",-1),n={class:"mb-3"},p=(0,c._)("label",{for:"productDesc",class:"form-label"},"商品描述",-1),m={class:"mb-3"},b=(0,c._)("label",{for:"productPrice",class:"form-label"},"商品價格",-1),h={class:"mb-3"},v=(0,c._)("label",{for:"productStock",class:"form-label"},"商品庫存",-1),f={class:"mb-3"},_=(0,c._)("label",{for:"category",class:"form-label"},"商品類別",-1),g={class:"mb-3"},k=(0,c._)("label",{for:"productImg",class:"form-label"},"商品圖片",-1),y={class:"row"},w={class:"col-12 col-md-12"},P={key:0},D={key:1},S=(0,c._)("div",{class:"spinner-border",role:"status"},[(0,c._)("span",{class:"visually-hidden"},"Loading...")],-1),N=[S],I={key:0,class:"alert alert-success text-center",role:"alert"},V={key:1,class:"alert alert-danger",role:"alert"};function q(t,e,r,S,q,x){return(0,c.wg)(),(0,c.iD)("div",s,[(0,c._)("div",d,[(0,c._)("div",l,[u,(0,c._)("div",null,[(0,c._)("div",i,[a,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.productName=e),type:"text",class:"form-control",id:"newProductName",required:""},null,512),[[o.nr,t.productName]])]),(0,c._)("div",n,[p,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":e[1]||(e[1]=e=>t.productDesc=e),type:"text",class:"form-control",id:"productDesc",placeholder:"描述商品..."},null,512),[[o.nr,t.productDesc]])]),(0,c._)("div",m,[b,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":e[2]||(e[2]=e=>t.productPrice=e),type:"text",class:"form-control",id:"productPrice",required:""},null,512),[[o.nr,t.productPrice,void 0,{number:!0}]])]),(0,c._)("div",h,[v,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":e[3]||(e[3]=e=>t.productStock=e),type:"text",class:"form-control",id:"productStock",required:""},null,512),[[o.nr,t.productStock,void 0,{number:!0}]])]),(0,c._)("div",f,[_,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":e[4]||(e[4]=e=>t.category=e),type:"text",class:"form-control",id:"category",required:""},null,512),[[o.nr,t.category]])]),(0,c._)("div",g,[k,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":e[5]||(e[5]=e=>t.productImg=e),type:"text",class:"form-control",id:"productImg",placeholder:"請輸入網址",required:""},null,512),[[o.nr,t.productImg]])])]),(0,c._)("div",y,[(0,c._)("div",w,[(0,c._)("button",{id:"submitBtn",onClick:e[6]||(e[6]=(...t)=>S.submitEditProduct&&S.submitEditProduct(...t)),class:"btn btn-success w-100 mb-3"},[S.submiting?(0,c.kq)("",!0):((0,c.wg)(),(0,c.iD)("div",P," 新增商品 ")),S.submiting?((0,c.wg)(),(0,c.iD)("div",D,N)):(0,c.kq)("",!0)]),S.isSubmitSuccess?((0,c.wg)(),(0,c.iD)("div",I," 商品新增成功 ")):(0,c.kq)("",!0),S.submitFailed?((0,c.wg)(),(0,c.iD)("div",V," 商品新增失敗！請正確填寫每一欄位 ")):(0,c.kq)("",!0)])])])])])}r(7658);var x=r(2262),U=r(6154),L=r(5118),C=r(2201),E={name:"BackEndEditProduct",setup(){let t=(0,C.tv)(),e=(0,L.l)(),r=(0,x.iH)(!1),o=(0,x.iH)(!1),s=(0,x.iH)(!1),d=e.product;function l(){r.value=!0,this.submitFailed=!1;for(let t in d)if(""===d[t])return this.submitFailed=!0,void(r.value=!1);U.Z.post("/addproductentity",(0,x.IU)(d),{headers:{contentType:"application/jason"}}).then((()=>{s.value=!0,r.value=!1;for(let t in d)d[t]=""}))}return(0,c.YP)((()=>d.productPrice),(()=>{/^[1-9]\d*$/.test(d.productPrice)||(d.productPrice="")}),{deep:!0}),(0,c.YP)((()=>d.productStock),(()=>{/^[1-9]\d*$/.test(d.productStock)||(d.productStock="")}),{deep:!0}),(0,c.bv)((()=>{for(let e in d)""===d[e]&&t.push("/backenddashboard/products")})),{...(0,x.BK)(d),isSubmitSuccess:s,submitEditProduct:l,submiting:r,submitFailed:o}}},B=r(3744);const F=(0,B.Z)(E,[["render",q]]);var H=F}}]);
//# sourceMappingURL=140.07baa3c2.js.map