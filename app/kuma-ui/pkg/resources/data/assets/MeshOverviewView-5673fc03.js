import{U as M,P as L}from"./kongponents.es-bed5a670.js";import{d as A,u as O,c as _,s as R,o as r,e as m,h as s,g as l,q as D,E as N,r as G,a as p,w as o,b as d,k as B,j as P,t as g,F as y,f as S}from"./index-9d5093a9.js";import{f as j,D as x,h as F,k as H,j as J,g as Q,_ as X}from"./RouteView.vue_vue_type_script_setup_true_lang-3aed49a3.js";import{_ as Y}from"./RouteTitle.vue_vue_type_script_setup_true_lang-76361c64.js";import{D as $,a as V}from"./DefinitionListItem-65e58a29.js";import{M as Z}from"./MeshResources-4fce5b06.js";import{_ as ee}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-585e9746.js";import{_ as te}from"./StatusInfo.vue_vue_type_script_setup_true_lang-e661bb84.js";import{T as ae}from"./TextWithCopyButton-b8e760d3.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-c89a28f3.js";import"./toYaml-4e00099e.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-72b75b04.js";import"./ErrorBlock-7c99589d.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-a2c21511.js";const se={class:"chart-box-list"},ne=A({__name:"MeshCharts",setup(K){const k=O(),c=j(),f=_(()=>c.getters.getChart("services",{title:"Services",showTotal:!0})),v=_(()=>c.getters.getChart("dataplanes",{title:"DP Proxies",showTotal:!0,isStatusChart:!0})),b=_(()=>c.getters.getChart("kumaDPVersions",{title:"Kuma DP",subtitle:"versions"})),w=_(()=>c.getters.getChart("envoyVersions",{title:"Envoy",subtitle:"versions"}));R(()=>k.params.mesh,function(u){typeof u=="string"&&n(u)},{immediate:!0});function n(u){c.dispatch("fetchMeshInsights",u),c.dispatch("fetchServices",u)}return(u,I)=>(r(),m("div",se,[s(x,{data:f.value},null,8,["data"]),l(),s(x,{data:v.value},null,8,["data"]),l(),s(x,{data:b.value},null,8,["data"]),l(),s(x,{data:w.value},null,8,["data"])]))}});const oe=F(ne,[["__scopeId","data-v-5ab6d374"]]),re={class:"kcard-stack"},le={class:"columns"},ie={key:0},ce=A({__name:"MeshOverviewView",setup(K){const{t:k}=H(),c=J(),f=O(),v=j(),b=D(!0),w=D(!1),n=D(null),u=D(null),I=_(()=>{if(n.value===null)return null;const{name:t,creationTime:a,modificationTime:h}=n.value;return{name:t,created:N(a),modified:N(h),"Data Plane Proxies":v.state.meshInsight.dataplanes.total}}),U=_(()=>{var E;if(n.value===null)return null;const t=C(n.value,"mtls"),a=C(n.value,"logging"),h=C(n.value,"metrics"),e=C(n.value,"tracing"),i=!!((E=n.value.routing)!=null&&E.localityAwareLoadBalancing);return{mtls:t,logging:a,metrics:h,tracing:e,localityAwareLoadBalancing:i}}),q=_(()=>v.state.sidebar.insights.mesh.policies.total),W=_(()=>v.state.policyTypes.map(t=>{var a;return{...t,length:((a=v.state.meshInsight.policies[t.name])==null?void 0:a.total)??0}}));R(()=>f.params.mesh,function(){f.name==="single-mesh-overview"&&T()}),T();async function T(){b.value=!0,w.value=!1;const t=f.params.mesh;try{n.value=await c.getMesh({name:t}),u.value=await c.getMeshInsights({name:t})}catch(a){w.value=!0,n.value=null,u.value=null,console.error(a)}finally{b.value=!1}}function C(t,a){if(t===null||t[a]===void 0)return!1;const h=t[a].enabledBackend??t[a].defaultBackend??t[a].backends[0].name,e=t[a].backends.find(i=>i.name===h);return`${e.type} / ${e.name}`}async function z(t){const a=f.params.mesh;return await c.getMesh({name:a},t)}return(t,a)=>{const h=G("router-link");return r(),p(X,{module:"meshes"},{default:o(()=>[s(Y,{title:d(k)("meshes.routes.overview.title")},null,8,["title"]),l(),s(Q,null,{default:o(()=>[B("div",re,[s(d(M),null,{body:o(()=>[s(oe)]),_:1}),l(),n.value!==null?(r(),p(d(M),{key:0},{body:o(()=>[B("div",le,[s(te,{"is-loading":b.value,"has-error":w.value,"is-empty":n.value===null||u.value===null},{default:o(()=>[s($,null,{default:o(()=>[(r(!0),m(y,null,P(I.value,(e,i)=>(r(),p(V,{key:i,term:d(k)(`http.api.property.${i}`)},{default:o(()=>[typeof e=="boolean"?(r(),p(d(L),{key:0,appearance:e?"success":"danger"},{default:o(()=>[l(g(e?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):i==="name"&&typeof e=="string"?(r(),p(ae,{key:1,text:e},null,8,["text"])):(r(),m(y,{key:2},[l(g(e),1)],64))]),_:2},1032,["term"]))),128))]),_:1})]),_:1},8,["is-loading","has-error","is-empty"]),l(),s($,null,{default:o(()=>[(r(!0),m(y,null,P(U.value,(e,i)=>(r(),p(V,{key:i,term:d(k)(`http.api.property.${i}`)},{default:o(()=>[typeof e=="boolean"?(r(),p(d(L),{key:0,appearance:e?"success":"danger"},{default:o(()=>[l(g(e?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):(r(),m(y,{key:1},[l(g(e),1)],64))]),_:2},1032,["term"]))),128))]),_:1}),l(),s($,null,{default:o(()=>[s(V,{term:`Policies (${q.value})`},{default:o(()=>[B("ul",null,[(r(!0),m(y,null,P(W.value,(e,i)=>(r(),m(y,{key:i},[e.length!==0?(r(),m("li",ie,[s(h,{to:{name:"policies-list-view",params:{policyPath:e.path}}},{default:o(()=>[l(g(e.name)+": "+g(e.length),1)]),_:2},1032,["to"])])):S("",!0)],64))),128))])]),_:1},8,["term"])]),_:1})])]),_:1})):S("",!0),l(),s(d(M),null,{body:o(()=>{var e;return[s(ee,{id:"code-block-mesh","resource-fetcher":z,"resource-fetcher-watch-key":((e=n.value)==null?void 0:e.name)||null},null,8,["resource-fetcher-watch-key"])]}),_:1}),l(),s(Z)])]),_:1})]),_:1})}}});const De=F(ce,[["__scopeId","data-v-6325d95c"]]);export{De as default};