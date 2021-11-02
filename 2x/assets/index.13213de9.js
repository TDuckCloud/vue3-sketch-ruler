var ne=Object.defineProperty;var X=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var Y=(e,t,n)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(e,t)=>{for(var n in t||(t={}))ae.call(t,n)&&Y(e,n,t[n]);if(X)for(var n of X(t))re.call(t,n)&&Y(e,n,t[n]);return e};import{d as D,r as w,o as P,c as m,w as M,v as T,a as $,b as p,t as V,n as L,e as k,f as H,g as K,h as W,i as _,F as U,j as le,k as q,l as oe,m as se,p as ie,u as ue,q as ce,s as de,x as he,y as ve}from"./vendor.ea34e649.js";const fe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}};fe();const pe={scale:Number,thick:Number,palette:Object,index:Number,start:Number,vertical:Boolean,value:Number,isShowReferLine:Boolean};var B=(e,t)=>{for(const[n,o]of t)e[n]=o;return e};const me=D({name:"LineRuler",props:pe,emits:["onMouseDown","onRelease","onRemove"],setup(e,{emit:t}){const n=w(0),o=w(!0);P(()=>{n.value=e.value});const l=u=>{o.value=u>=0},a=m(()=>{const u=(n.value-e.start)*e.scale;l(u);const d=u+"px";return e.vertical?{top:d}:{left:d}}),r=m(()=>{var f;const u=`1px solid ${(f=e.palette)==null?void 0:f.lineColor}`,d=e.vertical?{borderTop:u}:{borderLeft:u},h=e.isShowReferLine?e.vertical?"ns-resize":"ew-resize":"none";return z({cursor:h},d)}),c=m(()=>e.vertical?{left:e.thick+"px"}:{top:e.thick+"px"});return{startValue:n,showLine:o,offset:a,borderCursor:r,actionStyle:c,handleDown:u=>{const d=e.vertical?u.clientY:u.clientX,h=n.value;t("onMouseDown");const f=N=>{const v=e.vertical?N.clientY:N.clientX,y=Math.round(h+(v-d)/e.scale);n.value=y},R=()=>{t("onRelease",n.value,e.index),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",R)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",R)},handleRemove:()=>{t("onRemove",e.index)}}}}),we={class:"value"};function ge(e,t,n,o,l,a){return M((k(),$("div",{class:"line",style:L([e.offset,e.borderCursor]),onMousedown:t[1]||(t[1]=(...r)=>e.handleDown&&e.handleDown(...r))},[p("div",{class:"action",style:L(e.actionStyle)},[p("span",{class:"del",onClick:t[0]||(t[0]=(...r)=>e.handleRemove&&e.handleRemove(...r))},"\xD7"),p("span",we,V(e.startValue),1)],4)],36)),[[T,e.showLine]])}var Ce=B(me,[["render",ge],["__scopeId","data-v-069c473f"]]);const ye=e=>e<=.25?40:e<=.5?20:e<=1?10:e<=2?5:e<=4?2:1,G=.83,be=(e,t,n,o,l,a)=>{const{scale:r,width:c,height:s,palette:i}=l,{bgColor:u,fontColor:d,shadowColor:h,ratio:f,longfgColor:R,shortfgColor:N}=i;if(e.scale(f,f),e.clearRect(0,0,c,s),e.fillStyle=u,e.fillRect(0,0,c,s),o){const C=(n-t)*r,S=o*r;e.fillStyle=h,a?e.fillRect(C,0,S,s*3/8):e.fillRect(0,C,c*3/8,S)}const v=ye(r),y=v*r,b=v*10,I=b*r,A=Math.floor(t/v)*v,F=Math.floor(t/b)*b,ee=(A-t)/v*y,te=(F-t)/b*I,j=t+Math.ceil((a?c:s)/r);e.beginPath(),e.fillStyle=d,e.strokeStyle=R;for(let C=F,S=0;C<j;C+=b,S++){const g=te+S*I+.5;a?e.moveTo(g,0):e.moveTo(0,g),e.save(),a?e.translate(g,s*.4):e.translate(c*.4,g),a||e.rotate(-Math.PI/2),e.scale(G/f,G/f),e.fillText(C.toString(),4*f,7*f),e.restore(),a?e.lineTo(g,s*9/16):e.lineTo(c*9/16,g)}e.stroke(),e.closePath(),e.beginPath(),e.strokeStyle=N;for(let C=A,S=0;C<j;C+=v,S++){const g=ee+S*y+.5;a?e.moveTo(g,0):e.moveTo(0,g),C%b!=0&&(a?e.lineTo(g,s*1/4):e.lineTo(c*1/4,g))}e.stroke(),e.closePath(),e.setTransform(1,0,0,1,0,0)},ke={showIndicator:Boolean,valueNum:Number,scale:Number,ratio:Number,palette:Object,vertical:Boolean,start:Number,width:Number,height:Number,selectStart:Number,selectLength:Number},Re=D({name:"CanvasRuler",props:ke,emits:["onAddLine","update:showIndicator","update:valueNum"],setup(e,{emit:t}){const n=H({canvasContext:null}),o=w(null);P(()=>{l(),a(),r()});const l=()=>{n.canvasContext=o.value&&o.value.getContext("2d")},a=()=>{if(o.value){const s=e.ratio;o.value.width=e.width*s,o.value.height=e.height*s;const i=n.canvasContext;i&&(i.font=`${12*s}px -apple-system,
                "Helvetica Neue", ".SFNSText-Regular",
                "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB",
                "Microsoft YaHei", "WenQuanYi Zen Hei", sans-serif`,i.lineWidth=1,i.textBaseline="middle")}},r=()=>{const s={scale:e.scale,width:e.width,height:e.height,palette:e.palette};n.canvasContext&&be(n.canvasContext,e.start,e.selectStart,e.selectLength,s,!e.vertical)};return K(()=>e.start,()=>r()),K([()=>e.width,()=>e.height],()=>{a(),r()}),{handle:(s,i)=>{const u=(f,R,N)=>Math.round(R+f/N),d=e.vertical?s.offsetY:s.offsetX,h=u(d,e.start,e.scale);switch(i){case"click":t("onAddLine",h);break;case"enter":t("update:valueNum",h),t("update:showIndicator",!0);break;default:t("update:valueNum",h);break}},canvas:o}}});function Se(e,t,n,o,l,a){return k(),$("canvas",{ref:"canvas",class:"ruler",onClick:t[0]||(t[0]=r=>e.handle(r,"click")),onMouseenter:t[1]||(t[1]=r=>e.handle(r,"enter")),onMousemove:t[2]||(t[2]=r=>e.handle(r,"move")),onMouseleave:t[3]||(t[3]=r=>e.$emit("update:showIndicator",!1))},null,544)}var $e=B(Re,[["render",Se]]);const Ne={scale:Number,ratio:Number,thick:Number,palette:Object,vertical:{type:Boolean,default:!0},width:{type:Number,default:200},height:{type:Number,default:200},start:{type:Number,default:0},lines:{type:Array,default:()=>[]},selectStart:{type:Number},selectLength:{type:Number},isShowReferLine:{type:Boolean}};const Le=D({name:"RulerWrapper",components:{CanvasRuler:$e,RulerLine:Ce},props:Ne,setup(e){const t=w(!1),n=w(0),o=m(()=>e.vertical?"v-container":"h-container"),l=m(()=>{const i={width:`calc(100% - ${e.thick}px)`,height:`${e.thick+1}px`,left:`${e.thick}px`},u={width:`${e.thick&&e.thick+1}px`,height:`calc(100% - ${e.thick}px)`,top:`${e.thick}px`};return e.vertical?u:i}),a=m(()=>{var h;const i=(n.value-e.start)*e.scale;let u="top",d="borderLeft";return u=e.vertical?"top":"left",d=e.vertical?"borderBottom":"borderLeft",{[u]:i+"px",[d]:`1px solid ${(h=e.palette)==null?void 0:h.lineColor}`}}),r=i=>{e.lines.push(i)},c=(i,u)=>{const d=i-e.start,h=(e.vertical?e.height:e.width)/e.scale;d<0||d>h?s(u):e.lines[u]=i},s=i=>{e.lines.splice(i,1)};return{showIndicator:t,valueNum:n,rwClassName:o,rwStyle:l,indicatorStyle:a,handleNewLine:r,handleLineRelease:c,handleLineRemove:s}}}),_e={class:"lines"},Be={class:"value"};function Oe(e,t,n,o,l,a){const r=W("CanvasRuler"),c=W("RulerLine");return k(),$("div",{class:q(e.rwClassName),style:L(e.rwStyle)},[_(r,{vertical:e.vertical,scale:e.scale,width:e.width,height:e.height,start:e.start,ratio:e.ratio,"select-start":e.selectStart,"select-length":e.selectLength,palette:e.palette,valueNum:e.valueNum,"onUpdate:valueNum":t[0]||(t[0]=s=>e.valueNum=s),showIndicator:e.showIndicator,"onUpdate:showIndicator":t[1]||(t[1]=s=>e.showIndicator=s),onOnAddLine:e.handleNewLine},null,8,["vertical","scale","width","height","start","ratio","select-start","select-length","palette","valueNum","showIndicator","onOnAddLine"]),M(p("div",_e,[(k(!0),$(U,null,le(e.lines,(s,i)=>(k(),oe(c,{key:s+i,index:i,value:s>>0,scale:e.scale,start:e.start,thick:e.thick,palette:e.palette,vertical:e.vertical,"is-show-refer-line":e.isShowReferLine,onOnRemove:e.handleLineRemove,onOnRelease:e.handleLineRelease},null,8,["index","value","scale","start","thick","palette","vertical","is-show-refer-line","onOnRemove","onOnRelease"]))),128))],512),[[T,e.isShowReferLine]]),M(p("div",{class:"indicator",style:L(e.indicatorStyle)},[p("div",Be,V(e.valueNum),1)],4),[[T,e.showIndicator]])],6)}var De=B(Le,[["render",Oe],["__scopeId","data-v-58d4d558"]]);const We={scale:{type:Number,default:1},ratio:{type:Number,default:1},thick:{type:Number,default:16},palette:Object,startX:{type:Number,default:0},startY:{type:Number,default:0},width:{type:Number,default:200},height:{type:Number,default:200},shadow:{type:Object,default:()=>({x:0,y:0,width:0,height:0})},lines:{type:Object,default:()=>({h:[],v:[]})},cornerActive:{type:Boolean,default:!1},isShowReferLine:{type:Boolean,default:!0}},Ie={ratio:{type:Number,default:1},thick:{type:Number,default:16},palette:Object,lines:{type:Object,default:()=>({h:[],v:[]})},cornerActive:{type:Boolean,default:!1},isShowReferLine:{type:Boolean,default:!0}},Q=e=>{function t(o,l){return Object.keys(o).forEach(a=>{a&&o.hasOwnProperty(a)&&(typeof l.key=="object"?o[a]=t(o[a],l[a]):l.hasOwnProperty(a)&&(o[a]=l[a]))}),o}return t({bgColor:"rgba(225,225,225, 0)",longfgColor:"#BABBBC",shortfgColor:"#C8CDD0",fontColor:"#7D8694",shadowColor:"#E8E8E8",lineColor:"#EB5648",borderColor:"#DADADC",cornerActiveColor:"rgb(235, 86, 72, 0.6)",menu:{bgColor:"#fff",dividerColor:"#DBDBDB",listItem:{textColor:"#415058",hoverTextColor:"#298DF8",disabledTextColor:"rgba(65, 80, 88, 0.4)",bgColor:"#fff",hoverBgColor:"#F2F2F2"}}},e||{})};const Ae=D({name:"SketchRule",components:{RulerWrapper:De},props:We,emits:["onCornerClick","handleLine"],setup(e,{emit:t}){const n=m(()=>Q(e.palette)),o=m(()=>e.cornerActive?" active":""),l=m(()=>({backgroundColor:n.value.bgColor,width:e.thick+"px",height:e.thick+"px",borderRight:`1px solid ${n.value.borderColor}`,borderBottom:`1px solid ${n.value.borderColor}`}));return{paletteCpu:n,cornerActiveClass:o,cornerStyle:l,onCornerClick:r=>{t("onCornerClick",r)}}}}),Pe={id:"mb-ruler",class:"style-ruler mb-ruler"};function Me(e,t,n,o,l,a){const r=W("RulerWrapper");return k(),$("div",Pe,[_(r,{vertical:!1,width:e.width,height:e.thick,"is-show-refer-line":e.isShowReferLine,thick:e.thick,ratio:e.ratio,start:e.startX,lines:e.lines.h,"select-start":e.shadow.x,"select-length":e.shadow.width,scale:e.scale,palette:e.paletteCpu},null,8,["width","height","is-show-refer-line","thick","ratio","start","lines","select-start","select-length","scale","palette"]),_(r,{vertical:!0,width:e.thick,height:e.height,"is-show-refer-line":e.isShowReferLine,thick:e.thick,ratio:e.ratio,start:e.startY,lines:e.lines.v,"select-start":e.shadow.y,"select-length":e.shadow.height,scale:e.scale,palette:e.paletteCpu},null,8,["width","height","is-show-refer-line","thick","ratio","start","lines","select-start","select-length","scale","palette"]),p("a",{class:q(["corner",e.cornerActiveClass]),style:L(e.cornerStyle),onClick:t[0]||(t[0]=(...c)=>e.onCornerClick&&e.onCornerClick(...c))},null,6)])}var O=B(Ae,[["render",Me]]);const Te=D({name:"SketchRulerWrapper",components:{SketchRule:O},props:Ie,emits:["handleLine","ClickOutside2ClearAll"],setup(e,{slots:t}){let n=w(1);const o=m(()=>Q(e.palette)),l=w(null);let a=w(0),r=w(0);const c=w(null),s=w(null);P(()=>{if(l.value){const v=l.value.getBoundingClientRect();a.value=v.width-21,r.value=v.height-21}c.value&&s.value&&(c.value.scrollLeft=s.value&&s.value.getBoundingClientRect().width/2-400),d()});let i=w(0),u=w(0);const d=()=>{se(()=>{if(c.value&&t.default&&t.default()[0].el){const y=t.default()[0].el.getBoundingClientRect(),b=c.value.getBoundingClientRect(),I=(b.left+e.thick-y.left)/n.value,A=(b.top+e.thick-y.top)/n.value;i.value=I>>0,u.value=A>>0}})},h=v=>{if(v.ctrlKey||v.metaKey){v.preventDefault();const y=parseFloat(Math.max(.2,n.value-v.deltaY/1e3).toFixed(2));n.value=y}d()},f=m(()=>({x:0,y:0,width:a.value,height:r.value})),R=m(()=>({width:a.value,height:r.value,transform:`scale(${n.value})`}));return{screensRef:c,containerRef:s,scale:n,startX:i,width:a,height:r,startY:u,paletteCpu:o,shadow:f,canvasStyle:R,handleWheel:h,handleCornerClick:()=>{}}}}),Ve={ref:"containerRef",class:"screen-container"};function Ee(e,t,n,o,l,a){const r=W("SketchRule");return k(),$("div",null,[_(r,{thick:e.thick,scale:e.scale,width:e.width,"start-x":e.startX,"start-y":e.startY,shadow:e.shadow,palette:e.paletteCpu,height:e.height,"corner-active":!0,lines:e.lines,onHandleLine:t[0]||(t[0]=c=>e.$emit("handleLine")),onOnCornerClick:e.handleCornerClick},null,8,["thick","scale","width","start-x","start-y","shadow","palette","height","lines","onOnCornerClick"]),p("div",{class:"screens",ref:"screensRef",onWheel:t[1]||(t[1]=(...c)=>e.handleWheel&&e.handleWheel(...c))},[p("div",Ve,[p("div",{class:"canvas",style:L(e.canvasStyle)},[ie(e.$slots,"default")],4)],512)],544)])}var Z=B(Te,[["render",Ee]]);O.install=e=>{e.component(O.name,O)};Z.install=e=>{e.component(O.name,O)};const E={name:"",components:{SketchRuleWrapper:Z},setup(){const e=H({scale:1,wrapperwith:window.innerWidth-400,wrapperheight:window.innerHeight-300,lines:{h:[433,588],v:[33,143]},thick:20,isShowRuler:!0,isShowReferLine:!0}),t=m(()=>e.wrapperwith+22+"px"),n=m(()=>e.wrapperheight+22+"px");return P(()=>{window.addEventListener("resize",()=>{e.wrapperwith=window.innerWidth-400,e.wrapperheight=window.innerHeight-400})}),{wrapperwithpx:t,wrapperheightpx:n,state:e}}},J=()=>{ue(e=>({cf7c326c:e.wrapperwithpx,da7c782a:e.wrapperheightpx}))},x=E.setup;E.setup=x?(e,t)=>(J(),x(e,t)):J;const Fe=E,je=e=>(de("data-v-2884c0f8"),e=e(),he(),e),Xe={class:"wrapper"},Ye={class:"top"},ze=je(()=>p("div",{class:"canvas"},null,-1));function He(e,t,n,o,l,a){const r=W("SketchRuleWrapper");return k(),$("div",Xe,[p("div",Ye,"\u7F29\u653E\u6BD4\u4F8B:"+V(o.state.scale),1),_(r,null,{default:ce(()=>[ze]),_:1})])}var Ke=B(Fe,[["render",He],["__scopeId","data-v-2884c0f8"]]);const Ue=p("div",null,[p("a",{href:"https://data.avuejs.com/build/1",target:"_blank",class:"redlink"}," \u5B9E\u4F8B\u5730\u5740:https://data.avuejs.com/build/1 "),p("div",null,"\u6309\u4F4FCtril+\u9F20\u6807\u6EDA\u8F6E\u53EF\u4EE5\u7F29\u653E\u9875\u9762")],-1),qe={setup(e){return(t,n)=>(k(),$(U,null,[Ue,_(Ke)],64))}},Ge=ve(qe);Ge.mount("#app");