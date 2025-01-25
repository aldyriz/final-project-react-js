import PrestoPlayer from"./presto-player";const loadHLS=({config:e,selector:t,src:o,preload:n})=>new Promise((async(r,a)=>{if(!window.Hls)for(;!window.hasOwnProperty("Hls");)await new Promise((e=>setTimeout(e,50)));if(window.Hls.isSupported()){let a=!["metadata","none"].includes(n);wp?.blocks&&(a=!0);var l=new window.Hls(window?.wp?.hooks?.applyFilters?.("presto.hlsSettings",{autoStartLoad:a,capLevelToPlayerSize:!0}));return l.loadSource(o),l.on(window.Hls.Events.LEVEL_SWITCHED,((e,o)=>{var n=t.closest(".presto-player__wrapper").querySelector(".plyr__menu__container [data-plyr='quality'][value='0'] span");l.autoLevelEnabled?n.innerHTML=`AUTO (${l.levels[o.level].height}p)`:n.innerHTML="AUTO"})),void l.on(window.Hls.Events.MANIFEST_PARSED,(function(o,n){var a=l.levels.map((function(e){return e.height}));a.unshift(0);const s=(a||[]).findIndex((e=>e===parseInt(window?.prestoPlayer?.hls_start_level)));l.startLevel=s?s-1:2,e.quality={default:0,options:a,forced:!0,onChange:function(e){0===e?prestoHLS.currentLevel=-1:prestoHLS.levels.forEach((function(t,o){t.height===e&&(console.log("Found quality match with "+e),prestoHLS.currentLevel=o)}))}},l.attachMedia(t),window.prestoHLS=l;const i=new PrestoPlayer(t,{...e});i.hls=l;const p=()=>{l.startLoad(-1),i.off("waiting",p)};return i.on("waiting",p),i.on("languagechange",(()=>{setTimeout((()=>l.subtitleTrack=i.currentTrack),50)})),r(i)}))}return t.canPlayType("application/vnd.apple.mpegurl"),r(new PrestoPlayer(t,{...e}))}));export default loadHLS;