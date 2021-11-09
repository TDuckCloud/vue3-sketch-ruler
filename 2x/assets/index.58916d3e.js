var ne=Object.defineProperty;var V=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var H=(e,t,n)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F=(e,t)=>{for(var n in t||(t={}))re.call(t,n)&&H(e,n,t[n]);if(V)for(var n of V(t))le.call(t,n)&&H(e,n,t[n]);return e};import{d as M,i as D,r as v,o as Y,c as w,w as W,v as X,a as L,b as _,t as x,n as k,e as $,f as B,g as j,h as E,j as T,F as Z,k as se,l as q,m as ae,p as K,q as ie,s as U,u as G,x as ue,y as ce}from"./vendor.1a67de1f.js";const de=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};de();var fe="./assets/onepuls8-pro.53586ff6.jpg",ve="./assets/bg.c9b313c5.jpeg";var I=(e,t)=>{for(const[n,o]of t)e[n]=o;return e};const he=M({name:"LineRuler",props:{index:Number,start:Number,vertical:Boolean,value:Number},emits:["onMouseDown","onRelease","onRemove"],setup(e,{emit:t}){const n=D("sketch"),{isShowReferLine:o,palette:r,thick:l}=n,s=v(0),c=v(!0);Y(()=>{s.value=e.value});const i=d=>{c.value=d>=0},u=w(()=>{const d=(s.value-e.start)*n.scale;i(d);const f=d+"px";return e.vertical?{top:f}:{left:f}}),m=w(()=>{console.log(r==null?void 0:r.lineColor,"palette.lineColor");const d=`1px solid ${r==null?void 0:r.lineColor}`,f=e.vertical?{borderTop:d}:{borderLeft:d},g=o?e.vertical?"ns-resize":"ew-resize":"none";return F({cursor:g},f)}),h=w(()=>e.vertical?{left:l+"px"}:{top:l+"px"});return{startValue:s,showLine:c,offset:u,borderCursor:m,actionStyle:h,handleDown:d=>{const f=e.vertical?d.clientY:d.clientX,g=s.value;t("onMouseDown");const y=b=>{const S=e.vertical?b.clientY:b.clientX,O=Math.round(g+(S-f)/n.scale);s.value=O},C=()=>{t("onRelease",s.value,e.index),document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",y),document.addEventListener("mouseup",C)},handleRemove:()=>{t("onRemove",e.index)}}}}),me={class:"value"};function pe(e,t,n,o,r,l){return W(($(),L("div",{class:"line",style:k([e.offset,e.borderCursor]),onMousedown:t[1]||(t[1]=(...s)=>e.handleDown&&e.handleDown(...s))},[_("div",{class:"action",style:k(e.actionStyle)},[_("span",{class:"del",onClick:t[0]||(t[0]=(...s)=>e.handleRemove&&e.handleRemove(...s))},"\xD7"),_("span",me,x(e.startValue),1)],4)],36)),[[X,e.showLine]])}var ge=I(he,[["render",pe],["__scopeId","data-v-60f7d99b"]]);const we=e=>e<=.25?40:e<=.5?20:e<=1?10:e<=2?5:e<=4?2:1,Q=.83,ye=(e,t,n,o)=>{const{scale:r,width:l,height:s,palette:c}=n,{bgColor:i,fontColor:u,ratio:m,longfgColor:h,shortfgColor:a}=c;e.scale(m,m),e.clearRect(0,0,l,s),e.fillStyle=i,e.fillRect(0,0,l,s);const p=we(r),d=p*r,f=p*10,g=f*r,y=Math.floor(t/p)*p,C=Math.floor(t/f)*f,b=(y-t)/p*d,S=(C-t)/f*g,O=t+Math.ceil((o?l:s)/r);e.beginPath(),e.fillStyle=u,e.strokeStyle=h;for(let z=C,N=0;z<O;z+=f,N++){const R=S+N*g+.5;o?e.moveTo(R,0):e.moveTo(0,R),e.save(),o?e.translate(R,s*.4):e.translate(l*.4,R),o||e.rotate(-Math.PI/2),e.scale(Q/m,Q/m),e.fillText(z.toString(),4*m,7*m),e.restore(),o?e.lineTo(R,s*9/16):e.lineTo(l*9/16,R)}e.stroke(),e.closePath(),e.beginPath(),e.strokeStyle=a;for(let z=y,N=0;z<O;z+=p,N++){const R=b+N*d+.5;o?e.moveTo(R,0):e.moveTo(0,R),z%f!=0&&(o?e.lineTo(R,s*1/4):e.lineTo(l*1/4,R))}e.stroke(),e.closePath(),e.setTransform(1,0,0,1,0,0)},_e=M({name:"CanvasRuler",props:{showIndicator:Boolean,valueNum:Number,vertical:Boolean,start:Number,width:Number,height:Number},emits:["onAddLine","update:showIndicator","update:valueNum"],setup(e,{emit:t}){const n=D("sketch"),{ratio:o,palette:r}=n,l=B({canvasContext:null}),s=v(null);Y(()=>{c(),i(),u()});const c=()=>{l.canvasContext=s.value&&s.value.getContext("2d")},i=()=>{if(s.value){s.value.width=e.width*o,s.value.height=e.height*o;const h=l.canvasContext;h&&(h.font=`${12*o}px -apple-system,
                "Helvetica Neue", ".SFNSText-Regular",
                "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB",
                "Microsoft YaHei", "WenQuanYi Zen Hei", sans-serif`,h.lineWidth=1,h.textBaseline="middle")}},u=()=>{console.log(n.scale," canvas.value");const h={scale:n.scale,width:e.width,height:e.height,palette:r};l.canvasContext&&ye(l.canvasContext,e.start,h,!e.vertical)};return j(()=>e.start,()=>u()),j([()=>e.width,()=>e.height],()=>{i(),u()}),{handle:(h,a)=>{const p=(g,y,C)=>Math.round(y+g/C),d=e.vertical?h.offsetY:h.offsetX,f=p(d,e.start,n.scale);switch(a){case"click":t("onAddLine",f);break;case"enter":t("update:valueNum",f),t("update:showIndicator",!0);break;default:t("update:valueNum",f);break}},canvas:s}}});function Ce(e,t,n,o,r,l){return $(),L("canvas",{ref:"canvas",class:"ruler",onClick:t[0]||(t[0]=s=>e.handle(s,"click")),onMouseenter:t[1]||(t[1]=s=>e.handle(s,"enter")),onMousemove:t[2]||(t[2]=s=>e.handle(s,"move")),onMouseleave:t[3]||(t[3]=s=>e.$emit("update:showIndicator",!1))},null,544)}var be=I(_e,[["render",Ce]]);const Se=M({name:"RulerWrapper",components:{CanvasRuler:be,RulerLine:ge},props:{vertical:Boolean,width:Number,height:{type:Number},start:{type:Number,default:0},lines:{type:Array,default:()=>[]}},setup(e){const t=D("sketch"),{palette:n,thick:o}=t,r=v(!1),l=v(0),s=w(()=>e.vertical?"v-container":"h-container"),c=w(()=>{const a={width:`calc(100% - ${o}px)`,height:`${o+1}px`,left:`${o}px`},p={width:`${o&&o+1}px`,height:`calc(100% - ${o}px)`,top:`${o}px`};return e.vertical?p:a}),i=w(()=>{const a=(l.value-e.start)*t.scale;let p="top",d="borderLeft";return p=e.vertical?"top":"left",d=e.vertical?"borderBottom":"borderLeft",{[p]:a+"px",[d]:`1px solid ${n==null?void 0:n.lineColor}`}}),u=a=>{e.lines.push(a)},m=(a,p)=>{const d=a-e.start,f=(e.vertical?e.height:e.width)/t.scale;d<0||d>f?h(p):e.lines[p]=a},h=a=>{e.lines.splice(a,1)};return{injectObj:t,showIndicator:r,valueNum:l,rwClassName:s,rwStyle:c,indicatorStyle:i,handleNewLine:u,handleLineRelease:m,handleLineRemove:h}}}),Re={class:"lines"},$e={class:"value"};function ze(e,t,n,o,r,l){const s=E("CanvasRuler"),c=E("RulerLine");return $(),L("div",{class:q(e.rwClassName),style:k(e.rwStyle)},[T(s,{vertical:e.vertical,width:e.width,height:e.height,start:e.start,valueNum:e.valueNum,"onUpdate:valueNum":t[0]||(t[0]=i=>e.valueNum=i),showIndicator:e.showIndicator,"onUpdate:showIndicator":t[1]||(t[1]=i=>e.showIndicator=i),onOnAddLine:e.handleNewLine},null,8,["vertical","width","height","start","valueNum","showIndicator","onOnAddLine"]),W(_("div",Re,[($(!0),L(Z,null,se(e.lines,(i,u)=>($(),ae(c,{key:i+u,index:u,value:i>>0,start:e.start,vertical:e.vertical,onOnRemove:e.handleLineRemove,onOnRelease:e.handleLineRelease},null,8,["index","value","start","vertical","onOnRemove","onOnRelease"]))),128))],512),[[X,e.injectObj.isShowReferLine]]),W(_("div",{class:"indicator",style:k(e.indicatorStyle)},[_("div",$e,x(e.valueNum),1)],4),[[X,e.showIndicator]])],6)}var Le=I(Se,[["render",ze],["__scopeId","data-v-54b7bd8a"]]);const ke={scale:{type:Number,default:1},ratio:{type:Number,default:1},thick:{type:Number,default:16},palette:Object,startX:{type:Number,default:0},startY:{type:Number,default:0},width:{type:Number,default:200},height:{type:Number,default:200},lines:{type:Object,default:()=>({h:[],v:[]})},cornerActive:{type:Boolean,default:!1},isShowReferLine:{type:Boolean,default:!0}},Ne=e=>{function t(o,r){return Object.keys(o).forEach(l=>{l&&o.hasOwnProperty(l)&&(typeof r.key=="object"?o[l]=t(o[l],r[l]):r.hasOwnProperty(l)&&(o[l]=r[l]))}),o}return t({bgColor:"rgba(225,225,225, 0)",longfgColor:"#BABBBC",shortfgColor:"#C8CDD0",fontColor:"#7D8694",lineColor:"#EB5648",borderColor:"#DADADC",cornerActiveColor:"rgb(235, 86, 72, 0.6)",menu:{bgColor:"#fff",dividerColor:"#DBDBDB",listItem:{textColor:"#415058",hoverTextColor:"#298DF8",disabledTextColor:"rgba(65, 80, 88, 0.4)",bgColor:"#fff",hoverBgColor:"#F2F2F2"}}},e||{})};const Ie=M({name:"SketchRule",components:{RulerWrapper:Le},props:ke,emits:["onCornerClick","handleLine"],setup(e,{emit:t}){const n=Ne(e.palette),o=w(()=>e.cornerActive?" active":""),r=w(()=>({backgroundColor:n.bgColor,width:e.thick+"px",height:e.thick+"px",borderRight:`1px solid ${n.borderColor}`,borderBottom:`1px solid ${n.borderColor}`})),l=c=>{console.log(n),t("onCornerClick",c)},s=B({thick:e.thick,palette:n,ratio:e.ratio,scale:w(()=>e.scale),isShowReferLine:e.isShowReferLine});return K("sketch",ie(s)),{cornerActiveClass:o,cornerStyle:r,onCornerClick:l}}}),Oe={id:"mb-ruler",class:"style-ruler mb-ruler"};function Te(e,t,n,o,r,l){const s=E("RulerWrapper");return $(),L("div",Oe,[T(s,{vertical:!1,width:e.width,height:e.thick,start:e.startX,lines:e.lines.h},null,8,["width","height","start","lines"]),T(s,{vertical:!0,width:e.thick,height:e.height,start:e.startY,lines:e.lines.v},null,8,["width","height","start","lines"]),_("a",{class:q(["corner",e.cornerActiveClass]),style:k(e.cornerStyle),onClick:t[0]||(t[0]=(...c)=>e.onCornerClick&&e.onCornerClick(...c))},null,6)])}var P=I(Ie,[["render",Te]]);function Me(e){const t=v(!1),n=v(0),o=v(0),r=v(0),l=v(0),s=v(0),c=v(0),i=v(0),u=v(0),m=v(0),h=v(0);return j(e,(a,p,d)=>{const f=y=>{const{width:C,height:b,x:S,y:O}=a.getBoundingClientRect(),z=document.body.scrollTop||document.documentElement.scrollTop,N=document.body.scrollLeft||document.documentElement.scrollLeft;n.value=y.pageX,o.value=y.pageY,m.value=N+S,h.value=z+O,s.value=C,c.value=b,t.value=!1,r.value=S,l.value=O,i.value=r.value+C+N,u.value=l.value+b+z,n.value>r.value&&o.value>l.value&&n.value<i.value&&o.value<u.value&&(t.value=!0)},g=y=>{t.value=!1};a==null||a.addEventListener("mousemove",f),a==null||a.addEventListener("mouseleave",g),d(()=>{a==null||a.removeEventListener("mousemove",f),a==null||a.removeEventListener("mouseleave",g)})},{immediate:!0}),{x:n,y:o,eleX:r,eleY:l,width:s,height:c,eleRightX:i,eleRightY:u,isInside:t,offsetLeft:m,offsetTop:h}}function Be(e){let t=e.offsetTop,n=e.offsetLeft;for(;e.offsetParent;){const o=e.offsetParent;e=o,t+=o.offsetTop,n+=o.offsetLeft}return{offsetTop:t,offsetLeft:n}}function J(e){const t=v(0),n=v(0),o=v(0),r=v(0),l=v(0),s=v(0);return j(e,(c,i)=>{if(c){document.body.scrollTop||document.documentElement.scrollTop,document.body.scrollLeft||document.documentElement.scrollLeft;const u=c.getBoundingClientRect(),m=Be(c);o.value=u.x,r.value=u.y,t.value=u.width,n.value=u.height,l.value=m.offsetTop,s.value=m.offsetLeft}},{immediate:!0}),{width:t,height:n,eleX:o,eleY:r,elOffsetTop:l,elOffsetLeft:s}}const Ee={props:["previewImg"],components:{},setup(){const e=v(null),t=v(null),{offsetLeft:n,offsetTop:o,isInside:r,width:l,height:s,x:c,y:i}=Me(t),{prveiwInfo:u,followSize:m,prevSize:h,draggleRate:a}=D("magnify"),p=w(()=>{const{width:f,height:g}=J(e),y=l.value-f.value,C=s.value-g.value;let b=c.value-n.value-f.value/2,S=i.value-o.value-g.value/2;return b=b>0?Math.min(b,y):0,S=S>0?Math.min(S,C):0,u.followX=b,u.followY=S,u.followW=f.value,u.followH=g.value,u.followMaxX=y,u.followMaxY=C,{width:m.value.w+"px",height:m.value.h+"px",left:b+"px",top:S+"px"}}),d=w(()=>({width:a*h.w+"px",height:a*h.h+"px"}));return{offsetLeft:n,offsetTop:o,x:c,y:i,isInside:r,followRef:e,followStyle:p,previewWarrperRef:t,wrapperStyle:d}}},De=_("i",null,null,-1),je=[De];function Pe(e,t,n,o,r,l){return $(),L("div",{class:"vue-magnify-preview",style:k(o.wrapperStyle),ref:"previewWarrperRef"},[U(e.$slots,"default"),W(_("span",{class:"follow-unit",style:k(o.followStyle),ref:"followRef"},je,4),[[X,o.isInside]])],4)}var We=I(Ee,[["render",Pe]]);const Xe={props:["zoomImg"],setup(){const{prveiwInfo:e,setZoomImgInfo:t,zoomSize:n}=D("magnify"),o=v(null),r=v(null),l=w(()=>{const{width:s,height:c}=J(o),i=e.followX/e.followMaxX,u=e.followY/e.followMaxY;return B({scaleX:i,scaleY:u,width:s,height:c})});return Y(()=>{r.value&&r.value.addEventListener("load",function(){t({w:this.width,h:this.height})})}),j(l,s=>{o.value&&r.value&&o.value.scrollTo(s.scaleX*Math.abs(n.w-r.value.width),s.scaleY*Math.abs(n.h-r.value.height))}),{prveiwInfo:e,scaleInfo:l,zoomRef:o,imgRef:r,zoomSize:n}}},Ye=["src"];function Ae(e,t,n,o,r,l){return $(),L("div",{class:"vue-magnify-zoom",ref:"zoomRef",style:k({width:o.zoomSize.w+"px",height:o.zoomSize.h+"px",right:-o.zoomSize.w-3+"px"})},[_("img",{src:n.zoomImg,ref:"imgRef"},null,8,Ye)],4)}var Ve=I(Xe,[["render",Ae]]);const He=M({name:"sketch-ruler-wrapper",props:{previewImg:{type:String,required:!0},zoomImg:{type:String,required:!0},prevSize:{type:Object,default:()=>({width:450,height:450})},zoomSize:{type:Object,default:()=>null},draggleRate:{type:Number,default:.3}},emits:["on-preview-click"],components:{MagnifyPreview:We,MagnifyZoom:Ve},setup(e,{emit:t}){const n=B({followX:0,followY:0,followW:0,followH:0,followMaxX:0,followMaxY:0}),o=B({w:0,h:0}),r=i=>{o.w=i.w,o.h=i.h},l=w(()=>({w:100,h:100})),s=w(()=>({width:e.prevSize.w+"px",height:e.prevSize.h+"px"}));return K("magnify",{prveiwInfo:n,setZoomImgInfo:r,prevSize:e.prevSize,followSize:l,zoomSize:e.zoomSize,draggleRate:e.draggleRate}),{handleClick:i=>{t("on-preview-click",i)},prveiwInfo:n,zoomImgSize:o,followSize:l,previewStyle:s}}});function Fe(e,t,n,o,r,l){const s=E("magnify-preview"),c=E("magnify-zoom");return $(),L("section",{class:"vue-magnify",style:k(e.previewStyle)},[T(s,{onClick:e.handleClick},{default:G(()=>[U(e.$slots,"default")]),_:3},8,["onClick"]),T(c,{"zoom-img":e.zoomImg},null,8,["zoom-img"])],4)}var ee=I(He,[["render",Fe]]);P.install=e=>{e.component(P.name,P)};ee.install=e=>{e.component(P.name,P)};const A=M({name:"user-ruler-wrapper",components:{SketchRuleWrapper:ee},setup(){const e=B({zoomSize:{w:window.innerWidth-400,h:window.innerHeight-300},draggleRate:.3,prevSize:{w:window.innerWidth-400,h:window.innerHeight-300},scale:1,lines:{h:[433,588],v:[33,143]},thick:20,isShowRuler:!0,isShowReferLine:!0}),t=w(()=>e.prevSize.w+22+"px"),n=w(()=>e.prevSize.h+22+"px");return{wrapperwithpx:t,wrapperheightpx:n,state:e,previewImg:fe,zoomImg:ve,handleClick:r=>{console.log(r)}}}}),te=()=>{ue(e=>({"1a43c704":e.wrapperwithpx,"91b146c2":e.wrapperheightpx}))},oe=A.setup;A.setup=oe?(e,t)=>(te(),oe(e,t)):te;const xe=A,Ze={class:"home"},qe=["src"];function Ke(e,t,n,o,r,l){const s=E("SketchRuleWrapper");return $(),L("div",Ze,[T(s,{zoomSize:e.state.zoomSize,prevSize:e.state.prevSize,class:"wrapper",draggleRate:e.state.draggleRate,"preview-img":e.previewImg,"zoom-img":e.zoomImg,onOnPreviewClick:e.handleClick},{default:G(()=>[_("img",{class:"imhhhh",src:e.previewImg},null,8,qe)]),_:1},8,["zoomSize","prevSize","draggleRate","preview-img","zoom-img","onOnPreviewClick"])])}var Ue=I(xe,[["render",Ke],["__scopeId","data-v-0adbc12b"]]);const Ge=_("div",null,[_("a",{href:"https://data.avuejs.com/build/1",target:"_blank",class:"redlink"}," \u5B9E\u4F8B\u5730\u5740:https://data.avuejs.com/build/1 "),_("div",null,"\u6309\u4F4FCtril+\u9F20\u6807\u6EDA\u8F6E\u53EF\u4EE5\u7F29\u653E\u9875\u9762")],-1),Qe={setup(e){return(t,n)=>($(),L(Z,null,[Ge,T(Ue)],64))}},Je=ce(Qe);Je.mount("#app");