import{bo as b,bk as f,e as m,f as y,w as n,bl as A,c as s,j as r,h as o,g as t,b9 as l}from"./index.f1304281.js";import{u as _}from"./pinia.12ba7199.js";import{a as u,V as S}from"./VRow.d9de6b46.js";import{V}from"./VChip.3d6e7511.js";const p=b("secondStore",{state:()=>({count:0,name:"John",lastName:"Doe",age:33,salary:3e3,address:"USA, Chicago"}),getters:{addOne(a){return a.count+=1},multTwo(){return this.addOne*2},gatherAll(){return this.addOne+this.multTwo},otherStore(){return _(),_()}},actions:{setCount(){this.count=Math.floor(Math.random()*10)},setSalary(){this.salary=Math.floor(this.salary*Math.random())},setAge(){this.age=Math.floor(this.age*Math.random())}}}),C={name:"examplePinia2",setup(){const a=p();return setTimeout(()=>a.otherStore.salary=1,2e3),setTimeout(()=>{a.setAge(),a.setSalary(),a.setCount()},3e3),a.$onAction(({name:d,store:i,args:e,after:c,onError:h})=>{console.log(d),console.log(i),console.log(e),c(()=>console.log("After Hook is ocuured !!!")),h(g=>console.log(g))}),{store:a}}},w=t("br",null,null,-1),x=t("br",null,null,-1),M=t("br",null,null,-1),P=t("br",null,null,-1),T=t("br",null,null,-1),D=t("br",null,null,-1),N=t("br",null,null,-1),k=t("br",null,null,-1),O=t("br",null,null,-1);function B(a,d,i,e,c,h){return m(),y(A,null,{default:n(()=>[s(S,null,{default:n(()=>[s(u,null,{default:n(()=>[s(r,{class:"pa-2 bg-green-lighten-5"},{default:n(()=>[o(" Add to count one: "),t("b",null,l(e.store.addOne),1),w,o(" Multiply count to two: "),t("b",null,l(e.store.multTwo),1),x,o(" Gather All Value of the Count: "),t("b",null,l(e.store.gatherAll),1),M,o(" Getting value from another Store: "),t("b",null,l(e.store.otherStore.salary),1)]),_:1})]),_:1}),s(u,null,{default:n(()=>[s(r,{class:"bg-red-lighten-5 pa-3"},{default:n(()=>[o(" Salary on Action: "+l(e.store.salary),1),P,o(" Age on Action: "+l(e.store.age),1),T,o(" Count on Action: "+l(e.store.count),1),D]),_:1})]),_:1}),s(u,null,{default:n(()=>[s(r,{class:"bg-green-lighten-4 pa-3"},{default:n(()=>[s(V,{color:"red",label:"",class:"ma-2"},{default:n(()=>[o("This store is added to Pinia by Plugins")]),_:1}),o(" Data added by Plugin - 1: "),t("b",null,l(e.store.secret),1),N,o(" Data added by Plugin - 2: "),t("b",null,l(e.store.secretData),1),k,o(" Data added by Named - Plugin - 3: "),t("b",null,l(e.store.greeting),1),O]),_:1})]),_:1})]),_:1})]),_:1})}const J=f(C,[["render",B]]);export{J as default};
