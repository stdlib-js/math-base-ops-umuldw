"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=p(function(D,d){
var O=require('@stdlib/math-base-assert-is-nan/dist'),u=65535;function R(e,r,v,w,i){var x,N,m,s,t,c,l,a,n;return O(e)||O(r)?(v[i]=NaN,v[i+w]=NaN,v):(e>>>=0,r>>>=0,s=e>>>16>>>0,c=(e&u)>>>0,t=r>>>16>>>0,l=(r&u)>>>0,a=c*l>>>0,m=(a&u)>>>0,n=a>>>16>>>0,a=s*l+n>>>0,N=(a&u)>>>0,x=a>>>16>>>0,a=c*t+N>>>0,n=a>>>16>>>0,v[i]=s*t+x+n>>>0,v[i+w]=(a<<16)+m>>>0,v)}d.exports=R
});var g=p(function(K,f){
var W=q();function _(e,r){return W(e,r,[0,0],1,0)}f.exports=_
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=g(),y=q();k(h,"assign",y);module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
