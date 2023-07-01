// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s,n,o,i){var m,l;if(!r(s))throw new TypeError(e("0m3BO",s));if(!t(n))throw new TypeError(e("0m32S",n));if(!t(o))throw new TypeError(e("0m33Z",o));for(l=(m=s.length)-1;l>=0&&n(s[l],l,s);)o.call(i,s[l],l,s),m!==s.length&&(l+=s.length-m,m=s.length),l-=1;return s}export{s as default};
//# sourceMappingURL=index.mjs.map
