!function(){"use strict";var e,t={85410:function(e,t,n){var r=n(41326),o=n.n(r);$((function(){$("[data-decidim-geocoding]").each((function(e,t){var n=$(t),r=n.parent();r.addClass("has-tribute");var i=new(o())({autocompleteMode:!0,allowSpaces:!0,positionMenu:!1,replaceTextSuffix:"",menuContainer:r.get(0),noMatchTemplate:null,values:function(e,t){n.trigger("geocoder-suggest.decidim",[e,t])}});i.range.getLastWordInText=function(e){var t=e.replace(/\u00A0/g," ").split(/ \+ /);return t[t.length-1].trim()},i.attach(n.get(0)),n.on("tribute-replaced",(function(e){var t=e.detail.item.original;n.trigger("geocoder-suggest-select.decidim",[t]),t.coordinates&&n.trigger("geocoder-suggest-coordinates.decidim",[t.coordinates])})),n.data("geocoder-tribute",i)}))}));function i(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:", ",o=t.map((function(t){return Array.isArray(t)?i(e,t," "):e[t]||e[t.toLowerCase()]}));return(n=o,n.filter((function(e){return null!==e&&"undefined"!==typeof e&&"".concat(e).trim().length>0}))).join(r).trim()}$((function(){var e=i;$("[data-decidim-geocoding]").each((function(t,n){var r=$(n),o=r.data("decidim-geocoding"),i=o.queryMinLength||2,a=o.supportedLanguages||["de","en","it","fr"],u=o.defaultLanguage||"en",c=o.addressFormat||["name",["street","housenumber"],"postcode","city","state","country"],d=$("html").attr("lang");a.includes(d)||(d=u);var l=null;!o.url||o.url.length<1||r.on("geocoder-suggest.decidim",(function(t,n,r){clearTimeout(l),"".concat(n).trim().length<i||(l=setTimeout((function(){$.ajax({method:"GET",url:o.url,data:{q:n,lang:d},dataType:"json"}).done((function(t){return t.features?r(t.features.map((function(t){var n=e(t.properties,c);return{key:n,value:n,coordinates:t.geometry.coordinates}}))):null}))}),200))}))}))}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={1931:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],u=n[1],c=n[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(c)var l=c(r)}for(t&&t(n);d<a.length;d++)i=a[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=self.webpackChunkapp=self.webpackChunkapp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[1326],(function(){return r(85410)}));o=r.O(o)}();
//# sourceMappingURL=decidim_geocoding_provider_photon-f4a55251d4daf7fa8ea5.js.map