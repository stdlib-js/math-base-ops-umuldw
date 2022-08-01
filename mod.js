// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return n!=n}function t(){var t,r,e,u,a,f,o,c,i,l,N;return 3===arguments.length?(t=arguments[0],c=arguments[1],i=arguments[2]):(t=[0,0],c=arguments[0],i=arguments[1]),n(c)||n(i)?NaN:(e=(65535&(l=(f=(65535&(c>>>=0))>>>0)*(o=(65535&(i>>>=0))>>>0)>>>0))>>>0,r=(l=(u=c>>>16>>>0)*o+(N=l>>>16>>>0)>>>0)>>>16>>>0,N=(l=f*(a=i>>>16>>>0)+((65535&l)>>>0)>>>0)>>>16>>>0,t[0]=u*a+r+N>>>0,t[1]=(l<<16)+e>>>0,t)}export{t as default};
//# sourceMappingURL=mod.js.map
