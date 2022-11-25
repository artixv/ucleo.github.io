"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[562],{32351:function(_e,et,t){t.r(et),t.d(et,{default:function(){return ca}});var Nt=t(17061),f=t.n(Nt),Zt=t(17156),X=t.n(Zt),Bt=t(27424),S=t.n(Bt),a=t(67294),tt=t(20845),Dt=t(64593),Oe=t(83459),It=t(9669),be=t.n(It),je=t(80410),x={stake:"stake____9Qeo",sub_nav:"sub_nav____Ue83",sub_nav_sub:"sub_nav_sub___fG46u",account_box:"account_box___b_ScC",account:"account___yOlpy",yuan:"yuan___k40yF",sub_nav2:"sub_nav2___oelN5",line:"line___VSuRC",disclaimer:"disclaimer___J6FtU",box1:"box1___GagVs",box2:"box2___xmI3m",box3:"box3___ZvqmN",box5:"box5___dwLfc",stake_btn:"stake_btn___MRuGi",plus:"plus___WuwnK",board:"board___QKDpx",board2:"board2___jL7Sz",tabbtn:"tabbtn___fP7KK",vbar:"vbar___ANjRf",mintxt:"mintxt___gCDwf",tip:"tip___IIbb9","ant-modal-content":"ant-modal-content___x5m7K"},Tt=t(39659),Pt=t(2775),W=t(4942),Fe=t(87462),Ot=t(94184),Ee=t.n(Ot),Xt=t(91),we=t(1413),Kt=t(15671),Mt=t(43144),Rt=t(32531),Qt=t(51630),at=function(u){(0,Rt.Z)(h,u);var l=(0,Qt.Z)(h);function h(n){var r;(0,Kt.Z)(this,h),r=l.call(this,n),r.handleChange=function(p){var M=r.props,G=M.disabled,R=M.onChange;G||("checked"in r.props||r.setState({checked:p.target.checked}),R&&R({target:(0,we.Z)((0,we.Z)({},r.props),{},{checked:p.target.checked}),stopPropagation:function(){p.stopPropagation()},preventDefault:function(){p.preventDefault()},nativeEvent:p.nativeEvent}))},r.saveInput=function(p){r.input=p};var o="checked"in n?n.checked:n.defaultChecked;return r.state={checked:o},r}return(0,Mt.Z)(h,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var r,o=this.props,p=o.prefixCls,M=o.className,G=o.style,R=o.name,P=o.id,k=o.type,z=o.disabled,q=o.readOnly,fe=o.tabIndex,b=o.onClick,$=o.onFocus,Q=o.onBlur,_=o.onKeyDown,d=o.onKeyPress,se=o.onKeyUp,le=o.autoFocus,ie=o.value,ee=o.required,H=(0,Xt.Z)(o,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),B=Object.keys(H).reduce(function(L,K){return(K.substr(0,5)==="aria-"||K.substr(0,5)==="data-"||K==="role")&&(L[K]=H[K]),L},{}),F=this.state.checked,oe=Ee()(p,M,(r={},(0,W.Z)(r,"".concat(p,"-checked"),F),(0,W.Z)(r,"".concat(p,"-disabled"),z),r));return a.createElement("span",{className:oe,style:G},a.createElement("input",(0,Fe.Z)({name:R,id:P,type:k,required:ee,readOnly:q,disabled:z,tabIndex:fe,className:"".concat(p,"-input"),checked:!!F,onClick:b,onFocus:$,onBlur:Q,onKeyUp:se,onKeyDown:_,onKeyPress:d,onChange:this.handleChange,autoFocus:le,ref:this.saveInput,value:ie},B)),a.createElement("span",{className:"".concat(p,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(r,o){return"checked"in r?(0,we.Z)((0,we.Z)({},o),{},{checked:r.checked}):null}}]),h}(a.Component);at.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var Ut=at,nt=t(53124),Vt=t(57065),rt=t(74902),st=t(97685),Gt=t(98423),zt=function(u,l){var h={};for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&l.indexOf(n)<0&&(h[n]=u[n]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(u);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(u,n[r])&&(h[n[r]]=u[n[r]]);return h},lt=a.createContext(null),Ht=function(l,h){var n=l.defaultValue,r=l.children,o=l.options,p=o===void 0?[]:o,M=l.prefixCls,G=l.className,R=l.style,P=l.onChange,k=zt(l,["defaultValue","children","options","prefixCls","className","style","onChange"]),z=a.useContext(nt.E_),q=z.getPrefixCls,fe=z.direction,b=a.useState(k.value||n||[]),$=(0,st.Z)(b,2),Q=$[0],_=$[1],d=a.useState([]),se=(0,st.Z)(d,2),le=se[0],ie=se[1];a.useEffect(function(){"value"in k&&_(k.value||[])},[k.value]);var ee=function(){return p.map(function(E){return typeof E=="string"||typeof E=="number"?{label:E,value:E}:E})},H=function(E){ie(function(ce){return ce.filter(function(ue){return ue!==E})})},B=function(E){ie(function(ce){return[].concat((0,rt.Z)(ce),[E])})},F=function(E){var ce=Q.indexOf(E.value),ue=(0,rt.Z)(Q);ce===-1?ue.push(E.value):ue.splice(ce,1),"value"in k||_(ue);var Be=ee();P==null||P(ue.filter(function(ve){return le.indexOf(ve)!==-1}).sort(function(ve,De){var Re=Be.findIndex(function(me){return me.value===ve}),Qe=Be.findIndex(function(me){return me.value===De});return Re-Qe}))},oe=q("checkbox",M),L="".concat(oe,"-group"),K=(0,Gt.Z)(k,["value","disabled"]);p&&p.length>0&&(r=ee().map(function(D){return a.createElement(it,{prefixCls:oe,key:D.value.toString(),disabled:"disabled"in D?D.disabled:k.disabled,value:D.value,checked:Q.indexOf(D.value)!==-1,onChange:D.onChange,className:"".concat(L,"-item"),style:D.style},D.label)}));var Ze={toggleOption:F,value:Q,disabled:k.disabled,name:k.name,registerValue:B,cancelValue:H},Me=Ee()(L,(0,W.Z)({},"".concat(L,"-rtl"),fe==="rtl"),G);return a.createElement("div",(0,Fe.Z)({className:Me,style:R},K,{ref:h}),a.createElement(lt.Provider,{value:Ze},r))},Lt=a.forwardRef(Ht),Yt=a.memo(Lt),Jt=t(98866),Wt=function(u,l){var h={};for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&l.indexOf(n)<0&&(h[n]=u[n]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(u);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(u,n[r])&&(h[n[r]]=u[n[r]]);return h},qt=function(l,h){var n,r=l.prefixCls,o=l.className,p=l.children,M=l.indeterminate,G=M===void 0?!1:M,R=l.style,P=l.onMouseEnter,k=l.onMouseLeave,z=l.skipGroup,q=z===void 0?!1:z,fe=l.disabled,b=Wt(l,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),$=a.useContext(nt.E_),Q=$.getPrefixCls,_=$.direction,d=a.useContext(lt),se=(0,a.useContext)(Vt.aM),le=se.isFormItemInput,ie=(0,a.useContext)(Jt.Z),ee=fe||(d==null?void 0:d.disabled)||ie,H=a.useRef(b.value);a.useEffect(function(){d==null||d.registerValue(b.value)},[]),a.useEffect(function(){if(!q)return b.value!==H.current&&(d==null||d.cancelValue(H.current),d==null||d.registerValue(b.value),H.current=b.value),function(){return d==null?void 0:d.cancelValue(b.value)}},[b.value]);var B=Q("checkbox",r),F=(0,Fe.Z)({},b);d&&!q&&(F.onChange=function(){b.onChange&&b.onChange.apply(b,arguments),d.toggleOption&&d.toggleOption({label:p,value:b.value})},F.name=d.name,F.checked=d.value.indexOf(b.value)!==-1);var oe=Ee()((n={},(0,W.Z)(n,"".concat(B,"-wrapper"),!0),(0,W.Z)(n,"".concat(B,"-rtl"),_==="rtl"),(0,W.Z)(n,"".concat(B,"-wrapper-checked"),F.checked),(0,W.Z)(n,"".concat(B,"-wrapper-disabled"),ee),(0,W.Z)(n,"".concat(B,"-wrapper-in-form-item"),le),n),o),L=Ee()((0,W.Z)({},"".concat(B,"-indeterminate"),G)),K=G?"mixed":void 0;return a.createElement("label",{className:oe,style:R,onMouseEnter:P,onMouseLeave:k},a.createElement(Ut,(0,Fe.Z)({"aria-checked":K},F,{prefixCls:B,className:L,disabled:ee,ref:h})),p!==void 0&&a.createElement("span",null,p))},$t=a.forwardRef(qt),it=$t,Xe=it;Xe.Group=Yt,Xe.__ANT_CHECKBOX=!0;var _t=Xe,ye=t(2342),re=t(6348),i=t(6226),ea=t(89134),Ta=t(61460),ta=t(31567),T=t(32674),ot=t(64146),aa=t(53651),na=t(27628),e=t(85893),ra=t(30381),xe=t(44431),sa=t(72401),Ne=sa.Drip,ct=t(31297),ut=ct.addressExc,dt=ct.abiExc,xt=t(91554),la=xt.addressXcfx,ia=xt.abiXcfx,oa="https://www.artii.top";function Ke(u){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:24;return new Promise(function(h){setTimeout(function(){h(be().get(oa+"/api/v1/statistics?condition="+u+"&offset=0&limit="+l))},1e3)})}function ca(){var u=(0,a.useState)("00.0000"),l=S()(u,2),h=l[0],n=l[1],r=(0,a.useState)("00.0000"),o=S()(r,2),p=o[0],M=o[1],G=(0,a.useState)(""),R=S()(G,2),P=R[0],k=R[1],z=(0,a.useState)(""),q=S()(z,2),fe=q[0],b=q[1],$=(0,a.useState)(""),Q=S()($,2),_=Q[0],d=Q[1],se=(0,a.useState)("--"),le=S()(se,2),ie=le[0],ee=le[1],H=(0,a.useState)("--"),B=S()(H,2),F=B[0],oe=B[1],L=(0,a.useState)("--"),K=S()(L,2),Ze=K[0],Me=K[1],D=(0,a.useState)("--"),E=S()(D,2),ce=E[0],ue=E[1],Be=(0,a.useState)("--"),ve=S()(Be,2),De=ve[0],Re=ve[1],Qe=(0,a.useState)("--"),me=S()(Qe,2),ua=me[0],da=me[1],xa=(0,a.useState)(0),ft=S()(xa,2),fa=ft[0],ha=ft[1],pa=(0,a.useState)("0.0000"),ht=S()(pa,2),va=ht[0],pt=ht[1],ma=(0,a.useState)(0),vt=S()(ma,2),Ce=vt[0],ga=vt[1],ba=(0,a.useState)(0),mt=S()(ba,2),ya=mt[0],gt=mt[1],Ca=(0,a.useState)("0.00"),bt=S()(Ca,2),Sa=bt[0],ka=bt[1],he=[""],te=[],yt=new na.r("https://evmtestnet.confluxrpc.com"),Ie=new ot.CH(ut,dt,yt),Aa=new aa.vU(dt),ja=new ot.CH(la,ia,yt),Ue=(0,T.$z)(),Pa=(0,a.memo)(function(){var s=(0,T.mA)(),A=(0,T.xx)(),v=(0,T.KQ)(),m=(0,a.useCallback)(X()(f()().mark(function c(){return f()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(s){y.next=2;break}return y.abrupt("return");case 2:setTimeout(function(){Ye(),document.getElementById("spinner").style.display="none"},2e3);case 3:case"end":return y.stop()}},c)})),[s]);return(0,e.jsx)("div",{onClick:m,children:(s==null?void 0:s.slice(0,7))+"..."+(s==null?void 0:s.slice(s.length-5,s.length))})}),Fa=(0,a.memo)(function(){var s=(0,T.mA)(),A=(0,T.xx)(),v=(0,T.KQ)(),m=(0,a.useCallback)(X()(f()().mark(function c(){var g,y;return f()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(s){C.next=2;break}return C.abrupt("return");case 2:if(P){C.next=4;break}return C.abrupt("return");case 4:return g=Aa.encodeFunctionData("CFX_exchange_XCFX",[]),C.next=7,(0,T.T7)({to:ut,data:g,value:T.fb.fromStandardUnit(P).toHexMinUnit()});case 7:y=C.sent,document.getElementById("spinner").style.display="flex",setTimeout(function(){Ye(),document.getElementById("spinner").style.display="none"},1e4);case 10:case"end":return C.stop()}},c)})),[s]);return(0,e.jsx)(ye.Z,{onClick:m,style:{background:"#161621",border:"0",color:"#E29346"},shape:"round",size:"large",block:!0,ghost:!0,className:x.stake_btn,children:"Stake now"})});function Oa(){return Ve.apply(this,arguments)}function Ve(){return Ve=X()(f()().mark(function s(){return f()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(Ue!=="not-active"){v.next=3;break}return(0,T.$j)(),v.abrupt("return");case 3:case"end":return v.stop()}},s)})),Ve.apply(this,arguments)}var Ge=(0,T.mA)(),Ct=(0,ta.$)(),ae=Ct.t,Xa=Ct.i18n,St,Ea=(0,a.useState)("none"),kt=S()(Ea,2),wa=kt[0],At=kt[1],Na=function(){At("none"),localStorage.setItem("DISCLAIMER","confirm")},Za=function(A){};function Ba(s){return ze.apply(this,arguments)}function ze(){return ze=X()(f()().mark(function s(A){var v,m;return f()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(Ue!=="not-active"){g.next=3;break}return(0,T.$j)(),g.abrupt("return");case 3:return v=A.target.value,k(v),g.next=7,Ie.CFX_exchange_estim(v*1e4);case 7:m=g.sent,b(parseFloat((m.toNumber()/1e4).toString()).toFixed(2));case 9:case"end":return g.stop()}},s)})),ze.apply(this,arguments)}function Da(){return He.apply(this,arguments)}function He(){return He=X()(f()().mark(function s(){var A,v;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(Ue!=="not-active"){c.next=3;break}return(0,T.$j)(),c.abrupt("return");case 3:if(!(+h<1)){c.next=8;break}k(xe(0)),b(xe(0)),c.next=14;break;case 8:return A=parseInt(((+h-1)*1e4).toString()),k(parseFloat((A/1e4).toString()).toFixed(4)),c.next=12,Ie.CFX_exchange_estim(A);case 12:v=c.sent,b(parseFloat((v.toNumber()/1e4).toString()).toFixed(2));case 14:case"end":return c.stop()}},s)})),He.apply(this,arguments)}function Se(){return Le.apply(this,arguments)}function Le(){return Le=X()(f()().mark(function s(){var A,v,m,c,g,y,Y,C,pe,w=arguments;return f()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return A=w.length>0&&w[0]!==void 0?w[0]:1,v=w.length>1&&w[1]!==void 0?w[1]:"",m=w.length>2&&w[2]!==void 0?w[2]:0,c=w.length>3&&w[3]!==void 0?w[3]:24,m===1&&(c=168),m===2&&(c=720),m===3&&(c=8640),m===4&&(c=8640*5),U.next=10,Ke("",c);case 10:if(g=U.sent,te=[],he=[],y=[],Y=2,g.data.rows.length===c?Y=parseInt((g.data.rows.length/12).toString()):Y=parseInt((c/12).toString()),g.data.rows.forEach(function(O,J){console.log(Y),m===0&&y.push(O),m===1&&J%7===0&&y.push(O),m===2&&J%30===0&&y.push(O),m===3&&J%Y===0&&y.push(O),m===4&&J%Y===0&&y.push(O)}),pt(parseFloat((y[0].xcfxvalues*+_).toString()).toFixed(4)),A!==3){U.next=27;break}return ga(m),y.reverse().forEach(function(O,J){var Te=parseFloat((+O.xcfxvalues*+O.price).toString()).toFixed(4),Pe=O.xcfxvalues,ke=Pe*+Te,Ae=O.created_at.toString(),ge={date:Ae,value:ke};ge.value=ke,ge.date=Ae,he.push(J),te.push(ge)}),C=Oe.JE(document.getElementById("main")),pe=C.getOption(),pe.series[0].data=te,pe.xAxis.data=he,C.setOption(pe),U.abrupt("return");case 27:case"end":return U.stop()}},s)})),Le.apply(this,arguments)}(0,a.useEffect)(function(){window.scrollTo(0,0),console.log(localStorage.getItem("DISCLAIMER")),(!localStorage.getItem("DISCLAIMER")||localStorage.getItem("DISCLAIMER")!=="confirm")&&At("block"),Ye();var s=setInterval(function(){Ia()},14e3);return function(){return clearInterval(s)}},[]);function Ia(){be().get("https://evmtestnet.confluxscan.io/v1/homeDashboard").then(function(){var s=X()(f()().mark(function A(v){return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:gt(v.data.result.blockNumber);case 1:case"end":return c.stop()}},A)}));return function(A){return s.apply(this,arguments)}}())}function Ye(){return Je.apply(this,arguments)}function Je(){return Je=X()(f()().mark(function s(){return f()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:X()(f()().mark(function m(){var c,g,y,Y,C,pe,w,We,U,O,J,Te,Pe,ke,Ae,ge,jt,Ft,qe,Et,wt;return f()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Ie.Summary();case 2:return c=j.sent,g=Ne(c.xcfxvalues).toCFX(),M(g),y=Ne(c.totalxcfxs).toCFX(),Re(parseFloat((g*y).toString()).toFixed(4)),j.next=9,be().get("https://www.confluxscan.net/stat/tokens/by-address?address=cfx%3Aacg158kvr8zanb1bs048ryb6rtrhr283ma70vz70tx&fields=iconUrl&fields=transferCount&fields=price&fields=totalPrice&fields=quoteUrl");case 9:return Y=j.sent,C=Y.data.data,pe=new xe(y),w=new xe(g),We=pe.multipliedBy(w),U=xe(We*C.price).toFixed(2),console.log(U),Me(U),O=C.holderCount,da(O),ha(C.price),J=parseFloat((+g*+C.price).toString()).toFixed(4),d(J),be().get("https://confluxscan.net/stat/pos-info").then(function(){var N=X()(f()().mark(function Z(I){var V;return f()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:V=parseFloat((I.data.data.apy/100).toString()).toFixed(4),ue(V);case 2:case"end":return de.stop()}},Z)}));return function(Z){return N.apply(this,arguments)}}()),be().get("https://evmtestnet.confluxscan.io/v1/homeDashboard").then(function(){var N=X()(f()().mark(function Z(I){return f()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:gt(I.data.result.blockNumber);case 1:case"end":return ne.stop()}},Z)}));return function(Z){return N.apply(this,arguments)}}()),te=[{value:1.5067,date:"Mon"},{value:1.5467,date:"Tue"},{value:1.6067,date:"Wed"},{value:1.7867,date:"Thu"},{value:1.0475,date:"Fri"},{value:1.8067,date:"Sat"},{value:1.9067,date:"Sun"}],he=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],j.next=28,Ke("");case 28:return Te=j.sent,te=[],he=[],Te.data.rows.reverse().forEach(function(N,Z){var I=N.xcfxvalues,V=new xe(I);Z%2;var ne=+V.toString()*+N.price,de=N.created_at.toString(),$e={date:de,value:ne};$e.value=ne,$e.date=de,te.push($e),he.push("")}),Pe=te.length-1,pt(parseFloat(te[Pe].value.toString()).toFixed(4)),ke={backgroundColor:"rgba(255,255,255,0)",tooltip:{trigger:"axis",show:!0,backgroundColor:"#000",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(126,199,255,1)"},{offset:.5,color:"rgba(126,199,255,1)"},{offset:1,color:"rgba(126,199,255,1)"}],global:!1}}},formatter:function(Z){var I="";return Z.forEach(function(V){I+='<div style="display:inline-block;padding:0 5px;border-radius:10px;height:30px;width:100%;background-color:#000;color:#fff"><div style="font-size:12px;color:#999">xCFX</div><span style="font-size:12px;color:#ccc">'+ra(V.data.date).format("YYYY-MM-DD HH:00:00")+"</span><br>"+V.value+"</span>"}),I}},legend:{align:"left",right:"10%",top:"10%",type:"plain",textStyle:{color:"#7ec7ff",fontSize:14},itemGap:50,itemWidth:100,itemHeight:10},grid:{top:"3%",left:"5%",right:"10%",bottom:"15%"},xAxis:[{type:"category",boundaryGap:!1,axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:"rgba(25,163,223,0)"}},axisTick:{show:!1},data:he}],yAxis:[{type:"value",min:function(Z){return Z.min},splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.4)"}},axisLine:{show:!1,lineStyle:{color:"#233653"}},position:"right",axisLabel:{show:!0,color:"#ffffff",padding:0,formatter:function(Z){return"$"+Z.toFixed(4)}},axisTick:{show:!0}}],series:[{type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:[4,4],smooth:!1,lineStyle:{width:3,color:"#EAB966",borderColor:"rgba(0,0,0,.0)"},itemStyle:{color:"rgba(234, 185, 102, .9)",borderColor:"#646ace",borderWidth:0},areaStyle:{color:new Oe.Q.o(0,0,0,1,[{offset:0,color:"#DD7C32"},{offset:1,color:"rgba(234, 181, 98, 0.1)"}],!1),shadowColor:"rgba(255, 255, 255, 0.5)",shadowBlur:0},data:te}]},j.next=37,Ke("",8640);case 37:if(Ae=j.sent,Ae.data.rows.reverse().forEach(function(N,Z){var I=364,V=1+N.apy/365,ne=Math.pow(V,I),de=(N.apy*ne*100).toFixed(3);ka(de.toString())}),!Ge){j.next=54;break}return j.next=42,Ie.espacebalanceof(Ge);case 42:return ge=j.sent,jt=Ne(ge).toCFX(),n(parseFloat(jt.toString()).toFixed(2)),j.next=47,ja.balanceOf(Ge);case 47:Ft=j.sent,qe=parseFloat(Ne(Ft).toCFX().toString()).toFixed(2),ee(qe),Et=new xe(J),wt=Et.times(qe),oe(parseFloat(wt).toFixed(4)),console.log(F);case 54:setTimeout(X()(f()().mark(function N(){return f()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:try{St=Oe.S1(document.getElementById("main")),St.setOption(ke)}catch{}case 1:case"end":return I.stop()}},N)})),500);case 55:case"end":return j.stop()}},m)}))();case 1:case"end":return v.stop()}},s)})),Je.apply(this,arguments)}return(0,e.jsxs)("div",{className:x.stake,children:[(0,e.jsx)(Dt.q,{children:(0,e.jsx)("link",{rel:"stylesheet",href:"style.css"})}),(0,e.jsxs)("div",{style:{display:wa},children:[(0,e.jsx)("div",{className:"ant-modal-mask"}),(0,e.jsx)("div",{role:"dialog","aria-modal":"true",className:"ant-modal ant-modal-confirm ant-modal-confirm-info",style:{zIndex:"100000",width:"100%",top:"5%",position:"absolute",borderRadius:"20px"},children:(0,e.jsx)("div",{className:"ant-modal-content",style:{backgroundColor:"#393942",width:"60%",maxWidth:"1300px",margin:"0 auto",borderRadius:"20px"},children:(0,e.jsx)("div",{className:"ant-modal-body",style:{backgroundColor:"#393942",borderRadius:"20px"},children:(0,e.jsxs)("div",{className:"ant-modal-confirm-body-wrapper",children:[(0,e.jsx)("div",{className:"ant-modal-confirm-body",children:(0,e.jsx)("div",{className:"disclaimer",children:(0,e.jsxs)("div",{style:{padding:"0 40px"},children:[(0,e.jsx)("h4",{style:{margin:"20px 0 30px",fontSize:"28px"},children:ae("stake.confirm_tit1")}),(0,e.jsx)("h4",{style:{margin:"20px 0",fontSize:"24px"},children:ae("stake.confirm_tit2")}),(0,e.jsx)("p",{style:{color:"#fff",fontSize:"18px",lineHeight:"26px"},children:ae("stake.confirm_txt1")}),(0,e.jsx)("p",{style:{color:"#fff",fontSize:"18px",lineHeight:"26px"},children:ae("stake.confirm_txt2")}),(0,e.jsx)("p",{style:{color:"#fff",fontSize:"18px",lineHeight:"26px"},children:ae("stake.confirm_txt3")}),(0,e.jsx)(_t,{onChange:Za,checked:!0,style:{backgroundColor:"EAB966",lineHeight:"20px",color:"#fff",fontSize:"36px",margin:"5px 0 5px"},children:(0,e.jsx)("span",{style:{lineHeight:"20px",fontSize:"16px"},children:ae("stake.confirm_txt4")})})]})})}),(0,e.jsx)("div",{className:"ant-modal-confirm-btns",children:(0,e.jsx)(ye.Z,{onClick:Na,block:!0,type:"primary",style:{backgroundColor:"#EAB966",border:"0",width:"60%",marginRight:"21%",fontSize:"25px",height:"56px",borderRadius:"28px",color:"#161621"},children:ae("stake.btn_confirm")})})]})})})})]}),(0,e.jsxs)("div",{className:je.Z.inner,style:{backgroundColor:"#171520"},children:[(0,e.jsxs)("div",{className:x.sub_nav2,children:[(0,e.jsx)(tt.rU,{to:"/data/stake",style:{color:"#EAB764"},children:ae("stake.Stake_CFX")}),(0,e.jsx)(tt.rU,{to:"/data/unstake",style:{color:"#FFF"},children:ae("stake.unStake_CFX")})]}),(0,e.jsxs)(re.Z,{gutter:32,className:x.brief,children:[(0,e.jsx)(i.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,e.jsxs)("div",{className:x.box1,children:[(0,e.jsxs)(re.Z,{children:[(0,e.jsxs)(i.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:["Available to stake ",(0,e.jsx)("div",{className:x.board}),(0,e.jsxs)("b",{children:[parseFloat(h).toFixed(2)," CFX"]})]}),(0,e.jsx)(i.Z,{xs:24,sm:24,md:12,lg:12,xl:12,style:{textAlign:"right"},children:(0,e.jsx)(ye.Z,{target:"_blank",href:"https://app.swappi.io/#/swap",shape:"round",style:{background:"#161621",border:"0",lineHeight:"50px",color:"#E29346",height:"50px",width:"150px",fontSize:"24px"},children:"Get CFX"})})]}),(0,e.jsx)("div",{className:x.line}),(0,e.jsxs)(re.Z,{children:[(0,e.jsxs)(i.Z,{xs:24,sm:24,md:16,lg:16,xl:16,children:["xCFX Balance",(0,e.jsx)("br",{}),(0,e.jsxs)("b",{children:[ie," xCFX"]}),(0,e.jsx)("span",{className:x.plus,children:"+"})]}),(0,e.jsxs)(i.Z,{xs:24,sm:24,md:5,lg:5,xl:5,children:["CFX APR"," ",(0,e.jsxs)("b",{style:{fontWeight:"normal"},children:[parseFloat((+ce*100).toString()).toFixed(2),"%"]})]}),(0,e.jsx)(i.Z,{xs:24,sm:24,md:7,lg:7,xl:7,style:{textAlign:"right"},children:(0,e.jsx)(ye.Z,{style:{background:"#EBB974",borderRadius:"8px",border:"0",color:"#161621",height:"50px",width:"150px",marginTop:"20px",fontSize:"24px",display:"none"},children:"Lock time"})})]}),(0,e.jsx)("div",{className:x.line}),(0,e.jsxs)(re.Z,{style:{background:"#EBB974",borderRadius:"13px",padding:"15px 10px",margin:"20px 0"},children:[(0,e.jsx)(i.Z,{xs:10,sm:10,md:4,lg:4,xl:4,children:(0,e.jsx)("img",{className:je.Z.coin1,src:Tt,height:"80px"})}),(0,e.jsxs)(i.Z,{xs:14,sm:14,md:10,lg:10,xl:10,children:["Amount ",(0,e.jsx)("br",{}),(0,e.jsxs)("b",{children:[(0,e.jsx)(ea.Z,{placeholder:"0",onChange:Ba,value:P,style:{display:"inline-block",backgroundColor:"transparent",width:"130px",border:0,fontFamily:"Univa Nova Bold",padding:0,fontSize:"32px"}}),"CFX"]})]}),(0,e.jsx)(i.Z,{xs:24,sm:24,md:10,lg:10,xl:10,style:{textAlign:"right"},children:(0,e.jsx)(ye.Z,{style:{background:"rgba(22, 22, 33, 0.4)",borderRadius:"8px",border:"0",color:"#ffffff",height:"60px",width:"120px",fontSize:"24px",margin:"15px 15px 0 0"},onClick:Da,children:"MAX"})})]}),(0,e.jsx)(Fa,{})]})}),(0,e.jsx)(i.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,e.jsxs)("div",{className:x.box2,children:[(0,e.jsx)("img",{className:je.Z.coin1,src:Pt,height:"40px"}),(0,e.jsx)("div",{className:x.board2}),"xCFX $",va," ",(0,e.jsx)("span",{className:x.tip}),(0,e.jsx)("div",{className:je.Z.main5,style:{height:"340px",width:"100%",marginTop:"70px"},id:"main"}),(0,e.jsx)("div",{className:x.tabbtn,style:Ce===0?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){Se(3,"",0)},children:"24h"}),(0,e.jsx)("div",{className:x.tabbtn,style:Ce===1?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){Se(3,"weeks",1)},children:"7d"}),(0,e.jsx)("div",{className:x.tabbtn,style:Ce===2?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){Se(3,"months",2)},children:"30d"}),(0,e.jsx)("div",{className:x.tabbtn,style:Ce===3?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){Se(3,"years",3)},children:"1y"}),(0,e.jsx)("div",{className:x.tabbtn,style:Ce===4?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){Se(3,"5years",4)},children:"5y"})]})})]}),(0,e.jsxs)(re.Z,{gutter:32,children:[(0,e.jsx)(i.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,e.jsx)("div",{className:x.box3,children:(0,e.jsxs)(re.Z,{gutter:32,children:[(0,e.jsx)(i.Z,{span:12,children:"You will receive"}),(0,e.jsxs)(i.Z,{span:12,style:{textAlign:"right"},children:[fe," xCFX"]}),(0,e.jsx)(i.Z,{span:12,children:"Exchange rate"}),(0,e.jsxs)(i.Z,{span:12,style:{textAlign:"right"},children:["1xCFX= ",parseFloat(p).toFixed(4),"CFX"]}),(0,e.jsx)(i.Z,{span:12,children:"Nucleon\u2019s fee"}),(0,e.jsx)(i.Z,{span:12,style:{textAlign:"right"},children:"10%"}),(0,e.jsx)(i.Z,{span:12,children:"Current Block Number"}),(0,e.jsxs)(i.Z,{span:12,style:{textAlign:"right"},children:[(0,e.jsxs)("div",{id:"spinner2",className:"spinner-box2",style:{transform:"scale(15%,15%)",position:"absolute",top:"-34px"},children:[(0,e.jsx)("div",{className:"configure-border-1",children:(0,e.jsx)("div",{className:"configure-core"})}),(0,e.jsx)("div",{className:"configure-border-2",children:(0,e.jsx)("div",{className:"configure-core"})})]}),ya]})]})})}),(0,e.jsx)(i.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,e.jsxs)("div",{className:x.box3,children:["Current Balance",(0,e.jsxs)(re.Z,{gutter:32,style:{marginTop:"30px"},children:[(0,e.jsxs)(i.Z,{span:6,children:[(0,e.jsx)("span",{className:x.mintxt,children:"Value"}),(0,e.jsxs)("div",{children:["$",_]})]}),(0,e.jsx)(i.Z,{span:10,children:(0,e.jsxs)("div",{className:x.vbar,children:[(0,e.jsxs)("b",{children:["$",F]}),(0,e.jsx)("div",{className:x.mintxt,style:{color:"#418A55"},children:"\xA0"})]})}),(0,e.jsxs)(i.Z,{span:8,style:{textAlign:"right"},children:[(0,e.jsx)("span",{className:x.mintxt,children:"Share of the Pool"}),(0,e.jsx)("div",{children:+parseFloat(F).toFixed(0)/+parseFloat(Ze).toFixed(0)<1e-4?"> .1%":"~ "+(+parseFloat(F).toFixed(0)/+parseFloat(Ze).toFixed(0)*100).toFixed(2)+"%"})]})]})]})})]}),(0,e.jsxs)("div",{style:{top:"100px",position:"relative"},children:[(0,e.jsx)("h4",{children:"CFX statistics"}),(0,e.jsx)("div",{className:x.box5,children:(0,e.jsxs)(re.Z,{gutter:32,children:[(0,e.jsx)(i.Z,{span:12,children:"Annual percentage rate"}),(0,e.jsxs)(i.Z,{span:12,style:{textAlign:"right"},children:[Sa,"%"]}),(0,e.jsx)(i.Z,{span:12,children:"Total staked with CFX"}),(0,e.jsx)(i.Z,{span:12,style:{textAlign:"right"},children:De}),(0,e.jsx)(i.Z,{span:12,children:"Stakers"}),(0,e.jsx)(i.Z,{span:12,style:{textAlign:"right"},children:ua}),(0,e.jsx)(i.Z,{span:12,children:"xCFX market cap"}),(0,e.jsxs)(i.Z,{span:12,style:{textAlign:"right"},children:["$",(+De*+fa).toString()]})]})}),(0,e.jsx)("h4",{children:"About"}),(0,e.jsxs)("div",{className:x.box5,children:[(0,e.jsx)("p",{children:"Nucleon is a liquid staking solution for Conflux PoS backed by industry-leading staking providers. Nucleon lets users stake their CFX by exchange CFX to xCFX - without locking assets or maintaining infrastructure."}),(0,e.jsx)("p",{children:"The value in xCFX will be automatically compounded and the xCFX value expands automatically"}),(0,e.jsx)("p",{children:"Our goal is to solve the problems associated with Conflux PoS staking - illiquidity, immovability and accessibility - making staked CFX liquid and allowing for participation with any amount of CFX to improve security of the Conflux network."})]})]})]})]})}},39659:function(_e){_e.exports="data:image/png;base64,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"}}]);
