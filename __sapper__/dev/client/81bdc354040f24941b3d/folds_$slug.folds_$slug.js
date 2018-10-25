(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folds_$slug"],{

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",s="day",i="week",a="month",u="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,o=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={padStart:d,padZoneStr:function(t){var e=Math.abs(t),n=Math.floor(e/60),r=e%60;return(t<=0?"+":"-")+d(n,2,"0")+":"+d(r,2,"0")},monthDiff:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,"months"),s=e-r<0,i=t.clone().add(n+(s?-1:1),"months");return Number(-(n+(e-r)/(s?r-i:i-r)))},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(c){return{M:a,y:u,w:i,d:s,h:r,m:n,s:e,ms:t}[c]||String(c||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},f="en",l={};l[f]=h;var m=function(t){return t instanceof D},y=function(t,e,n){var r;if(!t)return null;if("string"==typeof t)l[t]&&(r=t),e&&(l[t]=e,r=t);else{var s=t.name;l[s]=t,r=s}return n||(f=r),r},M=function(t,e){if(m(t))return t.clone();var n=e||{};return n.date=t,new D(n)},S=function(t,e){return M(t,{locale:e.$L})},p=$;p.parseLocale=y,p.isDayjs=m,p.wrapper=S;var D=function(){function h(t){this.parse(t)}var d=h.prototype;return d.parse=function(t){var e,n;this.$d=null===(e=t.date)?new Date(NaN):p.isUndefined(e)?new Date:e instanceof Date?e:"string"==typeof e&&/.*[^Z]$/i.test(e)&&(n=e.match(c))?new Date(n[1],n[2]-1,n[3]||1,n[5]||0,n[6]||0,n[7]||0,n[8]||0):new Date(e),this.init(t)},d.init=function(t){this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds(),this.$L=this.$L||y(t.locale,null,!0)||f},d.$utils=function(){return p},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.$compare=function(t){return this.valueOf()-M(t).valueOf()},d.isSame=function(t){return 0===this.$compare(t)},d.isBefore=function(t){return this.$compare(t)<0},d.isAfter=function(t){return this.$compare(t)>0},d.year=function(){return this.$y},d.month=function(){return this.$M},d.day=function(){return this.$W},d.date=function(){return this.$D},d.hour=function(){return this.$H},d.minute=function(){return this.$m},d.second=function(){return this.$s},d.millisecond=function(){return this.$ms},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,c){var o=this,h=!!p.isUndefined(c)||c,d=function(t,e){var n=S(new Date(o.$y,e,t),o);return h?n:n.endOf(s)},$=function(t,e){return S(o.toDate()[t].apply(o.toDate(),h?[0,0,0,0].slice(e):[23,59,59,999].slice(e)),o)};switch(p.prettyUnit(t)){case u:return h?d(1,0):d(31,11);case a:return h?d(1,this.$M):d(0,this.$M+1);case i:return d(h?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case s:case"date":return $("setHours",0);case r:return $("setMinutes",1);case n:return $("setSeconds",2);case e:return $("setMilliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(i,c){switch(p.prettyUnit(i)){case s:this.$d.setDate(this.$D+(c-this.$W));break;case"date":this.$d.setDate(c);break;case a:this.$d.setMonth(c);break;case u:this.$d.setFullYear(c);break;case r:this.$d.setHours(c);break;case n:this.$d.setMinutes(c);break;case e:this.$d.setSeconds(c);break;case t:this.$d.setMilliseconds(c)}return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.add=function(t,c){var o=this;t=Number(t);var h,d=p.prettyUnit(c),$=function(e,n){var r=o.set("date",1).set(e,n+t);return r.set("date",Math.min(o.$D,r.daysInMonth()))};if(d===a)return $(a,this.$M);if(d===u)return $(u,this.$y);switch(d){case n:h=6e4;break;case r:h=36e5;break;case s:h=864e5;break;case i:h=6048e5;break;case e:h=1e3;break;default:h=1}var f=this.valueOf()+t*h;return S(f,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this,n=t||"YYYY-MM-DDTHH:mm:ssZ",r=p.padZoneStr(this.$d.getTimezoneOffset()),s=this.$locale(),i=s.weekdays,a=s.months,u=function(t,e,n,r){return t&&t[e]||n[e].substr(0,r)};return n.replace(o,function(t){if(t.indexOf("[")>-1)return t.replace(/\[|\]/g,"");switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return String(e.$y);case"M":return String(e.$M+1);case"MM":return p.padStart(e.$M+1,2,"0");case"MMM":return u(s.monthsShort,e.$M,a,3);case"MMMM":return a[e.$M];case"D":return String(e.$D);case"DD":return p.padStart(e.$D,2,"0");case"d":return String(e.$W);case"dd":return u(s.weekdaysMin,e.$W,i,2);case"ddd":return u(s.weekdaysShort,e.$W,i,3);case"dddd":return i[e.$W];case"H":return String(e.$H);case"HH":return p.padStart(e.$H,2,"0");case"h":case"hh":return 0===e.$H?12:p.padStart(e.$H<13?e.$H:e.$H-12,"hh"===t?2:1,"0");case"a":return e.$H<12?"am":"pm";case"A":return e.$H<12?"AM":"PM";case"m":return String(e.$m);case"mm":return p.padStart(e.$m,2,"0");case"s":return String(e.$s);case"ss":return p.padStart(e.$s,2,"0");case"SSS":return p.padStart(e.$ms,3,"0");case"Z":return r;default:return r.replace(":","")}})},d.diff=function(t,c,o){var h=p.prettyUnit(c),d=M(t),$=this-d,f=p.monthDiff(this,d);switch(h){case u:f/=12;break;case a:break;case"quarter":f/=3;break;case i:f=$/6048e5;break;case s:f=$/864e5;break;case r:f=$/36e5;break;case n:f=$/6e4;break;case e:f=$/1e3;break;default:f=$}return o?f:p.absFloor(f)},d.daysInMonth=function(){return this.endOf(a).$D},d.$locale=function(){return l[this.$L]},d.locale=function(t,e){var n=this.clone();return n.$L=y(t,e,!0),n},d.clone=function(){return S(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.toDate().toISOString()},d.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},d.toString=function(){return this.$d.toUTCString()},h}();return M.extend=function(t,e){return t(e,D,M),M},M.locale=y,M.isDayjs=m,M.en=l[f],M});


/***/ }),

/***/ "./node_modules/is-extendable/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-extendable/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function isExtendable(val) {
  return typeof val !== 'undefined' && val !== null
    && (typeof val === 'object' || typeof val === 'function');
};


/***/ }),

/***/ "./node_modules/unescape/index.js":
/*!****************************************!*\
  !*** ./node_modules/unescape/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! extend-shallow */ "./node_modules/unescape/node_modules/extend-shallow/index.js");
var regexCache = {};
var all;

var charSets = {
  default: {
    '&quot;': '"',
    '&#34;': '"',

    '&apos;': '\'',
    '&#39;': '\'',

    '&amp;': '&',
    '&#38;': '&',

    '&gt;': '>',
    '&#62;': '>',

    '&lt;': '<',
    '&#60;': '<'
  },
  extras: {
    '&cent;': '¢',
    '&#162;': '¢',

    '&copy;': '©',
    '&#169;': '©',

    '&euro;': '€',
    '&#8364;': '€',

    '&pound;': '£',
    '&#163;': '£',

    '&reg;': '®',
    '&#174;': '®',

    '&yen;': '¥',
    '&#165;': '¥'
  }
};

// don't merge char sets unless "all" is explicitly called
Object.defineProperty(charSets, 'all', {
  get: function() {
    return all || (all = extend({}, charSets.default, charSets.extras));
  }
});

/**
 * Convert HTML entities to HTML characters.
 *
 * @param  {String} `str` String with HTML entities to un-escape.
 * @return {String}
 */

function unescape(str, type) {
  if (!isString(str)) return '';
  var chars = charSets[type || 'default'];
  var regex = toRegex(type, chars);
  return str.replace(regex, function(m) {
    return chars[m];
  });
}

function toRegex(type, chars) {
  if (regexCache[type]) {
    return regexCache[type];
  }
  var keys = Object.keys(chars).join('|');
  var regex = new RegExp('(?=(' + keys + '))\\1', 'g');
  regexCache[type] = regex;
  return regex;
}

/**
 * Returns true if str is a non-empty string
 */

function isString(str) {
  return str && typeof str === 'string';
}

/**
 * Expose charSets
 */

unescape.chars = charSets.default;
unescape.extras = charSets.extras;
// don't trip the "charSets" getter unless it's explicitly called
Object.defineProperty(unescape, 'all', {
  get: function() {
    return charSets.all;
  }
});

/**
 * Expose `unescape`
 */

module.exports = unescape;


/***/ }),

/***/ "./node_modules/unescape/node_modules/extend-shallow/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/unescape/node_modules/extend-shallow/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! is-extendable */ "./node_modules/is-extendable/index.js");

