(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7353],{44020:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return[decodeURIComponent(e.join(""))]}catch(c){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function c(e){try{return decodeURIComponent(e)}catch(c){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var a=c(o[0]);a!==o[0]&&(r[o[0]]=a)}o=n.exec(e)}r["%C2"]="\ufffd";for(var i=Object.keys(r),u=0;u<i.length;u++){var l=i[u];e=e.replace(new RegExp(l,"g"),r[l])}return e}(e)}}},63654:function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=t.length;--r>=0&&t.item(r)!==this;);return r>-1})},7422:function(e){var t=/^(?:submit|button|image|reset|file)$/i,r=/^(?:input|select|textarea|keygen)/i,n=/(\[[^\[\]]*\])/g;function o(e,t,r){if(0===t.length)return e=r;var n=t.shift(),c=n.match(/^\[(.+?)\]$/);if("[]"===n)return e=e||[],Array.isArray(e)?e.push(o(null,t,r)):(e._values=e._values||[],e._values.push(o(null,t,r))),e;if(c){var a=c[1],i=+a;isNaN(i)?(e=e||{})[a]=o(e[a],t,r):(e=e||[])[i]=o(e[i],t,r)}else e[n]=o(e[n],t,r);return e}function c(e,t,r){if(t.match(n)){o(e,function(e){var t=[],r=new RegExp(n),o=/^([^\[\]]*)/.exec(e);for(o[1]&&t.push(o[1]);null!==(o=r.exec(e));)t.push(o[1]);return t}(t),r)}else{var c=e[t];c?(Array.isArray(c)||(e[t]=[c]),e[t].push(r)):e[t]=r}return e}function a(e,t,r){return r=r.replace(/(\r)?\n/g,"\r\n"),r=(r=encodeURIComponent(r)).replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+r}e.exports=function(e,n){"object"!=typeof n?n={hash:!!n}:void 0===n.hash&&(n.hash=!0);for(var o=n.hash?{}:"",i=n.serializer||(n.hash?c:a),u=e&&e.elements?e.elements:[],l=Object.create(null),f=0;f<u.length;++f){var s=u[f];if((n.disabled||!s.disabled)&&s.name&&(r.test(s.nodeName)&&!t.test(s.type))){var p=s.name,h=s.value;if("checkbox"!==s.type&&"radio"!==s.type||s.checked||(h=void 0),n.empty){if("checkbox"!==s.type||s.checked||(h=""),"radio"===s.type&&(l[s.name]||s.checked?s.checked&&(l[s.name]=!0):l[s.name]=!1),void 0==h&&"radio"==s.type)continue}else if(!h)continue;if("select-multiple"!==s.type)o=i(o,p,h);else{h=[];for(var y=s.options,d=!1,v=0;v<y.length;++v){var m=y[v],b=n.empty&&!m.value,g=m.value||b;m.selected&&g&&(d=!0,o=n.hash&&"[]"!==p.slice(p.length-2)?i(o,p+"[]",m.value):i(o,p,m.value))}!d&&n.empty&&(o=i(o,p,""))}}}if(n.empty)for(var p in l)l[p]||(o=i(o,p,""));return o}},37353:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(63654);var o=a(r(7422)),c=a(r(61520));function a(e){return e&&e.__esModule?e:{default:e}}var i={name:"form",ignores:[],includes:[],checkbox:null},u=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ele=document.querySelector(t),this.opt=Object.assign({},i,r),this.opt.checkbox&&(this.checkbox=document.querySelector(this.opt.checkbox),this.setCheckbox(),this.apply())}return n(e,[{key:"save",value:function(){var e=(0,o.default)(this.ele);window.localStorage.setItem(this.opt.name,e)}},{key:"clear",value:function(){window.localStorage.removeItem(this.opt.name)}},{key:"setCheckbox",value:function(){var e=this;this.ele.addEventListener("submit",(function(){e.checkbox.checked?e.save():e.clear()}))}},{key:"getState",value:function(){return(0,o.default)(this.ele)}},{key:"applyState",value:function(e){var t=this,r=this.opt,n=r.ignores,o=r.includes,a=c.default.parse(e.replace(/^"(.*)"$/,"$1")),i=function(e){var r=!1,c=t.ele.querySelector('[name="'+e+'"]'),i=t.ele.querySelectorAll('[name="'+e+'"]');if(!c)return"continue";if(n.forEach((function(e){if(c.matches(e))return r=!0,!1})),r)return"continue";if(o.length>0&&(r=!0,o.forEach((function(e){if(c.matches(e))return r=!1,!1})),r))return"continue";if(i&&i.length>1){var u=a[e];return[].forEach.call(i,(function(e,t){"checkbox"===e.type?u.forEach?u.forEach((function(t){t===e.value&&(e.checked=!0)})):u===e.value&&(e.checked=!0):"radio"===e.type&&e.value===u&&(e.checked=!0)})),"continue"}"radio"===c.type||"checkbox"===c.type?a[e]===c.value&&(c.checked=!0):c.value=a[e]};for(var u in a)i(u)}},{key:"apply",value:function(){var e=window.localStorage.getItem(this.opt.name);e&&this.applyState(e)}}]),e}();t.default=u,e.exports=t.default},61520:function(e,t,r){"use strict";var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(u){o=!0,c=u}finally{try{!n&&i.return&&i.return()}finally{if(o)throw c}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e){return c(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))},a=r(44020);function i(e,t){return t.encode?t.strict?strictUriEncode(e):c(e):e}function u(e,t){return t.decode?a(e):e}function l(e){return Array.isArray(e)?e.sort():"object"===("undefined"===typeof e?"undefined":o(e))?l(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function f(e){var t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function s(e,t){var r=function(e){var t=void 0;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),c=Object.create(null);if("string"!==typeof e)return c;if(!(e=e.trim().replace(/^[?#&]/,"")))return c;var a=!0,i=!1,f=void 0;try{for(var s,p=e.split("&")[Symbol.iterator]();!(a=(s=p.next()).done);a=!0){var h=s.value.replace(/\+/g," ").split("="),y=n(h,2),d=y[0],v=y[1];v=void 0===v?null:u(v,t),r(u(d,t),v,c)}}catch(m){i=!0,f=m}finally{try{!a&&p.return&&p.return()}finally{if(i)throw f}}return Object.keys(c).sort().reduce((function(e,t){var r=c[t];return Boolean(r)&&"object"===("undefined"===typeof r?"undefined":o(r))&&!Array.isArray(r)?e[t]=l(r):e[t]=r,e}),Object.create(null))}t.extract=f,t.parse=s,t.stringify=function(e,t){!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=function(){});var r=function(e){switch(e.arrayFormat){case"index":return function(t,r,n){return null===r?[i(t,e),"[",n,"]"].join(""):[i(t,e),"[",i(n,e),"]=",i(r,e)].join("")};case"bracket":return function(t,r){return null===r?[i(t,e),"[]"].join(""):[i(t,e),"[]=",i(r,e)].join("")};default:return function(t,r){return null===r?i(t,e):[i(t,e),"=",i(r,e)].join("")}}}(t);return e?Object.keys(e).sort(t.sort).map((function(n){var o=e[n];if(void 0===o)return"";if(null===o)return i(n,t);if(Array.isArray(o)){var c=[],a=!0,u=!1,l=void 0;try{for(var f,s=o.slice()[Symbol.iterator]();!(a=(f=s.next()).done);a=!0){var p=f.value;void 0!==p&&c.push(r(n,p,c.length))}}catch(h){u=!0,l=h}finally{try{!a&&s.return&&s.return()}finally{if(u)throw l}}return c.join("&")}return i(n,t)+"="+i(o,t)})).filter((function(e){return e.length>0})).join("&"):""},t.parseUrl=function(e,t){return{url:e.split("?")[0]||"",query:s(f(e),t)}}}}]);
//# sourceMappingURL=7353-fed37c21bfa607efba7d.js.map