import{a as o}from"./p-6135d661.js";import{s as e}from"./p-86fd1a31.js";import{s as i}from"./p-863940e9.js";import{r as l,c as t}from"./p-1f60f497.js";import{a as d}from"./p-401e165e.js";const u=()=>{var i;return o({path:`surecart/v1/checkouts/${e.checkout_id}/offer_upsell/${null===(i=e.upsell)||void 0===i?void 0:i.id}`,method:"POST",keepalive:!0})},r=async()=>{try{if(!e.checkout_id||"busy"===e.loading)return;e.loading="busy",l();const{checkout:i,...o}=await n({preview:!0});e.checkout=i,e.line_item=o}catch(i){if(console.error(i),((null==i?void 0:i.additional_errors)||[]).find((e=>{var i,o,l;return null===(l=null===(o=null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.options)||void 0===o?void 0:o.purchasable_statuses)||void 0===l?void 0:l.includes("out_of_stock")})))return t({code:"out_of_stock",message:wp.i18n.__("Apologies, this is currently out of stock.","surecart")});if(((null==i?void 0:i.additional_errors)||[]).find((e=>"line_item.upsell.expired"===(null==e?void 0:e.code))))return e.loading="idle",t({code:"expired",message:wp.i18n.__("This offer has expired.","surecart")}),c();t(i)}finally{e.loading="idle"}},s=async()=>{try{if(!e.checkout_id||"busy"===e.loading)return;e.loading="busy",l();const{checkout:i}=await n({preview:!1});v(i)}catch(i){e.loading="idle",t(i)}},c=async()=>{var u,r,c,n,s,a;try{if(!e.checkout_id||"busy"===e.loading)return;e.loading="busy",l();const t=await o({path:d(`surecart/v1/checkouts/${e.checkout_id}/decline_upsell/${null===(u=e.upsell)||void 0===u?void 0:u.id}`,{expand:["checkout","checkout.current_upsell","fees"]}),method:"POST",data:{...null===(c=i[null===(r=e.product)||void 0===r?void 0:r.id])||void 0===c?void 0:c.line_item,price_id:null===(s=null===(n=e.upsell)||void 0===n?void 0:n.price)||void 0===s?void 0:s.id,upsell:null===(a=e.upsell)||void 0===a?void 0:a.id,checkout:e.checkout_id}});v(t)}catch(i){e.loading="idle",t(i)}},n=l=>{var t,u,r,c,n;return o({path:d("surecart/v1/line_items/upsell",{...l,expand:["checkout","checkout.current_upsell","checkout.manual_payment_method","fees","line_item","line_item.price"]}),method:"POST",data:{...null===(u=i[null===(t=e.product)||void 0===t?void 0:t.id])||void 0===u?void 0:u.line_item,price_id:null===(c=null===(r=e.upsell)||void 0===r?void 0:r.price)||void 0===c?void 0:c.id,upsell:null===(n=e.upsell)||void 0===n?void 0:n.id,checkout:e.checkout_id}})},v=i=>{var o,l,t,u,r;if(!(null===(o=i.current_upsell)||void 0===o?void 0:o.permalink)||(null===(l=null==i?void 0:i.current_upsell)||void 0===l?void 0:l.permalink)===(null===(t=e.upsell)||void 0===t?void 0:t.permalink))return e.loading="complete";e.loading="redirecting",window.location.assign(d(null===(u=i.current_upsell)||void 0===u?void 0:u.permalink,{sc_checkout_id:null===(r=e.checkout)||void 0===r?void 0:r.id,sc_form_id:e.form_id}))};export{s as a,c as d,r as p,u as t};