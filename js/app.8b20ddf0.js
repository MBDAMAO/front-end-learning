(function(){"use strict";var e={9193:function(e,a,t){var d=t(9242),i=t(3396),n=(t(560),t(7139)),c=t(4870),s=t(3512);function v(e){return(0,s.Z)({url:"/user/login",method:"post",data:e})}var o=t(2483);const l=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:()=>Promise.all([t.e(995),t.e(580)]).then(t.bind(t,3219))},{path:"/search/:text",name:"search",component:()=>Promise.all([t.e(995),t.e(442)]).then(t.bind(t,9381))},{path:"/follow",name:"follow",component:()=>Promise.all([t.e(995),t.e(440)]).then(t.bind(t,4805))},{path:"/friend",name:"friend",component:()=>Promise.all([t.e(995),t.e(401)]).then(t.bind(t,9183))},{path:"/recommend",name:"recommend",component:()=>Promise.all([t.e(995),t.e(681)]).then(t.bind(t,249))},{path:"/test",name:"test",component:()=>Promise.all([t.e(995),t.e(70)]).then(t.bind(t,6995))},{path:"/live",name:"live",component:()=>t.e(332).then(t.bind(t,1332))},{path:"/user",name:"user",component:()=>t.e(61).then(t.bind(t,8061)),children:[{path:"post",component:()=>t.e(684).then(t.bind(t,7684))},{path:"like",component:()=>t.e(961).then(t.bind(t,2961))},{path:"collection",component:()=>t.e(433).then(t.bind(t,2433))},{path:"history",component:()=>t.e(759).then(t.bind(t,3759))}]}],r=(0,o.p7)({history:(0,o.PO)("/"),routes:l});r.beforeEach(((e,a,t)=>{e.matched[0].path&&localStorage.setItem("currentState",e.matched[0].path),t()}));var u=r;const p=e=>((0,i.dD)("data-v-00484d3c"),e=e(),(0,i.Cn)(),e),f={class:"head"},m=p((()=>(0,i._)("div",{class:"left-logo"},[(0,i._)("p",null,"抖音🎶")],-1))),h={class:"search"},b=(0,i.uE)('<div class="searchBlock" data-v-00484d3c><div class="box1" data-v-00484d3c><div class="info" data-v-00484d3c>历史记录</div><div class="histories" data-v-00484d3c><div class="testLine" data-v-00484d3c>不是哥们这是什么</div><div class="testLine" data-v-00484d3c>不是哥们这是什么</div><div class="testLine" data-v-00484d3c>不是哥们这是什么</div><div class="testLine" data-v-00484d3c>不是哥们这是什么</div><div class="testLine" data-v-00484d3c>1144714</div><div class="testLine" data-v-00484d3c>1144714</div><div class="testLine" data-v-00484d3c>1144714</div><div class="testLine" data-v-00484d3c>1144714</div><div class="testLine" data-v-00484d3c>1144714</div></div></div><div class="box2" data-v-00484d3c><div class="info" data-v-00484d3c>猜你想搜</div><div class="recommends" data-v-00484d3c><div class="testLine2" data-v-00484d3c>大事不好了！！！</div><div class="testLine2" data-v-00484d3c>大事不好了！！！</div><div class="testLine2" data-v-00484d3c>大事不好了！！！</div><div class="testLine2" data-v-00484d3c>大事不好了！！！</div><div class="testLine2" data-v-00484d3c>大事不好了！！！</div><div class="testLine2" data-v-00484d3c>大事不好了！！！</div><div class="testLine2" data-v-00484d3c>大事不好了！！！</div><div class="testLine2" data-v-00484d3c>大事不好了！！！</div></div></div><div class="box3" data-v-00484d3c><div class="info" data-v-00484d3c>热点</div><div class="hots" data-v-00484d3c><div class="hTopic" data-v-00484d3c>大事不好了！！！</div><div class="hTopic" data-v-00484d3c>大事不好了！！！</div><div class="hTopic" data-v-00484d3c>大事不好了！！！</div><div class="hTopic" data-v-00484d3c>大事不好了！！！</div><div class="hTopic" data-v-00484d3c>大事不好了！！！</div><div class="hTopic" data-v-00484d3c>大事不好了！！！</div></div></div></div>',1),g={class:"right"},_=(0,i.uE)('<div class="fake" data-v-00484d3c><div class="content" data-v-00484d3c>冲钻石</div><div class="msg" data-v-00484d3c><div class="chatName" data-v-00484d3c>钻石充值</div><div class="select" data-v-00484d3c><div class="price" data-v-00484d3c><div class="up" data-v-00484d3c>10钻石</div><div class="down" data-v-00484d3c>￥1</div></div><div class="price" data-v-00484d3c><div class="up" data-v-00484d3c>60钻石</div><div class="down" data-v-00484d3c>￥6</div></div><div class="price" data-v-00484d3c><div class="up" data-v-00484d3c>300钻石</div><div class="down" data-v-00484d3c>￥30</div></div><div class="price" data-v-00484d3c><div class="up" data-v-00484d3c>980钻石</div><div class="down" data-v-00484d3c>￥98</div></div><div class="price" data-v-00484d3c><div class="up" data-v-00484d3c>2980钻石</div><div class="down" data-v-00484d3c>￥298</div></div><div class="price" data-v-00484d3c><div class="up" data-v-00484d3c>5980钻石</div><div class="down" data-v-00484d3c>￥598</div></div><div class="price" data-v-00484d3c><div class="up" data-v-00484d3c>19980钻石</div><div class="down" data-v-00484d3c>￥1998</div></div><div class="price" data-v-00484d3c><div class="up" data-v-00484d3c></div><div class="down" data-v-00484d3c></div></div></div><div class="payment" data-v-00484d3c></div></div></div><div class="fake" data-v-00484d3c><div class="content" data-v-00484d3c>客户端</div></div><div class="fake" data-v-00484d3c><div class="content" data-v-00484d3c>快捷访问</div></div><div class="fake1" data-v-00484d3c><div class="content" data-v-00484d3c>通知</div><div class="notice" data-v-00484d3c><div class="chatName" data-v-00484d3c>互动消息</div><div class="noticeBox" data-v-00484d3c><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div></div></div></div><div class="fake2" data-v-00484d3c><div class="content" data-v-00484d3c>私信</div><div class="chat" data-v-00484d3c><div class="chatName" data-v-00484d3c>私信</div><div class="noticeBox" data-v-00484d3c><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div><div class="noticeItem" data-v-00484d3c></div></div></div></div><div class="fake3" data-v-00484d3c><div class="content" data-v-00484d3c>投稿</div><div class="tougao" data-v-00484d3c></div></div>',6),k={key:0,class:"loginTable"},y={class:"block"},w={class:"inner"},C=["disabled"];var I=(0,i.aZ)({__name:"Index",setup(e){function a(){let e=document.getElementById("main-input")?.value,a=`/search/${e}`;u.push(a)}const t=(0,c.iH)(!1),s=(0,c.iH)(""),o=(0,c.iH)(""),l=(0,i.Fl)((()=>""!==o.value&&""!==s.value));async function r(){let e=await v({username:o.value,password:s.value});console.log(e),localStorage.setItem("token",e.data.token),window.location.reload()}return(e,c)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",f,[m,(0,i._)("div",h,[(0,i._)("input",{class:"main-input",id:"main-input",type:"text",placeholder:"搜索你感兴趣的内容",onKeyup:c[0]||(c[0]=(0,d.D2)((e=>a()),["enter"]))},null,32),b]),(0,i._)("div",g,[_,(0,i._)("button",{class:"login",onClick:c[1]||(c[1]=e=>t.value=!0)},"登录")])]),t.value?((0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("div",y,[(0,i._)("div",w,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":c[2]||(c[2]=e=>o.value=e),class:"inp1",placeholder:"请输入用户名"},null,512),[[d.nr,o.value]]),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":c[3]||(c[3]=e=>s.value=e),class:"inp2",placeholder:"请输入密码"},null,512),[[d.nr,s.value]]),(0,i._)("button",{onClick:c[4]||(c[4]=e=>r()),class:(0,n.C_)(["ensure",{redColor:l.value}]),disabled:!l.value},"确认",10,C),(0,i._)("button",{onClick:c[5]||(c[5]=e=>t.value=!1),class:"exit"},"返回")])])])):(0,i.kq)("",!0)],64))}}),L=t(89);const T=(0,L.Z)(I,[["__scopeId","data-v-00484d3c"]]);var x=T;const O=e=>((0,i.dD)("data-v-4865e0dd"),e=e(),(0,i.Cn)(),e),S={class:"navigator"},E={class:"items"},P=O((()=>(0,i._)("span",null,"首页",-1))),Z=[P],j=O((()=>(0,i._)("span",null,"推荐",-1))),N=[j],A=O((()=>(0,i._)("span",null,"关注",-1))),D=[A],B=O((()=>(0,i._)("span",null,"朋友",-1))),q=[B],H=O((()=>(0,i._)("span",null,"我的",-1))),F=[H],U=O((()=>(0,i._)("br",null,null,-1))),W=O((()=>(0,i._)("span",null,"直播",-1))),M=[W],K=O((()=>(0,i._)("span",null,"放映厅",-1))),R=[K],V=O((()=>(0,i._)("span",null,"知识",-1))),z=[V],J=O((()=>(0,i._)("br",null,null,-1))),Y=O((()=>(0,i._)("span",null,"业务合作",-1))),$=[Y];var G=(0,i.aZ)({__name:"Navigator",setup(e){const a=(0,c.iH)(),t=(0,c.iH)(0);function d(e,a){u.push(e),t.value=a}return(0,i.bv)((()=>{switch(a.value=localStorage.getItem("currentState"),a.value){case"/home":t.value=0;break;case"/recommend":t.value=1;break;case"/follow":t.value=2;break;case"/friend":t.value=3;break;case"/user":t.value=4;break;case"/live":t.value=5;break}})),(e,a)=>((0,i.wg)(),(0,i.iD)("div",S,[(0,i._)("div",E,[(0,i._)("div",{onClick:a[0]||(a[0]=e=>d("/home",0)),class:(0,n.C_)({active:0==t.value})},Z,2),(0,i._)("div",{onClick:a[1]||(a[1]=e=>d("/recommend",1)),class:(0,n.C_)({active:1==t.value})},N,2),(0,i._)("div",{onClick:a[2]||(a[2]=e=>d("/follow",2)),class:(0,n.C_)({active:2==t.value})},D,2),(0,i._)("div",{onClick:a[3]||(a[3]=e=>d("/friend",3)),class:(0,n.C_)({active:3==t.value})},q,2),(0,i._)("div",{onClick:a[4]||(a[4]=e=>d("/user/like",4)),class:(0,n.C_)({active:4==t.value})},F,2),U,(0,i._)("div",{onClick:a[5]||(a[5]=e=>d("/live",5)),class:(0,n.C_)({active:5==t.value})},M,2),(0,i._)("div",{class:(0,n.C_)({active:6==t.value})},R,2),(0,i._)("div",{class:(0,n.C_)({active:7==t.value})},z,2),J,(0,i._)("div",{class:(0,n.C_)({active:8==t.value})},$,2)])]))}});const Q=(0,L.Z)(G,[["__scopeId","data-v-4865e0dd"]]);var X=Q;const ee={class:"bodys"};var ae=(0,i.aZ)({__name:"index",setup(e){return(e,a)=>{const t=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",ee,[(0,i.Wm)(X),(0,i.Wm)(t)])}}});const te=(0,L.Z)(ae,[["__scopeId","data-v-a0f89224"]]);var de=te;const ie={class:"containermain"};var ne=(0,i.aZ)({__name:"App",setup(e){return(e,a)=>((0,i.wg)(),(0,i.iD)("div",ie,[(0,i.Wm)(x),(0,i.Wm)(de)]))}});const ce=ne;var se=ce,ve=t(1020),oe=t(3259);t(4415);const le=(0,ve.WB)();(0,d.ri)(se).use(le).use(u).use(oe.Z).mount("#app")},3512:function(e,a,t){var d=t(1076),i=t(7178);d.Z.defaults.timeout=1e4,d.Z.defaults.baseURL="http://127.0.0.1:4523/m1/3898618-0-default",d.Z.defaults.transformRequest=function(e){return e=JSON.stringify(e),e},d.Z.interceptors.request.use((e=>{e.headers["Content-Type"]="application/json;charset=UTF-8";try{const a=localStorage.getItem("token");a&&""!==a&&(e.headers["token"]=a)}catch{console.log("error put token")}return e}),(e=>Promise.reject(e.response))),d.Z.interceptors.response.use((e=>{if(0!==e.data.code)return e.data;alert(e.data.msg)}),(e=>{if(e.response)switch(e.response.status){case 400:e.message="错误请求";break;case 401:e.message="未授权，请重新登录";break}else e.request?console.log(e.request):console.log(e.message);return(0,i.z8)({showClose:!0,message:e.message,type:"error"}),Promise.reject(e.response)})),a.Z=d.Z}},a={};function t(d){var i=a[d];if(void 0!==i)return i.exports;var n=a[d]={exports:{}};return e[d].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(a,d,i,n){if(!d){var c=1/0;for(l=0;l<e.length;l++){d=e[l][0],i=e[l][1],n=e[l][2];for(var s=!0,v=0;v<d.length;v++)(!1&n||c>=n)&&Object.keys(t.O).every((function(e){return t.O[e](d[v])}))?d.splice(v--,1):(s=!1,n<c&&(c=n));if(s){e.splice(l--,1);var o=i();void 0!==o&&(a=o)}}return a}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[d,i,n]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var d in a)t.o(a,d)&&!t.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(a,d){return t.f[d](e,a),a}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{61:"04a3cd15",70:"194129aa",332:"fd591dfd",401:"9aa74ce5",433:"bdf8f86a",440:"01d30322",442:"b5c68c09",580:"f8983c89",681:"7b54408b",684:"efde031b",759:"9672245f",961:"003b7be3",995:"c0ebf28c"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{61:"ea472cd4",70:"5e69ae6b",401:"ae08610e",433:"47a7dc72",440:"2320ac5e",442:"e1573c09",580:"53d490f4",681:"442d3079",684:"aa122328",759:"83f674e6",961:"4a7cc02f"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={},a="damao:";t.l=function(d,i,n,c){if(e[d])e[d].push(i);else{var s,v;if(void 0!==n)for(var o=document.getElementsByTagName("script"),l=0;l<o.length;l++){var r=o[l];if(r.getAttribute("src")==d||r.getAttribute("data-webpack")==a+n){s=r;break}}s||(v=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",a+n),s.src=d),e[d]=[i];var u=function(a,t){s.onerror=s.onload=null,clearTimeout(p);var i=e[d];if(delete e[d],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(t)})),a)return a(t)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),v&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,a,t,d,i){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var c=function(t){if(n.onerror=n.onload=null,"load"===t.type)d();else{var c=t&&t.type,s=t&&t.target&&t.target.href||a,v=new Error("Loading CSS chunk "+e+" failed.\n("+c+": "+s+")");v.name="ChunkLoadError",v.code="CSS_CHUNK_LOAD_FAILED",v.type=c,v.request=s,n.parentNode&&n.parentNode.removeChild(n),i(v)}};return n.onerror=n.onload=c,n.href=a,t?t.parentNode.insertBefore(n,t.nextSibling):document.head.appendChild(n),n},a=function(e,a){for(var t=document.getElementsByTagName("link"),d=0;d<t.length;d++){var i=t[d],n=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===a))return i}var c=document.getElementsByTagName("style");for(d=0;d<c.length;d++){i=c[d],n=i.getAttribute("data-href");if(n===e||n===a)return i}},d=function(d){return new Promise((function(i,n){var c=t.miniCssF(d),s=t.p+c;if(a(c,s))return i();e(d,s,null,i,n)}))},i={143:0};t.f.miniCss=function(e,a){var t={61:1,70:1,401:1,433:1,440:1,442:1,580:1,681:1,684:1,759:1,961:1};i[e]?a.push(i[e]):0!==i[e]&&t[e]&&a.push(i[e]=d(e).then((function(){i[e]=0}),(function(a){throw delete i[e],a})))}}}(),function(){var e={143:0};t.f.j=function(a,d){var i=t.o(e,a)?e[a]:void 0;if(0!==i)if(i)d.push(i[2]);else if(70!=a){var n=new Promise((function(t,d){i=e[a]=[t,d]}));d.push(i[2]=n);var c=t.p+t.u(a),s=new Error,v=function(d){if(t.o(e,a)&&(i=e[a],0!==i&&(e[a]=void 0),i)){var n=d&&("load"===d.type?"missing":d.type),c=d&&d.target&&d.target.src;s.message="Loading chunk "+a+" failed.\n("+n+": "+c+")",s.name="ChunkLoadError",s.type=n,s.request=c,i[1](s)}};t.l(c,v,"chunk-"+a,a)}else e[a]=0},t.O.j=function(a){return 0===e[a]};var a=function(a,d){var i,n,c=d[0],s=d[1],v=d[2],o=0;if(c.some((function(a){return 0!==e[a]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(v)var l=v(t)}for(a&&a(d);o<c.length;o++)n=c[o],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(l)},d=self["webpackChunkdamao"]=self["webpackChunkdamao"]||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))}();var d=t.O(void 0,[998],(function(){return t(9193)}));d=t.O(d)})();
//# sourceMappingURL=app.8b20ddf0.js.map