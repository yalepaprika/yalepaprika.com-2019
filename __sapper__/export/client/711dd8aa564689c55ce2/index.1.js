(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{14:function(t,e,c){"use strict";var a=c(0);function r(t,e){var c,r=e.article.title&&o(t,e);return{c(){r&&r.c(),c=Object(a.h)()},l(t){r&&r.l(t),c=Object(a.h)()},m(t,e){r&&r.m(t,e),Object(a.r)(c,t,e)},p(e,a){a.article.title?r?r.p(e,a):((r=o(t,a)).c(),r.m(c.parentNode,c)):r&&(r.d(1),r=null)},d(t){r&&r.d(t),t&&Object(a.o)(c)}}}function i(t,e){var c,r,i,s,o=e.contributor.title.rendered;return{c(){c=Object(a.i)("span"),r=Object(a.i)("noscript"),i=Object(a.k)(","),s=Object(a.k)(" ")},l(t){c=Object(a.f)(t,"SPAN",{},!1);var e=Object(a.e)(c);r=Object(a.i)("noscript"),i=Object(a.g)(e,","),s=Object(a.g)(e," "),e.forEach(a.o)},m(t,e){Object(a.r)(c,t,e),Object(a.a)(r,c),r.insertAdjacentHTML("beforebegin",o),Object(a.a)(i,c),Object(a.a)(s,c)},p(t,e){t.articles&&o!==(o=e.contributor.title.rendered)&&(Object(a.n)(r),r.insertAdjacentHTML("beforebegin",o))},d(t){t&&Object(a.o)(c)}}}function s(t,e){for(var c,r=e.article.meta.contributors,s=[],o=0;o<r.length;o+=1)s[o]=i(0,l(e,r,o));return{c(){for(var t=0;t<s.length;t+=1)s[t].c();c=Object(a.h)()},l(t){for(var e=0;e<s.length;e+=1)s[e].l(t);c=Object(a.h)()},m(t,e){for(var r=0;r<s.length;r+=1)s[r].m(t,e);Object(a.r)(c,t,e)},p(t,e){if(t.articles){r=e.article.meta.contributors;for(var a=0;a<r.length;a+=1){const o=l(e,r,a);s[a]?s[a].p(t,o):(s[a]=i(0,o),s[a].c(),s[a].m(c.parentNode,c))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}},d(t){Object(a.l)(s,t),t&&Object(a.o)(c)}}}function o(t,e){var c,r,i,o,n,l=e.article.title.rendered,b=e.article.meta.contributors&&s(0,e);return{c(){c=Object(a.i)("li"),r=Object(a.i)("a"),b&&b.c(),i=Object(a.k)("\n      "),o=Object(a.i)("span"),this.h()},l(t){c=Object(a.f)(t,"LI",{},!1);var e=Object(a.e)(c);r=Object(a.f)(e,"A",{rel:!0,href:!0},!1);var s=Object(a.e)(r);b&&b.l(s),i=Object(a.g)(s,"\n      "),o=Object(a.f)(s,"SPAN",{class:!0},!1),Object(a.e)(o).forEach(a.o),s.forEach(a.o),e.forEach(a.o),this.h()},h(){o.className="fsi",r.rel="prefetch",r.href=n="/articles/"+e.article.slug},m(t,e){Object(a.r)(c,t,e),Object(a.a)(r,c),b&&b.m(r,null),Object(a.a)(i,r),Object(a.a)(o,r),o.innerHTML=l},p(t,e){e.article.meta.contributors?b?b.p(t,e):((b=s(0,e)).c(),b.m(r,i)):b&&(b.d(1),b=null),t.articles&&l!==(l=e.article.title.rendered)&&(o.innerHTML=l),t.articles&&n!==(n="/articles/"+e.article.slug)&&(r.href=n)},d(t){t&&Object(a.o)(c),b&&b.d()}}}function n(t,e,c){const a=Object.create(t);return a.article=e[c],a.each_value=e,a.article_index=c,a}function l(t,e,c){const a=Object.create(t);return a.contributor=e[c],a.each_value_1=e,a.contributor_index=c,a}function b(t){if(Object(a.q)(this,t),this._state=Object(a.b)({},t.data),this._intro=!0,this._fragment=function(t,e){for(var c,i=e.articles,s=[],o=0;o<i.length;o+=1)s[o]=r(t,n(e,i,o));return{c(){c=Object(a.i)("ul");for(var t=0;t<s.length;t+=1)s[t].c()},l(t){c=Object(a.f)(t,"UL",{},!1);for(var e=Object(a.e)(c),r=0;r<s.length;r+=1)s[r].l(e);e.forEach(a.o)},m(t,e){Object(a.r)(c,t,e);for(var r=0;r<s.length;r+=1)s[r].m(c,null)},p(e,a){if(e.articles){i=a.articles;for(var o=0;o<i.length;o+=1){const l=n(a,i,o);s[o]?s[o].p(e,l):(s[o]=r(t,l),s[o].c(),s[o].m(c,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=i.length}},d(t){t&&Object(a.o)(c),Object(a.l)(s,t)}}}(this,this._state),t.target){var e=Object(a.e)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(a.o),this._mount(t.target,t.anchor)}}Object(a.b)(b.prototype,a.t),e.a=b},15:function(t,e,c){"use strict";var a=c(0);function r(t){return parseInt(t.media_details.height)/parseInt(t.media_details.width)*100}var i={draw(){const{img:t,width:e,height:c,faded:a}=this.get();if(console.log(a),!t||!e||!c)return;const r=this.refs.canvas,i=r.getContext("2d");i.drawImage(t,0,0,e,c);const s=i.getImageData(0,0,r.width,r.height),o=s.data;for(let t=0;t<o.length;t+=4){let e=(o[t]+o[t+1]+o[t+2])/3;const[c,r,i]=n(16,.83,.54+e/255*.46);o[t]=255*c,o[t+1]=255*r,o[t+2]=255*i,o[t+3]=a?.8*o[t+3]:o[t+3]}function n(t,e,c){let a=e*Math.min(c,1-c),r=(e,r=(e+t/30)%12)=>c-a*Math.max(Math.min(r-3,9-r,1),-1);return[r(0),r(8),r(4)]}i.putImageData(s,0,0)},resize(){const t=this.refs.container,e=t.offsetWidth,c=t.offsetHeight,a=this.refs.canvas,r=a.getContext("2d"),i=window&&window.devicePixelRatio||1,s=r.webkitBackingStorePixelRatio||r.mozBackingStorePixelRatio||r.msBackingStorePixelRatio||r.oBackingStorePixelRatio||r.backingStorePixelRatio||1,o=i/s;this.set({width:e,height:c,ratio:i}),i!==s?(a.width=e*o,a.height=c*o,a.style.width=e+"px",a.style.height=c+"px"):(a.width=e,a.height=c,a.style.width="",a.style.height=""),r.scale(o,o)}};function s(t){if(Object(a.q)(this,t),this.refs={},this._state=Object(a.b)({img:null,width:0,height:0,ratio:0},t.data),this._intro=!0,document.getElementById("svelte-roevw7-style")||function(){var t=Object(a.i)("style");t.id="svelte-roevw7-style",t.textContent="canvas.svelte-roevw7{position:absolute;top:0;bottom:0;right:0;left:0}",Object(a.a)(t,document.head)}(),t.root||(this._oncreate=[]),this._fragment=function(t,e){var c,i;return{c(){c=Object(a.i)("div"),i=Object(a.i)("canvas"),this.h()},l(t){c=Object(a.f)(t,"DIV",{class:!0,style:!0},!1);var e=Object(a.e)(c);i=Object(a.f)(e,"CANVAS",{class:!0},!1),Object(a.e)(i).forEach(a.o),e.forEach(a.o),this.h()},h(){i.className="svelte-roevw7",c.className="psr w100 oh",Object(a.v)(c,"padding-bottom",r(e.image)+"%")},m(e,r){Object(a.r)(c,e,r),Object(a.a)(i,c),t.refs.canvas=i,t.refs.container=c},p(t,e){t.image&&Object(a.v)(c,"padding-bottom",r(e.image)+"%")},d(e){e&&Object(a.o)(c),t.refs.canvas===i&&(t.refs.canvas=null),t.refs.container===c&&(t.refs.container=null)}}}(this,this._state),this.root._oncreate.push(()=>{(function(){this.resize();const{image:t,width:e,height:c,ratio:a}=this.get(),r=new Image(e*a,c*a);r.crossOrigin="Anonymous",r.onload=(()=>{this.set({img:r}),this.draw()}),r.src=`${t.media_details.sizes.full.source_url}?x-request=js`;const i=()=>{this.resize(),this.draw()};window.addEventListener("resize",i,!1),this.on("teardown",()=>{window.removeEventListener("resize",i,!1)})}).call(this),this.fire("update",{changed:Object(a.c)({},this._state),current:this._state})}),t.target){var e=Object(a.e)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(a.o),this._mount(t.target,t.anchor),Object(a.d)(this._oncreate)}}Object(a.b)(s.prototype,a.t),Object(a.b)(s.prototype,i),e.a=s},17:function(t,e,c){"use strict";c.r(e);var a=c(0),r=c(2),i=c(7),s=c(14),o=c(15);function n(t,e){var c,r,i,o={articles:e.fold.meta.posts},n=new s.a({root:t.root,store:t.store,data:o});return{c(){c=Object(a.i)("h3"),r=Object(a.k)("Articles"),i=Object(a.k)("\n      "),n._fragment.c()},l(t){c=Object(a.f)(t,"H3",{},!1);var e=Object(a.e)(c);r=Object(a.g)(e,"Articles"),e.forEach(a.o),i=Object(a.g)(t,"\n      "),n._fragment.l(t)},m(t,e){Object(a.r)(c,t,e),Object(a.a)(r,c),Object(a.r)(i,t,e),n._mount(t,e)},p(t,e){var c={};t.fold&&(c.articles=e.fold.meta.posts),n._set(c)},d(t){t&&(Object(a.o)(c),Object(a.o)(i)),n.destroy(t)}}}function l(t){if(Object(a.q)(this,t),this._state=Object(a.b)({},t.data),this._intro=!0,document.getElementById("svelte-19pcqt0-style")||function(){var t=Object(a.i)("style");t.id="svelte-19pcqt0-style",t.textContent=".mailing-list.svelte-19pcqt0{width:100%;border:0.2rem solid black}input[type=submit].svelte-19pcqt0{color:white;background:black;padding:8px 16px}input[type=email].svelte-19pcqt0{color:black;border-bottom:0.2rem solid black;font-size:2rem;line-height:0.9;font-weight:400;margin-right:1rem;width:100%\n  }.posts.svelte-19pcqt0{margin-top:7rem}@media(min-width: 768px){.posts.svelte-19pcqt0{margin-top:15rem}}.content img{display:block;margin-bottom:1rem;width:100%;height:auto}.content p{padding:0}",Object(a.a)(t,document.head)}(),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var c,r,s,l,b,d,h,j,O,f,m,u,g,p,v,_,w,y,E,k,x,I,q,N=e.fold.content.rendered,L={image:e.fold.meta.fold_front,faded:!0},M=new o.a({root:t.root,store:t.store,data:L}),z={title:e.fold.title.rendered},A=new i.a({root:t.root,store:t.store,data:z}),P=e.fold.meta.posts&&n(t,e);return{c(){c=Object(a.k)("\n  "),r=Object(a.i)("div"),M._fragment.c(),s=Object(a.k)("\n"),l=Object(a.i)("div"),A._fragment.c(),b=Object(a.k)("\n"),d=Object(a.i)("div"),h=Object(a.i)("div"),P&&P.c(),j=Object(a.k)("\n    "),O=Object(a.i)("div"),f=Object(a.i)("form"),m=Object(a.i)("div"),u=Object(a.i)("label"),g=Object(a.k)("Sign up to receive new Paprika! issues by email"),p=Object(a.k)("\n        "),v=Object(a.i)("input"),_=Object(a.k)("\n          \n          "),w=Object(a.i)("div"),y=Object(a.i)("input"),E=Object(a.k)("\n          "),k=Object(a.i)("div"),x=Object(a.i)("input"),I=Object(a.k)("\n  "),q=Object(a.i)("div"),this.h()},l(t){c=Object(a.g)(t,"\n  "),r=Object(a.f)(t,"DIV",{class:!0},!1);var e=Object(a.e)(r);M._fragment.l(e),e.forEach(a.o),s=Object(a.g)(t,"\n"),l=Object(a.f)(t,"DIV",{class:!0},!1);var i=Object(a.e)(l);A._fragment.l(i),i.forEach(a.o),b=Object(a.g)(t,"\n"),d=Object(a.f)(t,"DIV",{class:!0},!1);var o=Object(a.e)(d);h=Object(a.f)(o,"DIV",{class:!0},!1);var n=Object(a.e)(h);P&&P.l(n),j=Object(a.g)(n,"\n    "),O=Object(a.f)(n,"DIV",{class:!0},!1);var N=Object(a.e)(O);f=Object(a.f)(N,"FORM",{action:!0,method:!0,id:!0,name:!0,class:!0,target:!0,novalidate:!0},!1);var L=Object(a.e)(f);m=Object(a.f)(L,"DIV",{id:!0},!1);var z=Object(a.e)(m);u=Object(a.f)(z,"LABEL",{for:!0},!1);var D=Object(a.e)(u);g=Object(a.g)(D,"Sign up to receive new Paprika! issues by email"),D.forEach(a.o),p=Object(a.g)(z,"\n        "),v=Object(a.f)(z,"INPUT",{type:!0,value:!0,name:!0,class:!0,id:!0,required:!0},!1),Object(a.e)(v).forEach(a.o),_=Object(a.g)(z,"\n          \n          "),w=Object(a.f)(z,"DIV",{style:!0,"aria-hidden":!0},!1);var V=Object(a.e)(w);y=Object(a.f)(V,"INPUT",{type:!0,name:!0,tabindex:!0,value:!0},!1),Object(a.e)(y).forEach(a.o),V.forEach(a.o),E=Object(a.g)(z,"\n          "),k=Object(a.f)(z,"DIV",{class:!0},!1);var H=Object(a.e)(k);x=Object(a.f)(H,"INPUT",{type:!0,value:!0,name:!0,id:!0,class:!0},!1),Object(a.e)(x).forEach(a.o),H.forEach(a.o),z.forEach(a.o),L.forEach(a.o),N.forEach(a.o),n.forEach(a.o),I=Object(a.g)(o,"\n  "),q=Object(a.f)(o,"DIV",{class:!0},!1),Object(a.e)(q).forEach(a.o),o.forEach(a.o),this.h()},h(){document.title="Paprika!",r.className="psa co1 mt3 c10 sm-c4 t0 l0 z1",l.className="x",u.htmlFor="mce-EMAIL",Object(a.u)(v,"type","email"),v.value="",v.name="EMAIL",v.className="email svelte-19pcqt0",v.id="mce-EMAIL",v.required=!0,Object(a.u)(y,"type","text"),y.name="b_4ca966a132d110cd3f44a5d47_5281aa2685",y.tabIndex="-1",y.value="",Object(a.v)(w,"position","absolute"),Object(a.v)(w,"left","-5000px"),Object(a.u)(w,"aria-hidden","true"),Object(a.u)(x,"type","submit"),x.value="Sign Up",x.name="subscribe",x.id="mc-embedded-subscribe",x.className="button svelte-19pcqt0",k.className="clear pt1",m.id="mc_embed_signup_scroll",f.action="https://yalepaprika.us1.list-manage.com/subscribe/post?u=4ca966a132d110cd3f44a5d47&id=5281aa2685",f.method="post",f.id="mc-embedded-subscribe-form",f.name="mc-embedded-subscribe-form",f.className="validate",f.target="_blank",f.noValidate=!0,O.className="mailing-list p1 svelte-19pcqt0",h.className="c12 sm-co2 sm-c4 posts pr1 mb1 svelte-19pcqt0",q.className="c12 sm-c4 content",d.className="x xw psr z2 text"},m(t,e){Object(a.r)(c,t,e),Object(a.r)(r,t,e),M._mount(r,null),Object(a.r)(s,t,e),Object(a.r)(l,t,e),A._mount(l,null),Object(a.r)(b,t,e),Object(a.r)(d,t,e),Object(a.a)(h,d),P&&P.m(h,null),Object(a.a)(j,h),Object(a.a)(O,h),Object(a.a)(f,O),Object(a.a)(m,f),Object(a.a)(u,m),Object(a.a)(g,u),Object(a.a)(p,m),Object(a.a)(v,m),Object(a.a)(_,m),Object(a.a)(w,m),Object(a.a)(y,w),Object(a.a)(E,m),Object(a.a)(k,m),Object(a.a)(x,k),Object(a.a)(I,d),Object(a.a)(q,d),q.innerHTML=N},p(e,c){var a={};e.fold&&(a.image=c.fold.meta.fold_front),M._set(a);var r={};e.fold&&(r.title=c.fold.title.rendered),A._set(r),c.fold.meta.posts?P?P.p(e,c):((P=n(t,c)).c(),P.m(h,j)):P&&(P.d(1),P=null),e.fold&&N!==(N=c.fold.content.rendered)&&(q.innerHTML=N)},d(t){t&&(Object(a.o)(c),Object(a.o)(r)),M.destroy(),t&&(Object(a.o)(s),Object(a.o)(l)),A.destroy(),t&&(Object(a.o)(b),Object(a.o)(d)),P&&P.d()}}}(this,this._state),this.root._oncreate.push(()=>{(function(){Object(r.a)()}).call(this),this.fire("update",{changed:Object(a.c)({},this._state),current:this._state})}),t.target){var e=Object(a.e)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(a.o),this._mount(t.target,t.anchor),this._lock=!0,Object(a.d)(this._beforecreate),Object(a.d)(this._oncreate),Object(a.d)(this._aftercreate),this._lock=!1}}Object(a.b)(l.prototype,a.t),l.preload=async function({params:t,query:e}){const c=await this.fetch("/index.json?fields=title/rendered,content/rendered,meta(volume,number,publication_date,fold_front/media_details(width,height,sizes),fold_editors(title/rendered,slug),graphic_designer(title/rendered,slug),positions_editor(title/rendered,slug),web_editor(title/rendered,slug),posts(title/rendered,slug,meta/contributors(title/rendered)),)");if(!c.ok){const t=await c.text();return this.error(c.status,t)}return{fold:await c.json()}},e.default=l},7:function(t,e,c){"use strict";var a=c(0);function r(t){if(Object(a.q)(this,t),this._state=Object(a.b)({},t.data),this._intro=!0,document.getElementById("svelte-quv5ds-style")||function(){var t=Object(a.i)("style");t.id="svelte-quv5ds-style",t.textContent="h1.svelte-quv5ds{font-size:3rem;line-height:0.9;font-weight:400;margin-bottom:3rem}@media(min-width: 768px){h1.svelte-quv5ds{font-size:4rem}}",Object(a.a)(t,document.head)}(),this._fragment=function(t,e){var c,r;return{c(){c=Object(a.i)("div"),r=Object(a.i)("h1"),this.h()},l(t){c=Object(a.f)(t,"DIV",{class:!0},!1);var e=Object(a.e)(c);r=Object(a.f)(e,"H1",{class:!0},!1),Object(a.e)(r).forEach(a.o),e.forEach(a.o),this.h()},h(){r.className="co2 c8 sm-co4 sm-c4 svelte-quv5ds",c.className="c12 z2"},m(t,i){Object(a.r)(c,t,i),Object(a.a)(r,c),r.innerHTML=e.title},p(t,e){t.title&&(r.innerHTML=e.title)},d(t){t&&Object(a.o)(c)}}}(0,this._state),t.target){var e=Object(a.e)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(a.o),this._mount(t.target,t.anchor)}}Object(a.b)(r.prototype,a.t),e.a=r}}]);