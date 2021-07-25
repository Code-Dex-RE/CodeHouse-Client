(self.webpackChunkfront=self.webpackChunkfront||[]).push([[532],{3291:(e,t,o)=>{"use strict";o.d(t,{r:()=>l});var n,r=o(7294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function l(e){return r.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:38,height:38,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"moon_svg__feather moon_svg__feather-moon"},e),n||(n=r.createElement("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})))}o.p},2038:(e,t,o)=>{"use strict";o.d(t,{Z:()=>j});var n,r=o(8678),a=o(7294),l=o(5977),i=o(6809),s=o.n(i),c=new Uint8Array(16);function p(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(c)}const d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,u=function(e){return"string"==typeof e&&d.test(e)};for(var h=[],g=0;g<256;++g)h.push((g+256).toString(16).substr(1));const m=function(e,t,o){var n=(e=e||{}).random||(e.rng||p)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){o=o||0;for(var r=0;r<16;++r)t[o+r]=n[r];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(h[e[t+0]]+h[e[t+1]]+h[e[t+2]]+h[e[t+3]]+"-"+h[e[t+4]]+h[e[t+5]]+"-"+h[e[t+6]]+h[e[t+7]]+"-"+h[e[t+8]]+h[e[t+9]]+"-"+h[e[t+10]]+h[e[t+11]]+h[e[t+12]]+h[e[t+13]]+h[e[t+14]]+h[e[t+15]]).toLowerCase();if(!u(o))throw TypeError("Stringified UUID is invalid");return o}(n)};var x=o(9163);const f=x.ZP.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
`,b=x.ZP.div`
  position: absolute;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 300px;
  padding: 40px;
  background-color: #fdfdfd;
`,w=x.ZP.button`
  background: url(../assets/closeBtn.png) no-repeat right;
  float: right;
  width: 30px;
  height: 30px;
  border: none;
  background-size: 30px 30px;
  cursor: pointer;
`,v=x.ZP.h2`
  margin: 0;
  margin-bottom: 14px;
`,E=x.ZP.form``,k=x.ZP.input`
  width: 100%;
  height: 40px;
`,y=x.ZP.input`
  width: 100%;
  height: 94px;
`,C=x.ZP.div`
  & > button {
    font-size: 17px;
  }
`,Z=x.ZP.button`
  background-color: ffffff;
  width: 97px;
  height: 31px;
  border-radius: 4px;
  margin-right: 12px;
`,P=x.ZP.button`
  background-color: 333333;
  width: 128px;
  height: 31px;
  border-radius: 4px;
  color: white;
`,z=x.ZP.div`
  color: #e01e5a;
`,F=({show:e,closeButton:t,onCloseModal:o,id:n,history:l})=>{const i=s()("http://localhost:3333/chat",{transports:["websocket","polling"]}),[c,p,d]=(0,r.Z)(""),[u,h,g]=(0,r.Z)(""),x=m(),F=(0,a.useCallback)((e=>{e.stopPropagation()}),[]),j=(0,a.useCallback)((e=>{e.preventDefault(),""!==c&&(i.emit("join",c,u,x,n),l.push({pathname:`/room/${x}`}))}),[c,u]);return e?a.createElement(f,{onClick:o},a.createElement(b,{onClick:F},t&&a.createElement(w,{type:"button",onClick:o}),a.createElement(E,{onSubmit:j},a.createElement(v,null,"Create Your Room!"),a.createElement("div",{style:{marginBottom:19}},a.createElement(k,{type:"text",placeholder:"Name",onChange:p,value:c})),!c&&a.createElement(z,null,"방이름을 입력해주세요"),a.createElement("div",{style:{marginBottom:19}},a.createElement(y,{type:"text",placeholder:"Description",onChange:h,value:u})),a.createElement(C,null,a.createElement(Z,{type:"button",onClick:o},"Cancel"),a.createElement(P,{type:"submit"},"Create"))))):null};F.defaultProps={closeButton:!0,id:0};const j=(0,l.EN)(F)},1073:(e,t,o)=>{"use strict";o.d(t,{Z:()=>f});var n=o(7294),r=o(9163);const a=r.ZP.button`
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  border-style: none;
  text-align: left;
  width: 100%;
  background-color: #fdfdfd;
  & > span {
    vertical-align: super;
    margin-left: 6px;
  }
  &:hover {
    background-color: 333333;
    color: ffffff;
  }
`,l=({icon:e,label:t,onClick:o})=>n.createElement(a,{onClick:o},e,n.createElement("span",null,t)),i=r.ZP.div`
  // position: fixed;
  // top: 0;
  // right: 0;
  // left: 0;
  // bottom: 0;
  // z-index: 1000;

  position: absolute;
  top: 43px;
  left: -63px;
  z-index: 1000;
`,s=r.ZP.div`
  width: 100%;
  max-width: 180px;
  // position: absolute;
  // right: 451px;
  // top: 64px;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);

  & img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`,c=r.ZP.div`
  display: flex;
  flex-direction: column;
`;var p=o(9669),d=o.n(p);function u(e){return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),n.createElement("polyline",{points:"16 17 21 12 16 7"}),n.createElement("line",{x1:"21",y1:"12",x2:"9",y2:"12"}))}function h(e){return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),n.createElement("circle",{cx:"12",cy:"7",r:"4"}))}var g=o(3727),m=o(5977);const x=({show:e,onCloseModal:t})=>{const o=(0,m.k6)(),r={headers:{Authorization:""}},a=(0,n.useCallback)((e=>{e.stopPropagation()}),[]),p=(0,n.useCallback)((()=>{d().get("/api/auth/logout",r).then((e=>{console.log(e.status),200===e.status&&(console.log("logout"),o.push("/login"))})).catch((e=>{console.dir(e)}))}),[]);return e?n.createElement(i,{onClick:t},n.createElement(s,{onClick:a},n.createElement(c,null,n.createElement(g.rU,{to:"/profile",style:{margin:0}},n.createElement(l,{icon:n.createElement(h,null),label:"profile"})),n.createElement(l,{onClick:p,icon:n.createElement(u,null),label:"Logout"})))):null};x.defaultProps={};const f=x},8678:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var n=o(7294);const r=e=>{const[t,o]=(0,n.useState)(e);return[t,(0,n.useCallback)((e=>{o(e.target.value)}),[]),o]}},1842:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>m});var n=o(7294),r=o(5977),a=o(3727),l=o(8767),i=o(9669),s=o.n(i),c=o(6182),p=o.n(c),d=o(3291),u=o(2038),h=o(5805),g=o(1073);const m=()=>{const[e,t]=(0,n.useState)(!1),[o,i]=(0,n.useState)(!1),{data:c,isLoading:m,error:x}=(0,l.useQuery)(["users"],(async()=>{await new Promise((e=>setInterval(e,0)));const{data:e}=await s().get("/api/auth/me/jwt");return e}),{retry:0}),f=(0,n.useCallback)((()=>{t((e=>!e))}),[]),b=(0,n.useCallback)((()=>{i((e=>!e))}),[]),w=(0,n.useCallback)((()=>{i(!1)}),[]);return m?n.createElement("p",null):c?x?n.createElement("p",null,"Somethin wnt wrong..."):(console.log("유저네임",null==c?void 0:c.name),n.createElement(h.Dy,null,n.createElement(h.h4,null,n.createElement(h.sk,null,n.createElement(h.nZ,null,n.createElement(a.rU,{to:"/"},"CodeHouse"))),n.createElement(h.gQ,null,c&&n.createElement("span",{onClick:f},n.createElement(h.rE,{src:p().url(c.email,{s:"24px",d:"retro"}),alt:c.name,title:c.name}),e&&n.createElement(g.Z,{show:e,onCloseModal:f})),n.createElement(h.Hc,null,n.createElement(d.r,null)))),n.createElement(h.or,null,(null==c?void 0:c.name)&&n.createElement(h.U3,null,c.name," 님 반갑습니다!"),n.createElement(h.U3,null,"다양한 개발자들과 소통해보세요!"),n.createElement(h.M9,null,"코더하우스에서 다양한 개발자들과 소통하고 프로젝트도 Try 해보세요.",n.createElement("br",null)," 즐거운 개발스택을 쌓아보아요!"),n.createElement(h.zT,{src:"../../assets/mainImg.jpeg"}),n.createElement(h.VF,null,n.createElement(h.qF,{onClick:b},"Create Room"),n.createElement(a.rU,{to:"/listroom"},n.createElement(h.BO,null,"Join Room")))),o?n.createElement(u.Z,{show:o,onCloseModal:w,id:null==c?void 0:c.id}):null)):n.createElement(r.l_,{to:"/login"})}},5805:(e,t,o)=>{"use strict";o.d(t,{Dy:()=>r,h4:()=>a,sk:()=>l,nZ:()=>i,gQ:()=>s,rE:()=>c,Hc:()=>p,or:()=>d,U3:()=>u,M9:()=>h,zT:()=>g,VF:()=>m,qF:()=>x,BO:()=>f});var n=o(9163);const r=n.ZP.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1160px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
`,a=n.ZP.header`
  width: 100%;
  height: 13%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,l=n.ZP.div`
  display: flex;
  align-items: center;
  margin-left: -22px;

  & a {
    overflow: hidden;
  }
`,i=n.ZP.div`
  width: 300px;
  height: 50px;
  background: url(../../assets/codelog.png) no-repeat left;
  background-size: 103px auto;

  & a {
    font-size: 43px;
    font-weight: bold;
    line-height: 43px;
    padding-left: 80px;
  }
`,s=n.ZP.div`
  height: 100%;
  padding-top: 25px;
  & a {
    height: 50px;
    margin-right: 35px;
    vertical-align: top;
    /*line-height: 50px;*/
    display: inline-block;
  }

  & > span {
    position: relative;
    display: inline-block;
    margin-right: 21px;
  }
`,c=n.ZP.img`
vertical-align: middle;
width: 40px;
height: 40px;
border-radius: 20px;
}
`,p=(n.ZP.div`
  display: flex;
  padding: 20px;
  width: 200px;

  & > img {
    width: 40px;
    height: 28px;
    border-radius: 15px;
  }

  & > div {
    width: 200px;
  }

  & #profile-name {
    font-weight: bold;
    display: block;
  }
  & #profile-profile {
    font-size: 13px;
    display: block;
  }
  & #profile-active {
    font-size: 13px;
    margin-top: 10px;
    display: block;
  }
`,n.ZP.button`
  height: 50px;
  border: 0;
  background: none;
  vertical-align: middle;
`),d=n.ZP.main`
  max-width: 1160px;
  margin: 0 auto;
`,u=n.ZP.h2`
  font-size: 46px;
  line-height: 1;
  color: #333333;
  margin-top: 15px;
    margin-bottom: 0px;
`,h=n.ZP.p`
  font-size: 22px;
  color: #666666;
`,g=n.ZP.img`
  width: 1160px;
  height: 350px;
  border-radius: 5px;
`,m=n.ZP.div`
  max-width:1160px
  max-height:71px;
  margin-top:20px;
  text-align:center;
`,x=n.ZP.button`
  width: 575px;
  height: 71px;
  margin-right: 5px;
  font-size: 35px;
  border-radius: 5px;
  color: FFFFFF;
  border:none;
  background-color: #3F6797;
  // box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    background-color: #e3e3e3;
    color: #fff;
    border: none;
  }
`,f=n.ZP.button`
  width: 575px;
  height: 71px;
  margin-left: 5px;
  font-size: 35px;
  border-radius: 5px;
  border:none;
  color: ffffff;
  background-color: #3F6797;
  // box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    background-color: #e3e3e3;
    color: #fff;
    border: none;
  }
`},7020:()=>{}}]);