import{u as h}from"./production-554ae9d4.js";import{D as P}from"./DataPlaneList-eb5c381c.js";import{u as S}from"./index-36b3783c.js";import{Q as f}from"./QueryParameter-70743f73.js";import{d as T,r as s,c as x,q as I,o as b,a as k,u as q}from"./runtime-dom.esm-bundler-9284044f.js";import"./kongponents.es-3ba46133.js";import"./ContentWrapper-3e2f16cb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DataOverview-1c2773e2.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-1dc4f3b2.js";import"./ErrorBlock-53b18c33.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-55aeae37.js";import"./datadogLogEvents-302eea7b.js";import"./TagList-67637749.js";import"./StatusBadge-832cc4dd.js";import"./YamlView.vue_vue_type_script_setup_true_lang-36e8b31a.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-c7bd4e33.js";import"./store-f2021894.js";import"./toYaml-4e00099e.js";const $=T({__name:"DataPlaneListView",props:{selectedDppName:{type:String,required:!1,default:null},gatewayType:{type:String,required:!1,default:"true"},offset:{type:Number,required:!1,default:0},isGatewayView:{type:Boolean,required:!1,default:!1}},setup(d){const t=d,v=S(),w=50,g={name:{description:"filter by name or parts of a name"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},_={protocol:{description:"filter by “kuma.io/protocol” value"}},D={},i=h(),o=s([]),p=s(!0),m=s(null),l=s(null),y=s(t.offset),E=x(()=>({...g,...t.isGatewayView?D:_}));I(()=>i.params.mesh,function(){i.name!=="data-plane-list-view"&&i.name!=="gateway-list-view"||u(0)});function F(){const a=f.get("filterFields"),r=a!==null?JSON.parse(a):{};u(t.offset,{...r,gateway:t.gatewayType})}F();async function u(a,r={}){y.value=a,f.set("offset",a>0?a:null),f.set("gatewayType",r.gateway==="true"?"all":r.gateway),p.value=!0;const c=i.params.mesh,n=L(r,w,a,t.isGatewayView);try{const{items:e,next:A}=await v.getAllDataplaneOverviewsFromMesh({mesh:c},n);Array.isArray(e)&&e.length>0?(o.value=e,l.value=A):(o.value=[],l.value=null)}catch(e){e instanceof Error?m.value=e:console.error(e),o.value=[],l.value=null}finally{p.value=!1}}function L(a,r,c,n){const e={...a,size:r,offset:c};return n&&(!("gateway"in e)||e.gateway==="false")?e.gateway="true":n||(e.gateway="false"),e}return(a,r)=>(b(),k(P,{"data-plane-overviews":o.value,"is-loading":p.value,error:m.value,"next-url":l.value,"page-offset":y.value,"selected-dpp-name":t.selectedDppName,"is-gateway-view":t.isGatewayView,"gateway-type":t.gatewayType,"dpp-filter-fields":q(E),onLoadData:u},null,8,["data-plane-overviews","is-loading","error","next-url","page-offset","selected-dpp-name","is-gateway-view","gateway-type","dpp-filter-fields"]))}});export{$ as default};