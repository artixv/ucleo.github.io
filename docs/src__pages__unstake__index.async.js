(self.webpackChunk=self.webpackChunk||[]).push([[70],{61460:function(m,h,t){"use strict";var c=t(36609),n=t(57715),d=JSON.parse('{"header":{"register":"Register","signin":"Sign In","home":"Home"},"footer":{"detail":"All rights reserved @nucleon"},"stake":{"nav_stake":"Stake","nav_pools":"Pools","nav_nut":"NUT","nav_rewards":"Rewards","nav_analytics":"Analytics","btn_confirm":"Confirm","confirm_txt1":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloree dantium, totam rem aperiam, eaque. Nemo enim ipsam voluptatem quia voluptas sit aut fugit, https: //magnidolores.com eos qui ratione voluptatem sequi nesciunt Learn more ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.","confirm_txt2":"Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt","confirm_txt3":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praeseum voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt ollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum.","confirm_txt4":"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu.","confirm_tit1":"Risk Disclaimer","confirm_tit2":"Nucleon Risk Disclosure Statement","unStake_CFX":"unStake CFX","Stake_CFX":"Stake CFX","user_analytics":"User Analytics","nucleon_analytics":"Nucleon Analytics"},"analytics":{"TVL":"TVL","Total_Emission_xCFX":"Total Emission xCFX","Value_Growth":"Value Growth","Interest_Earned":"Interest Earned","Total_Emission_of_rewards":"Total Emission of rewards","xxx":"xxx"}}'),i=JSON.parse('{"header":{"register":"\u6CE8\u518C\u94B1\u5305","signin":"\u8FDE\u63A5\u94B1\u5305","home":"\u9996\u9875"},"footer":{"detail":"\u7248\u6743\u6240\u6709 @nucleon"},"stake":{"nav_stake":"\u80A1\u672C","nav_pools":"\u8D44\u91D1\u6C60","nav_nut":"NUT","nav_rewards":"\u6536\u76CA","nav_analytics":"\u7EDF\u8BA1\u62A5\u8868"}}'),l={en:{translation:d},zh:{translation:i}};c.ZP.use(n.Db).init({resources:l,lng:"en",interpolation:{escapeValue:!1}});var b=null},94103:function(m,h,t){"use strict";t.r(h),t.d(h,{default:function(){return D}});var c=t(17061),n=t.n(c),d=t(17156),i=t.n(d),l=t(67294),b=t(83459),o=t(20845),g=t(80410),a={unstake:"unstake___nptx_",sub_nav:"sub_nav___mngg_",sub_nav_sub:"sub_nav_sub___mGtXW",account_box:"account_box___yNWSq",account:"account___ZGiCV",yuan:"yuan___b2KCf",sub_nav2:"sub_nav2___CQsLC",line:"line___PMfm4",box1:"box1___ilX9u",box2:"box2___UFup7",box3:"box3___N41Ku",box5:"box5___Tacrq",stake_btn:"stake_btn___PpJA2",plus:"plus___pYpJL",board:"board___jwiCM",board2:"board2___MwK4l",tabbtn:"tabbtn___tBtcl",vbar:"vbar___Iu8hS",mintxt:"mintxt___a9MYV",tip:"tip___MYTfo"},w=t(58274),E=t(70625),B=t(39659),r=t(6348),e=t(6226),v=t(80252),z=t(61460),S=t(31567),s=t(85893),N=t(30381);function D(){var y=(0,S.$)(),j=y.t,U=y.i18n,k,C=[""],F=[];return(0,l.useEffect)(function(){window.scrollTo(0,0),i()(n()().mark(function T(){var Z;return n()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:F=[{value:1.5067,date:"Mon"},{value:1.5467,date:"Tue"},{value:1.6067,date:"Wed"},{value:1.7867,date:"Thu"},{value:1.0475,date:"Fri"},{value:1.8067,date:"Sat"},{value:1.9067,date:"Sun"}],C=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Z={backgroundColor:"rgba(255,255,255,0)",tooltip:{trigger:"axis",show:!0,backgroundColor:"#000",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(126,199,255,1)"},{offset:.5,color:"rgba(126,199,255,1)"},{offset:1,color:"rgba(126,199,255,1)"}],global:!1}}},formatter:function(u){var x="";return u.forEach(function(A){x+='<div style="display:inline-block;padding:0 5px;border-radius:10px;height:30px;width:100%;background-color:#000;color:#fff"><div style="font-size:12px;color:#999">Total Value Locked</div><span style="font-size:12px;color:#ccc">'+N(A.data.date).format("YYYY-MM-DD HH:00:00")+"</span><br>"+A.value+"</span>"}),x}},legend:{align:"left",right:"10%",top:"10%",type:"plain",textStyle:{color:"#7ec7ff",fontSize:14},itemGap:50,itemWidth:100,itemHeight:10},grid:{top:"3%",left:"5%",right:"10%",bottom:"15%"},xAxis:[{type:"category",boundaryGap:!1,axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:"rgba(25,163,223,0)"}},axisTick:{show:!1},data:C}],yAxis:[{type:"value",min:function(u){return u.min},splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.4)"}},axisLine:{show:!1,lineStyle:{color:"#233653"}},position:"right",axisLabel:{show:!0,color:"#ffffff",padding:0,formatter:function(u){return"$"+u.toFixed(4)}},axisTick:{show:!0}}],series:[{type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,smooth:!1,lineStyle:{width:3,color:"#EAB966",borderColor:"rgba(0,0,0,.0)"},itemStyle:{color:"rgba(234, 185, 102, .6)",borderColor:"#646ace",borderWidth:0},areaStyle:{color:new b.Q.o(0,0,0,1,[{offset:0,color:"#DD7C32"},{offset:1,color:"rgba(234, 181, 98, 0.1)"}],!1),shadowColor:"rgba(255, 255, 255, 0.5)",shadowBlur:0},data:F}]},setTimeout(i()(n()().mark(function p(){return n()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:try{k=b.S1(document.getElementById("main")),k.setOption(Z)}catch{}case 1:case"end":return x.stop()}},p)})),500);case 4:case"end":return f.stop()}},T)}))()},[]),(0,s.jsx)("div",{className:a.unstake,children:(0,s.jsxs)("div",{className:g.Z.inner,style:{backgroundColor:"#171520"},children:[(0,s.jsxs)("div",{className:a.sub_nav,children:[(0,s.jsxs)(o.rU,{to:"/",style:{color:"#FFF"},children:[(0,s.jsx)("img",{className:g.Z.logoimg,src:w.Z,height:"30px"}),(0,s.jsx)("img",{className:g.Z.logotxt,src:E.Z,height:"16px"})]}),(0,s.jsxs)("div",{className:a.sub_nav_sub,children:[(0,s.jsx)(o.rU,{to:"/stake",style:{color:"#EAB764"},children:j("stake.nav_stake")}),(0,s.jsx)(o.rU,{to:"/pools",style:{color:"#FFF"},children:j("stake.nav_pools")}),(0,s.jsx)(o.rU,{to:"/nut",style:{color:"#FFF"},children:j("stake.nav_nut")}),(0,s.jsx)(o.rU,{to:"/rewards",style:{color:"#FFF"},children:j("stake.nav_rewards")})]}),(0,s.jsxs)("div",{className:a.account_box,children:[(0,s.jsx)(o.rU,{to:"/analytics",style:{color:"#FFF",fontSize:"18px",marginRight:"25px"},children:j("stake.nav_analytics")}),(0,s.jsxs)("div",{className:a.account,children:["0xcb31...4f3560",(0,s.jsx)("div",{className:a.yuan})]})]})]}),(0,s.jsxs)("div",{className:a.sub_nav2,children:[(0,s.jsx)(o.rU,{to:"/stake",style:{color:"#FFF"},children:"Stake CFX"}),(0,s.jsx)(o.rU,{to:"/unstake",style:{color:"#EAB764"},children:"unStake CFX"})]}),(0,s.jsxs)(r.Z,{gutter:32,className:a.brief,children:[(0,s.jsx)(e.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,s.jsxs)("div",{className:a.box1,children:[(0,s.jsx)(r.Z,{children:(0,s.jsxs)(e.Z,{span:24,children:["Available to stake ",(0,s.jsx)("div",{className:a.board}),(0,s.jsx)("br",{}),(0,s.jsx)("b",{children:"0.0824 CFX"})]})}),(0,s.jsx)("div",{className:a.line}),(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(e.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:["xCFX Balance",(0,s.jsx)("b",{children:"0.0824 CFX"}),(0,s.jsx)("span",{className:a.plus,children:"+"})]}),(0,s.jsxs)(e.Z,{xs:24,sm:24,md:5,lg:5,xl:5,children:["CFX APR ",(0,s.jsx)("b",{style:{fontWeight:"normal"},children:"5.7%"})]}),(0,s.jsx)(e.Z,{xs:24,sm:24,md:7,lg:7,xl:7,style:{textAlign:"right"},children:(0,s.jsx)(v.Z,{style:{background:"#EBB974",borderRadius:"8px",border:"0",color:"#161621",height:"50px",width:"150px",marginTop:"20px",fontSize:"24px",display:"none"},children:"Lock time"})})]}),(0,s.jsx)("div",{className:a.line}),(0,s.jsxs)(r.Z,{style:{background:"#EBB974",borderRadius:"13px",padding:"25px 10px",margin:"20px 0"},children:[(0,s.jsx)(e.Z,{xs:10,sm:10,md:4,lg:4,xl:4,children:(0,s.jsx)("img",{className:g.Z.coin1,src:B,height:"80px"})}),(0,s.jsxs)(e.Z,{xs:14,sm:14,md:10,lg:10,xl:10,children:["Amount ",(0,s.jsx)("b",{children:"0.0824 CFX"})]}),(0,s.jsx)(e.Z,{xs:24,sm:24,md:10,lg:10,xl:10,style:{textAlign:"right"},children:(0,s.jsx)(v.Z,{style:{background:"rgba(22, 22, 33, 0.4)",borderRadius:"8px",border:"0",color:"#ffffff",height:"60px",width:"120px",fontSize:"24px",margin:"7px 15px 0 0"},children:"MAX"})})]}),(0,s.jsx)(v.Z,{style:{background:"#161621",border:"0",color:"#E29346"},shape:"round",size:"large",block:!0,ghost:!0,className:a.stake_btn,children:"unStake"})]})}),(0,s.jsx)(e.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,s.jsx)("div",{className:a.box2})})]}),(0,s.jsxs)(r.Z,{gutter:32,children:[(0,s.jsx)(e.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,s.jsx)("div",{className:a.box3,children:(0,s.jsxs)(r.Z,{gutter:32,children:[(0,s.jsx)(e.Z,{span:12,children:"You will receive"}),(0,s.jsx)(e.Z,{span:12,style:{textAlign:"right"},children:"0 xCFX"}),(0,s.jsx)(e.Z,{span:12,children:"Exchange rate"}),(0,s.jsx)(e.Z,{span:12,style:{textAlign:"right"},children:"1CFX= 1.1xCFX"}),(0,s.jsx)(e.Z,{span:12,children:"Nucleon\u2019s fee"}),(0,s.jsx)(e.Z,{span:12,style:{textAlign:"right"},children:"10%"}),(0,s.jsx)(e.Z,{span:12,children:"APY"}),(0,s.jsx)(e.Z,{span:12,style:{textAlign:"right"},children:"10%"})]})})}),(0,s.jsx)(e.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,s.jsxs)("div",{className:a.box3,children:["Current Balance",(0,s.jsxs)(r.Z,{gutter:32,style:{marginTop:"30px"},children:[(0,s.jsxs)(e.Z,{span:6,children:[(0,s.jsx)("span",{className:a.mintxt,children:"Value"}),(0,s.jsx)("div",{children:"$1880.38"})]}),(0,s.jsx)(e.Z,{span:10,children:(0,s.jsxs)("div",{className:a.vbar,children:[(0,s.jsx)("b",{children:"$7531.41"}),(0,s.jsx)("div",{className:a.mintxt,style:{color:"#418A55"},children:"+1.3% Today"})]})}),(0,s.jsxs)(e.Z,{span:8,style:{textAlign:"right"},children:[(0,s.jsx)("span",{className:a.mintxt,children:"Share of the Pool"}),(0,s.jsxs)("div",{children:[">",".1%"]})]})]})]})})]}),(0,s.jsxs)("div",{style:{top:"100px",position:"relative"},children:[(0,s.jsx)("h4",{children:"CFX statistics"}),(0,s.jsx)("div",{className:a.box5,children:(0,s.jsxs)(r.Z,{gutter:32,children:[(0,s.jsx)(e.Z,{span:12,children:"Annual percentaje rate"}),(0,s.jsx)(e.Z,{span:12,style:{textAlign:"right"},children:"5.1%"}),(0,s.jsx)(e.Z,{span:12,children:"Total staked with CFX"}),(0,s.jsx)(e.Z,{span:12,style:{textAlign:"right"},children:"4,431,100.039 CFX"}),(0,s.jsx)(e.Z,{span:12,children:"Stakers"}),(0,s.jsx)(e.Z,{span:12,style:{textAlign:"right"},children:"115050"}),(0,s.jsx)(e.Z,{span:12,children:"xCFX market cap"}),(0,s.jsx)(e.Z,{span:12,style:{textAlign:"right"},children:"$5,679,625,631"})]})}),(0,s.jsx)("h4",{children:"About"}),(0,s.jsxs)("div",{className:a.box5,children:[(0,s.jsx)("p",{children:"Nucleon is a liquid staking solution for Conflux PoS backed by industry-leading staking providers. Nucleon lets users stake their CFX by exchange CFX to xCFX - without locking assets or maintaining infrastructure."}),(0,s.jsx)("p",{children:"The value in xCFX will be automatically compounded and the xCFX value expands automatically"}),(0,s.jsx)("p",{children:"Our goal is to solve the problems associated with Conflux PoS staking - illiquidity, immovability and accessibility - making staked CFX liquid and allowing for participation with any amount of CFX to improve security of the Conflux network."})]})]})]})})}},46700:function(m,h,t){var c={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":37930,"./se.js":37930,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":95606,"./ss.js":95606,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function n(i){var l=d(i);return t(l)}function d(i){if(!t.o(c,i)){var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}return c[i]}n.keys=function(){return Object.keys(c)},n.resolve=d,m.exports=n,n.id=46700},39659:function(m){"use strict";m.exports="data:image/png;base64,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"}}]);
