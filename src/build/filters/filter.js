define(["app"],function(r){return r.filter("destinFilter",function(){return function(r,n,i,t){if(!angular.isArray(r)||!angular.isString(n))return r;for(var e=0;e<r.length;e++)if(r[e][t]==n)return r[e][i]}})});