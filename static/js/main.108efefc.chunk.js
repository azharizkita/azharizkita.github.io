(this["webpackJsonpazharizkita.github.io"]=this["webpackJsonpazharizkita.github.io"]||[]).push([[0],{63:function(e,t,a){e.exports=a(74)},68:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),i=a.n(l),c=(a(68),a(16)),o=a(98),m=a(127),s=a(116),u=a(132),d=a(117),E=a(119),h=a(104),g=a(121),p=a(122),f=a(123),y=a(41),v=a(128),w=a(54),b=a(114),k=a(118),j=a(120),x=a(124),B=a(125),z=a(126),N=a(115),S=a(55),C=a(130),O=a(129),F=a(101),W=a(102),_=a(103),L=a(108),P=a(109),G=a(110),D=a(106),I=a(107),T=Object(o.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}})),M=function(){var e=T(),t=r.a.useState([]),a=Object(c.a)(t,2),n=a[0],l=a[1],i=r.a.useState([]),o=Object(c.a)(i,2),m=o[0],s=o[1],u=r.a.useState([]),d=Object(c.a)(u,2),E=d[0],g=d[1],p=r.a.useState([]),f=Object(c.a)(p,2),w=f[0],b=f[1];return r.a.useEffect((function(){try{fetch("https://api.github.com/users/azharizkita/repos").then((function(e){return e.json()})).then((function(e){var t={},a={};e.forEach((function(e){if("azharizkita.github.io"!==e.name){var n=void 0;if(e.description){var r=e.description.split("]");e.description=r[1],(n=r[0].split("[")).length>1&&(e.tags=n[1].split(",").map((function(e){return e.trim()})),e.tags.forEach((function(e){"undefined"!==typeof t[e]?t[e]+=1:t[e]=1})))}a[+new Date(e.pushed_at)]=e}}));var n=[];Object.keys(a).sort((function(e,t){return t-e})).forEach((function(e){return n.push(a[e])})),l(n),g(t)}))}catch(e){console.error(e)}}),[]),r.a.useEffect((function(){if(console.log(m),n){var e=n.map((function(e){var t=!0;return m.forEach((function(a){e.tags&&e.tags.includes(a)||(t=!1)})),t?e:null})).filter((function(e){return null!==e}));b(e)}}),[m,n]),r.a.createElement(r.a.Fragment,null,0!==n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.root,style:{padding:25}},E?Object.keys(E).map((function(e,t){return r.a.createElement(C.a,{key:t,avatar:r.a.createElement(O.a,null,E[e]),label:e,onClick:function(){m.includes(e)?s(m.filter((function(t){return t!==e}))):s([].concat(Object(S.a)(m),[e]))},variant:m.includes(e)?"default":"outlined"})})):""),r.a.createElement(F.a,{container:!0,alignContent:"center",alignItems:"center",justify:"center"},0!==w.length?w.map((function(t,a){return r.a.createElement(F.a,{key:a,item:!0,xs:12,md:4,lg:4,style:{padding:15}},r.a.createElement(W.a,{variant:"outlined"},r.a.createElement(_.a,{style:{minHeight:220}},r.a.createElement(y.a,{variant:"h6",align:"center",color:"textPrimary"},t.name),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(h.a,null),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(F.a,{container:!0,className:e.root,style:{width:"100%"}},r.a.createElement(F.a,{item:!0},r.a.createElement(v.a,{title:"Last update"},r.a.createElement(C.a,{icon:r.a.createElement(D.a,null),label:new Date(t.updated_at).toLocaleDateString()+", "+new Date(t.updated_at).toLocaleTimeString(),variant:"outlined"}))),r.a.createElement(F.a,{item:!0},r.a.createElement(v.a,{title:"License"},r.a.createElement(C.a,{icon:r.a.createElement(I.a,null),label:t.license?t.license.name:"No License",variant:"outlined"})))),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(h.a,null),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(F.a,{container:!0,className:e.root,style:{width:"100%"}},t.tags?t.tags.map((function(e,t){return r.a.createElement(C.a,{key:t,label:e,variant:"default"})})):""),t.tags?r.a.createElement("div",{style:{paddingBottom:5}}):"",r.a.createElement(y.a,{align:"center"},t.description?t.description:"No desription.")),r.a.createElement(L.a,null,t.tags&&t.tags.includes("Application")?r.a.createElement(P.a,{color:"primary",variant:"contained",onClick:function(){return window.open("https://azharizkita.github.io/"+t.name+"/","_blank")},fullWidth:!0},"Launch"):"",r.a.createElement(P.a,{color:"primary",variant:"contained",onClick:function(){return window.open(t.html_url,"_blank")},fullWidth:!0},"Explore"))))})):r.a.createElement(F.a,{item:!0,style:{paddingTop:"15%"}},r.a.createElement(y.a,{variant:"h5",color:"textSecondary"},"Seems like i haven't created that at once yet :(")))):r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"80vh"}},r.a.createElement(F.a,{item:!0,style:{width:250}},r.a.createElement(G.a,{variant:"buffer",value:null,valueBuffer:null})))))},R=a(112),H=a(113),J=a(111),A=Object(o.a)((function(e){return{large:{width:e.spacing(20),height:e.spacing(20)},centers:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}})),Y=function(e){var t=e.setTitle,a=A(),n=r.a.useState({}),l=Object(c.a)(n,2),i=l[0],o=l[1];return r.a.useEffect((function(){try{fetch("https://api.github.com/users/azharizkita").then((function(e){return e.json()})).then((function(e){o(e)}))}catch(e){console.error(e)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{container:!0,style:{width:"100%",padding:10},justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement(F.a,{item:!0,xs:12,md:12,style:{padding:15}},i.name?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h5",align:"center"},"Greetings!"),r.a.createElement(y.a,{variant:"h5",align:"center",component:"div"},"My name is ",i.name,".")):r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h5",align:"center"},"Greetings!"),r.a.createElement("div",{className:a.centers},r.a.createElement(J.a,{width:250,height:24})))),r.a.createElement(F.a,{item:!0,xs:12,md:12,style:{paddingBottom:15}},r.a.createElement("div",{className:a.centers},r.a.createElement(O.a,{alt:"Remy Sharp",src:i.avatar_url,className:a.large}))),r.a.createElement("div",{style:{paddingBottom:5}}),r.a.createElement(F.a,{item:!0,xs:12,md:12,style:{paddingBottom:15}},r.a.createElement("div",{className:a.centers},r.a.createElement(h.a,{style:{maxWidth:550,width:"100%",minWidth:100}}))),r.a.createElement(F.a,{item:!0,xs:12,md:12,style:{paddingBottom:15}},i.name?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"body1",align:"center"},"Short summary about my activity? ",i.bio,".")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.centers},r.a.createElement(J.a,{width:500,variant:"text"})))),r.a.createElement(F.a,{item:!0,xs:12,md:12,style:{paddingBottom:15}},i.name?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"body1",component:"div",align:"center"},"You may check out my ",r.a.createElement(C.a,{label:"projects",onClick:function(){return t("Projects")},variant:"outlined"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.centers},r.a.createElement(J.a,{width:250,variant:"text"})))),r.a.createElement(F.a,{item:!0,xs:12,md:12,style:{paddingBottom:15}},r.a.createElement("div",{className:a.centers},r.a.createElement(h.a,{style:{maxWidth:550,width:"100%",minWidth:100}}))),r.a.createElement(F.a,{item:!0,xs:12,md:12,style:{paddingBottom:15}},r.a.createElement(y.a,{variant:"h6",align:"center"},"Reach me out")),r.a.createElement(F.a,{item:!0,xs:12,md:12,style:{paddingBottom:15}},r.a.createElement("div",{className:a.centers},i.name?r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{icon:r.a.createElement(R.a,null),label:"GitHub.com/azharizkita",onClick:function(){return window.open(i.html_url,"_blank")},variant:"outlined"}),r.a.createElement(C.a,{icon:r.a.createElement(H.a,null),label:"azharizkita@icloud.com",onClick:function(){return window.open("mailto:azharizkita@icloud.com")},variant:"outlined"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{width:500,variant:"text"}))))))},$=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),q=function(){var e=$(),t=r.a.useState("Biography"),a=Object(c.a)(t,2),n=a[0],l=a[1],i=r.a.useState(!1),o=Object(c.a)(i,2),S=o[0],C=o[1],O=r.a.useState(window.matchMedia("(prefers-color-scheme: dark)").matches),F=Object(c.a)(O,2),W=F[0],_=F[1];window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?_(!0):_(!1)}));var L=Object(w.a)({palette:{primary:{main:"#212121"},secondary:{main:"#424242"},type:W?"dark":"light"}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{theme:L},r.a.createElement(N.a,null),r.a.createElement(m.a,{anchor:"left",open:S,onClose:function(){return C(!1)}},r.a.createElement("div",{style:{width:"auto"},role:"presentation"},r.a.createElement(s.a,{style:{width:250}},r.a.createElement(u.a,{button:!0,selected:"Biography"===n,onClick:function(){l("Biography"),C(!1)}},r.a.createElement(d.a,null,r.a.createElement(k.a,null)),r.a.createElement(E.a,{primary:"Biography"})),r.a.createElement(u.a,{button:!0,selected:"Projects"===n,onClick:function(){l("Projects"),C(!1)}},r.a.createElement(d.a,null,r.a.createElement(j.a,null)),r.a.createElement(E.a,{primary:"Projects"})))),r.a.createElement(h.a,null)),r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{position:"sticky"},r.a.createElement(p.a,null,r.a.createElement(f.a,{edge:"start",className:e.menuButton,onClick:function(){return C(!0)},color:"inherit","aria-label":"menu"},r.a.createElement(x.a,null)),r.a.createElement(y.a,{variant:"h6",className:e.title},n),r.a.createElement(v.a,{title:W?"Switch to light mode":"Switch to dark mode"},r.a.createElement(f.a,{onClick:function(){return _(!W)}},W?r.a.createElement(B.a,{style:{color:"white"}}):r.a.createElement(z.a,{style:{color:"white"}}))))),r.a.createElement("div",{style:{paddingBottom:10}}),"Biography"===n?r.a.createElement(Y,{setTitle:function(e){return l(e)}}):"Projects"===n?r.a.createElement(M,null):"")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.108efefc.chunk.js.map