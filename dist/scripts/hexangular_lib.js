/*
 *  Sugar Library vedge
 *
 *  Freely distributable and licensed under the MIT-style license.
 *  Copyright (c) 2013 Andrew Plummer
 *  http://sugarjs.com/
 *
 * ---------------------------- */
(function(){var k=true,l=null,n=false;function aa(a){return function(){return a}}var p=Object,q=Array,r=RegExp,s=Date,t=String,u=Number,v=Math,ba=p.prototype.toString,ca=typeof global!=="undefined"?global:this,da={},ea=p.defineProperty&&p.defineProperties,x="Array,Boolean,Date,Function,Number,String,RegExp".split(","),ga=fa(x[0]),ha=fa(x[1]),ia=fa(x[2]),y=fa(x[3]),A=fa(x[4]),B=fa(x[5]),C=fa(x[6]);
function fa(a){var b,c;if(/String|Number|Boolean/.test(a))b=a.toLowerCase();c=a==="Array"&&q.isArray||function(d){if(b&&typeof d===b)return k;return ba.call(d)==="[object "+a+"]"};return da[a]=c}function ja(a){if(!a.SugarMethods){ka(a,"SugarMethods",{});D(a,n,n,{extend:function(b,c,d){D(a,d!==n,c,b)},sugarRestore:function(){return la(a,arguments,function(b,c,d){ka(b,c,d.method)})},sugarRevert:function(){return la(a,arguments,function(b,c,d){if(d.qa)ka(b,c,d.Ba);else delete b[c]})}})}}
function D(a,b,c,d){var e=b?a.prototype:a;ja(a);E(d,function(f,h){var i=e[f],j=F(e,f);if(typeof c==="function")h=ma(e[f],h,c);if(c!==n||!e[f])ka(e,f,h);a.SugarMethods[f]={xa:b,method:h,Ba:i,qa:j}})}function G(a,b,c,d,e){var f={};d=B(d)?d.split(","):d;d.forEach(function(h,i){e(f,h,i)});D(a,b,c,f)}function la(a,b,c){var d=b.length===0,e=H(b),f=n;E(a.SugarMethods,function(h,i){if(d||e.indexOf(h)>-1){f=k;c(i.xa?a.prototype:a,h,i)}});return f}
function ma(a,b,c){return function(){return(a&&(c===k||!c.apply(this,arguments))?a:b).apply(this,arguments)}}function ka(a,b,c){if(ea)p.defineProperty(a,b,{value:c,configurable:k,enumerable:n,writable:k});else a[b]=c}function H(a,b){var c=[],d,e;d=0;for(e=a.length;d<e;d++){c.push(a[d]);b&&b.call(a,a[d],d)}return c}function na(a,b,c){H(q.prototype.concat.apply([],q.prototype.slice.call(a,c||0)),b)}function oa(a){if(!a||!a.call)throw new TypeError("Callback is not callable");}
function I(a){return a!==void 0}function K(a){return a===void 0}function pa(a){return a&&typeof a==="object"}function L(a){return!!a&&ba.call(a)==="[object Object]"&&"hasOwnProperty"in a}function F(a,b){return p.hasOwnProperty.call(a,b)}function E(a,b){for(var c in a)if(F(a,c))if(b.call(a,c,a[c],a)===n)break}function qa(a,b){E(b,function(c){a[c]=b[c]});return a}function ra(a){qa(this,a)}ra.prototype.constructor=p;
function sa(a,b,c,d){var e=[];a=parseInt(a);for(var f=d<0;!f&&a<=b||f&&a>=b;){e.push(a);c&&c.call(this,a);a+=d||1}return e}function N(a,b,c){c=v[c||"round"];var d=v.pow(10,v.abs(b||0));if(b<0)d=1/d;return c(a*d)/d}function O(a,b){return N(a,b,"floor")}function P(a,b,c,d){d=v.abs(a).toString(d||10);d=ta(b-d.replace(/\.\d+/,"").length,"0")+d;if(c||a<0)d=(a<0?"-":"+")+d;return d}
function ua(a){if(a>=11&&a<=13)return"th";else switch(a%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function va(){return"\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u2028\u2029\u3000\ufeff"}function ta(a,b){return q(v.max(0,I(a)?a:1)+1).join(b||"")}function wa(a,b){var c=a.toString().match(/[^/]*$/)[0];if(b)c=(c+b).split("").sort().join("").replace(/([gimy])\1+/g,"$1");return c}
function R(a){B(a)||(a=t(a));return a.replace(/([\\/'*+?|()\[\]{}.^$])/g,"\\$1")}function xa(a,b){var c=typeof a,d,e,f,h,i,j,g;if(c==="string")return a;f=ba.call(a);d=L(a);e=f==="[object Array]";if(a!=l&&d||e){b||(b=[]);if(b.length>1)for(j=b.length;j--;)if(b[j]===a)return"CYC";b.push(a);d=t(a.constructor);h=e?a:p.keys(a).sort();j=0;for(g=h.length;j<g;j++){i=e?j:h[j];d+=i+xa(a[i],b)}b.pop()}else d=1/a===-Infinity?"-0":t(a&&a.valueOf?a.valueOf():a);return c+f+d}
function ya(a){return/^\[object Date|Array|String|Number|RegExp|Boolean|Arguments\]$/.test(ba.call(a))||L(a)}function za(a,b,c){var d=[],e=a.length,f=b[b.length-1]!==n,h;H(b,function(i){if(ha(i))return n;if(f){i%=e;if(i<0)i=e+i}h=c?a.charAt(i)||"":a[i];d.push(h)});return d.length<2?d[0]:d}function Aa(a,b){G(b,k,n,a,function(c,d){c[d+(d==="equal"?"s":"")]=function(){return p[d].apply(l,[this].concat(H(arguments)))}})}ja(p);E(x,function(a,b){ja(ca[b])});
D(p,n,n,{keys:function(a){var b=[];if(!pa(a)&&!C(a)&&!y(a))throw new TypeError("Object required");E(a,function(c){b.push(c)});return b}});function Ba(a,b,c,d){var e=a.length,f=d==-1,h=f?e-1:0;c=isNaN(c)?h:parseInt(c>>0);if(c<0)c=e+c;if(!f&&c<0||f&&c>=e)c=h;for(;f&&c>=0||!f&&c<e;){if(a[c]===b)return c;c+=d}return-1}
function Ca(a,b,c,d){var e=a.length,f=0,h=I(c);oa(b);if(e==0&&!h)throw new TypeError("Reduce called on empty array with no initial value");else if(h)c=c;else{c=a[d?e-1:f];f++}for(;f<e;){h=d?e-f-1:f;if(h in a)c=b(c,a[h],h,a);f++}return c}function Da(a){if(a.length===0)throw new TypeError("First argument must be defined");}D(q,n,n,{isArray:function(a){return ga(a)}});
D(q,k,n,{every:function(a,b){var c=this.length,d=0;for(Da(arguments);d<c;){if(d in this&&!a.call(b,this[d],d,this))return n;d++}return k},some:function(a,b){var c=this.length,d=0;for(Da(arguments);d<c;){if(d in this&&a.call(b,this[d],d,this))return k;d++}return n},map:function(a,b){var c=this.length,d=0,e=Array(c);for(Da(arguments);d<c;){if(d in this)e[d]=a.call(b,this[d],d,this);d++}return e},filter:function(a,b){var c=this.length,d=0,e=[];for(Da(arguments);d<c;){d in this&&a.call(b,this[d],d,this)&&
e.push(this[d]);d++}return e},indexOf:function(a,b){if(B(this))return this.indexOf(a,b);return Ba(this,a,b,1)},lastIndexOf:function(a,b){if(B(this))return this.lastIndexOf(a,b);return Ba(this,a,b,-1)},forEach:function(a,b){var c=this.length,d=0;for(oa(a);d<c;){d in this&&a.call(b,this[d],d,this);d++}},reduce:function(a,b){return Ca(this,a,b)},reduceRight:function(a,b){return Ca(this,a,b,k)}});
D(Function,k,n,{bind:function(a){var b=this,c=H(arguments).slice(1),d;if(!y(this))throw new TypeError("Function.prototype.bind called on a non-function");d=function(){return b.apply(b.prototype&&this instanceof b?this:a,c.concat(H(arguments)))};d.prototype=this.prototype;return d}});D(s,n,n,{now:function(){return(new s).getTime()}});
(function(){var a=va().match(/^\s+$/);try{t.prototype.trim.call([1])}catch(b){a=n}D(t,k,!a,{trim:function(){return this.toString().trimLeft().trimRight()},trimLeft:function(){return this.replace(r("^["+va()+"]+"),"")},trimRight:function(){return this.replace(r("["+va()+"]+$"),"")}})})();
(function(){var a=new s(s.UTC(1999,11,31));a=a.toISOString&&a.toISOString()==="1999-12-31T00:00:00.000Z";G(s,k,!a,"toISOString,toJSON",function(b,c){b[c]=function(){return P(this.getUTCFullYear(),4)+"-"+P(this.getUTCMonth()+1,2)+"-"+P(this.getUTCDate(),2)+"T"+P(this.getUTCHours(),2)+":"+P(this.getUTCMinutes(),2)+":"+P(this.getUTCSeconds(),2)+"."+P(this.getUTCMilliseconds(),3)+"Z"}})})();
function Ea(a,b,c,d){var e=k;if(a===b)return k;else if(C(b)&&B(a))return r(b).test(a);else if(y(b))return b.apply(c,d);else if(L(b)&&pa(a)){E(b,function(f){Ea(a[f],b[f],c,[a[f],a])||(e=n)});return e}else return ya(a)&&ya(b)?xa(a)===xa(b):a===b}function S(a,b,c,d){return K(b)?a:y(b)?b.apply(c,d||[]):y(a[b])?a[b].call(a):a[b]}
function T(a,b,c,d){var e,f;if(c<0)c=a.length+c;f=isNaN(c)?0:c;for(c=d===k?a.length+f:a.length;f<c;){e=f%a.length;if(e in a){if(b.call(a,a[e],e,a)===n)break}else return Ga(a,b,f,d);f++}}function Ga(a,b,c){var d=[],e;for(e in a)e in a&&e>>>0==e&&e!=4294967295&&e>=c&&d.push(parseInt(e));d.sort().each(function(f){return b.call(a,a[f],f,a)});return a}function Ha(a,b,c,d,e){var f,h;T(a,function(i,j,g){if(Ea(i,b,g,[i,j,g])){f=i;h=j;return n}},c,d);return e?h:f}
function Ia(a,b){var c=[],d={},e;T(a,function(f,h){e=b?S(f,b,a,[f,h,a]):f;Ja(d,e)||c.push(f)});return c}function Ka(a,b,c){var d=[],e={};b.each(function(f){Ja(e,f)});a.each(function(f){var h=xa(f),i=!ya(f);if(La(e,h,f,i)!=c){var j=0;if(i)for(h=e[h];j<h.length;)if(h[j]===f)h.splice(j,1);else j+=1;else delete e[h];d.push(f)}});return d}function Ma(a,b,c){b=b||Infinity;c=c||0;var d=[];T(a,function(e){if(ga(e)&&c<b)d=d.concat(Ma(e,b,c+1));else d.push(e)});return d}
function Na(a){var b=[];H(a,function(c){b=b.concat(c)});return b}function La(a,b,c,d){var e=b in a;if(d){a[b]||(a[b]=[]);e=a[b].indexOf(c)!==-1}return e}function Ja(a,b){var c=xa(b),d=!ya(b),e=La(a,c,b,d);if(d)a[c].push(b);else a[c]=b;return e}
function Oa(a,b,c,d){var e,f=[],h=c==="max",i=c==="min",j=Array.isArray(a);E(a,function(g){var m=a[g];g=S(m,b,a,j?[m,parseInt(g),a]:[]);if(K(g))throw new TypeError("Cannot compare with undefined");if(g===e)f.push(m);else if(K(e)||h&&g>e||i&&g<e){f=[m];e=g}});j||(f=Ma(f,1));return d?f:f[0]}function Pa(a){if(q[Qa])a=a.toLowerCase();return a.replace(q[Ra],"")}function Sa(a,b){var c=a.charAt(b);return(q[Ta]||{})[c]||c}function Ua(a){var b=q[Va];return a?b.indexOf(a):l}
var Va="AlphanumericSortOrder",Ra="AlphanumericSortIgnore",Qa="AlphanumericSortIgnoreCase",Ta="AlphanumericSortEquivalents";D(q,n,n,{create:function(){var a=[],b;H(arguments,function(c){if(pa(c))try{b=q.prototype.slice.call(c,0);if(b.length>0)c=b}catch(d){}a=a.concat(c)});return a}});
D(q,k,n,{find:function(a,b,c){return Ha(this,a,b,c)},findAll:function(a,b,c){var d=[];T(this,function(e,f,h){Ea(e,a,h,[e,f,h])&&d.push(e)},b,c);return d},findIndex:function(a,b,c){a=Ha(this,a,b,c,k);return K(a)?-1:a},count:function(a){if(K(a))return this.length;return this.findAll(a).length},removeAt:function(a,b){var c,d;if(K(a))return this;if(K(b))b=a;c=0;for(d=b-a;c<=d;c++)this.splice(a,1);return this},include:function(a,b){return this.clone().add(a,b)},exclude:function(){return q.prototype.remove.apply(this.clone(),
arguments)},clone:function(){return qa([],this)},unique:function(a){return Ia(this,a)},flatten:function(a){return Ma(this,a)},union:function(){return Ia(this.concat(Na(arguments)))},intersect:function(){return Ka(this,Na(arguments),n)},subtract:function(){return Ka(this,Na(arguments),k)},at:function(){return za(this,arguments)},first:function(a){if(K(a))return this[0];if(a<0)a=0;return this.slice(0,a)},last:function(a){if(K(a))return this[this.length-1];return this.slice(this.length-a<0?0:this.length-
a)},from:function(a){return this.slice(a)},to:function(a){if(K(a))a=this.length;return this.slice(0,a)},min:function(a,b){return Oa(this,a,"min",b)},max:function(a,b){return Oa(this,a,"max",b)},least:function(a,b){return Oa(this.groupBy.apply(this,[a]),"length","min",b)},most:function(a,b){return Oa(this.groupBy.apply(this,[a]),"length","max",b)},sum:function(a){a=a?this.map(a):this;return a.length>0?a.reduce(function(b,c){return b+c}):0},average:function(a){a=a?this.map(a):this;return a.length>0?
a.sum()/a.length:0},inGroups:function(a,b){var c=arguments.length>1,d=this,e=[],f=N(this.length/a,void 0,"ceil");sa(0,a-1,function(h){h=h*f;var i=d.slice(h,h+f);c&&i.length<f&&sa(1,f-i.length,function(){i=i.add(b)});e.push(i)});return e},inGroupsOf:function(a,b){var c=[],d=this.length,e=this,f;if(d===0||a===0)return e;if(K(a))a=1;if(K(b))b=l;sa(0,N(d/a,void 0,"ceil")-1,function(h){for(f=e.slice(a*h,a*h+a);f.length<a;)f.push(b);c.push(f)});return c},isEmpty:function(){return this.compact().length==
0},sortBy:function(a,b){var c=this.clone();c.sort(function(d,e){var f,h;f=S(d,a,c,[d]);h=S(e,a,c,[e]);if(B(f)&&B(h)){f=f;h=h;var i,j,g,m,o=0,w=0;f=Pa(f);h=Pa(h);do{g=Sa(f,o);m=Sa(h,o);i=Ua(g);j=Ua(m);if(i===-1||j===-1){i=f.charCodeAt(o)||l;j=h.charCodeAt(o)||l}g=g!==f.charAt(o);m=m!==h.charAt(o);if(g!==m&&w===0)w=g-m;o+=1}while(i!=l&&j!=l&&i===j);f=i===j?w:i<j?-1:1}else f=f<h?-1:f>h?1:0;return f*(b?-1:1)});return c},randomize:function(){for(var a=this.concat(),b=a.length,c,d;b;){c=v.random()*b|0;
d=a[--b];a[b]=a[c];a[c]=d}return a},zip:function(){var a=H(arguments);return this.map(function(b,c){return[b].concat(a.map(function(d){return c in d?d[c]:l}))})},sample:function(a){var b=this.randomize();return arguments.length>0?b.slice(0,a):b[0]},each:function(a,b,c){T(this,a,b,c);return this},add:function(a,b){if(!A(u(b))||isNaN(b))b=this.length;q.prototype.splice.apply(this,[b,0].concat(a));return this},remove:function(){var a,b=this;H(arguments,function(c){for(a=0;a<b.length;)if(Ea(b[a],c,b,
[b[a],a,b]))b.splice(a,1);else a++});return b},compact:function(a){var b=[];T(this,function(c){if(ga(c))b.push(c.compact());else if(a&&c)b.push(c);else!a&&c!=l&&c.valueOf()===c.valueOf()&&b.push(c)});return b},groupBy:function(a,b){var c=this,d={},e;T(c,function(f,h){e=S(f,a,c,[f,h,c]);d[e]||(d[e]=[]);d[e].push(f)});b&&E(d,b);return d},none:function(){return!this.any.apply(this,arguments)}});D(q,k,n,{all:q.prototype.every,any:q.prototype.some,insert:q.prototype.add});
function Wa(a){if(a&&a.valueOf)a=a.valueOf();return p.keys(a)}function Xa(a,b){G(p,n,n,a,function(c,d){c[d]=function(e,f,h){var i=Wa(e);h=q.prototype[d].call(i,function(j){return b?S(e[j],f,e,[j,e[j],e]):Ea(e[j],f,e,[j,e[j],e])},h);if(ga(h))h=h.reduce(function(j,g){j[g]=e[g];return j},{});return h}});Aa(a,ra)}
D(p,n,n,{map:function(a,b){return Wa(a).reduce(function(c,d){c[d]=S(a[d],b,a,[d,a[d],a]);return c},{})},reduce:function(a){var b=Wa(a).map(function(c){return a[c]});return b.reduce.apply(b,H(arguments).slice(1))},each:function(a,b){oa(b);E(a,b);return a},size:function(a){return Wa(a).length}});var Ya="any,all,none,count,find,findAll,isEmpty".split(","),Za="sum,average,min,max,least,most".split(","),$a="map,reduce,size".split(","),ab=Ya.concat(Za).concat($a);
(function(){G(q,k,function(){var a=arguments;return a.length>0&&!y(a[0])},"map,every,all,some,any,none,filter",function(a,b){a[b]=function(c){return this[b](function(d,e){return b==="map"?S(d,c,this,[d,e,this]):Ea(d,c,this,[d,e,this])})}})})();
(function(){q[Va]="A\u00c1\u00c0\u00c2\u00c3\u0104BC\u0106\u010c\u00c7D\u010e\u00d0E\u00c9\u00c8\u011a\u00ca\u00cb\u0118FG\u011eH\u0131I\u00cd\u00cc\u0130\u00ce\u00cfJKL\u0141MN\u0143\u0147\u00d1O\u00d3\u00d2\u00d4PQR\u0158S\u015a\u0160\u015eT\u0164U\u00da\u00d9\u016e\u00db\u00dcVWXY\u00ddZ\u0179\u017b\u017d\u00de\u00c6\u0152\u00d8\u00d5\u00c5\u00c4\u00d6".split("").map(function(b){return b+b.toLowerCase()}).join("");var a={};T("A\u00c1\u00c0\u00c2\u00c3\u00c4,C\u00c7,E\u00c9\u00c8\u00ca\u00cb,I\u00cd\u00cc\u0130\u00ce\u00cf,O\u00d3\u00d2\u00d4\u00d5\u00d6,S\u00df,U\u00da\u00d9\u00db\u00dc".split(","),
function(b){var c=b.charAt(0);T(b.slice(1).split(""),function(d){a[d]=c;a[d.toLowerCase()]=c.toLowerCase()})});q[Qa]=k;q[Ta]=a})();Xa(Ya);Xa(Za,k);Aa($a,ra);
var U,bb,cb=["ampm","hour","minute","second","ampm","utc","offset_sign","offset_hours","offset_minutes","ampm"],db="({t})?\\s*(\\d{1,2}(?:[,.]\\d+)?)(?:{h}([0-5]\\d(?:[,.]\\d+)?)?{m}(?::?([0-5]\\d(?:[,.]\\d+)?){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))",eb={},fb,gb,hb,ib=[],jb=[{ba:"f{1,4}|ms|milliseconds",format:function(a){return V(a,"Milliseconds")}},{ba:"ss?|seconds",format:function(a){return V(a,"Seconds")}},{ba:"mm?|minutes",format:function(a){return V(a,"Minutes")}},
{ba:"hh?|hours|12hr",format:function(a){a=V(a,"Hours");return a===0?12:a-O(a/13)*12}},{ba:"HH?|24hr",format:function(a){return V(a,"Hours")}},{ba:"dd?|date|day",format:function(a){return V(a,"Date")}},{ba:"dow|weekday",la:k,format:function(a,b,c){a=V(a,"Day");return b.weekdays[a+(c-1)*7]}},{ba:"MM?",format:function(a){return V(a,"Month")+1}},{ba:"mon|month",la:k,format:function(a,b,c){a=V(a,"Month");return b.months[a+(c-1)*12]}},{ba:"y{2,4}|year",format:function(a){return V(a,"FullYear")}},{ba:"[Tt]{1,2}",
format:function(a,b,c,d){if(b.ampm.length==0)return"";a=V(a,"Hours");b=b.ampm[O(a/12)];if(d.length===1)b=b.slice(0,1);if(d.slice(0,1)==="T")b=b.toUpperCase();return b}},{ba:"z{1,4}|tz|timezone",text:k,format:function(a,b,c,d){a=a.getUTCOffset();if(d=="z"||d=="zz")a=a.replace(/(\d{2})(\d{2})/,function(e,f){return P(f,d.length)});return a}},{ba:"iso(tz|timezone)",format:function(a){return a.getUTCOffset(k)}},{ba:"ord",format:function(a){a=V(a,"Date");return a+ua(a)}}],kb=[{$:"year",method:"FullYear",
ja:k,da:function(a){return(365+(a?a.isLeapYear()?1:0:0.25))*24*60*60*1E3}},{$:"month",method:"Month",ja:k,da:function(a,b){var c=30.4375,d;if(a){d=a.daysInMonth();if(b<=d.days())c=d}return c*24*60*60*1E3},error:0.919},{$:"week",method:"ISOWeek",da:aa(6048E5)},{$:"day",method:"Date",ja:k,da:aa(864E5)},{$:"hour",method:"Hours",da:aa(36E5)},{$:"minute",method:"Minutes",da:aa(6E4)},{$:"second",method:"Seconds",da:aa(1E3)},{$:"millisecond",method:"Milliseconds",da:aa(1)}],lb={};
function mb(a){qa(this,a);this.ga=ib.concat()}
mb.prototype={getMonth:function(a){return A(a)?a-1:this.months.indexOf(a)%12},getWeekday:function(a){return this.weekdays.indexOf(a)%7},oa:function(a){var b;return A(a)?a:a&&(b=this.numbers.indexOf(a))!==-1?(b+1)%10:1},ua:function(a){var b=this;return a.replace(r(this.num,"g"),function(c){return b.oa(c)||""})},sa:function(a){return U.units[this.units.indexOf(a)%8]},va:function(a){return this.na(a,a[2]>0?"future":"past")},ra:function(a){return this.na(nb(a),"duration")},wa:function(a){a=a||this.code;
return a==="en"||a==="en-US"?k:this.variant},za:function(a){return a===this.ampm[0]},Aa:function(a){return a&&a===this.ampm[1]},na:function(a,b){var c,d,e=a[0],f=a[1],h=a[2],i=this[b]||this.relative;if(y(i))return i.call(this,e,f,h,b);d=this.units[(this.plural&&e>1?1:0)*8+f]||this.units[f];if(this.capitalizeUnit)d=ob(d);c=this.modifiers.filter(function(j){return j.name=="sign"&&j.value==(h>0?1:-1)})[0];return i.replace(/\{(.*?)\}/g,function(j,g){switch(g){case "num":return e;case "unit":return d;
case "sign":return c.src}})},ta:function(){return this.ma?[this.ma].concat(this.ga):this.ga},addFormat:function(a,b,c,d,e){var f=c||[],h=this,i;a=a.replace(/\s+/g,"[-,. ]*");a=a.replace(/\{([^,]+?)\}/g,function(j,g){var m,o,w,z=g.match(/\?$/);w=g.match(/^(\d+)\??$/);var J=g.match(/(\d)(?:-(\d))?/),M=g.replace(/[^a-z]+$/,"");if(w)m=h.tokens[w[1]];else if(h[M])m=h[M];else if(h[M+"s"]){m=h[M+"s"];if(J){o=[];m.forEach(function(Q,Fa){var W=Fa%(h.units?8:m.length);if(W>=J[1]&&W<=(J[2]||J[1]))o.push(Q)});
m=o}m=pb(m)}if(w)w="(?:"+m+")";else{c||f.push(M);w="("+m+")"}if(z)w+="?";return w});if(b){b=qb(db,h,e);e=["t","[\\s\\u3000]"].concat(h.timeMarker);i=a.match(/\\d\{\d,\d\}\)+\??$/);rb(h,"(?:"+b+")[,\\s\\u3000]+?"+a,cb.concat(f),d);rb(h,a+"(?:[,\\s]*(?:"+e.join("|")+(i?"+":"*")+")"+b+")?",f.concat(cb),d)}else rb(h,a,f,d)}};function sb(a,b){var c;B(a)||(a="");c=lb[a]||lb[a.slice(0,2)];if(b===n&&!c)throw Error("Invalid locale.");return c||bb}
function tb(a,b){function c(g){var m=i[g];if(B(m))i[g]=m.split(",");else m||(i[g]=[])}function d(g,m){g=g.split("+").map(function(o){return o.replace(/(.+):(.+)$/,function(w,z,J){return J.split("|").map(function(M){return z+M}).join("|")})}).join("|");return g.split("|").forEach(m)}function e(g,m,o){var w=[];i[g].forEach(function(z,J){if(m)z+="+"+z.slice(0,3);d(z,function(M,Q){w[Q*o+J]=M.toLowerCase()})});i[g]=w}function f(g,m,o){g="\\d{"+g+","+m+"}";if(o)g+="|(?:"+pb(i.numbers)+")+";return g}function h(g,
m){i[g]=i[g]||m}var i,j;i=new mb(b);c("modifiers");"months,weekdays,units,numbers,articles,tokens,timeMarker,ampm,timeSuffixes,dateParse,timeParse".split(",").forEach(c);j=!i.monthSuffix;e("months",j,12);e("weekdays",j,7);e("units",n,8);e("numbers",n,10);h("code",a);h("date",f(1,2,i.digitDate));h("year","'\\d{2}|"+f(4,4));h("num",function(){var g=["\\d+"].concat(i.articles);if(i.numbers)g=g.concat(i.numbers);return pb(g)}());(function(){var g=[];i.ha={};i.modifiers.push({name:"day",src:"yesterday",
value:-1});i.modifiers.push({name:"day",src:"today",value:0});i.modifiers.push({name:"day",src:"tomorrow",value:1});i.modifiers.forEach(function(m){var o=m.name;d(m.src,function(w){var z=i[o];i.ha[w]=m;g.push({name:o,src:w,value:m.value});i[o]=z?z+"|"+w:w})});i.day+="|"+pb(i.weekdays);i.modifiers=g})();if(i.monthSuffix){i.month=f(1,2);i.months=sa(1,12).map(function(g){return g+i.monthSuffix})}i.full_month=f(1,2)+"|"+pb(i.months);i.timeSuffixes.length>0&&i.addFormat(qb(db,i),n,cb);i.addFormat("{day}",
k);i.addFormat("{month}"+(i.monthSuffix||""));i.addFormat("{year}"+(i.yearSuffix||""));i.timeParse.forEach(function(g){i.addFormat(g,k)});i.dateParse.forEach(function(g){i.addFormat(g)});return lb[a]=i}function rb(a,b,c,d){a.ga.unshift({Da:d,ya:a,Ca:r("^"+b+"$","i"),to:c})}function ob(a){return a.slice(0,1).toUpperCase()+a.slice(1)}function pb(a){return a.filter(function(b){return!!b}).join("|")}
function ub(a,b){var c;if(L(a[0]))return a;else if(A(a[0])&&!A(a[1]))return[a[0]];else if(B(a[0])&&b)return[vb(a[0]),a[1]];c={};gb.forEach(function(d,e){c[d.$]=a[e]});return[c]}function vb(a,b){var c={};if(match=a.match(/^(\d+)?\s?(\w+?)s?$/i)){if(K(b))b=parseInt(match[1])||1;c[match[2].toLowerCase()]=b}return c}
function wb(a,b){var c={},d,e;b.forEach(function(f,h){d=a[h+1];if(!(K(d)||d==="")){if(f==="year")c.Ea=d.replace(/'/,"");e=parseFloat(d.replace(/'/,"").replace(/,/,"."));c[f]=!isNaN(e)?e:d.toLowerCase()}});return c}function xb(a){a=a.trim().replace(/^just (?=now)|\.+$/i,"");return yb(a)}
function yb(a){return a.replace(fb,function(b,c,d){var e=0,f=1,h,i;if(c)return b;d.split("").reverse().forEach(function(j){j=eb[j];var g=j>9;if(g){if(h)e+=f;f*=j/(i||1);i=j}else{if(h===n)f*=10;e+=f*j}h=g});if(h)e+=f;return e})}
function zb(a,b,c,d){var e=new s,f=n,h,i,j,g,m,o,w,z,J;e.utc(d);if(ia(a))e.utc(a.isUTC()).setTime(a.getTime());else if(A(a))e.setTime(a);else if(L(a)){e.set(a,k);g=a}else if(B(a)){h=sb(b);a=xb(a);h&&E(h.ta(),function(M,Q){var Fa=a.match(Q.Ca);if(Fa){j=Q;i=j.ya;g=wb(Fa,j.to,i);g.utc&&e.utc();i.ma=j;if(g.timestamp){g=g.timestamp;return n}if(j.Da&&!B(g.month)&&(B(g.date)||h.wa(b))){z=g.month;g.month=g.date;g.date=z}if(g.year&&g.Ea.length===2)g.year=N(V(new s,"FullYear")/100)*100-N(g.year/100)*100+g.year;
if(g.month){g.month=i.getMonth(g.month);if(g.shift&&!g.unit)g.unit=i.units[7]}if(g.weekday&&g.date)delete g.weekday;else if(g.weekday){g.weekday=i.getWeekday(g.weekday);if(g.shift&&!g.unit)g.unit=i.units[5]}if(g.day&&(z=i.ha[g.day])){g.day=z.value;e.reset();f=k}else if(g.day&&(o=i.getWeekday(g.day))>-1){delete g.day;if(g.num&&g.month){J=function(){var W=e.getWeekday();e.setWeekday(7*(g.num-1)+(W>o?o+7:o))};g.day=1}else g.weekday=o}if(g.date&&!A(g.date))g.date=i.ua(g.date);if(i.Aa(g.ampm)&&g.hour<
12)g.hour+=12;else if(i.za(g.ampm)&&g.hour===12)g.hour=0;if("offset_hours"in g||"offset_minutes"in g){e.utc();g.offset_minutes=g.offset_minutes||0;g.offset_minutes+=g.offset_hours*60;if(g.offset_sign==="-")g.offset_minutes*=-1;g.minute-=g.offset_minutes}if(g.unit){f=k;w=i.oa(g.num);m=i.sa(g.unit);if(g.shift||g.edge){w*=(z=i.ha[g.shift])?z.value:0;if(m==="month"&&I(g.date)){e.set({day:g.date},k);delete g.date}if(m==="year"&&I(g.month)){e.set({month:g.month,day:g.date},k);delete g.month;delete g.date}}if(g.sign&&
(z=i.ha[g.sign]))w*=z.value;if(I(g.weekday)){e.set({weekday:g.weekday},k);delete g.weekday}g[m]=(g[m]||0)+w}if(g.year_sign==="-")g.year*=-1;hb.slice(1,4).forEach(function(W,fc){var Gb=g[W.$],Hb=Gb%1;if(Hb){g[hb[fc].$]=N(Hb*(W.$==="second"?1E3:60));g[W.$]=O(Gb)}});return n}});if(j)if(f)e.advance(g);else{e._utc&&e.reset();Ab(e,g,k,n,c)}else{if(a!=="now")e=new s(a);d&&e.addMinutes(-e.getTimezoneOffset())}if(g&&g.edge){z=i.ha[g.edge];E(hb.slice(4),function(M,Q){if(I(g[Q.$])){m=Q.$;return n}});if(m===
"year")g.fa="month";else if(m==="month"||m==="week")g.fa="day";e[(z.value<0?"endOf":"beginningOf")+ob(m)]();z.value===-2&&e.reset()}J&&J();e.utc(n)}return{ea:e,set:g}}function nb(a){var b,c=v.abs(a),d=c,e=0;hb.slice(1).forEach(function(f,h){b=O(N(c/f.da()*10)/10);if(b>=1){d=b;e=h+1}});return[d,e,a]}function Bb(a){var b=nb(a.millisecondsFromNow());if(b[1]===6)b[0]=v.abs(a.monthsFromNow());return b}
function Cb(a,b,c,d){var e,f=sb(d),h=r(/^[A-Z]/);if(a.isValid())if(Date[b])b=Date[b];else{if(y(b)){e=Bb(a);b=b.apply(a,e.concat(f))}}else return"Invalid Date";if(!b&&c){e=e||Bb(a);if(e[1]===0){e[1]=1;e[0]=1}return f.va(e)}b=b||"long";b=f[b]||b;jb.forEach(function(i){b=b.replace(r("\\{("+i.ba+")(\\d)?\\}",i.la?"i":""),function(j,g,m){j=i.format(a,f,m||1,g);m=g.length;var o=g.match(/^(.)\1+$/);if(i.la){if(m===3)j=j.slice(0,3);if(o||g.match(h))j=ob(j)}else if(o&&!i.text)j=(A(j)?P(j,m):j.toString()).slice(-m);
return j})});return b}function Db(a,b,c,d){var e,f,h,i=0,j=0,g=0;e=zb(b,l,l,d);if(c>0){j=g=c;f=k}if(!e.ea.isValid())return n;if(e.set&&e.set.fa){kb.forEach(function(m){if(m.$===e.set.fa)i=m.da(e.ea,a-e.ea)-1});b=ob(e.set.fa);if(e.set.edge||e.set.shift)e.ea["beginningOf"+b]();if(e.set.fa==="month")h=e.ea.clone()["endOf"+b]().getTime();if(!f&&e.set.sign&&e.set.fa!="millisecond"){j=50;g=-50}}f=a.getTime();b=e.ea.getTime();h=h||b+i;h=Eb(a,b,h);return f>=b-j&&f<=h+g}
function Eb(a,b,c){b=new Date(b);a=(new Date(c)).utc(a.isUTC());if(V(a,"Hours")!==23){b=b.getTimezoneOffset();a=a.getTimezoneOffset();if(b!==a)c+=(a-b).minutes()}return c}
function Ab(a,b,c,d,e){function f(g){return I(b[g])?b[g]:b[g+"s"]}function h(g){return I(f(g))}var i,j;if(A(b)&&d)b={milliseconds:b};else if(A(b)){a.setTime(b);return a}if(I(b.date))b.day=b.date;E(hb,function(g,m){var o=m.$==="day";if(h(m.$)||o&&h("weekday")){b.fa=m.$;j=+g;return n}else if(c&&m.$!=="week"&&(!o||!h("week")))Fb(a,m.method,o?1:0)});kb.forEach(function(g){var m=g.$;g=g.method;var o;o=f(m);if(!K(o)){if(d){if(m==="week"){o=(b.day||0)+o*7;g="Date"}o=o*d+V(a,g)}else m==="month"&&h("day")&&
Fb(a,"Date",15);Fb(a,g,o);if(d&&m==="month"){m=o;if(m<0)m=m%12+12;m%12!=V(a,"Month")&&Fb(a,"Date",0)}}});if(!d&&!h("day")&&h("weekday")){i=f("weekday");a.setWeekday(i)}(function(){var g=new s;return e===-1&&a>g||e===1&&a<g})()&&E(hb.slice(j+1),function(g,m){if((m.ja||m.$==="week"&&h("weekday"))&&!(h(m.$)||m.$==="day"&&h("weekday"))){a[m.ia](e);return n}});return a}function V(a,b){return a["get"+(a._utc?"UTC":"")+b]()}function Fb(a,b,c){return a["set"+(a._utc&&b!="ISOWeek"?"UTC":"")+b](c)}
function qb(a,b,c){var d={h:0,m:1,s:2},e;b=b||U;return a.replace(/{([a-z])}/g,function(f,h){var i=[],j=h==="h",g=j&&!c;if(h==="t")return b.ampm.join("|");else{j&&i.push(":");if(e=b.timeSuffixes[d[h]])i.push(e+"\\s*");return i.length===0?"":"(?:"+i.join("|")+")"+(g?"":"?")}})}function X(a,b,c){var d,e;if(A(a[1]))d=ub(a)[0];else{d=a[0];e=a[1]}return zb(d,e,b,c).ea}
s.extend({create:function(){return X(arguments)},past:function(){return X(arguments,-1)},future:function(){return X(arguments,1)},addLocale:function(a,b){return tb(a,b)},setLocale:function(a){var b=sb(a,n);bb=b;if(a&&a!=b.code)b.code=a;return b},getLocale:function(a){return!a?bb:sb(a,n)},addFormat:function(a,b,c){rb(sb(c),a,b)}},n,n);
s.extend({set:function(){var a=ub(arguments);return Ab(this,a[0],a[1])},setWeekday:function(a){if(!K(a))return Fb(this,"Date",V(this,"Date")+a-V(this,"Day"))},setISOWeek:function(a){var b=V(this,"Day")||7;if(!K(a)){this.set({month:0,date:4});this.set({weekday:1});a>1&&this.addWeeks(a-1);b!==1&&this.advance({days:b-1});return this.getTime()}},getISOWeek:function(){var a=this;a=a.clone();var b=V(a,"Day")||7;a.addDays(4-b).reset();return 1+O(a.daysSince(a.clone().beginningOfYear())/7)},getUTCOffset:function(a){var b=
this._utc?0:this.getTimezoneOffset(),c=a===k?":":"";if(!b&&a)return"Z";return P(O(-b/60),2,k)+c+P(v.abs(b%60),2)},utc:function(a){ka(this,"_utc",a===k||arguments.length===0);return this},isUTC:function(){return!!this._utc||this.getTimezoneOffset()===0},advance:function(){var a=ub(arguments,k);return Ab(this,a[0],a[1],1)},rewind:function(){var a=ub(arguments,k);return Ab(this,a[0],a[1],-1)},isValid:function(){return!isNaN(this.getTime())},isAfter:function(a,b){return this.getTime()>s.create(a).getTime()-
(b||0)},isBefore:function(a,b){return this.getTime()<s.create(a).getTime()+(b||0)},isBetween:function(a,b,c){var d=this.getTime();a=s.create(a).getTime();var e=s.create(b).getTime();b=v.min(a,e);a=v.max(a,e);c=c||0;return b-c<d&&a+c>d},isLeapYear:function(){var a=V(this,"FullYear");return a%4===0&&a%100!==0||a%400===0},daysInMonth:function(){return 32-V(new s(V(this,"FullYear"),V(this,"Month"),32),"Date")},format:function(a,b){return Cb(this,a,n,b)},relative:function(a,b){if(B(a)){b=a;a=l}return Cb(this,
a,k,b)},is:function(a,b,c){var d,e;if(this.isValid()){if(B(a)){a=a.trim().toLowerCase();e=this.clone().utc(c);switch(k){case a==="future":return this.getTime()>(new s).getTime();case a==="past":return this.getTime()<(new s).getTime();case a==="weekday":return V(e,"Day")>0&&V(e,"Day")<6;case a==="weekend":return V(e,"Day")===0||V(e,"Day")===6;case (d=U.weekdays.indexOf(a)%7)>-1:return V(e,"Day")===d;case (d=U.months.indexOf(a)%12)>-1:return V(e,"Month")===d}}return Db(this,a,b,c)}},reset:function(a){var b=
{},c;a=a||"hours";if(a==="date")a="days";c=kb.some(function(d){return a===d.$||a===d.$+"s"});b[a]=a.match(/^days?/)?1:0;return c?this.set(b,k):this},clone:function(){var a=new s(this.getTime());a.utc(!!this._utc);return a}});s.extend({iso:function(){return this.toISOString()},getWeekday:s.prototype.getDay,getUTCWeekday:s.prototype.getUTCDay});
function Ib(a,b){function c(){return N(this*b)}function d(){return X(arguments)[a.ia](this)}function e(){return X(arguments)[a.ia](-this)}var f=a.$,h={};h[f]=c;h[f+"s"]=c;h[f+"Before"]=e;h[f+"sBefore"]=e;h[f+"Ago"]=e;h[f+"sAgo"]=e;h[f+"After"]=d;h[f+"sAfter"]=d;h[f+"FromNow"]=d;h[f+"sFromNow"]=d;u.extend(h)}u.extend({duration:function(a){return sb(a).ra(this)}});
U=bb=s.addLocale("en",{plural:k,timeMarker:"at",ampm:"am,pm",months:"January,February,March,April,May,June,July,August,September,October,November,December",weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",units:"millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s",numbers:"one,two,three,four,five,six,seven,eight,nine,ten",articles:"a,an,the",tokens:"the,st|nd|rd|th,of","short":"{Month} {d}, {yyyy}","long":"{Month} {d}, {yyyy} {h}:{mm}{tt}",full:"{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}",
past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",modifiers:[{name:"sign",src:"ago|before",value:-1},{name:"sign",src:"from now|after|from|in|later",value:1},{name:"edge",src:"last day",value:-2},{name:"edge",src:"end",value:-1},{name:"edge",src:"first day|beginning",value:1},{name:"shift",src:"last",value:-1},{name:"shift",src:"the|this",value:0},{name:"shift",src:"next",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{month} {year}","{shift} {unit=5-7}",
"{0?} {date}{1}","{0?} {edge} of {shift?} {unit=4-7?}{month?}{year?}"],timeParse:["{0} {num}{1} {day} of {month} {year?}","{weekday?} {month} {date}{1?} {year?}","{date} {month} {year}","{date} {month}","{shift} {weekday}","{shift} week {weekday}","{weekday} {2?} {shift} week","{num} {unit=4-5} {sign} {day}","{0?} {date}{1} of {month}","{0?}{month?} {date?}{1?} of {shift} {unit=6-7}"]});hb=kb.concat().reverse();gb=kb.concat();gb.splice(2,1);
G(s,k,n,kb,function(a,b,c){function d(g){g=g/h;var m=g%1,o=b.error||0.999;if(m&&v.abs(m%1)>o)g=N(g);return parseInt(g)}var e=b.$,f=ob(e),h=b.da(),i,j;b.ia="add"+f+"s";i=function(g,m){return d(this.getTime()-s.create(g,m).getTime())};j=function(g,m){return d(s.create(g,m).getTime()-this.getTime())};a[e+"sAgo"]=j;a[e+"sUntil"]=j;a[e+"sSince"]=i;a[e+"sFromNow"]=i;a[b.ia]=function(g,m){var o={};o[e]=g;return this.advance(o,m)};Ib(b,h);c<3&&["Last","This","Next"].forEach(function(g){a["is"+g+f]=function(){return this.is(g+
" "+e)}});if(c<4){a["beginningOf"+f]=function(){var g={};switch(e){case "year":g.year=V(this,"FullYear");break;case "month":g.month=V(this,"Month");break;case "day":g.day=V(this,"Date");break;case "week":g.weekday=0}return this.set(g,k)};a["endOf"+f]=function(){var g={hours:23,minutes:59,seconds:59,milliseconds:999};switch(e){case "year":g.month=11;g.day=31;break;case "month":g.day=this.daysInMonth();break;case "week":g.weekday=6}return this.set(g,k)}}});
U.addFormat("([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?",k,["year_sign","year","month","date"],n,k);U.addFormat("(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?",k,["date","month","year"],k);U.addFormat("{full_month}[-.](\\d{4,4})",n,["month","year"]);U.addFormat("\\/Date\\((\\d+(?:\\+\\d{4,4})?)\\)\\/",n,["timestamp"]);U.addFormat(qb(db,U),n,cb);ib=U.ga.slice(0,7).reverse();U.ga=U.ga.slice(7).concat(ib);G(s,k,n,"short,long,full",function(a,b){a[b]=function(c){return Cb(this,b,n,c)}});
"\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07".split("").forEach(function(a,b){if(b>9)b=v.pow(10,b-9);eb[a]=b});"\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19".split("").forEach(function(a,b){eb[a]=b});fb=r("([\u671f\u9031\u5468])?([\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19]+)(?!\u6628)","g");
(function(){var a="today,yesterday,tomorrow,weekday,weekend,future,past".split(","),b=U.weekdays.slice(0,7),c=U.months.slice(0,12);G(s,k,n,a.concat(b).concat(c),function(d,e){d["is"+ob(e)]=function(f){return this.is(e,0,f)}})})();(function(){s.extend({utc:{create:function(){return X(arguments,0,k)},past:function(){return X(arguments,-1,k)},future:function(){return X(arguments,1,k)}}},n,n)})();
s.extend({RFC1123:"{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}",RFC1036:"{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}",ISO8601_DATE:"{yyyy}-{MM}-{dd}",ISO8601_DATETIME:"{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}"},n,n);
DateRange=function(a,b){this.start=s.create(a);this.end=s.create(b)};DateRange.prototype.toString=function(){return this.isValid()?this.start.full()+".."+this.end.full():"Invalid DateRange"};
D(DateRange,k,n,{isValid:function(){return this.start<this.end},duration:function(){return this.isValid()?this.end.getTime()-this.start.getTime():NaN},contains:function(a){var b=this;return(a.start&&a.end?[a.start,a.end]:[a]).every(function(c){return c>=b.start&&c<=b.end})},every:function(a,b){var c=this.start.clone(),d=[],e=0,f,h;if(B(a)){c.advance(vb(a,0),k);f=vb(a);h=a.toLowerCase()==="day"}else f={milliseconds:a};for(;c<=this.end;){d.push(c);b&&b(c,e);if(h&&V(c,"Hours")===23){c=c.clone();Fb(c,
"Hours",48)}else c=c.clone().advance(f,k);e++}return d},union:function(a){return new DateRange(this.start<a.start?this.start:a.start,this.end>a.end?this.end:a.end)},intersect:function(a){return new DateRange(this.start>a.start?this.start:a.start,this.end<a.end?this.end:a.end)},clone:function(){return new DateRange(this.start,this.end)}});G(DateRange,k,n,"Millisecond,Second,Minute,Hour,Day,Week,Month,Year",function(a,b){a["each"+b]=function(c){return this.every(b,c)}});
D(s,n,n,{range:function(a,b){return new DateRange(a,b)}});
function Jb(a,b,c,d,e){var f;if(b!==Infinity){if(!a.timers)a.timers=[];A(b)||(b=0);a.timers.push(setTimeout(function(){a.timers.splice(f,1);c.apply(d,e||[])},b));f=a.timers.length}}
D(Function,k,n,{lazy:function(a,b){function c(){if(!f||e.length<b-1){e.push([this,arguments]);h()}return g}var d=this,e=[],f=n,h,i,j,g;a=a||1;b=b||Infinity;i=N(a,void 0,"ceil");j=N(i/a)||1;h=function(){if(!(f||e.length==0)){for(var m=v.max(e.length-j,0);e.length>m;)g=Function.prototype.apply.apply(d,e.shift());Jb(c,i,function(){f=n;h()});f=k}};return c},delay:function(a){var b=H(arguments).slice(1);Jb(this,a,this,this,b);return this},throttle:function(a){return this.lazy(a,1)},debounce:function(a){function b(){b.cancel();
Jb(b,a,c,this,arguments)}var c=this;return b},cancel:function(){if(ga(this.timers))for(;this.timers.length>0;)clearTimeout(this.timers.shift());return this},after:function(a){var b=this,c=0,d=[];if(A(a)){if(a===0){b.call();return b}}else a=1;return function(){var e;d.push(H(arguments));c++;if(c==a){e=b.call(this,d);c=0;d=[];return e}}},once:function(){return this.throttle(Infinity)},fill:function(){var a=this,b=H(arguments);return function(){var c=H(arguments);b.forEach(function(d,e){if(d!=l||e>=
c.length)c.splice(e,0,d)});return a.apply(this,c)}}});
function Kb(a,b,c,d,e,f){var h=a.toFixed(20),i=h.search(/\./);h=h.search(/[1-9]/);i=i-h;if(i>0)i-=1;e=v.max(v.min((i/3).floor(),e===n?c.length:e),-d);d=c.charAt(e+d-1);if(i<-9){e=-3;b=i.abs()-9;d=c.slice(0,1)}return(a/(f?(2).pow(10*e):(10).pow(e*3))).round(b||0).format()+d.trim()}
D(u,n,n,{random:function(a,b){var c,d;if(arguments.length==1){b=a;a=0}c=v.min(a||0,K(b)?1:b);d=v.max(a||0,K(b)?1:b)+1;return O(v.random()*(d-c)+c)}});
D(u,k,n,{log:function(a){return v.log(this)/(a?v.log(a):1)},abbr:function(a){return Kb(this,a,"kmbt",0,4)},metric:function(a,b){return Kb(this,a,"n\u03bcm kMGTPE",4,K(b)?1:b)},bytes:function(a,b){return Kb(this,a,"kMGTPE",0,K(b)?4:b,k)+"B"},isInteger:function(){return this%1==0},isOdd:function(){return!isNaN(this)&&!this.isMultipleOf(2)},isEven:function(){return this.isMultipleOf(2)},isMultipleOf:function(a){return this%a===0},format:function(a,b,c){var d,e,f,h="";if(K(b))b=",";if(K(c))c=".";d=(A(a)?
N(this,a||0).toFixed(v.max(a,0)):this.toString()).replace(/^-/,"").split(".");e=d[0];f=d[1];for(d=e.length;d>0;d-=3){if(d<e.length)h=b+h;h=e.slice(v.max(0,d-3),d)+h}if(f)h+=c+ta((a||0)-f.length,"0")+f;return(this<0?"-":"")+h},hex:function(a){return this.pad(a||1,n,16)},upto:function(a,b,c){return sa(this,a,b,c||1)},downto:function(a,b,c){return sa(this,a,b,-(c||1))},times:function(a){if(a)for(var b=0;b<this;b++)a.call(this,b);return this.toNumber()},chr:function(){return t.fromCharCode(this)},pad:function(a,
b,c){return P(this,a,b,c)},ordinalize:function(){var a=this.abs();a=parseInt(a.toString().slice(-2));return this+ua(a)},toNumber:function(){return parseFloat(this,10)}});G(u,k,n,"round,floor,ceil",function(a,b){a[b]=function(c){return N(this,c,b)}});G(u,k,n,"abs,pow,sin,asin,cos,acos,tan,atan,exp,pow,sqrt",function(a,b){a[b]=function(c,d){return v[b](this,c,d)}});
var Lb="isObject,isNaN".split(","),Mb="keys,values,select,reject,each,merge,clone,equal,watch,tap,has,toQueryString".split(",");
function Nb(a,b,c,d){var e=/^(.+?)(\[.*\])$/,f,h,i;if(d!==n&&(h=b.match(e))){i=h[1];b=h[2].replace(/^\[|\]$/g,"").split("][");b.forEach(function(j){f=!j||j.match(/^\d+$/);if(!i&&ga(a))i=a.length;F(a,i)||(a[i]=f?[]:{});a=a[i];i=j});if(!i&&f)i=a.length.toString();Nb(a,i,c)}else a[b]=c.match(/^[+-]?\d+(\.\d+)?$/)?parseFloat(c):c==="true"?k:c==="false"?n:c}
function Ob(a,b){var c;if(ga(b)||L(b)&&b.toString===ba){c=[];E(b,function(d,e){if(a)d=a+"["+d+"]";c.push(Ob(d,e))});return c.join("&")}else{if(!a)return"";return Pb(a)+"="+(ia(b)?b.getTime():Pb(b))}}function Pb(a){return!a&&a!==n&&a!==0?"":encodeURIComponent(a).replace(/%20/g,"+")}function Qb(a,b,c){var d={},e;E(a,function(f,h){e=n;na(b,function(i){if(C(i)?i.test(f):pa(i)?F(i,f):f===t(i))e=k},1);if(e===c)d[f]=h});return d}
D(p,n,k,{watch:function(a,b,c){if(ea){var d=a[b];p.defineProperty(a,b,{enumerable:k,configurable:k,get:function(){return d},set:function(e){d=c.call(a,b,d,e)}})}}});D(p,n,function(a,b){return y(b)},{keys:function(a,b){var c=p.keys(a);c.forEach(function(d){b.call(a,d,a[d])});return c}});
D(p,n,n,{isObject:function(a){return L(a)},isNaN:function(a){return A(a)&&a.valueOf()!==a.valueOf()},equal:function(a,b){return ya(a)&&ya(b)?xa(a)===xa(b):a===b},extended:function(a){return new ra(a)},merge:function(a,b,c,d){var e,f;if(a&&typeof b!="string")for(e in b)if(F(b,e)&&a){f=b[e];if(I(a[e])){if(d===n)continue;if(y(d))f=d.call(b,e,a[e],b[e])}if(c===k&&f&&pa(f))if(ia(f))f=new s(f.getTime());else if(C(f))f=new r(f.source,wa(f));else{a[e]||(a[e]=q.isArray(f)?[]:{});p.merge(a[e],b[e],c,d);continue}a[e]=
f}return a},values:function(a,b){var c=[];E(a,function(d,e){c.push(e);b&&b.call(a,e)});return c},clone:function(a,b){var c;if(ia(a)&&a.clone)return a.clone();else if(pa(a))c=a instanceof ra?new ra:new a.constructor;else return a;return p.merge(c,a,b)},fromQueryString:function(a,b){var c=p.extended();a=a&&a.toString?a.toString():"";a.replace(/^.*?\?/,"").split("&").forEach(function(d){d=d.split("=");d.length===2&&Nb(c,d[0],decodeURIComponent(d[1]),b)});return c},toQueryString:function(a,b){return Ob(b,
a)},tap:function(a,b){var c=b;y(b)||(c=function(){b&&a[b]()});c.call(a,a);return a},has:function(a,b){return F(a,b)},select:function(a){return Qb(a,arguments,k)},reject:function(a){return Qb(a,arguments,n)}});G(p,n,n,x,function(a,b){var c="is"+b;Lb.push(c);a[c]=da[b]});(function(){D(p,n,function(){return arguments.length===0},{extend:function(){var a=Lb.concat(Mb);if(typeof ab!=="undefined")a=a.concat(ab);Aa(a,p)}})})();Aa(Mb,ra);
D(r,n,n,{escape:function(a){return R(a)}});
D(r,k,n,{getFlags:function(){return wa(this)},setFlags:function(a){return r(this.source,a)},addFlag:function(a){return this.setFlags(wa(this,a))},removeFlag:function(a){return this.setFlags(wa(this).replace(a,""))}});
var Rb,Sb;
D(t,k,function(a){return C(a)||arguments.length>2},{startsWith:function(a,b,c){var d=this;if(b)d=d.slice(b);if(K(c))c=k;a=C(a)?a.source.replace("^",""):R(a);return r("^"+a,c?"":"i").test(d)},endsWith:function(a,b,c){var d=this;if(I(b))d=d.slice(0,b);if(K(c))c=k;a=C(a)?a.source.replace("$",""):R(a);return r(a+"$",c?"":"i").test(d)}});
D(t,k,n,{escapeRegExp:function(){return R(this)},escapeURL:function(a){return a?encodeURIComponent(this):encodeURI(this)},unescapeURL:function(a){return a?decodeURI(this):decodeURIComponent(this)},escapeHTML:function(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2f;")},unescapeHTML:function(){return this.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&#x2f;/g,
"/").replace(/&amp;/g,"&")},encodeBase64:function(){return Rb(this)},decodeBase64:function(){return Sb(this)},each:function(a,b){var c,d,e;if(y(a)){b=a;a=/[\s\S]/g}else if(a)if(B(a))a=r(R(a),"gi");else{if(C(a))a=r(a.source,wa(a,"g"))}else a=/[\s\S]/g;c=this.match(a)||[];if(b){d=0;for(e=c.length;d<e;d++)c[d]=b.call(this,c[d],d,c)||c[d]}return c},shift:function(a){var b="";a=a||0;this.codes(function(c){b+=t.fromCharCode(c+a)});return b},codes:function(a){var b=[],c,d;c=0;for(d=this.length;c<d;c++){var e=
this.charCodeAt(c);b.push(e);a&&a.call(this,e,c)}return b},chars:function(a){return this.each(a)},words:function(a){return this.trim().each(/\S+/g,a)},lines:function(a){return this.trim().each(/^.*$/gm,a)},paragraphs:function(a){var b=this.trim().split(/[\r\n]{2,}/);return b=b.map(function(c){if(a)var d=a.call(c);return d?d:c})},isBlank:function(){return this.trim().length===0},has:function(a){return this.search(C(a)?a:R(a))!==-1},add:function(a,b){b=K(b)?this.length:b;return this.slice(0,b)+a+this.slice(b)},
remove:function(a){return this.replace(a,"")},reverse:function(){return this.split("").reverse().join("")},compact:function(){return this.trim().replace(/([\r\n\s\u3000])+/g,function(a,b){return b==="\u3000"?b:" "})},at:function(){return za(this,arguments,k)},from:function(a){return this.slice(a)},to:function(a){if(K(a))a=this.length;return this.slice(0,a)},dasherize:function(){return this.underscore().replace(/_/g,"-")},underscore:function(){return this.replace(/[-\s]+/g,"_").replace(t.Inflector&&
t.Inflector.acronymRegExp,function(a,b){return(b>0?"_":"")+a.toLowerCase()}).replace(/([A-Z\d]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").toLowerCase()},camelize:function(a){return this.underscore().replace(/(^|_)([^_]+)/g,function(b,c,d,e){b=d;b=(c=t.Inflector)&&c.acronyms[b];b=B(b)?b:void 0;e=a!==n||e>0;if(b)return e?b:b.toLowerCase();return e?d.capitalize():d})},spacify:function(){return this.underscore().replace(/_/g," ")},stripTags:function(){var a=this;na(arguments.length>
0?arguments:[""],function(b){a=a.replace(r("</?"+R(b)+"[^<>]*>","gi"),"")});return a},removeTags:function(){var a=this;na(arguments.length>0?arguments:["\\S+"],function(b){b=r("<("+b+")[^<>]*(?:\\/>|>.*?<\\/\\1>)","gi");a=a.replace(b,"")});return a},truncate:function(a,b,c,d){var e="",f="",h=this.toString(),i="["+va()+"]+",j="[^"+va()+"]*",g=r(i+j+"$");d=K(d)?"...":t(d);if(h.length<=a)return h;switch(c){case "left":a=h.length-a;e=d;h=h.slice(a);g=r("^"+j+i);break;case "middle":a=O(a/2);f=d+h.slice(h.length-
a).trimLeft();h=h.slice(0,a);break;default:a=a;f=d;h=h.slice(0,a)}if(b===n&&this.slice(a,a+1).match(/\S/))h=h.remove(g);return e+h+f},pad:function(a,b){return ta(b,a)+this+ta(b,a)},padLeft:function(a,b){return ta(b,a)+this},padRight:function(a,b){return this+ta(b,a)},first:function(a){if(K(a))a=1;return this.substr(0,a)},last:function(a){if(K(a))a=1;return this.substr(this.length-a<0?0:this.length-a)},repeat:function(a){var b="",c=this;if(!A(a)||a<1)return"";for(;a;){if(a&1)b+=c;if(a>>=1)c+=c}return b},
toNumber:function(a){var b=this.replace(/,/g,"");return b.match(/\./)?parseFloat(b):parseInt(b,a||10)},capitalize:function(a){var b;return this.toLowerCase().replace(a?/[\s\S]/g:/^\S/,function(c){var d=c.toUpperCase(),e;e=b?c:d;b=d!==c;return e})},assign:function(){var a={};H(arguments,function(b,c){if(L(b))qa(a,b);else a[c+1]=b});return this.replace(/\{([^{]+?)\}/g,function(b,c){return F(a,c)?a[c]:b})}});D(t,k,n,{insert:t.prototype.add});
(function(a){if(this.btoa){Rb=this.btoa;Sb=this.atob}else{var b=/[^A-Za-z0-9\+\/\=]/g;Rb=function(c){var d="",e,f,h,i,j,g,m=0;do{e=c.charCodeAt(m++);f=c.charCodeAt(m++);h=c.charCodeAt(m++);i=e>>2;e=(e&3)<<4|f>>4;j=(f&15)<<2|h>>6;g=h&63;if(isNaN(f))j=g=64;else if(isNaN(h))g=64;d=d+a.charAt(i)+a.charAt(e)+a.charAt(j)+a.charAt(g)}while(m<c.length);return d};Sb=function(c){var d="",e,f,h,i,j,g=0;if(c.match(b))throw Error("String contains invalid base64 characters");c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");
do{e=a.indexOf(c.charAt(g++));f=a.indexOf(c.charAt(g++));i=a.indexOf(c.charAt(g++));j=a.indexOf(c.charAt(g++));e=e<<2|f>>4;f=(f&15)<<4|i>>2;h=(i&3)<<6|j;d+=t.fromCharCode(e);if(i!=64)d+=t.fromCharCode(f);if(j!=64)d+=t.fromCharCode(h)}while(g<c.length);return d}}})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");})();;(function() {
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
;/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);
;/*! Hammer.JS - v1.0.6dev - 2013-05-07
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

            // mouse isn't pressed
            else if(sourceEventType.match(/mouse/) && ev.which !== 1) {
                enable_detect = false;
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
            ev.indentifier = 1;
            return [ev];
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
     * @parm    {Boolean}   merge       do a merge
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
        hold_timeout    : 500,
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
        tap_max_touchtime   : 250,
        tap_max_distance    : 10,
        tap_always          : true,
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
        // Set correct_for_drag_min_distance to true to make the starting point of the drag
        // be calculated from where the drag was triggered, not from where the touch started.
        // Useful to avoid a jerk-starting drag, which can make fine-adjustments
        // through dragging difficult, and be visually unappealing.
        correct_for_drag_min_distance : true,
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
                if(Hammer.detection.current.name != this.name) {
                    Hammer.detection.current.name = this.name;
                    if (inst.options.correct_for_drag_min_distance) {
                        // When a drag is triggered, set the event center to drag_min_distance pixels from the original event center.
                        // Without this correction, the dragged distance would jumpstart at drag_min_distance pixels instead of at 0.
                        // It might be useful to save the original start point somewhere
                        var factor = Math.abs(inst.options.drag_min_distance/ev.distance);
                        Hammer.detection.current.startEvent.center.pageX += ev.deltaX * factor;
                        Hammer.detection.current.startEvent.center.pageY += ev.deltaY * factor;

                        // recalculate event data using new start point
                        ev = Hammer.detection.extendEventData(ev);
                    }
                }

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

// Based off Lo-Dash's excellent UMD wrapper (slightly modified) - https://github.com/bestiejs/lodash/blob/master/lodash.js#L5515-L5543
// some AMD build optimizers, like r.js, check for specific condition patterns like the following:
if(typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose Hammer to the global object even when an AMD loader is present in
    // case Hammer was injected by a third-party script and not intended to be
    // loaded as a module.
    window.Hammer = Hammer;

    // define as an anonymous module
    define(function() {
        return Hammer;
    });
}
// check for `exports` after `define` in case a build optimizer adds an `exports` object
else if(typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = Hammer;
}
else {
    window.Hammer = Hammer;
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

})(window.jQuery || window.Zepto);
;


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>scroller/src/Scroller.js at master · zynga/scroller</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe16.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="127001" name="octolytics-actor-id" /><meta content="codecollision" name="octolytics-actor-login" /><meta content="522a6d151647c4cd631ba7bc662f60255cdb987fd4024ae64c1aa891ccc523fd" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="ugPoRj30dyzZBnfLIm5rl3XpN2kqwe6o+PXDdM8Hl5w=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-18426ad2e511ad881d5d0a2b133329f94baf1305.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-13a1767e53653178a55a8f1aa8fc7567598b5369.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-e8054ad804a1cf9e9849130fee5a4a5487b663ed.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-0444c1d0a0bb2f32a3c081d0aa3b6687cbd0ce39.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="012ce5e561582d6552e650e39a764c8a">

        <link data-pjax-transient rel='permalink' href='/zynga/scroller/blob/a44d7c2240e0e1d80ea0d172e1d455ea61b0cec7/src/Scroller.js'>
  <meta property="og:title" content="scroller"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/zynga/scroller"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="scroller - Accelerated panning and zooming for HTML and Canvas"/>

  <meta name="description" content="scroller - Accelerated panning and zooming for HTML and Canvas" />

  <meta content="79708" name="octolytics-dimension-user_id" /><meta content="zynga" name="octolytics-dimension-user_login" /><meta content="2377206" name="octolytics-dimension-repository_id" /><meta content="zynga/scroller" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2377206" name="octolytics-dimension-repository_network_root_id" /><meta content="zynga/scroller" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/zynga/scroller/commits/master.atom" rel="alternate" title="Recent Commits to scroller:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="codecollision"
      data-repo="zynga/scroller"
      data-branch="master"
      data-sha="35ede7ba17354b70176d0885cce38b54a86d28ed"
  >

    <input type="hidden" name="nwo" value="zynga/scroller" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/codecollision" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/ef16bf2ac92637b80aee919d4ff26f0c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> codecollision
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="zynga/scroller">This repository</span>
    </li>
    <li>
      <a href="/zynga/scroller/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="ugPoRj30dyzZBnfLIm5rl3XpN2kqwe6o+PXDdM8Hl5w=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2377206" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button  js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container on">
      <a href="/zynga/scroller/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
      </a>
      <a href="/zynga/scroller/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star"></span><span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/zynga/scroller/stargazers">1,117</a>
    </li>

        <li>
          <a href="/zynga/scroller/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/zynga/scroller/network" class="social-count">128</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/zynga" class="url fn" itemprop="url" rel="author"><span itemprop="title">zynga</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/zynga/scroller" class="js-current-repository js-repo-home-link">scroller</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container
            ">

          <div class="repository-sidebar">

              

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/zynga/scroller" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /zynga/scroller">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/zynga/scroller/issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /zynga/scroller/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>10</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/zynga/scroller/pulls" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /zynga/scroller/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/zynga/scroller/wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /zynga/scroller/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/zynga/scroller/pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /zynga/scroller/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/zynga/scroller/graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /zynga/scroller/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/zynga/scroller/network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /zynga/scroller/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>


              <div class="only-with-full-nav">

                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/zynga/scroller.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/zynga/scroller.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:zynga/scroller.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:zynga/scroller.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/zynga/scroller" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/zynga/scroller" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>


  <a href="github-windows://openRepo/https://github.com/zynga/scroller" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                  <a href="/zynga/scroller/archive/master.zip"
                     class="minibutton sidebar-button"
                     title="Download this repository as a zip file"
                     rel="nofollow">
                    <span class="octicon octicon-cloud-download"></span>
                    Download ZIP
                  </a>

              </div>
          </div>

          <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
            


<!-- blob contrib key: blob_contributors:v21:28606d86726b9b76b1ab78120f8b13e8 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:28606d86726b9b76b1ab78120f8b13e8 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/zynga/scroller/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/gh-pages/src/Scroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/master/src/Scroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.2.2/src/Scroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.2" rel="nofollow" title="1.2.2">1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.2.1/src/Scroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.1" rel="nofollow" title="1.2.1">1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.2/src/Scroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2" rel="nofollow" title="1.2">1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.1/src/Scroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1" rel="nofollow" title="1.1">1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.0/src/Scroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0" rel="nofollow" title="1.0">1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zynga/scroller" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">scroller</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zynga/scroller/tree/master/src" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">Scroller.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="src/Scroller.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/7fcc61c13cf8b3d3f8681e0a01b898a9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><span rel="author">Yotam Shalev</span></span>
    <time class="js-relative-date" datetime="2013-05-22T02:08:50-07:00" title="2013-05-22 02:08:50">May 22, 2013</time>
    <div class="commit-title">
        <a href="/zynga/scroller/commit/6b5e8dde30db36437efc763cea4b3a40f1613905" class="message" data-pjax="true">Exposed internal properties penetrationDeceleration and penetrationAc…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>8</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="vermilion1" href="/zynga/scroller/commits/master/src/Scroller.js?author=vermilion1"><img height="20" src="https://secure.gravatar.com/avatar/3752b2a31476235c9cd2230e9f970184?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="pbakaus" href="/zynga/scroller/commits/master/src/Scroller.js?author=pbakaus"><img height="20" src="https://secure.gravatar.com/avatar/9fb120a88c85d93be416ed62b8ab5e16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="usefulthink" href="/zynga/scroller/commits/master/src/Scroller.js?author=usefulthink"><img height="20" src="https://secure.gravatar.com/avatar/e506e5bd38075f5fe7f9e53a597c1f3a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="philipvonbargen" href="/zynga/scroller/commits/master/src/Scroller.js?author=philipvonbargen"><img height="20" src="https://secure.gravatar.com/avatar/8399658c6e27e0e0bdc7803a8ce386c7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="lukemelia" href="/zynga/scroller/commits/master/src/Scroller.js?author=lukemelia"><img height="20" src="https://secure.gravatar.com/avatar/49612ba6e616ca3c4c668ad35e3e84ce?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="wpbasti" href="/zynga/scroller/commits/master/src/Scroller.js?author=wpbasti"><img height="20" src="https://secure.gravatar.com/avatar/b0c4ca0f60a58eac6cf1dac301dc663f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="saschagoebel" href="/zynga/scroller/commits/master/src/Scroller.js?author=saschagoebel"><img height="20" src="https://secure.gravatar.com/avatar/435ed2f465cb3f5eeedf4097308e6ffb?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="bedeabza" href="/zynga/scroller/commits/master/src/Scroller.js?author=bedeabza"><img height="20" src="https://secure.gravatar.com/avatar/d9846112886787b22f8b473053648316?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/3752b2a31476235c9cd2230e9f970184?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/vermilion1">vermilion1</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/9fb120a88c85d93be416ed62b8ab5e16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/pbakaus">pbakaus</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/e506e5bd38075f5fe7f9e53a597c1f3a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/usefulthink">usefulthink</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/8399658c6e27e0e0bdc7803a8ce386c7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/philipvonbargen">philipvonbargen</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/49612ba6e616ca3c4c668ad35e3e84ce?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/lukemelia">lukemelia</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/b0c4ca0f60a58eac6cf1dac301dc663f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/wpbasti">wpbasti</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/435ed2f465cb3f5eeedf4097308e6ffb?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/saschagoebel">saschagoebel</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/d9846112886787b22f8b473053648316?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/bedeabza">bedeabza</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>1323 lines (951 sloc)</span>
        <span>37.866 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/zynga/scroller/edit/master/src/Scroller.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/zynga/scroller/raw/master/src/Scroller.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/zynga/scroller/blame/master/src/Scroller.js" class="button minibutton ">Blame</a>
          <a href="/zynga/scroller/commits/master/src/Scroller.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/zynga/scroller/delete/master/src/Scroller.js"
               title="Fork this project and delete file" data-method="post" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * Scroller</span></div><div class='line' id='LC3'><span class="cm"> * http://github.com/zynga/scroller</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * Copyright 2011, Zynga Inc.</span></div><div class='line' id='LC6'><span class="cm"> * Licensed under the MIT License.</span></div><div class='line' id='LC7'><span class="cm"> * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt</span></div><div class='line' id='LC8'><span class="cm"> *</span></div><div class='line' id='LC9'><span class="cm"> * Based on the work of: Unify Project (unify-project.org)</span></div><div class='line' id='LC10'><span class="cm"> * http://unify-project.org</span></div><div class='line' id='LC11'><span class="cm"> * Copyright 2011, Deutsche Telekom AG</span></div><div class='line' id='LC12'><span class="cm"> * License: MIT + Apache (V2)</span></div><div class='line' id='LC13'><span class="cm"> */</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'><span class="kd">var</span> <span class="nx">Scroller</span><span class="p">;</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC18'>	<span class="kd">var</span> <span class="nx">NOOP</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){};</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'>	<span class="cm">/**</span></div><div class='line' id='LC21'><span class="cm">	 * A pure logic &#39;component&#39; for &#39;virtual&#39; scrolling/zooming.</span></div><div class='line' id='LC22'><span class="cm">	 */</span></div><div class='line' id='LC23'>	<span class="nx">Scroller</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">callback</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'>		<span class="k">this</span><span class="p">.</span><span class="nx">__callback</span> <span class="o">=</span> <span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'>		<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>			<span class="cm">/** Enable scrolling on x-axis */</span></div><div class='line' id='LC30'>			<span class="nx">scrollingX</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>			<span class="cm">/** Enable scrolling on y-axis */</span></div><div class='line' id='LC33'>			<span class="nx">scrollingY</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>			<span class="cm">/** Enable animations for deceleration, snap back, zooming and scrolling */</span></div><div class='line' id='LC36'>			<span class="nx">animating</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>			<span class="cm">/** duration for animations triggered by scrollTo/zoomTo */</span></div><div class='line' id='LC39'>			<span class="nx">animationDuration</span><span class="o">:</span> <span class="mi">250</span><span class="p">,</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>			<span class="cm">/** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */</span></div><div class='line' id='LC42'>			<span class="nx">bouncing</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>			<span class="cm">/** Enable locking to the main axis if user moves only slightly on one of them at start */</span></div><div class='line' id='LC45'>			<span class="nx">locking</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>			<span class="cm">/** Enable pagination mode (switching between full page content panes) */</span></div><div class='line' id='LC48'>			<span class="nx">paging</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>			<span class="cm">/** Enable snapping of content to a configured pixel grid */</span></div><div class='line' id='LC51'>			<span class="nx">snapping</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>			<span class="cm">/** Enable zooming of content via API, fingers and mouse wheel */</span></div><div class='line' id='LC54'>			<span class="nx">zooming</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>			<span class="cm">/** Minimum zoom level */</span></div><div class='line' id='LC57'>			<span class="nx">minZoom</span><span class="o">:</span> <span class="mf">0.5</span><span class="p">,</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>			<span class="cm">/** Maximum zoom level */</span></div><div class='line' id='LC60'>			<span class="nx">maxZoom</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>			<span class="cm">/** Multiply or decrease scrolling speed **/</span></div><div class='line' id='LC63'>			<span class="nx">speedMultiplier</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>			<span class="cm">/** Callback that is fired on the later of touch end or deceleration end,</span></div><div class='line' id='LC66'><span class="cm">				provided that another scrolling action has not begun. Used to know</span></div><div class='line' id='LC67'><span class="cm">				when to fade out a scrollbar. */</span></div><div class='line' id='LC68'>			<span class="nx">scrollingComplete</span><span class="o">:</span> <span class="nx">NOOP</span><span class="p">,</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>			<span class="cm">/** This configures the amount of change applied to deceleration when reaching boundaries  **/</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">penetrationDeceleration</span> <span class="o">:</span> <span class="mf">0.03</span><span class="p">,</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/** This configures the amount of change applied to acceleration when reaching boundaries  **/</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">penetrationAcceleration</span> <span class="o">:</span> <span class="mf">0.08</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>		<span class="p">};</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC79'>			<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC80'>		<span class="p">}</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>	<span class="p">};</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>	<span class="c1">// Easing Equations (c) 2003 Robert Penner, all rights reserved.</span></div><div class='line' id='LC86'>	<span class="c1">// Open source under the BSD License.</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>	<span class="cm">/**</span></div><div class='line' id='LC89'><span class="cm">	 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)</span></div><div class='line' id='LC90'><span class="cm">	**/</span></div><div class='line' id='LC91'>	<span class="kd">var</span> <span class="nx">easeOutCubic</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">pos</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC92'>		<span class="k">return</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">((</span><span class="nx">pos</span> <span class="o">-</span> <span class="mi">1</span><span class="p">),</span> <span class="mi">3</span><span class="p">)</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC93'>	<span class="p">};</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>	<span class="cm">/**</span></div><div class='line' id='LC96'><span class="cm">	 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)</span></div><div class='line' id='LC97'><span class="cm">	**/</span></div><div class='line' id='LC98'>	<span class="kd">var</span> <span class="nx">easeInOutCubic</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">pos</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC99'>		<span class="k">if</span> <span class="p">((</span><span class="nx">pos</span> <span class="o">/=</span> <span class="mf">0.5</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC100'>			<span class="k">return</span> <span class="mf">0.5</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="nx">pos</span><span class="p">,</span> <span class="mi">3</span><span class="p">);</span></div><div class='line' id='LC101'>		<span class="p">}</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'>		<span class="k">return</span> <span class="mf">0.5</span> <span class="o">*</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">((</span><span class="nx">pos</span> <span class="o">-</span> <span class="mi">2</span><span class="p">),</span> <span class="mi">3</span><span class="p">)</span> <span class="o">+</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC104'>	<span class="p">};</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>	<span class="kd">var</span> <span class="nx">members</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>		<span class="cm">/*</span></div><div class='line' id='LC110'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC111'><span class="cm">			INTERNAL FIELDS :: STATUS</span></div><div class='line' id='LC112'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC113'><span class="cm">		*/</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>		<span class="cm">/** {Boolean} Whether only a single finger is used in touch handling */</span></div><div class='line' id='LC116'>		<span class="nx">__isSingleTouch</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>		<span class="cm">/** {Boolean} Whether a touch event sequence is in progress */</span></div><div class='line' id='LC119'>		<span class="nx">__isTracking</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'>		<span class="cm">/** {Boolean} Whether a deceleration animation went to completion. */</span></div><div class='line' id='LC122'>		<span class="nx">__didDecelerationComplete</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>		<span class="cm">/**</span></div><div class='line' id='LC125'><span class="cm">		 * {Boolean} Whether a gesture zoom/rotate event is in progress. Activates when</span></div><div class='line' id='LC126'><span class="cm">		 * a gesturestart event happens. This has higher priority than dragging.</span></div><div class='line' id='LC127'><span class="cm">		 */</span></div><div class='line' id='LC128'>		<span class="nx">__isGesturing</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>		<span class="cm">/**</span></div><div class='line' id='LC131'><span class="cm">		 * {Boolean} Whether the user has moved by such a distance that we have enabled</span></div><div class='line' id='LC132'><span class="cm">		 * dragging mode. Hint: It&#39;s only enabled after some pixels of movement to</span></div><div class='line' id='LC133'><span class="cm">		 * not interrupt with clicks etc.</span></div><div class='line' id='LC134'><span class="cm">		 */</span></div><div class='line' id='LC135'>		<span class="nx">__isDragging</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'>		<span class="cm">/**</span></div><div class='line' id='LC138'><span class="cm">		 * {Boolean} Not touching and dragging anymore, and smoothly animating the</span></div><div class='line' id='LC139'><span class="cm">		 * touch sequence using deceleration.</span></div><div class='line' id='LC140'><span class="cm">		 */</span></div><div class='line' id='LC141'>		<span class="nx">__isDecelerating</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>		<span class="cm">/**</span></div><div class='line' id='LC144'><span class="cm">		 * {Boolean} Smoothly animating the currently configured change</span></div><div class='line' id='LC145'><span class="cm">		 */</span></div><div class='line' id='LC146'>		<span class="nx">__isAnimating</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>		<span class="cm">/*</span></div><div class='line' id='LC151'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC152'><span class="cm">			INTERNAL FIELDS :: DIMENSIONS</span></div><div class='line' id='LC153'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC154'><span class="cm">		*/</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>		<span class="cm">/** {Integer} Available outer left position (from document perspective) */</span></div><div class='line' id='LC157'>		<span class="nx">__clientLeft</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'>		<span class="cm">/** {Integer} Available outer top position (from document perspective) */</span></div><div class='line' id='LC160'>		<span class="nx">__clientTop</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>		<span class="cm">/** {Integer} Available outer width */</span></div><div class='line' id='LC163'>		<span class="nx">__clientWidth</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>		<span class="cm">/** {Integer} Available outer height */</span></div><div class='line' id='LC166'>		<span class="nx">__clientHeight</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>		<span class="cm">/** {Integer} Outer width of content */</span></div><div class='line' id='LC169'>		<span class="nx">__contentWidth</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC170'><br/></div><div class='line' id='LC171'>		<span class="cm">/** {Integer} Outer height of content */</span></div><div class='line' id='LC172'>		<span class="nx">__contentHeight</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'>		<span class="cm">/** {Integer} Snapping width for content */</span></div><div class='line' id='LC175'>		<span class="nx">__snapWidth</span><span class="o">:</span> <span class="mi">100</span><span class="p">,</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'>		<span class="cm">/** {Integer} Snapping height for content */</span></div><div class='line' id='LC178'>		<span class="nx">__snapHeight</span><span class="o">:</span> <span class="mi">100</span><span class="p">,</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>		<span class="cm">/** {Integer} Height to assign to refresh area */</span></div><div class='line' id='LC181'>		<span class="nx">__refreshHeight</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'>		<span class="cm">/** {Boolean} Whether the refresh process is enabled when the event is released now */</span></div><div class='line' id='LC184'>		<span class="nx">__refreshActive</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>		<span class="cm">/** {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release */</span></div><div class='line' id='LC187'>		<span class="nx">__refreshActivate</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC188'><br/></div><div class='line' id='LC189'>		<span class="cm">/** {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled */</span></div><div class='line' id='LC190'>		<span class="nx">__refreshDeactivate</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'>		<span class="cm">/** {Function} Callback to execute to start the actual refresh. Call {@link #refreshFinish} when done */</span></div><div class='line' id='LC193'>		<span class="nx">__refreshStart</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>		<span class="cm">/** {Number} Zoom level */</span></div><div class='line' id='LC196'>		<span class="nx">__zoomLevel</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>		<span class="cm">/** {Number} Scroll position on x-axis */</span></div><div class='line' id='LC199'>		<span class="nx">__scrollLeft</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC200'><br/></div><div class='line' id='LC201'>		<span class="cm">/** {Number} Scroll position on y-axis */</span></div><div class='line' id='LC202'>		<span class="nx">__scrollTop</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'>		<span class="cm">/** {Integer} Maximum allowed scroll position on x-axis */</span></div><div class='line' id='LC205'>		<span class="nx">__maxScrollLeft</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC206'><br/></div><div class='line' id='LC207'>		<span class="cm">/** {Integer} Maximum allowed scroll position on y-axis */</span></div><div class='line' id='LC208'>		<span class="nx">__maxScrollTop</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'>		<span class="cm">/* {Number} Scheduled left position (final position when animating) */</span></div><div class='line' id='LC211'>		<span class="nx">__scheduledLeft</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>		<span class="cm">/* {Number} Scheduled top position (final position when animating) */</span></div><div class='line' id='LC214'>		<span class="nx">__scheduledTop</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'>		<span class="cm">/* {Number} Scheduled zoom level (final scale when animating) */</span></div><div class='line' id='LC217'>		<span class="nx">__scheduledZoom</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'><br/></div><div class='line' id='LC220'><br/></div><div class='line' id='LC221'>		<span class="cm">/*</span></div><div class='line' id='LC222'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC223'><span class="cm">			INTERNAL FIELDS :: LAST POSITIONS</span></div><div class='line' id='LC224'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC225'><span class="cm">		*/</span></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'>		<span class="cm">/** {Number} Left position of finger at start */</span></div><div class='line' id='LC228'>		<span class="nx">__lastTouchLeft</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'>		<span class="cm">/** {Number} Top position of finger at start */</span></div><div class='line' id='LC231'>		<span class="nx">__lastTouchTop</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC232'><br/></div><div class='line' id='LC233'>		<span class="cm">/** {Date} Timestamp of last move of finger. Used to limit tracking range for deceleration speed. */</span></div><div class='line' id='LC234'>		<span class="nx">__lastTouchMove</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>		<span class="cm">/** {Array} List of positions, uses three indexes for each state: left, top, timestamp */</span></div><div class='line' id='LC237'>		<span class="nx">__positions</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'><br/></div><div class='line' id='LC241'>		<span class="cm">/*</span></div><div class='line' id='LC242'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC243'><span class="cm">			INTERNAL FIELDS :: DECELERATION SUPPORT</span></div><div class='line' id='LC244'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC245'><span class="cm">		*/</span></div><div class='line' id='LC246'><br/></div><div class='line' id='LC247'>		<span class="cm">/** {Integer} Minimum left scroll position during deceleration */</span></div><div class='line' id='LC248'>		<span class="nx">__minDecelerationScrollLeft</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC249'><br/></div><div class='line' id='LC250'>		<span class="cm">/** {Integer} Minimum top scroll position during deceleration */</span></div><div class='line' id='LC251'>		<span class="nx">__minDecelerationScrollTop</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC252'><br/></div><div class='line' id='LC253'>		<span class="cm">/** {Integer} Maximum left scroll position during deceleration */</span></div><div class='line' id='LC254'>		<span class="nx">__maxDecelerationScrollLeft</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC255'><br/></div><div class='line' id='LC256'>		<span class="cm">/** {Integer} Maximum top scroll position during deceleration */</span></div><div class='line' id='LC257'>		<span class="nx">__maxDecelerationScrollTop</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC258'><br/></div><div class='line' id='LC259'>		<span class="cm">/** {Number} Current factor to modify horizontal scroll position with on every step */</span></div><div class='line' id='LC260'>		<span class="nx">__decelerationVelocityX</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC261'><br/></div><div class='line' id='LC262'>		<span class="cm">/** {Number} Current factor to modify vertical scroll position with on every step */</span></div><div class='line' id='LC263'>		<span class="nx">__decelerationVelocityY</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC264'><br/></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'><br/></div><div class='line' id='LC267'>		<span class="cm">/*</span></div><div class='line' id='LC268'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC269'><span class="cm">			PUBLIC API</span></div><div class='line' id='LC270'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC271'><span class="cm">		*/</span></div><div class='line' id='LC272'><br/></div><div class='line' id='LC273'>		<span class="cm">/**</span></div><div class='line' id='LC274'><span class="cm">		 * Configures the dimensions of the client (outer) and content (inner) elements.</span></div><div class='line' id='LC275'><span class="cm">		 * Requires the available space for the outer element and the outer size of the inner element.</span></div><div class='line' id='LC276'><span class="cm">		 * All values which are falsy (null or zero etc.) are ignored and the old value is kept.</span></div><div class='line' id='LC277'><span class="cm">		 *</span></div><div class='line' id='LC278'><span class="cm">		 * @param clientWidth {Integer ? null} Inner width of outer element</span></div><div class='line' id='LC279'><span class="cm">		 * @param clientHeight {Integer ? null} Inner height of outer element</span></div><div class='line' id='LC280'><span class="cm">		 * @param contentWidth {Integer ? null} Outer width of inner element</span></div><div class='line' id='LC281'><span class="cm">		 * @param contentHeight {Integer ? null} Outer height of inner element</span></div><div class='line' id='LC282'><span class="cm">		 */</span></div><div class='line' id='LC283'>		<span class="nx">setDimensions</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">clientWidth</span><span class="p">,</span> <span class="nx">clientHeight</span><span class="p">,</span> <span class="nx">contentWidth</span><span class="p">,</span> <span class="nx">contentHeight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC286'><br/></div><div class='line' id='LC287'>			<span class="c1">// Only update values which are defined</span></div><div class='line' id='LC288'>			<span class="k">if</span> <span class="p">(</span><span class="nx">clientWidth</span> <span class="o">===</span> <span class="o">+</span><span class="nx">clientWidth</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC289'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__clientWidth</span> <span class="o">=</span> <span class="nx">clientWidth</span><span class="p">;</span></div><div class='line' id='LC290'>			<span class="p">}</span></div><div class='line' id='LC291'><br/></div><div class='line' id='LC292'>			<span class="k">if</span> <span class="p">(</span><span class="nx">clientHeight</span> <span class="o">===</span> <span class="o">+</span><span class="nx">clientHeight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC293'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__clientHeight</span> <span class="o">=</span> <span class="nx">clientHeight</span><span class="p">;</span></div><div class='line' id='LC294'>			<span class="p">}</span></div><div class='line' id='LC295'><br/></div><div class='line' id='LC296'>			<span class="k">if</span> <span class="p">(</span><span class="nx">contentWidth</span> <span class="o">===</span> <span class="o">+</span><span class="nx">contentWidth</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC297'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__contentWidth</span> <span class="o">=</span> <span class="nx">contentWidth</span><span class="p">;</span></div><div class='line' id='LC298'>			<span class="p">}</span></div><div class='line' id='LC299'><br/></div><div class='line' id='LC300'>			<span class="k">if</span> <span class="p">(</span><span class="nx">contentHeight</span> <span class="o">===</span> <span class="o">+</span><span class="nx">contentHeight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC301'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__contentHeight</span> <span class="o">=</span> <span class="nx">contentHeight</span><span class="p">;</span></div><div class='line' id='LC302'>			<span class="p">}</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>			<span class="c1">// Refresh maximums</span></div><div class='line' id='LC305'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__computeScrollMax</span><span class="p">();</span></div><div class='line' id='LC306'><br/></div><div class='line' id='LC307'>			<span class="c1">// Refresh scroll position</span></div><div class='line' id='LC308'>			<span class="nx">self</span><span class="p">.</span><span class="nx">scrollTo</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC309'><br/></div><div class='line' id='LC310'>		<span class="p">},</span></div><div class='line' id='LC311'><br/></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'>		<span class="cm">/**</span></div><div class='line' id='LC314'><span class="cm">		 * Sets the client coordinates in relation to the document.</span></div><div class='line' id='LC315'><span class="cm">		 *</span></div><div class='line' id='LC316'><span class="cm">		 * @param left {Integer ? 0} Left position of outer element</span></div><div class='line' id='LC317'><span class="cm">		 * @param top {Integer ? 0} Top position of outer element</span></div><div class='line' id='LC318'><span class="cm">		 */</span></div><div class='line' id='LC319'>		<span class="nx">setPosition</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC320'><br/></div><div class='line' id='LC321'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC322'><br/></div><div class='line' id='LC323'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__clientLeft</span> <span class="o">=</span> <span class="nx">left</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC324'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__clientTop</span> <span class="o">=</span> <span class="nx">top</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC325'><br/></div><div class='line' id='LC326'>		<span class="p">},</span></div><div class='line' id='LC327'><br/></div><div class='line' id='LC328'><br/></div><div class='line' id='LC329'>		<span class="cm">/**</span></div><div class='line' id='LC330'><span class="cm">		 * Configures the snapping (when snapping is active)</span></div><div class='line' id='LC331'><span class="cm">		 *</span></div><div class='line' id='LC332'><span class="cm">		 * @param width {Integer} Snapping width</span></div><div class='line' id='LC333'><span class="cm">		 * @param height {Integer} Snapping height</span></div><div class='line' id='LC334'><span class="cm">		 */</span></div><div class='line' id='LC335'>		<span class="nx">setSnapSize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">width</span><span class="p">,</span> <span class="nx">height</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC338'><br/></div><div class='line' id='LC339'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__snapWidth</span> <span class="o">=</span> <span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC340'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__snapHeight</span> <span class="o">=</span> <span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC341'><br/></div><div class='line' id='LC342'>		<span class="p">},</span></div><div class='line' id='LC343'><br/></div><div class='line' id='LC344'><br/></div><div class='line' id='LC345'>		<span class="cm">/**</span></div><div class='line' id='LC346'><span class="cm">		 * Activates pull-to-refresh. A special zone on the top of the list to start a list refresh whenever</span></div><div class='line' id='LC347'><span class="cm">		 * the user event is released during visibility of this zone. This was introduced by some apps on iOS like</span></div><div class='line' id='LC348'><span class="cm">		 * the official Twitter client.</span></div><div class='line' id='LC349'><span class="cm">		 *</span></div><div class='line' id='LC350'><span class="cm">		 * @param height {Integer} Height of pull-to-refresh zone on top of rendered list</span></div><div class='line' id='LC351'><span class="cm">		 * @param activateCallback {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release.</span></div><div class='line' id='LC352'><span class="cm">		 * @param deactivateCallback {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled.</span></div><div class='line' id='LC353'><span class="cm">		 * @param startCallback {Function} Callback to execute to start the real async refresh action. Call {@link #finishPullToRefresh} after finish of refresh.</span></div><div class='line' id='LC354'><span class="cm">		 */</span></div><div class='line' id='LC355'>		<span class="nx">activatePullToRefresh</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">height</span><span class="p">,</span> <span class="nx">activateCallback</span><span class="p">,</span> <span class="nx">deactivateCallback</span><span class="p">,</span> <span class="nx">startCallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC356'><br/></div><div class='line' id='LC357'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__refreshHeight</span> <span class="o">=</span> <span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC360'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__refreshActivate</span> <span class="o">=</span> <span class="nx">activateCallback</span><span class="p">;</span></div><div class='line' id='LC361'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__refreshDeactivate</span> <span class="o">=</span> <span class="nx">deactivateCallback</span><span class="p">;</span></div><div class='line' id='LC362'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__refreshStart</span> <span class="o">=</span> <span class="nx">startCallback</span><span class="p">;</span></div><div class='line' id='LC363'><br/></div><div class='line' id='LC364'>		<span class="p">},</span></div><div class='line' id='LC365'><br/></div><div class='line' id='LC366'><br/></div><div class='line' id='LC367'>		<span class="cm">/**</span></div><div class='line' id='LC368'><span class="cm">		 * Signalizes that pull-to-refresh is finished.</span></div><div class='line' id='LC369'><span class="cm">		 */</span></div><div class='line' id='LC370'>		<span class="nx">finishPullToRefresh</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC373'><br/></div><div class='line' id='LC374'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__refreshActive</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC375'>			<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__refreshDeactivate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC376'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__refreshDeactivate</span><span class="p">();</span></div><div class='line' id='LC377'>			<span class="p">}</span></div><div class='line' id='LC378'><br/></div><div class='line' id='LC379'>			<span class="nx">self</span><span class="p">.</span><span class="nx">scrollTo</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC380'><br/></div><div class='line' id='LC381'>		<span class="p">},</span></div><div class='line' id='LC382'><br/></div><div class='line' id='LC383'><br/></div><div class='line' id='LC384'>		<span class="cm">/**</span></div><div class='line' id='LC385'><span class="cm">		 * Returns the scroll position and zooming values</span></div><div class='line' id='LC386'><span class="cm">		 *</span></div><div class='line' id='LC387'><span class="cm">		 * @return {Map} `left` and `top` scroll position and `zoom` level</span></div><div class='line' id='LC388'><span class="cm">		 */</span></div><div class='line' id='LC389'>		<span class="nx">getValues</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC390'><br/></div><div class='line' id='LC391'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC392'><br/></div><div class='line' id='LC393'>			<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC394'>				<span class="nx">left</span><span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">,</span></div><div class='line' id='LC395'>				<span class="nx">top</span><span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">,</span></div><div class='line' id='LC396'>				<span class="nx">zoom</span><span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span></div><div class='line' id='LC397'>			<span class="p">};</span></div><div class='line' id='LC398'><br/></div><div class='line' id='LC399'>		<span class="p">},</span></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'><br/></div><div class='line' id='LC402'>		<span class="cm">/**</span></div><div class='line' id='LC403'><span class="cm">		 * Returns the maximum scroll values</span></div><div class='line' id='LC404'><span class="cm">		 *</span></div><div class='line' id='LC405'><span class="cm">		 * @return {Map} `left` and `top` maximum scroll values</span></div><div class='line' id='LC406'><span class="cm">		 */</span></div><div class='line' id='LC407'>		<span class="nx">getScrollMax</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC408'><br/></div><div class='line' id='LC409'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC410'><br/></div><div class='line' id='LC411'>			<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC412'>				<span class="nx">left</span><span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollLeft</span><span class="p">,</span></div><div class='line' id='LC413'>				<span class="nx">top</span><span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollTop</span></div><div class='line' id='LC414'>			<span class="p">};</span></div><div class='line' id='LC415'><br/></div><div class='line' id='LC416'>		<span class="p">},</span></div><div class='line' id='LC417'><br/></div><div class='line' id='LC418'><br/></div><div class='line' id='LC419'>		<span class="cm">/**</span></div><div class='line' id='LC420'><span class="cm">		 * Zooms to the given level. Supports optional animation. Zooms</span></div><div class='line' id='LC421'><span class="cm">		 * the center when no coordinates are given.</span></div><div class='line' id='LC422'><span class="cm">		 *</span></div><div class='line' id='LC423'><span class="cm">		 * @param level {Number} Level to zoom to</span></div><div class='line' id='LC424'><span class="cm">		 * @param animate {Boolean ? false} Whether to use animation</span></div><div class='line' id='LC425'><span class="cm">		 * @param originLeft {Number ? null} Zoom in at given left coordinate</span></div><div class='line' id='LC426'><span class="cm">		 * @param originTop {Number ? null} Zoom in at given top coordinate</span></div><div class='line' id='LC427'><span class="cm">		 */</span></div><div class='line' id='LC428'>		<span class="nx">zoomTo</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">level</span><span class="p">,</span> <span class="nx">animate</span><span class="p">,</span> <span class="nx">originLeft</span><span class="p">,</span> <span class="nx">originTop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC429'><br/></div><div class='line' id='LC430'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC431'><br/></div><div class='line' id='LC432'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">zooming</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC433'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Zooming is not enabled!&quot;</span><span class="p">);</span></div><div class='line' id='LC434'>			<span class="p">}</span></div><div class='line' id='LC435'><br/></div><div class='line' id='LC436'>			<span class="c1">// Stop deceleration</span></div><div class='line' id='LC437'>			<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isDecelerating</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC438'>				<span class="nx">core</span><span class="p">.</span><span class="nx">effect</span><span class="p">.</span><span class="nx">Animate</span><span class="p">.</span><span class="nx">stop</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isDecelerating</span><span class="p">);</span></div><div class='line' id='LC439'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__isDecelerating</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC440'>			<span class="p">}</span></div><div class='line' id='LC441'><br/></div><div class='line' id='LC442'>			<span class="kd">var</span> <span class="nx">oldLevel</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span><span class="p">;</span></div><div class='line' id='LC443'><br/></div><div class='line' id='LC444'>			<span class="c1">// Normalize input origin to center of viewport if not defined</span></div><div class='line' id='LC445'>			<span class="k">if</span> <span class="p">(</span><span class="nx">originLeft</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC446'>				<span class="nx">originLeft</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientWidth</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC447'>			<span class="p">}</span></div><div class='line' id='LC448'><br/></div><div class='line' id='LC449'>			<span class="k">if</span> <span class="p">(</span><span class="nx">originTop</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC450'>				<span class="nx">originTop</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientHeight</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC451'>			<span class="p">}</span></div><div class='line' id='LC452'><br/></div><div class='line' id='LC453'>			<span class="c1">// Limit level according to configuration</span></div><div class='line' id='LC454'>			<span class="nx">level</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">level</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">maxZoom</span><span class="p">),</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">minZoom</span><span class="p">);</span></div><div class='line' id='LC455'><br/></div><div class='line' id='LC456'>			<span class="c1">// Recompute maximum values while temporary tweaking maximum scroll ranges</span></div><div class='line' id='LC457'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__computeScrollMax</span><span class="p">(</span><span class="nx">level</span><span class="p">);</span></div><div class='line' id='LC458'><br/></div><div class='line' id='LC459'>			<span class="c1">// Recompute left and top coordinates based on new zoom level</span></div><div class='line' id='LC460'>			<span class="kd">var</span> <span class="nx">left</span> <span class="o">=</span> <span class="p">((</span><span class="nx">originLeft</span> <span class="o">+</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">)</span> <span class="o">*</span> <span class="nx">level</span> <span class="o">/</span> <span class="nx">oldLevel</span><span class="p">)</span> <span class="o">-</span> <span class="nx">originLeft</span><span class="p">;</span></div><div class='line' id='LC461'>			<span class="kd">var</span> <span class="nx">top</span> <span class="o">=</span> <span class="p">((</span><span class="nx">originTop</span> <span class="o">+</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">)</span> <span class="o">*</span> <span class="nx">level</span> <span class="o">/</span> <span class="nx">oldLevel</span><span class="p">)</span> <span class="o">-</span> <span class="nx">originTop</span><span class="p">;</span></div><div class='line' id='LC462'><br/></div><div class='line' id='LC463'>			<span class="c1">// Limit x-axis</span></div><div class='line' id='LC464'>			<span class="k">if</span> <span class="p">(</span><span class="nx">left</span> <span class="o">&gt;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollLeft</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC465'>				<span class="nx">left</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollLeft</span><span class="p">;</span></div><div class='line' id='LC466'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">left</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC467'>				<span class="nx">left</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC468'>			<span class="p">}</span></div><div class='line' id='LC469'><br/></div><div class='line' id='LC470'>			<span class="c1">// Limit y-axis</span></div><div class='line' id='LC471'>			<span class="k">if</span> <span class="p">(</span><span class="nx">top</span> <span class="o">&gt;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollTop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC472'>				<span class="nx">top</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollTop</span><span class="p">;</span></div><div class='line' id='LC473'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">top</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC474'>				<span class="nx">top</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC475'>			<span class="p">}</span></div><div class='line' id='LC476'><br/></div><div class='line' id='LC477'>			<span class="c1">// Push values out</span></div><div class='line' id='LC478'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__publish</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">,</span> <span class="nx">level</span><span class="p">,</span> <span class="nx">animate</span><span class="p">);</span></div><div class='line' id='LC479'><br/></div><div class='line' id='LC480'>		<span class="p">},</span></div><div class='line' id='LC481'><br/></div><div class='line' id='LC482'><br/></div><div class='line' id='LC483'>		<span class="cm">/**</span></div><div class='line' id='LC484'><span class="cm">		 * Zooms the content by the given factor.</span></div><div class='line' id='LC485'><span class="cm">		 *</span></div><div class='line' id='LC486'><span class="cm">		 * @param factor {Number} Zoom by given factor</span></div><div class='line' id='LC487'><span class="cm">		 * @param animate {Boolean ? false} Whether to use animation</span></div><div class='line' id='LC488'><span class="cm">		 * @param originLeft {Number ? 0} Zoom in at given left coordinate</span></div><div class='line' id='LC489'><span class="cm">		 * @param originTop {Number ? 0} Zoom in at given top coordinate</span></div><div class='line' id='LC490'><span class="cm">		 */</span></div><div class='line' id='LC491'>		<span class="nx">zoomBy</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">factor</span><span class="p">,</span> <span class="nx">animate</span><span class="p">,</span> <span class="nx">originLeft</span><span class="p">,</span> <span class="nx">originTop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC492'><br/></div><div class='line' id='LC493'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC494'><br/></div><div class='line' id='LC495'>			<span class="nx">self</span><span class="p">.</span><span class="nx">zoomTo</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span> <span class="o">*</span> <span class="nx">factor</span><span class="p">,</span> <span class="nx">animate</span><span class="p">,</span> <span class="nx">originLeft</span><span class="p">,</span> <span class="nx">originTop</span><span class="p">);</span></div><div class='line' id='LC496'><br/></div><div class='line' id='LC497'>		<span class="p">},</span></div><div class='line' id='LC498'><br/></div><div class='line' id='LC499'><br/></div><div class='line' id='LC500'>		<span class="cm">/**</span></div><div class='line' id='LC501'><span class="cm">		 * Scrolls to the given position. Respect limitations and snapping automatically.</span></div><div class='line' id='LC502'><span class="cm">		 *</span></div><div class='line' id='LC503'><span class="cm">		 * @param left {Number?null} Horizontal scroll position, keeps current if value is &lt;code&gt;null&lt;/code&gt;</span></div><div class='line' id='LC504'><span class="cm">		 * @param top {Number?null} Vertical scroll position, keeps current if value is &lt;code&gt;null&lt;/code&gt;</span></div><div class='line' id='LC505'><span class="cm">		 * @param animate {Boolean?false} Whether the scrolling should happen using an animation</span></div><div class='line' id='LC506'><span class="cm">		 * @param zoom {Number?null} Zoom level to go to</span></div><div class='line' id='LC507'><span class="cm">		 */</span></div><div class='line' id='LC508'>		<span class="nx">scrollTo</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">,</span> <span class="nx">animate</span><span class="p">,</span> <span class="nx">zoom</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC509'><br/></div><div class='line' id='LC510'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC511'><br/></div><div class='line' id='LC512'>			<span class="c1">// Stop deceleration</span></div><div class='line' id='LC513'>			<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isDecelerating</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC514'>				<span class="nx">core</span><span class="p">.</span><span class="nx">effect</span><span class="p">.</span><span class="nx">Animate</span><span class="p">.</span><span class="nx">stop</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isDecelerating</span><span class="p">);</span></div><div class='line' id='LC515'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__isDecelerating</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC516'>			<span class="p">}</span></div><div class='line' id='LC517'><br/></div><div class='line' id='LC518'>			<span class="c1">// Correct coordinates based on new zoom level</span></div><div class='line' id='LC519'>			<span class="k">if</span> <span class="p">(</span><span class="nx">zoom</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">zoom</span> <span class="o">!==</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC520'><br/></div><div class='line' id='LC521'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">zooming</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC522'>					<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Zooming is not enabled!&quot;</span><span class="p">);</span></div><div class='line' id='LC523'>				<span class="p">}</span></div><div class='line' id='LC524'><br/></div><div class='line' id='LC525'>				<span class="nx">left</span> <span class="o">*=</span> <span class="nx">zoom</span><span class="p">;</span></div><div class='line' id='LC526'>				<span class="nx">top</span> <span class="o">*=</span> <span class="nx">zoom</span><span class="p">;</span></div><div class='line' id='LC527'><br/></div><div class='line' id='LC528'>				<span class="c1">// Recompute maximum values while temporary tweaking maximum scroll ranges</span></div><div class='line' id='LC529'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__computeScrollMax</span><span class="p">(</span><span class="nx">zoom</span><span class="p">);</span></div><div class='line' id='LC530'><br/></div><div class='line' id='LC531'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC532'><br/></div><div class='line' id='LC533'>				<span class="c1">// Keep zoom when not defined</span></div><div class='line' id='LC534'>				<span class="nx">zoom</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span><span class="p">;</span></div><div class='line' id='LC535'><br/></div><div class='line' id='LC536'>			<span class="p">}</span></div><div class='line' id='LC537'><br/></div><div class='line' id='LC538'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollingX</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC539'><br/></div><div class='line' id='LC540'>				<span class="nx">left</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">;</span></div><div class='line' id='LC541'><br/></div><div class='line' id='LC542'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC543'><br/></div><div class='line' id='LC544'>				<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">paging</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC545'>					<span class="nx">left</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">left</span> <span class="o">/</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientWidth</span><span class="p">)</span> <span class="o">*</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientWidth</span><span class="p">;</span></div><div class='line' id='LC546'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">snapping</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC547'>					<span class="nx">left</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">left</span> <span class="o">/</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__snapWidth</span><span class="p">)</span> <span class="o">*</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__snapWidth</span><span class="p">;</span></div><div class='line' id='LC548'>				<span class="p">}</span></div><div class='line' id='LC549'><br/></div><div class='line' id='LC550'>			<span class="p">}</span></div><div class='line' id='LC551'><br/></div><div class='line' id='LC552'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollingY</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC553'><br/></div><div class='line' id='LC554'>				<span class="nx">top</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">;</span></div><div class='line' id='LC555'><br/></div><div class='line' id='LC556'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC557'><br/></div><div class='line' id='LC558'>				<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">paging</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC559'>					<span class="nx">top</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">top</span> <span class="o">/</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientHeight</span><span class="p">)</span> <span class="o">*</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientHeight</span><span class="p">;</span></div><div class='line' id='LC560'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">snapping</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC561'>					<span class="nx">top</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">top</span> <span class="o">/</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__snapHeight</span><span class="p">)</span> <span class="o">*</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__snapHeight</span><span class="p">;</span></div><div class='line' id='LC562'>				<span class="p">}</span></div><div class='line' id='LC563'><br/></div><div class='line' id='LC564'>			<span class="p">}</span></div><div class='line' id='LC565'><br/></div><div class='line' id='LC566'>			<span class="c1">// Limit for allowed ranges</span></div><div class='line' id='LC567'>			<span class="nx">left</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollLeft</span><span class="p">,</span> <span class="nx">left</span><span class="p">),</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC568'>			<span class="nx">top</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollTop</span><span class="p">,</span> <span class="nx">top</span><span class="p">),</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC569'><br/></div><div class='line' id='LC570'>			<span class="c1">// Don&#39;t animate when no change detected, still call publish to make sure</span></div><div class='line' id='LC571'>			<span class="c1">// that rendered position is really in-sync with internal data</span></div><div class='line' id='LC572'>			<span class="k">if</span> <span class="p">(</span><span class="nx">left</span> <span class="o">===</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span> <span class="o">&amp;&amp;</span> <span class="nx">top</span> <span class="o">===</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC573'>				<span class="nx">animate</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC574'>			<span class="p">}</span></div><div class='line' id='LC575'><br/></div><div class='line' id='LC576'>			<span class="c1">// Publish new values</span></div><div class='line' id='LC577'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__publish</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">,</span> <span class="nx">zoom</span><span class="p">,</span> <span class="nx">animate</span><span class="p">);</span></div><div class='line' id='LC578'><br/></div><div class='line' id='LC579'>		<span class="p">},</span></div><div class='line' id='LC580'><br/></div><div class='line' id='LC581'><br/></div><div class='line' id='LC582'>		<span class="cm">/**</span></div><div class='line' id='LC583'><span class="cm">		 * Scroll by the given offset</span></div><div class='line' id='LC584'><span class="cm">		 *</span></div><div class='line' id='LC585'><span class="cm">		 * @param left {Number ? 0} Scroll x-axis by given offset</span></div><div class='line' id='LC586'><span class="cm">		 * @param top {Number ? 0} Scroll x-axis by given offset</span></div><div class='line' id='LC587'><span class="cm">		 * @param animate {Boolean ? false} Whether to animate the given change</span></div><div class='line' id='LC588'><span class="cm">		 */</span></div><div class='line' id='LC589'>		<span class="nx">scrollBy</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">,</span> <span class="nx">animate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC590'><br/></div><div class='line' id='LC591'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC592'><br/></div><div class='line' id='LC593'>			<span class="kd">var</span> <span class="nx">startLeft</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__isAnimating</span> <span class="o">?</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scheduledLeft</span> <span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">;</span></div><div class='line' id='LC594'>			<span class="kd">var</span> <span class="nx">startTop</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__isAnimating</span> <span class="o">?</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scheduledTop</span> <span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">;</span></div><div class='line' id='LC595'><br/></div><div class='line' id='LC596'>			<span class="nx">self</span><span class="p">.</span><span class="nx">scrollTo</span><span class="p">(</span><span class="nx">startLeft</span> <span class="o">+</span> <span class="p">(</span><span class="nx">left</span> <span class="o">||</span> <span class="mi">0</span><span class="p">),</span> <span class="nx">startTop</span> <span class="o">+</span> <span class="p">(</span><span class="nx">top</span> <span class="o">||</span> <span class="mi">0</span><span class="p">),</span> <span class="nx">animate</span><span class="p">);</span></div><div class='line' id='LC597'><br/></div><div class='line' id='LC598'>		<span class="p">},</span></div><div class='line' id='LC599'><br/></div><div class='line' id='LC600'><br/></div><div class='line' id='LC601'><br/></div><div class='line' id='LC602'>		<span class="cm">/*</span></div><div class='line' id='LC603'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC604'><span class="cm">			EVENT CALLBACKS</span></div><div class='line' id='LC605'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC606'><span class="cm">		*/</span></div><div class='line' id='LC607'><br/></div><div class='line' id='LC608'>		<span class="cm">/**</span></div><div class='line' id='LC609'><span class="cm">		 * Mouse wheel handler for zooming support</span></div><div class='line' id='LC610'><span class="cm">		 */</span></div><div class='line' id='LC611'>		<span class="nx">doMouseZoom</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">wheelDelta</span><span class="p">,</span> <span class="nx">timeStamp</span><span class="p">,</span> <span class="nx">pageX</span><span class="p">,</span> <span class="nx">pageY</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC612'><br/></div><div class='line' id='LC613'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC614'>			<span class="kd">var</span> <span class="nx">change</span> <span class="o">=</span> <span class="nx">wheelDelta</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="mf">0.97</span> <span class="o">:</span> <span class="mf">1.03</span><span class="p">;</span></div><div class='line' id='LC615'><br/></div><div class='line' id='LC616'>			<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">zoomTo</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span> <span class="o">*</span> <span class="nx">change</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">pageX</span> <span class="o">-</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientLeft</span><span class="p">,</span> <span class="nx">pageY</span> <span class="o">-</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientTop</span><span class="p">);</span></div><div class='line' id='LC617'><br/></div><div class='line' id='LC618'>		<span class="p">},</span></div><div class='line' id='LC619'><br/></div><div class='line' id='LC620'><br/></div><div class='line' id='LC621'>		<span class="cm">/**</span></div><div class='line' id='LC622'><span class="cm">		 * Touch start handler for scrolling support</span></div><div class='line' id='LC623'><span class="cm">		 */</span></div><div class='line' id='LC624'>		<span class="nx">doTouchStart</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">touches</span><span class="p">,</span> <span class="nx">timeStamp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC625'><br/></div><div class='line' id='LC626'>			<span class="c1">// Array-like check is enough here</span></div><div class='line' id='LC627'>			<span class="k">if</span> <span class="p">(</span><span class="nx">touches</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC628'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Invalid touch list: &quot;</span> <span class="o">+</span> <span class="nx">touches</span><span class="p">);</span></div><div class='line' id='LC629'>			<span class="p">}</span></div><div class='line' id='LC630'><br/></div><div class='line' id='LC631'>			<span class="k">if</span> <span class="p">(</span><span class="nx">timeStamp</span> <span class="k">instanceof</span> <span class="nb">Date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC632'>				<span class="nx">timeStamp</span> <span class="o">=</span> <span class="nx">timeStamp</span><span class="p">.</span><span class="nx">valueOf</span><span class="p">();</span></div><div class='line' id='LC633'>			<span class="p">}</span></div><div class='line' id='LC634'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">timeStamp</span> <span class="o">!==</span> <span class="s2">&quot;number&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC635'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Invalid timestamp value: &quot;</span> <span class="o">+</span> <span class="nx">timeStamp</span><span class="p">);</span></div><div class='line' id='LC636'>			<span class="p">}</span></div><div class='line' id='LC637'><br/></div><div class='line' id='LC638'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC639'><br/></div><div class='line' id='LC640'>			<span class="c1">// Reset interruptedAnimation flag</span></div><div class='line' id='LC641'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__interruptedAnimation</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC642'><br/></div><div class='line' id='LC643'>			<span class="c1">// Stop deceleration</span></div><div class='line' id='LC644'>			<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isDecelerating</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC645'>				<span class="nx">core</span><span class="p">.</span><span class="nx">effect</span><span class="p">.</span><span class="nx">Animate</span><span class="p">.</span><span class="nx">stop</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isDecelerating</span><span class="p">);</span></div><div class='line' id='LC646'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__isDecelerating</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC647'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__interruptedAnimation</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC648'>			<span class="p">}</span></div><div class='line' id='LC649'><br/></div><div class='line' id='LC650'>			<span class="c1">// Stop animation</span></div><div class='line' id='LC651'>			<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isAnimating</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC652'>				<span class="nx">core</span><span class="p">.</span><span class="nx">effect</span><span class="p">.</span><span class="nx">Animate</span><span class="p">.</span><span class="nx">stop</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isAnimating</span><span class="p">);</span></div><div class='line' id='LC653'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__isAnimating</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC654'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__interruptedAnimation</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC655'>			<span class="p">}</span></div><div class='line' id='LC656'><br/></div><div class='line' id='LC657'>			<span class="c1">// Use center point when dealing with two fingers</span></div><div class='line' id='LC658'>			<span class="kd">var</span> <span class="nx">currentTouchLeft</span><span class="p">,</span> <span class="nx">currentTouchTop</span><span class="p">;</span></div><div class='line' id='LC659'>			<span class="kd">var</span> <span class="nx">isSingleTouch</span> <span class="o">=</span> <span class="nx">touches</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC660'>			<span class="k">if</span> <span class="p">(</span><span class="nx">isSingleTouch</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC661'>				<span class="nx">currentTouchLeft</span> <span class="o">=</span> <span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">pageX</span><span class="p">;</span></div><div class='line' id='LC662'>				<span class="nx">currentTouchTop</span> <span class="o">=</span> <span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">pageY</span><span class="p">;</span></div><div class='line' id='LC663'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC664'>				<span class="nx">currentTouchLeft</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">pageX</span> <span class="o">+</span> <span class="nx">touches</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">pageX</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC665'>				<span class="nx">currentTouchTop</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">pageY</span> <span class="o">+</span> <span class="nx">touches</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">pageY</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC666'>			<span class="p">}</span></div><div class='line' id='LC667'><br/></div><div class='line' id='LC668'>			<span class="c1">// Store initial positions</span></div><div class='line' id='LC669'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__initialTouchLeft</span> <span class="o">=</span> <span class="nx">currentTouchLeft</span><span class="p">;</span></div><div class='line' id='LC670'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__initialTouchTop</span> <span class="o">=</span> <span class="nx">currentTouchTop</span><span class="p">;</span></div><div class='line' id='LC671'><br/></div><div class='line' id='LC672'>			<span class="c1">// Store current zoom level</span></div><div class='line' id='LC673'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevelStart</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span><span class="p">;</span></div><div class='line' id='LC674'><br/></div><div class='line' id='LC675'>			<span class="c1">// Store initial touch positions</span></div><div class='line' id='LC676'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__lastTouchLeft</span> <span class="o">=</span> <span class="nx">currentTouchLeft</span><span class="p">;</span></div><div class='line' id='LC677'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__lastTouchTop</span> <span class="o">=</span> <span class="nx">currentTouchTop</span><span class="p">;</span></div><div class='line' id='LC678'><br/></div><div class='line' id='LC679'>			<span class="c1">// Store initial move time stamp</span></div><div class='line' id='LC680'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__lastTouchMove</span> <span class="o">=</span> <span class="nx">timeStamp</span><span class="p">;</span></div><div class='line' id='LC681'><br/></div><div class='line' id='LC682'>			<span class="c1">// Reset initial scale</span></div><div class='line' id='LC683'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__lastScale</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC684'><br/></div><div class='line' id='LC685'>			<span class="c1">// Reset locking flags</span></div><div class='line' id='LC686'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__enableScrollX</span> <span class="o">=</span> <span class="o">!</span><span class="nx">isSingleTouch</span> <span class="o">&amp;&amp;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollingX</span><span class="p">;</span></div><div class='line' id='LC687'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__enableScrollY</span> <span class="o">=</span> <span class="o">!</span><span class="nx">isSingleTouch</span> <span class="o">&amp;&amp;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollingY</span><span class="p">;</span></div><div class='line' id='LC688'><br/></div><div class='line' id='LC689'>			<span class="c1">// Reset tracking flag</span></div><div class='line' id='LC690'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__isTracking</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC691'><br/></div><div class='line' id='LC692'>			<span class="c1">// Reset deceleration complete flag</span></div><div class='line' id='LC693'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__didDecelerationComplete</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC694'><br/></div><div class='line' id='LC695'>			<span class="c1">// Dragging starts directly with two fingers, otherwise lazy with an offset</span></div><div class='line' id='LC696'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__isDragging</span> <span class="o">=</span> <span class="o">!</span><span class="nx">isSingleTouch</span><span class="p">;</span></div><div class='line' id='LC697'><br/></div><div class='line' id='LC698'>			<span class="c1">// Some features are disabled in multi touch scenarios</span></div><div class='line' id='LC699'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__isSingleTouch</span> <span class="o">=</span> <span class="nx">isSingleTouch</span><span class="p">;</span></div><div class='line' id='LC700'><br/></div><div class='line' id='LC701'>			<span class="c1">// Clearing data structure</span></div><div class='line' id='LC702'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__positions</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC703'><br/></div><div class='line' id='LC704'>		<span class="p">},</span></div><div class='line' id='LC705'><br/></div><div class='line' id='LC706'><br/></div><div class='line' id='LC707'>		<span class="cm">/**</span></div><div class='line' id='LC708'><span class="cm">		 * Touch move handler for scrolling support</span></div><div class='line' id='LC709'><span class="cm">		 */</span></div><div class='line' id='LC710'>		<span class="nx">doTouchMove</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">touches</span><span class="p">,</span> <span class="nx">timeStamp</span><span class="p">,</span> <span class="nx">scale</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC711'><br/></div><div class='line' id='LC712'>			<span class="c1">// Array-like check is enough here</span></div><div class='line' id='LC713'>			<span class="k">if</span> <span class="p">(</span><span class="nx">touches</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC714'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Invalid touch list: &quot;</span> <span class="o">+</span> <span class="nx">touches</span><span class="p">);</span></div><div class='line' id='LC715'>			<span class="p">}</span></div><div class='line' id='LC716'><br/></div><div class='line' id='LC717'>			<span class="k">if</span> <span class="p">(</span><span class="nx">timeStamp</span> <span class="k">instanceof</span> <span class="nb">Date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC718'>				<span class="nx">timeStamp</span> <span class="o">=</span> <span class="nx">timeStamp</span><span class="p">.</span><span class="nx">valueOf</span><span class="p">();</span></div><div class='line' id='LC719'>			<span class="p">}</span></div><div class='line' id='LC720'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">timeStamp</span> <span class="o">!==</span> <span class="s2">&quot;number&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC721'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Invalid timestamp value: &quot;</span> <span class="o">+</span> <span class="nx">timeStamp</span><span class="p">);</span></div><div class='line' id='LC722'>			<span class="p">}</span></div><div class='line' id='LC723'><br/></div><div class='line' id='LC724'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC725'><br/></div><div class='line' id='LC726'>			<span class="c1">// Ignore event when tracking is not enabled (event might be outside of element)</span></div><div class='line' id='LC727'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isTracking</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC728'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC729'>			<span class="p">}</span></div><div class='line' id='LC730'><br/></div><div class='line' id='LC731'><br/></div><div class='line' id='LC732'>			<span class="kd">var</span> <span class="nx">currentTouchLeft</span><span class="p">,</span> <span class="nx">currentTouchTop</span><span class="p">;</span></div><div class='line' id='LC733'><br/></div><div class='line' id='LC734'>			<span class="c1">// Compute move based around of center of fingers</span></div><div class='line' id='LC735'>			<span class="k">if</span> <span class="p">(</span><span class="nx">touches</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC736'>				<span class="nx">currentTouchLeft</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">pageX</span> <span class="o">+</span> <span class="nx">touches</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">pageX</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC737'>				<span class="nx">currentTouchTop</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">pageY</span> <span class="o">+</span> <span class="nx">touches</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">pageY</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC738'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC739'>				<span class="nx">currentTouchLeft</span> <span class="o">=</span> <span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">pageX</span><span class="p">;</span></div><div class='line' id='LC740'>				<span class="nx">currentTouchTop</span> <span class="o">=</span> <span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">pageY</span><span class="p">;</span></div><div class='line' id='LC741'>			<span class="p">}</span></div><div class='line' id='LC742'><br/></div><div class='line' id='LC743'>			<span class="kd">var</span> <span class="nx">positions</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__positions</span><span class="p">;</span></div><div class='line' id='LC744'><br/></div><div class='line' id='LC745'>			<span class="c1">// Are we already is dragging mode?</span></div><div class='line' id='LC746'>			<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isDragging</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC747'><br/></div><div class='line' id='LC748'>				<span class="c1">// Compute move distance</span></div><div class='line' id='LC749'>				<span class="kd">var</span> <span class="nx">moveX</span> <span class="o">=</span> <span class="nx">currentTouchLeft</span> <span class="o">-</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__lastTouchLeft</span><span class="p">;</span></div><div class='line' id='LC750'>				<span class="kd">var</span> <span class="nx">moveY</span> <span class="o">=</span> <span class="nx">currentTouchTop</span> <span class="o">-</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__lastTouchTop</span><span class="p">;</span></div><div class='line' id='LC751'><br/></div><div class='line' id='LC752'>				<span class="c1">// Read previous scroll position and zooming</span></div><div class='line' id='LC753'>				<span class="kd">var</span> <span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">;</span></div><div class='line' id='LC754'>				<span class="kd">var</span> <span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">;</span></div><div class='line' id='LC755'>				<span class="kd">var</span> <span class="nx">level</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span><span class="p">;</span></div><div class='line' id='LC756'><br/></div><div class='line' id='LC757'>				<span class="c1">// Work with scaling</span></div><div class='line' id='LC758'>				<span class="k">if</span> <span class="p">(</span><span class="nx">scale</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">zooming</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC759'><br/></div><div class='line' id='LC760'>					<span class="kd">var</span> <span class="nx">oldLevel</span> <span class="o">=</span> <span class="nx">level</span><span class="p">;</span></div><div class='line' id='LC761'><br/></div><div class='line' id='LC762'>					<span class="c1">// Recompute level based on previous scale and new scale</span></div><div class='line' id='LC763'>					<span class="nx">level</span> <span class="o">=</span> <span class="nx">level</span> <span class="o">/</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__lastScale</span> <span class="o">*</span> <span class="nx">scale</span><span class="p">;</span></div><div class='line' id='LC764'><br/></div><div class='line' id='LC765'>					<span class="c1">// Limit level according to configuration</span></div><div class='line' id='LC766'>					<span class="nx">level</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">level</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">maxZoom</span><span class="p">),</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">minZoom</span><span class="p">);</span></div><div class='line' id='LC767'><br/></div><div class='line' id='LC768'>					<span class="c1">// Only do further compution when change happened</span></div><div class='line' id='LC769'>					<span class="k">if</span> <span class="p">(</span><span class="nx">oldLevel</span> <span class="o">!==</span> <span class="nx">level</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC770'><br/></div><div class='line' id='LC771'>						<span class="c1">// Compute relative event position to container</span></div><div class='line' id='LC772'>						<span class="kd">var</span> <span class="nx">currentTouchLeftRel</span> <span class="o">=</span> <span class="nx">currentTouchLeft</span> <span class="o">-</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientLeft</span><span class="p">;</span></div><div class='line' id='LC773'>						<span class="kd">var</span> <span class="nx">currentTouchTopRel</span> <span class="o">=</span> <span class="nx">currentTouchTop</span> <span class="o">-</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientTop</span><span class="p">;</span></div><div class='line' id='LC774'><br/></div><div class='line' id='LC775'>						<span class="c1">// Recompute left and top coordinates based on new zoom level</span></div><div class='line' id='LC776'>						<span class="nx">scrollLeft</span> <span class="o">=</span> <span class="p">((</span><span class="nx">currentTouchLeftRel</span> <span class="o">+</span> <span class="nx">scrollLeft</span><span class="p">)</span> <span class="o">*</span> <span class="nx">level</span> <span class="o">/</span> <span class="nx">oldLevel</span><span class="p">)</span> <span class="o">-</span> <span class="nx">currentTouchLeftRel</span><span class="p">;</span></div><div class='line' id='LC777'>						<span class="nx">scrollTop</span> <span class="o">=</span> <span class="p">((</span><span class="nx">currentTouchTopRel</span> <span class="o">+</span> <span class="nx">scrollTop</span><span class="p">)</span> <span class="o">*</span> <span class="nx">level</span> <span class="o">/</span> <span class="nx">oldLevel</span><span class="p">)</span> <span class="o">-</span> <span class="nx">currentTouchTopRel</span><span class="p">;</span></div><div class='line' id='LC778'><br/></div><div class='line' id='LC779'>						<span class="c1">// Recompute max scroll values</span></div><div class='line' id='LC780'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__computeScrollMax</span><span class="p">(</span><span class="nx">level</span><span class="p">);</span></div><div class='line' id='LC781'><br/></div><div class='line' id='LC782'>					<span class="p">}</span></div><div class='line' id='LC783'>				<span class="p">}</span></div><div class='line' id='LC784'><br/></div><div class='line' id='LC785'>				<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__enableScrollX</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC786'><br/></div><div class='line' id='LC787'>					<span class="nx">scrollLeft</span> <span class="o">-=</span> <span class="nx">moveX</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">speedMultiplier</span><span class="p">;</span></div><div class='line' id='LC788'>					<span class="kd">var</span> <span class="nx">maxScrollLeft</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollLeft</span><span class="p">;</span></div><div class='line' id='LC789'><br/></div><div class='line' id='LC790'>					<span class="k">if</span> <span class="p">(</span><span class="nx">scrollLeft</span> <span class="o">&gt;</span> <span class="nx">maxScrollLeft</span> <span class="o">||</span> <span class="nx">scrollLeft</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC791'><br/></div><div class='line' id='LC792'>						<span class="c1">// Slow down on the edges</span></div><div class='line' id='LC793'>						<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">bouncing</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC794'><br/></div><div class='line' id='LC795'>							<span class="nx">scrollLeft</span> <span class="o">+=</span> <span class="p">(</span><span class="nx">moveX</span> <span class="o">/</span> <span class="mi">2</span>  <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">speedMultiplier</span><span class="p">);</span></div><div class='line' id='LC796'><br/></div><div class='line' id='LC797'>						<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">scrollLeft</span> <span class="o">&gt;</span> <span class="nx">maxScrollLeft</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC798'><br/></div><div class='line' id='LC799'>							<span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">maxScrollLeft</span><span class="p">;</span></div><div class='line' id='LC800'><br/></div><div class='line' id='LC801'>						<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC802'><br/></div><div class='line' id='LC803'>							<span class="nx">scrollLeft</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC804'><br/></div><div class='line' id='LC805'>						<span class="p">}</span></div><div class='line' id='LC806'>					<span class="p">}</span></div><div class='line' id='LC807'>				<span class="p">}</span></div><div class='line' id='LC808'><br/></div><div class='line' id='LC809'>				<span class="c1">// Compute new vertical scroll position</span></div><div class='line' id='LC810'>				<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__enableScrollY</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC811'><br/></div><div class='line' id='LC812'>					<span class="nx">scrollTop</span> <span class="o">-=</span> <span class="nx">moveY</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">speedMultiplier</span><span class="p">;</span></div><div class='line' id='LC813'>					<span class="kd">var</span> <span class="nx">maxScrollTop</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollTop</span><span class="p">;</span></div><div class='line' id='LC814'><br/></div><div class='line' id='LC815'>					<span class="k">if</span> <span class="p">(</span><span class="nx">scrollTop</span> <span class="o">&gt;</span> <span class="nx">maxScrollTop</span> <span class="o">||</span> <span class="nx">scrollTop</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC816'><br/></div><div class='line' id='LC817'>						<span class="c1">// Slow down on the edges</span></div><div class='line' id='LC818'>						<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">bouncing</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC819'><br/></div><div class='line' id='LC820'>							<span class="nx">scrollTop</span> <span class="o">+=</span> <span class="p">(</span><span class="nx">moveY</span> <span class="o">/</span> <span class="mi">2</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">speedMultiplier</span><span class="p">);</span></div><div class='line' id='LC821'><br/></div><div class='line' id='LC822'>							<span class="c1">// Support pull-to-refresh (only when only y is scrollable)</span></div><div class='line' id='LC823'>							<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">__enableScrollX</span> <span class="o">&amp;&amp;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__refreshHeight</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC824'><br/></div><div class='line' id='LC825'>								<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">__refreshActive</span> <span class="o">&amp;&amp;</span> <span class="nx">scrollTop</span> <span class="o">&lt;=</span> <span class="o">-</span><span class="nx">self</span><span class="p">.</span><span class="nx">__refreshHeight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC826'><br/></div><div class='line' id='LC827'>									<span class="nx">self</span><span class="p">.</span><span class="nx">__refreshActive</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC828'>									<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__refreshActivate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC829'>										<span class="nx">self</span><span class="p">.</span><span class="nx">__refreshActivate</span><span class="p">();</span></div><div class='line' id='LC830'>									<span class="p">}</span></div><div class='line' id='LC831'><br/></div><div class='line' id='LC832'>								<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__refreshActive</span> <span class="o">&amp;&amp;</span> <span class="nx">scrollTop</span> <span class="o">&gt;</span> <span class="o">-</span><span class="nx">self</span><span class="p">.</span><span class="nx">__refreshHeight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC833'><br/></div><div class='line' id='LC834'>									<span class="nx">self</span><span class="p">.</span><span class="nx">__refreshActive</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC835'>									<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__refreshDeactivate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC836'>										<span class="nx">self</span><span class="p">.</span><span class="nx">__refreshDeactivate</span><span class="p">();</span></div><div class='line' id='LC837'>									<span class="p">}</span></div><div class='line' id='LC838'><br/></div><div class='line' id='LC839'>								<span class="p">}</span></div><div class='line' id='LC840'>							<span class="p">}</span></div><div class='line' id='LC841'><br/></div><div class='line' id='LC842'>						<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">scrollTop</span> <span class="o">&gt;</span> <span class="nx">maxScrollTop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC843'><br/></div><div class='line' id='LC844'>							<span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">maxScrollTop</span><span class="p">;</span></div><div class='line' id='LC845'><br/></div><div class='line' id='LC846'>						<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC847'><br/></div><div class='line' id='LC848'>							<span class="nx">scrollTop</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC849'><br/></div><div class='line' id='LC850'>						<span class="p">}</span></div><div class='line' id='LC851'>					<span class="p">}</span></div><div class='line' id='LC852'>				<span class="p">}</span></div><div class='line' id='LC853'><br/></div><div class='line' id='LC854'>				<span class="c1">// Keep list from growing infinitely (holding min 10, max 20 measure points)</span></div><div class='line' id='LC855'>				<span class="k">if</span> <span class="p">(</span><span class="nx">positions</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">60</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC856'>					<span class="nx">positions</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">30</span><span class="p">);</span></div><div class='line' id='LC857'>				<span class="p">}</span></div><div class='line' id='LC858'><br/></div><div class='line' id='LC859'>				<span class="c1">// Track scroll movement for decleration</span></div><div class='line' id='LC860'>				<span class="nx">positions</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">scrollLeft</span><span class="p">,</span> <span class="nx">scrollTop</span><span class="p">,</span> <span class="nx">timeStamp</span><span class="p">);</span></div><div class='line' id='LC861'><br/></div><div class='line' id='LC862'>				<span class="c1">// Sync scroll position</span></div><div class='line' id='LC863'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__publish</span><span class="p">(</span><span class="nx">scrollLeft</span><span class="p">,</span> <span class="nx">scrollTop</span><span class="p">,</span> <span class="nx">level</span><span class="p">);</span></div><div class='line' id='LC864'><br/></div><div class='line' id='LC865'>			<span class="c1">// Otherwise figure out whether we are switching into dragging mode now.</span></div><div class='line' id='LC866'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC867'><br/></div><div class='line' id='LC868'>				<span class="kd">var</span> <span class="nx">minimumTrackingForScroll</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">locking</span> <span class="o">?</span> <span class="mi">3</span> <span class="o">:</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC869'>				<span class="kd">var</span> <span class="nx">minimumTrackingForDrag</span> <span class="o">=</span> <span class="mi">5</span><span class="p">;</span></div><div class='line' id='LC870'><br/></div><div class='line' id='LC871'>				<span class="kd">var</span> <span class="nx">distanceX</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">currentTouchLeft</span> <span class="o">-</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__initialTouchLeft</span><span class="p">);</span></div><div class='line' id='LC872'>				<span class="kd">var</span> <span class="nx">distanceY</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">currentTouchTop</span> <span class="o">-</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__initialTouchTop</span><span class="p">);</span></div><div class='line' id='LC873'><br/></div><div class='line' id='LC874'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__enableScrollX</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollingX</span> <span class="o">&amp;&amp;</span> <span class="nx">distanceX</span> <span class="o">&gt;=</span> <span class="nx">minimumTrackingForScroll</span><span class="p">;</span></div><div class='line' id='LC875'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__enableScrollY</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollingY</span> <span class="o">&amp;&amp;</span> <span class="nx">distanceY</span> <span class="o">&gt;=</span> <span class="nx">minimumTrackingForScroll</span><span class="p">;</span></div><div class='line' id='LC876'><br/></div><div class='line' id='LC877'>				<span class="nx">positions</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">,</span> <span class="nx">timeStamp</span><span class="p">);</span></div><div class='line' id='LC878'><br/></div><div class='line' id='LC879'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__isDragging</span> <span class="o">=</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__enableScrollX</span> <span class="o">||</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__enableScrollY</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">distanceX</span> <span class="o">&gt;=</span> <span class="nx">minimumTrackingForDrag</span> <span class="o">||</span> <span class="nx">distanceY</span> <span class="o">&gt;=</span> <span class="nx">minimumTrackingForDrag</span><span class="p">);</span></div><div class='line' id='LC880'>				<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isDragging</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC881'>					<span class="nx">self</span><span class="p">.</span><span class="nx">__interruptedAnimation</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC882'>				<span class="p">}</span></div><div class='line' id='LC883'><br/></div><div class='line' id='LC884'>			<span class="p">}</span></div><div class='line' id='LC885'><br/></div><div class='line' id='LC886'>			<span class="c1">// Update last touch positions and time stamp for next event</span></div><div class='line' id='LC887'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__lastTouchLeft</span> <span class="o">=</span> <span class="nx">currentTouchLeft</span><span class="p">;</span></div><div class='line' id='LC888'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__lastTouchTop</span> <span class="o">=</span> <span class="nx">currentTouchTop</span><span class="p">;</span></div><div class='line' id='LC889'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__lastTouchMove</span> <span class="o">=</span> <span class="nx">timeStamp</span><span class="p">;</span></div><div class='line' id='LC890'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__lastScale</span> <span class="o">=</span> <span class="nx">scale</span><span class="p">;</span></div><div class='line' id='LC891'><br/></div><div class='line' id='LC892'>		<span class="p">},</span></div><div class='line' id='LC893'><br/></div><div class='line' id='LC894'><br/></div><div class='line' id='LC895'>		<span class="cm">/**</span></div><div class='line' id='LC896'><span class="cm">		 * Touch end handler for scrolling support</span></div><div class='line' id='LC897'><span class="cm">		 */</span></div><div class='line' id='LC898'>		<span class="nx">doTouchEnd</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">timeStamp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC899'><br/></div><div class='line' id='LC900'>			<span class="k">if</span> <span class="p">(</span><span class="nx">timeStamp</span> <span class="k">instanceof</span> <span class="nb">Date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC901'>				<span class="nx">timeStamp</span> <span class="o">=</span> <span class="nx">timeStamp</span><span class="p">.</span><span class="nx">valueOf</span><span class="p">();</span></div><div class='line' id='LC902'>			<span class="p">}</span></div><div class='line' id='LC903'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">timeStamp</span> <span class="o">!==</span> <span class="s2">&quot;number&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC904'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Invalid timestamp value: &quot;</span> <span class="o">+</span> <span class="nx">timeStamp</span><span class="p">);</span></div><div class='line' id='LC905'>			<span class="p">}</span></div><div class='line' id='LC906'><br/></div><div class='line' id='LC907'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC908'><br/></div><div class='line' id='LC909'>			<span class="c1">// Ignore event when tracking is not enabled (no touchstart event on element)</span></div><div class='line' id='LC910'>			<span class="c1">// This is required as this listener (&#39;touchmove&#39;) sits on the document and not on the element itself.</span></div><div class='line' id='LC911'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isTracking</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC912'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC913'>			<span class="p">}</span></div><div class='line' id='LC914'><br/></div><div class='line' id='LC915'>			<span class="c1">// Not touching anymore (when two finger hit the screen there are two touch end events)</span></div><div class='line' id='LC916'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__isTracking</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC917'><br/></div><div class='line' id='LC918'>			<span class="c1">// Be sure to reset the dragging flag now. Here we also detect whether</span></div><div class='line' id='LC919'>			<span class="c1">// the finger has moved fast enough to switch into a deceleration animation.</span></div><div class='line' id='LC920'>			<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isDragging</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC921'><br/></div><div class='line' id='LC922'>				<span class="c1">// Reset dragging flag</span></div><div class='line' id='LC923'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__isDragging</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC924'><br/></div><div class='line' id='LC925'>				<span class="c1">// Start deceleration</span></div><div class='line' id='LC926'>				<span class="c1">// Verify that the last move detected was in some relevant time frame</span></div><div class='line' id='LC927'>				<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isSingleTouch</span> <span class="o">&amp;&amp;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">animating</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">timeStamp</span> <span class="o">-</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__lastTouchMove</span><span class="p">)</span> <span class="o">&lt;=</span> <span class="mi">100</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC928'><br/></div><div class='line' id='LC929'>					<span class="c1">// Then figure out what the scroll position was about 100ms ago</span></div><div class='line' id='LC930'>					<span class="kd">var</span> <span class="nx">positions</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__positions</span><span class="p">;</span></div><div class='line' id='LC931'>					<span class="kd">var</span> <span class="nx">endPos</span> <span class="o">=</span> <span class="nx">positions</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC932'>					<span class="kd">var</span> <span class="nx">startPos</span> <span class="o">=</span> <span class="nx">endPos</span><span class="p">;</span></div><div class='line' id='LC933'><br/></div><div class='line' id='LC934'>					<span class="c1">// Move pointer to position measured 100ms ago</span></div><div class='line' id='LC935'>					<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">endPos</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">positions</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">&gt;</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__lastTouchMove</span> <span class="o">-</span> <span class="mi">100</span><span class="p">);</span> <span class="nx">i</span> <span class="o">-=</span> <span class="mi">3</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC936'>						<span class="nx">startPos</span> <span class="o">=</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC937'>					<span class="p">}</span></div><div class='line' id='LC938'><br/></div><div class='line' id='LC939'>					<span class="c1">// If start and stop position is identical in a 100ms timeframe,</span></div><div class='line' id='LC940'>					<span class="c1">// we cannot compute any useful deceleration.</span></div><div class='line' id='LC941'>					<span class="k">if</span> <span class="p">(</span><span class="nx">startPos</span> <span class="o">!==</span> <span class="nx">endPos</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC942'><br/></div><div class='line' id='LC943'>						<span class="c1">// Compute relative movement between these two points</span></div><div class='line' id='LC944'>						<span class="kd">var</span> <span class="nx">timeOffset</span> <span class="o">=</span> <span class="nx">positions</span><span class="p">[</span><span class="nx">endPos</span><span class="p">]</span> <span class="o">-</span> <span class="nx">positions</span><span class="p">[</span><span class="nx">startPos</span><span class="p">];</span></div><div class='line' id='LC945'>						<span class="kd">var</span> <span class="nx">movedLeft</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span> <span class="o">-</span> <span class="nx">positions</span><span class="p">[</span><span class="nx">startPos</span> <span class="o">-</span> <span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC946'>						<span class="kd">var</span> <span class="nx">movedTop</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span> <span class="o">-</span> <span class="nx">positions</span><span class="p">[</span><span class="nx">startPos</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC947'><br/></div><div class='line' id='LC948'>						<span class="c1">// Based on 50ms compute the movement to apply for each render step</span></div><div class='line' id='LC949'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityX</span> <span class="o">=</span> <span class="nx">movedLeft</span> <span class="o">/</span> <span class="nx">timeOffset</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1000</span> <span class="o">/</span> <span class="mi">60</span><span class="p">);</span></div><div class='line' id='LC950'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityY</span> <span class="o">=</span> <span class="nx">movedTop</span> <span class="o">/</span> <span class="nx">timeOffset</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1000</span> <span class="o">/</span> <span class="mi">60</span><span class="p">);</span></div><div class='line' id='LC951'><br/></div><div class='line' id='LC952'>						<span class="c1">// How much velocity is required to start the deceleration</span></div><div class='line' id='LC953'>						<span class="kd">var</span> <span class="nx">minVelocityToStartDeceleration</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">paging</span> <span class="o">||</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">snapping</span> <span class="o">?</span> <span class="mi">4</span> <span class="o">:</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC954'><br/></div><div class='line' id='LC955'>						<span class="c1">// Verify that we have enough velocity to start deceleration</span></div><div class='line' id='LC956'>						<span class="k">if</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityX</span><span class="p">)</span> <span class="o">&gt;</span> <span class="nx">minVelocityToStartDeceleration</span> <span class="o">||</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityY</span><span class="p">)</span> <span class="o">&gt;</span> <span class="nx">minVelocityToStartDeceleration</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC957'><br/></div><div class='line' id='LC958'>							<span class="c1">// Deactivate pull-to-refresh when decelerating</span></div><div class='line' id='LC959'>							<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">__refreshActive</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC960'>								<span class="nx">self</span><span class="p">.</span><span class="nx">__startDeceleration</span><span class="p">(</span><span class="nx">timeStamp</span><span class="p">);</span></div><div class='line' id='LC961'>							<span class="p">}</span></div><div class='line' id='LC962'>						<span class="p">}</span></div><div class='line' id='LC963'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC964'>						<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollingComplete</span><span class="p">();</span></div><div class='line' id='LC965'>					<span class="p">}</span></div><div class='line' id='LC966'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">timeStamp</span> <span class="o">-</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__lastTouchMove</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">100</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC967'>					<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollingComplete</span><span class="p">();</span></div><div class='line' id='LC968'>	 			<span class="p">}</span></div><div class='line' id='LC969'>			<span class="p">}</span></div><div class='line' id='LC970'><br/></div><div class='line' id='LC971'>			<span class="c1">// If this was a slower move it is per default non decelerated, but this</span></div><div class='line' id='LC972'>			<span class="c1">// still means that we want snap back to the bounds which is done here.</span></div><div class='line' id='LC973'>			<span class="c1">// This is placed outside the condition above to improve edge case stability</span></div><div class='line' id='LC974'>			<span class="c1">// e.g. touchend fired without enabled dragging. This should normally do not</span></div><div class='line' id='LC975'>			<span class="c1">// have modified the scroll positions or even showed the scrollbars though.</span></div><div class='line' id='LC976'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">__isDecelerating</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC977'><br/></div><div class='line' id='LC978'>				<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__refreshActive</span> <span class="o">&amp;&amp;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__refreshStart</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC979'><br/></div><div class='line' id='LC980'>					<span class="c1">// Use publish instead of scrollTo to allow scrolling to out of boundary position</span></div><div class='line' id='LC981'>					<span class="c1">// We don&#39;t need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled</span></div><div class='line' id='LC982'>					<span class="nx">self</span><span class="p">.</span><span class="nx">__publish</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">,</span> <span class="o">-</span><span class="nx">self</span><span class="p">.</span><span class="nx">__refreshHeight</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC983'><br/></div><div class='line' id='LC984'>					<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__refreshStart</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC985'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__refreshStart</span><span class="p">();</span></div><div class='line' id='LC986'>					<span class="p">}</span></div><div class='line' id='LC987'><br/></div><div class='line' id='LC988'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC989'><br/></div><div class='line' id='LC990'>					<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__interruptedAnimation</span> <span class="o">||</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__isDragging</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC991'>						<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollingComplete</span><span class="p">();</span></div><div class='line' id='LC992'>					<span class="p">}</span></div><div class='line' id='LC993'>					<span class="nx">self</span><span class="p">.</span><span class="nx">scrollTo</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">,</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span><span class="p">);</span></div><div class='line' id='LC994'><br/></div><div class='line' id='LC995'>					<span class="c1">// Directly signalize deactivation (nothing todo on refresh?)</span></div><div class='line' id='LC996'>					<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__refreshActive</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC997'><br/></div><div class='line' id='LC998'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__refreshActive</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC999'>						<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__refreshDeactivate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1000'>							<span class="nx">self</span><span class="p">.</span><span class="nx">__refreshDeactivate</span><span class="p">();</span></div><div class='line' id='LC1001'>						<span class="p">}</span></div><div class='line' id='LC1002'><br/></div><div class='line' id='LC1003'>					<span class="p">}</span></div><div class='line' id='LC1004'>				<span class="p">}</span></div><div class='line' id='LC1005'>			<span class="p">}</span></div><div class='line' id='LC1006'><br/></div><div class='line' id='LC1007'>			<span class="c1">// Fully cleanup list</span></div><div class='line' id='LC1008'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__positions</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1009'><br/></div><div class='line' id='LC1010'>		<span class="p">},</span></div><div class='line' id='LC1011'><br/></div><div class='line' id='LC1012'><br/></div><div class='line' id='LC1013'><br/></div><div class='line' id='LC1014'>		<span class="cm">/*</span></div><div class='line' id='LC1015'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC1016'><span class="cm">			PRIVATE API</span></div><div class='line' id='LC1017'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC1018'><span class="cm">		*/</span></div><div class='line' id='LC1019'><br/></div><div class='line' id='LC1020'>		<span class="cm">/**</span></div><div class='line' id='LC1021'><span class="cm">		 * Applies the scroll position to the content element</span></div><div class='line' id='LC1022'><span class="cm">		 *</span></div><div class='line' id='LC1023'><span class="cm">		 * @param left {Number} Left scroll position</span></div><div class='line' id='LC1024'><span class="cm">		 * @param top {Number} Top scroll position</span></div><div class='line' id='LC1025'><span class="cm">		 * @param animate {Boolean?false} Whether animation should be used to move to the new coordinates</span></div><div class='line' id='LC1026'><span class="cm">		 */</span></div><div class='line' id='LC1027'>		<span class="nx">__publish</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">,</span> <span class="nx">zoom</span><span class="p">,</span> <span class="nx">animate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1028'><br/></div><div class='line' id='LC1029'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1030'><br/></div><div class='line' id='LC1031'>			<span class="c1">// Remember whether we had an animation, then we try to continue based on the current &quot;drive&quot; of the animation</span></div><div class='line' id='LC1032'>			<span class="kd">var</span> <span class="nx">wasAnimating</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__isAnimating</span><span class="p">;</span></div><div class='line' id='LC1033'>			<span class="k">if</span> <span class="p">(</span><span class="nx">wasAnimating</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1034'>				<span class="nx">core</span><span class="p">.</span><span class="nx">effect</span><span class="p">.</span><span class="nx">Animate</span><span class="p">.</span><span class="nx">stop</span><span class="p">(</span><span class="nx">wasAnimating</span><span class="p">);</span></div><div class='line' id='LC1035'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__isAnimating</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1036'>			<span class="p">}</span></div><div class='line' id='LC1037'><br/></div><div class='line' id='LC1038'>			<span class="k">if</span> <span class="p">(</span><span class="nx">animate</span> <span class="o">&amp;&amp;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">animating</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1039'><br/></div><div class='line' id='LC1040'>				<span class="c1">// Keep scheduled positions for scrollBy/zoomBy functionality</span></div><div class='line' id='LC1041'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__scheduledLeft</span> <span class="o">=</span> <span class="nx">left</span><span class="p">;</span></div><div class='line' id='LC1042'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__scheduledTop</span> <span class="o">=</span> <span class="nx">top</span><span class="p">;</span></div><div class='line' id='LC1043'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__scheduledZoom</span> <span class="o">=</span> <span class="nx">zoom</span><span class="p">;</span></div><div class='line' id='LC1044'><br/></div><div class='line' id='LC1045'>				<span class="kd">var</span> <span class="nx">oldLeft</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">;</span></div><div class='line' id='LC1046'>				<span class="kd">var</span> <span class="nx">oldTop</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">;</span></div><div class='line' id='LC1047'>				<span class="kd">var</span> <span class="nx">oldZoom</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span><span class="p">;</span></div><div class='line' id='LC1048'><br/></div><div class='line' id='LC1049'>				<span class="kd">var</span> <span class="nx">diffLeft</span> <span class="o">=</span> <span class="nx">left</span> <span class="o">-</span> <span class="nx">oldLeft</span><span class="p">;</span></div><div class='line' id='LC1050'>				<span class="kd">var</span> <span class="nx">diffTop</span> <span class="o">=</span> <span class="nx">top</span> <span class="o">-</span> <span class="nx">oldTop</span><span class="p">;</span></div><div class='line' id='LC1051'>				<span class="kd">var</span> <span class="nx">diffZoom</span> <span class="o">=</span> <span class="nx">zoom</span> <span class="o">-</span> <span class="nx">oldZoom</span><span class="p">;</span></div><div class='line' id='LC1052'><br/></div><div class='line' id='LC1053'>				<span class="kd">var</span> <span class="nx">step</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">percent</span><span class="p">,</span> <span class="nx">now</span><span class="p">,</span> <span class="nx">render</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1054'><br/></div><div class='line' id='LC1055'>					<span class="k">if</span> <span class="p">(</span><span class="nx">render</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1056'><br/></div><div class='line' id='LC1057'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span> <span class="o">=</span> <span class="nx">oldLeft</span> <span class="o">+</span> <span class="p">(</span><span class="nx">diffLeft</span> <span class="o">*</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC1058'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span> <span class="o">=</span> <span class="nx">oldTop</span> <span class="o">+</span> <span class="p">(</span><span class="nx">diffTop</span> <span class="o">*</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC1059'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span> <span class="o">=</span> <span class="nx">oldZoom</span> <span class="o">+</span> <span class="p">(</span><span class="nx">diffZoom</span> <span class="o">*</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC1060'><br/></div><div class='line' id='LC1061'>						<span class="c1">// Push values out</span></div><div class='line' id='LC1062'>						<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1063'>							<span class="nx">self</span><span class="p">.</span><span class="nx">__callback</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span><span class="p">);</span></div><div class='line' id='LC1064'>						<span class="p">}</span></div><div class='line' id='LC1065'><br/></div><div class='line' id='LC1066'>					<span class="p">}</span></div><div class='line' id='LC1067'>				<span class="p">};</span></div><div class='line' id='LC1068'><br/></div><div class='line' id='LC1069'>				<span class="kd">var</span> <span class="nx">verify</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1070'>					<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__isAnimating</span> <span class="o">===</span> <span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC1071'>				<span class="p">};</span></div><div class='line' id='LC1072'><br/></div><div class='line' id='LC1073'>				<span class="kd">var</span> <span class="nx">completed</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">renderedFramesPerSecond</span><span class="p">,</span> <span class="nx">animationId</span><span class="p">,</span> <span class="nx">wasFinished</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1074'>					<span class="k">if</span> <span class="p">(</span><span class="nx">animationId</span> <span class="o">===</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__isAnimating</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1075'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__isAnimating</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1076'>					<span class="p">}</span></div><div class='line' id='LC1077'>					<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__didDecelerationComplete</span> <span class="o">||</span> <span class="nx">wasFinished</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1078'>						<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollingComplete</span><span class="p">();</span></div><div class='line' id='LC1079'>					<span class="p">}</span></div><div class='line' id='LC1080'><br/></div><div class='line' id='LC1081'>					<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">zooming</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1082'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__computeScrollMax</span><span class="p">();</span></div><div class='line' id='LC1083'>					<span class="p">}</span></div><div class='line' id='LC1084'>				<span class="p">};</span></div><div class='line' id='LC1085'><br/></div><div class='line' id='LC1086'>				<span class="c1">// When continuing based on previous animation we choose an ease-out animation instead of ease-in-out</span></div><div class='line' id='LC1087'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__isAnimating</span> <span class="o">=</span> <span class="nx">core</span><span class="p">.</span><span class="nx">effect</span><span class="p">.</span><span class="nx">Animate</span><span class="p">.</span><span class="nx">start</span><span class="p">(</span><span class="nx">step</span><span class="p">,</span> <span class="nx">verify</span><span class="p">,</span> <span class="nx">completed</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">animationDuration</span><span class="p">,</span> <span class="nx">wasAnimating</span> <span class="o">?</span> <span class="nx">easeOutCubic</span> <span class="o">:</span> <span class="nx">easeInOutCubic</span><span class="p">);</span></div><div class='line' id='LC1088'><br/></div><div class='line' id='LC1089'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1090'><br/></div><div class='line' id='LC1091'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__scheduledLeft</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span> <span class="o">=</span> <span class="nx">left</span><span class="p">;</span></div><div class='line' id='LC1092'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__scheduledTop</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span> <span class="o">=</span> <span class="nx">top</span><span class="p">;</span></div><div class='line' id='LC1093'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__scheduledZoom</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span> <span class="o">=</span> <span class="nx">zoom</span><span class="p">;</span></div><div class='line' id='LC1094'><br/></div><div class='line' id='LC1095'>				<span class="c1">// Push values out</span></div><div class='line' id='LC1096'>				<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1097'>					<span class="nx">self</span><span class="p">.</span><span class="nx">__callback</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">,</span> <span class="nx">zoom</span><span class="p">);</span></div><div class='line' id='LC1098'>				<span class="p">}</span></div><div class='line' id='LC1099'><br/></div><div class='line' id='LC1100'>				<span class="c1">// Fix max scroll ranges</span></div><div class='line' id='LC1101'>				<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">zooming</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1102'>					<span class="nx">self</span><span class="p">.</span><span class="nx">__computeScrollMax</span><span class="p">();</span></div><div class='line' id='LC1103'>				<span class="p">}</span></div><div class='line' id='LC1104'>			<span class="p">}</span></div><div class='line' id='LC1105'>		<span class="p">},</span></div><div class='line' id='LC1106'><br/></div><div class='line' id='LC1107'><br/></div><div class='line' id='LC1108'>		<span class="cm">/**</span></div><div class='line' id='LC1109'><span class="cm">		 * Recomputes scroll minimum values based on client dimensions and content dimensions.</span></div><div class='line' id='LC1110'><span class="cm">		 */</span></div><div class='line' id='LC1111'>		<span class="nx">__computeScrollMax</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">zoomLevel</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1112'><br/></div><div class='line' id='LC1113'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1114'><br/></div><div class='line' id='LC1115'>			<span class="k">if</span> <span class="p">(</span><span class="nx">zoomLevel</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1116'>				<span class="nx">zoomLevel</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span><span class="p">;</span></div><div class='line' id='LC1117'>			<span class="p">}</span></div><div class='line' id='LC1118'><br/></div><div class='line' id='LC1119'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollLeft</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">((</span><span class="nx">self</span><span class="p">.</span><span class="nx">__contentWidth</span> <span class="o">*</span> <span class="nx">zoomLevel</span><span class="p">)</span> <span class="o">-</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientWidth</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC1120'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollTop</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">((</span><span class="nx">self</span><span class="p">.</span><span class="nx">__contentHeight</span> <span class="o">*</span> <span class="nx">zoomLevel</span><span class="p">)</span> <span class="o">-</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientHeight</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC1121'><br/></div><div class='line' id='LC1122'>		<span class="p">},</span></div><div class='line' id='LC1123'><br/></div><div class='line' id='LC1124'><br/></div><div class='line' id='LC1125'><br/></div><div class='line' id='LC1126'>		<span class="cm">/*</span></div><div class='line' id='LC1127'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC1128'><span class="cm">			ANIMATION (DECELERATION) SUPPORT</span></div><div class='line' id='LC1129'><span class="cm">		---------------------------------------------------------------------------</span></div><div class='line' id='LC1130'><span class="cm">		*/</span></div><div class='line' id='LC1131'><br/></div><div class='line' id='LC1132'>		<span class="cm">/**</span></div><div class='line' id='LC1133'><span class="cm">		 * Called when a touch sequence end and the speed of the finger was high enough</span></div><div class='line' id='LC1134'><span class="cm">		 * to switch into deceleration mode.</span></div><div class='line' id='LC1135'><span class="cm">		 */</span></div><div class='line' id='LC1136'>		<span class="nx">__startDeceleration</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">timeStamp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1137'><br/></div><div class='line' id='LC1138'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1139'><br/></div><div class='line' id='LC1140'>			<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">paging</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1141'><br/></div><div class='line' id='LC1142'>				<span class="kd">var</span> <span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollLeft</span><span class="p">),</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC1143'>				<span class="kd">var</span> <span class="nx">scrollTop</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollTop</span><span class="p">),</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC1144'>				<span class="kd">var</span> <span class="nx">clientWidth</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientWidth</span><span class="p">;</span></div><div class='line' id='LC1145'>				<span class="kd">var</span> <span class="nx">clientHeight</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__clientHeight</span><span class="p">;</span></div><div class='line' id='LC1146'><br/></div><div class='line' id='LC1147'>				<span class="c1">// We limit deceleration not to the min/max values of the allowed range, but to the size of the visible client area.</span></div><div class='line' id='LC1148'>				<span class="c1">// Each page should have exactly the size of the client area.</span></div><div class='line' id='LC1149'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__minDecelerationScrollLeft</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">scrollLeft</span> <span class="o">/</span> <span class="nx">clientWidth</span><span class="p">)</span> <span class="o">*</span> <span class="nx">clientWidth</span><span class="p">;</span></div><div class='line' id='LC1150'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__minDecelerationScrollTop</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">scrollTop</span> <span class="o">/</span> <span class="nx">clientHeight</span><span class="p">)</span> <span class="o">*</span> <span class="nx">clientHeight</span><span class="p">;</span></div><div class='line' id='LC1151'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__maxDecelerationScrollLeft</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">scrollLeft</span> <span class="o">/</span> <span class="nx">clientWidth</span><span class="p">)</span> <span class="o">*</span> <span class="nx">clientWidth</span><span class="p">;</span></div><div class='line' id='LC1152'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__maxDecelerationScrollTop</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">scrollTop</span> <span class="o">/</span> <span class="nx">clientHeight</span><span class="p">)</span> <span class="o">*</span> <span class="nx">clientHeight</span><span class="p">;</span></div><div class='line' id='LC1153'><br/></div><div class='line' id='LC1154'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1155'><br/></div><div class='line' id='LC1156'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__minDecelerationScrollLeft</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1157'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__minDecelerationScrollTop</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1158'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__maxDecelerationScrollLeft</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollLeft</span><span class="p">;</span></div><div class='line' id='LC1159'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__maxDecelerationScrollTop</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxScrollTop</span><span class="p">;</span></div><div class='line' id='LC1160'><br/></div><div class='line' id='LC1161'>			<span class="p">}</span></div><div class='line' id='LC1162'><br/></div><div class='line' id='LC1163'>			<span class="c1">// Wrap class method</span></div><div class='line' id='LC1164'>			<span class="kd">var</span> <span class="nx">step</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">percent</span><span class="p">,</span> <span class="nx">now</span><span class="p">,</span> <span class="nx">render</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1165'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__stepThroughDeceleration</span><span class="p">(</span><span class="nx">render</span><span class="p">);</span></div><div class='line' id='LC1166'>			<span class="p">};</span></div><div class='line' id='LC1167'><br/></div><div class='line' id='LC1168'>			<span class="c1">// How much velocity is required to keep the deceleration running</span></div><div class='line' id='LC1169'>			<span class="kd">var</span> <span class="nx">minVelocityToKeepDecelerating</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">snapping</span> <span class="o">?</span> <span class="mi">4</span> <span class="o">:</span> <span class="mf">0.1</span><span class="p">;</span></div><div class='line' id='LC1170'><br/></div><div class='line' id='LC1171'>			<span class="c1">// Detect whether it&#39;s still worth to continue animating steps</span></div><div class='line' id='LC1172'>			<span class="c1">// If we are already slow enough to not being user perceivable anymore, we stop the whole process here.</span></div><div class='line' id='LC1173'>			<span class="kd">var</span> <span class="nx">verify</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1174'>				<span class="kd">var</span> <span class="nx">shouldContinue</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityX</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="nx">minVelocityToKeepDecelerating</span> <span class="o">||</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityY</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="nx">minVelocityToKeepDecelerating</span><span class="p">;</span></div><div class='line' id='LC1175'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">shouldContinue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1176'>					<span class="nx">self</span><span class="p">.</span><span class="nx">__didDecelerationComplete</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1177'>				<span class="p">}</span></div><div class='line' id='LC1178'>				<span class="k">return</span> <span class="nx">shouldContinue</span><span class="p">;</span></div><div class='line' id='LC1179'>			<span class="p">};</span></div><div class='line' id='LC1180'><br/></div><div class='line' id='LC1181'>			<span class="kd">var</span> <span class="nx">completed</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">renderedFramesPerSecond</span><span class="p">,</span> <span class="nx">animationId</span><span class="p">,</span> <span class="nx">wasFinished</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1182'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__isDecelerating</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1183'>				<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__didDecelerationComplete</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1184'>					<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollingComplete</span><span class="p">();</span></div><div class='line' id='LC1185'>				<span class="p">}</span></div><div class='line' id='LC1186'><br/></div><div class='line' id='LC1187'>				<span class="c1">// Animate to grid when snapping is active, otherwise just fix out-of-boundary positions</span></div><div class='line' id='LC1188'>				<span class="nx">self</span><span class="p">.</span><span class="nx">scrollTo</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">snapping</span><span class="p">);</span></div><div class='line' id='LC1189'>			<span class="p">};</span></div><div class='line' id='LC1190'><br/></div><div class='line' id='LC1191'>			<span class="c1">// Start animation and switch on flag</span></div><div class='line' id='LC1192'>			<span class="nx">self</span><span class="p">.</span><span class="nx">__isDecelerating</span> <span class="o">=</span> <span class="nx">core</span><span class="p">.</span><span class="nx">effect</span><span class="p">.</span><span class="nx">Animate</span><span class="p">.</span><span class="nx">start</span><span class="p">(</span><span class="nx">step</span><span class="p">,</span> <span class="nx">verify</span><span class="p">,</span> <span class="nx">completed</span><span class="p">);</span></div><div class='line' id='LC1193'><br/></div><div class='line' id='LC1194'>		<span class="p">},</span></div><div class='line' id='LC1195'><br/></div><div class='line' id='LC1196'><br/></div><div class='line' id='LC1197'>		<span class="cm">/**</span></div><div class='line' id='LC1198'><span class="cm">		 * Called on every step of the animation</span></div><div class='line' id='LC1199'><span class="cm">		 *</span></div><div class='line' id='LC1200'><span class="cm">		 * @param inMemory {Boolean?false} Whether to not render the current step, but keep it in memory only. Used internally only!</span></div><div class='line' id='LC1201'><span class="cm">		 */</span></div><div class='line' id='LC1202'>		<span class="nx">__stepThroughDeceleration</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">render</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1203'><br/></div><div class='line' id='LC1204'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1205'><br/></div><div class='line' id='LC1206'><br/></div><div class='line' id='LC1207'>			<span class="c1">//</span></div><div class='line' id='LC1208'>			<span class="c1">// COMPUTE NEXT SCROLL POSITION</span></div><div class='line' id='LC1209'>			<span class="c1">//</span></div><div class='line' id='LC1210'><br/></div><div class='line' id='LC1211'>			<span class="c1">// Add deceleration to scroll position</span></div><div class='line' id='LC1212'>			<span class="kd">var</span> <span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span> <span class="o">+</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityX</span><span class="p">;</span></div><div class='line' id='LC1213'>			<span class="kd">var</span> <span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span> <span class="o">+</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityY</span><span class="p">;</span></div><div class='line' id='LC1214'><br/></div><div class='line' id='LC1215'><br/></div><div class='line' id='LC1216'>			<span class="c1">//</span></div><div class='line' id='LC1217'>			<span class="c1">// HARD LIMIT SCROLL POSITION FOR NON BOUNCING MODE</span></div><div class='line' id='LC1218'>			<span class="c1">//</span></div><div class='line' id='LC1219'><br/></div><div class='line' id='LC1220'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">bouncing</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1221'><br/></div><div class='line' id='LC1222'>				<span class="kd">var</span> <span class="nx">scrollLeftFixed</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__maxDecelerationScrollLeft</span><span class="p">,</span> <span class="nx">scrollLeft</span><span class="p">),</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__minDecelerationScrollLeft</span><span class="p">);</span></div><div class='line' id='LC1223'>				<span class="k">if</span> <span class="p">(</span><span class="nx">scrollLeftFixed</span> <span class="o">!==</span> <span class="nx">scrollLeft</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1224'>					<span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">scrollLeftFixed</span><span class="p">;</span></div><div class='line' id='LC1225'>					<span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityX</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1226'>				<span class="p">}</span></div><div class='line' id='LC1227'><br/></div><div class='line' id='LC1228'>				<span class="kd">var</span> <span class="nx">scrollTopFixed</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">__maxDecelerationScrollTop</span><span class="p">,</span> <span class="nx">scrollTop</span><span class="p">),</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__minDecelerationScrollTop</span><span class="p">);</span></div><div class='line' id='LC1229'>				<span class="k">if</span> <span class="p">(</span><span class="nx">scrollTopFixed</span> <span class="o">!==</span> <span class="nx">scrollTop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1230'>					<span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">scrollTopFixed</span><span class="p">;</span></div><div class='line' id='LC1231'>					<span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1232'>				<span class="p">}</span></div><div class='line' id='LC1233'><br/></div><div class='line' id='LC1234'>			<span class="p">}</span></div><div class='line' id='LC1235'><br/></div><div class='line' id='LC1236'><br/></div><div class='line' id='LC1237'>			<span class="c1">//</span></div><div class='line' id='LC1238'>			<span class="c1">// UPDATE SCROLL POSITION</span></div><div class='line' id='LC1239'>			<span class="c1">//</span></div><div class='line' id='LC1240'><br/></div><div class='line' id='LC1241'>			<span class="k">if</span> <span class="p">(</span><span class="nx">render</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1242'><br/></div><div class='line' id='LC1243'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__publish</span><span class="p">(</span><span class="nx">scrollLeft</span><span class="p">,</span> <span class="nx">scrollTop</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__zoomLevel</span><span class="p">);</span></div><div class='line' id='LC1244'><br/></div><div class='line' id='LC1245'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1246'><br/></div><div class='line' id='LC1247'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__scrollLeft</span> <span class="o">=</span> <span class="nx">scrollLeft</span><span class="p">;</span></div><div class='line' id='LC1248'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__scrollTop</span> <span class="o">=</span> <span class="nx">scrollTop</span><span class="p">;</span></div><div class='line' id='LC1249'><br/></div><div class='line' id='LC1250'>			<span class="p">}</span></div><div class='line' id='LC1251'><br/></div><div class='line' id='LC1252'><br/></div><div class='line' id='LC1253'>			<span class="c1">//</span></div><div class='line' id='LC1254'>			<span class="c1">// SLOW DOWN</span></div><div class='line' id='LC1255'>			<span class="c1">//</span></div><div class='line' id='LC1256'><br/></div><div class='line' id='LC1257'>			<span class="c1">// Slow down velocity on every iteration</span></div><div class='line' id='LC1258'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">paging</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1259'><br/></div><div class='line' id='LC1260'>				<span class="c1">// This is the factor applied to every iteration of the animation</span></div><div class='line' id='LC1261'>				<span class="c1">// to slow down the process. This should emulate natural behavior where</span></div><div class='line' id='LC1262'>				<span class="c1">// objects slow down when the initiator of the movement is removed</span></div><div class='line' id='LC1263'>				<span class="kd">var</span> <span class="nx">frictionFactor</span> <span class="o">=</span> <span class="mf">0.95</span><span class="p">;</span></div><div class='line' id='LC1264'><br/></div><div class='line' id='LC1265'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityX</span> <span class="o">*=</span> <span class="nx">frictionFactor</span><span class="p">;</span></div><div class='line' id='LC1266'>				<span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityY</span> <span class="o">*=</span> <span class="nx">frictionFactor</span><span class="p">;</span></div><div class='line' id='LC1267'><br/></div><div class='line' id='LC1268'>			<span class="p">}</span></div><div class='line' id='LC1269'><br/></div><div class='line' id='LC1270'><br/></div><div class='line' id='LC1271'>			<span class="c1">//</span></div><div class='line' id='LC1272'>			<span class="c1">// BOUNCING SUPPORT</span></div><div class='line' id='LC1273'>			<span class="c1">//</span></div><div class='line' id='LC1274'><br/></div><div class='line' id='LC1275'>			<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">bouncing</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1276'><br/></div><div class='line' id='LC1277'>				<span class="kd">var</span> <span class="nx">scrollOutsideX</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1278'>				<span class="kd">var</span> <span class="nx">scrollOutsideY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1279'><br/></div><div class='line' id='LC1280'>				<span class="c1">// This configures the amount of change applied to deceleration/acceleration when reaching boundaries</span></div><div class='line' id='LC1281'>				<span class="kd">var</span> <span class="nx">penetrationDeceleration</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">penetrationDeceleration</span><span class="p">;</span> </div><div class='line' id='LC1282'>				<span class="kd">var</span> <span class="nx">penetrationAcceleration</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">penetrationAcceleration</span><span class="p">;</span> </div><div class='line' id='LC1283'><br/></div><div class='line' id='LC1284'>				<span class="c1">// Check limits</span></div><div class='line' id='LC1285'>				<span class="k">if</span> <span class="p">(</span><span class="nx">scrollLeft</span> <span class="o">&lt;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__minDecelerationScrollLeft</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1286'>					<span class="nx">scrollOutsideX</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__minDecelerationScrollLeft</span> <span class="o">-</span> <span class="nx">scrollLeft</span><span class="p">;</span></div><div class='line' id='LC1287'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">scrollLeft</span> <span class="o">&gt;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxDecelerationScrollLeft</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1288'>					<span class="nx">scrollOutsideX</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxDecelerationScrollLeft</span> <span class="o">-</span> <span class="nx">scrollLeft</span><span class="p">;</span></div><div class='line' id='LC1289'>				<span class="p">}</span></div><div class='line' id='LC1290'><br/></div><div class='line' id='LC1291'>				<span class="k">if</span> <span class="p">(</span><span class="nx">scrollTop</span> <span class="o">&lt;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__minDecelerationScrollTop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1292'>					<span class="nx">scrollOutsideY</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__minDecelerationScrollTop</span> <span class="o">-</span> <span class="nx">scrollTop</span><span class="p">;</span></div><div class='line' id='LC1293'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">scrollTop</span> <span class="o">&gt;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxDecelerationScrollTop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1294'>					<span class="nx">scrollOutsideY</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__maxDecelerationScrollTop</span> <span class="o">-</span> <span class="nx">scrollTop</span><span class="p">;</span></div><div class='line' id='LC1295'>				<span class="p">}</span></div><div class='line' id='LC1296'><br/></div><div class='line' id='LC1297'>				<span class="c1">// Slow down until slow enough, then flip back to snap position</span></div><div class='line' id='LC1298'>				<span class="k">if</span> <span class="p">(</span><span class="nx">scrollOutsideX</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1299'>					<span class="k">if</span> <span class="p">(</span><span class="nx">scrollOutsideX</span> <span class="o">*</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityX</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1300'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityX</span> <span class="o">+=</span> <span class="nx">scrollOutsideX</span> <span class="o">*</span> <span class="nx">penetrationDeceleration</span><span class="p">;</span></div><div class='line' id='LC1301'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1302'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityX</span> <span class="o">=</span> <span class="nx">scrollOutsideX</span> <span class="o">*</span> <span class="nx">penetrationAcceleration</span><span class="p">;</span></div><div class='line' id='LC1303'>					<span class="p">}</span></div><div class='line' id='LC1304'>				<span class="p">}</span></div><div class='line' id='LC1305'><br/></div><div class='line' id='LC1306'>				<span class="k">if</span> <span class="p">(</span><span class="nx">scrollOutsideY</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1307'>					<span class="k">if</span> <span class="p">(</span><span class="nx">scrollOutsideY</span> <span class="o">*</span> <span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityY</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1308'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityY</span> <span class="o">+=</span> <span class="nx">scrollOutsideY</span> <span class="o">*</span> <span class="nx">penetrationDeceleration</span><span class="p">;</span></div><div class='line' id='LC1309'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1310'>						<span class="nx">self</span><span class="p">.</span><span class="nx">__decelerationVelocityY</span> <span class="o">=</span> <span class="nx">scrollOutsideY</span> <span class="o">*</span> <span class="nx">penetrationAcceleration</span><span class="p">;</span></div><div class='line' id='LC1311'>					<span class="p">}</span></div><div class='line' id='LC1312'>				<span class="p">}</span></div><div class='line' id='LC1313'>			<span class="p">}</span></div><div class='line' id='LC1314'>		<span class="p">}</span></div><div class='line' id='LC1315'>	<span class="p">};</span></div><div class='line' id='LC1316'><br/></div><div class='line' id='LC1317'>	<span class="c1">// Copy over members to prototype</span></div><div class='line' id='LC1318'>	<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">members</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1319'>		<span class="nx">Scroller</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">members</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC1320'>	<span class="p">}</span></div><div class='line' id='LC1321'><br/></div><div class='line' id='LC1322'><span class="p">})();</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

          </div>
        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div>
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.08140s from fe16.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/zynga/scroller/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

