(this.webpackJsonpwitcher_3_showcase=this.webpackJsonpwitcher_3_showcase||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),i=a.n(r),c=a(12),o=a.n(c),s=(a(124),a.p,a(125),a(42)),l=a.p+"static/media/loader_empty.8731d3fc.svg",u=a.p+"static/media/loader_partial_1.da1dca86.svg",d=a.p+"static/media/loader_partial_2.d4581469.svg",p=a.p+"static/media/loader_full.5e5aca6c.svg",b=a(110),h="EMPTY",j="PARTIAL_1",m="PARTIAL_2",g="FULL",x=Object(b.a)({main:{backgroundColor:"#1D1A1A",position:"absolute",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",zIndex:9999}}),O=function(e){var t,a=e.delay,i=void 0===a?250:a,c=e.show,o=void 0===c||c,b=Object(r.useState)(h),O=Object(s.a)(b,2),f=O[0],v=O[1],w=Object(r.useRef)(),y=x(),k=Object(r.useCallback)((function(e,t){switch(e){case h:t(j);break;case j:t(m);break;case m:t(g);break;case g:default:t(h)}}),[]);switch(Object(r.useEffect)((function(){return clearTimeout(w.current),w.current=setTimeout((function(){return k(f,v)}),i),function(){return clearTimeout(w.current)}}),[f,k,i]),f){case h:t=l;break;case j:t=u;break;case m:t=d;break;case g:t=p;break;default:t=l}return o?Object(n.jsx)("div",{className:y.main,children:Object(n.jsx)("img",{src:t,alt:"loading..."})}):null},f=a(55),v=a(15),w=a(64),y=a(11),k=a(195),C=a(205),A=a(199),T=a(18),E=a(45),I=a.n(E),P=a(65),S="INACTIVE",N="START",L="SUCCESSFULL",D="INVALID",R="SERVERERROR",_="DO_LOGOUT",M={isAuthenticated:!1,loginStatus:S,errorMessage:null};var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(y.a)(Object(y.a)({},e),{},{isAuthenticated:!1,loginStatus:N,errorMessage:null});case L:return Object(y.a)(Object(y.a)({},e),{},{isAuthenticated:!0,loginStatus:L,errorMessage:null});case D:return Object(y.a)(Object(y.a)({},e),{},{isAuthenticated:!1,loginStatus:D,errorMessage:t.error});case R:return Object(y.a)(Object(y.a)({},e),{},{isAuthenticated:!1,loginStatus:R,errorMessage:t.error});case _:return Object(y.a)(Object(y.a)({},e),{},{isAuthenticated:!1,loginStatus:S});default:return e}},W=a.p+"static/media/background.67764b17.png",U=a.p+"static/media/title.42f12a03.png",B=Object(k.a)((function(e){return{main:{backgroundImage:"url(".concat(W,")"),height:"100vh",width:"100vw",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"#1D1A1A",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},box:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},inputUnderline:{borderBottom:"1px solid #A99E7E"},input:{color:"white"},label:{color:"#A99E7E"}}})),H=function(){var e=B(),t=Object(T.c)((function(e){return e.auth.loginStatus})),a=Object(T.c)((function(e){return e.auth.errorMessage})),i=Object(T.b)(),c=Object(r.useState)({password:"",email:""}),o=Object(s.a)(c,2),l=o[0],u=o[1],d=Object(r.useCallback)((function(e){var t,a;e.preventDefault(),i((t=l.email,a=l.password,function(){var e=Object(P.a)(I.a.mark((function e(n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:N}),e.prev=1,e.next=4,new Promise((function(e){setTimeout(e,750)}));case 4:n("test@gmail.com"==t&&"1234"==a?{type:L}:{type:D,error:"Invalid login or password"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n({type:R,error:"There was an error while connecting to the server"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()))}),[i,l]),p=Object(r.useCallback)((function(e){var t=e.target.value,a=e.target.name;u((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(w.a)({},a,t))}))}),[]);return Object(n.jsx)("div",{className:e.main,children:Object(n.jsxs)("form",{className:e.box,onSubmit:d,children:[Object(n.jsx)("img",{src:U,alt:"The Witcher 3: Wild Hunt"}),Object(n.jsx)(O,{show:t===N}),Object(n.jsx)(C.a,{label:"E-mail",InputProps:{classes:{underline:e.inputUnderline,root:e.input}},InputLabelProps:{classes:{root:e.label}},classes:{root:e.input},name:"email",value:l.email,onChange:p,type:"email",required:!0}),Object(n.jsx)(C.a,{label:"Password",InputProps:{classes:{underline:e.inputUnderline,root:e.input}},InputLabelProps:{classes:{root:e.label}},classes:{root:e.input},name:"password",value:l.password,onChange:p,type:"password",required:!0}),Object(n.jsx)("p",{children:a}),Object(n.jsx)(A.a,{type:"submit",variant:"outlined",style:{marginTop:"12px"},children:"Login"})]})})},Y=a(203),V=a(70),z=function(e){var t=e.children,a=Object(V.a)(e,["children"]),r=Object(T.c)((function(e){return e.auth.isAuthenticated}));return Object(n.jsx)(v.b,Object(y.a)(Object(y.a)({},a),{},{render:function(e){var a=e.location;return r?Object(n.jsx)(v.a,{to:{pathname:"/trailers",state:{from:a}}}):t}}))},G=function(e){var t=e.children,a=Object(V.a)(e,["children"]),i=Object(T.c)((function(e){return e.auth.isAuthenticated})),c=Object(T.c)((function(e){return e.auth.selectedAccount}));return Object(r.useEffect)((function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.scrollTo(0,0)}),[i,c]),Object(n.jsx)(v.b,Object(y.a)(Object(y.a)({},a),{},{render:function(e){var a=e.location;return i?t:Object(n.jsx)(v.a,{to:{pathname:"/login",state:{from:a}}})}}))},q=a(201),J=a(202),Q=a(112),X=a(80),Z=a(103),K=a.n(Z),$="FETCHING",ee="DONE",te="FAILED",ae={nextPageToken:"",items:[],videosStatus:"INACTIVE"},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="AIzaSyA--tq9ulVwEYcThHEW_uAZUIY1nyGpgc0",a="PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF",n=void 0===e||null===e||!1===e||""===e?"":"&pageToken=".concat(e),r="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=".concat(a,"&key=").concat(t).concat(n);return r},re=function(e){return function(){var t=Object(P.a)(I.a.mark((function t(a){var n,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=ne(e),a({type:$}),t.prev=2,t.next=5,K.a.get(n);case 5:r=t.sent,a({type:ee,payload:{items:r.data.items,nextPageToken:r.data.nextPageToken}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a({type:te,error:"There was an error while connecting to the server"});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()};var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(y.a)(Object(y.a)({},e),{},{videosStatus:$});case ee:var a;return a=e.items.length>0?[].concat(Object(X.a)(e.items),Object(X.a)(t.payload.items)):t.payload.items,Object(y.a)(Object(y.a)({},e),{},{videosStatus:ee,nextPageToken:t.payload.nextPageToken,items:a});default:return e}},ce=a(207),oe=a(200),se=a(104),le=a.n(se),ue=a(105),de=a.n(ue),pe=Object(k.a)((function(e){return{wrapper:{overflow:"visible",backgroundColor:"transparent","@media (max-width: 640px)":{maxWidth:"75%",maxHeight:"75%",height:"100%",width:"100%"},maxWidth:"90%",maxHeight:"90%",height:"100%",width:"100%"},close:{position:"absolute",right:0,top:0,transform:"translate(50%, -50%)",padding:"4px",color:"white",backgroundColor:e.palette.primary.main}}})),be=function(e){var t=e.open,a=e.onClose,r=e.id,i=pe();return console.log(r),Object(n.jsxs)(ce.a,{open:t,onClose:a,PaperProps:{className:i.wrapper},children:[Object(n.jsx)(oe.a,{className:i.close,onClick:a,color:"primary",variant:"container",children:Object(n.jsx)(de.a,{})}),Object(n.jsx)(le.a,{url:"https://www.youtube.com/watch?v=".concat(r),playing:!0,width:"100%",height:"100%"})]})},he=Object(k.a)((function(e){return{main:{border:"solid 1px ".concat(e.palette.primary.main),padding:"4px",width:"122px",height:"92px",position:"relative","@media (min-width: 600px)":{width:"calc((100vw - 300px)/2 - 24px)",height:"100%"}},img:{width:"100%"},title:{position:"absolute",bottom:0,left:0,textAlign:"center",width:"100%"}}})),je=function(e){var t=e.url,a=e.title,i=e.id,c=Object(r.useState)(!1),o=Object(s.a)(c,2),l=o[0],u=o[1],d=he(),p=Object(r.useCallback)((function(e){e.preventDefault(),console.log("opening"),u(!0)}),[]),b=Object(r.useCallback)((function(e){e.preventDefault(),console.log("closing"),u(!1)}),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(Q.a,{onClick:p,className:d.main,children:[Object(n.jsx)("img",{className:d.img,src:t}),Object(n.jsx)("p",{className:d.title,children:a})]}),Object(n.jsx)(be,{open:l,onClose:b,id:i})]})},me=a(106),ge=Object(k.a)((function(e){return{main:{display:"flex",backgroundImage:"url(".concat(W,")"),height:"100vh",width:"100vw",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"#1D1A1A","@media(max-width: 600px)":{paddingTop:"48px"}},menu:{display:"flex",flexDirection:"column",maxWidth:"300px",borderRight:"solid 1px ".concat(e.palette.primary.main),padding:"12px",position:"relative"},image:{"@media(min-height: 320px)":{marginTop:"48px"}},trailers:{width:"100%",background:"linear-gradient(90deg, black, transparent)",height:"100vh",padding:"12px 0 12px 12px","@media(max-width: 600px)":{height:"calc(100vh - 48px)"}},buttonContainer:{display:"flex",flexDirection:"column",justifyContent:"center","@media(min-height: 510px)":{position:"absolute",top:"50%",transform:"translateY(-50%)",left:0,width:"100%",padding:"12px"}},tileContainer:{display:"grid",gridTemplateColumns:"120px 120px",gridTemplateRows:"auto",rowGap:"12px",justifyContent:"space-evenly",width:"100%",maxHeight:"calc(100vh - 24px)","@media (min-width: 600px)":{gridTemplateColumns:"auto auto"},"@media(max-width: 600px)":{height:"calc(100vh - 48px - 24px)"}},trackY:{width:"5px !important",backgroundColor:"".concat(e.palette.primary.main," !important")},topBar:{color:e.palette.primary.main,position:"absolute",height:"48px",width:"100%",backgroundColor:"#1D1A1A",zIndex:"2",marginBottom:"48px",display:"flex",alignItems:"center",padding:"0 12px",borderBottom:"solid 1px currentColor",top:0,"@media(min-width: 601px)":{display:"none"},justifyContent:"space-between"},logout:{color:e.palette.primary.main,textDecoration:"underline",padding:"0 12px"}}})),xe=function(){var e=ge(),t=Object(T.b)(),a=Object(T.c)((function(e){return e.videos.nextPageToken})),i=Object(T.c)((function(e){return e.videos.items})),c=Object(r.useCallback)((function(){t(re(a))}),[t,a]),o=Object(r.useCallback)((function(){t({type:_})})),s=Object(r.useMemo)((function(){return i.map((function(e){console.log(e);var t=e.snippet.thumbnails.default.url,a=e.snippet.title,n=e.id,i=e.snippet.resourceId.videoId;return Object(r.createElement)(je,Object(y.a)(Object(y.a)({},{url:t,title:a,id:i}),{},{key:n}))}))}),[i]);Object(r.useEffect)((function(){t(re())}),[t]);var l=Object(q.a)("(min-width:600px)");return Object(n.jsxs)("div",{className:e.main,children:[Object(n.jsxs)("div",{className:e.topBar,hidden:l,children:[Object(n.jsx)(J.a,{children:"Witcher 3 Showcase"}),Object(n.jsx)(Q.a,{className:e.logout,children:Object(n.jsx)(J.a,{children:"Logout"})})]}),Object(n.jsxs)("div",{className:e.menu,style:{display:l?"":"none"},children:[Object(n.jsx)("img",{className:e.image,src:U,alt:"The Witcher 3: Wild Hunt"}),Object(n.jsxs)("div",{className:e.buttonContainer,children:[Object(n.jsx)(A.a,{variant:"outlined",style:{margin:"12px"},children:"Trailers"}),Object(n.jsx)(A.a,{variant:"outlined",style:{margin:"12px"},onClick:o,children:"Logout"})]})]}),Object(n.jsx)("div",{className:e.trailers,children:Object(n.jsx)(me.a,{thumbYProps:{className:e.trackY},children:Object(n.jsxs)("div",{className:e.tileContainer,children:[s,a&&Object(n.jsx)(A.a,{variant:"outlined",onClick:c,style:{gridColumn:"span 2"},children:"More"})]})})})]})};var Oe=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(Y.a,{}),Object(n.jsx)(f.a,{basename:"/Witcher-3-Showcase",children:Object(n.jsxs)(v.d,{children:[Object(n.jsx)(z,{path:"/login",children:Object(n.jsx)(H,{})}),Object(n.jsx)(G,{path:"/trailers",exact:!0,children:Object(n.jsx)(xe,{})}),Object(n.jsx)(G,{path:"/trailers/:trlr",children:"trailer"}),Object(n.jsx)(v.b,{path:"*",children:Object(n.jsx)(v.a,{to:{pathname:"/trailers"}})})]})}),Object(n.jsx)(O,{show:!1})]})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,209)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))},ve=a(109),we=a(204),ye=a(32),ke=a(108),Ce=Object(ye.c)({auth:F,videos:ie}),Ae=ye.d,Te=Object(ye.e)(Ce,Ae(Object(ye.a)(ke.a))),Ee=Object(ve.a)({palette:{type:"dark",primary:{main:"#A99E7E",contrastText:"rgba(255, 255, 255, 0.87)"},secondary:{main:"#A99E7E",contrastText:"rgba(255, 255, 255, 0.87)"}},overrides:{MuiButton:{root:{borderColor:"#A99E7E",color:"#A99E7E"}}}});console.log(Ee),o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(T.a,{store:Te,children:Object(n.jsx)(we.a,{theme:Ee,children:Object(n.jsx)(Oe,{})})})}),document.getElementById("root")),fe()}},[[166,1,2]]]);
//# sourceMappingURL=main.3455a33f.chunk.js.map