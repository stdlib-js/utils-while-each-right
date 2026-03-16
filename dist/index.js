"use strict";var m=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var h=m(function(E,s){
var v=require('@stdlib/assert-is-collection/dist'),n=require('@stdlib/assert-is-function/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function w(r,e,t,g){var u,a;if(!v(r))throw new TypeError(i('1YPAh',r));if(!n(e))throw new TypeError(i('1YP2H',e));if(!n(t))throw new TypeError(i('1YP3N',t));for(u=r.length,a=u-1;a>=0&&e(r[a],a,r);)t.call(g,r[a],a,r),u!==r.length&&(a+=r.length-u,u=r.length),a-=1;return r}s.exports=w
});var f=h();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
