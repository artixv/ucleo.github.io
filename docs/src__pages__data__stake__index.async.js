"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[562],{24524:function(et,Ue,t){t.r(Ue),t.d(Ue,{default:function(){return ia}});var tt=t(17061),c=t.n(tt),at=t(17156),S=t.n(at),nt=t(27424),m=t.n(nt),a=t(67294),Xe=t(20845),ve=t(64593),Ne=t(83459),rt=t(9669),q=t.n(rt),T=t(80410),u={stake:"stake____9Qeo",sub_nav:"sub_nav____Ue83",sub_nav_sub:"sub_nav_sub___fG46u",account_box:"account_box___b_ScC",account:"account___yOlpy",yuan:"yuan___k40yF",sub_nav2:"sub_nav2___oelN5",line:"line___VSuRC",disclaimer:"disclaimer___J6FtU",box1:"box1___GagVs",box2:"box2___xmI3m",box3:"box3___ZvqmN",box5:"box5___dwLfc",stake_btn:"stake_btn___MRuGi",plus:"plus___WuwnK",board:"board___QKDpx",board2:"board2___jL7Sz",tabbtn:"tabbtn___fP7KK",vbar:"vbar___ANjRf",mintxt:"mintxt___gCDwf",tip:"tip___IIbb9","ant-modal-content":"ant-modal-content___x5m7K"},ae=t(39659),X=t(2775),x=t(4942),d=t(87462),j=t(94184),$=t.n(j),Ze=t(50132),ne=t(53124),we=t(65223),Qe=t(74902),Pe=t(97685),st=t(98423),lt=function(v,i){var A={};for(var s in v)Object.prototype.hasOwnProperty.call(v,s)&&i.indexOf(s)<0&&(A[s]=v[s]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,s=Object.getOwnPropertySymbols(v);g<s.length;g++)i.indexOf(s[g])<0&&Object.prototype.propertyIsEnumerable.call(v,s[g])&&(A[s[g]]=v[s[g]]);return A},Ve=a.createContext(null),it=function(i,A){var s=i.defaultValue,g=i.children,le=i.options,G=le===void 0?[]:le,be=i.prefixCls,ye=i.className,Ce=i.style,z=i.onChange,E=lt(i,["defaultValue","children","options","prefixCls","className","style","onChange"]),ie=a.useContext(ne.E_),oe=ie.getPrefixCls,Oe=ie.direction,b=a.useState(E.value||s||[]),ce=(0,Pe.Z)(b,2),H=ce[0],ue=ce[1],f=a.useState([]),Se=(0,Pe.Z)(f,2),Ae=Se[0],ke=Se[1];a.useEffect(function(){"value"in E&&ue(E.value||[])},[E.value]);var de=function(){return G.map(function(F){return typeof F=="string"||typeof F=="number"?{label:F,value:F}:F})},xe=function(F){ke(function(ee){return ee.filter(function(te){return te!==F})})},M=function(F){ke(function(ee){return[].concat((0,Qe.Z)(ee),[F])})},K=function(F){var ee=H.indexOf(F.value),te=(0,Qe.Z)(H);ee===-1?te.push(F.value):te.splice(ee,1),"value"in E||ue(te);var He=de();z==null||z(te.filter(function(Fe){return Ae.indexOf(Fe)!==-1}).sort(function(Fe,We){var vt=He.findIndex(function(Be){return Be.value===Fe}),mt=He.findIndex(function(Be){return Be.value===We});return vt-mt}))},je=oe("checkbox",be),fe="".concat(je,"-group"),Ee=(0,st.Z)(E,["value","disabled"]);G&&G.length>0&&(g=de().map(function(P){return a.createElement(Le,{prefixCls:je,key:P.value.toString(),disabled:"disabled"in P?P.disabled:E.disabled,value:P.value,checked:H.indexOf(P.value)!==-1,onChange:P.onChange,className:"".concat(fe,"-item"),style:P.style},P.label)}));var ze={toggleOption:K,value:H,disabled:E.disabled,name:E.name,registerValue:M,cancelValue:xe},pt=$()(fe,(0,x.Z)({},"".concat(fe,"-rtl"),Oe==="rtl"),ye);return a.createElement("div",(0,d.Z)({className:pt,style:Ce},Ee,{ref:A}),a.createElement(Ve.Provider,{value:ze},g))},ot=a.forwardRef(it),ct=a.memo(ot),ut=t(98866),dt=function(v,i){var A={};for(var s in v)Object.prototype.hasOwnProperty.call(v,s)&&i.indexOf(s)<0&&(A[s]=v[s]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,s=Object.getOwnPropertySymbols(v);g<s.length;g++)i.indexOf(s[g])<0&&Object.prototype.propertyIsEnumerable.call(v,s[g])&&(A[s[g]]=v[s[g]]);return A},xt=function(i,A){var s,g=i.prefixCls,le=i.className,G=i.children,be=i.indeterminate,ye=be===void 0?!1:be,Ce=i.style,z=i.onMouseEnter,E=i.onMouseLeave,ie=i.skipGroup,oe=ie===void 0?!1:ie,Oe=i.disabled,b=dt(i,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),ce=a.useContext(ne.E_),H=ce.getPrefixCls,ue=ce.direction,f=a.useContext(Ve),Se=(0,a.useContext)(we.aM),Ae=Se.isFormItemInput,ke=(0,a.useContext)(ut.Z),de=Oe||(f==null?void 0:f.disabled)||ke,xe=a.useRef(b.value);a.useEffect(function(){f==null||f.registerValue(b.value)},[]),a.useEffect(function(){if(!oe)return b.value!==xe.current&&(f==null||f.cancelValue(xe.current),f==null||f.registerValue(b.value),xe.current=b.value),function(){return f==null?void 0:f.cancelValue(b.value)}},[b.value]);var M=H("checkbox",g),K=(0,d.Z)({},b);f&&!oe&&(K.onChange=function(){b.onChange&&b.onChange.apply(b,arguments),f.toggleOption&&f.toggleOption({label:G,value:b.value})},K.name=f.name,K.checked=f.value.indexOf(b.value)!==-1);var je=$()((s={},(0,x.Z)(s,"".concat(M,"-wrapper"),!0),(0,x.Z)(s,"".concat(M,"-rtl"),ue==="rtl"),(0,x.Z)(s,"".concat(M,"-wrapper-checked"),K.checked),(0,x.Z)(s,"".concat(M,"-wrapper-disabled"),de),(0,x.Z)(s,"".concat(M,"-wrapper-in-form-item"),Ae),s),le),fe=$()((0,x.Z)({},"".concat(M,"-indeterminate"),ye)),Ee=ye?"mixed":void 0;return a.createElement("label",{className:je,style:Ce,onMouseEnter:z,onMouseLeave:E},a.createElement(Ze.Z,(0,d.Z)({"aria-checked":Ee},K,{prefixCls:M,className:fe,disabled:de,ref:A})),G!==void 0&&a.createElement("span",null,G))},ft=a.forwardRef(xt),Le=ft,me=Le;me.Group=ct,me.__ANT_CHECKBOX=!0;var ht=me,_=t(71577),Q=t(46402),r=t(6226),re=t(86856),Ia=t(61460),$t=t(31567),w=t(32674),Ft=t(64146),_t=t(53651),ea=t(27628),e=t(85893),ta=t(30381),se=t(44431),aa=t(72401),Ie=aa.Drip,Bt=t(31297),Dt=Bt.addressExc,Nt=Bt.abiExc,Zt=t(91554),na=Zt.addressXcfx,ra=Zt.abiXcfx,sa=t(87654),ge=sa.formatNumber,la="https://www.artii.top";function Ge(v){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:24;return new Promise(function(A){setTimeout(function(){A(q().get(la+"/api/v1/statistics?condition="+v+"&offset=0&limit="+i))},1e3)})}function ia(){var v=(0,a.useState)("00.0000"),i=m()(v,2),A=i[0],s=i[1],g=(0,a.useState)("00.0000"),le=m()(g,2),G=le[0],be=le[1],ye=(0,a.useState)(""),Ce=m()(ye,2),z=Ce[0],E=Ce[1],ie=(0,a.useState)(""),oe=m()(ie,2),Oe=oe[0],b=oe[1],ce=(0,a.useState)(""),H=m()(ce,2),ue=H[0],f=H[1],Se=(0,a.useState)("--"),Ae=m()(Se,2),ke=Ae[0],de=Ae[1],xe=(0,a.useState)("--"),M=m()(xe,2),K=M[0],je=M[1],fe=(0,a.useState)("--"),Ee=m()(fe,2),ze=Ee[0],pt=Ee[1],P=(0,a.useState)("--"),F=m()(P,2),ee=F[0],te=F[1],He=(0,a.useState)("--"),Fe=m()(He,2),We=Fe[0],vt=Fe[1],mt=(0,a.useState)("--"),Be=m()(mt,2),Oa=Be[0],oa=Be[1],ca=(0,a.useState)("--"),wt=m()(ca,2),ua=wt[0],da=wt[1],xa=(0,a.useState)(0),Pt=m()(xa,2),fa=Pt[0],ha=Pt[1],pa=(0,a.useState)("0.0000"),It=m()(pa,2),va=It[0],Ot=It[1],ma=(0,a.useState)(0),Tt=m()(ma,2),Te=Tt[0],ga=Tt[1],ba=(0,a.useState)(0),Mt=m()(ba,2),ya=Mt[0],Kt=Mt[1],Ca=(0,a.useState)("0.00"),Rt=m()(Ca,2),Sa=Rt[0],Aa=Rt[1],he=[""],W=[],Ut=new ea.r("https://evmtestnet.confluxrpc.com"),Ye=new Ft.CH(Dt,Nt,Ut),ka=new _t.vU(Nt),ja=new Ft.CH(na,ra,Ut),Xt=(0,w.$z)(),Ta=(0,a.memo)(function(){var n=(0,w.mA)(),k=(0,w.xx)(),h=(0,w.KQ)(),p=(0,a.useCallback)(S()(c()().mark(function l(){return c()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(n){o.next=2;break}return o.abrupt("return");case 2:setTimeout(function(){St(),document.getElementById("spinner").style.display="none"},2e3);case 3:case"end":return o.stop()}},l)})),[n]);return(0,e.jsx)("div",{onClick:p,children:(n==null?void 0:n.slice(0,7))+"..."+(n==null?void 0:n.slice(n.length-5,n.length))})}),Ea=(0,a.memo)(function(){var n=(0,w.mA)(),k=(0,w.xx)(),h=(0,w.KQ)(),p=(0,a.useCallback)(S()(c()().mark(function l(){var B,o;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(n){y.next=2;break}return y.abrupt("return");case 2:if(z){y.next=4;break}return y.abrupt("return");case 4:return B=ka.encodeFunctionData("CFX_exchange_XCFX",[]),y.next=7,(0,w.T7)({to:Dt,data:B,value:w.fb.fromStandardUnit(z).toHexMinUnit()});case 7:o=y.sent,document.getElementById("spinner").style.display="flex",setTimeout(function(){St(),document.getElementById("spinner").style.display="none"},1e4);case 10:case"end":return y.stop()}},l)})),[n]);return(0,e.jsx)(_.Z,{onClick:p,style:{background:"#161621",border:"0",color:"#E29346"},shape:"round",size:"large",block:!0,ghost:!0,className:u.stake_btn,children:"Stake now"})});function Ma(){return gt.apply(this,arguments)}function gt(){return gt=S()(c()().mark(function n(){return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(Xt!=="not-active"){h.next=3;break}return(0,w.$j)(),h.abrupt("return");case 3:case"end":return h.stop()}},n)})),gt.apply(this,arguments)}var Je=(0,w.mA)(),Qt=(0,$t.$)(),Y=Qt.t,Ka=Qt.i18n,Vt,Fa=(0,a.useState)("none"),Lt=m()(Fa,2),Ba=Lt[0],Gt=Lt[1],Da=function(){Gt("none"),localStorage.setItem("DISCLAIMER","confirm")},Na=function(k){};function Za(n){return bt.apply(this,arguments)}function bt(){return bt=S()(c()().mark(function n(k){var h,p,l;return c()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(Xt!=="not-active"){o.next=3;break}return(0,w.$j)(),o.abrupt("return");case 3:if(h=k.target.value,p=/^[0-9]+.?[0-9]*$/,p.test(h)){o.next=7;break}return o.abrupt("return");case 7:return E(h),o.next=10,Ye.CFX_exchange_estim(w.fb.fromStandardUnit(h).toHexMinUnit());case 10:l=o.sent,b(parseFloat(Ie(l).toCFX()).toFixed(2));case 12:case"end":return o.stop()}},n)})),bt.apply(this,arguments)}function wa(){return yt.apply(this,arguments)}function yt(){return yt=S()(c()().mark(function n(){var k,h;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(Je){l.next=3;break}return(0,w.$j)(),l.abrupt("return");case 3:if(!(+A<1)){l.next=8;break}E(se(0)),b(se(0)),l.next=14;break;case 8:return k=parseInt(((+A-1)*1e4).toString()),E(parseFloat((k/1e4).toString()).toFixed(4)),l.next=12,Ye.CFX_exchange_estim(k);case 12:h=l.sent,b(parseFloat((h.toNumber()/1e4).toString()).toFixed(2));case 14:case"end":return l.stop()}},n)})),yt.apply(this,arguments)}function Me(){return Ct.apply(this,arguments)}function Ct(){return Ct=S()(c()().mark(function n(){var k,h,p,l,B,o,V,y,pe,D=arguments;return c()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return k=D.length>0&&D[0]!==void 0?D[0]:1,h=D.length>1&&D[1]!==void 0?D[1]:"",p=D.length>2&&D[2]!==void 0?D[2]:0,l=D.length>3&&D[3]!==void 0?D[3]:24,p===1&&(l=168),p===2&&(l=720),p===3&&(l=8640),p===4&&(l=8640*5),U.next=10,Ge("",l);case 10:if(B=U.sent,W=[],he=[],o=[],V=2,B.data.rows.length===l?V=parseInt((B.data.rows.length/12).toString()):V=parseInt((l/12).toString()),B.data.rows.forEach(function(O,L){console.log(V),p===0&&o.push(O),p===1&&L%7===0&&o.push(O),p===2&&L%30===0&&o.push(O),p===3&&L%V===0&&o.push(O),p===4&&L%V===0&&o.push(O)}),Ot(parseFloat((o[0].xcfxvalues*+ue).toString()).toFixed(4)),k!==3){U.next=27;break}return ga(p),o.reverse().forEach(function(O,L){var qe=parseFloat((+O.xcfxvalues*+O.price).toString()).toFixed(4),$e=O.xcfxvalues,Ke=$e*+qe,Re=O.created_at.toString(),De={date:Re,value:Ke};De.value=Ke,De.date=Re,he.push(L),W.push(De)}),y=Ne.JE(document.getElementById("main")),pe=y.getOption(),pe.series[0].data=W,pe.xAxis.data=he,y.setOption(pe),U.abrupt("return");case 27:case"end":return U.stop()}},n)})),Ct.apply(this,arguments)}(0,a.useEffect)(function(){window.scrollTo(0,0),console.log(localStorage.getItem("DISCLAIMER")),(!localStorage.getItem("DISCLAIMER")||localStorage.getItem("DISCLAIMER")!=="confirm")&&Gt("block"),St();var n=setInterval(function(){Pa()},14e3);return function(){return clearInterval(n)}},[]);function Pa(){q().get("https://evmtestnet.confluxscan.io/v1/homeDashboard").then(function(){var n=S()(c()().mark(function k(h){return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:Kt(h.data.result.blockNumber);case 1:case"end":return l.stop()}},k)}));return function(k){return n.apply(this,arguments)}}())}function St(){return At.apply(this,arguments)}function At(){return At=S()(c()().mark(function n(){return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:S()(c()().mark(function p(){var l,B,o,V,y,pe,D,kt,U,O,L,qe,$e,Ke,Re,De,zt,Ht,Wt,Yt,jt,Jt,qt;return c()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Ye.Summary();case 2:return l=C.sent,B=Ie(l.xcfxvalues).toCFX(),be(B),o=Ie(l.totalxcfxs).toCFX(),vt(parseFloat((B*o).toString()).toFixed(4)),C.next=9,q().get("https://www.confluxscan.net/stat/tokens/by-address?address=cfx%3Aacg158kvr8zanb1bs048ryb6rtrhr283ma70vz70tx&fields=iconUrl&fields=transferCount&fields=price&fields=totalPrice&fields=quoteUrl");case 9:return V=C.sent,y=V.data.data,pe=new se(o),D=new se(B),kt=pe.multipliedBy(D),U=se(kt*y.price).toFixed(2),console.log(U),pt(U),O=y.holderCount,oa(O),ha(y.price),L=parseFloat((+B*+y.price).toString()).toFixed(4),f(L),C.next=24,Ge("",1);case 24:return qe=C.sent,$e=parseFloat(qe.data.rows[0].apy.toString()).toFixed(4),te($e),q().get("https://evmtestnet.confluxscan.io/v1/homeDashboard").then(function(){var N=S()(c()().mark(function Z(I){return c()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:Kt(I.data.result.blockNumber);case 1:case"end":return R.stop()}},Z)}));return function(Z){return N.apply(this,arguments)}}()),W=[{value:1.5067,date:"Mon"},{value:1.5467,date:"Tue"},{value:1.6067,date:"Wed"},{value:1.7867,date:"Thu"},{value:1.0475,date:"Fri"},{value:1.8067,date:"Sat"},{value:1.9067,date:"Sun"}],he=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],C.next=32,Ge("");case 32:return Ke=C.sent,W=[],he=[],Ke.data.rows.reverse().forEach(function(N,Z){var I=N.xcfxvalues,J=new se(I);Z%2;var R=+J.toString()*+N.price,_e=N.created_at.toString(),Et={date:_e,value:R};Et.value=R,Et.date=_e,W.push(Et),he.push("")}),Re=W.length-1,Ot(parseFloat(W[Re].value.toString()).toFixed(4)),De={backgroundColor:"rgba(255,255,255,0)",tooltip:{trigger:"axis",show:!0,backgroundColor:"#000",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(126,199,255,1)"},{offset:.5,color:"rgba(126,199,255,1)"},{offset:1,color:"rgba(126,199,255,1)"}],global:!1}}},formatter:function(Z){var I="";return Z.forEach(function(J){I+='<div style="display:inline-block;padding:0 5px;border-radius:10px;height:30px;width:100%;background-color:#000;color:#fff"><div style="font-size:12px;color:#999">xCFX</div><span style="font-size:12px;color:#ccc">'+ta(J.data.date).format("YYYY-MM-DD HH:00:00")+"</span><br>"+J.value+"</span>"}),I}},legend:{align:"left",right:"10%",top:"10%",type:"plain",textStyle:{color:"#7ec7ff",fontSize:14},itemGap:50,itemWidth:100,itemHeight:10},grid:{top:"3%",left:"5%",right:"10%",bottom:"15%"},xAxis:[{type:"category",boundaryGap:!1,axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:"rgba(25,163,223,0)"}},axisTick:{show:!1},data:he}],yAxis:[{type:"value",min:function(Z){return Z.min},splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.4)"}},axisLine:{show:!1,lineStyle:{color:"#233653"}},position:"right",axisLabel:{show:!0,color:"#ffffff",padding:0,formatter:function(Z){return"$"+Z.toFixed(4)}},axisTick:{show:!0}}],series:[{type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:[4,4],smooth:!1,lineStyle:{width:3,color:"#EAB966",borderColor:"rgba(0,0,0,.0)"},itemStyle:{color:"rgba(234, 185, 102, .9)",borderColor:"#646ace",borderWidth:0},areaStyle:{color:new Ne.Q.o(0,0,0,1,[{offset:0,color:"#DD7C32"},{offset:1,color:"rgba(234, 181, 98, 0.1)"}],!1),shadowColor:"rgba(255, 255, 255, 0.5)",shadowBlur:0},data:W}]},C.next=41,Ge("",8640);case 41:if(zt=C.sent,zt.data.rows.reverse().forEach(function(N,Z){var I=364,J=1+N.apy/365,R=Math.pow(J,I),_e=(N.apy*R*100).toFixed(3);Aa(_e.toString())}),!Je){C.next=58;break}return C.next=46,Ye.espacebalanceof(Je);case 46:return Ht=C.sent,Wt=Ie(Ht).toCFX(),s(parseFloat(Wt.toString()).toFixed(2)),C.next=51,ja.balanceOf(Je);case 51:Yt=C.sent,jt=parseFloat(Ie(Yt).toCFX().toString()).toFixed(2),de(jt),Jt=new se(L),qt=Jt.times(jt),je(parseFloat(qt).toFixed(4)),console.log(K);case 58:setTimeout(S()(c()().mark(function N(){return c()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:try{Vt=Ne.S1(document.getElementById("main")),Vt.setOption(De)}catch{}case 1:case"end":return I.stop()}},N)})),500),q().get(" https://evmtestnet.confluxscan.net/stat/tokens/by-address?address=0x3e3608c5145e6bb303947e77d329811f14e76d26&fields=iconUrl&fields=transferCount&fields=price&fields=totalPrice&fields=quoteUrl").then(function(){var N=S()(c()().mark(function Z(I){return c()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:da(I.data.result.holderCount);case 1:case"end":return R.stop()}},Z)}));return function(Z){return N.apply(this,arguments)}}());case 60:case"end":return C.stop()}},p)}))();case 1:case"end":return h.stop()}},n)})),At.apply(this,arguments)}return(0,e.jsxs)("div",{className:u.stake,children:[(0,e.jsx)(ve.q,{children:(0,e.jsx)("link",{rel:"stylesheet",href:"style.css"})}),(0,e.jsxs)("div",{style:{display:Ba},children:[(0,e.jsx)("div",{className:"ant-modal-mask"}),(0,e.jsx)("div",{role:"dialog","aria-modal":"true",className:"ant-modal ant-modal-confirm ant-modal-confirm-info",style:{zIndex:"100000",width:"100%",top:"5%",position:"absolute",borderRadius:"20px"},children:(0,e.jsx)("div",{className:"ant-modal-content",style:{backgroundColor:"#393942",width:"60%",maxWidth:"1300px",margin:"0 auto",borderRadius:"20px"},children:(0,e.jsx)("div",{className:"ant-modal-body",style:{backgroundColor:"#393942",borderRadius:"20px"},children:(0,e.jsxs)("div",{className:"ant-modal-confirm-body-wrapper",children:[(0,e.jsx)("div",{className:"ant-modal-confirm-body",children:(0,e.jsx)("div",{className:"disclaimer",children:(0,e.jsxs)("div",{style:{padding:"0 40px"},children:[(0,e.jsx)("h4",{style:{margin:"20px 0 30px",fontSize:"28px"},children:Y("stake.confirm_tit1")}),(0,e.jsx)("h4",{style:{margin:"20px 0",fontSize:"24px"},children:Y("stake.confirm_tit2")}),(0,e.jsx)("p",{style:{color:"#fff",fontSize:"18px",lineHeight:"26px"},children:Y("stake.confirm_txt1")}),(0,e.jsx)("p",{style:{color:"#fff",fontSize:"18px",lineHeight:"26px"},children:Y("stake.confirm_txt2")}),(0,e.jsx)("p",{style:{color:"#fff",fontSize:"18px",lineHeight:"26px"},children:Y("stake.confirm_txt3")}),(0,e.jsx)(ht,{onChange:Na,checked:!0,style:{backgroundColor:"EAB966",lineHeight:"20px",color:"#fff",fontSize:"36px",margin:"5px 0 5px"},children:(0,e.jsx)("span",{style:{lineHeight:"20px",fontSize:"16px"},children:Y("stake.confirm_txt4")})})]})})}),(0,e.jsx)("div",{className:"ant-modal-confirm-btns",children:(0,e.jsx)(_.Z,{onClick:Da,block:!0,type:"primary",style:{backgroundColor:"#EAB966",border:"0",width:"60%",marginRight:"21%",fontSize:"25px",height:"56px",borderRadius:"28px",color:"#161621"},children:Y("stake.btn_confirm")})})]})})})})]}),(0,e.jsxs)("div",{className:T.Z.inner,style:{backgroundColor:"#171520"},children:[(0,e.jsxs)("div",{className:u.sub_nav2,children:[(0,e.jsx)(Xe.rU,{to:"/data/stake",style:{color:"#EAB764"},children:Y("stake.Stake_CFX")}),(0,e.jsx)(Xe.rU,{to:"/data/unstake",style:{color:"#FFF"},children:Y("stake.unStake_CFX")})]}),(0,e.jsxs)(Q.Z,{gutter:32,className:u.brief,children:[(0,e.jsx)(r.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,e.jsxs)("div",{className:u.box1,children:[(0,e.jsxs)(Q.Z,{children:[(0,e.jsxs)(r.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:["Available to stake ",(0,e.jsx)("div",{className:u.board}),(0,e.jsxs)("b",{children:[ge(parseFloat(A).toFixed(2))," CFX"]})]}),(0,e.jsx)(r.Z,{xs:24,sm:24,md:12,lg:12,xl:12,style:{textAlign:"right"},children:(0,e.jsx)(_.Z,{target:"_blank",href:"https://app.swappi.io/#/swap",shape:"round",style:{background:"#161621",border:"0",lineHeight:"50px",color:"#E29346",height:"50px",width:"150px",fontSize:"24px"},children:"Get CFX"})})]}),(0,e.jsx)("div",{className:u.line}),(0,e.jsxs)(Q.Z,{children:[(0,e.jsxs)(r.Z,{xs:24,sm:24,md:16,lg:16,xl:16,children:["xCFX Balance",(0,e.jsx)("br",{}),(0,e.jsxs)("b",{children:[ge(ke)," xCFX"]}),(0,e.jsx)("span",{style:{display:"none"},className:u.plus,children:"+"})]}),(0,e.jsxs)(r.Z,{xs:24,sm:24,md:5,lg:5,xl:5,children:["CFX APR"," ",(0,e.jsxs)("b",{style:{fontWeight:"normal"},children:[parseFloat((+ee*100).toString()).toFixed(2),"%"]})]}),(0,e.jsx)(r.Z,{xs:24,sm:24,md:7,lg:7,xl:7,style:{textAlign:"right"},children:(0,e.jsx)(_.Z,{style:{background:"#EBB974",borderRadius:"8px",border:"0",color:"#161621",height:"50px",width:"150px",marginTop:"20px",fontSize:"24px",display:"none"},children:"Lock time"})})]}),(0,e.jsx)("div",{className:u.line}),(0,e.jsxs)(Q.Z,{style:{background:"#EBB974",borderRadius:"13px",padding:"15px 10px",margin:"20px 0"},children:[(0,e.jsx)(r.Z,{xs:10,sm:10,md:4,lg:4,xl:4,children:(0,e.jsx)("img",{className:T.Z.coin1,src:ae,height:"80px"})}),(0,e.jsxs)(r.Z,{xs:14,sm:14,md:10,lg:10,xl:10,children:["Amount ",(0,e.jsx)("br",{}),(0,e.jsxs)("b",{children:[(0,e.jsx)(re.Z,{placeholder:"0",onChange:Za,type:"number",value:z,style:{display:"inline-block",backgroundColor:"transparent",width:"130px",border:"none",fontFamily:"Univa Nova Bold",padding:0,fontSize:"32px",outline:"none",boxShadow:"0"}}),"CFX"]})]}),(0,e.jsx)(r.Z,{xs:24,sm:24,md:10,lg:10,xl:10,style:{textAlign:"right"},children:(0,e.jsx)(_.Z,{style:{background:"rgba(22, 22, 33, 0.4)",borderRadius:"8px",border:"0",color:"#ffffff",height:"60px",width:"120px",fontSize:"24px",margin:"15px 15px 0 0"},onClick:wa,children:"MAX"})})]}),(0,e.jsx)(Ea,{})]})}),(0,e.jsx)(r.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,e.jsxs)("div",{className:u.box2,children:[(0,e.jsx)("img",{className:T.Z.coin1,src:X,height:"40px"}),(0,e.jsx)("div",{className:u.board2}),"xCFX $",va," ",(0,e.jsx)("span",{className:u.tip}),(0,e.jsx)("div",{className:T.Z.main5,style:{height:"340px",width:"100%",marginTop:"70px"},id:"main"}),(0,e.jsx)("div",{className:u.tabbtn,style:Te===0?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){Me(3,"",0)},children:"24h"}),(0,e.jsx)("div",{className:u.tabbtn,style:Te===1?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){Me(3,"weeks",1)},children:"7d"}),(0,e.jsx)("div",{className:u.tabbtn,style:Te===2?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){Me(3,"months",2)},children:"30d"}),(0,e.jsx)("div",{className:u.tabbtn,style:Te===3?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){Me(3,"years",3)},children:"1y"}),(0,e.jsx)("div",{className:u.tabbtn,style:Te===4?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){Me(3,"5years",4)},children:"5y"})]})})]}),(0,e.jsxs)(Q.Z,{gutter:32,children:[(0,e.jsx)(r.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,e.jsx)("div",{className:u.box3,children:(0,e.jsxs)(Q.Z,{gutter:32,children:[(0,e.jsx)(r.Z,{span:12,children:"You will receive"}),(0,e.jsxs)(r.Z,{span:12,style:{textAlign:"right"},children:[Oe," xCFX"]}),(0,e.jsx)(r.Z,{span:12,children:"Exchange Rate"}),(0,e.jsxs)(r.Z,{span:12,style:{textAlign:"right"},children:["1xCFX= ",parseFloat(G).toFixed(4),"CFX"]}),(0,e.jsx)(r.Z,{span:12,children:"Nucleon Service Fee"}),(0,e.jsx)(r.Z,{span:12,style:{textAlign:"right"},children:"10%"}),(0,e.jsx)(r.Z,{span:12,children:"Current Block Number"}),(0,e.jsxs)(r.Z,{span:12,style:{textAlign:"right"},children:[(0,e.jsxs)("div",{id:"spinner2",className:"spinner-box2",style:{transform:"scale(15%,15%)",position:"absolute",top:"-34px",right:"110px"},children:[(0,e.jsx)("div",{className:"configure-border-1",children:(0,e.jsx)("div",{className:"configure-core"})}),(0,e.jsx)("div",{className:"configure-border-2",children:(0,e.jsx)("div",{className:"configure-core"})})]}),ge(ya.toString())]})]})})}),(0,e.jsx)(r.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,e.jsxs)("div",{className:u.box3,children:["Account Balance",(0,e.jsxs)(Q.Z,{gutter:32,style:{marginTop:"30px"},children:[(0,e.jsxs)(r.Z,{span:6,children:[(0,e.jsx)("span",{className:u.mintxt,children:"xCFX Value"}),(0,e.jsxs)("div",{children:["$",ue]})]}),(0,e.jsx)(r.Z,{span:10,children:(0,e.jsxs)("div",{className:u.vbar,children:[(0,e.jsxs)("b",{children:["$",K]}),(0,e.jsx)("div",{className:u.mintxt,style:{color:"#418A55"},children:"\xA0"})]})}),(0,e.jsxs)(r.Z,{span:8,style:{textAlign:"right"},children:[(0,e.jsx)("span",{className:u.mintxt,children:"Share of the Pool"}),(0,e.jsx)("div",{children:+parseFloat(K).toFixed(0)/+parseFloat(ze).toFixed(0)<1e-4?"> .1%":"~ "+(+parseFloat(K).toFixed(0)/+parseFloat(ze).toFixed(0)*100).toFixed(2)+"%"})]})]})]})})]}),(0,e.jsxs)("div",{style:{top:"100px",position:"relative"},children:[(0,e.jsx)("h4",{children:"CFX statistics"}),(0,e.jsx)("div",{className:u.box5,children:(0,e.jsxs)(Q.Z,{gutter:32,children:[(0,e.jsx)(r.Z,{span:12,children:"Annual percentage rate"}),(0,e.jsxs)(r.Z,{span:12,style:{textAlign:"right"},children:[Sa,"%"]}),(0,e.jsx)(r.Z,{span:12,children:"Total staked with CFX"}),(0,e.jsx)(r.Z,{span:12,style:{textAlign:"right"},children:ge(parseFloat(We).toFixed(3))}),(0,e.jsx)(r.Z,{span:12,children:"Stakers"}),(0,e.jsx)(r.Z,{span:12,style:{textAlign:"right"},children:ge(ua)}),(0,e.jsx)(r.Z,{span:12,children:"xCFX market cap"}),(0,e.jsxs)(r.Z,{span:12,style:{textAlign:"right"},children:["$",ge(parseFloat((+We*+fa).toString()).toFixed(3))]})]})}),(0,e.jsx)("h4",{children:"About"}),(0,e.jsxs)("div",{className:u.box5,children:[(0,e.jsx)("p",{children:"Nucleon is a liquid staking solution for Conflux PoS backed by industry-leading staking providers. Nucleon lets users stake their CFX by exchange CFX to xCFX - without locking assets or maintaining infrastructure."}),(0,e.jsx)("p",{children:"The value in xCFX will be automatically compounded and the xCFX value expands automatically"}),(0,e.jsx)("p",{children:"Our goal is to solve the problems associated with Conflux PoS staking - illiquidity, immovability and accessibility - making staked CFX liquid and allowing for participation with any amount of CFX to improve security of the Conflux network."})]})]})]})]})}},50132:function(et,Ue,t){var tt=t(87462),c=t(4942),at=t(91),S=t(1413),nt=t(15671),m=t(43144),a=t(32531),Xe=t(51630),ve=t(67294),Ne=t(94184),rt=t.n(Ne),q=function(T){(0,a.Z)(ae,T);var u=(0,Xe.Z)(ae);function ae(X){var x;(0,nt.Z)(this,ae),x=u.call(this,X),x.handleChange=function(j){var $=x.props,Ze=$.disabled,ne=$.onChange;Ze||("checked"in x.props||x.setState({checked:j.target.checked}),ne&&ne({target:(0,S.Z)((0,S.Z)({},x.props),{},{checked:j.target.checked}),stopPropagation:function(){j.stopPropagation()},preventDefault:function(){j.preventDefault()},nativeEvent:j.nativeEvent}))},x.saveInput=function(j){x.input=j};var d="checked"in X?X.checked:X.defaultChecked;return x.state={checked:d},x}return(0,m.Z)(ae,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var x,d=this.props,j=d.prefixCls,$=d.className,Ze=d.style,ne=d.name,we=d.id,Qe=d.type,Pe=d.disabled,st=d.readOnly,lt=d.tabIndex,Ve=d.onClick,it=d.onFocus,ot=d.onBlur,ct=d.onKeyDown,ut=d.onKeyPress,dt=d.onKeyUp,xt=d.autoFocus,ft=d.value,Le=d.required,me=(0,at.Z)(d,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),ht=Object.keys(me).reduce(function(r,re){return(re.substr(0,5)==="aria-"||re.substr(0,5)==="data-"||re==="role")&&(r[re]=me[re]),r},{}),_=this.state.checked,Q=rt()(j,$,(x={},(0,c.Z)(x,"".concat(j,"-checked"),_),(0,c.Z)(x,"".concat(j,"-disabled"),Pe),x));return ve.createElement("span",{className:Q,style:Ze},ve.createElement("input",(0,tt.Z)({name:ne,id:we,type:Qe,required:Le,readOnly:st,disabled:Pe,tabIndex:lt,className:"".concat(j,"-input"),checked:!!_,onClick:Ve,onFocus:it,onBlur:ot,onKeyUp:dt,onKeyDown:ct,onKeyPress:ut,onChange:this.handleChange,autoFocus:xt,ref:this.saveInput,value:ft},ht)),ve.createElement("span",{className:"".concat(j,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(x,d){return"checked"in x?(0,S.Z)((0,S.Z)({},d),{},{checked:x.checked}):null}}]),ae}(ve.Component);q.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},Ue.Z=q},39659:function(et){et.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABdCAYAAAC1vgh1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADUlJREFUeNrsXQlsVMcZHu/hK/jCMYfB3FcohBCgJFVEKVCJklqiGNOiBEgFFKRQKAEC5IJAuMQVQCBCgHAZhEOACBIogkDBIlHCUYgpUUpbDLapbYoPsLG9Xrbf97IbOY5nvceb3bXzfmn0jn3vzcz/zX++ebNhDodDGBRcMhksMEAwyADBAMEgAwQDBIMMEEKLLN7eEBYWFpSGIp5hxeEsDx8+jDObzQmPHj1KstvtVovFwsHkwLkam81WhjYWRkZGluBcJUo1jh8Fqc2e8dTbYC2QIKBt1vLy8h5gbl/U+yyOB+B0B5TmbEoDtz/EPbnYfg2wvsL+eQDzDxz/D/sOAwQ3lJeXF52QkNAH9fwah79E6Y8Sq8Ojq00m078AyJfo85GoqKgsnCtUCUijAgFtMFdWVrbHiH8OTErH8WCcfsyD0e4r1aAfOahnN+r8tKCgIDslJeXhTxYEqJtkjNDF2B2B8jiKWSHzf8Qn9KcC20soS7Ozs0/179/f9pMAwWlkk2Bgx+B5s7HfLoCMl1EZ2vUpjPxyq9V6VQ81FbIgoD4LmP8M1MBKqJ6fh6CbfBdtXAabsR19LWlyIFRUVLTF/QtR5++wbR7Crrsd7fsC2yUREREnsG9vEiCUlZV1g5jvwO4zIaB6PKVilD/Dtd2PfteoAkG5KkBDTADgWQBwtJEBQEoA87dWV1fPLyoqilFViVJJwLMjqqqqpmL7F2eQ1ViJkffHkIgZ6H9Bo1FHlAAA8Cds1znTDY2d6M4egVMxAcFkiZ4gmBSpoDC6n/B+ljYRAFwD9reQhs3Yxur5YJMKAOAFDcfuCoycBNG0iPxKwwBbpCcQFr1babPZBoL5GU0QgO95hr5NQz9rAMRcX91XZZJQXFwcb7fblzZhAFxkRj//yKAzpNQRk3D0HrD7XKA4UV5eLrZs2SIePHgQDCCaY7CtQ7+TQwYE2IFUbOagWAMS0trt4p133hErVqwQb7zxhsCoDAYQ/SorK1cUFhY2CzoIGA0tMCoWiO/SzwGRgMWLF4vMzEzt+JNPPtGAQFAYDCBGxcTEpAU1WHO6o8txfk4gomHEHuLNN98UBw8e/JEf/vzzz4s1a9YIi8USaCD+jXb1j4+PLw5WnNAJZUKgAFi2bJk4dOhQvR2kRMyfP5+qMdAgdLBarWlBU0eQgnSTyZSkupcI/MTrr78u9uzZo+3LiBIyc+ZMv2wEAM71lo/QBFNwX/OAg4COdkDlk5iiUC0BtAGHDx/2SMRPnz4tVq5c6Y/X5MsslKchgekBBYG2ADTSqY6UAjB37lyxa9cuj3UsPaedO3dqxpr7PjC0hS+8NJvNU0pKShICKQmRUAt/UGkLqqurxerVq8WRI0ek10RFRUl/4310Ywmkl1SEct+HgfkzxErPBgwEdGwQbMGTqgDgqKcXtG3bNuk1PXv2FB999JHo0qWL9BpK0KxZs7wFYgzqv+9Ds8NxH2eLWJSDwOgYJQ0lUgUANptNrFq1SmOwjMj4jRs3iu7du4v169e7BeLYsWOaV3X/vsd8nQ+V1NrH5g9F8epen+IEBEWJ8MU5q62j3gDQq3n77bfFgQMHpDagX79+YsOGDaJly5bfn8vNzRVTp04V169fl7Z7xIgRmsGOiIhocJz5oWb5GnQi1OQupXECAOiKTiWrkAAy1x0AHPFkZG0ASG3btv0RMHXVG+MISoQHzPHHzjHL2lu5OoIXQAmI0BsAxgHvvfeelEl9+vQRe/fuFe3bt6/3944dO2oAtmvXTlrP7t27NW+LRl8hdVMOAryiHnob4XXr1rm1ASkpKZoNSExMdPus5ORksXnzZqlEkFgP0xsEXhF1vn37dpQyEDIzMzlNMUXPOICZUDJORn379tWSda1be2bvaKwZWXfo0EF6zfvvvy/eeustJUBgULWKi4tLUQZCeno6PaIuejSWgdT27dvF1q1bpSqIqoe6vkUL7+KnTp06ac9NSJDHTh9++KEWhyj4ljse7nt7leqIILTTA4Dly5eLtWvXSpnQo0cPsWPHDqkE3Lt3T/OkSktLpTYiIyNDKhGsl0AxstZZImA2za1VgsDZE9H+tpKu5AcffCBNK1CnU0pkRpauLBN1DMZeffVVaZ6IqomMlgFJIPbv3y91bf2gTspAqKioYG8e10MSZBLASHjfvn1S41pUVCQmT54ssrKytONTp05pgFAyZBJBG9C5c2cpEApUUrIyEKDr4lXmi7p166a5qTI3lFEvR/7nn3/+AyZ+9tlnmuspS0888cQTmgcWHx8vAkThykBAIKLsHTIZxRQE3cz6iLp/9uzZ4ty5c/X+zhS2OzeXz9+0aZNISkoKBAhhykCoAalocZs2bbRkXdeuXev9ncHVjBkzxMmTJ6WqY+jQoWLMmDFu6xk4cKBmawIAhEOlJBR7U4EnRO/FXYBFXf/KK69IJYA0ZMgQLZ3hyftl2hyqplatWilDAAFttTIQoqOj8zES7+nmQsCfpwSQMTIbQAlgJlRGw4cP11zd2FjPZyZSIgh8QxG4rwTb+V9lIOTl5dkgDbrMtqLx5eiV+fG0AXxxf/78eekzqIIWLVokmjXzfupP7969NYlQBMQ/PdYu3rpmBQUFjyEk/xt2+/nTQqaeaV5kANAGjBs3Tly4cEH6jGHDhmmGvKHUNF1agiR7C5edna397i7N4a3pxEBNRbuOK5EE6O0KVHDB31Yy9SzrtGtukQwAvhsYNGiQ9uKnIQBu3bolXnrpJbF06VLp5LBevXrpCYBwqmuPJcGXWQUOMClX1dp5tAHz5s0Tx48flwKQmpqqzb5oSAXl5+drAOTk5IhvvvlG3L17V8sVwa6pdYscjgIMDo+nzfiays5R0XimIphPkgFAGjBggJb9bAgAqE0xZcoUDQAXnThxQgPP3bwlnYxyHgZLlTJJcIJwzWw2PwDizfQEYNq0aeLMmTPSawYPHqxlVBsayXfu3BEvvPDCDwBwEVPitDcE22pVE3cCgKtegeZLJWDCfwDALb0b7276istbamhmHWOKl19+uV4AXMT0NkarwhDh0SXlIIC4ptB5vQGgp/Piiy9KP068fPmySEtL03R9fUTGjx07Vly5ckWmJrS0B91eSLIqKShCX84rB4GfCKETGdjVdeYtmfTaa69psyJkQNy+fVsb6YWFhT84z+M5c+aIGzduSA16enq6mDhxojIAaJPRh8PUiIGQBKYHvsLm7z7mVLbKfqTLuWTJEjF+/HgpEFevXhWTJk0SN2/e/N4NZUxx8eJFKQCcDsMXQOHh6j4mRT1cZSzT26//TX5UWM4KfbmVa1u4uyAmJkZLSzMdIaNr165pb8QIBCVDJgEkqjDOwlNliGsZg2zn4PSaId4yv7ZH0x73Z+FcW1UuKxnN2dgyoqvqbvY1X/4w+adSApxkAy9mwWnZUCteUCsJTmOaAx24hoNARa9orOlKMkMqI3cA0EhTAgIAAOkSZ935ZAt1EMFMIF6oqmdUIUxPjB492uMlHVw2YOHChcpVUC07twn1lgYFBKCfD2k4IHR+x1Cb4uLiNIYyY+oJAC4JCOC3a7mRkZF/9dkr1MEjcMCj4QfkWSp7SdX07rvvilGjRrl1cekl0Y4oDMbq9r/SuYpNYdBAcDaEfvESlCrVQHBCL7/SrE8CRo4cqQViHsy61lMNZaBdR/1ZM0+34YKOn8SI2Ihdu8peU8Xw65u6QFACFixYECgj7PJ+ssV3C6n4NbtY1/WO8Kyoqqqq/dimqmYAU97Tp08XZ8+e1ZJ1BEBhJFxfX+/CKRkCF/lrN9cEHgSny/gUmPGx0GGqZENUXFysTYWnFMAwigASVxteBqlb5G4d7qCu/FVRUTEa123BblNc7aUGAGRgsE1PTEwsa0BaAmsT6hjQwxDVCd4mshoBcanODaWlpdMaAiBoNqHOKAirrq7+PbZcriyuCQDgwMDaHR0dPQ08uO8hD4InCa74ATqT0fRMf1faDQF6hH4crKmpmekpACEhCbVGgxmN/5XNZluJe/uIxrUuKvtbwgUVoWK3Yf+el30PDRBcxIwrNttRBotG8jcy4E0xPL3JkOhDvvwbScisEFzLWOfAjeRaGCtQykKc/1xk8Ay2vwEAB1X/HUwwVo0Ph8FmuDsPYv6UCL11UzlDYAdU6KaYmJhCP/samiDUjq4rKyvHYTvVaSuCraI425xvCpdDam/q1MfQBsHlxpaXl7ewWq0TsD8ZpVOAwUCVjhL06VPo/rVox2U9VU9j+08drircGowYi8PxOOYnuirnKvJTTS48ftxisexC+dKbGXNNEoTaxC/hk5KS2qJdv2Ai0PkvU3osicwp/V/jmccA9lGM+m+9dTl/MiDU6UQk7EYrGPAnTSbT06i7L06n4Dw/KGiG44g6S79xOTJ6NnzxzKDqDo6/xfYyDO0XkLYbALjc+J81P1QWNub8/PzwhO8+028DYJgOsdjtdq1RGOGMbDl1P6+qqqo4Njb2gVMCHEFqsxoQDNKfjD9ANUAwyADBAMEgAwQDBIMMEAwQDDJACEH6vwADAChac015WTE0AAAAAElFTkSuQmCC"}}]);
