import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{f as formBusy}from"./getters3.js";import{s as state}from"./mutations2.js";import{d as defineCustomElement$1}from"./sc-skeleton2.js";const scInvoiceMemoCss=":host{display:block}.invoice-memo{font-size:var(--sc-font-size-small);line-height:var(--sc-line-height-dense);color:var(--sc-input-label-color);display:grid;gap:5px}.invoice-memo__content{text-align:left;color:var(--sc-input-help-text-color)}",ScInvoiceMemoStyle0=scInvoiceMemoCss,ScLineItemInvoiceMemo=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.text=void 0}render(){var e;const t=null==state?void 0:state.checkout,o=(null===(e=null==t?void 0:t.invoice)||void 0===e?void 0:e.memo)||null;return o?formBusy()&&!(null==t?void 0:t.invoice)?h("div",null,h("sc-skeleton",{style:{width:"100px"}}),h("sc-skeleton",{style:{width:"200px"}})):h("div",{class:"invoice-memo"},h("div",{class:"invoice-memo__title"},this.text||wp.i18n.__("Memo","surecart")),h("div",{class:"invoice-memo__content"},o)):null}static get style(){return ScInvoiceMemoStyle0}},[1,"sc-invoice-memo",{text:[1]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-invoice-memo","sc-skeleton"].forEach((e=>{switch(e){case"sc-invoice-memo":customElements.get(e)||customElements.define(e,ScLineItemInvoiceMemo);break;case"sc-skeleton":customElements.get(e)||defineCustomElement$1()}}))}export{ScLineItemInvoiceMemo as S,defineCustomElement as d};