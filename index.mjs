// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";function s(){var s,e,n,a,r,i,d,m,h,l,o;return 3===arguments.length?(s=arguments[0],m=arguments[1],h=arguments[2]):(s=[0,0],m=arguments[0],h=arguments[1]),t(m)||t(h)?NaN:(n=(65535&(l=(i=(65535&(m>>>=0))>>>0)*(d=(65535&(h>>>=0))>>>0)>>>0))>>>0,e=(l=(a=m>>>16>>>0)*d+(o=l>>>16>>>0)>>>0)>>>16>>>0,o=(l=i*(r=h>>>16>>>0)+((65535&l)>>>0)>>>0)>>>16>>>0,s[0]=a*r+e+o>>>0,s[1]=(l<<16)+n>>>0,s)}export{s as default};
//# sourceMappingURL=index.mjs.map
