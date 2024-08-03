import{m as E,g as p,O as z,A as N,k as d,a5 as P,a6 as ee,_ as ae,h as ne,a7 as q,i as te,j as T,a8 as le,U as ie,V as oe,l as de,n as h,o as B,c as w,a as se,x as ue,s as V,r as k,b as $,v as O,Y as re,a9 as ce,aa as ge}from"./z1194Smb.js";const me={wrapper:"",inner:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},D=E(p.ui.strategy,p.ui.formGroup,me),fe=(e,n)=>{const g=z("form-events",void 0),a=z("form-group",void 0),b=z("form-inputs",void 0);a&&(e!=null&&e.id&&(a.inputId.value=e==null?void 0:e.id),b&&(b.value[a.name.value]=a.inputId.value));const y=N(!1);function c(t,u){g&&g.emit({type:t,path:u})}function r(){c("blur",a==null?void 0:a.name.value),y.value=!0}function i(){c("change",a==null?void 0:a.name.value)}const s=P(()=>{(y.value||a!=null&&a.eagerValidation.value)&&c("input",a==null?void 0:a.name.value)},300);return{inputId:d(()=>(e==null?void 0:e.id)??(a==null?void 0:a.inputId.value)),name:d(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:d(()=>{var u;const t=n.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??t??((u=D==null?void 0:D.default)==null?void 0:u.size)}),color:d(()=>{var t;return(t=a==null?void 0:a.error)!=null&&t.value?"red":e==null?void 0:e.color}),emitFormBlur:r,emitFormInput:s,emitFormChange:i}},m=E(p.ui.strategy,p.ui.input,ee),ve=ne({components:{UIcon:q},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>m.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(m.size).includes(e)}},color:{type:String,default:()=>m.default.color,validator(e){return[...p.ui.colors,...Object.keys(m.color)].includes(e)}},variant:{type:String,default:()=>m.default.variant,validator(e){return[...Object.keys(m.variant),...Object.values(m.color).flatMap(n=>Object.keys(n))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:n,slots:g}){const{ui:a,attrs:b}=te("input",T(e,"ui"),m,T(e,"class")),{size:y,rounded:c}=le({ui:a,props:e}),{emitFormBlur:r,emitFormInput:i,size:s,color:t,inputId:u,name:j}=fe(e,m),f=d(()=>y.value??s.value),I=N(ie({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),F=N(null),L=()=>{var l;e.autofocus&&((l=F.value)==null||l.focus())},M=l=>{I.value.trim&&(l=l.trim()),(I.value.number||e.type==="number")&&(l=re(l)),n("update:modelValue",l),i()},W=l=>{I.value.lazy||M(l.target.value)},Y=l=>{if(e.type==="file"){const v=l.target.files;n("change",v)}else{const v=l.target.value;n("change",v),I.value.lazy&&M(v),I.value.trim&&(l.target.value=v.trim())}},J=l=>{r(),n("blur",l)};oe(()=>{setTimeout(()=>{L()},e.autofocusDelay)});const K=d(()=>{var v,A;const l=((A=(v=a.value.color)==null?void 0:v[t.value])==null?void 0:A[e.variant])||a.value.variant[e.variant];return de(h(a.value.base,a.value.form,c.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[f.value],e.padded?a.value.padding[f.value]:"p-0",l==null?void 0:l.replaceAll("{color}",t.value),(S.value||g.leading)&&a.value.leading.padding[f.value],(R.value||g.trailing)&&a.value.trailing.padding[f.value]),e.inputClass)}),S=d(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),R=d(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),H=d(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),Q=d(()=>e.loading&&!S.value?e.loadingIcon:e.trailingIcon||e.icon),X=d(()=>h(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[f.value])),Z=d(()=>h(a.value.icon.base,t.value&&p.ui.colors.includes(t.value)&&a.value.icon.color.replaceAll("{color}",t.value),a.value.icon.size[f.value],e.loading&&a.value.icon.loading)),G=d(()=>h(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[f.value])),_=d(()=>h(a.value.icon.base,t.value&&p.ui.colors.includes(t.value)&&a.value.icon.color.replaceAll("{color}",t.value),a.value.icon.size[f.value],e.loading&&!S.value&&a.value.icon.loading));return{ui:a,attrs:b,name:j,inputId:u,input:F,isLeading:S,isTrailing:R,inputClass:K,leadingIconName:H,leadingIconClass:Z,leadingWrapperIconClass:X,trailingIconName:Q,trailingIconClass:_,trailingWrapperIconClass:G,onInput:W,onChange:Y,onBlur:J}}}),be=["id","name","value","type","required","placeholder","disabled"];function ye(e,n,g,a,b,y){const c=q;return B(),w("div",{class:k(e.type==="hidden"?"hidden":e.ui.wrapper)},[se("input",ue({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.attrs,{onInput:n[0]||(n[0]=(...r)=>e.onInput&&e.onInput(...r)),onBlur:n[1]||(n[1]=(...r)=>e.onBlur&&e.onBlur(...r)),onChange:n[2]||(n[2]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,be),V(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(B(),w("span",{key:0,class:k(e.leadingWrapperIconClass)},[V(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[$(c,{name:e.leadingIconName,class:k(e.leadingIconClass)},null,8,["name","class"])])],2)):O("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(B(),w("span",{key:1,class:k(e.trailingWrapperIconClass)},[V(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[$(c,{name:e.trailingIconName,class:k(e.trailingIconClass)},null,8,["name","class"])])],2)):O("",!0)],2)}const we=ae(ve,[["render",ye]]);var o=[];for(var U=0;U<256;++U)o.push((U+256).toString(16).slice(1));function pe(e,n=0){return(o[e[n+0]]+o[e[n+1]]+o[e[n+2]]+o[e[n+3]]+"-"+o[e[n+4]]+o[e[n+5]]+"-"+o[e[n+6]]+o[e[n+7]]+"-"+o[e[n+8]]+o[e[n+9]]+"-"+o[e[n+10]]+o[e[n+11]]+o[e[n+12]]+o[e[n+13]]+o[e[n+14]]+o[e[n+15]]).toLowerCase()}var C,Ie=new Uint8Array(16);function he(){if(!C&&(C=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!C))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return C(Ie)}var ke=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const x={randomUUID:ke};function Se(e,n,g){if(x.randomUUID&&!n&&!e)return x.randomUUID();e=e||{};var a=e.random||(e.rng||he)();return a[6]=a[6]&15|64,a[8]=a[8]&63|128,pe(a)}const Ce="task-board",je=[{id:"74c49bb3-f5c4-478d-b87a-ca401c5cbe51",name:"todo",tasks:[{id:"0335e09e-c472-4d25-a2a4-2673510c379b",name:"Research AR frameworks",description:"Investigate suitable frameworks and tools for developing an AR game."},{id:"8a928845-26d0-4462-8ae6-bb7a4b7dc294",name:"Set up Spring Boot project",description:"Initialize a new Spring Boot project with MariaDB and Java 17."},{id:"9b817843-45f0-453d-9ed3-8e7a1f709dbd",name:"Update database schema",description:"Modify the ResumeEntity class to split the 'name' field into 'first_name' and 'last_name'."},{id:"ad217b67-d953-4e50-8c73-c8a1e024dddf",name:"Deploy React app with Argo CD",description:"Learn how to deploy and access the React application online using Argo CD."}]},{id:"46aa0edc-f299-4350-8828-c0017a06a4d5",name:"in-progress",tasks:[{id:"69a1120e-f5e5-437d-9319-f410610a49c8",name:"Install KDE on Manjaro",description:"Set up the KDE desktop environment on Manjaro Linux."},{id:"3bdf3c6d-8fcd-4f12-8b3d-64611c2a9172",name:"Fix Flutter localization",description:"Resolve issues with .arb files and undefined getters in the Flutter project."},{id:"5e09e76a-6d6b-45b9-8b7a-3210c709f1ab",name:"Build Vue.js project",description:"Create a new Vue.js project with Tailwind CSS and necessary dependencies."},{id:"b8c3c0cd-9ec3-4d85-8d9a-80b1e7e2fdc7",name:"Use Yarn for Vue.js",description:"Set up the Vue.js project using Yarn package manager."},{id:"fc0c5b75-ecbb-45ef-8973-d1e4c0aef1b5",name:"Integrate Material Design",description:"Implement Material Design 3 in the Vue.js project."},{id:"a372594b-8b65-4e60-b76e-1c93d95b5f7b",name:"Configure Nuxt 3",description:"Set up Nuxt 3 with TypeScript for the project configuration."}]},{id:"f1953dbe-b295-48bf-af0c-312d1eaa1c04",name:"completed",tasks:[{id:"6e7ed610-e788-4640-a55c-c96088f4d0d6",name:"Implement user registration",description:"Successfully implemented user registration and login using Strapi."},{id:"e3ea69ba-9a4f-4164-af74-78b3cfcf8630",name:"Set up message endpoint",description:"Successfully set up the message creation endpoint for the real-time chat application."}]}],ze={name:Ce,columns:je},Ve=ce("boardStore",()=>{const e=ge("board",ze),n=d(()=>i=>{for(const s of e.value.columns){const t=s.tasks.find(u=>u.id===i);if(t)return t}});function g({columnIndex:i,taskName:s}){e.value.columns[i].tasks.push({id:Se(),name:s,description:""})}function a(i){for(const s of e.value.columns){const t=s.tasks.findIndex(u=>u.id===i);if(t!==-1){s.tasks.splice(t,1);return}}}function b({fromTaskIndex:i,toTaskIndex:s,fromColumnIndex:t,toColumnIndex:u}){const j=e.value.columns[t].tasks.splice(i,1)[0];e.value.columns[u].tasks.splice(s,0,j)}function y(i){e.value.columns.push({name:i,tasks:[],id:""})}function c(i){e.value.columns.splice(i,1)}function r({fromColumnIndex:i,toColumnIndex:s}){const t=e.value.columns.splice(i,1)[0];e.value.columns.splice(s,0,t)}return{board:e,getTask:n,addColumn:y,addTask:g,deleteColumn:c,deleteTask:a,moveColumn:r,moveTask:b}});export{we as _,fe as a,me as f,Ve as u};