import{E as m}from"./EnvoyData-32f35d7c.js";import{d,a as t,o as l,b as g,w as a,e as s,m as u,f as _}from"./index-aa9e8cf8.js";import"./index-fce48c05.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-c1fa0d55.js";import"./uniqueId-90cc9b93.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-37fb61f9.js";import"./ErrorBlock-9704ba90.js";import"./TextWithCopyButton-542a92d2.js";import"./CopyButton-f241e0d6.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-44859ced.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-a339072f.js";const B=d({__name:"ZoneEgressStatsView",setup(f){return(h,x)=>{const r=t("RouteTitle"),n=t("KCard"),p=t("AppView"),i=t("RouteView");return l(),g(i,{name:"zone-egress-stats-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:c})=>[s(p,null,{title:a(()=>[u("h2",null,[s(r,{title:c("zone-egresses.routes.item.navigation.zone-egress-stats-view")},null,8,["title"])])]),default:a(()=>[_(),s(n,null,{default:a(()=>[s(m,{resource:"Zone",src:`/zone-egresses/${e.params.zoneEgress}/data-path/stats`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{B as default};