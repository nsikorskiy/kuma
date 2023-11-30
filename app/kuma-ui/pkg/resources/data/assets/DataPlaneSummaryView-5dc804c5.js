import{d as D,l as I,N as S,a as u,o as r,c as d,p as i,e as o,w as a,f as t,t as n,q as e,b as y,a2 as V,s as x,a1 as _,F as O,B as z,_ as R,E as B,z as C,A as $,a4 as K}from"./index-b149f888.js";import{_ as L}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-52d4c52a.js";import{a as N,K as A}from"./index-52545d1d.js";import{g as U,a as E}from"./index-f3a1108a.js";import{S as F}from"./StatusBadge-cda559a5.js";import{T}from"./TagList-8c58a129.js";import{T as b}from"./TextWithCopyButton-e76d5e92.js";import"./CopyButton-2c5a3630.js";const W={class:"stack"},j={class:"stack-with-borders"},q={class:"status-with-reason"},G={key:0},Z={class:"mt-4"},H={class:"stack-with-borders"},J={key:1},M={class:"mt-4"},Q={class:"stack"},X={class:"mt-2 stack-with-borders"},Y=D({__name:"DataPlaneSummary",props:{dataplaneOverview:{}},setup(p){const{t:s,formatIsoDate:w}=I(),l=p,h=S(()=>U(l.dataplaneOverview)),f=S(()=>{var v;const m=E(((v=l.dataplaneOverview.dataplaneInsight)==null?void 0:v.subscriptions)??[]);return m!==void 0?w(m):s("common.detail.none")});return(m,v)=>{const k=u("KTooltip"),g=u("KBadge");return r(),d("div",W,[i("div",j,[o(_,{layout:"horizontal"},{title:a(()=>[t(n(e(s)("http.api.property.status")),1)]),body:a(()=>[i("div",q,[o(F,{status:h.value.status},null,8,["status"]),t(),h.value.reason.length>0?(r(),y(k,{key:0,label:h.value.reason.join(", "),class:"reason-tooltip","position-fixed":""},{default:a(()=>[o(e(V),{color:e(N),size:e(A),"hide-title":""},null,8,["color","size"])]),_:1},8,["label"])):x("",!0)])]),_:1}),t(),o(_,{layout:"horizontal"},{title:a(()=>[t(n(e(s)("data-planes.routes.item.last_updated")),1)]),body:a(()=>[f.value?(r(),d(O,{key:0},[t(n(f.value),1)],64)):(r(),d(O,{key:1},[t(n(e(s)("common.detail.none")),1)],64))]),_:1})]),t(),l.dataplaneOverview.dataplane.networking.gateway?(r(),d("div",G,[i("h3",null,n(e(s)("data-planes.routes.item.gateway")),1),t(),i("div",Z,[i("div",H,[o(_,{layout:"horizontal"},{title:a(()=>[t(n(e(s)("http.api.property.tags")),1)]),body:a(()=>[o(T,{alignment:"right",tags:l.dataplaneOverview.dataplane.networking.gateway.tags},null,8,["tags"])]),_:1}),t(),o(_,{layout:"horizontal"},{title:a(()=>[t(n(e(s)("http.api.property.address")),1)]),body:a(()=>[o(b,{text:`${l.dataplaneOverview.dataplane.networking.address}`},null,8,["text"])]),_:1})])])])):x("",!0),t(),l.dataplaneOverview.dataplane.networking.inbound?(r(),d("div",J,[i("h3",null,n(e(s)("data-planes.routes.item.inbounds")),1),t(),i("div",M,[i("div",Q,[(r(!0),d(O,null,z(l.dataplaneOverview.dataplane.networking.inbound,(c,P)=>(r(),d("div",{key:P,class:"inbound"},[i("h4",null,[o(b,{text:c.tags["kuma.io/service"]},{default:a(()=>[t(n(e(s)("data-planes.routes.item.inbound_name",{service:c.tags["kuma.io/service"]})),1)]),_:2},1032,["text"])]),t(),i("div",X,[o(_,{layout:"horizontal"},{title:a(()=>[t(n(e(s)("http.api.property.status")),1)]),body:a(()=>[!c.health||c.health.ready?(r(),y(g,{key:0,appearance:"success"},{default:a(()=>[t(n(e(s)("data-planes.routes.item.health.ready")),1)]),_:1})):(r(),y(g,{key:1,appearance:"danger"},{default:a(()=>[t(n(e(s)("data-planes.routes.item.health.not_ready")),1)]),_:1}))]),_:2},1024),t(),o(_,{layout:"horizontal"},{title:a(()=>[t(n(e(s)("http.api.property.tags")),1)]),body:a(()=>[o(T,{alignment:"right",tags:c.tags},null,8,["tags"])]),_:2},1024),t(),o(_,{layout:"horizontal"},{title:a(()=>[t(n(e(s)("http.api.property.address")),1)]),body:a(()=>[o(b,{text:`${c.address??l.dataplaneOverview.dataplane.networking.advertisedAddress??l.dataplaneOverview.dataplane.networking.address}:${c.port}`},null,8,["text"])]),_:2},1024)])]))),128))])])])):x("",!0)])}}});const tt=R(Y,[["__scopeId","data-v-f98c8325"]]),at=p=>(C("data-v-a062a5b1"),p=p(),$(),p),et={class:"summary-title-wrapper"},st=at(()=>i("img",{"aria-hidden":"true",src:K},null,-1)),ot={class:"summary-title"},nt={key:1,class:"stack"},lt=D({__name:"DataPlaneSummaryView",props:{name:{},dataplaneOverview:{default:void 0}},setup(p){const{t:s}=I(),w=B(),l=p;return(h,f)=>{const m=u("RouteTitle"),v=u("RouterLink"),k=u("AppView"),g=u("RouteView");return r(),y(g,{name:e(w).name},{default:a(()=>[o(k,null,{title:a(()=>[i("div",et,[st,t(),i("h2",ot,[o(v,{to:{name:"data-plane-detail-view",params:{dataPlane:l.name}}},{default:a(()=>[o(m,{title:e(s)("data-planes.routes.item.title",{name:l.name})},null,8,["title"])]),_:1},8,["to"])])])]),default:a(()=>[t(),l.dataplaneOverview===void 0?(r(),y(L,{key:0},{message:a(()=>[i("p",null,n(e(s)("common.collection.summary.empty_message",{type:"Data Plane Proxy"})),1)]),default:a(()=>[t(n(e(s)("common.collection.summary.empty_title",{type:"Data Plane Proxy"}))+" ",1)]),_:1})):(r(),d("div",nt,[o(tt,{class:"mt-4","dataplane-overview":l.dataplaneOverview},null,8,["dataplane-overview"])]))]),_:1})]),_:1},8,["name"])}}});const vt=R(lt,[["__scopeId","data-v-a062a5b1"]]);export{vt as default};