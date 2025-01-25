import{h}from"@stencil/core";export class ScSecureNotice{render(){return h("div",{key:"9ce5e850f8ff91b67041fb500d959e9f96b15ed9",class:"notice",part:"base"},h("svg",{key:"f2313b0bb8ff1ab0ba7d1ac28fb31b1d7dbe649f",class:"notice__icon",part:"icon",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512",fill:"currentColor"},h("path",{key:"518d8e1d7cb62a059ad2d0098595006d6f80d063",d:"M368,192H352V112a96,96,0,1,0-192,0v80H144a64.07,64.07,0,0,0-64,64V432a64.07,64.07,0,0,0,64,64H368a64.07,64.07,0,0,0,64-64V256A64.07,64.07,0,0,0,368,192Zm-48,0H192V112a64,64,0,1,1,128,0Z"})),h("span",{key:"14323ee9e17b23ad3744862790ef9d80dbc5edaf",class:"notice__text",part:"text"},h("slot",{key:"0fadcab795d9aa57be175983835146af40c45a3d",name:"prefix"}),h("slot",{key:"c6bcc4f996f315ac762e568ed3a46114f6ec3fc9"}),h("slot",{key:"682b287e47bb3502e0cd091e884cd7b775372221",name:"suffix"})))}static get is(){return"sc-secure-notice"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-secure-notice.scss"]}}static get styleUrls(){return{$:["sc-secure-notice.css"]}}}