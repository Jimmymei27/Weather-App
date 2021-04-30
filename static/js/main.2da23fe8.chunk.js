(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c(16),r=c.n(i),s=(c(24),c(5)),a=c(51),o=c(1),l=c(26),j={flexGrow:1,backgroundColor:"#fafafa"},d=function(e){var t=e.daily,c=e.fullData,n=new Date,i=1e3*t.dt;n.setTime(i);var r=c.filter((function(e){return e.dt_txt.includes(t.dt_txt.slice(0,10))})),s=r.map((function(e){return e.main.temp})).reduce((function(e,t){return e+t}))/r.length,d=r.map((function(e){return e.main.temp_max})).reduce((function(e,t){return e+t}))/r.length,b=r.map((function(e){return e.main.temp_min})).reduce((function(e,t){return e+t}))/r.length;return Object(o.jsxs)(a.a,{style:j,children:[Object(o.jsx)("h2",{children:l(n).format("MMMM Do, YYYY")}),Object(o.jsx)("h3",{children:l(n).format("dddd").toUpperCase()}),Object(o.jsx)("img",{alt:"Weather Icon",src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png")}),Object(o.jsx)("h4",{style:{color:"#f7910b"},children:t.weather[0].description.toUpperCase()}),Object(o.jsx)("h2",{style:{color:"#f7910b"},children:Math.round(s)+"\xb0F"}),Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[Object(o.jsxs)("p",{children:["HIGH: ",d.toFixed(2),"\xb0F"]}),Object(o.jsxs)("p",{children:["LOW: ",b.toFixed(2),"\xb0F"]})]})]})},b=c(50),u=c(49),f=Object(u.a)({citiesSection:{display:"flex",justifyContent:"space-evenly",padding:"35px",color:"#f7910b",fontSize:"20px"},cities:{width:"400px",height:"70px","&:hover":{backgroundColor:"#ECECEC",cursor:"pointer"}},borderLine:{borderRight:"1px solid #ECECEC"}}),h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)([]),a=Object(s.a)(r,2),l=a[0],j=a[1],u=Object(n.useState)(""),h=Object(s.a)(u,2),p=h[0],x=h[1],O=Object(n.useState)(""),m=Object(s.a)(O,2),y=m[0],C=m[1],g=Object(n.useState)(void 0),v=Object(s.a)(g,2),w=v[0],k=v[1],N=Object(n.useState)(""),E=Object(s.a)(N,2),S=E[0],D=E[1],F="http://api.openweathermap.org/data/2.5/forecast?zip=".concat(p,"&units=imperial&APPID=").concat("f24086492797537d27e22e610b6a07a3"),L=f(),M=function(){fetch(F).then((function(e){return e.json()})).then((function(e){if("200"===e.cod){var t=e.list.filter((function(e){return e.dt_txt.includes("18:00:00")}));i(e.list),j(t),k(e.city.name),C(p),x("")}else j(void 0);x("")}))},A=function(e){x(e),D(e)};return Object(n.useEffect)((function(){M()}),[S]),Object(o.jsxs)("div",{style:{width:"80%",marginTop:"55px",margin:"auto",textAlign:"center"},children:[Object(o.jsx)("div",{style:{backgroundColor:"#f7910b"},children:Object(o.jsx)("h1",{style:{color:"#ffffff"},children:"Weather Displayer"})}),Object(o.jsxs)("div",{className:L.citiesSection,children:[Object(o.jsx)("div",{className:L.cities,onClick:function(){return A(10016)},children:Object(o.jsx)("p",{children:"New York"})}),Object(o.jsx)("span",{className:L.borderLine}),Object(o.jsx)("div",{className:L.cities,onClick:function(){return A(33101)},children:Object(o.jsx)("p",{children:"Miami"})}),Object(o.jsx)("span",{className:L.borderLine}),Object(o.jsx)("div",{className:L.cities,onClick:function(){return A(90001)},children:Object(o.jsx)("p",{children:"Los Angeles"})}),Object(o.jsx)("span",{className:L.borderLine}),Object(o.jsx)("div",{className:L.cities,onClick:function(){return A(60601)},children:Object(o.jsx)("p",{children:"Chicago"})}),Object(o.jsx)("span",{className:L.borderLine}),Object(o.jsx)("div",{className:L.cities,onClick:function(){return A(75206)},children:Object(o.jsx)("p",{children:"Dallas"})})]}),Object(o.jsx)("h2",{style:{color:"#f7910b"},children:"Five Day Forecast"}),Object(o.jsx)("h2",{style:{color:"#f7910b"},children:w||""}),Object(o.jsx)("h2",{style:{color:"#f7910b"},children:y}),Object(o.jsxs)("div",{style:{display:"row",justifyContent:"center"},children:[Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.target.reset()},children:[Object(o.jsx)("input",{placeholder:"Enter Zip Code",onChange:function(e){return x(e.target.value)},style:{fontSize:"20px"}}),Object(o.jsx)("button",{style:{backgroundColor:"#f7910b",border:"2px solid #f7910b",color:"#ffffff",fontSize:"20px",borderRadius:"3px"},onClick:M,children:"Check Weather"})]}),l?Object(o.jsx)(b.a,{style:{display:"flex",justifyContent:"center",padding:"50px"},children:l&&l.map((function(e){return Object(o.jsx)(d,{daily:e,fullData:c},"index")}))}):Object(o.jsx)("h1",{style:{color:"#f7910b"},children:"ENTER A ZIP CODE!!!"})]})]})},p=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(h,{})})};r.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.2da23fe8.chunk.js.map