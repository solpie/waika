var e=Object.assign;import{R as n,l as a}from"./rank.service.4283e077.js";import{_ as t}from"./rank-player.17ac45c0.js";import{d as o,r as _,a as r,$ as l,c as s,b as i,o as d,N as c,E as u,e as m,w as p,f as g,v as k,F as w,g as y,h as v}from"./index.6b048fe1.js";import"./vendor.32f4224e.js";const h=l,f=[];var x=o({components:{},unmounted:()=>{l.remove(f),f.length=0},setup(n){const a=_({count:1,is_edit_mode:!1}),t=_({on_count:null,onSelect:null});t.on_count=e=>{};const o=r(!1);var s,i;s=h.rank_show_actions,i=()=>{o.value=!0},f.push(l.on(s,i)),t.onSelect=e=>{e.handle&&(e.handle(),o.value=!1)};return e({state:a,menus:[{name:"调整分组",handle:()=>{l.emit(h.rank_toggle_edit_mode,a.is_edit_mode)}},{name:"历史记录"},{name:"选项三"}],showPopover:o,props:n},t)}});x.render=function(e,n,a,t,o,_){const r=i("van-action-sheet");return d(),s(r,{show:e.showPopover,"onUpdate:show":n[1]||(n[1]=n=>e.showPopover=n),actions:e.menus,onSelect:e.onSelect},null,8,["show","actions","onSelect"])};const j=[],P=(e,n)=>{j.push(l.on(e,n))},R=n;var S=o({components:{RankPlayer:t,RankAction:x},unmounted:()=>{l.remove(j),j.length=0},setup(t){n.init_event(),n.load_rank_doc();const o=_({checked_edit_mode:r(!1),max_winning_streak:r(5),is_edit_mode:!1,score_player_arr:[]}),l=n.state,s=()=>{o.score_player_arr=a.orderBy(n.state.player_arr,["score"],["desc"])},i=_({on_commit_game:null,get_vs_title:null,on_change:null,on_win_player:null,on_down_winning_streak:null,on_edit_max_winning_streak:null,on_edit_group_name:null,get_rank_title:null,on_cancel_order:null});s(),P(u.rank_jifen_vs_changed,(()=>{s()})),P(u.rank_toggle_edit_mode,(e=>{o.is_edit_mode=!o.is_edit_mode}));i.on_commit_game=e=>{if(e>1)R.down_player([l.player_arr[0],l.player_arr[1]]);else{let e=Math.random()>.5?1:0;[l.player_arr[e]].map((e=>{e.score+=Math.floor(2*Math.random())+1})),R.down_player([l.player_arr[e]])}},i.get_rank_title=()=>o.is_edit_mode?"车轮排序":"积分排名",i.on_change=()=>{},i.on_upgrade_player=e=>{},i.on_cancel_order=()=>{o.is_edit_mode=!o.is_edit_mode},i.on_down_winning_streak=()=>{a.take(n.state.player_arr,2).map((e=>{e.winning_streak>0&&(e.winning_streak>=n.state.max_winning_streak?R.down_player([e]):c("没到连胜下场次数"+n.state.max_winning_streak))}))},i.on_win_player=e=>{let t=a.take(n.state.player_arr,2);t[e].winning_streak++;let o=t[(e+1)%2];o.winning_streak=0,R.down_player([o])};const d=r(5),m=r("A");return e(e({state:l,state_1:o,max_winning_streak:d,group_name:m},i),{on_count:e=>{n.count2(e)},data:1})}});const b=v(" 车轮场序 "),A=v("确定"),M=v(" 积分排名 ");S.render=function(e,n,a,t,o,_){const r=i("van-button"),l=i("van-cell"),c=i("RankPlayer"),u=i("van-col"),v=i("van-row"),h=i("van-cell-group"),f=i("RankAction");return d(),s("div",null,[m(h,null,{default:p((()=>[m(v,null,{default:p((()=>[m(u,{span:e.state_1.is_edit_mode?24:12},{default:p((()=>[m(l,null,{default:p((()=>[b,g(m(r,{onClick:e.on_cancel_order},{default:p((()=>[A])),_:1},8,["onClick"]),[[k,e.state_1.is_edit_mode]])])),_:1}),(d(!0),s(w,null,y(e.state.player_arr,(n=>(d(),s(c,{key:"order_"+n.name,player:n,is_edit_mode:e.state_1.is_edit_mode},null,8,["player","is_edit_mode"])))),128))])),_:1},8,["span"]),g(m(u,{span:"12"},{default:p((()=>[m(l,null,{default:p((()=>[M])),_:1}),(d(!0),s(w,null,y(e.state_1.score_player_arr,(e=>(d(),s(c,{key:"order_"+e.name,player:e},null,8,["player"])))),128))])),_:1},512),[[k,!e.state_1.is_edit_mode]])])),_:1})])),_:1}),m(f)])};export default S;
