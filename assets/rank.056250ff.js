var e=Object.assign;import{R as n,l as a}from"./rank.service.ca2ede07.js";import{_ as t}from"./rank-player.d69acf76.js";import{$ as r,E as o}from"./event-bus.2e8a8b75.js";import{d as _,r as l,e as s,a as i,o as d,c as m,N as u,k as p,v as c,b as k,w as g,F as y,i as w}from"./index.206fd7fb.js";import"./vendor.da44e350.js";const h=r,v=[];var f=_({components:{},unmounted:()=>{r.remove(v),v.length=0},setup(n){const a=l({count:1,is_edit_mode:!1}),t=l({on_count:null,onSelect:null});t.on_count=e=>{};const o=s(!1);var _,i;_=h.rank_show_actions,i=()=>{o.value=!0},v.push(r.on(_,i)),t.onSelect=e=>{e.handle&&(e.handle(),o.value=!1)};const d=[{name:"调整分组",handle:()=>{a.is_edit_mode=!a.is_edit_mode,r.emit(h.rank_toggle_edit_mode,a.is_edit_mode)}},{name:"历史记录"},{name:"选项三"}];return e({state:a,menus:d,showPopover:o,props:n},t)}});f.render=function(e,n,a,t,r,o){const _=i("van-action-sheet");return d(),m(_,{show:e.showPopover,"onUpdate:show":n[1]||(n[1]=n=>e.showPopover=n),actions:e.menus,onSelect:e.onSelect},null,8,["show","actions","onSelect"])};const x=[],j=(e,n)=>{x.push(r.on(e,n))},b=n;var P=_({components:{RankPlayer:t,RankAction:f},unmounted:()=>{r.remove(x),x.length=0},setup(t){n.init_event(),n.load_rank_doc();const r=l({checked_edit_mode:s(!1),max_winning_streak:s(5),is_edit_mode:!1,player_arr:[]}),_=n.state,i=()=>{r.player_arr=a.orderBy(n.state.player_arr,["score"],["desc"])};i(),j(o.rank_jifen_vs_changed,(()=>{i()})),j(o.rank_toggle_edit_mode,(e=>{r.is_edit_mode=e,e&&(r.player_arr=[...n.state.player_arr])}));const d=l({on_commit_game:null,get_vs_title:null,on_change:null,on_win_player:null,on_down_winning_streak:null,on_edit_max_winning_streak:null,on_edit_group_name:null,get_rank_title:null});d.on_commit_game=e=>{if(e>1)b.down_player([_.player_arr[0],_.player_arr[1]]);else{let e=Math.random()>.5?1:0;[_.player_arr[e]].map((e=>{e.score+=Math.floor(2*Math.random())+1})),b.down_player([_.player_arr[e]])}},d.get_rank_title=()=>r.is_edit_mode?"车轮排序":"积分排名",d.on_change=()=>{},d.on_down_winning_streak=()=>{a.take(n.state.player_arr,2).map((e=>{e.winning_streak>0&&(e.winning_streak>=n.state.max_winning_streak?b.down_player([e]):u("没到连胜下场次数"+n.state.max_winning_streak))}))},d.on_win_player=e=>{let t=a.take(n.state.player_arr,2);t[e].winning_streak++;let r=t[(e+1)%2];r.winning_streak=0,b.down_player([r])};const m=s(5),p=s("A");return e(e({state:_,state_1:r,max_winning_streak:m,group_name:p},d),{on_count:e=>{n.count2(e)},data:1})}});const R=k("span",{style:{"font-size":"20px"}},null,-1);P.render=function(e,n,a,t,r,o){const _=i("RankPlayer"),l=i("van-row"),s=i("van-cell-group"),u=i("RankAction");return d(),m("div",null,[R,p(k(s,{title:e.get_rank_title()},{default:g((()=>[k(l,null,{default:g((()=>[(d(!0),m(y,null,w(e.state_1.player_arr,(e=>(d(),m(_,{key:"order_"+e.name,player:e},null,8,["player"])))),128))])),_:1})])),_:1},8,["title"]),[[c,!e.state_1.is_edit_mode]]),p(k(s,{title:e.get_rank_title()},{default:g((()=>[k(l,null,{default:g((()=>[(d(!0),m(y,null,w(e.state.player_arr,(e=>(d(),m(_,{key:e.name,player:e},null,8,["player"])))),128))])),_:1})])),_:1},8,["title"]),[[c,e.state_1.is_edit_mode]]),k(u)])};export default P;
