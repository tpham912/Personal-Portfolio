(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(14),i=c.n(n),r=(c(21),c(22),c(0)),l=function(){return Object(r.jsxs)("header",{class:"main-header",children:[Object(r.jsx)("h1",{id:"name",children:"Personal Portfolio"}),Object(r.jsxs)("ul",{id:"menu",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#about",children:"About Me"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#work",children:"Projects"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#contact",children:"Contact Me"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#resume",children:"Resume"})})]})]})},o=c.p+"static/media/myself.ec283de2.jpg",j=c.p+"static/media/white.068cc9c0.jpg",h=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{id:"background-img",children:Object(r.jsx)("img",{src:j})}),Object(r.jsx)("img",{src:o,alt:"profile-pic",class:"profile-pic"}),Object(r.jsx)("section",{id:"about",children:Object(r.jsxs)("div",{class:"info",children:[Object(r.jsx)("h1",{children:"About Me"}),Object(r.jsxs)("div",{class:"about-me-content",children:[Object(r.jsx)("p",{children:" Hi, my name is Tina. I'm from Saigon, Vietnam. I was born and raised there until I was 14, but now I'm based in Seattle, Washington. I majored in Biology at the University of Texas at Dallas and graduated with my Bachelor of Science in August 2020. After graduating, I worked in the healthcare industry before deciding to make a career switch into the tech field. I'm currently attending SMU full-stack web developement bootcamp full time. So far, I have experienced working with HTML, advanced CSS, Bootstrap, Javascript and API. Feel free to check out my favorite assignments I've done throughout the course."}),Object(r.jsx)("p",{children:"Stay tuned for future projects. . . ."})]})]})})]})},d=c.p+"static/media/password.db32bed1.png",m=c.p+"static/media/workdaysched.cae6e81d.png",b=c.p+"static/media/weatherapp.8fe864e4.png",u=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Projects"}),Object(r.jsxs)("section",{id:"work",children:[Object(r.jsxs)("div",{class:"project",children:[Object(r.jsx)("a",{href:"https://tpham912.github.io/Random-Password-Generator-Project/",children:Object(r.jsx)("img",{src:d,width:"294.5",height:"150",title:"Password-Gen",alt:"password-logo"})}),Object(r.jsx)("h3",{class:"project-title",children:"Random Password Generator"})]}),Object(r.jsxs)("div",{class:"project",children:[Object(r.jsx)("a",{href:"https://tpham912.github.io/Work-Day-Scheduler-Project/",children:Object(r.jsx)("img",{src:m,width:"200",height:"121",title:"Work-Day-Scheduler",alt:"work-day-logo"})}),Object(r.jsx)("h3",{class:"project-title",children:"Work Day Scheduler"})]}),Object(r.jsxs)("div",{class:"project",children:[Object(r.jsx)("a",{href:"https://tpham912.github.io/Weather-Dashboard/",children:Object(r.jsx)("img",{src:b,width:"200",height:"121",title:"Weather-app",alt:"password-logo"})}),Object(r.jsx)("h3",{class:"project-title",children:"Weather Dashboard"})]})]})]})},O=c(5);var x=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{}),Object(r.jsx)(u,{}),Object(r.jsx)(O.b,{to:"/contactMe",children:Object(r.jsx)("button",{className:"btn-Contact",children:"Message Me"})})]})},p=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{class:"line1"}),Object(r.jsx)("section",{id:"contact",children:Object(r.jsxs)("div",{class:"info",children:[Object(r.jsx)("h3",{children:"Contact Me"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/tpham912",children:"GitHub"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.linkedin.com/in/tinacpham/",children:"LinkedIn"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"mailto:tina.pham8912@gmail.com",children:"Email"})})]})]})}),Object(r.jsx)("section",{children:Object(r.jsxs)("div",{class:"info",children:[Object(r.jsx)("h4",{children:"Resume"}),Object(r.jsx)("div",{id:"resume",children:Object(r.jsx)("a",{href:"https://my.indeed.com/p/tinap-tw4g6vf",children:"Resume"})})]})})]})},g=c(2),f=c(6),v=c(8),w=c(13),y=function(e,t){var c=Object(s.useState)({name:"",email:"",message:""}),a=Object(f.a)(c,2),n=a[0],i=a[1],r=Object(s.useState)({}),l=Object(f.a)(r,2),o=l[0],j=l[1],h=Object(s.useState)(!1),d=Object(f.a)(h,2),m=d[0],b=d[1];return Object(s.useEffect)((function(){0===Object.keys(o).length&&m&&console.log(n)}),[o]),{handleChange:function(e){var t=e.target,c=t.name,s=t.value;i(Object(w.a)(Object(w.a)({},n),{},Object(v.a)({},c,s)))},handleSubmit:function(e){e.preventDefault(),j(t(n)),b(!0)},values:n,errors:o}};function S(e){var t={};return console.log(e.name),e.name.trim()||(t.name="Name Required"),e.name.trim()&&/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e.email)||(t.email="Email address is invalid"),e.message?e.message.length<6&&(t.message="Please add more text to your message."):t.message="Message is required",t}var k=function(e){var t=y(e,S),c=t.handleChange,s=t.values,a=t.handleSubmit,n=t.errors;return Object(r.jsxs)("form",{className:"form",onSubmit:a,children:[Object(r.jsx)("h1",{children:"Please fill out the form below to get in contact with me."}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"name",className:"form-label",children:" Name: "}),Object(r.jsx)("input",{id:"contactName",type:"text",name:"name",className:"form-input",placeholder:"Enter your name here",value:s.name,onChange:c}),Object(r.jsx)("label",{htmlFor:"email",className:"form-label",children:" Email: "}),Object(r.jsx)("input",{id:"contactEmail",type:"text",name:"email",className:"form-input",value:s.email,onChange:c}),Object(r.jsx)("label",{htmlFor:"message",className:"form-label",children:" Your message: "}),Object(r.jsx)("textarea",{id:"contactMessage",name:"message",className:"form-control",rows:"5",value:s.message,onChange:c})]}),Object(r.jsx)("button",{className:"btn-Submit",type:"submit",children:"Contact Me"}),n.name&&Object(r.jsx)("p",{children:n.name}),n.email&&Object(r.jsx)("p",{children:n.email}),n.message&&Object(r.jsx)("p",{children:n.message})]})},N=function(){var e=Object(s.useState)(!1),t=Object(f.a)(e,2),c=(t[0],t[1]);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"form-container",children:[Object(r.jsx)("span",{className:"close-btn",children:"\xd7"}),Object(r.jsx)("div",{className:"form-content-left",children:Object(r.jsx)("img",{className:"form-img",src:"img/img-2.svg",alt:"spaceship"})}),Object(r.jsx)(k,{submitForm:function(){c(!0)}}),Object(r.jsx)(O.b,{to:"/Personal-Portfolio",children:Object(r.jsx)("button",{className:"btn-Home",children:"Home"})})]})})};var P=function(){return Object(r.jsx)(O.a,{children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsxs)(g.c,{children:[Object(r.jsx)(g.a,{exact:!0,path:"/Personal-Portfolio",component:x}),Object(r.jsx)(g.a,{exact:!0,path:"/contactMe",component:N})]}),Object(r.jsx)(p,{})]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(P,{})}),document.getElementById("root")),M()}},[[32,1,2]]]);
//# sourceMappingURL=main.d732b270.chunk.js.map