(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,,,,,,,function(t,e,r){"use strict";var c=r(0);function n(t){if(Object(c.s)(this,t),this._state=Object(c.c)({},t.data),this._intro=!0,document.getElementById("svelte-quv5ds-style")||function(){var t=Object(c.j)("style");t.id="svelte-quv5ds-style",t.textContent="h1.svelte-quv5ds{font-size:3rem;line-height:0.9;font-weight:400;margin-bottom:3rem}@media(min-width: 768px){h1.svelte-quv5ds{font-size:4rem}}",Object(c.b)(t,document.head)}(),this._fragment=function(t,e){var r,n;return{c(){r=Object(c.j)("div"),n=Object(c.j)("h1"),this.h()},l(t){r=Object(c.g)(t,"DIV",{class:!0},!1);var e=Object(c.f)(r);n=Object(c.g)(e,"H1",{class:!0},!1),Object(c.f)(n).forEach(c.p),e.forEach(c.p),this.h()},h(){n.className="co2 c8 sm-co4 sm-c4 svelte-quv5ds",r.className="c12 z2"},m(t,o){Object(c.t)(r,t,o),Object(c.b)(n,r),n.innerHTML=e.title},p(t,e){t.title&&(n.innerHTML=e.title)},d(t){t&&Object(c.p)(r)}}}(0,this._state),t.target){var e=Object(c.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(c.p),this._mount(t.target,t.anchor)}}Object(c.c)(n.prototype,c.v),e.a=n},,,function(t,e,r){"use strict";var c=r(0);function n(t,e){var r,n=e.article.title&&i(t,e);return{c(){n&&n.c(),r=Object(c.i)()},l(t){n&&n.l(t),r=Object(c.i)()},m(t,e){n&&n.m(t,e),Object(c.t)(r,t,e)},p(e,c){c.article.title?n?n.p(e,c):((n=i(t,c)).c(),n.m(r.parentNode,r)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&Object(c.p)(r)}}}function o(t,e){var r,n,o,a,i=e.contributor.title.rendered;return{c(){r=Object(c.j)("span"),n=Object(c.j)("noscript"),o=Object(c.l)(","),a=Object(c.l)(" ")},l(t){r=Object(c.g)(t,"SPAN",{},!1);var e=Object(c.f)(r);n=Object(c.j)("noscript"),o=Object(c.h)(e,","),a=Object(c.h)(e," "),e.forEach(c.p)},m(t,e){Object(c.t)(r,t,e),Object(c.b)(n,r),n.insertAdjacentHTML("beforebegin",i),Object(c.b)(o,r),Object(c.b)(a,r)},p(t,e){t.articles&&i!==(i=e.contributor.title.rendered)&&(Object(c.o)(n),n.insertAdjacentHTML("beforebegin",i))},d(t){t&&Object(c.p)(r)}}}function a(t,e){for(var r,n=e.article.meta.contributors,a=[],i=0;i<n.length;i+=1)a[i]=o(0,l(e,n,i));return{c(){for(var t=0;t<a.length;t+=1)a[t].c();r=Object(c.i)()},l(t){for(var e=0;e<a.length;e+=1)a[e].l(t);r=Object(c.i)()},m(t,e){for(var n=0;n<a.length;n+=1)a[n].m(t,e);Object(c.t)(r,t,e)},p(t,e){if(t.articles){n=e.article.meta.contributors;for(var c=0;c<n.length;c+=1){const i=l(e,n,c);a[c]?a[c].p(t,i):(a[c]=o(0,i),a[c].c(),a[c].m(r.parentNode,r))}for(;c<a.length;c+=1)a[c].d(1);a.length=n.length}},d(t){Object(c.m)(a,t),t&&Object(c.p)(r)}}}function i(t,e){var r,n,o,i,s,l=e.article.title.rendered,b=e.article.meta.contributors&&a(0,e);return{c(){r=Object(c.j)("li"),n=Object(c.j)("a"),b&&b.c(),o=Object(c.l)("\n      "),i=Object(c.j)("span"),this.h()},l(t){r=Object(c.g)(t,"LI",{},!1);var e=Object(c.f)(r);n=Object(c.g)(e,"A",{rel:!0,href:!0},!1);var a=Object(c.f)(n);b&&b.l(a),o=Object(c.h)(a,"\n      "),i=Object(c.g)(a,"SPAN",{class:!0},!1),Object(c.f)(i).forEach(c.p),a.forEach(c.p),e.forEach(c.p),this.h()},h(){i.className="fsi",n.rel="prefetch",n.href=s="/articles/"+e.article.slug},m(t,e){Object(c.t)(r,t,e),Object(c.b)(n,r),b&&b.m(n,null),Object(c.b)(o,n),Object(c.b)(i,n),i.innerHTML=l},p(t,e){e.article.meta.contributors?b?b.p(t,e):((b=a(0,e)).c(),b.m(n,o)):b&&(b.d(1),b=null),t.articles&&l!==(l=e.article.title.rendered)&&(i.innerHTML=l),t.articles&&s!==(s="/articles/"+e.article.slug)&&(n.href=s)},d(t){t&&Object(c.p)(r),b&&b.d()}}}function s(t,e,r){const c=Object.create(t);return c.article=e[r],c.each_value=e,c.article_index=r,c}function l(t,e,r){const c=Object.create(t);return c.contributor=e[r],c.each_value_1=e,c.contributor_index=r,c}function b(t){if(Object(c.s)(this,t),this._state=Object(c.c)({},t.data),this._intro=!0,this._fragment=function(t,e){for(var r,o=e.articles,a=[],i=0;i<o.length;i+=1)a[i]=n(t,s(e,o,i));return{c(){r=Object(c.j)("ul");for(var t=0;t<a.length;t+=1)a[t].c()},l(t){r=Object(c.g)(t,"UL",{},!1);for(var e=Object(c.f)(r),n=0;n<a.length;n+=1)a[n].l(e);e.forEach(c.p)},m(t,e){Object(c.t)(r,t,e);for(var n=0;n<a.length;n+=1)a[n].m(r,null)},p(e,c){if(e.articles){o=c.articles;for(var i=0;i<o.length;i+=1){const l=s(c,o,i);a[i]?a[i].p(e,l):(a[i]=n(t,l),a[i].c(),a[i].m(r,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=o.length}},d(t){t&&Object(c.p)(r),Object(c.m)(a,t)}}}(this,this._state),t.target){var e=Object(c.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(c.p),this._mount(t.target,t.anchor)}}Object(c.c)(b.prototype,c.v),e.a=b},function(t,e,r){"use strict";r.d(e,"a",function(){return o});var c=r(12),n=r.n(c);function o(t){return n()(t,"all")}},function(t,e,r){"use strict";var c,n=r(13),o={},a={default:{"&quot;":'"',"&#34;":'"',"&apos;":"'","&#39;":"'","&amp;":"&","&#38;":"&","&gt;":">","&#62;":">","&lt;":"<","&#60;":"<"},extras:{"&cent;":"¢","&#162;":"¢","&copy;":"©","&#169;":"©","&euro;":"€","&#8364;":"€","&pound;":"£","&#163;":"£","&reg;":"®","&#174;":"®","&yen;":"¥","&#165;":"¥"}};function i(t,e){if(!function(t){return t&&"string"==typeof t}(t))return"";var r=a[e||"default"],c=function(t,e){if(o[t])return o[t];var r=Object.keys(e).join("|"),c=new RegExp("(?=("+r+"))\\1","g");return o[t]=c,c}(e,r);return t.replace(c,function(t){return r[t]})}Object.defineProperty(a,"all",{get:function(){return c||(c=n({},a.default,a.extras))}}),i.chars=a.default,i.extras=a.extras,Object.defineProperty(i,"all",{get:function(){return a.all}}),t.exports=i},function(t,e,r){"use strict";var c=r(14);function n(t,e){for(var r in e)o(e,r)&&(t[r]=e[r])}function o(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t){c(t)||(t={});for(var e=arguments.length,r=1;r<e;r++){var o=arguments[r];c(o)&&n(t,o)}return t}},function(t,e,r){"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */t.exports=function(t){return void 0!==t&&null!==t&&("object"==typeof t||"function"==typeof t)}},,function(t,e,r){"use strict";var c=r(0);function n(t){if(Object(c.s)(this,t),this._state=Object(c.c)({},t.data),this._intro=!0,document.getElementById("svelte-1cuuebb-style")||function(){var t=Object(c.j)("style");t.id="svelte-1cuuebb-style",t.textContent="img.svelte-1cuuebb{width:100%;height:100%}",Object(c.b)(t,document.head)}(),this._fragment=function(t,e){var r,n,o;return{c(){r=Object(c.j)("div"),n=Object(c.j)("img"),this.h()},l(t){r=Object(c.g)(t,"DIV",{class:!0},!1);var e=Object(c.f)(r);n=Object(c.g)(e,"IMG",{src:!0,class:!0},!1),Object(c.f)(n).forEach(c.p),e.forEach(c.p),this.h()},h(){n.src=o=e.media.media_details.sizes.full.source_url,n.className="svelte-1cuuebb",r.className="h100 w100 oh"},m(t,e){Object(c.t)(r,t,e),Object(c.b)(n,r)},p(t,e){t.media&&o!==(o=e.media.media_details.sizes.full.source_url)&&(n.src=o)},d(t){t&&Object(c.p)(r)}}}(0,this._state),t.target){var e=Object(c.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(c.p),this._mount(t.target,t.anchor)}}Object(c.c)(n.prototype,c.v),e.a=n},,,,,function(t,e,r){"use strict";r.r(e);var c=r(0),n=r(11),o=r(2),a=r(16),i=r(10),s=r(7);function l(t,e){var r,n,o,a,i=e.contributor.meta.degree,s=e.contributor.meta.graduation_year;return{c(){r=Object(c.j)("h3"),n=Object(c.l)(i),o=Object(c.l)(", "),a=Object(c.l)(s)},l(t){r=Object(c.g)(t,"H3",{},!1);var e=Object(c.f)(r);n=Object(c.h)(e,i),o=Object(c.h)(e,", "),a=Object(c.h)(e,s),e.forEach(c.p)},m(t,e){Object(c.t)(r,t,e),Object(c.b)(n,r),Object(c.b)(o,r),Object(c.b)(a,r)},p(t,e){t.contributor&&i!==(i=e.contributor.meta.degree)&&(n.data=i),t.contributor&&s!==(s=e.contributor.meta.graduation_year)&&(a.data=s)},d(t){t&&Object(c.p)(r)}}}function b(t,e){var r,n,o,i={media:e.fold.meta.fold_front},s=new a.a({root:t.root,store:t.store,data:i});return{c(){r=Object(c.j)("div"),n=Object(c.j)("a"),s._fragment.c(),this.h()},l(t){r=Object(c.g)(t,"DIV",{class:!0},!1);var e=Object(c.f)(r);n=Object(c.g)(e,"A",{rel:!0,href:!0},!1);var o=Object(c.f)(n);s._fragment.l(o),o.forEach(c.p),e.forEach(c.p),this.h()},h(){n.rel="prefetch",n.href=o="/folds/"+e.fold.slug,r.className="c4 pr1 pb1"},m(t,e){Object(c.t)(r,t,e),Object(c.b)(n,r),s._mount(n,null)},p(t,e){var r={};t.contributor&&(r.media=e.fold.meta.fold_front),s._set(r),t.contributor&&o!==(o="/folds/"+e.fold.slug)&&(n.href=o)},d(t){t&&Object(c.p)(r),s.destroy()}}}function j(t,e){for(var r,n,o,a,i=e.contributor.meta.folds_edited,s=[],l=0;l<i.length;l+=1)s[l]=b(t,h(e,i,l));return{c(){r=Object(c.j)("h3"),n=Object(c.l)("Folds (Issue Editor)"),o=Object(c.l)("\n      "),a=Object(c.j)("div");for(var t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){r=Object(c.g)(t,"H3",{class:!0},!1);var e=Object(c.f)(r);n=Object(c.h)(e,"Folds (Issue Editor)"),e.forEach(c.p),o=Object(c.h)(t,"\n      "),a=Object(c.g)(t,"DIV",{class:!0},!1);for(var i=Object(c.f)(a),l=0;l<s.length;l+=1)s[l].l(i);i.forEach(c.p),this.h()},h(){r.className="mb1",a.className="x c12"},m(t,e){Object(c.t)(r,t,e),Object(c.b)(n,r),Object(c.t)(o,t,e),Object(c.t)(a,t,e);for(var i=0;i<s.length;i+=1)s[i].m(a,null)},p(e,r){if(e.contributor){i=r.contributor.meta.folds_edited;for(var c=0;c<i.length;c+=1){const n=h(r,i,c);s[c]?s[c].p(e,n):(s[c]=b(t,n),s[c].c(),s[c].m(a,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=i.length}},d(t){t&&(Object(c.p)(r),Object(c.p)(o),Object(c.p)(a)),Object(c.m)(s,t)}}}function u(t,e){var r,n,o,i={media:e.fold.meta.fold_front},s=new a.a({root:t.root,store:t.store,data:i});return{c(){r=Object(c.j)("div"),n=Object(c.j)("a"),s._fragment.c(),this.h()},l(t){r=Object(c.g)(t,"DIV",{class:!0},!1);var e=Object(c.f)(r);n=Object(c.g)(e,"A",{rel:!0,href:!0},!1);var o=Object(c.f)(n);s._fragment.l(o),o.forEach(c.p),e.forEach(c.p),this.h()},h(){n.rel="prefetch",n.href=o="/folds/"+e.fold.slug,r.className="c4 pr1 pb1"},m(t,e){Object(c.t)(r,t,e),Object(c.b)(n,r),s._mount(n,null)},p(t,e){var r={};t.contributor&&(r.media=e.fold.meta.fold_front),s._set(r),t.contributor&&o!==(o="/folds/"+e.fold.slug)&&(n.href=o)},d(t){t&&Object(c.p)(r),s.destroy()}}}function f(t,e){for(var r,n,o,a,i=e.contributor.meta.folds_designed,s=[],l=0;l<i.length;l+=1)s[l]=u(t,O(e,i,l));return{c(){r=Object(c.j)("h3"),n=Object(c.l)("Folds (Graphic Designer)"),o=Object(c.l)("\n      "),a=Object(c.j)("div");for(var t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){r=Object(c.g)(t,"H3",{class:!0},!1);var e=Object(c.f)(r);n=Object(c.h)(e,"Folds (Graphic Designer)"),e.forEach(c.p),o=Object(c.h)(t,"\n      "),a=Object(c.g)(t,"DIV",{class:!0},!1);for(var i=Object(c.f)(a),l=0;l<s.length;l+=1)s[l].l(i);i.forEach(c.p),this.h()},h(){r.className="mb1",a.className="x c12"},m(t,e){Object(c.t)(r,t,e),Object(c.b)(n,r),Object(c.t)(o,t,e),Object(c.t)(a,t,e);for(var i=0;i<s.length;i+=1)s[i].m(a,null)},p(e,r){if(e.contributor){i=r.contributor.meta.folds_designed;for(var c=0;c<i.length;c+=1){const n=O(r,i,c);s[c]?s[c].p(e,n):(s[c]=u(t,n),s[c].c(),s[c].m(a,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=i.length}},d(t){t&&(Object(c.p)(r),Object(c.p)(o),Object(c.p)(a)),Object(c.m)(s,t)}}}function d(t,e){var r,n,o,a={articles:e.contributor.meta.posts_contributed},s=new i.a({root:t.root,store:t.store,data:a});return{c(){r=Object(c.j)("h3"),n=Object(c.l)("Articles"),o=Object(c.l)("\n      "),s._fragment.c()},l(t){r=Object(c.g)(t,"H3",{},!1);var e=Object(c.f)(r);n=Object(c.h)(e,"Articles"),e.forEach(c.p),o=Object(c.h)(t,"\n      "),s._fragment.l(t)},m(t,e){Object(c.t)(r,t,e),Object(c.b)(n,r),Object(c.t)(o,t,e),s._mount(t,e)},p(t,e){var r={};t.contributor&&(r.articles=e.contributor.meta.posts_contributed),s._set(r)},d(t){t&&(Object(c.p)(r),Object(c.p)(o)),s.destroy(t)}}}function h(t,e,r){const c=Object.create(t);return c.fold=e[r],c.each_value=e,c.fold_index=r,c}function O(t,e,r){const c=Object.create(t);return c.fold=e[r],c.each_value_1=e,c.fold_index_1=r,c}function m(t){if(Object(c.s)(this,t),this._state=Object(c.c)({},t.data),this._intro=!0,t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var r,o,a,i,b,u,h,O,m,g,p,_=e.contributor.title.rendered;document.title=r=Object(n.a)(e.contributor.title.rendered);var v={title:e.contributor.title.rendered},y=new s.a({root:t.root,store:t.store,data:v}),E=e.contributor.meta.degree&&e.contributor.meta.graduation_year&&l(0,e),w=e.contributor.meta.folds_edited&&e.contributor.meta.folds_edited.length&&j(t,e),x=e.contributor.meta.folds_designed&&e.contributor.meta.folds_designed.length&&f(t,e),N=e.contributor.meta.posts_contributed&&e.contributor.meta.posts_contributed.length&&d(t,e);return{c(){o=Object(c.l)("\n\n"),y._fragment.c(),a=Object(c.l)("\n"),i=Object(c.j)("div"),b=Object(c.j)("div"),u=Object(c.j)("h2"),h=Object(c.l)("\n    "),E&&E.c(),O=Object(c.l)("\n  "),m=Object(c.j)("div"),w&&w.c(),g=Object(c.l)("\n    "),x&&x.c(),p=Object(c.l)("\n    "),N&&N.c(),this.h()},l(t){o=Object(c.h)(t,"\n\n"),y._fragment.l(t),a=Object(c.h)(t,"\n"),i=Object(c.g)(t,"DIV",{class:!0},!1);var e=Object(c.f)(i);b=Object(c.g)(e,"DIV",{class:!0},!1);var r=Object(c.f)(b);u=Object(c.g)(r,"H2",{},!1),Object(c.f)(u).forEach(c.p),h=Object(c.h)(r,"\n    "),E&&E.l(r),r.forEach(c.p),O=Object(c.h)(e,"\n  "),m=Object(c.g)(e,"DIV",{class:!0},!1);var n=Object(c.f)(m);w&&w.l(n),g=Object(c.h)(n,"\n    "),x&&x.l(n),p=Object(c.h)(n,"\n    "),N&&N.l(n),n.forEach(c.p),e.forEach(c.p),this.h()},h(){b.className="c12 sm-c2 p1",m.className="c12 sm-c8 p1",i.className="x xw"},m(t,e){Object(c.t)(o,t,e),y._mount(t,e),Object(c.t)(a,t,e),Object(c.t)(i,t,e),Object(c.b)(b,i),Object(c.b)(u,b),u.innerHTML=_,Object(c.b)(h,b),E&&E.m(b,null),Object(c.b)(O,i),Object(c.b)(m,i),w&&w.m(m,null),Object(c.b)(g,m),x&&x.m(m,null),Object(c.b)(p,m),N&&N.m(m,null)},p(e,c){e.contributor&&r!==(r=Object(n.a)(c.contributor.title.rendered))&&(document.title=r);var o={};e.contributor&&(o.title=c.contributor.title.rendered),y._set(o),e.contributor&&_!==(_=c.contributor.title.rendered)&&(u.innerHTML=_),c.contributor.meta.degree&&c.contributor.meta.graduation_year?E?E.p(e,c):((E=l(0,c)).c(),E.m(b,null)):E&&(E.d(1),E=null),c.contributor.meta.folds_edited&&c.contributor.meta.folds_edited.length?w?w.p(e,c):((w=j(t,c)).c(),w.m(m,g)):w&&(w.d(1),w=null),c.contributor.meta.folds_designed&&c.contributor.meta.folds_designed.length?x?x.p(e,c):((x=f(t,c)).c(),x.m(m,p)):x&&(x.d(1),x=null),c.contributor.meta.posts_contributed&&c.contributor.meta.posts_contributed.length?N?N.p(e,c):((N=d(t,c)).c(),N.m(m,null)):N&&(N.d(1),N=null)},d(t){t&&Object(c.p)(o),y.destroy(t),t&&(Object(c.p)(a),Object(c.p)(i)),E&&E.d(),w&&w.d(),x&&x.d(),N&&N.d()}}}(this,this._state),this.root._oncreate.push(()=>{(function(){Object(o.a)()}).call(this),this.fire("update",{changed:Object(c.d)({},this._state),current:this._state})}),t.target){var e=Object(c.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(c.p),this._mount(t.target,t.anchor),this._lock=!0,Object(c.e)(this._beforecreate),Object(c.e)(this._oncreate),Object(c.e)(this._aftercreate),this._lock=!1}}Object(c.c)(m.prototype,c.v),m.preload=async function({params:t,query:e}){const r=await this.fetch(`contributors/${t.slug}.json?fields=title/rendered,meta(degree,graduation_year,dual_degree,organization,folds_edited(slug,meta(fold_front(media_details(sizes(full(source_url)))))),folds_designed(slug,meta(fold_front(media_details(sizes(full(source_url)))))),posts_contributed(title/rendered,slug,meta/contributors(title/rendered)))`);if(!r.ok){const t=await r.text();return this.error(r.status,t)}return{contributor:await r.json()}},e.default=m}]]);