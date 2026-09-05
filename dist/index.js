"use strict";var m=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var h=m(function(E,s){
var v=require('@stdlib/assert-is-collection/dist'),n=require('@stdlib/assert-is-function/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function w(r,e,u,g){var t,a;if(!v(r))throw new TypeError(i('1YPAh',r));if(!n(e))throw new TypeError(i('1YP2H',e));if(!n(u))throw new TypeError(i('1YP3N',u));for(t=r.length,a=t-1;a>=0&&e(r[a],a,r);)u.call(g,r[a],a,r),t!==r.length&&(a+=r.length-t,t=r.length),a-=1;return r}s.exports=w
});var f=h();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