;


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>scroller/src/Animate.js at master · zynga/scroller</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe16.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="127001" name="octolytics-actor-id" /><meta content="codecollision" name="octolytics-actor-login" /><meta content="522a6d151647c4cd631ba7bc662f60255cdb987fd4024ae64c1aa891ccc523fd" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="ugPoRj30dyzZBnfLIm5rl3XpN2kqwe6o+PXDdM8Hl5w=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-18426ad2e511ad881d5d0a2b133329f94baf1305.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-13a1767e53653178a55a8f1aa8fc7567598b5369.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-e8054ad804a1cf9e9849130fee5a4a5487b663ed.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-0444c1d0a0bb2f32a3c081d0aa3b6687cbd0ce39.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="012ce5e561582d6552e650e39a764c8a">

        <link data-pjax-transient rel='permalink' href='/zynga/scroller/blob/a44d7c2240e0e1d80ea0d172e1d455ea61b0cec7/src/Animate.js'>
  <meta property="og:title" content="scroller"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/zynga/scroller"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="scroller - Accelerated panning and zooming for HTML and Canvas"/>

  <meta name="description" content="scroller - Accelerated panning and zooming for HTML and Canvas" />

  <meta content="79708" name="octolytics-dimension-user_id" /><meta content="zynga" name="octolytics-dimension-user_login" /><meta content="2377206" name="octolytics-dimension-repository_id" /><meta content="zynga/scroller" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2377206" name="octolytics-dimension-repository_network_root_id" /><meta content="zynga/scroller" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/zynga/scroller/commits/master.atom" rel="alternate" title="Recent Commits to scroller:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="codecollision"
      data-repo="zynga/scroller"
      data-branch="master"
      data-sha="35ede7ba17354b70176d0885cce38b54a86d28ed"
  >

    <input type="hidden" name="nwo" value="zynga/scroller" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/codecollision" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/ef16bf2ac92637b80aee919d4ff26f0c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> codecollision
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="zynga/scroller">This repository</span>
    </li>
    <li>
      <a href="/zynga/scroller/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="ugPoRj30dyzZBnfLIm5rl3XpN2kqwe6o+PXDdM8Hl5w=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2377206" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button  js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container on">
      <a href="/zynga/scroller/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
      </a>
      <a href="/zynga/scroller/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star"></span><span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/zynga/scroller/stargazers">1,117</a>
    </li>

        <li>
          <a href="/zynga/scroller/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/zynga/scroller/network" class="social-count">128</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/zynga" class="url fn" itemprop="url" rel="author"><span itemprop="title">zynga</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/zynga/scroller" class="js-current-repository js-repo-home-link">scroller</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container
            ">

          <div class="repository-sidebar">

              

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/zynga/scroller" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /zynga/scroller">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/zynga/scroller/issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /zynga/scroller/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>10</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/zynga/scroller/pulls" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /zynga/scroller/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/zynga/scroller/wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /zynga/scroller/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/zynga/scroller/pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /zynga/scroller/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/zynga/scroller/graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /zynga/scroller/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/zynga/scroller/network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /zynga/scroller/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>


              <div class="only-with-full-nav">

                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/zynga/scroller.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/zynga/scroller.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:zynga/scroller.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:zynga/scroller.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/zynga/scroller" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/zynga/scroller" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>


  <a href="github-windows://openRepo/https://github.com/zynga/scroller" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                  <a href="/zynga/scroller/archive/master.zip"
                     class="minibutton sidebar-button"
                     title="Download this repository as a zip file"
                     rel="nofollow">
                    <span class="octicon octicon-cloud-download"></span>
                    Download ZIP
                  </a>

              </div>
          </div>

          <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
            


