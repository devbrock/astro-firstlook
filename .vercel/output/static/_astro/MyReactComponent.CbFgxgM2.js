import{r as p}from"./index.NEDEFKed.js";var u={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=p,d=Symbol.for("react.element"),_=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,x=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function c(r,t,a){var e,n={},s=null,i=null;a!==void 0&&(s=""+a),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(e in t)m.call(t,e)&&!y.hasOwnProperty(e)&&(n[e]=t[e]);if(r&&r.defaultProps)for(e in t=r.defaultProps,t)n[e]===void 0&&(n[e]=t[e]);return{$$typeof:d,type:r,key:s,ref:i,props:n,_owner:x.current}}l.Fragment=_;l.jsx=c;l.jsxs=c;u.exports=l;var o=u.exports;function h(){const[r,t]=p.useState([]);async function a(){let s=await(await(await fetch("https://swapi.dev/api/planets")).json()).results;t(s)}return o.jsxs("div",{children:[o.jsx("div",{children:"Star Wars Planets:"}),o.jsx("button",{onClick:()=>{a()},children:"Fetch Planets"}),r&&o.jsx("ul",{children:r?.map(e=>o.jsx("li",{children:e?.name},e.name))})]})}export{h as default};
