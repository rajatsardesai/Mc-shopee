"use strict";(self.webpackChunkhekto=self.webpackChunkhekto||[]).push([[570],{2495:function(e,r,t){t(2791);var n=t(6907),a=t(184);r.Z=function(e){var r=e.title;return(0,a.jsx)(n.B6,{children:(0,a.jsx)(n.ql,{children:(0,a.jsx)("title",{children:r})})})}},7570:function(e,r,t){t.r(r);var n=t(2791),a=t(2495),s=t(9184),o=t(5890),c=t(2591),d=t(7022),i=t(3360),p=t(4266),u=t(9434),l=t(6672),h=t(1087),f=t(184);r.default=function(){var e=(0,u.I0)(),r=(0,u.v9)((function(e){return e.myOrders})),t=r.headerLoading,y=r.error,v=r.message,x=r.orders;return(0,n.useEffect)((function(){e((0,l.TG)())}),[e]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:"Your Orders -@Hekto"}),(0,f.jsx)(s.Z,{progressLoading:t}),y&&(0,f.jsx)(o.Z,{error:y,message:v}),(0,f.jsx)(d.Z,{className:"my-5 h-60vh",children:x&&x.length>0?(0,f.jsxs)(c.Z,{bordered:!0,hover:!0,responsive:"md",children:[(0,f.jsx)("thead",{className:"bg-gray-400-color",children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"Order Id"}),(0,f.jsx)("th",{children:"Status"}),(0,f.jsx)("th",{className:"text-nowrap",children:"Items Qty"}),(0,f.jsx)("th",{children:"Amount"}),(0,f.jsx)("th",{children:"Actions"})]})}),(0,f.jsx)("tbody",{children:x.map((function(e){return(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:e._id}),(0,f.jsx)("td",{className:"Delivered"===e.orderStatus?"text-success":"text-danger",children:e.orderStatus}),(0,f.jsx)("td",{children:e.orderItems.length}),(0,f.jsx)("td",{children:e.totalPrice}),(0,f.jsx)("td",{children:(0,f.jsx)(h.rU,{to:"/order/".concat(e._id),className:"text-white text-decoration-none",children:(0,f.jsx)(i.Z,{className:"bg-secondary-color border-0 py-2 px-3 rounded-0 text-nowrap",children:"View Order"})})})]},e._id)}))})]}):(0,f.jsx)(p.Z,{children:(0,f.jsx)("span",{className:"text-center text-dark font-20",children:"No orders to show"})})})]})}},6672:function(e,r,t){t.d(r,{Cs:function(){return i},LV:function(){return c},TG:function(){return d},s$:function(){return l},wH:function(){return p},zk:function(){return u}});var n=t(4165),a=t(5861),s=t(8213),o=t(1243),c=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var a,c,d;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t({type:s.ib}),t({type:s.HD,orderLoading:0}),a={headers:{"Content-Type":"application/json"}},r.next=6,o.Z.post("/api/v1/order/new",e,a);case 6:c=r.sent,d=c.data,t({type:s.HD,orderLoading:50}),t({type:s.mr,payload:d}),t({type:s.HD,orderLoading:100}),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),t({type:s.Sr,payload:r.t0.response.data.message});case 16:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(e){return r.apply(this,arguments)}}()},d=function(){return function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:s.c$}),r({type:s.HD,headerLoading:0}),e.next=5,o.Z.get("/api/v1/orders/me");case 5:t=e.sent,a=t.data,r({type:s.HD,headerLoading:50}),r({type:s.gF,payload:a.orders}),r({type:s.HD,headerLoading:100}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),r({type:s.I7,payload:e.t0.response.data.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(r){return e.apply(this,arguments)}}()},i=function(e,r){return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(a){var c,d,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:s.Mi}),a({type:s.HD,headerLoading:0}),c={headers:{"Content-Type":"application/json"}},t.next=6,o.Z.put("/api/v1/admin/order/".concat(e),r,c);case 6:d=t.sent,i=d.data,a({type:s.HD,headerLoading:50}),a({type:s.Bx,payload:i}),a({type:s.HD,headerLoading:100}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),a({type:s.vs,payload:t.t0.response.data.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var a,c;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t({type:s.B6}),t({type:s.HD,headerLoading:0}),r.next=5,o.Z.delete("/api/v1/admin/order/".concat(e));case 5:a=r.sent,c=a.data,t({type:s.HD,headerLoading:50}),t({type:s.Sn,payload:c}),t({type:s.HD,headerLoading:100}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),t({type:s.gq,payload:r.t0.response.data.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},u=function(){return function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:s.ym}),r({type:s.HD,headerLoading:0}),e.next=5,o.Z.get("/api/v1/admin/orders");case 5:t=e.sent,a=t.data,r({type:s.HD,headerLoading:50}),r({type:s.Wd,payload:a.orders}),r({type:s.HD,headerLoading:100}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),r({type:s.RB,payload:e.t0.response.data.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(r){return e.apply(this,arguments)}}()},l=function(e){return function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var a,c;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t({type:s.YO}),t({type:s.HD,headerLoading:0}),r.next=5,o.Z.get("/api/v1/order/".concat(e));case 5:a=r.sent,c=a.data,t({type:s.HD,headerLoading:50}),t({type:s.um,payload:c.order}),t({type:s.HD,headerLoading:100}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),t({type:s.Ab,payload:r.t0.response.data.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}},2591:function(e,r,t){var n=t(1413),a=t(5987),s=t(1694),o=t.n(s),c=t(2791),d=t(162),i=t(184),p=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=c.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,c=e.striped,u=e.bordered,l=e.borderless,h=e.hover,f=e.size,y=e.variant,v=e.responsive,x=(0,a.Z)(e,p),g=(0,d.vE)(t,"table"),m=o()(s,g,y&&"".concat(g,"-").concat(y),f&&"".concat(g,"-").concat(f),c&&"".concat(g,"-").concat("string"===typeof c?"striped-".concat(c):"striped"),u&&"".concat(g,"-bordered"),l&&"".concat(g,"-borderless"),h&&"".concat(g,"-hover")),Z=(0,i.jsx)("table",(0,n.Z)((0,n.Z)({},x),{},{className:m,ref:r}));if(v){var j="".concat(g,"-responsive");return"string"===typeof v&&(j="".concat(j,"-").concat(v)),(0,i.jsx)("div",{className:j,children:Z})}return Z}));r.Z=u}}]);
//# sourceMappingURL=570.0840750d.chunk.js.map