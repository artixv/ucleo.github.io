"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[381,74],{61460:function(N,r,a){var m=a(36609),f=a(57715),h=JSON.parse('{"header":{"register":"Register","signin":"Sign In","home":"Home"},"footer":{"detail":"All rights reserved @nucleon"},"stake":{"nav_stake":"Stake","nav_pools":"Pools","nav_nut":"NUT","nav_rewards":"Rewards","nav_analytics":"Analytics","btn_confirm":"Confirm","confirm_txt1":"I\u2019m not a resident of or located in the United States of America (including its territories: American Samoa, Guam, Puerto Rico, the Northern Mariana Islands and the U.S. Virgin Islands) or any other Restricted Jurisdiction (as defined in the Terms of Service);","confirm_txt2":"I\u2019m not a Prohibited Person (as defined in the Terms of Service) nor acting on behalf of a Prohibited Person;","confirm_txt3":"I acknowledge that Nucleon Protocol and related software are experimental, and that the use of experimental software may result in complete loss of my funds.","confirm_txt4":"By accessing or using Nucleon Protocol, I agree to the\xA0Terms of Service\xA0and confirm that I have read and understood the Privacy Notice and Risk Disclosure Statement.","confirm_tit1":"Risk Disclaimer","confirm_tit2":"Nucleon Risk Disclosure Statement","unStake_CFX":"unStake CFX","Stake_CFX":"Stake CFX","user_analytics":"User Analytics","nucleon_analytics":"Nucleon Analytics","Claim":"Claim","QueueHistory":"Queue History","UnstakedxCFX":"Unstaked xCFX","LockingCFX":"Unlocking Values(CFX)","EstimatedUnlockDate":"Estimated Unlock Date","Status":"Status"},"analytics":{"TVL":"TVL","Total_Emission_xCFX":"Total Emission xCFX","Value_Growth":"Value Growth","Interest_Earned":"Interest Earned","Total_Emission_of_NUT":"Total Emission of NUT","Total_CFX_In_Pool":"Total CFX In Pool"},"pools":{"pools":"Pools","mypools":"My Pools","otherpools":"Other Pools","PoolName":"Pool Name","APR":"APR","TotalLiquidity":"Total Liquidity","24HVolume":"24H Volume","Myliquidity":"My liquidity","Manage":"Manage","Claimrewards":"Claim Rewards","AddLiquidity":"Add Liquidity","WithdrawLiquidity":"Withdraw Liquidity"},"nut":{"Withdraw":"Withdraw","Claim":"Claim","Manage":"Manage","NFTID":"NF TID","VestAmount":"Vest Amount","VestValue":"Vest Value","VestExpires":"Vest Expires","APR":"APR"}}'),c=JSON.parse('{"header":{"register":"\u6CE8\u518C\u94B1\u5305","signin":"\u8FDE\u63A5\u94B1\u5305","home":"\u9996\u9875"},"footer":{"detail":"\u7248\u6743\u6240\u6709 @nucleon"},"stake":{"nav_stake":"\u80A1\u672C","nav_pools":"\u8D44\u91D1\u6C60","nav_nut":"NUT","nav_rewards":"\u6536\u76CA","nav_analytics":"\u7EDF\u8BA1\u62A5\u8868"}}'),o={en:{translation:h},zh:{translation:c}};m.ZP.use(f.Db).init({resources:o,lng:"en",interpolation:{escapeValue:!1}});var C=null},64459:function(N,r,a){a.r(r),a.d(r,{default:function(){return C}});var m=a(20845),f=a(29476),h=a(32674),c=a(80410),o=a(85893);function C(){var y=(0,h.$z)();return(0,o.jsxs)("div",{className:"yds",children:[(0,o.jsx)("div",{className:c.Z.inner,children:(0,o.jsx)(f.default,{})}),(0,o.jsx)(m.j3,{})]})}},29476:function(N,r,a){a.r(r),a.d(r,{default:function(){return R}});var m=a(27424),f=a.n(m),h=a(17061),c=a.n(h),o=a(17156),C=a.n(o),y=a(67294),d=a(20845),s=a(32674),F=a(80410),u={nav0:"nav0___i4QYg",sub_nav:"sub_nav___tqYN0",sub_nav_sub:"sub_nav_sub___Wu5jx",account_box:"account_box___ODlno",account:"account___vEqBg",yuan:"yuan___rhug3",sub_nav2:"sub_nav2___rHBqg","ant-modal-content":"ant-modal-content___k3zIp"},A=a(58274),P=a(70625),O=a(61460),S=a(31567),U=a(57082),n=a(85893),k,_=(0,y.memo)(function(){var t=(0,s.mA)(),p=(0,s.xx)(),T=(0,s.KQ)(),l=(0,y.useCallback)(C()(c()().mark(function e(){return c()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(t){i.next=2;break}return i.abrupt("return");case 2:setTimeout(function(){document.getElementById("spinner").style.display="none"},2e3);case 3:case"end":return i.stop()}},e)})),[t]);return(0,n.jsx)("div",{onClick:l,children:(t==null?void 0:t.slice(0,7))+"..."+(t==null?void 0:t.slice(t.length-5,t.length))})}),I=window.location.hash,j;function E(){return j=setTimeout(function(){!k||k==null?E():location.reload()},4e3),function(){return clearTimeout(j)}}var b=function(){U.Z.warning({wrapClassName:F.Z.zzzz,bodyStyle:{backgroundColor:"#393942",color:"#ffffff"},content:"Fluent Or MetaMask Not Install"})};function M(){var t=(0,s.$z)();k=(0,s.mA)();var p=(0,y.useState)(0),T=f()(p,2),l=T[0],e=T[1],v=function(D){e(D)},i=(0,S.$)(),x=i.t,V=i.i18n;return(0,y.useEffect)(function(){switch(I){case"#/data/stake":e(0);break;case"#/data/unstake":e(0);break;case"#/data/pools":e(2);break;case"#/data/nut":e(3);break;case"#/data/rewards":e(4);break;case"#/data/analytics":e(5);break;default:break}k||E()},[]),(0,n.jsx)("div",{className:u.nav0,children:(0,n.jsxs)("div",{className:u.sub_nav,children:[(0,n.jsxs)(d.rU,{to:"/",style:{color:"#FFF"},children:[(0,n.jsx)("img",{className:F.Z.logoimg,src:A.Z,height:"30px"}),(0,n.jsx)("img",{className:F.Z.logotxt,src:P.Z,height:"16px"})]}),(0,n.jsxs)("div",{className:u.sub_nav_sub,children:[(0,n.jsx)(d.rU,{to:"/data/stake",onClick:function(){v(0)},style:{color:l===0?"#EAB764":"#FFF"},children:x("stake.nav_stake")}),(0,n.jsx)(d.rU,{to:"/data/pools",onClick:function(){v(2)},style:{color:l===2?"#EAB764":"#FFF"},children:x("stake.nav_pools")}),(0,n.jsx)(d.rU,{to:"/data/nut",onClick:function(){v(3)},style:{color:l===3?"#EAB764":"#FFF"},children:x("stake.nav_nut")}),(0,n.jsx)(d.rU,{to:"/data/rewards",onClick:function(){v(4)},style:{color:l===4?"#EAB764":"#FFF",display:"none"},children:x("stake.nav_rewards")})]}),(0,n.jsxs)("div",{className:u.account_box,children:[(0,n.jsx)(d.rU,{to:"/data/analytics",onClick:function(){v(5)},style:{color:l===5?"#EAB764":"#FFF",fontSize:"18px",marginRight:"25px"},children:x("stake.nav_analytics")}),t!=="in-detecting"&&t!=="active"&&(0,n.jsxs)("div",{style:{display:"inline-block"},children:[(0,n.jsx)("div",{style:{color:"rgb(234, 185, 102)",display:"inline-block",lineHeight:"52px",fontSize:"18px",fontFamily:"Univa Nova",cursor:"pointer"},onClick:s.$j,children:t==="in-activating"&&"connecting..."}),(0,n.jsx)("div",{style:{color:"rgb(234, 185, 102)",display:"inline-block",lineHeight:"52px",fontSize:"18px",fontFamily:"Univa Nova",cursor:"pointer"},onClick:b,children:t==="not-installed"&&"Connect Wallet"}),(0,n.jsx)("div",{style:{color:"rgb(234, 185, 102)",display:"inline-block",lineHeight:"52px",fontSize:"18px",fontFamily:"Univa Nova",cursor:"pointer"},onClick:s.$j,children:t==="not-active"&&"Connect Wallet"})]}),(0,n.jsxs)("div",{style:{display:t==="active"?"inline-block":"none"},className:u.account,children:[t==="active"&&(0,n.jsx)(_,{}),(0,n.jsx)("div",{className:u.yuan})]})]})]})})}var R=M}}]);
