import{r as o,cV as t,f as a,Z as r}from"./index.29c86768.js";import{r as s}from"./animation.a2928106.js";function n({el:n,to:c,duration:l=500,callback:i}){const e=o(!1),u=(o=>o.scrollTop)(n),f=c-u;let p=0;l=t(l)?500:l;const m=function(){if(!a(e))return;p+=20;const o=(t=p,c=u,v=f,(t/=l/2)<1?v/2*t*t+c:-v/2*(--t*(t-2)-1)+c);var t,c,v;((o,t)=>{o.scrollTop=t})(n,o),p<l&&a(e)?s(m):i&&r(i)&&i()};return{start:()=>{e.value=!0,m()},stop:()=>{e.value=!1}}}export{n as u};