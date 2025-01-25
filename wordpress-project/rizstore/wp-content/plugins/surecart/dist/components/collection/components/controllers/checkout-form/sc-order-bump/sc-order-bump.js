import{h}from"@stencil/core";import{sprintf,__,_x}from"@wordpress/i18n";import{speak}from"@wordpress/a11y";import{getFormattedPrice,intervalString}from"../../../../functions/price";import{state as checkoutState}from"../../../../store/checkout/index";import{addCheckoutLineItem,removeCheckoutLineItem,trackOrderBump}from"../../../../store/checkout/mutations";export class ScOrderBump{constructor(){this.bump=void 0,this.showControl=void 0}lineItem(){var e,i,t;return null===(t=null===(i=null===(e=null==checkoutState?void 0:checkoutState.checkout)||void 0===e?void 0:e.line_items)||void 0===i?void 0:i.data)||void 0===t?void 0:t.find((e=>{var i;return(null==e?void 0:e.bump)===(null===(i=this.bump)||void 0===i?void 0:i.id)}))}updateLineItem(){var e,i,t,o;const r=(null===(e=this.bump.price)||void 0===e?void 0:e.id)||(null===(i=this.bump)||void 0===i?void 0:i.price);if(this.lineItem())return removeCheckoutLineItem(null===(t=this.lineItem())||void 0===t?void 0:t.id),void speak(__("Order bump Removed.","surecart"));addCheckoutLineItem({bump:null===(o=this.bump)||void 0===o?void 0:o.id,price:r,quantity:1}),speak(__("Order bump applied.","surecart"))}componentDidLoad(){var e;trackOrderBump(null===(e=this.bump)||void 0===e?void 0:e.id)}newPrice(){var e,i,t,o,r,d;let a=null,n=(null===(i=null===(e=this.bump)||void 0===e?void 0:e.price)||void 0===i?void 0:i.amount)||0;if((null===(t=this.bump)||void 0===t?void 0:t.amount_off)&&(a=Math.max(0,n-(null===(o=this.bump)||void 0===o?void 0:o.amount_off))),null===(r=this.bump)||void 0===r?void 0:r.percent_off){const e=n*((null===(d=this.bump)||void 0===d?void 0:d.percent_off)/100);a=Math.max(0,n-e)}return a}renderInterval(){var e;const i=intervalString(null===(e=this.bump)||void 0===e?void 0:e.price,{labels:{interval:"/",period:__("for","surecart")}});return i.trim().length?h("span",{class:"bump__interval"},i):null}renderPrice(){var e,i,t,o,r,d,a,n,u,c,l;return h("div",{slot:"description",class:{bump__price:!0,"bump__price--has-discount":!!(null===(e=this.bump)||void 0===e?void 0:e.percent_off)||!!(null===(i=this.bump)||void 0===i?void 0:i.amount_off)},part:"price"},h("span",{"aria-label":
/** translators: %s: old price */
sprintf(__("Originally priced at %s.","surecart"),getFormattedPrice({amount:null===(o=null===(t=this.bump)||void 0===t?void 0:t.price)||void 0===o?void 0:o.amount,currency:null===(d=null===(r=this.bump)||void 0===r?void 0:r.price)||void 0===d?void 0:d.currency}))},h("sc-format-number",{type:"currency",class:"bump__original-price",value:null===(n=null===(a=this.bump)||void 0===a?void 0:a.price)||void 0===n?void 0:n.amount,currency:null===(c=null===(u=this.bump)||void 0===u?void 0:u.price)||void 0===c?void 0:c.currency})," "),h("span",null,h("span",{"aria-hidden":"true"},0===this.newPrice()&&__("Free","surecart"),null!==this.newPrice()&&this.newPrice()>0&&h("sc-format-number",{type:"currency",class:"bump__new-price",value:this.newPrice(),currency:(null===(l=this.bump)||void 0===l?void 0:l.price).currency}),this.renderInterval())))}renderDiscount(){var e,i,t,o,r,d,a,n;return(null===(e=this.bump)||void 0===e?void 0:e.amount_off)?h("div",{class:"bump__tag","aria-label":
/** translators: %1$s: amount off, %2$s: currency */
sprintf(__("You save %1$s%2$s.","surecart"),null===(i=this.bump)||void 0===i?void 0:i.amount_off,(null===(t=this.bump)||void 0===t?void 0:t.price).currency)},h("span",{"aria-hidden":"true"},_x("Save","Save money","surecart")," ",h("sc-format-number",{type:"currency",value:null===(o=this.bump)||void 0===o?void 0:o.amount_off,currency:(null===(r=this.bump)||void 0===r?void 0:r.price).currency}))):(null===(d=this.bump)||void 0===d?void 0:d.percent_off)?h("div",{class:"bump__tag","aria-label":
/** translators: %s: amount percent off */
sprintf(__("You save %s%%.","surecart"),null===(a=this.bump)||void 0===a?void 0:a.percent_off)},h("span",{"aria-hidden":"true"},sprintf(
/** translators: %s: amount percent off */
_x("Save %s%%","Save money","surecart"),null===(n=this.bump)||void 0===n?void 0:n.percent_off))):void 0}render(){var e,i,t,o,r,d,a,n,u,c,l,s,p,v,m,b,f,_,y,k;const g=null===(i=null===(e=this.bump)||void 0===e?void 0:e.price)||void 0===i?void 0:i.product;return h("sc-choice",{key:"d3f759f4a1fa7540175444d3615565f3f51e20f5",value:null===(t=this.bump)||void 0===t?void 0:t.id,type:"checkbox",showControl:this.showControl,checked:!!this.lineItem(),onClick:e=>{e.preventDefault(),e.stopImmediatePropagation(),this.updateLineItem()},onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopImmediatePropagation(),this.updateLineItem())},exportparts:"base, control, checked-icon, title"},h("div",{key:"d2111a92fb51deb2189dd3c619b53dd60a9a558e",part:"base-content",class:"bump"},h("div",{key:"279e9696eda88d8b4ef6be3c03e037b9ad72b030",class:"bump__text"},h("div",{key:"f7ffa9492f3c7c0e262a6be002cca5fe2de97e6c",class:"bump__title","aria-label":sprintf(
/* translators: %s: order bump name */
__("Product: %s.","surecart"),(null===(r=null===(o=this.bump)||void 0===o?void 0:o.metadata)||void 0===r?void 0:r.cta)||(null===(d=this.bump)||void 0===d?void 0:d.name)||(null==g?void 0:g.name))},h("span",{key:"2eba86ba66b1d99d67feac28ccac2c3c71eb0b0c","aria-hidden":"true"},(null===(n=null===(a=this.bump)||void 0===a?void 0:a.metadata)||void 0===n?void 0:n.cta)||(null===(u=this.bump)||void 0===u?void 0:u.name)||(null==g?void 0:g.name))),h("div",{key:"339722b28ec13f8bfaa1c73ee3922c1cce33ace6",class:"bump__amount"},h("span",{key:"2b8a8e918179ec23714e1fd4566eb4011528c4b0"},this.renderPrice()),h("span",{key:"3535809466cef7e8d772757185c4951dcc8c5889"},this.renderDiscount())))),(null===(l=null===(c=this.bump)||void 0===c?void 0:c.metadata)||void 0===l?void 0:l.description)&&h("div",{key:"363983d54142f1900052693bcfb407dfae576f2b",slot:"footer",class:"bump__product--wrapper"},h("sc-divider",{key:"bdaac3cb179b6a2450c87005ed53fdcc3a97a961",style:{"--spacing":"var(--sc-spacing-medium)"}}),h("div",{key:"e70ff2a560abfe3cd7e50e39cdb13ba0fef491de",class:"bump__product"},!!(null===(s=null==g?void 0:g.line_item_image)||void 0===s?void 0:s.src)&&h("img",{key:"488a15fe40faf1969556b8b8a5ac99b7e40f15db",...null==g?void 0:g.line_item_image,class:"bump__image"}),h("div",{key:"6b60fc8d38cfa016ea357a7523a5ba9423b0dfc3",class:"bump__product-text"},!!(null===(v=null===(p=this.bump)||void 0===p?void 0:p.metadata)||void 0===v?void 0:v.cta)&&h("div",{key:"7c244e1f613fbd6d134095cbce444516125fcaa5",class:"bump__product-title","aria-hidden":"true"},this.bump.name||(null==g?void 0:g.name)),!!(null===(b=null===(m=this.bump)||void 0===m?void 0:m.metadata)||void 0===b?void 0:b.description)&&h("div",{key:"7fce26e7b915fb6d6f8510cae27735c961560e89",class:"bump__product-description","aria-label":sprintf(
/* translators: %s: Product description */
__("Product description: %s.","surecart"),null===(_=null===(f=this.bump)||void 0===f?void 0:f.metadata)||void 0===_?void 0:_.description)},h("span",{key:"ba69c5a5d900bf529f8809a0f5ce433cfbff4a98","aria-hidden":"true"},null===(k=null===(y=this.bump)||void 0===y?void 0:y.metadata)||void 0===k?void 0:k.description))))))}static get is(){return"sc-order-bump"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-order-bump.scss"]}}static get styleUrls(){return{$:["sc-order-bump.css"]}}static get properties(){return{bump:{type:"unknown",mutable:!1,complexType:{original:"Bump",resolved:"Bump",references:{Bump:{location:"import",path:"../../../../types",id:"src/types.ts::Bump"}}},required:!1,optional:!1,docs:{tags:[],text:"The bump"}},showControl:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Should we show the controls"},attribute:"show-control",reflect:!0}}}}