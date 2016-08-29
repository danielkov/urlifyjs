
'use strict'

module.exports = function(s, cf){
   var cf = cf || {};
   if (typeof s === 'string' || s instanceof String){
      var rA = /[ÁáÀàÅåÄä]/g;
      var rC = /([Çç])/g;
      var rE = /([ÉéÈèÊê])/g;
      var rI = /([ÍíÌìÎî])/g;
      var rN = /([Ññ])/g;
      var rO = /([ÓóÒòÔôÖöØø])/g;
      var rS = /[ŚśŜŝŞşŠš]/g;
      var rSs = /[ß]/g;
      var rU = /([ÚúÙùÜü])/g;
      var rZ = /([Žž])/g;
      var rWS = /\s/g;
      var accept = new RegExp('[^a-zA-Z0-9' + (cf.accept ? cf.accept + cf.whiteSpace : '-' + cf.whiteSpace) + ']', 'g');

      var url = s.replace(rA, 'a')
         .replace(rC, 'c')
         .replace(rE, 'e')
         .replace(rI, 'i')
         .replace(rN, 'n')
         .replace(rO, 'o')
         .replace(rS, 's')
         .replace(rSs, cf.sz ? 'sz' : 'ss')
         .replace(rU, 'u')
         .replace(rZ, 'z')
         .replace(rWS, cf.whiteSpace || '-')
         .replace(accept, cf.special || '');

      return cf.lowerCase ? url.toLowerCase() : url;

   }else{
      return s;
   }
};
