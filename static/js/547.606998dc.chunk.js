"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[547],{945:function(n,e,r){r.d(e,{CB:function(){return i},Df:function(){return s},q:function(){return p}});var t=r(861),o=r(757),a=r.n(o),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="69e91e492967da1d5458a33a23e1a7b3",s=function(){var n=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("trending/movie/day?",{params:{api_key:u}});case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(e),{params:{api_key:u}});case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("search/movie",{params:{api_key:u,language:"en-US",query:e,include_adult:!1,page:1}});case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},547:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,o,a,c,u=r(861),s=r(439),i=r(757),p=r.n(i),l=r(791),f=r(689),d=r(87),h=r(945),v=r(168),x=r(867),g=x.ZP.div(t||(t=(0,v.Z)(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 20px;\n"]))),m=x.ZP.form(o||(o=(0,v.Z)(["\n\n  display: flex;\n  align-items:center;\n  margin-bottom: 20px;\n\n  input {\n      flex: 1;\n      padding: 10px;\n      font-size: 16px;\n      border: 1px solid #007bff;\n      border-radius: 5px;\n      margin-right: 10px;\n  }\n\n  button {\n    padding: 10px 20px;\n    font-size: 16px;\n    border: none;\n    border-radius: 5px;\n    background-color: #007bff;\n    color: #fff;\n    cursor: pointer;\n    transition: background-color 0.3s;\n\n    &:hover {\n      background-color: #0056b3;\n    }\n\n  }\n\n"]))),b=x.ZP.ul(a||(a=(0,v.Z)(["\n  list-style-type: none;\n  padding: 0;\n\n  li {\n    margin-bottom: 15px;\n  }\n\n  a {\n    text-decoration: none;\n    color: #333;\n    font-weight: bold;\n    display: block;\n    transition: color 0.3s ease;\n\n    &:hover {\n      color: #007bff;\n    }\n  }\n"]))),Z=x.ZP.div(c||(c=(0,v.Z)(["\n  color: #ff0000;\n  font-size: 18px;\n  margin-top: 20px;\n"]))),y=r(184),k=function(){var n=(0,l.useState)([]),e=(0,s.Z)(n,2),r=e[0],t=e[1],o=(0,l.useState)(!1),a=(0,s.Z)(o,2),c=a[0],i=a[1],v=(0,f.TH)(),x=(0,d.lr)(),k=(0,s.Z)(x,2),w=k[0],_=k[1],j=w.get("search");(0,l.useEffect)((function(){if(i(!1),j){var n=function(){var n=(0,u.Z)(p().mark((function n(){var e,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.q)(j);case 3:e=n.sent,r=e.data.results,console.log(r),0===r.length?i(!0):t(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error("Error fetching movies:",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}else t([])}),[j]);return(0,y.jsxs)(g,{children:[(0,y.jsxs)(m,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,r=e.elements.search.value;_({search:r}),e.reset()},children:[(0,y.jsx)("input",{name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),(0,y.jsx)("button",{type:"submit",children:"Search"})]}),j&&!c&&(0,y.jsx)(b,{children:r.map((function(n){var e=n.id,r=n.name,t=n.title;return(0,y.jsx)("li",{children:(0,y.jsxs)(d.rU,{to:"".concat(e),state:{from:v},children:[t," ",r]},e)},e)}))}),c&&(0,y.jsx)(Z,{children:"Sorry, there are no results for your query!"})]})}}}]);
//# sourceMappingURL=547.606998dc.chunk.js.map