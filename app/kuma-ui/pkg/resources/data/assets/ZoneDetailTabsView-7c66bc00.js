import{d as b,p as z,r as v,o as n,a as c,w as t,h as a,b as p,i as w,g as _,e as h,F as x,j as k}from"./index-f1b8ae6a.js";import{h as V,A as y,T as B,i as C,E as N,n as $,_ as R}from"./RouteView.vue_vue_type_script_setup_true_lang-4a32e1ca.js";import{_ as T}from"./RouteTitle.vue_vue_type_script_setup_true_lang-6484968f.js";import{N as g}from"./NavTabs-93b47e73.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-14dd845b.js";const q=b({__name:"ZoneDetailTabsView",setup(E){var d;const{t:m}=V(),f=(((d=z().getRoutes().find(e=>e.name==="zone-cp-detail-tabs-view"))==null?void 0:d.children)??[]).map(e=>{var o,i;const l=typeof e.name>"u"?(o=e.children)==null?void 0:o[0]:e,r=l.name,s=((i=l.meta)==null?void 0:i.module)??"";return{title:m(`zone-cps.routes.item.navigation.${r}`),routeName:r,module:s}});return(e,l)=>{const r=v("RouterView");return n(),c(R,{name:"zone-cp-detail-tabs-view","data-testid":"zone-cp-detail-tabs-view"},{default:t(({route:s})=>[a(y,{breadcrumbs:[{to:{name:"zone-cp-list-view"},text:p(m)("zone-cps.routes.item.breadcrumbs")}]},{title:t(()=>[w("h1",null,[a(B,{text:s.params.zone},{default:t(()=>[a(T,{title:p(m)("zone-cps.routes.item.title",{name:s.params.zone}),render:!0},null,8,["title"])]),_:2},1032,["text"])])]),default:t(()=>[_(),a(C,{src:`/zone-cps/${s.params.zone}`},{default:t(({data:u,error:o})=>[o!==void 0?(n(),c(N,{key:0,error:o},null,8,["error"])):u===void 0?(n(),c($,{key:1})):(n(),h(x,{key:2},[a(g,{class:"route-zone-detail-view-tabs",tabs:p(f)},null,8,["tabs"]),_(),a(r,null,{default:t(i=>[(n(),c(k(i.Component),{data:u},null,8,["data"]))]),_:2},1024)],64))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1})}}});export{q as default};
