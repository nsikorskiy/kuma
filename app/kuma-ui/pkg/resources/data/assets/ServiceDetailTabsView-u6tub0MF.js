import{_ as u}from"./NavTabs.vue_vue_type_script_setup_true_lang-9VWZDYUa.js";import{d,a as s,o as v,b as f,w as t,V as h,e as a,m as w,f as r,t as V,H as b,W as x}from"./index-hxBSVBdA.js";const $=d({__name:"ServiceDetailTabsView",setup(R){return(T,k)=>{const m=s("RouteTitle"),c=s("RouterLink"),p=s("RouterView"),_=s("AppView"),l=s("RouteView");return v(),f(l,{name:"service-detail-tabs-view",params:{mesh:"",service:""}},{default:t(({route:e,t:o})=>[a(_,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:e.params.mesh}},text:e.params.mesh},{to:{name:"service-list-view",params:{mesh:e.params.mesh}},text:o("services.routes.item.breadcrumbs")}]},{title:t(()=>[w("h1",null,[a(h,{text:e.params.service},{default:t(()=>[a(m,{title:o("services.routes.item.title",{name:e.params.service})},null,8,["title"])]),_:2},1032,["text"])])]),default:t(()=>{var n;return[r(),a(u,{"active-route-name":(n=e.active)==null?void 0:n.name},x({_:2},[b(e.children,({name:i})=>({name:`${i}`,fn:t(()=>[a(c,{to:{name:i},"data-testid":`${i}-tab`},{default:t(()=>[r(V(o(`services.routes.item.navigation.${i}`)),1)]),_:2},1032,["to","data-testid"])])}))]),1032,["active-route-name"]),r(),a(p)]}),_:2},1032,["breadcrumbs"])]),_:1})}}});export{$ as default};
