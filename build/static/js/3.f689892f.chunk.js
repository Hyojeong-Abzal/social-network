/*! For license information please see 3.f689892f.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{293:function(e,n,t){e.exports={pagination:"Pagination_pagination__3f3jf",pagePanel:"Pagination_pagePanel__24k4p",pageNumber:"Pagination_pageNumber__2jcLf",selectedPage:"Pagination_selectedPage__1qQw8"}},294:function(e,n,t){var o;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var s=typeof o;if("string"===s||"number"===s)e.push(o);else if(Array.isArray(o)){if(o.length){var r=i.apply(null,o);r&&e.push(r)}}else if("object"===s)if(o.toString===Object.prototype.toString)for(var a in o)t.call(o,a)&&o[a]&&e.push(a);else e.push(o.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(n,[]))||(e.exports=o)}()},295:function(e,n,t){e.exports={userPhoto:"Users_userPhoto__1zhLH",selected:"Users_selected__OAM95"}},296:function(e,n,t){"use strict";t.r(n),t.d(n,"UsersContainerClass",(function(){return U}));var o=t(4),i=t(26),s=t(27),r=t(29),a=t(28),l=t(1),c=t.n(l),u=t(12),g=t(9),p=t(67),j=t(66),d=t(132),h=t(49),f=t(97),b=t(130),O=t(293),P=t.n(O),w=t(294),v=t.n(w),x=t(0),C=function(e){for(var n=e.totalItemsCount,t=e.pageSize,o=e.currentPage,i=e.onPageChanged,s=e.portionSize,r=void 0===s?10:s,a=Math.ceil(n/t),c=[],u=1;u<=a;u++)c.push(u);var g=Math.ceil(a/r),p=Object(l.useState)(1),j=Object(b.a)(p,2),d=j[0],h=j[1],O=(d-1)*r+1,w=d*r;return Object(x.jsx)("div",{className:P.a.pagination,children:Object(x.jsxs)("div",{className:P.a.pagePanel,children:[d>1&&Object(x.jsx)("button",{onClick:function(){h(d-1)},children:"Previous"}),c.filter((function(e){return e>=O&&e<=w})).map((function(e){return Object(x.jsx)("span",{className:v()(Object(f.a)({},P.a.selectedPage,o===e),P.a.pageNumber),onClick:function(){i(e)},children:e},e)})),g>d&&Object(x.jsx)("button",{onClick:function(){h(d+1)},children:"Next"})]})})},m=t(15),F=t(127),_=t(295),S=t.n(_),k=function(e){var n=e.user,t=e.isFollowing,o=e.follow,i=e.unFollow;Object(h.a)(e,["user","isFollowing","follow","unFollow"]);return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsxs)(m.b,{to:"/Profile/"+n.id,children:[Object(x.jsx)("img",{src:null!=n.photos.small?n.photos.small:F.a,className:S.a.userPhoto}),n.name]})}),Object(x.jsx)("div",{children:n.status}),Object(x.jsx)("div",{children:n.followed?Object(x.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){i(n.id)},children:"Unfollow"}):Object(x.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){o(n.id)},children:"Follow"})})]})},y=function(e){var n=e.users,t=e.pageSize,o=e.totalUsersCount,i=e.currentPage,s=void 0===i?1:i,r=e.isFollowing,a=e.follow,l=e.unFollow,c=e.onPageChanged;e.isFollowingAC,Object(h.a)(e,["users","pageSize","totalUsersCount","currentPage","isFollowing","follow","unFollow","onPageChanged","isFollowingAC"]);return Object(x.jsxs)("div",{children:[Object(x.jsx)(C,{pageSize:t,totalItemsCount:o,currentPage:s,portionSize:10,onPageChanged:c}),Object(x.jsx)("div",{children:n.map((function(e){return Object(x.jsx)(k,{user:e,isFollowing:r,follow:a,unFollow:l},e.id)}))})]})},U=function(e){Object(r.a)(t,e);var n=Object(a.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[this.props.isFetching?Object(x.jsx)(p.a,{}):"",Object(x.jsx)(y,Object(o.a)({},this.props))]})}}]),t}(c.a.Component);n.default=Object(g.d)(Object(u.b)((function(e){return{users:e.userPage.users,pageSize:e.userPage.pageSize,totalUsersCount:e.userPage.totalUsersCount,currentPage:e.userPage.currentPage,isFetching:e.userPage.isFetching,isFollowing:e.userPage.isFollowing}}),{follow:d.b,unFollow:d.h,updateUsers:d.i,changeCurrentPage:d.a,setTotalUsersCount:d.f,toggleIsFetching:d.g,isFollowingAC:d.d,getUsersThunk:d.c,onPageChanged:d.e}),j.a)(U)}}]);
//# sourceMappingURL=3.f689892f.chunk.js.map