module.exports = function extend(o/*, objects*/) {
  if (!isObject(o)) { o = {}; }

  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments[i];

    if (isObject(obj)) {
      assign(o, obj);
    }
  }
  return o;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}


/***/ }),

/***/ "./src/routes/_helpers/date-format.js":
/*!********************************************!*\
  !*** ./src/routes/_helpers/date-format.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


function format(date) {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format('MMMM D, YYYY')
}


/***/ }),

/***/ "./src/routes/_helpers/decode-html.js":
/*!********************************************!*\
  !*** ./src/routes/_helpers/decode-html.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return decodehtml; });
/* harmony import */ var unescape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unescape */ "./node_modules/unescape/index.js");
/* harmony import */ var unescape__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unescape__WEBPACK_IMPORTED_MODULE_0__);


function decodehtml(str) {
  return unescape__WEBPACK_IMPORTED_MODULE_0___default()(str, 'all')
}


/***/ }),

/***/ "./src/routes/folds/[slug].html":
/*!**************************************!*\
  !*** ./src/routes/folds/[slug].html ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/shared.js */ "./node_modules/svelte/shared.js");
/* harmony import */ var _helpers_date_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/date-format.js */ "./src/routes/_helpers/date-format.js");
/* harmony import */ var _helpers_decode_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/decode-html.js */ "./src/routes/_helpers/decode-html.js");
/* harmony import */ var _components_ArticleList_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ArticleList.html */ "./components/ArticleList.html");
/* harmony import */ var _components_Title_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Title.html */ "./components/Title.html");
/* src/routes/folds/[slug].html generated by Svelte v2.9.9 */






async function preload({ params, query }) {
  const maskFields = 'title/rendered,content/rendered,' +
    'meta(' +
      'volume,number,publication_date,website,' +
      'fold_front/media_details/sizes/full/source_url,' +
      'fold_editors(title/rendered,slug),' +
      'graphic_designer(title/rendered,slug),' +
      'positions_editor(title/rendered,slug),' +
      'web_editor(title/rendered,slug),' +
      'posts(title/rendered,slug,meta/contributors(title/rendered))' +
    ')'
  const res = await this.fetch(`folds/${params.slug}.json?fields=${maskFields}`);
  if (!res.ok) {
    const message = await res.text()
    return this.error(res.status, message);
  }
  const data = await res.json();
  return { fold: data };
};

const file = "src/routes/folds/[slug].html";

function add_css() {
	var style = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style");
	style.id = 'svelte-cnetnj-style';
	style.textContent = ".content img{display:block;margin-bottom:1rem;width:100%;height:auto}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLmh0bWwiLCJzb3VyY2VzIjpbIltzbHVnXS5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPntkZWNvZGVIVE1MKGZvbGQudGl0bGUucmVuZGVyZWQpfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48VGl0bGUgdGl0bGU9e2ZvbGQudGl0bGUucmVuZGVyZWR9Lz5cbjxkaXYgY2xhc3M9XCJ4IHh3XCI+XG4gIDxkaXYgY2xhc3M9XCJjMTIgc20tYzIgcDFcIj5cbiAgICA8aDE+e0BodG1sIGZvbGQudGl0bGUucmVuZGVyZWR9PC9oMT5cbiAgICA8aDI+e2ZvbGQubWV0YS52b2x1bWV9LXtmb2xkLm1ldGEubnVtYmVyfTwvaDI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYzEyIHNtLWM0IHAxIGNvbnRlbnRcIj5cbiAgICB7QGh0bWwgZm9sZC5jb250ZW50LnJlbmRlcmVkfVxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImMxMiBzbS1jNCBwMVwiPlxuICAgIHsjaWYgZm9sZC5tZXRhLnBvc3RzfVxuICAgICAgPGgzPkFydGljbGVzPC9oMz5cbiAgICAgIDxBcnRpY2xlTGlzdCBhcnRpY2xlcz17Zm9sZC5tZXRhLnBvc3RzfSAvPlxuICAgIHsvaWZ9XG4gICAgeyNpZiBmb2xkLm1ldGEuZm9sZF9lZGl0b3JzfVxuICAgICAgPGgzPkVkaXRvcnM8L2gzPlxuICAgICAgPHVsPlxuICAgICAgICB7I2VhY2ggZm9sZC5tZXRhLmZvbGRfZWRpdG9ycyBhcyBlZGl0b3J9XG4gICAgICAgICAgPGxpPjxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cIi9jb250cmlidXRvcnMve2VkaXRvci5zbHVnfVwiPntAaHRtbCBlZGl0b3IudGl0bGUucmVuZGVyZWR9PC9hPjwvbGk+XG4gICAgICAgIHsvZWFjaH1cbiAgICAgIDwvdWw+XG4gICAgey9pZn1cbiAgICB7I2lmIGZvbGQubWV0YS5ncmFwaGljX2Rlc2lnbmVyfVxuICAgICAgPGgzPkdyYXBoaWMgRGVzaWduZXI8L2gzPlxuICAgICAgPHVsPlxuICAgICAgICB7I2VhY2ggZm9sZC5tZXRhLmdyYXBoaWNfZGVzaWduZXIgYXMgZGVzaWduZXJ9XG4gICAgICAgICAgPGxpPjxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cIi9jb250cmlidXRvcnMve2Rlc2lnbmVyLnNsdWd9XCI+e0BodG1sIGRlc2lnbmVyLnRpdGxlLnJlbmRlcmVkfTwvYT48L2xpPlxuICAgICAgICB7L2VhY2h9XG4gICAgICA8L3VsPlxuICAgIHsvaWZ9XG4gICAgeyNpZiBmb2xkLm1ldGEucG9zaXRpb25zX2VkaXRvcn1cbiAgICAgIDxoMz5Qb3NpdGlvbnMgRWRpdG9yPC9oMz5cbiAgICAgIDx1bD5cbiAgICAgICAgeyNlYWNoIGZvbGQubWV0YS5wb3NpdGlvbnNfZWRpdG9yIGFzIGVkaXRvcn1cbiAgICAgICAgICA8bGk+PGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwiL2NvbnRyaWJ1dG9ycy97ZWRpdG9yLnNsdWd9XCI+e0BodG1sIGVkaXRvci50aXRsZS5yZW5kZXJlZH08L2E+PC9saT5cbiAgICAgICAgey9lYWNofVxuICAgICAgPC91bD5cbiAgICB7L2lmfVxuICAgIHsjaWYgZm9sZC5tZXRhLndlYl9lZGl0b3J9XG4gICAgICA8aDM+V2ViIEVkaXRvcjwvaDM+XG4gICAgICA8dWw+XG4gICAgICAgIHsjZWFjaCBmb2xkLm1ldGEud2ViX2VkaXRvciBhcyBlZGl0b3J9XG4gICAgICAgICAgPGxpPjxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cIi9jb250cmlidXRvcnMve2VkaXRvci5zbHVnfVwiPntAaHRtbCBlZGl0b3IudGl0bGUucmVuZGVyZWR9PC9hPjwvbGk+XG4gICAgICAgIHsvZWFjaH1cbiAgICAgIDwvdWw+XG4gICAgey9pZn1cbiAgICA8cD5QdWJsaXNoZWQgb24ge2RhdGVGb3JtYXQoZm9sZC5tZXRhLnB1YmxpY2F0aW9uX2RhdGUpfTwvcD5cbiAgICB7I2lmIGZvbGQubWV0YS5mb2xkX2Zyb250fVxuICAgICAgPGRpdiBjbGFzcz1cIncxMDAgb2ggYmdjLXdoaXRlXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJteDEwMCBmb2xkLWZyb250XCIgc3JjPVwie2ZvbGQubWV0YS5mb2xkX2Zyb250Lm1lZGlhX2RldGFpbHMuc2l6ZXMuZnVsbC5zb3VyY2VfdXJsfVwiPlxuICAgICAgPC9kaXY+XG4gICAgey9pZn1cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuICA6Z2xvYmFsKC5jb250ZW50IGltZykge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IGRhdGVGb3JtYXQgZnJvbSAnLi4vX2hlbHBlcnMvZGF0ZS1mb3JtYXQuanMnXG4gIGltcG9ydCBkZWNvZGVIVE1MIGZyb20gJy4uL19oZWxwZXJzL2RlY29kZS1odG1sLmpzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBoZWxwZXJzOiB7XG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgZGVjb2RlSFRNTFxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgQXJ0aWNsZUxpc3Q6ICcuLi8uLi8uLi9jb21wb25lbnRzL0FydGljbGVMaXN0Lmh0bWwnLFxuICAgICAgVGl0bGU6ICcuLi8uLi8uLi9jb21wb25lbnRzL1RpdGxlLmh0bWwnXG4gICAgfSxcbiAgICBhc3luYyBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG4gICAgICBjb25zdCBtYXNrRmllbGRzID0gJ3RpdGxlL3JlbmRlcmVkLGNvbnRlbnQvcmVuZGVyZWQsJyArXG4gICAgICAgICdtZXRhKCcgK1xuICAgICAgICAgICd2b2x1bWUsbnVtYmVyLHB1YmxpY2F0aW9uX2RhdGUsd2Vic2l0ZSwnICtcbiAgICAgICAgICAnZm9sZF9mcm9udC9tZWRpYV9kZXRhaWxzL3NpemVzL2Z1bGwvc291cmNlX3VybCwnICtcbiAgICAgICAgICAnZm9sZF9lZGl0b3JzKHRpdGxlL3JlbmRlcmVkLHNsdWcpLCcgK1xuICAgICAgICAgICdncmFwaGljX2Rlc2lnbmVyKHRpdGxlL3JlbmRlcmVkLHNsdWcpLCcgK1xuICAgICAgICAgICdwb3NpdGlvbnNfZWRpdG9yKHRpdGxlL3JlbmRlcmVkLHNsdWcpLCcgK1xuICAgICAgICAgICd3ZWJfZWRpdG9yKHRpdGxlL3JlbmRlcmVkLHNsdWcpLCcgK1xuICAgICAgICAgICdwb3N0cyh0aXRsZS9yZW5kZXJlZCxzbHVnLG1ldGEvY29udHJpYnV0b3JzKHRpdGxlL3JlbmRlcmVkKSknICtcbiAgICAgICAgJyknXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBmb2xkcy8ke3BhcmFtcy5zbHVnfS5qc29uP2ZpZWxkcz0ke21hc2tGaWVsZHN9YCk7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgcmVzLnRleHQoKVxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihyZXMuc3RhdHVzLCBtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgcmV0dXJuIHsgZm9sZDogZGF0YSB9O1xuICAgIH1cbiAgfTtcbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RFUsWUFBWSxBQUFFLENBQUMsQUFDckIsT0FBTyxDQUFFLEtBQUssQ0FDZCxhQUFhLENBQUUsSUFBSSxDQUNuQixLQUFLLENBQUUsSUFBSSxDQUNYLE1BQU0sQ0FBRSxJQUFJLEFBQ2QsQ0FBQyJ9 */";
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(style, document.head);
}

