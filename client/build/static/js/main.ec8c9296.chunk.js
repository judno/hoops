(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{29:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(12),s=n.n(c),a=(n(29),n(10)),o=n(2),l=n(0);const i="token";function r(){return localStorage.getItem(i)}const d="pk.eyJ1IjoianVkbm8iLCJhIjoiY2tsYXBnZmVjMGNyeTJ2cXRscG5pZnJrYiJ9.1amSrfQa17c6WONhr6AMWg";async function j(){const e=r();if(e){const t="/api/user",n=await fetch(t,{headers:{Authorization:`Bearer ${e}`}});if(200===n.status)return n.json()}return null}async function u([e,t]){const n=`/api/hoops?lat=${t}&lon=${e}`,c=await fetch(n);if(200!==c.status)throw new Error("Failed to search hoops");return c.json()}var b=n(1);function h({label:e,onChange:t,userLocation:n}){const[c,s]=Object(l.useState)(""),[a,o]=Object(l.useState)([]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"text-lg font-semibold tracking-wide",htmlFor:e,children:e}),Object(b.jsx)("input",{className:"focus:border-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-2",type:"text",id:e,autoComplete:"off",onChange:e=>{t(null),s(e.target.value),function(e,t){let n=`https://api.mapbox.com/geocoding/v5/mapbox.places/${e}.json?types=address&access_token=${d}`;return t&&(n+=`&proximity=${t.longitude},${t.latitude}`),fetch(n).then((e=>e.json())).then((e=>e.features?e.features.map((e=>({name:e.place_name,location:e.center}))):[]))}(e.target.value,n).then((e=>{o(e)}))},value:c}),Object(b.jsx)("div",{className:"relative",children:Object(b.jsx)("div",{className:"absolute mt-1 w-full bg-white rounded",children:a.length>0?a.map(((e,n)=>Object(b.jsx)("div",{className:"p-3 hover:bg-blue-200 rounded",onClick:()=>{o([]),t(e),s(e.name)},children:e.name},n))):null})})]})}var x=n(11);const m=Object(x.c)({accessToken:d}),g=e=>Object(b.jsx)(x.a,{...e,children:Object(b.jsx)("img",{src:"/marker.png",width:50,height:50})});function p({label:e,onChange:t,value:n}){return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"text-lg font-semibold tracking-wide",htmlFor:e,children:e}),Object(b.jsx)("textarea",{className:"focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-2",type:"text",id:e,onChange:t,value:n})]})}function f({label:e,onChange:t,value:n}){return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"text-lg font-semibold tracking-wide",htmlFor:e,children:e}),Object(b.jsx)("input",{className:"focus:border-purple-400 focus:ring-1 focus:ring-purple-400 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-2",type:"text",id:e,onChange:t,value:n})]})}function O(){const[e,t]=Object(l.useState)(""),[n,c]=Object(l.useState)(null),[s,a]=Object(l.useState)("");return Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h1",{className:"text-4xl font-bold py-5",children:"Add hoop"}),Object(b.jsxs)("div",{className:"flex justify-between gap-5",children:[Object(b.jsxs)("form",{className:"w-2/5 flex flex-col gap-3",onSubmit:async t=>{t.preventDefault(),await async function(e){const t=r();if(!t)throw new Error("Not logged in");if(200!==(await fetch("/api/hoops",{method:"post",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(e)})).status)throw new Error("Failed to add hoop")}({name:e,description:s,location:n})},children:[Object(b.jsx)(f,{label:"Name",value:e,onChange:e=>t(e.target.value)}),Object(b.jsx)(h,{label:"Address",onChange:c}),Object(b.jsx)(p,{label:"Description",value:s,onChange:e=>a(e.target.value)}),Object(b.jsx)("button",{type:"submit",children:"Add"})]}),Object(b.jsx)(m,{style:"mapbox://styles/judno/ckldm0nzm30on17mdzt6zl7qx",containerStyle:{height:"80vh",width:"100%"},center:n?n.location:void 0,children:n?Object(b.jsx)(g,{coordinates:n.location}):null})]})]})}function v(){return Object(b.jsx)("div",{className:"bg-gray-800",children:Object(b.jsxs)("nav",{className:"content flex h-20 items-center justify-between px-5 text-white  mb-8",children:[Object(b.jsxs)("div",{className:"flex gap-x-10",children:[Object(b.jsx)(a.b,{to:"/",children:Object(b.jsx)("h1",{className:"text-xl font-semibold",children:"Hoops!"})}),Object(b.jsx)("div",{className:"flex gap-x-6 text-lg",children:Object(b.jsx)(a.b,{to:"/add",children:"Add"})})]}),Object(b.jsx)(y,{})]})})}function y(){const[e,t]=Object(l.useState)(null);return Object(l.useEffect)((async()=>{const e=await j();t(e)}),[]),e?Object(b.jsxs)("div",{className:"flex items-center gap-3",children:[Object(b.jsx)("img",{className:"rounded-full",src:e.picture}),Object(b.jsx)("div",{children:e.name})]}):Object(b.jsx)("button",{onClick:async()=>{await new Promise((e=>{FB.login((function(t){localStorage.setItem(i,t.authResponse.accessToken),e()}))}));const e=await j();t(e)},children:"Login"})}var w=n(24);const N=[144.9631,37.8136],k=({longitude:e,latitude:t})=>[e,t];function C(){const[e,t]=Object(l.useState)([]),[n,c]=Object(l.useState)(null),[s,a]=Object(l.useState)(0),o=e.length>0,{topLeft:i,bottomRight:r}=Object(w.getBoundingBox)(e.map(k),2e3),d=o?[i,r]:void 0;return Object(l.useEffect)((()=>{navigator.geolocation.getCurrentPosition((async({coords:e})=>{const n=await u([e.longitude,e.latitude]);c(e),a(0),t(n)}))}),[]),Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("div",{className:"flex gap-2",children:[Object(b.jsxs)("div",{id:"results",className:"w-2/5 flex flex-col gap-2",children:[Object(b.jsx)(h,{userLocation:n,onChange:async e=>{if(e){const n=await u(e.location);a(0),t(n)}}}),o?e.map(((e,t)=>Object(b.jsx)(S,{...e,onClick:()=>a(t)},t))):null]}),Object(b.jsxs)(m,{style:"mapbox://styles/judno/ckldm0nzm30on17mdzt6zl7qx",containerStyle:{height:"80vh",width:"100%"},movingMethod:"jumpTo",fitBounds:d,center:o?k(e[s]):N,children:[e.map(((e,t)=>Object(b.jsx)(g,{coordinates:k(e)},t))),o?Object(b.jsx)(x.b,{coordinates:k(e[s]),children:Object(b.jsxs)("div",{className:"",style:{bottom:-50},children:[Object(b.jsx)("div",{className:"font-semibold",children:e[s].name}),Object(b.jsx)("div",{children:e[s].description})]})}):null]})]})})}function S({name:e,locationName:t,onClick:n}){return Object(b.jsxs)("div",{className:"bg-gray-700 p-3 cursor-pointer rounded",onClick:n,children:[Object(b.jsx)("div",{className:"text-lg text-white font-semibold",children:e}),Object(b.jsx)("div",{className:"text-gray-300 text-sm",children:t})]})}var z=function(){return Object(b.jsxs)(a.a,{children:[Object(b.jsx)(v,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/add",children:Object(b.jsx)(O,{})}),Object(b.jsx)(o.a,{path:"/",children:Object(b.jsx)(C,{})})]})]})};s.a.render(Object(b.jsx)(z,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.ec8c9296.chunk.js.map