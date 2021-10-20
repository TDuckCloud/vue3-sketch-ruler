import{d as S,S as R,r as u,a as k,c as h,o as w,n as L,b as $,e as f,f as p,g as v,h as d,i as B,F as W,j as C}from"./vendor.80f696e1.js";const F=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}};F();var N=(e,s)=>{for(const[n,l]of s)e[n]=l;return e};const m=200,y=200,Y=S({components:{SketchRule:R},setup(){const e=u(null),s=u(null),n=k({scale:1,startX:0,startY:0,lines:{h:[100,200],v:[100,200]},thick:20,isShowRuler:!0,isShowReferLine:!0}),l=h(()=>({x:0,y:0,width:m,height:y})),t=h(()=>({width:m,height:y,transform:`scale(${n.scale})`}));w(()=>{e.value.scrollLeft=s.value.getBoundingClientRect().width/2-300});const r=o=>{n.lines=o},a=()=>{const o=document.querySelector("#screens").getBoundingClientRect(),i=document.querySelector("#canvas").getBoundingClientRect(),g=(o.left+n.thick-i.left)/n.scale,_=(o.top+n.thick-i.top)/n.scale;n.startX=g,n.startY=_};return{screensRef:e,containerRef:s,state:n,shadow:l,canvasStyle:t,handleWheel:o=>{if(o.ctrlKey||o.metaKey){o.preventDefault();const i=parseFloat(Math.max(.2,n.scale-o.deltaY/500).toFixed(2));n.scale=i}L(()=>{a()})},handleScroll:a,handleLine:r}}}),b={class:"wrapper"},O={ref:"containerRef",class:"screen-container"};function X(e,s,n,l,t,r){const a=$("SketchRule");return f(),p("div",b,[v(a,{thick:e.state.thick,scale:e.state.scale,width:582,height:482,"start-x":e.state.startX,"start-y":e.state.startY,shadow:e.shadow,"hor-line-arr":e.state.lines.h,"ver-line-arr":e.state.lines.v,"corner-active":!0,onHandleLine:e.handleLine},null,8,["thick","scale","start-x","start-y","shadow","hor-line-arr","ver-line-arr","onHandleLine"]),d("div",{id:"screens",ref:"screensRef",onWheel:s[0]||(s[0]=(...c)=>e.handleWheel&&e.handleWheel(...c)),onScroll:s[1]||(s[1]=(...c)=>e.handleScroll&&e.handleScroll(...c))},[d("div",O,[d("div",{id:"canvas",style:B(e.canvasStyle)},null,4)],512)],544)])}var q=N(Y,[["render",X]]);const A=d("span",null,"2021/10/11",-1),H={setup(e){return(s,n)=>(f(),p(W,null,[A,v(q)],64))}},K=C(H);K.mount("#app");