function create_main_fragment(component, ctx) {
	var title_value, text, text_1, div, div_1, h1, raw_value = ctx.fold.title.rendered, text_2, h2, text_3_value = ctx.fold.meta.volume, text_3, text_4, text_5_value = ctx.fold.meta.number, text_5, text_7, div_2, raw_1_value = ctx.fold.content.rendered, text_9, div_3, text_10, text_11, text_12, text_13, text_14, p, text_15, text_16_value = Object(_helpers_date_format_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx.fold.meta.publication_date), text_16, text_17;

	document.title = title_value = Object(_helpers_decode_html_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ctx.fold.title.rendered);

	var title_initial_data = { title: ctx.fold.title.rendered };
	var title = new _components_Title_html__WEBPACK_IMPORTED_MODULE_4__["default"]({
		root: component.root,
		store: component.store,
		data: title_initial_data
	});

	var if_block = (ctx.fold.meta.posts) && create_if_block(component, ctx);

	var if_block_1 = (ctx.fold.meta.fold_editors) && create_if_block_1(component, ctx);

	var if_block_2 = (ctx.fold.meta.graphic_designer) && create_if_block_2(component, ctx);

	var if_block_3 = (ctx.fold.meta.positions_editor) && create_if_block_3(component, ctx);

	var if_block_4 = (ctx.fold.meta.web_editor) && create_if_block_4(component, ctx);

	var if_block_5 = (ctx.fold.meta.fold_front) && create_if_block_5(component, ctx);

	return {
		c: function create() {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n\n");
			title._fragment.c();
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n");
			div = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div");
			div_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div");
			h1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1");
			text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n    ");
			h2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2");
			text_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])(text_3_value);
			text_4 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("-");
			text_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])(text_5_value);
			text_7 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n  ");
			div_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div");
			text_9 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n  ");
			div_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div");
			if (if_block) if_block.c();
			text_10 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n    ");
			if (if_block_1) if_block_1.c();
			text_11 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n    ");
			if (if_block_2) if_block_2.c();
			text_12 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n    ");
			if (if_block_3) if_block_3.c();
			text_13 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n    ");
			if (if_block_4) if_block_4.c();
			text_14 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n    ");
			p = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p");
			text_15 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Published on ");
			text_16 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])(text_16_value);
			text_17 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n    ");
			if (if_block_5) if_block_5.c();
			this.h()
		},

		l: function claim(nodes) {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n\n");
			title._fragment.l(nodes);
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n");

			div = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			div_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(div_nodes, "DIV", { class: true }, false);
			var div_1_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(div_1);

			h1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(div_1_nodes, "H1", {}, false);
			var h1_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			h1_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(div_1_nodes, "\n    ");

			h2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(div_1_nodes, "H2", {}, false);
			var h2_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(h2);

			text_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(h2_nodes, text_3_value);
			text_4 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(h2_nodes, "-");
			text_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(h2_nodes, text_5_value);
			h2_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			div_1_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_7 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(div_nodes, "\n  ");

			div_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(div_nodes, "DIV", { class: true }, false);
			var div_2_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(div_2);

			div_2_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_9 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(div_nodes, "\n  ");

			div_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(div_nodes, "DIV", { class: true }, false);
			var div_3_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(div_3);

			if (if_block) if_block.l(div_3_nodes);
			text_10 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(div_3_nodes, "\n    ");
			if (if_block_1) if_block_1.l(div_3_nodes);
			text_11 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(div_3_nodes, "\n    ");
			if (if_block_2) if_block_2.l(div_3_nodes);
			text_12 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(div_3_nodes, "\n    ");
			if (if_block_3) if_block_3.l(div_3_nodes);
			text_13 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(div_3_nodes, "\n    ");
			if (if_block_4) if_block_4.l(div_3_nodes);
			text_14 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(div_3_nodes, "\n    ");

			p = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(div_3_nodes, "P", {}, false);
			var p_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(p);

			text_15 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(p_nodes, "Published on ");
			text_16 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(p_nodes, text_16_value);
			p_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_17 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(div_3_nodes, "\n    ");
			if (if_block_5) if_block_5.l(div_3_nodes);
			div_3_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			div_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(h1, file, 7, 4, 170);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(h2, file, 8, 4, 211);
			div_1.className = "c12 sm-c2 p1";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(div_1, file, 6, 2, 139);
			div_2.className = "c12 sm-c4 p1 content";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(div_2, file, 10, 2, 269);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(p, file, 50, 4, 1568);
			div_3.className = "c12 sm-c4 p1";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(div_3, file, 13, 2, 349);
			div.className = "x xw";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(div, file, 5, 0, 118);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text, target, anchor);
			title._mount(target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text_1, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(div, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(div_1, div);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(h1, div_1);
			h1.innerHTML = raw_value;
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_2, div_1);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(h2, div_1);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_3, h2);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_4, h2);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_5, h2);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_7, div);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(div_2, div);
			div_2.innerHTML = raw_1_value;
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_9, div);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(div_3, div);
			if (if_block) if_block.m(div_3, null);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_10, div_3);
			if (if_block_1) if_block_1.m(div_3, null);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_11, div_3);
			if (if_block_2) if_block_2.m(div_3, null);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_12, div_3);
			if (if_block_3) if_block_3.m(div_3, null);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_13, div_3);
			if (if_block_4) if_block_4.m(div_3, null);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_14, div_3);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(p, div_3);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_15, p);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_16, p);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_17, div_3);
			if (if_block_5) if_block_5.m(div_3, null);
		},

		p: function update(changed, ctx) {
			if ((changed.fold) && title_value !== (title_value = Object(_helpers_decode_html_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ctx.fold.title.rendered))) {
				document.title = title_value;
			}

			var title_changes = {};
			if (changed.fold) title_changes.title = ctx.fold.title.rendered;
			title._set(title_changes);

			if ((changed.fold) && raw_value !== (raw_value = ctx.fold.title.rendered)) {
				h1.innerHTML = raw_value;
			}

			if ((changed.fold) && text_3_value !== (text_3_value = ctx.fold.meta.volume)) {
				text_3.data = text_3_value;
			}

			if ((changed.fold) && text_5_value !== (text_5_value = ctx.fold.meta.number)) {
				text_5.data = text_5_value;
			}

			if ((changed.fold) && raw_1_value !== (raw_1_value = ctx.fold.content.rendered)) {
				div_2.innerHTML = raw_1_value;
			}

			if (ctx.fold.meta.posts) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(component, ctx);
					if_block.c();
					if_block.m(div_3, text_10);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (ctx.fold.meta.fold_editors) {
				if (if_block_1) {
					if_block_1.p(changed, ctx);
				} else {
					if_block_1 = create_if_block_1(component, ctx);
					if_block_1.c();
					if_block_1.m(div_3, text_11);
				}
			} else if (if_block_1) {
				if_block_1.d(1);
				if_block_1 = null;
			}

			if (ctx.fold.meta.graphic_designer) {
				if (if_block_2) {
					if_block_2.p(changed, ctx);
				} else {
					if_block_2 = create_if_block_2(component, ctx);
					if_block_2.c();
					if_block_2.m(div_3, text_12);
				}
			} else if (if_block_2) {
				if_block_2.d(1);
				if_block_2 = null;
			}

			if (ctx.fold.meta.positions_editor) {
				if (if_block_3) {
					if_block_3.p(changed, ctx);
				} else {
					if_block_3 = create_if_block_3(component, ctx);
					if_block_3.c();
					if_block_3.m(div_3, text_13);
				}
			} else if (if_block_3) {
				if_block_3.d(1);
				if_block_3 = null;
			}

			if (ctx.fold.meta.web_editor) {
				if (if_block_4) {
					if_block_4.p(changed, ctx);
				} else {
					if_block_4 = create_if_block_4(component, ctx);
					if_block_4.c();
					if_block_4.m(div_3, text_14);
				}
			} else if (if_block_4) {
				if_block_4.d(1);
				if_block_4 = null;
			}

			if ((changed.fold) && text_16_value !== (text_16_value = Object(_helpers_date_format_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx.fold.meta.publication_date))) {
				text_16.data = text_16_value;
			}

			if (ctx.fold.meta.fold_front) {
				if (if_block_5) {
					if_block_5.p(changed, ctx);
				} else {
					if_block_5 = create_if_block_5(component, ctx);
					if_block_5.c();
					if_block_5.m(div_3, null);
				}
			} else if (if_block_5) {
				if_block_5.d(1);
				if_block_5 = null;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text);
			}

			title.destroy(detach);
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_1);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(div);
			}

			if (if_block) if_block.d();
			if (if_block_1) if_block_1.d();
			if (if_block_2) if_block_2.d();
			if (if_block_3) if_block_3.d();
			if (if_block_4) if_block_4.d();
			if (if_block_5) if_block_5.d();
		}
	};
}

