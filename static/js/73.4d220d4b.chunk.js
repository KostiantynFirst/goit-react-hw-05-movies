"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[73],{73:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,a,c,i,u,s,o=r(861),p=r(439),f=r(757),l=r.n(f),d=r(689),v=r(791),h=r(945),x=r(168),g=r(867),m=g.ZP.div(t||(t=(0,x.Z)(["\n    font-family: Arial, sans-serif;\n    padding: 20px;\n"]))),Z=g.ZP.div(a||(a=(0,x.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 20px;\n"]))),w=g.ZP.div(c||(c=(0,x.Z)(["\n    max-width: 200px;\n    text-align: center;\n"]))),b=g.ZP.img(i||(i=(0,x.Z)(["\n    width: 100%;\n    height: auto;\n"]))),k=g.ZP.div(u||(u=(0,x.Z)(["\n    background-color: #ccc;\n    color: #fff;\n    padding: 10px;\n    border-radius: 5px;\n"]))),y=g.ZP.div(s||(s=(0,x.Z)(["\n    text-align: center;\n    font-size: 18px;\n    margin-top: 20px;\n"]))),_=r(184),j=function(){var n=(0,d.UO)().movieId,e=(0,v.useState)([]),r=(0,p.Z)(e,2),t=r[0],a=r[1],c=(0,v.useState)(!0),i=(0,p.Z)(c,2),u=i[0],s=i[1];return(0,v.useEffect)((function(){if(n){var e=function(){var e=(0,o.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.IQ)(n);case 2:r=e.sent,a(r.data.cast),s(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[n]),(0,_.jsxs)(m,{children:[u&&(0,_.jsx)(Z,{children:"Loading..."}),u&&(0,_.jsx)(Z,{children:t.map((function(n){var e=n.id,r=n.character,t=n.name,a=n.profile_path;return(0,_.jsxs)(w,{children:[a?(0,_.jsx)(b,{src:"https://image.tmdb.org/t/p/w500"+a,alt:t}):(0,_.jsx)(k,{children:"Image not found"}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"Character: "}),r]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"Name: "}),t]})]},e)}))}),!u&&0===t.length&&(0,_.jsx)(y,{children:" We don't have information for this movie"})]})}},945:function(n,e,r){r.d(e,{CB:function(){return o},Df:function(){return s},IQ:function(){return f},q:function(){return p}});var t=r(861),a=r(757),c=r.n(a),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="69e91e492967da1d5458a33a23e1a7b3",s=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("trending/movie/day?",{params:{api_key:u}});case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e),{params:{api_key:u}});case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("search/movie",{params:{api_key:u,language:"en-US",query:e,include_adult:!1,page:1}});case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/credits"),{params:{api_key:u,language:"en-US"}});case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=73.4d220d4b.chunk.js.map