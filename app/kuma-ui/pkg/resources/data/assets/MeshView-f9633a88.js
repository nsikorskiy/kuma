import{d as w,u as V,B as b,C as v,r as y,o as c,a as l,w as o,h as n,q as C,t as N,b as p,g as d,i as g}from"./index-8cf34a8f.js";import{g as x,e as B,A as T,_ as k}from"./RouteView.vue_vue_type_script_setup_true_lang-f43ad4b4.js";import{N as A}from"./NavTabs-4418fdec.js";import"./kongponents.es-cb60a408.js";const z=w({__name:"MeshView",setup(D){var m;const f=x(),r=V(),_=b(),h=B(),R=(((m=_.getRoutes().find(e=>e.name==="mesh-detail-view"))==null?void 0:m.children)??[]).map(e=>{var u,i;const t=typeof e.name>"u"?(u=e.children)==null?void 0:u[0]:e,s=t.name,a=((i=t.meta)==null?void 0:i.module)??"";return{title:f.t(`meshes.routes.item.navigation.${s}`),routeName:s,module:a}});return v(()=>r.params.mesh,(e,t)=>{e!==t&&e&&h.dispatch("fetchPolicyTypeTotals",e)},{immediate:!0}),(e,t)=>{const s=y("RouterView");return c(),l(k,null,{default:o(()=>[n(T,null,{title:o(()=>[C("h1",null,N(p(r).params.mesh),1)]),default:o(()=>[d(),n(A,{class:"route-mesh-view-tabs",tabs:p(R)},null,8,["tabs"]),d(),n(s,null,{default:o(a=>[(c(),l(g(a.Component),{key:a.route.path}))]),_:1})]),_:1})]),_:1})}}});export{z as default};