// (15:4) {#if fold.meta.posts}
function create_if_block(component, ctx) {
	var h3, text, text_1;

	var articlelist_initial_data = { articles: ctx.fold.meta.posts };
	var articlelist = new _components_ArticleList_html__WEBPACK_IMPORTED_MODULE_3__["default"]({
		root: component.root,
		store: component.store,
		data: articlelist_initial_data
	});

	return {
		c: function create() {
			h3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3");
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Articles");
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n      ");
			articlelist._fragment.c();
			this.h()
		},

		l: function claim(nodes) {
			h3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "H3", {}, false);
			var h3_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(h3);

			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(h3_nodes, "Articles");
			h3_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n      ");
			articlelist._fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(h3, file, 15, 6, 408);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(h3, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text, h3);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text_1, target, anchor);
			articlelist._mount(target, anchor);
		},

		p: function update(changed, ctx) {
			var articlelist_changes = {};
			if (changed.fold) articlelist_changes.articles = ctx.fold.meta.posts;
			articlelist._set(articlelist_changes);
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(h3);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_1);
			}

			articlelist.destroy(detach);
		}
	};
}

// (22:8) {#each fold.meta.fold_editors as editor}
function create_each_block(component, ctx) {
	var li, a, raw_value = ctx.editor.title.rendered, a_href_value;

	return {
		c: function create() {
			li = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li");
			a = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a");
			this.h()
		},

		l: function claim(nodes) {
			li = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "LI", {}, false);
			var li_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(li);

			a = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(li_nodes, "A", { rel: true, href: true }, false);
			var a_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			a_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			li_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			a.rel = "prefetch";
			a.href = a_href_value = "/contributors/" + ctx.editor.slug;
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(a, file, 22, 14, 615);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(li, file, 22, 10, 611);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(li, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(a, li);
			a.innerHTML = raw_value;
		},

		p: function update(changed, ctx) {
			if ((changed.fold) && raw_value !== (raw_value = ctx.editor.title.rendered)) {
				a.innerHTML = raw_value;
			}

			if ((changed.fold) && a_href_value !== (a_href_value = "/contributors/" + ctx.editor.slug)) {
				a.href = a_href_value;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(li);
			}
		}
	};
}

// (19:4) {#if fold.meta.fold_editors}
function create_if_block_1(component, ctx) {
	var h3, text, text_1, ul;

	var each_value = ctx.fold.meta.fold_editors;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(component, get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			h3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3");
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Editors");
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n      ");
			ul = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h()
		},

		l: function claim(nodes) {
			h3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "H3", {}, false);
			var h3_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(h3);

			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(h3_nodes, "Editors");
			h3_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n      ");

			ul = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "UL", {}, false);
			var ul_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(h3, file, 19, 6, 524);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(ul, file, 20, 6, 547);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(h3, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text, h3);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text_1, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(ul, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.fold) {
				each_value = ctx.fold.meta.fold_editors;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(h3);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_1);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(ul);
			}

			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["destroyEach"])(each_blocks, detach);
		}
	};
}

// (30:8) {#each fold.meta.graphic_designer as designer}
function create_each_block_1(component, ctx) {
	var li, a, raw_value = ctx.designer.title.rendered, a_href_value;

	return {
		c: function create() {
			li = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li");
			a = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a");
			this.h()
		},

		l: function claim(nodes) {
			li = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "LI", {}, false);
			var li_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(li);

			a = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(li_nodes, "A", { rel: true, href: true }, false);
			var a_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			a_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			li_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			a.rel = "prefetch";
			a.href = a_href_value = "/contributors/" + ctx.designer.slug;
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(a, file, 30, 14, 894);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(li, file, 30, 10, 890);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(li, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(a, li);
			a.innerHTML = raw_value;
		},

		p: function update(changed, ctx) {
			if ((changed.fold) && raw_value !== (raw_value = ctx.designer.title.rendered)) {
				a.innerHTML = raw_value;
			}

			if ((changed.fold) && a_href_value !== (a_href_value = "/contributors/" + ctx.designer.slug)) {
				a.href = a_href_value;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(li);
			}
		}
	};
}

// (27:4) {#if fold.meta.graphic_designer}
function create_if_block_2(component, ctx) {
	var h3, text, text_1, ul;

	var each_value_1 = ctx.fold.meta.graphic_designer;

	var each_blocks = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(component, get_each_context_1(ctx, each_value_1, i));
	}

	return {
		c: function create() {
			h3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3");
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Graphic Designer");
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n      ");
			ul = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h()
		},

		l: function claim(nodes) {
			h3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "H3", {}, false);
			var h3_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(h3);

			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(h3_nodes, "Graphic Designer");
			h3_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n      ");

			ul = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "UL", {}, false);
			var ul_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(h3, file, 27, 6, 788);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(ul, file, 28, 6, 820);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(h3, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text, h3);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text_1, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(ul, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.fold) {
				each_value_1 = ctx.fold.meta.graphic_designer;

				for (var i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block_1(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value_1.length;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(h3);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_1);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(ul);
			}

			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["destroyEach"])(each_blocks, detach);
		}
	};
}

// (38:8) {#each fold.meta.positions_editor as editor}
function create_each_block_2(component, ctx) {
	var li, a, raw_value = ctx.editor.title.rendered, a_href_value;

	return {
		c: function create() {
			li = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li");
			a = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a");
			this.h()
		},

		l: function claim(nodes) {
			li = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "LI", {}, false);
			var li_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(li);

			a = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(li_nodes, "A", { rel: true, href: true }, false);
			var a_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			a_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			li_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			a.rel = "prefetch";
			a.href = a_href_value = "/contributors/" + ctx.editor.slug;
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(a, file, 38, 14, 1175);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(li, file, 38, 10, 1171);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(li, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(a, li);
			a.innerHTML = raw_value;
		},

		p: function update(changed, ctx) {
			if ((changed.fold) && raw_value !== (raw_value = ctx.editor.title.rendered)) {
				a.innerHTML = raw_value;
			}

			if ((changed.fold) && a_href_value !== (a_href_value = "/contributors/" + ctx.editor.slug)) {
				a.href = a_href_value;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(li);
			}
		}
	};
}

// (35:4) {#if fold.meta.positions_editor}
function create_if_block_3(component, ctx) {
	var h3, text, text_1, ul;

	var each_value_2 = ctx.fold.meta.positions_editor;

	var each_blocks = [];

	for (var i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(component, get_each_context_2(ctx, each_value_2, i));
	}

	return {
		c: function create() {
			h3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3");
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Positions Editor");
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n      ");
			ul = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h()
		},

		l: function claim(nodes) {
			h3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "H3", {}, false);
			var h3_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(h3);

			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(h3_nodes, "Positions Editor");
			h3_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n      ");

			ul = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "UL", {}, false);
			var ul_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(h3, file, 35, 6, 1071);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(ul, file, 36, 6, 1103);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(h3, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text, h3);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text_1, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(ul, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.fold) {
				each_value_2 = ctx.fold.meta.positions_editor;

				for (var i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block_2(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value_2.length;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(h3);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_1);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(ul);
			}

			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["destroyEach"])(each_blocks, detach);
		}
	};
}

