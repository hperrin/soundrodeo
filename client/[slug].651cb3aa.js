import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as r,c,b as l,f as h,g as u,h as f,j as p,k as d,a9 as m,n as v}from"./client.ef0a41fc.js";function g(t){let s,a,g,j,q,w,x=t[0].title+"",y=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(x),q=e(),w=n("div"),this.h()},l(t){i('[data-svelte="svelte-iu3vwn"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=h(g);j=u(s,x),s.forEach(r),q=c(t),w=l(t,"DIV",{class:!0}),h(w).forEach(r),this.h()},h(){f(w,"class","content svelte-1ycksgq")},m(t,s){p(t,a,s),p(t,g,s),d(g,j),p(t,q,s),p(t,w,s),w.innerHTML=y},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&x!==(x=t[0].title+"")&&m(j,x),1&a&&y!==(y=t[0].html+"")&&(w.innerHTML=y)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(q),t&&r(w)}}}async function j({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function q(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,q,g,a,{post:0})}}export{j as preload};
