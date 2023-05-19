import{v as B}from"./kongponents.es-6cc20401.js";import{_ as h}from"./CodeBlock.vue_vue_type_style_index_0_lang-7b980fdd.js";import{_ as E}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-5dc5aad7.js";import{E as S}from"./ErrorBlock-1f74e70f.js";import{_ as V}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-daa04137.js";import{u as j}from"./store-7a329c21.js";import{t as y}from"./toYaml-4e00099e.js";import{d as w,r as H,c as C,o as n,j as k,b as s,w as g,g as v,e as b}from"./index-c271a676.js";const M={class:"yaml-view"},O={key:3,class:"yaml-view-content"},F=w({__name:"YamlView",props:{id:{type:String,required:!0},content:{type:Object,required:!1,default:null},isLoading:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1},isEmpty:{type:Boolean,required:!1,default:!1},codeMaxHeight:{type:String,required:!1,default:null},isSearchable:{type:Boolean,required:!1,default:!1}},setup(e){const a=e,p=j(),l=[{hash:"#universal",title:"Universal"},{hash:"#kubernetes",title:"Kubernetes"}],o=H(l[0].hash),i=p.getters["config/getEnvironment"];typeof i=="string"&&(o.value="#"+i);const c=C(()=>{var u;const t={};if(t.apiVersion="kuma.io/v1alpha1",t.kind=a.content.type,a.content.mesh!==void 0&&(t.mesh=a.content.mesh),(u=a.content.name)!=null&&u.includes(".")){const f=a.content.name.split("."),q=f.pop(),x=f.join(".");t.metadata={name:x,namespace:q}}else t.metadata={name:a.content.name};const{type:r,name:m,mesh:$,...d}=a.content;return Object.keys(d).length>0&&(t.spec=d),{universal:y(a.content),kubernetes:y(t)}});return(t,r)=>(n(),k("div",M,[e.isLoading?(n(),s(V,{key:0})):e.hasError?(n(),s(S,{key:1})):e.isEmpty?(n(),s(E,{key:2})):(n(),k("div",O,[(n(),s(b(B),{key:b(i),modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=m=>o.value=m),tabs:l},{universal:g(()=>[v(h,{id:e.id,language:"yaml",code:c.value.universal,"is-searchable":e.isSearchable,"query-key":e.id,"code-max-height":e.codeMaxHeight},null,8,["id","code","is-searchable","query-key","code-max-height"])]),kubernetes:g(()=>[v(h,{id:e.id,language:"yaml",code:c.value.kubernetes,"is-searchable":e.isSearchable,"query-key":e.id,"code-max-height":e.codeMaxHeight},null,8,["id","code","is-searchable","query-key","code-max-height"])]),_:1},8,["modelValue"]))]))]))}});export{F as _};