<!-- blob contrib key: blob_contributors:v21:68f69256040d57f13cb761c8fb9e3072 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:68f69256040d57f13cb761c8fb9e3072 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/zynga/scroller/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/gh-pages/src/Animate.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/master/src/Animate.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.2.2/src/Animate.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.2" rel="nofollow" title="1.2.2">1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.2.1/src/Animate.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.1" rel="nofollow" title="1.2.1">1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.2/src/Animate.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2" rel="nofollow" title="1.2">1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.1/src/Animate.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1" rel="nofollow" title="1.1">1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.0/src/Animate.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0" rel="nofollow" title="1.0">1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zynga/scroller" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">scroller</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zynga/scroller/tree/master/src" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">Animate.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="src/Animate.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/b04d74db65a7a2dc6e554e50dd4708b2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/BonsaiDen" rel="author">BonsaiDen</a></span>
    <time class="js-relative-date" datetime="2012-07-09T05:09:59-07:00" title="2012-07-09 05:09:59">July 09, 2012</time>
    <div class="commit-title">
        <a href="/zynga/scroller/commit/7d460ea2403e45e88a5980b55da760a0b78d6c6a" class="message" data-pjax="true">Remove global requestAnimationFrame polyfill to avoid other libs usin…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>3</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="levito" href="/zynga/scroller/commits/master/src/Animate.js?author=levito"><img height="20" src="https://secure.gravatar.com/avatar/c0c7a0a5a4d090dcbfbee077b4e6b699?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="pbakaus" href="/zynga/scroller/commits/master/src/Animate.js?author=pbakaus"><img height="20" src="https://secure.gravatar.com/avatar/9fb120a88c85d93be416ed62b8ab5e16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="BonsaiDen" href="/zynga/scroller/commits/master/src/Animate.js?author=BonsaiDen"><img height="20" src="https://secure.gravatar.com/avatar/b04d74db65a7a2dc6e554e50dd4708b2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/c0c7a0a5a4d090dcbfbee077b4e6b699?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/levito">levito</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/9fb120a88c85d93be416ed62b8ab5e16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/pbakaus">pbakaus</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/b04d74db65a7a2dc6e554e50dd4708b2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/BonsaiDen">BonsaiDen</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>240 lines (194 sloc)</span>
        <span>6.721 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/zynga/scroller/edit/master/src/Animate.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/zynga/scroller/raw/master/src/Animate.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/zynga/scroller/blame/master/src/Animate.js" class="button minibutton ">Blame</a>
          <a href="/zynga/scroller/commits/master/src/Animate.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/zynga/scroller/delete/master/src/Animate.js"
               title="Fork this project and delete file" data-method="post" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * Scroller</span></div><div class='line' id='LC3'><span class="cm"> * http://github.com/zynga/scroller</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * Copyright 2011, Zynga Inc.</span></div><div class='line' id='LC6'><span class="cm"> * Licensed under the MIT License.</span></div><div class='line' id='LC7'><span class="cm"> * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt</span></div><div class='line' id='LC8'><span class="cm"> *</span></div><div class='line' id='LC9'><span class="cm"> * Based on the work of: Unify Project (unify-project.org)</span></div><div class='line' id='LC10'><span class="cm"> * http://unify-project.org</span></div><div class='line' id='LC11'><span class="cm"> * Copyright 2011, Deutsche Telekom AG</span></div><div class='line' id='LC12'><span class="cm"> * License: MIT + Apache (V2)</span></div><div class='line' id='LC13'><span class="cm"> */</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'><span class="cm">/**</span></div><div class='line' id='LC16'><span class="cm"> * Generic animation class with support for dropped frames both optional easing and duration.</span></div><div class='line' id='LC17'><span class="cm"> *</span></div><div class='line' id='LC18'><span class="cm"> * Optional duration is useful when the lifetime is defined by another condition than time</span></div><div class='line' id='LC19'><span class="cm"> * e.g. speed of an animating object, etc.</span></div><div class='line' id='LC20'><span class="cm"> *</span></div><div class='line' id='LC21'><span class="cm"> * Dropped frame logic allows to keep using the same updater logic independent from the actual</span></div><div class='line' id='LC22'><span class="cm"> * rendering. This eases a lot of cases where it might be pretty complex to break down a state</span></div><div class='line' id='LC23'><span class="cm"> * based on the pure time difference.</span></div><div class='line' id='LC24'><span class="cm"> */</span></div><div class='line' id='LC25'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">global</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>	<span class="kd">var</span> <span class="nx">time</span> <span class="o">=</span> <span class="nb">Date</span><span class="p">.</span><span class="nx">now</span> <span class="o">||</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC27'>		<span class="k">return</span> <span class="o">+</span><span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC28'>	<span class="p">};</span></div><div class='line' id='LC29'>	<span class="kd">var</span> <span class="nx">desiredFrames</span> <span class="o">=</span> <span class="mi">60</span><span class="p">;</span></div><div class='line' id='LC30'>	<span class="kd">var</span> <span class="nx">millisecondsPerSecond</span> <span class="o">=</span> <span class="mi">1000</span><span class="p">;</span></div><div class='line' id='LC31'>	<span class="kd">var</span> <span class="nx">running</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC32'>	<span class="kd">var</span> <span class="nx">counter</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>	<span class="c1">// Create namespaces</span></div><div class='line' id='LC35'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">global</span><span class="p">.</span><span class="nx">core</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC36'>		<span class="nx">global</span><span class="p">.</span><span class="nx">core</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">effect</span> <span class="o">:</span> <span class="p">{}</span> <span class="p">};</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">core</span><span class="p">.</span><span class="nx">effect</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC39'>		<span class="nx">core</span><span class="p">.</span><span class="nx">effect</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC40'>	<span class="p">}</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>	<span class="nx">core</span><span class="p">.</span><span class="nx">effect</span><span class="p">.</span><span class="nx">Animate</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>		<span class="cm">/**</span></div><div class='line' id='LC45'><span class="cm">		 * A requestAnimationFrame wrapper / polyfill.</span></div><div class='line' id='LC46'><span class="cm">		 *</span></div><div class='line' id='LC47'><span class="cm">		 * @param callback {Function} The callback to be invoked before the next repaint.</span></div><div class='line' id='LC48'><span class="cm">		 * @param root {HTMLElement} The root element for the repaint</span></div><div class='line' id='LC49'><span class="cm">		 */</span></div><div class='line' id='LC50'>		<span class="nx">requestAnimationFrame</span><span class="o">:</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>			<span class="c1">// Check for request animation Frame support</span></div><div class='line' id='LC53'>			<span class="kd">var</span> <span class="nx">requestFrame</span> <span class="o">=</span> <span class="nx">global</span><span class="p">.</span><span class="nx">requestAnimationFrame</span> <span class="o">||</span> <span class="nx">global</span><span class="p">.</span><span class="nx">webkitRequestAnimationFrame</span> <span class="o">||</span> <span class="nx">global</span><span class="p">.</span><span class="nx">mozRequestAnimationFrame</span> <span class="o">||</span> <span class="nx">global</span><span class="p">.</span><span class="nx">oRequestAnimationFrame</span><span class="p">;</span></div><div class='line' id='LC54'>			<span class="kd">var</span> <span class="nx">isNative</span> <span class="o">=</span> <span class="o">!!</span><span class="nx">requestFrame</span><span class="p">;</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>			<span class="k">if</span> <span class="p">(</span><span class="nx">requestFrame</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="sr">/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">requestFrame</span><span class="p">.</span><span class="nx">toString</span><span class="p">()))</span> <span class="p">{</span></div><div class='line' id='LC57'>				<span class="nx">isNative</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC58'>			<span class="p">}</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>			<span class="k">if</span> <span class="p">(</span><span class="nx">isNative</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>				<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">callback</span><span class="p">,</span> <span class="nx">root</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>					<span class="nx">requestFrame</span><span class="p">(</span><span class="nx">callback</span><span class="p">,</span> <span class="nx">root</span><span class="p">)</span></div><div class='line' id='LC63'>				<span class="p">};</span></div><div class='line' id='LC64'>			<span class="p">}</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>			<span class="kd">var</span> <span class="nx">TARGET_FPS</span> <span class="o">=</span> <span class="mi">60</span><span class="p">;</span></div><div class='line' id='LC67'>			<span class="kd">var</span> <span class="nx">requests</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC68'>			<span class="kd">var</span> <span class="nx">requestCount</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC69'>			<span class="kd">var</span> <span class="nx">rafHandle</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC70'>			<span class="kd">var</span> <span class="nx">intervalHandle</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC71'>			<span class="kd">var</span> <span class="nx">lastActive</span> <span class="o">=</span> <span class="o">+</span><span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">callback</span><span class="p">,</span> <span class="nx">root</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC74'>				<span class="kd">var</span> <span class="nx">callbackHandle</span> <span class="o">=</span> <span class="nx">rafHandle</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>				<span class="c1">// Store callback</span></div><div class='line' id='LC77'>				<span class="nx">requests</span><span class="p">[</span><span class="nx">callbackHandle</span><span class="p">]</span> <span class="o">=</span> <span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC78'>				<span class="nx">requestCount</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>				<span class="c1">// Create timeout at first request</span></div><div class='line' id='LC81'>				<span class="k">if</span> <span class="p">(</span><span class="nx">intervalHandle</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>					<span class="nx">intervalHandle</span> <span class="o">=</span> <span class="nx">setInterval</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>						<span class="kd">var</span> <span class="nx">time</span> <span class="o">=</span> <span class="o">+</span><span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC86'>						<span class="kd">var</span> <span class="nx">currentRequests</span> <span class="o">=</span> <span class="nx">requests</span><span class="p">;</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>						<span class="c1">// Reset data structure before executing callbacks</span></div><div class='line' id='LC89'>						<span class="nx">requests</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC90'>						<span class="nx">requestCount</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>						<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">currentRequests</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC93'>							<span class="k">if</span> <span class="p">(</span><span class="nx">currentRequests</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">key</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC94'>								<span class="nx">currentRequests</span><span class="p">[</span><span class="nx">key</span><span class="p">](</span><span class="nx">time</span><span class="p">);</span></div><div class='line' id='LC95'>								<span class="nx">lastActive</span> <span class="o">=</span> <span class="nx">time</span><span class="p">;</span></div><div class='line' id='LC96'>							<span class="p">}</span></div><div class='line' id='LC97'>						<span class="p">}</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>						<span class="c1">// Disable the timeout when nothing happens for a certain</span></div><div class='line' id='LC100'>						<span class="c1">// period of time</span></div><div class='line' id='LC101'>						<span class="k">if</span> <span class="p">(</span><span class="nx">time</span> <span class="o">-</span> <span class="nx">lastActive</span> <span class="o">&gt;</span> <span class="mi">2500</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC102'>							<span class="nx">clearInterval</span><span class="p">(</span><span class="nx">intervalHandle</span><span class="p">);</span></div><div class='line' id='LC103'>							<span class="nx">intervalHandle</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC104'>						<span class="p">}</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>					<span class="p">},</span> <span class="mi">1000</span> <span class="o">/</span> <span class="nx">TARGET_FPS</span><span class="p">);</span></div><div class='line' id='LC107'>				<span class="p">}</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>				<span class="k">return</span> <span class="nx">callbackHandle</span><span class="p">;</span></div><div class='line' id='LC110'>			<span class="p">};</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>		<span class="p">})(),</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>		<span class="cm">/**</span></div><div class='line' id='LC116'><span class="cm">		 * Stops the given animation.</span></div><div class='line' id='LC117'><span class="cm">		 *</span></div><div class='line' id='LC118'><span class="cm">		 * @param id {Integer} Unique animation ID</span></div><div class='line' id='LC119'><span class="cm">		 * @return {Boolean} Whether the animation was stopped (aka, was running before)</span></div><div class='line' id='LC120'><span class="cm">		 */</span></div><div class='line' id='LC121'>		<span class="nx">stop</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC122'>			<span class="kd">var</span> <span class="nx">cleared</span> <span class="o">=</span> <span class="nx">running</span><span class="p">[</span><span class="nx">id</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC123'>			<span class="k">if</span> <span class="p">(</span><span class="nx">cleared</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC124'>				<span class="nx">running</span><span class="p">[</span><span class="nx">id</span><span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC125'>			<span class="p">}</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>			<span class="k">return</span> <span class="nx">cleared</span><span class="p">;</span></div><div class='line' id='LC128'>		<span class="p">},</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>		<span class="cm">/**</span></div><div class='line' id='LC132'><span class="cm">		 * Whether the given animation is still running.</span></div><div class='line' id='LC133'><span class="cm">		 *</span></div><div class='line' id='LC134'><span class="cm">		 * @param id {Integer} Unique animation ID</span></div><div class='line' id='LC135'><span class="cm">		 * @return {Boolean} Whether the animation is still running</span></div><div class='line' id='LC136'><span class="cm">		 */</span></div><div class='line' id='LC137'>		<span class="nx">isRunning</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC138'>			<span class="k">return</span> <span class="nx">running</span><span class="p">[</span><span class="nx">id</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC139'>		<span class="p">},</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>		<span class="cm">/**</span></div><div class='line' id='LC143'><span class="cm">		 * Start the animation.</span></div><div class='line' id='LC144'><span class="cm">		 *</span></div><div class='line' id='LC145'><span class="cm">		 * @param stepCallback {Function} Pointer to function which is executed on every step.</span></div><div class='line' id='LC146'><span class="cm">		 *   Signature of the method should be `function(percent, now, virtual) { return continueWithAnimation; }`</span></div><div class='line' id='LC147'><span class="cm">		 * @param verifyCallback {Function} Executed before every animation step.</span></div><div class='line' id='LC148'><span class="cm">		 *   Signature of the method should be `function() { return continueWithAnimation; }`</span></div><div class='line' id='LC149'><span class="cm">		 * @param completedCallback {Function}</span></div><div class='line' id='LC150'><span class="cm">		 *   Signature of the method should be `function(droppedFrames, finishedAnimation) {}`</span></div><div class='line' id='LC151'><span class="cm">		 * @param duration {Integer} Milliseconds to run the animation</span></div><div class='line' id='LC152'><span class="cm">		 * @param easingMethod {Function} Pointer to easing function</span></div><div class='line' id='LC153'><span class="cm">		 *   Signature of the method should be `function(percent) { return modifiedValue; }`</span></div><div class='line' id='LC154'><span class="cm">		 * @param root {Element ? document.body} Render root, when available. Used for internal</span></div><div class='line' id='LC155'><span class="cm">		 *   usage of requestAnimationFrame.</span></div><div class='line' id='LC156'><span class="cm">		 * @return {Integer} Identifier of animation. Can be used to stop it any time.</span></div><div class='line' id='LC157'><span class="cm">		 */</span></div><div class='line' id='LC158'>		<span class="nx">start</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">stepCallback</span><span class="p">,</span> <span class="nx">verifyCallback</span><span class="p">,</span> <span class="nx">completedCallback</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">easingMethod</span><span class="p">,</span> <span class="nx">root</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>			<span class="kd">var</span> <span class="nx">start</span> <span class="o">=</span> <span class="nx">time</span><span class="p">();</span></div><div class='line' id='LC161'>			<span class="kd">var</span> <span class="nx">lastFrame</span> <span class="o">=</span> <span class="nx">start</span><span class="p">;</span></div><div class='line' id='LC162'>			<span class="kd">var</span> <span class="nx">percent</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC163'>			<span class="kd">var</span> <span class="nx">dropCounter</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC164'>			<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="nx">counter</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">root</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC167'>				<span class="nx">root</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">;</span></div><div class='line' id='LC168'>			<span class="p">}</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>			<span class="c1">// Compacting running db automatically every few new animations</span></div><div class='line' id='LC171'>			<span class="k">if</span> <span class="p">(</span><span class="nx">id</span> <span class="o">%</span> <span class="mi">20</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC172'>				<span class="kd">var</span> <span class="nx">newRunning</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC173'>				<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">usedId</span> <span class="k">in</span> <span class="nx">running</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC174'>					<span class="nx">newRunning</span><span class="p">[</span><span class="nx">usedId</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC175'>				<span class="p">}</span></div><div class='line' id='LC176'>				<span class="nx">running</span> <span class="o">=</span> <span class="nx">newRunning</span><span class="p">;</span></div><div class='line' id='LC177'>			<span class="p">}</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>			<span class="c1">// This is the internal step method which is called every few milliseconds</span></div><div class='line' id='LC180'>			<span class="kd">var</span> <span class="nx">step</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">virtual</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'><br/></div><div class='line' id='LC182'>				<span class="c1">// Normalize virtual value</span></div><div class='line' id='LC183'>				<span class="kd">var</span> <span class="nx">render</span> <span class="o">=</span> <span class="nx">virtual</span> <span class="o">!==</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'>				<span class="c1">// Get current time</span></div><div class='line' id='LC186'>				<span class="kd">var</span> <span class="nx">now</span> <span class="o">=</span> <span class="nx">time</span><span class="p">();</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>				<span class="c1">// Verification is executed before next animation step</span></div><div class='line' id='LC189'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">running</span><span class="p">[</span><span class="nx">id</span><span class="p">]</span> <span class="o">||</span> <span class="p">(</span><span class="nx">verifyCallback</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">verifyCallback</span><span class="p">(</span><span class="nx">id</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC190'><br/></div><div class='line' id='LC191'>					<span class="nx">running</span><span class="p">[</span><span class="nx">id</span><span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC192'>					<span class="nx">completedCallback</span> <span class="o">&amp;&amp;</span> <span class="nx">completedCallback</span><span class="p">(</span><span class="nx">desiredFrames</span> <span class="o">-</span> <span class="p">(</span><span class="nx">dropCounter</span> <span class="o">/</span> <span class="p">((</span><span class="nx">now</span> <span class="o">-</span> <span class="nx">start</span><span class="p">)</span> <span class="o">/</span> <span class="nx">millisecondsPerSecond</span><span class="p">)),</span> <span class="nx">id</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC193'>					<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>				<span class="p">}</span></div><div class='line' id='LC196'><br/></div><div class='line' id='LC197'>				<span class="c1">// For the current rendering to apply let&#39;s update omitted steps in memory.</span></div><div class='line' id='LC198'>				<span class="c1">// This is important to bring internal state variables up-to-date with progress in time.</span></div><div class='line' id='LC199'>				<span class="k">if</span> <span class="p">(</span><span class="nx">render</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC200'><br/></div><div class='line' id='LC201'>					<span class="kd">var</span> <span class="nx">droppedFrames</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">((</span><span class="nx">now</span> <span class="o">-</span> <span class="nx">lastFrame</span><span class="p">)</span> <span class="o">/</span> <span class="p">(</span><span class="nx">millisecondsPerSecond</span> <span class="o">/</span> <span class="nx">desiredFrames</span><span class="p">))</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC202'>					<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">droppedFrames</span><span class="p">,</span> <span class="mi">4</span><span class="p">);</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC203'>						<span class="nx">step</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC204'>						<span class="nx">dropCounter</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC205'>					<span class="p">}</span></div><div class='line' id='LC206'><br/></div><div class='line' id='LC207'>				<span class="p">}</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>				<span class="c1">// Compute percent value</span></div><div class='line' id='LC210'>				<span class="k">if</span> <span class="p">(</span><span class="nx">duration</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC211'>					<span class="nx">percent</span> <span class="o">=</span> <span class="p">(</span><span class="nx">now</span> <span class="o">-</span> <span class="nx">start</span><span class="p">)</span> <span class="o">/</span> <span class="nx">duration</span><span class="p">;</span></div><div class='line' id='LC212'>					<span class="k">if</span> <span class="p">(</span><span class="nx">percent</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC213'>						<span class="nx">percent</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC214'>					<span class="p">}</span></div><div class='line' id='LC215'>				<span class="p">}</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'>				<span class="c1">// Execute step callback, then...</span></div><div class='line' id='LC218'>				<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">easingMethod</span> <span class="o">?</span> <span class="nx">easingMethod</span><span class="p">(</span><span class="nx">percent</span><span class="p">)</span> <span class="o">:</span> <span class="nx">percent</span><span class="p">;</span></div><div class='line' id='LC219'>				<span class="k">if</span> <span class="p">((</span><span class="nx">stepCallback</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">now</span><span class="p">,</span> <span class="nx">render</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">||</span> <span class="nx">percent</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">render</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'>					<span class="nx">running</span><span class="p">[</span><span class="nx">id</span><span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC221'>					<span class="nx">completedCallback</span> <span class="o">&amp;&amp;</span> <span class="nx">completedCallback</span><span class="p">(</span><span class="nx">desiredFrames</span> <span class="o">-</span> <span class="p">(</span><span class="nx">dropCounter</span> <span class="o">/</span> <span class="p">((</span><span class="nx">now</span> <span class="o">-</span> <span class="nx">start</span><span class="p">)</span> <span class="o">/</span> <span class="nx">millisecondsPerSecond</span><span class="p">)),</span> <span class="nx">id</span><span class="p">,</span> <span class="nx">percent</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">||</span> <span class="nx">duration</span> <span class="o">==</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC222'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">render</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC223'>					<span class="nx">lastFrame</span> <span class="o">=</span> <span class="nx">now</span><span class="p">;</span></div><div class='line' id='LC224'>					<span class="nx">core</span><span class="p">.</span><span class="nx">effect</span><span class="p">.</span><span class="nx">Animate</span><span class="p">.</span><span class="nx">requestAnimationFrame</span><span class="p">(</span><span class="nx">step</span><span class="p">,</span> <span class="nx">root</span><span class="p">);</span></div><div class='line' id='LC225'>				<span class="p">}</span></div><div class='line' id='LC226'>			<span class="p">};</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'>			<span class="c1">// Mark as running</span></div><div class='line' id='LC229'>			<span class="nx">running</span><span class="p">[</span><span class="nx">id</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>			<span class="c1">// Init first step</span></div><div class='line' id='LC232'>			<span class="nx">core</span><span class="p">.</span><span class="nx">effect</span><span class="p">.</span><span class="nx">Animate</span><span class="p">.</span><span class="nx">requestAnimationFrame</span><span class="p">(</span><span class="nx">step</span><span class="p">,</span> <span class="nx">root</span><span class="p">);</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>			<span class="c1">// Return unique animation ID</span></div><div class='line' id='LC235'>			<span class="k">return</span> <span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC236'>		<span class="p">}</span></div><div class='line' id='LC237'>	<span class="p">};</span></div><div class='line' id='LC238'><span class="p">})(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC239'><br/></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

          </div>
        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div>
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.07069s from fe16.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/zynga/scroller/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

