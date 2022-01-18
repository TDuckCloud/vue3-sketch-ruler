import{d as O,r as re,a as k,o as W,w as X,c as w,b as P,v as A,e as N,f as y,t as Y,n as L,g as I,h as E,F as ae,i as se,j,k as S,l as le,m as z,p as U,q as ie,s as _,u as ce,x as H,y as C,z as ue,A as K,B as de,C as he,D as q,E as G,G as fe}from"./vendor.f68bff4c.js";const ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};ve();var me=Object.defineProperty,Q=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,Z=(e,t,n)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ge=(e,t)=>{for(var n in t||(t={}))pe.call(t,n)&&Z(e,n,t[n]);if(Q)for(var n of Q(t))we.call(t,n)&&Z(e,n,t[n]);return e};const ye={scale:Number,thick:Number,palette:Object,index:Number,start:Number,vertical:Boolean,value:Number,isShowReferLine:Boolean};var D=(e,t)=>{const n=e.__vccOpts||e;for(const[c,r]of t)n[c]=r;return n};const Ce=O({name:"LineRuler",props:ye,emits:["onMouseDown","onRelease","onRemove"],setup(e,{emit:t}){const n=k(0),c=k(!0);W(()=>{n.value=e.value});const r=a=>{c.value=a>=0},l=w(()=>{const a=(n.value-e.start)*e.scale;r(a);const d=a+"px";return e.vertical?{top:d}:{left:d}}),o=w(()=>{var a;const d=`1px solid ${(a=e.palette)==null?void 0:a.lineColor}`,h=e.vertical?{borderTop:d}:{borderLeft:d},v=e.isShowReferLine?e.vertical?"ns-resize":"ew-resize":"none";return ge({cursor:v},h)}),i=w(()=>e.vertical?{left:e.thick+"px"}:{top:e.thick+"px"});return{startValue:n,showLine:c,offset:l,borderCursor:o,actionStyle:i,handleDown:a=>{const d=e.vertical?a.clientY:a.clientX,h=n.value;t("onMouseDown");const v=$=>{const m=e.vertical?$.clientY:$.clientX,B=Math.round(h+(m-d)/e.scale);n.value=B},b=()=>{t("onRelease",n.value,e.index),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",b)},handleRemove:()=>{t("onRemove",e.index)}}}}),be={class:"value"};function $e(e,t,n,c,r,l){return P((S(),N("div",{class:"line",style:L([e.offset,e.borderCursor]),onMousedown:t[1]||(t[1]=(...o)=>e.handleDown&&e.handleDown(...o))},[y("div",{class:"action",style:L(e.actionStyle)},[y("span",{class:"del",onClick:t[0]||(t[0]=(...o)=>e.handleRemove&&e.handleRemove(...o))},"\xD7"),y("span",be,Y(e.startValue),1)],4)],36)),[[A,e.showLine]])}var Re=D(Ce,[["render",$e],["__scopeId","data-v-2d56dba5"]]);const Se=e=>e<=.25?40:e<=.5?20:e<=1?10:e<=2?5:e<=4?2:1,J=.83,ke=(e,t,n,c,r,l)=>{const{scale:o,width:i,height:u,ratio:s,palette:a}=r,{bgColor:d,fontColor:h,shadowColor:v,longfgColor:b,shortfgColor:$}=a;if(e.scale(s,s),e.clearRect(0,0,i,u),e.fillStyle=d,e.fillRect(0,0,i,u),c){const p=(n-t)*o,g=c*o;e.fillStyle=v,l?e.fillRect(p,0,g,u*3/8):e.fillRect(0,p,i*3/8,g)}const m=Se(o),B=m*o,R=m*10,M=R*o,T=Math.floor(t/m)*m,V=Math.floor(t/R)*R,ne=(T-t)/m*B,oe=(V-t)/R*M,F=t+Math.ceil((l?i:u)/o);e.beginPath(),e.fillStyle=h,e.strokeStyle=b;for(let p=V,g=0;p<F;p+=R,g++){const f=oe+g*M+.5;l?e.moveTo(f,0):e.moveTo(0,f),e.save(),l?e.translate(f,u*.4):e.translate(i*.4,f),l||e.rotate(-Math.PI/2),e.scale(J/s,J/s),e.fillText(p.toString(),4*s,7*s),e.restore(),l?e.lineTo(f,u*9/16):e.lineTo(i*9/16,f)}e.stroke(),e.closePath(),e.beginPath(),e.strokeStyle=$;for(let p=T,g=0;p<F;p+=m,g++){const f=ne+g*B+.5;l?e.moveTo(f,0):e.moveTo(0,f),p%R!=0&&(l?e.lineTo(f,u*1/4):e.lineTo(i*1/4,f))}e.stroke(),e.closePath(),e.setTransform(1,0,0,1,0,0)},Ne=O({name:"CanvasRuler",props:{showIndicator:Boolean,valueNum:Number,scale:Number,ratio:Number,palette:Object,vertical:Boolean,start:Number,width:Number,height:Number,selectStart:Number,selectLength:Number},emits:["onAddLine","update:showIndicator","update:valueNum"],setup(e,{emit:t}){const n=re({canvasContext:null});let c=1;const r=k(null);W(()=>{c=e.ratio||window.devicePixelRatio||1,l(),o(c),i(c)});const l=()=>{n.canvasContext=r.value&&r.value.getContext("2d")},o=s=>{if(r.value){r.value.width=e.width*s,r.value.height=e.height*s;const a=n.canvasContext;a&&(a.font=`${12*s}px -apple-system,
                "Helvetica Neue", ".SFNSText-Regular",
                "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB",
                "Microsoft YaHei", "WenQuanYi Zen Hei", sans-serif`,a.lineWidth=1,a.textBaseline="middle")}},i=s=>{const a={scale:e.scale,width:e.width,height:e.height,palette:e.palette,ratio:s};n.canvasContext&&ke(n.canvasContext,e.start,e.selectStart,e.selectLength,a,!e.vertical)};return X(()=>e.start,()=>i(c)),X([()=>e.width,()=>e.height],()=>{o(c),i(c)}),{handle:(s,a)=>{const d=(b,$,m)=>Math.round($+b/m),h=e.vertical?s.offsetY:s.offsetX,v=d(h,e.start,e.scale);switch(a){case"click":t("onAddLine",v);break;case"enter":t("update:valueNum",v),t("update:showIndicator",!0);break;default:t("update:valueNum",v);break}},canvas:r}}});function Le(e,t,n,c,r,l){return S(),N("canvas",{ref:"canvas",class:"ruler",onClick:t[0]||(t[0]=o=>e.handle(o,"click")),onMouseenter:t[1]||(t[1]=o=>e.handle(o,"enter")),onMousemove:t[2]||(t[2]=o=>e.handle(o,"move")),onMouseleave:t[3]||(t[3]=o=>e.$emit("update:showIndicator",!1))},null,544)}var Be=D(Ne,[["render",Le]]);const Oe={scale:Number,ratio:Number,thick:Number,palette:Object,vertical:{type:Boolean,default:!0},width:{type:Number,default:200},height:{type:Number,default:200},start:{type:Number,default:0},lines:{type:Array,default:()=>[]},selectStart:{type:Number},selectLength:{type:Number},isShowReferLine:{type:Boolean}},De=O({name:"RulerWrapper",components:{CanvasRuler:Be,RulerLine:Re},props:Oe,setup(e){const t=k(!1),n=k(0),c=w(()=>e.vertical?"v-container":"h-container"),r=w(()=>{const s={width:`calc(100% - ${e.thick}px)`,height:`${e.thick+1}px`,left:`${e.thick}px`},a={width:`${e.thick&&e.thick+1}px`,height:`calc(100% - ${e.thick}px)`,top:`${e.thick}px`};return e.vertical?a:s}),l=w(()=>{var s;const a=(n.value-e.start)*e.scale;let d="top",h="borderLeft";return d=e.vertical?"top":"left",h=e.vertical?"borderBottom":"borderLeft",{[d]:a+"px",[h]:`1px solid ${(s=e.palette)==null?void 0:s.lineColor}`}}),o=s=>{e.lines.push(s)},i=(s,a)=>{const d=s-e.start,h=(e.vertical?e.height:e.width)/e.scale;d<0||d>h?u(a):e.lines[a]=s},u=s=>{e.lines.splice(s,1)};return{showIndicator:t,valueNum:n,rwClassName:c,rwStyle:r,indicatorStyle:l,handleNewLine:o,handleLineRelease:i,handleLineRemove:u}}}),Pe={class:"lines"},Ae={class:"value"};function Ie(e,t,n,c,r,l){const o=I("CanvasRuler"),i=I("RulerLine");return S(),N("div",{class:j(e.rwClassName),style:L(e.rwStyle)},[E(o,{vertical:e.vertical,scale:e.scale,width:e.width,height:e.height,start:e.start,ratio:e.ratio,"select-start":e.selectStart,"select-length":e.selectLength,palette:e.palette,valueNum:e.valueNum,"onUpdate:valueNum":t[0]||(t[0]=u=>e.valueNum=u),showIndicator:e.showIndicator,"onUpdate:showIndicator":t[1]||(t[1]=u=>e.showIndicator=u),onOnAddLine:e.handleNewLine},null,8,["vertical","scale","width","height","start","ratio","select-start","select-length","palette","valueNum","showIndicator","onOnAddLine"]),P(y("div",Pe,[(S(!0),N(ae,null,se(e.lines,(u,s)=>(S(),le(i,{key:u+s,index:s,value:u>>0,scale:e.scale,start:e.start,thick:e.thick,palette:e.palette,vertical:e.vertical,"is-show-refer-line":e.isShowReferLine,onOnRemove:e.handleLineRemove,onOnRelease:e.handleLineRelease},null,8,["index","value","scale","start","thick","palette","vertical","is-show-refer-line","onOnRemove","onOnRelease"]))),128))],512),[[A,e.isShowReferLine]]),P(y("div",{class:"indicator",style:L(e.indicatorStyle)},[y("div",Ae,Y(e.valueNum),1)],4),[[A,e.showIndicator]])],6)}var Ee=D(De,[["render",Ie],["__scopeId","data-v-65a7f0f6"]]);const Me={scale:{type:Number,default:1},ratio:{type:Number},thick:{type:Number,default:16},palette:Object,startX:{type:Number},startY:{type:Number,default:0},width:{type:Number,default:200},height:{type:Number,default:200},shadow:{type:Object,default:()=>({x:0,y:0,width:0,height:0})},lines:{type:Object,default:()=>({h:[],v:[]})},cornerActive:{type:Boolean,default:!1},isShowReferLine:{type:Boolean,default:!0}},Te=O({name:"SketchRule",components:{RulerWrapper:Ee},props:Me,emits:["onCornerClick","handleLine"],setup(e,{emit:t}){const n=w(()=>{function o(u,s){return Object.keys(u).forEach(a=>{a&&u.hasOwnProperty(a)&&(typeof s.key=="object"?u[a]=o(u[a],s[a]):s.hasOwnProperty(a)&&(u[a]=s[a]))}),u}return o({bgColor:"rgba(225,225,225, 0)",longfgColor:"#BABBBC",shortfgColor:"#C8CDD0",fontColor:"#7D8694",shadowColor:"#E8E8E8",lineColor:"#EB5648",borderColor:"#DADADC",cornerActiveColor:"rgb(235, 86, 72, 0.6)",menu:{bgColor:"#fff",dividerColor:"#DBDBDB",listItem:{textColor:"#415058",hoverTextColor:"#298DF8",disabledTextColor:"rgba(65, 80, 88, 0.4)",bgColor:"#fff",hoverBgColor:"#F2F2F2"}}},e.palette||{})}),c=w(()=>e.cornerActive?" active":""),r=w(()=>({backgroundColor:n.value.bgColor,width:e.thick+"px",height:e.thick+"px",borderRight:`1px solid ${n.value.borderColor}`,borderBottom:`1px solid ${n.value.borderColor}`}));return{paletteCpu:n,cornerActiveClass:c,cornerStyle:r,onCornerClick:o=>{t("onCornerClick",o)}}}}),Ve={id:"mb-ruler",class:"style-ruler mb-ruler"};function Fe(e,t,n,c,r,l){const o=I("RulerWrapper");return S(),N("div",Ve,[E(o,{vertical:!1,width:e.width,height:e.thick,"is-show-refer-line":e.isShowReferLine,thick:e.thick,ratio:e.ratio,start:e.startX,lines:e.lines.h,"select-start":e.shadow.x,"select-length":e.shadow.width,scale:e.scale,palette:e.paletteCpu},null,8,["width","height","is-show-refer-line","thick","ratio","start","lines","select-start","select-length","scale","palette"]),E(o,{vertical:!0,width:e.thick,height:e.height,"is-show-refer-line":e.isShowReferLine,thick:e.thick,ratio:e.ratio,start:e.startY,lines:e.lines.v,"select-start":e.shadow.y,"select-length":e.shadow.height,scale:e.scale,palette:e.paletteCpu},null,8,["width","height","is-show-refer-line","thick","ratio","start","lines","select-start","select-length","scale","palette"]),y("a",{class:j(["corner",e.cornerActiveClass]),style:L(e.cornerStyle),onClick:t[0]||(t[0]=(...i)=>e.onCornerClick&&e.onCornerClick(...i))},null,6)])}var We=D(Te,[["render",Fe]]);var x=(e,t)=>{const n=e.__vccOpts||e;for(const[c,r]of t)n[c]=r;return n};const ee=600,te=320,Xe=z({components:{SketchRule:We},setup(){const e=U(null),t=U(null),n=ie({scale:2,startX:0,startY:0,lines:{h:[433,588],v:[33,143]},thick:20,isShowRuler:!0,isShowReferLine:!0}),c=_(()=>({x:0,y:0,width:ee,height:te})),r=_(()=>({width:ee,height:te,transform:`scale(${n.scale})`}));ce(()=>{e.value.scrollLeft=t.value.getBoundingClientRect().width/2-400});const l=()=>{const i=document.querySelector("#screens").getBoundingClientRect(),u=document.querySelector("#canvas").getBoundingClientRect(),s=(i.left+n.thick-u.left)/n.scale,a=(i.top+n.thick-u.top)/n.scale;n.startX=s,n.startY=a};return{screensRef:e,containerRef:t,state:n,shadow:c,canvasStyle:r,handleWheel:i=>{if(i.ctrlKey||i.metaKey){i.preventDefault();const u=parseFloat(Math.max(.2,n.scale-i.deltaY/500).toFixed(2));n.scale=u}he(()=>{l()})},handleScroll:l}}}),Ye={class:"top"},je={class:"wrapper"},ze={ref:"containerRef",class:"screen-container"};function Ue(e,t,n,c,r,l){const o=q("SketchRule");return G(),H("div",null,[C("div",Ye,"\u7F29\u653E\u6BD4\u4F8B:"+ue(e.state.scale),1),C("div",je,[K(o,{thick:e.state.thick,scale:e.state.scale,width:1380,height:780,"start-x":e.state.startX,"start-y":e.state.startY,shadow:e.shadow,"corner-active":!0,lines:e.state.lines},null,8,["thick","scale","start-x","start-y","shadow","lines"]),C("div",{id:"screens",ref:"screensRef",onWheel:t[0]||(t[0]=(...i)=>e.handleWheel&&e.handleWheel(...i)),onScroll:t[1]||(t[1]=(...i)=>e.handleScroll&&e.handleScroll(...i))},[C("div",ze,[C("div",{id:"canvas",style:de(e.canvasStyle)},null,4)],512)],544)])])}var _e=x(Xe,[["render",Ue]]);const He=z({name:"App",components:{UserRuler:_e}}),Ke={id:"app"},qe=C("a",{href:"https://data.avuejs.com/build/1",target:"_blank",class:"redlink"}," \u5B9E\u4F8B\u5730\u5740:https://data.avuejs.com/build/1 ",-1),Ge=C("div",null,"\u6309\u4F4FCtril+\u9F20\u6807\u6EDA\u8F6E\u53EF\u4EE5\u7F29\u653E\u9875\u9762",-1);function Qe(e,t,n,c,r,l){const o=q("UserRuler");return G(),H("div",Ke,[qe,Ge,K(o)])}var Ze=x(He,[["render",Qe]]);const Je=fe(Ze);Je.mount("#app");
