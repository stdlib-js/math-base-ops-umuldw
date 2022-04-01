// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";var s=t;var a=function(){var t,a,e,r,n,i,d,m,h,l,o;return 3===arguments.length?(t=arguments[0],m=arguments[1],h=arguments[2]):(t=[0,0],m=arguments[0],h=arguments[1]),s(m)||s(h)?NaN:(e=(65535&(l=(i=(65535&(m>>>=0))>>>0)*(d=(65535&(h>>>=0))>>>0)>>>0))>>>0,a=(l=(r=m>>>16>>>0)*d+(o=l>>>16>>>0)>>>0)>>>16>>>0,o=(l=i*(n=h>>>16>>>0)+((65535&l)>>>0)>>>0)>>>16>>>0,t[0]=r*n+a+o>>>0,t[1]=(l<<16)+e>>>0,t)};export{a as default};
//# sourceMappingURL=index.mjs.map
