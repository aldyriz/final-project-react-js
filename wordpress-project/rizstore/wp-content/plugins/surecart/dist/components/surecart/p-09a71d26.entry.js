import{r as c,h as e}from"./p-e97fde0a.js";import{i as t}from"./p-6ec14893.js";import{a}from"./p-401e165e.js";import"./p-3f6362a4.js";const s=":host{display:block}";const o=s;const i=class{constructor(e){c(this,e);this.heading=undefined;this.price=undefined;this.busy=false}async handleSubmit(c){const{ad_hoc_amount:e}=await c.target.getFormJson();this.busy=true;return window.location.assign(a(window.location.href,{action:"confirm",ad_hoc_amount:e}))}render(){return e("sc-dashboard-module",{key:"3ade2f39d61b46b9336298aef49749a5c439b17c",heading:this.heading||wp.i18n.__("Enter An Amount","surecart"),class:"subscription-switch"},e("sc-card",{key:"b946e77f2709a72da2e9637d94a908213c41206d"},e("sc-form",{key:"1cc306fc2fe563831cd82d3bb8e364816081281d",onScSubmit:c=>this.handleSubmit(c)},e("sc-price-input",{key:"841df4948826d276c6b9f11826731a36252959a1",label:"Amount",name:"ad_hoc_amount",autofocus:true,required:true},e("span",{key:"a4bc62244096e571999c3fd82986ee5387a61d8b",slot:"suffix",style:{opacity:"0.75"}},t(this.price))),e("sc-button",{key:"d7bd28e7cb83bd25e36f2ab7c2ca9c8eaaf6f6db",type:"primary",full:true,submit:true,loading:this.busy},wp.i18n.__("Next","surecart")," ",e("sc-icon",{key:"15fbca3071a34cc6ed315152b38ca99995945c46",name:"arrow-right",slot:"suffix"})))),this.busy&&e("sc-block-ui",{key:"4a48f772cf6904d832d935cd53b652e47cbf445d",style:{zIndex:"9"}}))}};i.style=o;export{i as sc_subscription_ad_hoc_confirm};
//# sourceMappingURL=p-09a71d26.entry.js.map