(this["webpackJsonpazharizkita.github.io"]=this["webpackJsonpazharizkita.github.io"]||[]).push([[0],{126:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l),c=(a(126),a(12)),o=a(251),s=a(300),m=a(283),u=a(277),d=a(296),E=a(253),h=a(42),g=a(256),f=a(290),p=a(291),v=a(292),y=a(297),b=a(286),w=a(287),k=a(288),j=a(289),C=a(293),x=a(294),S=a(295),O=a(41),N=a(107),B=a(284),D=a(285),z=a(96),L=a(109),T=a(298),_=a(299),R=a(254),F=a(255),M=a(260),W=a(261),I=a(262),P=a(258),G=a(259),U=Object(o.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}})),A=function(e){var t=e.setTitle,a=U(),n=r.a.useState([]),l=Object(c.a)(n,2),i=l[0],o=l[1],s=r.a.useState([]),m=Object(c.a)(s,2),u=m[0],d=m[1],f=r.a.useState([]),p=Object(c.a)(f,2),v=p[0],b=p[1],w=r.a.useState([]),k=Object(c.a)(w,2),j=k[0],C=k[1];return r.a.useEffect((function(){t("Projects");try{fetch("https://api.github.com/users/azharizkita/repos").then((function(e){return e.json()})).then((function(e){var t={},a={};e.forEach((function(e){if("azharizkita.github.io"!==e.name){var n=void 0;if(e.description){var r=e.description.split("]");e.description=r[1],(n=r[0].split("[")).length>1&&(e.tags=n[1].split(",").map((function(e){return e.trim()})),e.tags.forEach((function(e){"undefined"!==typeof t[e]?t[e]+=1:t[e]=1})))}a[+new Date(e.pushed_at)]=e}}));var n=[];Object.keys(a).sort((function(e,t){return t-e})).forEach((function(e){return n.push(a[e])})),o(n),b(t)}))}catch(e){console.error(e)}}),[]),r.a.useEffect((function(){if(i){var e=i.map((function(e){var t=!0;return u.forEach((function(a){e.tags&&e.tags.includes(a)||(t=!1)})),t?e:null})).filter((function(e){return null!==e}));C(e)}}),[u,i]),r.a.createElement(r.a.Fragment,null,0!==i.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.root,style:{padding:25}},v?Object.keys(v).map((function(e,t){return r.a.createElement(T.a,{key:t,avatar:r.a.createElement(_.a,null,v[e]),label:e,onClick:function(){u.includes(e)?d(u.filter((function(t){return t!==e}))):d([].concat(Object(L.a)(u),[e]))},variant:u.includes(e)?"default":"outlined"})})):""),r.a.createElement(E.a,{container:!0,alignContent:"center",alignItems:"center",justify:"center"},0!==j.length?j.map((function(e,t){return r.a.createElement(E.a,{key:t,item:!0,xs:12,md:4,lg:4,style:{padding:15}},r.a.createElement(R.a,{variant:"outlined"},r.a.createElement(F.a,{style:{minHeight:220}},r.a.createElement(h.a,{variant:"h6",align:"center",color:"textPrimary"},e.name),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(g.a,null),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(E.a,{container:!0,className:a.root,style:{width:"100%"}},r.a.createElement(E.a,{item:!0},r.a.createElement(y.a,{title:"Last update"},r.a.createElement(T.a,{icon:r.a.createElement(P.a,null),label:new Date(e.updated_at).toLocaleDateString()+", "+new Date(e.updated_at).toLocaleTimeString(),variant:"outlined"}))),r.a.createElement(E.a,{item:!0},r.a.createElement(y.a,{title:"License"},r.a.createElement(T.a,{icon:r.a.createElement(G.a,null),label:e.license?e.license.name:"No License",variant:"outlined"})))),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(g.a,null),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(E.a,{container:!0,className:a.root,style:{width:"100%"}},e.tags?e.tags.map((function(e,t){return r.a.createElement(T.a,{key:t,label:e,variant:"default"})})):""),e.tags?r.a.createElement("div",{style:{paddingBottom:5}}):"",r.a.createElement(h.a,{align:"center"},e.description?e.description:"No desription.")),r.a.createElement(M.a,null,e.tags&&e.tags.includes("Application")?r.a.createElement(W.a,{color:"primary",variant:"contained",onClick:function(){return window.open("https://azharizkita.github.io/"+e.name+"/","_blank")},fullWidth:!0},"Launch"):"",r.a.createElement(W.a,{color:"primary",variant:"contained",onClick:function(){return window.open(e.html_url,"_blank")},fullWidth:!0},"Explore"))))})):r.a.createElement(E.a,{item:!0,style:{paddingTop:"15%"}},r.a.createElement(h.a,{variant:"h5",color:"textSecondary"},"Seems like i haven't created that at once yet :(")))):r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"80vh"}},r.a.createElement(E.a,{item:!0,style:{width:250}},r.a.createElement(I.a,{variant:"buffer",value:null,valueBuffer:null})))))},H=a(17),J=a(263),q=a(265),Y=a(266),$=a(264),K=Object(o.a)((function(e){return{large:{width:e.spacing(20),height:e.spacing(20)},centers:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}})),Q=function(e){var t=Object(H.a)(),a=e.setTitle,n=K(),l=Object(J.a)(t.breakpoints.up("sm")),i=r.a.useState({}),o=Object(c.a)(i,2),s=o[0],m=o[1];return r.a.useEffect((function(){a("About Me");try{fetch("https://api.github.com/users/azharizkita").then((function(e){return e.json()})).then((function(e){m(e)}))}catch(e){console.error(e)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{container:!0,style:{width:"100%",padding:10,minHeight:l?"85vh":"100vh"},justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:12,md:12,style:{padding:15}},s.name?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{variant:"h5",align:"center"},"Greetings!"),r.a.createElement(h.a,{variant:"h5",align:"center",component:"div"},"My name is ",s.name,".")):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{variant:"h5",align:"center"},"Greetings!"),r.a.createElement("div",{className:n.centers},r.a.createElement($.a,{width:250,height:24})))),r.a.createElement(E.a,{item:!0,xs:12,md:12,style:{paddingBottom:15}},r.a.createElement("div",{className:n.centers},r.a.createElement(_.a,{alt:"Remy Sharp",src:s.avatar_url,className:n.large}))),r.a.createElement("div",{style:{paddingBottom:5}}),r.a.createElement(E.a,{item:!0,xs:12,md:12,style:{paddingBottom:15}},r.a.createElement("div",{className:n.centers},r.a.createElement(g.a,{style:{maxWidth:550,width:"100%",minWidth:100}}))),r.a.createElement(E.a,{item:!0,xs:12,md:12,style:{paddingBottom:15,maxWidth:500}},s.name?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{variant:"body1",align:"center"},"Short summary about my activity? ",s.bio,".")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:n.centers},r.a.createElement($.a,{width:500,variant:"text"})))),r.a.createElement(E.a,{item:!0,xs:12,md:12,style:{paddingBottom:15}},r.a.createElement("div",{className:n.centers},r.a.createElement(g.a,{style:{maxWidth:550,width:"100%",minWidth:100}}))),r.a.createElement(E.a,{item:!0,xs:12,md:12,style:{paddingBottom:15}},r.a.createElement(h.a,{variant:"h6",align:"center"},"Reach me out")),r.a.createElement(E.a,{item:!0,xs:12,md:12,style:{paddingBottom:15}},r.a.createElement("div",{className:n.centers},s.name?r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{icon:r.a.createElement(q.a,null),label:"GitHub.com/azharizkita",onClick:function(){return window.open(s.html_url,"_blank")},variant:"outlined"}),r.a.createElement(T.a,{icon:r.a.createElement(Y.a,null),label:"azharizkita@icloud.com",onClick:function(){return window.open("mailto:azharizkita@icloud.com")},variant:"outlined"})):r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{width:500,variant:"text"}))))))},V=a(267),X=a(268),Z=a(269),ee=a(270),te=a(271),ae=a(74),ne=a.n(ae),re=a(103),le=a(104),ie=a(105),ce=a(60),oe=a(110),se=a(108),me=function(e){Object(oe.a)(a,e);var t=Object(se.a)(a);function a(e){var n;return Object(le.a)(this,a),(n=t.call(this,e)).state={loading:!0,title:"",content:""},n.handleNetworkErrors=n.handleNetworkErrors.bind(Object(ce.a)(n)),n}return Object(ie.a)(a,[{key:"componentDidMount",value:function(){this.getGist()}},{key:"componentDidUpdate",value:function(e,t,a){e.gist!==this.props.gist&&this.getGist()}},{key:"getGist",value:function(){var e=Object(re.a)(ne.a.mark((function e(){var t,a,n,r,l,i,c=this;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.gist,n=t.file,r=a.split("/")[1]){e.next=3;break}return e.abrupt("return",this.setState({loading:!1,error:"".concat(a," is not valid format")}));case 3:return e.next=5,this.setState({loading:!0});case 5:this.setupCallback(r),l=document.createElement("script"),i="https://gist.github.com/".concat(a,".json?callback=gist_callback_").concat(r),n&&(i+="&file=".concat(n)),l.type="text/javascript",l.src=i,l.onerror=function(e){return c.handleNetworkErrors(e)},document.head.appendChild(l);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleNetworkErrors",value:function(e){this.setState({loading:!1,error:"".concat(this.props.gist," failed to load")})}},{key:"setupCallback",value:function(e){window["gist_callback_".concat(e)]=function(e){var t={loading:!1,error:e.error||null};t.error||(t.title=e.description,t.content="".concat(e.div.replace(/href=/g,'target="_blank" href='))),this.setState(t)}.bind(this)}},{key:"render",value:function(){if(this.state.loading)return r.a.createElement(E.a,{container:!0,style:{width:"100%",padding:10,height:"100%"},justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,style:{width:250}},r.a.createElement(I.a,{variant:"buffer",value:null,valueBuffer:null})));if(this.state.error)return r.a.createElement(E.a,{container:!0,style:{width:"100%",padding:10,height:"100%"},justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,style:{width:400}},r.a.createElement(h.a,{variant:"h6",align:"center",color:"textSecondary"},"This may tak longer than expected..."),r.a.createElement(I.a,{variant:"buffer",value:null,valueBuffer:null})));var e=(new DOMParser).parseFromString(this.state.content,"text/html");e.querySelectorAll(".gist-meta").forEach((function(e){return e.remove()}));var t=e.body.outerHTML.replace("<body>","").replace("</body>","").trim();return r.a.createElement("section",{className:"gist__content",dangerouslySetInnerHTML:{__html:t}})}}]),a}(n.Component),ue=Object(o.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}})),de=function(e){var t=e.setPageDescription,a=e.setPageTitle,n=e.openId,l=e.setRefresher,i=ue(),o=e.setTitle,s=r.a.useState([]),m=Object(c.a)(s,2),u=m[0],d=m[1],f=r.a.useState(),p=Object(c.a)(f,2),v=p[0],b=p[1],w=r.a.useState(!1),k=Object(c.a)(w,2),j=k[0],C=k[1],x=function(e){var n=e.title,i=e.description,c=e.to;return r.a.createElement(W.a,{color:"primary",onClick:function(){l(Date.now()),C(!0),a(n),t(i)},component:r.a.useMemo((function(){return r.a.forwardRef((function(e,t){return r.a.createElement(O.b,Object.assign({to:c,ref:t},e))}))}),[c]),variant:"contained",fullWidth:!0},"Read Blog")};return r.a.useEffect((function(){n?(b(n),C(!0)):b(void 0)}),[n]),r.a.useEffect((function(){o("Blogs");try{fetch("https://api.github.com/users/azharizkita/gists").then((function(e){return e.json()})).then((function(e){var t={};e.forEach((function(e){var a=e.description.split("-"),n=a[0].trim();"Blog"===n&&(t[+new Date(e.created_at)]=e,t[+new Date(e.created_at)].type=n,t[+new Date(e.created_at)].title=a[1].trim(),t[+new Date(e.created_at)].description=a[2].trim())}));var a=[];Object.keys(t).sort((function(e,t){return t-e})).forEach((function(e){return a.push(t[e])}));var n={};a.forEach((function(e){n[e.id]=e})),d(n)}))}catch(e){console.error(e)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{fullScreen:!0,open:j,onClose:function(){a(""),t(""),C(!1)}},r.a.createElement(X.a,{className:i.root},u&&u[v]?u[v].title:r.a.createElement($.a,{width:250,height:35})),r.a.createElement(Z.a,null,r.a.createElement(me,{gist:"azharizkita/"+v,file:"index.md"})),r.a.createElement(ee.a,null,r.a.createElement(W.a,{variant:"contained",onClick:function(){a(""),t(""),C(!1)},color:"primary"},"Close"))),r.a.createElement(E.a,{container:!0,style:{width:"100%",padding:10,height:"85vh"},justify:"center",alignContent:"center",alignItems:"center"},0!==Object.keys(u).length?Object.values(u).map((function(e,t){return r.a.createElement(E.a,{key:t,item:!0,xs:12,md:4,lg:4,style:{padding:15}},r.a.createElement(R.a,{variant:"outlined"},r.a.createElement(F.a,{style:{minHeight:220}},r.a.createElement(h.a,{variant:"h6",align:"center",color:"textPrimary"},e.title),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(g.a,null),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(E.a,{container:!0,className:i.root,style:{width:"100%"}},r.a.createElement(E.a,{item:!0},r.a.createElement(y.a,{title:"Last update"},r.a.createElement(T.a,{icon:r.a.createElement(te.a,null),label:new Date(e.created_at).toLocaleDateString()+", "+new Date(e.created_at).toLocaleTimeString(),variant:"outlined"})))),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(g.a,null),r.a.createElement("div",{style:{paddingBottom:10}}),r.a.createElement(h.a,{align:"center"},e.description?e.description:"No desription.")),r.a.createElement(M.a,null,r.a.createElement(x,{title:e.title,description:e.description,to:"/?section=blogs&id="+e.id}))))})):r.a.createElement(E.a,{item:!0,style:{width:250}},r.a.createElement(I.a,{variant:"buffer",value:null,valueBuffer:null}))))},Ee=a(273),he=a(274),ge=a(275),fe=a(272),pe=a(276),ve=a(278),ye=a(279),be=a(280),we=a(281),ke=a(282),je=a(106),Ce=function(e){var t=r.a.useState({}),a=Object(c.a)(t,2),n=a[0],l=a[1],i=r.a.useState([]),o=Object(c.a)(i,2),m=o[0],d=o[1],g=r.a.useState(""),f=Object(c.a)(g,2),p=f[0],v=f[1],y=r.a.useState(!1),b=Object(c.a)(y,2),w=b[0],k=b[1],j=e.setTitle;return r.a.useEffect((function(){var e=window.matchMedia("(orientation: portrait)");e.matches?k(!1):k(!0),e.addEventListener("change",(function(e){e.matches?k(!1):k(!0)}))}),[]),r.a.useEffect((function(){j("Covid 19 Monitor");try{fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(e){var t=e.Countries.sort((function(e,t){return t.NewConfirmed-e.NewConfirmed})).splice(0,20),a=[[],[]],n=[],r=[],i=[];Object.values(t).forEach((function(e){n.push(e.NewConfirmed),r.push(e.NewRecovered),i.push(e.NewDeaths),a[0].push(e.Country)})),a[1]=[{data:n,label:"New Confirmed",backgroundColor:"rgb(244, 194, 13, 0.8)"},{data:r,label:"New Recovered",backgroundColor:"rgba(60, 186, 84, 0.8)"},{data:i,label:"New Deaths",backgroundColor:"rgba(219, 50, 54, 0.8)"}],v(new Date(e.Date).toLocaleString()),l(e.Global),d(a)}))}catch(e){console.error(e)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{open:!w},r.a.createElement(Z.a,null,r.a.createElement(E.a,{container:!0,alignContent:"center",alignItems:"center",justify:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(fe.a,{fontSize:"large",className:"rotateOrientation"})),r.a.createElement(E.a,{item:!0,xs:12,md:12},r.a.createElement(h.a,{variant:"subtitle1",color:"textSecondary",align:"center"},"Uh, kinda rotate me for better experience?"))))),w?r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:12,md:2},r.a.createElement(E.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center",style:{height:"calc(100vh - 48px)"}},r.a.createElement(E.a,{item:!0,xs:3,md:12},r.a.createElement(Ee.a,{subheader:r.a.createElement(he.a,{component:"div",id:"nested-list-subheader"},"New Cases (Global)")},r.a.createElement(s.a,null,r.a.createElement(ge.a,null,r.a.createElement(_.a,{style:{backgroundColor:"rgb(244, 194, 13, 0.8)"}},r.a.createElement(pe.a,null))),r.a.createElement(u.a,{primary:"Confirmed",secondary:n&&n.NewConfirmed?n.NewConfirmed.toLocaleString():0})),r.a.createElement(s.a,null,r.a.createElement(ge.a,null,r.a.createElement(_.a,{style:{backgroundColor:"rgba(219, 50, 54, 0.8)"}},r.a.createElement(ve.a,null))),r.a.createElement(u.a,{primary:"Death",secondary:n&&n.NewDeaths?n.NewDeaths.toLocaleString():0})),r.a.createElement(s.a,null,r.a.createElement(ge.a,null,r.a.createElement(_.a,{style:{backgroundColor:"rgba(60, 186, 84, 0.8)"}},r.a.createElement(ye.a,null))),r.a.createElement(u.a,{primary:"Recovered",secondary:n&&n.NewRecovered?n.NewRecovered.toLocaleString():0})))),r.a.createElement(E.a,{item:!0,xs:3,md:12},r.a.createElement(Ee.a,{subheader:r.a.createElement(he.a,{component:"div",id:"nested-list-subheader"},"Total Cases (Global)")},r.a.createElement(s.a,null,r.a.createElement(ge.a,null,r.a.createElement(_.a,{style:{backgroundColor:"rgb(244, 194, 13, 0.8)"}},r.a.createElement(be.a,null))),r.a.createElement(u.a,{primary:"Confirmed",secondary:n&&n.TotalConfirmed?n.TotalConfirmed.toLocaleString():0})),r.a.createElement(s.a,null,r.a.createElement(ge.a,null,r.a.createElement(_.a,{style:{backgroundColor:"rgba(219, 50, 54, 0.8)"}},r.a.createElement(we.a,null))),r.a.createElement(u.a,{primary:"Death",secondary:n&&n.TotalDeaths?n.TotalDeaths.toLocaleString():0})),r.a.createElement(s.a,null,r.a.createElement(ge.a,null,r.a.createElement(_.a,{style:{backgroundColor:"rgba(60, 186, 84, 0.8)"}},r.a.createElement(ke.a,null))),r.a.createElement(u.a,{primary:"Recovered",secondary:n&&n.TotalRecovered?n.TotalRecovered.toLocaleString():0})))))),r.a.createElement(E.a,{item:!0,xs:12,md:10,style:{padding:15,height:"calc(100vh - 48px)"}},r.a.createElement(h.a,{variant:"h6",align:"center",style:{width:"100%"}},"Top 20 Countries"),r.a.createElement(je.Bar,{data:{datasets:m[1],labels:m[0]},options:{maintainAspectRatio:!0,responsive:!0,title:{display:!0,text:"Last update at "+p+" based on https://api.covid19api.com/"},tooltips:{callbacks:{label:function(e,t){return e.yLabel.toLocaleString()}}}}}))):null)},xe=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Se=function(){var e=xe(),t=r.a.useState(),a=Object(c.a)(t,2),n=(a[0],a[1]),l=r.a.useState(new URLSearchParams(window.location.search)),i=Object(c.a)(l,2),o=i[0],L=i[1],T=o.get("section"),_=o.get("id"),R=r.a.useState(""),F=Object(c.a)(R,2),M=F[0],W=F[1],I=r.a.useState(""),P=Object(c.a)(I,2),G=P[0],U=P[1],H=r.a.useState(""),J=Object(c.a)(H,2),q=J[0],Y=J[1],$=r.a.useState(!1),K=Object(c.a)($,2),V=K[0],X=K[1],Z=r.a.useState(window.matchMedia("(prefers-color-scheme: dark)").matches),ee=Object(c.a)(Z,2),te=ee[0],ae=ee[1],ne=function(e){var t=e.icon,a=e.primary,n=e.to;return r.a.createElement(s.a,{selected:M===a,onClick:function(){return X(!1)},button:!0,component:r.a.useMemo((function(){return r.a.forwardRef((function(e,t){return r.a.createElement(O.b,Object.assign({to:n,ref:t},e))}))}),[n])},t?r.a.createElement(m.a,null,t):null,r.a.createElement(u.a,{primary:a}))};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?ae(!0):ae(!1)}));var re=Object(N.a)({palette:{primary:{main:"#212121"},secondary:{main:"#424242"},type:te?"dark":"light"}});return r.a.useEffect((function(){L(new URLSearchParams(window.location.search))}),[window.location.search]),r.a.useEffect((function(){if(null!==T)if("blogs"===T)if(null!==_)try{fetch("https://api.github.com/gists/"+_).then((function(e){return e.json()})).then((function(e){if(e&&e.description){var t=e.description.split("-");if("Blog"===t[0].trim()){var a=t[1].trim(),n=t[2].trim();U(a[0].toUpperCase()+a.slice(1)),Y(n)}else U("Blogs")}else U("Blogs")}))}catch(e){console.log(e)}else U(T[0].toUpperCase()+T.slice(1));else U(T[0].toUpperCase()+T.slice(1))}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,null,r.a.createElement("title",null,""!==G&&"Covid19"!==G?G:"Covid 19 Monitor"),r.a.createElement("meta",{name:"description",content:""!==q?q:"Welcome to my Personal Blog!"})),r.a.createElement(B.a,{theme:re},r.a.createElement(D.a,null),r.a.createElement(O.a,null,r.a.createElement(d.a,{anchor:"left",open:V,onClose:function(){return X(!1)},onOpen:function(){return X(!0)}},r.a.createElement("div",{style:{width:"auto",height:"100vh"},role:"presentation"},r.a.createElement(E.a,{container:!0,style:{width:250,height:"100%"},justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement(h.a,{align:"center",color:"textPrimary",variant:"h6"},"Section"),r.a.createElement(E.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement("div",{style:{paddingBottom:10}})),r.a.createElement(E.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(ne,{to:"/?section=covid19",primary:"Covid 19 Monitor",icon:r.a.createElement(b.a,null)})),r.a.createElement(E.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(ne,{to:"/?section=biography",primary:"About Me",icon:r.a.createElement(w.a,null)})),r.a.createElement(E.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(ne,{to:"/?section=projects",primary:"Projects",icon:r.a.createElement(k.a,null)})),r.a.createElement(E.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(ne,{to:"/?section=blogs",primary:"Blogs",icon:r.a.createElement(j.a,null)})),r.a.createElement(E.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement("div",{style:{paddingBottom:10}})),r.a.createElement(E.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(g.a,null)),r.a.createElement(h.a,{align:"center",color:"textSecondary",variant:"caption"},"\xa9 Copyright ",(new Date).getFullYear(),", Azhari Rizkita"),r.a.createElement(E.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(g.a,null))))),r.a.createElement(f.a,{position:"static",variant:"elevation"},r.a.createElement(p.a,{variant:"dense"},r.a.createElement(v.a,{edge:"start",className:e.menuButton,onClick:function(){return X(!0)},color:"inherit","aria-label":"menu"},r.a.createElement(C.a,null)),r.a.createElement(h.a,{variant:"h6",className:e.title},M),r.a.createElement(y.a,{title:te?"Switch to light mode":"Switch to dark mode"},r.a.createElement(v.a,{onClick:function(){return ae(!te)}},te?r.a.createElement(x.a,{style:{color:"white"}}):r.a.createElement(S.a,{style:{color:"white"}}))))),T?"blogs"===T?r.a.createElement(de,{openId:_,setPageTitle:function(e){return U(e)},setPageDescription:function(e){return Y(e)},setRefresher:function(e){return n(e)},setTitle:function(e){return W(e)}}):"projects"===T?r.a.createElement(A,{setTitle:function(e){return W(e)}}):"biography"===T?r.a.createElement(Q,{setTitle:function(e){return W(e)}}):r.a.createElement(Ce,{setTitle:function(e){return W(e)}}):r.a.createElement(Ce,{setTitle:function(e){return W(e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[227,1,2]]]);
//# sourceMappingURL=main.92ff3225.chunk.js.map