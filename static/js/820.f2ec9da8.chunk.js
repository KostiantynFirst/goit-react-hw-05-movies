"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[820],{945:function(n,r,e){e.d(r,{CB:function(){return s},Df:function(){return i},q:function(){return p}});var t=e(861),a=e(757),o=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="69e91e492967da1d5458a33a23e1a7b3",i=function(){var n=(0,t.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("trending/movie/day?",{params:{api_key:u}});case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(o().mark((function n(r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(r),{params:{api_key:u}});case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("search/movie",{params:{api_key:u,language:"en-US",query:r,include_adult:!1,page:1}});case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}()},820:function(n,r,e){e.r(r),e.d(r,{default:function(){return y}});var t,a,o,c,u,i=e(861),s=e(439),p=e(757),f=e.n(p),l=e(791),d=e(945),v=e(168),g=e(867),h=e(87),x=g.ZP.div(t||(t=(0,v.Z)(["\n    font-family: Arial, sans-serif;\n    background-color: #f0f0f0;\n    margin: 0;\n    padding-top: 10px;\n"]))),m=g.ZP.h1(a||(a=(0,v.Z)(["\n    font-size: 24px;\n    font-weight: bold;\n    text-align: center;\n    margin-bottom: 20px;\n    /* margin-top: 20px; */\n    color: #333;\n"]))),b=g.ZP.ul(o||(o=(0,v.Z)(["\n    width: 80%;\n    margin: 20px auto;\n    list-style-type: none;\n    background-color: #fff;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n"]))),Z=g.ZP.li(c||(c=(0,v.Z)(["\n    margin-bottom: 15px;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: #f5f5f5;\n    border: 1px solid #ccc;\n"]))),w=(0,g.ZP)(h.rU)(u||(u=(0,v.Z)(["\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 5px;\n"]))),k=e(184),y=function(){var n=(0,l.useState)([]),r=(0,s.Z)(n,2),e=r[0],t=r[1];return(0,l.useEffect)((function(){var n=function(){var n=(0,i.Z)(f().mark((function n(){var r,e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.Df)();case 3:r=n.sent,(e=r.data.results)&&t(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("Error receiving data:",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,k.jsxs)(x,{children:[(0,k.jsx)(m,{children:"Trending today"}),(0,k.jsx)(b,{children:e.map((function(n){var r=n.id,e=n.title;return(0,k.jsx)(Z,{children:(0,k.jsx)(w,{to:"movies/".concat(r),children:e},r)},r)}))})]})}}}]);
//# sourceMappingURL=820.f2ec9da8.chunk.js.map