"use strict";const mutations=require("./mutations-757d8d21.js"),mutations$1=require("./mutations-11c8f9a8.js"),index=require("./index-2f2cb68c.js"),fetch=require("./fetch-aaab7645.js"),addQueryArgs=require("./add-query-args-49dcb630.js");var _a;const clearCheckout=()=>{var t;mutations.clearCheckout(mutations.state.formId,mutations.state.mode,null===(t=mutations.state.checkout)||void 0===t?void 0:t.id)},lockCheckout=t=>mutations.state.locks=[...mutations.state.locks,t],unLockCheckout=(t="")=>mutations.state.locks=t?mutations.state.locks.filter((e=>e!==t)):[],updateCheckoutLineItem=async({id:t,data:e})=>{try{mutations.updateFormState("FETCH"),mutations.state.checkout=await index.updateLineItem({id:t,data:e}),mutations.updateFormState("RESOLVE")}catch(t){console.error(t),mutations$1.createErrorNotice(t),mutations.updateFormState("REJECT")}},removeCheckoutLineItem=async t=>{try{mutations.updateFormState("FETCH"),mutations.state.checkout=await index.removeLineItem({checkoutId:mutations.state.checkout.id,itemId:t}),mutations.updateFormState("RESOLVE")}catch(t){console.error(t),mutations$1.createErrorNotice(t),mutations.updateFormState("REJECT")}},addCheckoutLineItem=async t=>{try{mutations.updateFormState("FETCH"),mutations.state.checkout=await index.addLineItem({checkout:mutations.state.checkout,data:t,live_mode:"live"===(null===mutations.state||void 0===mutations.state?void 0:mutations.state.mode)}),mutations.updateFormState("RESOLVE")}catch(t){console.error(t),mutations$1.createErrorNotice(t),mutations.updateFormState("REJECT")}},trackOrderBump=t=>{var e,o,a;(null===(e=mutations.state.checkout)||void 0===e?void 0:e.id)&&fetch.apiFetch({path:addQueryArgs.addQueryArgs(`surecart/v1/checkouts/${mutations.state.checkout.id}/offer_bump/${t}`,{t:Date.now(),...!!(null===(a=null===(o=null===mutations.state||void 0===mutations.state?void 0:mutations.state.checkout)||void 0===o?void 0:o.invoice)||void 0===a?void 0:a.id)&&{type:"open_invoice"}}),method:"POST",keepalive:!0})};window.sc={...(null===window||void 0===window?void 0:window.sc)||{},checkout:{...(null===(_a=null===window||void 0===window?void 0:window.sc)||void 0===_a?void 0:_a.checkout)||{},addLineItem:addCheckoutLineItem}},exports.addCheckoutLineItem=addCheckoutLineItem,exports.clearCheckout=clearCheckout,exports.lockCheckout=lockCheckout,exports.removeCheckoutLineItem=removeCheckoutLineItem,exports.trackOrderBump=trackOrderBump,exports.unLockCheckout=unLockCheckout,exports.updateCheckoutLineItem=updateCheckoutLineItem;