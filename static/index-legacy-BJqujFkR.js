System.register(["./index-legacy-DUNmga16.js","./index-legacy-Bm1GnCNn.js","./index.vue_vue_type_style_index_0_scoped_dc992d26_lang-legacy-WvH0Lqpu.js"],(function(e,t){"use strict";var n,i,a,d,l,r,o,c,s,u,v,h,p,g,f,m;return{setters:[e=>{n=e.default},e=>{i=e.d,a=e.r,d=e.e,l=e.o,r=e.a,o=e.c,c=e.q,s=e.h,u=e.b,v=e.F,h=e.g,p=e.i,g=e.L,f=e._},e=>{m=e.a}],execute:function(){var t=document.createElement("style");t.textContent=".recommend-container[data-v-12d53b87]{height:100%;position:relative;top:0;left:0;z-index:0;overflow:hidden;width:100%;background-color:#161823}.inner-wrapper[data-v-12d53b87]{height:100%;width:100%;height:calc(100% - 12px);width:98%}.inner[data-v-12d53b87]{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin-bottom:20px}.loading[data-v-12d53b87]{position:absolute;background-color:#161823;z-index:114515;height:100%;width:100%;display:flex;align-items:center;justify-content:center}\n",document.head.appendChild(t);const y={class:"inner-wrapper"},_=["id"],b=i({__name:"index",setup(e){const t=a(null),i=a(0),f=a(!0),b=d([]),x=a([]),w=e=>t=>{t&&(x.value[e]=t)};async function S(){await m().then((e=>{b.push(...e.feed_list)})).catch((()=>{b.push({videoSrc:"j (11).mp4",vid:1}),b.push({videoSrc:"j (12).mp4",vid:1}),b.push({videoSrc:"j (13).mp4",vid:1})}))}const j=e=>{if(!t.value)return;const n=e.target;if(!t.value.contains(n))return;e.preventDefault(),i.value>=b.length-2&&S();const a=t.value.querySelectorAll(".inner");let d=0,l=1/0;a.forEach(((e,n)=>{if(!t.value)return;const i=e.getBoundingClientRect(),a=Math.abs(i.top-t.value.getBoundingClientRect().top);a<l&&(d=n,l=a)}));let r=d;e.deltaY>0&&r<a.length-1?r++:e.deltaY<0&&r>0&&r--;const o=t.value.querySelector(`#inner_${r}`);o&&(o.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),i.value=r)};return l((async()=>{await S(),t.value&&t.value.addEventListener("wheel",j),f.value=!1})),(e,i)=>(r(),o("div",{class:"recommend-container",ref_key:"container",ref:t,onWheel:j},[f.value?(r(),c(g,{key:0,class:"loading"})):s("",!0),u("div",y,[(r(!0),o(v,null,h(b,((e,t)=>(r(),o("div",{class:"inner",key:t,id:"inner_"+t},[p(n,{modal:e,videoSrc:e.videoSrc,ref_for:!0,ref:w(t),vid:e.vid},null,8,["modal","videoSrc","vid"])],8,_)))),128))])],544))}});e("default",f(b,[["__scopeId","data-v-12d53b87"]]))}}}));
