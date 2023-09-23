// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";function n(s,n,t,r,i){var a,d,m,o,l,p,u,f;return e(s)||e(n)?(t[i]=NaN,t[i+r]=NaN,t):(d=(65535&(u=(l=(65535&(s>>>=0))>>>0)*(p=(65535&(n>>>=0))>>>0)>>>0))>>>0,a=(u=(m=s>>>16>>>0)*p+(f=u>>>16>>>0)>>>0)>>>16>>>0,f=(u=l*(o=n>>>16>>>0)+((65535&u)>>>0)>>>0)>>>16>>>0,t[i]=m*o+a+f>>>0,t[i+r]=(u<<16)+d>>>0,t)}function t(s,e){return n(s,e,[0,0],1,0)}s(t,"assign",n);export{n as assign,t as default};
//# sourceMappingURL=index.mjs.map
