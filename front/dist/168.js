(self.webpackChunkfront=self.webpackChunkfront||[]).push([[168],{8678:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7294);const l=e=>{const[t,n]=(0,r.useState)(e);return[t,(0,r.useCallback)((e=>{n(e.target.value)}),[]),n]}},7253:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Z});var r=n(8678),l=n(9669),o=n.n(l),a=n(9163);const i=a.ZP.div`
  width: 100%;
  height: 100%;
  max-width: 1160px;
  margin: 0 auto;
`,s=a.ZP.header`
  width: 100%;
  height: 10%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,u=a.ZP.div``,c=a.ZP.div``,d=a.ZP.div`
display: flex;
width: 100%;
max-width: 1160px;
height: 100%;
max-height:600px;
column-gap: 7px;
}
`,m=a.ZP.div`
  width: 100%;
  max-width: 250px;
  background-color: #e9ebee;
  color: #000;
  border-radius: 7px;
  & > div {
    padding: 20px 21px;
    font-size: 1.5rem;
    height: 52px;
  }

  & > hr{
    width:83%;
    margin-top:25px;
  }
  & > ul{
    list-style:none;
    padding: 0 22px;
    li{
      padding : 3px;
      img{
        border-radius:100%
      }
    }
  }
`,h=a.ZP.div`
border-radius: 7px;
  max-width: 910px;
  width: 100%;
  height: 100%;
  max-height: 600px;
  background-color: #e9ebee;
  color: #000;
`,p=a.ZP.div`
  height: 91%;
  max-height: 92%;
  position: relative;
`,x=a.ZP.div`
  width: 100%;
  position: absolute;
  overflow-y: auto;
  left: 0;
  max-height: 100%;
  bottom: 0;
  padding: 38px 20px;
  word-break: break-all;

  & > div {
   display:flex;
    margin-top:16px;
   img {
    border-radius: 100%;
    height: 35px;
   }
   div {
    display: flex;
    flex-direction: column;
    margin-left: 9px;
   }
  }
`,g=a.ZP.div`
  height: 100%;
  max-height: 8%;
  width:96%;
  position: relative;
  overflow: hidden;
  margin: -9px auto;
  border-radius: 5px;
  & form {
    display: flex;
    height: 100%;
    position: relative;
    & > input {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border: none;
      color: #000;
      outline: none;
      font-size: 1.1rem;
      padding: 0 20px;
    }

    & > button {
      position: absolute;
      top: 0;
      z-index: 1;
      width: 7%;
      height: 100%;
      background-color:#3F6797 ;
      border: none;
      color: ffffff;
      cursor: pointer;
      right: 0;
      &:hover {
        color: C5C2C2;
        border: C5C2C2;
      }
    }
  }
`;var E=n(7294),f=n(6182),w=n.n(f),v=n(8767),y=n(6809),b=n.n(y),k=n(3727);function C(e){return E.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},E.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),E.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))}function S(e){return E.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:52,height:34,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},E.createElement("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),E.createElement("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),E.createElement("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),E.createElement("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),E.createElement("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),E.createElement("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"}))}const Z=()=>{const[e,t]=(0,E.useState)(0),[n,l]=(0,E.useState)(""),[a,f]=(0,E.useState)(""),[y,Z]=(0,E.useState)([]),[P,j,N]=(0,r.Z)(""),L=window.location.href.split("/"),[z,R]=(0,E.useState)({}),[U,W]=(0,E.useState)([]),B=(0,E.useRef)(),Q=(0,E.useRef)(null),{data:T}=(0,v.useQuery)(["uers"],(()=>o().get("/api/auth/me/jwt").then((e=>e.data))),{onSuccess:e=>{t(e.id),l(e.name),f(e.email)},onError:e=>{console.log(e)}}),{data:D}=(0,v.useQuery)(["channels"],(()=>o().get("/api/chat/list").then((e=>e.data.channelList))),{onSuccess:e=>{console.log("channeldata",e);const t=e.find((e=>e.url===L[4]));console.log("찾아라라라라라라",t),R(t)},onError:e=>{console.log(e)}});console.log("ttfd",U);const F=()=>{Q.current.scrollIntoView({behavior:"smooth"})};(0,E.useEffect)((()=>(B.current=b()("http://localhost:3333/chat"),B.current.on("msgToClient",(e=>{console.log("test1234",e[1]),W((t=>[...t,{userEmail:e[3],userName:e[1],text:e[2]}])),F()}),[F]),null!==z&&0!==e&&""!==n&&void 0!==n&&(console.log("join room"),B.current.emit("join",z.name,z.dep,z.url,e,n,a,z.id)),B.current.on("joinRoom",(e=>{console.log("호우!",e),Z(e)})),()=>{B.current.close()})),[z,e,n,a]);const H=(0,E.useCallback)((e=>{e.preventDefault(),B.current.emit("msgToServer",L[4],n,P,a),N("")}),[n,P,a]);return E.createElement(i,null,E.createElement(s,null,E.createElement(c,null,E.createElement(k.rU,{to:"/"},E.createElement("h1",null,"CodeHouse"))),E.createElement(u,null,E.createElement(k.rU,{to:"/listroom"},E.createElement("span",null,E.createElement(S,null))))),E.createElement(d,null,E.createElement(m,null,E.createElement("div",null,"Users"),E.createElement("hr",null),E.createElement("ul",null,y.map(((e,t)=>E.createElement("li",{key:e.userName+t},E.createElement("img",{src:w().url(e.userEmail,{s:"15px",d:"retro"}),alt:e.userName}),E.createElement("span",null,e.userName)))))),E.createElement(h,null,E.createElement(p,null,E.createElement(x,null,U.map(((e,t)=>E.createElement("div",{ref:Q,key:e.userName+t},E.createElement("img",{src:w().url(e.userEmail,{s:"35px",d:"retro"}),alt:e.userName}),E.createElement("div",null,e.text&&E.createElement("span",{style:{fontWeight:700}},e.userName," "),E.createElement("span",null,e.text))))))),E.createElement(g,null,E.createElement("form",{onSubmit:H},E.createElement("input",{type:"text",placeholder:"Send a Message",onChange:j,value:P}),E.createElement("button",{type:"submit"},E.createElement(C,null)))))))}},7020:()=>{}}]);