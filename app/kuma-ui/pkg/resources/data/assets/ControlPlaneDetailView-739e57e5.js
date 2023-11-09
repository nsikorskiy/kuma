import{d as x,l as L,a as r,o as l,b as _,w as s,e as o,f as n,t as i,q as e,z as P,c as y,D as I,E as K,F as z,G as N,p as m,H as B,X as T,K as A,v as R,_ as E}from"./index-09fb206b.js";import{A as b}from"./AppCollection-5cf27990.js";import{S as Z}from"./StatusBadge-467506c5.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-bb1557bf.js";const F=x({__name:"MeshInsightsList",props:{items:{}},setup(f){const{t}=L(),d=f;return(g,C)=>{var u;const v=r("RouterLink");return l(),_(b,{headers:[{label:e(t)("meshes.components.mesh-insights-list.name"),key:"name"},{label:e(t)("meshes.components.mesh-insights-list.services"),key:"services"},{label:e(t)("meshes.components.mesh-insights-list.dataplanes"),key:"dataplanes"}],items:d.items,total:(u=d.items)==null?void 0:u.length,"empty-state-message":e(t)("common.emptyState.message",{type:e(t)("meshes.common.type",{count:2})}),"empty-state-cta-to":e(t)("meshes.href.docs"),"empty-state-cta-text":e(t)("common.documentation")},{name:s(({row:a})=>[o(v,{to:{name:"mesh-detail-view",params:{mesh:a.name}}},{default:s(()=>[n(i(a.name),1)]),_:2},1032,["to"])]),services:s(({row:a})=>[n(i(a.services.internal??"0"),1)]),dataplanes:s(({row:a})=>[n(i(a.dataplanesByType.standard.online??"0")+" / "+i(a.dataplanesByType.standard.total??"0"),1)]),_:1},8,["headers","items","total","empty-state-message","empty-state-cta-to","empty-state-cta-text"])}}}),X=x({__name:"ZoneControlPlanesList",props:{items:{}},setup(f){const{t}=L(),d=P(),g=f;return(C,v)=>{var a;const u=r("RouterLink");return l(),_(b,{headers:[{label:e(t)("zone-cps.components.zone-control-planes-list.name"),key:"name"},{label:e(t)("zone-cps.components.zone-control-planes-list.status"),key:"status"}],items:g.items,total:(a=g.items)==null?void 0:a.length,"empty-state-title":e(t)("zone-cps.empty_state.title"),"empty-state-message":e(d)("create zones")?e(t)("zone-cps.empty_state.message"):e(t)("common.emptyState.message",{type:"Zones"}),"empty-state-cta-to":e(d)("create zones")?{name:"zone-create-view"}:void 0,"empty-state-cta-text":e(t)("zones.index.create")},{name:s(({row:p})=>[o(u,{to:{name:"zone-cp-detail-view",params:{zone:p.name}}},{default:s(()=>[n(i(p.name),1)]),_:2},1032,["to"])]),status:s(({row:p})=>[(l(!0),y(z,null,I([e(K)(p)],w=>(l(),y(z,{key:w},[w?(l(),_(Z,{key:0,status:w},null,8,["status"])):(l(),y(z,{key:1},[n(i(e(t)("common.collection.none")),1)],64))],64))),128))]),_:1},8,["headers","items","total","empty-state-title","empty-state-message","empty-state-cta-to","empty-state-cta-text"])}}}),$={class:"stack","data-testid":"detail-view-details"},q={class:"columns"},G={class:"card-header"},H={class:"card-title"},M={key:0,class:"card-actions"},O={class:"card-header"},U={class:"card-title"},j=x({__name:"ControlPlaneDetailView",setup(f){const t=N();return(d,g)=>{const C=r("RouteTitle"),v=r("RouterLink"),u=r("KButton"),a=r("DataSource"),p=r("KCard"),w=r("AppView"),D=r("RouteView");return l(),_(D,{name:"home"},{default:s(({can:S,t:h})=>[o(w,null,{title:s(()=>[m("h1",null,[o(C,{title:h("main-overview.routes.item.title"),render:!0},null,8,["title"])])]),default:s(()=>[n(),m("div",$,[o(e(t)),n(),m("div",q,[S("use zones")?(l(),_(p,{key:0},{body:s(()=>[o(a,{src:"/zone-cps?page=1&size=10"},{default:s(({data:c,error:k})=>{var V;return[k?(l(),_(B,{key:0,error:k},null,8,["error"])):(l(),y(z,{key:1},[m("div",G,[m("div",H,[m("h2",null,i(h("main-overview.detail.zone_control_planes.title")),1),n(),o(v,{to:{name:"zone-cp-list-view"}},{default:s(()=>[n(i(h("main-overview.detail.health.view_all")),1)]),_:2},1024)]),n(),S("create zones")&&(((V=c==null?void 0:c.items)==null?void 0:V.length)??0>0)?(l(),y("div",M,[o(u,{appearance:"primary",to:{name:"zone-create-view"}},{default:s(()=>[o(e(T),{size:e(A)},null,8,["size"]),n(" "+i(h("zones.index.create")),1)]),_:2},1024)])):R("",!0)]),n(),o(X,{"data-testid":"zone-control-planes-details",items:c==null?void 0:c.items},null,8,["items"])],64))]}),_:2},1024)]),_:2},1024)):R("",!0),n(),o(p,null,{body:s(()=>[o(a,{src:"/meshes?page=1&size=10"},{default:s(({data:c,error:k})=>[k?(l(),_(B,{key:0,error:k},null,8,["error"])):(l(),y(z,{key:1},[m("div",O,[m("div",U,[m("h2",null,i(h("main-overview.detail.meshes.title")),1),n(),o(v,{to:{name:"mesh-list-view"}},{default:s(()=>[n(i(h("main-overview.detail.health.view_all")),1)]),_:2},1024)])]),n(),o(F,{"data-testid":"meshes-details",items:c==null?void 0:c.items},null,8,["items"])],64))]),_:2},1024)]),_:2},1024)])])]),_:2},1024)]),_:1})}}});const ee=E(j,[["__scopeId","data-v-ad4850ea"]]);export{ee as default};
