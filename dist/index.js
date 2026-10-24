"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var d=q(function(D,o){
var l=require('@stdlib/stats-strided-dmeanvarpn/dist').ndarray,R=require('@stdlib/math-base-special-sqrt/dist');function _(a,r,n,i,v,e,s,t){var p=t+s;return l(a,r,n,i,v,e,s,t),e[p]=R(e[p]),e}o.exports=_
});var c=q(function(F,m){
var E=require('@stdlib/strided-base-stride2offset/dist'),b=d();function g(a,r,n,i,v,e){var s=E(a,i),t=e>=0?0:-e;return b(a,r,n,i,s,v,e,t),v}m.exports=g
});var f=q(function(G,x){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),k=d();h(y,"ndarray",k);x.exports=y
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=f(),u,j=z(w(__dirname,"./native.js"));A(j)?u=B:u=j;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
