(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{30:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r(7);function c(t,e){var r,c,s,i,u,h,l,f,d,b,j,O,m,$,p=e.article.title.rendered,g=e.article.meta.fold.title.rendered,v=Object(a.a)(e.article.meta.fold.meta.publication_date),M=e.article.meta.contributors&&o(t,e);return{c(){r=Object(n.j)("tr"),c=Object(n.j)("td"),s=Object(n.j)("a"),u=Object(n.l)("\n      "),h=Object(n.j)("td"),M&&M.c(),l=Object(n.l)("\n      "),f=Object(n.j)("td"),d=Object(n.j)("a"),b=Object(n.l)(g),O=Object(n.l)("\n      "),m=Object(n.j)("td"),$=Object(n.l)(v),this.h()},l(t){r=Object(n.g)(t,"TR",{},!1);var e=Object(n.f)(r);c=Object(n.g)(e,"TD",{},!1);var a=Object(n.f)(c);s=Object(n.g)(a,"A",{rel:!0,href:!0,class:!0},!1),Object(n.f)(s).forEach(n.p),a.forEach(n.p),u=Object(n.h)(e,"\n      "),h=Object(n.g)(e,"TD",{class:!0},!1);var i=Object(n.f)(h);M&&M.l(i),i.forEach(n.p),l=Object(n.h)(e,"\n      "),f=Object(n.g)(e,"TD",{class:!0},!1);var o=Object(n.f)(f);d=Object(n.g)(o,"A",{rel:!0,href:!0},!1);var j=Object(n.f)(d);b=Object(n.h)(j,g),j.forEach(n.p),o.forEach(n.p),O=Object(n.h)(e,"\n      "),m=Object(n.g)(e,"TD",{class:!0},!1);var p=Object(n.f)(m);$=Object(n.h)(p,v),p.forEach(n.p),e.forEach(n.p),this.h()},h(){s.rel="prefetch",s.href=i="/articles/"+e.article.slug,s.className="fsi",h.className="sm-c3 dn sm-dtc",d.rel="prefetch",d.href=j="/folds/"+e.article.meta.fold.slug,f.className="sm-c3 dn sm-dtc",m.className="sm-c2 dn sm-dtc"},m(t,e){Object(n.t)(r,t,e),Object(n.b)(c,r),Object(n.b)(s,c),s.innerHTML=p,Object(n.b)(u,r),Object(n.b)(h,r),M&&M.m(h,null),Object(n.b)(l,r),Object(n.b)(f,r),Object(n.b)(d,f),Object(n.b)(b,d),Object(n.b)(O,r),Object(n.b)(m,r),Object(n.b)($,m)},p(e,r){e.articles&&p!==(p=r.article.title.rendered)&&(s.innerHTML=p),e.articles&&i!==(i="/articles/"+r.article.slug)&&(s.href=i),r.article.meta.contributors?M?M.p(e,r):((M=o(t,r)).c(),M.m(h,null)):M&&(M.d(1),M=null),e.articles&&g!==(g=r.article.meta.fold.title.rendered)&&(b.data=g),e.articles&&j!==(j="/folds/"+r.article.meta.fold.slug)&&(d.href=j),e.articles&&v!==(v=Object(a.a)(r.article.meta.fold.meta.publication_date))&&($.data=v)},d(t){t&&Object(n.p)(r),M&&M.d()}}}function s(t,e){var r,a,c,s,o,u,h=e.contributor.title.rendered,l=e.i<e.article.meta.contributors.length-1&&i(t,e);return{c(){r=Object(n.j)("span"),a=Object(n.j)("a"),c=Object(n.j)("noscript"),l&&l.c(),o=Object(n.l)("\n            "),u=Object(n.l)(" "),this.h()},l(t){r=Object(n.g)(t,"SPAN",{},!1);var e=Object(n.f)(r);a=Object(n.g)(e,"A",{rel:!0,href:!0},!1);var s=Object(n.f)(a);c=Object(n.j)("noscript"),l&&l.l(s),s.forEach(n.p),o=Object(n.h)(e,"\n            "),u=Object(n.h)(e," "),e.forEach(n.p),this.h()},h(){a.rel="prefetch",a.href=s="/contributors/"+e.contributor.slug},m(t,e){Object(n.t)(r,t,e),Object(n.b)(a,r),Object(n.b)(c,a),c.insertAdjacentHTML("beforebegin",h),l&&l.m(a,null),Object(n.b)(o,r),Object(n.b)(u,r)},p(e,r){e.articles&&h!==(h=r.contributor.title.rendered)&&(Object(n.o)(c),c.insertAdjacentHTML("beforebegin",h)),r.i<r.article.meta.contributors.length-1?l||((l=i(t,r)).c(),l.m(a,null)):l&&(l.d(1),l=null),e.articles&&s!==(s="/contributors/"+r.contributor.slug)&&(a.href=s)},d(t){t&&Object(n.p)(r),l&&l.d()}}}function i(t,e){var r;return{c(){r=Object(n.l)(",")},l(t){r=Object(n.h)(t,",")},m(t,e){Object(n.t)(r,t,e)},d(t){t&&Object(n.p)(r)}}}function o(t,e){for(var r,a=e.article.meta.contributors,c=[],i=0;i<a.length;i+=1)c[i]=s(t,h(e,a,i));return{c(){for(var t=0;t<c.length;t+=1)c[t].c();r=Object(n.i)()},l(t){for(var e=0;e<c.length;e+=1)c[e].l(t);r=Object(n.i)()},m(t,e){for(var a=0;a<c.length;a+=1)c[a].m(t,e);Object(n.t)(r,t,e)},p(e,n){if(e.articles){a=n.article.meta.contributors;for(var i=0;i<a.length;i+=1){const o=h(n,a,i);c[i]?c[i].p(e,o):(c[i]=s(t,o),c[i].c(),c[i].m(r.parentNode,r))}for(;i<c.length;i+=1)c[i].d(1);c.length=a.length}},d(t){Object(n.m)(c,t),t&&Object(n.p)(r)}}}function u(t,e,r){const n=Object.create(t);return n.article=e[r],n.each_value=e,n.article_index=r,n}function h(t,e,r){const n=Object.create(t);return n.contributor=e[r],n.each_value_1=e,n.i=r,n}function l(t){if(Object(n.s)(this,t),this._state=Object(n.c)({},t.data),this._intro=!0,this._fragment=function(t,e){for(var r,a=e.articles,s=[],i=0;i<a.length;i+=1)s[i]=c(t,u(e,a,i));return{c(){r=Object(n.j)("table");for(var t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){r=Object(n.g)(t,"TABLE",{class:!0},!1);for(var e=Object(n.f)(r),a=0;a<s.length;a+=1)s[a].l(e);e.forEach(n.p),this.h()},h(){r.className="c12"},m(t,e){Object(n.t)(r,t,e);for(var a=0;a<s.length;a+=1)s[a].m(r,null)},p(e,n){if(e.articles){a=n.articles;for(var i=0;i<a.length;i+=1){const o=u(n,a,i);s[i]?s[i].p(e,o):(s[i]=c(t,o),s[i].c(),s[i].m(r,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=a.length}},d(t){t&&Object(n.p)(r),Object(n.m)(s,t)}}}(this,this._state),t.target){var e=Object(n.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(n.p),this._mount(t.target,t.anchor)}}Object(n.c)(l.prototype,n.v);var f=l;function d(t){if(Object(n.s)(this,t),this._state=Object(n.c)({},t.data),this._intro=!0,t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var r,a={articles:e.articles},c=new f({root:t.root,store:t.store,data:a});return{c(){r=Object(n.l)("\n\n"),c._fragment.c(),this.h()},l(t){r=Object(n.h)(t,"\n\n"),c._fragment.l(t),this.h()},h(){document.title="Articles"},m(t,e){Object(n.t)(r,t,e),c._mount(t,e)},p(t,e){var r={};t.articles&&(r.articles=e.articles),c._set(r)},d(t){t&&Object(n.p)(r),c.destroy(t)}}}(this,this._state),t.target){var e=Object(n.f)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(n.p),this._mount(t.target,t.anchor),this._lock=!0,Object(n.e)(this._beforecreate),Object(n.e)(this._oncreate),Object(n.e)(this._aftercreate),this._lock=!1}}Object(n.c)(d.prototype,n.v),d.preload=async function({params:t,query:e}){const r=await this.fetch("/articles.json?fields=title/rendered,slug,meta(contributors(title/rendered,slug),fold(title/rendered,slug,meta/publication_date)");if(!r.ok){const t=await r.text();return this.error(r.status,t)}return{articles:await r.json()}};e.default=d},7:function(t,e,r){"use strict";r.d(e,"a",function(){return c});var n=r(8),a=r.n(n);function c(t){return a()(t).format("MMMM D, YYYY")}},8:function(t,e,r){t.exports=function(){"use strict";var t="millisecond",e="second",r="minute",n="hour",a="day",c="week",s="month",i="year",o=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,u=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},f={padStart:l,padZoneStr:function(t){var e=Math.abs(t),r=Math.floor(e/60),n=e%60;return(t<=0?"+":"-")+l(r,2,"0")+":"+l(n,2,"0")},monthDiff:function(t,e){var r=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(r,"months"),a=e-n<0,c=t.clone().add(r+(a?-1:1),"months");return Number(-(r+(e-n)/(a?n-c:c-n)))},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(o){return{M:s,y:i,w:c,d:a,h:n,m:r,s:e,ms:t}[o]||String(o||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},d="en",b={};b[d]=h;var j=function(t){return t instanceof g},O=function(t,e,r){var n;if(!t)return null;if("string"==typeof t)b[t]&&(n=t),e&&(b[t]=e,n=t);else{var a=t.name;b[a]=t,n=a}return r||(d=n),n},m=function(t,e){if(j(t))return t.clone();var r=e||{};return r.date=t,new g(r)},$=function(t,e){return m(t,{locale:e.$L})},p=f;p.parseLocale=O,p.isDayjs=j,p.wrapper=$;var g=function(){function h(t){this.parse(t)}var l=h.prototype;return l.parse=function(t){var e,r;this.$d=null===(e=t.date)?new Date(NaN):p.isUndefined(e)?new Date:e instanceof Date?e:"string"==typeof e&&/.*[^Z]$/i.test(e)&&(r=e.match(o))?new Date(r[1],r[2]-1,r[3]||1,r[5]||0,r[6]||0,r[7]||0,r[8]||0):new Date(e),this.init(t)},l.init=function(t){this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds(),this.$L=this.$L||O(t.locale,null,!0)||d},l.$utils=function(){return p},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.$compare=function(t){return this.valueOf()-m(t).valueOf()},l.isSame=function(t){return 0===this.$compare(t)},l.isBefore=function(t){return this.$compare(t)<0},l.isAfter=function(t){return this.$compare(t)>0},l.year=function(){return this.$y},l.month=function(){return this.$M},l.day=function(){return this.$W},l.date=function(){return this.$D},l.hour=function(){return this.$H},l.minute=function(){return this.$m},l.second=function(){return this.$s},l.millisecond=function(){return this.$ms},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,o){var u=this,h=!!p.isUndefined(o)||o,l=function(t,e){var r=$(new Date(u.$y,e,t),u);return h?r:r.endOf(a)},f=function(t,e){return $(u.toDate()[t].apply(u.toDate(),h?[0,0,0,0].slice(e):[23,59,59,999].slice(e)),u)};switch(p.prettyUnit(t)){case i:return h?l(1,0):l(31,11);case s:return h?l(1,this.$M):l(0,this.$M+1);case c:return l(h?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case a:case"date":return f("setHours",0);case n:return f("setMinutes",1);case r:return f("setSeconds",2);case e:return f("setMilliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(c,o){switch(p.prettyUnit(c)){case a:this.$d.setDate(this.$D+(o-this.$W));break;case"date":this.$d.setDate(o);break;case s:this.$d.setMonth(o);break;case i:this.$d.setFullYear(o);break;case n:this.$d.setHours(o);break;case r:this.$d.setMinutes(o);break;case e:this.$d.setSeconds(o);break;case t:this.$d.setMilliseconds(o)}return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.add=function(t,o){var u=this;t=Number(t);var h,l=p.prettyUnit(o),f=function(e,r){var n=u.set("date",1).set(e,r+t);return n.set("date",Math.min(u.$D,n.daysInMonth()))};if(l===s)return f(s,this.$M);if(l===i)return f(i,this.$y);switch(l){case r:h=6e4;break;case n:h=36e5;break;case a:h=864e5;break;case c:h=6048e5;break;case e:h=1e3;break;default:h=1}var d=this.valueOf()+t*h;return $(d,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this,r=t||"YYYY-MM-DDTHH:mm:ssZ",n=p.padZoneStr(this.$d.getTimezoneOffset()),a=this.$locale(),c=a.weekdays,s=a.months,i=function(t,e,r,n){return t&&t[e]||r[e].substr(0,n)};return r.replace(u,function(t){if(t.indexOf("[")>-1)return t.replace(/\[|\]/g,"");switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return String(e.$y);case"M":return String(e.$M+1);case"MM":return p.padStart(e.$M+1,2,"0");case"MMM":return i(a.monthsShort,e.$M,s,3);case"MMMM":return s[e.$M];case"D":return String(e.$D);case"DD":return p.padStart(e.$D,2,"0");case"d":return String(e.$W);case"dd":return i(a.weekdaysMin,e.$W,c,2);case"ddd":return i(a.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(e.$H);case"HH":return p.padStart(e.$H,2,"0");case"h":case"hh":return 0===e.$H?12:p.padStart(e.$H<13?e.$H:e.$H-12,"hh"===t?2:1,"0");case"a":return e.$H<12?"am":"pm";case"A":return e.$H<12?"AM":"PM";case"m":return String(e.$m);case"mm":return p.padStart(e.$m,2,"0");case"s":return String(e.$s);case"ss":return p.padStart(e.$s,2,"0");case"SSS":return p.padStart(e.$ms,3,"0");case"Z":return n;default:return n.replace(":","")}})},l.diff=function(t,o,u){var h=p.prettyUnit(o),l=m(t),f=this-l,d=p.monthDiff(this,l);switch(h){case i:d/=12;break;case s:break;case"quarter":d/=3;break;case c:d=f/6048e5;break;case a:d=f/864e5;break;case n:d=f/36e5;break;case r:d=f/6e4;break;case e:d=f/1e3;break;default:d=f}return u?d:p.absFloor(d)},l.daysInMonth=function(){return this.endOf(s).$D},l.$locale=function(){return b[this.$L]},l.locale=function(t,e){var r=this.clone();return r.$L=O(t,e,!0),r},l.clone=function(){return $(this.toDate(),this)},l.toDate=function(){return new Date(this.$d)},l.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},l.toJSON=function(){return this.toISOString()},l.toISOString=function(){return this.toDate().toISOString()},l.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},l.toString=function(){return this.$d.toUTCString()},h}();return m.extend=function(t,e){return t(e,g,m),m},m.locale=O,m.isDayjs=j,m.en=b[d],m}()}}]);