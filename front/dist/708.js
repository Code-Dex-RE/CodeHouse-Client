(self.webpackChunkfront=self.webpackChunkfront||[]).push([[708],{8678:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{const[t,n]=(0,a.useState)(e);return[t,(0,a.useCallback)((e=>{n(e.target.value)}),[]),n]}},5708:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var a=n(7294),r=n(9669),l=n.n(r),o=n(5243),i=n(8678),u=n(9163);const s=u.ZP.div`
  width: 100%;
  max-width: 1160px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,m=u.ZP.header`
  width: 100%;
  max-width: 1160px;
  text-align: center;
  & h2 {
    font-size: 50px;
    margin: 0;
  }
  & h3 {
    margin-top: 0;
    font-size: 40px;
  }
`,c=u.ZP.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
 & input{
    margin-left:48px;
    margin-bottom: 53px;

 }
}
`,d=u.ZP.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
 & input{
    margin-left:56px;
    margin-bottom: 68px;

 }
}
`,p=u.ZP.div`
width: 100%;
max-width: 600px;
margin: 0 auto;
margin-bottom: 74px;
& input{
    margin-left:75px;
}
& label{
    padding-left:17px;
}
}
`,h=u.ZP.form``,x=u.ZP.label`
  font-size: 38px;
`,g=u.ZP.input`
border:none;
border-bottom:2px solid;
width: 100%;
max-width: 400px;
}
`,f=u.ZP.div`
width: 100%;
max-width: 600px;
margin: 0 auto;
text-align:center;
}
`,v=u.ZP.button`
  width: 150px;
  height: 42px;
  margin-left: 117px;
  font-size: 20px;
  background-color: FFFFFF;
  border-radius: 7px;
`,b=u.ZP.button`
  width: 220px;
  height: 42px;
  float: right;
  margin-right: 53px;
  font-size: 20px;
  background-color: 333333;
  border-radius: 7px;
  color: FFFFFF;
`,w=({history:e})=>{const[t,n,r]=(0,i.Z)(""),[u,w]=(0,a.useState)(!1),[E,Z]=(0,a.useState)(!1),[C,P,F]=(0,i.Z)(""),[k,S]=(0,i.Z)(""),[y,z]=(0,a.useState)(!1),[j,M]=(0,o.Z)(["jwt"]),A=(j.jwt,{name:t,bio:k});console.log("jwt",j),console.log(j.jwt),(0,a.useEffect)((()=>{l().get("/api/auth/me",{withCredentials:!0}).then((e=>{console.log(e.data),F(e.data.email),r(e.data.name)}))}),[]);const B=(0,a.useCallback)((t=>(t.preventDefault(),l().post("/api/auth",A).then((t=>{e.push("/"),console.log(t.headers),z(!0)})).catch((e=>{var t,n;w(403===(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.statusCode))})))),[t,k]);return a.createElement(s,null,a.createElement(m,null,a.createElement("h2",null,"Welcom CodeHouse"),a.createElement("h3",null,"please input basic member information")),a.createElement(h,{onSubmit:B},a.createElement(c,null,a.createElement(x,null,"Name"),a.createElement(g,{type:"text",value:t,onChange:n,placeholder:"Input name"})),a.createElement(d,null,a.createElement(x,null,"email"),a.createElement(g,{type:"email",value:C,readOnly:!0})),a.createElement(p,null,a.createElement(x,null,"Bio"),a.createElement(g,{type:"text",value:k,onChange:S,placeholder:"Input Bio"})),a.createElement(f,null,a.createElement(v,null,"Cancle"),a.createElement(b,{type:"submit"},"Sign Up"))))}},5243:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294);const r=n(9585).Z;var l=a.createContext(new r);l.Provider,l.Consumer;const o=l;function i(e){var t=(0,a.useContext)(o);if(!t)throw new Error("Missing <CookiesProvider>");var n=t.getAll(),r=(0,a.useState)(n),l=r[0],i=r[1],u=(0,a.useRef)(l);return(0,a.useEffect)((function(){function n(){var n=t.getAll();(function(e,t,n){if(!e)return!0;for(var a=0,r=e;a<r.length;a++){var l=r[a];if(t[l]!==n[l])return!0}return!1})(e||null,n,u.current)&&i(n),u.current=n}return t.addChangeListener(n),function(){t.removeChangeListener(n)}}),[t]),[l,(0,a.useMemo)((function(){return t.set.bind(t)}),[t]),(0,a.useMemo)((function(){return t.remove.bind(t)}),[t])]}}}]);