(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(t,e,c){"use strict";var a=c(0);function r(t,e){var c,r=e.article.title&&n(t,e);return{c(){r&&r.c(),c=Object(a.i)()},l(t){r&&r.l(t),c=Object(a.i)()},m(t,e){r&&r.m(t,e),Object(a.t)(c,t,e)},p(e,a){a.article.title?r?r.p(e,a):((r=n(t,a)).c(),r.m(c.parentNode,c)):r&&(r.d(1),r=null)},d(t){r&&r.d(t),t&&Object(a.p)(c)}}}function i(t,e){var c,r,i,s,n=e.contributor.title.rendered;return{c(){c=Object(a.j)("span"),r=Object(a.j)("noscript"),i=Object(a.l)(","),s=Object(a.l)(" ")},l(t){c=Object(a.g)(t,"SPAN",{},!1);var e=Object(a.f)(c);r=Object(a.j)("noscript"),i=Object(a.h)(e,","),s=Object(a.h)(e," "),e.forEach(a.p)},m(t,e){Object(a.t)(c,t,e),Object(a.b)(r,c),r.insertAdjacentHTML("beforebegin",n),Object(a.b)(i,c),Object(a.b)(s,c)},p(t,e){t.articles&&n!==(n=e.contributor.title.rendered)&&(Object(a.o)(r),r.insertAdjacentHTML("beforebegin",n))},d(t){t&&Object(a.p)(c)}}}function s(t,e){for(var c,r=e.article.meta.contributors,s=[],n=0;n<r.length;n+=1)s[n]=i(0,b(e,r,n));return{c(){for(var t=0;t<s.length;t+=1)s[t].c();c=Object(a.i)()},l(t){for(var e=0;e<s.length;e+=1)s[e].l(t);c=Object(a.i)()},m(t,e){for(var r=0;r<s.length;r+=1)s[r].m(t,e);Object(a.t)(c,t,e)},p(t,e){if(t.articles){r=e.article.meta.contributors;for(var a=0;a<r.length;a+=1){const n=b(e,r,a);s[a]?s[a].p(t,n):(s[a]=i(0,n),s[a].c(),s[a].m(c.parentNode,c))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}},d(t){Object(a.m)(s,t),t&&Object(a.p)(c)}}}function n(t,e){var c,r,i,n,o,b=e.article.title.rendered,l=e.article.meta.contributors&&s(0,e);return{c(){c=Object(a.j)("li"),r=Object(a.j)("a"),l&&l.c(),i=Object(a.l)("\n      "),n=Object(a.j)("span"),this.h()},l(t){c=Object(a.g)(t,"LI",{},!1);var e=Object(a.f)(c);r=Object(a.g)(e,"A",{rel:!0,href:!0},!1);var s=Object(a.f)(r);l&&l.l(s),i=Object(a.h)(s,"\n      "),n=Object(a.g)(s,"SPAN",{class:!0},!1),Object(a.f)(n).forEach(a.p),s.forEach(a.p),e.forEach(a.p),this.h()},h(){n.className="fsi",r.rel="prefetch",r.href=o="/articles/"+e.article.slug},m(t,e){Object(a.t)(c,t,e),Object(a.b)(r,c),l&&l.m(r,null),Object(a.b)(i,r),Object(a.b)(n,r),n.innerHTML=b},p(t,e){e.article.meta.contributors?l?l.p(t,e):((l=s(0,e)).c(),l.m(r,i)):l&&(l.d(1),l=null),t.articles&&b!==(b=e.article.title.rendered)&&(n.innerHTML=b),t.articles&&o!==(o="/articles/"+e.article.slug)&&(r.href=o)},d(t){t&&Object(a.p)(c),l&&l.d()}}}function o(t,e,c){const a=Object.create(t);return a.article=e[c],a.each_value=e,a.article_index=c,a}function b(t,e,c){const a=Object.create(t);return a.contributor=e[c],a.each_value_1=e,a.contributor_index=c,a}function l(t){if(Object(a.s)(this,t),this._state=Object(a.c)({},t.data),this._intro=!0,this._fragment=function(t,e){for(var c,i=e.articles,s=[],n=0;n<i.length;n+=1)s[n]=r(t,o(e,i,n));return{c(){c=Object(a.j)("ul");for(var t=0;t<s.length;t+=1)s[t].c()},l(t){c=Object(a.g)(t,"UL",{},!1);for(var e=Object(a.f)(c),r=0;r<s.length;r+=1)s[r].l(e);e.forEach(a.p)},m(t,e){Object(a.t)(c,t,e);for(var r=0;r<s.length;r+=1)s[r].m(c,null)},p(e,a){if(e.articles){i=a.articles;for(var n=0;n<i.length;n+=1){const b=o(a,i,n);s[n]?s[n].p(e,b):(s[n]=r(t,b),s[n].c(),s[n].m(c,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=i.length}},d(t){t&&Object(a.p)(c),Object(a.m)(s,t)}}}(this,this._state),t.target){var e=Object(a.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(a.p),this._mount(t.target,t.anchor)}}Object(a.c)(l.prototype,a.v),e.a=l},15:function(t,e,c){"use strict";var a=c(0);function r(t){return parseInt(t.media_details.height)/parseInt(t.media_details.width)*100}var i={draw(){const{img:t,width:e,height:c,faded:a}=this.get();if(console.log(a),!t||!e||!c)return;const r=this.refs.canvas,i=r.getContext("2d");i.drawImage(t,0,0,e,c);const s=i.getImageData(0,0,r.width,r.height),n=s.data;for(let t=0;t<n.length;t+=4){let e=(n[t]+n[t+1]+n[t+2])/3;const[c,r,i]=o(16,.83,.54+e/255*.46);n[t]=255*c,n[t+1]=255*r,n[t+2]=255*i,n[t+3]=a?.8*n[t+3]:n[t+3]}function o(t,e,c){let a=e*Math.min(c,1-c),r=(e,r=(e+t/30)%12)=>c-a*Math.max(Math.min(r-3,9-r,1),-1);return[r(0),r(8),r(4)]}i.putImageData(s,0,0)},resize(){const t=this.refs.container,e=t.offsetWidth,c=t.offsetHeight,a=this.refs.canvas,r=a.getContext("2d"),i=window&&window.devicePixelRatio||1,s=r.webkitBackingStorePixelRatio||r.mozBackingStorePixelRatio||r.msBackingStorePixelRatio||r.oBackingStorePixelRatio||r.backingStorePixelRatio||1,n=i/s;this.set({width:e,height:c,ratio:i}),i!==s?(a.width=e*n,a.height=c*n,a.style.width=e+"px",a.style.height=c+"px"):(a.width=e,a.height=c,a.style.width="",a.style.height=""),r.scale(n,n)}};function s(t){if(Object(a.s)(this,t),this.refs={},this._state=Object(a.c)({img:null,width:0,height:0,ratio:0},t.data),this._intro=!0,document.getElementById("svelte-roevw7-style")||function(){var t=Object(a.j)("style");t.id="svelte-roevw7-style",t.textContent="canvas.svelte-roevw7{position:absolute;top:0;bottom:0;right:0;left:0}",Object(a.b)(t,document.head)}(),t.root||(this._oncreate=[]),this._fragment=function(t,e){var c,i;return{c(){c=Object(a.j)("div"),i=Object(a.j)("canvas"),this.h()},l(t){c=Object(a.g)(t,"DIV",{class:!0,style:!0},!1);var e=Object(a.f)(c);i=Object(a.g)(e,"CANVAS",{class:!0},!1),Object(a.f)(i).forEach(a.p),e.forEach(a.p),this.h()},h(){i.className="svelte-roevw7",c.className="psr w100 oh",Object(a.y)(c,"padding-bottom",r(e.image)+"%")},m(e,r){Object(a.t)(c,e,r),Object(a.b)(i,c),t.refs.canvas=i,t.refs.container=c},p(t,e){t.image&&Object(a.y)(c,"padding-bottom",r(e.image)+"%")},d(e){e&&Object(a.p)(c),t.refs.canvas===i&&(t.refs.canvas=null),t.refs.container===c&&(t.refs.container=null)}}}(this,this._state),this.root._oncreate.push(()=>{(function(){this.resize();const{image:t,width:e,height:c,ratio:a}=this.get(),r=new Image(e*a,c*a);r.crossOrigin="Anonymous",r.onload=(()=>{this.set({img:r}),this.draw()}),r.src=`${t.media_details.sizes.full.source_url}?x-request=js`;const i=()=>{this.resize(),this.draw()};window.addEventListener("resize",i,!1),this.on("teardown",()=>{window.removeEventListener("resize",i,!1)})}).call(this),this.fire("update",{changed:Object(a.d)({},this._state),current:this._state})}),t.target){var e=Object(a.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(a.p),this._mount(t.target,t.anchor),Object(a.e)(this._oncreate)}}Object(a.c)(s.prototype,a.v),Object(a.c)(s.prototype,i),e.a=s},19:function(t,e,c){"use strict";c.r(e);var a=c(0),r=c(2),i=c(7),s=c(10),n=c(15);function o(t,e){var c,r,i,n={articles:e.fold.meta.posts},o=new s.a({root:t.root,store:t.store,data:n});return{c(){c=Object(a.j)("h3"),r=Object(a.l)("Articles"),i=Object(a.l)("\n      "),o._fragment.c()},l(t){c=Object(a.g)(t,"H3",{},!1);var e=Object(a.f)(c);r=Object(a.h)(e,"Articles"),e.forEach(a.p),i=Object(a.h)(t,"\n      "),o._fragment.l(t)},m(t,e){Object(a.t)(c,t,e),Object(a.b)(r,c),Object(a.t)(i,t,e),o._mount(t,e)},p(t,e){var c={};t.fold&&(c.articles=e.fold.meta.posts),o._set(c)},d(t){t&&(Object(a.p)(c),Object(a.p)(i)),o.destroy(t)}}}function b(t){if(Object(a.s)(this,t),this._state=Object(a.c)({},t.data),this._intro=!0,document.getElementById("svelte-19pcqt0-style")||function(){var t=Object(a.j)("style");t.id="svelte-19pcqt0-style",t.textContent=".mailing-list.svelte-19pcqt0{width:100%;border:0.2rem solid black}input[type=submit].svelte-19pcqt0{color:white;background:black;padding:8px 16px}input[type=email].svelte-19pcqt0{color:black;border-bottom:0.2rem solid black;font-size:2rem;line-height:0.9;font-weight:400;margin-right:1rem;width:100%\n  }.posts.svelte-19pcqt0{margin-top:7rem}@media(min-width: 768px){.posts.svelte-19pcqt0{margin-top:15rem}}.content img{display:block;margin-bottom:1rem;width:100%;height:auto}.content p{padding:0}",Object(a.b)(t,document.head)}(),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var c,r,s,b,l,j,h,d,O,f,m,p,g,u,v,_,w,y,E,x,I,N,k,q=e.fold.content.rendered,L={image:e.fold.meta.fold_front,faded:!0},M=new n.a({root:t.root,store:t.store,data:L}),z={title:e.fold.title.rendered},A=new i.a({root:t.root,store:t.store,data:z}),P=e.fold.meta.posts&&o(t,e);return{c(){c=Object(a.l)("\n  "),r=Object(a.j)("div"),M._fragment.c(),s=Object(a.l)("\n"),b=Object(a.j)("div"),A._fragment.c(),l=Object(a.l)("\n"),j=Object(a.j)("div"),h=Object(a.j)("div"),P&&P.c(),d=Object(a.l)("\n    "),O=Object(a.j)("div"),f=Object(a.j)("form"),m=Object(a.j)("div"),p=Object(a.j)("label"),g=Object(a.l)("Sign up to receive new Paprika! issues by email"),u=Object(a.l)("\n        "),v=Object(a.j)("input"),_=Object(a.l)("\n          \n          "),w=Object(a.j)("div"),y=Object(a.j)("input"),E=Object(a.l)("\n          "),x=Object(a.j)("div"),I=Object(a.j)("input"),N=Object(a.l)("\n  "),k=Object(a.j)("div"),this.h()},l(t){c=Object(a.h)(t,"\n  "),r=Object(a.g)(t,"DIV",{class:!0},!1);var e=Object(a.f)(r);M._fragment.l(e),e.forEach(a.p),s=Object(a.h)(t,"\n"),b=Object(a.g)(t,"DIV",{class:!0},!1);var i=Object(a.f)(b);A._fragment.l(i),i.forEach(a.p),l=Object(a.h)(t,"\n"),j=Object(a.g)(t,"DIV",{class:!0},!1);var n=Object(a.f)(j);h=Object(a.g)(n,"DIV",{class:!0},!1);var o=Object(a.f)(h);P&&P.l(o),d=Object(a.h)(o,"\n    "),O=Object(a.g)(o,"DIV",{class:!0},!1);var q=Object(a.f)(O);f=Object(a.g)(q,"FORM",{action:!0,method:!0,id:!0,name:!0,class:!0,target:!0,novalidate:!0},!1);var L=Object(a.f)(f);m=Object(a.g)(L,"DIV",{id:!0},!1);var z=Object(a.f)(m);p=Object(a.g)(z,"LABEL",{for:!0},!1);var D=Object(a.f)(p);g=Object(a.h)(D,"Sign up to receive new Paprika! issues by email"),D.forEach(a.p),u=Object(a.h)(z,"\n        "),v=Object(a.g)(z,"INPUT",{type:!0,value:!0,name:!0,class:!0,id:!0,required:!0},!1),Object(a.f)(v).forEach(a.p),_=Object(a.h)(z,"\n          \n          "),w=Object(a.g)(z,"DIV",{style:!0,"aria-hidden":!0},!1);var V=Object(a.f)(w);y=Object(a.g)(V,"INPUT",{type:!0,name:!0,tabindex:!0,value:!0},!1),Object(a.f)(y).forEach(a.p),V.forEach(a.p),E=Object(a.h)(z,"\n          "),x=Object(a.g)(z,"DIV",{class:!0},!1);var H=Object(a.f)(x);I=Object(a.g)(H,"INPUT",{type:!0,value:!0,name:!0,id:!0,class:!0},!1),Object(a.f)(I).forEach(a.p),H.forEach(a.p),z.forEach(a.p),L.forEach(a.p),q.forEach(a.p),o.forEach(a.p),N=Object(a.h)(n,"\n  "),k=Object(a.g)(n,"DIV",{class:!0},!1),Object(a.f)(k).forEach(a.p),n.forEach(a.p),this.h()},h(){document.title="Paprika!",r.className="psa co1 mt3 c10 sm-c4 t0 l0 z1",b.className="x",p.htmlFor="mce-EMAIL",Object(a.x)(v,"type","email"),v.value="",v.name="EMAIL",v.className="email svelte-19pcqt0",v.id="mce-EMAIL",v.required=!0,Object(a.x)(y,"type","text"),y.name="b_4ca966a132d110cd3f44a5d47_5281aa2685",y.tabIndex="-1",y.value="",Object(a.y)(w,"position","absolute"),Object(a.y)(w,"left","-5000px"),Object(a.x)(w,"aria-hidden","true"),Object(a.x)(I,"type","submit"),I.value="Sign Up",I.name="subscribe",I.id="mc-embedded-subscribe",I.className="button svelte-19pcqt0",x.className="clear pt1",m.id="mc_embed_signup_scroll",f.action="https://yalepaprika.us1.list-manage.com/subscribe/post?u=4ca966a132d110cd3f44a5d47&id=5281aa2685",f.method="post",f.id="mc-embedded-subscribe-form",f.name="mc-embedded-subscribe-form",f.className="validate",f.target="_blank",f.noValidate=!0,O.className="mailing-list p1 svelte-19pcqt0",h.className="c12 sm-co2 sm-c4 posts pr1 mb1 svelte-19pcqt0",k.className="c12 sm-c4 content",j.className="x xw psr z2 text"},m(t,e){Object(a.t)(c,t,e),Object(a.t)(r,t,e),M._mount(r,null),Object(a.t)(s,t,e),Object(a.t)(b,t,e),A._mount(b,null),Object(a.t)(l,t,e),Object(a.t)(j,t,e),Object(a.b)(h,j),P&&P.m(h,null),Object(a.b)(d,h),Object(a.b)(O,h),Object(a.b)(f,O),Object(a.b)(m,f),Object(a.b)(p,m),Object(a.b)(g,p),Object(a.b)(u,m),Object(a.b)(v,m),Object(a.b)(_,m),Object(a.b)(w,m),Object(a.b)(y,w),Object(a.b)(E,m),Object(a.b)(x,m),Object(a.b)(I,x),Object(a.b)(N,j),Object(a.b)(k,j),k.innerHTML=q},p(e,c){var a={};e.fold&&(a.image=c.fold.meta.fold_front),M._set(a);var r={};e.fold&&(r.title=c.fold.title.rendered),A._set(r),c.fold.meta.posts?P?P.p(e,c):((P=o(t,c)).c(),P.m(h,d)):P&&(P.d(1),P=null),e.fold&&q!==(q=c.fold.content.rendered)&&(k.innerHTML=q)},d(t){t&&(Object(a.p)(c),Object(a.p)(r)),M.destroy(),t&&(Object(a.p)(s),Object(a.p)(b)),A.destroy(),t&&(Object(a.p)(l),Object(a.p)(j)),P&&P.d()}}}(this,this._state),this.root._oncreate.push(()=>{(function(){Object(r.a)()}).call(this),this.fire("update",{changed:Object(a.d)({},this._state),current:this._state})}),t.target){var e=Object(a.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(a.p),this._mount(t.target,t.anchor),this._lock=!0,Object(a.e)(this._beforecreate),Object(a.e)(this._oncreate),Object(a.e)(this._aftercreate),this._lock=!1}}Object(a.c)(b.prototype,a.v),b.preload=async function({params:t,query:e}){const c=await this.fetch("/index.json?fields=title/rendered,content/rendered,meta(volume,number,publication_date,fold_front/media_details(width,height,sizes),fold_editors(title/rendered,slug),graphic_designer(title/rendered,slug),positions_editor(title/rendered,slug),web_editor(title/rendered,slug),posts(title/rendered,slug,meta/contributors(title/rendered)),)");if(!c.ok){const t=await c.text();return this.error(c.status,t)}return{fold:await c.json()}},e.default=b},7:function(t,e,c){"use strict";var a=c(0);function r(t){if(Object(a.s)(this,t),this._state=Object(a.c)({},t.data),this._intro=!0,document.getElementById("svelte-quv5ds-style")||function(){var t=Object(a.j)("style");t.id="svelte-quv5ds-style",t.textContent="h1.svelte-quv5ds{font-size:3rem;line-height:0.9;font-weight:400;margin-bottom:3rem}@media(min-width: 768px){h1.svelte-quv5ds{font-size:4rem}}",Object(a.b)(t,document.head)}(),this._fragment=function(t,e){var c,r;return{c(){c=Object(a.j)("div"),r=Object(a.j)("h1"),this.h()},l(t){c=Object(a.g)(t,"DIV",{class:!0},!1);var e=Object(a.f)(c);r=Object(a.g)(e,"H1",{class:!0},!1),Object(a.f)(r).forEach(a.p),e.forEach(a.p),this.h()},h(){r.className="co2 c8 sm-co4 sm-c4 svelte-quv5ds",c.className="c12 z2"},m(t,i){Object(a.t)(c,t,i),Object(a.b)(r,c),r.innerHTML=e.title},p(t,e){t.title&&(r.innerHTML=e.title)},d(t){t&&Object(a.p)(c)}}}(0,this._state),t.target){var e=Object(a.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(a.p),this._mount(t.target,t.anchor)}}Object(a.c)(r.prototype,a.v),e.a=r}}]);