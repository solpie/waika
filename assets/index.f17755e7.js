import{$ as e,E as t}from"./event-bus.2e8a8b75.js";import{d as a,r as s,e as n,n as o,t as i,o as r,c as f,b as l,w as c,F as u,u as v,a as b,i as d,f as m,l as h}from"./index.206fd7fb.js";import"./vendor.da44e350.js";const p=a({setup(){const a=s({showPopover:!1}),r=n(!1),f=n("stickyRef"),l=n("tabbarRef"),c=n("");o((()=>{c.value=f.value.$el.offsetHeight+l.value.$el.offsetHeight+"px"}));return{showPopover:r,state:a,on_show_menu:()=>{e.emit(t.rank_show_actions)},tabs:i,stickyRef:f,tabbarRef:l,containerHeight:c}}}),_=()=>{v((e=>({"000ffc0d":e.containerHeight,"000ffc0d":e.containerHeight})))},w=p.setup;p.setup=w?(e,t)=>(_(),w(e,t)):_;const k=p,g={class:"container"};k.render=function(e,t,a,s,n,o){const i=b("van-icon"),v=b("van-nav-bar"),p=b("van-sticky"),_=b("router-view"),w=b("van-tabbar-item"),k=b("van-tabbar");return r(),f(u,null,[l(p,{ref:"stickyRef"},{default:c((()=>{var t;return[l(v,{title:null==(t=e.$route.meta)?void 0:t.title},{left:c((()=>[l(i,{name:"wap-nav",size:"18",onClick:e.on_show_menu},null,8,["onClick"])])),right:c((()=>[l(i,{name:"search",size:"18"})])),_:1},8,["title"])]})),_:1},512),l("div",g,[l(_)]),l(k,{ref:"tabbarRef",route:""},{default:c((()=>[(r(!0),f(u,null,d(e.tabs,(e=>(r(),f(w,{to:e.path,icon:e.meta.icon},{default:c((()=>[m(h(e.meta.title),1)])),_:2},1032,["to","icon"])))),256))])),_:1},512)],64)};export default k;
