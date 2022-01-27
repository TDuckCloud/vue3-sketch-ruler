var _=Object.defineProperty;var Q=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var M=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&M(e,n,t[n]);if(Q)for(var n of Q(t))ee.call(t,n)&&M(e,n,t[n]);return e};import{d as B,r as A,o as $,c as g,w as D,v as I,a as R,b as h,t as X,n as k,e as C,f as P,g as z,h as L,F as V,i as te,j as q,k as U,l as ne,m as oe,p as ae}from"./vendor.3cac0bb2.js";const re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}};re();var le="./assets/eye.9fe58f44.svg";const se={scale:Number,thick:Number,palette:Object,index:Number,start:Number,vertical:Boolean,value:Number,isShowReferLine:Boolean};var E=(e,t)=>{const n=e.__vccOpts||e;for(const[c,a]of t)n[c]=a;return n};const ie=B({name:"LineRuler",props:se,emits:["onMouseDown","onRelease","onRemove"],setup(e,{emit:t}){const n=A(0),c=A(!0);$(()=>{n.value=e.value});const a=l=>{c.value=l>=0},s=g(()=>{const l=(n.value-e.start)*e.scale;a(l);const d=l+"px";return e.vertical?{top:d}:{left:d}}),r=g(()=>{var f;const l=`1px solid ${(f=e.palette)==null?void 0:f.lineColor}`,d=e.vertical?{borderTop:l}:{borderLeft:l},v=e.isShowReferLine?e.vertical?"ns-resize":"ew-resize":"none";return W({cursor:v},d)}),i=g(()=>e.vertical?{left:e.thick+"px"}:{top:e.thick+"px"});return{startValue:n,showLine:c,offset:s,borderCursor:r,actionStyle:i,handleDown:l=>{const d=e.vertical?l.clientY:l.clientX,v=n.value;t("onMouseDown");const f=S=>{const w=e.vertical?S.clientY:S.clientX,O=Math.round(v+(w-d)/e.scale);n.value=O},b=()=>{t("onRelease",n.value,e.index),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",b)},handleRemove:()=>{t("onRemove",e.index)}}}}),ce={class:"value"};function ue(e,t,n,c,a,s){return D((C(),R("div",{class:"line",style:k([e.offset,e.borderCursor]),onMousedown:t[1]||(t[1]=(...r)=>e.handleDown&&e.handleDown(...r))},[h("div",{class:"action",style:k(e.actionStyle)},[h("span",{class:"del",onClick:t[0]||(t[0]=(...r)=>e.handleRemove&&e.handleRemove(...r))},"\xD7"),h("span",ce,X(e.startValue),1)],4)],36)),[[I,e.showLine]])}var de=E(ie,[["render",ue],["__scopeId","data-v-57e51382"]]);const he=e=>e<=.25?40:e<=.5?20:e<=1?10:e<=2?5:e<=4?2:1,H=.83,ve=(e,t,n,c,a,s)=>{const{scale:r,width:i,height:u,ratio:o,palette:l}=a,{bgColor:d,fontColor:v,shadowColor:f,longfgColor:b,shortfgColor:S}=l;if(e.scale(o,o),e.clearRect(0,0,i,u),e.fillStyle=d,e.fillRect(0,0,i,u),c){const p=(n-t)*r,y=c*r;e.fillStyle=f,s?e.fillRect(p,0,y,u*3/8):e.fillRect(0,p,i*3/8,y)}const w=he(r),O=w*r,N=w*10,F=N*r,K=Math.floor(t/w)*w,Y=Math.floor(t/N)*N,j=(K-t)/w*O,J=(Y-t)/N*F,T=t+Math.ceil((s?i:u)/r);e.beginPath(),e.fillStyle=v,e.strokeStyle=b;for(let p=Y,y=0;p<T;p+=N,y++){const m=J+y*F+.5;s?e.moveTo(m,0):e.moveTo(0,m),e.save(),s?e.translate(m,u*.4):e.translate(i*.4,m),s||e.rotate(-Math.PI/2),e.scale(H/o,H/o),e.fillText(p.toString(),4*o,7*o),e.restore(),s?e.lineTo(m,u*9/16):e.lineTo(i*9/16,m)}e.stroke(),e.closePath(),e.beginPath(),e.strokeStyle=S;for(let p=K,y=0;p<T;p+=w,y++){const m=j+y*O+.5;s?e.moveTo(m,0):e.moveTo(0,m),p%N!=0&&(s?e.lineTo(m,u*1/4):e.lineTo(i*1/4,m))}e.stroke(),e.closePath(),e.setTransform(1,0,0,1,0,0)},fe=B({name:"CanvasRuler",props:{showIndicator:Boolean,valueNum:Number,scale:Number,ratio:Number,palette:Object,vertical:Boolean,start:Number,width:Number,height:Number,selectStart:Number,selectLength:Number},emits:["onAddLine","update:showIndicator","update:valueNum"],setup(e,{emit:t}){const n=P({canvasContext:null});let c=1;const a=A(null);$(()=>{c=e.ratio||window.devicePixelRatio||1,s(),r(c),i(c)});const s=()=>{n.canvasContext=a.value&&a.value.getContext("2d")},r=o=>{if(a.value){a.value.width=e.width*o,a.value.height=e.height*o;const l=n.canvasContext;l&&(l.font=`${12*o}px -apple-system,
                "Helvetica Neue", ".SFNSText-Regular",
                "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB",
                "Microsoft YaHei", "WenQuanYi Zen Hei", sans-serif`,l.lineWidth=1,l.textBaseline="middle")}},i=o=>{const l={scale:e.scale,width:e.width,height:e.height,palette:e.palette,ratio:o};n.canvasContext&&ve(n.canvasContext,e.start,e.selectStart,e.selectLength,l,!e.vertical)};return z(()=>e.start,()=>i(c)),z([()=>e.width,()=>e.height],()=>{r(c),i(c)}),{handle:(o,l)=>{const d=(b,S,w)=>Math.round(S+b/w),v=e.vertical?o.offsetY:o.offsetX,f=d(v,e.start,e.scale);switch(l){case"click":t("onAddLine",f);break;case"enter":t("update:valueNum",f),t("update:showIndicator",!0);break;default:t("update:valueNum",f);break}},canvas:a}}});function me(e,t,n,c,a,s){return C(),R("canvas",{ref:"canvas",class:"ruler",onClick:t[0]||(t[0]=r=>e.handle(r,"click")),onMouseenter:t[1]||(t[1]=r=>e.handle(r,"enter")),onMousemove:t[2]||(t[2]=r=>e.handle(r,"move")),onMouseleave:t[3]||(t[3]=r=>e.$emit("update:showIndicator",!1))},null,544)}var ge=E(fe,[["render",me]]);const we={scale:Number,ratio:Number,thick:Number,palette:Object,vertical:{type:Boolean,default:!0},width:{type:Number,default:200},height:{type:Number,default:200},start:{type:Number,default:0},lines:{type:Array,default:()=>[]},selectStart:{type:Number},selectLength:{type:Number},isShowReferLine:{type:Boolean}};const pe=B({name:"RulerWrapper",components:{CanvasRuler:ge,RulerLine:de},props:we,setup(e){const t=A(!1),n=A(0),c=g(()=>e.vertical?"v-container":"h-container"),a=g(()=>{const o={width:`calc(100% - ${e.thick}px)`,height:`${e.thick+1}px`,left:`${e.thick}px`},l={width:`${e.thick&&e.thick+1}px`,height:`calc(100% - ${e.thick}px)`,top:`${e.thick}px`};return e.vertical?l:o}),s=g(()=>{var v;const o=(n.value-e.start)*e.scale;let l="top",d="borderLeft";return l=e.vertical?"top":"left",d=e.vertical?"borderBottom":"borderLeft",{[l]:o+"px",[d]:`1px solid ${(v=e.palette)==null?void 0:v.lineColor}`}}),r=o=>{e.lines.push(o)},i=(o,l)=>{const d=o-e.start,v=(e.vertical?e.height:e.width)/e.scale;d<0||d>v?u(l):e.lines[l]=o},u=o=>{e.lines.splice(o,1)};return{showIndicator:t,valueNum:n,rwClassName:c,rwStyle:a,indicatorStyle:s,handleNewLine:r,handleLineRelease:i,handleLineRemove:u}}}),ye={class:"lines"},Ae={class:"value"};function Ce(e,t,n,c,a,s){const r=U("CanvasRuler"),i=U("RulerLine");return C(),R("div",{class:q(e.rwClassName),style:k(e.rwStyle)},[L(r,{vertical:e.vertical,scale:e.scale,width:e.width,height:e.height,start:e.start,ratio:e.ratio,"select-start":e.selectStart,"select-length":e.selectLength,palette:e.palette,valueNum:e.valueNum,"onUpdate:valueNum":t[0]||(t[0]=u=>e.valueNum=u),showIndicator:e.showIndicator,"onUpdate:showIndicator":t[1]||(t[1]=u=>e.showIndicator=u),onOnAddLine:e.handleNewLine},null,8,["vertical","scale","width","height","start","ratio","select-start","select-length","palette","valueNum","showIndicator","onOnAddLine"]),D(h("div",ye,[(C(!0),R(V,null,te(e.lines,(u,o)=>(C(),ne(i,{key:u+o,index:o,value:u>>0,scale:e.scale,start:e.start,thick:e.thick,palette:e.palette,vertical:e.vertical,"is-show-refer-line":e.isShowReferLine,onOnRemove:e.handleLineRemove,onOnRelease:e.handleLineRelease},null,8,["index","value","scale","start","thick","palette","vertical","is-show-refer-line","onOnRemove","onOnRelease"]))),128))],512),[[I,e.isShowReferLine]]),D(h("div",{class:"indicator",style:k(e.indicatorStyle)},[h("div",Ae,X(e.valueNum),1)],4),[[I,e.showIndicator]])],6)}var Re=E(pe,[["render",Ce],["__scopeId","data-v-121a2df8"]]);const be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAopJREFUOE/FlE9IVEEcx7+/N9ouds1Mu0QUSFZYdIgoUqQoKPBQHsKozpXE7jbTO/U8xLJvn6usBHWQ6hBFXupSkQeVbh0KJEPp0sH+eLGTsKs77xcj78m0ax0E8cHjzZv5zef3/c33xxA24KENYGJzoEEQbNNaN4Zh2OQ4znwYhr9c1/39vwrXVDo0NNS0tLR0GYB5D64BmAMwzMyvlFKz1es10Hw+f4mZ7wHYBeA9gNdENFepVOaEEM3M3OI4Thczn41gt6WUgQ3+C+r7/h0AWQD3mXnYqPA8L9nQ0HCemduIaFpKOWoAhUJhT6VSuQXgOjP3K6W8GLwKzeVyp4jonR0QBEErM48w8zFLyayUsjX+z+VyHhHdZebTSqkxM78CHRgYOKS1/ghgVErZY214RkQ7ADyRUj72ff8qgCtmXUrZGcf5vv8CwEUhxOF0Ov1pBRpla5dSdseBhUJhpznH6tIsZb1KqacW+BGArUaUXX63UuplHJTNZjuEEONSyhozfd/n6mQ1RkXZL2itz7mu+80EDA4ONi8vL/8AcM2UbikyR2BU9cSmmTU70YqKIAj2hWFo2uenlHK/BRg3Y2aeNO5GyU8S0ZbFxcUuz/NKEXAGQKPjOCcymcyX1dIi8DSAiWQyeaavr68cbSgCuBknYubnQoj+TCYzUywWE6VS6S2ADsdx2gxw1X3L7SNENMbMnwE8qK+vf5NKpRaMaeVyeW8ikfiaSqW+R7BuZr5BRMe11p2u607U9Gk8kc/ntzPzQwCmExYATDLzVBiGE0KIowAOADDf3QA+aK2VDaxRajto3K+rq+tl5nYAzQBamHmeiOYBTGmtR6ph/1Rqg9c73pz7dD1qN0TpHyNQRCUDJXrAAAAAAElFTkSuQmCC",Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAjtJREFUOE/NlD9oFEEUxn9v9ghC0hpRUogIAUmniGAT/5Q2FrETPSNRJILg7RwimI0ox85eQFCEBGIUO1PYpFM0jSConQoBEZGgGPsgl+w+2eM2bC57SopAFqYZ3v7m+977ZoQt+GQLmGxPaBiGgYiMWWvXBHZUGoZhH3BERPYC+4F+4Keq/urt7b1RLpf/ZEBVHa9Wq0HWyg3QKIoGVPU8cA7wgK/pUtXPQJ8xZk+pVBpuNBqXUoUiEvi+P56fzTpo6+SbwHNg1lo7WzTITGEKXFlZeeB53tVCpa3CK8AFa+1cBgvD8LKIXAQOJkkyICJDeYVBEJS6u7s/qeoLa+1o+l9TqXNuBLhmjDlbqVQ+5ICjInIfOBPH8W9jzGCR5YmJiRNxHM+papgqzqDvgSlr7VTernPuO3An3c9bBt74vv+yrdaKyLDv+/1Sq9UGPc97nY9EVuycU2AQOA7cAm4Dr4D5TvVxHB9rKo2iaEFVp621Ln96FEUngaOqGmSxabVqsh3a2h+x1h5qQjNrae/yE4+iaCwDJkky73neTuBZe129Xk+H+BS4l7ZqLVIZ2BhzuFKpvMsDVXXWGPMxFdAedOfcKeCRqj7MYrUhpz09PfXl5eXrectFWXXODQHpOq2qd/95o/JXr6ura3J1dXU6SZIfwKKIHAD2tVYMPBGRx77vN10UXtO85fTkmZmZHUtLSzUR2QXsBhaAL6r6DXhbrVYXi1yss59GqOgub/bN3Z7v6X/tb9Zmp/q/kN8s+lJb8oEAAAAASUVORK5CYII=",Ne={eyeIcon:{type:String},closeEyeIcon:{type:String},scale:{type:Number,default:1},ratio:{type:Number},thick:{type:Number,default:16},palette:Object,startX:{type:Number},startY:{type:Number,default:0},width:{type:Number,default:200},height:{type:Number,default:200},shadow:{type:Object,default:()=>({x:0,y:0,width:0,height:0})},lines:{type:Object,default:()=>({h:[],v:[]})},cornerActive:{type:Boolean,default:!1},isShowReferLine:{type:Boolean,default:!0}};const ke=B({name:"SketchRule",components:{RulerWrapper:Re},props:Ne,emits:["onCornerClick","handleLine"],setup(e,{emit:t}){let n=A(!0);n.value=e.isShowReferLine;const c=g(()=>{function i(o,l){return Object.keys(o).forEach(d=>{d&&o.hasOwnProperty(d)&&(typeof l.key=="object"?o[d]=i(o[d],l[d]):l.hasOwnProperty(d)&&(o[d]=l[d]))}),o}return i({bgColor:"rgba(225,225,225, 0)",longfgColor:"#BABBBC",shortfgColor:"#C8CDD0",fontColor:"#7D8694",shadowColor:"#E8E8E8",lineColor:"#EB5648",borderColor:"#DADADC",cornerActiveColor:"rgb(235, 86, 72, 0.6)",menu:{bgColor:"#fff",dividerColor:"#DBDBDB",listItem:{textColor:"#415058",hoverTextColor:"#298DF8",disabledTextColor:"rgba(65, 80, 88, 0.4)",bgColor:"#fff",hoverBgColor:"#F2F2F2"}}},e.palette||{})}),a=g(()=>e.cornerActive?" active":""),s=g(()=>({backgroundImage:n.value?`url(${e.eyeIcon||be})`:`url(${e.closeEyeIcon||Se})`,width:e.thick+"px",height:e.thick+"px",borderRight:`1px solid ${c.value.borderColor}`,borderBottom:`1px solid ${c.value.borderColor}`}));return{isShowReferLine:n,paletteCpu:c,cornerActiveClass:a,cornerStyle:s,onCornerClick:i=>{n.value=!n.value,t("onCornerClick",i)}}}}),Be={id:"mb-ruler",class:"style-ruler mb-ruler"};function Le(e,t,n,c,a,s){const r=U("RulerWrapper");return C(),R("div",Be,[L(r,{vertical:!1,width:e.width,height:e.thick,"is-show-refer-line":e.isShowReferLine,thick:e.thick,ratio:e.ratio,start:e.startX,lines:e.lines.h,"select-start":e.shadow.x,"select-length":e.shadow.width,scale:e.scale,palette:e.paletteCpu},null,8,["width","height","is-show-refer-line","thick","ratio","start","lines","select-start","select-length","scale","palette"]),L(r,{vertical:!0,width:e.thick,height:e.height,"is-show-refer-line":e.isShowReferLine,thick:e.thick,ratio:e.ratio,start:e.startY,lines:e.lines.v,"select-start":e.shadow.y,"select-length":e.shadow.height,scale:e.scale,palette:e.paletteCpu},null,8,["width","height","is-show-refer-line","thick","ratio","start","lines","select-start","select-length","scale","palette"]),h("a",{class:q(["corner",e.cornerActiveClass]),style:k(e.cornerStyle),onClick:t[0]||(t[0]=(...i)=>e.onCornerClick&&e.onCornerClick(...i))},null,6)])}var Ee=E(ke,[["render",Le]]);const G=600,Z=320,Oe=B({components:{SketchRule:Ee},setup(){const e=A(null),t=A(null),n=P({scale:2,startX:0,startY:0,lines:{h:[433,588],v:[33,143]},thick:20,isShowRuler:!0,isShowReferLine:!0}),c=g(()=>({x:0,y:0,width:G,height:Z})),a=g(()=>({width:G,height:Z,transform:`scale(${n.scale})`}));$(()=>{e.value.scrollLeft=t.value.getBoundingClientRect().width/2-400});const s=()=>{const i=document.querySelector("#screens").getBoundingClientRect(),u=document.querySelector("#canvas").getBoundingClientRect(),o=(i.left+n.thick-u.left)/n.scale,l=(i.top+n.thick-u.top)/n.scale;n.startX=o,n.startY=l};return{eyeIcon:le,screensRef:e,containerRef:t,state:n,shadow:c,canvasStyle:a,handleWheel:i=>{if(i.ctrlKey||i.metaKey){i.preventDefault();const u=parseFloat(Math.max(.2,n.scale-i.deltaY/500).toFixed(2));n.scale=u}oe(()=>{s()})},handleScroll:s}}}),Ue={class:"top"},$e={class:"wrapper"},De={ref:"containerRef",class:"screen-container"};function Ie(e,t,n,c,a,s){const r=U("SketchRule");return C(),R(V,null,[h("div",Ue,"\u7F29\u653E\u6BD4\u4F8B:"+X(e.state.scale),1),h("div",$e,[L(r,{thick:e.state.thick,scale:e.state.scale,width:1380,height:780,"start-x":e.state.startX,"start-y":e.state.startY,shadow:e.shadow,"corner-active":!0,lines:e.state.lines},null,8,["thick","scale","start-x","start-y","shadow","lines"]),h("div",{id:"screens",ref:"screensRef",onWheel:t[0]||(t[0]=(...i)=>e.handleWheel&&e.handleWheel(...i)),onScroll:t[1]||(t[1]=(...i)=>e.handleScroll&&e.handleScroll(...i))},[h("div",De,[h("div",{id:"canvas",style:k(e.canvasStyle)},null,4)],512)],544)])],64)}var Xe=E(Oe,[["render",Ie]]);const Ve=h("div",null,[h("a",{href:"https://data.avuejs.com/build/1",target:"_blank",class:"redlink"}," \u5B9E\u4F8B\u5730\u5740:https://data.avuejs.com/build/1 "),h("div",null,"\u6309\u4F4FCtril+\u9F20\u6807\u6EDA\u8F6E\u53EF\u4EE5\u7F29\u653E\u9875\u9762")],-1),Fe={setup(e){return(t,n)=>(C(),R(V,null,[Ve,L(Xe)],64))}},Ke=ae(Fe);Ke.mount("#app");
