import{_ as V}from"./NavTabs.vue_vue_type_script_setup_true_lang-CqmCfraD.js";import{d as x,a as n,o as l,b as c,w as e,e as a,O as p,f as m,C as D,t as R,B as C,m as T,T as $}from"./index-e3QTo5dz.js";const N=x({__name:"DataPlaneDetailTabsView",setup(k){return(B,L)=>{const d=n("RouteTitle"),_=n("RouterLink"),u=n("RouterView"),f=n("DataLoader"),h=n("AppView"),w=n("DataSource"),v=n("RouteView");return l(),c(v,{name:"data-plane-detail-tabs-view",params:{mesh:"",dataPlane:""}},{default:e(({route:t,t:r})=>[a(w,{src:`/meshes/${t.params.mesh}/dataplane-overviews/${t.params.dataPlane}`},{default:e(({data:o,error:b})=>[a(h,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:t.params.mesh}},text:t.params.mesh},{to:{name:"data-plane-list-view",params:{mesh:t.params.mesh}},text:r("data-planes.routes.item.breadcrumbs")}]},p({default:e(()=>[m(),a(f,{data:[o],errors:[b]},{default:e(()=>{var i;return[a(V,{"active-route-name":(i=t.active)==null?void 0:i.name},p({_:2},[D(t.children,({name:s})=>({name:`${s}`,fn:e(()=>[a(_,{to:{name:s},"data-testid":`${s}-tab`},{default:e(()=>[m(R(r(`data-planes.routes.item.navigation.${s}`)),1)]),_:2},1032,["to","data-testid"])])}))]),1032,["active-route-name"]),m(),a(u,null,{default:e(s=>[(l(),c(C(s.Component),{data:o},null,8,["data"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},[o?{name:"title",fn:e(()=>[T("h1",null,[a($,{text:o.name},{default:e(()=>[a(d,{title:r("data-planes.routes.item.title",{name:o.name})},null,8,["title"])]),_:2},1032,["text"])])]),key:"0"}:void 0]),1032,["breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});export{N as default};