;


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>scroller/src/EasyScroller.js at master · zynga/scroller</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe16.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="127001" name="octolytics-actor-id" /><meta content="codecollision" name="octolytics-actor-login" /><meta content="522a6d151647c4cd631ba7bc662f60255cdb987fd4024ae64c1aa891ccc523fd" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="ugPoRj30dyzZBnfLIm5rl3XpN2kqwe6o+PXDdM8Hl5w=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-18426ad2e511ad881d5d0a2b133329f94baf1305.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-13a1767e53653178a55a8f1aa8fc7567598b5369.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-e8054ad804a1cf9e9849130fee5a4a5487b663ed.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-0444c1d0a0bb2f32a3c081d0aa3b6687cbd0ce39.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="012ce5e561582d6552e650e39a764c8a">

        <link data-pjax-transient rel='permalink' href='/zynga/scroller/blob/a44d7c2240e0e1d80ea0d172e1d455ea61b0cec7/src/EasyScroller.js'>
  <meta property="og:title" content="scroller"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/zynga/scroller"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="scroller - Accelerated panning and zooming for HTML and Canvas"/>

  <meta name="description" content="scroller - Accelerated panning and zooming for HTML and Canvas" />

  <meta content="79708" name="octolytics-dimension-user_id" /><meta content="zynga" name="octolytics-dimension-user_login" /><meta content="2377206" name="octolytics-dimension-repository_id" /><meta content="zynga/scroller" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2377206" name="octolytics-dimension-repository_network_root_id" /><meta content="zynga/scroller" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/zynga/scroller/commits/master.atom" rel="alternate" title="Recent Commits to scroller:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="codecollision"
      data-repo="zynga/scroller"
      data-branch="master"
      data-sha="35ede7ba17354b70176d0885cce38b54a86d28ed"
  >

    <input type="hidden" name="nwo" value="zynga/scroller" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/codecollision" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/ef16bf2ac92637b80aee919d4ff26f0c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> codecollision
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="zynga/scroller">This repository</span>
    </li>
    <li>
      <a href="/zynga/scroller/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="ugPoRj30dyzZBnfLIm5rl3XpN2kqwe6o+PXDdM8Hl5w=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2377206" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button  js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container on">
      <a href="/zynga/scroller/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
      </a>
      <a href="/zynga/scroller/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star"></span><span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/zynga/scroller/stargazers">1,117</a>
    </li>

        <li>
          <a href="/zynga/scroller/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/zynga/scroller/network" class="social-count">128</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/zynga" class="url fn" itemprop="url" rel="author"><span itemprop="title">zynga</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/zynga/scroller" class="js-current-repository js-repo-home-link">scroller</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container
            ">

          <div class="repository-sidebar">

              

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/zynga/scroller" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /zynga/scroller">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/zynga/scroller/issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /zynga/scroller/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>10</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/zynga/scroller/pulls" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /zynga/scroller/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/zynga/scroller/wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /zynga/scroller/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/zynga/scroller/pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /zynga/scroller/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/zynga/scroller/graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /zynga/scroller/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/zynga/scroller/network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /zynga/scroller/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>


              <div class="only-with-full-nav">

                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/zynga/scroller.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/zynga/scroller.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:zynga/scroller.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:zynga/scroller.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/zynga/scroller" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/zynga/scroller" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>


  <a href="github-windows://openRepo/https://github.com/zynga/scroller" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                  <a href="/zynga/scroller/archive/master.zip"
                     class="minibutton sidebar-button"
                     title="Download this repository as a zip file"
                     rel="nofollow">
                    <span class="octicon octicon-cloud-download"></span>
                    Download ZIP
                  </a>

              </div>
          </div>

          <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
            


