import{E as l}from"./EnvoyData-49cdeaa8.js";import{d as m,a as o,o as c,b as _,w as t,e as n,m as u,f as g}from"./index-94bc0e5d.js";import"./index-fce48c05.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-267e24b8.js";import"./uniqueId-90cc9b93.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-807d94c7.js";import"./ErrorBlock-4b0b2d3c.js";import"./TextWithCopyButton-7a8e0cd6.js";import"./CopyButton-ff80411a.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-2fd4b808.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-9eb8d15b.js";const D=m({__name:"DataPlaneXdsConfigView",setup(f){return(h,x)=>{const p=o("RouteTitle"),r=o("KCard"),s=o("AppView"),i=o("RouteView");return c(),_(i,{name:"data-plane-xds-config-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:e,t:d})=>[n(s,null,{title:t(()=>[u("h2",null,[n(p,{title:d("data-planes.routes.item.navigation.data-plane-xds-config-view")},null,8,["title"])])]),default:t(()=>[g(),n(r,null,{default:t(()=>[n(l,{resource:"Data Plane Proxy",src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/xds`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{D as default};