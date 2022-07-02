// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return n!=n};function r(){var r,t,a,e,u,f,o,c,i,l,v;return 3===arguments.length?(r=arguments[0],c=arguments[1],i=arguments[2]):(r=[0,0],c=arguments[0],i=arguments[1]),n(c)||n(i)?NaN:(a=(65535&(l=(f=(65535&(c>>>=0))>>>0)*(o=(65535&(i>>>=0))>>>0)>>>0))>>>0,t=(l=(e=c>>>16>>>0)*o+(v=l>>>16>>>0)>>>0)>>>16>>>0,v=(l=f*(u=i>>>16>>>0)+((65535&l)>>>0)>>>0)>>>16>>>0,r[0]=e*u+t+v>>>0,r[1]=(l<<16)+a>>>0,r)}export{r as default};
//# sourceMappingURL=mod.js.map
