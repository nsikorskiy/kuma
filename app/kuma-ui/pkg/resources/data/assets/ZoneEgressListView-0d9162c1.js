import{d as N,u as T,r as o,v as A,A as x,D as Z,j as y,i as E,g as h,e as V,h as S,f as B,G as w,o as b}from"./index-c271a676.js";import{_ as I}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-0d6a08d5.js";import{D as L}from"./DataOverview-3679168e.js";import{u as O}from"./index-0fcc3d29.js";import{Q as d}from"./QueryParameter-70743f73.js";import"./AccordionList-b7e3b9a7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DefinitionListItem-1834b712.js";import"./EnvoyData-dc34c834.js";import"./kongponents.es-6cc20401.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-7b980fdd.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-d9a82a33.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-5dc5aad7.js";import"./ErrorBlock-1f74e70f.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-daa04137.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-f85305f8.js";import"./TabsWidget-8c883876.js";import"./datadogLogEvents-302eea7b.js";import"./TagList-a690852a.js";import"./store-7a329c21.js";import"./StatusBadge-3e47fb84.js";const P={class:"zoneegresses"},q={class:"kcard-stack"},C={class:"kcard-border"},F={key:0,class:"kcard-border"},ie=N({__name:"ZoneEgressListView",props:{selectedZoneEgressName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(z){const l=z,p=O(),k={title:"No Data",message:"There are no Zone Egresses present."},v=T(),i=o(!0),u=o(null),n=o({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"}],data:[]}),r=o(null),f=o(null),g=o(l.offset);A(()=>v.params.mesh,function(){v.name==="zone-egress-list-view"&&c(0)}),x(function(){c(l.offset)});async function c(e){var a;g.value=e,d.set("offset",e>0?e:null),i.value=!0,u.value=null;const t=w;try{const{items:s,next:m}=await p.getAllZoneEgressOverviews({size:t,offset:e});f.value=m,n.value.data=D(s??[]),await _({name:l.selectedZoneEgressName??((a=n.value.data[0])==null?void 0:a.entity.name)})}catch(s){n.value.data=[],r.value=null,s instanceof Error?u.value=s:console.error(s)}finally{i.value=!1}}function D(e){return e.map(t=>{const{name:a}=t,s={name:"zone-egress-detail-view",params:{zoneEgress:a}},m=Z(t.zoneEgressInsight??{});return{entity:t,detailViewRoute:s,status:m}})}async function _({name:e}){if(e===void 0){r.value=null,d.set("zoneEgress",null);return}try{r.value=await p.getZoneEgressOverview({name:e}),d.set("zoneEgress",e)}catch(t){console.error(t)}}return(e,t)=>{var a;return b(),y("div",P,[E("div",q,[E("div",C,[h(L,{"selected-entity-name":(a=r.value)==null?void 0:a.name,"page-size":V(w),"is-loading":i.value,error:u.value,"empty-state":k,"table-data":n.value,"table-data-is-empty":n.value.data.length===0,next:f.value,"page-offset":g.value,onTableAction:_,onLoadData:c},null,8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])]),S(),r.value!==null?(b(),y("div",F,[h(I,{"zone-egress-overview":r.value},null,8,["zone-egress-overview"])])):B("",!0)])])}}});export{ie as default};