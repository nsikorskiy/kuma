import{d as v,L as h,o as t,j as m,h as r,w as e,m as y,ab as _,l as a,D as c,i as l,g as i,k,a2 as f,X as $,a8 as b,F as I,ag as S,A as w,p as B,E as D,s as V,ah as C,_ as T}from"./index-a884e6b1.js";import{T as E}from"./TagList-fe0124b0.js";const N={class:"stack"},P={class:"columns",style:{"--columns":"2"}},A=v({__name:"ExternalServiceDetails",props:{externalService:{}},setup(p){const s=p,{t:n}=h();return(u,g)=>(t(),m("div",N,[r(l(f),null,{body:e(()=>[y("div",P,[r(_,null,{title:e(()=>[a(c(l(n)("http.api.property.address")),1)]),body:e(()=>[a(c(s.externalService.networking.address),1)]),_:1}),a(),s.externalService.tags!==null?(t(),i(_,{key:0},{title:e(()=>[a(c(l(n)("http.api.property.tags")),1)]),body:e(()=>[r(E,{tags:s.externalService.tags},null,8,["tags"])]),_:1})):k("",!0)])]),_:1})]))}}),F={class:"stack"},L={class:"columns",style:{"--columns":"3"}},j=v({__name:"ServiceInsightDetails",props:{serviceInsight:{}},setup(p){const s=p,{t:n}=h();return(u,g)=>(t(),m("div",F,[r(l(f),null,{body:e(()=>{var o,d;return[y("div",L,[r(_,null,{title:e(()=>[a(c(l(n)("http.api.property.status")),1)]),body:e(()=>[r($,{status:s.serviceInsight.status??"not_available"},null,8,["status"])]),_:1}),a(),r(_,null,{title:e(()=>[a(c(l(n)("http.api.property.address")),1)]),body:e(()=>[s.serviceInsight.addressPort?(t(),i(b,{key:0,text:s.serviceInsight.addressPort},null,8,["text"])):(t(),m(I,{key:1},[a(c(l(n)("common.detail.none")),1)],64))]),_:1}),a(),r(S,{online:((o=s.serviceInsight.dataplanes)==null?void 0:o.online)??0,total:((d=s.serviceInsight.dataplanes)==null?void 0:d.total)??0},{title:e(()=>[a(c(l(n)("http.api.property.dataPlaneProxies")),1)]),_:1},8,["online","total"])])]}),_:1})]))}}),W=v({__name:"ServiceDetailView",props:{data:{}},setup(p){const s=p,{t:n}=h();return(u,g)=>(t(),i(T,{name:"service-detail-view","data-testid":"service-detail-view"},{default:e(({route:o})=>[r(w,null,{default:e(()=>[s.data.serviceType==="external"?(t(),i(B,{key:0,src:`/meshes/${o.params.mesh}/external-services/for/${o.params.service}`},{default:e(({data:d,error:x})=>[x?(t(),i(D,{key:0,error:x},null,8,["error"])):d===void 0?(t(),i(V,{key:1})):d===null?(t(),i(C,{key:2,"data-testid":"no-matching-external-service"},{title:e(()=>[y("p",null,c(l(n)("services.detail.no_matching_external_service",{name:o.params.service})),1)]),_:2},1024)):(t(),i(A,{key:3,"external-service":d},null,8,["external-service"]))]),_:2},1032,["src"])):(t(),i(j,{key:1,"service-insight":u.data},null,8,["service-insight"]))]),_:2},1024)]),_:1}))}});export{W as default};
