import{r as i,c as o,h as t,a as d}from"./p-e97fde0a.js";import{p as l}from"./p-9ef0f73f.js";import{s as e,o as s}from"./p-f3141d53.js";import{c as n,f as a}from"./p-123bd51b.js";import{c as v}from"./p-1f60f497.js";import{o as u}from"./p-393cb717.js";import"./p-03631502.js";import"./p-9dbc54d6.js";import"./p-d3366af3.js";import"./p-401e165e.js";import"./p-830ab1a3.js";import"./p-ec182234.js";import"./p-3f6362a4.js";import"./p-95325ec5.js";import"./p-6ec14893.js";import"./p-6135d661.js";const r=":host{display:block}.or{display:none;margin:var(--sc-form-section-spacing) 0}.request--loaded .or{display:block}";const h=r;const c=class{constructor(t){i(this,t);this.scFormSubmit=o(this,"scFormSubmit",7);this.scPaid=o(this,"scPaid",7);this.scPayError=o(this,"scPayError",7);this.scSetState=o(this,"scSetState",7);this.scPaymentRequestLoaded=o(this,"scPaymentRequestLoaded",7);this.scUpdateOrderState=o(this,"scUpdateOrderState",7);this.stripeAccountId=undefined;this.publishableKey=undefined;this.country="US";this.prices=undefined;this.label="total";this.amount=0;this.theme="dark";this.error=undefined;this.debug=false;this.loaded=false;this.debugError=undefined}async componentWillLoad(){if(!(this===null||this===void 0?void 0:this.publishableKey)||!(this===null||this===void 0?void 0:this.stripeAccountId)){return true}try{this.stripe=await l.loadStripe(this.publishableKey,{stripeAccount:this.stripeAccountId});this.elements=this.stripe.elements();this.paymentRequest=this.stripe.paymentRequest({country:this.country,requestShipping:true,requestPayerEmail:true,shippingOptions:[{id:"free",label:"Free Shipping",detail:"No shipping required",amount:0}],...this.getRequestObject(e===null||e===void 0?void 0:e.checkout)})}catch(i){console.log((i===null||i===void 0?void 0:i.message)||wp.i18n.__("Stripe could not be loaded","surecart"))}}handleOrderChange(){if(!this.paymentRequest)return;if(this.pendingEvent)return;this.paymentRequest.update(this.getRequestObject(e===null||e===void 0?void 0:e.checkout))}handleLoaded(){this.scPaymentRequestLoaded.emit(true)}handleErrorChange(){if(this.pendingEvent){this.pendingEvent.complete("error")}}async handleShippingChange(i){var o,t,d,l,s;const{shippingAddress:a,updateWith:v}=i;try{const i=await n({id:(o=e===null||e===void 0?void 0:e.checkout)===null||o===void 0?void 0:o.id,data:{shipping_address:{...(a===null||a===void 0?void 0:a.name)?{name:a===null||a===void 0?void 0:a.name}:{},...((t=a===null||a===void 0?void 0:a.addressLine)===null||t===void 0?void 0:t[0])?{line_1:(d=a===null||a===void 0?void 0:a.addressLine)===null||d===void 0?void 0:d[0]}:{},...((l=a===null||a===void 0?void 0:a.addressLine)===null||l===void 0?void 0:l[1])?{line_2:(s=a===null||a===void 0?void 0:a.addressLine)===null||s===void 0?void 0:s[1]}:{},...(a===null||a===void 0?void 0:a.city)?{city:a===null||a===void 0?void 0:a.city}:{},...(a===null||a===void 0?void 0:a.country)?{country:a===null||a===void 0?void 0:a.country}:{},...(a===null||a===void 0?void 0:a.postalCode)?{postal_code:a===null||a===void 0?void 0:a.postalCode}:{},...(a===null||a===void 0?void 0:a.region)?{state:a===null||a===void 0?void 0:a.region}:{}}}});v({status:"success",total:{amount:(i===null||i===void 0?void 0:i.amount_due)||0,label:wp.i18n.__("Total","surecart")}})}catch(i){i.updateWith({status:"invalid_shipping_address"})}}getName(i){var o,t,d,l,e;const s=Object.keys(this.prices||{}).filter((o=>{const t=this.prices[o];return t.product===i.price.product.id}));let n="";if(s.length>1){n=`${(t=(o=i===null||i===void 0?void 0:i.price)===null||o===void 0?void 0:o.product)===null||t===void 0?void 0:t.name} – ${(d=i===null||i===void 0?void 0:i.price)===null||d===void 0?void 0:d.name}`}else{n=(e=(l=i===null||i===void 0?void 0:i.price)===null||l===void 0?void 0:l.product)===null||e===void 0?void 0:e.name}return n}getRequestObject(i){var o;const t=(((o=i===null||i===void 0?void 0:i.line_items)===null||o===void 0?void 0:o.data)||[]).map((i=>({label:this.getName(i),amount:i.ad_hoc_amount!==null?i.ad_hoc_amount:i.subtotal_amount})));return{currency:e.currencyCode,total:{amount:(i===null||i===void 0?void 0:i.amount_due)||0,label:wp.i18n.__("Total","surecart")},displayItems:t}}componentDidLoad(){this.handleOrderChange();this.removeCheckoutListener=s("checkout",(()=>this.handleOrderChange()));if(!this.elements){return}const i=this.elements.create("paymentRequestButton",{paymentRequest:this.paymentRequest,style:{paymentRequestButton:{theme:this.theme}}});this.paymentRequest.on("paymentmethod",(i=>this.handlePaymentMethod(i)));this.paymentRequest.on("shippingaddresschange",(async i=>await this.handleShippingChange(i)));this.paymentRequest.canMakePayment().then((o=>{if(!o){if(location.protocol!=="https:"){if(this.debug){this.debugError=wp.i18n.__("You must serve this page over HTTPS to display express payment buttons.","surecart")}console.log("SSL needed to display payment buttons.")}else{if(this.debug){this.debugError=wp.i18n.__("You do not have any wallets set up in your browser.","surecart")}console.log("No wallets available.")}return}i.mount(this.request);this.loaded=true})).catch((i=>{console.error(i)}))}async handlePaymentMethod(i){var o,t,d,l,s;const{billing_details:u}=i===null||i===void 0?void 0:i.paymentMethod;const{shippingAddress:r}=i;try{this.scSetState.emit("FINALIZE");await n({id:(o=e===null||e===void 0?void 0:e.checkout)===null||o===void 0?void 0:o.id,data:{email:u===null||u===void 0?void 0:u.email,name:u===null||u===void 0?void 0:u.name,shipping_address:{...(r===null||r===void 0?void 0:r.name)?{name:r===null||r===void 0?void 0:r.name}:{},...((t=r===null||r===void 0?void 0:r.addressLine)===null||t===void 0?void 0:t[0])?{line_1:(d=r===null||r===void 0?void 0:r.addressLine)===null||d===void 0?void 0:d[0]}:{},...((l=r===null||r===void 0?void 0:r.addressLine)===null||l===void 0?void 0:l[1])?{line_2:(s=r===null||r===void 0?void 0:r.addressLine)===null||s===void 0?void 0:s[1]}:{},...(r===null||r===void 0?void 0:r.city)?{city:r===null||r===void 0?void 0:r.city}:{},...(r===null||r===void 0?void 0:r.country)?{country:r===null||r===void 0?void 0:r.country}:{},...(r===null||r===void 0?void 0:r.postalCode)?{postal_code:r===null||r===void 0?void 0:r.postalCode}:{},...(r===null||r===void 0?void 0:r.region)?{state:r===null||r===void 0?void 0:r.region}:{}}}});const v=await a({id:e===null||e===void 0?void 0:e.checkout.id,query:{form_id:e.formId},processor:{id:"stripe",manual:false}});this.scSetState.emit("PAYING");await this.confirmPayment(v,i);this.scSetState.emit("PAID");this.scPaid.emit();i.complete("success")}catch(o){console.error(o);this.scPayError.emit(o);v(o);i.complete("fail")}finally{this.confirming=false}}async confirmPayment(i,o){var t,d,l,e,s,n,a,v,u,r,h,c,p,f,m,y,b,g;if((i===null||i===void 0?void 0:i.status)!=="finalized")return;if(!((l=(d=(t=i===null||i===void 0?void 0:i.payment_intent)===null||t===void 0?void 0:t.processor_data)===null||d===void 0?void 0:d.stripe)===null||l===void 0?void 0:l.client_secret))return;if(!((n=(s=(e=i===null||i===void 0?void 0:i.payment_intent)===null||e===void 0?void 0:e.processor_data)===null||s===void 0?void 0:s.stripe)===null||n===void 0?void 0:n.type))return;if(!((a=i===null||i===void 0?void 0:i.payment_intent)===null||a===void 0?void 0:a.external_intent_id))return;if(this.confirming)return;this.confirming=true;let w;if(((r=(u=(v=i===null||i===void 0?void 0:i.payment_intent)===null||v===void 0?void 0:v.processor_data)===null||u===void 0?void 0:u.stripe)===null||r===void 0?void 0:r.type)=="setup"){w=await this.confirmCardSetup((c=(h=i===null||i===void 0?void 0:i.payment_intent)===null||h===void 0?void 0:h.processor_data)===null||c===void 0?void 0:c.stripe.client_secret,o)}else{w=await this.confirmCardPayment((f=(p=i===null||i===void 0?void 0:i.payment_intent)===null||p===void 0?void 0:p.processor_data)===null||f===void 0?void 0:f.stripe.client_secret,o)}if(w===null||w===void 0?void 0:w.error){throw w.error}if(((m=w===null||w===void 0?void 0:w.paymentIntent)===null||m===void 0?void 0:m.status)==="requires_action"||((y=w===null||w===void 0?void 0:w.paymentIntent)===null||y===void 0?void 0:y.status)==="requires_source_action"){const o=await this.stripe.confirmCardPayment((g=(b=i===null||i===void 0?void 0:i.payment_intent)===null||b===void 0?void 0:b.processor_data)===null||g===void 0?void 0:g.stripe.client_secret);if(o.error){throw o.error}return o}return w}confirmCardPayment(i,o){return this.stripe.confirmCardPayment(i,{payment_method:o.paymentMethod.id},{handleActions:false})}confirmCardSetup(i,o){return this.stripe.confirmCardSetup(i,{payment_method:o.paymentMethod.id},{handleActions:false})}disconnectedCallback(){this.removeCheckoutListener()}render(){return t("div",{key:"0e3e8d97f5c0c298eed9df29bad862cc39d0e652",class:{request:true,"request--loaded":this.loaded}},this.debug&&this.debugError&&t("div",{key:"5254e882fb3239550bac1aaa4ff641d480ba9a49"},t("slot",{key:"2931e7f52ed3137cae4451f82cadcec48e17617a",name:"debug-fallback"}),t("sc-alert",{key:"7565c851cf20f10244232d0f3fd4dab545c24136",type:"info",open:true},t("span",{key:"4d439acbcbbee078e5b03d3cb1707abccaf8be4c",slot:"title"},wp.i18n.__("Express Payment","surecart")),this.debugError)),t("div",{key:"d4b67ae676d5dc6c0e64b9015e90f266f4358cd4",class:"sc-payment-request-button",part:"button",ref:i=>this.request=i}))}get el(){return d(this)}static get watchers(){return{loaded:["handleLoaded"],error:["handleErrorChange"]}}};u(c,["prices"],false);c.style=h;export{c as sc_stripe_payment_request};
//# sourceMappingURL=p-5e8135e7.entry.js.map