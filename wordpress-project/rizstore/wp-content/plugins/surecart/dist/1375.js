"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[1375],{4805:function(e,t,r){r.d(t,{a:function(){return p},b:function(){return u},g:function(){return l}});var n=r(4467),o=r(296);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return s(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var _n=0,n=function(){};return{s:n,n:function(){return _n>=e.length?{done:!0}:{done:!1,value:e[_n++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function u(e){for(var t,r="",n=Object.entries(e);t=n.shift();){var i=t,a=(0,o.A)(i,2),s=a[0],u=a[1];if(Array.isArray(u)||u&&u.constructor===Object){var d,l=c(Object.entries(u).reverse());try{for(l.s();!(d=l.n()).done;){var p=(0,o.A)(d.value,2),f=p[0],h=p[1];n.unshift(["".concat(s,"[").concat(f,"]"),h])}}catch(e){l.e(e)}finally{l.f()}}else void 0!==u&&(null===u&&(u=""),r+="&"+[s,u].map(encodeURIComponent).join("="))}return r.substr(1)}function d(e){try{return decodeURIComponent(e)}catch(t){return e}}function l(e){return(function(e){var t;try{t=new URL(e,"http://example.com").search.substring(1)}catch(e){}if(t)return t}(e)||"").replace(/\+/g,"%20").split("&").reduce((function(e,t){var r=t.split("=").filter(Boolean).map(d),n=(0,o.A)(r,2),i=n[0],c=n[1],s=void 0===c?"":c;return i&&function(e,t,r){for(var n=t.length,o=n-1,i=0;i<n;i++){var c=t[i];!c&&Array.isArray(e)&&(c=e.length.toString()),c=["__proto__","constructor","prototype"].includes(c)?c.toUpperCase():c;var s=!isNaN(Number(t[i+1]));e[c]=i===o?r:e[c]||(s?[]:{}),Array.isArray(e[c])&&!s&&(e[c]=a({},e[c])),e=e[c]}}(e,i.replace(/\]/g,"").split("["),s),e}),Object.create(null))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(!t||!Object.keys(t).length)return e;var r=e,n=e.indexOf("?");return-1!==n&&(t=Object.assign(l(e),t),r=r.substr(0,n)),r+"?"+u(t)}},3:function(e,t,r){r.d(t,{a:function(){return F},h:function(){return B}});var n=r(467),o=r(45),i=r(296),a=r(4467),c=r(9280),s=r.n(c),u=r(4805),d=r(3506),l=["rest_route"],p=["path","url"],f=["url","path","data","parse"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){return void 0!==(0,d.g)(e,t)}function y(e){var t=e.split("?"),r=t[1],n=t[0];return r?n+"?"+r.split("&").map((function(e){return e.split("=")})).map((function(e){return e.map(decodeURIComponent)})).sort((function(e,t){return e[0].localeCompare(t[0])})).map((function(e){return e.map(encodeURIComponent)})).map((function(e){return e.join("=")})).join("&"):n}var w=function(e,t){var r,n,o=e.path;return"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(r=e.namespace.replace(/^\/|\/$/g,""),o=(n=e.endpoint.replace(/^\//,""))?r+"/"+n:r),delete e.namespace,delete e.endpoint,t(v(v({},e),{},{path:o}))};function b(e,t){return Promise.resolve(t?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}var g=function(e){return e.json?e.json():Promise.reject(e)},_=function(e){return function(e){if(!e)return{};var t=e.match(/<([^>]+)>; rel="next"/);return t?{next:t[1]}:{}}(e.headers.get("link")).next},O=function(e){var t=!!e.path&&-1!==e.path.indexOf("per_page=-1"),r=!!e.url&&-1!==e.url.indexOf("per_page=-1");return t||r},k=function(){var e=(0,n.A)(s().mark((function e(t,r){var n,i,a,c,d,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==t.parse){e.next=2;break}return e.abrupt("return",r(t));case 2:if(O(t)){e.next=4;break}return e.abrupt("return",r(t));case 4:return e.next=6,F(v(v({},(f={per_page:100},void 0,void 0,h=(s=t).path,m=s.url,v(v({},(0,o.A)(s,p)),{},{url:m&&(0,u.a)(m,f),path:h&&(0,u.a)(h,f)}))),{},{parse:!1}));case 6:return n=e.sent,e.next=9,g(n);case 9:if(i=e.sent,Array.isArray(i)){e.next=12;break}return e.abrupt("return",i);case 12:if(a=_(n)){e.next=15;break}return e.abrupt("return",i);case 15:c=[].concat(i);case 16:if(!a){e.next=27;break}return e.next=19,F(v(v({},t),{},{path:void 0,url:a,parse:!1}));case 19:return d=e.sent,e.next=22,g(d);case 22:l=e.sent,c=c.concat(l),a=_(d),e.next=16;break;case 27:return e.abrupt("return",c);case 28:case"end":return e.stop()}var s,f,h,m}),e)})));return function(_x,t){return e.apply(this,arguments)}}(),j=new Set(["PATCH","PUT","DELETE"]),P=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.resolve(function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?e:204===e.status?null:e.json?e.json():Promise.reject(e)}(e,t)).catch((function(e){return S(e,t)}))};function S(e){if(arguments.length>1&&void 0!==arguments[1]&&!arguments[1])throw e;return function(e){var t={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.")};if(!e||!e.json)throw t;return e.json().catch((function(){throw t}))}(e).then((function(e){var t={code:"unknown_error",message:wp.i18n.__("An unknown error occurred.")};throw e||t}))}var x,A,E,I,T,M,D,C={Accept:"application/json, */*;q=0.1"},U={credentials:"include"},N=[function(e,t){return"string"!=typeof e.url||m(e.url,"_locale")||(e.url=(0,u.a)(e.url,{_locale:"user"})),"string"!=typeof e.path||m(e.path,"_locale")||(e.path=(0,u.a)(e.path,{_locale:"user"})),t(e)},w,function(e,t){var r=e.method,n=void 0===r?"GET":r;return j.has(n.toUpperCase())&&(e=v(v({},e),{},{headers:v(v({},e.headers),{},{"X-HTTP-Method-Override":n,"Content-Type":"application/json"}),method:"POST"})),t(e)},k],R=function(e){if(e.status>=200&&e.status<300)return e;throw e},L=function(e){var t=e.url,r=e.path,n=e.data,i=e.parse,a=void 0===i||i,c=(0,o.A)(e,f),s=e.body,u=e.headers;return u=v(v({},C),u),n&&(s=JSON.stringify(n),u["Content-Type"]="application/json"),window.fetch(t||r||window.location.href,v(v(v({},U),c),{},{body:s,headers:u})).then((function(e){return Promise.resolve(e).then(R).catch((function(e){return S(e,a)})).then((function(e){return P(e,a)}))}),(function(e){if(e&&"AbortError"===e.name)throw e;throw{code:"fetch_error",message:wp.i18n.__("You are probably offline.")}}))};function F(e){return N.reduceRight((function(e,t){return function(r){return t(r,e)}}),L)(e).catch((function(t){return"rest_cookie_invalid_nonce"!==t.code?Promise.reject(t):window.fetch(F.nonceEndpoint).then(R).then((function(e){return e.text()})).then((function(t){return F.nonceMiddleware.nonce=t,F(e)}))}))}F.use=function(e){N.unshift(e)},F.setFetchHandler=function(e){L=e},F.createNonceMiddleware=function(e){var t=function e(t,r){var n=t.headers,o=void 0===n?{}:n;for(var i in o)if("x-wp-nonce"===i.toLowerCase()&&o[i]===e.nonce)return r(t);return r(v(v({},t),{},{headers:v(v({},o),{},{"X-WP-Nonce":e.nonce})}))};return t.nonce=e,t},F.createPreloadingMiddleware=function(e){var t=Object.fromEntries(Object.entries(e).map((function(e){var t=(0,i.A)(e,2),r=t[0],n=t[1];return[y(r),n]})));return function(e,r){var n=e.parse,i=void 0===n||n,a=e.path;if(!a&&e.url){var c=(0,u.g)(e.url),s=c.rest_route,d=(0,o.A)(c,l);"string"==typeof s&&(a=(0,u.a)(s,d))}if("string"!=typeof a)return r(e);var p=e.method||"GET",f=y(a);if("GET"===p&&t[f]){var h=t[f];return delete t[f],b(h,!!i)}if("OPTIONS"===p&&t[p]&&t[p][f]){var v=t[p][f];return delete t[p][f],b(v,!!i)}return r(e)}},F.createRootURLMiddleware=function(e){return function(t,r){return w(t,(function(t){var n,o=t.url,i=t.path;return"string"==typeof i&&(n=e,-1!==e.indexOf("?")&&(i=i.replace("?","&")),i=i.replace(/^\//,""),"string"==typeof n&&-1!==n.indexOf("?")&&(i=i.replace("?","&")),o=n+i),r(v(v({},t),{},{url:o}))}))}},F.fetchAllMiddleware=k,F.mediaUploadMiddleware=function(e,t){if(!function(e){var t=!!e.method&&"POST"===e.method;return(!!e.path&&-1!==e.path.indexOf("/wp/v2/media")||!!e.url&&-1!==e.url.indexOf("/wp/v2/media"))&&t}(e))return t(e);var r=0,n=function e(n){return r++,t({path:"/wp/v2/media/".concat(n,"/post-process"),method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch((function(){return r<5?e(n):(t({path:"/wp/v2/media/".concat(n,"?force=true"),method:"DELETE"}),Promise.reject())}))};return t(v(v({},e),{},{parse:!1})).catch((function(t){var r=t.headers.get("x-wp-upload-attachment-id");return t.status>=500&&t.status<600&&r?n(r).catch((function(){return!1!==e.parse?Promise.reject({code:"post_process",message:wp.i18n.__("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(t)})):S(t,e.parse)})).then((function(t){return P(t,e.parse)}))},F.createThemePreviewMiddleware=function(e){return function(t,r){if("string"==typeof t.url){var n=(0,d.g)(t.url,"wp_theme_preview");void 0===n?t.url=(0,u.a)(t.url,{wp_theme_preview:e}):""===n&&(t.url=(0,d.r)(t.url,"wp_theme_preview"))}if("string"==typeof t.path){var o=(0,d.g)(t.path,"wp_theme_preview");void 0===o?t.path=(0,u.a)(t.path,{wp_theme_preview:e}):""===o&&(t.path=(0,d.r)(t.path,"wp_theme_preview"))}return r(t)}},F.fetchAllMiddleware=null,F.use(F.createRootURLMiddleware((null===(A=null===(x=null===window||void 0===window?void 0:window.parent)||void 0===x?void 0:x.scData)||void 0===A?void 0:A.root_url)||(null===(E=null===window||void 0===window?void 0:window.scData)||void 0===E?void 0:E.root_url))),(null===(I=null===window||void 0===window?void 0:window.scData)||void 0===I?void 0:I.nonce)&&(F.nonceMiddleware=F.createNonceMiddleware(null===(T=null===window||void 0===window?void 0:window.scData)||void 0===T?void 0:T.nonce),F.use(F.nonceMiddleware)),(null===(M=null===window||void 0===window?void 0:window.scData)||void 0===M?void 0:M.nonce_endpoint)&&(F.nonceEndpoint=null===(D=null===window||void 0===window?void 0:window.scData)||void 0===D?void 0:D.nonce_endpoint),F.use((function(e,t){return e.path=(0,u.a)(e.path,{t:Date.now()}),t(e)})),F.use((function(e,t){var r=t(e);return r.catch((function(e){return"invalid_json"===e.code&&(e.message=wp.i18n.__("The response is not a valid JSON response.","surecart"),e.additional_errors=[{code:"invalid_json",message:wp.i18n.sprintf(/* translators: %s: URL to debug settings page */
wp.i18n.__("Please ensure that your site is not in debug mode as this may interfere with API responses. %s","surecart"),'<a href="'.concat("https://surecart.com/docs/is-not-a-valid-json-response/",'" target="_blank" rel="noopener noreferrer">').concat(wp.i18n.__("More Information","surecart"),"</a>"))}]),"checkout.finalize_error"===e.code&&(e.additional_errors=[{code:"checkout.finalize_error",message:e.message}],e.message=wp.i18n.__("We were not able to process this order","surecart")),Promise.reject(e)})),r}));var V=function(e){var t={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.","surecart")};if((null==e?void 0:e.code)&&(null==e?void 0:e.message))throw e;if(!e||!e.json)throw t;return e.json().catch((function(){throw t}))},B=function(){var e=(0,n.A)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(t);case 2:if("rest_cookie_invalid_nonce"===(r=e.sent).code){e.next=5;break}throw r;case 5:return e.abrupt("return",window.fetch(F.nonceEndpoint).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).then((function(e){return e.text()})).then((function(e){F.nonceMiddleware.nonce=e})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1546:function(e,t,r){r.d(t,{p:function(){return f}});var n={};function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(n,"__esModule",{value:!0});var i,a="https://js.stripe.com/v3",c=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,s="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",u=null,d=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==o(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"==typeof e.advancedFraudSignals)return e;throw new Error(t)},l=!1,p=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];l=!0;var n,o=Date.now();return(n=i,null!==u||(u=new Promise((function(e,t){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&n&&console.warn(s),window.Stripe)e(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(a,'"]')),t=0;t<e.length;t++){var r=e[t];if(c.test(r.src))return r}return null}();r&&n?console.warn(s):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(a).concat(t);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(r),r}(n)),r.addEventListener("load",(function(){window.Stripe?e(window.Stripe):t(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){t(new Error("Failed to load Stripe.js"))}))}catch(e){return void t(e)}else e(null)}))),u).then((function(e){return function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(n,r),n}(e,t,o)}))};p.setLoadParameters=function(e){if(l&&i){var t=d(e);if(Object.keys(t).reduce((function(t,r){var n;return t&&e[r]===(null===(n=i)||void 0===n?void 0:n[r])}),!0))return}if(l)throw new Error("You cannot change load parameters after calling loadStripe");i=d(e)},n.loadStripe=p;var f=n},3506:function(e,t,r){r.d(t,{g:function(){return o},r:function(){return i}});var n=r(4805);function o(e,t){return(0,n.g)(e)[t]}function i(e){var t=e.indexOf("?");if(-1===t)return e;for(var r=(0,n.g)(e),o=e.substr(0,t),i=arguments.length,a=new Array(i>1?i-1:0),c=1;c<i;c++)a[c-1]=arguments[c];a.forEach((function(e){return delete r[e]}));var s=(0,n.b)(r);return s?o+"?"+s:o}},1375:function(e,t,r){r.r(t),r.d(t,{sc_stripe_add_method:function(){return p}});var n=r(467),o=r(3029),i=r(2901),a=r(9280),c=r.n(a),s=r(1346),u=r(1546),d=r(3),l=r(4805),p=function(){return(0,i.A)((function e(t){(0,o.A)(this,e),(0,s.r)(this,t),this.liveMode=!0,this.customerId=void 0,this.successUrl=void 0,this.loading=void 0,this.loaded=void 0,this.error=void 0,this.paymentIntent=void 0}),[{key:"componentWillLoad",value:function(){this.createPaymentIntent()}},{key:"handlePaymentIntentCreate",value:(r=(0,n.A)(c().mark((function e(){var t,r,n,o,i,a,s,d,l,p,f,h,v,m,y,w,b,g,_,O=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===(n=null===(r=null===(t=this.paymentIntent)||void 0===t?void 0:t.processor_data)||void 0===r?void 0:r.stripe)||void 0===n?void 0:n.publishable_key)&&(null===(a=null===(i=null===(o=this.paymentIntent)||void 0===o?void 0:o.processor_data)||void 0===i?void 0:i.stripe)||void 0===a?void 0:a.account_id)){e.next=2;break}return e.abrupt("return");case 2:if(this.stripe){e.next=13;break}return e.prev=3,e.next=6,u.p.loadStripe(null===(l=null===(d=null===(s=this.paymentIntent)||void 0===s?void 0:s.processor_data)||void 0===d?void 0:d.stripe)||void 0===l?void 0:l.publishable_key,{stripeAccount:null===(h=null===(f=null===(p=this.paymentIntent)||void 0===p?void 0:p.processor_data)||void 0===f?void 0:f.stripe)||void 0===h?void 0:h.account_id});case 6:this.stripe=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),this.error=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||wp.i18n.__("Stripe could not be loaded","surecart"),e.abrupt("return");case 13:if((null===(y=null===(m=null===(v=this.paymentIntent)||void 0===v?void 0:v.processor_data)||void 0===m?void 0:m.stripe)||void 0===y?void 0:y.client_secret)&&this.container){e.next=16;break}return console.warn("do not have client secret or container"),e.abrupt("return");case 16:_=getComputedStyle(document.body),this.elements=this.stripe.elements({clientSecret:null===(g=null===(b=null===(w=this.paymentIntent)||void 0===w?void 0:w.processor_data)||void 0===b?void 0:b.stripe)||void 0===g?void 0:g.client_secret,appearance:{variables:{colorPrimary:_.getPropertyValue("--sc-color-primary-500"),colorText:_.getPropertyValue("--sc-input-label-color"),borderRadius:_.getPropertyValue("--sc-input-border-radius-medium"),colorBackground:_.getPropertyValue("--sc-input-background-color"),fontSizeBase:_.getPropertyValue("--sc-input-font-size-medium")},rules:{".Input":{border:_.getPropertyValue("--sc-input-border")},".Input::placeholder":{color:_.getPropertyValue("--sc-input-placeholder-color")}}}}),this.elements.create("payment",{wallets:{applePay:"never",googlePay:"never"}}).mount(".sc-payment-element-container"),this.element=this.elements.getElement("payment"),this.element.on("ready",(function(){return O.loaded=!0}));case 21:case"end":return e.stop()}}),e,this,[[3,9]])}))),function(){return r.apply(this,arguments)})},{key:"createPaymentIntent",value:(t=(0,n.A)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,this.error="",e.next=5,(0,d.a)({method:"POST",path:"surecart/v1/payment_intents",data:{processor_type:"stripe",live_mode:this.liveMode,customer_id:this.customerId,refresh_status:!0}});case 5:this.paymentIntent=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.error=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||wp.i18n.__("Something went wrong","surecart");case 11:return e.prev=11,this.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,8,11,14]])}))),function(){return t.apply(this,arguments)})},{key:"handleSubmit",value:(e=(0,n.A)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.loading=!0,e.prev=2,e.next=5,this.stripe.confirmSetup({elements:this.elements,confirmParams:{return_url:(0,l.a)(this.successUrl,{payment_intent:null===(r=this.paymentIntent)||void 0===r?void 0:r.id})},redirect:"always"});case 5:if(!(null==(n=e.sent)?void 0:n.error)){e.next=9;break}throw this.error=n.error.message,n.error;case 9:e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0),this.error=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||wp.i18n.__("Something went wrong","surecart"),this.loading=!1;case 16:case"end":return e.stop()}}),e,this,[[2,11]])}))),function(_x){return e.apply(this,arguments)})},{key:"render",value:function(){var e=this;return(0,s.h)("sc-form",{key:"8c61c18dddcb1fdb3c424f0cf74ca3130db603e1",onScFormSubmit:function(t){return e.handleSubmit(t)}},this.error&&(0,s.h)("sc-alert",{key:"113aa9076dbf54fa958e1a614c0ddaf9d04c7068",open:!!this.error,type:"danger"},(0,s.h)("span",{key:"5a9d095446153060fa147c67284419a9100a77e4",slot:"title"},wp.i18n.__("Error","surecart")),this.error),(0,s.h)("div",{key:"5c92d4ea9200f8717b16c8c41e14074c0e6b2217",class:"loader",hidden:this.loaded},(0,s.h)("div",{key:"d8d577867c58ed1605cf95c95a0944ee968a36c7",class:"loader__row"},(0,s.h)("div",{key:"8aef0469696016456b56aeff097a18ebf5d13038",style:{width:"50%"}},(0,s.h)("sc-skeleton",{key:"b8a5d42b541dbc1e586e7cbcd9c38d1409e16508",style:{width:"50%",marginBottom:"0.5em"}}),(0,s.h)("sc-skeleton",{key:"5b9f10513f82aba9e5f662df342d7c80924315a2"})),(0,s.h)("div",{key:"aab6864f8fe46598f3911b0e79d53e6223d34821",style:{flex:"1"}},(0,s.h)("sc-skeleton",{key:"457225068ac043035c5c9ff2d16b372a9e53eac2",style:{width:"50%",marginBottom:"0.5em"}}),(0,s.h)("sc-skeleton",{key:"df9a1f2013692bfc89f3c1e2ed87298e3993438c"})),(0,s.h)("div",{key:"635b4e0f037c0393f56e1fc3b6db24b75dd8e42d",style:{flex:"1"}},(0,s.h)("sc-skeleton",{key:"2c5d47cc922c70dc0e86d6718e546533399902b0",style:{width:"50%",marginBottom:"0.5em"}}),(0,s.h)("sc-skeleton",{key:"5b20d1c4e1189235059dfe3dce24b2d5a3a7636c"}))),(0,s.h)("div",{key:"1a90f3eeb1f0ab8e9cc2c8131c412a2a0493c6f2",class:"loader__details"},(0,s.h)("sc-skeleton",{key:"bfb030c579f0cb252a4f91199ad2e351af1064bc",style:{height:"1rem"}}),(0,s.h)("sc-skeleton",{key:"b1d211aca29f5b5a392b841610787e1785fa54e8",style:{height:"1rem",width:"30%"}}))),(0,s.h)("div",{key:"e577ca459ff1d0a3aa0f497c37decc4d0b457e39",hidden:!this.loaded,class:"sc-payment-element-container",ref:function(t){return e.container=t}}),(0,s.h)("sc-button",{key:"9148e3e13078fee631c0f648861654575123567b",type:"primary",submit:!0,full:!0,loading:this.loading},wp.i18n.__("Save Payment Method","surecart")))}}],[{key:"watchers",get:function(){return{paymentIntent:["handlePaymentIntentCreate"]}}}]);var e,t,r}();p.style="sc-stripe-add-method{display:block}sc-stripe-add-method [hidden]{display:none}.loader{display:grid;height:128px;gap:2em}.loader__row{display:flex;align-items:flex-start;justify-content:space-between;gap:1em}.loader__details{display:grid;gap:0.5em}"},45:function(e,t,r){r.d(t,{A:function(){return o}});var n=r(8587);function o(e,t){if(null==e)return{};var r,o,i=(0,n.A)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}},8587:function(e,t,r){function n(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}r.d(t,{A:function(){return n}})}}]);