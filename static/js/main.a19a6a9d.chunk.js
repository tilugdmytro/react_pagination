(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),r=c(1);c(10);var l=c(2),s=c.n(l),o=c(0),j=function(e){for(var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=[],r=Math.ceil(a/c),l=1===t,j=t===r,d=1;d<=r;d+=1)i.push(d);return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:l}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":l,onClick:function(){1!==t&&n(t-1)},children:"\xab"})}),i.map((function(e){return Object(o.jsx)("li",{className:s()("page-item",{active:t===e}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(o.jsx)("li",{className:s()("page-item",{disabled:j}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":j,onClick:function(){t!==r&&n(t+1)},children:"\xbb"})})]})},d=function(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((function(e){return"Item ".concat(e)})),h=[3,5,10,20],u=function(){var e=Object(r.useState)(1),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(5),l=Object(i.a)(n,2),s=l[0],u=l[1],p=(c-1)*s,g=c*s<d.length?c*s:d.length,m=d.slice(p,g);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat(p+1," - ").concat(g," of ").concat(d.length,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:s,onChange:function(e){u(+e.target.value),t(1)},children:h.map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:d.length,perPage:s,currentPage:c,onPageChange:t}),Object(o.jsx)("ul",{children:m.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.a19a6a9d.chunk.js.map