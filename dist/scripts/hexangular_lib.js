/*
 *  Sugar Library v1.4.1
 *
 *  Freely distributable and licensed under the MIT-style license.
 *  Copyright (c) 2013 Andrew Plummer
 *  http://sugarjs.com/
 *
 * ---------------------------- */
(function(){function aa(a){return function(){return a}}
var m=Object,p=Array,q=RegExp,r=Date,s=String,t=Number,u=Math,ba="undefined"!==typeof global?global:this,v=m.prototype.toString,da=m.prototype.hasOwnProperty,ea=m.defineProperty&&m.defineProperties,fa="function"===typeof q(),ga=!("0"in new s("a")),ia={},ja=/^\[object Date|Array|String|Number|RegExp|Boolean|Arguments\]$/,w="Boolean Number String Array Date RegExp Function".split(" "),la=ka("boolean",w[0]),y=ka("number",w[1]),z=ka("string",w[2]),A=ma(w[3]),C=ma(w[4]),D=ma(w[5]),F=ma(w[6]);
function ma(a){var b="Array"===a&&p.isArray||function(b,d){return(d||v.call(b))==="[object "+a+"]"};return ia[a]=b}function ka(a,b){function c(c){return G(c)?v.call(c)==="[object "+b+"]":typeof c===a}return ia[b]=c}
function na(a){a.SugarMethods||(oa(a,"SugarMethods",{}),H(a,!1,!0,{extend:function(b,c,d){H(a,!1!==d,c,b)},sugarRestore:function(){return pa(this,a,arguments,function(a,c,d){oa(a,c,d.method)})},sugarRevert:function(){return pa(this,a,arguments,function(a,c,d){d.existed?oa(a,c,d.original):delete a[c]})}}))}function H(a,b,c,d){var e=b?a.prototype:a;na(a);I(d,function(d,f){var h=e[d],l=J(e,d);F(c)&&h&&(f=qa(h,f,c));!1===c&&h||oa(e,d,f);a.SugarMethods[d]={method:f,existed:l,original:h,instance:b}})}
function K(a,b,c,d,e){var g={};d=z(d)?d.split(","):d;d.forEach(function(a,b){e(g,a,b)});H(a,b,c,g)}function pa(a,b,c,d){var e=0===c.length,g=L(c),f=!1;I(b.SugarMethods,function(b,c){if(e||-1!==g.indexOf(b))f=!0,d(c.instance?a.prototype:a,b,c)});return f}function qa(a,b,c){return function(d){return c.apply(this,arguments)?b.apply(this,arguments):a.apply(this,arguments)}}function oa(a,b,c){ea?m.defineProperty(a,b,{value:c,configurable:!0,enumerable:!1,writable:!0}):a[b]=c}
function L(a,b,c){var d=[];c=c||0;var e;for(e=a.length;c<e;c++)d.push(a[c]),b&&b.call(a,a[c],c);return d}function sa(a,b,c){var d=a[c||0];A(d)&&(a=d,c=0);L(a,b,c)}function ta(a){if(!a||!a.call)throw new TypeError("Callback is not callable");}function M(a){return void 0!==a}function N(a){return void 0===a}function J(a,b){return!!a&&da.call(a,b)}function G(a){return!!a&&("object"===typeof a||fa&&D(a))}function ua(a){var b=typeof a;return null==a||"string"===b||"number"===b||"boolean"===b}
function va(a,b){b=b||v.call(a);try{if(a&&a.constructor&&!J(a,"constructor")&&!J(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}return!!a&&"[object Object]"===b&&"hasOwnProperty"in a}function I(a,b){for(var c in a)if(J(a,c)&&!1===b.call(a,c,a[c],a))break}function wa(a,b){for(var c=0;c<a;c++)b(c)}function xa(a,b){I(b,function(c){a[c]=b[c]});return a}function ya(a){ua(a)&&(a=m(a));if(ga&&z(a))for(var b=a,c=0,d;d=b.charAt(c);)b[c++]=d;return a}function O(a){xa(this,ya(a))}
O.prototype.constructor=m;var P=u.abs,za=u.pow,Aa=u.ceil,Q=u.floor,R=u.round,Ca=u.min,S=u.max;function Da(a,b,c){var d=za(10,P(b||0));c=c||R;0>b&&(d=1/d);return c(a*d)/d}var Ea=48,Fa=57,Ga=65296,Ha=65305,Ia=".",Ja="",Ka={},La;function Ma(){return"\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u2028\u2029\u3000\ufeff"}function Na(a,b){var c="";for(a=a.toString();0<b;)if(b&1&&(c+=a),b>>=1)a+=a;return c}
function Oa(a,b){var c,d;c=a.replace(La,function(a){a=Ka[a];a===Ia&&(d=!0);return a});return d?parseFloat(c):parseInt(c,b||10)}function T(a,b,c,d){d=P(a).toString(d||10);d=Na("0",b-d.replace(/\.\d+/,"").length)+d;if(c||0>a)d=(0>a?"-":"+")+d;return d}function Pa(a){if(11<=a&&13>=a)return"th";switch(a%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}
function Qa(a,b){function c(a,c){if(a||-1<b.indexOf(c))d+=c}var d="";b=b||"";c(a.multiline,"m");c(a.ignoreCase,"i");c(a.global,"g");c(a.u,"y");return d}function Ra(a){z(a)||(a=s(a));return a.replace(/([\\/\'*+?|()\[\]{}.^$])/g,"\\$1")}function U(a,b){return a["get"+(a._utc?"UTC":"")+b]()}function Sa(a,b,c){return a["set"+(a._utc&&"ISOWeek"!=b?"UTC":"")+b](c)}
function Ta(a,b){var c=typeof a,d,e,g,f,h,l,n;if("string"===c)return a;g=v.call(a);d=va(a,g);e=A(a,g);if(null!=a&&d||e){b||(b=[]);if(1<b.length)for(l=b.length;l--;)if(b[l]===a)return"CYC";b.push(a);d=a.valueOf()+s(a.constructor);f=e?a:m.keys(a).sort();l=0;for(n=f.length;l<n;l++)h=e?l:f[l],d+=h+Ta(a[h],b);b.pop()}else d=-Infinity===1/a?"-0":s(a&&a.valueOf?a.valueOf():a);return c+g+d}function Ua(a,b){return a===b?0!==a||1/a===1/b:Va(a)&&Va(b)?Ta(a)===Ta(b):!1}
function Va(a){var b=v.call(a);return ja.test(b)||va(a,b)}function Wa(a,b,c){var d,e=a.length,g=b.length,f=!1!==b[g-1];if(!(g>(f?1:2)))return Xa(a,e,b[0],f,c);d=[];L(b,function(b){if(la(b))return!1;d.push(Xa(a,e,b,f,c))});return d}function Xa(a,b,c,d,e){d&&(c%=b,0>c&&(c=b+c));return e?a.charAt(c):a[c]}function Ya(a,b){K(b,!0,!1,a,function(a,b){a[b+("equal"===b?"s":"")]=function(){return m[b].apply(null,[this].concat(L(arguments)))}})}na(m);I(w,function(a,b){na(ba[b])});var Za,$a;
for($a=0;9>=$a;$a++)Za=s.fromCharCode($a+Ga),Ja+=Za,Ka[Za]=s.fromCharCode($a+Ea);Ka[","]="";Ka["\uff0e"]=Ia;Ka[Ia]=Ia;La=q("["+Ja+"\uff0e,"+Ia+"]","g");
"use strict";H(m,!1,!1,{keys:function(a){var b=[];if(!G(a)&&!D(a)&&!F(a))throw new TypeError("Object required");I(a,function(a){b.push(a)});return b}});
function ab(a,b,c,d){var e=a.length,g=-1==d,f=g?e-1:0;c=isNaN(c)?f:parseInt(c>>0);0>c&&(c=e+c);if(!g&&0>c||g&&c>=e)c=f;for(;g&&0<=c||!g&&c<e;){if(a[c]===b)return c;c+=d}return-1}function bb(a,b,c,d){var e=a.length,g=0,f=M(c);ta(b);if(0!=e||f)f||(c=a[d?e-1:g],g++);else throw new TypeError("Reduce called on empty array with no initial value");for(;g<e;)f=d?e-g-1:g,f in a&&(c=b(c,a[f],f,a)),g++;return c}function cb(a){if(0===a.length)throw new TypeError("First argument must be defined");}H(p,!1,!1,{isArray:function(a){return A(a)}});
H(p,!0,!1,{every:function(a,b){var c=this.length,d=0;for(cb(arguments);d<c;){if(d in this&&!a.call(b,this[d],d,this))return!1;d++}return!0},some:function(a,b){var c=this.length,d=0;for(cb(arguments);d<c;){if(d in this&&a.call(b,this[d],d,this))return!0;d++}return!1},map:function(a,b){b=arguments[1];var c=this.length,d=0,e=Array(c);for(cb(arguments);d<c;)d in this&&(e[d]=a.call(b,this[d],d,this)),d++;return e},filter:function(a){var b=arguments[1],c=this.length,d=0,e=[];for(cb(arguments);d<c;)d in
this&&a.call(b,this[d],d,this)&&e.push(this[d]),d++;return e},indexOf:function(a,b){return z(this)?this.indexOf(a,b):ab(this,a,b,1)},lastIndexOf:function(a,b){return z(this)?this.lastIndexOf(a,b):ab(this,a,b,-1)},forEach:function(a,b){var c=this.length,d=0;for(ta(a);d<c;)d in this&&a.call(b,this[d],d,this),d++},reduce:function(a,b){return bb(this,a,b)},reduceRight:function(a,b){return bb(this,a,b,!0)}});
H(Function,!0,!1,{bind:function(a){var b=this,c=L(arguments,null,1),d;if(!F(this))throw new TypeError("Function.prototype.bind called on a non-function");d=function(){return b.apply(b.prototype&&this instanceof b?this:a,c.concat(L(arguments)))};d.prototype=this.prototype;return d}});H(r,!1,!1,{now:function(){return(new r).getTime()}});
(function(){var a=Ma().match(/^\s+$/);try{s.prototype.trim.call([1])}catch(b){a=!1}H(s,!0,!a,{trim:function(){return this.toString().trimLeft().trimRight()},trimLeft:function(){return this.replace(q("^["+Ma()+"]+"),"")},trimRight:function(){return this.replace(q("["+Ma()+"]+$"),"")}})})();
(function(){var a=new r(r.UTC(1999,11,31)),a=a.toISOString&&"1999-12-31T00:00:00.000Z"===a.toISOString();K(r,!0,!a,"toISOString,toJSON",function(a,c){a[c]=function(){return T(this.getUTCFullYear(),4)+"-"+T(this.getUTCMonth()+1,2)+"-"+T(this.getUTCDate(),2)+"T"+T(this.getUTCHours(),2)+":"+T(this.getUTCMinutes(),2)+":"+T(this.getUTCSeconds(),2)+"."+T(this.getUTCMilliseconds(),3)+"Z"}})})();
"use strict";function db(a){a=q(a);return function(b){return a.test(b)}}
function eb(a){var b=a.getTime();return function(a){return!(!a||!a.getTime)&&a.getTime()===b}}function fb(a){return function(b,c,d){return b===a||a.call(this,b,c,d)}}function gb(a){return function(b,c,d){return b===a||a.call(d,c,b,d)}}function hb(a,b){var c={};return function(d,e,g){var f;if(!G(d))return!1;for(f in a)if(c[f]=c[f]||ib(a[f],b),!1===c[f].call(g,d[f],e,g))return!1;return!0}}function jb(a){return function(b){return b===a||Ua(b,a)}}
function ib(a,b){if(!ua(a)){if(D(a))return db(a);if(C(a))return eb(a);if(F(a))return b?gb(a):fb(a);if(va(a))return hb(a,b)}return jb(a)}function kb(a,b,c,d){return b?b.apply?b.apply(c,d||[]):F(a[b])?a[b].call(a):a[b]:a}function V(a,b,c,d){var e=+a.length;0>c&&(c=a.length+c);c=isNaN(c)?0:c;for(!0===d&&(e+=c);c<e;){d=c%a.length;if(!(d in a)){lb(a,b,c);break}if(!1===b.call(a,a[d],d,a))break;c++}}
function lb(a,b,c){var d=[],e;for(e in a)e in a&&(e>>>0==e&&4294967295!=e)&&e>=c&&d.push(parseInt(e));d.sort().each(function(c){return b.call(a,a[c],c,a)})}function mb(a,b,c,d,e,g){var f,h,l;0<a.length&&(l=ib(b),V(a,function(b,c){if(l.call(g,b,c,a))return f=b,h=c,!1},c,d));return e?h:f}function nb(a,b){var c=[],d={},e;V(a,function(g,f){e=b?kb(g,b,a,[g,f,a]):g;ob(d,e)||c.push(g)});return c}
function pb(a,b,c){var d=[],e={};b.each(function(a){ob(e,a)});a.each(function(a){var b=Ta(a),h=!Va(a);if(qb(e,b,a,h)!==c){var l=0;if(h)for(b=e[b];l<b.length;)b[l]===a?b.splice(l,1):l+=1;else delete e[b];d.push(a)}});return d}function rb(a,b,c){b=b||Infinity;c=c||0;var d=[];V(a,function(a){A(a)&&c<b?d=d.concat(rb(a,b,c+1)):d.push(a)});return d}function sb(a){var b=[];L(a,function(a){b=b.concat(a)});return b}function qb(a,b,c,d){var e=b in a;d&&(a[b]||(a[b]=[]),e=-1!==a[b].indexOf(c));return e}
function ob(a,b){var c=Ta(b),d=!Va(b),e=qb(a,c,b,d);d?a[c].push(b):a[c]=b;return e}function tb(a,b,c,d){var e,g,f,h=[],l="max"===c,n="min"===c,x=p.isArray(a);for(e in a)if(a.hasOwnProperty(e)){c=a[e];f=kb(c,b,a,x?[c,parseInt(e),a]:[]);if(N(f))throw new TypeError("Cannot compare with undefined");if(f===g)h.push(c);else if(N(g)||l&&f>g||n&&f<g)h=[c],g=f}x||(h=rb(h,1));return d?h:h[0]}
function ub(a,b){var c,d,e,g,f=0,h=0;c=p[xb];d=p[yb];var l=p[zb],n=p[Ab],x=p[Bb];a=Cb(a,c,d);b=Cb(b,c,d);do c=a.charAt(f),e=l[c]||c,c=b.charAt(f),g=l[c]||c,c=e?n.indexOf(e):null,d=g?n.indexOf(g):null,-1===c||-1===d?(c=a.charCodeAt(f)||null,d=b.charCodeAt(f)||null,x&&((c>=Ea&&c<=Fa||c>=Ga&&c<=Ha)&&(d>=Ea&&d<=Fa||d>=Ga&&d<=Ha))&&(c=Oa(a.slice(f)),d=Oa(b.slice(f)))):(e=e!==a.charAt(f),g=g!==b.charAt(f),e!==g&&0===h&&(h=e-g)),f+=1;while(null!=c&&null!=d&&c===d);return c===d?h:c-d}
function Cb(a,b,c){z(a)||(a=s(a));c&&(a=a.toLowerCase());b&&(a=a.replace(b,""));return a}var Ab="AlphanumericSortOrder",xb="AlphanumericSortIgnore",yb="AlphanumericSortIgnoreCase",zb="AlphanumericSortEquivalents",Bb="AlphanumericSortNatural";H(p,!1,!0,{create:function(){var a=[];L(arguments,function(b){if(!ua(b)&&"length"in b&&("[object Arguments]"===v.call(b)||b.callee)||!ua(b)&&"length"in b&&!z(b)&&!va(b))b=p.prototype.slice.call(b,0);a=a.concat(b)});return a}});
H(p,!0,!1,{find:function(a,b){ta(a);return mb(this,a,0,!1,!1,b)},findIndex:function(a,b){var c;ta(a);c=mb(this,a,0,!1,!0,b);return N(c)?-1:c}});
H(p,!0,!0,{findFrom:function(a,b,c){return mb(this,a,b,c)},findIndexFrom:function(a,b,c){b=mb(this,a,b,c,!0);return N(b)?-1:b},findAll:function(a,b,c){var d=[],e;0<this.length&&(e=ib(a),V(this,function(a,b,c){e(a,b,c)&&d.push(a)},b,c));return d},count:function(a){return N(a)?this.length:this.findAll(a).length},removeAt:function(a,b){if(N(a))return this;N(b)&&(b=a);this.splice(a,b-a+1);return this},include:function(a,b){return this.clone().add(a,b)},exclude:function(){return p.prototype.remove.apply(this.clone(),
arguments)},clone:function(){return xa([],this)},unique:function(a){return nb(this,a)},flatten:function(a){return rb(this,a)},union:function(){return nb(this.concat(sb(arguments)))},intersect:function(){return pb(this,sb(arguments),!1)},subtract:function(a){return pb(this,sb(arguments),!0)},at:function(){return Wa(this,arguments)},first:function(a){if(N(a))return this[0];0>a&&(a=0);return this.slice(0,a)},last:function(a){return N(a)?this[this.length-1]:this.slice(0>this.length-a?0:this.length-a)},
from:function(a){return this.slice(a)},to:function(a){N(a)&&(a=this.length);return this.slice(0,a)},min:function(a,b){return tb(this,a,"min",b)},max:function(a,b){return tb(this,a,"max",b)},least:function(a,b){return tb(this.groupBy.apply(this,[a]),"length","min",b)},most:function(a,b){return tb(this.groupBy.apply(this,[a]),"length","max",b)},sum:function(a){a=a?this.map(a):this;return 0<a.length?a.reduce(function(a,c){return a+c}):0},average:function(a){a=a?this.map(a):this;return 0<a.length?a.sum()/
a.length:0},inGroups:function(a,b){var c=1<arguments.length,d=this,e=[],g=Aa(this.length/a);wa(a,function(a){a*=g;var h=d.slice(a,a+g);c&&h.length<g&&wa(g-h.length,function(){h=h.add(b)});e.push(h)});return e},inGroupsOf:function(a,b){var c=[],d=this.length,e=this,g;if(0===d||0===a)return e;N(a)&&(a=1);N(b)&&(b=null);wa(Aa(d/a),function(d){for(g=e.slice(a*d,a*d+a);g.length<a;)g.push(b);c.push(g)});return c},isEmpty:function(){return 0==this.compact().length},sortBy:function(a,b){var c=this.clone();
c.sort(function(d,e){var g,f;g=kb(d,a,c,[d]);f=kb(e,a,c,[e]);return(z(g)&&z(f)?ub(g,f):g<f?-1:g>f?1:0)*(b?-1:1)});return c},randomize:function(){for(var a=this.concat(),b=a.length,c,d;b;)c=u.random()*b|0,d=a[--b],a[b]=a[c],a[c]=d;return a},zip:function(){var a=L(arguments);return this.map(function(b,c){return[b].concat(a.map(function(a){return c in a?a[c]:null}))})},sample:function(a){var b=this.randomize();return 0<arguments.length?b.slice(0,a):b[0]},each:function(a,b,c){V(this,a,b,c);return this},
add:function(a,b){if(!y(t(b))||isNaN(b))b=this.length;p.prototype.splice.apply(this,[b,0].concat(a));return this},remove:function(){var a=this;L(arguments,function(b){var c=0;for(b=ib(b);c<a.length;)b(a[c],c,a)?a.splice(c,1):c++});return a},compact:function(a){var b=[];V(this,function(c){A(c)?b.push(c.compact()):a&&c?b.push(c):a||(null==c||c.valueOf()!==c.valueOf())||b.push(c)});return b},groupBy:function(a,b){var c=this,d={},e;V(c,function(b,f){e=kb(b,a,c,[b,f,c]);d[e]||(d[e]=[]);d[e].push(b)});
b&&I(d,b);return d},none:function(){return!this.any.apply(this,arguments)}});H(p,!0,!0,{all:p.prototype.every,any:p.prototype.some,insert:p.prototype.add});function Db(a,b){K(m,!1,!0,a,function(a,d){a[d]=function(a,c,f){var h=m.keys(ya(a)),l;b||(l=ib(c,!0));f=p.prototype[d].call(h,function(d){var f=a[d];return b?kb(f,c,a,[d,f,a]):l(f,d,a)},f);A(f)&&(f=f.reduce(function(b,c){b[c]=a[c];return b},{}));return f}});Ya(a,O)}
H(m,!1,!0,{map:function(a,b){var c={},d,e;for(d in a)J(a,d)&&(e=a[d],c[d]=kb(e,b,a,[d,e,a]));return c},reduce:function(a){var b=m.keys(ya(a)).map(function(b){return a[b]});return b.reduce.apply(b,L(arguments,null,1))},each:function(a,b){ta(b);I(a,b);return a},size:function(a){return m.keys(ya(a)).length}});var Eb="any all none count find findAll isEmpty".split(" "),Fb="sum average min max least most".split(" "),Gb=["map","reduce","size"],Hb=Eb.concat(Fb).concat(Gb);
(function(){function a(){var a=arguments;return 0<a.length&&!F(a[0])}var b=p.prototype.map;K(p,!0,a,"every,all,some,filter,any,none,find,findIndex",function(a,b){var e=p.prototype[b];a[b]=function(a){var b=ib(a);return e.call(this,function(a,c){return b(a,c,this)})}});H(p,!0,a,{map:function(a){return b.call(this,function(b,e){return kb(b,a,this,[b,e,this])})}})})();
(function(){p[Ab]="A\u00c1\u00c0\u00c2\u00c3\u0104BC\u0106\u010c\u00c7D\u010e\u00d0E\u00c9\u00c8\u011a\u00ca\u00cb\u0118FG\u011eH\u0131I\u00cd\u00cc\u0130\u00ce\u00cfJKL\u0141MN\u0143\u0147\u00d1O\u00d3\u00d2\u00d4PQR\u0158S\u015a\u0160\u015eT\u0164U\u00da\u00d9\u016e\u00db\u00dcVWXY\u00ddZ\u0179\u017b\u017d\u00de\u00c6\u0152\u00d8\u00d5\u00c5\u00c4\u00d6".split("").map(function(a){return a+a.toLowerCase()}).join("");var a={};V("A\u00c1\u00c0\u00c2\u00c3\u00c4 C\u00c7 E\u00c9\u00c8\u00ca\u00cb I\u00cd\u00cc\u0130\u00ce\u00cf O\u00d3\u00d2\u00d4\u00d5\u00d6 S\u00df U\u00da\u00d9\u00db\u00dc".split(" "),
function(b){var c=b.charAt(0);V(b.slice(1).split(""),function(b){a[b]=c;a[b.toLowerCase()]=c.toLowerCase()})});p[Bb]=!0;p[yb]=!0;p[zb]=a})();Db(Eb);Db(Fb,!0);Ya(Gb,O);p.AlphanumericSort=ub;
"use strict";
var W,Ib,Jb="ampm hour minute second ampm utc offset_sign offset_hours offset_minutes ampm".split(" "),Kb="({t})?\\s*(\\d{1,2}(?:[,.]\\d+)?)(?:{h}([0-5]\\d(?:[,.]\\d+)?)?{m}(?::?([0-5]\\d(?:[,.]\\d+)?){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))",Lb={},Mb,Nb,Ob,Pb=[],Qb={},X={yyyy:function(a){return U(a,"FullYear")},yy:function(a){return U(a,"FullYear")%100},ord:function(a){a=U(a,"Date");return a+Pa(a)},tz:function(a){return a.getUTCOffset()},isotz:function(a){return a.getUTCOffset(!0)},
Z:function(a){return a.getUTCOffset()},ZZ:function(a){return a.getUTCOffset().replace(/(\d{2})$/,":$1")}},Rb=[{name:"year",method:"FullYear",k:!0,b:function(a){return 864E5*(365+(a?a.isLeapYear()?1:0:0.25))}},{name:"month",error:0.919,method:"Month",k:!0,b:function(a,b){var c=30.4375,d;a&&(d=a.daysInMonth(),b<=d.days()&&(c=d));return 864E5*c}},{name:"week",method:"ISOWeek",b:aa(6048E5)},{name:"day",error:0.958,method:"Date",k:!0,b:aa(864E5)},{name:"hour",method:"Hours",b:aa(36E5)},{name:"minute",
method:"Minutes",b:aa(6E4)},{name:"second",method:"Seconds",b:aa(1E3)},{name:"millisecond",method:"Milliseconds",b:aa(1)}],Sb={};function Tb(a){xa(this,a);this.g=Pb.concat()}
Tb.prototype={getMonth:function(a){return y(a)?a-1:this.months.indexOf(a)%12},getWeekday:function(a){return this.weekdays.indexOf(a)%7},addFormat:function(a,b,c,d,e){var g=c||[],f=this,h;a=a.replace(/\s+/g,"[,. ]*");a=a.replace(/\{([^,]+?)\}/g,function(a,b){var d,e,h,B=b.match(/\?$/);h=b.match(/^(\d+)\??$/);var k=b.match(/(\d)(?:-(\d))?/),E=b.replace(/[^a-z]+$/,"");h?d=f.tokens[h[1]]:f[E]?d=f[E]:f[E+"s"]&&(d=f[E+"s"],k&&(e=[],d.forEach(function(a,b){var c=b%(f.units?8:d.length);c>=k[1]&&c<=(k[2]||
k[1])&&e.push(a)}),d=e),d=Ub(d));h?h="(?:"+d+")":(c||g.push(E),h="("+d+")");B&&(h+="?");return h});b?(b=Vb(f,e),e=["t","[\\s\\u3000]"].concat(f.timeMarker),h=a.match(/\\d\{\d,\d\}\)+\??$/),Wb(f,"(?:"+b+")[,\\s\\u3000]+?"+a,Jb.concat(g),d),Wb(f,a+"(?:[,\\s]*(?:"+e.join("|")+(h?"+":"*")+")"+b+")?",g.concat(Jb),d)):Wb(f,a,g,d)}};
function Xb(a,b,c){var d,e,g=b[0],f=b[1],h=b[2];b=a[c]||a.relative;if(F(b))return b.call(a,g,f,h,c);e=a.units[8*(a.plural&&1<g?1:0)+f]||a.units[f];a.capitalizeUnit&&(e=Yb(e));d=a.modifiers.filter(function(a){return"sign"==a.name&&a.value==(0<h?1:-1)})[0];return b.replace(/\{(.*?)\}/g,function(a,b){switch(b){case "num":return g;case "unit":return e;case "sign":return d.src}})}function Zb(a,b){b=b||a.code;return"en"===b||"en-US"===b?!0:a.variant}
function $b(a,b){return b.replace(q(a.num,"g"),function(b){return ac(a,b)||""})}function ac(a,b){var c;return y(b)?b:b&&-1!==(c=a.numbers.indexOf(b))?(c+1)%10:1}function Y(a,b){var c;z(a)||(a="");c=Sb[a]||Sb[a.slice(0,2)];if(!1===b&&!c)throw new TypeError("Invalid locale.");return c||Ib}
function bc(a,b){function c(a){var b=h[a];z(b)?h[a]=b.split(","):b||(h[a]=[])}function d(a,b){a=a.split("+").map(function(a){return a.replace(/(.+):(.+)$/,function(a,b,c){return c.split("|").map(function(a){return b+a}).join("|")})}).join("|");a.split("|").forEach(b)}function e(a,b,c){var e=[];h[a].forEach(function(a,f){b&&(a+="+"+a.slice(0,3));d(a,function(a,b){e[b*c+f]=a.toLowerCase()})});h[a]=e}function g(a,b,c){a="\\d{"+a+","+b+"}";c&&(a+="|(?:"+Ub(h.numbers)+")+");return a}function f(a,b){h[a]=
h[a]||b}var h,l;h=new Tb(b);c("modifiers");"months weekdays units numbers articles tokens timeMarker ampm timeSuffixes dateParse timeParse".split(" ").forEach(c);l=!h.monthSuffix;e("months",l,12);e("weekdays",l,7);e("units",!1,8);e("numbers",!1,10);f("code",a);f("date",g(1,2,h.digitDate));f("year","'\\d{2}|"+g(4,4));f("num",function(){var a=["-?\\d+"].concat(h.articles);h.numbers&&(a=a.concat(h.numbers));return Ub(a)}());(function(){var a=[];h.i={};h.modifiers.push({name:"day",src:"yesterday",value:-1});
h.modifiers.push({name:"day",src:"today",value:0});h.modifiers.push({name:"day",src:"tomorrow",value:1});h.modifiers.forEach(function(b){var c=b.name;d(b.src,function(d){var e=h[c];h.i[d]=b;a.push({name:c,src:d,value:b.value});h[c]=e?e+"|"+d:d})});h.day+="|"+Ub(h.weekdays);h.modifiers=a})();h.monthSuffix&&(h.month=g(1,2),h.months="1 2 3 4 5 6 7 8 9 10 11 12".split(" ").map(function(a){return a+h.monthSuffix}));h.full_month=g(1,2)+"|"+Ub(h.months);0<h.timeSuffixes.length&&h.addFormat(Vb(h),!1,Jb);
h.addFormat("{day}",!0);h.addFormat("{month}"+(h.monthSuffix||""));h.addFormat("{year}"+(h.yearSuffix||""));h.timeParse.forEach(function(a){h.addFormat(a,!0)});h.dateParse.forEach(function(a){h.addFormat(a)});return Sb[a]=h}function Wb(a,b,c,d){a.g.unshift({r:d,locale:a,q:q("^"+b+"$","i"),to:c})}function Yb(a){return a.slice(0,1).toUpperCase()+a.slice(1)}function Ub(a){return a.filter(function(a){return!!a}).join("|")}function cc(){var a=r.SugarNewDate;return a?a():new r}
function dc(a,b){var c;if(G(a[0]))return a;if(y(a[0])&&!y(a[1]))return[a[0]];if(z(a[0])&&b)return[ec(a[0]),a[1]];c={};Nb.forEach(function(b,e){c[b.name]=a[e]});return[c]}function ec(a){var b,c={};if(a=a.match(/^(\d+)?\s?(\w+?)s?$/i))N(b)&&(b=parseInt(a[1])||1),c[a[2].toLowerCase()]=b;return c}function fc(a,b,c){var d;N(c)&&(c=Ob.length);for(b=b||0;b<c&&(d=Ob[b],!1!==a(d.name,d,b));b++);}
function gc(a,b){var c={},d,e;b.forEach(function(b,f){d=a[f+1];N(d)||""===d||("year"===b&&(c.t=d.replace(/'/,"")),e=parseFloat(d.replace(/'/,"").replace(/,/,".")),c[b]=isNaN(e)?d.toLowerCase():e)});return c}function hc(a){a=a.trim().replace(/^just (?=now)|\.+$/i,"");return ic(a)}
function ic(a){return a.replace(Mb,function(a,c,d){var e=0,g=1,f,h;if(c)return a;d.split("").reverse().forEach(function(a){a=Lb[a];var b=9<a;b?(f&&(e+=g),g*=a/(h||1),h=a):(!1===f&&(g*=10),e+=g*a);f=b});f&&(e+=g);return e})}
function jc(a,b,c,d){function e(a){vb.push(a)}function g(){vb.forEach(function(a){a.call()})}function f(){var a=n.getWeekday();n.setWeekday(7*(k.num-1)+(a>Ba?Ba+7:Ba))}function h(){var a=B.i[k.edge];fc(function(a){if(M(k[a]))return E=a,!1},4);if("year"===E)k.e="month";else if("month"===E||"week"===E)k.e="day";n[(0>a.value?"endOf":"beginningOf")+Yb(E)]();-2===a.value&&n.reset()}function l(){var a;fc(function(b,c,d){"day"===b&&(b="date");if(M(k[b])){if(d>=wb)return n.setTime(NaN),!1;a=a||{};a[b]=k[b];
delete k[b]}});a&&e(function(){n.set(a,!0)})}var n,x,ha,vb,B,k,E,wb,Ba,ra,ca;n=cc();vb=[];n.utc(d);C(a)?n.utc(a.isUTC()).setTime(a.getTime()):y(a)?n.setTime(a):G(a)?(n.set(a,!0),k=a):z(a)&&(ha=Y(b),a=hc(a),ha&&I(ha.o?[ha.o].concat(ha.g):ha.g,function(c,d){var g=a.match(d.q);if(g){B=d.locale;k=gc(g,d.to);B.o=d;k.utc&&n.utc();if(k.timestamp)return k=k.timestamp,!1;d.r&&(!z(k.month)&&(z(k.date)||Zb(ha,b)))&&(ca=k.month,k.month=k.date,k.date=ca);k.year&&2===k.t.length&&(k.year=100*R(U(cc(),"FullYear")/
100)-100*R(k.year/100)+k.year);k.month&&(k.month=B.getMonth(k.month),k.shift&&!k.unit&&(k.unit=B.units[7]));k.weekday&&k.date?delete k.weekday:k.weekday&&(k.weekday=B.getWeekday(k.weekday),k.shift&&!k.unit&&(k.unit=B.units[5]));k.day&&(ca=B.i[k.day])?(k.day=ca.value,n.reset(),x=!0):k.day&&-1<(Ba=B.getWeekday(k.day))&&(delete k.day,k.num&&k.month?(e(f),k.day=1):k.weekday=Ba);k.date&&!y(k.date)&&(k.date=$b(B,k.date));k.ampm&&k.ampm===B.ampm[1]&&12>k.hour?k.hour+=12:k.ampm===B.ampm[0]&&12===k.hour&&
(k.hour=0);if("offset_hours"in k||"offset_minutes"in k)n.utc(),k.offset_minutes=k.offset_minutes||0,k.offset_minutes+=60*k.offset_hours,"-"===k.offset_sign&&(k.offset_minutes*=-1),k.minute-=k.offset_minutes;k.unit&&(x=!0,ra=ac(B,k.num),wb=B.units.indexOf(k.unit)%8,E=W.units[wb],l(),k.shift&&(ra*=(ca=B.i[k.shift])?ca.value:0),k.sign&&(ca=B.i[k.sign])&&(ra*=ca.value),M(k.weekday)&&(n.set({weekday:k.weekday},!0),delete k.weekday),k[E]=(k[E]||0)+ra);k.edge&&e(h);"-"===k.year_sign&&(k.year*=-1);fc(function(a,
b,c){b=k[a];var d=b%1;d&&(k[Ob[c-1].name]=R(d*("second"===a?1E3:60)),k[a]=Q(b))},1,4);return!1}}),k?x?n.advance(k):(n._utc&&n.reset(),kc(n,k,!0,!1,c)):("now"!==a&&(n=new r(a)),d&&n.addMinutes(-n.getTimezoneOffset())),g(),n.utc(!1));return{c:n,set:k}}function lc(a){var b,c=P(a),d=c,e=0;fc(function(a,f,h){b=Q(Da(c/f.b(),1));1<=b&&(d=b,e=h)},1);return[d,e,a]}
function mc(a){var b=lc(a.millisecondsFromNow());if(6===b[1]||5===b[1]&&4===b[0]&&a.daysFromNow()>=cc().daysInMonth())b[0]=P(a.monthsFromNow()),b[1]=6;return b}function nc(a,b,c){function d(a,c){var d=U(a,"Month");return Y(c).months[d+12*b]}Z(a,d,c);Z(Yb(a),d,c,1)}function Z(a,b,c,d){X[a]=function(a,g){var f=b(a,g);c&&(f=f.slice(0,c));d&&(f=f.slice(0,d).toUpperCase()+f.slice(d));return f}}
function oc(a,b,c){X[a]=b;X[a+a]=function(a,c){return T(b(a,c),2)};c&&(X[a+a+a]=function(a,c){return T(b(a,c),3)},X[a+a+a+a]=function(a,c){return T(b(a,c),4)})}function pc(a){var b=a.match(/(\{\w+\})|[^{}]+/g);Qb[a]=b.map(function(a){a.replace(/\{(\w+)\}/,function(b,e){a=X[e]||e;return e});return a})}
function qc(a,b,c,d){var e;if(!a.isValid())return"Invalid Date";Date[b]?b=Date[b]:F(b)&&(e=mc(a),b=b.apply(a,e.concat(Y(d))));if(!b&&c)return e=e||mc(a),0===e[1]&&(e[1]=1,e[0]=1),a=Y(d),Xb(a,e,0<e[2]?"future":"past");b=b||"long";if("short"===b||"long"===b||"full"===b)b=Y(d)[b];Qb[b]||pc(b);var g,f;e="";b=Qb[b];g=0;for(c=b.length;g<c;g++)f=b[g],e+=F(f)?f(a,d):f;return e}
function rc(a,b,c,d,e){var g,f,h,l=0,n=0,x=0;g=jc(b,c,null,e);0<d&&(n=x=d,f=!0);if(!g.c.isValid())return!1;if(g.set&&g.set.e){Rb.forEach(function(b){b.name===g.set.e&&(l=b.b(g.c,a-g.c)-1)});b=Yb(g.set.e);if(g.set.edge||g.set.shift)g.c["beginningOf"+b]();"month"===g.set.e&&(h=g.c.clone()["endOf"+b]().getTime());!f&&(g.set.sign&&"millisecond"!=g.set.e)&&(n=50,x=-50)}f=a.getTime();b=g.c.getTime();h=sc(a,b,h||b+l);return f>=b-n&&f<=h+x}
function sc(a,b,c){b=new r(b);a=(new r(c)).utc(a.isUTC());23!==U(a,"Hours")&&(b=b.getTimezoneOffset(),a=a.getTimezoneOffset(),b!==a&&(c+=(a-b).minutes()));return c}
function kc(a,b,c,d,e){function g(a){return M(b[a])?b[a]:b[a+"s"]}function f(a){return M(g(a))}var h;if(y(b)&&d)b={milliseconds:b};else if(y(b))return a.setTime(b),a;M(b.date)&&(b.day=b.date);fc(function(d,e,g){var l="day"===d;if(f(d)||l&&f("weekday"))return b.e=d,h=+g,!1;!c||("week"===d||l&&f("week"))||Sa(a,e.method,l?1:0)});Rb.forEach(function(c){var e=c.name;c=c.method;var h;h=g(e);N(h)||(d?("week"===e&&(h=(b.day||0)+7*h,c="Date"),h=h*d+U(a,c)):"month"===e&&f("day")&&Sa(a,"Date",15),Sa(a,c,h),
d&&"month"===e&&(e=h,0>e&&(e=e%12+12),e%12!=U(a,"Month")&&Sa(a,"Date",0)))});d||(f("day")||!f("weekday"))||a.setWeekday(g("weekday"));var l;a:{switch(e){case -1:l=a>cc();break a;case 1:l=a<cc();break a}l=void 0}l&&fc(function(b,c){if((c.k||"week"===b&&f("weekday"))&&!(f(b)||"day"===b&&f("weekday")))return a[c.j](e),!1},h+1);return a}
function Vb(a,b){var c=Kb,d={h:0,m:1,s:2},e;a=a||W;return c.replace(/{([a-z])}/g,function(c,f){var h=[],l="h"===f,n=l&&!b;if("t"===f)return a.ampm.join("|");l&&h.push(":");(e=a.timeSuffixes[d[f]])&&h.push(e+"\\s*");return 0===h.length?"":"(?:"+h.join("|")+")"+(n?"":"?")})}function tc(a,b,c){var d,e;y(a[1])?d=dc(a)[0]:(d=a[0],e=a[1]);return jc(d,e,b,c).c}
H(r,!1,!0,{create:function(){return tc(arguments)},past:function(){return tc(arguments,-1)},future:function(){return tc(arguments,1)},addLocale:function(a,b){return bc(a,b)},setLocale:function(a){var b=Y(a,!1);Ib=b;a&&a!=b.code&&(b.code=a);return b},getLocale:function(a){return a?Y(a,!1):Ib},addFormat:function(a,b,c){Wb(Y(c),a,b)}});
H(r,!0,!0,{set:function(){var a=dc(arguments);return kc(this,a[0],a[1])},setWeekday:function(a){if(!N(a))return Sa(this,"Date",U(this,"Date")+a-U(this,"Day"))},setISOWeek:function(a){var b=U(this,"Day")||7;if(!N(a))return this.set({month:0,date:4}),this.set({weekday:1}),1<a&&this.addWeeks(a-1),1!==b&&this.advance({days:b-1}),this.getTime()},getISOWeek:function(){var a;a=this.clone();var b=U(a,"Day")||7;a.addDays(4-b).reset();return 1+Q(a.daysSince(a.clone().beginningOfYear())/7)},beginningOfISOWeek:function(){var a=
this.getDay();0===a?a=-6:1!==a&&(a=1);this.setWeekday(a);return this.reset()},endOfISOWeek:function(){0!==this.getDay()&&this.setWeekday(7);return this.endOfDay()},getUTCOffset:function(a){var b=this._utc?0:this.getTimezoneOffset(),c=!0===a?":":"";return!b&&a?"Z":T(Q(-b/60),2,!0)+c+T(P(b%60),2)},utc:function(a){oa(this,"_utc",!0===a||0===arguments.length);return this},isUTC:function(){return!!this._utc||0===this.getTimezoneOffset()},advance:function(){var a=dc(arguments,!0);return kc(this,a[0],a[1],
1)},rewind:function(){var a=dc(arguments,!0);return kc(this,a[0],a[1],-1)},isValid:function(){return!isNaN(this.getTime())},isAfter:function(a,b){return this.getTime()>r.create(a).getTime()-(b||0)},isBefore:function(a,b){return this.getTime()<r.create(a).getTime()+(b||0)},isBetween:function(a,b,c){var d=this.getTime();a=r.create(a).getTime();var e=r.create(b).getTime();b=Ca(a,e);a=S(a,e);c=c||0;return b-c<d&&a+c>d},isLeapYear:function(){var a=U(this,"FullYear");return 0===a%4&&0!==a%100||0===a%400},
daysInMonth:function(){return 32-U(new r(U(this,"FullYear"),U(this,"Month"),32),"Date")},format:function(a,b){return qc(this,a,!1,b)},relative:function(a,b){z(a)&&(b=a,a=null);return qc(this,a,!0,b)},is:function(a,b,c){var d,e;if(this.isValid()){if(z(a))switch(a=a.trim().toLowerCase(),e=this.clone().utc(c),!0){case "future"===a:return this.getTime()>cc().getTime();case "past"===a:return this.getTime()<cc().getTime();case "weekday"===a:return 0<U(e,"Day")&&6>U(e,"Day");case "weekend"===a:return 0===
U(e,"Day")||6===U(e,"Day");case -1<(d=W.weekdays.indexOf(a)%7):return U(e,"Day")===d;case -1<(d=W.months.indexOf(a)%12):return U(e,"Month")===d}return rc(this,a,null,b,c)}},reset:function(a){var b={},c;a=a||"hours";"date"===a&&(a="days");c=Rb.some(function(b){return a===b.name||a===b.name+"s"});b[a]=a.match(/^days?/)?1:0;return c?this.set(b,!0):this},clone:function(){var a=new r(this.getTime());a.utc(!!this._utc);return a}});
H(r,!0,!0,{iso:function(){return this.toISOString()},getWeekday:r.prototype.getDay,getUTCWeekday:r.prototype.getUTCDay});function uc(a,b){function c(){return R(this*b)}function d(){return tc(arguments)[a.j](this)}function e(){return tc(arguments)[a.j](-this)}var g=a.name,f={};f[g]=c;f[g+"s"]=c;f[g+"Before"]=e;f[g+"sBefore"]=e;f[g+"Ago"]=e;f[g+"sAgo"]=e;f[g+"After"]=d;f[g+"sAfter"]=d;f[g+"FromNow"]=d;f[g+"sFromNow"]=d;t.extend(f)}H(t,!0,!0,{duration:function(a){a=Y(a);return Xb(a,lc(this),"duration")}});
W=Ib=r.addLocale("en",{plural:!0,timeMarker:"at",ampm:"am,pm",months:"January,February,March,April,May,June,July,August,September,October,November,December",weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",units:"millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s",numbers:"one,two,three,four,five,six,seven,eight,nine,ten",articles:"a,an,the",tokens:"the,st|nd|rd|th,of","short":"{Month} {d}, {yyyy}","long":"{Month} {d}, {yyyy} {h}:{mm}{tt}",full:"{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}",
past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",modifiers:[{name:"sign",src:"ago|before",value:-1},{name:"sign",src:"from now|after|from|in|later",value:1},{name:"edge",src:"last day",value:-2},{name:"edge",src:"end",value:-1},{name:"edge",src:"first day|beginning",value:1},{name:"shift",src:"last",value:-1},{name:"shift",src:"the|this",value:0},{name:"shift",src:"next",value:1}],dateParse:["{month} {year}","{shift} {unit=5-7}","{0?} {date}{1}","{0?} {edge} of {shift?} {unit=4-7?}{month?}{year?}"],
timeParse:"{num} {unit} {sign};{sign} {num} {unit};{0} {num}{1} {day} of {month} {year?};{weekday?} {month} {date}{1?} {year?};{date} {month} {year};{date} {month};{shift} {weekday};{shift} week {weekday};{weekday} {2?} {shift} week;{num} {unit=4-5} {sign} {day};{0?} {date}{1} of {month};{0?}{month?} {date?}{1?} of {shift} {unit=6-7}".split(";")});Ob=Rb.concat().reverse();Nb=Rb.concat();Nb.splice(2,1);
K(r,!0,!0,Rb,function(a,b,c){function d(a){a/=f;var c=a%1,d=b.error||0.999;c&&P(c%1)>d&&(a=R(a));return 0>a?Aa(a):Q(a)}var e=b.name,g=Yb(e),f=b.b(),h,l;b.j="add"+g+"s";h=function(a,b){return d(this.getTime()-r.create(a,b).getTime())};l=function(a,b){return d(r.create(a,b).getTime()-this.getTime())};a[e+"sAgo"]=l;a[e+"sUntil"]=l;a[e+"sSince"]=h;a[e+"sFromNow"]=h;a[b.j]=function(a,b){var c={};c[e]=a;return this.advance(c,b)};uc(b,f);3>c&&["Last","This","Next"].forEach(function(b){a["is"+b+g]=function(){return rc(this,
b+" "+e,"en")}});4>c&&(a["beginningOf"+g]=function(){var a={};switch(e){case "year":a.year=U(this,"FullYear");break;case "month":a.month=U(this,"Month");break;case "day":a.day=U(this,"Date");break;case "week":a.weekday=0}return this.set(a,!0)},a["endOf"+g]=function(){var a={hours:23,minutes:59,seconds:59,milliseconds:999};switch(e){case "year":a.month=11;a.day=31;break;case "month":a.day=this.daysInMonth();break;case "week":a.weekday=6}return this.set(a,!0)})});
W.addFormat("([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?",!0,["year_sign","year","month","date"],!1,!0);W.addFormat("(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?",!0,["date","month","year"],!0);W.addFormat("{full_month}[-.](\\d{4,4})",!1,["month","year"]);W.addFormat("\\/Date\\((\\d+(?:[+-]\\d{4,4})?)\\)\\/",!1,["timestamp"]);W.addFormat(Vb(W),!1,Jb);Pb=W.g.slice(0,7).reverse();W.g=W.g.slice(7).concat(Pb);oc("f",function(a){return U(a,"Milliseconds")},!0);
oc("s",function(a){return U(a,"Seconds")});oc("m",function(a){return U(a,"Minutes")});oc("h",function(a){return U(a,"Hours")%12||12});oc("H",function(a){return U(a,"Hours")});oc("d",function(a){return U(a,"Date")});oc("M",function(a){return U(a,"Month")+1});(function(){function a(a,c){var d=U(a,"Hours");return Y(c).ampm[Q(d/12)]||""}Z("t",a,1);Z("tt",a);Z("T",a,1,1);Z("TT",a,null,2)})();
(function(){function a(a,c){var d=U(a,"Day");return Y(c).weekdays[d]}Z("dow",a,3);Z("Dow",a,3,1);Z("weekday",a);Z("Weekday",a,null,1)})();nc("mon",0,3);nc("month",0);nc("month2",1);nc("month3",2);X.ms=X.f;X.milliseconds=X.f;X.seconds=X.s;X.minutes=X.m;X.hours=X.h;X["24hr"]=X.H;X["12hr"]=X.h;X.date=X.d;X.day=X.d;X.year=X.yyyy;K(r,!0,!0,"short,long,full",function(a,b){a[b]=function(a){return qc(this,b,!1,a)}});
"\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07".split("").forEach(function(a,b){9<b&&(b=za(10,b-9));Lb[a]=b});xa(Lb,Ka);Mb=q("([\u671f\u9031\u5468])?([\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07"+Ja+"]+)(?!\u6628)","g");
(function(){var a=W.weekdays.slice(0,7),b=W.months.slice(0,12);K(r,!0,!0,"today yesterday tomorrow weekday weekend future past".split(" ").concat(a).concat(b),function(a,b){a["is"+Yb(b)]=function(a){return this.is(b,0,a)}})})();r.utc||(r.utc={create:function(){return tc(arguments,0,!0)},past:function(){return tc(arguments,-1,!0)},future:function(){return tc(arguments,1,!0)}});
H(r,!1,!0,{RFC1123:"{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}",RFC1036:"{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}",ISO8601_DATE:"{yyyy}-{MM}-{dd}",ISO8601_DATETIME:"{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}"});
"use strict";function Range(a,b){this.start=vc(a);this.end=vc(b)}function vc(a){return C(a)?new r(a.getTime()):null==a?a:C(a)?a.getTime():a.valueOf()}function wc(a){a=null==a?a:C(a)?a.getTime():a.valueOf();return!!a||0===a}
function xc(a,b){var c,d,e,g;if(y(b))return new r(a.getTime()+b);c=b[0];d=b[1];e=U(a,d);g=new r(a.getTime());Sa(g,d,e+c);return g}function yc(a,b){return s.fromCharCode(a.charCodeAt(0)+b)}function zc(a,b){return a+b}Range.prototype.toString=function(){return this.isValid()?this.start+".."+this.end:"Invalid Range"};
H(Range,!0,!0,{isValid:function(){return wc(this.start)&&wc(this.end)&&typeof this.start===typeof this.end},span:function(){return this.isValid()?P((z(this.end)?this.end.charCodeAt(0):this.end)-(z(this.start)?this.start.charCodeAt(0):this.start))+1:NaN},contains:function(a){return null==a?!1:a.start&&a.end?a.start>=this.start&&a.start<=this.end&&a.end>=this.start&&a.end<=this.end:a>=this.start&&a<=this.end},every:function(a,b){var c,d=this.start,e=this.end,g=e<d,f=d,h=0,l=[];F(a)&&(b=a,a=null);a=
a||1;y(d)?c=zc:z(d)?c=yc:C(d)&&(c=a,y(c)?a=c:(d=c.toLowerCase().match(/^(\d+)?\s?(\w+?)s?$/i),c=parseInt(d[1])||1,d=d[2].slice(0,1).toUpperCase()+d[2].slice(1),d.match(/hour|minute|second/i)?d+="s":"Year"===d?d="FullYear":"Day"===d&&(d="Date"),a=[c,d]),c=xc);for(g&&0<a&&(a*=-1);g?f>=e:f<=e;)l.push(f),b&&b(f,h),f=c(f,a),h++;return l},union:function(a){return new Range(this.start<a.start?this.start:a.start,this.end>a.end?this.end:a.end)},intersect:function(a){return a.start>this.end||a.end<this.start?
new Range(NaN,NaN):new Range(this.start>a.start?this.start:a.start,this.end<a.end?this.end:a.end)},clone:function(){return new Range(this.start,this.end)},clamp:function(a){var b=this.start,c=this.end,d=c<b?c:b,b=b>c?b:c;return vc(a<d?d:a>b?b:a)}});[t,s,r].forEach(function(a){H(a,!1,!0,{range:function(b,c){a.create&&(b=a.create(b),c=a.create(c));return new Range(b,c)}})});
H(t,!0,!0,{upto:function(a,b,c){return t.range(this,a).every(c,b)},clamp:function(a,b){return(new Range(a,b)).clamp(this)},cap:function(a){return this.clamp(void 0,a)}});H(t,!0,!0,{downto:t.prototype.upto});H(p,!1,function(a){return a instanceof Range},{create:function(a){return a.every()}});
"use strict";function Ac(a,b,c,d,e){Infinity!==b&&(a.timers||(a.timers=[]),y(b)||(b=1),a.n=!1,a.timers.push(setTimeout(function(){a.n||c.apply(d,e||[])},b)))}
H(Function,!0,!0,{lazy:function(a,b,c){function d(){g.length<c-(f&&b?1:0)&&g.push([this,arguments]);f||(f=!0,b?h():Ac(d,l,h));return x}var e=this,g=[],f=!1,h,l,n,x;a=a||1;c=c||Infinity;l=Aa(a);n=R(l/a)||1;h=function(){var a=g.length,b;if(0!=a){for(b=S(a-n,0);a>b;)x=Function.prototype.apply.apply(e,g.shift()),a--;Ac(d,l,function(){f=!1;h()})}};return d},throttle:function(a){return this.lazy(a,!0,1)},debounce:function(a){function b(){b.cancel();Ac(b,a,c,this,arguments)}var c=this;return b},delay:function(a){var b=
L(arguments,null,1);Ac(this,a,this,this,b);return this},every:function(a){function b(){c.apply(c,d);Ac(c,a,b)}var c=this,d=arguments,d=1<d.length?L(d,null,1):[];Ac(c,a,b);return c},cancel:function(){var a=this.timers,b;if(A(a))for(;b=a.shift();)clearTimeout(b);this.n=!0;return this},after:function(a){var b=this,c=0,d=[];if(!y(a))a=1;else if(0===a)return b.call(),b;return function(){var e;d.push(L(arguments));c++;if(c==a)return e=b.call(this,d),c=0,d=[],e}},once:function(){return this.throttle(Infinity,
!0)},fill:function(){var a=this,b=L(arguments);return function(){var c=L(arguments);b.forEach(function(a,b){(null!=a||b>=c.length)&&c.splice(b,0,a)});return a.apply(this,c)}}});
"use strict";function Bc(a,b,c,d,e,g){var f=a.toFixed(20),h=f.search(/\./),f=f.search(/[1-9]/),h=h-f;0<h&&(h-=1);e=S(Ca(Q(h/3),!1===e?c.length:e),-d);d=c.charAt(e+d-1);-9>h&&(e=-3,b=P(h)-9,d=c.slice(0,1));c=g?za(2,10*e):za(10,3*e);return Da(a/c,b||0).format()+d.trim()}
H(t,!1,!0,{random:function(a,b){var c,d;1==arguments.length&&(b=a,a=0);c=Ca(a||0,N(b)?1:b);d=S(a||0,N(b)?1:b)+1;return Q(u.random()*(d-c)+c)}});
H(t,!0,!0,{log:function(a){return u.log(this)/(a?u.log(a):1)},abbr:function(a){return Bc(this,a,"kmbt",0,4)},metric:function(a,b){return Bc(this,a,"n\u03bcm kMGTPE",4,N(b)?1:b)},bytes:function(a,b){return Bc(this,a,"kMGTPE",0,N(b)?4:b,!0)+"B"},isInteger:function(){return 0==this%1},isOdd:function(){return!isNaN(this)&&!this.isMultipleOf(2)},isEven:function(){return this.isMultipleOf(2)},isMultipleOf:function(a){return 0===this%a},format:function(a,b,c){var d,e,g,f="";N(b)&&(b=",");N(c)&&(c=".");d=
(y(a)?Da(this,a||0).toFixed(S(a,0)):this.toString()).replace(/^-/,"").split(".");e=d[0];g=d[1];for(d=e.length;0<d;d-=3)d<e.length&&(f=b+f),f=e.slice(S(0,d-3),d)+f;g&&(f+=c+Na("0",(a||0)-g.length)+g);return(0>this?"-":"")+f},hex:function(a){return this.pad(a||1,!1,16)},times:function(a){if(a)for(var b=0;b<this;b++)a.call(this,b);return this.toNumber()},chr:function(){return s.fromCharCode(this)},pad:function(a,b,c){return T(this,a,b,c)},ordinalize:function(){var a=P(this),a=parseInt(a.toString().slice(-2));
return this+Pa(a)},toNumber:function(){return parseFloat(this,10)}});(function(){function a(a){return function(c){return c?Da(this,c,a):a(this)}}H(t,!0,!0,{ceil:a(Aa),round:a(R),floor:a(Q)});K(t,!0,!0,"abs,pow,sin,asin,cos,acos,tan,atan,exp,pow,sqrt",function(a,c){a[c]=function(a,b){return u[c](this,a,b)}})})();
"use strict";var Cc=["isObject","isNaN"],Dc="keys values select reject each merge clone equal watch tap has toQueryString".split(" ");
function Ec(a,b,c,d){var e,g,f;(g=b.match(/^(.+?)(\[.*\])$/))?(f=g[1],b=g[2].replace(/^\[|\]$/g,"").split("]["),b.forEach(function(b){e=!b||b.match(/^\d+$/);!f&&A(a)&&(f=a.length);J(a,f)||(a[f]=e?[]:{});a=a[f];f=b}),!f&&e&&(f=a.length.toString()),Ec(a,f,c,d)):a[b]=d&&"true"===c?!0:d&&"false"===c?!1:c}function Fc(a,b){var c;return A(b)||G(b)&&b.toString===v?(c=[],I(b,function(b,e){a&&(b=a+"["+b+"]");c.push(Fc(b,e))}),c.join("&")):a?Gc(a)+"="+(C(b)?b.getTime():Gc(b)):""}
function Gc(a){return a||!1===a||0===a?encodeURIComponent(a).replace(/%20/g,"+"):""}function Hc(a,b,c){var d,e=a instanceof O?new O:{};I(a,function(a,f){d=!1;sa(b,function(b){(D(b)?b.test(a):G(b)?b[a]===f:a===s(b))&&(d=!0)},1);d===c&&(e[a]=f)});return e}H(m,!1,!0,{watch:function(a,b,c){if(ea){var d=a[b];m.defineProperty(a,b,{enumerable:!0,configurable:!0,get:function(){return d},set:function(e){d=c.call(a,b,d,e)}})}}});
H(m,!1,function(){return 1<arguments.length},{keys:function(a,b){var c=m.keys(a);c.forEach(function(c){b.call(a,c,a[c])});return c}});
H(m,!1,!0,{isObject:function(a){return va(a)},isNaN:function(a){return y(a)&&a.valueOf()!==a.valueOf()},equal:function(a,b){return Ua(a,b)},extended:function(a){return new O(a)},merge:function(a,b,c,d){var e,g,f,h,l,n,x;if(a&&"string"!==typeof b)for(e in b)if(J(b,e)&&a){h=b[e];l=a[e];n=M(l);g=G(h);f=G(l);x=n&&!1===d?l:h;n&&F(d)&&(x=d.call(b,e,l,h));if(c&&(g||f))if(C(h))x=new r(h.getTime());else if(D(h))x=new q(h.source,Qa(h));else{f||(a[e]=p.isArray(h)?[]:{});m.merge(a[e],h,c,d);continue}a[e]=x}return a},
values:function(a,b){var c=[];I(a,function(d,e){c.push(e);b&&b.call(a,e)});return c},clone:function(a,b){var c;if(!G(a))return a;c=v.call(a);if(C(a,c)&&a.clone)return a.clone();if(C(a,c)||D(a,c))return new a.constructor(a);if(a instanceof O)c=new O;else if(A(a,c))c=[];else if(va(a,c))c={};else throw new TypeError("Clone must be a basic data type.");return m.merge(c,a,b)},fromQueryString:function(a,b){var c=m.extended();a=a&&a.toString?a.toString():"";a.replace(/^.*?\?/,"").split("&").forEach(function(a){a=
a.split("=");2===a.length&&Ec(c,a[0],decodeURIComponent(a[1]),b)});return c},toQueryString:function(a,b){return Fc(b,a)},tap:function(a,b){var c=b;F(b)||(c=function(){if(b)a[b]()});c.call(a,a);return a},has:function(a,b){return J(a,b)},select:function(a){return Hc(a,arguments,!0)},reject:function(a){return Hc(a,arguments,!1)}});K(m,!1,!0,w,function(a,b){var c="is"+b;Cc.push(c);a[c]=ia[b]});
H(m,!1,function(){return 0===arguments.length},{extend:function(){var a=Cc.concat(Dc);"undefined"!==typeof Hb&&(a=a.concat(Hb));Ya(a,m)}});Ya(Dc,O);
"use strict";H(q,!1,!0,{escape:function(a){return Ra(a)}});H(q,!0,!0,{getFlags:function(){return Qa(this)},setFlags:function(a){return q(this.source,a)},addFlag:function(a){return this.setFlags(Qa(this,a))},removeFlag:function(a){return this.setFlags(Qa(this).replace(a,""))}});
"use strict";
function Ic(a){a=+a;if(0>a||Infinity===a)throw new RangeError("Invalid number");return a}function Jc(a,b){return Na(M(b)?b:" ",a)}function Kc(a,b,c,d,e){var g;if(a.length<=b)return a.toString();d=N(d)?"...":d;switch(c){case "left":return a=e?Lc(a,b,!0):a.slice(a.length-b),d+a;case "middle":return c=Aa(b/2),g=Q(b/2),b=e?Lc(a,c):a.slice(0,c),a=e?Lc(a,g,!0):a.slice(a.length-g),b+d+a;default:return b=e?Lc(a,b):a.slice(0,b),b+d}}
function Lc(a,b,c){if(c)return Lc(a.reverse(),b).reverse();c=q("(?=["+Ma()+"])");var d=0;return a.split(c).filter(function(a){d+=a.length;return d<=b}).join("")}function Mc(a,b,c){z(b)&&(b=a.indexOf(b),-1===b&&(b=c?a.length:0));return b}var Nc,Oc;H(s,!0,!1,{repeat:function(a){a=Ic(a);return Na(this,a)}});
H(s,!0,function(a){return D(a)||2<arguments.length},{startsWith:function(a){var b=arguments,c=b[1],b=b[2],d=this;c&&(d=d.slice(c));N(b)&&(b=!0);c=D(a)?a.source.replace("^",""):Ra(a);return q("^"+c,b?"":"i").test(d)},endsWith:function(a){var b=arguments,c=b[1],b=b[2],d=this;M(c)&&(d=d.slice(0,c));N(b)&&(b=!0);c=D(a)?a.source.replace("$",""):Ra(a);return q(c+"$",b?"":"i").test(d)}});
H(s,!0,!0,{escapeRegExp:function(){return Ra(this)},escapeURL:function(a){return a?encodeURIComponent(this):encodeURI(this)},unescapeURL:function(a){return a?decodeURI(this):decodeURIComponent(this)},escapeHTML:function(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2f;")},unescapeHTML:function(){return this.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&#x2f;/g,
"/").replace(/&amp;/g,"&")},encodeBase64:function(){return Nc(unescape(encodeURIComponent(this)))},decodeBase64:function(){return decodeURIComponent(escape(Oc(this)))},each:function(a,b){var c,d,e;F(a)?(b=a,a=/[\s\S]/g):a?z(a)?a=q(Ra(a),"gi"):D(a)&&(a=q(a.source,Qa(a,"g"))):a=/[\s\S]/g;c=this.match(a)||[];if(b)for(d=0,e=c.length;d<e;d++)c[d]=b.call(this,c[d],d,c)||c[d];return c},shift:function(a){var b="";a=a||0;this.codes(function(c){b+=s.fromCharCode(c+a)});return b},codes:function(a){var b=[],
c,d;c=0;for(d=this.length;c<d;c++){var e=this.charCodeAt(c);b.push(e);a&&a.call(this,e,c)}return b},chars:function(a){return this.each(a)},words:function(a){return this.trim().each(/\S+/g,a)},lines:function(a){return this.trim().each(/^.*$/gm,a)},paragraphs:function(a){var b=this.trim().split(/[\r\n]{2,}/);return b=b.map(function(b){if(a)var d=a.call(b);return d?d:b})},isBlank:function(){return 0===this.trim().length},has:function(a){return-1!==this.search(D(a)?a:Ra(a))},add:function(a,b){b=N(b)?
this.length:b;return this.slice(0,b)+a+this.slice(b)},remove:function(a){return this.replace(a,"")},reverse:function(){return this.split("").reverse().join("")},compact:function(){return this.trim().replace(/([\r\n\s\u3000])+/g,function(a,b){return"\u3000"===b?b:" "})},at:function(){return Wa(this,arguments,!0)},from:function(a){return this.slice(Mc(this,a,!0))},to:function(a){N(a)&&(a=this.length);return this.slice(0,Mc(this,a))},dasherize:function(){return this.underscore().replace(/_/g,"-")},underscore:function(){return this.replace(/[-\s]+/g,
"_").replace(s.Inflector&&s.Inflector.acronymRegExp,function(a,b){return(0<b?"_":"")+a.toLowerCase()}).replace(/([A-Z\d]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").toLowerCase()},camelize:function(a){return this.underscore().replace(/(^|_)([^_]+)/g,function(b,c,d,e){b=(b=s.Inflector)&&b.acronyms[d];b=z(b)?b:void 0;e=!1!==a||0<e;return b?e?b:b.toLowerCase():e?d.capitalize():d})},spacify:function(){return this.underscore().replace(/_/g," ")},stripTags:function(){var a=this;sa(0<arguments.length?
arguments:[""],function(b){a=a.replace(q("</?"+Ra(b)+"[^<>]*>","gi"),"")});return a},removeTags:function(){var a=this;sa(0<arguments.length?arguments:["\\S+"],function(b){b=q("<("+b+")[^<>]*(?:\\/>|>.*?<\\/\\1>)","gi");a=a.replace(b,"")});return a},truncate:function(a,b,c){return Kc(this,a,b,c)},truncateOnWord:function(a,b,c){return Kc(this,a,b,c,!0)},pad:function(a,b){var c,d;a=Ic(a);c=S(0,a-this.length)/2;d=Q(c);c=Aa(c);return Jc(d,b)+this+Jc(c,b)},padLeft:function(a,b){a=Ic(a);return Jc(S(0,a-
this.length),b)+this},padRight:function(a,b){a=Ic(a);return this+Jc(S(0,a-this.length),b)},first:function(a){N(a)&&(a=1);return this.substr(0,a)},last:function(a){N(a)&&(a=1);return this.substr(0>this.length-a?0:this.length-a)},toNumber:function(a){return Oa(this,a)},capitalize:function(a){var b;return this.toLowerCase().replace(a?/[^']/g:/^\S/,function(a){var d=a.toUpperCase(),e;e=b?a:d;b=d!==a;return e})},assign:function(){var a={};sa(arguments,function(b,c){G(b)?xa(a,b):a[c+1]=b});return this.replace(/\{([^{]+?)\}/g,
function(b,c){return J(a,c)?a[c]:b})}});H(s,!0,!0,{insert:s.prototype.add});
(function(a){if(ba.btoa)Nc=ba.btoa,Oc=ba.atob;else{var b=/[^A-Za-z0-9\+\/\=]/g;Nc=function(b){var d="",e,g,f,h,l,n,x=0;do e=b.charCodeAt(x++),g=b.charCodeAt(x++),f=b.charCodeAt(x++),h=e>>2,e=(e&3)<<4|g>>4,l=(g&15)<<2|f>>6,n=f&63,isNaN(g)?l=n=64:isNaN(f)&&(n=64),d=d+a.charAt(h)+a.charAt(e)+a.charAt(l)+a.charAt(n);while(x<b.length);return d};Oc=function(c){var d="",e,g,f,h,l,n=0;if(c.match(b))throw Error("String contains invalid base64 characters");c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");do e=a.indexOf(c.charAt(n++)),
g=a.indexOf(c.charAt(n++)),h=a.indexOf(c.charAt(n++)),l=a.indexOf(c.charAt(n++)),e=e<<2|g>>4,g=(g&15)<<4|h>>2,f=(h&3)<<6|l,d+=s.fromCharCode(e),64!=h&&(d+=s.fromCharCode(g)),64!=l&&(d+=s.fromCharCode(f));while(n<c.length);return d}}})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");})();;/*
 * JavaScript Canvas to Blob 2.0.5
 * https://github.com/blueimp/JavaScript-Canvas-to-Blob
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Based on stackoverflow user Stoive's code snippet:
 * http://stackoverflow.com/q/4998908
 */

/*jslint nomen: true, regexp: true */
/*global window, atob, Blob, ArrayBuffer, Uint8Array, define */

(function (window) {
    'use strict';
    var CanvasPrototype = window.HTMLCanvasElement &&
            window.HTMLCanvasElement.prototype,
        hasBlobConstructor = window.Blob && (function () {
            try {
                return Boolean(new Blob());
            } catch (e) {
                return false;
            }
        }()),
        hasArrayBufferViewSupport = hasBlobConstructor && window.Uint8Array &&
            (function () {
                try {
                    return new Blob([new Uint8Array(100)]).size === 100;
                } catch (e) {
                    return false;
                }
            }()),
        BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder ||
            window.MozBlobBuilder || window.MSBlobBuilder,
        dataURLtoBlob = (hasBlobConstructor || BlobBuilder) && window.atob &&
            window.ArrayBuffer && window.Uint8Array && function (dataURI) {
                var byteString,
                    arrayBuffer,
                    intArray,
                    i,
                    mimeString,
                    bb;
                if (dataURI.split(',')[0].indexOf('base64') >= 0) {
                    // Convert base64 to raw binary data held in a string:
                    byteString = atob(dataURI.split(',')[1]);
                } else {
                    // Convert base64/URLEncoded data component to raw binary data:
                    byteString = decodeURIComponent(dataURI.split(',')[1]);
                }
                // Write the bytes of the string to an ArrayBuffer:
                arrayBuffer = new ArrayBuffer(byteString.length);
                intArray = new Uint8Array(arrayBuffer);
                for (i = 0; i < byteString.length; i += 1) {
                    intArray[i] = byteString.charCodeAt(i);
                }
                // Separate out the mime component:
                mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
                // Write the ArrayBuffer (or ArrayBufferView) to a blob:
                if (hasBlobConstructor) {
                    return new Blob(
                        [hasArrayBufferViewSupport ? intArray : arrayBuffer],
                        {type: mimeString}
                    );
                }
                bb = new BlobBuilder();
                bb.append(arrayBuffer);
                return bb.getBlob(mimeString);
            };
    if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
        if (CanvasPrototype.mozGetAsFile) {
            CanvasPrototype.toBlob = function (callback, type, quality) {
                if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
                    callback(dataURLtoBlob(this.toDataURL(type, quality)));
                } else {
                    callback(this.mozGetAsFile('blob', type));
                }
            };
        } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
            CanvasPrototype.toBlob = function (callback, type, quality) {
                callback(dataURLtoBlob(this.toDataURL(type, quality)));
            };
        }
    }
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return dataURLtoBlob;
        });
    } else {
        window.dataURLtoBlob = dataURLtoBlob;
    }
}(this));;/**
 * An even better animation frame.
 *
 * @copyright Oleg Slobodskoi 2013
 * @website https://github.com/kof/animationFrame
 * @license MIT
 */

(function(window) {
'use strict';

var now = Date.now,
    setTimeout = window.setTimeout,
    nativeRequestAnimationFrame,
    nativeCancelAnimationFrame,
    hasNative = false;

(function() {
    var i,
        vendors = ['ms', 'moz', 'webkit', 'o'];

    // Grab the native implementation.
    for (i = 0; i < vendors.length && !nativeRequestAnimationFrame; i++) {
        nativeRequestAnimationFrame = top[vendors[i] + 'RequestAnimationFrame'];
        nativeCancelAnimationFrame = top[vendors[i] + 'CancelAnimationFrame'] ||
            top[vendors[i] + 'CancelRequestAnimationFrame'];
    }

    // Test if native implementation works.
    // There are some issues on ios6
    // http://shitwebkitdoes.tumblr.com/post/47186945856/native-requestanimationframe-broken-on-ios-6
    // https://gist.github.com/KrofDrakula/5318048
    nativeRequestAnimationFrame && nativeRequestAnimationFrame(function() {
        hasNative = true;
    });
}());

/**
 * Animation frame constructor.
 *
 * Options:
 *   - `useNative` use the native animation frame if possible, defaults to true
 *   - frameRate` pass a custom frame rate
 *
 * @param {Object|Number} options
 */
function AnimationFrame(options) {
    if (!(this instanceof AnimationFrame)) return new AnimationFrame(options);
    options || (options = {});

    // Its a frame rate.
    if (typeof options == 'number') options = {frameRate: options};
    options.useNative != null || (options.useNative = true);
    this.options = options;
    this.frameRate = options.frameRate || AnimationFrame.FRAME_RATE;
    this._frameLength = 1000 / this.frameRate;
    this._isCustomFrameRate = this.frameRate !== AnimationFrame.FRAME_RATE;
    this._timeoutId = null;
    this._callbacks = {};
    this._lastTickTime = 0;
    this._tickCounter = 0;
}

/**
 * Default frame rate used for shim implementation. Native implementation
 * will use the screen frame rate, but js have no way to detect it.
 *
 * If you know your target device, define it manually.
 *
 * @type {Number}
 * @api public
 */
AnimationFrame.FRAME_RATE = 60;

/**
 * Replace the globally defined implementation or define it globally.
 *
 * @param {Object|Number} [options]
 * @api public
 */
AnimationFrame.shim = function(options) {
    var animationFrame = new AnimationFrame(options);

    window.requestAnimationFrame = function(callback) {
        return animationFrame.request(callback);
    };
    window.cancelAnimationFrame = function(id) {
        return animationFrame.cancel(id);
    };

    return animationFrame;
};


/**
 * Request animation frame.
 * We will use the native RAF as soon as we know it does works.
 *
 * @param {Function} callback
 * @return {Number} timeout id or requested animation frame id
 * @api public
 */
AnimationFrame.prototype.request = function(callback) {
    var self = this,
        delay;

    // Alawys inc counter to ensure it never has a conflict with the native counter.
    // After the feature test phase we don't know exactly which implementation has been used.
    // Therefore on #cancel we do it for both.
    ++this._tickCounter;

    if (hasNative && self.options.useNative && !this._isCustomFrameRate) {
        return nativeRequestAnimationFrame(callback);
    }

    if (!callback) throw new TypeError('Not enough arguments');

    if (this._timeoutId == null) {
        // Much faster than Math.max
        // http://jsperf.com/math-max-vs-comparison/3
        // http://jsperf.com/date-now-vs-date-gettime/11
        delay = this._frameLength + this._lastTickTime - (now ? now() : (new Date).getTime());
        if (delay < 0) delay = 0;

        this._timeoutId = setTimeout(function() {
            var id;

            self._lastTickTime = now ? now() : (new Date).getTime();
            self._timeoutId = null;
            ++self._tickCounter;

            for (id in self._callbacks) {
                if (self._callbacks[id]) {
                    if (hasNative && self.options.useNative) {
                        nativeRequestAnimationFrame(self._callbacks[id]);
                    } else {
                        self._callbacks[id](self._lastTickTime);
                    }
                    delete self._callbacks[id];
                }
            }
        }, delay);
    }

    this._callbacks[this._tickCounter] = callback;
    return this._tickCounter;
};

/**
 * Cancel animation frame.
 *
 * @param {Number} timeout id or requested animation frame id
 *
 * @api public
 */
AnimationFrame.prototype.cancel = function(id) {
    if (hasNative && this.options.useNative) nativeCancelAnimationFrame(id);
    delete this._callbacks[id];
};

// Support commonjs wrapper, amd define and plain window.
if (typeof exports == 'object' && typeof module == 'object') {
    module.exports = AnimationFrame;
} else if (typeof define == 'function' && define.amd) {
    define(function() { return AnimationFrame; });
} else {
    window.AnimationFrame = AnimationFrame;
}

}(window));;/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */

/*jshint asi: true, browser: true, curly: true, eqeqeq: true, forin: false, immed: false, newcap: true, noempty: true, strict: true, undef: true */
/*global jQuery: false */

(function( window, $, undefined ){

  'use strict';

  // get global vars
  var document = window.document;
  var Modernizr = window.Modernizr;

  // helper function
  var capitalize = function( str ) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // ========================= getStyleProperty by kangax ===============================
  // http://perfectionkills.com/feature-testing-css-properties/

  var prefixes = 'Moz Webkit O Ms'.split(' ');

  var getStyleProperty = function( propName ) {
    var style = document.documentElement.style,
        prefixed;

    // test standard property first
    if ( typeof style[propName] === 'string' ) {
      return propName;
    }

    // capitalize
    propName = capitalize( propName );

    // test vendor specific properties
    for ( var i=0, len = prefixes.length; i < len; i++ ) {
      prefixed = prefixes[i] + propName;
      if ( typeof style[ prefixed ] === 'string' ) {
        return prefixed;
      }
    }
  };

  var transformProp = getStyleProperty('transform'),
      transitionProp = getStyleProperty('transitionProperty');


  // ========================= miniModernizr ===============================
  // <3<3<3 and thanks to Faruk and Paul for doing the heavy lifting

  /*!
   * Modernizr v1.6ish: miniModernizr for Isotope
   * http://www.modernizr.com
   *
   * Developed by:
   * - Faruk Ates  http://farukat.es/
   * - Paul Irish  http://paulirish.com/
   *
   * Copyright (c) 2009-2010
   * Dual-licensed under the BSD or MIT licenses.
   * http://www.modernizr.com/license/
   */

  /*
   * This version whittles down the script just to check support for
   * CSS transitions, transforms, and 3D transforms.
  */

  var tests = {
    csstransforms: function() {
      return !!transformProp;
    },

    csstransforms3d: function() {
      var test = !!getStyleProperty('perspective');
      // double check for Chrome's false positive
      if ( test ) {
        var vendorCSSPrefixes = ' -o- -moz- -ms- -webkit- -khtml- '.split(' '),
            mediaQuery = '@media (' + vendorCSSPrefixes.join('transform-3d),(') + 'modernizr)',
            $style = $('<style>' + mediaQuery + '{#modernizr{height:3px}}' + '</style>')
                        .appendTo('head'),
            $div = $('<div id="modernizr" />').appendTo('html');

        test = $div.height() === 3;

        $div.remove();
        $style.remove();
      }
      return test;
    },

    csstransitions: function() {
      return !!transitionProp;
    }
  };

  var testName;

  if ( Modernizr ) {
    // if there's a previous Modernzir, check if there are necessary tests
    for ( testName in tests) {
      if ( !Modernizr.hasOwnProperty( testName ) ) {
        // if test hasn't been run, use addTest to run it
        Modernizr.addTest( testName, tests[ testName ] );
      }
    }
  } else {
    // or create new mini Modernizr that just has the 3 tests
    Modernizr = window.Modernizr = {
      _version : '1.6ish: miniModernizr for Isotope'
    };

    var classes = ' ';
    var result;

    // Run through tests
    for ( testName in tests) {
      result = tests[ testName ]();
      Modernizr[ testName ] = result;
      classes += ' ' + ( result ?  '' : 'no-' ) + testName;
    }

    // Add the new classes to the <html> element.
    $('html').addClass( classes );
  }


  // ========================= isoTransform ===============================

  /**
   *  provides hooks for .css({ scale: value, translate: [x, y] })
   *  Progressively enhanced CSS transforms
   *  Uses hardware accelerated 3D transforms for Safari
   *  or falls back to 2D transforms.
   */

  if ( Modernizr.csstransforms ) {

        // i.e. transformFnNotations.scale(0.5) >> 'scale3d( 0.5, 0.5, 1)'
    var transformFnNotations = Modernizr.csstransforms3d ?
      { // 3D transform functions
        translate : function ( position ) {
          return 'translate3d(' + position[0] + 'px, ' + position[1] + 'px, 0) ';
        },
        scale : function ( scale ) {
          return 'scale3d(' + scale + ', ' + scale + ', 1) ';
        }
      } :
      { // 2D transform functions
        translate : function ( position ) {
          return 'translate(' + position[0] + 'px, ' + position[1] + 'px) ';
        },
        scale : function ( scale ) {
          return 'scale(' + scale + ') ';
        }
      }
    ;

    var setIsoTransform = function ( elem, name, value ) {
          // unpack current transform data
      var data =  $.data( elem, 'isoTransform' ) || {},
          newData = {},
          fnName,
          transformObj = {},
          transformValue;

      // i.e. newData.scale = 0.5
      newData[ name ] = value;
      // extend new value over current data
      $.extend( data, newData );

      for ( fnName in data ) {
        transformValue = data[ fnName ];
        transformObj[ fnName ] = transformFnNotations[ fnName ]( transformValue );
      }

      // get proper order
      // ideally, we could loop through this give an array, but since we only have
      // a couple transforms we're keeping track of, we'll do it like so
      var translateFn = transformObj.translate || '',
          scaleFn = transformObj.scale || '',
          // sorting so translate always comes first
          valueFns = translateFn + scaleFn;

      // set data back in elem
      $.data( elem, 'isoTransform', data );

      // set name to vendor specific property
      elem.style[ transformProp ] = valueFns;
    };

    // ==================== scale ===================

    $.cssNumber.scale = true;

    $.cssHooks.scale = {
      set: function( elem, value ) {
        // uncomment this bit if you want to properly parse strings
        // if ( typeof value === 'string' ) {
        //   value = parseFloat( value );
        // }
        setIsoTransform( elem, 'scale', value );
      },
      get: function( elem, computed ) {
        var transform = $.data( elem, 'isoTransform' );
        return transform && transform.scale ? transform.scale : 1;
      }
    };

    $.fx.step.scale = function( fx ) {
      $.cssHooks.scale.set( fx.elem, fx.now+fx.unit );
    };


    // ==================== translate ===================

    $.cssNumber.translate = true;

    $.cssHooks.translate = {
      set: function( elem, value ) {

        // uncomment this bit if you want to properly parse strings
        // if ( typeof value === 'string' ) {
        //   value = value.split(' ');
        // }
        //
        // var i, val;
        // for ( i = 0; i < 2; i++ ) {
        //   val = value[i];
        //   if ( typeof val === 'string' ) {
        //     val = parseInt( val );
        //   }
        // }

        setIsoTransform( elem, 'translate', value );
      },

      get: function( elem, computed ) {
        var transform = $.data( elem, 'isoTransform' );
        return transform && transform.translate ? transform.translate : [ 0, 0 ];
      }
    };

  }

  // ========================= get transition-end event ===============================
  var transitionEndEvent, transitionDurProp;

  if ( Modernizr.csstransitions ) {
    transitionEndEvent = {
      WebkitTransitionProperty: 'webkitTransitionEnd',  // webkit
      MozTransitionProperty: 'transitionend',
      OTransitionProperty: 'oTransitionEnd otransitionend',
      transitionProperty: 'transitionend'
    }[ transitionProp ];

    transitionDurProp = getStyleProperty('transitionDuration');
  }

  // ========================= smartresize ===============================

  /*
   * smartresize: debounced resize event for jQuery
   *
   * latest version and complete README available on Github:
   * https://github.com/louisremi/jquery.smartresize.js
   *
   * Copyright 2011 @louis_remi
   * Licensed under the MIT license.
   */

  var $event = $.event,
      dispatchMethod = $.event.handle ? 'handle' : 'dispatch',
      resizeTimeout;

  $event.special.smartresize = {
    setup: function() {
      $(this).bind( "resize", $event.special.smartresize.handler );
    },
    teardown: function() {
      $(this).unbind( "resize", $event.special.smartresize.handler );
    },
    handler: function( event, execAsap ) {
      // Save the context
      var context = this,
          args = arguments;

      // set correct event type
      event.type = "smartresize";

      if ( resizeTimeout ) { clearTimeout( resizeTimeout ); }
      resizeTimeout = setTimeout(function() {
        $event[ dispatchMethod ].apply( context, args );
      }, execAsap === "execAsap"? 0 : 100 );
    }
  };

  $.fn.smartresize = function( fn ) {
    return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
  };



// ========================= Isotope ===============================


  // our "Widget" object constructor
  $.Isotope = function( options, element, callback ){
    this.element = $( element );

    this._create( options );
    this._init( callback );
  };

  // styles of container element we want to keep track of
  var isoContainerStyles = [ 'width', 'height' ];

  var $window = $(window);

  $.Isotope.settings = {
    resizable: true,
    layoutMode : 'masonry',
    containerClass : 'isotope',
    itemClass : 'isotope-item',
    hiddenClass : 'isotope-hidden',
    hiddenStyle: { opacity: 0, scale: 0.001 },
    visibleStyle: { opacity: 1, scale: 1 },
    containerStyle: {
      position: 'relative',
      overflow: 'hidden'
    },
    animationEngine: 'best-available',
    animationOptions: {
      queue: false,
      duration: 800
    },
    sortBy : 'original-order',
    sortAscending : true,
    resizesContainer : true,
    transformsEnabled: true,
    itemPositionDataEnabled: false
  };

  $.Isotope.prototype = {

    // sets up widget
    _create : function( options ) {

      this.options = $.extend( {}, $.Isotope.settings, options );

      this.styleQueue = [];
      this.elemCount = 0;

      // get original styles in case we re-apply them in .destroy()
      var elemStyle = this.element[0].style;
      this.originalStyle = {};
      // keep track of container styles
      var containerStyles = isoContainerStyles.slice(0);
      for ( var prop in this.options.containerStyle ) {
        containerStyles.push( prop );
      }
      for ( var i=0, len = containerStyles.length; i < len; i++ ) {
        prop = containerStyles[i];
        this.originalStyle[ prop ] = elemStyle[ prop ] || '';
      }
      // apply container style from options
      this.element.css( this.options.containerStyle );

      this._updateAnimationEngine();
      this._updateUsingTransforms();

      // sorting
      var originalOrderSorter = {
        'original-order' : function( $elem, instance ) {
          instance.elemCount ++;
          return instance.elemCount;
        },
        random : function() {
          return Math.random();
        }
      };

      this.options.getSortData = $.extend( this.options.getSortData, originalOrderSorter );

      // need to get atoms
      this.reloadItems();

      // get top left position of where the bricks should be
      this.offset = {
        left: parseInt( ( this.element.css('padding-left') || 0 ), 10 ),
        top: parseInt( ( this.element.css('padding-top') || 0 ), 10 )
      };

      // add isotope class first time around
      var instance = this;
      setTimeout( function() {
        instance.element.addClass( instance.options.containerClass );
      }, 0 );

      // bind resize method
      if ( this.options.resizable ) {
        $window.bind( 'smartresize.isotope', function() {
          instance.resize();
        });
      }

      // dismiss all click events from hidden events
      this.element.delegate( '.' + this.options.hiddenClass, 'click', function(){
        return false;
      });

    },

    _getAtoms : function( $elems ) {
      var selector = this.options.itemSelector,
          // filter & find
          $atoms = selector ? $elems.filter( selector ).add( $elems.find( selector ) ) : $elems,
          // base style for atoms
          atomStyle = { position: 'absolute' };

      // filter out text nodes
      $atoms = $atoms.filter( function( i, atom ) {
        return atom.nodeType === 1;
      });

      if ( this.usingTransforms ) {
        atomStyle.left = 0;
        atomStyle.top = 0;
      }

      $atoms.css( atomStyle ).addClass( this.options.itemClass );

      this.updateSortData( $atoms, true );

      return $atoms;
    },

    // _init fires when your instance is first created
    // (from the constructor above), and when you
    // attempt to initialize the widget again (by the bridge)
    // after it has already been initialized.
    _init : function( callback ) {

      this.$filteredAtoms = this._filter( this.$allAtoms );
      this._sort();
      this.reLayout( callback );

    },

    option : function( opts ){
      // change options AFTER initialization:
      // signature: $('#foo').bar({ cool:false });
      if ( $.isPlainObject( opts ) ){
        this.options = $.extend( true, this.options, opts );

        // trigger _updateOptionName if it exists
        var updateOptionFn;
        for ( var optionName in opts ) {
          updateOptionFn = '_update' + capitalize( optionName );
          if ( this[ updateOptionFn ] ) {
            this[ updateOptionFn ]();
          }
        }
      }
    },

    // ====================== updaters ====================== //
    // kind of like setters

    _updateAnimationEngine : function() {
      var animationEngine = this.options.animationEngine.toLowerCase().replace( /[ _\-]/g, '');
      var isUsingJQueryAnimation;
      // set applyStyleFnName
      switch ( animationEngine ) {
        case 'css' :
        case 'none' :
          isUsingJQueryAnimation = false;
          break;
        case 'jquery' :
          isUsingJQueryAnimation = true;
          break;
        default : // best available
          isUsingJQueryAnimation = !Modernizr.csstransitions;
      }
      this.isUsingJQueryAnimation = isUsingJQueryAnimation;
      this._updateUsingTransforms();
    },

    _updateTransformsEnabled : function() {
      this._updateUsingTransforms();
    },

    _updateUsingTransforms : function() {
      var usingTransforms = this.usingTransforms = this.options.transformsEnabled &&
        Modernizr.csstransforms && Modernizr.csstransitions && !this.isUsingJQueryAnimation;

      // prevent scales when transforms are disabled
      if ( !usingTransforms ) {
        delete this.options.hiddenStyle.scale;
        delete this.options.visibleStyle.scale;
      }

      this.getPositionStyles = usingTransforms ? this._translate : this._positionAbs;
    },


    // ====================== Filtering ======================

    _filter : function( $atoms ) {
      var filter = this.options.filter === '' ? '*' : this.options.filter;

      if ( !filter ) {
        return $atoms;
      }

      var hiddenClass    = this.options.hiddenClass,
          hiddenSelector = '.' + hiddenClass,
          $hiddenAtoms   = $atoms.filter( hiddenSelector ),
          $atomsToShow   = $hiddenAtoms;

      if ( filter !== '*' ) {
        $atomsToShow = $hiddenAtoms.filter( filter );
        var $atomsToHide = $atoms.not( hiddenSelector ).not( filter ).addClass( hiddenClass );
        this.styleQueue.push({ $el: $atomsToHide, style: this.options.hiddenStyle });
      }

      this.styleQueue.push({ $el: $atomsToShow, style: this.options.visibleStyle });
      $atomsToShow.removeClass( hiddenClass );

      return $atoms.filter( filter );
    },

    // ====================== Sorting ======================

    updateSortData : function( $atoms, isIncrementingElemCount ) {
      var instance = this,
          getSortData = this.options.getSortData,
          $this, sortData;
      $atoms.each(function(){
        $this = $(this);
        sortData = {};
        // get value for sort data based on fn( $elem ) passed in
        for ( var key in getSortData ) {
          if ( !isIncrementingElemCount && key === 'original-order' ) {
            // keep original order original
            sortData[ key ] = $.data( this, 'isotope-sort-data' )[ key ];
          } else {
            sortData[ key ] = getSortData[ key ]( $this, instance );
          }
        }
        // apply sort data to element
        $.data( this, 'isotope-sort-data', sortData );
      });
    },

    // used on all the filtered atoms
    _sort : function() {

      var sortBy = this.options.sortBy,
          getSorter = this._getSorter,
          sortDir = this.options.sortAscending ? 1 : -1,
          sortFn = function( alpha, beta ) {
            var a = getSorter( alpha, sortBy ),
                b = getSorter( beta, sortBy );
            // fall back to original order if data matches
            if ( a === b && sortBy !== 'original-order') {
              a = getSorter( alpha, 'original-order' );
              b = getSorter( beta, 'original-order' );
            }
            return ( ( a > b ) ? 1 : ( a < b ) ? -1 : 0 ) * sortDir;
          };

      this.$filteredAtoms.sort( sortFn );
    },

    _getSorter : function( elem, sortBy ) {
      return $.data( elem, 'isotope-sort-data' )[ sortBy ];
    },

    // ====================== Layout Helpers ======================

    _translate : function( x, y ) {
      return { translate : [ x, y ] };
    },

    _positionAbs : function( x, y ) {
      return { left: x, top: y };
    },

    _pushPosition : function( $elem, x, y ) {
      x = Math.round( x + this.offset.left );
      y = Math.round( y + this.offset.top );
      var position = this.getPositionStyles( x, y );
      this.styleQueue.push({ $el: $elem, style: position });
      if ( this.options.itemPositionDataEnabled ) {
        $elem.data('isotope-item-position', {x: x, y: y} );
      }
    },


    // ====================== General Layout ======================

    // used on collection of atoms (should be filtered, and sorted before )
    // accepts atoms-to-be-laid-out to start with
    layout : function( $elems, callback ) {

      var layoutMode = this.options.layoutMode;

      // layout logic
      this[ '_' +  layoutMode + 'Layout' ]( $elems );

      // set the size of the container
      if ( this.options.resizesContainer ) {
        var containerStyle = this[ '_' +  layoutMode + 'GetContainerSize' ]();
        this.styleQueue.push({ $el: this.element, style: containerStyle });
      }

      this._processStyleQueue( $elems, callback );

      this.isLaidOut = true;
    },

    _processStyleQueue : function( $elems, callback ) {
      // are we animating the layout arrangement?
      // use plugin-ish syntax for css or animate
      var styleFn = !this.isLaidOut ? 'css' : (
            this.isUsingJQueryAnimation ? 'animate' : 'css'
          ),
          animOpts = this.options.animationOptions,
          onLayout = this.options.onLayout,
          objStyleFn, processor,
          triggerCallbackNow, callbackFn;

      // default styleQueue processor, may be overwritten down below
      processor = function( i, obj ) {
        obj.$el[ styleFn ]( obj.style, animOpts );
      };

      if ( this._isInserting && this.isUsingJQueryAnimation ) {
        // if using styleQueue to insert items
        processor = function( i, obj ) {
          // only animate if it not being inserted
          objStyleFn = obj.$el.hasClass('no-transition') ? 'css' : styleFn;
          obj.$el[ objStyleFn ]( obj.style, animOpts );
        };

      } else if ( callback || onLayout || animOpts.complete ) {
        // has callback
        var isCallbackTriggered = false,
            // array of possible callbacks to trigger
            callbacks = [ callback, onLayout, animOpts.complete ],
            instance = this;
        triggerCallbackNow = true;
        // trigger callback only once
        callbackFn = function() {
          if ( isCallbackTriggered ) {
            return;
          }
          var hollaback;
          for (var i=0, len = callbacks.length; i < len; i++) {
            hollaback = callbacks[i];
            if ( typeof hollaback === 'function' ) {
              hollaback.call( instance.element, $elems, instance );
            }
          }
          isCallbackTriggered = true;
        };

        if ( this.isUsingJQueryAnimation && styleFn === 'animate' ) {
          // add callback to animation options
          animOpts.complete = callbackFn;
          triggerCallbackNow = false;

        } else if ( Modernizr.csstransitions ) {
          // detect if first item has transition
          var i = 0,
              firstItem = this.styleQueue[0],
              testElem = firstItem && firstItem.$el,
              styleObj;
          // get first non-empty jQ object
          while ( !testElem || !testElem.length ) {
            styleObj = this.styleQueue[ i++ ];
            // HACK: sometimes styleQueue[i] is undefined
            if ( !styleObj ) {
              return;
            }
            testElem = styleObj.$el;
          }
          // get transition duration of the first element in that object
          // yeah, this is inexact
          var duration = parseFloat( getComputedStyle( testElem[0] )[ transitionDurProp ] );
          if ( duration > 0 ) {
            processor = function( i, obj ) {
              obj.$el[ styleFn ]( obj.style, animOpts )
                // trigger callback at transition end
                .one( transitionEndEvent, callbackFn );
            };
            triggerCallbackNow = false;
          }
        }
      }

      // process styleQueue
      $.each( this.styleQueue, processor );

      if ( triggerCallbackNow ) {
        callbackFn();
      }

      // clear out queue for next time
      this.styleQueue = [];
    },


    resize : function() {
      if ( this[ '_' + this.options.layoutMode + 'ResizeChanged' ]() ) {
        this.reLayout();
      }
    },


    reLayout : function( callback ) {

      this[ '_' +  this.options.layoutMode + 'Reset' ]();
      this.layout( this.$filteredAtoms, callback );

    },

    // ====================== Convenience methods ======================

    // ====================== Adding items ======================

    // adds a jQuery object of items to a isotope container
    addItems : function( $content, callback ) {
      var $newAtoms = this._getAtoms( $content );
      // add new atoms to atoms pools
      this.$allAtoms = this.$allAtoms.add( $newAtoms );

      if ( callback ) {
        callback( $newAtoms );
      }
    },

    // convienence method for adding elements properly to any layout
    // positions items, hides them, then animates them back in <--- very sezzy
    insert : function( $content, callback ) {
      // position items
      this.element.append( $content );

      var instance = this;
      this.addItems( $content, function( $newAtoms ) {
        var $newFilteredAtoms = instance._filter( $newAtoms );
        instance._addHideAppended( $newFilteredAtoms );
        instance._sort();
        instance.reLayout();
        instance._revealAppended( $newFilteredAtoms, callback );
      });

    },

    // convienence method for working with Infinite Scroll
    appended : function( $content, callback ) {
      var instance = this;
      this.addItems( $content, function( $newAtoms ) {
        instance._addHideAppended( $newAtoms );
        instance.layout( $newAtoms );
        instance._revealAppended( $newAtoms, callback );
      });
    },

    // adds new atoms, then hides them before positioning
    _addHideAppended : function( $newAtoms ) {
      this.$filteredAtoms = this.$filteredAtoms.add( $newAtoms );
      $newAtoms.addClass('no-transition');

      this._isInserting = true;

      // apply hidden styles
      this.styleQueue.push({ $el: $newAtoms, style: this.options.hiddenStyle });
    },

    // sets visible style on new atoms
    _revealAppended : function( $newAtoms, callback ) {
      var instance = this;
      // apply visible style after a sec
      setTimeout( function() {
        // enable animation
        $newAtoms.removeClass('no-transition');
        // reveal newly inserted filtered elements
        instance.styleQueue.push({ $el: $newAtoms, style: instance.options.visibleStyle });
        instance._isInserting = false;
        instance._processStyleQueue( $newAtoms, callback );
      }, 10 );
    },

    // gathers all atoms
    reloadItems : function() {
      this.$allAtoms = this._getAtoms( this.element.children() );
    },

    // removes elements from Isotope widget
    remove: function( $content, callback ) {
      // remove elements immediately from Isotope instance
      this.$allAtoms = this.$allAtoms.not( $content );
      this.$filteredAtoms = this.$filteredAtoms.not( $content );
      // remove() as a callback, for after transition / animation
      var instance = this;
      var removeContent = function() {
        $content.remove();
        if ( callback ) {
          callback.call( instance.element );
        }
      };

      if ( $content.filter( ':not(.' + this.options.hiddenClass + ')' ).length ) {
        // if any non-hidden content needs to be removed
        this.styleQueue.push({ $el: $content, style: this.options.hiddenStyle });
        this._sort();
        this.reLayout( removeContent );
      } else {
        // remove it now
        removeContent();
      }

    },

    shuffle : function( callback ) {
      this.updateSortData( this.$allAtoms );
      this.options.sortBy = 'random';
      this._sort();
      this.reLayout( callback );
    },

    // destroys widget, returns elements and container back (close) to original style
    destroy : function() {

      var usingTransforms = this.usingTransforms;
      var options = this.options;

      this.$allAtoms
        .removeClass( options.hiddenClass + ' ' + options.itemClass )
        .each(function(){
          var style = this.style;
          style.position = '';
          style.top = '';
          style.left = '';
          style.opacity = '';
          if ( usingTransforms ) {
            style[ transformProp ] = '';
          }
        });

      // re-apply saved container styles
      var elemStyle = this.element[0].style;
      for ( var prop in this.originalStyle ) {
        elemStyle[ prop ] = this.originalStyle[ prop ];
      }

      this.element
        .unbind('.isotope')
        .undelegate( '.' + options.hiddenClass, 'click' )
        .removeClass( options.containerClass )
        .removeData('isotope');

      $window.unbind('.isotope');

    },


    // ====================== LAYOUTS ======================

    // calculates number of rows or columns
    // requires columnWidth or rowHeight to be set on namespaced object
    // i.e. this.masonry.columnWidth = 200
    _getSegments : function( isRows ) {
      var namespace = this.options.layoutMode,
          measure  = isRows ? 'rowHeight' : 'columnWidth',
          size     = isRows ? 'height' : 'width',
          segmentsName = isRows ? 'rows' : 'cols',
          containerSize = this.element[ size ](),
          segments,
                    // i.e. options.masonry && options.masonry.columnWidth
          segmentSize = this.options[ namespace ] && this.options[ namespace ][ measure ] ||
                    // or use the size of the first item, i.e. outerWidth
                    this.$filteredAtoms[ 'outer' + capitalize(size) ](true) ||
                    // if there's no items, use size of container
                    containerSize;

      segments = Math.floor( containerSize / segmentSize );
      segments = Math.max( segments, 1 );

      // i.e. this.masonry.cols = ....
      this[ namespace ][ segmentsName ] = segments;
      // i.e. this.masonry.columnWidth = ...
      this[ namespace ][ measure ] = segmentSize;

    },

    _checkIfSegmentsChanged : function( isRows ) {
      var namespace = this.options.layoutMode,
          segmentsName = isRows ? 'rows' : 'cols',
          prevSegments = this[ namespace ][ segmentsName ];
      // update cols/rows
      this._getSegments( isRows );
      // return if updated cols/rows is not equal to previous
      return ( this[ namespace ][ segmentsName ] !== prevSegments );
    },

    // ====================== Masonry ======================

    _masonryReset : function() {
      // layout-specific props
      this.masonry = {};
      // FIXME shouldn't have to call this again
      this._getSegments();
      var i = this.masonry.cols;
      this.masonry.colYs = [];
      while (i--) {
        this.masonry.colYs.push( 0 );
      }
    },

    _masonryLayout : function( $elems ) {
      var instance = this,
          props = instance.masonry;
      $elems.each(function(){
        var $this  = $(this),
            //how many columns does this brick span
            colSpan = Math.ceil( $this.outerWidth(true) / props.columnWidth );
        colSpan = Math.min( colSpan, props.cols );

        if ( colSpan === 1 ) {
          // if brick spans only one column, just like singleMode
          instance._masonryPlaceBrick( $this, props.colYs );
        } else {
          // brick spans more than one column
          // how many different places could this brick fit horizontally
          var groupCount = props.cols + 1 - colSpan,
              groupY = [],
              groupColY,
              i;

          // for each group potential horizontal position
          for ( i=0; i < groupCount; i++ ) {
            // make an array of colY values for that one group
            groupColY = props.colYs.slice( i, i+colSpan );
            // and get the max value of the array
            groupY[i] = Math.max.apply( Math, groupColY );
          }

          instance._masonryPlaceBrick( $this, groupY );
        }
      });
    },

    // worker method that places brick in the columnSet
    //   with the the minY
    _masonryPlaceBrick : function( $brick, setY ) {
      // get the minimum Y value from the columns
      var minimumY = Math.min.apply( Math, setY ),
          shortCol = 0;

      // Find index of short column, the first from the left
      for (var i=0, len = setY.length; i < len; i++) {
        if ( setY[i] === minimumY ) {
          shortCol = i;
          break;
        }
      }

      // position the brick
      var x = this.masonry.columnWidth * shortCol,
          y = minimumY;
      this._pushPosition( $brick, x, y );

      // apply setHeight to necessary columns
      var setHeight = minimumY + $brick.outerHeight(true),
          setSpan = this.masonry.cols + 1 - len;
      for ( i=0; i < setSpan; i++ ) {
        this.masonry.colYs[ shortCol + i ] = setHeight;
      }

    },

    _masonryGetContainerSize : function() {
      var containerHeight = Math.max.apply( Math, this.masonry.colYs );
      return { height: containerHeight };
    },

    _masonryResizeChanged : function() {
      return this._checkIfSegmentsChanged();
    },

    // ====================== fitRows ======================

    _fitRowsReset : function() {
      this.fitRows = {
        x : 0,
        y : 0,
        height : 0
      };
    },

    _fitRowsLayout : function( $elems ) {
      var instance = this,
          containerWidth = this.element.width(),
          props = this.fitRows;

      $elems.each( function() {
        var $this = $(this),
            atomW = $this.outerWidth(true),
            atomH = $this.outerHeight(true);

        if ( props.x !== 0 && atomW + props.x > containerWidth ) {
          // if this element cannot fit in the current row
          props.x = 0;
          props.y = props.height;
        }

        // position the atom
        instance._pushPosition( $this, props.x, props.y );

        props.height = Math.max( props.y + atomH, props.height );
        props.x += atomW;

      });
    },

    _fitRowsGetContainerSize : function () {
      return { height : this.fitRows.height };
    },

    _fitRowsResizeChanged : function() {
      return true;
    },


    // ====================== cellsByRow ======================

    _cellsByRowReset : function() {
      this.cellsByRow = {
        index : 0
      };
      // get this.cellsByRow.columnWidth
      this._getSegments();
      // get this.cellsByRow.rowHeight
      this._getSegments(true);
    },

    _cellsByRowLayout : function( $elems ) {
      var instance = this,
          props = this.cellsByRow;
      $elems.each( function(){
        var $this = $(this),
            col = props.index % props.cols,
            row = Math.floor( props.index / props.cols ),
            x = ( col + 0.5 ) * props.columnWidth - $this.outerWidth(true) / 2,
            y = ( row + 0.5 ) * props.rowHeight - $this.outerHeight(true) / 2;
        instance._pushPosition( $this, x, y );
        props.index ++;
      });
    },

    _cellsByRowGetContainerSize : function() {
      return { height : Math.ceil( this.$filteredAtoms.length / this.cellsByRow.cols ) * this.cellsByRow.rowHeight + this.offset.top };
    },

    _cellsByRowResizeChanged : function() {
      return this._checkIfSegmentsChanged();
    },


    // ====================== straightDown ======================

    _straightDownReset : function() {
      this.straightDown = {
        y : 0
      };
    },

    _straightDownLayout : function( $elems ) {
      var instance = this;
      $elems.each( function( i ){
        var $this = $(this);
        instance._pushPosition( $this, 0, instance.straightDown.y );
        instance.straightDown.y += $this.outerHeight(true);
      });
    },

    _straightDownGetContainerSize : function() {
      return { height : this.straightDown.y };
    },

    _straightDownResizeChanged : function() {
      return true;
    },


    // ====================== masonryHorizontal ======================

    _masonryHorizontalReset : function() {
      // layout-specific props
      this.masonryHorizontal = {};
      // FIXME shouldn't have to call this again
      this._getSegments( true );
      var i = this.masonryHorizontal.rows;
      this.masonryHorizontal.rowXs = [];
      while (i--) {
        this.masonryHorizontal.rowXs.push( 0 );
      }
    },

    _masonryHorizontalLayout : function( $elems ) {
      var instance = this,
          props = instance.masonryHorizontal;
      $elems.each(function(){
        var $this  = $(this),
            //how many rows does this brick span
            rowSpan = Math.ceil( $this.outerHeight(true) / props.rowHeight );
        rowSpan = Math.min( rowSpan, props.rows );

        if ( rowSpan === 1 ) {
          // if brick spans only one column, just like singleMode
          instance._masonryHorizontalPlaceBrick( $this, props.rowXs );
        } else {
          // brick spans more than one row
          // how many different places could this brick fit horizontally
          var groupCount = props.rows + 1 - rowSpan,
              groupX = [],
              groupRowX, i;

          // for each group potential horizontal position
          for ( i=0; i < groupCount; i++ ) {
            // make an array of colY values for that one group
            groupRowX = props.rowXs.slice( i, i+rowSpan );
            // and get the max value of the array
            groupX[i] = Math.max.apply( Math, groupRowX );
          }

          instance._masonryHorizontalPlaceBrick( $this, groupX );
        }
      });
    },

    _masonryHorizontalPlaceBrick : function( $brick, setX ) {
      // get the minimum Y value from the columns
      var minimumX  = Math.min.apply( Math, setX ),
          smallRow  = 0;
      // Find index of smallest row, the first from the top
      for (var i=0, len = setX.length; i < len; i++) {
        if ( setX[i] === minimumX ) {
          smallRow = i;
          break;
        }
      }

      // position the brick
      var x = minimumX,
          y = this.masonryHorizontal.rowHeight * smallRow;
      this._pushPosition( $brick, x, y );

      // apply setHeight to necessary columns
      var setWidth = minimumX + $brick.outerWidth(true),
          setSpan = this.masonryHorizontal.rows + 1 - len;
      for ( i=0; i < setSpan; i++ ) {
        this.masonryHorizontal.rowXs[ smallRow + i ] = setWidth;
      }
    },

    _masonryHorizontalGetContainerSize : function() {
      var containerWidth = Math.max.apply( Math, this.masonryHorizontal.rowXs );
      return { width: containerWidth };
    },

    _masonryHorizontalResizeChanged : function() {
      return this._checkIfSegmentsChanged(true);
    },


    // ====================== fitColumns ======================

    _fitColumnsReset : function() {
      this.fitColumns = {
        x : 0,
        y : 0,
        width : 0
      };
    },

    _fitColumnsLayout : function( $elems ) {
      var instance = this,
          containerHeight = this.element.height(),
          props = this.fitColumns;
      $elems.each( function() {
        var $this = $(this),
            atomW = $this.outerWidth(true),
            atomH = $this.outerHeight(true);

        if ( props.y !== 0 && atomH + props.y > containerHeight ) {
          // if this element cannot fit in the current column
          props.x = props.width;
          props.y = 0;
        }

        // position the atom
        instance._pushPosition( $this, props.x, props.y );

        props.width = Math.max( props.x + atomW, props.width );
        props.y += atomH;

      });
    },

    _fitColumnsGetContainerSize : function () {
      return { width : this.fitColumns.width };
    },

    _fitColumnsResizeChanged : function() {
      return true;
    },



    // ====================== cellsByColumn ======================

    _cellsByColumnReset : function() {
      this.cellsByColumn = {
        index : 0
      };
      // get this.cellsByColumn.columnWidth
      this._getSegments();
      // get this.cellsByColumn.rowHeight
      this._getSegments(true);
    },

    _cellsByColumnLayout : function( $elems ) {
      var instance = this,
          props = this.cellsByColumn;
      $elems.each( function(){
        var $this = $(this),
            col = Math.floor( props.index / props.rows ),
            row = props.index % props.rows,
            x = ( col + 0.5 ) * props.columnWidth - $this.outerWidth(true) / 2,
            y = ( row + 0.5 ) * props.rowHeight - $this.outerHeight(true) / 2;
        instance._pushPosition( $this, x, y );
        props.index ++;
      });
    },

    _cellsByColumnGetContainerSize : function() {
      return { width : Math.ceil( this.$filteredAtoms.length / this.cellsByColumn.rows ) * this.cellsByColumn.columnWidth };
    },

    _cellsByColumnResizeChanged : function() {
      return this._checkIfSegmentsChanged(true);
    },

    // ====================== straightAcross ======================

    _straightAcrossReset : function() {
      this.straightAcross = {
        x : 0
      };
    },

    _straightAcrossLayout : function( $elems ) {
      var instance = this;
      $elems.each( function( i ){
        var $this = $(this);
        instance._pushPosition( $this, instance.straightAcross.x, 0 );
        instance.straightAcross.x += $this.outerWidth(true);
      });
    },

    _straightAcrossGetContainerSize : function() {
      return { width : this.straightAcross.x };
    },

    _straightAcrossResizeChanged : function() {
      return true;
    }

  };


  // ======================= imagesLoaded Plugin ===============================
  /*!
   * jQuery imagesLoaded plugin v1.1.0
   * http://github.com/desandro/imagesloaded
   *
   * MIT License. by Paul Irish et al.
   */


  // $('#my-container').imagesLoaded(myFunction)
  // or
  // $('img').imagesLoaded(myFunction)

  // execute a callback when all images have loaded.
  // needed because .load() doesn't work on cached images

  // callback function gets image collection as argument
  //  `this` is the container

  $.fn.imagesLoaded = function( callback ) {
    var $this = this,
        $images = $this.find('img').add( $this.filter('img') ),
        len = $images.length,
        blank = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
        loaded = [];

    function triggerCallback() {
      callback.call( $this, $images );
    }

    function imgLoaded( event ) {
      var img = event.target;
      if ( img.src !== blank && $.inArray( img, loaded ) === -1 ){
        loaded.push( img );
        if ( --len <= 0 ){
          setTimeout( triggerCallback );
          $images.unbind( '.imagesLoaded', imgLoaded );
        }
      }
    }

    // if no images, trigger immediately
    if ( !len ) {
      triggerCallback();
    }

    $images.bind( 'load.imagesLoaded error.imagesLoaded',  imgLoaded ).each( function() {
      // cached images don't fire load sometimes, so we reset src.
      var src = this.src;
      // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
      // data uri bypasses webkit log warning (thx doug jones)
      this.src = blank;
      this.src = src;
    });

    return $this;
  };


  // helper function for logging errors
  // $.error breaks jQuery chaining
  var logError = function( message ) {
    if ( window.console ) {
      window.console.error( message );
    }
  };

  // =======================  Plugin bridge  ===============================
  // leverages data method to either create or return $.Isotope constructor
  // A bit from jQuery UI
  //   https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.widget.js
  // A bit from jcarousel
  //   https://github.com/jsor/jcarousel/blob/master/lib/jquery.jcarousel.js

  $.fn.isotope = function( options, callback ) {
    if ( typeof options === 'string' ) {
      // call method
      var args = Array.prototype.slice.call( arguments, 1 );

      this.each(function(){
        var instance = $.data( this, 'isotope' );
        if ( !instance ) {
          logError( "cannot call methods on isotope prior to initialization; " +
              "attempted to call method '" + options + "'" );
          return;
        }
        if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
          logError( "no such method '" + options + "' for isotope instance" );
          return;
        }
        // apply method
        instance[ options ].apply( instance, args );
      });
    } else {
      this.each(function() {
        var instance = $.data( this, 'isotope' );
        if ( instance ) {
          // apply options & init
          instance.option( options );
          instance._init( callback );
        } else {
          // initialize new instance
          $.data( this, 'isotope', new $.Isotope( options, this, callback ) );
        }
      });
    }
    // return jQuery object
    // so plugin methods do not have to
    return this;
  };

})( window, jQuery );;/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.6
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        version: '3.1.6',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );
        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

}));;(function() {
  /**
   * From: http://code.this.com/mobile/articles/fast_buttons.html
   * Also see: http://stackoverflow.com/questions/6300136/trying-to-implement-googles-fast-button
   */

  /** For IE8 and earlier compatibility: https://developer.mozilla.org/en/DOM/element.addEventListener */
  function addListener(el, type, listener, useCapture) {
    if (el.addEventListener) {
      el.addEventListener(type, listener, useCapture);
      return {
        destroy: function() { el.removeEventListener(type, listener, useCapture); }
      };
    } else {
      // see: http://stackoverflow.com/questions/5198845/javascript-this-losing-context-in-ie
      var handler = function(e) { listener.handleEvent(window.event, listener); }
      el.attachEvent('on' + type, handler);

      return {
        destroy: function() { el.detachEvent('on' + type, handler); }
      };
    }
  }

  var isTouch = "ontouchstart" in window;

  /* Construct the FastButton with a reference to the element and click handler. */
  this.FastButton = function(element, handler, useCapture) {
    // collect functions to call to cleanup events
    this.events = [];
    this.touchEvents = [];
    this.element = element;
    this.handler = handler;
    this.useCapture = useCapture;
    if (isTouch)
      this.events.push(addListener(element, 'touchstart', this, this.useCapture));
    this.events.push(addListener(element, 'click', this, this.useCapture));
  };

  /* Remove event handling when no longer needed for this button */
  this.FastButton.prototype.destroy = function() {
    for (i = this.events.length - 1; i >= 0; i -= 1)
      this.events[i].destroy();
    this.events = this.touchEvents = this.element = this.handler = this.fastButton = null;
  };

  /* acts as an event dispatcher */
  this.FastButton.prototype.handleEvent = function(event) {
    switch (event.type) {
      case 'touchstart': this.onTouchStart(event); break;
      case 'touchmove': this.onTouchMove(event); break;
      case 'touchend': this.onClick(event); break;
      case 'click': this.onClick(event); break;
    }
  };

  /* Save a reference to the touchstart coordinate and start listening to touchmove and
   touchend events. Calling stopPropagation guarantees that other behaviors don’t get a
   chance to handle the same click event. This is executed at the beginning of touch. */
  this.FastButton.prototype.onTouchStart = function(event) {
    this.touchEvents.push(addListener(this.element, 'touchend', this, this.useCapture));
    this.touchEvents.push(addListener(document.body, 'touchmove', this, this.useCapture));
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
  };

  /* When /if touchmove event is invoked, check if the user has dragged past the threshold of 10px. */
  this.FastButton.prototype.onTouchMove = function(event) {
    if (Math.abs(event.touches[0].clientX - this.startX) > 10 || Math.abs(event.touches[0].clientY - this.startY) > 10) {
      this.reset(); //if he did, then cancel the touch event
    }
  };

  /* Invoke the actual click handler and prevent ghost clicks if this was a touchend event. */
  this.FastButton.prototype.onClick = function(event) {
    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
    this.reset();
    // Use .call to call the method so that we have the correct "this": https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/call
    var result = this.handler.call(this.element, event);
    if (event.type == 'touchend')
      clickbuster.preventGhostClick(this.startX, this.startY);
    return result;
  };

  this.FastButton.prototype.reset = function() {
    for (i = this.touchEvents.length - 1; i >= 0; i -= 1)
      this.touchEvents[i].destroy();
    this.touchEvents = [];
  };

  this.clickbuster = function() {}

  /* Call preventGhostClick to bust all click events that happen within 25px of
   the provided x, y coordinates in the next 2.5s. */
  this.clickbuster.preventGhostClick = function(x, y) {
    clickbuster.coordinates.push(x, y);
    window.setTimeout(clickbuster.pop, 2500);
  };

  this.clickbuster.pop = function() {
    clickbuster.coordinates.splice(0, 2);
  };

  /* If we catch a click event inside the given radius and time threshold then we call
   stopPropagation and preventDefault. Calling preventDefault will stop links
   from being activated. */
  this.clickbuster.onClick = function(event) {
    for (var i = 0; i < clickbuster.coordinates.length; i += 2) {
      var x = clickbuster.coordinates[i];
      var y = clickbuster.coordinates[i + 1];
      if (Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
        event.preventDefault ? event.preventDefault() : (event.returnValue=false);
      }
    }
  };

  if (isTouch) {
    // Don't need to use our custom addListener function since we only bust clicks on touch devices
    document.addEventListener('click', clickbuster.onClick, true);
    clickbuster.coordinates = [];
  }
})(this);


(function($) {
  $.event.special.fastClick = {
    setup: function () {
        $(this).data('fastClick', new FastButton(this, $.event.special.fastClick.handler));
    },
    teardown: function () {
       $(this).data('fastClick').destroy();
       $(this).removeData('fastClick');
    },
    handler: function (e) {
      // convert native event to jquery event
      e = $.event.fix(e);
      e.type = 'fastClick';

      /*
      event.handle is deprecated and removed as of version 1.9
      use event.dispatch instead,
      $.event.handle.apply(this, arguments);
      */
      $.event.dispatch.apply(this, arguments);
    }
  };

  $.fn.fastClick = function(fn) {
    return $(this).each(function() {
      return fn ? $(this).bind("fastClick", fn) : $(this).trigger("fastClick");
    });
  };
}(jQuery));
;/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(window, undefined) {
    'use strict';

/**
 * Hammer
 * use this to create instances
 * @param   {HTMLElement}   element
 * @param   {Object}        options
 * @returns {Hammer.Instance}
 * @constructor
 */
var Hammer = function(element, options) {
    return new Hammer.Instance(element, options || {});
};

// default settings
Hammer.defaults = {
    // add styles and attributes to the element to prevent the browser from doing
    // its native behavior. this doesnt prevent the scrolling, but cancels
    // the contextmenu, tap highlighting etc
    // set to false to disable this
    stop_browser_behavior: {
    // this also triggers onselectstart=false for IE
        userSelect: 'none',
    // this makes the element blocking in IE10 >, you could experiment with the value
    // see for more options this issue; https://github.com/EightMedia/hammer.js/issues/241
        touchAction: 'none',
    touchCallout: 'none',
        contentZooming: 'none',
        userDrag: 'none',
        tapHighlightColor: 'rgba(0,0,0,0)'
    }

    // more settings are defined per gesture at gestures.js
};

// detect touchevents
Hammer.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled;
Hammer.HAS_TOUCHEVENTS = ('ontouchstart' in window);

// dont use mouseevents on mobile devices
Hammer.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
Hammer.NO_MOUSEEVENTS = Hammer.HAS_TOUCHEVENTS && navigator.userAgent.match(Hammer.MOBILE_REGEX);

// eventtypes per touchevent (start, move, end)
// are filled by Hammer.event.determineEventTypes on setup
Hammer.EVENT_TYPES = {};

// direction defines
Hammer.DIRECTION_DOWN = 'down';
Hammer.DIRECTION_LEFT = 'left';
Hammer.DIRECTION_UP = 'up';
Hammer.DIRECTION_RIGHT = 'right';

// pointer type
Hammer.POINTER_MOUSE = 'mouse';
Hammer.POINTER_TOUCH = 'touch';
Hammer.POINTER_PEN = 'pen';

// touch event defines
Hammer.EVENT_START = 'start';
Hammer.EVENT_MOVE = 'move';
Hammer.EVENT_END = 'end';

// hammer document where the base events are added at
Hammer.DOCUMENT = document;

// plugins namespace
Hammer.plugins = {};

// if the window events are set...
Hammer.READY = false;

/**
 * setup events to detect gestures on the document
 */
function setup() {
    if(Hammer.READY) {
        return;
    }

    // find what eventtypes we add listeners to
    Hammer.event.determineEventTypes();

    // Register all gestures inside Hammer.gestures
    for(var name in Hammer.gestures) {
        if(Hammer.gestures.hasOwnProperty(name)) {
            Hammer.detection.register(Hammer.gestures[name]);
        }
    }

    // Add touch events on the document
    Hammer.event.onTouch(Hammer.DOCUMENT, Hammer.EVENT_MOVE, Hammer.detection.detect);
    Hammer.event.onTouch(Hammer.DOCUMENT, Hammer.EVENT_END, Hammer.detection.detect);

    // Hammer is ready...!
    Hammer.READY = true;
}

/**
 * create new hammer instance
 * all methods should return the instance itself, so it is chainable.
 * @param   {HTMLElement}       element
 * @param   {Object}            [options={}]
 * @returns {Hammer.Instance}
 * @constructor
 */
Hammer.Instance = function(element, options) {
    var self = this;

    // setup HammerJS window events and register all gestures
    // this also sets up the default options
    setup();

    this.element = element;

    // start/stop detection option
    this.enabled = true;

    // merge options
    this.options = Hammer.utils.extend(
        Hammer.utils.extend({}, Hammer.defaults),
        options || {});

    // add some css to the element to prevent the browser from doing its native behavoir
    if(this.options.stop_browser_behavior) {
        Hammer.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior);
    }

    // start detection on touchstart
    Hammer.event.onTouch(element, Hammer.EVENT_START, function(ev) {
        if(self.enabled) {
            Hammer.detection.startDetect(self, ev);
        }
    });

    // return instance
    return this;
};


Hammer.Instance.prototype = {
    /**
     * bind events to the instance
     * @param   {String}      gesture
     * @param   {Function}    handler
     * @returns {Hammer.Instance}
     */
    on: function onEvent(gesture, handler){
        var gestures = gesture.split(' ');
        for(var t=0; t<gestures.length; t++) {
            this.element.addEventListener(gestures[t], handler, false);
        }
        return this;
    },


    /**
     * unbind events to the instance
     * @param   {String}      gesture
     * @param   {Function}    handler
     * @returns {Hammer.Instance}
     */
    off: function offEvent(gesture, handler){
        var gestures = gesture.split(' ');
        for(var t=0; t<gestures.length; t++) {
            this.element.removeEventListener(gestures[t], handler, false);
        }
        return this;
    },


    /**
     * trigger gesture event
     * @param   {String}      gesture
     * @param   {Object}      eventData
     * @returns {Hammer.Instance}
     */
    trigger: function triggerEvent(gesture, eventData){
        // create DOM event
        var event = Hammer.DOCUMENT.createEvent('Event');
    event.initEvent(gesture, true, true);
    event.gesture = eventData;

        // trigger on the target if it is in the instance element,
        // this is for event delegation tricks
        var element = this.element;
        if(Hammer.utils.hasParent(eventData.target, element)) {
            element = eventData.target;
        }

        element.dispatchEvent(event);
        return this;
    },


    /**
     * enable of disable hammer.js detection
     * @param   {Boolean}   state
     * @returns {Hammer.Instance}
     */
    enable: function enable(state) {
        this.enabled = state;
        return this;
    }
};

/**
 * this holds the last move event,
 * used to fix empty touchend issue
 * see the onTouch event for an explanation
 * @type {Object}
 */
var last_move_event = null;


/**
 * when the mouse is hold down, this is true
 * @type {Boolean}
 */
var enable_detect = false;


/**
 * when touch events have been fired, this is true
 * @type {Boolean}
 */
var touch_triggered = false;


Hammer.event = {
    /**
     * simple addEventListener
     * @param   {HTMLElement}   element
     * @param   {String}        type
     * @param   {Function}      handler
     */
    bindDom: function(element, type, handler) {
        var types = type.split(' ');
        for(var t=0; t<types.length; t++) {
            element.addEventListener(types[t], handler, false);
        }
    },


    /**
     * touch events with mouse fallback
     * @param   {HTMLElement}   element
     * @param   {String}        eventType        like Hammer.EVENT_MOVE
     * @param   {Function}      handler
     */
    onTouch: function onTouch(element, eventType, handler) {
    var self = this;

        this.bindDom(element, Hammer.EVENT_TYPES[eventType], function bindDomOnTouch(ev) {
            var sourceEventType = ev.type.toLowerCase();

            // onmouseup, but when touchend has been fired we do nothing.
            // this is for touchdevices which also fire a mouseup on touchend
            if(sourceEventType.match(/mouse/) && touch_triggered) {
                return;
            }

            // mousebutton must be down or a touch event
            else if( sourceEventType.match(/touch/) ||   // touch events are always on screen
                sourceEventType.match(/pointerdown/) || // pointerevents touch
                (sourceEventType.match(/mouse/) && ev.which === 1)   // mouse is pressed
            ){
                enable_detect = true;
            }

            // we are in a touch event, set the touch triggered bool to true,
            // this for the conflicts that may occur on ios and android
            if(sourceEventType.match(/touch|pointer/)) {
                touch_triggered = true;
            }

            // count the total touches on the screen
            var count_touches = 0;

            // when touch has been triggered in this detection session
            // and we are now handling a mouse event, we stop that to prevent conflicts
            if(enable_detect) {
                // update pointerevent
                if(Hammer.HAS_POINTEREVENTS && eventType != Hammer.EVENT_END) {
                    count_touches = Hammer.PointerEvent.updatePointer(eventType, ev);
                }
                // touch
                else if(sourceEventType.match(/touch/)) {
                    count_touches = ev.touches.length;
                }
                // mouse
                else if(!touch_triggered) {
                    count_touches = sourceEventType.match(/up/) ? 0 : 1;
                }

                // if we are in a end event, but when we remove one touch and
                // we still have enough, set eventType to move
                if(count_touches > 0 && eventType == Hammer.EVENT_END) {
                    eventType = Hammer.EVENT_MOVE;
                }
                // no touches, force the end event
                else if(!count_touches) {
                    eventType = Hammer.EVENT_END;
                }

                // because touchend has no touches, and we often want to use these in our gestures,
                // we send the last move event as our eventData in touchend
                if(!count_touches && last_move_event !== null) {
                    ev = last_move_event;
                }
                // store the last move event
                else {
                    last_move_event = ev;
                }

                // trigger the handler
                handler.call(Hammer.detection, self.collectEventData(element, eventType, ev));

                // remove pointerevent from list
                if(Hammer.HAS_POINTEREVENTS && eventType == Hammer.EVENT_END) {
                    count_touches = Hammer.PointerEvent.updatePointer(eventType, ev);
                }
            }

            //debug(sourceEventType +" "+ eventType);

            // on the end we reset everything
            if(!count_touches) {
                last_move_event = null;
                enable_detect = false;
                touch_triggered = false;
                Hammer.PointerEvent.reset();
            }
        });
    },


    /**
     * we have different events for each device/browser
     * determine what we need and set them in the Hammer.EVENT_TYPES constant
     */
    determineEventTypes: function determineEventTypes() {
        // determine the eventtype we want to set
        var types;

        // pointerEvents magic
        if(Hammer.HAS_POINTEREVENTS) {
            types = Hammer.PointerEvent.getEvents();
        }
        // on Android, iOS, blackberry, windows mobile we dont want any mouseevents
        else if(Hammer.NO_MOUSEEVENTS) {
            types = [
                'touchstart',
                'touchmove',
                'touchend touchcancel'];
        }
        // for non pointer events browsers and mixed browsers,
        // like chrome on windows8 touch laptop
        else {
            types = [
                'touchstart mousedown',
                'touchmove mousemove',
                'touchend touchcancel mouseup'];
        }

        Hammer.EVENT_TYPES[Hammer.EVENT_START]  = types[0];
        Hammer.EVENT_TYPES[Hammer.EVENT_MOVE]   = types[1];
        Hammer.EVENT_TYPES[Hammer.EVENT_END]    = types[2];
    },


    /**
     * create touchlist depending on the event
     * @param   {Object}    ev
     * @param   {String}    eventType   used by the fakemultitouch plugin
     */
    getTouchList: function getTouchList(ev/*, eventType*/) {
        // get the fake pointerEvent touchlist
        if(Hammer.HAS_POINTEREVENTS) {
            return Hammer.PointerEvent.getTouchList();
        }
        // get the touchlist
        else if(ev.touches) {
            return ev.touches;
        }
        // make fake touchlist from mouse position
        else {
            return [{
                identifier: 1,
                pageX: ev.pageX,
                pageY: ev.pageY,
                target: ev.target
            }];
        }
    },


    /**
     * collect event data for Hammer js
     * @param   {HTMLElement}   element
     * @param   {String}        eventType        like Hammer.EVENT_MOVE
     * @param   {Object}        eventData
     */
    collectEventData: function collectEventData(element, eventType, ev) {
        var touches = this.getTouchList(ev, eventType);

        // find out pointerType
        var pointerType = Hammer.POINTER_TOUCH;
        if(ev.type.match(/mouse/) || Hammer.PointerEvent.matchType(Hammer.POINTER_MOUSE, ev)) {
            pointerType = Hammer.POINTER_MOUSE;
        }

        return {
            center      : Hammer.utils.getCenter(touches),
            timeStamp   : new Date().getTime(),
            target      : ev.target,
            touches     : touches,
            eventType   : eventType,
            pointerType : pointerType,
            srcEvent    : ev,

            /**
             * prevent the browser default actions
             * mostly used to disable scrolling of the browser
             */
            preventDefault: function() {
                if(this.srcEvent.preventManipulation) {
                    this.srcEvent.preventManipulation();
                }

                if(this.srcEvent.preventDefault) {
                    this.srcEvent.preventDefault();
                }
            },

            /**
             * stop bubbling the event up to its parents
             */
            stopPropagation: function() {
                this.srcEvent.stopPropagation();
            },

            /**
             * immediately stop gesture detection
             * might be useful after a swipe was detected
             * @return {*}
             */
            stopDetect: function() {
                return Hammer.detection.stopDetect();
            }
        };
    }
};

Hammer.PointerEvent = {
    /**
     * holds all pointers
     * @type {Object}
     */
    pointers: {},

    /**
     * get a list of pointers
     * @returns {Array}     touchlist
     */
    getTouchList: function() {
        var self = this;
        var touchlist = [];

        // we can use forEach since pointerEvents only is in IE10
        Object.keys(self.pointers).sort().forEach(function(id) {
            touchlist.push(self.pointers[id]);
        });
        return touchlist;
    },

    /**
     * update the position of a pointer
     * @param   {String}   type             Hammer.EVENT_END
     * @param   {Object}   pointerEvent
     */
    updatePointer: function(type, pointerEvent) {
        if(type == Hammer.EVENT_END) {
            this.pointers = {};
        }
        else {
            pointerEvent.identifier = pointerEvent.pointerId;
            this.pointers[pointerEvent.pointerId] = pointerEvent;
        }

        return Object.keys(this.pointers).length;
    },

    /**
     * check if ev matches pointertype
     * @param   {String}        pointerType     Hammer.POINTER_MOUSE
     * @param   {PointerEvent}  ev
     */
    matchType: function(pointerType, ev) {
        if(!ev.pointerType) {
            return false;
        }

        var types = {};
        types[Hammer.POINTER_MOUSE] = (ev.pointerType == ev.MSPOINTER_TYPE_MOUSE || ev.pointerType == Hammer.POINTER_MOUSE);
        types[Hammer.POINTER_TOUCH] = (ev.pointerType == ev.MSPOINTER_TYPE_TOUCH || ev.pointerType == Hammer.POINTER_TOUCH);
        types[Hammer.POINTER_PEN] = (ev.pointerType == ev.MSPOINTER_TYPE_PEN || ev.pointerType == Hammer.POINTER_PEN);
        return types[pointerType];
    },


    /**
     * get events
     */
    getEvents: function() {
        return [
            'pointerdown MSPointerDown',
            'pointermove MSPointerMove',
            'pointerup pointercancel MSPointerUp MSPointerCancel'
        ];
    },

    /**
     * reset the list
     */
    reset: function() {
        this.pointers = {};
    }
};


Hammer.utils = {
    /**
     * extend method,
     * also used for cloning when dest is an empty object
     * @param   {Object}    dest
     * @param   {Object}    src
   * @parm  {Boolean} merge   do a merge
     * @returns {Object}    dest
     */
    extend: function extend(dest, src, merge) {
        for (var key in src) {
      if(dest[key] !== undefined && merge) {
        continue;
      }
            dest[key] = src[key];
        }
        return dest;
    },


    /**
     * find if a node is in the given parent
     * used for event delegation tricks
     * @param   {HTMLElement}   node
     * @param   {HTMLElement}   parent
     * @returns {boolean}       has_parent
     */
    hasParent: function(node, parent) {
        while(node){
            if(node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    },


    /**
     * get the center of all the touches
     * @param   {Array}     touches
     * @returns {Object}    center
     */
    getCenter: function getCenter(touches) {
        var valuesX = [], valuesY = [];

        for(var t= 0,len=touches.length; t<len; t++) {
            valuesX.push(touches[t].pageX);
            valuesY.push(touches[t].pageY);
        }

        return {
            pageX: ((Math.min.apply(Math, valuesX) + Math.max.apply(Math, valuesX)) / 2),
            pageY: ((Math.min.apply(Math, valuesY) + Math.max.apply(Math, valuesY)) / 2)
        };
    },


    /**
     * calculate the velocity between two points
     * @param   {Number}    delta_time
     * @param   {Number}    delta_x
     * @param   {Number}    delta_y
     * @returns {Object}    velocity
     */
    getVelocity: function getVelocity(delta_time, delta_x, delta_y) {
        return {
            x: Math.abs(delta_x / delta_time) || 0,
            y: Math.abs(delta_y / delta_time) || 0
        };
    },


    /**
     * calculate the angle between two coordinates
     * @param   {Touch}     touch1
     * @param   {Touch}     touch2
     * @returns {Number}    angle
     */
    getAngle: function getAngle(touch1, touch2) {
        var y = touch2.pageY - touch1.pageY,
            x = touch2.pageX - touch1.pageX;
        return Math.atan2(y, x) * 180 / Math.PI;
    },


    /**
     * angle to direction define
     * @param   {Touch}     touch1
     * @param   {Touch}     touch2
     * @returns {String}    direction constant, like Hammer.DIRECTION_LEFT
     */
    getDirection: function getDirection(touch1, touch2) {
        var x = Math.abs(touch1.pageX - touch2.pageX),
            y = Math.abs(touch1.pageY - touch2.pageY);

        if(x >= y) {
            return touch1.pageX - touch2.pageX > 0 ? Hammer.DIRECTION_LEFT : Hammer.DIRECTION_RIGHT;
        }
        else {
            return touch1.pageY - touch2.pageY > 0 ? Hammer.DIRECTION_UP : Hammer.DIRECTION_DOWN;
        }
    },


    /**
     * calculate the distance between two touches
     * @param   {Touch}     touch1
     * @param   {Touch}     touch2
     * @returns {Number}    distance
     */
    getDistance: function getDistance(touch1, touch2) {
        var x = touch2.pageX - touch1.pageX,
            y = touch2.pageY - touch1.pageY;
        return Math.sqrt((x*x) + (y*y));
    },


    /**
     * calculate the scale factor between two touchLists (fingers)
     * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
     * @param   {Array}     start
     * @param   {Array}     end
     * @returns {Number}    scale
     */
    getScale: function getScale(start, end) {
        // need two fingers...
        if(start.length >= 2 && end.length >= 2) {
            return this.getDistance(end[0], end[1]) /
                this.getDistance(start[0], start[1]);
        }
        return 1;
    },


    /**
     * calculate the rotation degrees between two touchLists (fingers)
     * @param   {Array}     start
     * @param   {Array}     end
     * @returns {Number}    rotation
     */
    getRotation: function getRotation(start, end) {
        // need two fingers
        if(start.length >= 2 && end.length >= 2) {
            return this.getAngle(end[1], end[0]) -
                this.getAngle(start[1], start[0]);
        }
        return 0;
    },


    /**
     * boolean if the direction is vertical
     * @param    {String}    direction
     * @returns  {Boolean}   is_vertical
     */
    isVertical: function isVertical(direction) {
        return (direction == Hammer.DIRECTION_UP || direction == Hammer.DIRECTION_DOWN);
    },


    /**
     * stop browser default behavior with css props
     * @param   {HtmlElement}   element
     * @param   {Object}        css_props
     */
    stopDefaultBrowserBehavior: function stopDefaultBrowserBehavior(element, css_props) {
        var prop,
            vendors = ['webkit','khtml','moz','ms','o',''];

        if(!css_props || !element.style) {
            return;
        }

        // with css properties for modern browsers
        for(var i = 0; i < vendors.length; i++) {
            for(var p in css_props) {
                if(css_props.hasOwnProperty(p)) {
                    prop = p;

                    // vender prefix at the property
                    if(vendors[i]) {
                        prop = vendors[i] + prop.substring(0, 1).toUpperCase() + prop.substring(1);
                    }

                    // set the style
                    element.style[prop] = css_props[p];
                }
            }
        }

        // also the disable onselectstart
        if(css_props.userSelect == 'none') {
            element.onselectstart = function() {
                return false;
            };
        }
    }
};

Hammer.detection = {
    // contains all registred Hammer.gestures in the correct order
    gestures: [],

    // data of the current Hammer.gesture detection session
    current: null,

    // the previous Hammer.gesture session data
    // is a full clone of the previous gesture.current object
    previous: null,

    // when this becomes true, no gestures are fired
    stopped: false,


    /**
     * start Hammer.gesture detection
     * @param   {Hammer.Instance}   inst
     * @param   {Object}            eventData
     */
    startDetect: function startDetect(inst, eventData) {
        // already busy with a Hammer.gesture detection on an element
        if(this.current) {
            return;
        }

        this.stopped = false;

        this.current = {
            inst        : inst, // reference to HammerInstance we're working for
            startEvent  : Hammer.utils.extend({}, eventData), // start eventData for distances, timing etc
            lastEvent   : false, // last eventData
            name        : '' // current gesture we're in/detected, can be 'tap', 'hold' etc
        };

        this.detect(eventData);
    },


    /**
     * Hammer.gesture detection
     * @param   {Object}    eventData
     * @param   {Object}    eventData
     */
    detect: function detect(eventData) {
        if(!this.current || this.stopped) {
            return;
        }

        // extend event data with calculations about scale, distance etc
        eventData = this.extendEventData(eventData);

        // instance options
        var inst_options = this.current.inst.options;

        // call Hammer.gesture handlers
        for(var g=0,len=this.gestures.length; g<len; g++) {
            var gesture = this.gestures[g];

            // only when the instance options have enabled this gesture
            if(!this.stopped && inst_options[gesture.name] !== false) {
                // if a handler returns false, we stop with the detection
                if(gesture.handler.call(gesture, eventData, this.current.inst) === false) {
                    this.stopDetect();
                    break;
                }
            }
        }

        // store as previous event event
        if(this.current) {
            this.current.lastEvent = eventData;
        }

        // endevent, but not the last touch, so dont stop
        if(eventData.eventType == Hammer.EVENT_END && !eventData.touches.length-1) {
            this.stopDetect();
        }

        return eventData;
    },


    /**
     * clear the Hammer.gesture vars
     * this is called on endDetect, but can also be used when a final Hammer.gesture has been detected
     * to stop other Hammer.gestures from being fired
     */
    stopDetect: function stopDetect() {
        // clone current data to the store as the previous gesture
        // used for the double tap gesture, since this is an other gesture detect session
        this.previous = Hammer.utils.extend({}, this.current);

        // reset the current
        this.current = null;

        // stopped!
        this.stopped = true;
    },


    /**
     * extend eventData for Hammer.gestures
     * @param   {Object}   ev
     * @returns {Object}   ev
     */
    extendEventData: function extendEventData(ev) {
        var startEv = this.current.startEvent;

        // if the touches change, set the new touches over the startEvent touches
        // this because touchevents don't have all the touches on touchstart, or the
        // user must place his fingers at the EXACT same time on the screen, which is not realistic
        // but, sometimes it happens that both fingers are touching at the EXACT same time
        if(startEv && (ev.touches.length != startEv.touches.length || ev.touches === startEv.touches)) {
            // extend 1 level deep to get the touchlist with the touch objects
            startEv.touches = [];
            for(var i=0,len=ev.touches.length; i<len; i++) {
                startEv.touches.push(Hammer.utils.extend({}, ev.touches[i]));
            }
        }

        var delta_time = ev.timeStamp - startEv.timeStamp,
            delta_x = ev.center.pageX - startEv.center.pageX,
            delta_y = ev.center.pageY - startEv.center.pageY,
            velocity = Hammer.utils.getVelocity(delta_time, delta_x, delta_y);

        Hammer.utils.extend(ev, {
            deltaTime   : delta_time,

            deltaX      : delta_x,
            deltaY      : delta_y,

            velocityX   : velocity.x,
            velocityY   : velocity.y,

            distance    : Hammer.utils.getDistance(startEv.center, ev.center),
            angle       : Hammer.utils.getAngle(startEv.center, ev.center),
            direction   : Hammer.utils.getDirection(startEv.center, ev.center),

            scale       : Hammer.utils.getScale(startEv.touches, ev.touches),
            rotation    : Hammer.utils.getRotation(startEv.touches, ev.touches),

            startEvent  : startEv
        });

        return ev;
    },


    /**
     * register new gesture
     * @param   {Object}    gesture object, see gestures.js for documentation
     * @returns {Array}     gestures
     */
    register: function register(gesture) {
        // add an enable gesture options if there is no given
        var options = gesture.defaults || {};
        if(options[gesture.name] === undefined) {
            options[gesture.name] = true;
        }

        // extend Hammer default options with the Hammer.gesture options
        Hammer.utils.extend(Hammer.defaults, options, true);

        // set its index
        gesture.index = gesture.index || 1000;

        // add Hammer.gesture to the list
        this.gestures.push(gesture);

        // sort the list by index
        this.gestures.sort(function(a, b) {
            if (a.index < b.index) {
                return -1;
            }
            if (a.index > b.index) {
                return 1;
            }
            return 0;
        });

        return this.gestures;
    }
};


Hammer.gestures = Hammer.gestures || {};

/**
 * Custom gestures
 * ==============================
 *
 * Gesture object
 * --------------------
 * The object structure of a gesture:
 *
 * { name: 'mygesture',
 *   index: 1337,
 *   defaults: {
 *     mygesture_option: true
 *   }
 *   handler: function(type, ev, inst) {
 *     // trigger gesture event
 *     inst.trigger(this.name, ev);
 *   }
 * }

 * @param   {String}    name
 * this should be the name of the gesture, lowercase
 * it is also being used to disable/enable the gesture per instance config.
 *
 * @param   {Number}    [index=1000]
 * the index of the gesture, where it is going to be in the stack of gestures detection
 * like when you build an gesture that depends on the drag gesture, it is a good
 * idea to place it after the index of the drag gesture.
 *
 * @param   {Object}    [defaults={}]
 * the default settings of the gesture. these are added to the instance settings,
 * and can be overruled per instance. you can also add the name of the gesture,
 * but this is also added by default (and set to true).
 *
 * @param   {Function}  handler
 * this handles the gesture detection of your custom gesture and receives the
 * following arguments:
 *
 *      @param  {Object}    eventData
 *      event data containing the following properties:
 *          timeStamp   {Number}        time the event occurred
 *          target      {HTMLElement}   target element
 *          touches     {Array}         touches (fingers, pointers, mouse) on the screen
 *          pointerType {String}        kind of pointer that was used. matches Hammer.POINTER_MOUSE|TOUCH
 *          center      {Object}        center position of the touches. contains pageX and pageY
 *          deltaTime   {Number}        the total time of the touches in the screen
 *          deltaX      {Number}        the delta on x axis we haved moved
 *          deltaY      {Number}        the delta on y axis we haved moved
 *          velocityX   {Number}        the velocity on the x
 *          velocityY   {Number}        the velocity on y
 *          angle       {Number}        the angle we are moving
 *          direction   {String}        the direction we are moving. matches Hammer.DIRECTION_UP|DOWN|LEFT|RIGHT
 *          distance    {Number}        the distance we haved moved
 *          scale       {Number}        scaling of the touches, needs 2 touches
 *          rotation    {Number}        rotation of the touches, needs 2 touches *
 *          eventType   {String}        matches Hammer.EVENT_START|MOVE|END
 *          srcEvent    {Object}        the source event, like TouchStart or MouseDown *
 *          startEvent  {Object}        contains the same properties as above,
 *                                      but from the first touch. this is used to calculate
 *                                      distances, deltaTime, scaling etc
 *
 *      @param  {Hammer.Instance}    inst
 *      the instance we are doing the detection for. you can get the options from
 *      the inst.options object and trigger the gesture event by calling inst.trigger
 *
 *
 * Handle gestures
 * --------------------
 * inside the handler you can get/set Hammer.detection.current. This is the current
 * detection session. It has the following properties
 *      @param  {String}    name
 *      contains the name of the gesture we have detected. it has not a real function,
 *      only to check in other gestures if something is detected.
 *      like in the drag gesture we set it to 'drag' and in the swipe gesture we can
 *      check if the current gesture is 'drag' by accessing Hammer.detection.current.name
 *
 *      @readonly
 *      @param  {Hammer.Instance}    inst
 *      the instance we do the detection for
 *
 *      @readonly
 *      @param  {Object}    startEvent
 *      contains the properties of the first gesture detection in this session.
 *      Used for calculations about timing, distance, etc.
 *
 *      @readonly
 *      @param  {Object}    lastEvent
 *      contains all the properties of the last gesture detect in this session.
 *
 * after the gesture detection session has been completed (user has released the screen)
 * the Hammer.detection.current object is copied into Hammer.detection.previous,
 * this is usefull for gestures like doubletap, where you need to know if the
 * previous gesture was a tap
 *
 * options that have been set by the instance can be received by calling inst.options
 *
 * You can trigger a gesture event by calling inst.trigger("mygesture", event).
 * The first param is the name of your gesture, the second the event argument
 *
 *
 * Register gestures
 * --------------------
 * When an gesture is added to the Hammer.gestures object, it is auto registered
 * at the setup of the first Hammer instance. You can also call Hammer.detection.register
 * manually and pass your gesture object as a param
 *
 */

/**
 * Hold
 * Touch stays at the same place for x time
 * @events  hold
 */
Hammer.gestures.Hold = {
    name: 'hold',
    index: 10,
    defaults: {
        hold_timeout  : 500,
        hold_threshold  : 1
    },
    timer: null,
    handler: function holdGesture(ev, inst) {
        switch(ev.eventType) {
            case Hammer.EVENT_START:
                // clear any running timers
                clearTimeout(this.timer);

                // set the gesture so we can check in the timeout if it still is
                Hammer.detection.current.name = this.name;

                // set timer and if after the timeout it still is hold,
                // we trigger the hold event
                this.timer = setTimeout(function() {
                    if(Hammer.detection.current.name == 'hold') {
                        inst.trigger('hold', ev);
                    }
                }, inst.options.hold_timeout);
                break;

            // when you move or end we clear the timer
            case Hammer.EVENT_MOVE:
                if(ev.distance > inst.options.hold_threshold) {
                    clearTimeout(this.timer);
                }
                break;

            case Hammer.EVENT_END:
                clearTimeout(this.timer);
                break;
        }
    }
};


/**
 * Tap/DoubleTap
 * Quick touch at a place or double at the same place
 * @events  tap, doubletap
 */
Hammer.gestures.Tap = {
    name: 'tap',
    index: 100,
    defaults: {
        tap_max_touchtime : 250,
        tap_max_distance  : 10,
    tap_always      : true,
        doubletap_distance  : 20,
        doubletap_interval  : 300
    },
    handler: function tapGesture(ev, inst) {
        if(ev.eventType == Hammer.EVENT_END) {
            // previous gesture, for the double tap since these are two different gesture detections
            var prev = Hammer.detection.previous,
        did_doubletap = false;

            // when the touchtime is higher then the max touch time
            // or when the moving distance is too much
            if(ev.deltaTime > inst.options.tap_max_touchtime ||
                ev.distance > inst.options.tap_max_distance) {
                return;
            }

            // check if double tap
            if(prev && prev.name == 'tap' &&
                (ev.timeStamp - prev.lastEvent.timeStamp) < inst.options.doubletap_interval &&
                ev.distance < inst.options.doubletap_distance) {
        inst.trigger('doubletap', ev);
        did_doubletap = true;
            }

      // do a single tap
      if(!did_doubletap || inst.options.tap_always) {
        Hammer.detection.current.name = 'tap';
        inst.trigger(Hammer.detection.current.name, ev);
      }
        }
    }
};


/**
 * Swipe
 * triggers swipe events when the end velocity is above the threshold
 * @events  swipe, swipeleft, swiperight, swipeup, swipedown
 */
Hammer.gestures.Swipe = {
    name: 'swipe',
    index: 40,
    defaults: {
        // set 0 for unlimited, but this can conflict with transform
        swipe_max_touches  : 1,
        swipe_velocity     : 0.7
    },
    handler: function swipeGesture(ev, inst) {
        if(ev.eventType == Hammer.EVENT_END) {
            // max touches
            if(inst.options.swipe_max_touches > 0 &&
                ev.touches.length > inst.options.swipe_max_touches) {
                return;
            }

            // when the distance we moved is too small we skip this gesture
            // or we can be already in dragging
            if(ev.velocityX > inst.options.swipe_velocity ||
                ev.velocityY > inst.options.swipe_velocity) {
                // trigger swipe events
                inst.trigger(this.name, ev);
                inst.trigger(this.name + ev.direction, ev);
            }
        }
    }
};


/**
 * Drag
 * Move with x fingers (default 1) around on the page. Blocking the scrolling when
 * moving left and right is a good practice. When all the drag events are blocking
 * you disable scrolling on that area.
 * @events  drag, drapleft, dragright, dragup, dragdown
 */
Hammer.gestures.Drag = {
    name: 'drag',
    index: 50,
    defaults: {
        drag_min_distance : 10,
        // set 0 for unlimited, but this can conflict with transform
        drag_max_touches  : 1,
        // prevent default browser behavior when dragging occurs
        // be careful with it, it makes the element a blocking element
        // when you are using the drag gesture, it is a good practice to set this true
        drag_block_horizontal   : false,
        drag_block_vertical     : false,
        // drag_lock_to_axis keeps the drag gesture on the axis that it started on,
        // It disallows vertical directions if the initial direction was horizontal, and vice versa.
        drag_lock_to_axis       : false,
        // drag lock only kicks in when distance > drag_lock_min_distance
        // This way, locking occurs only when the distance has become large enough to reliably determine the direction
        drag_lock_min_distance : 25
    },
    triggered: false,
    handler: function dragGesture(ev, inst) {
        // current gesture isnt drag, but dragged is true
        // this means an other gesture is busy. now call dragend
        if(Hammer.detection.current.name != this.name && this.triggered) {
            inst.trigger(this.name +'end', ev);
            this.triggered = false;
            return;
        }

        // max touches
        if(inst.options.drag_max_touches > 0 &&
            ev.touches.length > inst.options.drag_max_touches) {
            return;
        }

        switch(ev.eventType) {
            case Hammer.EVENT_START:
                this.triggered = false;
                break;

            case Hammer.EVENT_MOVE:
                // when the distance we moved is too small we skip this gesture
                // or we can be already in dragging
                if(ev.distance < inst.options.drag_min_distance &&
                    Hammer.detection.current.name != this.name) {
                    return;
                }

                // we are dragging!
                Hammer.detection.current.name = this.name;

                // lock drag to axis?
                if(Hammer.detection.current.lastEvent.drag_locked_to_axis || (inst.options.drag_lock_to_axis && inst.options.drag_lock_min_distance<=ev.distance)) {
                    ev.drag_locked_to_axis = true;
                }
                var last_direction = Hammer.detection.current.lastEvent.direction;
                if(ev.drag_locked_to_axis && last_direction !== ev.direction) {
                    // keep direction on the axis that the drag gesture started on
                    if(Hammer.utils.isVertical(last_direction)) {
                        ev.direction = (ev.deltaY < 0) ? Hammer.DIRECTION_UP : Hammer.DIRECTION_DOWN;
                    }
                    else {
                        ev.direction = (ev.deltaX < 0) ? Hammer.DIRECTION_LEFT : Hammer.DIRECTION_RIGHT;
                    }
                }

                // first time, trigger dragstart event
                if(!this.triggered) {
                    inst.trigger(this.name +'start', ev);
                    this.triggered = true;
                }

                // trigger normal event
                inst.trigger(this.name, ev);

                // direction event, like dragdown
                inst.trigger(this.name + ev.direction, ev);

                // block the browser events
                if( (inst.options.drag_block_vertical && Hammer.utils.isVertical(ev.direction)) ||
                    (inst.options.drag_block_horizontal && !Hammer.utils.isVertical(ev.direction))) {
                    ev.preventDefault();
                }
                break;

            case Hammer.EVENT_END:
                // trigger dragend
                if(this.triggered) {
                    inst.trigger(this.name +'end', ev);
                }

                this.triggered = false;
                break;
        }
    }
};


/**
 * Transform
 * User want to scale or rotate with 2 fingers
 * @events  transform, pinch, pinchin, pinchout, rotate
 */
Hammer.gestures.Transform = {
    name: 'transform',
    index: 45,
    defaults: {
        // factor, no scale is 1, zoomin is to 0 and zoomout until higher then 1
        transform_min_scale     : 0.01,
        // rotation in degrees
        transform_min_rotation  : 1,
        // prevent default browser behavior when two touches are on the screen
        // but it makes the element a blocking element
        // when you are using the transform gesture, it is a good practice to set this true
        transform_always_block  : false
    },
    triggered: false,
    handler: function transformGesture(ev, inst) {
        // current gesture isnt drag, but dragged is true
        // this means an other gesture is busy. now call dragend
        if(Hammer.detection.current.name != this.name && this.triggered) {
            inst.trigger(this.name +'end', ev);
            this.triggered = false;
            return;
        }

        // atleast multitouch
        if(ev.touches.length < 2) {
            return;
        }

        // prevent default when two fingers are on the screen
        if(inst.options.transform_always_block) {
            ev.preventDefault();
        }

        switch(ev.eventType) {
            case Hammer.EVENT_START:
                this.triggered = false;
                break;

            case Hammer.EVENT_MOVE:
                var scale_threshold = Math.abs(1-ev.scale);
                var rotation_threshold = Math.abs(ev.rotation);

                // when the distance we moved is too small we skip this gesture
                // or we can be already in dragging
                if(scale_threshold < inst.options.transform_min_scale &&
                    rotation_threshold < inst.options.transform_min_rotation) {
                    return;
                }

                // we are transforming!
                Hammer.detection.current.name = this.name;

                // first time, trigger dragstart event
                if(!this.triggered) {
                    inst.trigger(this.name +'start', ev);
                    this.triggered = true;
                }

                inst.trigger(this.name, ev); // basic transform event

                // trigger rotate event
                if(rotation_threshold > inst.options.transform_min_rotation) {
                    inst.trigger('rotate', ev);
                }

                // trigger pinch event
                if(scale_threshold > inst.options.transform_min_scale) {
                    inst.trigger('pinch', ev);
                    inst.trigger('pinch'+ ((ev.scale < 1) ? 'in' : 'out'), ev);
                }
                break;

            case Hammer.EVENT_END:
                // trigger dragend
                if(this.triggered) {
                    inst.trigger(this.name +'end', ev);
                }

                this.triggered = false;
                break;
        }
    }
};


/**
 * Touch
 * Called as first, tells the user has touched the screen
 * @events  touch
 */
Hammer.gestures.Touch = {
    name: 'touch',
    index: -Infinity,
    defaults: {
        // call preventDefault at touchstart, and makes the element blocking by
        // disabling the scrolling of the page, but it improves gestures like
        // transforming and dragging.
        // be careful with using this, it can be very annoying for users to be stuck
        // on the page
        prevent_default: false,

        // disable mouse events, so only touch (or pen!) input triggers events
        prevent_mouseevents: false
    },
    handler: function touchGesture(ev, inst) {
        if(inst.options.prevent_mouseevents && ev.pointerType == Hammer.POINTER_MOUSE) {
            ev.stopDetect();
            return;
        }

        if(inst.options.prevent_default) {
            ev.preventDefault();
        }

        if(ev.eventType ==  Hammer.EVENT_START) {
            inst.trigger(this.name, ev);
        }
    }
};


/**
 * Release
 * Called as last, tells the user has released the screen
 * @events  release
 */
Hammer.gestures.Release = {
    name: 'release',
    index: Infinity,
    handler: function releaseGesture(ev, inst) {
        if(ev.eventType ==  Hammer.EVENT_END) {
            inst.trigger(this.name, ev);
        }
    }
};

// node export
if(typeof module === 'object' && typeof module.exports === 'object'){
    module.exports = Hammer;
}
// just window export
else {
    window.Hammer = Hammer;

    // requireJS module definition
    if(typeof window.define === 'function' && window.define.amd) {
        window.define('hammer', [], function() {
            return Hammer;
        });
    }
}
})(this);

(function($, undefined) {
    'use strict';

    // no jQuery or Zepto!
    if($ === undefined) {
        return;
    }

    /**
     * bind dom events
     * this overwrites addEventListener
     * @param   {HTMLElement}   element
     * @param   {String}        eventTypes
     * @param   {Function}      handler
     */
    Hammer.event.bindDom = function(element, eventTypes, handler) {
        $(element).on(eventTypes, function(ev) {
            var data = ev.originalEvent || ev;

            // IE pageX fix
            if(data.pageX === undefined) {
                data.pageX = ev.pageX;
                data.pageY = ev.pageY;
            }

            // IE target fix
            if(!data.target) {
                data.target = ev.target;
            }

            // IE button fix
            if(data.which === undefined) {
                data.which = data.button;
            }

            // IE preventDefault
            if(!data.preventDefault) {
                data.preventDefault = ev.preventDefault;
            }

            // IE stopPropagation
            if(!data.stopPropagation) {
                data.stopPropagation = ev.stopPropagation;
            }

            handler.call(this, data);
        });
    };

    /**
     * the methods are called by the instance, but with the jquery plugin
     * we use the jquery event methods instead.
     * @this    {Hammer.Instance}
     * @return  {jQuery}
     */
    Hammer.Instance.prototype.on = function(types, handler) {
        return $(this.element).on(types, handler);
    };
    Hammer.Instance.prototype.off = function(types, handler) {
        return $(this.element).off(types, handler);
    };


    /**
     * trigger events
     * this is called by the gestures to trigger an event like 'tap'
     * @this    {Hammer.Instance}
     * @param   {String}    gesture
     * @param   {Object}    eventData
     * @return  {jQuery}
     */
    Hammer.Instance.prototype.trigger = function(gesture, eventData){
        var el = $(this.element);
        if(el.has(eventData.target).length) {
            el = $(eventData.target);
        }

        return el.trigger({
            type: gesture,
            gesture: eventData
        });
    };


    /**
     * jQuery plugin
     * create instance of Hammer and watch for gestures,
     * and when called again you can change the options
     * @param   {Object}    [options={}]
     * @return  {jQuery}
     */
    $.fn.hammer = function(options) {
        return this.each(function() {
            var el = $(this);
            var inst = el.data('hammer');
            // start new hammer instance
            if(!inst) {
                el.data('hammer', new Hammer(this, options || {}));
            }
            // change the options
            else if(inst && options) {
                Hammer.utils.extend(inst.options, options);
            }
        });
    };

})(window.jQuery || window.Zepto);;/*
    Redactor v9.1.8
    Updated: Nov 20, 2013

    http://imperavi.com/redactor/

    Copyright (c) 2009-2013, Imperavi LLC.
    License: http://imperavi.com/redactor/license/

    Usage: $('#content').redactor();
*/

(function($)
{
    var uuid = 0;

    "use strict";

    var Range = function(range)
    {
        this[0] = range.startOffset;
        this[1] = range.endOffset;

        this.range = range;

        return this;
    };

    Range.prototype.equals = function()
    {
        return this[0] === this[1];
    };

    // Plugin
    $.fn.redactor = function(options)
    {
        var val = [];
        var args = Array.prototype.slice.call(arguments, 1);

        if (typeof options === 'string')
        {
            this.each(function()
            {
                var instance = $.data(this, 'redactor');
                if (typeof instance !== 'undefined' && $.isFunction(instance[options]))
                {
                    var methodVal = instance[options].apply(instance, args);
                    if (methodVal !== undefined && methodVal !== instance) val.push(methodVal);
                }
                else return $.error('No such method "' + options + '" for Redactor');
            });
        }
        else
        {
            this.each(function()
            {
                if (!$.data(this, 'redactor')) $.data(this, 'redactor', Redactor(this, options));
            });
        }

        if (val.length === 0) return this;
        else if (val.length === 1) return val[0];
        else return val;

    };

    // Initialization
    function Redactor(el, options)
    {
        return new Redactor.prototype.init(el, options);
    }

    $.Redactor = Redactor;
    $.Redactor.VERSION = '9.1.8';
    $.Redactor.opts = {

            // settings
            rangy: false,

            iframe: false,
            fullpage: false,
            css: false, // url

            lang: 'en',
            direction: 'ltr', // ltr or rtl

            placeholder: false,

            wym: false,
            mobile: true,
            cleanup: true,
            tidyHtml: true,
            pastePlainText: false,
            removeEmptyTags: true,
            templateVars: false,
            xhtml: false,

            visual: true,
            focus: false,
            tabindex: false,
            autoresize: true,
            minHeight: false,
            maxHeight: false,
            shortcuts: true,

            autosave: false, // false or url
            autosaveInterval: 60, // seconds

            plugins: false, // array

            linkAnchor: true,
            linkEmail: true,
            linkProtocol: 'http://',
            linkNofollow: false,
            linkSize: 50,

            imageFloatMargin: '10px',
            imageGetJson: false, // url (ex. /folder/images.json ) or false

            imageUpload: false, // url
            imageUploadParam: 'file', // input name
            fileUpload: false, // url
            fileUploadParam: 'file', // input name
            clipboardUpload: true, // or false
            clipboardUploadUrl: false, // url
            dragUpload: true, // false

            dnbImageTypes: ['image/png', 'image/jpeg', 'image/gif'], // or false

            s3: false,
            uploadFields: false,

            observeImages: true,
            observeLinks: true,

            modalOverlay: true,

            tabSpaces: false, // true or number of spaces
            tabFocus: true,

            air: false,
            airButtons: ['formatting', '|', 'bold', 'italic', 'deleted', '|', 'unorderedlist', 'orderedlist', 'outdent', 'indent'],

            toolbar: true,
            toolbarFixed: false,
            toolbarFixedTarget: document,
            toolbarFixedTopOffset: 0, // pixels
            toolbarFixedBox: false,
            toolbarExternal: false, // ID selector
            buttonSource: true,

            buttonSeparator: '<li class="redactor_separator"></li>',

            buttonsCustom: {},
            buttonsAdd: [],
            buttons: ['html', '|', 'formatting', '|', 'bold', 'italic', 'deleted', '|', 'unorderedlist', 'orderedlist', 'outdent', 'indent', '|', 'image', 'video', 'file', 'table', 'link', '|', 'alignment', '|', 'horizontalrule'], // 'underline', 'alignleft', 'aligncenter', 'alignright', 'justify'

            activeButtons: ['deleted', 'italic', 'bold', 'underline', 'unorderedlist', 'orderedlist', 'alignleft', 'aligncenter', 'alignright', 'justify', 'table'],
            activeButtonsStates: {
                b: 'bold',
                strong: 'bold',
                i: 'italic',
                em: 'italic',
                del: 'deleted',
                strike: 'deleted',
                ul: 'unorderedlist',
                ol: 'orderedlist',
                u: 'underline',
                tr: 'table',
                td: 'table',
                table: 'table'
            },
            activeButtonsAdd: false, // object, ex.: { tag: 'buttonName' }

            formattingTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

            linebreaks: false,
            paragraphy: true,
            convertDivs: true,
            convertLinks: true,
            convertImageLinks: false,
            convertVideoLinks: false,
            formattingPre: false,
            phpTags: false,

            allowedTags: false,
            deniedTags: ['html', 'head', 'link', 'body', 'meta', 'script', 'style', 'applet'],

            boldTag: 'strong',
            italicTag: 'em',

            // private
            indentValue: 20,
            buffer: [],
            rebuffer: [],
            textareamode: false,
            emptyHtml: '<p>&#x200b;</p>',
            invisibleSpace: '&#x200b;',
            rBlockTest: /^(P|H[1-6]|LI|ADDRESS|SECTION|HEADER|FOOTER|ASIDE|ARTICLE)$/i,
            alignmentTags: ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'DD', 'DL', 'DT', 'DIV', 'TD',
                                'BLOCKQUOTE', 'OUTPUT', 'FIGCAPTION', 'ADDRESS', 'SECTION',
                                'HEADER', 'FOOTER', 'ASIDE', 'ARTICLE'],
            ownLine: ['area', 'body', 'head', 'hr', 'i?frame', 'link', 'meta', 'noscript', 'style', 'script', 'table', 'tbody', 'thead', 'tfoot'],
            contOwnLine: ['li', 'dt', 'dt', 'h[1-6]', 'option', 'script'],
            newLevel: ['blockquote', 'div', 'dl', 'fieldset', 'form', 'frameset', 'map', 'ol', 'p', 'pre', 'select', 'td', 'th', 'tr', 'ul'],
            blockLevelElements: ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'DD', 'DL', 'DT', 'DIV', 'LI',
                                'BLOCKQUOTE', 'OUTPUT', 'FIGCAPTION', 'PRE', 'ADDRESS', 'SECTION',
                                'HEADER', 'FOOTER', 'ASIDE', 'ARTICLE', 'TD'],
            // lang
            langs: {
                en: {
                    html: 'HTML',
                    video: 'Insert Video',
                    image: 'Insert Image',
                    table: 'Table',
                    link: 'Link',
                    link_insert: 'Insert link',
                    link_edit: 'Edit link',
                    unlink: 'Unlink',
                    formatting: 'Formatting',
                    paragraph: 'Normal text',
                    quote: 'Quote',
                    code: 'Code',
                    header1: 'Header 1',
                    header2: 'Header 2',
                    header3: 'Header 3',
                    header4: 'Header 4',
                    header5: 'Header 5',
                    bold: 'Bold',
                    italic: 'Italic',
                    fontcolor: 'Font Color',
                    backcolor: 'Back Color',
                    unorderedlist: 'Unordered List',
                    orderedlist: 'Ordered List',
                    outdent: 'Outdent',
                    indent: 'Indent',
                    cancel: 'Cancel',
                    insert: 'Insert',
                    save: 'Save',
                    _delete: 'Delete',
                    insert_table: 'Insert Table',
                    insert_row_above: 'Add Row Above',
                    insert_row_below: 'Add Row Below',
                    insert_column_left: 'Add Column Left',
                    insert_column_right: 'Add Column Right',
                    delete_column: 'Delete Column',
                    delete_row: 'Delete Row',
                    delete_table: 'Delete Table',
                    rows: 'Rows',
                    columns: 'Columns',
                    add_head: 'Add Head',
                    delete_head: 'Delete Head',
                    title: 'Title',
                    image_position: 'Position',
                    none: 'None',
                    left: 'Left',
                    right: 'Right',
                    image_web_link: 'Image Web Link',
                    text: 'Text',
                    mailto: 'Email',
                    web: 'URL',
                    video_html_code: 'Video Embed Code',
                    file: 'Insert File',
                    upload: 'Upload',
                    download: 'Download',
                    choose: 'Choose',
                    or_choose: 'Or choose',
                    drop_file_here: 'Drop file here',
                    align_left: 'Align text to the left',
                    align_center: 'Center text',
                    align_right: 'Align text to the right',
                    align_justify: 'Justify text',
                    horizontalrule: 'Insert Horizontal Rule',
                    deleted: 'Deleted',
                    anchor: 'Anchor',
                    link_new_tab: 'Open link in new tab',
                    underline: 'Underline',
                    alignment: 'Alignment',
                    filename: 'Name (optional)',
                    edit: 'Edit'
                }
            }
    };

    // Functionality
    Redactor.fn = $.Redactor.prototype = {

        keyCode: {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            ESC: 27,
            TAB: 9,
            CTRL: 17,
            META: 91,
            LEFT: 37,
            LEFT_WIN: 91
        },

        // Initialization
        init: function(el, options)
        {

            this.rtePaste = false;
            this.$element = this.$source = $(el);
            this.uuid = uuid++;

            // clonning options
            var opts = $.extend(true, {}, $.Redactor.opts);

            // current settings
            this.opts = $.extend(
                {},
                opts,
                this.$element.data(),
                options
            );

            this.start = true;
            this.dropdowns = [];

            // get sizes
            this.sourceHeight = this.$source.css('height');
            this.sourceWidth = this.$source.css('width');

            // dependency of the editor modes
            if (this.opts.fullpage) this.opts.iframe = true;
            if (this.opts.linebreaks) this.opts.paragraphy = false;
            if (this.opts.paragraphy) this.opts.linebreaks = false;
            if (this.opts.toolbarFixedBox) this.opts.toolbarFixed = true;

            // the alias for iframe mode
            this.document = document;
            this.window = window;

            // selection saved
            this.savedSel = false;

            // clean setup
            this.cleanlineBefore = new RegExp('^<(/?' + this.opts.ownLine.join('|/?' ) + '|' + this.opts.contOwnLine.join('|') + ')[ >]');
            this.cleanlineAfter = new RegExp('^<(br|/?' + this.opts.ownLine.join('|/?' ) + '|/' + this.opts.contOwnLine.join('|/') + ')[ >]');
            this.cleannewLevel = new RegExp('^</?(' + this.opts.newLevel.join('|' ) + ')[ >]');

            // block level
            this.rTestBlock = new RegExp('^(' + this.opts.blockLevelElements.join('|' ) + ')$', 'i');

            // setup formatting permissions
            if (this.opts.linebreaks === false)
            {
                if (this.opts.allowedTags !== false)
                {
                    var arrSearch = ['strong', 'em', 'del'];
                    var arrAdd = ['b', 'i', 'strike'];

                    if ($.inArray('p', this.opts.allowedTags) === '-1') this.opts.allowedTags.push('p');

                    for (i in arrSearch)
                    {
                        if ($.inArray(arrSearch[i], this.opts.allowedTags) != '-1') this.opts.allowedTags.push(arrAdd[i]);
                    }
                }

                if (this.opts.deniedTags !== false)
                {
                    var pos = $.inArray('p', this.opts.deniedTags);
                    if (pos !== '-1') this.opts.deniedTags.splice(pos, pos);
                }
            }

            // ie & opera
            if (this.browser('msie') || this.browser('opera'))
            {
                this.opts.buttons = this.removeFromArrayByValue(this.opts.buttons, 'horizontalrule');
            }

            // load lang
            this.opts.curLang = this.opts.langs[this.opts.lang];

            // Build
            this.buildStart();

        },
        toolbarInit: function(lang)
        {
            return {
                html:
                {
                    title: lang.html,
                    func: 'toggle'
                },
                formatting:
                {
                    title: lang.formatting,
                    func: 'show',
                    dropdown:
                    {
                        p:
                        {
                            title: lang.paragraph,
                            func: 'formatBlocks'
                        },
                        blockquote:
                        {
                            title: lang.quote,
                            func: 'formatQuote',
                            className: 'redactor_format_blockquote'
                        },
                        pre:
                        {
                            title: lang.code,
                            func: 'formatBlocks',
                            className: 'redactor_format_pre'
                        },
                        h1:
                        {
                            title: lang.header1,
                            func: 'formatBlocks',
                            className: 'redactor_format_h1'
                        },
                        h2:
                        {
                            title: lang.header2,
                            func: 'formatBlocks',
                            className: 'redactor_format_h2'
                        },
                        h3:
                        {
                            title: lang.header3,
                            func: 'formatBlocks',
                            className: 'redactor_format_h3'
                        },
                        h4:
                        {
                            title: lang.header4,
                            func: 'formatBlocks',
                            className: 'redactor_format_h4'
                        },
                        h5:
                        {
                            title: lang.header5,
                            func: 'formatBlocks',
                            className: 'redactor_format_h5'
                        }
                    }
                },
                bold:
                {
                    title: lang.bold,
                    exec: 'bold'
                },
                italic:
                {
                    title: lang.italic,
                    exec: 'italic'
                },
                deleted:
                {
                    title: lang.deleted,
                    exec: 'strikethrough'
                },
                underline:
                {
                    title: lang.underline,
                    exec: 'underline'
                },
                unorderedlist:
                {
                    title: '&bull; ' + lang.unorderedlist,
                    exec: 'insertunorderedlist'
                },
                orderedlist:
                {
                    title: '1. ' + lang.orderedlist,
                    exec: 'insertorderedlist'
                },
                outdent:
                {
                    title: '< ' + lang.outdent,
                    func: 'indentingOutdent'
                },
                indent:
                {
                    title: '> ' + lang.indent,
                    func: 'indentingIndent'
                },
                image:
                {
                    title: lang.image,
                    func: 'imageShow'
                },
                video:
                {
                    title: lang.video,
                    func: 'videoShow'
                },
                file:
                {
                    title: lang.file,
                    func: 'fileShow'
                },
                table:
                {
                    title: lang.table,
                    func: 'show',
                    dropdown:
                    {
                        insert_table:
                        {
                            title: lang.insert_table,
                            func: 'tableShow'
                        },
                        separator_drop1:
                        {
                            name: 'separator'
                        },
                        insert_row_above:
                        {
                            title: lang.insert_row_above,
                            func: 'tableAddRowAbove'
                        },
                        insert_row_below:
                        {
                            title: lang.insert_row_below,
                            func: 'tableAddRowBelow'
                        },
                        insert_column_left:
                        {
                            title: lang.insert_column_left,
                            func: 'tableAddColumnLeft'
                        },
                        insert_column_right:
                        {
                            title: lang.insert_column_right,
                            func: 'tableAddColumnRight'
                        },
                        separator_drop2:
                        {
                            name: 'separator'
                        },
                        add_head:
                        {
                            title: lang.add_head,
                            func: 'tableAddHead'
                        },
                        delete_head:
                        {
                            title: lang.delete_head,
                            func: 'tableDeleteHead'
                        },
                        separator_drop3:
                        {
                            name: 'separator'
                        },
                        delete_column:
                        {
                            title: lang.delete_column,
                            func: 'tableDeleteColumn'
                        },
                        delete_row:
                        {
                            title: lang.delete_row,
                            func: 'tableDeleteRow'
                        },
                        delete_table:
                        {
                            title: lang.delete_table,
                            func: 'tableDeleteTable'
                        }
                    }
                },
                link: {
                    title: lang.link,
                    func: 'show',
                    dropdown:
                    {
                        link:
                        {
                            title: lang.link_insert,
                            func: 'linkShow'
                        },
                        unlink:
                        {
                            title: lang.unlink,
                            exec: 'unlink'
                        }
                    }
                },
                fontcolor:
                {
                    title: lang.fontcolor,
                    func: 'show'
                },
                backcolor:
                {
                    title: lang.backcolor,
                    func: 'show'
                },
                alignment:
                {
                    title: lang.alignment,
                    func: 'show',
                    dropdown:
                    {
                        alignleft:
                        {
                            title: lang.align_left,
                            func: 'alignmentLeft'
                        },
                        aligncenter:
                        {
                            title: lang.align_center,
                            func: 'alignmentCenter'
                        },
                        alignright:
                        {
                            title: lang.align_right,
                            func: 'alignmentRight'
                        },
                        justify:
                        {
                            title: lang.align_justify,
                            func: 'alignmentJustify'
                        }
                    }
                },
                alignleft:
                {
                    title: lang.align_left,
                    func: 'alignmentLeft'
                },
                aligncenter:
                {
                    title: lang.align_center,
                    func: 'alignmentCenter'
                },
                alignright:
                {
                    title: lang.align_right,
                    func: 'alignmentRight'
                },
                justify:
                {
                    title: lang.align_justify,
                    func: 'alignmentJustify'
                },
                horizontalrule:
                {
                    exec: 'inserthorizontalrule',
                    title: lang.horizontalrule
                }

            }
        },

        // CALLBACKS
        callback: function(type, event, data)
        {
            var callback = this.opts[ type + 'Callback' ];
            if ($.isFunction(callback))
            {
                if (event === false) return callback.call(this, data);
                else return callback.call(this, event, data);
            }
            else return data;
        },


        // DESTROY
        destroy: function()
        {
            clearInterval(this.autosaveInterval);

            $(window).off('.redactor');
            this.$source.off('redactor-textarea');
            this.$element.off('.redactor').removeData('redactor');

            var html = this.get();

            if (this.opts.textareamode)
            {
                this.$box.after(this.$source);
                this.$box.remove();
                this.$source.val(html).show();
            }
            else
            {
                var $elem = this.$editor;
                if (this.opts.iframe) $elem = this.$element;

                this.$box.after($elem);
                this.$box.remove();

                $elem.removeClass('redactor_editor').removeClass('redactor_editor_wym').removeAttr('contenteditable').html(html).show();
            }

            if (this.opts.air)
            {
                $('#redactor_air_' + this.uuid).remove();
            }
        },

        // API GET
        getObject: function()
        {
            return $.extend({}, this);
        },
        getEditor: function()
        {
            return this.$editor;
        },
        getBox: function()
        {
            return this.$box;
        },
        getIframe: function()
        {
            return (this.opts.iframe) ? this.$frame : false;
        },
        getToolbar: function()
        {
            return (this.$toolbar) ? this.$toolbar : false;
        },

        // CODE GET & SET
        get: function()
        {
            return this.$source.val();
        },
        getCodeIframe: function()
        {
            this.$editor.removeAttr('contenteditable').removeAttr('dir');
            var html = this.outerHtml(this.$frame.contents().children());
            this.$editor.attr({ 'contenteditable': true, 'dir': this.opts.direction });

            return html;
        },
        set: function(html, strip, placeholderRemove)
        {
            html = html.toString();

            if (this.opts.fullpage) this.setCodeIframe(html);
            else this.setEditor(html, strip);

            if (html == '') placeholderRemove = false;
            if (placeholderRemove !== false) this.placeholderRemove();
        },
        setEditor: function(html, strip)
        {
            if (strip !== false)
            {
                html = this.cleanSavePreCode(html);
                html = this.cleanStripTags(html);
                html = this.cleanConvertProtected(html);
                html = this.cleanConvertInlineTags(html, true);

                if (this.opts.linebreaks === false) html = this.cleanConverters(html);
                else html = html.replace(/<p(.*?)>([\w\W]*?)<\/p>/gi, '$2<br>');
            }

            html = this.cleanEmpty(html);

            this.$editor.html(html);

            // set no editable
            this.setNonEditable();
            this.setSpansVerified();
            this.sync();
        },
        setCodeIframe: function(html)
        {
            var doc = this.iframePage();
            this.$frame[0].src = "about:blank";

            html = this.cleanConvertProtected(html);
            html = this.cleanConvertInlineTags(html);
            html = this.cleanRemoveSpaces(html);

            doc.open();
            doc.write(html);
            doc.close();

            // redefine editor for fullpage mode
            if (this.opts.fullpage)
            {
                this.$editor = this.$frame.contents().find('body').attr({ 'contenteditable': true, 'dir': this.opts.direction });
            }

            // set no editable
            this.setNonEditable();
            this.setSpansVerified();
            this.sync();

        },
        setFullpageOnInit: function(html)
        {
            html = this.cleanSavePreCode(html, true);
            html = this.cleanConverters(html);
            html = this.cleanEmpty(html);

            // set code
            this.$editor.html(html);

            // set no editable
            this.setNonEditable();
            this.setSpansVerified();
            this.sync();
        },
        setSpansVerified: function()
        {
            var spans = this.$editor.find('span');
            var replacementTag = 'inline';

            $.each(spans, function() {
                var outer = this.outerHTML;

                // Replace opening tag
                var regex = new RegExp('<' + this.tagName, 'gi');
                var newTag = outer.replace(regex, '<' + replacementTag);

                // Replace closing tag
                regex = new RegExp('</' + this.tagName, 'gi');
                newTag = newTag.replace(regex, '</' + replacementTag);

                $(this).replaceWith(newTag);
            });

        },
        setSpansVerifiedHtml: function(html)
        {
            html = html.replace(/<span(.*?)>/, '<inline$1>');
            return html.replace(/<\/span>/, '</inline>');
        },
        setNonEditable: function()
        {
            this.$editor.find('.noneditable').attr('contenteditable', false);
        },

        // SYNC
        sync: function()
        {
            var html = '';

            this.cleanUnverified();

            if (this.opts.fullpage) html = this.getCodeIframe();
            else html = this.$editor.html();

            html = this.syncClean(html);
            //html = this.cleanRemoveSpaces(html);
            html = this.cleanRemoveEmptyTags(html);

            // fix second level up ul, ol
            html = html.replace(/<\/li><(ul|ol)>([\w\W]*?)<\/(ul|ol)>/gi, '<$1>$2</$1></li>');

            if ($.trim(html) === '<br>') html = '';

            // xhtml
            if (this.opts.xhtml)
            {
                var xhtmlTags = ['br', 'hr', 'img', 'link', 'input', 'meta'];
                $.each(xhtmlTags, function(i,s)
                {
                    html = html.replace(new RegExp('<' + s + '(.*?[^\/$]?)>', 'gi'), '<' + s + '$1 />');
                });

            }

            // before callback
            html = this.callback('syncBefore', false, html);

            this.$source.val(html);

            // onchange & after callback
            this.callback('syncAfter', false, html);

            if (this.start === false)
            {
                this.callback('change', false, html);
            }

        },
        syncClean: function(html)
        {
            if (!this.opts.fullpage) html = this.cleanStripTags(html);

            html = $.trim(html);

            // removeplaceholder
            html = this.placeholderRemoveFromCode(html);

            // remove space
            html = html.replace(/&#x200b;/gi, '');
            html = html.replace(/&#8203;/gi, '');
            html = html.replace(/<\/a>&nbsp;/gi, '<\/a> ');

            // link nofollow
            if (this.opts.linkNofollow)
            {
                html = html.replace(/<a(.*?)rel="nofollow"(.*?)>/gi, '<a$1$2>');
                html = html.replace(/<a(.*?)>/gi, '<a$1 rel="nofollow">');
            }

            // php code fix
            html = html.replace('<!--?php', '<?php');
            html = html.replace('?-->', '?>');

            // revert no editable
            html = html.replace(/<(.*?)class="noeditable"(.*?) contenteditable="false"(.*?)>/gi, '<$1class="noeditable"$2$3>');

            html = html.replace(/ data-tagblock=""/gi, '');
            html = html.replace(/<br\s?\/?>\n?<\/(P|H[1-6]|LI|ADDRESS|SECTION|HEADER|FOOTER|ASIDE|ARTICLE)>/gi, '</$1>');

            // remove image resize
            html = html.replace(/<span(.*?)id="redactor-image-box"(.*?)>([\w\W]*?)<img(.*?)><\/span>/i, '$3<img$4>');
            html = html.replace(/<span(.*?)id="redactor-image-resizer"(.*?)>(.*?)<\/span>/i, '');
            html = html.replace(/<span(.*?)id="redactor-image-editter"(.*?)>(.*?)<\/span>/i, '');

            // remove font
            html = html.replace(/<font(.*?)>([\w\W]*?)<\/font>/gi, '$2');

            // remove spans
            html = html.replace(/<span(.*?)>([\w\W]*?)<\/span>/gi, '$2');
            html = html.replace(/<inline>/gi, '<span>');
            html = html.replace(/<inline /gi, '<span ');
            html = html.replace(/<\/inline>/gi, '</span>');
            html = html.replace(/<span(.*?)class="redactor_placeholder"(.*?)>([\w\W]*?)<\/span>/gi, '');

            // fixes
            html = html.replace(/&amp;/gi, '&');
            html = html.replace(/™/gi, '&trade;');
            html = html.replace(/©/gi, '&copy;');


            html = this.cleanReConvertProtected(html);

            return html;
        },


        // BUILD
        buildStart: function()
        {
            // content
            this.content = '';

            // container
            this.$box = $('<div class="redactor_box" />');

            // textarea test
            if (this.$source[0].tagName === 'TEXTAREA') this.opts.textareamode = true;

            // mobile
            if (this.opts.mobile === false && this.isMobile())
            {
                this.buildMobile();
            }
            else
            {
                // get the content at the start
                this.buildContent();

                if (this.opts.iframe)
                {
                    // build as iframe
                    this.opts.autoresize = false;
                    this.iframeStart();
                }
                else if (this.opts.textareamode) this.buildFromTextarea();
                else this.buildFromElement();

                // options and final setup
                if (!this.opts.iframe)
                {
                    this.buildOptions();
                    this.buildAfter();
                }
            }
        },
        buildMobile: function()
        {
            if (!this.opts.textareamode)
            {
                this.$editor = this.$source;
                this.$editor.hide();
                this.$source = this.buildCodearea(this.$editor);
                this.$source.val(this.content);
            }

            this.$box.insertAfter(this.$source).append(this.$source);
        },
        buildContent: function()
        {
            if (this.opts.textareamode) this.content = $.trim(this.$source.val());
            else this.content = $.trim(this.$source.html());
        },
        buildFromTextarea: function()
        {
            this.$editor = $('<div />');
            this.$box.insertAfter(this.$source).append(this.$editor).append(this.$source);

            // enable
            this.buildAddClasses(this.$editor);
            this.buildEnable();
        },
        buildFromElement: function()
        {
            this.$editor = this.$source;
            this.$source = this.buildCodearea(this.$editor);
            this.$box.insertAfter(this.$editor).append(this.$editor).append(this.$source);

            // enable
            this.buildEnable();
        },
        buildCodearea: function($source)
        {
            return $('<textarea />').attr('name', $source.attr('id')).css('height', this.sourceHeight);
        },
        buildAddClasses: function(el)
        {
            // append textarea classes to editable layer
            $.each(this.$source.get(0).className.split(/\s+/), function(i,s)
            {
                el.addClass('redactor_' + s);
            });
        },
        buildEnable: function()
        {
            this.$editor.addClass('redactor_editor').attr({ 'contenteditable': true, 'dir': this.opts.direction });
            this.$source.attr('dir', this.opts.direction).hide();

            // set code
            this.set(this.content, true, false);
        },
        buildOptions: function()
        {
            var $source = this.$editor;
            if (this.opts.iframe) $source = this.$frame;

            // options
            if (this.opts.tabindex) $source.attr('tabindex', this.opts.tabindex);
            if (this.opts.minHeight) $source.css('min-height', this.opts.minHeight + 'px');
            if (this.opts.maxHeight)
            {
                this.opts.autoresize = false;
                $source.css('max-height', this.opts.maxHeight + 'px');
            }
            if (this.opts.wym) this.$editor.addClass('redactor_editor_wym');
            if (!this.opts.autoresize) $source.css('height', this.sourceHeight);
        },
        buildAfter: function()
        {
            this.start = false;

            // load toolbar
            if (this.opts.toolbar)
            {
                this.opts.toolbar = this.toolbarInit(this.opts.curLang);
                this.toolbarBuild();
            }

            // modal templates
            this.modalTemplatesInit();

            // plugins
            this.buildPlugins();

            // enter, tab, etc.
            this.buildBindKeyboard();

            // autosave
            if (this.opts.autosave) this.autosave();

            // observers
            setTimeout($.proxy(this.observeStart, this), 4);

            // FF fix
            if (this.browser('mozilla'))
            {
                try {
                    this.document.execCommand('enableObjectResizing', false, false);
                    this.document.execCommand('enableInlineTableEditing', false, false);
                } catch (e) {}
            }

            // focus
            if (this.opts.focus) setTimeout($.proxy(this.focus, this), 100);

            // code mode
            if (!this.opts.visual)
            {
                setTimeout($.proxy(function()
                {
                    this.opts.visual = true;
                    this.toggle(false);

                }, this), 200);
            }

            // init callback
            this.callback('init');
        },
        buildBindKeyboard: function()
        {
            this.dblEnter = 0;

            if (this.opts.dragUpload && this.opts.imageUpload !== false)
            {
                this.$editor.on('drop.redactor', $.proxy(this.buildEventDrop, this));
            }

            this.$editor.on('paste.redactor', $.proxy(this.buildEventPaste, this));
            this.$editor.on('keydown.redactor', $.proxy(this.buildEventKeydown, this));
            this.$editor.on('keyup.redactor', $.proxy(this.buildEventKeyup, this));

            // textarea callback
            if ($.isFunction(this.opts.textareaKeydownCallback))
            {
                this.$source.on('keydown.redactor-textarea', $.proxy(this.opts.textareaKeydownCallback, this));
            }

            // focus callback
            if ($.isFunction(this.opts.focusCallback))
            {
                this.$editor.on('focus.redactor', $.proxy(this.opts.focusCallback, this));
            }

            var clickedElement;
            $(document).mousedown(function(e) {
                clickedElement = $(e.target);
            });

            // blur callback
            this.$editor.on('blur.redactor', $.proxy(function(e)
            {
                if (!$(clickedElement).hasClass('redactor_toolbar') && $(clickedElement).parents('.redactor_toolbar').size() == 0)
                {
                    this.selectall = false;
                    if ($.isFunction(this.opts.blurCallback)) this.callback('blur', e);
                }
            }, this));

        },
        buildEventDrop: function(e)
        {
            e = e.originalEvent || e;

            if (window.FormData === undefined || !e.dataTransfer) return true;

            var length = e.dataTransfer.files.length;
            if (length == 0) return true;

            e.preventDefault();

            var file = e.dataTransfer.files[0];

            if (this.opts.dnbImageTypes !== false && this.opts.dnbImageTypes.indexOf(file.type) == -1)
            {
                return true;
            }

            this.bufferSet();

            var progress = $('<div id="redactor-progress-drag" class="redactor-progress redactor-progress-striped"><div id="redactor-progress-bar" class="redactor-progress-bar" style="width: 100%;"></div></div>');
            $(document.body).append(progress);

            if (this.opts.s3 === false)
            {
                this.dragUploadAjax(this.opts.imageUpload, file, true, progress, e, this.opts.imageUploadParam);
            }
            else
            {
                this.s3uploadFile(file);
            }

        },
        buildEventPaste: function(e)
        {
            var oldsafari = false;
            if (this.browser('webkit') && navigator.userAgent.indexOf('Chrome') === -1)
            {
                var arr = this.browser('version').split('.');
                if (arr[0] < 536) oldsafari = true;
            }

            if (oldsafari) return true;

            // paste except opera (not webkit)
            if (this.browser('opera')) return true;

            // clipboard upload
            if (this.opts.clipboardUpload && this.buildEventClipboardUpload(e)) return true;

            if (this.opts.cleanup)
            {
                this.rtePaste = true;

                this.selectionSave();

                if (!this.selectall)
                {
                    if (this.opts.autoresize === true && this.fullscreen !== true)
                    {
                        this.$editor.height(this.$editor.height());
                        this.saveScroll = this.document.body.scrollTop;
                    }
                    else
                    {
                        this.saveScroll = this.$editor.scrollTop();
                    }
                }

                var frag = this.extractContent();

                setTimeout($.proxy(function()
                {
                    var pastedFrag = this.extractContent();
                    this.$editor.append(frag);

                    this.selectionRestore();

                    var html = this.getFragmentHtml(pastedFrag);
                    this.pasteClean(html);

                    if (this.opts.autoresize === true && this.fullscreen !== true) this.$editor.css('height', 'auto');

                }, this), 1);
            }
        },
        buildEventClipboardUpload: function(e)
        {
            var event = e.originalEvent || e;
            this.clipboardFilePaste = false;

            if (typeof(event.clipboardData) === 'undefined') return false;
            if (event.clipboardData.items)
            {
                var file = event.clipboardData.items[0].getAsFile();
                if (file !== null)
                {
                    this.bufferSet();
                    this.clipboardFilePaste = true;

                    var reader = new FileReader();
                    reader.onload = $.proxy(this.pasteClipboardUpload, this);
                    reader.readAsDataURL(file);

                    return true;
                }
            }

            return false;

        },
        buildEventKeydown: function(e)
        {
            if (this.rtePaste) return false;

            var key = e.which;
            var ctrl = e.ctrlKey || e.metaKey;
            var parent = this.getParent();
            var current = this.getCurrent();
            var block = this.getBlock();
            var pre = false;

            this.callback('keydown', e);

            this.imageResizeHide(false);

            // pre & down
            if ((parent && $(parent).get(0).tagName === 'PRE') || (current && $(current).get(0).tagName === 'PRE'))
            {
                pre = true;
                if (key === this.keyCode.DOWN) this.insertAfterLastElement(block);
            }

            // down
            if (key === this.keyCode.DOWN)
            {
                if (parent && $(parent)[0].tagName === 'BLOCKQUOTE') this.insertAfterLastElement(parent);
                if (current && $(current)[0].tagName === 'BLOCKQUOTE') this.insertAfterLastElement(current);

                if (parent && $(parent)[0].tagName === 'P' && $(parent).parent()[0].tagName == 'BLOCKQUOTE')
                {
                    this.insertAfterLastElement(parent, $(parent).parent()[0]);
                }
                if (current && $(current)[0].tagName === 'P' && parent && $(parent)[0].tagName == 'BLOCKQUOTE')
                {
                    this.insertAfterLastElement(current, parent);
                }
            }

            // shortcuts setup
            if (ctrl && !e.shiftKey) this.shortcuts(e, key);

            // buffer setup
            if (ctrl && key === 90 && !e.shiftKey && !e.altKey) // z key
            {
                e.preventDefault();
                if (this.opts.buffer.length) this.bufferUndo();
                else this.document.execCommand('undo', false, false);
                return;
            }
            // undo
            else if (ctrl && key === 90 && e.shiftKey && !e.altKey)
            {
                e.preventDefault();
                if (this.opts.rebuffer.length != 0) this.bufferRedo();
                else this.document.execCommand('redo', false, false);
                return;
            }

            // select all
            if (ctrl && key === 65) this.selectall = true;
            else if (key != this.keyCode.LEFT_WIN && !ctrl) this.selectall = false;

            // enter
            if (key == this.keyCode.ENTER && !e.shiftKey && !e.ctrlKey && !e.metaKey )
            {
                // In ie, opera in the tables are created paragraphs, fix it.
                if (this.browser('msie') && (parent.nodeType == 1 && (parent.tagName == 'TD' || parent.tagName == 'TH')))
                {
                    e.preventDefault();
                    this.bufferSet();
                    this.insertNode(document.createElement('br'));
                    this.callback('enter', e);
                    return false;
                }

                // blockquote exit
                if (block && (block.tagName == 'BLOCKQUOTE' || $(block).parent()[0].tagName == 'BLOCKQUOTE'))
                {
                    if (this.isEndOfElement())
                    {
                        if (this.dblEnter == 1)
                        {
                            var element;
                            var last;
                            if (block.tagName == 'BLOCKQUOTE')
                            {
                                last = 'br';
                                element = block;
                            }
                            else
                            {
                                last = 'p';
                                element = $(block).parent()[0];
                            }

                            e.preventDefault();
                            this.insertingAfterLastElement(element);
                            this.dblEnter = 0;

                            if (last == 'p')
                            {
                                $(block).parent().find('p').last().remove();
                            }
                            else
                            {
                                var tmp = $.trim($(block).html());
                                $(block).html(tmp.replace(/<br\s?\/?>$/i, ''));
                            }

                            return;
                        }
                        else this.dblEnter++;
                    }
                    else this.dblEnter++;
                }



                // pre
                if (pre === true) return this.buildEventKeydownPre(e, current);
                else
                {
                    if (!this.opts.linebreaks)
                    {
                        // replace div to p
                        if (block && this.opts.rBlockTest.test(block.tagName))
                        {
                            // hit enter
                            this.bufferSet();

                            setTimeout($.proxy(function()
                            {
                                var blockElem = this.getBlock();
                                if (blockElem.tagName === 'DIV' && !$(blockElem).hasClass('redactor_editor'))
                                {
                                    var node = $('<p>' + this.opts.invisibleSpace + '</p>');
                                    $(blockElem).replaceWith(node);
                                    this.selectionStart(node);
                                }

                            }, this), 1);
                        }
                        else if (block === false)
                        {
                            // hit enter
                            this.bufferSet();

                            var node = $('<p>' + this.opts.invisibleSpace + '</p>');
                            this.insertNode(node[0]);
                            this.selectionStart(node);
                            this.callback('enter', e);
                            return false;
                        }

                    }

                    if (this.opts.linebreaks)
                    {
                        // replace div to br
                        if (block && this.opts.rBlockTest.test(block.tagName))
                        {
                            // hit enter
                            this.bufferSet();

                            setTimeout($.proxy(function()
                            {
                                var blockElem = this.getBlock();
                                if ((blockElem.tagName === 'DIV' || blockElem.tagName === 'P') && !$(blockElem).hasClass('redactor_editor'))
                                {
                                    this.replaceLineBreak(blockElem);
                                }

                            }, this), 1);
                        }
                        else
                        {
                            return this.buildEventKeydownInsertLineBreak(e);
                        }
                    }

                    // blockquote, figcaption
                    if (block.tagName == 'BLOCKQUOTE' || block.tagName == 'FIGCAPTION')
                    {
                        return this.buildEventKeydownInsertLineBreak(e);
                    }

                }

                this.callback('enter', e);
            }
            else if (key === this.keyCode.ENTER && (e.ctrlKey || e.shiftKey)) // Shift+Enter or Ctrl+Enter
            {
                this.bufferSet();

                e.preventDefault();
                this.insertLineBreak();
            }

            // tab
            if (key === this.keyCode.TAB && this.opts.shortcuts) return this.buildEventKeydownTab(e, pre);

            // delete zero-width space before the removing
            if (key === this.keyCode.BACKSPACE) this.buildEventKeydownBackspace(current);

        },
        buildEventKeydownPre: function(e, current)
        {
            e.preventDefault();
            this.bufferSet();
            var html = $(current).parent().text();
            this.insertNode(document.createTextNode('\n'));
            if (html.search(/\s$/) == -1)
            {
                this.insertNode(document.createTextNode('\n'));
            }

            this.sync();
            this.callback('enter', e);
            return false;
        },
        buildEventKeydownTab: function(e, pre)
        {
            if (!this.opts.tabFocus) return true;
            if (this.isEmpty(this.get()) && this.opts.tabSpaces === false) return true;

            e.preventDefault();

            if (pre === true && !e.shiftKey)
            {
                this.bufferSet();
                this.insertNode(document.createTextNode('\t'));
                this.sync();
                return false;

            }
            else if (this.opts.tabSpaces !== false)
            {
                this.bufferSet();
                this.insertNode(document.createTextNode(Array(this.opts.tabSpaces + 1).join('\u00a0')));
                this.sync();
                return false;
            }
            else
            {
                if (!e.shiftKey) this.indentingIndent();
                else this.indentingOutdent();
            }

            return false;
        },
        buildEventKeydownBackspace: function(current)
        {
            if (typeof current.tagName !== 'undefined' && /^(H[1-6])$/i.test(current.tagName))
            {
                var node;
                if (this.opts.linebreaks === false) node = $('<p>' + this.opts.invisibleSpace + '</p>');
                else node = $('<br>' + this.opts.invisibleSpace);

                $(current).replaceWith(node);
                this.selectionStart(node);
            }

            if (typeof current.nodeValue !== 'undefined' && current.nodeValue !== null)
            {
                //var value = $.trim(current.nodeValue.replace(/[^\u0000-\u1C7F]/g, ''));
                if (current.remove && current.nodeType === 3 && current.nodeValue.match(/[^/\u200B]/g) == null)
                {
                    current.remove();
                }
            }
        },
        buildEventKeydownInsertLineBreak: function(e)
        {
            this.bufferSet();
            e.preventDefault();
            this.insertLineBreak();
            this.callback('enter', e);
            return;
        },
        buildEventKeyup: function(e)
        {
            if (this.rtePaste) return false;

            var key = e.which;
            var parent = this.getParent();
            var current = this.getCurrent();

            // replace to p before / after the table or body
            if (!this.opts.linebreaks && current.nodeType == 3 && (parent == false || parent.tagName == 'BODY'))
            {
                var node = $('<p>').append($(current).clone());
                $(current).replaceWith(node);
                var next = $(node).next();
                if (typeof(next[0]) !== 'undefined' && next[0].tagName == 'BR')
                {
                    next.remove();
                }
                this.selectionEnd(node);
            }

            // convert links
            if ((this.opts.convertLinks || this.opts.convertImageLinks || this.opts.convertVideoLinks) && key === this.keyCode.ENTER)
            {
                this.buildEventKeyupConverters();
            }

            // if empty
            if (key === this.keyCode.DELETE || key === this.keyCode.BACKSPACE)
            {
                return this.formatEmpty(e);
            }

            this.callback('keyup', e);
            this.sync();
        },
        buildEventKeyupConverters: function()
        {
            this.formatLinkify(this.opts.linkProtocol, this.opts.convertLinks, this.opts.convertImageLinks, this.opts.convertVideoLinks, this.opts.linkSize);

            setTimeout($.proxy(function()
            {
                if (this.opts.convertImageLinks) this.observeImages();
                if (this.opts.observeLinks) this.observeLinks();
            }, this), 5);
        },
        buildPlugins: function()
        {
            if (!this.opts.plugins ) return;

            $.each(this.opts.plugins, $.proxy(function(i, s)
            {
                if (RedactorPlugins[s])
                {
                    $.extend(this, RedactorPlugins[s]);
                    if ($.isFunction( RedactorPlugins[ s ].init)) this.init();
                }

            }, this ));
        },

        // IFRAME
        iframeStart: function()
        {
            this.iframeCreate();

            if (this.opts.textareamode) this.iframeAppend(this.$source);
            else
            {
                this.$sourceOld = this.$source.hide();
                this.$source = this.buildCodearea(this.$sourceOld);
                this.iframeAppend(this.$sourceOld);
            }
        },
        iframeAppend: function(el)
        {
            this.$source.attr('dir', this.opts.direction).hide();
            this.$box.insertAfter(el).append(this.$frame).append(this.$source);
        },
        iframeCreate: function()
        {
            this.$frame = $('<iframe style="width: 100%;" frameborder="0" />').one('load', $.proxy(function()
            {
                if (this.opts.fullpage)
                {
                    this.iframePage();

                    if (this.content === '') this.content = this.opts.invisibleSpace;

                    this.$frame.contents()[0].write(this.content);
                    this.$frame.contents()[0].close();

                    var timer = setInterval($.proxy(function()
                    {
                        if (this.$frame.contents().find('body').html())
                        {
                            clearInterval(timer);
                            this.iframeLoad();
                        }

                    }, this), 0);
                }
                else this.iframeLoad();

            }, this));
        },
        iframeDoc: function()
        {
            return this.$frame[0].contentWindow.document;
        },
        iframePage: function()
        {
            var doc = this.iframeDoc();
            if (doc.documentElement) doc.removeChild(doc.documentElement);

            return doc;
        },
        iframeAddCss: function(css)
        {
            css = css || this.opts.css;

            if (this.isString(css))
            {
                this.$frame.contents().find('head').append('<link rel="stylesheet" href="' + css + '" />');
            }

            if ($.isArray(css))
            {
                $.each(css, $.proxy(function(i, url)
                {
                    this.iframeAddCss(url);

                }, this));
            }
        },
        iframeLoad: function()
        {
            this.$editor = this.$frame.contents().find('body').attr({ 'contenteditable': true, 'dir': this.opts.direction });

            // set document & window
            if (this.$editor[0])
            {
                this.document = this.$editor[0].ownerDocument;
                this.window = this.document.defaultView || window;
            }

            // iframe css
            this.iframeAddCss();

            if (this.opts.fullpage) this.setFullpageOnInit(this.$editor.html());
            else this.set(this.content, true, false);

            this.buildOptions();
            this.buildAfter();
        },

        // PLACEHOLDER
        placeholderStart: function(html)
        {
            if (this.isEmpty(html))
            {
                if (this.$element.attr('placeholder')) this.opts.placeholder = this.$element.attr('placeholder');
                if (this.opts.placeholder === '') this.opts.placeholder = false;

                if (this.opts.placeholder !== false)
                {
                    this.opts.focus = false;
                    this.$editor.one('focus.redactor_placeholder', $.proxy(this.placeholderFocus, this));

                    return $('<span class="redactor_placeholder" data-redactor="verified">').attr('contenteditable', false).text(this.opts.placeholder);
                }
            }

            return false;
        },
        placeholderFocus: function()
        {
            this.$editor.find('span.redactor_placeholder').remove();

            var html = '';
            if (this.opts.linebreaks === false) html = this.opts.emptyHtml;

            this.$editor.off('focus.redactor_placeholder');
            this.$editor.html(html);

            if (this.opts.linebreaks === false)
            {
                // place the cursor inside emptyHtml
                this.selectionStart(this.$editor.children()[0]);
            }
            else
            {
                this.focus();
            }

            this.sync();
        },
        placeholderRemove: function()
        {
            this.opts.placeholder = false;
            this.$editor.find('span.redactor_placeholder').remove();
            this.$editor.off('focus.redactor_placeholder');
        },
        placeholderRemoveFromCode: function(html)
        {
            return html.replace(/<span class="redactor_placeholder"(.*?)>(.*?)<\/span>/i, '');
        },

        // SHORTCUTS
        shortcuts: function(e, key)
        {

            if (!this.opts.shortcuts) return;

            if (!e.altKey)
            {
                if (key === 77) this.shortcutsLoad(e, 'removeFormat'); // Ctrl + m
                else if (key === 66) this.shortcutsLoad(e, 'bold'); // Ctrl + b
                else if (key === 73) this.shortcutsLoad(e, 'italic'); // Ctrl + i

                else if (key === 74) this.shortcutsLoad(e, 'insertunorderedlist'); // Ctrl + j
                else if (key === 75) this.shortcutsLoad(e, 'insertorderedlist'); // Ctrl + k

                else if (key === 72) this.shortcutsLoad(e, 'superscript'); // Ctrl + h
                else if (key === 76) this.shortcutsLoad(e, 'subscript'); // Ctrl + l
            }
            else
            {
                if (key === 48) this.shortcutsLoadFormat(e, 'p'); // ctrl + alt + 0
                else if (key === 49) this.shortcutsLoadFormat(e, 'h1'); // ctrl + alt + 1
                else if (key === 50) this.shortcutsLoadFormat(e, 'h2'); // ctrl + alt + 2
                else if (key === 51) this.shortcutsLoadFormat(e, 'h3'); // ctrl + alt + 3
                else if (key === 52) this.shortcutsLoadFormat(e, 'h4'); // ctrl + alt + 4
                else if (key === 53) this.shortcutsLoadFormat(e, 'h5'); // ctrl + alt + 5
                else if (key === 54) this.shortcutsLoadFormat(e, 'h6'); // ctrl + alt + 6

            }

        },
        shortcutsLoad: function(e, cmd)
        {
            e.preventDefault();
            this.execCommand(cmd, false);
        },
        shortcutsLoadFormat: function(e, cmd)
        {
            e.preventDefault();
            this.formatBlocks(cmd);
        },

        // FOCUS
        focus: function()
        {
            if (!this.browser('opera')) this.window.setTimeout($.proxy(this.focusSet, this, true), 1);
            else this.$editor.focus();
        },
        focusEnd: function()
        {
            this.focusSet();
        },
        focusSet: function(collapse)
        {
            this.$editor.focus();

            var range = this.getRange();
            range.selectNodeContents(this.$editor[0]);

            // collapse - controls the position of focus: the beginning (true), at the end (false).
            range.collapse(collapse || false);

            var sel = this.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        },

        // TOGGLE
        toggle: function(direct)
        {
            if (this.opts.visual) this.toggleCode(direct);
            else this.toggleVisual();
        },
        toggleVisual: function()
        {
            var html = this.$source.hide().val();

            if (typeof this.modified !== 'undefined')
            {
                this.modified = this.cleanRemoveSpaces(this.modified, false) !== this.cleanRemoveSpaces(html, false);
            }

            if (this.modified)
            {
                // don't remove the iframe even if cleared all.
                if (this.opts.fullpage && html === '') this.setFullpageOnInit(html);
                else
                {
                    this.set(html);
                    if (this.opts.fullpage) this.buildBindKeyboard();
                }
            }

            if (this.opts.iframe) this.$frame.show();
            else this.$editor.show();

            if (this.opts.fullpage) this.$editor.attr('contenteditable', true );

            this.$source.off('keydown.redactor-textarea-indenting');

            this.$editor.focus();
            this.selectionRestore();

            this.observeStart();
            this.buttonActiveVisual();
            this.buttonInactive('html');
            this.opts.visual = true;
        },
        toggleCode: function(direct)
        {
            if (direct !== false) this.selectionSave();

            var height = null;
            if (this.opts.iframe)
            {
                height = this.$frame.height();
                if (this.opts.fullpage) this.$editor.removeAttr('contenteditable');
                this.$frame.hide();
            }
            else
            {
                height = this.$editor.innerHeight();
                this.$editor.hide();
            }

            var html = this.$source.val();

            // tidy html
            if (html !== '' && this.opts.tidyHtml)
            {
                this.$source.val(this.cleanHtml(html));
            }

            this.modified = html;

            this.$source.height(height).show().focus();

            // textarea indenting
            this.$source.on('keydown.redactor-textarea-indenting', this.textareaIndenting);

            this.buttonInactiveVisual();
            this.buttonActive('html');
            this.opts.visual = false;
        },
        textareaIndenting: function(e)
        {
            if (e.keyCode === 9)
            {
                var $el = $(this);
                var start = $el.get(0).selectionStart;
                $el.val($el.val().substring(0, start) + "\t" + $el.val().substring($el.get(0).selectionEnd));
                $el.get(0).selectionStart = $el.get(0).selectionEnd = start + 1;
                return false;
            }
        },

        // AUTOSAVE
        autosave: function()
        {
            var savedHtml = false;
            this.autosaveInterval = setInterval($.proxy(function()
            {
                var html = this.get();
                if (savedHtml !== html)
                {
                    $.ajax({
                        url: this.opts.autosave,
                        type: 'post',
                        data: this.$source.attr('name') + '=' + escape(encodeURIComponent(html)),
                        success: $.proxy(function(data)
                        {
                            this.callback('autosave', false, data);
                            savedHtml = html;

                        }, this)
                    });
                }
            }, this), this.opts.autosaveInterval*1000);
        },

        // TOOLBAR
        toolbarBuild: function()
        {
            // extend buttons
            if (this.opts.air)
            {
                this.opts.buttons = this.opts.airButtons;
            }
            else
            {
                if (!this.opts.buttonSource)
                {
                    var index = this.opts.buttons.indexOf('html'), next = this.opts.buttons[index + 1];
                    this.opts.buttons.splice(index, 1);
                    if (next === '|') this.opts.buttons.splice(index, 1);
                }
            }

            $.extend(this.opts.toolbar, this.opts.buttonsCustom);
            $.each(this.opts.buttonsAdd, $.proxy(function(i, s)
            {
                this.opts.buttons.push(s);

            }, this));

            // formatting tags
            if (this.opts.toolbar)
            {
                $.each(this.opts.toolbar.formatting.dropdown, $.proxy(function (i, s)
                {
                    if ($.inArray(i, this.opts.formattingTags ) == '-1') delete this.opts.toolbar.formatting.dropdown[i];

                }, this));
            }

            // if no buttons don't create a toolbar
            if (this.opts.buttons.length === 0) return false;

            // air enable
            this.airEnable();

            // toolbar build
            this.$toolbar = $('<ul>').addClass('redactor_toolbar').attr('id', 'redactor_toolbar_' + this.uuid);

            if (this.opts.air)
            {
                // air box
                this.$air = $('<div class="redactor_air">').attr('id', 'redactor_air_' + this.uuid).hide();
                this.$air.append(this.$toolbar);
                $('body').append(this.$air);
            }
            else
            {
                if (this.opts.toolbarExternal) $(this.opts.toolbarExternal).html(this.$toolbar);
                else this.$box.prepend(this.$toolbar);
            }

            $.each(this.opts.buttons, $.proxy(function(i, btnName)
            {
                // separator
                if ( btnName === '|' ) this.$toolbar.append($(this.opts.buttonSeparator));
                else if(this.opts.toolbar[btnName])
                {
                    var btnObject = this.opts.toolbar[btnName];
                    if (this.opts.fileUpload === false && btnName === 'file') return true;
                    this.$toolbar.append( $('<li>').append(this.buttonBuild(btnName, btnObject)));
                }

            }, this));

            this.$toolbar.find('a').attr('tabindex', '-1');

            // fixed
            if (this.opts.toolbarFixed)
            {
                this.toolbarObserveScroll();
                $(this.opts.toolbarFixedTarget).on('scroll.redactor', $.proxy(this.toolbarObserveScroll, this));
            }

            // buttons response
            if (this.opts.activeButtons)
            {
                var buttonActiveObserver = $.proxy(this.buttonActiveObserver, this);
                this.$editor.on('mouseup.redactor keyup.redactor', buttonActiveObserver);
            }
        },
        toolbarObserveScroll: function()
        {
            var scrollTop = $(this.opts.toolbarFixedTarget).scrollTop();
            var boxTop = this.$box.offset().top;
            var left = 0;

            var end = boxTop + this.$box.height() + 40;

            if (scrollTop > boxTop)
            {
                var width = '100%';
                if (this.opts.toolbarFixedBox)
                {
                    left = this.$box.offset().left;
                    width = this.$box.innerWidth();
                    this.$toolbar.addClass('toolbar_fixed_box');
                }

                this.toolbarFixed = true;
                this.$toolbar.css({
                    position: 'fixed',
                    width: width,
                    zIndex: 1005,
                    top: this.opts.toolbarFixedTopOffset + 'px',
                    left: left
                });

                if (scrollTop < end) this.$toolbar.css('visibility', 'visible');
                else this.$toolbar.css('visibility', 'hidden');
            }
            else
            {
                this.toolbarFixed = false;
                this.$toolbar.css({
                    position: 'relative',
                    width: 'auto',
                    top: 0,
                    left: left
                });

                if (this.opts.toolbarFixedBox) this.$toolbar.removeClass('toolbar_fixed_box');
            }
        },

        // AIR
        airEnable: function()
        {
            if (!this.opts.air) return;

            this.$editor.on('mouseup.redactor keyup.redactor', this, $.proxy(function(e)
            {
                var text = this.getSelectionText();

                if (e.type === 'mouseup' && text != '') this.airShow(e);
                if (e.type === 'keyup' && e.shiftKey && text != '')
                {
                    var $focusElem = $(this.getElement(this.getSelection().focusNode)), offset = $focusElem.offset();
                    offset.height = $focusElem.height();
                    this.airShow(offset, true);
                }

            }, this));
        },
        airShow: function (e, keyboard)
        {
            if (!this.opts.air) return;

            var left, top;
            $('.redactor_air').hide();

            if (keyboard)
            {
                left = e.left;
                top = e.top + e.height + 14;

                if (this.opts.iframe)
                {
                    top += this.$box.position().top - $(this.document).scrollTop();
                    left += this.$box.position().left;
                }
            }
            else
            {
                var width = this.$air.innerWidth();

                left = e.clientX;
                if ($(this.document).width() < (left + width)) left -= width;

                top = e.clientY + 14;
                if (this.opts.iframe)
                {
                    top += this.$box.position().top;
                    left += this.$box.position().left;
                }
                else top += $( this.document ).scrollTop();
            }

            this.$air.css({
                left: left + 'px',
                top: top + 'px'
            }).show();

            this.airBindHide();
        },
        airBindHide: function()
        {
            if (!this.opts.air) return;

            var hideHandler = $.proxy(function(doc)
            {
                $(doc).on('mousedown.redactor', $.proxy(function(e)
                {
                    if ($( e.target ).closest(this.$toolbar).length === 0)
                    {
                        this.$air.fadeOut(100);
                        this.selectionRemove();
                        $(doc).off(e);
                    }

                }, this)).on('keydown.redactor', $.proxy(function(e)
                {
                    if (e.which === this.keyCode.ESC)
                    {
                        this.getSelection().collapseToStart();
                    }

                    this.$air.fadeOut(100);
                    $(doc).off(e);

                }, this));
            }, this);

            // Hide the toolbar at events in all documents (iframe)
            hideHandler(document);
            if (this.opts.iframe) hideHandler(this.document);
        },
        airBindMousemoveHide: function()
        {
            if (!this.opts.air) return;

            var hideHandler = $.proxy(function(doc)
            {
                $(doc).on('mousemove.redactor', $.proxy(function(e)
                {
                    if ($( e.target ).closest(this.$toolbar).length === 0)
                    {
                        this.$air.fadeOut(100);
                        $(doc).off(e);
                    }

                }, this));
            }, this);

            // Hide the toolbar at events in all documents (iframe)
            hideHandler(document);
            if (this.opts.iframe) hideHandler(this.document);
        },

        // DROPDOWNS
        dropdownBuild: function($dropdown, dropdownObject)
        {
            $.each(dropdownObject, $.proxy(function(btnName, btnObject)
            {
                if (!btnObject.className) btnObject.className = '';

                var $item;
                if (btnObject.name === 'separator') $item = $('<a class="redactor_separator_drop">');
                else
                {
                    $item = $('<a href="#" class="' + btnObject.className + ' redactor_dropdown_' + btnName + '">' + btnObject.title + '</a>');
                    $item.on('click', $.proxy(function(e)
                    {
                        if (e.preventDefault) e.preventDefault();
                        if (this.browser('msie')) e.returnValue = false;

                        if (btnObject.callback) btnObject.callback.call(this, btnName, $item, btnObject, e);
                        if (btnObject.exec) this.execCommand(btnObject.exec, btnName);
                        if (btnObject.func) this[btnObject.func](btnName);

                        this.buttonActiveObserver();
                        if (this.opts.air) this.$air.fadeOut(100);

                    }, this));
                }

                $dropdown.append($item);

            }, this));
        },
        dropdownShow: function(e, key)
        {
            if (!this.opts.visual)
            {
                e.preventDefault();
                return false;
            }

            var $dropdown = this.$toolbar.find('.redactor_dropdown_box_' + key);
            var $button = this.buttonGet(key);

            if ($button.hasClass('dropact')) this.dropdownHideAll();
            else
            {
                this.dropdownHideAll();

                this.buttonActive(key);
                $button.addClass('dropact');

                var keyPosition = $button.position();
                if (this.toolbarFixed)
                {
                    keyPosition = $button.offset();
                }

                // fix right placement
                var dropdownWidth = $dropdown.width();
                if ((keyPosition.left + dropdownWidth) > $(document).width())
                {
                    keyPosition.left -= dropdownWidth;
                }

                var left = keyPosition.left + 'px';
                var btnHeight = 29;

                var position = 'absolute';
                var top = btnHeight + 'px';

                if (this.opts.toolbarFixed && this.toolbarFixed) position = 'fixed';
                else if (!this.opts.air) top = keyPosition.top + btnHeight + 'px';

                $dropdown.css({ position: position, left: left, top: top }).show();
            }


            var hdlHideDropDown = $.proxy(function(e)
            {
                this.dropdownHide(e, $dropdown);

            }, this);

            $(document).one('click', hdlHideDropDown);
            this.$editor.one('click', hdlHideDropDown);

            e.stopPropagation();
        },
        dropdownHideAll: function()
        {
            this.$toolbar.find('a.dropact').removeClass('redactor_act').removeClass('dropact');
            $('.redactor_dropdown').hide();
        },
        dropdownHide: function (e, $dropdown)
        {
            if (!$(e.target).hasClass('dropact'))
            {
                $dropdown.removeClass('dropact');
                this.dropdownHideAll();
            }
        },

        // BUTTONS
        buttonBuild: function(btnName, btnObject)
        {
            var $button = $('<a href="javascript:;" title="' + btnObject.title + '" tabindex="-1" class="redactor_btn redactor_btn_' + btnName + '"></a>');

            $button.on('click', $.proxy(function(e)
            {
                if (e.preventDefault) e.preventDefault();
                if (this.browser('msie')) e.returnValue = false;

                if ($button.hasClass('redactor_button_disabled')) return false;

                if (this.isFocused() === false && !btnObject.exec)
                {
                    this.$editor.focus();
                }

                if (btnObject.exec)
                {
                    this.$editor.focus();
                    this.execCommand(btnObject.exec, btnName);
                    this.airBindMousemoveHide();

                }
                else if (btnObject.func && btnObject.func !== 'show')
                {
                    this[btnObject.func](btnName);
                    this.airBindMousemoveHide();

                }
                else if (btnObject.callback)
                {
                    btnObject.callback.call(this, btnName, $button, btnObject, e);
                    this.airBindMousemoveHide();

                }
                else if (btnObject.dropdown)
                {
                    this.dropdownShow(e, btnName);
                }

                this.buttonActiveObserver(false, btnName);

            }, this));

            // dropdown
            if (btnObject.dropdown)
            {
                var $dropdown = $('<div class="redactor_dropdown redactor_dropdown_box_' + btnName + '" style="display: none;">');
                $dropdown.appendTo(this.$toolbar);
                this.dropdownBuild($dropdown, btnObject.dropdown);
            }

            return $button;
        },
        buttonGet: function(key)
        {
            if (!this.opts.toolbar) return false;
            return $(this.$toolbar.find('a.redactor_btn_' + key));
        },
        buttonActiveToggle: function(key)
        {
            var btn = this.buttonGet(key);

            if (btn.hasClass('redactor_act')) btn.removeClass('redactor_act');
            else btn.addClass('redactor_act');
        },
        buttonActive: function(key)
        {
            this.buttonGet(key).addClass('redactor_act');
        },
        buttonInactive: function(key)
        {
            this.buttonGet(key).removeClass('redactor_act');
        },
        buttonInactiveAll: function(btnName)
        {
            $.each(this.opts.toolbar, $.proxy(function(k)
            {
                if (k != btnName) this.buttonInactive(k);

            }, this));
        },
        buttonActiveVisual: function()
        {
            this.$toolbar.find('a.redactor_btn').not('a.redactor_btn_html').removeClass('redactor_button_disabled');
        },
        buttonInactiveVisual: function()
        {
            this.$toolbar.find('a.redactor_btn').not('a.redactor_btn_html').addClass('redactor_button_disabled');
        },
        buttonChangeIcon: function (key, classname)
        {
            this.buttonGet(key).addClass('redactor_btn_' + classname);
        },
        buttonRemoveIcon: function(key, classname)
        {
            this.buttonGet(key).removeClass('redactor_btn_' + classname);
        },
        buttonAddSeparator: function()
        {
            this.$toolbar.append($(this.opts.buttonSeparator));
        },
        buttonAddSeparatorAfter: function(key)
        {
            this.buttonGet(key).parent().after($(this.opts.buttonSeparator));
        },
        buttonAddSeparatorBefore: function(key)
        {
            this.buttonGet(key).parent().before($(this.opts.buttonSeparator));
        },
        buttonRemoveSeparatorAfter: function(key)
        {
            this.buttonGet(key).parent().next().remove();
        },
        buttonRemoveSeparatorBefore: function(key)
        {
            this.buttonGet(key).parent().prev().remove();
        },
        buttonSetRight: function(key)
        {
            if (!this.opts.toolbar) return;
            this.buttonGet(key).parent().addClass('redactor_btn_right');
        },
        buttonSetLeft: function(key)
        {
            if (!this.opts.toolbar) return;
            this.buttonGet(key).parent().removeClass('redactor_btn_right');
        },
        buttonAdd: function(key, title, callback, dropdown)
        {
            if (!this.opts.toolbar) return;
            var btn = this.buttonBuild(key, { title: title, callback: callback, dropdown: dropdown });
            this.$toolbar.append( $('<li>').append(btn));
        },
        buttonAddFirst: function(key, title, callback, dropdown)
        {
            if (!this.opts.toolbar) return;
            var btn = this.buttonBuild(key, { title: title, callback: callback, dropdown: dropdown });
            this.$toolbar.prepend($('<li>').append(btn));
        },
        buttonAddAfter: function(afterkey, key, title, callback, dropdown)
        {
            if (!this.opts.toolbar) return;
            var btn = this.buttonBuild(key, { title: title, callback: callback, dropdown: dropdown });
            var $btn = this.buttonGet(afterkey);

            if ($btn.size() !== 0) $btn.parent().after($('<li>').append(btn));
            else this.$toolbar.append($('<li>').append(btn));
        },
        buttonAddBefore: function(beforekey, key, title, callback, dropdown)
        {
            if (!this.opts.toolbar) return;
            var btn = this.buttonBuild(key, { title: title, callback: callback, dropdown: dropdown });
            var $btn = this.buttonGet(beforekey);

            if ($btn.size() !== 0) $btn.parent().before($('<li>').append(btn));
            else this.$toolbar.append($('<li>').append(btn));
        },
        buttonRemove: function (key, separator)
        {
            var $btn = this.buttonGet(key);
            if (separator) $btn.parent().next().remove();
            $btn.parent().removeClass('redactor_btn_right');
            $btn.remove();
        },
        buttonActiveObserver: function(e, btnName)
        {
            var parent = this.getParent();
            this.buttonInactiveAll(btnName);

            if (e === false && btnName !== 'html')
            {
                if ($.inArray(btnName, this.opts.activeButtons) != -1)
                {
                    this.buttonActiveToggle(btnName);
                }
                return;
            }

            if (parent && parent.tagName === 'A') this.$toolbar.find('a.redactor_dropdown_link').text(this.opts.curLang.link_edit);
            else this.$toolbar.find('a.redactor_dropdown_link').text(this.opts.curLang.link_insert);

            if (this.opts.activeButtonsAdd)
            {
                $.each(this.opts.activeButtonsAdd, $.proxy(function(i,s)
                {
                    this.opts.activeButtons.push(s);

                }, this));

                $.extend(this.opts.activeButtonsStates, this.opts.activeButtonsAdd);
            }

            $.each(this.opts.activeButtonsStates, $.proxy(function(key, value)
            {
                if ($(parent).closest(key, this.$editor.get()[0]).length != 0)
                {
                    this.buttonActive(value);
                }

            }, this));

            var $parent = $(parent).closest(this.opts.alignmentTags.toString().toLowerCase(), this.$editor[0]);
            if ($parent.length)
            {
                var align = $parent.css('text-align');

                switch (align)
                {
                    case 'right':
                        this.buttonActive('alignright');
                    break;
                    case 'center':
                        this.buttonActive('aligncenter');
                    break;
                    case 'justify':
                        this.buttonActive('justify');
                    break;
                    default:
                        this.buttonActive('alignleft');
                    break;
                }
            }
        },

        // EXEC
        exec: function(cmd, param, sync)
        {
            if (cmd === 'formatblock' && this.browser('msie')) param = '<' + param + '>';

            if (cmd === 'inserthtml' && this.browser('msie'))
            {
                this.$editor.focus();
                this.document.selection.createRange().pasteHTML(param);
            }
            else
            {
                this.document.execCommand(cmd, false, param);
            }

            if (sync !== false) this.sync();
            this.callback('execCommand', cmd, param);
        },
        execCommand: function(cmd, param, sync)
        {
            if (!this.opts.visual)
            {
                this.$source.focus();
                return false;
            }

            if (cmd === 'inserthtml')
            {
                this.insertHtml(param, sync);
                this.callback('execCommand', cmd, param);
                return;
            }

            // Stop formatting pre
            if (this.currentOrParentIs('PRE') && !this.opts.formattingPre) return false;

            // Lists
            if (cmd === 'insertunorderedlist' || cmd === 'insertorderedlist') return this.execLists(cmd, param);

            // Unlink
            if (cmd === 'unlink') return this.execUnlink(cmd, param);

            // Usual exec
            this.exec(cmd, param, sync);

            // Line
            if (cmd === 'inserthorizontalrule') this.$editor.find('hr').removeAttr('id');

        },
        execUnlink: function(cmd, param)
        {
            this.bufferSet();

            var link = this.currentOrParentIs('A');
            if (link)
            {
                $(link).replaceWith($(link).text());

                this.sync();
                this.callback('execCommand', cmd, param);
                return;
            }
        },
        execLists: function(cmd, param)
        {
            this.bufferSet();

            var parent = this.getParent();
            var $list = $(parent).closest('ol, ul');
            var remove = false;

            if ($list.length)
            {
                remove = true;
                var listTag = $list[0].tagName;
                if ((cmd === 'insertunorderedlist' && listTag === 'OL')
                || (cmd === 'insertorderedlist' && listTag === 'UL'))
                {
                    remove = false;
                }
            }

            this.selectionSave();

            // remove lists
            if (remove)
            {
                var nodes = this.getNodes();
                var elems = this.getBlocks(nodes);

                if (typeof nodes[0] != 'undefined' && nodes.length > 1 && nodes[0].nodeType == 3)
                {
                    // fix the adding the first li to the array
                    elems.unshift(this.getBlock());
                }

                var data = '', replaced = '';
                $.each(elems, $.proxy(function(i,s)
                {
                    if (s.tagName == 'LI')
                    {
                        var $s = $(s);
                        var cloned = $s.clone();
                        cloned.find('ul', 'ol').remove();

                        if (this.opts.linebreaks === false) data += this.outerHtml($('<p>').append(cloned.contents()));
                        else data += cloned.html() + '<br>';

                        if (i == 0)
                        {
                            $s.addClass('redactor-replaced').empty();
                            replaced = this.outerHtml($s);
                        }
                        else $s.remove();
                    }

                }, this));

                html = this.$editor.html().replace(replaced, '</' + listTag + '>' + data + '<' + listTag + '>');

                this.$editor.html(html);
                this.$editor.find(listTag + ':empty').remove();

            }

            // insert lists
            else
            {
                var firstParent = this.getParent();

                this.document.execCommand(cmd);

                var parent = this.getParent();
                var $list = $(parent).closest('ol, ul');

                if (firstParent && firstParent.tagName == 'TD')
                {
                    $list.wrapAll('<td>');
                }

                if ($list.length)
                {
                    if ((this.browser('msie') || this.browser('mozilla')) && parent.tagName !== 'LI')
                    {
                        $(parent).replaceWith($(parent).html());
                    }

                    var $listParent = $list.parent();
                    if (this.isParentRedactor($listParent) && this.nodeTestBlocks($listParent[0]))
                    {
                        $listParent.replaceWith($listParent.contents());
                    }
                }

                if (this.browser('mozilla')) this.$editor.focus();

            }

            this.selectionRestore();

            this.sync();
            this.callback('execCommand', cmd, param);
            return;
        },

        // INDENTING
        indentingIndent: function()
        {
            this.indentingStart('indent');
        },
        indentingOutdent: function()
        {
            this.indentingStart('outdent');
        },
        indentingStart: function(cmd)
        {
            this.bufferSet();

            if (cmd === 'indent')
            {
                var block = this.getBlock();

                this.selectionSave();

                if (block && block.tagName == 'LI')
                {
                    // li
                    var parent = this.getParent();

                    var $list = $(parent).closest('ol, ul');
                    var listTag = $list[0].tagName;

                    var elems = this.getBlocks();

                    $.each(elems, function(i,s)
                    {
                        if (s.tagName == 'LI')
                        {
                            var $prev = $(s).prev();
                            if ($prev.size() != 0 && $prev[0].tagName == 'LI')
                            {
                                var $childList = $prev.children('ul, ol');
                                if ($childList.size() == 0)
                                {
                                    $prev.append($('<' + listTag + '>').append(s));
                                }
                                else $childList.append(s);
                            }
                        }
                    });
                }
                // linebreaks
                else if (block === false && this.opts.linebreaks === true)
                {
                    this.exec('formatBlock', 'blockquote');
                    var newblock = this.getBlock();
                    var block = $('<div data-tagblock="">').html($(newblock).html());
                    $(newblock).replaceWith(block);

                    var left = this.normalize($(block).css('margin-left')) + this.opts.indentValue;
                    $(block).css('margin-left', left + 'px');
                }
                else
                {
                    // all block tags
                    var elements = this.getBlocks();
                    $.each(elements, $.proxy(function(i, elem)
                    {
                        var $el = false;

                        if (elem.tagName === 'TD') return;

                        if ($.inArray(elem.tagName, this.opts.alignmentTags) !== -1)
                        {
                            $el = $(elem);
                        }
                        else
                        {
                            $el = $(elem).closest(this.opts.alignmentTags.toString().toLowerCase(), this.$editor[0]);
                        }

                        var left = this.normalize($el.css('margin-left')) + this.opts.indentValue;
                        $el.css('margin-left', left + 'px');

                    }, this));
                }

                this.selectionRestore();

            }
            // outdent
            else
            {
                this.selectionSave();

                var block = this.getBlock();
                if (block && block.tagName == 'LI')
                {
                    // li
                    var elems = this.getBlocks();
                    var index = 0;

                    this.insideOutdent(block, index, elems);
                }
                else
                {
                    // all block tags
                    var elements = this.getBlocks();
                    $.each(elements, $.proxy(function(i, elem)
                    {
                        var $el = false;

                        if ($.inArray(elem.tagName, this.opts.alignmentTags) !== -1)
                        {
                            $el = $(elem);
                        }
                        else
                        {
                            $el = $(elem).closest(this.opts.alignmentTags.toString().toLowerCase(), this.$editor[0]);
                        }

                        var left = this.normalize($el.css('margin-left')) - this.opts.indentValue;
                        if (left <= 0)
                        {
                            // linebreaks
                            if (this.opts.linebreaks === true && typeof($el.data('tagblock')) !== 'undefined')
                            {
                                $el.replaceWith($el.html());
                            }
                            // all block tags
                            else
                            {
                                $el.css('margin-left', '');
                                this.removeEmptyAttr($el, 'style');
                            }
                        }
                        else
                        {
                            $el.css('margin-left', left + 'px');
                        }

                    }, this));
                }


                this.selectionRestore();
            }

            this.sync();

        },
        insideOutdent: function (li, index, elems)
        {
            if (li && li.tagName == 'LI')
            {
                var $parent = $(li).parent().parent();
                if ($parent.size() != 0 && $parent[0].tagName == 'LI')
                {
                    $parent.after(li);
                }
                else
                {
                    if (typeof elems[index] != 'undefined')
                    {
                        li = elems[index];
                        index++;

                        this.insideOutdent(li, index, elems);
                    }
                    else
                    {
                        this.execCommand('insertunorderedlist');
                    }
                }
            }
        },

        // ALIGNMENT
        alignmentLeft: function()
        {
            this.alignmentSet('', 'JustifyLeft');
        },
        alignmentRight: function()
        {
            this.alignmentSet('right', 'JustifyRight');
        },
        alignmentCenter: function()
        {
            this.alignmentSet('center', 'JustifyCenter');
        },
        alignmentJustify: function()
        {
            this.alignmentSet('justify', 'JustifyFull');
        },
        alignmentSet: function(type, cmd)
        {
            this.bufferSet();

            if (this.oldIE())
            {
                this.document.execCommand(cmd, false, false);
                return true;
            }

            this.selectionSave();

            var block = this.getBlock();
            if (!block && this.opts.linebreaks)
            {
                // one element
                this.exec('formatBlock', 'blockquote');
                var newblock = this.getBlock();
                var block = $('<div data-tagblock="">').html($(newblock).html());
                $(newblock).replaceWith(block);

                $(block).css('text-align', type);
                this.removeEmptyAttr(block, 'style');

                if (type == '' && typeof($(block).data('tagblock')) !== 'undefined')
                {
                    $(block).replaceWith($(block).html());
                }
            }
            else
            {
                var elements = this.getBlocks();
                $.each(elements, $.proxy(function(i, elem)
                {
                    var $el = false;

                    if ($.inArray(elem.tagName, this.opts.alignmentTags) !== -1)
                    {
                        $el = $(elem);
                    }
                    else
                    {
                        $el = $(elem).closest(this.opts.alignmentTags.toString().toLowerCase(), this.$editor[0]);
                    }

                    if ($el)
                    {
                        $el.css('text-align', type);
                        this.removeEmptyAttr($el, 'style');
                    }

                }, this));
            }

            this.selectionRestore();

            this.sync();
        },

        // CLEAN
        cleanEmpty: function(html)
        {
            var ph = this.placeholderStart(html);
            if (ph !== false) return ph;

            if (this.opts.linebreaks === false)
            {
                if (html === '') html = this.opts.emptyHtml;
                else if (html.search(/^<hr\s?\/?>$/gi) !== -1) html = '<hr>' + this.opts.emptyHtml;
            }

            return html;
        },
        cleanConverters: function(html)
        {
            // convert div to p
            if (this.opts.convertDivs) html = html.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, '<p$1>$2</p>');
            if (this.opts.paragraphy) html = this.cleanParagraphy(html);

            return html;
        },
        cleanConvertProtected: function(html)
        {
            if (this.opts.templateVars)
            {
                html = html.replace(/\{\{(.*?)\}\}/gi, '<!-- template double $1 -->');
                html = html.replace(/\{(.*?)\}/gi, '<!-- template $1 -->');
            }

            html = html.replace(/<script(.*?)>([\w\W]*?)<\/script>/gi, '<title type="text/javascript" style="display: none;" class="redactor-script-tag"$1>$2</title>');
            html = html.replace(/<style(.*?)>([\w\W]*?)<\/style>/gi, '<section$1 style="display: none;" rel="redactor-style-tag">$2</section>');
            html = html.replace(/<form(.*?)>([\w\W]*?)<\/form>/gi, '<section$1 rel="redactor-form-tag">$2</section>');

            // php tags convertation
            if (this.opts.phpTags) html = html.replace(/<\?php([\w\W]*?)\?>/gi, '<section style="display: none;" rel="redactor-php-tag">$1</section>');
            else html = html.replace(/<\?php([\w\W]*?)\?>/gi, '');

            return html;
        },
        cleanReConvertProtected: function(html)
        {
            if (this.opts.templateVars)
            {
                html = html.replace(/<!-- template double (.*?) -->/gi, '{{$1}}');
                html = html.replace(/<!-- template (.*?) -->/gi, '{$1}');
            }

            html = html.replace(/<title type="text\/javascript" style="display: none;" class="redactor-script-tag"(.*?)>([\w\W]*?)<\/title>/gi, '<script$1 type="text/javascript">$2</script>');
            html = html.replace(/<section(.*?) style="display: none;" rel="redactor-style-tag">([\w\W]*?)<\/section>/gi, '<style$1>$2</style>');
            html = html.replace(/<section(.*?)rel="redactor-form-tag"(.*?)>([\w\W]*?)<\/section>/gi, '<form$1$2>$3</form>');

            // php tags convertation
            if (this.opts.phpTags) html = html.replace(/<section style="display: none;" rel="redactor-php-tag">([\w\W]*?)<\/section>/gi, '<?php\r\n$1\r\n?>');

            return html;
        },
        cleanRemoveSpaces: function(html, buffer)
        {
            if (buffer !== false)
            {
                var buffer = []
                var matches = html.match(/<(pre|style|script|title)(.*?)>([\w\W]*?)<\/(pre|style|script|title)>/gi);
                if (matches === null) matches = [];

                if (this.opts.phpTags)
                {
                    var phpMatches = html.match(/<\?php([\w\W]*?)\?>/gi);
                    if (phpMatches) matches = $.merge(matches, phpMatches);
                }

                if (matches)
                {
                    $.each(matches, function(i, s)
                    {
                        html = html.replace(s, 'buffer_' + i);
                        buffer.push(s);
                    });
                }
            }

            html = html.replace(/\n/g, ' ');
            html = html.replace(/[\t]*/g, '');
            html = html.replace(/\n\s*\n/g, "\n");
            html = html.replace(/^[\s\n]*/g, ' ');
            html = html.replace(/[\s\n]*$/g, ' ');
            html = html.replace( />\s{2,}</g, '> <'); // between inline tags can be only one space

            html = this.cleanReplacer(html, buffer);

            html = html.replace(/\n\n/g, "\n");

            return html;
        },
        cleanReplacer: function(html, buffer)
        {
            if (buffer === false) return html;

            $.each(buffer, function(i,s)
            {
                html = html.replace('buffer_' + i, s);
            });

            return html;
        },
        cleanRemoveEmptyTags: function(html)
        {
            html = html.replace(/<span>([\w\W]*?)<\/span>/gi, '$1');

            // remove zero width-space
            html = html.replace(/[\u200B-\u200D\uFEFF]/g, '');

            var etagsInline = ["<b>\\s*</b>", "<b>&nbsp;</b>", "<em>\\s*</em>"]
            var etags = ["<pre></pre>", "<blockquote>\\s*</blockquote>", "<dd></dd>", "<dt></dt>", "<ul></ul>", "<ol></ol>", "<li></li>", "<table></table>", "<tr></tr>", "<span>\\s*<span>", "<span>&nbsp;<span>", "<p>\\s*</p>", "<p></p>", "<p>&nbsp;</p>",  "<p>\\s*<br>\\s*</p>", "<div>\\s*</div>", "<div>\\s*<br>\\s*</div>"];

            if (this.opts.removeEmptyTags)
            {
                etags = etags.concat(etagsInline);
            }
            else etags = etagsInline;

            var len = etags.length;
            for (var i = 0; i < len; ++i)
            {
                html = html.replace(new RegExp(etags[i], 'gi'), "");
            }

            return html;
        },
        cleanParagraphy: function(html)
        {
            html = $.trim(html);

            if (this.opts.linebreaks === true) return html;
            if (html === '' || html === '<p></p>') return this.opts.emptyHtml;

            html = html + "\n";


            var safes = [];
            var matches = html.match(/<(table|div|pre|object)(.*?)>([\w\W]*?)<\/(table|div|pre|object)>/gi);
            if (!matches) matches = [];

            var commentsMatches = html.match(/<!--([\w\W]*?)-->/gi);
            if (commentsMatches) matches = $.merge(matches, commentsMatches);

            if (this.opts.phpTags)
            {
                var phpMatches = html.match(/<section(.*?)rel="redactor-php-tag">([\w\W]*?)<\/section>/gi);
                if (phpMatches) matches = $.merge(matches, phpMatches);
            }

            if (matches)
            {
                $.each(matches, function(i,s)
                {
                    safes[i] = s;
                    html = html.replace(s, '{replace' + i + '}\n');
                });
            }

            html = html.replace(/<br \/>\s*<br \/>/gi, "\n\n");

            function R(str, mod, r)
            {
                return html.replace(new RegExp(str, mod), r);
            }

            var blocks = '(comment|html|body|head|title|meta|style|script|link|iframe|table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|select|option|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)';

            html = R('(<' + blocks + '[^>]*>)', 'gi', "\n$1");
            html = R('(</' + blocks + '>)', 'gi', "$1\n\n");
            html = R("\r\n", 'g', "\n");
            html = R("\r", 'g', "\n");
            html = R("/\n\n+/", 'g', "\n\n");

            var htmls = html.split(new RegExp('\n\s*\n', 'g'), -1);

            html = '';
            for (var i in htmls)
            {
                if (htmls.hasOwnProperty(i))
                {
                    if (htmls[i].search('{replace') == -1)
                    {
                        html += '<p>' +  htmls[i].replace(/^\n+|\n+$/g, "") + "</p>";
                    }
                    else html += htmls[i];
                }
            }

            html = R('<p>\s*</p>', 'gi', '');
            html = R('<p>([^<]+)</(div|address|form)>', 'gi', "<p>$1</p></$2>");
            html = R('<p>\s*(</?' + blocks + '[^>]*>)\s*</p>', 'gi', "$1");
            html = R("<p>(<li.+?)</p>", 'gi', "$1");
            html = R('<p>\s*(</?' + blocks + '[^>]*>)', 'gi', "$1");

            html = R('(</?' + blocks + '[^>]*>)\s*</p>', 'gi', "$1");
            html = R('(</?' + blocks + '[^>]*>)\s*<br />', 'gi', "$1");
            html = R('<br />(\s*</?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)', 'gi', '$1');
            html = R("\n</p>", 'gi', '</p>');

            html = R('<li><p>', 'gi', '<li>');
            html = R('</p></li>', 'gi', '</li>');
            html = R('</li><p>', 'gi', '</li>');
            //html = R('</ul><p>(.*?)</li>', 'gi', '</ul></li>');
            /* html = R('</ol><p>', 'gi', '</ol>'); */
            html = R('<p>\t?\n?<p>', 'gi', '<p>');
            html = R('</dt><p>', 'gi', '</dt>');
            html = R('</dd><p>', 'gi', '</dd>');
            html = R('<br></p></blockquote>', 'gi', '</blockquote>');
            html = R('<p>\t*</p>', 'gi', '');


            // restore safes
            $.each(safes, function(i,s)
            {
                html = html.replace('{replace' + i + '}', s);
            });

            return $.trim(html);
        },
        cleanConvertInlineTags: function(html, set)
        {
            var boldTag = 'strong';
            if (this.opts.boldTag === 'b') boldTag = 'b';

            var italicTag = 'em';
            if (this.opts.italicTag === 'i') italicTag = 'i';

            html = html.replace(/<span style="font-style: italic;">([\w\W]*?)<\/span>/gi, '<' + italicTag + '>$1</' + italicTag + '>');
            html = html.replace(/<span style="font-weight: bold;">([\w\W]*?)<\/span>/gi, '<' + boldTag + '>$1</' + boldTag + '>');

            // bold, italic, del
            if (this.opts.boldTag === 'strong') html = html.replace(/<b>([\w\W]*?)<\/b>/gi, '<strong>$1</strong>');
            else html = html.replace(/<strong>([\w\W]*?)<\/strong>/gi, '<b>$1</b>');

            if (this.opts.italicTag === 'em') html = html.replace(/<i>([\w\W]*?)<\/i>/gi, '<em>$1</em>');
            else html = html.replace(/<em>([\w\W]*?)<\/em>/gi, '<i>$1</i>');

            if (set !== true)
            {
                html = html.replace(/<strike>([\w\W]*?)<\/strike>/gi, '<del>$1</del>');
            }
            else
            {
                html = html.replace(/<del>([\w\W]*?)<\/del>/gi, '<strike>$1</strike>');
            }

            return html;
        },
        cleanStripTags: function(html)
        {
            if (html == '' || typeof html == 'undefined') return html;

            var allowed = false;
            if (this.opts.allowedTags !== false) allowed = true;

            var arr = allowed === true ? this.opts.allowedTags : this.opts.deniedTags;

            var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
            html = html.replace(tags, function ($0, $1)
            {
                if (allowed === true) return $.inArray($1.toLowerCase(), arr) > '-1' ? $0 : '';
                else return $.inArray($1.toLowerCase(), arr) > '-1' ? '' : $0;
            });

            html = this.cleanConvertInlineTags(html);

            return html;

        },
        cleanSavePreCode: function(html, encode)
        {
            var pre = html.match(/<(pre|code)(.*?)>([\w\W]*?)<\/(pre|code)>/gi);
            if (pre !== null)
            {
                $.each(pre, $.proxy(function(i,s)
                {
                    var arr = s.match(/<(pre|code)(.*?)>([\w\W]*?)<\/(pre|code)>/i);

                    arr[3] = arr[3].replace(/&nbsp;/g, ' ');

                    if (encode !== false) arr[3] = this.cleanEncodeEntities(arr[3]);

                    html = html.replace(s, '<' + arr[1] + arr[2] + '>' + arr[3] + '</' + arr[1] + '>');

                }, this));
            }

            return html;
        },
        cleanEncodeEntities: function(str)
        {
            str = String(str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        },
        cleanUnverified: function()
        {
            // label, abbr, mark, meter, code, q, dfn, ins, time, kbd, var
            var $elem = this.$editor.find('li, img, a, b, strong, sub, sup, i, em, u, small, strike, del, span, cite');

            $elem.filter('[style*="background-color: transparent;"][style*="line-height"]')
            .css('background-color', '')
            .css('line-height', '');

            $elem.filter('[style*="background-color: transparent;"]')
            .css('background-color', '');

            $elem.css('line-height', '');

            $.each($elem, $.proxy(function(i,s)
            {
                this.removeEmptyAttr(s, 'style');
            }, this));

            // When we paste text in Safari is wrapping inserted div (remove it)
            this.$editor.find('div[style="text-align: -webkit-auto;"]').contents().unwrap();
        },
        cleanHtml: function(code)
        {
            var i = 0,
            codeLength = code.length,
            point = 0,
            start = null,
            end = null,
            tag = '',
            out = '',
            cont = '';

            this.cleanlevel = 0;

            for (; i < codeLength; i++)
            {
                point = i;

                // if no more tags, copy and exit
                if (-1 == code.substr(i).indexOf( '<' ))
                {
                    out += code.substr(i);

                    return this.cleanFinish(out);
                }

                // copy verbatim until a tag
                while (point < codeLength && code.charAt(point) != '<')
                {
                    point++;
                }

                if (i != point)
                {
                    cont = code.substr(i, point - i);
                    if (!cont.match(/^\s{2,}$/g))
                    {
                        if ('\n' == out.charAt(out.length - 1)) out += this.cleanGetTabs();
                        else if ('\n' == cont.charAt(0))
                        {
                            out += '\n' + this.cleanGetTabs();
                            cont = cont.replace(/^\s+/, '');
                        }

                        out += cont;
                    }

                    if (cont.match(/\n/)) out += '\n' + this.cleanGetTabs();
                }

                start = point;

                // find the end of the tag
                while (point < codeLength && '>' != code.charAt(point))
                {
                    point++;
                }

                tag = code.substr(start, point - start);
                i = point;

                var t;

                if ('!--' == tag.substr(1, 3))
                {
                    if (!tag.match(/--$/))
                    {
                        while ('-->' != code.substr(point, 3))
                        {
                            point++;
                        }
                        point += 2;
                        tag = code.substr(start, point - start);
                        i = point;
                    }

                    if ('\n' != out.charAt(out.length - 1)) out += '\n';

                    out += this.cleanGetTabs();
                    out += tag + '>\n';
                }
                else if ('!' == tag[1])
                {
                    out = this.placeTag(tag + '>', out);
                }
                else if ('?' == tag[1])
                {
                    out += tag + '>\n';
                }
                else if (t = tag.match(/^<(script|style|pre)/i))
                {
                    t[1] = t[1].toLowerCase();
                    tag = this.cleanTag(tag);
                    out = this.placeTag(tag, out);
                    end = String(code.substr(i + 1)).toLowerCase().indexOf('</' + t[1]);

                    if (end)
                    {
                        cont = code.substr(i + 1, end);
                        i += end;
                        out += cont;
                    }
                }
                else
                {
                    tag = this.cleanTag(tag);
                    out = this.placeTag(tag, out);
                }
            }

            return this.cleanFinish( out );
        },
        cleanGetTabs: function()
        {
            var s = '';
            for ( var j = 0; j < this.cleanlevel; j++ )
            {
                s += '\t';
            }

            return s;
        },
        cleanFinish: function(code)
        {
            code = code.replace( /\n\s*\n/g, '\n' );
            code = code.replace( /^[\s\n]*/, '' );
            code = code.replace( /[\s\n]*$/, '' );
            code = code.replace( /<script(.*?)>\n<\/script>/gi, '<script$1></script>' );

            this.cleanlevel = 0;

            return code;
        },
        cleanTag: function (tag)
        {
            var tagout = '';
            tag = tag.replace(/\n/g, ' ');
            tag = tag.replace(/\s{2,}/g, ' ');
            tag = tag.replace(/^\s+|\s+$/g, ' ');

            var suffix = '';
            if (tag.match(/\/$/))
            {
                suffix = '/';
                tag = tag.replace(/\/+$/, '');
            }

            var m;
            while (m = /\s*([^= ]+)(?:=((['"']).*?\3|[^ ]+))?/.exec(tag))
            {
                if (m[2]) tagout += m[1].toLowerCase() + '=' + m[2];
                else if (m[1]) tagout += m[1].toLowerCase();

                tagout += ' ';
                tag = tag.substr(m[0].length);
            }

            return tagout.replace(/\s*$/, '') + suffix + '>';
        },
        placeTag: function (tag, out)
        {
            var nl = tag.match(this.cleannewLevel);
            if (tag.match(this.cleanlineBefore) || nl)
            {
                out = out.replace(/\s*$/, '');
                out += '\n';
            }

            if (nl && '/' == tag.charAt(1)) this.cleanlevel--;
            if ('\n' == out.charAt(out.length - 1)) out += this.cleanGetTabs();
            if (nl && '/' != tag.charAt(1)) this.cleanlevel++;

            out += tag;

            if (tag.match(this.cleanlineAfter) || tag.match(this.cleannewLevel))
            {
                out = out.replace(/ *$/, '');
                out += '\n';
            }

            return out;
        },

        // FORMAT
        formatEmpty: function(e)
        {
            var html = $.trim(this.$editor.html());

            if (this.opts.linebreaks)
            {
                if (html == '')
                {
                    e.preventDefault();
                    this.$editor.html('');
                    this.focus();
                }
            }
            else
            {
                html = html.replace(/<br\s?\/?>/i, '');
                var thtml = html.replace(/<p>\s?<\/p>/gi, '');

                if (html === '' || thtml === '')
                {
                    e.preventDefault();

                    var node = $(this.opts.emptyHtml).get(0);
                    this.$editor.html(node);
                    this.focus();
                }
            }

            this.sync();
        },
        formatBlocks: function(tag)
        {
            this.bufferSet();

            var nodes = this.getBlocks();
            this.selectionSave();

            $.each(nodes, $.proxy(function(i, node)
            {
                if (node.tagName !== 'LI')
                {
                    var parent = $(node).parent();

                    if (tag === 'p')
                    {
                        if ((node.tagName === 'P'
                        && parent.size() != 0
                        && parent[0].tagName === 'BLOCKQUOTE')
                        ||
                        node.tagName === 'BLOCKQUOTE')
                        {
                            this.formatQuote();
                            return;
                        }
                        else if (this.opts.linebreaks) return;
                        else
                        {
                            this.formatBlock(tag, node);
                        }
                    }
                    else
                    {
                        this.formatBlock(tag, node);
                    }
                }

            }, this));

            this.selectionRestore();
            this.sync();
        },
        formatBlock: function(tag, block)
        {
            if (block === false) block = this.getBlock();
            if (block === false)
            {
                if (this.opts.linebreaks === true) this.execCommand('formatblock', tag);
                return true;
            }

            var contents = '';
            if (tag !== 'pre')
            {
                contents = $(block).contents();
            }
            else
            {
                //contents = this.cleanEncodeEntities($(block).text());
                contents = $(block).html();
                if ($.trim(contents) === '')
                {
                    contents = '<span id="selection-marker-1"></span>';
                }
            }

            if (block.tagName === 'PRE') tag = 'p';

            if (this.opts.linebreaks === true && tag === 'p')
            {
                $(block).replaceWith($('<div>').append(contents).html() + '<br>');
            }
            else
            {
                var parent = this.getParent();

                var node = $('<' + tag + '>').append(contents);
                $(block).replaceWith(node);

                if (parent && parent.tagName == 'TD')
                {
                    $(node).wrapAll('<td>');
                }
            }
        },
        formatChangeTag: function(fromElement, toTagName, save)
        {
            if (save !== false) this.selectionSave();

            var newElement = $('<' + toTagName + '/>');
            $(fromElement).replaceWith(function() { return newElement.append($(this).contents()); });

            if (save !== false) this.selectionRestore();

            return newElement;
        },

        // QUOTE
        formatQuote: function()
        {
            this.bufferSet();

            // paragraphy
            if (this.opts.linebreaks === false)
            {
                this.selectionSave();

                var blocks = this.getBlocks();

                var blockquote = false;
                var blocksLen = blocks.length;
                if (blocks)
                {
                    var data = '';
                    var replaced = '';
                    var replace = false;
                    var paragraphsOnly = true;

                    $.each(blocks, function(i,s)
                    {
                        if (s.tagName !== 'P') paragraphsOnly = false;
                    });

                    $.each(blocks, $.proxy(function(i,s)
                    {
                        if (s.tagName === 'BLOCKQUOTE')
                        {
                            this.formatBlock('p', s, false);
                        }
                        else if (s.tagName === 'P')
                        {
                            blockquote = $(s).parent();
                            // from blockquote
                            if (blockquote[0].tagName == 'BLOCKQUOTE')
                            {
                                var count = $(blockquote).children('p').size();

                                // one
                                if (count == 1)
                                {
                                    $(blockquote).replaceWith(s);
                                }
                                // all
                                else if (count == blocksLen)
                                {
                                    replace = 'blockquote';
                                    data += this.outerHtml(s);
                                }
                                // some
                                else
                                {
                                    replace = 'html';
                                    data += this.outerHtml(s);

                                    if (i == 0)
                                    {
                                        $(s).addClass('redactor-replaced').empty();
                                        replaced = this.outerHtml(s);
                                    }
                                    else $(s).remove();
                                }
                            }
                            // to blockquote
                            else
                            {
                                if (paragraphsOnly === false || blocks.length == 1)
                                {
                                    this.formatBlock('blockquote', s, false);
                                }
                                else
                                {
                                    replace = 'paragraphs';
                                    data += this.outerHtml(s);
                                }
                            }

                        }
                        else if (s.tagName !== 'LI')
                        {
                            this.formatBlock('blockquote', s, false);
                        }

                    }, this));

                    if (replace)
                    {
                        if (replace == 'paragraphs')
                        {
                            $(blocks[0]).replaceWith('<blockquote>' + data + '</blockquote>');
                            $(blocks).remove();
                        }
                        else if (replace == 'blockquote')
                        {
                            $(blockquote).replaceWith(data);
                        }
                        else if (replace == 'html')
                        {
                            var html = this.$editor.html().replace(replaced, '</blockquote>' + data + '<blockquote>');

                            this.$editor.html(html);
                            this.$editor.find('blockquote').each(function()
                            {
                                if ($.trim($(this).html()) == '') $(this).remove();
                            })
                        }
                    }
                }

                this.selectionRestore();
            }
            // linebreaks
            else
            {
                var block = this.getBlock();
                if (block.tagName === 'BLOCKQUOTE')
                {
                    this.selectionSave();

                    var html = $.trim($(block).html());
                    var selection = $.trim(this.getSelectionHtml());

                    html = html.replace(/<span(.*?)id="selection-marker(.*?)<\/span>/gi, '');

                    if (html == selection)
                    {
                        $(block).replaceWith($(block).html() + '<br>');
                    }
                    else
                    {
                        // replace
                        this.inlineFormat('tmp');
                        var tmp = this.$editor.find('tmp');
                        tmp.empty();

                        var newhtml = this.$editor.html().replace('<tmp></tmp>', '</blockquote><span id="selection-marker-1">' + this.opts.invisibleSpace + '</span>' + selection + '<blockquote>');

                        this.$editor.html(newhtml);
                        tmp.remove();
                        this.$editor.find('blockquote').each(function()
                        {
                            if ($.trim($(this).html()) == '') $(this).remove();
                        })
                    }

                    this.selectionRestore();
                    this.$editor.find('span#selection-marker-1').attr('id', false);
                }
                else
                {
                    var wrapper = this.selectionWrap('blockquote');
                    var html = $(wrapper).html();

                    var blocksElemsRemove = ['ul', 'ol', 'table', 'tr', 'tbody', 'thead', 'tfoot', 'dl'];
                    $.each(blocksElemsRemove, function(i,s)
                    {
                        html = html.replace(new RegExp('<' + s + '(.*?)>', 'gi'), '');
                        html = html.replace(new RegExp('</' + s + '>', 'gi'), '');
                    });

                    var blocksElems = this.opts.blockLevelElements;
                    blocksElems.push('td');
                    $.each(blocksElems, function(i,s)
                    {
                        html = html.replace(new RegExp('<' + s + '(.*?)>', 'gi'), '');
                        html = html.replace(new RegExp('</' + s + '>', 'gi'), '<br>');
                    });

                    $(wrapper).html(html);
                    this.selectionElement(wrapper);
                    var next = $(wrapper).next();
                    if (next.size() != 0 && next[0].tagName === 'BR')
                    {
                        next.remove();
                    }
                }
            }

            this.sync();
        },

        // BLOCK
        blockRemoveAttr: function(attr, value)
        {
            var nodes = this.getBlocks();
            $(nodes).removeAttr(attr);

            this.sync();
        },
        blockSetAttr: function(attr, value)
        {
            var nodes = this.getBlocks();
            $(nodes).attr(attr, value);

            this.sync();
        },
        blockRemoveStyle: function(rule)
        {
            var nodes = this.getBlocks();
            $(nodes).css(rule, '');
            this.removeEmptyAttr(nodes, 'style');

            this.sync();
        },
        blockSetStyle: function (rule, value)
        {
            var nodes = this.getBlocks();
            $(nodes).css(rule, value);

            this.sync();
        },
        blockRemoveClass: function(className)
        {
            var nodes = this.getBlocks();
            $(nodes).removeClass(className);
            this.removeEmptyAttr(nodes, 'class');

            this.sync();
        },
        blockSetClass: function(className)
        {
            var nodes = this.getBlocks();
            $(nodes).addClass(className);

            this.sync();
        },

        // INLINE
        inlineRemoveClass: function(className)
        {
            this.selectionSave();

            this.inlineEachNodes(function(node)
            {
                $(node).removeClass(className);
                this.removeEmptyAttr(node, 'class');
            });

            this.selectionRestore();
            this.sync();
        },

        inlineSetClass: function(className)
        {
            var current = this.getCurrent();
            if (!$(current).hasClass(className)) this.inlineMethods('addClass', className);
        },
        inlineRemoveStyle: function (rule)
        {
            this.selectionSave();

            this.inlineEachNodes(function(node)
            {
                $(node).css(rule, '');
                this.removeEmptyAttr(node, 'style');
            });

            this.selectionRestore();
            this.sync();
        },
        inlineSetStyle: function(rule, value)
        {
            this.inlineMethods('css', rule, value);
        },
        inlineRemoveAttr: function (attr)
        {
            this.selectionSave();

            var range = this.getRange(), node = this.getElement(), nodes = this.getNodes();

            if (range.collapsed || range.startContainer === range.endContainer && node)
            {
                nodes = $( node );
            }

            $(nodes).removeAttr(attr);

            this.inlineUnwrapSpan();

            this.selectionRestore();
            this.sync();
        },
        inlineSetAttr: function(attr, value)
        {
            this.inlineMethods('attr', attr, value );
        },
        inlineMethods: function(type, attr, value)
        {
            this.bufferSet();
            this.selectionSave();

            var range = this.getRange()
            var el = this.getElement();

            if ((range.collapsed || range.startContainer === range.endContainer) && el && !this.nodeTestBlocks(el))
            {
                $(el)[type](attr, value);
            }
            else
            {
                this.document.execCommand('fontSize', false, 4 );

                var fonts = this.$editor.find('font');
                $.each(fonts, $.proxy(function(i, s)
                {
                    this.inlineSetMethods(type, s, attr, value);

                }, this));
            }

            this.selectionRestore();

            this.sync();
        },
        inlineSetMethods: function(type, s, attr, value)
        {
            var parent = $(s).parent(), el;

            if (parent && parent[0].tagName === 'INLINE' && parent[0].attributes.length != 0)
            {
                el = parent;
                $(s).replaceWith($(s).html());
            }
            else
            {
                el = $('<inline>').append($(s).contents());
                $(s).replaceWith(el);
            }

            $(el)[type](attr, value);

            return el;
        },
        // Sort elements and execute callback
        inlineEachNodes: function(callback)
        {
            var range = this.getRange(),
                node = this.getElement(),
                nodes = this.getNodes(),
                collapsed;

            if (range.collapsed || range.startContainer === range.endContainer && node)
            {
                nodes = $(node);
                collapsed = true;
            }

            $.each(nodes, $.proxy(function(i, node)
            {
                if (!collapsed && node.tagName !== 'INLINE')
                {
                    if (node.parentNode.tagName === 'INLINE' && !$(node.parentNode).hasClass('redactor_editor'))
                    {
                        node = node.parentNode;
                    }
                    else return;
                }
                callback.call(this, node);

            }, this ) );
        },
        inlineUnwrapSpan: function()
        {
            var $spans = this.$editor.find('inline');

            $.each($spans, $.proxy(function(i, span)
            {
                var $span = $(span);

                if ($span.attr('class') === undefined && $span.attr('style') === undefined)
                {
                    $span.contents().unwrap();
                }

            }, this));
        },
        inlineFormat: function(tag)
        {
            this.selectionSave();

            this.document.execCommand('fontSize', false, 4 );

            var fonts = this.$editor.find('font');
            var last;
            $.each(fonts, function(i, s)
            {
                var el = $('<' + tag + '/>').append($(s).contents());
                $(s).replaceWith(el);
                last = el;
            });

            this.selectionRestore();

            this.sync();
        },
        inlineRemoveFormat: function(tag)
        {
            this.selectionSave();

            var utag = tag.toUpperCase();
            var nodes = this.getNodes();
            var parent = $(this.getParent()).parent();

            $.each(nodes, function(i, s)
            {
                if (s.tagName === utag) this.inlineRemoveFormatReplace(s);
            });

            if (parent && parent[0].tagName === utag) this.inlineRemoveFormatReplace(parent);

            this.selectionRestore();
            this.sync();
        },
        inlineRemoveFormatReplace: function(el)
        {
            $(el).replaceWith($(el).contents());
        },

        // INSERT
        insertHtml: function (html, sync)
        {
            var current = this.getCurrent();
            var parent = current.parentNode;

            this.$editor.focus();

            this.bufferSet();

            var $html = $('<div>').append($.parseHTML(html));
            html = $html.html();

            html = this.cleanRemoveEmptyTags(html);

            // Update value
            $html = $('<div>').append($.parseHTML(html));

            var currBlock = this.getBlock();

            if ($html.contents().length == 1)
            {
                var htmlTagName = $html.contents()[0].tagName;

                // If the inserted and received text tags match
                if (htmlTagName != 'P' && htmlTagName == currBlock.tagName || htmlTagName == 'PRE')
                {
                    html = $html.text();
                    $html = $('<div>').append(html);
                }
            }

            // add text in a paragraph
            if (!this.opts.linebreaks && $html.contents().length == 1 && $html.contents()[0].nodeType == 3
                && (this.getRangeSelectedNodes().length > 2 || (!current || current.tagName == 'BODY' && !parent || parent.tagName == 'HTML')))
            {
                html = '<p>' + html + '</p>';
            }

            html = this.setSpansVerifiedHtml(html);

            if ($html.contents().length > 1 && currBlock
                    || $html.contents().is('p, :header, ul, ol, li, div, table, td, blockquote, pre, address, section, header, footer, aside, article'))
            {
                if (this.browser('msie')) this.document.selection.createRange().pasteHTML(html);
                else this.document.execCommand('inserthtml', false, html);
            }
            else this.insertHtmlAdvanced(html, false);

            if (this.selectall)
            {
                this.window.setTimeout($.proxy(function()
                {
                    if (!this.opts.linebreaks) this.selectionEnd(this.$editor.contents().last());
                    else this.focusEnd();

                }, this), 1);
            }

            this.observeStart();

            // set no editable
            this.setNonEditable();

            if (sync !== false) this.sync();
        },
        insertHtmlAdvanced: function(html, sync)
        {
            html = this.setSpansVerifiedHtml(html);

            var sel = this.getSelection();

            if (sel.getRangeAt && sel.rangeCount)
            {
                var range = sel.getRangeAt(0);
                range.deleteContents();

                var el = this.document.createElement('div');
                el.innerHTML = html;
                var frag = this.document.createDocumentFragment(), node, lastNode;
                while ((node = el.firstChild))
                {
                    lastNode = frag.appendChild(node);
                }

                range.insertNode(frag);

                if (lastNode)
                {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }

            if (sync !== false)
            {
                this.sync();
            }

        },
        insertBeforeCursor: function(html)
        {
            html = this.setSpansVerifiedHtml(html);

            var node = $(html);

            var space = document.createElement("span");
            space.innerHTML = "\u200B";

            var range = this.getRange();
            range.insertNode(space);
            range.insertNode(node[0]);
            range.collapse(false);

            var sel = this.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);

            this.sync();
        },
        insertText: function(html)
        {
            var $html = $($.parseHTML(html));

            if ($html.length) html = $html.text();

            this.$editor.focus();

            if (this.browser('msie')) this.document.selection.createRange().pasteHTML(html);
            else this.document.execCommand('inserthtml', false, html);

            this.sync();
        },
        insertNode: function(node)
        {
            node = node[0] || node;

            if (node.tagName == 'SPAN')
            {
                var replacementTag = 'inline';

                var outer = node.outerHTML;

                // Replace opening tag
                var regex = new RegExp('<' + node.tagName, 'i');
                var newTag = outer.replace(regex, '<' + replacementTag);

                // Replace closing tag
                regex = new RegExp('</' + node.tagName, 'i');
                newTag = newTag.replace(regex, '</' + replacementTag);
                node = $(newTag)[0];
            }

            var sel = this.getSelection();
            if (sel.getRangeAt && sel.rangeCount)
            {
                // with delete contents
                range = sel.getRangeAt(0);
                range.deleteContents();
                range.insertNode(node);
                range.setEndAfter(node);
                range.setStartAfter(node);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        },
        insertNodeToCaretPositionFromPoint: function(e, node)
        {
            var range;
            var x = e.clientX, y = e.clientY;
            if (this.document.caretPositionFromPoint)
            {
                var pos = this.document.caretPositionFromPoint(x, y);
                range = this.getRange();
                range.setStart(pos.offsetNode, pos.offset);
                range.collapse(true);
                range.insertNode(node);
            }
            else if (this.document.caretRangeFromPoint)
            {
                range = this.document.caretRangeFromPoint(x, y);
                range.insertNode(node);
            }
            else if (typeof document.body.createTextRange != "undefined")
            {
                range = this.document.body.createTextRange();
                range.moveToPoint(x, y);
                var endRange = range.duplicate();
                endRange.moveToPoint(x, y);
                range.setEndPoint("EndToEnd", endRange);
                range.select();
            }

        },
        insertAfterLastElement: function(element, parent)
        {
            if (typeof(parent) != 'undefined') element = parent;

            if (this.isEndOfElement())
            {
                if (this.opts.linebreaks)
                {
                    var contents = $('<div>').append($.trim(this.$editor.html())).contents();
                    if (this.outerHtml(contents.last()[0]) != this.outerHtml(element))
                    {
                        return false;
                    }
                }
                else
                {
                    if (this.$editor.contents().last()[0] !== element)
                    {
                        return false;
                    }
                }

                this.insertingAfterLastElement(element);
            }
        },
        insertingAfterLastElement: function(element)
        {
            this.bufferSet();

            if (this.opts.linebreaks === false)
            {
                var node = $(this.opts.emptyHtml);
                $(element).after(node);
                this.selectionStart(node);
            }
            else
            {
                var node = $('<span id="selection-marker-1">' + this.opts.invisibleSpace + '</span>', this.document)[0];
                $(element).after(node);
                $(node).after(this.opts.invisibleSpace);
                this.selectionRestore();
                this.$editor.find('span#selection-marker-1').removeAttr('id');
            }
        },
        insertLineBreak: function()
        {
            this.selectionSave();
            this.$editor.find('#selection-marker-1').before('<br>' + (this.browser('webkit') ? this.opts.invisibleSpace : ''));
            this.selectionRestore();
        },
        insertDoubleLineBreak: function()
        {
            this.selectionSave();
            this.$editor.find('#selection-marker-1').before('<br><br>' + (this.browser('webkit') ? this.opts.invisibleSpace : ''));
            this.selectionRestore();
        },
        replaceLineBreak: function(element)
        {
            //var node = this.document.createTextNode('\uFEFF');
            var node = $('<br>' + this.opts.invisibleSpace);
            $(element).replaceWith(node);
            this.selectionStart(node);
        },

        // PASTE
        pasteClean: function(html)
        {
            html = this.callback('pasteBefore', false, html);

            // ie10 fix paste links
            if (this.browser('msie'))
            {
                var tmp = $.trim(html);
                if (tmp.search(/^<a(.*?)>(.*?)<\/a>$/i) == 0)
                {
                    html = html.replace(/^<a(.*?)>(.*?)<\/a>$/i, "$2");
                }
            }

            if (this.opts.pastePlainText)
            {
                var tmp = this.document.createElement('div');

                html = html.replace(/<br>|<\/H[1-6]>|<\/p>|<\/div>/gi, '\n');

                tmp.innerHTML = html;
                html = tmp.textContent || tmp.innerText;

                html = $.trim(html);
                html = html.replace('\n', '<br>');
                html = this.cleanParagraphy(html);

                this.pasteInsert(html);
                return false;
            }

            // clean up pre
            if (this.currentOrParentIs('PRE'))
            {
                html = this.pastePre(html);
                this.pasteInsert(html);
                return true;
            }


            // ms word list
            html = html.replace(/<p(.*?)class="MsoListParagraphCxSpFirst"([\w\W]*?)<\/p>/gi, '<ul><li$2</li>');
            html = html.replace(/<p(.*?)class="MsoListParagraphCxSpMiddle"([\w\W]*?)<\/p>/gi, '<li$2</li>');
            html = html.replace(/<p(.*?)class="MsoListParagraphCxSpLast"([\w\W]*?)<\/p>/gi, '<li$2</li></ul>');
            // one line
            html = html.replace(/<p(.*?)class="MsoListParagraph"([\w\W]*?)<\/p>/gi, '<ul><li$2</li></ul>');
            // remove ms word's bullet
            html = html.replace(/·/g, '');

            // remove comments and php tags
            html = html.replace(/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi, '');

            // remove nbsp
            html = html.replace(/(&nbsp;){2,}/gi, '&nbsp;');
            html = html.replace(/&nbsp;/gi, ' ');

            // remove google docs marker
            html = html.replace(/<b\sid="internal-source-marker(.*?)">([\w\W]*?)<\/b>/gi, "$2");
            html = html.replace(/<b(.*?)id="docs-internal-guid(.*?)">([\w\W]*?)<\/b>/gi, "$3");

            // strip tags
            html = this.cleanStripTags(html);

            // prevert
            html = html.replace(/<td><\/td>/gi, '[td]');
            html = html.replace(/<td>&nbsp;<\/td>/gi, '[td]');
            html = html.replace(/<td><br><\/td>/gi, '[td]');
            html = html.replace(/<td(.*?)colspan="(.*?)"(.*?)>([\w\W]*?)<\/td>/gi, '[td colspan="$2"]$4[/td]');
            html = html.replace(/<td(.*?)rowspan="(.*?)"(.*?)>([\w\W]*?)<\/td>/gi, '[td rowspan="$2"]$4[/td]');
            html = html.replace(/<a(.*?)href="(.*?)"(.*?)>([\w\W]*?)<\/a>/gi, '[a href="$2"]$4[/a]');
            html = html.replace(/<iframe(.*?)>([\w\W]*?)<\/iframe>/gi, '[iframe$1]$2[/iframe]');
            html = html.replace(/<video(.*?)>([\w\W]*?)<\/video>/gi, '[video$1]$2[/video]');
            html = html.replace(/<audio(.*?)>([\w\W]*?)<\/audio>/gi, '[audio$1]$2[/audio]');
            html = html.replace(/<embed(.*?)>([\w\W]*?)<\/embed>/gi, '[embed$1]$2[/embed]');
            html = html.replace(/<object(.*?)>([\w\W]*?)<\/object>/gi, '[object$1]$2[/object]');
            html = html.replace(/<param(.*?)>/gi, '[param$1]');
            html = html.replace(/<img(.*?)>/gi, '[img$1]');

            // remove classes
            html = html.replace(/ class="(.*?)"/gi, '');

            // remove all attributes
            html = html.replace(/<(\w+)([\w\W]*?)>/gi, '<$1>');

            // remove empty
            html = html.replace(/<[^\/>][^>]*>(\s*|\t*|\n*|&nbsp;|<br>)<\/[^>]+>/gi, '');
            html = html.replace(/<div>\s*?\t*?\n*?(<ul>|<ol>|<p>)/gi, '$1');

            // revert
            html = html.replace(/\[td colspan="(.*?)"\]([\w\W]*?)\[\/td\]/gi, '<td colspan="$1">$2</td>');
            html = html.replace(/\[td rowspan="(.*?)"\]([\w\W]*?)\[\/td\]/gi, '<td rowspan="$1">$2</td>');
            html = html.replace(/\[td\]/gi, '<td>&nbsp;</td>');
            html = html.replace(/\[a href="(.*?)"\]([\w\W]*?)\[\/a\]/gi, '<a href="$1">$2</a>');
            html = html.replace(/\[iframe(.*?)\]([\w\W]*?)\[\/iframe\]/gi, '<iframe$1>$2</iframe>');
            html = html.replace(/\[video(.*?)\]([\w\W]*?)\[\/video\]/gi, '<video$1>$2</video>');
            html = html.replace(/\[audio(.*?)\]([\w\W]*?)\[\/audio\]/gi, '<audio$1>$2</audio>');
            html = html.replace(/\[embed(.*?)\]([\w\W]*?)\[\/embed\]/gi, '<embed$1>$2</embed>');
            html = html.replace(/\[object(.*?)\]([\w\W]*?)\[\/object\]/gi, '<object$1>$2</object>');
            html = html.replace(/\[param(.*?)\]/gi, '<param$1>');
            html = html.replace(/\[img(.*?)\]/gi, '<img$1>');

            // convert div to p
            if (this.opts.convertDivs)
            {
                html = html.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, '<p>$2</p>');
                html = html.replace(/<\/div><p>/gi, '<p>');
                html = html.replace(/<\/p><\/div>/gi, '</p>');
            }

            if (this.currentOrParentIs('LI'))
            {
                html = html.replace(/<p>([\w\W]*?)<\/p>/gi, '$1<br>');
            }
            else
            {
                html = this.cleanParagraphy(html);
            }


            // remove span
            html = html.replace(/<span(.*?)>([\w\W]*?)<\/span>/gi, '$2');

            // remove empty
            html = html.replace(/<img>/gi, '');
            html = html.replace(/<[^\/>][^>][^img|param|source]*>(\s*|\t*|\n*|&nbsp;|<br>)<\/[^>]+>/gi, '');

            html = html.replace(/\n{3,}/gi, '\n');

            // remove dirty p
            html = html.replace(/<p><p>/gi, '<p>');
            html = html.replace(/<\/p><\/p>/gi, '</p>');

            html = html.replace(/<li>(\s*|\t*|\n*)<p>/gi, '<li>');
            html = html.replace(/<\/p>(\s*|\t*|\n*)<\/li>/gi, '</li>');

            if (this.opts.linebreaks === true)
            {
                html = html.replace(/<p(.*?)>([\w\W]*?)<\/p>/gi, '$2<br>');
            }

            // remove empty finally
            html = html.replace(/<[^\/>][^>][^img|param|source]*>(\s*|\t*|\n*|&nbsp;|<br>)<\/[^>]+>/gi, '');

            // remove safari local images
            html = html.replace(/<img src="webkit-fake-url\:\/\/(.*?)"(.*?)>/gi, '');

            // remove p in td
            html = html.replace(/<td(.*?)>(\s*|\t*|\n*)<p>([\w\W]*?)<\/p>(\s*|\t*|\n*)<\/td>/gi, '<td$1>$3</td>');

            // remove divs
            html = html.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, '$2');
            html = html.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, '$2');

            // FF specific
            this.pasteClipboardMozilla = false;
            if (this.browser('mozilla'))
            {
                if (this.opts.clipboardUpload)
                {
                    var matches = html.match(/<img src="data:image(.*?)"(.*?)>/gi);
                    if (matches !== null)
                    {
                        this.pasteClipboardMozilla = matches;
                        for (k in matches)
                        {
                            var img = matches[k].replace('<img', '<img data-mozilla-paste-image="' + k + '" ');
                            html = html.replace(matches[k], img);
                        }
                    }
                }

                // FF fix
                while (/<br>$/gi.test(html))
                {
                    html = html.replace(/<br>$/gi, '');
                }
            }

            // bullets again
            html = html.replace(/<p>•([\w\W]*?)<\/p>/gi, '<li>$1</li>');

            // ie inserts a blank font tags when pasting
            while (/<font>([\w\W]*?)<\/font>/gi.test(html))
            {
                html = html.replace(/<font>([\w\W]*?)<\/font>/gi, '$1');
            }


            this.pasteInsert(html);

        },
        pastePre: function(s)
        {
            s = s.replace(/<br>|<\/H[1-6]>|<\/p>|<\/div>/gi, '\n');

            var tmp = this.document.createElement('div');
            tmp.innerHTML = s;
            return this.cleanEncodeEntities(tmp.textContent || tmp.innerText);
        },
        pasteInsert: function(html)
        {
            if (this.selectall)
            {
                if (!this.opts.linebreaks) this.$editor.html(this.opts.emptyHtml);
                else this.$editor.html('');

                this.$editor.focus();
            }

            html = this.callback('pasteAfter', false, html);

            this.insertHtml(html);

            this.selectall = false;
            setTimeout($.proxy(function()
            {
                this.rtePaste = false;

                // FF specific
                if (this.browser('mozilla'))
                {
                    this.$editor.find('p:empty').remove()
                }
                if (this.pasteClipboardMozilla !== false)
                {
                    this.pasteClipboardUploadMozilla();
                }

            }, this), 100);

            if (this.opts.autoresize && this.fullscreen !== true) $(this.document.body).scrollTop(this.saveScroll);
            else this.$editor.scrollTop(this.saveScroll);
        },
        pasteClipboardUploadMozilla: function()
        {
            var imgs = this.$editor.find('img[data-mozilla-paste-image]');
            $.each(imgs, $.proxy(function(i,s)
            {
                var $s = $(s);
                var arr = s.src.split(",");
                var data = arr[1]; // raw base64
                var contentType = arr[0].split(";")[0].split(":")[1];

                $.post(this.opts.clipboardUploadUrl, {
                    contentType: contentType,
                    data: data
                },
                $.proxy(function(data)
                {
                    var json = (typeof data === 'string' ? $.parseJSON(data) : data);
                    $s.attr('src', json.filelink);
                    $s.removeAttr('data-mozilla-paste-image');

                    this.sync();

                    // upload callback
                    this.callback('imageUpload', $s, json);

                }, this));

            }, this));
        },
        pasteClipboardUpload: function(e)
        {
            var result = e.target.result;
            var arr = result.split(",");
            var data = arr[1]; // raw base64
            var contentType = arr[0].split(";")[0].split(":")[1];

            if (this.opts.clipboardUpload)
            {
                $.post(this.opts.clipboardUploadUrl, {
                    contentType: contentType,
                    data: data
                },
                $.proxy(function(data)
                {
                    var json = (typeof data === 'string' ? $.parseJSON(data) : data);

                    var html = '<img src="' + json.filelink + '" id="clipboard-image-marker" />';
                    this.execCommand('inserthtml', html, false);

                    var image = $(this.$editor.find('img#clipboard-image-marker'));

                    if (image.length) image.removeAttr('id');
                    else image = false;

                    this.sync();

                    // upload callback
                    if (image)
                    {
                        this.callback('imageUpload', image, json);
                    }


                }, this));
            }
            else
            {
                this.insertHtml('<img src="' + result + '" />');
            }
        },

        // BUFFER
        bufferSet: function(html)
        {
            if (html !== undefined) this.opts.buffer.push(html);
            else
            {
                this.selectionSave();
                this.opts.buffer.push(this.$editor.html());
                this.selectionRemoveMarkers('buffer');
            }
        },
        bufferUndo: function()
        {
            if (this.opts.buffer.length === 0)
            {
                this.$editor.focus();
                return;
            }

            // rebuffer
            this.selectionSave();
            this.opts.rebuffer.push(this.$editor.html());
            this.selectionRestore(false, true);

            this.$editor.html(this.opts.buffer.pop());

            this.selectionRestore();
            setTimeout($.proxy(this.observeStart, this), 100);
        },
        bufferRedo: function()
        {
            if (this.opts.rebuffer.length === 0)
            {
                this.$editor.focus();
                return false;
            }

            // buffer
            this.selectionSave();
            this.opts.buffer.push(this.$editor.html());
            this.selectionRestore(false, true);

            this.$editor.html(this.opts.rebuffer.pop());
            this.selectionRestore(true);
            setTimeout($.proxy(this.observeStart, this), 4);
        },

        // OBSERVE
        observeStart: function()
        {
            this.observeImages();

            if (this.opts.observeLinks) this.observeLinks();
        },
        observeLinks: function()
        {
            this.$editor.find('a').on('click', $.proxy(this.linkObserver, this));
            this.$editor.on('click.redactor', $.proxy(function(e)
            {
                this.linkObserverTooltipClose(e);

            }, this));
        },
        observeImages: function()
        {
            if (this.opts.observeImages === false) return false;

            this.$editor.find('img').each($.proxy(function(i, elem)
            {
                if (this.browser('msie')) $(elem).attr('unselectable', 'on');
                this.imageResize(elem);

            }, this));
        },
        linkObserver: function(e)
        {
            var $link = $(e.target);
            var pos = $link.offset();
            if (this.opts.iframe)
            {
                var posFrame = this.$frame.offset();
                pos.top = posFrame.top + (pos.top - $(this.document).scrollTop());
                pos.left += posFrame.left;
            }

            var tooltip = $('<span class="redactor-link-tooltip"></span>');

            var href = $link.attr('href');
            if (href.length > 24) href = href.substring(0,24) + '...';

            var aLink = $('<a href="' + $link.attr('href') + '" target="_blank">' + href + '</a>').on('click', $.proxy(function(e)
            {
                this.linkObserverTooltipClose(false);
            }, this));

            var aEdit = $('<a href="#">' + this.opts.curLang.edit + '</a>').on('click', $.proxy(function(e)
            {
                e.preventDefault();
                this.linkShow();
                this.linkObserverTooltipClose(false);

            }, this));

            var aUnlink = $('<a href="#">' + this.opts.curLang.unlink + '</a>').on('click', $.proxy(function(e)
            {
                e.preventDefault();
                this.execCommand('unlink');
                this.linkObserverTooltipClose(false);

            }, this));


            tooltip.append(aLink);
            tooltip.append(' | ');
            tooltip.append(aEdit);
            tooltip.append(' | ');
            tooltip.append(aUnlink);
            tooltip.css({
                top: (pos.top + 20) + 'px',
                left: pos.left + 'px'
            });

            $('.redactor-link-tooltip').remove();
            $('body').append(tooltip);
        },
        linkObserverTooltipClose: function(e)
        {
            if (e !== false && e.target.tagName == 'A') return false;
            $('.redactor-link-tooltip').remove();
        },

        // SELECTION
        getSelection: function()
        {
            if (!this.opts.rangy) return this.document.getSelection();
            else // rangy
            {
                if (!this.opts.iframe) return rangy.getSelection();
                else return rangy.getSelection(this.$frame[0]);
            }
        },
        getRange: function()
        {
            if (!this.opts.rangy)
            {
                if (this.document.getSelection)
                {
                    var sel = this.getSelection();
                    if (sel.getRangeAt && sel.rangeCount) return sel.getRangeAt(0);
                }

                return this.document.createRange();
            }
            else // rangy
            {
                if (!this.opts.iframe) return rangy.createRange();
                else return rangy.createRange(this.iframeDoc());
            }
        },
        selectionElement: function(node)
        {
            this.setCaret(node);
        },
        selectionStart: function(node)
        {
            this.selectionSet(node[0] || node, 0, null, 0);
        },
        selectionEnd: function(node)
        {
            this.selectionSet(node[0] || node, 1, null, 1);
        },
        selectionSet: function(orgn, orgo, focn, foco)
        {
            if (focn == null) focn = orgn;
            if (foco == null) foco = orgo;

            var sel = this.getSelection();
            if (!sel) return;

            var range = this.getRange();
            range.setStart(orgn, orgo);
            range.setEnd(focn, foco );

            try {
                sel.removeAllRanges();
            } catch (e) {}

            sel.addRange(range);
        },
        selectionWrap: function(tag)
        {
            tag = tag.toLowerCase();

            var block = this.getBlock();
            if (block)
            {
                var wrapper = this.formatChangeTag(block, tag);
                this.sync();
                return wrapper;
            }

            var sel = this.getSelection();
            var range = sel.getRangeAt(0);
            var wrapper = document.createElement(tag);
            wrapper.appendChild(range.extractContents());
            range.insertNode(wrapper);

            this.selectionElement(wrapper);

            return wrapper;
        },
        selectionAll: function()
        {
            var range = this.getRange();
            range.selectNodeContents(this.$editor[0]);

            var sel = this.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        },
        selectionRemove: function()
        {
            this.getSelection().removeAllRanges();
        },
        getCaretOffset: function (element)
        {
            var caretOffset = 0;

            var range = this.getRange();
            var preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = $.trim(preCaretRange.toString()).length;

            return caretOffset;
        },
        getCaretOffsetRange: function()
        {
            return new Range(this.getSelection().getRangeAt(0));
        },
        setCaret: function (el, start, end)
        {
            if (typeof end === 'undefined') end = start;
            el = el[0] || el;

            var range = this.getRange();
            range.selectNodeContents(el);

            var textNodes = this.getTextNodesIn(el);
            var foundStart = false;
            var charCount = 0, endCharCount;

            if (textNodes.length == 1 && start)
            {
                range.setStart(textNodes[0], start);
                range.setEnd(textNodes[0], end);
            }
            else
            {
                for (var i = 0, textNode; textNode = textNodes[i++];)
                {
                    endCharCount = charCount + textNode.length;
                    if (!foundStart && start >= charCount && (start < endCharCount || (start == endCharCount && i < textNodes.length)))
                    {
                        range.setStart(textNode, start - charCount);
                        foundStart = true;
                    }

                    if (foundStart && end <= endCharCount)
                    {
                        range.setEnd( textNode, end - charCount );
                        break;
                    }

                    charCount = endCharCount;
                }
            }

            var sel = this.getSelection();
            sel.removeAllRanges();
            sel.addRange( range );
        },
        getTextNodesIn: function (node)
        {
            var textNodes = [];

            if (node.nodeType == 3) textNodes.push(node);
            else
            {
                var children = node.childNodes;
                for (var i = 0, len = children.length; i < len; ++i)
                {
                    textNodes.push.apply(textNodes, this.getTextNodesIn(children[i]));
                }
            }

            return textNodes;
        },

        // GET ELEMENTS
        getCurrent: function()
        {
            var el = false;
            var sel = this.getSelection();

            if (sel.rangeCount > 0) el = sel.getRangeAt(0).startContainer;

            return this.isParentRedactor(el);
        },
        getParent: function(elem)
        {
            elem = elem || this.getCurrent();
            if (elem) return this.isParentRedactor( $( elem ).parent()[0] );
            else return false;
        },
        getBlock: function(node)
        {
            if (typeof node === 'undefined') node = this.getCurrent();

            while (node)
            {
                if (this.nodeTestBlocks(node))
                {
                    if ($(node).hasClass('redactor_editor')) return false;
                    return node;
                }

                node = node.parentNode;
            }

            return false;
        },
        getBlocks: function(nodes)
        {
            var newnodes = [];
            if (typeof nodes == 'undefined')
            {
                var range = this.getRange();
                if (range && range.collapsed === true) return [this.getBlock()];
                var nodes = this.getNodes(range);
            }

            $.each(nodes, $.proxy(function(i,node)
            {
                if (this.opts.iframe === false && $(node).parents('div.redactor_editor').size() == 0) return false;
                if (this.nodeTestBlocks(node)) newnodes.push(node);

            }, this));

            if (newnodes.length === 0) newnodes = [this.getBlock()];

            return newnodes;
        },
        nodeTestBlocks: function(node)
        {
            return node.nodeType == 1 && this.rTestBlock.test(node.nodeName);
        },
        tagTestBlock: function(tag)
        {
            return this.rTestBlock.test(tag);
        },
        getNodes: function(range, tag)
        {
            if (typeof range == 'undefined' || range == false) var range = this.getRange();
            if (range && range.collapsed === true)
            {
                if (typeof tag === 'undefined' && this.tagTestBlock(tag))
                {
                    var block = this.getBlock();
                    if (block.tagName == tag) return [block];
                    else return [];
                }
                else
                {
                    return [this.getCurrent()];
                }
            }

            var nodes = [], finalnodes = [];

            var sel = this.document.getSelection();
            if (!sel.isCollapsed) nodes = this.getRangeSelectedNodes(sel.getRangeAt(0));

            $.each(nodes, $.proxy(function(i,node)
            {
                if (this.opts.iframe === false && $(node).parents('div.redactor_editor').size() == 0) return false;

                if (typeof tag === 'undefined')
                {
                    if ($.trim(node.textContent) != '')
                    {
                        finalnodes.push(node);
                    }
                }
                else if (node.tagName == tag)
                {
                    finalnodes.push(node);
                }

            }, this));

            if (finalnodes.length == 0)
            {
                if (typeof tag === 'undefined' && this.tagTestBlock(tag))
                {
                    var block = this.getBlock();
                    if (block.tagName == tag) return finalnodes.push(block);
                    else return [];
                }
                else
                {
                    finalnodes.push(this.getCurrent());
                }
            }

            // last element filtering
            var last = finalnodes[finalnodes.length-1];
            if (this.nodeTestBlocks(last))
            {
                finalnodes = finalnodes.slice(0, -1);
            }

            return finalnodes;
        },
        getElement: function(node)
        {
            if (!node) node = this.getCurrent();
            while (node)
            {
                if (node.nodeType == 1)
                {
                    if ($(node).hasClass('redactor_editor')) return false;
                    return node;
                }

                node = node.parentNode;
            }

            return false;
        },
        getRangeSelectedNodes: function(range)
        {
            range = range || this.getRange();
            var node = range.startContainer;
            var endNode = range.endContainer;

            if (node == endNode) return [node];

            var rangeNodes = [];
            while (node && node != endNode)
            {
                rangeNodes.push(node = this.nextNode(node));
            }

            node = range.startContainer;
            while (node && node != range.commonAncestorContainer)
            {
                rangeNodes.unshift(node);
                node = node.parentNode;
            }

            return rangeNodes;
        },
        nextNode: function(node)
        {
            if (node.hasChildNodes()) return node.firstChild;
            else
            {
                while (node && !node.nextSibling)
                {
                    node = node.parentNode;
                }

                if (!node) return null;
                return node.nextSibling;
            }
        },

        // GET SELECTION HTML OR TEXT
        getSelectionText: function()
        {
            return this.getSelection().toString();
        },
        getSelectionHtml: function()
        {
            var html = '';

            var sel = this.getSelection();
            if (sel.rangeCount)
            {
                var container = this.document.createElement( "div" );
                var len = sel.rangeCount;
                for (var i = 0; i < len; ++i)
                {
                    container.appendChild(sel.getRangeAt(i).cloneContents());
                }

                html = container.innerHTML;
            }

            return this.syncClean(html);
        },

        // SAVE & RESTORE
        selectionSave: function()
        {
            if (!this.isFocused()) this.$editor.focus();

            if (!this.opts.rangy)
            {
                this.selectionCreateMarker(this.getRange());
            }
            // rangy
            else
            {
                this.savedSel = rangy.saveSelection();
            }
        },
        selectionCreateMarker: function(range, remove)
        {
            if (!range) return;

            var node1 = $('<span id="selection-marker-1" class="redactor-selection-marker">' + this.opts.invisibleSpace + '</span>', this.document)[0];
            var node2 = $('<span id="selection-marker-2" class="redactor-selection-marker">' + this.opts.invisibleSpace + '</span>', this.document)[0];

            if (range.collapsed === true)
            {
                this.selectionSetMarker(range, node1, true);
            }
            else
            {
                this.selectionSetMarker(range, node1, true);
                this.selectionSetMarker(range, node2, false);
            }

            this.savedSel = this.$editor.html();

            this.selectionRestore(false, false);
        },
        selectionSetMarker: function(range, node, type)
        {
            var boundaryRange = range.cloneRange();

            boundaryRange.collapse(type);

            boundaryRange.insertNode(node);
            boundaryRange.detach();
        },
        selectionRestore: function(replace, remove)
        {
            if (!this.opts.rangy)
            {
                if (replace === true && this.savedSel)
                {
                    this.$editor.html(this.savedSel);
                }

                var node1 = this.$editor.find('span#selection-marker-1');
                var node2 = this.$editor.find('span#selection-marker-2');

                if (this.browser('mozilla'))
                {
                    this.$editor.focus();
                }
                else if (!this.isFocused())
                {
                    this.$editor.focus();
                }

                if (node1.length != 0 && node2.length != 0)
                {
                    this.selectionSet(node1[0], 0, node2[0], 0);
                }
                else if (node1.length != 0)
                {
                    this.selectionSet(node1[0], 0, null, 0);
                }

                if (remove !== false)
                {
                    this.selectionRemoveMarkers();
                    this.savedSel = false;
                }
            }
            // rangy
            else
            {
                rangy.restoreSelection(this.savedSel);
            }
        },
        selectionRemoveMarkers: function(type)
        {
            if (!this.opts.rangy)
            {
                $.each(this.$editor.find('span.redactor-selection-marker'), function()
                {
                    var html = $.trim($(this).html().replace(/[^\u0000-\u1C7F]/g, ''));
                    if (html == '')
                    {
                        $(this).remove();
                    }
                    else
                    {
                        $(this).removeAttr('class').removeAttr('id');
                    }
                });
            }
            // rangy
            else
            {
                rangy.removeMarkers(this.savedSel);
            }
        },

        // TABLE
        tableShow: function()
        {
            this.selectionSave();

            this.modalInit(this.opts.curLang.table, this.opts.modal_table, 300, $.proxy(function()
            {
                $('#redactor_insert_table_btn').click($.proxy(this.tableInsert, this));

                setTimeout(function()
                {
                    $('#redactor_table_rows').focus();

                }, 200);

            }, this));
        },
        tableInsert: function()
        {
            var rows = $('#redactor_table_rows').val(),
                columns = $('#redactor_table_columns').val(),
                $table_box = $('<div></div>'),
                tableId = Math.floor(Math.random() * 99999),
                $table = $('<table id="table' + tableId + '"><tbody></tbody></table>'),
                i, $row, z, $column;

            for (i = 0; i < rows; i++)
            {
                $row = $('<tr></tr>');

                for (z = 0; z < columns; z++)
                {
                    $column = $('<td>' + this.opts.invisibleSpace + '</td>');

                    // set the focus to the first td
                    if (i === 0 && z === 0) $column.append('<span id="selection-marker-1">' + this.opts.invisibleSpace + '</span>');

                    $($row).append($column);
                }

                $table.append($row);
            }

            $table_box.append($table);
            var html = $table_box.html();

            this.modalClose();
            this.selectionRestore();

            var current = this.getBlock() || this.getCurrent();

            if (current && current.tagName != 'BODY') $(current).after(html)
            else this.insertHtmlAdvanced(html, false);

            this.selectionRestore();

            var table = this.$editor.find('#table' + tableId);
            this.buttonActiveObserver();

            table.find('span#selection-marker-1').remove();
            table.removeAttr('id');

            this.sync();
        },
        tableDeleteTable: function()
        {
            var $table = $(this.getParent()).closest('table');
            if (!this.isParentRedactor($table)) return false;
            if ($table.size() == 0) return false;

            this.bufferSet();

            $table.remove();
            this.sync();
        },
        tableDeleteRow: function()
        {
            var $table = $(this.getParent()).closest('table');
            if (!this.isParentRedactor($table)) return false;
            if ($table.size() == 0) return false;

            this.bufferSet();

            var $current_tr =  $(this.getParent()).closest('tr');
            var $focus_tr = $current_tr.prev().length ? $current_tr.prev() : $current_tr.next();
            if ($focus_tr.length)
            {
                var $focus_td = $focus_tr.children('td' ).first();
                if ($focus_td.length)
                {
                    $focus_td.prepend('<span id="selection-marker-1">' + this.opts.invisibleSpace + '</span>');
                }
            }

            $current_tr.remove();
            this.selectionRestore();
            this.sync();
        },
        tableDeleteColumn: function()
        {
            var $table = $(this.getParent()).closest('table');
            if (!this.isParentRedactor($table)) return false;
            if ($table.size() == 0) return false;

            this.bufferSet();

            var $current_td =  $(this.getParent()).closest('td');
            var index = $current_td.get(0).cellIndex;

            // Set the focus correctly
            $table.find('tr').each($.proxy(function(i, elem)
            {
                var focusIndex = index - 1 < 0 ? index + 1 : index - 1;
                if (i === 0)
                {
                    $(elem).find('td').eq(focusIndex).prepend('<span id="selection-marker-1">' + this.opts.invisibleSpace + '</span>');
                }

                $(elem).find('td').eq(index).remove();

            }, this));

            this.selectionRestore();
            this.sync();
        },
        tableAddHead: function()
        {
            var $table = $(this.getParent()).closest('table');
            if (!this.isParentRedactor($table)) return false;
            if ($table.size() == 0) return false;

            this.bufferSet();

            if ($table.find('thead').size() !== 0) this.tableDeleteHead();
            else
            {
                var tr = $table.find('tr').first().clone();
                tr.find('td').html(this.opts.invisibleSpace);
                $thead = $('<thead></thead>');
                $thead.append(tr);
                $table.prepend($thead);

                this.sync();
            }
        },
        tableDeleteHead: function()
        {
            var $table = $(this.getParent()).closest('table');
            if (!this.isParentRedactor($table)) return false;
            var $thead = $table.find('thead');

            if ($thead.size() == 0) return false;

            this.bufferSet();

            $thead.remove();
            this.sync();
        },
        tableAddRowAbove: function()
        {
            this.tableAddRow('before');
        },
        tableAddRowBelow: function()
        {
            this.tableAddRow('after');
        },
        tableAddColumnLeft: function()
        {
            this.tableAddColumn('before');
        },
        tableAddColumnRight: function()
        {
            this.tableAddColumn('after');
        },
        tableAddRow: function(type)
        {
            var $table = $(this.getParent()).closest('table');
            if (!this.isParentRedactor($table)) return false;
            if ($table.size() == 0) return false;

            this.bufferSet();

            var $current_tr = $(this.getParent()).closest('tr');
            var new_tr = $current_tr.clone();
            new_tr.find('td').html(this.opts.invisibleSpace);

            if (type === 'after') $current_tr.after(new_tr);
            else $current_tr.before(new_tr);

            this.sync();
        },
        tableAddColumn: function (type)
        {
            var $table = $(this.getParent()).closest('table');
            if (!this.isParentRedactor($table)) return false;
            if ($table.size() == 0) return false;

            this.bufferSet();

            var index = 0;

            var $current_tr = $(this.getParent()).closest('tr');
            var $current_td =  $(this.getParent()).closest('td');

            $current_tr.find('td').each($.proxy(function(i, elem)
            {
                if ($(elem)[0] === $current_td[0]) index = i;

            }, this));

            $table.find('tr').each($.proxy(function(i, elem)
            {
                var $current = $(elem).find('td').eq(index);

                var td = $current.clone();
                td.html(this.opts.invisibleSpace);

                type === 'after' ? $current.after(td) : $current.before(td);

            }, this));

            this.sync();
        },

        // VIDEO
        videoShow: function()
        {
            this.selectionSave();

            this.modalInit(this.opts.curLang.video, this.opts.modal_video, 600, $.proxy(function()
            {
                $('#redactor_insert_video_btn').click($.proxy(this.videoInsert, this));

                setTimeout(function()
                {
                    $('#redactor_insert_video_area').focus();

                }, 200);

            }, this));
        },
        videoInsert: function ()
        {
            var data = $('#redactor_insert_video_area').val();
            data = this.cleanStripTags(data);

            this.selectionRestore();

            var current = this.getBlock() || this.getCurrent();

            if (current) $(current).after(data)
            else this.insertHtmlAdvanced(data, false);

            this.sync();
            this.modalClose();
        },

        // LINK
        linkShow: function()
        {
            this.selectionSave();

            var callback = $.proxy(function()
            {
                this.insert_link_node = false;

                var sel = this.getSelection();
                var url = '', text = '', target = '';

                var elem = this.getParent();
                var par = $(elem).parent().get(0);
                if (par && par.tagName === 'A')
                {
                    elem = par;
                }

                if (elem && elem.tagName === 'A')
                {
                    url = elem.href;
                    text = $(elem).text();
                    target = elem.target;

                    this.insert_link_node = elem;
                }
                else text = sel.toString();

                $('.redactor_link_text').val(text);

                var thref = self.location.href.replace(/\/$/i, '');
                var turl = url.replace(thref, '');

                // remove host from href
                if (this.opts.linkProtocol === false)
                {
                    var re = new RegExp('^(http|ftp|https)://' + self.location.host, 'i');
                    turl = turl.replace(re, '');
                }

                var tabs = $('#redactor_tabs').find('a');

                if (this.opts.linkEmail === false) tabs.eq(1).remove();
                if (this.opts.linkAnchor === false) tabs.eq(2).remove();
                if (this.opts.linkEmail === false && this.opts.linkAnchor === false)
                {
                    $('#redactor_tabs').remove();
                    $('#redactor_link_url').val(turl);
                }
                else
                {
                    if (url.search('mailto:') === 0)
                    {
                        this.modalSetTab.call(this, 2);

                        $('#redactor_tab_selected').val(2);
                        $('#redactor_link_mailto').val(url.replace('mailto:', ''));
                    }
                    else if (turl.search(/^#/gi) === 0)
                    {
                        this.modalSetTab.call(this, 3);

                        $('#redactor_tab_selected').val(3);
                        $('#redactor_link_anchor').val(turl.replace(/^#/gi, '' ));
                    }
                    else
                    {
                        $('#redactor_link_url').val(turl);
                    }
                }

                if (target === '_blank') $('#redactor_link_blank').prop('checked', true);

                $('#redactor_insert_link_btn').click($.proxy(this.linkProcess, this));

                setTimeout(function()
                {
                    $('#redactor_link_url').focus();

                }, 200);

            }, this);

            this.modalInit(this.opts.curLang.link, this.opts.modal_link, 460, callback);

        },
        linkProcess: function()
        {
            var tab_selected = $('#redactor_tab_selected').val();
            var link = '', text = '', target = '', targetBlank = '';

            // url
            if (tab_selected === '1')
            {
                link = $('#redactor_link_url').val();
                text = $('#redactor_link_url_text').val();

                if ($('#redactor_link_blank').prop('checked'))
                {
                    target = ' target="_blank"';
                    targetBlank = '_blank';
                }

                // test url (add protocol)
                var pattern = '((xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}';
                var re = new RegExp('^(http|ftp|https)://' + pattern, 'i');
                var re2 = new RegExp('^' + pattern, 'i');

                if (link.search(re) == -1 && link.search(re2) == 0 && this.opts.linkProtocol)
                {
                    link = this.opts.linkProtocol + link;
                }
            }
            // mailto
            else if (tab_selected === '2')
            {
                link = 'mailto:' + $('#redactor_link_mailto').val();
                text = $('#redactor_link_mailto_text').val();
            }
            // anchor
            else if (tab_selected === '3')
            {
                link = '#' + $('#redactor_link_anchor').val();
                text = $('#redactor_link_anchor_text').val();
            }

            text = text.replace(/<|>/g, '');
            this.linkInsert('<a href="' + link + '"' + target + '>' + text + '</a>', $.trim(text), link, targetBlank);

        },
        linkInsert: function (a, text, link, target)
        {
            this.selectionRestore();

            if (text !== '')
            {
                if (this.insert_link_node)
                {
                    this.bufferSet();

                    $(this.insert_link_node).text(text).attr('href', link);

                    if (target !== '') $(this.insert_link_node).attr('target', target);
                    else $(this.insert_link_node).removeAttr('target');

                    this.sync();
                }
                else
                {
                    this.exec('inserthtml', a);
                }
            }

            // link tooltip
            setTimeout($.proxy(function()
            {
                if (this.opts.observeLinks) this.observeLinks();
            }, this), 5);

            this.modalClose();
        },

        // FILE
        fileShow: function ()
        {

            this.selectionSave();

            var callback = $.proxy(function()
            {
                var sel = this.getSelection();

                var text = '';
                if (this.oldIE()) text = sel.text;
                else text = sel.toString();

                $('#redactor_filename').val(text);

                // dragupload
                if (!this.isMobile())
                {
                    this.draguploadInit('#redactor_file', {
                        url: this.opts.fileUpload,
                        uploadFields: this.opts.uploadFields,
                        success: $.proxy(this.fileCallback, this),
                        error: $.proxy( function(obj, json)
                        {
                            this.callback('fileUploadError', json);

                        }, this),
                        uploadParam: this.opts.fileUploadParam
                    });
                }

                this.uploadInit('redactor_file', {
                    auto: true,
                    url: this.opts.fileUpload,
                    success: $.proxy(this.fileCallback, this),
                    error: $.proxy(function(obj, json)
                    {
                        this.callback('fileUploadError', json);

                    }, this)
                });

            }, this);

            this.modalInit(this.opts.curLang.file, this.opts.modal_file, 500, callback);
        },
        fileCallback: function(json)
        {

            this.selectionRestore();

            if (json !== false)
            {

                var text = $('#redactor_filename').val();
                if (text === '') text = json.filename;

                var link = '<a href="' + json.filelink + '" id="filelink-marker">' + text + '</a>';

                // chrome fix
                if (this.browser('webkit') && !!this.window.chrome)
                {
                    link = link + '&nbsp;';
                }

                this.execCommand('inserthtml', link, false);

                var linkmarker = $(this.$editor.find('a#filelink-marker'));
                if (linkmarker.size() != 0) linkmarker.removeAttr('id');
                else linkmarker = false;

                this.sync();

                // file upload callback
                this.callback('fileUpload', linkmarker, json);
            }

            this.modalClose();
        },

        // IMAGE
        imageShow: function()
        {

            this.selectionSave();

            var callback = $.proxy(function()
            {
                // json
                if (this.opts.imageGetJson)
                {
                    $.getJSON(this.opts.imageGetJson, $.proxy(function(data)
                    {
                        var folders = {}, count = 0;

                        // folders
                        $.each(data, $.proxy(function(key, val)
                        {
                            if (typeof val.folder !== 'undefined')
                            {
                                count++;
                                folders[val.folder] = count;
                            }

                        }, this));

                        var folderclass = false;
                        $.each(data, $.proxy(function(key, val)
                        {
                            // title
                            var thumbtitle = '';
                            if (typeof val.title !== 'undefined') thumbtitle = val.title;

                            var folderkey = 0;
                            if (!$.isEmptyObject(folders) && typeof val.folder !== 'undefined')
                            {
                                folderkey = folders[val.folder];
                                if (folderclass === false) folderclass = '.redactorfolder' + folderkey;
                            }

                            var img = $('<img src="' + val.thumb + '" class="redactorfolder redactorfolder' + folderkey + '" rel="' + val.image + '" title="' + thumbtitle + '" />');
                            $('#redactor_image_box').append(img);
                            $(img).click($.proxy(this.imageThumbClick, this));

                        }, this));

                        // folders
                        if (!$.isEmptyObject(folders))
                        {
                            $('.redactorfolder').hide();
                            $(folderclass).show();

                            var onchangeFunc = function(e)
                            {
                                $('.redactorfolder').hide();
                                $('.redactorfolder' + $(e.target).val()).show();
                            };

                            var select = $('<select id="redactor_image_box_select">');
                            $.each( folders, function(k, v)
                            {
                                select.append( $('<option value="' + v + '">' + k + '</option>'));
                            });

                            $('#redactor_image_box').before(select);
                            select.change(onchangeFunc);
                        }
                    }, this));

                }
                else
                {
                    $('#redactor_tabs').find('a').eq(1).remove();
                }

                if (this.opts.imageUpload || this.opts.s3)
                {
                    // dragupload
                    if (!this.isMobile() && this.opts.s3 === false)
                    {
                        if ($('#redactor_file' ).length)
                        {
                            this.draguploadInit('#redactor_file', {
                                url: this.opts.imageUpload,
                                uploadFields: this.opts.uploadFields,
                                success: $.proxy(this.imageCallback, this),
                                error: $.proxy(function(obj, json)
                                {
                                    this.callback('imageUploadError', json);

                                }, this),
                                uploadParam: this.opts.imageUploadParam
                            });
                        }
                    }

                    if (this.opts.s3 === false)
                    {
                        // ajax upload
                        this.uploadInit('redactor_file', {
                            auto: true,
                            url: this.opts.imageUpload,
                            success: $.proxy(this.imageCallback, this),
                            error: $.proxy(function(obj, json)
                            {
                                this.callback('imageUploadError', json);

                            }, this)
                        });
                    }
                    // s3 upload
                    else
                    {
                        $('#redactor_file').on('change.redactor', $.proxy(this.s3handleFileSelect, this));
                    }

                }
                else
                {
                    $('.redactor_tab').hide();
                    if (!this.opts.imageGetJson)
                    {
                        $('#redactor_tabs').remove();
                        $('#redactor_tab3').show();
                    }
                    else
                    {
                        var tabs = $('#redactor_tabs').find('a');
                        tabs.eq(0).remove();
                        tabs.eq(1).addClass('redactor_tabs_act');
                        $('#redactor_tab2').show();
                    }
                }

                $('#redactor_upload_btn').click($.proxy(this.imageCallbackLink, this));

                if (!this.opts.imageUpload && !this.opts.imageGetJson)
                {
                    setTimeout(function()
                    {
                        $('#redactor_file_link').focus();

                    }, 200);
                }

            }, this);

            this.modalInit(this.opts.curLang.image, this.opts.modal_image, 610, callback);

        },
        imageEdit: function(image)
        {
            var $el = image;
            var parent = $el.parent().parent();

            var callback = $.proxy(function()
            {
                $('#redactor_file_alt').val($el.attr('alt'));
                $('#redactor_image_edit_src').attr('href', $el.attr('src'));
                $('#redactor_form_image_align').val($el.css('float'));

                if ($(parent).get(0).tagName === 'A')
                {
                    $('#redactor_file_link').val($(parent).attr('href'));

                    if ($(parent).attr('target') == '_blank')
                    {
                        $('#redactor_link_blank').prop('checked', true);
                    }
                }

                $('#redactor_image_delete_btn').click($.proxy(function()
                {
                    this.imageRemove($el);

                }, this));

                $('#redactorSaveBtn').click($.proxy(function()
                {
                    this.imageSave($el);

                }, this));

            }, this);

            this.modalInit(this.opts.curLang.edit, this.opts.modal_image_edit, 380, callback);

        },
        imageRemove: function(el)
        {
            var parent = $(el).parent();
            $(el).remove();

            if (parent.length && parent[0].tagName === 'P')
            {
                this.$editor.focus();
                this.selectionStart(parent);
            }

            // delete callback
            this.callback('imageDelete', el);

            this.modalClose();
            this.sync();
        },
        imageSave: function(el)
        {
            var $el = $(el);
            var parent = $el.parent();

            $el.attr('alt', $('#redactor_file_alt').val());

            var floating = $('#redactor_form_image_align').val();

            if (floating === 'left')
            {
                this.imageMargin = '0 ' + this.opts.imageFloatMargin + ' ' + this.opts.imageFloatMargin + ' 0';
                $el.css({ 'float': 'left', 'margin': this.imageMargin });
            }
            else if (floating === 'right')
            {
                this.imageMargin = '0 0 ' + this.opts.imageFloatMargin + ' ' + this.opts.imageFloatMargin + '';
                $el.css({ 'float': 'right', 'margin': this.imageMargin });
            }
            else
            {
                this.imageMargin = '0px';
                var imageBox = $el.closest('#redactor-image-box');
                if (imageBox.size() != 0) imageBox.css({ 'float': '', 'margin': '' });
                $el.css({ 'float': '', 'margin': '' });
            }

            // as link
            var link = $.trim($('#redactor_file_link').val());
            if (link !== '')
            {
                var target = false;
                if ($('#redactor_link_blank').prop('checked'))
                {
                    target = true;
                }

                if (parent.get(0).tagName !== 'A')
                {
                    var a = $('<a href="' + link + '">' + this.outerHtml(el) + '</a>');

                    if (target)
                    {
                        a.attr('target', '_blank');
                    }

                    $el.replaceWith(a);
                }
                else
                {
                    parent.attr('href', link);
                    if (target)
                    {
                        parent.attr('target', '_blank');
                    }
                    else
                    {
                        parent.removeAttr('target');
                    }
                }
            }
            else
            {
                if (parent.get(0).tagName === 'A')
                {
                    parent.replaceWith(this.outerHtml(el));
                }
            }

            this.modalClose();
            this.observeImages();
            this.sync();

        },
        imageResizeHide: function(e)
        {
            if (e !== false && $(e.target).parent().size() != 0 && $(e.target).parent()[0].id === 'redactor-image-box')
            {
                return false;
            }

            var imageBox = this.$editor.find('#redactor-image-box');
            if (imageBox.size() == 0)
            {
                return false;
            }

            this.$editor.find('#redactor-image-editter, #redactor-image-resizer').remove();


            if (this.imageMargin != '0px')
            {
                imageBox.find('img').css('margin', this.imageMargin);
                imageBox.css('margin', '');
                this.imageMargin = '0px';
            }

            imageBox.find('img').css('opacity', '');
            imageBox.replaceWith(function()
            {
                return $(this).contents();
            });

            $(document).off('click.redactor-image-resize-hide');
            this.$editor.off('click.redactor-image-resize-hide');
            this.$editor.off('keydown.redactor-image-delete');

            this.sync()

        },
        imageResize: function(image)
        {
            var $image = $(image);

            $image.on('mousedown', $.proxy(function()
            {
                this.imageResizeHide(false);
            }, this));

            $image.on('dragstart', $.proxy(function()
            {
                this.$editor.on('drop.redactor-image-inside-drop', $.proxy(function()
                {
                    setTimeout($.proxy(function()
                    {
                        this.observeImages();
                        this.$editor.off('drop.redactor-image-inside-drop');
                        this.sync();

                    }, this), 1);

                },this));
            }, this));

            $image.on('click', $.proxy(function(e)
            {
                if (this.$editor.find('#redactor-image-box').size() != 0)
                {
                    return false;
                }

                var clicked = false,
                start_x,
                start_y,
                ratio = $image.width() / $image.height(),
                min_w = 20,
                min_h = 10;

                var imageResizer = this.imageResizeControls($image);

                // resize
                var isResizing = false;
                imageResizer.on('mousedown', function(e)
                {
                    isResizing = true;
                    e.preventDefault();

                    ratio = $image.width() / $image.height();

                    start_x = Math.round(e.pageX - $image.eq(0).offset().left);
                    start_y = Math.round(e.pageY - $image.eq(0).offset().top);

                });

                $(this.document.body).on('mousemove', $.proxy(function(e)
                {
                    if (isResizing)
                    {
                        var mouse_x = Math.round(e.pageX - $image.eq(0).offset().left) - start_x;
                        var mouse_y = Math.round(e.pageY - $image.eq(0).offset().top) - start_y;

                        var div_h = $image.height();

                        var new_h = parseInt(div_h, 10) + mouse_y;
                        var new_w = Math.round(new_h * ratio);

                        if (new_w > min_w)
                        {
                            $image.width(new_w);

                            if (new_w < 100)
                            {
                                this.imageEditter.css({
                                    marginTop: '-7px',
                                    marginLeft: '-13px',
                                    fontSize: '9px',
                                    padding: '3px 5px'
                                });
                            }
                            else
                            {
                                this.imageEditter.css({
                                    marginTop: '-11px',
                                    marginLeft: '-18px',
                                    fontSize: '11px',
                                    padding: '7px 10px'
                                });
                            }
                        }

                        start_x = Math.round(e.pageX - $image.eq(0).offset().left);
                        start_y = Math.round(e.pageY - $image.eq(0).offset().top);

                        this.sync()
                    }
                }, this)).on('mouseup', function()
                {
                    isResizing = false;
                });


                this.$editor.on('keydown.redactor-image-delete', $.proxy(function(e)
                {
                    var key = e.which;

                    if (this.keyCode.BACKSPACE == key || this.keyCode.DELETE == key)
                    {
                        this.bufferSet();
                        this.imageResizeHide(false);
                        this.imageRemove($image);
                    }

                }, this));

                $(document).on('click.redactor-image-resize-hide', $.proxy(this.imageResizeHide, this));
                this.$editor.on('click.redactor-image-resize-hide', $.proxy(this.imageResizeHide, this));


            }, this));
        },
        imageResizeControls: function($image)
        {
            var imageBox = $('<span id="redactor-image-box" data-redactor="verified">');
            imageBox.css({
                position: 'relative',
                display: 'inline-block',
                lineHeight: 0,
                outline: '1px dashed rgba(0, 0, 0, .6)',
                'float': $image.css('float')
            });
            imageBox.attr('contenteditable', false);

            this.imageMargin = $image[0].style.margin;
            if (this.imageMargin != '0px')
            {
                imageBox.css('margin', this.imageMargin);
                $image.css('margin', '');
            }

            $image.css('opacity', .5).after(imageBox);

            // editter
            this.imageEditter = $('<span id="redactor-image-editter" data-redactor="verified">' + this.opts.curLang.edit + '</span>');
            this.imageEditter.css({
                position: 'absolute',
                zIndex: 2,
                top: '50%',
                left: '50%',
                marginTop: '-11px',
                marginLeft: '-18px',
                lineHeight: 1,
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '11px',
                padding: '7px 10px',
                cursor: 'pointer'
            });
            this.imageEditter.attr('contenteditable', false);
            this.imageEditter.on('click', $.proxy(function()
            {
                this.imageEdit($image);
            }, this));
            imageBox.append(this.imageEditter);

            // resizer
            var imageResizer = $('<span id="redactor-image-resizer" data-redactor="verified"></span>');
            imageResizer.css({
                position: 'absolute',
                zIndex: 2,
                lineHeight: 1,
                cursor: 'nw-resize',
                bottom: '-4px',
                right: '-5px',
                border: '1px solid #fff',
                backgroundColor: '#000',
                width: '8px',
                height: '8px'
            });
            imageResizer.attr('contenteditable', false);
            imageBox.append(imageResizer);

            imageBox.append($image);

            return imageResizer;
        },
        imageThumbClick: function(e)
        {
            var img = '<img id="image-marker" src="' + $(e.target).attr('rel') + '" alt="' + $(e.target).attr('title') + '" />';

            var parent = this.getParent();
            if (this.opts.paragraphy && $(parent).closest('li').size() == 0) img = '<p>' + img + '</p>';

            this.imageInsert(img, true);
        },
        imageCallbackLink: function()
        {
            var val = $('#redactor_file_link').val();

            if (val !== '')
            {
                var data = '<img id="image-marker" src="' + val + '" />';
                if (this.opts.linebreaks === false) data = '<p>' + data + '</p>';

                this.imageInsert(data, true);

            }
            else this.modalClose();
        },
        imageCallback: function(data)
        {
            this.imageInsert(data);
        },
        imageInsert: function(json, link)
        {
            this.selectionRestore();


            if (json !== false)
            {
                var html = '';
                if (link !== true)
                {
                    html = '<img id="image-marker" src="' + json.filelink + '" />';

                    var parent = this.getParent();
                    if (this.opts.paragraphy && $(parent).closest('li').size() == 0)
                    {
                        html = '<p>' + html + '</p>';
                    }
                }
                else
                {
                    html = json;
                }

                this.execCommand('inserthtml', html, false);

                var image = $(this.$editor.find('img#image-marker'));

                if (image.length) image.removeAttr('id');
                else image = false;

                this.sync();

                // upload image callback
                link !== true && this.callback('imageUpload', image, json);
            }

            this.modalClose();
            this.observeImages();
        },

        // MODAL
        modalTemplatesInit: function()
        {
            $.extend( this.opts,
            {
                modal_file: String()
                + '<section>'
                    + '<div id="redactor-progress" class="redactor-progress redactor-progress-striped" style="display: none;">'
                            + '<div id="redactor-progress-bar" class="redactor-progress-bar" style="width: 100%;"></div>'
                    + '</div>'
                    + '<form id="redactorUploadFileForm" method="post" action="" enctype="multipart/form-data">'
                        + '<label>' + this.opts.curLang.filename + '</label>'
                        + '<input type="text" id="redactor_filename" class="redactor_input" />'
                        + '<div style="margin-top: 7px;">'
                            + '<input type="file" id="redactor_file" name="' + this.opts.fileUploadParam + '" />'
                        + '</div>'
                    + '</form>'
                + '</section>',

                modal_image_edit: String()
                + '<section>'
                    + '<label>' + this.opts.curLang.title + '</label>'
                    + '<input id="redactor_file_alt" class="redactor_input" />'
                    + '<label>' + this.opts.curLang.link + '</label>'
                    + '<input id="redactor_file_link" class="redactor_input" />'
                    + '<label><input type="checkbox" id="redactor_link_blank"> ' + this.opts.curLang.link_new_tab + '</label>'
                    + '<label>' + this.opts.curLang.image_position + '</label>'
                    + '<select id="redactor_form_image_align">'
                        + '<option value="none">' + this.opts.curLang.none + '</option>'
                        + '<option value="left">' + this.opts.curLang.left + '</option>'
                        + '<option value="right">' + this.opts.curLang.right + '</option>'
                    + '</select>'
                + '</section>'
                + '<footer>'
                    + '<button id="redactor_image_delete_btn" class="redactor_modal_btn redactor_modal_delete_btn">' + this.opts.curLang._delete + '</button>&nbsp;&nbsp;&nbsp;'
                    + '<button class="redactor_modal_btn redactor_btn_modal_close">' + this.opts.curLang.cancel + '</button>'
                    + '<input type="button" name="save" class="redactor_modal_btn redactor_modal_action_btn" id="redactorSaveBtn" value="' + this.opts.curLang.save + '" />'
                + '</footer>',

                modal_image: String()
                + '<section>'
                    + '<div id="redactor_tabs">'
                        + '<a href="#" class="redactor_tabs_act">' + this.opts.curLang.upload + '</a>'
                        + '<a href="#">' + this.opts.curLang.choose + '</a>'
                        + '<a href="#">' + this.opts.curLang.link + '</a>'
                    + '</div>'
                    + '<div id="redactor-progress" class="redactor-progress redactor-progress-striped" style="display: none;">'
                            + '<div id="redactor-progress-bar" class="redactor-progress-bar" style="width: 100%;"></div>'
                    + '</div>'
                    + '<form id="redactorInsertImageForm" method="post" action="" enctype="multipart/form-data">'
                        + '<div id="redactor_tab1" class="redactor_tab">'
                            + '<input type="file" id="redactor_file" name="' + this.opts.imageUploadParam + '" />'
                        + '</div>'
                        + '<div id="redactor_tab2" class="redactor_tab" style="display: none;">'
                            + '<div id="redactor_image_box"></div>'
                        + '</div>'
                    + '</form>'
                    + '<div id="redactor_tab3" class="redactor_tab" style="display: none;">'
                        + '<label>' + this.opts.curLang.image_web_link + '</label>'
                        + '<input type="text" name="redactor_file_link" id="redactor_file_link" class="redactor_input"  />'
                    + '</div>'
                + '</section>'
                + '<footer>'
                    + '<button class="redactor_modal_btn redactor_btn_modal_close">' + this.opts.curLang.cancel + '</button>'
                    + '<input type="button" name="upload" class="redactor_modal_btn redactor_modal_action_btn" id="redactor_upload_btn" value="' + this.opts.curLang.insert + '" />'
                + '</footer>',

                modal_link: String()
                + '<section>'
                    + '<form id="redactorInsertLinkForm" method="post" action="">'
                        + '<div id="redactor_tabs">'
                            + '<a href="#" class="redactor_tabs_act">URL</a>'
                            + '<a href="#">Email</a>'
                            + '<a href="#">' + this.opts.curLang.anchor + '</a>'
                        + '</div>'
                        + '<input type="hidden" id="redactor_tab_selected" value="1" />'
                        + '<div class="redactor_tab" id="redactor_tab1">'
                            + '<label>URL</label>'
                            + '<input type="text" id="redactor_link_url" class="redactor_input"  />'
                            + '<label>' + this.opts.curLang.text + '</label>'
                            + '<input type="text" class="redactor_input redactor_link_text" id="redactor_link_url_text" />'
                            + '<label><input type="checkbox" id="redactor_link_blank"> ' + this.opts.curLang.link_new_tab + '</label>'
                        + '</div>'
                        + '<div class="redactor_tab" id="redactor_tab2" style="display: none;">'
                            + '<label>Email</label>'
                            + '<input type="text" id="redactor_link_mailto" class="redactor_input" />'
                            + '<label>' + this.opts.curLang.text + '</label>'
                            + '<input type="text" class="redactor_input redactor_link_text" id="redactor_link_mailto_text" />'
                        + '</div>'
                        + '<div class="redactor_tab" id="redactor_tab3" style="display: none;">'
                            + '<label>' + this.opts.curLang.anchor + '</label>'
                            + '<input type="text" class="redactor_input" id="redactor_link_anchor"  />'
                            + '<label>' + this.opts.curLang.text + '</label>'
                            + '<input type="text" class="redactor_input redactor_link_text" id="redactor_link_anchor_text" />'
                        + '</div>'
                    + '</form>'
                + '</section>'
                + '<footer>'
                    + '<button class="redactor_modal_btn redactor_btn_modal_close">' + this.opts.curLang.cancel + '</button>'
                    + '<input type="button" class="redactor_modal_btn redactor_modal_action_btn" id="redactor_insert_link_btn" value="' + this.opts.curLang.insert + '" />'
                + '</footer>',

                modal_table: String()
                + '<section>'
                    + '<label>' + this.opts.curLang.rows + '</label>'
                    + '<input type="text" size="5" value="2" id="redactor_table_rows" />'
                    + '<label>' + this.opts.curLang.columns + '</label>'
                    + '<input type="text" size="5" value="3" id="redactor_table_columns" />'
                + '</section>'
                + '<footer>'
                    + '<button class="redactor_modal_btn redactor_btn_modal_close">' + this.opts.curLang.cancel + '</button>'
                    + '<input type="button" name="upload" class="redactor_modal_btn redactor_modal_action_btn" id="redactor_insert_table_btn" value="' + this.opts.curLang.insert + '" />'
                + '</footer>',

                modal_video: String()
                + '<section>'
                    + '<form id="redactorInsertVideoForm">'
                        + '<label>' + this.opts.curLang.video_html_code + '</label>'
                        + '<textarea id="redactor_insert_video_area" style="width: 99%; height: 160px;"></textarea>'
                    + '</form>'
                + '</section>'
                + '<footer>'
                    + '<button class="redactor_modal_btn redactor_btn_modal_close">' + this.opts.curLang.cancel + '</button>'
                    + '<input type="button" class="redactor_modal_btn redactor_modal_action_btn" id="redactor_insert_video_btn" value="' + this.opts.curLang.insert + '" />'
                + '</footer>'

            });
        },
        modalInit: function(title, content, width, callback)
        {
            var $redactorModalOverlay = $('#redactor_modal_overlay');

            // modal overlay
            if (!$redactorModalOverlay.length)
            {
                this.$overlay = $redactorModalOverlay = $('<div id="redactor_modal_overlay" style="display: none;"></div>');
                $('body').prepend(this.$overlay);
            }

            if (this.opts.modalOverlay)
            {
                $redactorModalOverlay.show().on('click', $.proxy(this.modalClose, this));
            }

            var $redactorModal = $('#redactor_modal');

            if (!$redactorModal.length)
            {
                this.$modal = $redactorModal = $('<div id="redactor_modal" style="display: none;"><div id="redactor_modal_close">&times;</div><header id="redactor_modal_header"></header><div id="redactor_modal_inner"></div></div>');
                $('body').append(this.$modal);
            }

            $('#redactor_modal_close').on('click', $.proxy(this.modalClose, this));

            this.hdlModalClose = $.proxy(function(e)
            {
                if (e.keyCode === this.keyCode.ESC)
                {
                    this.modalClose();
                    return false;
                }

            }, this);

            $(document).keyup(this.hdlModalClose);
            this.$editor.keyup(this.hdlModalClose);

            // set content
            this.modalcontent = false;
            if (content.indexOf('#') == 0)
            {
                this.modalcontent = $(content);
                $('#redactor_modal_inner').empty().append(this.modalcontent.html());
                this.modalcontent.html('');

            }
            else
            {
                $('#redactor_modal_inner').empty().append(content);
            }

            $redactorModal.find('#redactor_modal_header').html(title);

            // draggable
            if (typeof $.fn.draggable !== 'undefined')
            {
                $redactorModal.draggable({ handle: '#redactor_modal_header' });
                $redactorModal.find('#redactor_modal_header').css('cursor', 'move');
            }

            var $redactor_tabs = $('#redactor_tabs');

            // tabs
            if ($redactor_tabs.length )
            {
                var that = this;
                $redactor_tabs.find('a').each(function(i, s)
                {
                    i++;
                    $(s).on('click', function(e)
                    {
                        e.preventDefault();

                        $redactor_tabs.find('a').removeClass('redactor_tabs_act');
                        $(this).addClass('redactor_tabs_act');
                        $('.redactor_tab').hide();
                        $('#redactor_tab' + i ).show();
                        $('#redactor_tab_selected').val(i);

                        if (that.isMobile() === false)
                        {
                            var height = $redactorModal.outerHeight();
                            $redactorModal.css('margin-top', '-' + (height + 10) / 2 + 'px');
                        }
                    });
                });
            }

            $redactorModal.find('.redactor_btn_modal_close').on('click', $.proxy(this.modalClose, this));

            // save scroll
            if (this.opts.autoresize === true)
            {
                this.saveModalScroll = this.document.body.scrollTop;
            }
            else
            {
                this.saveModalScroll = this.$editor.scrollTop();
            }

            if (this.isMobile() === false)
            {
                $redactorModal.css({
                    position: 'fixed',
                    top: '-2000px',
                    left: '50%',
                    width: width + 'px',
                    marginLeft: '-' + (width + 60) / 2 + 'px'
                }).show();

                this.modalSaveBodyOveflow = $(document.body).css('overflow');
                $(document.body).css('overflow', 'hidden');

            }
            else
            {
                $redactorModal.css({
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    top: '0',
                    left: '0',
                    margin: '0',
                    minHeight: '300px'
                }).show();
            }

            // callback
            if (typeof callback === 'function') callback();

            if (this.isMobile() === false)
            {
                setTimeout(function()
                {
                    var height = $redactorModal.outerHeight();
                    $redactorModal.css({
                        top: '50%',
                        height: 'auto',
                        minHeight: 'auto',
                        marginTop: '-' + (height + 10) / 2 + 'px'
                    });
                }, 10);
            }

        },
        modalClose: function()
        {
            $('#redactor_modal_close').off('click', this.modalClose );
            $('#redactor_modal').fadeOut('fast', $.proxy(function()
            {
                var redactorModalInner = $('#redactor_modal_inner');

                if (this.modalcontent !== false)
                {
                    this.modalcontent.html(redactorModalInner.html());
                    this.modalcontent = false;
                }

                redactorModalInner.html('');

                if (this.opts.modalOverlay)
                {
                    $('#redactor_modal_overlay').hide().off('click', this.modalClose);
                }

                $(document).unbind('keyup', this.hdlModalClose);
                this.$editor.unbind('keyup', this.hdlModalClose);

                this.selectionRestore();

                // restore scroll
                if (this.opts.autoresize && this.saveModalScroll)
                {
                    $(this.document.body).scrollTop(this.saveModalScroll);
                }
                else if (this.opts.autoresize === false && this.saveModalScroll)
                {
                    this.$editor.scrollTop(this.saveModalScroll);
                }

            }, this));


            if (this.isMobile() === false)
            {
                $(document.body).css('overflow', this.modalSaveBodyOveflow ? this.modalSaveBodyOveflow : 'visible');
            }

            return false;
        },
        modalSetTab: function(num)
        {
            $('.redactor_tab').hide();
            $('#redactor_tabs').find('a').removeClass('redactor_tabs_act').eq(num - 1).addClass('redactor_tabs_act');
            $('#redactor_tab' + num).show();
        },

        // S3
        s3handleFileSelect: function(e)
        {
            var files = e.target.files;

            for (var i = 0, f; f = files[i]; i++)
            {
                this.s3uploadFile(f);
            }
        },
        s3uploadFile: function(file)
        {
            this.s3executeOnSignedUrl(file, $.proxy(function(signedURL)
            {
                this.s3uploadToS3(file, signedURL);
            }, this));
        },
        s3executeOnSignedUrl: function(file, callback)
        {
            var xhr = new XMLHttpRequest();

            var mark = '?';
            if (this.opts.s3.search(/\?/) != '-1') mark = '&';

            xhr.open('GET', this.opts.s3 + mark + 'name=' + file.name + '&type=' + file.type, true);

            // Hack to pass bytes through unprocessed.
            xhr.overrideMimeType('text/plain; charset=x-user-defined');

            xhr.onreadystatechange = function(e)
            {
                if (this.readyState == 4 && this.status == 200)
                {
                    $('#redactor-progress').fadeIn();
                    callback(decodeURIComponent(this.responseText));
                }
                else if(this.readyState == 4 && this.status != 200)
                {
                    //setProgress(0, 'Could not contact signing script. Status = ' + this.status);
                }
            };

            xhr.send();
        },
        s3createCORSRequest: function(method, url)
        {
            var xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr)
            {
                xhr.open(method, url, true);
            }
            else if (typeof XDomainRequest != "undefined")
            {
                xhr = new XDomainRequest();
                xhr.open(method, url);
            }
            else
            {
                xhr = null;
            }

            return xhr;
        },
        s3uploadToS3: function(file, url)
        {
            var xhr = this.s3createCORSRequest('PUT', url);
            if (!xhr)
            {
                //setProgress(0, 'CORS not supported');
            }
            else
            {
                xhr.onload = $.proxy(function()
                {
                    if (xhr.status == 200)
                    {
                        //setProgress(100, 'Upload completed.');

                        $('#redactor-progress, #redactor-progress-drag').hide();

                        var s3image = url.split('?');

                        if (!s3image[0])
                        {
                             // url parsing is fail
                             return false;
                        }

                        this.selectionRestore();

                        var html = '';
                        html = '<img id="image-marker" src="' + s3image[0] + '" />';
                        if (this.opts.paragraphy) html = '<p>' + html + '</p>';

                        this.execCommand('inserthtml', html, false);

                        var image = $(this.$editor.find('img#image-marker'));

                        if (image.length) image.removeAttr('id');
                        else image = false;

                        this.sync();

                        // upload image callback
                        this.callback('imageUpload', image, false);

                        this.modalClose();
                        this.observeImages();

                    }
                    else
                    {
                        //setProgress(0, 'Upload error: ' + xhr.status);
                    }
                }, this);

                xhr.onerror = function()
                {
                    //setProgress(0, 'XHR error.');
                };

                xhr.upload.onprogress = function(e)
                {
                    /*
                    if (e.lengthComputable)
                    {
                        var percentLoaded = Math.round((e.loaded / e.total) * 100);
                        setProgress(percentLoaded, percentLoaded == 100 ? 'Finalizing.' : 'Uploading.');
                    }
                    */
                };

                xhr.setRequestHeader('Content-Type', file.type);
                xhr.setRequestHeader('x-amz-acl', 'public-read');

                xhr.send(file);
            }
        },

        // UPLOAD
        uploadInit: function(el, options)
        {
            this.uploadOptions = {
                url: false,
                success: false,
                error: false,
                start: false,
                trigger: false,
                auto: false,
                input: false
            };

            $.extend(this.uploadOptions, options);

            var $el = $('#' + el);

            // Test input or form
            if ($el.length && $el[0].tagName === 'INPUT')
            {
                this.uploadOptions.input = $el;
                this.el = $($el[0].form);
            }
            else this.el = $el;

            this.element_action = this.el.attr('action');

            // Auto or trigger
            if (this.uploadOptions.auto)
            {
                $(this.uploadOptions.input).change($.proxy(function(e)
                {
                    this.el.submit(function(e)
                    {
                        return false;
                    });

                    this.uploadSubmit(e);

                }, this));

            }
            else if (this.uploadOptions.trigger)
            {
                $('#' + this.uploadOptions.trigger).click($.proxy(this.uploadSubmit, this));
            }
        },
        uploadSubmit: function(e)
        {
            $('#redactor-progress').fadeIn();
            this.uploadForm(this.element, this.uploadFrame());
        },
        uploadFrame: function()
        {
            this.id = 'f' + Math.floor(Math.random() * 99999);

            var d = this.document.createElement('div');
            var iframe = '<iframe style="display:none" id="' + this.id + '" name="' + this.id + '"></iframe>';

            d.innerHTML = iframe;
            $(d).appendTo("body");

            // Start
            if (this.uploadOptions.start) this.uploadOptions.start();

            $( '#' + this.id ).load($.proxy(this.uploadLoaded, this));

            return this.id;
        },
        uploadForm: function(f, name)
        {
            if (this.uploadOptions.input)
            {
                var formId = 'redactorUploadForm' + this.id,
                    fileId = 'redactorUploadFile' + this.id;

                this.form = $('<form  action="' + this.uploadOptions.url + '" method="POST" target="' + name + '" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data" />');

                // append hidden fields
                if (this.opts.uploadFields !== false && typeof this.opts.uploadFields === 'object')
                {
                    $.each(this.opts.uploadFields, $.proxy(function(k, v)
                    {
                        if (v != null && v.toString().indexOf('#') === 0) v = $(v).val();

                        var hidden = $('<input/>', {
                            'type': "hidden",
                            'name': k,
                            'value': v
                        });

                        $(this.form).append(hidden);

                    }, this));
                }

                var oldElement = this.uploadOptions.input;
                var newElement = $(oldElement).clone();

                $(oldElement).attr('id', fileId).before(newElement).appendTo(this.form);

                $(this.form).css('position', 'absolute')
                        .css('top', '-2000px')
                        .css('left', '-2000px')
                        .appendTo('body');

                this.form.submit();

            }
            else
            {
                f.attr('target', name)
                    .attr('method', 'POST')
                    .attr('enctype', 'multipart/form-data')
                    .attr('action', this.uploadOptions.url);

                this.element.submit();
            }
        },
        uploadLoaded: function()
        {
            var i = $( '#' + this.id)[0], d;

            if (i.contentDocument) d = i.contentDocument;
            else if (i.contentWindow) d = i.contentWindow.document;
            else d = window.frames[this.id].document;

            // Success
            if (this.uploadOptions.success)
            {
                $('#redactor-progress').hide();

                if (typeof d !== 'undefined')
                {
                    // Remove bizarre <pre> tag wrappers around our json data:
                    var rawString = d.body.innerHTML;
                    var jsonString = rawString.match(/\{(.|\n)*\}/)[0];

                    jsonString = jsonString.replace(/^\[/, '');
                    jsonString = jsonString.replace(/\]$/, '');

                    var json = $.parseJSON(jsonString);

                    if (typeof json.error == 'undefined') this.uploadOptions.success(json);
                    else
                    {
                        this.uploadOptions.error(this, json);
                        this.modalClose();
                    }
                }
                else
                {
                    this.modalClose();
                    alert('Upload failed!');
                }
            }

            this.el.attr('action', this.element_action);
            this.el.attr('target', '');
        },

        // DRAGUPLOAD
        draguploadInit: function (el, options)
        {
            this.draguploadOptions = $.extend({
                url: false,
                success: false,
                error: false,
                preview: false,
                uploadFields: false,
                text: this.opts.curLang.drop_file_here,
                atext: this.opts.curLang.or_choose,
                uploadParam: false
            }, options);

            if (window.FormData === undefined) return false;

            this.droparea = $('<div class="redactor_droparea"></div>');
            this.dropareabox = $('<div class="redactor_dropareabox">' + this.draguploadOptions.text + '</div>');
            this.dropalternative = $('<div class="redactor_dropalternative">' + this.draguploadOptions.atext + '</div>');

            this.droparea.append(this.dropareabox);

            $(el).before(this.droparea);
            $(el).before(this.dropalternative);

            // drag over
            this.dropareabox.on('dragover', $.proxy(function()
            {
                return this.draguploadOndrag();

            }, this));

            // drag leave
            this.dropareabox.on('dragleave', $.proxy(function()
            {
                return this.draguploadOndragleave();

            }, this));

            // drop
            this.dropareabox.get(0).ondrop = $.proxy(function(e)
            {
                e.preventDefault();

                this.dropareabox.removeClass('hover').addClass('drop');

                this.dragUploadAjax(this.draguploadOptions.url, e.dataTransfer.files[0], false, false, false, this.draguploadOptions.uploadParam);

            }, this );
        },
        dragUploadAjax: function(url, file, directupload, progress, e, uploadParam)
        {


            if (!directupload)
            {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload)
                {
                    xhr.upload.addEventListener('progress', $.proxy(this.uploadProgress, this), false);
                }

                $.ajaxSetup({
                  xhr: function () { return xhr; }
                });
            }

            var fd = new FormData();

            // append file data
            if (uploadParam !== false)
            {
                fd.append(uploadParam, file);
            }
            else
            {
                fd.append('file', file);
            }

            // append hidden fields
            if (this.opts.uploadFields !== false && typeof this.opts.uploadFields === 'object')
            {
                $.each(this.opts.uploadFields, $.proxy(function(k, v)
                {
                    if (v != null && v.toString().indexOf('#') === 0) v = $(v).val();
                    fd.append(k, v);

                }, this));
            }

            $.ajax({
                url: url,
                dataType: 'html',
                data: fd,
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST',
                success: $.proxy(function(data)
                {
                    data = data.replace(/^\[/, '');
                    data = data.replace(/\]$/, '');

                    var json = (typeof data === 'string' ? $.parseJSON(data) : data);

                    if (directupload)
                    {
                        progress.fadeOut('slow', function()
                        {
                            $(this).remove();
                        });

                        var $img = $('<img>');
                        $img.attr('src', json.filelink).attr('id', 'drag-image-marker');

                        this.insertNodeToCaretPositionFromPoint(e, $img[0]);

                        var image = $(this.$editor.find('img#drag-image-marker'));
                        if (image.length) image.removeAttr('id');
                        else image = false;

                        this.sync();
                        this.observeImages();

                        // upload callback
                        if (image) this.callback('imageUpload', image, json);

                        // error callback
                        if (typeof json.error !== 'undefined') this.callback('imageUploadError', json);
                    }
                    else
                    {
                        if (typeof json.error == 'undefined')
                        {
                            this.draguploadOptions.success(json);
                        }
                        else
                        {
                            this.draguploadOptions.error(this, json);
                            this.draguploadOptions.success(false);
                        }
                    }

                }, this)
            });
        },
        draguploadOndrag: function()
        {
            this.dropareabox.addClass('hover');
            return false;
        },
        draguploadOndragleave: function()
        {
            this.dropareabox.removeClass('hover');
            return false;
        },
        uploadProgress: function(e, text)
        {
            var percent = e.loaded ? parseInt(e.loaded / e.total * 100, 10) : e;
            this.dropareabox.text('Loading ' + percent + '% ' + (text || ''));
        },

        // UTILS
        isMobile: function()
        {
            return /(iPhone|iPod|BlackBerry|Android)/.test(navigator.userAgent);
        },
        normalize: function(str)
        {
            if (typeof(str) === 'undefined') return 0;
            return parseInt(str.replace('px',''), 10);
        },
        outerHtml: function(el)
        {
            return $('<div>').append($(el).eq(0).clone()).html();
        },
        isString: function(obj)
        {
            return Object.prototype.toString.call(obj) == '[object String]';
        },
        isEmpty: function(html)
        {
            html = html.replace(/&#x200b;|<br>|<br\/>|&nbsp;/gi, '');
            html = html.replace(/\s/g, '');
            html = html.replace(/^<p>[^\W\w\D\d]*?<\/p>$/i, '');


            return html == '';
        },
        browser: function(browser)
        {
            var ua = navigator.userAgent.toLowerCase();
            var match = /(chrome)[ \/]([\w.]+)/.exec(ua)
                    || /(webkit)[ \/]([\w.]+)/.exec(ua)
                    || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)
                    || /(msie) ([\w.]+)/.exec(ua)
                    || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)
                    || [];

            if (browser == 'version') return match[2];
            if (browser == 'webkit') return (match[1] == 'chrome' || match[1] == 'webkit');

            return match[1] == browser;
        },
        oldIE: function()
        {
            if (this.browser('msie') && parseInt(this.browser('version'), 10) < 9) return true;
            return false;
        },
        getFragmentHtml: function (fragment)
        {
            var cloned = fragment.cloneNode(true);
            var div = this.document.createElement('div');

            div.appendChild(cloned);
            return div.innerHTML;
        },
        extractContent: function()
        {
            var node = this.$editor[0];
            var frag = this.document.createDocumentFragment();
            var child;

            while ((child = node.firstChild))
            {
                frag.appendChild(child);
            }

            return frag;
        },
        isParentRedactor: function(el)
        {
            if (!el) return false;
            if (this.opts.iframe) return el;

            if ($(el).parents('div.redactor_editor').length == 0 || $(el).hasClass('redactor_editor')) return false;
            else return el;
        },
        currentOrParentIs: function(tagName)
        {
            var parent = this.getParent(), current = this.getCurrent();
            return parent && parent.tagName === tagName ? parent : current && current.tagName === tagName ? current : false;
        },
        isEndOfElement: function()
        {
            var current = this.getBlock();
            var offset = this.getCaretOffset(current);

            var text = $.trim($(current).text()).replace(/\n\r\n/g, '');

            var len = text.length;

            if (offset == len) return true;
            else return false;
        },
        isFocused: function()
        {
            var el, sel = this.getSelection();

            if (sel && sel.rangeCount && sel.rangeCount > 0) el = sel.getRangeAt(0).startContainer;
            if (!el) return false;
            if (this.opts.iframe)
            {
                if (this.getCaretOffsetRange().equals()) return !this.$editor.is(el);
                else return true;
            }

            return $(el).closest('div.redactor_editor').length != 0;
        },
        removeEmptyAttr: function (el, attr)
        {
            if ($(el).attr(attr) == '') $(el).removeAttr(attr);
        },
        removeFromArrayByValue: function(array, value)
        {
            var index = null;

            while ((index = array.indexOf(value)) !== -1)
            {
                array.splice(index, 1);
            }

            return array;
        }

    };

    // constructor
    Redactor.prototype.init.prototype = Redactor.prototype;

    // LINKIFY
    $.Redactor.fn.formatLinkify = function(protocol, convertLinks, convertImageLinks, convertVideoLinks, linkSize)
    {
        var url1 = /(^|&lt;|\s)(www\..+?\..+?)(\s|&gt;|$)/g,
            url2 = /(^|&lt;|\s)(((https?|ftp):\/\/|mailto:).+?)(\s|&gt;|$)/g,
            urlImage = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/gi,
            urlYoutube = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig,
            urlVimeo = /https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;

        var childNodes = (this.$editor ? this.$editor.get(0) : this).childNodes, i = childNodes.length;
        while (i--)
        {
            var n = childNodes[i];
            if (n.nodeType === 3)
            {
                var html = n.nodeValue;

                // youtube & vimeo
                if (convertVideoLinks && html)
                {
                    var iframeStart = '<iframe width="500" height="281" src="',
                        iframeEnd = '" frameborder="0" allowfullscreen></iframe>';

                    if (html.match(urlYoutube))
                    {
                        html = html.replace(urlYoutube, iframeStart + '//www.youtube.com/embed/$1' + iframeEnd);
                        $(n).after(html).remove();
                    }
                    else if (html.match(urlVimeo))
                    {
                        html = html.replace(urlVimeo, iframeStart + '//player.vimeo.com/video/$2' + iframeEnd);
                        $(n).after(html).remove();
                    }
                }

                // image
                if (convertImageLinks && html && html.match(urlImage))
                {
                    html = html.replace(urlImage, '<img src="$1">');

                    $(n).after(html).remove();
                }

                // link
                if (convertLinks && html && (html.match(url1) || html.match(url2)))
                {
                    var href = (html.match(url1) || html.match(url2));
                    href = href[0];
                    if (href.length > linkSize) href = href.substring(0, linkSize) + '...';

                    html = html.replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(url1, '$1<a href="' + protocol + '$2">' + $.trim(href) + '</a>$3')
                    .replace(url2, '$1<a href="$2">' + $.trim(href) + '</a>$5');


                    $(n).after(html).remove();
                }
            }
            else if (n.nodeType === 1 && !/^(a|button|textarea)$/i.test(n.tagName))
            {
                $.Redactor.fn.formatLinkify.call(n, protocol, convertLinks, convertImageLinks, convertVideoLinks, linkSize);
            }
        }
    };

})(jQuery);;/* Copyright (c) 2012 HyeonJe Jun (http://github.com/noraesae)
 * Licensed under the MIT License
 */
'use strict';
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  // The default settings for the plugin
  var defaultSettings = {
    wheelSpeed: 10,
    wheelPropagation: false,
    minScrollbarLength: null,
    useBothWheelAxes: false,
    useKeyboard: true
  };

  $.fn.perfectScrollbar = function (suppliedSettings, option) {

    return this.each(function () {
      // Use the default settings
      var settings = $.extend(true, {}, defaultSettings),
          $this = $(this);

      if (typeof suppliedSettings === "object") {
        // But over-ride any supplied
        $.extend(true, settings, suppliedSettings);
      } else {
        // If no settings were supplied, then the first param must be the option
        option = suppliedSettings;
      }

      // Catch options

      if (option === 'update') {
        if ($this.data('perfect-scrollbar-update')) {
          $this.data('perfect-scrollbar-update')();
        }
        return $this;
      }
      else if (option === 'destroy') {
        if ($this.data('perfect-scrollbar-destroy')) {
          $this.data('perfect-scrollbar-destroy')();
        }
        return $this;
      }

      if ($this.data('perfect-scrollbar')) {
        // if there's already perfect-scrollbar
        return $this.data('perfect-scrollbar');
      }


      // Or generate new perfectScrollbar

      // Set class to the container
      $this.addClass('ps-container');

      var $scrollbarXRail = $("<div class='ps-scrollbar-x-rail'></div>").appendTo($this),
          $scrollbarYRail = $("<div class='ps-scrollbar-y-rail'></div>").appendTo($this),
          $scrollbarX = $("<div class='ps-scrollbar-x'></div>").appendTo($scrollbarXRail),
          $scrollbarY = $("<div class='ps-scrollbar-y'></div>").appendTo($scrollbarYRail),
          scrollbarXActive,
          scrollbarYActive,
          containerWidth,
          containerHeight,
          contentWidth,
          contentHeight,
          scrollbarXWidth,
          scrollbarXLeft,
          scrollbarXBottom = parseInt($scrollbarXRail.css('bottom'), 10),
          scrollbarYHeight,
          scrollbarYTop,
          scrollbarYRight = parseInt($scrollbarYRail.css('right'), 10);

      var updateContentScrollTop = function () {
        var scrollTop = parseInt(scrollbarYTop * (contentHeight - containerHeight) / (containerHeight - scrollbarYHeight), 10);
        $this.scrollTop(scrollTop);
        $scrollbarXRail.css({bottom: scrollbarXBottom - scrollTop});
      };

      var updateContentScrollLeft = function () {
        var scrollLeft = parseInt(scrollbarXLeft * (contentWidth - containerWidth) / (containerWidth - scrollbarXWidth), 10);
        $this.scrollLeft(scrollLeft);
        $scrollbarYRail.css({right: scrollbarYRight - scrollLeft});
      };

      var getSettingsAdjustedThumbSize = function (thumbSize) {
        if (settings.minScrollbarLength) {
          thumbSize = Math.max(thumbSize, settings.minScrollbarLength);
        }
        return thumbSize;
      };

      var updateScrollbarCss = function () {
        $scrollbarXRail.css({left: $this.scrollLeft(), bottom: scrollbarXBottom - $this.scrollTop(), width: containerWidth});
        $scrollbarYRail.css({top: $this.scrollTop(), right: scrollbarYRight - $this.scrollLeft(), height: containerHeight});
        $scrollbarX.css({left: scrollbarXLeft, width: scrollbarXWidth});
        $scrollbarY.css({top: scrollbarYTop, height: scrollbarYHeight});
      };

      var updateBarSizeAndPosition = function () {
        containerWidth = $this.width();
        containerHeight = $this.height();
        contentWidth = $this.prop('scrollWidth') - 5;
        contentHeight = $this.prop('scrollHeight');

        if (containerWidth < contentWidth) {
          scrollbarXActive = true;
          scrollbarXWidth = getSettingsAdjustedThumbSize(parseInt(containerWidth * containerWidth / contentWidth, 10));
          scrollbarXLeft = parseInt($this.scrollLeft() * (containerWidth - scrollbarXWidth) / (contentWidth - containerWidth), 10);
        }
        else {
          scrollbarXActive = false;
          scrollbarXWidth = 0;
          scrollbarXLeft = 0;
          $this.scrollLeft(0);
        }

        if (containerHeight < contentHeight) {
          scrollbarYActive = true;
          scrollbarYHeight = getSettingsAdjustedThumbSize(parseInt(containerHeight * containerHeight / contentHeight, 10));
          scrollbarYTop = parseInt($this.scrollTop() * (containerHeight - scrollbarYHeight) / (contentHeight - containerHeight), 10);
        }
        else {
          scrollbarYActive = false;
          scrollbarYHeight = 0;
          scrollbarYTop = 0;
          $this.scrollTop(0);
        }

        if (scrollbarYTop >= containerHeight - scrollbarYHeight) {
          scrollbarYTop = containerHeight - scrollbarYHeight;
        }
        if (scrollbarXLeft >= containerWidth - scrollbarXWidth) {
          scrollbarXLeft = containerWidth - scrollbarXWidth;
        }

        updateScrollbarCss();
      };

      var moveBarX = function (currentLeft, deltaX) {
        var newLeft = currentLeft + deltaX,
            maxLeft = containerWidth - scrollbarXWidth;

        if (newLeft < 0) {
          scrollbarXLeft = 0;
        }
        else if (newLeft > maxLeft) {
          scrollbarXLeft = maxLeft;
        }
        else {
          scrollbarXLeft = newLeft;
        }
        $scrollbarXRail.css({left: $this.scrollLeft()});
        $scrollbarX.css({left: scrollbarXLeft});
      };

      var moveBarY = function (currentTop, deltaY) {
        var newTop = currentTop + deltaY,
            maxTop = containerHeight - scrollbarYHeight;

        if (newTop < 0) {
          scrollbarYTop = 0;
        }
        else if (newTop > maxTop) {
          scrollbarYTop = maxTop;
        }
        else {
          scrollbarYTop = newTop;
        }
        $scrollbarYRail.css({top: $this.scrollTop()});
        $scrollbarY.css({top: scrollbarYTop});
      };

      var bindMouseScrollXHandler = function () {
        var currentLeft,
            currentPageX;

        $scrollbarX.bind('mousedown.perfect-scrollbar', function (e) {
          currentPageX = e.pageX;
          currentLeft = $scrollbarX.position().left;
          $scrollbarXRail.addClass('in-scrolling');
          e.stopPropagation();
          e.preventDefault();
        });

        $(document).bind('mousemove.perfect-scrollbar', function (e) {
          if ($scrollbarXRail.hasClass('in-scrolling')) {
            updateContentScrollLeft();
            moveBarX(currentLeft, e.pageX - currentPageX);
            e.stopPropagation();
            e.preventDefault();
          }
        });

        $(document).bind('mouseup.perfect-scrollbar', function (e) {
          if ($scrollbarXRail.hasClass('in-scrolling')) {
            $scrollbarXRail.removeClass('in-scrolling');
          }
        });

        currentLeft =
        currentPageX = null;
      };

      var bindMouseScrollYHandler = function () {
        var currentTop,
            currentPageY;

        $scrollbarY.bind('mousedown.perfect-scrollbar', function (e) {
          currentPageY = e.pageY;
          currentTop = $scrollbarY.position().top;
          $scrollbarYRail.addClass('in-scrolling');
          e.stopPropagation();
          e.preventDefault();
        });

        $(document).bind('mousemove.perfect-scrollbar', function (e) {
          if ($scrollbarYRail.hasClass('in-scrolling')) {
            updateContentScrollTop();
            moveBarY(currentTop, e.pageY - currentPageY);
            e.stopPropagation();
            e.preventDefault();
          }
        });

        $(document).bind('mouseup.perfect-scrollbar', function (e) {
          if ($scrollbarYRail.hasClass('in-scrolling')) {
            $scrollbarYRail.removeClass('in-scrolling');
          }
        });

        currentTop =
        currentPageY = null;
      };

      // bind handlers
      var bindMouseWheelHandler = function () {
        var shouldPreventDefault = function (deltaX, deltaY) {
          var scrollTop = $this.scrollTop();
          if (scrollTop === 0 && deltaY > 0 && deltaX === 0) {
            return !settings.wheelPropagation;
          }
          else if (scrollTop >= contentHeight - containerHeight && deltaY < 0 && deltaX === 0) {
            return !settings.wheelPropagation;
          }

          var scrollLeft = $this.scrollLeft();
          if (scrollLeft === 0 && deltaX < 0 && deltaY === 0) {
            return !settings.wheelPropagation;
          }
          else if (scrollLeft >= contentWidth - containerWidth && deltaX > 0 && deltaY === 0) {
            return !settings.wheelPropagation;
          }
          return true;
        };

        var shouldPrevent = false;
        $this.bind('mousewheel.perfect-scrollbar', function (e, delta, deltaX, deltaY) {
          if (!settings.useBothWheelAxes) {
            // deltaX will only be used for horizontal scrolling and deltaY will
            // only be used for vertical scrolling - this is the default
            $this.scrollTop($this.scrollTop() - (deltaY * settings.wheelSpeed));
            $this.scrollLeft($this.scrollLeft() + (deltaX * settings.wheelSpeed));
          } else if (scrollbarYActive && !scrollbarXActive) {
            // only vertical scrollbar is active and useBothWheelAxes option is
            // active, so let's scroll vertical bar using both mouse wheel axes
            if (deltaY) {
              $this.scrollTop($this.scrollTop() - (deltaY * settings.wheelSpeed));
            } else {
              $this.scrollTop($this.scrollTop() + (deltaX * settings.wheelSpeed));
            }
          } else if (scrollbarXActive && !scrollbarYActive) {
            // useBothWheelAxes and only horizontal bar is active, so use both
            // wheel axes for horizontal bar
            if (deltaX) {
              $this.scrollLeft($this.scrollLeft() + (deltaX * settings.wheelSpeed));
            } else {
              $this.scrollLeft($this.scrollLeft() - (deltaY * settings.wheelSpeed));
            }
          }

          // update bar position
          updateBarSizeAndPosition();

          shouldPrevent = shouldPreventDefault(deltaX, deltaY);
          if (shouldPrevent) {
            e.preventDefault();
          }
        });

        // fix Firefox scroll problem
        $this.bind('MozMousePixelScroll.perfect-scrollbar', function (e) {
          if (shouldPrevent) {
            e.preventDefault();
          }
        });
      };

      var bindKeyboardHandler = function () {
        var shouldPreventDefault = function (deltaX, deltaY) {
          var scrollTop = $this.scrollTop();
          if (scrollTop === 0 && deltaY > 0 && deltaX === 0) {
            return false;
          }
          else if (scrollTop >= contentHeight - containerHeight && deltaY < 0 && deltaX === 0) {
            return false;
          }

          var scrollLeft = $this.scrollLeft();
          if (scrollLeft === 0 && deltaX < 0 && deltaY === 0) {
            return false;
          }
          else if (scrollLeft >= contentWidth - containerWidth && deltaX > 0 && deltaY === 0) {
            return false;
          }
          return true;
        };

        var hovered = false;
        $this.bind('mouseenter.perfect-scrollbar', function (e) {
          hovered = true;
        });
        $this.bind('mouseleave.perfect-scrollbar', function (e) {
          hovered = false;
        });

        var shouldPrevent = false;
        $(document).bind('keydown.perfect-scrollbar', function (e) {
          if (!hovered) {
            return;
          }

          var deltaX = 0,
              deltaY = 0;

          switch (e.which) {
          case 37: // left
            deltaX = -3;
            break;
          case 38: // up
            deltaY = 3;
            break;
          case 39: // right
            deltaX = 3;
            break;
          case 40: // down
            deltaY = -3;
            break;
          default:
            return;
          }

          $this.scrollTop($this.scrollTop() - (deltaY * settings.wheelSpeed));
          $this.scrollLeft($this.scrollLeft() + (deltaX * settings.wheelSpeed));

          // update bar position
          updateBarSizeAndPosition();

          shouldPrevent = shouldPreventDefault(deltaX, deltaY);
          if (shouldPrevent) {
            e.preventDefault();
          }
        });
      };

      var bindRailClickHandler = function () {
        var stopPropagation = function (e) { e.stopPropagation(); };

        $scrollbarY.bind('click.perfect-scrollbar', stopPropagation);
        $scrollbarYRail.bind('click.perfect-scrollbar', function (e) {
          var halfOfScrollbarLength = parseInt(scrollbarYHeight / 2, 10),
              positionTop = e.pageY - $scrollbarYRail.offset().top - halfOfScrollbarLength,
              maxPositionTop = containerHeight - scrollbarYHeight,
              positionRatio = positionTop / maxPositionTop;

          if (positionRatio < 0) {
            positionRatio = 0;
          } else if (positionRatio > 1) {
            positionRatio = 1;
          }

          $this.scrollTop((contentHeight - containerHeight) * positionRatio);

          // update bar position
          updateBarSizeAndPosition();
        });

        $scrollbarX.bind('click.perfect-scrollbar', stopPropagation);
        $scrollbarXRail.bind('click.perfect-scrollbar', function (e) {
          var halfOfScrollbarLength = parseInt(scrollbarXWidth / 2, 10),
              positionLeft = e.pageX - $scrollbarXRail.offset().left - halfOfScrollbarLength,
              maxPositionLeft = containerWidth - scrollbarXWidth,
              positionRatio = positionLeft / maxPositionLeft;

          if (positionRatio < 0) {
            positionRatio = 0;
          } else if (positionRatio > 1) {
            positionRatio = 1;
          }

          $this.scrollLeft((contentWidth - containerWidth) * positionRatio);

          // update bar position
          updateBarSizeAndPosition();
        });
      };

      // bind mobile touch handler
      var bindMobileTouchHandler = function () {
        var applyTouchMove = function (differenceX, differenceY) {
          $this.scrollTop($this.scrollTop() - differenceY);
          $this.scrollLeft($this.scrollLeft() - differenceX);

          // update bar position
          updateBarSizeAndPosition();
        };

        var startCoords = {},
            startTime = 0,
            speed = {},
            breakingProcess = null,
            inGlobalTouch = false;

        $(window).bind("touchstart.perfect-scrollbar", function (e) {
          inGlobalTouch = true;
        });
        $(window).bind("touchend.perfect-scrollbar", function (e) {
          inGlobalTouch = false;
        });

        $this.bind("touchstart.perfect-scrollbar", function (e) {
          var touch = e.originalEvent.targetTouches[0];

          startCoords.pageX = touch.pageX;
          startCoords.pageY = touch.pageY;

          startTime = (new Date()).getTime();

          if (breakingProcess !== null) {
            clearInterval(breakingProcess);
          }

          e.stopPropagation();
        });
        $this.bind("touchmove.perfect-scrollbar", function (e) {
          if (!inGlobalTouch && e.originalEvent.targetTouches.length === 1) {
            var touch = e.originalEvent.targetTouches[0];

            var currentCoords = {};
            currentCoords.pageX = touch.pageX;
            currentCoords.pageY = touch.pageY;

            var differenceX = currentCoords.pageX - startCoords.pageX,
              differenceY = currentCoords.pageY - startCoords.pageY;

            applyTouchMove(differenceX, differenceY);
            startCoords = currentCoords;

            var currentTime = (new Date()).getTime();
            speed.x = differenceX / (currentTime - startTime);
            speed.y = differenceY / (currentTime - startTime);
            startTime = currentTime;

            e.preventDefault();
          }
        });
        $this.bind("touchend.perfect-scrollbar", function (e) {
          clearInterval(breakingProcess);
          breakingProcess = setInterval(function () {
            if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
              clearInterval(breakingProcess);
              return;
            }

            applyTouchMove(speed.x * 30, speed.y * 30);

            speed.x *= 0.8;
            speed.y *= 0.8;
          }, 10);
        });
      };

      var destroy = function () {
        $this.unbind('.perfect-scrollbar');
        $(window).unbind('.perfect-scrollbar');
        $(document).unbind('.perfect-scrollbar');
        $this.data('perfect-scrollbar', null);
        $this.data('perfect-scrollbar-update', null);
        $this.data('perfect-scrollbar-destroy', null);
        $scrollbarX.remove();
        $scrollbarY.remove();
        $scrollbarXRail.remove();
        $scrollbarYRail.remove();

        // clean all variables
        $scrollbarX =
        $scrollbarY =
        containerWidth =
        containerHeight =
        contentWidth =
        contentHeight =
        scrollbarXWidth =
        scrollbarXLeft =
        scrollbarXBottom =
        scrollbarYHeight =
        scrollbarYTop =
        scrollbarYRight = null;
      };

      var ieSupport = function (version) {
        $this.addClass('ie').addClass('ie' + version);

        var bindHoverHandlers = function () {
          var mouseenter = function () {
            $(this).addClass('hover');
          };
          var mouseleave = function () {
            $(this).removeClass('hover');
          };
          $this.bind('mouseenter.perfect-scrollbar', mouseenter).bind('mouseleave.perfect-scrollbar', mouseleave);
          $scrollbarXRail.bind('mouseenter.perfect-scrollbar', mouseenter).bind('mouseleave.perfect-scrollbar', mouseleave);
          $scrollbarYRail.bind('mouseenter.perfect-scrollbar', mouseenter).bind('mouseleave.perfect-scrollbar', mouseleave);
          $scrollbarX.bind('mouseenter.perfect-scrollbar', mouseenter).bind('mouseleave.perfect-scrollbar', mouseleave);
          $scrollbarY.bind('mouseenter.perfect-scrollbar', mouseenter).bind('mouseleave.perfect-scrollbar', mouseleave);
        };

        var fixIe6ScrollbarPosition = function () {
          updateScrollbarCss = function () {
            $scrollbarX.css({left: scrollbarXLeft + $this.scrollLeft(), bottom: scrollbarXBottom, width: scrollbarXWidth});
            $scrollbarY.css({top: scrollbarYTop + $this.scrollTop(), right: scrollbarYRight, height: scrollbarYHeight});
            $scrollbarX.hide().show();
            $scrollbarY.hide().show();
          };
          updateContentScrollTop = function () {
            var scrollTop = parseInt(scrollbarYTop * contentHeight / containerHeight, 10);
            $this.scrollTop(scrollTop);
            $scrollbarX.css({bottom: scrollbarXBottom});
            $scrollbarX.hide().show();
          };
          updateContentScrollLeft = function () {
            var scrollLeft = parseInt(scrollbarXLeft * contentWidth / containerWidth, 10);
            $this.scrollLeft(scrollLeft);
            $scrollbarY.hide().show();
          };
        };

        if (version === 6) {
          bindHoverHandlers();
          fixIe6ScrollbarPosition();
        }
      };

      var supportsTouch = (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);

      var initialize = function () {
        var ieMatch = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);
        if (ieMatch && ieMatch[1] === 'msie') {
          // must be executed at first, because 'ieSupport' may addClass to the container
          ieSupport(parseInt(ieMatch[2], 10));
        }

        updateBarSizeAndPosition();
        bindMouseScrollXHandler();
        bindMouseScrollYHandler();
        bindRailClickHandler();
        if (supportsTouch) {
          bindMobileTouchHandler();
        }
        if ($this.mousewheel) {
          bindMouseWheelHandler();
        }
        if (settings.useKeyboard) {
          bindKeyboardHandler();
        }
        $this.data('perfect-scrollbar', $this);
        $this.data('perfect-scrollbar-update', updateBarSizeAndPosition);
        $this.data('perfect-scrollbar-destroy', destroy);
      };

      // initialize
      initialize();

      return $this;
    });
  };
}));;/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.3.0
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2013, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) {
      return inWords(timestamp);
    } else if (typeof timestamp === "string") {
      return inWords($.timeago.parse(timestamp));
    } else if (typeof timestamp === "number") {
      return inWords(new Date(timestamp));
    } else {
      return inWords($.timeago.datetime(timestamp));
    }
  };
  var $t = $.timeago;

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowFuture: false,
      localeTitle: false,
      cutoff: 0,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years",
        wordSeparator: " ",
        numbers: []
      }
    },
    inWords: function(distanceMillis) {
      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
      }

      var seconds = Math.abs(distanceMillis) / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;

      function substitute(stringOrFunction, number) {
        var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
        var value = ($l.numbers && $l.numbers[number]) || number;
        return string.replace(/%d/i, value);
      }

      var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 42 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.round(days)) ||
        days < 45 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.round(days / 30)) ||
        years < 1.5 && substitute($l.year, 1) ||
        substitute($l.years, Math.round(years));

      var separator = $l.wordSeparator || "";
      if ($l.wordSeparator === undefined) { separator = " "; }
      return $.trim([prefix, words, suffix].join(separator));
    },
    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/\.\d+/,""); // remove milliseconds
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      return new Date(s);
    },
    datetime: function(elem) {
      var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
      return $t.parse(iso8601);
    },
    isTime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
    }
  });

  // functions that can be called via $(el).timeago('action')
  // init is default when no action is given
  // functions are called with context of a single element
  var functions = {
    init: function(){
      var refresh_el = $.proxy(refresh, this);
      refresh_el();
      var $s = $t.settings;
      if ($s.refreshMillis > 0) {
        setInterval(refresh_el, $s.refreshMillis);
      }
    },
    update: function(time){
      $(this).data('timeago', { datetime: $t.parse(time) });
      refresh.apply(this);
    },
    updateFromDOM: function(){
      $(this).data('timeago', { datetime: $t.parse( $t.isTime(this) ? $(this).attr("datetime") : $(this).attr("title") ) });
      refresh.apply(this);
    }
  };

  $.fn.timeago = function(action, options) {
    var fn = action ? functions[action] : functions.init;
    if(!fn){
      throw new Error("Unknown function name '"+ action +"' for timeago");
    }
    // each over objects here and call the requested function
    this.each(function(){
      fn.call(this, options);
    });
    return this;
  };

  function refresh() {
    var data = prepareData(this);
    var $s = $t.settings;

    if (!isNaN(data.datetime)) {
      if ( $s.cutoff == 0 || distance(data.datetime) < $s.cutoff) {
        $(this).text(inWords(data.datetime));
      }
    }
    return this;
  }

  function prepareData(element) {
    element = $(element);
    if (!element.data("timeago")) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if ($t.settings.localeTitle) {
        element.attr("title", element.data('timeago').datetime.toLocaleString());
      } else if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
        element.attr("title", text);
      }
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  // fix for IE6 suckage
  document.createElement("abbr");
  document.createElement("time");
}));;//! moment.js
//! version : 2.4.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b){return function(c){return i(a.call(this,c),b)}}function c(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function d(){}function e(a){u(a),g(this,a)}function f(a){var b=o(a),c=b.year||0,d=b.month||0,e=b.week||0,f=b.day||0,g=b.hour||0,h=b.minute||0,i=b.second||0,j=b.millisecond||0;this._input=a,this._milliseconds=+j+1e3*i+6e4*h+36e5*g,this._days=+f+7*e,this._months=+d+12*c,this._data={},this._bubble()}function g(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function h(a){return 0>a?Math.ceil(a):Math.floor(a)}function i(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c}function j(a,b,c,d){var e,f,g=b._milliseconds,h=b._days,i=b._months;g&&a._d.setTime(+a._d+g*c),(h||i)&&(e=a.minute(),f=a.hour()),h&&a.date(a.date()+h*c),i&&a.month(a.month()+i*c),g&&!d&&bb.updateOffset(a),(h||i)&&(a.minute(e),a.hour(f))}function k(a){return"[object Array]"===Object.prototype.toString.call(a)}function l(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function m(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&q(a[d])!==q(b[d]))&&g++;return g+f}function n(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Kb[a]||Lb[b]||b}return a}function o(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=n(c),b&&(d[b]=a[c]));return d}function p(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}bb[b]=function(e,f){var g,h,i=bb.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=bb().utc().set(d,a);return i.call(bb.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function q(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function r(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function s(a){return t(a)?366:365}function t(a){return 0===a%4&&0!==a%100||0===a%400}function u(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[gb]<0||a._a[gb]>11?gb:a._a[hb]<1||a._a[hb]>r(a._a[fb],a._a[gb])?hb:a._a[ib]<0||a._a[ib]>23?ib:a._a[jb]<0||a._a[jb]>59?jb:a._a[kb]<0||a._a[kb]>59?kb:a._a[lb]<0||a._a[lb]>999?lb:-1,a._pf._overflowDayOfYear&&(fb>b||b>hb)&&(b=hb),a._pf.overflow=b)}function v(a){a._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function w(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function x(a){return a?a.toLowerCase().replace("_","-"):a}function y(a,b){return b.abbr=a,mb[a]||(mb[a]=new d),mb[a].set(b),mb[a]}function z(a){delete mb[a]}function A(a){var b,c,d,e,f=0,g=function(a){if(!mb[a]&&nb)try{require("./lang/"+a)}catch(b){}return mb[a]};if(!a)return bb.fn._lang;if(!k(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=x(a[f]).split("-"),b=e.length,d=x(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&m(e,d,!0)>=b-1)break;b--}f++}return bb.fn._lang}function B(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function C(a){var b,c,d=a.match(rb);for(b=0,c=d.length;c>b;b++)d[b]=Pb[d[b]]?Pb[d[b]]:B(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function D(a,b){return a.isValid()?(b=E(b,a.lang()),Mb[b]||(Mb[b]=C(b)),Mb[b](a)):a.lang().invalidDate()}function E(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(sb.lastIndex=0;d>=0&&sb.test(a);)a=a.replace(sb,c),sb.lastIndex=0,d-=1;return a}function F(a,b){var c;switch(a){case"DDDD":return vb;case"YYYY":case"GGGG":case"gggg":return wb;case"YYYYY":case"GGGGG":case"ggggg":return xb;case"S":case"SS":case"SSS":case"DDD":return ub;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return zb;case"a":case"A":return A(b._l)._meridiemParse;case"X":return Cb;case"Z":case"ZZ":return Ab;case"T":return Bb;case"SSSS":return yb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"ww":case"W":case"WW":case"e":case"E":return tb;default:return c=new RegExp(N(M(a.replace("\\","")),"i"))}}function G(a){var b=(Ab.exec(a)||[])[0],c=(b+"").match(Hb)||["-",0,0],d=+(60*c[1])+q(c[2]);return"+"===c[0]?-d:d}function H(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":null!=b&&(e[gb]=q(b)-1);break;case"MMM":case"MMMM":d=A(c._l).monthsParse(b),null!=d?e[gb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[hb]=q(b));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=q(b));break;case"YY":e[fb]=q(b)+(q(b)>68?1900:2e3);break;case"YYYY":case"YYYYY":e[fb]=q(b);break;case"a":case"A":c._isPm=A(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[ib]=q(b);break;case"m":case"mm":e[jb]=q(b);break;case"s":case"ss":e[kb]=q(b);break;case"S":case"SS":case"SSS":case"SSSS":e[lb]=q(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=G(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function I(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=K(a),a._w&&null==a._a[hb]&&null==a._a[gb]&&(f=function(b){return b?b.length<3?parseInt(b,10)>68?"19"+b:"20"+b:b:null==a._a[fb]?bb().weekYear():a._a[fb]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=X(f(g.GG),g.W||1,g.E,4,1):(i=A(a._l),j=null!=g.d?T(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=X(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[fb]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[fb]?d[fb]:a._a[fb],a._dayOfYear>s(e)&&(a._pf._overflowDayOfYear=!0),c=S(e,0,a._dayOfYear),a._a[gb]=c.getUTCMonth(),a._a[hb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[ib]+=q((a._tzm||0)/60),l[jb]+=q((a._tzm||0)%60),a._d=(a._useUTC?S:R).apply(null,l)}}function J(a){var b;a._d||(b=o(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],I(a))}function K(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function L(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=A(a._l),h=""+a._i,i=h.length,j=0;for(d=E(a._f,g).match(rb)||[],b=0;b<d.length;b++)e=d[b],c=(F(e,a).exec(h)||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),Pb[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),H(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[ib]<12&&(a._a[ib]+=12),a._isPm===!1&&12===a._a[ib]&&(a._a[ib]=0),I(a),u(a)}function M(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function N(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function O(a){var b,c,d,e,f;if(0===a._f.length)return a._pf.invalidFormat=!0,a._d=new Date(0/0),void 0;for(e=0;e<a._f.length;e++)f=0,b=g({},a),v(b),b._f=a._f[e],L(b),w(b)&&(f+=b._pf.charsLeftOver,f+=10*b._pf.unusedTokens.length,b._pf.score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function P(a){var b,c=a._i,d=Db.exec(c);if(d){for(a._pf.iso=!0,b=4;b>0;b--)if(d[b]){a._f=Fb[b-1]+(d[6]||" ");break}for(b=0;4>b;b++)if(Gb[b][1].exec(c)){a._f+=Gb[b][0];break}Ab.exec(c)&&(a._f+="Z"),L(a)}else a._d=new Date(c)}function Q(b){var c=b._i,d=ob.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?P(b):k(c)?(b._a=c.slice(0),I(b)):l(c)?b._d=new Date(+c):"object"==typeof c?J(b):b._d=new Date(c)}function R(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function S(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function T(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function U(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function V(a,b,c){var d=eb(Math.abs(a)/1e3),e=eb(d/60),f=eb(e/60),g=eb(f/24),h=eb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",eb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,U.apply({},i)}function W(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=bb(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function X(a,b,c,d,e){var f,g,h=new Date(Date.UTC(a,0)).getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:s(a-1)+g}}function Y(a){var b=a._i,c=a._f;return"undefined"==typeof a._pf&&v(a),null===b?bb.invalid({nullInput:!0}):("string"==typeof b&&(a._i=b=A().preparse(b)),bb.isMoment(b)?(a=g({},b),a._d=new Date(+b._d)):c?k(c)?O(a):L(a):Q(a),new e(a))}function Z(a,b){bb.fn[a]=bb.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),bb.updateOffset(this),this):this._d["get"+c+b]()}}function $(a){bb.duration.fn[a]=function(){return this._data[a]}}function _(a,b){bb.duration.fn["as"+a]=function(){return+this/b}}function ab(a){var b=!1,c=bb;"undefined"==typeof ender&&(this.moment=a?function(){return!b&&console&&console.warn&&(b=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),c.apply(null,arguments)}:bb)}for(var bb,cb,db="2.4.0",eb=Math.round,fb=0,gb=1,hb=2,ib=3,jb=4,kb=5,lb=6,mb={},nb="undefined"!=typeof module&&module.exports,ob=/^\/?Date\((\-?\d+)/i,pb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,qb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,rb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,sb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,tb=/\d\d?/,ub=/\d{1,3}/,vb=/\d{3}/,wb=/\d{1,4}/,xb=/[+\-]?\d{1,6}/,yb=/\d+/,zb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Ab=/Z|[\+\-]\d\d:?\d\d/i,Bb=/T/i,Cb=/[\+\-]?\d+(\.\d{1,3})?/,Db=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d:?\d\d|Z)?)?$/,Eb="YYYY-MM-DDTHH:mm:ssZ",Fb=["YYYY-MM-DD","GGGG-[W]WW","GGGG-[W]WW-E","YYYY-DDD"],Gb=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Hb=/([\+\-]|\d\d)/gi,Ib="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Jb={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Kb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Lb={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Mb={},Nb="DDD w W M D d".split(" "),Ob="M D H h m s w W".split(" "),Pb={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return i(this.year()%100,2)},YYYY:function(){return i(this.year(),4)},YYYYY:function(){return i(this.year(),5)},gg:function(){return i(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return i(this.weekYear(),5)},GG:function(){return i(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return i(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return q(this.milliseconds()/100)},SS:function(){return i(q(this.milliseconds()/10),2)},SSS:function(){return i(this.milliseconds(),3)},SSSS:function(){return i(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(q(a/60),2)+":"+i(q(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(q(10*a/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}},Qb=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];Nb.length;)cb=Nb.pop(),Pb[cb+"o"]=c(Pb[cb],cb);for(;Ob.length;)cb=Ob.pop(),Pb[cb+cb]=b(Pb[cb],2);for(Pb.DDDD=b(Pb.DDD,3),g(d.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=bb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=bb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return W(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),bb=function(b,c,d,e){return"boolean"==typeof d&&(e=d,d=a),Y({_i:b,_f:c,_l:d,_strict:e,_isUTC:!1})},bb.utc=function(b,c,d,e){var f;return"boolean"==typeof d&&(e=d,d=a),f=Y({_useUTC:!0,_isUTC:!0,_l:d,_i:b,_f:c,_strict:e}).utc()},bb.unix=function(a){return bb(1e3*a)},bb.duration=function(a,b){var c,d,e,g=bb.isDuration(a),h="number"==typeof a,i=g?a._input:h?{}:a,j=null;return h?b?i[b]=a:i.milliseconds=a:(j=pb.exec(a))?(c="-"===j[1]?-1:1,i={y:0,d:q(j[hb])*c,h:q(j[ib])*c,m:q(j[jb])*c,s:q(j[kb])*c,ms:q(j[lb])*c}):(j=qb.exec(a))&&(c="-"===j[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},i={y:e(j[2]),M:e(j[3]),d:e(j[4]),h:e(j[5]),m:e(j[6]),s:e(j[7]),w:e(j[8])}),d=new f(i),g&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},bb.version=db,bb.defaultFormat=Eb,bb.updateOffset=function(){},bb.lang=function(a,b){var c;return a?(b?y(x(a),b):null===b?(z(a),a="en"):mb[a]||A(a),c=bb.duration.fn._lang=bb.fn._lang=A(a),c._abbr):bb.fn._lang._abbr},bb.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),A(a)},bb.isMoment=function(a){return a instanceof e},bb.isDuration=function(a){return a instanceof f},cb=Qb.length-1;cb>=0;--cb)p(Qb[cb]);for(bb.normalizeUnits=function(a){return n(a)},bb.invalid=function(a){var b=bb.utc(0/0);return null!=a?g(b._pf,a):b._pf.userInvalidated=!0,b},bb.parseZone=function(a){return bb(a).parseZone()},g(bb.fn=e.prototype,{clone:function(){return bb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return D(bb(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return w(this)},isDSTShifted:function(){return this._a?this.isValid()&&m(this._a,(this._isUTC?bb.utc(this._a):bb(this._a)).toArray())>0:!1},parsingFlags:function(){return g({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=D(this,a||bb.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?bb.duration(+b,a):bb.duration(a,b),j(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?bb.duration(+b,a):bb.duration(a,b),j(this,c,-1),this},diff:function(a,b,c){var d,e,f=this._isUTC?bb(a).zone(this._offset||0):bb(a).local(),g=6e4*(this.zone()-f.zone());return b=n(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-bb(this).startOf("month")-(f-bb(f).startOf("month")))/d,e-=6e4*(this.zone()-bb(this).startOf("month").zone()-(f.zone()-bb(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:h(e)},from:function(a,b){return bb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(bb(),a)},calendar:function(){var a=this.diff(bb().zone(this.zone()).startOf("day"),"days",!0),b=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse";return this.format(this.lang().calendar(b,this))},isLeapYear:function(){return t(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=T(a,this.lang()),this.add({d:a-b})):b},month:function(a){var b,c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),bb.updateOffset(this),this):this._d["get"+c+"Month"]()},startOf:function(a){switch(a=n(a)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),this},endOf:function(a){return a=n(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+bb(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+bb(a).startOf(b)},isSame:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)===+bb(a).startOf(b)},min:function(a){return a=bb.apply(null,arguments),this>a?this:a},max:function(a){return a=bb.apply(null,arguments),a>this?this:a},zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=G(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,b!==a&&j(this,bb.duration(b-a,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?bb(a).zone():0,0===(this.zone()-a)%60},daysInMonth:function(){return r(this.year(),this.month())},dayOfYear:function(a){var b=eb((bb(this).startOf("day")-bb(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},weekYear:function(a){var b=W(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=W(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=W(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},get:function(a){return a=n(a),this[a]()},set:function(a,b){return a=n(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=A(b),this)}}),cb=0;cb<Ib.length;cb++)Z(Ib[cb].toLowerCase().replace(/s$/,""),Ib[cb]);Z("year","FullYear"),bb.fn.days=bb.fn.day,bb.fn.months=bb.fn.month,bb.fn.weeks=bb.fn.week,bb.fn.isoWeeks=bb.fn.isoWeek,bb.fn.toJSON=bb.fn.toISOString,g(bb.duration.fn=f.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,i=this._data;i.milliseconds=e%1e3,a=h(e/1e3),i.seconds=a%60,b=h(a/60),i.minutes=b%60,c=h(b/60),i.hours=c%24,f+=h(c/24),i.days=f%30,g+=h(f/30),i.months=g%12,d=h(g/12),i.years=d},weeks:function(){return h(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*q(this._months/12)},humanize:function(a){var b=+this,c=V(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=bb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=bb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=n(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=n(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:bb.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(cb in Jb)Jb.hasOwnProperty(cb)&&(_(cb,Jb[cb]),$(cb.toLowerCase()));_("Weeks",6048e5),bb.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},bb.lang("en",{ordinal:function(a){var b=a%10,c=1===q(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),nb?(module.exports=bb,ab(!0)):"function"==typeof define&&define.amd?define("moment",function(b,c,d){return d.config().noGlobal!==!0&&ab(d.config().noGlobal===a),bb}):ab()}).call(this);;// Generated by CoffeeScript 1.4.0
/*
#
# Opentip v2.2.5
#
# More info at [www.opentip.org](http://www.opentip.org)
# 
# Copyright (c) 2012, Matias Meno  
# Graphics by Tjandra Mayerhold
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
#
*/

var Opentip, firstAdapter, i, position, vendors, _i, _len, _ref,
  __slice = [].slice,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  __hasProp = {}.hasOwnProperty;

Opentip = (function() {

  Opentip.prototype.STICKS_OUT_TOP = 1;

  Opentip.prototype.STICKS_OUT_BOTTOM = 2;

  Opentip.prototype.STICKS_OUT_LEFT = 1;

  Opentip.prototype.STICKS_OUT_RIGHT = 2;

  Opentip.prototype["class"] = {
    container: "opentip-container",
    opentip: "opentip",
    content: "content",
    loadingIndicator: "loading-indicator",
    close: "close",
    goingToHide: "going-to-hide",
    hidden: "hidden",
    hiding: "hiding",
    goingToShow: "going-to-show",
    showing: "showing",
    visible: "visible",
    loading: "loading",
    ajaxError: "ajax-error",
    fixed: "fixed",
    showEffectPrefix: "show-effect-",
    hideEffectPrefix: "hide-effect-",
    stylePrefix: "style-"
  };

  function Opentip(element, content, title, options) {
    var elementsOpentips, hideTrigger, optionSources, prop, styleName, _i, _len, _ref, _ref1, _tmpStyle,
      _this = this;
    this.id = ++Opentip.lastId;
    this.debug("Creating Opentip.");
    Opentip.tips.push(this);
    this.adapter = Opentip.adapter;
    elementsOpentips = this.adapter.data(element, "opentips") || [];
    elementsOpentips.push(this);
    this.adapter.data(element, "opentips", elementsOpentips);
    this.triggerElement = this.adapter.wrap(element);
    if (this.triggerElement.length > 1) {
      throw new Error("You can't call Opentip on multiple elements.");
    }
    if (this.triggerElement.length < 1) {
      throw new Error("Invalid element.");
    }
    this.loaded = false;
    this.loading = false;
    this.visible = false;
    this.waitingToShow = false;
    this.waitingToHide = false;
    this.currentPosition = {
      left: 0,
      top: 0
    };
    this.dimensions = {
      width: 100,
      height: 50
    };
    this.content = "";
    this.redraw = true;
    this.currentObservers = {
      showing: false,
      visible: false,
      hiding: false,
      hidden: false
    };
    options = this.adapter.clone(options);
    if (typeof content === "object") {
      options = content;
      content = title = void 0;
    } else if (typeof title === "object") {
      options = title;
      title = void 0;
    }
    if (title != null) {
      options.title = title;
    }
    if (content != null) {
      this.setContent(content);
    }
    if (options["extends"] == null) {
      if (options.style != null) {
        options["extends"] = options.style;
      } else {
        options["extends"] = Opentip.defaultStyle;
      }
    }
    optionSources = [options];
    _tmpStyle = options;
    while (_tmpStyle["extends"]) {
      styleName = _tmpStyle["extends"];
      _tmpStyle = Opentip.styles[styleName];
      if (_tmpStyle == null) {
        throw new Error("Invalid style: " + styleName);
      }
      optionSources.unshift(_tmpStyle);
      if (!((_tmpStyle["extends"] != null) || styleName === "standard")) {
        _tmpStyle["extends"] = "standard";
      }
    }
    options = (_ref = this.adapter).extend.apply(_ref, [{}].concat(__slice.call(optionSources)));
    options.hideTriggers = (function() {
      var _i, _len, _ref1, _results;
      _ref1 = options.hideTriggers;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        hideTrigger = _ref1[_i];
        _results.push(hideTrigger);
      }
      return _results;
    })();
    if (options.hideTrigger && options.hideTriggers.length === 0) {
      options.hideTriggers.push(options.hideTrigger);
    }
    _ref1 = ["tipJoint", "targetJoint", "stem"];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      prop = _ref1[_i];
      if (options[prop] && typeof options[prop] === "string") {
        options[prop] = new Opentip.Joint(options[prop]);
      }
    }
    if (options.ajax && (options.ajax === true || !options.ajax)) {
      if (this.adapter.tagName(this.triggerElement) === "A") {
        options.ajax = this.adapter.attr(this.triggerElement, "href");
      } else {
        options.ajax = false;
      }
    }
    if (options.showOn === "click" && this.adapter.tagName(this.triggerElement) === "A") {
      this.adapter.observe(this.triggerElement, "click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        return e.stopped = true;
      });
    }
    if (options.target) {
      options.fixed = true;
    }
    if (options.stem === true) {
      options.stem = new Opentip.Joint(options.tipJoint);
    }
    if (options.target === true) {
      options.target = this.triggerElement;
    } else if (options.target) {
      options.target = this.adapter.wrap(options.target);
    }
    this.currentStem = options.stem;
    if (options.delay == null) {
      options.delay = options.showOn === "mouseover" ? 0.2 : 0;
    }
    if (options.targetJoint == null) {
      options.targetJoint = new Opentip.Joint(options.tipJoint).flip();
    }
    this.showTriggers = [];
    this.showTriggersWhenVisible = [];
    this.hideTriggers = [];
    if (options.showOn && options.showOn !== "creation") {
      this.showTriggers.push({
        element: this.triggerElement,
        event: options.showOn
      });
    }
    this.options = options;
    this.adapter.domReady(function() {
      return _this._init();
    });
  }

  Opentip.prototype._init = function() {
    var hideOn, hideTrigger, hideTriggerElement, i, methodToBind, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2,
      _this = this;
    this._buildContainer();
    _ref = this.options.hideTriggers;
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      hideTrigger = _ref[i];
      hideTriggerElement = null;
      hideOn = this.options.hideOn instanceof Array ? this.options.hideOn[i] : this.options.hideOn;
      if (typeof hideTrigger === "string") {
        switch (hideTrigger) {
          case "trigger":
            hideOn = hideOn || "mouseout";
            hideTriggerElement = this.triggerElement;
            break;
          case "tip":
            hideOn = hideOn || "mouseover";
            hideTriggerElement = this.container;
            break;
          case "target":
            hideOn = hideOn || "mouseover";
            hideTriggerElement = this.options.target;
            break;
          case "closeButton":
            break;
          default:
            throw new Error("Unknown hide trigger: " + hideTrigger + ".");
        }
      } else {
        hideOn = hideOn || "mouseover";
        hideTriggerElement = this.adapter.wrap(hideTrigger);
      }
      if (hideTriggerElement) {
        this.hideTriggers.push({
          element: hideTriggerElement,
          event: hideOn,
          original: hideTrigger
        });
      }
    }
    _ref1 = this.hideTriggers;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      hideTrigger = _ref1[_j];
      this.showTriggersWhenVisible.push({
        element: hideTrigger.element,
        event: "mouseover"
      });
    }
    this.bound = {};
    _ref2 = ["prepareToShow", "prepareToHide", "show", "hide", "reposition"];
    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
      methodToBind = _ref2[_k];
      this.bound[methodToBind] = (function(methodToBind) {
        return function() {
          return _this[methodToBind].apply(_this, arguments);
        };
      })(methodToBind);
    }
    this.activate();
    if (this.options.showOn === "creation") {
      return this.prepareToShow();
    }
  };

  Opentip.prototype._buildContainer = function() {
    this.container = this.adapter.create("<div id=\"opentip-" + this.id + "\" class=\"" + this["class"].container + " " + this["class"].hidden + " " + this["class"].stylePrefix + this.options.className + "\"></div>");
    this.adapter.css(this.container, {
      position: "absolute"
    });
    if (this.options.ajax) {
      this.adapter.addClass(this.container, this["class"].loading);
    }
    if (this.options.fixed) {
      this.adapter.addClass(this.container, this["class"].fixed);
    }
    if (this.options.showEffect) {
      this.adapter.addClass(this.container, "" + this["class"].showEffectPrefix + this.options.showEffect);
    }
    if (this.options.hideEffect) {
      return this.adapter.addClass(this.container, "" + this["class"].hideEffectPrefix + this.options.hideEffect);
    }
  };

  Opentip.prototype._buildElements = function() {
    var headerElement, titleElement;
    this.tooltipElement = this.adapter.create("<div class=\"" + this["class"].opentip + "\"><div class=\"header\"></div><div class=\"" + this["class"].content + "\"></div></div>");
    this.backgroundCanvas = this.adapter.wrap(document.createElement("canvas"));
    this.adapter.css(this.backgroundCanvas, {
      position: "absolute"
    });
    if (typeof G_vmlCanvasManager !== "undefined" && G_vmlCanvasManager !== null) {
      G_vmlCanvasManager.initElement(this.adapter.unwrap(this.backgroundCanvas));
    }
    headerElement = this.adapter.find(this.tooltipElement, ".header");
    if (this.options.title) {
      titleElement = this.adapter.create("<h1></h1>");
      this.adapter.update(titleElement, this.options.title, this.options.escapeTitle);
      this.adapter.append(headerElement, titleElement);
    }
    if (this.options.ajax) {
      this.adapter.append(this.tooltipElement, this.adapter.create("<div class=\"" + this["class"].loadingIndicator + "\"><span>↻</span></div>"));
    }
    if (__indexOf.call(this.options.hideTriggers, "closeButton") >= 0) {
      this.closeButtonElement = this.adapter.create("<a href=\"javascript:undefined;\" class=\"" + this["class"].close + "\"><span>Close</span></a>");
      this.adapter.append(headerElement, this.closeButtonElement);
    }
    this.adapter.append(this.container, this.backgroundCanvas);
    this.adapter.append(this.container, this.tooltipElement);
    return this.adapter.append(document.body, this.container);
  };

  Opentip.prototype.setContent = function(content) {
    this.content = content;
    if (this.visible) {
      return this._updateElementContent();
    }
  };

  Opentip.prototype._updateElementContent = function() {
    var contentDiv;
    contentDiv = this.adapter.find(this.container, ".content");
    if (contentDiv != null) {
      if (typeof this.content === "function") {
        this.debug("Executing content function.");
        this.content = this.content(this);
      }
      this.adapter.update(contentDiv, this.content, this.options.escapeContent);
    }
    this._storeAndLockDimensions();
    return this.reposition();
  };

  Opentip.prototype._storeAndLockDimensions = function() {
    var prevDimension;
    prevDimension = this.dimensions;
    this.adapter.css(this.container, {
      width: "auto",
      left: "0px",
      top: "0px"
    });
    this.dimensions = this.adapter.dimensions(this.container);
    this.dimensions.width += 1;
    this.adapter.css(this.container, {
      width: "" + this.dimensions.width + "px",
      top: "" + this.currentPosition.top + "px",
      left: "" + this.currentPosition.left + "px"
    });
    if (!this._dimensionsEqual(this.dimensions, prevDimension)) {
      this.redraw = true;
      return this._draw();
    }
  };

  Opentip.prototype.activate = function() {
    return this._setupObservers("-showing", "-visible", "hidden", "hiding");
  };

  Opentip.prototype.deactivate = function() {
    this.debug("Deactivating tooltip.");
    return this.hide();
  };

  Opentip.prototype._setupObservers = function() {
    var observeOrStop, removeObserver, state, states, trigger, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1, _ref2,
      _this = this;
    states = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    for (_i = 0, _len = states.length; _i < _len; _i++) {
      state = states[_i];
      removeObserver = false;
      if (state.charAt(0) === "-") {
        removeObserver = true;
        state = state.substr(1);
      }
      if (this.currentObservers[state] === !removeObserver) {
        continue;
      }
      this.currentObservers[state] = !removeObserver;
      observeOrStop = function() {
        var args, _ref, _ref1;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if (removeObserver) {
          return (_ref = _this.adapter).stopObserving.apply(_ref, args);
        } else {
          return (_ref1 = _this.adapter).observe.apply(_ref1, args);
        }
      };
      switch (state) {
        case "showing":
          _ref = this.hideTriggers;
          for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
            trigger = _ref[_j];
            observeOrStop(trigger.element, trigger.event, this.bound.prepareToHide);
          }
          observeOrStop((document.onresize != null ? document : window), "resize", this.bound.reposition);
          observeOrStop(window, "scroll", this.bound.reposition);
          break;
        case "visible":
          _ref1 = this.showTriggersWhenVisible;
          for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
            trigger = _ref1[_k];
            observeOrStop(trigger.element, trigger.event, this.bound.prepareToShow);
          }
          break;
        case "hiding":
          _ref2 = this.showTriggers;
          for (_l = 0, _len3 = _ref2.length; _l < _len3; _l++) {
            trigger = _ref2[_l];
            observeOrStop(trigger.element, trigger.event, this.bound.prepareToShow);
          }
          break;
        case "hidden":
          break;
        default:
          throw new Error("Unknown state: " + state);
      }
    }
    return null;
  };

  Opentip.prototype.prepareToShow = function() {
    this._abortHiding();
    this._abortShowing();
    if (this.visible) {
      return;
    }
    this.debug("Showing in " + this.options.delay + "s.");
    if (this.options.group) {
      Opentip._abortShowingGroup(this.options.group, this);
    }
    this.preparingToShow = true;
    this._setupObservers("-hidden", "-hiding", "showing");
    this._followMousePosition();
    this.reposition();
    return this._showTimeoutId = this.setTimeout(this.bound.show, this.options.delay || 0);
  };

  Opentip.prototype.show = function() {
    var _this = this;
    this._abortHiding();
    this._clearTimeouts();
    if (this.visible) {
      return;
    }
    if (!this._triggerElementExists()) {
      return this.deactivate();
    }
    this.debug("Showing now.");
    if (this.options.group) {
      Opentip._hideGroup(this.options.group, this);
    }
    this.visible = true;
    this.preparingToShow = false;
    if (this.tooltipElement == null) {
      this._buildElements();
    }
    this._updateElementContent();
    if (this.options.ajax && (!this.loaded || !this.options.ajaxCache)) {
      this._loadAjax();
    }
    this._searchAndActivateCloseButtons();
    this._startEnsureTriggerElement();
    this.adapter.css(this.container, {
      zIndex: Opentip.lastZIndex++
    });
    this._setupObservers("-hidden", "-hiding", "-showing", "-visible", "showing", "visible");
    this.reposition();
    this.adapter.removeClass(this.container, this["class"].hiding);
    this.adapter.removeClass(this.container, this["class"].hidden);
    this.adapter.addClass(this.container, this["class"].goingToShow);
    this.setCss3Style(this.container, {
      transitionDuration: "0s"
    });
    this.defer(function() {
      var delay;
      _this.adapter.removeClass(_this.container, _this["class"].goingToShow);
      _this.adapter.addClass(_this.container, _this["class"].showing);
      delay = 0;
      if (_this.options.showEffect && _this.options.showEffectDuration) {
        delay = _this.options.showEffectDuration;
      }
      _this.setCss3Style(_this.container, {
        transitionDuration: "" + delay + "s"
      });
      _this._visibilityStateTimeoutId = _this.setTimeout(function() {
        _this.adapter.removeClass(_this.container, _this["class"].showing);
        return _this.adapter.addClass(_this.container, _this["class"].visible);
      }, delay);
      return _this._activateFirstInput();
    });
    return this._draw();
  };

  Opentip.prototype._abortShowing = function() {
    if (this.preparingToShow) {
      this.debug("Aborting showing.");
      this._clearTimeouts();
      this._stopFollowingMousePosition();
      this.preparingToShow = false;
      return this._setupObservers("-showing", "-visible", "hiding", "hidden");
    }
  };

  Opentip.prototype.prepareToHide = function() {
    this._abortShowing();
    this._abortHiding();
    if (!this.visible) {
      return;
    }
    this.debug("Hiding in " + this.options.hideDelay + "s");
    this.preparingToHide = true;
    this._setupObservers("-showing", "visible", "-hidden", "hiding");
    return this._hideTimeoutId = this.setTimeout(this.bound.hide, this.options.hideDelay);
  };

  Opentip.prototype.hide = function() {
    var _this = this;
    this._abortShowing();
    this._clearTimeouts();
    if (!this.visible) {
      return;
    }
    this.debug("Hiding!");
    this.visible = false;
    this.preparingToHide = false;
    this._stopEnsureTriggerElement();
    this._setupObservers("-showing", "-visible", "-hiding", "-hidden", "hiding", "hidden");
    if (!this.options.fixed) {
      this._stopFollowingMousePosition();
    }
    this.adapter.removeClass(this.container, this["class"].visible);
    this.adapter.removeClass(this.container, this["class"].showing);
    this.adapter.addClass(this.container, this["class"].goingToHide);
    this.setCss3Style(this.container, {
      transitionDuration: "0s"
    });
    return this.defer(function() {
      var hideDelay;
      _this.adapter.removeClass(_this.container, _this["class"].goingToHide);
      _this.adapter.addClass(_this.container, _this["class"].hiding);
      hideDelay = 0;
      if (_this.options.hideEffect && _this.options.hideEffectDuration) {
        hideDelay = _this.options.hideEffectDuration;
      }
      _this.setCss3Style(_this.container, {
        transitionDuration: "" + hideDelay + "s"
      });
      return _this._visibilityStateTimeoutId = _this.setTimeout(function() {
        _this.adapter.removeClass(_this.container, _this["class"].hiding);
        _this.adapter.addClass(_this.container, _this["class"].hidden);
        return _this.setCss3Style(_this.container, {
          transitionDuration: "0s"
        });
      }, hideDelay);
    });
  };

  Opentip.prototype._abortHiding = function() {
    if (this.preparingToHide) {
      this.debug("Aborting hiding.");
      this._clearTimeouts();
      this.preparingToHide = false;
      return this._setupObservers("-hiding", "showing", "visible");
    }
  };

  Opentip.prototype.reposition = function(e) {
    var position, stem, _ref,
      _this = this;
    if (e == null) {
      e = this.lastEvent;
    }
    position = this.getPosition(e);
    if (position == null) {
      return;
    }
    stem = this.options.stem;
    if (this.options.containInViewport) {
      _ref = this._ensureViewportContainment(e, position), position = _ref.position, stem = _ref.stem;
    }
    if (this._positionsEqual(position, this.currentPosition)) {
      return;
    }
    if (!(!this.options.stem || stem.eql(this.currentStem))) {
      this.redraw = true;
    }
    this.currentPosition = position;
    this.currentStem = stem;
    this._draw();
    this.adapter.css(this.container, {
      left: "" + position.left + "px",
      top: "" + position.top + "px"
    });
    return this.defer(function() {
      var rawContainer, redrawFix;
      rawContainer = _this.adapter.unwrap(_this.container);
      rawContainer.style.visibility = "hidden";
      redrawFix = rawContainer.offsetHeight;
      return rawContainer.style.visibility = "visible";
    });
  };

  Opentip.prototype.getPosition = function(e, tipJoint, targetJoint, stem) {
    var additionalHorizontal, additionalVertical, mousePosition, offsetDistance, position, stemLength, targetDimensions, targetPosition, unwrappedTarget, _ref;
    if (tipJoint == null) {
      tipJoint = this.options.tipJoint;
    }
    if (targetJoint == null) {
      targetJoint = this.options.targetJoint;
    }
    position = {};
    if (this.options.target) {
      targetPosition = this.adapter.offset(this.options.target);
      targetDimensions = this.adapter.dimensions(this.options.target);
      position = targetPosition;
      if (targetJoint.right) {
        unwrappedTarget = this.adapter.unwrap(this.options.target);
        if (unwrappedTarget.getBoundingClientRect != null) {
          position.left = unwrappedTarget.getBoundingClientRect().right + ((_ref = window.pageXOffset) != null ? _ref : document.body.scrollLeft);
        } else {
          position.left += targetDimensions.width;
        }
      } else if (targetJoint.center) {
        position.left += Math.round(targetDimensions.width / 2);
      }
      if (targetJoint.bottom) {
        position.top += targetDimensions.height;
      } else if (targetJoint.middle) {
        position.top += Math.round(targetDimensions.height / 2);
      }
      if (this.options.borderWidth) {
        if (this.options.tipJoint.left) {
          position.left += this.options.borderWidth;
        }
        if (this.options.tipJoint.right) {
          position.left -= this.options.borderWidth;
        }
        if (this.options.tipJoint.top) {
          position.top += this.options.borderWidth;
        } else if (this.options.tipJoint.bottom) {
          position.top -= this.options.borderWidth;
        }
      }
    } else {
      if (e != null) {
        this.lastEvent = e;
      }
      mousePosition = this.adapter.mousePosition(e);
      if (mousePosition == null) {
        return;
      }
      position = {
        top: mousePosition.y,
        left: mousePosition.x
      };
    }
    if (this.options.autoOffset) {
      stemLength = this.options.stem ? this.options.stemLength : 0;
      offsetDistance = stemLength && this.options.fixed ? 2 : 10;
      additionalHorizontal = tipJoint.middle && !this.options.fixed ? 15 : 0;
      additionalVertical = tipJoint.center && !this.options.fixed ? 15 : 0;
      if (tipJoint.right) {
        position.left -= offsetDistance + additionalHorizontal;
      } else if (tipJoint.left) {
        position.left += offsetDistance + additionalHorizontal;
      }
      if (tipJoint.bottom) {
        position.top -= offsetDistance + additionalVertical;
      } else if (tipJoint.top) {
        position.top += offsetDistance + additionalVertical;
      }
      if (stemLength) {
        if (stem == null) {
          stem = this.options.stem;
        }
        if (stem.right) {
          position.left -= stemLength;
        } else if (stem.left) {
          position.left += stemLength;
        }
        if (stem.bottom) {
          position.top -= stemLength;
        } else if (stem.top) {
          position.top += stemLength;
        }
      }
    }
    position.left += this.options.offset[0];
    position.top += this.options.offset[1];
    if (tipJoint.right) {
      position.left -= this.dimensions.width;
    } else if (tipJoint.center) {
      position.left -= Math.round(this.dimensions.width / 2);
    }
    if (tipJoint.bottom) {
      position.top -= this.dimensions.height;
    } else if (tipJoint.middle) {
      position.top -= Math.round(this.dimensions.height / 2);
    }
    return position;
  };

  Opentip.prototype._ensureViewportContainment = function(e, position) {
    var needsRepositioning, newSticksOut, originals, revertedX, revertedY, scrollOffset, stem, sticksOut, targetJoint, tipJoint, viewportDimensions, viewportPosition;
    stem = this.options.stem;
    originals = {
      position: position,
      stem: stem
    };
    if (!(this.visible && position)) {
      return originals;
    }
    sticksOut = this._sticksOut(position);
    if (!(sticksOut[0] || sticksOut[1])) {
      return originals;
    }
    tipJoint = new Opentip.Joint(this.options.tipJoint);
    if (this.options.targetJoint) {
      targetJoint = new Opentip.Joint(this.options.targetJoint);
    }
    scrollOffset = this.adapter.scrollOffset();
    viewportDimensions = this.adapter.viewportDimensions();
    viewportPosition = [position.left - scrollOffset[0], position.top - scrollOffset[1]];
    needsRepositioning = false;
    if (viewportDimensions.width >= this.dimensions.width) {
      if (sticksOut[0]) {
        needsRepositioning = true;
        switch (sticksOut[0]) {
          case this.STICKS_OUT_LEFT:
            tipJoint.setHorizontal("left");
            if (this.options.targetJoint) {
              targetJoint.setHorizontal("right");
            }
            break;
          case this.STICKS_OUT_RIGHT:
            tipJoint.setHorizontal("right");
            if (this.options.targetJoint) {
              targetJoint.setHorizontal("left");
            }
        }
      }
    }
    if (viewportDimensions.height >= this.dimensions.height) {
      if (sticksOut[1]) {
        needsRepositioning = true;
        switch (sticksOut[1]) {
          case this.STICKS_OUT_TOP:
            tipJoint.setVertical("top");
            if (this.options.targetJoint) {
              targetJoint.setVertical("bottom");
            }
            break;
          case this.STICKS_OUT_BOTTOM:
            tipJoint.setVertical("bottom");
            if (this.options.targetJoint) {
              targetJoint.setVertical("top");
            }
        }
      }
    }
    if (!needsRepositioning) {
      return originals;
    }
    if (this.options.stem) {
      stem = tipJoint;
    }
    position = this.getPosition(e, tipJoint, targetJoint, stem);
    newSticksOut = this._sticksOut(position);
    revertedX = false;
    revertedY = false;
    if (newSticksOut[0] && (newSticksOut[0] !== sticksOut[0])) {
      revertedX = true;
      tipJoint.setHorizontal(this.options.tipJoint.horizontal);
      if (this.options.targetJoint) {
        targetJoint.setHorizontal(this.options.targetJoint.horizontal);
      }
    }
    if (newSticksOut[1] && (newSticksOut[1] !== sticksOut[1])) {
      revertedY = true;
      tipJoint.setVertical(this.options.tipJoint.vertical);
      if (this.options.targetJoint) {
        targetJoint.setVertical(this.options.targetJoint.vertical);
      }
    }
    if (revertedX && revertedY) {
      return originals;
    }
    if (revertedX || revertedY) {
      if (this.options.stem) {
        stem = tipJoint;
      }
      position = this.getPosition(e, tipJoint, targetJoint, stem);
    }
    return {
      position: position,
      stem: stem
    };
  };

  Opentip.prototype._sticksOut = function(position) {
    var positionOffset, scrollOffset, sticksOut, viewportDimensions;
    scrollOffset = this.adapter.scrollOffset();
    viewportDimensions = this.adapter.viewportDimensions();
    positionOffset = [position.left - scrollOffset[0], position.top - scrollOffset[1]];
    sticksOut = [false, false];
    if (positionOffset[0] < 0) {
      sticksOut[0] = this.STICKS_OUT_LEFT;
    } else if (positionOffset[0] + this.dimensions.width > viewportDimensions.width) {
      sticksOut[0] = this.STICKS_OUT_RIGHT;
    }
    if (positionOffset[1] < 0) {
      sticksOut[1] = this.STICKS_OUT_TOP;
    } else if (positionOffset[1] + this.dimensions.height > viewportDimensions.height) {
      sticksOut[1] = this.STICKS_OUT_BOTTOM;
    }
    return sticksOut;
  };

  Opentip.prototype._draw = function() {
    var backgroundCanvas, bulge, canvasDimensions, canvasPosition, closeButton, closeButtonInner, closeButtonOuter, ctx, drawCorner, drawLine, hb, position, stemBase, stemLength, _i, _len, _ref, _ref1, _ref2,
      _this = this;
    if (!(this.backgroundCanvas && this.redraw)) {
      return;
    }
    this.debug("Drawing background.");
    this.redraw = false;
    if (this.currentStem) {
      _ref = ["top", "right", "bottom", "left"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        position = _ref[_i];
        this.adapter.removeClass(this.container, "stem-" + position);
      }
      this.adapter.addClass(this.container, "stem-" + this.currentStem.horizontal);
      this.adapter.addClass(this.container, "stem-" + this.currentStem.vertical);
    }
    closeButtonInner = [0, 0];
    closeButtonOuter = [0, 0];
    if (__indexOf.call(this.options.hideTriggers, "closeButton") >= 0) {
      closeButton = new Opentip.Joint(((_ref1 = this.currentStem) != null ? _ref1.toString() : void 0) === "top right" ? "top left" : "top right");
      closeButtonInner = [this.options.closeButtonRadius + this.options.closeButtonOffset[0], this.options.closeButtonRadius + this.options.closeButtonOffset[1]];
      closeButtonOuter = [this.options.closeButtonRadius - this.options.closeButtonOffset[0], this.options.closeButtonRadius - this.options.closeButtonOffset[1]];
    }
    canvasDimensions = this.adapter.clone(this.dimensions);
    canvasPosition = [0, 0];
    if (this.options.borderWidth) {
      canvasDimensions.width += this.options.borderWidth * 2;
      canvasDimensions.height += this.options.borderWidth * 2;
      canvasPosition[0] -= this.options.borderWidth;
      canvasPosition[1] -= this.options.borderWidth;
    }
    if (this.options.shadow) {
      canvasDimensions.width += this.options.shadowBlur * 2;
      canvasDimensions.width += Math.max(0, this.options.shadowOffset[0] - this.options.shadowBlur * 2);
      canvasDimensions.height += this.options.shadowBlur * 2;
      canvasDimensions.height += Math.max(0, this.options.shadowOffset[1] - this.options.shadowBlur * 2);
      canvasPosition[0] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[0]);
      canvasPosition[1] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[1]);
    }
    bulge = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    if (this.currentStem) {
      if (this.currentStem.left) {
        bulge.left = this.options.stemLength;
      } else if (this.currentStem.right) {
        bulge.right = this.options.stemLength;
      }
      if (this.currentStem.top) {
        bulge.top = this.options.stemLength;
      } else if (this.currentStem.bottom) {
        bulge.bottom = this.options.stemLength;
      }
    }
    if (closeButton) {
      if (closeButton.left) {
        bulge.left = Math.max(bulge.left, closeButtonOuter[0]);
      } else if (closeButton.right) {
        bulge.right = Math.max(bulge.right, closeButtonOuter[0]);
      }
      if (closeButton.top) {
        bulge.top = Math.max(bulge.top, closeButtonOuter[1]);
      } else if (closeButton.bottom) {
        bulge.bottom = Math.max(bulge.bottom, closeButtonOuter[1]);
      }
    }
    canvasDimensions.width += bulge.left + bulge.right;
    canvasDimensions.height += bulge.top + bulge.bottom;
    canvasPosition[0] -= bulge.left;
    canvasPosition[1] -= bulge.top;
    if (this.currentStem && this.options.borderWidth) {
      _ref2 = this._getPathStemMeasures(this.options.stemBase, this.options.stemLength, this.options.borderWidth), stemLength = _ref2.stemLength, stemBase = _ref2.stemBase;
    }
    backgroundCanvas = this.adapter.unwrap(this.backgroundCanvas);
    backgroundCanvas.width = canvasDimensions.width;
    backgroundCanvas.height = canvasDimensions.height;
    this.adapter.css(this.backgroundCanvas, {
      width: "" + backgroundCanvas.width + "px",
      height: "" + backgroundCanvas.height + "px",
      left: "" + canvasPosition[0] + "px",
      top: "" + canvasPosition[1] + "px"
    });
    ctx = backgroundCanvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
    ctx.beginPath();
    ctx.fillStyle = this._getColor(ctx, this.dimensions, this.options.background, this.options.backgroundGradientHorizontal);
    ctx.lineJoin = "miter";
    ctx.miterLimit = 500;
    hb = this.options.borderWidth / 2;
    if (this.options.borderWidth) {
      ctx.strokeStyle = this.options.borderColor;
      ctx.lineWidth = this.options.borderWidth;
    } else {
      stemLength = this.options.stemLength;
      stemBase = this.options.stemBase;
    }
    if (stemBase == null) {
      stemBase = 0;
    }
    drawLine = function(length, stem, first) {
      if (first) {
        ctx.moveTo(Math.max(stemBase, _this.options.borderRadius, closeButtonInner[0]) + 1 - hb, -hb);
      }
      if (stem) {
        ctx.lineTo(length / 2 - stemBase / 2, -hb);
        ctx.lineTo(length / 2, -stemLength - hb);
        return ctx.lineTo(length / 2 + stemBase / 2, -hb);
      }
    };
    drawCorner = function(stem, closeButton, i) {
      var angle1, angle2, innerWidth, offset;
      if (stem) {
        ctx.lineTo(-stemBase + hb, 0 - hb);
        ctx.lineTo(stemLength + hb, -stemLength - hb);
        return ctx.lineTo(hb, stemBase - hb);
      } else if (closeButton) {
        offset = _this.options.closeButtonOffset;
        innerWidth = closeButtonInner[0];
        if (i % 2 !== 0) {
          offset = [offset[1], offset[0]];
          innerWidth = closeButtonInner[1];
        }
        angle1 = Math.acos(offset[1] / _this.options.closeButtonRadius);
        angle2 = Math.acos(offset[0] / _this.options.closeButtonRadius);
        ctx.lineTo(-innerWidth + hb, -hb);
        return ctx.arc(hb - offset[0], -hb + offset[1], _this.options.closeButtonRadius, -(Math.PI / 2 + angle1), angle2, false);
      } else {
        ctx.lineTo(-_this.options.borderRadius + hb, -hb);
        return ctx.quadraticCurveTo(hb, -hb, hb, _this.options.borderRadius - hb);
      }
    };
    ctx.translate(-canvasPosition[0], -canvasPosition[1]);
    ctx.save();
    (function() {
      var cornerStem, i, lineLength, lineStem, positionIdx, positionX, positionY, rotation, _j, _ref3, _results;
      _results = [];
      for (i = _j = 0, _ref3 = Opentip.positions.length / 2; 0 <= _ref3 ? _j < _ref3 : _j > _ref3; i = 0 <= _ref3 ? ++_j : --_j) {
        positionIdx = i * 2;
        positionX = i === 0 || i === 3 ? 0 : _this.dimensions.width;
        positionY = i < 2 ? 0 : _this.dimensions.height;
        rotation = (Math.PI / 2) * i;
        lineLength = i % 2 === 0 ? _this.dimensions.width : _this.dimensions.height;
        lineStem = new Opentip.Joint(Opentip.positions[positionIdx]);
        cornerStem = new Opentip.Joint(Opentip.positions[positionIdx + 1]);
        ctx.save();
        ctx.translate(positionX, positionY);
        ctx.rotate(rotation);
        drawLine(lineLength, lineStem.eql(_this.currentStem), i === 0);
        ctx.translate(lineLength, 0);
        drawCorner(cornerStem.eql(_this.currentStem), cornerStem.eql(closeButton), i);
        _results.push(ctx.restore());
      }
      return _results;
    })();
    ctx.closePath();
    ctx.save();
    if (this.options.shadow) {
      ctx.shadowColor = this.options.shadowColor;
      ctx.shadowBlur = this.options.shadowBlur;
      ctx.shadowOffsetX = this.options.shadowOffset[0];
      ctx.shadowOffsetY = this.options.shadowOffset[1];
    }
    ctx.fill();
    ctx.restore();
    if (this.options.borderWidth) {
      ctx.stroke();
    }
    ctx.restore();
    if (closeButton) {
      return (function() {
        var crossCenter, crossHeight, crossWidth, hcs, linkCenter;
        crossWidth = crossHeight = _this.options.closeButtonRadius * 2;
        if (closeButton.toString() === "top right") {
          linkCenter = [_this.dimensions.width - _this.options.closeButtonOffset[0], _this.options.closeButtonOffset[1]];
          crossCenter = [linkCenter[0] + hb, linkCenter[1] - hb];
        } else {
          linkCenter = [_this.options.closeButtonOffset[0], _this.options.closeButtonOffset[1]];
          crossCenter = [linkCenter[0] - hb, linkCenter[1] - hb];
        }
        ctx.translate(crossCenter[0], crossCenter[1]);
        hcs = _this.options.closeButtonCrossSize / 2;
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = _this.options.closeButtonCrossColor;
        ctx.lineWidth = _this.options.closeButtonCrossLineWidth;
        ctx.lineCap = "round";
        ctx.moveTo(-hcs, -hcs);
        ctx.lineTo(hcs, hcs);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(hcs, -hcs);
        ctx.lineTo(-hcs, hcs);
        ctx.stroke();
        ctx.restore();
        return _this.adapter.css(_this.closeButtonElement, {
          left: "" + (linkCenter[0] - hcs - _this.options.closeButtonLinkOverscan) + "px",
          top: "" + (linkCenter[1] - hcs - _this.options.closeButtonLinkOverscan) + "px",
          width: "" + (_this.options.closeButtonCrossSize + _this.options.closeButtonLinkOverscan * 2) + "px",
          height: "" + (_this.options.closeButtonCrossSize + _this.options.closeButtonLinkOverscan * 2) + "px"
        });
      })();
    }
  };

  Opentip.prototype._getPathStemMeasures = function(outerStemBase, outerStemLength, borderWidth) {
    var angle, distanceBetweenTips, halfAngle, hb, rhombusSide, stemBase, stemLength;
    hb = borderWidth / 2;
    halfAngle = Math.atan((outerStemBase / 2) / outerStemLength);
    angle = halfAngle * 2;
    rhombusSide = hb / Math.sin(angle);
    distanceBetweenTips = 2 * rhombusSide * Math.cos(halfAngle);
    stemLength = hb + outerStemLength - distanceBetweenTips;
    if (stemLength < 0) {
      throw new Error("Sorry but your stemLength / stemBase ratio is strange.");
    }
    stemBase = (Math.tan(halfAngle) * stemLength) * 2;
    return {
      stemLength: stemLength,
      stemBase: stemBase
    };
  };

  Opentip.prototype._getColor = function(ctx, dimensions, color, horizontal) {
    var colorStop, gradient, i, _i, _len;
    if (horizontal == null) {
      horizontal = false;
    }
    if (typeof color === "string") {
      return color;
    }
    if (horizontal) {
      gradient = ctx.createLinearGradient(0, 0, dimensions.width, 0);
    } else {
      gradient = ctx.createLinearGradient(0, 0, 0, dimensions.height);
    }
    for (i = _i = 0, _len = color.length; _i < _len; i = ++_i) {
      colorStop = color[i];
      gradient.addColorStop(colorStop[0], colorStop[1]);
    }
    return gradient;
  };

  Opentip.prototype._searchAndActivateCloseButtons = function() {
    var element, _i, _len, _ref;
    _ref = this.adapter.findAll(this.container, "." + this["class"].close);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      element = _ref[_i];
      this.hideTriggers.push({
        element: this.adapter.wrap(element),
        event: "click"
      });
    }
    if (this.currentObservers.showing) {
      this._setupObservers("-showing", "showing");
    }
    if (this.currentObservers.visible) {
      return this._setupObservers("-visible", "visible");
    }
  };

  Opentip.prototype._activateFirstInput = function() {
    var input;
    input = this.adapter.unwrap(this.adapter.find(this.container, "input, textarea"));
    return input != null ? typeof input.focus === "function" ? input.focus() : void 0 : void 0;
  };

  Opentip.prototype._followMousePosition = function() {
    if (!this.options.fixed) {
      return this.adapter.observe(document.body, "mousemove", this.bound.reposition);
    }
  };

  Opentip.prototype._stopFollowingMousePosition = function() {
    if (!this.options.fixed) {
      return this.adapter.stopObserving(document.body, "mousemove", this.bound.reposition);
    }
  };

  Opentip.prototype._clearShowTimeout = function() {
    return clearTimeout(this._showTimeoutId);
  };

  Opentip.prototype._clearHideTimeout = function() {
    return clearTimeout(this._hideTimeoutId);
  };

  Opentip.prototype._clearTimeouts = function() {
    clearTimeout(this._visibilityStateTimeoutId);
    this._clearShowTimeout();
    return this._clearHideTimeout();
  };

  Opentip.prototype._triggerElementExists = function() {
    var el;
    el = this.adapter.unwrap(this.triggerElement);
    while (el.parentNode) {
      if (el.parentNode.tagName === "BODY") {
        return true;
      }
      el = el.parentNode;
    }
    return false;
  };

  Opentip.prototype._loadAjax = function() {
    var _this = this;
    if (this.loading) {
      return;
    }
    this.loaded = false;
    this.loading = true;
    this.adapter.addClass(this.container, this["class"].loading);
    this.setContent("");
    this.debug("Loading content from " + this.options.ajax);
    return this.adapter.ajax({
      url: this.options.ajax,
      method: this.options.ajaxMethod,
      onSuccess: function(responseText) {
        _this.debug("Loading successful.");
        _this.adapter.removeClass(_this.container, _this["class"].loading);
        return _this.setContent(responseText);
      },
      onError: function(error) {
        var message;
        message = "There was a problem downloading the content.";
        _this.debug(message, error);
        _this.setContent(message);
        return _this.adapter.addClass(_this.container, _this["class"].ajaxError);
      },
      onComplete: function() {
        _this.adapter.removeClass(_this.container, _this["class"].loading);
        _this.loading = false;
        _this.loaded = true;
        _this._searchAndActivateCloseButtons();
        _this._activateFirstInput();
        return _this.reposition();
      }
    });
  };

  Opentip.prototype._ensureTriggerElement = function() {
    if (!this._triggerElementExists()) {
      this.deactivate();
      return this._stopEnsureTriggerElement();
    }
  };

  Opentip.prototype._ensureTriggerElementInterval = 1000;

  Opentip.prototype._startEnsureTriggerElement = function() {
    var _this = this;
    return this._ensureTriggerElementTimeoutId = setInterval((function() {
      return _this._ensureTriggerElement();
    }), this._ensureTriggerElementInterval);
  };

  Opentip.prototype._stopEnsureTriggerElement = function() {
    return clearInterval(this._ensureTriggerElementTimeoutId);
  };

  return Opentip;

})();

vendors = ["khtml", "ms", "o", "moz", "webkit"];

Opentip.prototype.setCss3Style = function(element, styles) {
  var prop, value, vendor, vendorProp, _results;
  element = this.adapter.unwrap(element);
  _results = [];
  for (prop in styles) {
    if (!__hasProp.call(styles, prop)) continue;
    value = styles[prop];
    if (element.style[prop] != null) {
      _results.push(element.style[prop] = value);
    } else {
      _results.push((function() {
        var _i, _len, _results1;
        _results1 = [];
        for (_i = 0, _len = vendors.length; _i < _len; _i++) {
          vendor = vendors[_i];
          vendorProp = "" + (this.ucfirst(vendor)) + (this.ucfirst(prop));
          if (element.style[vendorProp] != null) {
            _results1.push(element.style[vendorProp] = value);
          } else {
            _results1.push(void 0);
          }
        }
        return _results1;
      }).call(this));
    }
  }
  return _results;
};

Opentip.prototype.defer = function(func) {
  return setTimeout(func, 0);
};

Opentip.prototype.setTimeout = function(func, seconds) {
  return setTimeout(func, seconds ? seconds * 1000 : 0);
};

Opentip.prototype.ucfirst = function(string) {
  if (string == null) {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

Opentip.prototype.dasherize = function(string) {
  return string.replace(/([A-Z])/g, function(_, character) {
    return "-" + (character.toLowerCase());
  });
};

Opentip.Joint = (function() {

  function Joint(pointerString) {
    if (pointerString == null) {
      return;
    }
    if (pointerString instanceof Opentip.Joint) {
      pointerString = pointerString.toString();
    }
    this.set(pointerString);
    this;

  }

  Joint.prototype.set = function(string) {
    string = string.toLowerCase();
    this.setHorizontal(string);
    this.setVertical(string);
    return this;
  };

  Joint.prototype.setHorizontal = function(string) {
    var i, valid, _i, _j, _len, _len1, _results;
    valid = ["left", "center", "right"];
    for (_i = 0, _len = valid.length; _i < _len; _i++) {
      i = valid[_i];
      if (~string.indexOf(i)) {
        this.horizontal = i.toLowerCase();
      }
    }
    if (this.horizontal == null) {
      this.horizontal = "center";
    }
    _results = [];
    for (_j = 0, _len1 = valid.length; _j < _len1; _j++) {
      i = valid[_j];
      _results.push(this[i] = this.horizontal === i ? i : void 0);
    }
    return _results;
  };

  Joint.prototype.setVertical = function(string) {
    var i, valid, _i, _j, _len, _len1, _results;
    valid = ["top", "middle", "bottom"];
    for (_i = 0, _len = valid.length; _i < _len; _i++) {
      i = valid[_i];
      if (~string.indexOf(i)) {
        this.vertical = i.toLowerCase();
      }
    }
    if (this.vertical == null) {
      this.vertical = "middle";
    }
    _results = [];
    for (_j = 0, _len1 = valid.length; _j < _len1; _j++) {
      i = valid[_j];
      _results.push(this[i] = this.vertical === i ? i : void 0);
    }
    return _results;
  };

  Joint.prototype.eql = function(pointer) {
    return (pointer != null) && this.horizontal === pointer.horizontal && this.vertical === pointer.vertical;
  };

  Joint.prototype.flip = function() {
    var flippedIndex, positionIdx;
    positionIdx = Opentip.position[this.toString(true)];
    flippedIndex = (positionIdx + 4) % 8;
    this.set(Opentip.positions[flippedIndex]);
    return this;
  };

  Joint.prototype.toString = function(camelized) {
    var horizontal, vertical;
    if (camelized == null) {
      camelized = false;
    }
    vertical = this.vertical === "middle" ? "" : this.vertical;
    horizontal = this.horizontal === "center" ? "" : this.horizontal;
    if (vertical && horizontal) {
      if (camelized) {
        horizontal = Opentip.prototype.ucfirst(horizontal);
      } else {
        horizontal = " " + horizontal;
      }
    }
    return "" + vertical + horizontal;
  };

  return Joint;

})();

Opentip.prototype._positionsEqual = function(posA, posB) {
  return (posA != null) && (posB != null) && posA.left === posB.left && posA.top === posB.top;
};

Opentip.prototype._dimensionsEqual = function(dimA, dimB) {
  return (dimA != null) && (dimB != null) && dimA.width === dimB.width && dimA.height === dimB.height;
};

Opentip.prototype.debug = function() {
  var args;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  if (Opentip.debug && ((typeof console !== "undefined" && console !== null ? console.debug : void 0) != null)) {
    args.unshift("#" + this.id + " |");
    return console.debug.apply(console, args);
  }
};

Opentip.findElements = function() {
  var adapter, content, element, optionName, optionValue, options, _i, _len, _ref, _results;
  adapter = Opentip.adapter;
  _ref = adapter.findAll(document.body, "[data-ot]");
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    element = _ref[_i];
    options = {};
    content = adapter.data(element, "ot");
    if (content === "" || content === "true" || content === "yes") {
      content = adapter.attr(element, "title");
      adapter.attr(element, "title", "");
    }
    content = content || "";
    for (optionName in Opentip.styles.standard) {
      optionValue = adapter.data(element, "ot" + (Opentip.prototype.ucfirst(optionName)));
      if (optionValue != null) {
        if (optionValue === "yes" || optionValue === "true" || optionValue === "on") {
          optionValue = true;
        } else if (optionValue === "no" || optionValue === "false" || optionValue === "off") {
          optionValue = false;
        }
        options[optionName] = optionValue;
      }
    }
    _results.push(new Opentip(element, content, options));
  }
  return _results;
};

Opentip.version = "2.2.5";

Opentip.debug = false;

Opentip.lastId = 0;

Opentip.lastZIndex = 100;

Opentip.tips = [];

Opentip._abortShowingGroup = function(group, originatingOpentip) {
  var opentip, _i, _len, _ref, _results;
  _ref = Opentip.tips;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    opentip = _ref[_i];
    if (opentip !== originatingOpentip && opentip.options.group === group) {
      _results.push(opentip._abortShowing());
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

Opentip._hideGroup = function(group, originatingOpentip) {
  var opentip, _i, _len, _ref, _results;
  _ref = Opentip.tips;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    opentip = _ref[_i];
    if (opentip !== originatingOpentip && opentip.options.group === group) {
      _results.push(opentip.hide());
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

Opentip.adapters = {};

Opentip.adapter = null;

firstAdapter = true;

Opentip.addAdapter = function(adapter) {
  Opentip.adapters[adapter.name] = adapter;
  if (firstAdapter) {
    Opentip.adapter = adapter;
    adapter.domReady(Opentip.findElements);
    return firstAdapter = false;
  }
};

Opentip.positions = ["top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left", "topLeft"];

Opentip.position = {};

_ref = Opentip.positions;
for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
  position = _ref[i];
  Opentip.position[position] = i;
}

Opentip.styles = {
  standard: {
    "extends": null,
    title: void 0,
    escapeTitle: true,
    escapeContent: false,
    className: "standard",
    stem: true,
    delay: null,
    hideDelay: 0.1,
    fixed: false,
    showOn: "mouseover",
    hideTrigger: "trigger",
    hideTriggers: [],
    hideOn: null,
    offset: [0, 0],
    containInViewport: true,
    autoOffset: true,
    showEffect: "appear",
    hideEffect: "fade",
    showEffectDuration: 0.3,
    hideEffectDuration: 0.2,
    stemLength: 5,
    stemBase: 8,
    tipJoint: "top left",
    target: null,
    targetJoint: null,
    ajax: false,
    ajaxMethod: "GET",
    ajaxCache: true,
    group: null,
    style: null,
    background: "#fff18f",
    backgroundGradientHorizontal: false,
    closeButtonOffset: [5, 5],
    closeButtonRadius: 7,
    closeButtonCrossSize: 4,
    closeButtonCrossColor: "#d2c35b",
    closeButtonCrossLineWidth: 1.5,
    closeButtonLinkOverscan: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#f2e37b",
    shadow: true,
    shadowBlur: 10,
    shadowOffset: [3, 3],
    shadowColor: "rgba(0, 0, 0, 0.1)"
  },
  glass: {
    "extends": "standard",
    className: "glass",
    background: [[0, "rgba(252, 252, 252, 0.8)"], [0.5, "rgba(255, 255, 255, 0.8)"], [0.5, "rgba(250, 250, 250, 0.9)"], [1, "rgba(245, 245, 245, 0.9)"]],
    borderColor: "#eee",
    closeButtonCrossColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 15,
    closeButtonRadius: 10,
    closeButtonOffset: [8, 8]
  },
  dark: {
    "extends": "standard",
    className: "dark",
    borderRadius: 13,
    borderColor: "#444",
    closeButtonCrossColor: "rgba(240, 240, 240, 1)",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: [2, 2],
    background: [[0, "rgba(30, 30, 30, 0.7)"], [0.5, "rgba(30, 30, 30, 0.8)"], [0.5, "rgba(10, 10, 10, 0.8)"], [1, "rgba(10, 10, 10, 0.9)"]]
  },
  alert: {
    "extends": "standard",
    className: "alert",
    borderRadius: 1,
    borderColor: "#AE0D11",
    closeButtonCrossColor: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: [2, 2],
    background: [[0, "rgba(203, 15, 19, 0.7)"], [0.5, "rgba(203, 15, 19, 0.8)"], [0.5, "rgba(189, 14, 18, 0.8)"], [1, "rgba(179, 14, 17, 0.9)"]]
  }
};

Opentip.defaultStyle = "standard";

if (typeof module !== "undefined" && module !== null) {
  module.exports = Opentip;
} else {
  window.Opentip = Opentip;
}
;// Generated by CoffeeScript 1.4.0
var __slice = [].slice;

(function($) {
  var Adapter;
  $.fn.opentip = function(content, title, options) {
    return new Opentip(this, content, title, options);
  };
  Adapter = (function() {

    function Adapter() {}

    Adapter.prototype.name = "jquery";

    Adapter.prototype.domReady = function(callback) {
      return $(callback);
    };

    Adapter.prototype.create = function(html) {
      return $(html);
    };

    Adapter.prototype.wrap = function(element) {
      element = $(element);
      if (element.length > 1) {
        throw new Error("Multiple elements provided.");
      }
      return element;
    };

    Adapter.prototype.unwrap = function(element) {
      return $(element)[0];
    };

    Adapter.prototype.tagName = function(element) {
      return this.unwrap(element).tagName;
    };

    Adapter.prototype.attr = function() {
      var args, element, _ref;
      element = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return (_ref = $(element)).attr.apply(_ref, args);
    };

    Adapter.prototype.data = function() {
      var args, element, _ref;
      element = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return (_ref = $(element)).data.apply(_ref, args);
    };

    Adapter.prototype.find = function(element, selector) {
      return $(element).find(selector);
    };

    Adapter.prototype.findAll = function() {
      return this.find.apply(this, arguments);
    };

    Adapter.prototype.update = function(element, content, escape) {
      element = $(element);
      if (escape) {
        return element.text(content);
      } else {
        return element.html(content);
      }
    };

    Adapter.prototype.append = function(element, child) {
      return $(element).append(child);
    };

    Adapter.prototype.addClass = function(element, className) {
      return $(element).addClass(className);
    };

    Adapter.prototype.removeClass = function(element, className) {
      return $(element).removeClass(className);
    };

    Adapter.prototype.css = function(element, properties) {
      return $(element).css(properties);
    };

    Adapter.prototype.dimensions = function(element) {
      return {
        width: $(element).outerWidth(),
        height: $(element).outerHeight()
      };
    };

    Adapter.prototype.scrollOffset = function() {
      return [window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop];
    };

    Adapter.prototype.viewportDimensions = function() {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      };
    };

    Adapter.prototype.mousePosition = function(e) {
      if (e == null) {
        return null;
      }
      return {
        x: e.pageX,
        y: e.pageY
      };
    };

    Adapter.prototype.offset = function(element) {
      var offset;
      offset = $(element).offset();
      return {
        left: offset.left,
        top: offset.top
      };
    };

    Adapter.prototype.observe = function(element, eventName, observer) {
      return $(element).bind(eventName, observer);
    };

    Adapter.prototype.stopObserving = function(element, eventName, observer) {
      return $(element).unbind(eventName, observer);
    };

    Adapter.prototype.ajax = function(options) {
      var _ref, _ref1;
      if (options.url == null) {
        throw new Error("No url provided");
      }
      return $.ajax({
        url: options.url,
        type: (_ref = (_ref1 = options.method) != null ? _ref1.toUpperCase() : void 0) != null ? _ref : "GET"
      }).done(function(content) {
        return typeof options.onSuccess === "function" ? options.onSuccess(content) : void 0;
      }).fail(function(request) {
        return typeof options.onError === "function" ? options.onError("Server responded with status " + request.status) : void 0;
      }).always(function() {
        return typeof options.onComplete === "function" ? options.onComplete() : void 0;
      });
    };

    Adapter.prototype.clone = function(object) {
      return $.extend({}, object);
    };

    Adapter.prototype.extend = function() {
      var sources, target;
      target = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return $.extend.apply($, [target].concat(__slice.call(sources)));
    };

    return Adapter;

  })();
  return Opentip.addAdapter(new Adapter);
})(jQuery);
