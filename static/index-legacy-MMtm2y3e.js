System.register(["./index-legacy-CwC7ywrw.js","./index-legacy-QnigOX1w.js","./index.vue_vue_type_style_index_0_scoped_62bc9b25_lang-legacy-Br-0ZSIq.js"],(function(e,t){"use strict";var n,a,i,l,r,d,c,o,s,u,v,h,p,f,g,m;return{setters:[e=>{n=e.default},e=>{a=e.d,i=e.r,l=e.e,r=e.o,d=e.a,c=e.c,o=e.q,s=e.h,u=e.b,v=e.F,h=e.g,p=e.i,f=e.L,g=e._},e=>{m=e.a}],execute:function(){var t=document.createElement("style");t.textContent=".recommend-container[data-v-ad1ca9f9]{height:100%;position:relative;top:0;left:0;z-index:0;overflow:hidden;width:100%;background-color:#161823}.inner-wrapper[data-v-ad1ca9f9]{height:calc(100% - 12px);width:98%}.inner[data-v-ad1ca9f9]{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin-bottom:20px}.loading[data-v-ad1ca9f9]{position:absolute;background-color:#161823;z-index:114515;height:100%;width:100%;display:flex;align-items:center;justify-content:center}\n",document.head.appendChild(t);const y={class:"inner-wrapper"},_=["id"];e("default",g(a({__name:"index",setup(e){const t=i(null),a=i(0),g=i(!0),x=l([]),w=i([]),b=e=>t=>{t&&(w.value[e]=t)};async function S(){await m().then((e=>{x.push(...e.data)})).catch((()=>{x.push({videoSrc:"j (11).mp4",vid:1}),x.push({videoSrc:"j (12).mp4",vid:1}),x.push({videoSrc:"j (13).mp4",vid:1})}))}const j=e=>{if(!t.value)return;const n=e.target;if(!t.value.contains(n))return;e.preventDefault(),a.value>=x.length-2&&S();const i=t.value.querySelectorAll(".inner");let l=0,r=1/0;i.forEach(((e,n)=>{if(!t.value)return;const a=e.getBoundingClientRect(),i=Math.abs(a.top-t.value.getBoundingClientRect().top);i<r&&(l=n,r=i)}));let d=l;e.deltaY>0&&d<i.length-1?d++:e.deltaY<0&&d>0&&d--;const c=t.value.querySelector(`#inner_${d}`);c&&(c.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),a.value=d)};return r((async()=>{await S(),t.value&&t.value.addEventListener("wheel",j),g.value=!1})),(e,a)=>(d(),c("div",{class:"recommend-container",ref_key:"container",ref:t,onWheel:j},[g.value?(d(),o(f,{key:0,class:"loading"})):s("",!0),u("div",y,[(d(!0),c(v,null,h(x,((e,t)=>(d(),c("div",{class:"inner",key:t,id:"inner_"+t},[p(n,{modal:e,videoSrc:e.videoSrc,ref_for:!0,ref:b(t),vid:e.vid},null,8,["modal","videoSrc","vid"])],8,_)))),128))])],544))}}),[["__scopeId","data-v-ad1ca9f9"]]))}}}));
