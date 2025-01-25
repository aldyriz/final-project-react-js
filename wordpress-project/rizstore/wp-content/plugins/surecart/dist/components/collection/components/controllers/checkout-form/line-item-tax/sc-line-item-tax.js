import{h,Fragment}from"@stencil/core";import{sprintf,__}from"@wordpress/i18n";import{openWormhole}from"stencil-wormhole";export class ScLineItemTax{constructor(){this.order=void 0,this.loading=void 0}renderLabel(){var e,t,r;let i=sprintf(__("Estimated %s","surecart"),(null===(e=null==this?void 0:this.order)||void 0===e?void 0:e.tax_label)||"");return"calculated"===(null===(t=null==this?void 0:this.order)||void 0===t?void 0:t.tax_status)&&(i=(null===(r=this.order)||void 0===r?void 0:r.tax_label)||""),h(Fragment,null,`${__("Tax:","surecart")} ${i}`,this.renderPercent())}renderPercent(){var e;return(null===(e=this.order)||void 0===e?void 0:e.tax_percent)?h(Fragment,null,"(",this.order.tax_percent,"%",")"):""}render(){var e,t,r,i,o,l,n;return(null===(e=null==this?void 0:this.order)||void 0===e?void 0:e.tax_amount)?h("sc-line-item",null,h("span",{slot:"description"},this.renderLabel()),(null===(t=this.order)||void 0===t?void 0:t.tax_exclusive_amount)&&h("span",{slot:"price"},h("sc-format-number",{type:"currency",currency:(null===(r=null==this?void 0:this.order)||void 0===r?void 0:r.currency)||"usd",value:null===(i=null==this?void 0:this.order)||void 0===i?void 0:i.tax_exclusive_amount})),(null===(o=this.order)||void 0===o?void 0:o.tax_inclusive_amount)&&h("span",{slot:"price-description"},"(",h("sc-format-number",{type:"currency",currency:(null===(l=null==this?void 0:this.order)||void 0===l?void 0:l.currency)||"usd",value:null===(n=null==this?void 0:this.order)||void 0===n?void 0:n.tax_inclusive_amount})," ",__("included","surecart"),")")):null}static get is(){return"sc-line-item-tax"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-line-item-tax.scss"]}}static get styleUrls(){return{$:["sc-line-item-tax.css"]}}static get properties(){return{order:{type:"unknown",mutable:!1,complexType:{original:"Checkout",resolved:"Checkout",references:{Checkout:{location:"import",path:"../../../../types",id:"src/types.ts::Checkout"}}},required:!1,optional:!1,docs:{tags:[],text:""}},loading:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"loading",reflect:!1}}}}openWormhole(ScLineItemTax,["order","loading"],!1);