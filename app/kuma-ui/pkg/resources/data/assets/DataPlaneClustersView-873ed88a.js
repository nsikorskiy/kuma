import{E as m}from"./EnvoyData-3f59fe7f.js";import{d as i,a,o as u,b as d,w as t,e as o,p as _,f as h}from"./index-eeb8fb94.js";import"./index-52545d1d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-9954ba89.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-15b5853f.js";import"./ErrorBlock-987710fd.js";import"./TextWithCopyButton-aef3169a.js";import"./CopyButton-c9ea289f.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-30df6cde.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-87dc8241.js";const S=i({__name:"DataPlaneClustersView",setup(w){return(f,C)=>{const n=a("RouteTitle"),r=a("KCard"),s=a("AppView"),p=a("RouteView");return u(),d(p,{name:"data-plane-clusters-view",params:{mesh:"",dataPlane:"",codeSearch:""}},{default:t(({route:e,t:l})=>[o(s,null,{title:t(()=>[_("h2",null,[o(n,{title:l("data-planes.routes.item.navigation.data-plane-clusters-view")},null,8,["title"])])]),default:t(()=>[h(),o(r,null,{body:t(()=>[o(m,{resource:"Data Plane Proxy",src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/clusters`,query:e.params.codeSearch,onQueryChange:c=>e.update({codeSearch:c})},null,8,["src","query","onQueryChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{S as default};