// (46:8) {#each fold.meta.web_editor as editor}
function create_each_block_3(component, ctx) {
	var li, a, raw_value = ctx.editor.title.rendered, a_href_value;

	return {
		c: function create() {
			li = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li");
			a = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a");
			this.h()
		},

		l: function claim(nodes) {
			li = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "LI", {}, false);
			var li_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(li);

			a = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(li_nodes, "A", { rel: true, href: true }, false);
			var a_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			a_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			li_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			a.rel = "prefetch";
			a.href = a_href_value = "/contributors/" + ctx.editor.slug;
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(a, file, 46, 14, 1434);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(li, file, 46, 10, 1430);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(li, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(a, li);
			a.innerHTML = raw_value;
		},

		p: function update(changed, ctx) {
			if ((changed.fold) && raw_value !== (raw_value = ctx.editor.title.rendered)) {
				a.innerHTML = raw_value;
			}

			if ((changed.fold) && a_href_value !== (a_href_value = "/contributors/" + ctx.editor.slug)) {
				a.href = a_href_value;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(li);
			}
		}
	};
}

// (43:4) {#if fold.meta.web_editor}
function create_if_block_4(component, ctx) {
	var h3, text, text_1, ul;

	var each_value_3 = ctx.fold.meta.web_editor;

	var each_blocks = [];

	for (var i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3(component, get_each_context_3(ctx, each_value_3, i));
	}

	return {
		c: function create() {
			h3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3");
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Web Editor");
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n      ");
			ul = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h()
		},

		l: function claim(nodes) {
			h3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "H3", {}, false);
			var h3_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(h3);

			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(h3_nodes, "Web Editor");
			h3_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n      ");

			ul = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "UL", {}, false);
			var ul_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(h3, file, 43, 6, 1342);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(ul, file, 44, 6, 1368);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(h3, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text, h3);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text_1, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(ul, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.fold) {
				each_value_3 = ctx.fold.meta.web_editor;

				for (var i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block_3(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value_3.length;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(h3);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_1);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(ul);
			}

			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["destroyEach"])(each_blocks, detach);
		}
	};
}

// (52:4) {#if fold.meta.fold_front}
function create_if_block_5(component, ctx) {
	var div, img, img_src_value;

	return {
		c: function create() {
			div = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div");
			img = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img");
			this.h()
		},

		l: function claim(nodes) {
			div = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			img = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(div_nodes, "IMG", { class: true, src: true }, false);
			var img_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(img);

			img_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			div_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			img.className = "mx100 fold-front";
			img.src = img_src_value = ctx.fold.meta.fold_front.media_details.sizes.full.source_url;
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(img, file, 53, 8, 1706);
			div.className = "w100 oh bgc-white";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(div, file, 52, 6, 1666);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(div, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(img, div);
		},

		p: function update(changed, ctx) {
			if ((changed.fold) && img_src_value !== (img_src_value = ctx.fold.meta.fold_front.media_details.sizes.full.source_url)) {
				img.src = img_src_value;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(div);
			}
		}
	};
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.editor = list[i];
	child_ctx.each_value = list;
	child_ctx.editor_index = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.designer = list[i];
	child_ctx.each_value_1 = list;
	child_ctx.designer_index = i;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.editor = list[i];
	child_ctx.each_value_2 = list;
	child_ctx.editor_index_1 = i;
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.editor = list[i];
	child_ctx.each_value_3 = list;
	child_ctx.editor_index_2 = i;
	return child_ctx;
}

function Slug(options) {
	this._debugName = '<Slug>';
	if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options);
	this._state = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, options.data);
	if (!('fold' in this._state)) console.warn("<Slug> was created without expected data property 'fold'");
	this._intro = true;

	if (!document.getElementById("svelte-cnetnj-style")) add_css();

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		var nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
		this._mount(options.target, options.anchor);

		this._lock = true;
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._beforecreate);
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._oncreate);
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._aftercreate);
		this._lock = false;
	}
}

Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(Slug.prototype, svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["protoDev"]);

Slug.prototype._checkReadOnly = function _checkReadOnly(newState) {
};

Slug.preload = preload;

