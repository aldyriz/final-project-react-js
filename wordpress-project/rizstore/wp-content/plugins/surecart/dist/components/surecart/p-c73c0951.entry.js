import{r as i,c as s,h as t,a as e}from"./p-e97fde0a.js";import{s as r}from"./p-830ab1a3.js";import{s as o}from"./p-f3141d53.js";import{f as a,a as l}from"./p-ff10bfbf.js";import{s as n,b as c,g as p,a as d,c as u}from"./p-c4264df6.js";import"./p-03631502.js";import"./p-9dbc54d6.js";import"./p-d3366af3.js";import"./p-401e165e.js";import"./p-ec182234.js";import"./p-3f6362a4.js";import"./p-95325ec5.js";import"./p-6ec14893.js";const m=":host{display:block;font-family:var(--sc-font-sans);font-size:var(--sc-checkout-font-size, 16px)}.collapse-link{display:flex;align-items:center;gap:0.35em}.summary__content--empty{display:none}.collapse-link__icon{width:18px;height:18px;color:var(--sc-order-collapse-link-icon-color, var(--sc-color-gray-500))}.item__product+.item__product{margin-top:20px}.empty{color:var(--sc-order-summary-color, var(--sc-color-gray-500))}.price{display:inline-block;opacity:0;visibility:hidden;transform:translateY(5px);transition:var(--sc-input-transition, var(--sc-transition-medium)) visibility ease, var(--sc-input-transition, var(--sc-transition-medium)) opacity ease, var(--sc-input-transition, var(--sc-transition-medium)) transform ease}.price--collapsed{opacity:1;visibility:visible;transform:translateY(0)}.summary{position:relative;user-select:none;cursor:pointer}.summary .collapse-link__icon{transition:transform 0.25s ease-in-out}.summary .scratch-price{text-decoration:line-through;color:var(--sc-color-gray-500);font-size:var(--sc-font-size-small);margin-right:var(--sc-spacing-xx-small)}.summary--open .collapse-link__icon{transform:rotate(180deg)}::slotted(*){margin:4px 0 !important}::slotted(sc-divider){margin:16px 0 !important}sc-line-item~sc-line-item{margin-top:14px}.total-price{white-space:nowrap}";const h=m;const v=class{constructor(t){i(this,t);this.scShow=s(this,"scShow",7);this.scHide=s(this,"scHide",7);this.order=undefined;this.busy=undefined;this.orderSummaryText=wp.i18n.__("Summary","surecart");this.invoiceSummaryText=wp.i18n.__("Invoice Summary","surecart");this.collapsible=false;this.collapsedOnMobile=false;this.collapsedOnDesktop=undefined;this.collapsed=false}isMobileScreen(){var i,s;const t=(i=document.body)===null||i===void 0?void 0:i.getClientRects();return(t===null||t===void 0?void 0:t.length)&&((s=t[0])===null||s===void 0?void 0:s.width)<781}componentWillLoad(){if(this.isMobileScreen()){this.collapsed=this.collapsed||this.collapsedOnMobile}else{this.collapsed=this.collapsed||this.collapsedOnDesktop}this.handleOpenChange()}handleClick(i){i.preventDefault();if(this.empty()&&!a())return;this.collapsed=!this.collapsed}empty(){var i,s,t,e;return!((t=(s=(i=o.checkout)===null||i===void 0?void 0:i.line_items)===null||s===void 0?void 0:s.pagination)===null||t===void 0?void 0:t.count)||(((e=o===null||o===void 0?void 0:o.checkout)===null||e===void 0?void 0:e.live_mode)?(o===null||o===void 0?void 0:o.mode)==="test":(o===null||o===void 0?void 0:o.mode)==="live")}getSummaryText(){var i,s;if((s=(i=o.checkout)===null||i===void 0?void 0:i.invoice)===null||s===void 0?void 0:s.id){return this.invoiceSummaryText||wp.i18n.__("Invoice Summary","surecart")}return this.orderSummaryText||wp.i18n.__("Summary","surecart")}renderHeader(){var i,s,e,n,c,p,d,u,m,h,v;if((a()||l())&&!((e=(s=(i=o.checkout)===null||i===void 0?void 0:i.line_items)===null||s===void 0?void 0:s.data)===null||e===void 0?void 0:e.length)){return t("sc-line-item",null,t("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),t("sc-skeleton",{slot:"price",style:{width:"70px",display:"inline-block","--border-radius":"6px"}}),t("sc-skeleton",{slot:"currency",style:{width:"30px",display:"inline-block"}}))}return t("sc-line-item",{style:{"--price-size":"var(--sc-font-size-x-large)"}},t("span",{class:"collapse-link",slot:"title",onClick:i=>this.handleClick(i),tabIndex:0,"aria-label":wp.i18n.sprintf(wp.i18n.__("Order Summary %s","surecart"),this.collapsed?wp.i18n.__("collapsed","surecart"):wp.i18n.__("expanded","surecart")),onKeyDown:i=>{if(i.key===" "){this.handleClick(i);r(wp.i18n.sprintf(wp.i18n.__("Order Summary %s","surecart"),this.collapsed?wp.i18n.__("collapsed","surecart"):wp.i18n.__("expanded","surecart")),"assertive")}}},this.getSummaryText(),t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"collapse-link__icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}))),t("span",{slot:"description"},t("slot",{name:"description"})),((n=o.checkout)===null||n===void 0?void 0:n.total_amount)!==((c=o.checkout)===null||c===void 0?void 0:c.amount_due)?t("span",{slot:"price",class:{price:true,"price--collapsed":this.collapsed}},t("sc-format-number",{class:"total-price",type:"currency",currency:(p=o.checkout)===null||p===void 0?void 0:p.currency,value:(d=o.checkout)===null||d===void 0?void 0:d.amount_due})):t("span",{slot:"price",class:{price:true,"price--collapsed":this.collapsed}},!!((u=o.checkout)===null||u===void 0?void 0:u.total_savings_amount)&&t("sc-format-number",{class:"total-price scratch-price",type:"currency",value:-((m=o.checkout)===null||m===void 0?void 0:m.total_savings_amount)+((h=o.checkout)===null||h===void 0?void 0:h.total_amount),currency:((v=o.checkout)===null||v===void 0?void 0:v.currency)||"usd"}),t("sc-total",{class:"total-price",total:"total",order:o.checkout})))}async handleOpenChange(){if(!this.collapsed){this.scShow.emit();await c(this.body);this.body.hidden=false;this.body.style.overflow="hidden";const{keyframes:i,options:s}=p(this.el,"summary.show");await d(this.body,u(i,this.body.scrollHeight),s);this.body.style.height="auto";this.body.style.overflow="visible"}else{this.scHide.emit();await c(this.body);this.body.style.overflow="hidden";const{keyframes:i,options:s}=p(this.el,"summary.hide");await d(this.body,u(i,this.body.scrollHeight),s);this.body.hidden=true;this.body.style.height="auto";this.body.style.overflow="visible"}}render(){return t("div",{key:"2ae437329482f57d435583148a674b458dd3ef49",class:{summary:true,"summary--open":!this.collapsed}},this.collapsible&&this.renderHeader(),t("div",{key:"d564d8c19d31812788c1f109f256f3a53e217b7a",ref:i=>this.body=i,class:{summary__content:true,"summary__content--empty":this.empty()&&!a()}},t("slot",{key:"28814560b628989d65877253c603d16a064e1c26"})),this.empty()&&!a()&&t("p",{key:"fcc3be315d9b0a5f3e297de3926c912460fa4d26",class:"empty"},wp.i18n.__("Your cart is empty.","surecart")))}get el(){return e(this)}static get watchers(){return{collapsed:["handleOpenChange"]}}};n("summary.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"ease"}});n("summary.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"ease"}});v.style=h;export{v as sc_order_summary};
//# sourceMappingURL=p-c73c0951.entry.js.map