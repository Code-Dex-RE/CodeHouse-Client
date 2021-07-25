(self.webpackChunkfront=self.webpackChunkfront||[]).push([[26],{3291:(e,t,n)=>{"use strict";n.d(t,{r:()=>i});var o,r=n(7294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e){return r.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:38,height:38,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"moon_svg__feather moon_svg__feather-moon"},e),o||(o=r.createElement("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})))}n.p},2038:(e,t,n)=>{"use strict";n.d(t,{Z:()=>L});var o,r=n(8678),l=n(7294),i=n(5977),a=n(6809),p=n.n(a),s=new Uint8Array(16);function c(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(s)}const d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,u=function(e){return"string"==typeof e&&d.test(e)};for(var g=[],m=0;m<256;++m)g.push((m+256).toString(16).substr(1));const h=function(e,t,n){var o=(e=e||{}).random||(e.rng||c)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=o[r];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n}(o)};var x=n(9163);const f=x.ZP.div`
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
`,v=x.ZP.button`
  background: url(../assets/closeBtn.png) no-repeat right;
  float: right;
  width: 30px;
  height: 30px;
  border: none;
  background-size: 30px 30px;
  cursor: pointer;
`,w=x.ZP.h2`
  margin: 0;
  margin-bottom: 14px;
`,E=x.ZP.form``,k=x.ZP.input`
  width: 100%;
  height: 40px;
`,y=x.ZP.input`
  width: 100%;
  height: 94px;
`,Z=x.ZP.div`
  & > button {
    font-size: 17px;
  }
`,P=x.ZP.button`
  background-color: ffffff;
  width: 97px;
  height: 31px;
  border-radius: 4px;
  margin-right: 12px;
`,C=x.ZP.button`
  background-color: 333333;
  width: 128px;
  height: 31px;
  border-radius: 4px;
  color: white;
`,z=x.ZP.div`
  color: #e01e5a;
`,F=({show:e,closeButton:t,onCloseModal:n,id:o,history:i})=>{const a=p()("http://localhost:3333/chat",{transports:["websocket","polling"]}),[s,c,d]=(0,r.Z)(""),[u,g,m]=(0,r.Z)(""),x=h(),F=(0,l.useCallback)((e=>{e.stopPropagation()}),[]),L=(0,l.useCallback)((e=>{e.preventDefault(),""!==s&&(a.emit("join",s,u,x,o),i.push({pathname:`/room/${x}`}))}),[s,u]);return e?l.createElement(f,{onClick:n},l.createElement(b,{onClick:F},t&&l.createElement(v,{type:"button",onClick:n}),l.createElement(E,{onSubmit:L},l.createElement(w,null,"Create Your Room!"),l.createElement("div",{style:{marginBottom:19}},l.createElement(k,{type:"text",placeholder:"Name",onChange:c,value:s})),!s&&l.createElement(z,null,"방이름을 입력해주세요"),l.createElement("div",{style:{marginBottom:19}},l.createElement(y,{type:"text",placeholder:"Description",onChange:g,value:u})),l.createElement(Z,null,l.createElement(P,{type:"button",onClick:n},"Cancel"),l.createElement(C,{type:"submit"},"Create"))))):null};F.defaultProps={closeButton:!0,id:0};const L=(0,i.EN)(F)},1073:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(7294),r=n(9163);const l=r.ZP.button`
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
`,i=({icon:e,label:t,onClick:n})=>o.createElement(l,{onClick:n},e,o.createElement("span",null,t)),a=r.ZP.div`
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
`,p=r.ZP.div`
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
`,s=r.ZP.div`
  display: flex;
  flex-direction: column;
`;var c=n(9669),d=n.n(c);function u(e){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),o.createElement("polyline",{points:"16 17 21 12 16 7"}),o.createElement("line",{x1:"21",y1:"12",x2:"9",y2:"12"}))}function g(e){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.createElement("circle",{cx:"12",cy:"7",r:"4"}))}var m=n(3727),h=n(5977);const x=({show:e,onCloseModal:t})=>{const n=(0,h.k6)(),r={headers:{Authorization:""}},l=(0,o.useCallback)((e=>{e.stopPropagation()}),[]),c=(0,o.useCallback)((()=>{d().get("/api/auth/logout",r).then((e=>{console.log(e.status),200===e.status&&(console.log("logout"),n.push("/login"))})).catch((e=>{console.dir(e)}))}),[]);return e?o.createElement(a,{onClick:t},o.createElement(p,{onClick:l},o.createElement(s,null,o.createElement(m.rU,{to:"/profile",style:{margin:0}},o.createElement(i,{icon:o.createElement(g,null),label:"profile"})),o.createElement(i,{onClick:c,icon:o.createElement(u,null),label:"Logout"})))):null};x.defaultProps={};const f=x},8678:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(7294);const r=e=>{const[t,n]=(0,o.useState)(e);return[t,(0,o.useCallback)((e=>{n(e.target.value)}),[]),n]}},5805:(e,t,n)=>{"use strict";n.d(t,{Dy:()=>r,h4:()=>l,sk:()=>i,nZ:()=>a,gQ:()=>p,rE:()=>s,Hc:()=>c,or:()=>d,U3:()=>u,M9:()=>g,zT:()=>m,VF:()=>h,qF:()=>x,BO:()=>f});var o=n(9163);const r=o.ZP.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1160px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
`,l=o.ZP.header`
  width: 100%;
  height: 13%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,i=o.ZP.div`
  display: flex;
  align-items: center;
  margin-left: -22px;

  & a {
    overflow: hidden;
  }
`,a=o.ZP.div`
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
`,p=o.ZP.div`
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
`,s=o.ZP.img`
vertical-align: middle;
width: 40px;
height: 40px;
border-radius: 20px;
}
`,c=(o.ZP.div`
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
`,o.ZP.button`
  height: 50px;
  border: 0;
  background: none;
  vertical-align: middle;
`),d=o.ZP.main`
  max-width: 1160px;
  margin: 0 auto;
`,u=o.ZP.h2`
  font-size: 46px;
  line-height: 1;
  color: #333333;
  margin-top: 15px;
    margin-bottom: 0px;
`,g=o.ZP.p`
  font-size: 22px;
  color: #666666;
`,m=o.ZP.img`
  width: 1160px;
  height: 350px;
  border-radius: 5px;
`,h=o.ZP.div`
  max-width:1160px
  max-height:71px;
  margin-top:20px;
  text-align:center;
`,x=o.ZP.button`
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
`,f=o.ZP.button`
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
`},1314:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var o=n(7294),r=n(3727),l=n(2038),i=n(6182),a=n.n(i),p=n(6809),s=n.n(p),c=n(3291),d=n(9163);const u=d.ZP.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1160px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
`,g=(d.ZP.button`
  width: 120px;
  height: 40px;
  margin: 30px 0;
  line-height: 38px;
  text-align: left;

  border-radius: 4px;
  background: url(../../assets/refresh.svg) no-repeat 84px center;
  background-size: 26px 26px;
  background-color: 333333;
  color: ffffff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: ffffff;
    color: 333333;
  }
`,d.ZP.div`
  width: 100%;
  height: 100%;
`),m=d.ZP.div`
     display:flex;
     max-width:1160px;

     margin: 0 auto;
     column-gap:10px;
  
`,h=d.ZP.div`
    position:relative;
    border-radius: 6px;
    width: 52%;
    height:630px;
    background-color:e9ebee;
    & > div{ 
      display: flex;
    flex-direction: inherit;
    padding: 11px 32px;
}
    span{
      font-size: 21px;
      font-weight: 500;
    }

    button{
      margin-left: auto;
    border: none;
    background-color: #3F6797;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    padding:11px;
      :hover{
        background-color: e3e3e3;
        color: #fff;
      }
    }

  }
  & > ul{
      position: absolute;
      width: 100%;
      max-height: 544px;
      list-style: none;
      padding: 0;
      overflow-y: auto;
      margin: 0;
     &::-webkit-scrollbar{
       display:none;
     }
     }
    
     & li {
      padding: 7px 27px;
       span{
      color: 33333;
      font-size: 31px;
      font-weight: bold;
     }
     p{
       margin 0 0;
     }
    }

`,x=d.ZP.div`
    background-color:ffffff;
    box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 30%);
    height: 119px;
    width: 90%;
    border-radius: 5px;
    margin: 14px auto;
`,f=d.ZP.div`
    border-radius: 6px;
     width: 20%;
     height:630px;
     background-color:e9ebee;
     & > span{
      font-size: 22px;
      font-weight: 500;
      display:block;
      margin: 10px 16px;
     }


`,b=d.ZP.div`
     margin:0 20px;
  &  > span{
    font-size:11px;
    font-weight: 800;
  }
& ul{
  list-style: none;
  padding: 0 7px;
  margin: 7px 0;

    .user--top--presence-online{
         margin: 11px 0;
      i > img{
        border-radius:11px;
      }

      span{
        font-weight: 600;
        vertical-align: super;
        padding: 0 6px;
      }
    }

    .user--top--presence-offline{
      display:none;
  }
}

`,v=d.ZP.div`
margin:0 20px;
&  > span{
  font-size:11px;
  font-weight: 800;
}
& ul{
list-style: none;
padding: 0 7px;
margin: 7px 0;

  .user--bottom--presence-offline{
    margin: 11px 0;
    i > img{
      opacity: 0.6;
      border-radius:11px;
    }

    span{
      font-weight:300;
      vertical-align: super;
      padding: 0 6px;
    }
  }

  .user--bottom--presence-online{
    display:none;
  }
}

`,w=d.ZP.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  width: 27%;
  height:325px;
  background-color:e9ebee;
   & > i{
    text-align: center;
    padding: 31px 0;
  }

    img{
      border-radius: 31px; 
    }

    }
    & > span{
      text-align: center;
      margin-top: -13px;
      font-size: 18px;
      font-weight: 700;
    }
    
    & > p{
      font-weight: 300;
      text-align:center;
    }
   & > div {
     text-align:center;
     button{
       cursor:pointer;
      border: none;
      border-radius: 7px;
      background-color:#3F6797;
      color: #fff;
      font-size: 14px;
      padding: 10px 45px;
      :hover{
        background-color : e3e3e3;
      }
     }
   }   

`;d.ZP.button`
  width: 142px;
  height: 40px;
  background-color: 333333;
  color: ffffff;
  font-size: 20px;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 30%);
  margin: 30px 0;
  cursor: pointer;

  border-radius: 4px;
  &:hover {
    background-color: ffffff;
    color: #000;
  }
`;var E=n(5805),k=n(1073),y=n(9669),Z=n.n(y),P=n(8767);const C=()=>{const[e,t]=(0,o.useState)([]),[n,i]=(0,o.useState)([]),[p,d]=(0,o.useState)([]),[y,C]=(0,o.useState)(0),[z,F]=(0,o.useState)(!1),[L,S]=(0,o.useState)(!1),j=(0,o.useRef)(),{data:B,isLoading:N,error:M}=(0,P.useQuery)(["uers"],(async()=>{await new Promise((e=>setInterval(e,0)));const{data:e}=await Z().get("/api/auth/me/jwt");return e}),{retry:0});(0,o.useEffect)((()=>{Z().get("/api/chat/list").then((e=>{200===e.status&&(console.log(e.data.channelList),t(e.data.channelList))})),Z().get("/api/user").then((e=>{200===e.status&&(console.log(e.data),i(e.data))}))}),[]),(0,o.useEffect)((()=>(j.current=s().connect("http://localhost:3333/chat"),console.log(`궁금해지네 ?${null==B?void 0:B.id} ${null==B?void 0:B.name}`),null!=B&&B.id&&null!==(null==B?void 0:B.name)&&null!=B&&B.id&&void 0!==(null==B?void 0:B.name)&&j.current.emit("onlineList",null==B?void 0:B.id,null==B?void 0:B.name),j.current.on("getOnline",(e=>{console.log("testtt",e),d(e)})),()=>{var e;null===(e=j.current)||void 0===e||e.off("getOnline"),j.current.close()})),[null==B?void 0:B.id,null==B?void 0:B.name,j]),(0,o.useCallback)((()=>{}),[]);const O=(0,o.useCallback)((()=>{F((e=>!e))}),[]),R=(0,o.useCallback)((()=>{S((e=>!e))}),[]),U=(0,o.useCallback)((()=>{S(!1)}),[]);return N?o.createElement("p",null):M?o.createElement("p",null,"Somethin wnt wrong..."):o.createElement(u,null,o.createElement(E.h4,null,o.createElement(E.sk,null,o.createElement(E.nZ,null,o.createElement(r.rU,{to:"/"},"CodeHouse"))),o.createElement(E.gQ,null,B&&o.createElement("span",{onClick:O},o.createElement(E.rE,{src:a().url(B.email,{s:"24px",d:"retro"}),alt:B.name,title:B.name}),z&&o.createElement(k.Z,{show:z,onCloseModal:O})),o.createElement(E.Hc,null,o.createElement(c.r,null)))),o.createElement(g,null,o.createElement(m,null,o.createElement(f,null,o.createElement("span",null,"People "),o.createElement(b,null,o.createElement("span",null,"ONLINE"),o.createElement("ul",null,n.map((e=>{const t=p.map((e=>e.userID)).includes(e.id);return console.log("re",t),o.createElement("li",{key:e.id,className:" "+(t?"user--top--presence-online":"user--top--presence-offline")},o.createElement("i",null,o.createElement("img",{src:a().url(e.email,{s:"22px",d:"retro"}),alt:e.name,title:e.name})),o.createElement("span",null,e.name))})))),o.createElement(v,null,o.createElement("span",null,"OFFLINE"),o.createElement("ul",null,n.map((e=>{const t=p.map((e=>e.userID)).includes(e.id);return console.log("re",t),o.createElement("li",{key:e.id,className:" "+(t?"user--bottom--presence-online":"user--bottom--presence-offline")},o.createElement("i",null,o.createElement("img",{src:a().url(e.email,{s:"22px",d:"retro"}),alt:e.name,title:e.name})),o.createElement("span",null,e.name))}))))),o.createElement(h,null,o.createElement("div",null,o.createElement("span",null,"Your feed"),o.createElement("button",{onClick:R},"+ New Room")),o.createElement("ul",null,e.map((e=>o.createElement(x,{key:e.id},o.createElement(r.rU,{to:`/room/${e.url}`},o.createElement("li",null,o.createElement("span",null," ",e.name),o.createElement("p",null,e.dep)))))))),o.createElement(w,null,o.createElement("i",null,o.createElement("img",{src:a().url(B.email,{s:"60px",d:"retro"}),alt:B.name})),o.createElement("span",null,B.name),o.createElement("p",null,B.bio),o.createElement("div",null,o.createElement(r.rU,{to:"/profile",style:{margin:0}},o.createElement("button",null,"Edit Profile")))))),L?o.createElement(l.Z,{show:L,onCloseModal:U,id:B.id}):null)}},7020:()=>{}}]);