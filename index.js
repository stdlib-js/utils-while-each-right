// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).whileEachRight=e()}(this,(function(){"use strict";var t=Math.floor;function e(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&(r=e.length,t(r)===r)&&e.length>=0&&e.length<=9007199254740991;var r}var r=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,i=Object.defineProperty,u=Object.prototype,l=u.toString,f=u.__defineGetter__,c=u.__defineSetter__,a=u.__lookupGetter__,p=u.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?i:function(t,e,r){var n,o,i,y;if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===l.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(a.call(t,e)||p.call(t,e)?(n=t.__proto__,t.__proto__=u,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,y="set"in r,o&&(i||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&f&&f.call(t,e,r.get),y&&c&&c.call(t,e,r.set),t};var y=o;function s(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function b(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return v&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var w=d()?function(t){var e,r,n,o,i;if(null==t)return g.call(t);r=t[m],i=m,e=null!=(o=t)&&h.call(o,i);try{t[m]=void 0}catch(e){return g.call(t)}return n=g.call(t),e?t[m]=r:delete t[m],n}:function(t){return g.call(t)},_=Boolean.prototype.toString;var j=d();function S(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function E(t){return b(t)||S(t)}function O(){return new Function("return this;")()}s(E,"isPrimitive",b),s(E,"isObject",S);var T="object"==typeof self?self:null,A="object"==typeof window?window:null,B="object"==typeof global?global:null;var P=function(t){if(arguments.length){if(!b(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(T)return T;if(A)return A;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),x=P.document&&P.document.childNodes,C=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;s(V,"REGEXP",k);var G=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function L(t){return null!==t&&"object"==typeof t}function M(t){var e,r,n,o;if(("Object"===(r=w(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=k.exec(n.toString()))return e[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}s(L,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!G(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(L));var R="function"==typeof r||"object"==typeof C||"function"==typeof x?function(t){return M(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?M(t).toLowerCase():e};function F(t){return"function"===R(t)}function I(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function(t,r,n,o){var i,u;if(!e(t))throw new TypeError(I("0m3BO",t));if(!F(r))throw new TypeError(I("0m32S",r));if(!F(n))throw new TypeError(I("0m33Z",n));for(u=(i=t.length)-1;u>=0&&r(t[u],u,t);)n.call(o,t[u],u,t),i!==t.length&&(u+=t.length-i,i=t.length),u-=1;return t}}));
//# sourceMappingURL=index.js.map