<!-- blob contrib key: blob_contributors:v21:04a318f8e608876106e92093bd472867 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:04a318f8e608876106e92093bd472867 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/zynga/scroller/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/gh-pages/src/EasyScroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/master/src/EasyScroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.2.2/src/EasyScroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.2" rel="nofollow" title="1.2.2">1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.2.1/src/EasyScroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.1" rel="nofollow" title="1.2.1">1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.2/src/EasyScroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2" rel="nofollow" title="1.2">1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.1/src/EasyScroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1" rel="nofollow" title="1.1">1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zynga/scroller/blob/1.0/src/EasyScroller.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0" rel="nofollow" title="1.0">1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zynga/scroller" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">scroller</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zynga/scroller/tree/master/src" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">EasyScroller.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="src/EasyScroller.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/9fb120a88c85d93be416ed62b8ab5e16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/pbakaus" rel="author">pbakaus</a></span>
    <time class="js-relative-date" datetime="2012-01-19T06:24:07-08:00" title="2012-01-19 06:24:07">January 19, 2012</time>
    <div class="commit-title">
        <a href="/zynga/scroller/commit/f222d0433e53c19bb04c8b8ab5196b16aa6a27d6" class="message" data-pjax="true">fixed min zoom and max zoom parsing in EasyScroller, prevent default …</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/9fb120a88c85d93be416ed62b8ab5e16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/pbakaus">pbakaus</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>204 lines (144 sloc)</span>
        <span>5.168 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/zynga/scroller/edit/master/src/EasyScroller.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/zynga/scroller/raw/master/src/EasyScroller.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/zynga/scroller/blame/master/src/EasyScroller.js" class="button minibutton ">Blame</a>
          <a href="/zynga/scroller/commits/master/src/EasyScroller.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/zynga/scroller/delete/master/src/EasyScroller.js"
               title="Fork this project and delete file" data-method="post" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="kd">var</span> <span class="nx">EasyScroller</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">content</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'>	<span class="k">this</span><span class="p">.</span><span class="nx">content</span> <span class="o">=</span> <span class="nx">content</span><span class="p">;</span></div><div class='line' id='LC4'>	<span class="k">this</span><span class="p">.</span><span class="nx">container</span> <span class="o">=</span> <span class="nx">content</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span></div><div class='line' id='LC5'>	<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'>	<span class="c1">// create Scroller instance</span></div><div class='line' id='LC8'>	<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC9'>	<span class="k">this</span><span class="p">.</span><span class="nx">scroller</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Scroller</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">,</span> <span class="nx">zoom</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC10'>		<span class="nx">that</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">,</span> <span class="nx">zoom</span><span class="p">);</span></div><div class='line' id='LC11'>	<span class="p">},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'>	<span class="c1">// bind events</span></div><div class='line' id='LC14'>	<span class="k">this</span><span class="p">.</span><span class="nx">bindEvents</span><span class="p">();</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>	<span class="c1">// the content element needs a correct transform origin for zooming</span></div><div class='line' id='LC17'>	<span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">EasyScroller</span><span class="p">.</span><span class="nx">vendorPrefix</span> <span class="o">+</span> <span class="s1">&#39;TransformOrigin&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="s2">&quot;left top&quot;</span><span class="p">;</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'>	<span class="c1">// reflow for the first time</span></div><div class='line' id='LC20'>	<span class="k">this</span><span class="p">.</span><span class="nx">reflow</span><span class="p">();</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'><span class="p">};</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'><span class="nx">EasyScroller</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">render</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'>	<span class="kd">var</span> <span class="nx">docStyle</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">style</span><span class="p">;</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>	<span class="kd">var</span> <span class="nx">engine</span><span class="p">;</span></div><div class='line' id='LC29'>	<span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">opera</span> <span class="o">&amp;&amp;</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">opera</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;[object Opera]&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>		<span class="nx">engine</span> <span class="o">=</span> <span class="s1">&#39;presto&#39;</span><span class="p">;</span></div><div class='line' id='LC31'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;MozAppearance&#39;</span> <span class="k">in</span> <span class="nx">docStyle</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>		<span class="nx">engine</span> <span class="o">=</span> <span class="s1">&#39;gecko&#39;</span><span class="p">;</span></div><div class='line' id='LC33'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;WebkitAppearance&#39;</span> <span class="k">in</span> <span class="nx">docStyle</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC34'>		<span class="nx">engine</span> <span class="o">=</span> <span class="s1">&#39;webkit&#39;</span><span class="p">;</span></div><div class='line' id='LC35'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">cpuClass</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC36'>		<span class="nx">engine</span> <span class="o">=</span> <span class="s1">&#39;trident&#39;</span><span class="p">;</span></div><div class='line' id='LC37'>	<span class="p">}</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>	<span class="kd">var</span> <span class="nx">vendorPrefix</span> <span class="o">=</span> <span class="nx">EasyScroller</span><span class="p">.</span><span class="nx">vendorPrefix</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC40'>		<span class="nx">trident</span><span class="o">:</span> <span class="s1">&#39;ms&#39;</span><span class="p">,</span></div><div class='line' id='LC41'>		<span class="nx">gecko</span><span class="o">:</span> <span class="s1">&#39;Moz&#39;</span><span class="p">,</span></div><div class='line' id='LC42'>		<span class="nx">webkit</span><span class="o">:</span> <span class="s1">&#39;Webkit&#39;</span><span class="p">,</span></div><div class='line' id='LC43'>		<span class="nx">presto</span><span class="o">:</span> <span class="s1">&#39;O&#39;</span></div><div class='line' id='LC44'>	<span class="p">}[</span><span class="nx">engine</span><span class="p">];</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>	<span class="kd">var</span> <span class="nx">helperElem</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span></div><div class='line' id='LC47'>	<span class="kd">var</span> <span class="nx">undef</span><span class="p">;</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>	<span class="kd">var</span> <span class="nx">perspectiveProperty</span> <span class="o">=</span> <span class="nx">vendorPrefix</span> <span class="o">+</span> <span class="s2">&quot;Perspective&quot;</span><span class="p">;</span></div><div class='line' id='LC50'>	<span class="kd">var</span> <span class="nx">transformProperty</span> <span class="o">=</span> <span class="nx">vendorPrefix</span> <span class="o">+</span> <span class="s2">&quot;Transform&quot;</span><span class="p">;</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>	<span class="k">if</span> <span class="p">(</span><span class="nx">helperElem</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">perspectiveProperty</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">undef</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>		<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">,</span> <span class="nx">zoom</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC55'>			<span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">transformProperty</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;translate3d(&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="o">-</span><span class="nx">left</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;px,&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="o">-</span><span class="nx">top</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;px,0) scale(&#39;</span> <span class="o">+</span> <span class="nx">zoom</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">;</span></div><div class='line' id='LC56'>		<span class="p">};</span>	</div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">helperElem</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">transformProperty</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">undef</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>		<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">,</span> <span class="nx">zoom</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>			<span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">transformProperty</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;translate(&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="o">-</span><span class="nx">left</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;px,&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="o">-</span><span class="nx">top</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;px) scale(&#39;</span> <span class="o">+</span> <span class="nx">zoom</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">;</span></div><div class='line' id='LC62'>		<span class="p">};</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>		<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">,</span> <span class="nx">zoom</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC67'>			<span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginLeft</span> <span class="o">=</span> <span class="nx">left</span> <span class="o">?</span> <span class="p">(</span><span class="o">-</span><span class="nx">left</span><span class="o">/</span><span class="nx">zoom</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC68'>			<span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span> <span class="o">=</span> <span class="nx">top</span> <span class="o">?</span> <span class="p">(</span><span class="o">-</span><span class="nx">top</span><span class="o">/</span><span class="nx">zoom</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC69'>			<span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">zoom</span> <span class="o">=</span> <span class="nx">zoom</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC70'>		<span class="p">};</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>	<span class="p">}</span></div><div class='line' id='LC73'><span class="p">})();</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'><span class="nx">EasyScroller</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">reflow</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>	<span class="c1">// set the right scroller dimensions</span></div><div class='line' id='LC78'>	<span class="k">this</span><span class="p">.</span><span class="nx">scroller</span><span class="p">.</span><span class="nx">setDimensions</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">clientWidth</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">clientHeight</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="p">);</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>	<span class="c1">// refresh the position for zooming purposes</span></div><div class='line' id='LC81'>	<span class="kd">var</span> <span class="nx">rect</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">getBoundingClientRect</span><span class="p">();</span></div><div class='line' id='LC82'>	<span class="k">this</span><span class="p">.</span><span class="nx">scroller</span><span class="p">.</span><span class="nx">setPosition</span><span class="p">(</span><span class="nx">rect</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">clientLeft</span><span class="p">,</span> <span class="nx">rect</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">clientTop</span><span class="p">);</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'><span class="p">};</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'><span class="nx">EasyScroller</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">bindEvents</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>	<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>	<span class="c1">// reflow handling</span></div><div class='line' id='LC91'>	<span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;resize&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC92'>		<span class="nx">that</span><span class="p">.</span><span class="nx">reflow</span><span class="p">();</span></div><div class='line' id='LC93'>	<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>	<span class="c1">// touch devices bind touch events</span></div><div class='line' id='LC96'>	<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;ontouchstart&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>		<span class="k">this</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;touchstart&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>			<span class="c1">// Don&#39;t react if initial down happens on a form element</span></div><div class='line' id='LC101'>			<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">e</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">target</span> <span class="o">&amp;&amp;</span> <span class="nx">e</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">target</span><span class="p">.</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/input|textarea|select/i</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC102'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC103'>			<span class="p">}</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>			<span class="nx">that</span><span class="p">.</span><span class="nx">scroller</span><span class="p">.</span><span class="nx">doTouchStart</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">touches</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">);</span></div><div class='line' id='LC106'>			<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC107'><br/></div><div class='line' id='LC108'>		<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>		<span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;touchmove&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>			<span class="nx">that</span><span class="p">.</span><span class="nx">scroller</span><span class="p">.</span><span class="nx">doTouchMove</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">touches</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">scale</span><span class="p">);</span></div><div class='line' id='LC112'>		<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'>		<span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;touchend&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'>			<span class="nx">that</span><span class="p">.</span><span class="nx">scroller</span><span class="p">.</span><span class="nx">doTouchEnd</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">);</span></div><div class='line' id='LC116'>		<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>		<span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;touchcancel&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC119'>			<span class="nx">that</span><span class="p">.</span><span class="nx">scroller</span><span class="p">.</span><span class="nx">doTouchEnd</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">);</span></div><div class='line' id='LC120'>		<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>	<span class="c1">// non-touch bind mouse events</span></div><div class='line' id='LC123'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>		<span class="kd">var</span> <span class="nx">mousedown</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>		<span class="k">this</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;mousedown&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>			<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/input|textarea|select/i</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC130'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC131'>			<span class="p">}</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>			<span class="nx">that</span><span class="p">.</span><span class="nx">scroller</span><span class="p">.</span><span class="nx">doTouchStart</span><span class="p">([{</span></div><div class='line' id='LC134'>				<span class="nx">pageX</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageX</span><span class="p">,</span></div><div class='line' id='LC135'>				<span class="nx">pageY</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageY</span></div><div class='line' id='LC136'>			<span class="p">}],</span> <span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">);</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>			<span class="nx">mousedown</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC139'>			<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>		<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>		<span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;mousemove&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">mousedown</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC146'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC147'>			<span class="p">}</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>			<span class="nx">that</span><span class="p">.</span><span class="nx">scroller</span><span class="p">.</span><span class="nx">doTouchMove</span><span class="p">([{</span></div><div class='line' id='LC150'>				<span class="nx">pageX</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageX</span><span class="p">,</span></div><div class='line' id='LC151'>				<span class="nx">pageY</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageY</span></div><div class='line' id='LC152'>			<span class="p">}],</span> <span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">);</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>			<span class="nx">mousedown</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>		<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'>		<span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;mouseup&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">mousedown</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC161'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC162'>			<span class="p">}</span></div><div class='line' id='LC163'><br/></div><div class='line' id='LC164'>			<span class="nx">that</span><span class="p">.</span><span class="nx">scroller</span><span class="p">.</span><span class="nx">doTouchEnd</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">);</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>			<span class="nx">mousedown</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>		<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>		<span class="k">this</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;mousewheel&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC171'>			<span class="k">if</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">zooming</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC172'>				<span class="nx">that</span><span class="p">.</span><span class="nx">scroller</span><span class="p">.</span><span class="nx">doMouseZoom</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">wheelDelta</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageX</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageY</span><span class="p">);</span>	</div><div class='line' id='LC173'>				<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC174'>			<span class="p">}</span></div><div class='line' id='LC175'>		<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'>	<span class="p">}</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'><span class="p">};</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'><span class="c1">// automatically attach an EasyScroller to elements found with the right data attributes</span></div><div class='line' id='LC182'><span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;DOMContentLoaded&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>	<span class="kd">var</span> <span class="nx">elements</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s1">&#39;[data-scrollable],[data-zoomable]&#39;</span><span class="p">),</span> <span class="nx">element</span><span class="p">;</span></div><div class='line' id='LC185'>	<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">elements</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'>		<span class="nx">element</span> <span class="o">=</span> <span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC188'>		<span class="kd">var</span> <span class="nx">scrollable</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">dataset</span><span class="p">.</span><span class="nx">scrollable</span><span class="p">;</span></div><div class='line' id='LC189'>		<span class="kd">var</span> <span class="nx">zoomable</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">dataset</span><span class="p">.</span><span class="nx">zoomable</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC190'>		<span class="kd">var</span> <span class="nx">zoomOptions</span> <span class="o">=</span> <span class="nx">zoomable</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;-&#39;</span><span class="p">);</span></div><div class='line' id='LC191'>		<span class="kd">var</span> <span class="nx">minZoom</span> <span class="o">=</span> <span class="nx">zoomOptions</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">zoomOptions</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC192'>		<span class="kd">var</span> <span class="nx">maxZoom</span> <span class="o">=</span> <span class="nx">zoomOptions</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">zoomOptions</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'>		<span class="k">new</span> <span class="nx">EasyScroller</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC195'>			<span class="nx">scrollingX</span><span class="o">:</span> <span class="nx">scrollable</span> <span class="o">===</span> <span class="s1">&#39;true&#39;</span> <span class="o">||</span> <span class="nx">scrollable</span> <span class="o">===</span> <span class="s1">&#39;x&#39;</span><span class="p">,</span></div><div class='line' id='LC196'>			<span class="nx">scrollingY</span><span class="o">:</span> <span class="nx">scrollable</span> <span class="o">===</span> <span class="s1">&#39;true&#39;</span> <span class="o">||</span> <span class="nx">scrollable</span> <span class="o">===</span> <span class="s1">&#39;y&#39;</span><span class="p">,</span></div><div class='line' id='LC197'>			<span class="nx">zooming</span><span class="o">:</span> <span class="nx">zoomable</span> <span class="o">===</span> <span class="s1">&#39;true&#39;</span> <span class="o">||</span> <span class="nx">zoomOptions</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC198'>			<span class="nx">minZoom</span><span class="o">:</span> <span class="nx">minZoom</span><span class="p">,</span></div><div class='line' id='LC199'>			<span class="nx">maxZoom</span><span class="o">:</span> <span class="nx">maxZoom</span></div><div class='line' id='LC200'>		<span class="p">});</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>	<span class="p">};</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'><span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

          </div>
        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div>
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.07564s from fe16.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/zynga/scroller/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

