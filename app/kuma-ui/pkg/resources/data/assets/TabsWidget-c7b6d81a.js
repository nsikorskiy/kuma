import{J as w,u as B,q}from"./kongponents.es-cb60a408.js";import{E as S}from"./ErrorBlock-802b0a45.js";import{L as T,h as k,f as E}from"./RouteView.vue_vue_type_script_setup_true_lang-f43ad4b4.js";import{d as L,j as V,c as x,o as s,e as l,a as p,F as $,x as h,f as C,g as m,q as u,h as i,z as N,s as P,w as d,b as c,S as I,p as W,m as A}from"./index-8cf34a8f.js";const b={get(e){const a=new URL(window.location.href).searchParams.get(e);return a!==null?a.replaceAll("+"," "):null},set(e,t){const a=new URL(window.location.href);t!=null?a.searchParams.set(e,String(t).replace(/\s/g,"+")):a.searchParams.has(e)&&a.searchParams.delete(e),window.history.replaceState({path:a.href},"",a.href)}},O=e=>(W("data-v-4cf998d3"),e=e(),A(),e),U={class:"tab-container","data-testid":"tab-container"},z={key:0,class:"tab__header"},F={class:"tab__content-container"},H={class:"flex items-center with-warnings"},J=O(()=>u("span",null,"Warnings",-1)),R=L({__name:"TabsWidget",props:{tabs:{type:Array,required:!0},isLoading:{type:Boolean,required:!1,default:!1},isEmpty:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1},error:{type:[Error,null],required:!1,default:null},hasBorder:{type:Boolean,required:!1,default:!1},initialTabOverride:{type:String,required:!1,default:null}},emits:["on-tab-change"],setup(e,{emit:t}){const a=e,g=T(),o=V(""),_=x(()=>a.tabs.map(r=>r.hash.replace("#","")));function y(){const r=b.get("tab");r!==null?o.value=`#${r}`:a.initialTabOverride!==null&&(o.value=`#${a.initialTabOverride}`)}y();function v(r){b.set("tab",r.substring(1)),g.info(I.TABS_TAB_CHANGE,{data:{newActiveTabHash:r}}),t("on-tab-change",r)}return(r,f)=>(s(),l("div",U,[e.isLoading?(s(),p(k,{key:0})):e.error!==null?(s(),p(S,{key:1,error:e.error},null,8,["error"])):(s(),l($,{key:2},[r.$slots.tabHeader?(s(),l("header",z,[h(r.$slots,"tabHeader",{},void 0,!0)])):C("",!0),m(),u("div",F,[i(c(q),{modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=n=>o.value=n),tabs:e.tabs,onChanged:v},N({"warnings-anchor":d(()=>[u("span",H,[i(c(B),{class:"mr-1",icon:"warning",color:"var(--black-500)","secondary-color":"var(--yellow-300)",size:"16"}),m(),J])]),_:2},[P(_.value,(n,j)=>({name:n,fn:d(()=>[i(c(w),{"border-variant":"noBorder"},{body:d(()=>[h(r.$slots,n,{},void 0,!0)]),_:2},1024)])}))]),1032,["modelValue","tabs"])])],64))]))}});const M=E(R,[["__scopeId","data-v-4cf998d3"]]);export{M as T};
