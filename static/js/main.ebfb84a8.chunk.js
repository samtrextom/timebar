(this.webpackJsonptimebar=this.webpackJsonptimebar||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),s=n(14),r=n.n(s),a=(n(142),n(143),n(27)),l=n(197),j=n(201),d=n(202),b=n(4);function o(){var e=Object(i.useState)(new Date),t=Object(a.a)(e,2),n=t[0],c=t[1],s=100*(n.getSeconds()+60*n.getMinutes()+60*n.getHours()*60+24*(n.getDate()-1)*60*60+30*n.getMonth()*24*60*60)/31536e3,r=String(s)+"%";return Object(i.useEffect)((function(){setTimeout((function(){c(new Date)}),100)})),Object(b.jsxs)(l.a,{style:{margin:5},children:[Object(b.jsx)(j.a,{title:" Time Bar "}),Object(b.jsx)(d.a,{children:Object(b.jsxs)("div",{style:{backgroundColor:"#08590070",height:"3.5vh",marginLeft:100,marginRight:100,color:"#333",borderRadius:20,width:"80%"},children:["POYR - ",String(100-s).substring(0,9),"%",Object(b.jsx)("div",{style:{backgroundColor:"#fff",height:"5vh",marginTop:"-2.9vh",width:r,marginLeft:-1}})]})})]})}var u=n(204),O=n(64),h=n(17),x=n(203),g=function(e){return 100*(e.getSeconds()+60*e.getMinutes()+60*e.getHours()*60+24*(e.getDate()-1)*60*60+30*e.getMonth()*24*60*60)/31536e3},f=100/365,v=100/365/24,y=100/365/24/60,m=100/365/24/60/60;function p(){var e=Object(i.useState)(new Date),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(null),r=Object(a.a)(s,2),o=r[0],f=r[1];return Object(b.jsxs)(l.a,{style:{margin:5},children:[Object(b.jsx)(j.a,{title:" Date To Percent Convertor "}),Object(b.jsx)(d.a,{children:Object(b.jsx)("div",{style:{display:"flex",width:"100%"},children:Object(b.jsxs)("div",{style:{display:"block"},children:[Object(b.jsx)("div",{children:Object(b.jsx)(h.a,{utils:O.a,children:Object(b.jsx)(x.a,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:n,onChange:function(e){c(e)},KeyboardButtonProps:{"aria-label":"change date"}})})}),Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsx)(u.a,{onClick:function(){f(g(n))},variant:"contained",children:"Convert"}),o&&Object(b.jsxs)("div",{style:{fontSize:30,marginLeft:20},children:["POYR: ",String(100-o).substring(0,5)]})]})]})})})]})}var C=n(208);function S(){var e=Object(i.useState)(new Date),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(null),r=Object(a.a)(s,2),o=r[0],f=r[1],v=function(e){c(e)};return Object(b.jsxs)(l.a,{style:{margin:5},children:[Object(b.jsx)(j.a,{title:" Date Time To Percent Convertor "}),Object(b.jsx)(d.a,{children:Object(b.jsx)("div",{style:{display:"flex",width:"100%"},children:Object(b.jsxs)("div",{style:{display:"block"},children:[Object(b.jsx)("div",{children:Object(b.jsxs)(h.a,{utils:O.a,children:[Object(b.jsx)(x.a,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:n,onChange:v,KeyboardButtonProps:{"aria-label":"change date"}}),Object(b.jsx)(C.a,{margin:"normal",id:"time-picker",label:"Time picker",value:n,onChange:v,KeyboardButtonProps:{"aria-label":"change time"}})]})}),Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsx)(u.a,{onClick:function(){f(g(n))},variant:"contained",children:"Convert"}),o&&Object(b.jsxs)("div",{style:{fontSize:30,marginLeft:20},children:["POYR: ",String(100-o).substring(0,9)]})]})]})})})]})}function k(){return Object(b.jsxs)(l.a,{style:{margin:5},children:[Object(b.jsx)(j.a,{title:" Time Increments "}),Object(b.jsx)(d.a,{children:Object(b.jsx)("div",{style:{display:"flex",width:"100%"},children:Object(b.jsxs)("div",{style:{display:"block",justifyContent:"left",textAlign:"left"},children:[Object(b.jsx)("div",{children:"1 Year : 100%"}),Object(b.jsx)("div",{children:"1 Day : .28%"}),Object(b.jsx)("div",{children:"1 Hour : .0117%"}),Object(b.jsx)("div",{children:"1 Minute : .00019%"}),Object(b.jsx)("div",{children:"1 Second : .000032%"})]})})})]})}var R=n(206);function w(){var e=Object(i.useRef)(),t=Object(i.useRef)(),n=Object(i.useRef)(),c=Object(i.useRef)(),s=Object(i.useState)(null),r=Object(a.a)(s,2),o=r[0],O=r[1];return Object(b.jsxs)(l.a,{style:{margin:5},children:[Object(b.jsx)(j.a,{title:" Time Increments "}),Object(b.jsx)(d.a,{children:Object(b.jsx)("div",{style:{display:"flex",width:"100%"},children:Object(b.jsxs)("div",{style:{display:"block",justifyContent:"left",textAlign:"left"},children:[Object(b.jsx)("div",{children:Object(b.jsx)(R.a,{type:"number",label:"Days",inputRef:e})}),Object(b.jsx)("div",{children:Object(b.jsx)(R.a,{type:"number",label:"Hours",inputRef:t})}),Object(b.jsx)("div",{children:Object(b.jsx)(R.a,{type:"number",label:"Minutes",inputRef:n})}),Object(b.jsx)("div",{children:Object(b.jsx)(R.a,{type:"number",label:"Seconds",inputRef:c})}),Object(b.jsxs)("div",{style:{marginTop:7,display:"flex"},children:[Object(b.jsx)(u.a,{type:"number",variant:"contained",onClick:function(){console.log(e);var i=e.current.value*f+t.current.value*v+n.current.value*y+c.current.value*m;console.log(i),O(i)},children:"Convert"}),o&&Object(b.jsxs)("div",{style:{fontSize:30,marginLeft:20},children:["POYR: ",String(o).substring(0,9)]})]})]})})})]})}var D=function(){return Object(b.jsx)("div",{className:"App",style:{display:"flex",width:"100vw",justifyContent:"center",backgroundColor:"#e3e3e3"},children:Object(b.jsxs)("div",{style:{display:"block"},children:[Object(b.jsx)("h1",{children:"Percent of Year Remaining (POYR)"}),Object(b.jsx)(o,{}),Object(b.jsx)(k,{}),Object(b.jsx)(p,{}),Object(b.jsx)(S,{}),Object(b.jsx)(w,{})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,211)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),P()}},[[171,1,2]]]);
//# sourceMappingURL=main.ebfb84a8.chunk.js.map