;/* Copyright (c) 2012 HyeonJe Jun (http://github.com/noraesae)
 * Licensed under the MIT License
 */
((function ($) {

  // The default settings for the plugin
  var defaultSettings = {
    wheelSpeed: 10,
    wheelPropagation: false
  };

  $.fn.perfectScrollbar = function (suppliedSettings, option) {

    // Use the default settings
    var settings = $.extend(true, {}, defaultSettings);
    if (typeof suppliedSettings === "object") {
      // But over-ride any supplied
      $.extend(true, settings, suppliedSettings);
    } else {
      // If no settings were supplied, then the first param must be the option
      option = suppliedSettings;
    }

    if (option === 'update') {
      if ($(this).data('perfect-scrollbar-update')) {
        $(this).data('perfect-scrollbar-update')();
      }
      return $(this);
    }
    else if (option === 'destroy') {
      if ($(this).data('perfect-scrollbar-destroy')) {
        $(this).data('perfect-scrollbar-destroy')();
      }
      return $(this);
    }

    if ($(this).data('perfect-scrollbar')) {
      // if there's already perfect-scrollbar
      return $(this).data('perfect-scrollbar');
    }

    var $this = $(this).addClass('ps-container'),
        $content = $(this).children(),
        $scrollbarX = $("<div class='ps-scrollbar-x'></div>").appendTo($this),
        $scrollbarY = $("<div class='ps-scrollbar-y'></div>").appendTo($this),
        containerWidth,
        containerHeight,
        contentWidth,
        contentHeight,
        scrollbarXWidth,
        scrollbarXLeft,
        scrollbarXBottom = parseInt($scrollbarX.css('bottom'), 10),
        scrollbarYHeight,
        scrollbarYTop,
        scrollbarYRight = parseInt($scrollbarY.css('right'), 10);

    var updateContentScrollTop = function () {
      var scrollTop = parseInt(scrollbarYTop * contentHeight / containerHeight, 10);
      $this.scrollTop(scrollTop);
      $scrollbarX.css({bottom: scrollbarXBottom - scrollTop});
    };

    var updateContentScrollLeft = function () {
      var scrollLeft = parseInt(scrollbarXLeft * contentWidth / containerWidth, 10);
      $this.scrollLeft(scrollLeft);
      $scrollbarY.css({right: scrollbarYRight - scrollLeft});
    };

    var updateBarSizeAndPosition = function () {
      containerWidth = $this.width();
      containerHeight = $this.height();
      contentWidth = $content.outerWidth(false);
      contentHeight = $content.outerHeight(false);
      if (containerWidth < contentWidth) {
        scrollbarXWidth = parseInt(containerWidth * containerWidth / contentWidth, 10);
        scrollbarXLeft = parseInt($this.scrollLeft() * containerWidth / contentWidth, 10);
      }
      else {
        scrollbarXWidth = 0;
        scrollbarXLeft = 0;
        $this.scrollLeft(0);
      }
      if (containerHeight < contentHeight) {
        scrollbarYHeight = parseInt(containerHeight * containerHeight / contentHeight, 10);
        scrollbarYTop = parseInt($this.scrollTop() * containerHeight / contentHeight, 10);
      }
      else {
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

      $scrollbarX.css({left: scrollbarXLeft + $this.scrollLeft(), bottom: scrollbarXBottom - $this.scrollTop(), width: scrollbarXWidth});
      $scrollbarY.css({top: scrollbarYTop + $this.scrollTop(), right: scrollbarYRight - $this.scrollLeft(), height: scrollbarYHeight});
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
      $scrollbarX.css({left: scrollbarXLeft + $this.scrollLeft()});
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
      $scrollbarY.css({top: scrollbarYTop + $this.scrollTop()});
    };

    var bindMouseScrollXHandler = function () {
      var currentLeft,
          currentPageX;

      $scrollbarX.bind('mousedown.perfect-scroll', function (e) {
        currentPageX = e.pageX;
        currentLeft = $scrollbarX.position().left;
        $scrollbarX.addClass('in-scrolling');
        e.stopPropagation();
        e.preventDefault();
      });

      $(document).bind('mousemove.perfect-scroll', function (e) {
        if ($scrollbarX.hasClass('in-scrolling')) {
          moveBarX(currentLeft, e.pageX - currentPageX);
          updateContentScrollLeft();
          e.stopPropagation();
          e.preventDefault();
        }
      });

      $(document).bind('mouseup.perfect-scroll', function (e) {
        if ($scrollbarX.hasClass('in-scrolling')) {
          $scrollbarX.removeClass('in-scrolling');
        }
      });
    };

    var bindMouseScrollYHandler = function () {
      var currentTop,
          currentPageY;

      $scrollbarY.bind('mousedown.perfect-scroll', function (e) {
        currentPageY = e.pageY;
        currentTop = $scrollbarY.position().top;
        $scrollbarY.addClass('in-scrolling');
        e.stopPropagation();
        e.preventDefault();
      });

      $(document).bind('mousemove.perfect-scroll', function (e) {
        if ($scrollbarY.hasClass('in-scrolling')) {
          moveBarY(currentTop, e.pageY - currentPageY);
          updateContentScrollTop();
          e.stopPropagation();
          e.preventDefault();
        }
      });

      $(document).bind('mouseup.perfect-scroll', function (e) {
        if ($scrollbarY.hasClass('in-scrolling')) {
          $scrollbarY.removeClass('in-scrolling');
        }
      });
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

      $this.mousewheel(function (e, delta, deltaX, deltaY) {
        $this.scrollTop($this.scrollTop() - (deltaY * settings.wheelSpeed));
        $this.scrollLeft($this.scrollLeft() + (deltaX * settings.wheelSpeed));

        // update bar position
        updateBarSizeAndPosition();

        if (shouldPreventDefault(deltaX, deltaY)) {
          e.preventDefault();
        }
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
          breakingProcess = null;

      $this.bind("touchstart.perfect-scroll", function (e) {
        var touch = e.originalEvent.targetTouches[0];

        startCoords.pageX = touch.pageX;
        startCoords.pageY = touch.pageY;

        startTime = (new Date()).getTime();

        if (breakingProcess !== null) {
          clearInterval(breakingProcess);
        }
      });
      $this.bind("touchmove.perfect-scroll", function (e) {
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
      });
      $this.bind("touchend.perfect-scroll", function (e) {
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
      $scrollbarX.remove();
      $scrollbarY.remove();
      $this.unbind('mousewheel');
      $this.unbind('touchstart.perfect-scroll');
      $this.unbind('touchmove.perfect-scroll');
      $this.unbind('touchend.perfect-scroll');
      $(window).unbind('mousemove.perfect-scroll');
      $(window).unbind('mouseup.perfect-scroll');
      $this.data('perfect-scrollbar', null);
      $this.data('perfect-scrollbar-update', null);
      $this.data('perfect-scrollbar-destroy', null);
    };

    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

    var initialize = function () {
      updateBarSizeAndPosition();
      bindMouseScrollXHandler();
      bindMouseScrollYHandler();
      if (isMobile) {
        bindMobileTouchHandler();
      }
      if ($this.mousewheel) {
        bindMouseWheelHandler();
      }
      $this.data('perfect-scrollbar', $this);
      $this.data('perfect-scrollbar-update', updateBarSizeAndPosition);
      $this.data('perfect-scrollbar-destroy', destroy);
    };

    // initialize
    initialize();

    return $this;
  };
})(jQuery));
;/*!
 * imagesLoaded PACKAGED v3.0.2
 * JavaScript is all like "You images are done yet or what?"
 */

/*!
 * EventEmitter v4.1.0 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function (exports) {
  // Place the script in strict mode
  'use strict';

  /**
   * Class for managing events.
   * Can be extended to provide event functionality in other classes.
   *
   * @class Manages event registering and emitting.
   */
  function EventEmitter() {}

  // Shortcuts to improve speed and size

  // Easy access to the prototype
  var proto = EventEmitter.prototype,
    nativeIndexOf = Array.prototype.indexOf ? true : false;

  /**
   * Finds the index of the listener for the event in it's storage array.
   *
   * @param {Function} listener Method to look for.
   * @param {Function[]} listeners Array of listeners to search through.
   * @return {Number} Index of the specified listener, -1 if not found
   * @api private
   */
  function indexOfListener(listener, listeners) {
    // Return the index via the native method if possible
    if (nativeIndexOf) {
      return listeners.indexOf(listener);
    }

    // There is no native method
    // Use a manual loop to find the index
    var i = listeners.length;
    while (i--) {
      // If the listener matches, return it's index
      if (listeners[i] === listener) {
        return i;
      }
    }

    // Default to returning -1
    return -1;
  }

  /**
   * Fetches the events object and creates one if required.
   *
   * @return {Object} The events storage object.
   * @api private
   */
  proto._getEvents = function () {
    return this._events || (this._events = {});
  };

  /**
   * Returns the listener array for the specified event.
   * Will initialise the event object and listener arrays if required.
   * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
   * Each property in the object response is an array of listener functions.
   *
   * @param {String|RegExp} evt Name of the event to return the listeners from.
   * @return {Function[]|Object} All listener functions for the event.
   */
  proto.getListeners = function (evt) {
    // Create a shortcut to the storage object
    // Initialise it if it does not exists yet
    var events = this._getEvents(),
      response,
      key;

    // Return a concatenated array of all matching events if
    // the selector is a regular expression.
    if (typeof evt === 'object') {
      response = {};
      for (key in events) {
        if (events.hasOwnProperty(key) && evt.test(key)) {
          response[key] = events[key];
        }
      }
    }
    else {
      response = events[evt] || (events[evt] = []);
    }

    return response;
  };

  /**
   * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
   *
   * @param {String|RegExp} evt Name of the event to return the listeners from.
   * @return {Object} All listener functions for an event in an object.
   */
  proto.getListenersAsObject = function (evt) {
    var listeners = this.getListeners(evt),
      response;

    if (listeners instanceof Array) {
      response = {};
      response[evt] = listeners;
    }

    return response || listeners;
  };

  /**
   * Adds a listener function to the specified event.
   * The listener will not be added if it is a duplicate.
   * If the listener returns true then it will be removed after it is called.
   * If you pass a regular expression as the event name then the listener will be added to all events that match it.
   *
   * @param {String|RegExp} evt Name of the event to attach the listener to.
   * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
  proto.addListener = function (evt, listener) {
    var listeners = this.getListenersAsObject(evt),
      key;

    for (key in listeners) {
      if (listeners.hasOwnProperty(key) &&
        indexOfListener(listener, listeners[key]) === -1) {
        listeners[key].push(listener);
      }
    }

    // Return the instance of EventEmitter to allow chaining
    return this;
  };

  /**
   * Alias of addListener
   */
  proto.on = proto.addListener;

  /**
   * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
   * You need to tell it what event names should be matched by a regex.
   *
   * @param {String} evt Name of the event to create.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
  proto.defineEvent = function (evt) {
    this.getListeners(evt);
    return this;
  };

  /**
   * Uses defineEvent to define multiple events.
   *
   * @param {String[]} evts An array of event names to define.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
  proto.defineEvents = function (evts)
  {
    for (var i = 0; i < evts.length; i += 1) {
      this.defineEvent(evts[i]);
    }
    return this;
  };

  /**
   * Removes a listener function from the specified event.
   * When passed a regular expression as the event name, it will remove the listener from all events that match it.
   *
   * @param {String|RegExp} evt Name of the event to remove the listener from.
   * @param {Function} listener Method to remove from the event.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
  proto.removeListener = function (evt, listener) {
    var listeners = this.getListenersAsObject(evt),
      index,
      key;

    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        index = indexOfListener(listener, listeners[key]);

        if (index !== -1) {
          listeners[key].splice(index, 1);
        }
      }
    }

    // Return the instance of EventEmitter to allow chaining
    return this;
  };

  /**
   * Alias of removeListener
   */
  proto.off = proto.removeListener;

  /**
   * Adds listeners in bulk using the manipulateListeners method.
   * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
   * You can also pass it a regular expression to add the array of listeners to all events that match it.
   * Yeah, this function does quite a bit. That's probably a bad thing.
   *
   * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
   * @param {Function[]} [listeners] An optional array of listener functions to add.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
  proto.addListeners = function (evt, listeners) {
    // Pass through to manipulateListeners
    return this.manipulateListeners(false, evt, listeners);
  };

  /**
   * Removes listeners in bulk using the manipulateListeners method.
   * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
   * You can also pass it an event name and an array of listeners to be removed.
   * You can also pass it a regular expression to remove the listeners from all events that match it.
   *
   * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
   * @param {Function[]} [listeners] An optional array of listener functions to remove.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
  proto.removeListeners = function (evt, listeners) {
    // Pass through to manipulateListeners
    return this.manipulateListeners(true, evt, listeners);
  };

  /**
   * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
   * The first argument will determine if the listeners are removed (true) or added (false).
   * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
   * You can also pass it an event name and an array of listeners to be added/removed.
   * You can also pass it a regular expression to manipulate the listeners of all events that match it.
   *
   * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
   * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
   * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
  proto.manipulateListeners = function (remove, evt, listeners) {
    // Initialise any required variables
    var i,
      value,
      single = remove ? this.removeListener : this.addListener,
      multiple = remove ? this.removeListeners : this.addListeners;

    // If evt is an object then pass each of it's properties to this method
    if (typeof evt === 'object' && !(evt instanceof RegExp)) {
      for (i in evt) {
        if (evt.hasOwnProperty(i) && (value = evt[i])) {
          // Pass the single listener straight through to the singular method
          if (typeof value === 'function') {
            single.call(this, i, value);
          }
          else {
            // Otherwise pass back to the multiple function
            multiple.call(this, i, value);
          }
        }
      }
    }
    else {
      // So evt must be a string
      // And listeners must be an array of listeners
      // Loop over it and pass each one to the multiple method
      i = listeners.length;
      while (i--) {
        single.call(this, evt, listeners[i]);
      }
    }

    // Return the instance of EventEmitter to allow chaining
    return this;
  };

  /**
   * Removes all listeners from a specified event.
   * If you do not specify an event then all listeners will be removed.
   * That means every event will be emptied.
   * You can also pass a regex to remove all events that match it.
   *
   * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
  proto.removeEvent = function (evt) {
    var type = typeof evt,
      events = this._getEvents(),
      key;

    // Remove different things depending on the state of evt
    if (type === 'string') {
      // Remove all listeners for the specified event
      delete events[evt];
    }
    else if (type === 'object') {
      // Remove all events matching the regex.
      for (key in events) {
        if (events.hasOwnProperty(key) && evt.test(key)) {
          delete events[key];
        }
      }
    }
    else {
      // Remove all listeners in all events
      delete this._events;
    }

    // Return the instance of EventEmitter to allow chaining
    return this;
  };

  /**
   * Emits an event of your choice.
   * When emitted, every listener attached to that event will be executed.
   * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
   * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
   * So they will not arrive within the array on the other side, they will be separate.
   * You can also pass a regular expression to emit to all events that match it.
   *
   * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
   * @param {Array} [args] Optional array of arguments to be passed to each listener.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
  proto.emitEvent = function (evt, args) {
    var listeners = this.getListenersAsObject(evt),
      i,
      key,
      response;

    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        i = listeners[key].length;

        while (i--) {
          // If the listener returns true then it shall be removed from the event
          // The function is executed either with a basic call or an apply if there is an args array
          response = args ? listeners[key][i].apply(null, args) : listeners[key][i]();
          if (response === true) {
            this.removeListener(evt, listeners[key][i]);
          }
        }
      }
    }

    // Return the instance of EventEmitter to allow chaining
    return this;
  };

  /**
   * Alias of emitEvent
   */
  proto.trigger = proto.emitEvent;

  /**
   * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
   * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
   *
   * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
   * @param {...*} Optional additional arguments to be passed to each listener.
   * @return {Object} Current instance of EventEmitter for chaining.
   */
  proto.emit = function (evt) {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(evt, args);
  };

  // Expose the class either via AMD or the global object
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return EventEmitter;
    });
  }
  else {
    exports.EventEmitter = EventEmitter;
  }
}(this));
/*!
 * eventie v1.0.3
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false */

