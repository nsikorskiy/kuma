import{L as f}from"./kongponents.es-cb60a408.js";import{d as b,u as g,B as y,c as h,o as r,e as i,F as L,s as k,a as l,w as p,i as x,g as w,t as m,q as B,b as T}from"./index-8cf34a8f.js";import{f as z}from"./RouteView.vue_vue_type_script_setup_true_lang-f43ad4b4.js";function C(o){return Object.entries(o??{}).map(([s,a])=>({label:s,value:a}))}const R={class:"tag-list"},j=b({__name:"TagList",props:{tags:{type:Object,required:!0}},setup(o){const s=o,a=g(),c=y(),_=h(()=>(Array.isArray(s.tags)?s.tags:C(s.tags)).map(n=>{const{label:t,value:u}=n,v=d(n);return{label:t,value:u,route:v}}));function d(e){if(e.value!=="*")try{switch(e.label){case"kuma.io/zone":return c.resolve({name:"zone-cp-detail-view",params:{zone:e.value}});case"kuma.io/service":return"mesh"in a.params?c.resolve({name:"service-detail-view",params:{mesh:a.params.mesh,service:e.value}}):void 0;default:return}}catch{return}}return(e,n)=>(r(),i("span",R,[(r(!0),i(L,null,k(_.value,(t,u)=>(r(),l(T(f),{key:u,class:"tag-badge"},{default:p(()=>[(r(),l(x(t.route?"router-link":"span"),{to:t.route},{default:p(()=>[w(m(t.label)+":",1),B("b",null,m(t.value),1)]),_:2},1032,["to"]))]),_:2},1024))),128))]))}});const F=z(j,[["__scopeId","data-v-2e356c8b"]]);export{F as T};
