// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";var n=65535;function t(s,t,r,a,i){var d,m,o,l,p,u,f,j;return e(s)||e(t)?(r[i]=NaN,r[i+a]=NaN,r):(m=((f=(p=((s>>>=0)&n)>>>0)*(u=((t>>>=0)&n)>>>0)>>>0)&n)>>>0,d=(f=(o=s>>>16>>>0)*u+(j=f>>>16>>>0)>>>0)>>>16>>>0,j=(f=p*(l=t>>>16>>>0)+((f&n)>>>0)>>>0)>>>16>>>0,r[i]=o*l+d+j>>>0,r[i+a]=(f<<16)+m>>>0,r)}function r(s,e){return t(s,e,[0,0],1,0)}s(r,"assign",t);export{t as assign,r as default};
//# sourceMappingURL=index.mjs.map