if (true) {
	const { configure, register, reload } = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");

	module.hot.accept();

	if (!module.hot.data) {
		// initial load
		configure({});
		Slug = register("src/routes/folds/[slug].html", Slug);
	} else {
		// hot update
		Slug = reload("src/routes/folds/[slug].html", Slug);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Slug);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1leHRlbmRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmVzY2FwZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5lc2NhcGUvbm9kZV9tb2R1bGVzL2V4dGVuZC1zaGFsbG93L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvX2hlbHBlcnMvZGF0ZS1mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9faGVscGVycy9kZWNvZGUtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2ZvbGRzL1tzbHVnXS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGVBQWUsbUNBQW9JLGlCQUFpQixhQUFhLCtGQUErRixFQUFFLE9BQU8sSUFBSSxPQUFPLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxNQUFNLElBQUksU0FBUyxJQUFJLGtCQUFrQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBTyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksVUFBVSxtTUFBbU0sbUJBQW1CLGdCQUFnQix5REFBeUQsSUFBSSxrQ0FBa0MsNENBQTRDLCtDQUErQyx5QkFBeUIsNEhBQTRILHNDQUFzQyxzQkFBc0IseUNBQXlDLHdCQUF3QixPQUFPLGlDQUFpQyxrREFBa0QseUJBQXlCLG1CQUFtQixhQUFhLE9BQU8sa0JBQWtCLHNCQUFzQixtQkFBbUIsTUFBTSxrQkFBa0Isa0RBQWtELEtBQUssYUFBYSxXQUFXLGtCQUFrQixpQkFBaUIseUJBQXlCLFlBQVkseUJBQXlCLGlCQUFpQixZQUFZLFlBQVksRUFBRSxLQUFLLHdDQUF3QyxpQkFBaUIsY0FBYyxjQUFjLGtCQUFr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LENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7Ozs7Ozs7OztnRUFBeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSIsImZpbGUiOiI4MWJkYzM1NDA0MGYyNDk0MWIzZC9mb2xkc18kc2x1Zy5mb2xkc18kc2x1Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOnQuZGF5anM9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtaWxsaXNlY29uZFwiLGU9XCJzZWNvbmRcIixuPVwibWludXRlXCIscj1cImhvdXJcIixzPVwiZGF5XCIsaT1cIndlZWtcIixhPVwibW9udGhcIix1PVwieWVhclwiLGM9L14oXFxkezR9KS0/KFxcZHsxLDJ9KS0/KFxcZHswLDJ9KSguKj8oXFxkezEsMn0pOihcXGR7MSwyfSk6KFxcZHsxLDJ9KSk/Lj8oXFxkezEsM30pPyQvLG89L1xcWy4qP1xcXXxZezIsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csaD17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpfSxkPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sJD17cGFkU3RhcnQ6ZCxwYWRab25lU3RyOmZ1bmN0aW9uKHQpe3ZhciBlPU1hdGguYWJzKHQpLG49TWF0aC5mbG9vcihlLzYwKSxyPWUlNjA7cmV0dXJuKHQ8PTA/XCIrXCI6XCItXCIpK2QobiwyLFwiMFwiKStcIjpcIitkKHIsMixcIjBcIil9LG1vbnRoRGlmZjpmdW5jdGlvbih0LGUpe3ZhciBuPTEyKihlLnllYXIoKS10LnllYXIoKSkrKGUubW9udGgoKS10Lm1vbnRoKCkpLHI9dC5jbG9uZSgpLmFkZChuLFwibW9udGhzXCIpLHM9ZS1yPDAsaT10LmNsb25lKCkuYWRkKG4rKHM/LTE6MSksXCJtb250aHNcIik7cmV0dXJuIE51bWJlcigtKG4rKGUtcikvKHM/ci1pOmktcikpKX0sYWJzRmxvb3I6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scHJldHR5VW5pdDpmdW5jdGlvbihjKXtyZXR1cm57TTphLHk6dSx3OmksZDpzLGg6cixtOm4sczplLG1zOnR9W2NdfHxTdHJpbmcoY3x8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LGlzVW5kZWZpbmVkOmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sZj1cImVuXCIsbD17fTtsW2ZdPWg7dmFyIG09ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBEfSx5PWZ1bmN0aW9uKHQsZSxuKXt2YXIgcjtpZighdClyZXR1cm4gbnVsbDtpZihcInN0cmluZ1wiPT10eXBlb2YgdClsW3RdJiYocj10KSxlJiYobFt0XT1lLHI9dCk7ZWxzZXt2YXIgcz10Lm5hbWU7bFtzXT10LHI9c31yZXR1cm4gbnx8KGY9cikscn0sTT1mdW5jdGlvbih0LGUpe2lmKG0odCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1lfHx7fTtyZXR1cm4gbi5kYXRlPXQsbmV3IEQobil9LFM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTSh0LHtsb2NhbGU6ZS4kTH0pfSxwPSQ7cC5wYXJzZUxvY2FsZT15LHAuaXNEYXlqcz1tLHAud3JhcHBlcj1TO3ZhciBEPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaCh0KXt0aGlzLnBhcnNlKHQpfXZhciBkPWgucHJvdG90eXBlO3JldHVybiBkLnBhcnNlPWZ1bmN0aW9uKHQpe3ZhciBlLG47dGhpcy4kZD1udWxsPT09KGU9dC5kYXRlKT9uZXcgRGF0ZShOYU4pOnAuaXNVbmRlZmluZWQoZSk/bmV3IERhdGU6ZSBpbnN0YW5jZW9mIERhdGU/ZTpcInN0cmluZ1wiPT10eXBlb2YgZSYmLy4qW15aXSQvaS50ZXN0KGUpJiYobj1lLm1hdGNoKGMpKT9uZXcgRGF0ZShuWzFdLG5bMl0tMSxuWzNdfHwxLG5bNV18fDAsbls2XXx8MCxuWzddfHwwLG5bOF18fDApOm5ldyBEYXRlKGUpLHRoaXMuaW5pdCh0KX0sZC5pbml0PWZ1bmN0aW9uKHQpe3RoaXMuJHk9dGhpcy4kZC5nZXRGdWxsWWVhcigpLHRoaXMuJE09dGhpcy4kZC5nZXRNb250aCgpLHRoaXMuJEQ9dGhpcy4kZC5nZXREYXRlKCksdGhpcy4kVz10aGlzLiRkLmdldERheSgpLHRoaXMuJEg9dGhpcy4kZC5nZXRIb3VycygpLHRoaXMuJG09dGhpcy4kZC5nZXRNaW51dGVzKCksdGhpcy4kcz10aGlzLiRkLmdldFNlY29uZHMoKSx0aGlzLiRtcz10aGlzLiRkLmdldE1pbGxpc2Vjb25kcygpLHRoaXMuJEw9dGhpcy4kTHx8eSh0LmxvY2FsZSxudWxsLCEwKXx8Zn0sZC4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gcH0sZC5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuIShcIkludmFsaWQgRGF0ZVwiPT09dGhpcy4kZC50b1N0cmluZygpKX0sZC4kY29tcGFyZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy52YWx1ZU9mKCktTSh0KS52YWx1ZU9mKCl9LGQuaXNTYW1lPWZ1bmN0aW9uKHQpe3JldHVybiAwPT09dGhpcy4kY29tcGFyZSh0KX0sZC5pc0JlZm9yZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kY29tcGFyZSh0KTwwfSxkLmlzQWZ0ZXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGNvbXBhcmUodCk+MH0sZC55ZWFyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJHl9LGQubW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kTX0sZC5kYXk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kV30sZC5kYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJER9LGQuaG91cj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRIfSxkLm1pbnV0ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRtfSxkLnNlY29uZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRzfSxkLm1pbGxpc2Vjb25kPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJG1zfSxkLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxkLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LGQuc3RhcnRPZj1mdW5jdGlvbih0LGMpe3ZhciBvPXRoaXMsaD0hIXAuaXNVbmRlZmluZWQoYyl8fGMsZD1mdW5jdGlvbih0LGUpe3ZhciBuPVMobmV3IERhdGUoby4keSxlLHQpLG8pO3JldHVybiBoP246bi5lbmRPZihzKX0sJD1mdW5jdGlvbih0LGUpe3JldHVybiBTKG8udG9EYXRlKClbdF0uYXBwbHkoby50b0RhdGUoKSxoP1swLDAsMCwwXS5zbGljZShlKTpbMjMsNTksNTksOTk5XS5zbGljZShlKSksbyl9O3N3aXRjaChwLnByZXR0eVVuaXQodCkpe2Nhc2UgdTpyZXR1cm4gaD9kKDEsMCk6ZCgzMSwxMSk7Y2FzZSBhOnJldHVybiBoP2QoMSx0aGlzLiRNKTpkKDAsdGhpcy4kTSsxKTtjYXNlIGk6cmV0dXJuIGQoaD90aGlzLiRELXRoaXMuJFc6dGhpcy4kRCsoNi10aGlzLiRXKSx0aGlzLiRNKTtjYXNlIHM6Y2FzZVwiZGF0ZVwiOnJldHVybiAkKFwic2V0SG91cnNcIiwwKTtjYXNlIHI6cmV0dXJuICQoXCJzZXRNaW51dGVzXCIsMSk7Y2FzZSBuOnJldHVybiAkKFwic2V0U2Vjb25kc1wiLDIpO2Nhc2UgZTpyZXR1cm4gJChcInNldE1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LGQuZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sZC4kc2V0PWZ1bmN0aW9uKGksYyl7c3dpdGNoKHAucHJldHR5VW5pdChpKSl7Y2FzZSBzOnRoaXMuJGQuc2V0RGF0ZSh0aGlzLiREKyhjLXRoaXMuJFcpKTticmVhaztjYXNlXCJkYXRlXCI6dGhpcy4kZC5zZXREYXRlKGMpO2JyZWFrO2Nhc2UgYTp0aGlzLiRkLnNldE1vbnRoKGMpO2JyZWFrO2Nhc2UgdTp0aGlzLiRkLnNldEZ1bGxZZWFyKGMpO2JyZWFrO2Nhc2Ugcjp0aGlzLiRkLnNldEhvdXJzKGMpO2JyZWFrO2Nhc2Ugbjp0aGlzLiRkLnNldE1pbnV0ZXMoYyk7YnJlYWs7Y2FzZSBlOnRoaXMuJGQuc2V0U2Vjb25kcyhjKTticmVhaztjYXNlIHQ6dGhpcy4kZC5zZXRNaWxsaXNlY29uZHMoYyl9cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LGQuc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LGQuYWRkPWZ1bmN0aW9uKHQsYyl7dmFyIG89dGhpczt0PU51bWJlcih0KTt2YXIgaCxkPXAucHJldHR5VW5pdChjKSwkPWZ1bmN0aW9uKGUsbil7dmFyIHI9by5zZXQoXCJkYXRlXCIsMSkuc2V0KGUsbit0KTtyZXR1cm4gci5zZXQoXCJkYXRlXCIsTWF0aC5taW4oby4kRCxyLmRheXNJbk1vbnRoKCkpKX07aWYoZD09PWEpcmV0dXJuICQoYSx0aGlzLiRNKTtpZihkPT09dSlyZXR1cm4gJCh1LHRoaXMuJHkpO3N3aXRjaChkKXtjYXNlIG46aD02ZTQ7YnJlYWs7Y2FzZSByOmg9MzZlNTticmVhaztjYXNlIHM6aD04NjRlNTticmVhaztjYXNlIGk6aD02MDQ4ZTU7YnJlYWs7Y2FzZSBlOmg9MWUzO2JyZWFrO2RlZmF1bHQ6aD0xfXZhciBmPXRoaXMudmFsdWVPZigpK3QqaDtyZXR1cm4gUyhmLHRoaXMpfSxkLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LGQuZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIscj1wLnBhZFpvbmVTdHIodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpKSxzPXRoaXMuJGxvY2FsZSgpLGk9cy53ZWVrZGF5cyxhPXMubW9udGhzLHU9ZnVuY3Rpb24odCxlLG4scil7cmV0dXJuIHQmJnRbZV18fG5bZV0uc3Vic3RyKDAscil9O3JldHVybiBuLnJlcGxhY2UobyxmdW5jdGlvbih0KXtpZih0LmluZGV4T2YoXCJbXCIpPi0xKXJldHVybiB0LnJlcGxhY2UoL1xcW3xcXF0vZyxcIlwiKTtzd2l0Y2godCl7Y2FzZVwiWVlcIjpyZXR1cm4gU3RyaW5nKGUuJHkpLnNsaWNlKC0yKTtjYXNlXCJZWVlZXCI6cmV0dXJuIFN0cmluZyhlLiR5KTtjYXNlXCJNXCI6cmV0dXJuIFN0cmluZyhlLiRNKzEpO2Nhc2VcIk1NXCI6cmV0dXJuIHAucGFkU3RhcnQoZS4kTSsxLDIsXCIwXCIpO2Nhc2VcIk1NTVwiOnJldHVybiB1KHMubW9udGhzU2hvcnQsZS4kTSxhLDMpO2Nhc2VcIk1NTU1cIjpyZXR1cm4gYVtlLiRNXTtjYXNlXCJEXCI6cmV0dXJuIFN0cmluZyhlLiREKTtjYXNlXCJERFwiOnJldHVybiBwLnBhZFN0YXJ0KGUuJEQsMixcIjBcIik7Y2FzZVwiZFwiOnJldHVybiBTdHJpbmcoZS4kVyk7Y2FzZVwiZGRcIjpyZXR1cm4gdShzLndlZWtkYXlzTWluLGUuJFcsaSwyKTtjYXNlXCJkZGRcIjpyZXR1cm4gdShzLndlZWtkYXlzU2hvcnQsZS4kVyxpLDMpO2Nhc2VcImRkZGRcIjpyZXR1cm4gaVtlLiRXXTtjYXNlXCJIXCI6cmV0dXJuIFN0cmluZyhlLiRIKTtjYXNlXCJISFwiOnJldHVybiBwLnBhZFN0YXJ0KGUuJEgsMixcIjBcIik7Y2FzZVwiaFwiOmNhc2VcImhoXCI6cmV0dXJuIDA9PT1lLiRIPzEyOnAucGFkU3RhcnQoZS4kSDwxMz9lLiRIOmUuJEgtMTIsXCJoaFwiPT09dD8yOjEsXCIwXCIpO2Nhc2VcImFcIjpyZXR1cm4gZS4kSDwxMj9cImFtXCI6XCJwbVwiO2Nhc2VcIkFcIjpyZXR1cm4gZS4kSDwxMj9cIkFNXCI6XCJQTVwiO2Nhc2VcIm1cIjpyZXR1cm4gU3RyaW5nKGUuJG0pO2Nhc2VcIm1tXCI6cmV0dXJuIHAucGFkU3RhcnQoZS4kbSwyLFwiMFwiKTtjYXNlXCJzXCI6cmV0dXJuIFN0cmluZyhlLiRzKTtjYXNlXCJzc1wiOnJldHVybiBwLnBhZFN0YXJ0KGUuJHMsMixcIjBcIik7Y2FzZVwiU1NTXCI6cmV0dXJuIHAucGFkU3RhcnQoZS4kbXMsMyxcIjBcIik7Y2FzZVwiWlwiOnJldHVybiByO2RlZmF1bHQ6cmV0dXJuIHIucmVwbGFjZShcIjpcIixcIlwiKX19KX0sZC5kaWZmPWZ1bmN0aW9uKHQsYyxvKXt2YXIgaD1wLnByZXR0eVVuaXQoYyksZD1NKHQpLCQ9dGhpcy1kLGY9cC5tb250aERpZmYodGhpcyxkKTtzd2l0Y2goaCl7Y2FzZSB1OmYvPTEyO2JyZWFrO2Nhc2UgYTpicmVhaztjYXNlXCJxdWFydGVyXCI6Zi89MzticmVhaztjYXNlIGk6Zj0kLzYwNDhlNTticmVhaztjYXNlIHM6Zj0kLzg2NGU1O2JyZWFrO2Nhc2UgcjpmPSQvMzZlNTticmVhaztjYXNlIG46Zj0kLzZlNDticmVhaztjYXNlIGU6Zj0kLzFlMzticmVhaztkZWZhdWx0OmY9JH1yZXR1cm4gbz9mOnAuYWJzRmxvb3IoZil9LGQuZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZihhKS4kRH0sZC4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIGxbdGhpcy4kTF19LGQubG9jYWxlPWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5jbG9uZSgpO3JldHVybiBuLiRMPXkodCxlLCEwKSxufSxkLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIFModGhpcy50b0RhdGUoKSx0aGlzKX0sZC50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy4kZCl9LGQudG9BcnJheT1mdW5jdGlvbigpe3JldHVyblt0aGlzLiR5LHRoaXMuJE0sdGhpcy4kRCx0aGlzLiRILHRoaXMuJG0sdGhpcy4kcyx0aGlzLiRtc119LGQudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9JU09TdHJpbmcoKX0sZC50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCl9LGQudG9PYmplY3Q9ZnVuY3Rpb24oKXtyZXR1cm57eWVhcnM6dGhpcy4keSxtb250aHM6dGhpcy4kTSxkYXRlOnRoaXMuJEQsaG91cnM6dGhpcy4kSCxtaW51dGVzOnRoaXMuJG0sc2Vjb25kczp0aGlzLiRzLG1pbGxpc2Vjb25kczp0aGlzLiRtc319LGQudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxofSgpO3JldHVybiBNLmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0KGUsRCxNKSxNfSxNLmxvY2FsZT15LE0uaXNEYXlqcz1tLE0uZW49bFtmXSxNfSk7XG4iLCIvKiFcbiAqIGlzLWV4dGVuZGFibGUgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLWV4dGVuZGFibGU+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNFeHRlbmRhYmxlKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsICE9PSBudWxsXG4gICAgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZC1zaGFsbG93Jyk7XG52YXIgcmVnZXhDYWNoZSA9IHt9O1xudmFyIGFsbDtcblxudmFyIGNoYXJTZXRzID0ge1xuICBkZWZhdWx0OiB7XG4gICAgJyZxdW90Oyc6ICdcIicsXG4gICAgJyYjMzQ7JzogJ1wiJyxcblxuICAgICcmYXBvczsnOiAnXFwnJyxcbiAgICAnJiMzOTsnOiAnXFwnJyxcblxuICAgICcmYW1wOyc6ICcmJyxcbiAgICAnJiMzODsnOiAnJicsXG5cbiAgICAnJmd0Oyc6ICc+JyxcbiAgICAnJiM2MjsnOiAnPicsXG5cbiAgICAnJmx0Oyc6ICc8JyxcbiAgICAnJiM2MDsnOiAnPCdcbiAgfSxcbiAgZXh0cmFzOiB7XG4gICAgJyZjZW50Oyc6ICfCoicsXG4gICAgJyYjMTYyOyc6ICfCoicsXG5cbiAgICAnJmNvcHk7JzogJ8KpJyxcbiAgICAnJiMxNjk7JzogJ8KpJyxcblxuICAgICcmZXVybzsnOiAn4oKsJyxcbiAgICAnJiM4MzY0Oyc6ICfigqwnLFxuXG4gICAgJyZwb3VuZDsnOiAnwqMnLFxuICAgICcmIzE2MzsnOiAnwqMnLFxuXG4gICAgJyZyZWc7JzogJ8KuJyxcbiAgICAnJiMxNzQ7JzogJ8KuJyxcblxuICAgICcmeWVuOyc6ICfCpScsXG4gICAgJyYjMTY1Oyc6ICfCpSdcbiAgfVxufTtcblxuLy8gZG9uJ3QgbWVyZ2UgY2hhciBzZXRzIHVubGVzcyBcImFsbFwiIGlzIGV4cGxpY2l0bHkgY2FsbGVkXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoY2hhclNldHMsICdhbGwnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFsbCB8fCAoYWxsID0gZXh0ZW5kKHt9LCBjaGFyU2V0cy5kZWZhdWx0LCBjaGFyU2V0cy5leHRyYXMpKTtcbiAgfVxufSk7XG5cbi8qKlxuICogQ29udmVydCBIVE1MIGVudGl0aWVzIHRvIEhUTUwgY2hhcmFjdGVycy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJgIFN0cmluZyB3aXRoIEhUTUwgZW50aXRpZXMgdG8gdW4tZXNjYXBlLlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHVuZXNjYXBlKHN0ciwgdHlwZSkge1xuICBpZiAoIWlzU3RyaW5nKHN0cikpIHJldHVybiAnJztcbiAgdmFyIGNoYXJzID0gY2hhclNldHNbdHlwZSB8fCAnZGVmYXVsdCddO1xuICB2YXIgcmVnZXggPSB0b1JlZ2V4KHR5cGUsIGNoYXJzKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ2V4LCBmdW5jdGlvbihtKSB7XG4gICAgcmV0dXJuIGNoYXJzW21dO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9SZWdleCh0eXBlLCBjaGFycykge1xuICBpZiAocmVnZXhDYWNoZVt0eXBlXSkge1xuICAgIHJldHVybiByZWdleENhY2hlW3R5cGVdO1xuICB9XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY2hhcnMpLmpvaW4oJ3wnKTtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKD89KCcgKyBrZXlzICsgJykpXFxcXDEnLCAnZycpO1xuICByZWdleENhY2hlW3R5cGVdID0gcmVnZXg7XG4gIHJldHVybiByZWdleDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgc3RyIGlzIGEgbm9uLWVtcHR5IHN0cmluZ1xuICovXG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyICYmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIEV4cG9zZSBjaGFyU2V0c1xuICovXG5cbnVuZXNjYXBlLmNoYXJzID0gY2hhclNldHMuZGVmYXVsdDtcbnVuZXNjYXBlLmV4dHJhcyA9IGNoYXJTZXRzLmV4dHJhcztcbi8vIGRvbid0IHRyaXAgdGhlIFwiY2hhclNldHNcIiBnZXR0ZXIgdW5sZXNzIGl0J3MgZXhwbGljaXRseSBjYWxsZWRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh1bmVzY2FwZSwgJ2FsbCcsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY2hhclNldHMuYWxsO1xuICB9XG59KTtcblxuLyoqXG4gKiBFeHBvc2UgYHVuZXNjYXBlYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdW5lc2NhcGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzLWV4dGVuZGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoby8qLCBvYmplY3RzKi8pIHtcbiAgaWYgKCFpc09iamVjdChvKSkgeyBvID0ge307IH1cblxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgYXNzaWduKG8sIG9iaik7XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufTtcblxuZnVuY3Rpb24gYXNzaWduKGEsIGIpIHtcbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoaGFzT3duKGIsIGtleSkpIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGBrZXlgIGlzIGFuIG93biBwcm9wZXJ0eSBvZiBgb2JqYC5cbiAqL1xuXG5mdW5jdGlvbiBoYXNPd24ob2JqLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG4iLCJpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkYXRlKSB7XG4gIHJldHVybiBkYXlqcyhkYXRlKS5mb3JtYXQoJ01NTU0gRCwgWVlZWScpXG59XG4iLCJpbXBvcnQgZGVjb2RlIGZyb20gJ3VuZXNjYXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWNvZGVodG1sKHN0cikge1xuICByZXR1cm4gZGVjb2RlKHN0ciwgJ2FsbCcpXG59XG4iLCI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT57ZGVjb2RlSFRNTChmb2xkLnRpdGxlLnJlbmRlcmVkKX08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPFRpdGxlIHRpdGxlPXtmb2xkLnRpdGxlLnJlbmRlcmVkfS8+XG48ZGl2IGNsYXNzPVwieCB4d1wiPlxuICA8ZGl2IGNsYXNzPVwiYzEyIHNtLWMyIHAxXCI+XG4gICAgPGgxPntAaHRtbCBmb2xkLnRpdGxlLnJlbmRlcmVkfTwvaDE+XG4gICAgPGgyPntmb2xkLm1ldGEudm9sdW1lfS17Zm9sZC5tZXRhLm51bWJlcn08L2gyPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImMxMiBzbS1jNCBwMSBjb250ZW50XCI+XG4gICAge0BodG1sIGZvbGQuY29udGVudC5yZW5kZXJlZH1cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjMTIgc20tYzQgcDFcIj5cbiAgICB7I2lmIGZvbGQubWV0YS5wb3N0c31cbiAgICAgIDxoMz5BcnRpY2xlczwvaDM+XG4gICAgICA8QXJ0aWNsZUxpc3QgYXJ0aWNsZXM9e2ZvbGQubWV0YS5wb3N0c30gLz5cbiAgICB7L2lmfVxuICAgIHsjaWYgZm9sZC5tZXRhLmZvbGRfZWRpdG9yc31cbiAgICAgIDxoMz5FZGl0b3JzPC9oMz5cbiAgICAgIDx1bD5cbiAgICAgICAgeyNlYWNoIGZvbGQubWV0YS5mb2xkX2VkaXRvcnMgYXMgZWRpdG9yfVxuICAgICAgICAgIDxsaT48YSByZWw9XCJwcmVmZXRjaFwiIGhyZWY9XCIvY29udHJpYnV0b3JzL3tlZGl0b3Iuc2x1Z31cIj57QGh0bWwgZWRpdG9yLnRpdGxlLnJlbmRlcmVkfTwvYT48L2xpPlxuICAgICAgICB7L2VhY2h9XG4gICAgICA8L3VsPlxuICAgIHsvaWZ9XG4gICAgeyNpZiBmb2xkLm1ldGEuZ3JhcGhpY19kZXNpZ25lcn1cbiAgICAgIDxoMz5HcmFwaGljIERlc2lnbmVyPC9oMz5cbiAgICAgIDx1bD5cbiAgICAgICAgeyNlYWNoIGZvbGQubWV0YS5ncmFwaGljX2Rlc2lnbmVyIGFzIGRlc2lnbmVyfVxuICAgICAgICAgIDxsaT48YSByZWw9XCJwcmVmZXRjaFwiIGhyZWY9XCIvY29udHJpYnV0b3JzL3tkZXNpZ25lci5zbHVnfVwiPntAaHRtbCBkZXNpZ25lci50aXRsZS5yZW5kZXJlZH08L2E+PC9saT5cbiAgICAgICAgey9lYWNofVxuICAgICAgPC91bD5cbiAgICB7L2lmfVxuICAgIHsjaWYgZm9sZC5tZXRhLnBvc2l0aW9uc19lZGl0b3J9XG4gICAgICA8aDM+UG9zaXRpb25zIEVkaXRvcjwvaDM+XG4gICAgICA8dWw+XG4gICAgICAgIHsjZWFjaCBmb2xkLm1ldGEucG9zaXRpb25zX2VkaXRvciBhcyBlZGl0b3J9XG4gICAgICAgICAgPGxpPjxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cIi9jb250cmlidXRvcnMve2VkaXRvci5zbHVnfVwiPntAaHRtbCBlZGl0b3IudGl0bGUucmVuZGVyZWR9PC9hPjwvbGk+XG4gICAgICAgIHsvZWFjaH1cbiAgICAgIDwvdWw+XG4gICAgey9pZn1cbiAgICB7I2lmIGZvbGQubWV0YS53ZWJfZWRpdG9yfVxuICAgICAgPGgzPldlYiBFZGl0b3I8L2gzPlxuICAgICAgPHVsPlxuICAgICAgICB7I2VhY2ggZm9sZC5tZXRhLndlYl9lZGl0b3IgYXMgZWRpdG9yfVxuICAgICAgICAgIDxsaT48YSByZWw9XCJwcmVmZXRjaFwiIGhyZWY9XCIvY29udHJpYnV0b3JzL3tlZGl0b3Iuc2x1Z31cIj57QGh0bWwgZWRpdG9yLnRpdGxlLnJlbmRlcmVkfTwvYT48L2xpPlxuICAgICAgICB7L2VhY2h9XG4gICAgICA8L3VsPlxuICAgIHsvaWZ9XG4gICAgPHA+UHVibGlzaGVkIG9uIHtkYXRlRm9ybWF0KGZvbGQubWV0YS5wdWJsaWNhdGlvbl9kYXRlKX08L3A+XG4gICAgeyNpZiBmb2xkLm1ldGEuZm9sZF9mcm9udH1cbiAgICAgIDxkaXYgY2xhc3M9XCJ3MTAwIG9oIGJnYy13aGl0ZVwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwibXgxMDAgZm9sZC1mcm9udFwiIHNyYz1cIntmb2xkLm1ldGEuZm9sZF9mcm9udC5tZWRpYV9kZXRhaWxzLnNpemVzLmZ1bGwuc291cmNlX3VybH1cIj5cbiAgICAgIDwvZGl2PlxuICAgIHsvaWZ9XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgOmdsb2JhbCguY29udGVudCBpbWcpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCBkYXRlRm9ybWF0IGZyb20gJy4uL19oZWxwZXJzL2RhdGUtZm9ybWF0LmpzJ1xuICBpbXBvcnQgZGVjb2RlSFRNTCBmcm9tICcuLi9faGVscGVycy9kZWNvZGUtaHRtbC5qcydcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgaGVscGVyczoge1xuICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgIGRlY29kZUhUTUxcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEFydGljbGVMaXN0OiAnLi4vLi4vLi4vY29tcG9uZW50cy9BcnRpY2xlTGlzdC5odG1sJyxcbiAgICAgIFRpdGxlOiAnLi4vLi4vLi4vY29tcG9uZW50cy9UaXRsZS5odG1sJ1xuICAgIH0sXG4gICAgYXN5bmMgcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuICAgICAgY29uc3QgbWFza0ZpZWxkcyA9ICd0aXRsZS9yZW5kZXJlZCxjb250ZW50L3JlbmRlcmVkLCcgK1xuICAgICAgICAnbWV0YSgnICtcbiAgICAgICAgICAndm9sdW1lLG51bWJlcixwdWJsaWNhdGlvbl9kYXRlLHdlYnNpdGUsJyArXG4gICAgICAgICAgJ2ZvbGRfZnJvbnQvbWVkaWFfZGV0YWlscy9zaXplcy9mdWxsL3NvdXJjZV91cmwsJyArXG4gICAgICAgICAgJ2ZvbGRfZWRpdG9ycyh0aXRsZS9yZW5kZXJlZCxzbHVnKSwnICtcbiAgICAgICAgICAnZ3JhcGhpY19kZXNpZ25lcih0aXRsZS9yZW5kZXJlZCxzbHVnKSwnICtcbiAgICAgICAgICAncG9zaXRpb25zX2VkaXRvcih0aXRsZS9yZW5kZXJlZCxzbHVnKSwnICtcbiAgICAgICAgICAnd2ViX2VkaXRvcih0aXRsZS9yZW5kZXJlZCxzbHVnKSwnICtcbiAgICAgICAgICAncG9zdHModGl0bGUvcmVuZGVyZWQsc2x1ZyxtZXRhL2NvbnRyaWJ1dG9ycyh0aXRsZS9yZW5kZXJlZCkpJyArXG4gICAgICAgICcpJ1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgZm9sZHMvJHtwYXJhbXMuc2x1Z30uanNvbj9maWVsZHM9JHttYXNrRmllbGRzfWApO1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHJlcy50ZXh0KClcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IocmVzLnN0YXR1cywgbWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHJldHVybiB7IGZvbGQ6IGRhdGEgfTtcbiAgICB9XG4gIH07XG48L3NjcmlwdD4iXSwic291cmNlUm9vdCI6IiJ9