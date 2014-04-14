/**
 * PhysicsJS v1.0.0-rc1 - 2014-04-13
 * A modular, extendable, and easy-to-use physics engine for javascript
 * http://wellcaffeinated.net/PhysicsJS
 *
 * Copyright (c) 2014 Jasper Palfree <jasper@wellcaffeinated.net>
 * Licensed MIT
 */

/**
 * @license
 * Lo-Dash 2.2.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern exports="none" iife="(function(window){%output%;lodash.extend(Physics.util, lodash);}(this));" include="isObject,isFunction,isArray,isPlainObject,uniqueId,uniq,filter,find,each,random,defaults,extend,transform,clone,throttle,bind,sortedIndex,shuffle" --minify --output lib/lodash.js`
 */

(function(e,t){typeof exports=="object"?module.exports=t.call(e):typeof define=="function"&&define.amd?define([],function(){return t.call(e)}):e.Physics=t.call(e)})(this,function(){var e=this,t=e.document,n=function i(){return i.world.apply(i,arguments)};n.util={},function(e){function t(e,t,n){n=(n||0)-1;for(var r=e?e.length:0;++n<r;)if(e[n]===t)return n;return-1}function r(e,n){var r=typeof n;e=e.l;if("boolean"==r||null==n)return e[n]?0:-1;"number"!=r&&"string"!=r&&(r="object");var i="number"==r?n:P+n;return e=(e=e[r])&&e[i],"object"==r?e&&-1<t(e,n)?0:-1:e?0:-1}function i(e){var t=this.l,n=typeof e;if("boolean"==n||null==e)t[e]=!0;else{"number"!=n&&"string"!=n&&(n="object");var r="number"==n?e:P+e,t=t[n]||(t[n]={});"object"==n?(t[r]||(t[r]=[])).push(e):t[r]=!0}}function s(){return M.pop()||[]}function o(){return _.pop()||{k:null,l:null,"false":!1,"null":!1,number:null,object:null,push:null,string:null,"true":!1,"undefined":!1}}function u(){}function a(e){e.length=0,M.length<B&&M.push(e)}function f(e){var t=e.l;t&&f(t),e.k=e.l=e.object=e.number=e.string=null,_.length<B&&_.push(e)}function l(e,t,n){t||(t=0),typeof n=="undefined"&&(n=e?e.length:0);var r=-1;n=n-t||0;for(var i=Array(0>n?0:n);++r<n;)i[r]=e[t+r];return i}function c(){}function h(e,t,n,r,i){if(n){var o=n(e);if(typeof o!="undefined")return o}if(!b(e))return e;var u=ut.call(e);if(!J[u])return e;var f=yt[u];switch(u){case U:case z:return new f(+e);case W:case $:return new f(e);case V:return o=f(e.source,j.exec(e)),o.lastIndex=e.lastIndex,o}u=Et(e);if(t){var c=!r;r||(r=s()),i||(i=s());for(var p=r.length;p--;)if(r[p]==e)return i[p];o=u?f(e.length):{}}else o=u?l(e):xt({},e);return u&&(it.call(e,"index")&&(o.index=e.index),it.call(e,"input")&&(o.input=e.input)),t?(r.push(e),i.push(o),(u?S:Nt)(e,function(e,s){o[s]=h(e,t,n,r,i)}),c&&(a(r),a(i)),o):o}function p(e,t,n){if(typeof e!="function")return L;if(typeof t=="undefined")return e;var r=e.__bindData__||bt.funcNames&&!e.name;if(typeof r=="undefined"){var i=I&&nt.call(e);bt.funcNames||!i||F.test(i)||(r=!0);if(bt.funcNames||!r)r=!bt.funcDecomp||I.test(i),wt(e,r)}if(!0!==r&&r&&r[1]&1)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)};case 4:return function(n,r,i,s){return e.call(t,n,r,i,s)}}return C(e,t)}function d(e,t,n,r,i,o){if(n){var u=n(e,t);if(typeof u!="undefined")return!!u}if(e===t)return 0!==e||1/e==1/t;if(e===e&&!(e&&G[typeof e]||t&&G[typeof t]))return!1;if(null==e||null==t)return e===t;var f=ut.call(e),l=ut.call(t);f==q&&(f=X),l==q&&(l=X);if(f!=l)return!1;switch(f){case U:case z:return+e==+t;case W:return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case V:case $:return e==String(t)}l=f==R;if(!l){if(it.call(e,"__wrapped__")||it.call(t,"__wrapped__"))return d(e.__wrapped__||e,t.__wrapped__||t,n,r,i,o);if(f!=X)return!1;var f=e.constructor,c=t.constructor;if(f!=c&&!(y(f)&&f instanceof f&&y(c)&&c instanceof c))return!1}c=!i,i||(i=s()),o||(o=s());for(f=i.length;f--;)if(i[f]==e)return o[f]==t;var h=0,u=!0;i.push(e),o.push(t);if(l){f=e.length,h=t.length,u=h==e.length;if(!u&&!r)return u;for(;h--;)if(l=f,c=t[h],r)for(;l--&&!(u=d(e[l],c,n,r,i,o)););else if(!(u=d(e[h],c,n,r,i,o)))break;return u}return Tt(t,function(t,s,a){if(it.call(a,s))return h++,u=it.call(e,s)&&d(e[s],t,n,r,i,o)}),u&&!r&&Tt(e,function(e,t,n){if(it.call(n,t))return u=-1<--h}),c&&(a(i),a(o)),u}function v(e,t,n,r,i,s){var o=t&1,u=t&2,a=t&4,f=t&8,l=t&16,c=t&32,h=e;if(!u&&!y(e))throw new TypeError;l&&!n.length&&(t&=-17,l=n=!1),c&&!r.length&&(t&=-33,c=r=!1);var p=e&&e.__bindData__;if(p)return!o||p[1]&1||(p[4]=i),!o&&p[1]&1&&(t|=8),!a||p[1]&4||(p[5]=s),l&&ot.apply(p[2]||(p[2]=[]),n),c&&ot.apply(p[3]||(p[3]=[]),r),p[1]|=t,v.apply(null,p);if(!o||u||a||c||!(bt.fastBind||lt&&l))g=function(){var p=arguments,d=o?i:this;if(a||l||c)if(p=gt.call(p),l&&at.apply(p,n),c&&ot.apply(p,r),a&&p.length<s)return t|=16,v(e,f?t:t&-4,p,null,i,s);return u&&(e=d[h]),this instanceof g?(d=m(e.prototype),p=e.apply(d,p),b(p)?p:d):e.apply(d,p)};else{if(l){var d=[i];ot.apply(d,n)}var g=l?lt.apply(e,d):lt.call(e,i)}return wt(g,gt.call(arguments)),g}function m(e){return b(e)?ct(e):{}}function g(e){var t,n;return!!e&&ut.call(e)==X&&(t=e.constructor,!y(t)||t instanceof t)?(Tt(e,function(e,t){n=t}),typeof n=="undefined"||it.call(e,n)):!1}function y(e){return typeof e=="function"}function b(e){return!!e&&!!G[typeof e]}function w(e,t,n){var r=[];t=c.createCallback(t,n,3),n=-1;var i=e?e.length:0;if(typeof i=="number")for(;++n<i;){var s=e[n];t(s,n,e)&&r.push(s)}else Nt(e,function(e,n,i){t(e,n,i)&&r.push(e)});return r}function E(e,t,n){t=c.createCallback(t,n,3),n=-1;var r=e?e.length:0;if(typeof r!="number"){var s;return Nt(e,function(e,n,r){if(t(e,n,r))return s=e,!1}),s}for(;++n<r;){var i=e[n];if(t(i,n,e))return i}}function S(e,t,n){var r=-1,i=e?e.length:0;t=t&&typeof n=="undefined"?t:p(t,n,3);if(typeof i=="number")for(;++r<i&&!1!==t(e[r],r,e););else Nt(e,t);return e}function x(e,n,r){if(typeof r=="number"){var i=e?e.length:0;r=0>r?dt(0,i+r):r||0}else if(r)return r=T(e,n),e[r]===n?r:-1;return t(e,n,r)}function T(e,t,n,r){var i=0,s=e?e.length:i;n=n?c.createCallback(n,r,1):L;for(t=n(t);i<s;)r=i+s>>>1,n(e[r])<t?i=r+1:s=r;return i}function N(e,n,u,l){typeof n!="boolean"&&null!=n&&(u=(l=u)&&l[n]===e?null:n,n=!1),null!=u&&(u=c.createCallback(u,l,3)),l=-1;var h;h=(h=c.indexOf)===x?t:h;var p=e?e.length:0,d=[],v=!n&&p>=H&&h===t,m=u||v?s():d;if(v){var g;g=m;var y=-1,b=g.length,w=g[0],E=g[b/2|0],S=g[b-1];if(w&&typeof w=="object"&&E&&typeof E=="object"&&S&&typeof S=="object")g=!1;else{w=o(),w["false"]=w["null"]=w["true"]=w.undefined=!1,E=o(),E.k=g,E.l=w;for(E.push=i;++y<b;)E.push(g[y]);g=E}g?(h=r,m=g):(v=!1,m=u?m:(a(m),d))}for(;++l<p;)if(g=e[l],y=u?u(g,l,e):g,n?!l||m[m.length-1]!==y:0>h(m,y))(u||v)&&m.push(y),d.push(g);return v?(a(m.k),f(m)):u&&a(m),d}function C(e,t){return 2<arguments.length?v(e,17,gt.call(arguments,2),null,t):v(e,1,null,null,t)}function k(e,t,n){var r,i,s,o,u,a,f,l=0,c=!1,h=!0;if(!y(e))throw new TypeError;t=dt(0,t)||0;if(!0===n)var p=!0,h=!1;else b(n)&&(p=n.leading,c="maxWait"in n&&(dt(t,n.maxWait)||0),h="trailing"in n?n.trailing:h);var d=function(){var n=t-(st()-o);0>=n?(i&&clearTimeout(i),n=f,i=a=f=O,n&&(l=st(),s=e.apply(u,r))):a=setTimeout(d,n)},v=function(){a&&clearTimeout(a),i=a=f=O;if(h||c!==t)l=st(),s=e.apply(u,r)};return function(){r=arguments,o=st(),u=this,f=h&&(a||!p);if(!1===c)var n=p&&!a;else{i||p||(l=o);var m=c-(o-l);0>=m?(i&&(i=clearTimeout(i)),l=o,s=e.apply(u,r)):i||(i=setTimeout(v,m))}return a||t===c||(a=setTimeout(d,t)),n&&(s=e.apply(u,r)),s}}function L(e){return e}function A(e,t,n){var r=null==e,i=null==t;return null==n&&(typeof e=="boolean"&&i?(n=e,e=1):i||typeof t!="boolean"||(n=t,i=!0)),r&&i&&(t=1),e=+e||0,i?(t=e,e=0):t=+t||0,r=mt(),n||e%1||t%1?vt(e+r*(t-e+parseFloat("1e-"+((r+"").length-1))),t):e+tt(r*(t-e+1))}var O,M=[],_=[],D=0,P=+(new Date)+"",H=75,B=40,j=/\w*$/,F=/^function[ \n\r\t]+\w/,I=/\bthis\b/,q="[object Arguments]",R="[object Array]",U="[object Boolean]",z="[object Date]",W="[object Number]",X="[object Object]",V="[object RegExp]",$="[object String]",J={"[object Function]":!1};J[q]=J[R]=J[U]=J[z]=J[W]=J[X]=J[V]=J[$]=!0;var K={leading:!1,maxWait:0,trailing:!1},Q={configurable:!1,enumerable:!1,value:null,writable:!1},G={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,"undefined":!1};e=G[typeof e]&&e||this;var Y=[],Z=Object.prototype,et=RegExp("^"+String(Z.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),tt=Math.floor,nt=Function.prototype.toString,rt=et.test(rt=Object.getPrototypeOf)&&rt,it=Z.hasOwnProperty,st=et.test(st=Date.now)&&st||function(){return+(new Date)},ot=Y.push,ut=Z.toString,at=Y.unshift,ft=function(){try{var e={},t=et.test(t=Object.defineProperty)&&t,n=t(e,e,e)&&t}catch(r){}return n}(),lt=et.test(lt=ut.bind)&&lt,ct=et.test(ct=Object.create)&&ct,ht=et.test(ht=Array.isArray)&&ht,pt=et.test(pt=Object.keys)&&pt,dt=Math.max,vt=Math.min,mt=Math.random,gt=Y.slice,Y=et.test(e.attachEvent),Y=lt&&!/\n|true/.test(lt+Y),yt={};yt[R]=Array,yt[U]=Boolean,yt[z]=Date,yt["[object Function]"]=Function,yt[X]=Object,yt[W]=Number,yt[V]=RegExp,yt[$]=String;var bt=c.support={};bt.fastBind=lt&&!Y,bt.funcDecomp=!et.test(e.WinRTError)&&I.test(function(){return this}),bt.funcNames=typeof Function.name=="string",ct||(m=function(e){if(b(e)){u.prototype=e;var t=new u;u.prototype=null}return t||{}});var wt=ft?function(e,t){Q.value=t,ft(e,"__bindData__",Q)}:u,Et=ht||function(e){return e&&typeof e=="object"&&typeof e.length=="number"&&ut.call(e)==R||!1},ht=function(e){var t,n=[];if(!e||!G[typeof e])return n;for(t in e)it.call(e,t)&&n.push(t);return n},St=pt?function(e){return b(e)?pt(e):[]}:ht,xt=function(e,t,n){var r,i=e,s=i;if(!i)return s;var o=arguments,u=0,a=typeof n=="number"?2:o.length;if(3<a&&"function"==typeof o[a-2])var f=p(o[--a-1],o[a--],2);else 2<a&&"function"==typeof o[a-1]&&(f=o[--a]);for(;++u<a;)if((i=o[u])&&G[typeof i])for(var l=-1,c=G[typeof i]&&St(i),h=c?c.length:0;++l<h;)r=c[l],s[r]=f?f(s[r],i[r]):i[r];return s},Tt=function(e,t,n){var r;if(!e||!G[typeof e])return e;t=t&&typeof n=="undefined"?t:p(t,n,3);for(r in e)if(!1===t(e[r],r,e))break;return e},Nt=function(e,t,n){if(!e||!G[typeof e])return e;t=t&&typeof n=="undefined"?t:p(t,n,3);for(var r=-1,i=G[typeof e]&&St(e),s=i?i.length:0;++r<s&&(n=i[r],!1!==t(e[n],n,e)););return e};c.assign=xt,c.bind=C,c.createCallback=function(e,t,n){var r=typeof e;if(null==e||"function"==r)return p(e,t,n);if("object"!=r)return function(t){return t[e]};var i=St(e),s=i[0],o=e[s];return 1!=i.length||o!==o||b(o)?function(t){for(var n=i.length,r=!1;n--&&(r=d(t[i[n]],e[i[n]],null,!0)););return r}:function(e){return e=e[s],o===e&&(0!==o||1/o==1/e)}},c.debounce=k,c.defaults=function(e,t,n){var r,i=e,s=i;if(!i)return s;for(var o=arguments,u=0,a=typeof n=="number"?2:o.length;++u<a;)if((i=o[u])&&G[typeof i])for(var f=-1,l=G[typeof i]&&St(i),c=l?l.length:0;++f<c;)r=l[f],"undefined"==typeof s[r]&&(s[r]=i[r]);return s},c.filter=w,c.forEach=S,c.forIn=Tt,c.forOwn=Nt,c.keys=St,c.shuffle=function(e){var t=-1,n=e?e.length:0,r=Array(typeof n=="number"?n:0);return S(e,function(e){var n=A(++t);r[t]=r[n],r[n]=e}),r},c.throttle=function(e,t,n){var r=!0,i=!0;if(!y(e))throw new TypeError;return!1===n?r=!1:b(n)&&(r="leading"in n?n.leading:r,i="trailing"in n?n.trailing:i),K.leading=r,K.maxWait=t,K.trailing=i,k(e,t,K)},c.transform=function(e,t,n,r){var i=Et(e);return t=p(t,r,4),null==n&&(i?n=[]:(r=e&&e.constructor,n=m(r&&r.prototype))),(i?S:Nt)(e,function(e,r,i){return t(n,e,r,i)}),n},c.uniq=N,c.each=S,c.extend=xt,c.select=w,c.unique=N,c.clone=function(e,t,n,r){return typeof t!="boolean"&&null!=t&&(r=n,n=t,t=!1),h(e,t,typeof n=="function"&&p(n,r,1))},c.find=E,c.identity=L,c.indexOf=x,c.isArray=Et,c.isFunction=y,c.isObject=b,c.isPlainObject=function(e){if(!e||ut.call(e)!=X)return!1;var t=e.valueOf,n=typeof t=="function"&&(n=rt(t))&&rt(n);return n?e==n||rt(e)==n:g(e)},c.random=A,c.sortedIndex=T,c.uniqueId=function(e){var t=++D;return String(null==e?"":e)+t},c.detect=E,c.findWhere=E,c.VERSION="2.2.1",c.extend(n.util,c)}(this),function(){n.aabb=function(e,t,n,r){var i={x:0,y:0,hw:0,hh:0};return e===undefined?i:(e&&e.x!==undefined&&(n=t.x,r=t.y,t=e.y,e=e.x),r===undefined&&e!==undefined&&t!==undefined?(i.hw=e*.5,i.hh=t*.5,n&&n.x!==undefined&&(i.x=n.x,i.y=n.y),i):(i.hw=Math.abs(n-e)*.5,i.hh=Math.abs(r-t)*.5,i.x=(n+e)*.5,i.y=(r+t)*.5,i))},n.aabb.contains=function(t,n){return n.x>t.x-t.hw&&n.x<t.x+t.hw&&n.y>t.y-t.hh&&n.y<t.y+t.hh},n.aabb.clone=function(e){return{x:e.x,y:e.y,hw:e.hw,hh:e.hh}},n.aabb.overlap=function(e,t){var n=e.x-e.hw,r=t.x-t.hw,i=e.x+e.hw,s=t.x+t.hw;return r<=i&&i<=s||n<=s&&s<=i?(n=e.y-e.hh,r=t.y-t.hh,i=e.y+e.hh,s=t.y+t.hh,r<=i&&i<=s||n<=s&&s<=i):!1}}(),function(){var e=1e-4,t=100,r=function(t,n,r){var i=n.normSq()-n.dot(t),s=n.dot(t)-t.normSq();return i<0?r.clone(n).negate():s>0?r.clone(t).negate():(r.clone(n).vsub(t),r.perp(t.cross(r)>0))},i=function(t){var r=t.length,i=t[r-2],s=t[r-3],o=n.scratchpad(),u=o.vector().clone(i.pt),a=o.vector().clone(s.pt).vsub(u),f,l;return a.equals(n.vector.zero)?o.done({a:i.a,b:i.b}):(f=-a.dot(u)/a.normSq(),l=1-f,l<=0?o.done({a:s.a,b:s.b}):f<=0?o.done({a:i.a,b:i.b}):o.done({a:u.clone(i.a).mult(l).vadd(a.clone(s.a).mult(f)).values(),b:u.clone(i.b).mult(l).vadd(a.clone(s.b).mult(f)).values()}))},s=function(o,u,a,f){var l=!1,c=!1,h=!1,p=[],d=1,v=n.scratchpad(),m=v.vector().clone(u||n.vector.axis[0]),g=v.vector(),y=v.vector(),b=v.vector(),w=v.vector(),E,S,x,T,N=0;T=o(m),d=p.push(T),g.clone(T.pt),m.negate();while(++N){g.swap(y),T=o(m),d=p.push(T),g.clone(T.pt),f&&f(p);if(g.equals(n.vector.zero)){l=!0;break}if(!c&&g.dot(m)<=0){if(a)break;c=!0}if(d===2)m=r(g,y,m);else if(c){m.normalize(),T=y.dot(m);if(Math.abs(T-g.dot(m))<e){h=-T;break}y.normSq()<b.clone(p[0].pt).normSq()?p.shift():p.splice(1,1),m=r(b.clone(p[1].pt),w.clone(p[0].pt),m)}else{E=E||v.vector(),S=S||v.vector(),E.clone(y).vsub(g),S.clone(p[0].pt).vsub(g),x=E.cross(S)>0;if(x^g.cross(E)>0)p.shift(),E.perp(!x),m.swap(E);else{if(!(x^S.cross(g)>0)){l=!0;break}p.splice(1,1),S.perp(x),m.swap(E)}}if(N>t)return v.done(),{simplex:p,iterations:N,distance:0,maxIterationsReached:!0}}return v.done(),T={overlap:l,simplex:p,iterations:N},h!==!1&&(T.distance=h,T.closest=i(p)),T};n.gjk=s}(),function(){var e=function t(e,r,i){if(!(this instanceof t))return new t(e,r);this.v=n.vector(),this.o=n.vector();if(e instanceof t){this.clone(e);return}e&&this.setTranslation(e),this.setRotation(r||0,i)};e.prototype.setTranslation=function(e){return this.v.clone(e),this},e.prototype.setRotation=function(e,t){return this.cosA=Math.cos(e),this.sinA=Math.sin(e),t?this.o.clone(t):this.o.zero(),this},e.prototype.clone=function(t){return t?(this.setTranslation(t.v),this.cosA=t.cosA,this.sinA=t.sinA,this.o.clone(t.o),this):new e(this)},n.transform=e}(),function(e){var t=Math.sqrt,r=Math.min,i=Math.max,s=Math.acos,o=Math.atan2,u=Math.PI*2,a=!!e.Float64Array,f=function l(e,t){if(!(this instanceof l))return new l(e,t);a?this._=new Float64Array(5):this._=[],e&&(e.x!==undefined||e._&&e._.length)?this.clone(e):(this.recalc=!0,this.set(e,t))};Object.defineProperties(f.prototype,{x:{get:function(){return+this._[0]},set:function(e){e=+e||0,this.recalc=e===this._[0],this._[0]=e}},y:{get:function(){return+this._[1]},set:function(e){e=+e||0,this.recalc=e===this._[1],this._[1]=e}}}),f.prototype.set=function(e,t){return this.recalc=!0,this._[0]=+e||0,this._[1]=+t||0,this},f.prototype.get=function(e){return this._[e]},f.prototype.vadd=function(e){return this.recalc=!0,this._[0]+=e._[0],this._[1]+=e._[1],this},f.prototype.vsub=function(e){return this.recalc=!0,this._[0]-=e._[0],this._[1]-=e._[1],this},f.prototype.add=function(e,t){return this.recalc=!0,this._[0]+=+e||0,this._[1]+=+t||0,this},f.prototype.sub=function(e,t){return this.recalc=!0,this._[0]-=e,this._[1]-=t===undefined?0:t,this},f.prototype.mult=function(e){return this.recalc||(this._[4]*=e*e,this._[3]*=e),this._[0]*=e,this._[1]*=e,this},f.prototype.dot=function(e){return this._[0]*e._[0]+this._[1]*e._[1]},f.prototype.cross=function(e){return-this._[0]*e._[1]+this._[1]*e._[0]},f.prototype.proj=function(e){return this.dot(e)/e.norm()},f.prototype.vproj=function(e){var t=this.dot(e)/e.normSq();return this.clone(e).mult(t)},f.prototype.angle=function(e){var t;if(this.equals(f.zero))return e?e.angle():NaN;e&&!e.equals(f.zero)?t=o(this._[1]*e._[0]-this._[0]*e._[1],this._[0]*e._[0]+this._[1]*e._[1]):t=o(this._[1],this._[0]);while(t>Math.PI)t-=u;while(t<-Math.PI)t+=u;return t},f.prototype.angle2=function(e,t){var n=e._[0]-this._[0],r=e._[1]-this._[1],i=t._[0]-this._[0],s=t._[1]-this._[1],a=o(r*i-n*s,n*i+r*s);while(a>Math.PI)a-=u;while(a<-Math.PI)a+=u;return a},f.prototype.norm=function(){return this.recalc&&(this.recalc=!1,this._[4]=this._[0]*this._[0]+this._[1]*this._[1],this._[3]=t(this._[4])),this._[3]},f.prototype.normSq=function(){return this.recalc&&(this.recalc=!1,this._[4]=this._[0]*this._[0]+this._[1]*this._[1],this._[3]=t(this._[4])),this._[4]},f.prototype.dist=function(e){var n,r;return t((n=e._[0]-this._[0])*n+(r=e._[1]-this._[1])*r)},f.prototype.distSq=function(e){var t,n;return(t=e._[0]-this._[0])*t+(n=e._[1]-this._[1])*n},f.prototype.perp=function(e){var t=this._[0];return e?(this._[0]=this._[1],this._[1]=-t):(this._[0]=-this._[1],this._[1]=t),this},f.prototype.normalize=function(){var e=this.norm();return e===0?this:(e=1/e,this._[0]*=e,this._[1]*=e,this._[3]=1,this._[4]=1,this)},f.prototype.transform=function(e){var t=e.sinA,n=e.cosA,r=e.o._[0],i=e.o._[1];return this._[0]-=r,this._[1]-=i,this.set(this._[0]*n-this._[1]*t+r+e.v._[0],this._[0]*t+this._[1]*n+i+e.v._[1])},f.prototype.transformInv=function(e){var t=e.sinA,n=e.cosA,r=e.o._[0],i=e.o._[1];return this._[0]-=r+e.v._[0],this._[1]-=i+e.v._[1],this.set(this._[0]*n+this._[1]*t+r,-this._[0]*t+this._[1]*n+i)},f.prototype.rotate=function(e,t){var n,r,i=0,s=0;return typeof e=="number"?(n=Math.sin(e),r=Math.cos(e),t&&(i=(t.x||t._[0])|0,s=(t.y||t._[1])|0)):(n=e.sinA,r=e.cosA,i=e.o._[0],s=e.o._[1]),this._[0]-=i,this._[1]-=s,this.set(this._[0]*r-this._[1]*n+i,this._[0]*n+this._[1]*r+s)},f.prototype.rotateInv=function(e){return this.set((this._[0]-e.o._[0])*e.cosA+(this._[1]-e.o._[1])*e.sinA+e.o._[0],-(this._[0]-e.o._[0])*e.sinA+(this._[1]-e.o._[1])*e.cosA+e.o._[1])},f.prototype.translate=function(e){return this.vadd(e.v)},f.prototype.translateInv=function(e){return this.vsub(e.v)},f.prototype.clone=function(e){return e?e._?(this.recalc=e.recalc,e.recalc||(this._[3]=e._[3],this._[4]=e._[4]),this._[0]=e._[0],this._[1]=e._[1],this):this.set(e.x,e.y):new f(this)},f.prototype.swap=function(e){var t=this._;return this._=e._,e._=t,t=this.recalc,this.recalc=e.recalc,e.recalc=t,this},f.prototype.values=function(){return{x:this._[0],y:this._[1]}},f.prototype.zero=function(){return this._[3]=0,this._[4]=0,this._[0]=0,this._[1]=0,this},f.prototype.negate=function(e){return e!==undefined?(this._[e]=-this._[e],this):(this._[0]=-this._[0],this._[1]=-this._[1],this)},f.prototype.clamp=function(e,t){return this._[0]=r(i(this._[0],e.x),t.x),this._[1]=r(i(this._[1],e.y),t.y),this.recalc=!0,this},f.prototype.toString=function(){return"("+this._[0]+", "+this._[1]+")"},f.prototype.equals=function(e){return this._[0]===e._[0]&&this._[1]===e._[1]&&this._[2]===e._[2]},f.axis=[new f(1,0),new f(0,1)],f.zero=new f(0,0),n.vector=f}(this),function(e){var t=e.Physics;n.noConflict=function(){return e.Physics===n&&(e.Physics=t),n}}(this);var r=n.util.decorator=function(t,r){var i={},s={},o=function(t,r,i,s){var o=Object.getOwnPropertyDescriptor(s,i);o.get||o.set?Object.defineProperty(t,i,o):n.util.isFunction(o.value)&&(t[i]=o.value)},u=function(t,r){return n.util.transform(r,o,t)},a=Object.getPrototypeOf;typeof a!="function"&&(typeof "test".__proto__=="object"?a=function(e){return e.__proto__}:a=function(e){return e.constructor.prototype});var f=Object.create;typeof f!="function"&&(f=function(e){function t(){}return t.prototype=e,new t});var l=function(r,i){if(typeof r=="object"){s=u(s,r),s.type=t;return}r!=="type"&&n.util.isFunction(i)&&(s[r]=i)};l(r);var c=function(n,r,o,l){var c,h,p=s,d;if(typeof r!="string")l=o,o=r;else{p=i[r];if(!p)throw'Error: "'+r+'" '+t+" not defined";p=p.prototype}if(typeof o=="function")h=i[n],h?h.prototype=u(h.prototype,o(a(h.prototype))):(h=i[n]=function v(e){this.init&&this.init(e)},h.prototype=f(p),h.prototype=u(h.prototype,o(p,h.prototype))),h.prototype.type=t,h.prototype.name=n;else{l=o||{},h=i[n];if(!h)throw'Error: "'+n+'" '+t+" not defined"}if(l)return new h(l)};return c.mixin=l,c};return n.util.indexOf=function(t,n){var r=0,i=t.length;while(r<i){i--;if(t[r]===n)return r;if(t[i]===n)return i;r++}return-1},n.util.options=function(e,t){var r={},i,s=[];return i=function(r){n.util.extend(t,r,null);for(var i=0,o=s.length;i<o;++i)s[i](t);return t},i.defaults=function(i){return n.util.extend(r,i),n.util.defaults(t,r),r},i.onChange=function(e){s.push(e)},t=t||i,i.defaults(e),i},n.scratchpad=function(){var e="Error: Scratchpad used after .done() called. (Could it be unintentionally scoped?)",t="Error: Scratchpad usage space out of bounds. (Did you forget to call .done()?)",r="Error: Too many scratchpads created. (Did you forget to call .done()?)",i="Error: Object is already registered.",s=[],o=0,u,a,f=0;return u=function(){this._active=!1,this._indexArr=[];if(++o>=a.maxScratches)throw r},u.prototype={done:function(e){this._active=!1;var t;for(var n=0;n<f;++n)this[n]=0;return s.push(this),e}},a=function l(e){if(e)return l.fn(e);var t=s.pop()||new u;return t._active=!0,t},a.maxScratches=100,a.maxIndex=20,a.fn=function(e){var t=[];for(var n=0,r=e.length;n<r;n++)t.push(n);t="a"+t.join(",a");var i=new Function("fn, scratches, Scratch","return function("+t+"){ "+"var scratch = scratches.pop() || new Scratch( scratches );"+"scratch._active = true;"+"return scratch.done( fn(scratch, "+t+") );"+"};");return i(e,s,u)},a.register=function(r,s,o){var l=u.prototype,c=f++,h="_"+r+"Stack",p=o&&o.useFactory;if(r in l)throw i;l[r]=function(){var n=this[h]||(this[h]=[]),r=this[c]|0;this[c]=r+1;if(!this._active)throw e;if(r>=a.maxIndex)throw t;return n[r]||(n[r]=p?s():new s)}},a.register("vector",n.vector),a.register("transform",n.transform),a}(),function(){n.scratchpad.register("event",function(){return{}},{useFactory:!0});var e=function t(){if(!(this instanceof t))return new t};e.prototype={on:function(e,t,r,i){var s,o,u;this._topics=this._topics||(this._topics={});if(n.util.isObject(e)){for(var a in e)this.on(a,e[a],t,r);return this}return s=this._topics[e]||(this._topics[e]=[]),o=t,n.util.isObject(r)?(t=n.util.bind(t,r),t._bindfn_=o,t._one_=o._one_):i||(i=r),t._priority_=i,u=n.util.sortedIndex(s,t,"_priority_"),s.splice(u,0,t),this},off:function(e,t){var r,i;if(!this._topics)return this;if(e===!0)return this._topics={},this;if(n.util.isObject(e)){for(var s in e)this.off(s,e[s]);return this}r=this._topics[e];if(!r)return this;if(t===!0)return this._topics[e]=[],this;for(var o=0,u=r.length;o<u;o++){i=r[o];if(i._bindfn_===t||i===t){r.splice(o,1);break}}return this},emit:function(e,t){if(!this._topics)return this;var r=this._topics[e],i=r&&r.length,s,o,u=n.scratchpad();if(!i)return u.done(this);o=u.event(),o.topic=e,o.handler=s;while(i--)s=r[i],s(t,o),s._one_&&r.splice(i,1);return u.done(this)},one:function(e,t,r){if(n.util.isObject(e)){for(var i in e)this.one(i,e[i],t,r);return this}return t._one_=!0,this.on(e,t,r),this}},n.util.pubsub=e}(),function(e){function s(){return i&&i.now?i.now()+i.timing.navigationStart:Date.now()}function o(n){if(!t)return;e.requestAnimationFrame(o),r.emit("tick",n)}function u(){return t=!0,o(),this}function a(){return t=!1,this}function f(e){return r.on("tick",e),this}function l(e){return r.off("tick",e),this}function c(){return!!t}var t=!1,r=n.util.pubsub(),i=e.performance;n.util.ticker={now:s,start:u,stop:a,on:f,off:l,isActive:c}}(this),function(e){var t=function(){return!0},r=n.util.indexOf,i=function(t,n){return function(e){return t(e[n])}},s=function(t,i){return function(e){e=i?e[i]:e;var s=0,o;if(n.util.isArray(e)){if(n.util.isArray(t)){o=e.length;if(o!==t.length)return!1;while(s<o){o--;if(r(t,e[s])===-1||r(t,e[o])===-1)return!1;s++}return!0}return r(e,t)>-1}return e===t}},o=function(t,n){var r=s(t,n);return function(e){return!r(e)}},u=function(t,i){return function(e){e=i?e[i]:e;var s=0,o;if(n.util.isArray(e)){o=e.length;while(s<o){o--;if(r(t,e[s])>-1||r(t,e[o])>-1)return!0;s++}return!1}return r(t,e)>-1}},a=function(t,n){var r=u(t,n);return function(e){return!r(e)}},f=function(t){return t=n.vector(t),function(e){var r=e.aabb();return n.aabb.contains(r,t)}},l=function(t){return t.next?function(e){var n=t;while(n){if(!n(e))return!1;n=n.next}return!0}:t},c=function(t){return t.next?function(e){var n=t;while(n){if(n(e))return!0;n=n.next}return!1}:t},h={$eq:s,$ne:o,$in:u,$nin:a,$at:f},p=function d(e,r){var o,u,a,f,p,v;if(r){if(r==="$or"||r==="$and"){for(o=0,u=e.length;o<u;++o)v=d(e[o]),p=p?p.next=v:f=v;return r==="$or"?c(f):l(f)}if(o=h[r])return o(e);throw"Unknown query operation: "+r}for(o in e)a=e[o],o[0]==="$"?v=d(a,o):n.util.isPlainObject(a)?v=i(d(a),o):v=s(a,o),p=p?p.next=v:f=v;return l(f||t)};n.query=p}(this),function(){var e={priority:0};n.behavior=r("behavior",{init:function(t){this.options=n.util.options(e),this.options(t)},applyTo:function(e){return e===!0?this._targets=null:this._targets=n.util.uniq(e),this},getTargets:function(){return this._targets||(this._world?this._world._bodies:[])},setWorld:function(e){return this.disconnect&&this._world&&this.disconnect(this._world),this._world=e,this.connect&&e&&this.connect(e),this},connect:function(e){this.behave&&e.on("integrate:positions",this.behave,this,this.options.priority)},disconnect:function(e){this.behave&&e.off("integrate:positions",this.behave)},behave:null})}(),function(){var e={hidden:!1,treatment:"dynamic",mass:1,restitution:1,cof:.8,view:null};n.body=r("body",{init:function(t){var r=n.vector;this.options=n.util.options(e,this),this.options(t),this.state={pos:r(this.x,this.y),vel:r(this.vx,this.vy),acc:r(),angular:{pos:this.angle||0,vel:this.angularVelocity||0,acc:0},old:{pos:r(),vel:r(),acc:r(),angular:{pos:0,vel:0,acc:0}}},delete this.x,delete this.y,delete this.vx,delete this.vy,delete this.angle,delete this.angularVelocity;if(this.mass===0)throw"Error: Bodies must have non-zero mass";this.geometry=n.geometry("point")},setWorld:function(e){return this.disconnect&&this._world&&this.disconnect(this._world),this._world=e,this.connect&&e&&this.connect(e),this},accelerate:function(e){return this.treatment==="dynamic"&&this.state.acc.vadd(e),this},applyForce:function(e,t){if(this.treatment!=="dynamic")return this;var r=n.scratchpad(),i=r.vector(),s;return t?this.moi&&(s=this.state,i.clone(t),this.state.angular.acc-=i.cross(e)/this.moi,this.applyForce(e)):this.accelerate(i.clone(e).mult(1/this.mass)),r.done(),this},aabb:function(){var e=this.state.angular.pos,t=this.geometry.aabb(e);return t.x+=this.state.pos.x,t.y+=this.state.pos.y,t},recalc:function(){return this}})}(),function(){n.geometry=r("geometry",{init:function(e){this.options=n.util.options(),this.options(e),this._aabb=new n.aabb},aabb:function(e){return n.aabb.clone(this._aabb)},getFarthestHullPoint:function(e,t){return t=t||n.vector(),t.set(0,0)},getFarthestCorePoint:function(e,t,r){return t=t||n.vector(),t.set(0,0)}})}(),n.geometry.isPolygonConvex=function(e){var t=n.scratchpad(),r=t.vector(),i=t.vector(),s=t.vector(),o=!0,u=!1,a=e.length;if(!e||!a)return!1;if(a<3)return t.done(),o;r.clone(e[0]).vsub(s.clone(e[a-1]));for(var f=1;f<=a;++f){i.clone(e[f%a]).vsub(s.clone(e[(f-1)%a]));if(u===!1)u=r.cross(i);else if(u>0^r.cross(i)>0){o=!1;break}i.swap(r)}return t.done(),o},n.geometry.getPolygonMOI=function(e){var t=n.scratchpad(),r=t.vector(),i=t.vector(),s=0,o=0,u,a=e.length;if(a<2)return t.done(),0;if(a===2)return u=i.clone(e[1]).distSq(r.clone(e[0])),t.done(),u/12;r.clone(e[0]);for(var f=1;f<a;++f)i.clone(e[f]),u=Math.abs(i.cross(r)),s+=u*(i.normSq()+i.dot(r)+r.normSq()),o+=u,r.swap(i);return t.done(),s/(6*o)},n.geometry.isPointInPolygon=function(e,t){var r=n.scratchpad(),i=r.vector().clone(e),s=r.vector(),o=r.vector(),u=0,a=t.length;if(a<2)return u=i.equals(s.clone(t[0])),r.done(),u;if(a===2)return u=i.angle(s.clone(t[0])),u+=i.angle(s.clone(t[1])),r.done(),Math.abs(u)===Math.PI;s.clone(t[0]).vsub(i);for(var f=1;f<=a;++f)o.clone(t[f%a]).vsub(i),u+=o.angle(s),s.swap(o);return r.done(),Math.abs(u)>1e-6},n.geometry.getPolygonArea=function(t){var r=n.scratchpad(),i=r.vector(),s=r.vector(),o=0,u=t.length;if(u<3)return r.done(),0;i.clone(t[u-1]);for(var a=0;a<u;++a)s.clone(t[a]),o+=i.cross(s),i.swap(s);return r.done(),o/2},n.geometry.getPolygonCentroid=function(t){var r=n.scratchpad(),i=r.vector(),s=r.vector(),o=n.vector(),u,a=t.length;if(a<2)return r.done(),n.vector(t[0]);if(a===2)return r.done(),n.vector((t[1].x+t[0].x)/2,(t[1].y+t[0].y)/2);i.clone(t[a-1]);for(var f=0;f<a;++f)s.clone(t[f]),u=i.cross(s),i.vadd(s).mult(u),o.vadd(i),i.swap(s);return u=1/(6*n.geometry.getPolygonArea(t)),r.done(),o.mult(u)},n.geometry.nearestPointOnLine=function(t,r,i){var s=n.scratchpad(),o=s.vector().clone(t),u=s.vector().clone(r).vsub(o),a=s.vector().clone(i).vsub(o).vsub(u),f,l;return a.equals(n.vector.zero)?(s.done(),n.vector(r)):(f=-a.dot(u)/a.normSq(),l=1-f,l<=0?(s.done(),n.vector(i)):f<=0?(s.done(),n.vector(r)):(o=n.vector(i).mult(f).vadd(u.clone(r).mult(l)),s.done(),o))},function(){var e={drag:0};n.integrator=r("integrator",{init:function(t){this.options=n.util.options(e)},setWorld:function(e){return this.disconnect&&this._world&&this.disconnect(this._world),this._world=e,this.connect&&e&&this.connect(e),this},integrate:function(e,t){var n=this._world;return this.integrateVelocities(e,t),n&&n.emit("integrate:velocities",{bodies:e,dt:t}),this.integratePositions(e,t),n&&n.emit("integrate:positions",{bodies:e,dt:t}),this},connect:null,disconnect:null,integrateVelocities:function(e,t){throw"The integrator.integrateVelocities() method must be overriden"},integratePositions:function(e,t){throw"The integrator.integratePositions() method must be overriden"}})}(),function(){var e={meta:!1,metaRefresh:200,width:600,height:600};n.renderer=r("renderer",{init:function(r){var i=typeof r.el=="string"?t.getElementById(r.el):r.el;this.options=n.util.extend({},e,r),this.el=i?i:t.body,this.drawMeta=n.util.throttle(n.util.bind(this.drawMeta,this),this.options.metaRefresh)},setWorld:function(e){return this.disconnect&&this._world&&this.disconnect(this._world),this._world=e,this.connect&&e&&this.connect(e),this},render:function(e,t){var n,r,i;this.beforeRender&&this.beforeRender(),this._world.emit("beforeRender",{renderer:this,bodies:e,meta:t}),this.options.meta&&this.drawMeta(t);for(var s=0,o=e.length;s<o;++s)n=e[s],r=n.view||(n.view=this.createView(n.geometry,n.styles)),n.hidden||this.drawBody(n,r);return this},createView:function(e,t){throw"You must override the renderer.createView() method."},drawMeta:function(e){throw"You must override the renderer.drawMeta() method."},drawBody:function(e,t){throw"You must override the renderer.drawBody() method."}})}(),function(){var e=function i(e,t,n){var r,s,o=function(){return i(e,t,n)};while(r=e.shift()){s=r.apply(t,n);if(s&&s.then)return s.then(o)}},t={timestep:6.25,maxIPF:16,webworker:!1,integrator:"verlet"},r=function s(e,t){if(!(this instanceof s))return new s(e,t);this.init(e,t)};r.prototype=n.util.extend({},n.util.pubsub.prototype,{init:function(r,i){var s=this;if(n.util.isFunction(r)||n.util.isArray(r))i=r,r={};this._stats={fps:0,ipf:0},this._bodies=[],this._behaviors=[],this._integrator=null,this._renderer=null,this._paused=!1,this.options=n.util.options(t),this.options.onChange(function(e){s.timeStep(e.timestep)}),this.options(r),this.add(n.integrator(this.options.integrator)),n.util.isFunction(i)?e([i],this,[this,n]):n.util.isArray(i)&&e(i,this,[this,n])},options:null,add:function(e){var t=0,n=e&&e.length||0,r=n?e[0]:e;if(!r)return this;do switch(r.type){case"behavior":this.addBehavior(r);break;case"integrator":this.integrator(r);break;case"renderer":this.renderer(r);break;case"body":this.addBody(r);break;default:throw'Error: failed to add item of unknown type "'+r.type+'" to world'}while(++t<n&&(r=e[t]));return this},remove:function(e){var t=0,n=e&&e.length||0,r=n?e[0]:e;if(!r)return this;do switch(r.type){case"behavior":this.removeBehavior(r);break;case"integrator":r===this._integrator&&this.integrator(null);break;case"renderer":r===this._renderer&&this.renderer(null);break;case"body":this.removeBody(r);break;default:throw'Error: failed to remove item of unknown type "'+r.type+'" from world'}while(++t<n&&(r=e[t]));return this},has:function(e){var t,r,i;if(!e)return!1;switch(e.type){case"behavior":t=this._behaviors;break;case"integrator":return this._integrator===e;case"renderer":return this._renderer===e;case"body":t=this._bodies;break;default:throw'Error: unknown type "'+e.type+'"'}return n.util.indexOf(t,e)>-1},integrator:function(e){return e===undefined?this._integrator:this._integrator===e?this:(this._integrator&&(this._integrator.setWorld(null),this.emit("remove:integrator",{integrator:this._integrator})),e&&(this._integrator=e,this._integrator.setWorld(this),this.emit("add:integrator",{integrator:this._integrator})),this)},renderer:function(e){return e===undefined?this._renderer:this._renderer===e?this:(this._renderer&&(this._renderer.setWorld(null),this.emit("remove:renderer",{renderer:this._renderer})),e&&(this._renderer=e,this._renderer.setWorld(this),this.emit("add:renderer",{renderer:this._renderer})),this)},timeStep:function(e){return e?(this._dt=e,this._maxJump=e*this.options.maxIPF,this):this._dt},addBehavior:function(e){var t;return this.has(e)?this:(e.setWorld(this),this._behaviors.push(e),this.emit("add:behavior",{behavior:e}),this)},getBehaviors:function(){return[].concat(this._behaviors)},removeBehavior:function(e){var t=this._behaviors;if(e)for(var n=0,r=t.length;n<r;++n)if(e===t[n]){t.splice(n,1),e.setWorld(null),this.emit("remove:behavior",{behavior:e});break}return this},addBody:function(e){var t;return this.has(e)?this:(e.setWorld(this),this._bodies.push(e),this.emit("add:body",{body:e}),this)},getBodies:function(){return[].concat(this._bodies)},removeBody:function(e){var t=this._bodies;if(e)for(var n=0,r=t.length;n<r;++n)if(e===t[n]){t.splice(n,1),e.setWorld(null),this.emit("remove:body",{body:e});break}return this},findOne:function(e){var t=this,r=typeof e=="function"?e:n.query(e);return n.util.find(t._bodies,r)||!1},find:function(e){var t=this,r=typeof e=="function"?e:n.query(e);return n.util.filter(t._bodies,r)},iterate:function(e){this._integrator.integrate(this._bodies,e)},step:function(e){if(this._paused)return this._time=!1,this;var t=this._time||(this._time=e),n=e-t,r=this._stats,i=this._dt;if(!n)return this;n>this._maxJump&&(this._time=e-this._maxJump,n=this._maxJump),r.fps=1e3/n,r.ipf=Math.ceil(n/this._dt);while(this._time<e)this._time+=i,this.iterate(i);return this.emit("step"),this},render:function(){if(!this._renderer)throw"No renderer added to world";return this._renderer.render(this._bodies,this._stats),this.emit("render",{bodies:this._bodies,stats:this._stats,renderer:this._renderer}),this},pause:function(){return this._paused=!0,this.emit("pause"),this},unpause:function(){return this._paused=!1,this.emit("unpause"),this},isPaused:function(){return!!this._paused},destroy:function(){var e=this;e.pause(),this.emit("destroy"),e.off(!0),e.remove(e.getBodies()),e.remove(e.getBehaviors()),e.integrator(null),e.renderer(null)}}),n.world=r}(),n.integrator("verlet",function(e){return n.body.mixin({started:function(e){return e!==undefined&&(this._started=!0),!!this._started}}),{init:function(t){e.init.call(this,t)},integrateVelocities:function(e,t){var n=t*t,r=1-this.options.drag,i=null,s;for(var o=0,u=e.length;o<u;++o)i=e[o],s=i.state,i.treatment!=="static"?(s.vel.equals(s.old.vel)&&i.started()?s.vel.clone(s.pos).vsub(s.old.pos):(s.old.pos.clone(s.pos).vsub(s.vel),s.vel.mult(t)),r&&s.vel.mult(r),s.vel.vadd(s.acc.mult(n)),s.vel.mult(1/t),s.old.vel.clone(s.vel),s.acc.zero(),s.angular.vel===s.old.angular.vel&&i.started()?s.angular.vel=s.angular.pos-s.old.angular.pos:(s.old.angular.pos=s.angular.pos-s.angular.vel,s.angular.vel*=t),s.angular.vel+=s.angular.acc*n,s.angular.vel/=t,s.old.angular.vel=s.angular.vel,s.angular.acc=0,i.started(!0)):(s.vel.zero(),s.acc.zero(),s.angular.vel=0,s.angular.acc=0)},integratePositions:function(e,t){var n=t*t,r=null,i;for(var s=0,o=e.length;s<o;++s)r=e[s],i=r.state,r.treatment!=="static"&&(i.vel.mult(t),i.old.pos.clone(i.pos),i.pos.vadd(i.vel),i.vel.mult(1/t),i.old.vel.clone(i.vel),i.angular.vel*=t,i.old.angular.pos=i.angular.pos,i.angular.pos+=i.angular.vel,i.angular.vel/=t,i.old.angular.vel=i.angular.vel)}}}),n.geometry("point",function(e){}),n.body("point",function(e){return{init:function(t){e.init.call(this,t),this.moi=0}}}),n});