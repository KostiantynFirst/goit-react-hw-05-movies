"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[305],{945:function(n,e,r){r.d(e,{CB:function(){return u},Df:function(){return c},IQ:function(){return p},q:function(){return l}});var t=r(861),i=r(757),a=r.n(i),o=r(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="69e91e492967da1d5458a33a23e1a7b3",c=function(){var n=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("trending/movie/day?",{params:{api_key:s}});case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e),{params:{api_key:s}});case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("search/movie",{params:{api_key:s,language:"en-US",query:e,include_adult:!1,page:1}});case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/credits"),{params:{api_key:s,language:"en-US"}});case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},305:function(n,e,r){r.r(e),r.d(e,{default:function(){return N}});var t,i,a,o,s,c,u,l,p,d,f,x,h,v,g,m=r(861),Z=r(439),j=r(757),b=r.n(j),w=r(791),y=r(689),k=r(945),_=r(168),P=r(867),S=r(87),U=P.ZP.div(t||(t=(0,_.Z)(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 20px;\n"]))),z=(0,P.ZP)(S.rU)(i||(i=(0,_.Z)(["\n  text-decoration: none;\n  color: #007bff;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  font-size: 16px;\n"]))),C=P.ZP.div(a||(a=(0,_.Z)(["\n  margin-top: 30px;\n  padding: 20px;\n  background-color: #f5f5f5;\n"]))),D=P.ZP.ul(o||(o=(0,_.Z)(["\n  list-style-type: none;\n  padding: 0;\n  margin-top: 15px;\n\n  li {\n    margin-bottom: 10px;\n  }\n"]))),I=(0,P.ZP)(S.rU)(s||(s=(0,_.Z)(["\n  text-decoration: none;\n  color: #333;\n  font-weight: bold;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),R=P.ZP.div(c||(c=(0,_.Z)(["\n    font-family: Arial, sans-serif;\n    display: flex;\n    gap: 20px;\n    padding: 20px;\n"]))),q=P.ZP.img(u||(u=(0,_.Z)(["\n    width: 300px;\n    height: auto;\n    border: 1px solid #ccc;\n"]))),A=P.ZP.div(l||(l=(0,_.Z)(["\n    flex: 1;\n"]))),B=P.ZP.div(p||(p=(0,_.Z)(["\n    width: 300px;\n    height: 450px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #ccc;\n    color: #fff;\n    border: 1px solid #ccc;\n"]))),G=P.ZP.h1(d||(d=(0,_.Z)(["\n    font-size: 24px;\n    margin-bottom: 10px;\n"]))),L=P.ZP.p(f||(f=(0,_.Z)(["\n    margin-bottom: 10px;\n"]))),O=P.ZP.h2(x||(x=(0,_.Z)(["\n    font-size: 20px;\n    margin-top: 20px;\n    margin-bottom: 10px;\n"]))),T=P.ZP.h2(h||(h=(0,_.Z)(["\n    font-size: 20px;\n    margin-top: 20px;\n    margin-bottom: 10px;\n"]))),E=P.ZP.ul(v||(v=(0,_.Z)(["\n    list-style: none;\n    padding: 0;\n"]))),F=P.ZP.li(g||(g=(0,_.Z)(["\n    font-size: 16px;\n    margin-bottom: 5px;\n"]))),H=r(184),M=function(n){var e=n.movieInfoDetails,r=e.title,t=e.original_title,i=e.release_date,a=e.overview,o=void 0===a?"There is no overview":a,s=e.popularity,c=e.genres,u=void 0===c?[]:c,l=e.poster_path,p=e.status,d=new Date(i).getFullYear();return(0,H.jsxs)(R,{children:[l?(0,H.jsx)(q,{src:"https://image.tmdb.org/t/p/w500"+l,alt:"poster"}):(0,H.jsx)(B,{children:"No image"}),(0,H.jsxs)(A,{children:[(0,H.jsxs)(G,{children:[r,"/",t]}),(0,H.jsxs)(L,{children:[(0,H.jsx)("b",{children:"Release date:"})," ",d]}),(0,H.jsxs)(L,{children:[(0,H.jsx)("b",{children:"User Score:"}),Math.round(s)," %"]}),(0,H.jsxs)(L,{children:[(0,H.jsx)("b",{children:"Status:"})," ",p]}),(0,H.jsx)(O,{children:"Overview"}),(0,H.jsx)("p",{children:o}),(0,H.jsx)(T,{children:"Genres"}),(0,H.jsx)(E,{children:u.map((function(n){return(0,H.jsx)(F,{children:n.name},n.id)}))})]})]})},N=function(){var n,e,r=(0,w.useState)([]),t=(0,Z.Z)(r,2),i=t[0],a=t[1],o=(0,w.useState)(!0),s=(0,Z.Z)(o,2),c=s[0],u=s[1],l=(0,y.TH)(),p=(0,w.useRef)(null===(n=l.state)||void 0===n?void 0:n.from),d=(0,y.UO)().movieId;return(0,w.useEffect)((function(){if(d){var n=function(){var n=(0,m.Z)(b().mark((function n(){var e;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,k.CB)(d);case 2:if(0!==(e=n.sent).data.length){n.next=5;break}return n.abrupt("return");case 5:a(e.data),u(!1);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[d]),(0,H.jsxs)(U,{children:[(0,H.jsx)(z,{to:null!==(e=p.current)&&void 0!==e?e:"/",children:"Go back"}),!c&&(0,H.jsx)(M,{movieInfoDetails:i}),(0,H.jsxs)(C,{children:[(0,H.jsx)("p",{children:"Additional information"}),(0,H.jsxs)(D,{children:[(0,H.jsx)("li",{children:(0,H.jsx)(I,{to:"cast",children:"Cast"})}),(0,H.jsx)("li",{children:(0,H.jsx)(I,{to:"reviews",children:"Reviews"})})]})]}),(0,H.jsx)(w.Suspense,{fallback:(0,H.jsx)("div",{children:"Loading..."}),children:(0,H.jsx)(y.j3,{})})]})}}}]);
//# sourceMappingURL=305.46dca9b6.chunk.js.map