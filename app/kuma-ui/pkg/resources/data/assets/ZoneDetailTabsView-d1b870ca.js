import{d as D,l as N,u as A,Y as E,m as R,a as m,o as u,c as S,e as c,w as o,aB as B,f as v,t as y,q as s,b as f,p as h,s as Z,$ as I,E as M}from"./index-f56c27ab.js";import{_ as $}from"./DeleteResourceModal.vue_vue_type_script_setup_true_lang-aa7432ca.js";import{E as K}from"./ErrorBlock-aa131c0d.js";import{_ as L}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-b984e5b1.js";import{N as P}from"./NavTabs-cb5d5581.js";import{T as Y}from"./TextWithCopyButton-6a682cf8.js";import"./index-52545d1d.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-af2f8e99.js";import"./CopyButton-7b31a54c.js";const j=D({__name:"ZoneActionMenu",props:{zoneOverview:{type:Object,required:!0},kpopAttributes:{type:Object,default:()=>({placement:"bottomEnd"})}},setup(C){const{t:e}=N(),x=A(),O=E(),p=C,d=R(!1);function b(){d.value=!d.value}async function w(){await x.deleteZone({name:p.zoneOverview.name})}function t(){O.push({name:"zone-cp-list-view"})}return(i,n)=>{const r=m("KDropdownItem"),l=m("KDropdown");return u(),S("div",null,[c(l,{"kpop-attributes":p.kpopAttributes,"trigger-text":s(e)("zones.action_menu.toggle_button"),"show-caret":"",width:"280"},{items:o(()=>[c(r,{danger:"","data-testid":"delete-button",onClick:B(b,["prevent"])},{default:o(()=>[v(y(s(e)("zones.action_menu.delete_button")),1)]),_:1})]),_:1},8,["kpop-attributes","trigger-text"]),v(),d.value?(u(),f($,{key:0,"confirmation-text":p.zoneOverview.name,"delete-function":w,"is-visible":"","action-button-text":s(e)("common.delete_modal.proceed_button"),title:s(e)("common.delete_modal.title",{type:"Zone"}),"data-testid":"delete-zone-modal",onCancel:b,onDelete:t},{"body-content":o(()=>[h("p",null,y(s(e)("common.delete_modal.text1",{type:"Zone",name:p.zoneOverview.name})),1),v(),h("p",null,y(s(e)("common.delete_modal.text2")),1)]),_:1},8,["confirmation-text","action-button-text","title"])):Z("",!0)])}}}),ee=D({__name:"ZoneDetailTabsView",setup(C){var w;const{t:e}=N(),p=(((w=E().getRoutes().find(t=>t.name==="zone-cp-detail-tabs-view"))==null?void 0:w.children)??[]).map(t=>{var a,_;const i=typeof t.name>"u"?(a=t.children)==null?void 0:a[0]:t,n=i.name,r=((_=i.meta)==null?void 0:_.module)??"";return{title:e(`zone-cps.routes.item.navigation.${n}`),routeName:n,module:r}}),d=R([]),b=t=>{var r,l;const i=[],n=((r=t.zoneInsight)==null?void 0:r.subscriptions)??[];if(n.length>0){const a=n[n.length-1],_=a.version.kumaCp.version||"-",{kumaCpGlobalCompatible:z=!0}=a.version.kumaCp;a.config&&((l=JSON.parse(a.config))==null?void 0:l.store.type)==="memory"&&i.push({kind:"ZONE_STORE_TYPE_MEMORY",payload:{}}),z||i.push({kind:"INCOMPATIBLE_ZONE_AND_GLOBAL_CPS_VERSIONS",payload:{zoneCpVersion:_}})}d.value=i};return(t,i)=>{const n=m("RouteTitle"),r=m("RouterView"),l=m("AppView"),a=m("DataSource"),_=m("RouteView");return u(),f(_,{name:"zone-cp-detail-tabs-view",params:{zone:""}},{default:o(({can:z,route:g})=>[c(a,{src:`/zone-cps/${g.params.zone}`,onChange:b},{default:o(({data:k,error:V})=>[V!==void 0?(u(),f(K,{key:0,error:V},null,8,["error"])):k===void 0?(u(),f(L,{key:1})):(u(),f(l,{key:2,breadcrumbs:[{to:{name:"zone-cp-list-view"},text:s(e)("zone-cps.routes.item.breadcrumbs")}]},I({title:o(()=>[h("h1",null,[c(Y,{text:g.params.zone},{default:o(()=>[c(n,{title:s(e)("zone-cps.routes.item.title",{name:g.params.zone})},null,8,["title"])]),_:2},1032,["text"])])]),default:o(()=>[v(),v(),c(P,{class:"route-zone-detail-view-tabs",tabs:s(p)},null,8,["tabs"]),v(),c(r,null,{default:o(T=>[(u(),f(M(T.Component),{data:k,notifications:d.value},null,8,["data","notifications"]))]),_:2},1024)]),_:2},[z("create zones")?{name:"actions",fn:o(()=>[c(j,{"zone-overview":k},null,8,["zone-overview"])]),key:"0"}:void 0]),1032,["breadcrumbs"]))]),_:2},1032,["src"])]),_:1})}}});export{ee as default};