( function( window ) {

'use strict';

var docElem = document.documentElement;

var bind = function() {};

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = window.event;
        // add event.target
        event.target = event.target || event.srcElement;
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = window.event;
        // add event.target
        event.target = event.target || event.srcElement;
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( eventie );
} else {
  // browser global
  window.eventie = eventie;
}

})( this );

/*!
 * imagesLoaded v3.0.2
 * JavaScript is all like "You images are done yet or what?"
 */

( function( window ) {

'use strict';

var $ = window.jQuery;
var console = window.console;
var hasConsole = typeof console !== 'undefined';

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) === '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length === 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// --------------------------  -------------------------- //

function defineImagesLoaded( EventEmitter, eventie ) {

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options );
    }
    // use elem as selector string
    if ( typeof elem === 'string' ) {
      elem = document.querySelectorAll( elem );
    }

    this.elements = makeArray( elem );
    this.options = extend( {}, this.options );

    if ( typeof options === 'function' ) {
      onAlways = options;
    } else {
      extend( this.options, options );
    }

    if ( onAlways ) {
      this.on( 'always', onAlways );
    }

    this.getImages();

    if ( $ ) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }

    // HACK check async to allow time to bind listeners
    var _this = this;
    setTimeout( function() {
      _this.check();
    });
  }

  ImagesLoaded.prototype = new EventEmitter();

  ImagesLoaded.prototype.options = {};

  ImagesLoaded.prototype.getImages = function() {
    this.images = [];

    // filter & find items if we have an item selector
    for ( var i=0, len = this.elements.length; i < len; i++ ) {
      var elem = this.elements[i];
      // filter siblings
      if ( elem.nodeName === 'IMG' ) {
        this.addImage( elem );
      }
      // find children
      var childElems = elem.querySelectorAll('img');
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        var img = childElems[j];
        this.addImage( img );
      }
    }
  };

  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function( img ) {
    var loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };

  ImagesLoaded.prototype.check = function() {
    var _this = this;
    var checkedCount = 0;
    var length = this.images.length;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !length ) {
      this.complete();
      return;
    }

    function onConfirm( image, message ) {
      if ( _this.options.debug && hasConsole ) {
        console.log( 'confirm', image, message );
      }

      _this.progress( image );
      checkedCount++;
      if ( checkedCount === length ) {
        _this.complete();
      }
      return true; // bind once
    }

    for ( var i=0; i < length; i++ ) {
      var loadingImage = this.images[i];
      loadingImage.on( 'confirm', onConfirm );
      loadingImage.check();
    }
  };

  ImagesLoaded.prototype.progress = function( image ) {
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    this.emit( 'progress', this, image );
    if ( this.jqDeferred ) {
      this.jqDeferred.notify( this, image );
    }
  };

  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emit( eventName, this );
    this.emit( 'always', this );
    if ( this.jqDeferred ) {
      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[ jqMethod ]( this );
    }
  };

  // -------------------------- jquery -------------------------- //

  if ( $ ) {
    $.fn.imagesLoaded = function( options, callback ) {
      var instance = new ImagesLoaded( this, options, callback );
      return instance.jqDeferred.promise( $(this) );
    };
  }


  // --------------------------  -------------------------- //

  var cache = {};

  function LoadingImage( img ) {
    this.img = img;
  }

  LoadingImage.prototype = new EventEmitter();

  LoadingImage.prototype.check = function() {
    // first check cached any previous images that have same src
    var cached = cache[ this.img.src ];
    if ( cached ) {
      this.useCached( cached );
      return;
    }
    // add this to cache
    cache[ this.img.src ] = this;

    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    if ( this.img.complete && this.img.naturalWidth !== undefined ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    var proxyImage = this.proxyImage = new Image();
    eventie.bind( proxyImage, 'load', this );
    eventie.bind( proxyImage, 'error', this );
    proxyImage.src = this.img.src;
  };

  LoadingImage.prototype.useCached = function( cached ) {
    if ( cached.isConfirmed ) {
      this.confirm( cached.isLoaded, 'cached was confirmed' );
    } else {
      var _this = this;
      cached.on( 'confirm', function( image ) {
        _this.confirm( image.isLoaded, 'cache emitted confirmed' );
        return true; // bind once
      });
    }
  };

  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isConfirmed = true;
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  // trigger specified handler for event type
  LoadingImage.prototype.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };

  LoadingImage.prototype.onload = function() {
    this.confirm( true, 'onload' );
    this.unbindProxyEvents();
  };

  LoadingImage.prototype.onerror = function() {
    this.confirm( false, 'onerror' );
    this.unbindProxyEvents();
  };

  LoadingImage.prototype.unbindProxyEvents = function() {
    eventie.unbind( this.proxyImage, 'load', this );
    eventie.unbind( this.proxyImage, 'error', this );
  };

  // -----  ----- //

  return ImagesLoaded;
}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( [
      'eventEmitter',
      'eventie'
    ],
    defineImagesLoaded );
} else {
  // browser global
  window.imagesLoaded = defineImagesLoaded(
    window.EventEmitter,
    window.eventie
  );
}

})( window );
