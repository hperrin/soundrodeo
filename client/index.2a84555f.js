import{S as t,i as s,s as e,e as l,t as a,a as n,b as o,f as r,g as h,d as c,c as f,h as i,j as u,k as p,a9 as g,q as d,n as m,ak as v}from"./client.ef0a41fc.js";function E(t,s,e){const l=t.slice();return l[1]=s[e],l}function b(t){let s,e,d,m,v,E=t[1].title+"";return{c(){s=l("li"),e=l("a"),d=a(E),v=n(),this.h()},l(t){s=o(t,"LI",{});var l=r(s);e=o(l,"A",{rel:!0,href:!0});var a=r(e);d=h(a,E),a.forEach(c),v=f(l),l.forEach(c),this.h()},h(){i(e,"rel","prefetch"),i(e,"href",m="blog/"+t[1].slug)},m(t,l){u(t,s,l),p(s,e),p(e,d),p(s,v)},p(t,s){1&s&&E!==(E=t[1].title+"")&&g(d,E),1&s&&m!==(m="blog/"+t[1].slug)&&i(e,"href",m)},d(t){t&&c(s)}}}function j(t){let s,e,g,j,k,x=t[0],q=[];for(let s=0;s<x.length;s+=1)q[s]=b(E(t,x,s));return{c(){s=n(),e=l("h1"),g=a("Recent posts"),j=n(),k=l("ul");for(let t=0;t<q.length;t+=1)q[t].c();this.h()},l(t){d('[data-svelte="svelte-10h7psl"]',document.head).forEach(c),s=f(t),e=o(t,"H1",{});var l=r(e);g=h(l,"Recent posts"),l.forEach(c),j=f(t),k=o(t,"UL",{class:!0});var a=r(k);for(let t=0;t<q.length;t+=1)q[t].l(a);a.forEach(c),this.h()},h(){document.title="Blog",i(k,"class","svelte-1uzksw3")},m(t,l){u(t,s,l),u(t,e,l),p(e,g),u(t,j,l),u(t,k,l);for(let t=0;t<q.length;t+=1)q[t].m(k,null)},p(t,[s]){if(1&s){let e;for(x=t[0],e=0;e<x.length;e+=1){const l=E(t,x,e);q[e]?q[e].p(l,s):(q[e]=b(l),q[e].c(),q[e].m(k,null))}for(;e<q.length;e+=1)q[e].d(1);q.length=x.length}},i:m,o:m,d(t){t&&c(s),t&&c(e),t&&c(j),t&&c(k),v(q,t)}}}function k({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function x(t,s,e){let{posts:l}=s;return t.$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,x,j,e,{posts:0})}}export{k as preload};
