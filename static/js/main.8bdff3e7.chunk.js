(this["webpackJsonpazharizkita.github.io"]=this["webpackJsonpazharizkita.github.io"]||[]).push([[0],{63:function(e,t,a){e.exports=a(74)},68:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),c=(a(68),a(16)),o=a(98),m=a(127),s=a(116),u=a(132),d=a(117),h=a(119),E=a(104),f=a(121),g=a(122),p=a(123),v=a(41),y=a(128),w=a(54),b=a(114),k=a(118),j=a(120),x=a(124),S=a(125),N=a(126),z=a(115),B=a(55),C=a(130),O=a(129),W=a(101),F=a(102),L=a(103),_=a(108),P=a(109),A=a(110),R=a(106),T=a(107),G=Object(o.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}})),D=function(){var e=G(),t=r.a.useState([]),a=Object(c.a)(t,2),n=a[0],i=a[1],l=r.a.useState([]),o=Object(c.a)(l,2),m=o[0],s=o[1],u=r.a.useState([]),d=Object(c.a)(u,2),h=d[0],f=d[1],g=r.a.useState([]),p=Object(c.a)(g,2),w=p[0],b=p[1];return r.a.useEffect((function(){try{fetch("https://api.github.com/users/azharizkita/repos").then((function(e){return e.json()})).then((function(e){var t={},a={};e.forEach((function(e){if("azharizkita.github.io"!==e.name){var n=void 0;if(e.description){var r=e.description.split("]");e.description=r[1],(n=r[0].split("[")).length>1&&(e.tags=n[1].split(",").map((function(e){return e.trim()})),e.tags.forEach((function(e){"undefined"!==typeof t[e]?t[e]+=1:t[e]=1})))}a[+new Date(e.pushed_at)]=e}}));var n=[];Object.keys(a).sort((function(e,t){return t-e})).forEach((function(e){return n.push(a[e])})),i(n),f(t)}))}catch(e){console.error(e)}}),[]),r.a.useEffect((function(){if(console.log(m),n){var e=n.map((function(e){var t=!0;return m.forEach((function(a){e.tags&&e.tags.includes(a)||(t=!1)})),t?e:null})).filter((function(e){return null!==e}));b(e)}}),[m,n]),r.a.createElement(r.a.Fragment,null,0!==n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.root,style:{padding:25}},h?Object.keys(h).map((function(e,t){return r.a.createElement(C.a,{key:t,avatar:r.a.createElement(O.a,null,h[e]),label:e,onClick:function(){m.includes(e)?s(m.filter((function(t){return t!==e}))):s([].concat(Object(B.a)(m),[e]))},variant:m.includes(e)?"default":"outlined"})})):""),r.a.createElement(W.a,{container:!0,alignContent:"center",alignItems:"center",justify:"center"},0!==w.length?w.map((function(t,a){return r.a.createElement(W.a,{key:a,item:!0,xs:12,md:4,lg:4,style:{padding:15}},r.a.createElement(F.a,{variant:"outlined"},r.a.createElement(L.a,{style:{minHeight:220}},r.a.createElement(v.a,{variant:"h6",align:"center",color:"textPrimary"},t.name),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(E.a,null),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(W.a,{container:!0,className:e.root,style:{width:"100%"}},r.a.createElement(W.a,{item:!0},r.a.createElement(y.a,{title:"Last update"},r.a.createElement(C.a,{icon:r.a.createElement(R.a,null),label:new Date(t.updated_at).toLocaleDateString()+", "+new Date(t.updated_at).toLocaleTimeString(),variant:"outlined"}))),r.a.createElement(W.a,{item:!0},r.a.createElement(y.a,{title:"License"},r.a.createElement(C.a,{icon:r.a.createElement(T.a,null),label:t.license?t.license.name:"No License",variant:"outlined"})))),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(E.a,null),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(W.a,{container:!0,className:e.root,style:{width:"100%"}},t.tags?t.tags.map((function(e,t){return r.a.createElement(C.a,{key:t,label:e,variant:"default"})})):""),t.tags?r.a.createElement("div",{style:{paddingBottom:5}}):"",r.a.createElement(v.a,{align:"center"},t.description?t.description:"No desription.")),r.a.createElement(_.a,null,t.tags&&t.tags.includes("Application")?r.a.createElement(P.a,{color:"primary",variant:"contained",onClick:function(){return window.open("https://azharizkita.github.io/"+t.name+"/","_blank")},fullWidth:!0},"Launch"):"",r.a.createElement(P.a,{color:"primary",variant:"contained",onClick:function(){return window.open(t.html_url,"_blank")},fullWidth:!0},"Explore"))))})):r.a.createElement(W.a,{item:!0,style:{paddingTop:"15%"}},r.a.createElement(v.a,{variant:"h5",color:"textSecondary"},"Seems like i haven't created that at once yet :(")))):r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"80vh"}},r.a.createElement(W.a,{item:!0,style:{width:250}},r.a.createElement(A.a,{variant:"buffer",value:null,valueBuffer:null})))))},I=a(112),M=a(113),U=a(111),H=Object(o.a)((function(e){return{large:{width:e.spacing(20),height:e.spacing(20)},centers:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}})),J=function(e){var t=e.setTitle,a=H(),n=r.a.useState({}),i=Object(c.a)(n,2),l=i[0],o=i[1];return r.a.useEffect((function(){try{fetch("https://api.github.com/users/azharizkita").then((function(e){return e.json()})).then((function(e){o(e)}))}catch(e){console.error(e)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{container:!0,className:a.root,spacing:2,style:{width:"100%"}},r.a.createElement(W.a,{item:!0,xs:12,md:12,style:{padding:20}},l.name?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h5",align:"center"},"Greetings!"),r.a.createElement(v.a,{variant:"h5",align:"center",component:"div"},"My name is ",l.name,".")):r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h5",align:"center"},"Greetings!"),r.a.createElement("div",{className:a.centers},r.a.createElement(U.a,{width:250,height:24})))),r.a.createElement(W.a,{item:!0,xs:12,md:12},r.a.createElement("div",{className:a.centers},r.a.createElement(O.a,{alt:"Remy Sharp",src:l.avatar_url,className:a.large}))),r.a.createElement("div",{style:{paddingBottom:5}}),r.a.createElement(W.a,{item:!0,xs:12,md:12},r.a.createElement("div",{className:a.centers},r.a.createElement(E.a,{style:{maxWidth:550,width:"100%",minWidth:100}}))),r.a.createElement(W.a,{item:!0,xs:12,md:12},l.name?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"body1",align:"center"},"Short summary about my activity? ",l.bio,".")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.centers},r.a.createElement(U.a,{width:500,variant:"text"})))),r.a.createElement(W.a,{item:!0,xs:12,md:12},l.name?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"body1",component:"div",align:"center"},"You may check out my ",r.a.createElement(C.a,{label:"projects",onClick:function(){return t("Projects")},variant:"outlined"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.centers},r.a.createElement(U.a,{width:250,variant:"text"})))),r.a.createElement(W.a,{item:!0,xs:12,md:12},r.a.createElement("div",{className:a.centers},r.a.createElement(E.a,{style:{maxWidth:550,width:"100%",minWidth:100}}))),r.a.createElement(W.a,{item:!0,xs:12,md:12},r.a.createElement(v.a,{variant:"h6",align:"center"},"Reach me out")),r.a.createElement(W.a,{item:!0,xs:12,md:12},r.a.createElement("div",{className:a.centers},l.name?r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{icon:r.a.createElement(I.a,null),label:"GitHub.com/azharizkita",onClick:function(){return window.open(l.html_url,"_blank")},variant:"outlined"}),r.a.createElement(C.a,{icon:r.a.createElement(M.a,null),label:"azharizkita@icloud.com",onClick:function(){return window.open("mailto:azharizkita@icloud.com")},variant:"outlined"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{width:500,variant:"text"}))))))},Y=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),$=function(){var e=Y(),t=r.a.useState("Biography"),a=Object(c.a)(t,2),n=a[0],i=a[1],l=r.a.useState(!1),o=Object(c.a)(l,2),B=o[0],C=o[1],O=r.a.useState(window.matchMedia("(prefers-color-scheme: dark)").matches),W=Object(c.a)(O,2),F=W[0],L=W[1];window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?L(!0):L(!1)}));var _=Object(w.a)({palette:{primary:{main:"#212121"},secondary:{main:"#424242"},type:F?"dark":"light"}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{theme:_},r.a.createElement(z.a,null),r.a.createElement(m.a,{anchor:"left",open:B,onClose:function(){return C(!1)}},r.a.createElement("div",{style:{width:"auto"},role:"presentation"},r.a.createElement(s.a,{style:{width:250}},r.a.createElement(u.a,{button:!0,selected:"Biography"===n,onClick:function(){i("Biography"),C(!1)}},r.a.createElement(d.a,null,r.a.createElement(k.a,null)),r.a.createElement(h.a,{primary:"Biography"})),r.a.createElement(u.a,{button:!0,selected:"Projects"===n,onClick:function(){i("Projects"),C(!1)}},r.a.createElement(d.a,null,r.a.createElement(j.a,null)),r.a.createElement(h.a,{primary:"Projects"})))),r.a.createElement(E.a,null)),r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{position:"sticky"},r.a.createElement(g.a,null,r.a.createElement(p.a,{edge:"start",className:e.menuButton,onClick:function(){return C(!0)},color:"inherit","aria-label":"menu"},r.a.createElement(x.a,null)),r.a.createElement(v.a,{variant:"h6",className:e.title},n),r.a.createElement(y.a,{title:F?"Switch to light mode":"Switch to dark mode"},r.a.createElement(p.a,{onClick:function(){return L(!F)}},F?r.a.createElement(S.a,{style:{color:"white"}}):r.a.createElement(N.a,{style:{color:"white"}}))))),r.a.createElement("div",{style:{paddingBottom:10}}),"Biography"===n?r.a.createElement(J,{setTitle:function(e){return i(e)}}):"Projects"===n?r.a.createElement(D,null):"")))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement($,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(t,e)}))}}()}},[[63,1,2]]]);
//# sourceMappingURL=main.8bdff3e7.chunk.js.map