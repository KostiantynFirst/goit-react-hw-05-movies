"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[847],{945:function(e,r,n){n.d(r,{C:function(){return o},D:function(){return i}});var t=n(861),a=n(757),s=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="69e91e492967da1d5458a33a23e1a7b3",i=function(){var e=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("trending/movie/day?",{params:{api_key:u}});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(r),{params:{api_key:u,language:"en-US"}});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},847:function(e,r,n){n.r(r);var t=n(861),a=n(439),s=n(757),c=n.n(s),u=n(791),i=n(689),o=n(87),l=n(945),f=n(184);r.default=function(){var e,r,n=(0,u.useState)([]),s=(0,a.Z)(n,2),p=s[0],d=s[1],v=(0,i.TH)(),h=(0,u.useRef)(null!==(e=null===(r=v.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/dogs"),x=(0,i.UO)().movieId;return(0,u.useEffect)((function(){if(x){var e=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.C)(x);case 2:if(0!==(r=e.sent).data.length){e.next=5;break}return e.abrupt("return");case 5:d(r.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[x]),console.log(p),console.log(v),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("h2",{children:["movieDetails: ",x]}),(0,f.jsx)(o.rU,{to:h.current,children:"\u041d\u0430\u0437\u0430\u0434 \u043a \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"subbreads",children:"\u041f\u043e\u0434\u043f\u043e\u0440\u043e\u0434\u044b"})}),(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"gallery",children:"\u0413\u0430\u043b\u043b\u0435\u0440\u0435\u044f"})})]}),(0,f.jsx)(u.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(i.j3,{})})]})}}}]);
//# sourceMappingURL=847.245a6ce0.chunk.js.map