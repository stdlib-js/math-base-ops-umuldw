// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r};var n=function(){var n,t,a,e,u,f,o,v,c,i,l;return 3===arguments.length?(n=arguments[0],v=arguments[1],c=arguments[2]):(n=[0,0],v=arguments[0],c=arguments[1]),r(v)||r(c)?NaN:(a=(65535&(i=(f=(65535&(v>>>=0))>>>0)*(o=(65535&(c>>>=0))>>>0)>>>0))>>>0,t=(i=(e=v>>>16>>>0)*o+(l=i>>>16>>>0)>>>0)>>>16>>>0,l=(i=f*(u=c>>>16>>>0)+((65535&i)>>>0)>>>0)>>>16>>>0,n[0]=e*u+t+l>>>0,n[1]=(i<<16)+a>>>0,n)};export{n as default};
//# sourceMappingURL=mod.js.map
