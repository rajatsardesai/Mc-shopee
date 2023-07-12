"use strict";(self.webpackChunkhekto=self.webpackChunkhekto||[]).push([[557],{557:function(e,r,a){a.r(r);var t=a(2791),n=a(2495),s=a(9184),o=a(5890),i=a(9890),c=a(9743),d=a(2677),l=a(7022),u=a(3360),p=a(4266),m=a(5630),h=a(2592),y=a(7689),f=a(1087),g=a(9434),v=a(7456),b=a(1359),Z=a(5705),x=a(4848),w=a(184),j={name:"",price:0,description:"",category:"",stock:0,images:[],imagesPreview:[]};r.default=function(){var e=(0,g.I0)(),r=(0,y.s0)(),a=(0,g.v9)((function(e){return e.newProduct})),P=a.loading,k=a.headerLoading,N=a.error,L=a.message,C=a.success,D=["Sofas","Beds","Wardrobes","Dressing Tables","Dining Tables","Study Tables","Chairs","TV and Media Units"],H=(0,Z.TA)({initialValues:j,validationSchema:x.Iy,onSubmit:function(r){var a=r.name,t=r.price,n=r.description,s=r.category,o=r.stock,i=r.images,c=new FormData;c.set("name",a),c.set("price",t),c.set("description",n),c.set("category",s),c.set("stock",o),i.forEach((function(e){c.append("images",e)})),e((0,b.ry)(c))}}),q=H.values,I=H.setFieldValue,_=H.errors,R=H.touched,E=H.handleBlur,F=H.handleChange,S=H.handleSubmit;return(0,t.useEffect)((function(){C&&(I("images",[]),I("imagesPreview",[]),e({type:v.Q5}),r("/admin/products"))}),[r,e,C,I]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(n.Z,{title:"Create New Product - Admin"}),(0,w.jsx)(s.Z,{progressLoading:k}),P&&(0,w.jsx)(o.Z,{message:L}),(N||C||P)&&(0,w.jsx)(o.Z,{error:N,message:L}),(0,w.jsx)(l.Z,{className:"admin-products my-5 h-60vh",children:(0,w.jsxs)(c.Z,{children:[(0,w.jsx)("h5",{className:"fw-bold font-22 text-blue-500-color mb-4",children:"Admin Dashboard"}),(0,w.jsx)(d.Z,{lg:4,className:"mb-5 pe-md-5",children:(0,w.jsx)(i.Z,{})}),(0,w.jsx)(d.Z,{lg:8,children:(0,w.jsxs)(m.Z,{className:"bg-gray-300-color px-4 py-5",encType:"multipart/form-data",onSubmit:S,children:[(0,w.jsx)("h5",{className:"fw-bold font-18 text-blue-500-color mb-4",children:"Create Product"}),(0,w.jsxs)(p.Z,{className:"flex-column flex-md-row mt-4",gap:3,children:[(0,w.jsxs)(m.Z.Group,{className:"mb-3 w-100",controlId:"name",children:[(0,w.jsx)(m.Z.Label,{children:"Name"}),(0,w.jsx)(m.Z.Control,{type:"text",name:"name",value:q.name,autoComplete:"off",className:"font-lato font-16",onChange:F,onBlur:E,isInvalid:R.name&&_.name}),_.name&&R.name?(0,w.jsx)(m.Z.Control.Feedback,{type:"invalid",children:_.name}):null]}),(0,w.jsxs)(m.Z.Group,{className:"mb-3 w-100",controlId:"price",children:[(0,w.jsx)(m.Z.Label,{children:"Price"}),(0,w.jsx)(m.Z.Control,{type:"number",name:"price",value:q.price,autoComplete:"off",className:"font-lato font-16",onChange:F,onBlur:E,isInvalid:R.price&&_.price}),_.price&&R.price?(0,w.jsx)(m.Z.Control.Feedback,{type:"invalid",children:_.price}):null]})]}),(0,w.jsxs)(m.Z.Group,{className:"mb-3 w-100",controlId:"description",children:[(0,w.jsx)(m.Z.Label,{children:"Description"}),(0,w.jsx)(m.Z.Control,{as:"textarea",rows:4,name:"description",value:q.description,autoComplete:"off",className:"font-lato font-16",onChange:F,onBlur:E,isInvalid:R.description&&_.description}),_.description&&R.description?(0,w.jsx)(m.Z.Control.Feedback,{type:"invalid",children:_.description}):null]}),(0,w.jsxs)(p.Z,{className:"flex-column flex-md-row mt-4",gap:3,children:[(0,w.jsxs)(m.Z.Group,{className:"mb-3 w-100",value:D,controlId:"categories",children:[(0,w.jsx)(m.Z.Label,{children:"Categories"}),(0,w.jsxs)(m.Z.Select,{"aria-label":"Select Categories",autoComplete:"off",name:"category",className:"font-lato font-16",onChange:F,onBlur:E,isInvalid:R.category&&_.category,children:[(0,w.jsx)("option",{children:"Categories"}),D&&D.map((function(e){return(0,w.jsx)("option",{value:e,children:e},e)}))]}),_.category&&R.category?(0,w.jsx)(m.Z.Control.Feedback,{type:"invalid",children:_.category}):null]}),(0,w.jsxs)(m.Z.Group,{className:"mb-3 w-100",controlId:"stock",children:[(0,w.jsx)(m.Z.Label,{children:"Stock"}),(0,w.jsx)(m.Z.Control,{type:"number",name:"stock",value:q.stock,autoComplete:"off",className:"font-lato font-16",onChange:F,onBlur:E,isInvalid:R.stock&&_.stock}),_.stock&&R.stock?(0,w.jsx)(m.Z.Control.Feedback,{type:"invalid",children:_.stock}):null]})]}),(0,w.jsxs)(m.Z.Group,{className:"w-100",controlId:"avatar",children:[(0,w.jsx)(m.Z.Label,{children:"Upload images"}),(0,w.jsx)(m.Z.Control,{type:"file",name:"images",accept:"image/*",onChange:function(e){var r=Array.from(e.target.files);I("images",[]),I("imagesPreview",[]),r.forEach((function(e){var r=new FileReader;r.onload=function(){2===r.readyState&&(q.images.push(r.result),q.imagesPreview.push(r.result),I("images",q.images),I("imagesPreview",q.imagesPreview))},r.readAsDataURL(e)}))},onBlur:E,isInvalid:R.images&&_.images,multiple:!0}),_.images&&R.images?(0,w.jsx)(m.Z.Control.Feedback,{type:"invalid",children:_.images}):null]}),(0,w.jsx)(p.Z,{className:"flex-row flex-wrap my-4",gap:3,children:q.imagesPreview.map((function(e,r){return(0,w.jsx)(h.Z,{src:e,alt:"product preview",rounded:!0,thumbnail:!0,fluid:!0,className:"w-25 object-fit-contain"},r)}))}),(0,w.jsxs)(p.Z,{className:"flex-column flex-md-row",gap:2,children:[(0,w.jsx)(u.Z,{className:"bg-secondary-color border-0 py-2 px-3 rounded-0",type:"submit",children:"Add"}),(0,w.jsx)(u.Z,{as:f.rU,to:"/admin/products",className:"bg-secondary-color border-0 py-2 px-3 rounded-0 w-auto d-flex justify-content-center align-items-center",type:"submit",children:"Cancel"})]})]})})]})})]})}},9890:function(e,r,a){var t=a(2791),n=a(1398),s=a(1087),o=a(184),i=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(n.Z,{children:[(0,o.jsx)(n.Z.Item,{as:s.rU,to:"/admin/dashboard",className:"bg-gray-300-color border-0 p-3 font-18",children:"Dashboard"}),(0,o.jsx)(n.Z.Item,{as:s.rU,to:"/admin/products",className:"bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18",children:"Products"}),(0,o.jsx)(n.Z.Item,{as:s.rU,to:"/admin/orders",className:"bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18",children:"Orders"}),(0,o.jsx)(n.Z.Item,{as:s.rU,to:"/admin/users",className:"bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18",children:"Users"}),(0,o.jsx)(n.Z.Item,{as:s.rU,to:"/admin/reviews",className:"bg-gray-300-color border-top border-end-0 border-bottom-0 border-start-0 p-3 font-18",children:"Reviews"})]})})};r.Z=(0,t.memo)(i)},2495:function(e,r,a){a(2791);var t=a(6907),n=a(184);r.Z=function(e){var r=e.title;return(0,n.jsx)(t.B6,{children:(0,n.jsx)(t.ql,{children:(0,n.jsx)("title",{children:r})})})}},1359:function(e,r,a){a.d(r,{Dg:function(){return i},Ir:function(){return y},KL:function(){return l},Mm:function(){return p},XS:function(){return c},nM:function(){return f},p8:function(){return d},rK:function(){return u},ry:function(){return h},tT:function(){return m}});var t=a(4165),n=a(5861),s=a(1243),o=a(7456),i=function(){return function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var a,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:o.u9}),r({type:o.HD,headerLoading:0}),e.next=5,s.Z.get("/api/v1/allproducts");case 5:a=e.sent,n=a.data,r({type:o.HD,headerLoading:50}),r({type:o.$L,payload:n}),r({type:o.HD,headerLoading:100}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),r({type:o.D1,payload:e.t0.response.data.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(r){return e.apply(this,arguments)}}()},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e4,i=arguments.length>3?arguments[3]:void 0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return function(){var d=(0,n.Z)((0,t.Z)().mark((function n(d){var l,u,p;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d({type:o.hQ}),d({type:o.HD,headerLoading:0}),l="/api/v1/products?keyword=".concat(e,"&page=").concat(r,"&price[lte]=").concat(a,"&ratings[gte]=").concat(c),i&&(l="/api/v1/products?category=".concat(i,"&keyword=").concat(e,"&page=").concat(r,"&price[lte]=").concat(a,"&ratings[gte]=").concat(c)),t.next=7,s.Z.get(l);case 7:u=t.sent,p=u.data,d({type:o.HD,headerLoading:50}),d({type:o.do,payload:p}),d({type:o.HD,headerLoading:100}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),d({type:o.Fq,payload:t.t0.response.data.message});case 17:case"end":return t.stop()}}),n,null,[[0,14]])})));return function(e){return d.apply(this,arguments)}}()},d=function(){return function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var a,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:o.Iq}),r({type:o.HD,headerLoading:0}),e.next=5,s.Z.get("/api/v1/admin/products");case 5:a=e.sent,n=a.data,r({type:o.HD,headerLoading:50}),r({type:o.AT,payload:n.products}),r({type:o.HD,headerLoading:100}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),r({type:o.zH,payload:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(r){return e.apply(this,arguments)}}()},l=function(e){return function(){var r=(0,n.Z)((0,t.Z)().mark((function r(a){var n,i;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:o.Uy}),a({type:o.HD,headerLoading:0}),r.next=5,s.Z.get("/api/v1/product/".concat(e));case 5:n=r.sent,i=n.data,a({type:o.HD,headerLoading:50}),a({type:o.xe,payload:i.product}),a({type:o.HD,headerLoading:100}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),a({type:o.gh,payload:r.t0.response.data.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},u=function(e){return function(){var r=(0,n.Z)((0,t.Z)().mark((function r(a){var n,i,c;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:o.zK}),a({type:o.HD,headerLoading:0}),n={headers:{"Content-Type":"application/json"}},r.next=6,s.Z.put("/api/v1/review",e,n);case 6:i=r.sent,c=i.data,a({type:o.HD,headerLoading:50}),a({type:o.Yu,payload:c.success}),a({type:o.HD,headerLoading:100}),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),a({type:o.V_,payload:r.t0.message});case 16:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(e){return r.apply(this,arguments)}}()},p=function(e){return function(){var r=(0,n.Z)((0,t.Z)().mark((function r(a){var n,i;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:o.MJ}),a({type:o.HD,headerLoading:0}),r.next=5,s.Z.get("/api/v1/reviews?id=".concat(e));case 5:n=r.sent,i=n.data,a({type:o.HD,headerLoading:50}),a({type:o.zh,payload:i.reviews}),a({type:o.HD,headerLoading:100}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),a({type:o.Rc,payload:r.t0.response.data.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},m=function(e,r){return function(){var a=(0,n.Z)((0,t.Z)().mark((function a(n){var i,c;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:o.fz}),n({type:o.HD,headerLoading:0}),a.next=5,s.Z.delete("/api/v1/reviews?id=".concat(e,"&productId=").concat(r));case 5:i=a.sent,c=i.data,n({type:o.HD,headerLoading:50}),n({type:o.g6,payload:c}),n({type:o.HD,headerLoading:100}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),n({type:o.Om,payload:a.t0.response.data.message});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()},h=function(e){return function(){var r=(0,n.Z)((0,t.Z)().mark((function r(a){var n,i,c;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:o.TK}),a({type:o.HD,headerLoading:0}),n={headers:{"Content-Type":"multipart/form-data"}},r.next=6,s.Z.post("/api/v1/admin/product/new",e,n);case 6:i=r.sent,c=i.data,a({type:o.HD,headerLoading:50}),a({type:o.Cy,payload:c}),a({type:o.HD,headerLoading:100}),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),a({type:o.J$,payload:r.t0.response.data.message});case 16:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(e){return r.apply(this,arguments)}}()},y=function(e){return function(){var r=(0,n.Z)((0,t.Z)().mark((function r(a){var n,i;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:o.bi}),a({type:o.HD,headerLoading:0}),r.next=5,s.Z.delete("/api/v1/admin/product/".concat(e));case 5:n=r.sent,i=n.data,a({type:o.HD,headerLoading:50}),a({type:o.cO,payload:i}),a({type:o.HD,headerLoading:100}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),a({type:o.IX,payload:r.t0.response.data.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},f=function(e,r){return function(){var a=(0,n.Z)((0,t.Z)().mark((function a(n){var i,c,d;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:o.L7}),n({type:o.HD,headerLoading:0}),i={headers:{"Content-Type":"multipart/form-data"}},a.next=6,s.Z.put("/api/v1/admin/product/".concat(e),r,i);case 6:c=a.sent,d=c.data,n({type:o.HD,headerLoading:50}),n({type:o.zk,payload:d}),n({type:o.HD,headerLoading:100}),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),n({type:o.ki,payload:a.t0.response.data.message});case 16:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e){return a.apply(this,arguments)}}()}},4848:function(e,r,a){a.d(r,{Iy:function(){return u},JE:function(){return p},KC:function(){return l},cu:function(){return s},dm:function(){return n},if:function(){return i},jE:function(){return c},v6:function(){return d},xr:function(){return o}});var t=a(8007),n=t.Ry({email:t.Z_().email("Invalid Email").required("Please enter your email"),password:t.Z_().min(6,"Password must be at least 6 characters").required("Please enter your password")}),s=t.Ry({email:t.Z_().email("Invalid Email").required("Please enter your email")}),o=t.Ry({password:t.Z_().min(6,"Password must be at least 6 characters").required("Please enter your new password"),confirmPassword:t.Z_().min(6,"Password must be at least 6 characters").oneOf([t.iH("password"),null],"Password does not match").required("Please confirm your new password")}),i=t.Ry({name:t.Z_().min(2,"Name must be at least 2 characters").max(25,"Name should not be more than 25 characters").required("Please enter your name"),email:t.Z_().email("Invalid Email").required("Please enter your email"),password:t.Z_().min(6,"Password must be at least 6 characters").required("Please enter your password"),avatar:t.nK().required("Please enter your image")}),c=t.Ry({name:t.Z_().min(2,"Name must be at least 2 characters").max(25,"Name should not be more than 25 characters").required("Please enter your name"),email:t.Z_().email("Invalid Email").required("Please enter your email")}),d=t.Ry({oldPassword:t.Z_().min(6,"Old password must be at least 6 characters").required("Please enter your old password"),newPassword:t.Z_().min(6,"New password must be at least 6 characters").required("Please enter your new password"),confirmNewPassword:t.Z_().min(6,"New password must be at least 6 characters").oneOf([t.iH("newPassword"),null],"Password does not match").required("Please confirm your new password")}),l=t.Ry({address:t.Z_().min(6,"Address must be at least 6 characters").required("Please enter your address"),city:t.Z_().min(3,"City must be at least 3 characters").required("Please enter your city"),state:t.Z_().required("Please select your state"),landmark:t.Z_().min(3,"Landmark must be at least 3 characters"),pinCode:t.Rx().typeError("Pin code must be a number").min(3,"Pin code must be at least 3 characters").required("Please enter your pin code"),phoneNo:t.Rx().typeError("Phone number must be a number").required("Please enter your phone number")}),u=t.Ry({name:t.Z_().min(3,"Name must be at least 3 characters").required("Please enter product name"),price:t.Rx().typeError("Price must be a number").required("Please enter product price"),description:t.Z_().min(25,"Description must be at least 25 characters").max(2e3,"Description should not be more than 2000 characters").required("Please enter product description"),category:t.Z_().required("Please select product category"),stock:t.Rx().typeError("Stock must be a number").required("Please enter product stock"),images:t.nK().required("Please choose product image"),imagesPreview:t.nK()}),p=t.Ry({name:t.Z_().min(2,"Name must be at least 2 characters").max(25,"Name should not be more than 25 characters").required("Please enter name"),email:t.Z_().email("Invalid Email").required("Please enter email"),role:t.Z_().required("Please select role")})},2592:function(e,r,a){var t=a(1413),n=a(5987),s=a(1694),o=a.n(s),i=a(2791),c=a(2007),d=a.n(c),l=a(162),u=a(184),p=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],m=(d().string,d().bool,d().bool,d().bool,d().bool,i.forwardRef((function(e,r){var a=e.bsPrefix,s=e.className,i=e.fluid,c=void 0!==i&&i,d=e.rounded,m=void 0!==d&&d,h=e.roundedCircle,y=void 0!==h&&h,f=e.thumbnail,g=void 0!==f&&f,v=(0,n.Z)(e,p);return a=(0,l.vE)(a,"img"),(0,u.jsx)("img",(0,t.Z)((0,t.Z)({ref:r},v),{},{className:o()(s,c&&"".concat(a,"-fluid"),m&&"rounded",y&&"rounded-circle",g&&"".concat(a,"-thumbnail"))}))})));m.displayName="Image",r.Z=m}}]);
//# sourceMappingURL=557.d1cee3f7.chunk.js.map