(this.webpackJsonpemart=this.webpackJsonpemart||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(17),s=c.n(a),r=(c(33),c(34),c(14)),i=c.n(r),l=c(19),j=c(11),b=c(4),d=c(7),o=c.n(d),h=c(0),u=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(c),r=Object(j.a)(s,2),d=r[0],u=r[1],x=Object(n.useState)(!1),m=Object(j.a)(x,2),O=m[0],p=m[1],f=!0;Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,fetch("https://fakestoreapi.com/products");case 3:if(t=e.sent,!f){e.next=17;break}return e.t0=a,e.next=8,t.clone().json();case 8:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=u,e.next=13,t.json();case 13:e.t3=e.sent,(0,e.t2)(e.t3),p(!1),console.log(d);case 17:return e.abrupt("return",(function(){f=!1}));case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var g=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsx)(o.a,{height:350})}),Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsx)(o.a,{height:350})}),Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsx)(o.a,{height:350})}),Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsx)(o.a,{height:350})})]})},v=function(e){var t=c.filter((function(t){return t.category===e}));u(t)},N=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"buttons d-flex justify-content-center mb-5 pb-5",children:[Object(h.jsx)("button",{className:"btn btn-outline-dark me-2",onClick:function(){return u(c)},children:"All"}),Object(h.jsx)("button",{className:"btn btn-outline-dark me-2",onClick:function(){return v("men's clothing")},children:"Men's Clothing"}),Object(h.jsx)("button",{className:"btn btn-outline-dark me-2",onClick:function(){return v("women's clothing")},children:"Women's Clothing"}),Object(h.jsx)("button",{className:"btn btn-outline-dark me-2",onClick:function(){return v("jewelery")},children:"Jewelery"}),Object(h.jsx)("button",{className:"btn btn-outline-dark me-2",onClick:function(){return v("electronics")},children:"Electronic"})]}),d.map((function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"col-md-3 mb-4",children:Object(h.jsxs)("div",{class:"card h-100 text-center p-4",children:[Object(h.jsx)("img",{src:e.image,class:"card-img-top",alt:e.title,height:"250px"}),Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsxs)("h5",{class:"card-title mb-0",children:[e.title.substring(0,12),"..."]}),Object(h.jsxs)("p",{class:"card-text lead fw-bold",children:["$",e.price]}),Object(h.jsx)(b.b,{to:"/products/".concat(e.id),class:"btn btn-outline-dark",children:"Buy Now"})]})]},e.id)})})}))]})};return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"container my-5 py-5",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-12 mb-5",children:[Object(h.jsx)("h1",{className:"display-6 fw-bolder text-center",children:"Latest Products"}),Object(h.jsx)("hr",{})]})}),Object(h.jsx)("div",{className:"row justify-content-center",children:O?Object(h.jsx)(g,{}):Object(h.jsx)(N,{})})]})})},x=function(){return Object(h.jsxs)("div",{className:"hero",children:[Object(h.jsxs)("div",{className:"card bg-dark text-white border-0",children:[Object(h.jsx)("img",{src:"/assets/bg.jpg",className:"card-img",alt:"Background",height:"550px"}),Object(h.jsx)("div",{className:"card-img-overlay d-flex flex-column justify-content-center",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h5",{className:"card-title display-3 fw-bolder mb-0",children:"NEW SEASON ARRIVALS"}),Object(h.jsx)("p",{className:"card-text lead fs-2",children:"CHECK OUT ALL THE TRENDS"})]})})]}),Object(h.jsx)(u,{})]})},m=c(10),O=function(){var e=Object(m.c)((function(e){return e.handleCart}));return Object(h.jsx)("div",{children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(b.b,{className:"navbar-brand fw-bold fs-4",to:"/",children:"LA COLLECTION"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsxs)("ul",{className:"navbar-nav mx-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/products",children:"Products"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/about",children:"About"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/contact",children:"Contact"})})]}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsxs)(b.b,{to:"/login",className:"btn btn-outline-dark",children:[Object(h.jsx)("i",{className:"fa fa-sign-in me-1"})," Login"]}),Object(h.jsxs)(b.b,{to:"/register",className:"btn btn-outline-dark ms-2",children:[Object(h.jsx)("i",{className:"fa fa-user-plus me-1"})," Register"]}),Object(h.jsxs)(b.b,{to:"/cart",className:"btn btn-outline-dark ms-2",children:[Object(h.jsx)("i",{className:"fa fa-shopping-cart me-1"})," Cart (",e.length,")"]})]})]})]})})})},p=c(3),f=function(e){return{type:"ADDITEM",payload:e}},g=function(){var e=Object(p.f)().id,t=Object(n.useState)([]),c=Object(j.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!1),d=Object(j.a)(r,2),u=d[0],x=d[1],O=Object(m.b)();Object(n.useEffect)((function(){var t=function(){var t=Object(l.a)(i.a.mark((function t(){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),t.next=3,fetch("https://fakestoreapi.com/products/".concat(e));case 3:return c=t.sent,t.t0=s,t.next=7,c.json();case 7:t.t1=t.sent,(0,t.t0)(t.t1),x(!1);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);var g=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)(o.a,{height:400})}),Object(h.jsxs)("div",{className:"col-md-6",style:{lineHeight:2},children:[Object(h.jsx)(o.a,{height:50,width:300}),Object(h.jsx)(o.a,{height:75}),Object(h.jsx)(o.a,{height:25,width:150}),Object(h.jsx)(o.a,{height:50}),Object(h.jsx)(o.a,{height:150}),Object(h.jsx)(o.a,{height:50,width:100}),Object(h.jsx)(o.a,{height:50,width:100,style:{marginLeft:6}})]})]})},v=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("img",{src:a.image,alt:a.title,height:"400px",width:"400px"})}),Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsx)("h4",{className:"text-uppercase text-black-50",children:a.category}),Object(h.jsx)("h1",{className:"display-5",children:a.title}),Object(h.jsxs)("p",{className:"lead fw-bolder",children:["Rating ",a.rating&&a.rating.rate,Object(h.jsx)("i",{className:"fa fa-star"})]}),Object(h.jsxs)("h3",{className:"display-6 fw-bold my-4",children:["$ ",a.price]}),Object(h.jsx)("p",{className:"lead",children:a.description}),Object(h.jsx)("button",{className:"btn btn-outline-dark px-4 py-2",onClick:function(){return function(e){O(f(e))}(a)},children:"Add to Cart"}),Object(h.jsx)(b.b,{to:"/cart",className:"btn btn-dark ms-2 px-3 py-2",children:"Go to Cart"})]})]})};return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container py-5",children:Object(h.jsx)("div",{className:"row py-4",children:u?Object(h.jsx)(g,{}):Object(h.jsx)(v,{})})})})},v=function(){var e=Object(m.c)((function(e){return e.handleCart})),t=Object(m.b)();return Object(h.jsxs)("div",{children:[0===e.length&&Object(h.jsx)("div",{className:"px-4 my-5 bg-light rounded-3 py-5",children:Object(h.jsx)("div",{className:"container py-4",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h3",{children:"Your Cart is Empty"})})})}),0!==e.length&&e.map((function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"px-4 my-5 bg-light rounded-3 py-5",children:Object(h.jsx)("div",{className:"container py-4",children:Object(h.jsxs)("div",{className:"row justify-content-center",children:[Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsx)("img",{src:e.image,alt:e.title,height:"200px",width:"180px"})}),Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h3",{children:e.title}),Object(h.jsxs)("p",{className:"lead fw-bold",children:[e.qty," X $",e.price," = $",e.qty*e.price]}),Object(h.jsx)("button",{className:"btn btn-outline-dark me-4",onClick:function(){t({type:"DELITEM",payload:e})},children:Object(h.jsx)("i",{className:"fa fa-minus"})}),Object(h.jsx)("button",{className:"btn btn-outline-dark",onClick:function(){t(f(e))},children:Object(h.jsx)("i",{className:"fa fa-plus"})})]})]})})})})})),0!==e.length&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(b.b,{to:"/checkout",className:"btn btn-outline-dark mb-5 w-25 mx-auto",children:"Proceed to Checkout"})})})})]})};var N=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{}),Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{exact:!0,path:"/",component:x}),Object(h.jsx)(p.a,{exact:!0,path:"/products",component:u}),Object(h.jsx)(p.a,{exact:!0,path:"/products/:id",component:g}),Object(h.jsx)(p.a,{exact:!0,path:"/cart",component:v})]})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},k=(c(45),c(46),c(21)),w=c(28),C=c(12),E=[],L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,c=t.payload;switch(t.type){case"ADDITEM":var n=e.find((function(e){return e.id===c.id}));if(n)return e.map((function(e){return e.id===c.id?Object(C.a)(Object(C.a)({},e),{},{qty:e.qty+1}):e}));var a=t.payload;return[].concat(Object(w.a)(e),[Object(C.a)(Object(C.a)({},a),{},{qty:1})]);case"DELITEM":var s=e.find((function(e){return e.id===c.id}));return 1===s.qty?e.filter((function(e){return e.id!==s.id})):e.map((function(e){return e.id===c.id?Object(C.a)(Object(C.a)({},e),{},{qty:e.qty-1}):e}));default:return e}},S=Object(k.a)({handleCart:L}),F=Object(k.b)(S);s.a.render(Object(h.jsx)(b.a,{children:Object(h.jsx)(m.a,{store:F,children:Object(h.jsx)(N,{})})}),document.getElementById("root")),y()}},[[47,1,2]]]);
//# sourceMappingURL=main.ae9dc058.chunk.js.map