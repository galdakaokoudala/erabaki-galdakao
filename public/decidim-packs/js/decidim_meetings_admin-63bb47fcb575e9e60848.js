!function(){var e,t={5938:function(e,t,n){"use strict";function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,a=void 0,a=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===i(a)?a:String(a)),r)}var o,a}var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listSelector=t.listSelector,this.hideOnFirstSelector=t.hideOnFirstSelector,this.hideOnLastSelector=t.hideOnLastSelector,this.run()}var t,n,i;return t=e,(n=[{key:"run",value:function(){var e=$(this.listSelector),t=this.hideOnFirstSelector,n=this.hideOnLastSelector;if(1===e.length){var i=e.first();i.find(t).hide(),i.find(n).hide()}else e.each((function(i,r){r.id===e.first().attr("id")?($(r).find(t).hide(),$(r).find(n).show()):r.id===e.last().attr("id")?($(r).find(n).hide(),$(r).find(t).show()):($(r).find(n).show(),$(r).find(t).show())}))}}])&&r(t.prototype,n),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,o=void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===a(o)?o:String(o)),i)}var r,o}var d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listSelector=t.listSelector,this.labelSelector=t.labelSelector,this.onPositionComputed=t.onPositionComputed,this.run()}var t,n,i;return t=e,(n=[{key:"run",value:function(){var e=this;$(this.listSelector).each((function(t,n){var i=$(n).find(e.labelSelector),r=i.html();r.match(/#(\d+)/)?i.html(r.replace(/#(\d+)/,"#".concat(t+1))):i.html("".concat(r," #").concat(t+1)),e.onPositionComputed&&e.onPositionComputed(n,t)}))}}])&&l(t.prototype,n),i&&l(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),c=n(64112);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,o=void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===u(o)?o:String(o)),i)}var r,o}function f(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var p=f((function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),$(t).length>0&&(0,c.Z)(t,n)[0].addEventListener("sortupdate",(function(e){var t=$(e.target).children();n.onSortUpdate&&n.onSortUpdate(t)}))}));function m(e,t){return new p(e,t)}function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,o=void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==v(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===v(o)?o:String(o)),i)}var r,o}var g=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapperSelector=t.wrapperSelector,this.containerSelector=t.containerSelector,this.fieldSelector=t.fieldSelector,this.addFieldButtonSelector=t.addFieldButtonSelector,this.addSeparatorButtonSelector=t.addSeparatorButtonSelector,this.addTitleAndDescriptionButtonSelector=t.addTitleAndDescriptionButtonSelector,this.fieldTemplateSelector=t.fieldTemplateSelector,this.separatorTemplateSelector=t.separatorTemplateSelector,this.TitleAndDescriptionTemplateSelector=t.TitleAndDescriptionTemplateSelector,this.removeFieldButtonSelector=t.removeFieldButtonSelector,this.moveUpFieldButtonSelector=t.moveUpFieldButtonSelector,this.moveDownFieldButtonSelector=t.moveDownFieldButtonSelector,this.onAddField=t.onAddField,this.onRemoveField=t.onRemoveField,this.onMoveUpField=t.onMoveUpField,this.onMoveDownField=t.onMoveDownField,this.placeholderId=t.placeholderId,this.elementCounter=0,this._enableInterpolation(),this._activateFields(),this._bindEvents()}var t,n,i;return t=e,n=[{key:"_enableInterpolation",value:function(){$.fn.replaceAttribute=function(e,t,n){return $(this).find("[".concat(e,"*=").concat(t,"]")).addBack("[".concat(e,"*=").concat(t,"]")).each((function(i,r){$(r).attr(e,$(r).attr(e).replace(t,n))})),this},$.fn.template=function(e,t){var n=$(this).find("template, .decidim-template");n.length>0&&n.html((function(n,i){return $(i).template(e,t)[0].outerHTML}));var i=$(this).find("[data-template]");return i.length>0&&i.each((function(n,i){var r=$(i),o=$(r.data("template")),a=$(o[0].outerHTML),l="".concat(o.attr("id"),"-").concat(t),d="#".concat(l);a.attr("id",l),r.attr("data-template",d).data("template",d),o.after(a),a.html((function(n,i){return $(i).template(e,t)[0].outerHTML}))})),$(this).replaceAttribute("id",e,t),$(this).replaceAttribute("name",e,t),$(this).replaceAttribute("data-tabs-content",e,t),$(this).replaceAttribute("for",e,t),$(this).replaceAttribute("tabs_id",e,t),$(this).replaceAttribute("href",e,t),$(this).replaceAttribute("value",e,t),this}}},{key:"_bindEvents",value:function(){var e=this;$(this.wrapperSelector).on("click",this.addFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(){return e._addField(e.fieldTemplateSelector)}))})),this.addSeparatorButtonSelector&&$(this.wrapperSelector).on("click",this.addSeparatorButtonSelector,(function(t){return e._bindSafeEvent(t,(function(){return e._addField(e.separatorTemplateSelector)}))})),this.addTitleAndDescriptionButtonSelector&&$(this.wrapperSelector).on("click",this.addTitleAndDescriptionButtonSelector,(function(t){return e._bindSafeEvent(t,(function(){return e._addField(e.TitleAndDescriptionTemplateSelector)}))})),$(this.wrapperSelector).on("click",this.removeFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(t){return e._removeField(t)}))})),this.moveUpFieldButtonSelector&&$(this.wrapperSelector).on("click",this.moveUpFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(t){return e._moveUpField(t)}))})),this.moveDownFieldButtonSelector&&$(this.wrapperSelector).on("click",this.moveDownFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(t){return e._moveDownField(t)}))}))}},{key:"_bindSafeEvent",value:function(e,t){e.preventDefault(),e.stopPropagation();try{return t(e.target)}catch(n){return console.error(n),n}}},{key:"_addField",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".decidim-template",t=$(this.wrapperSelector),n=t.find(this.containerSelector),i=t.data("template"),r=null;i&&(r=$(i)),(null===r||r.length<1)&&(r=t.children("template, ".concat(e)));var o=$(r.html()).template(this.placeholderId,this._getUID());o.find("ul.tabs").attr("data-tabs",!0);var a=n.find(this.fieldSelector).last();a.length>0?a.after(o):o.appendTo(n),o.foundation(),this.onAddField&&this.onAddField(o)}},{key:"_removeField",value:function(e){var t=$(e).parents(this.fieldSelector);if(t.find("input").filter((function(e,t){return t.name.match(/id/)})).length>0){var n=t.find("input").filter((function(e,t){return t.name.match(/delete/)}));n.length>0&&$(n[0]).val(!0),t.addClass("hidden"),t.hide()}else t.remove();this.onRemoveField&&this.onRemoveField(t)}},{key:"_moveUpField",value:function(e){var t=$(e).parents(this.fieldSelector);t.prev().before(t),this.onMoveUpField&&this.onMoveUpField(t)}},{key:"_moveDownField",value:function(e){var t=$(e).parents(this.fieldSelector);t.next().after(t),this.onMoveDownField&&this.onMoveDownField(t)}},{key:"_activateFields",value:function(){var e=this,t=$(this.wrapperSelector).find(this.containerSelector);t.append(t.find("script")),$(this.fieldSelector).each((function(t,n){$(n).template(e.placeholderId,e._getUID()),$(n).find("ul.tabs").attr("data-tabs",!0)}))}},{key:"_getUID",value:function(){return this.elementCounter+=1,(new Date).getTime()+this.elementCounter}}],n&&h(t.prototype,n),i&&h(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return new g(e)}var S=n(49528);n(85641),n(49827),n(2905);function y(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var _=["bold","italic","link","underline","header","list","alt","break","width","style","code","blockquote","indent"];function F(e){var t=$(e).data("toolbar"),n=$(e).data("disabled"),i=[["bold","italic","underline","linebreak"],[{list:"ordered"},{list:"bullet"}],["link","clean"],["code","blockquote"],[{indent:"-1"},{indent:"+1"}]],r=!1,o=!1;"content"===t?i=[[{header:[2,3,4,5,6,!1]}]].concat(y(i)):"full"===t&&(r=!0,o=!0,i=[[{header:[2,3,4,5,6,!1]}]].concat(y(i),[["video"],["image"]]));var a={linebreak:{},toolbar:{container:i,handlers:{linebreak:S.Z}}},l=$(e).siblings('input[type="hidden"]');e.innerHTML=l.val()||"";var d=$('meta[name="csrf-token"]').attr("content");if(o&&_.push("video"),r){_.push("image"),a.imageResize={modules:["Resize","DisplaySize"]},a.imageUpload={url:$(e).data("uploadImagesPath"),method:"POST",name:"image",withCredentials:!1,headers:{"X-CSRF-Token":d},callbackOK:function(e,t){$("div.ql-toolbar").last().removeClass("editor-loading"),t(e.url)},callbackKO:function(e){$("div.ql-toolbar").last().removeClass("editor-loading"),console.log("Image upload error: ".concat(e.message))},checkBeforeSend:function(e,t){$("div.ql-toolbar").last().addClass("editor-loading"),t(e)}};var c=$(e).data("dragAndDropHelpText");$(e).after('<p class="help-text" style="margin-top:-1.5rem;">'.concat(c,"</p>"))}var u=new Quill(e,{modules:a,formats:_,theme:"snow"});return!1===r&&u.root.addEventListener("drop",(function(e){return e.preventDefault()})),n&&u.disable(),u.on("text-change",(function(){var t=u.getText(),n=new CustomEvent("quill-position",{detail:u.getSelection()});if(e.dispatchEvent(n),"\n"!==t&&"\n\n"!==t||0!==u.root.querySelectorAll("iframe").length){var i="<p><br></p>",r=u.root.innerHTML.replace(new RegExp("^".concat(i,"|").concat(i,"$"),"g"),"");l.val(r)}else l.val("")})),u.emitter.emit("editor-ready"),u}var k=".meeting-agenda-item",O=new d({listSelector:".meeting-agenda-item:not(.hidden)",labelSelector:".card-title span:first",onPositionComputed:function(e,t){$(e).find("input[name$=\\[position\\]]").val(t)}}),T=new o({listSelector:".meeting-agenda-item:not(.hidden)",hideOnFirstSelector:".move-up-agenda-item",hideOnLastSelector:".move-down-agenda-item"}),B=function(){m(".meeting-agenda-items-list:not(.published)",{handle:".agenda-item-divider",placeholder:'<div style="border-style: dashed; border-color: #000"></div>',forcePlaceholderSize:!0,onSortUpdate:function(){O.run()}})},A=new d({listSelector:".meeting-agenda-item-child:not(.hidden)",labelSelector:".card-title span:first",onPositionComputed:function(e,t){$(e).find("input[name$=\\[position\\]]").val(t)}}),P=new o({listSelector:".meeting-agenda-item-child:not(.hidden)",hideOnFirstSelector:".move-up-agenda-item-child",hideOnLastSelector:".move-down-agenda-item-child"}),C=function(e){return b({placeholderId:"meeting-agenda-item-child-id",wrapperSelector:"#".concat(e," ").concat(".meeting-agenda-item-childs"),containerSelector:".meeting-agenda-item-childs-list",fieldSelector:".meeting-agenda-item-child",addFieldButtonSelector:".add-agenda-item-child",removeFieldButtonSelector:".remove-agenda-item-child",moveUpFieldButtonSelector:".move-up-agenda-item-child",moveDownFieldButtonSelector:".move-down-agenda-item-child",onAddField:function(e){m(".meeting-agenda-item-childs-list:not(.published)",{handle:".agenda-item-child-divider",placeholder:'<div style="border-style: dashed; border-color: #000"></div>',forcePlaceholderSize:!0,onSortUpdate:function(){O.run()}}),e.find(".editor-container").each((function(e,t){F(t)})),A.run(),P.run()},onRemoveField:function(){A.run(),P.run()},onMoveUpField:function(){A.run(),P.run()},onMoveDownField:function(){A.run(),P.run()}})},I={},D=function(e){var t=e.attr("id");I[t]=C(t)};b({placeholderId:"meeting-agenda-item-id",wrapperSelector:".meeting-agenda-items",containerSelector:".meeting-agenda-items-list",fieldSelector:k,addFieldButtonSelector:".add-agenda-item",removeFieldButtonSelector:".remove-agenda-item",moveUpFieldButtonSelector:".move-up-agenda-item",moveDownFieldButtonSelector:".move-down-agenda-item",onAddField:function(e){D(e),B(),e.find(".editor-container").each((function(e,t){F(t)})),O.run(),T.run()},onRemoveField:function(){O.run(),T.run()},onMoveUpField:function(){O.run(),T.run()},onMoveDownField:function(){O.run(),T.run()}}),B(),$(k).each((function(e,t){var n=$(t);!function(e){"true"===e.find("input[name$=\\[deleted\\]]").val()&&(e.addClass("hidden"),e.hide())}(n),D(n)})),O.run(),T.run(),A.run(),P.run();n(76890);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,o=void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==j(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===j(o)?o:String(o)),i)}var r,o}var U=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.controllerField=t.controllerField,this.wrapperSelector=t.wrapperSelector,this.dependentFieldsSelector=t.dependentFieldsSelector,this.dependentInputSelector=t.dependentInputSelector,this.enablingCondition=t.enablingCondition,this._bindEvent(),this._run()}var t,n,i;return t=e,(n=[{key:"_run",value:function(){var e=this.controllerField,t=e.parents(this.wrapperSelector).find(this.dependentFieldsSelector),n=t.find(this.dependentInputSelector);this.enablingCondition(e)?(n.prop("disabled",!1),t.show()):(n.prop("disabled",!0),t.hide())}},{key:"_bindEvent",value:function(){var e=this;this.controllerField.on("change",(function(){e._run()}))}}])&&E(t.prototype,n),i&&E(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e){return new U(e)}function x(e,t,n){var i="".concat(e,"Name");if(n[i])return n[i];var r=t.attr("name"),o=/\[[^\]]+\]$/;return r.match(o)?r.replace(o,"[".concat(e,"]")):e}function L(e,t,n){var i=$.extend({},t),r=e.attr("id").split("_");r.pop();var o="".concat(r.join("_")),a="latitude",l="longitude";e.length>0&&(a=x("latitude",e,i),l=x("longitude",e,i));var d=$.extend({latitudeId:"".concat(o,"_latitude"),longitudeId:"".concat(o,"_longitude"),latitudeName:a,longitudeName:l},t),c=!1,u=function(t){!function(){var t=$("#".concat(d.latitudeId));t.length<1&&(t=$('<input type="hidden" name="'.concat(d.latitudeName,'" id="').concat(d.latitudeId,'" />')),e.after(t));var n=$("#".concat(d.longitudeId));n.length<1&&(n=$('<input type="hidden" name="'.concat(d.longitudeName,'" id="').concat(d.longitudeId,'" />')),e.after(n))}(),$("#".concat(d.latitudeId)).val(t[0]).attr("value",t[0]),$("#".concat(d.longitudeId)).val(t[1]).attr("value",t[1])};e.on("change.decidim",(function(){c||($("#".concat(d.latitudeId)).val("").removeAttr("value"),$("#".concat(d.longitudeId)).val("").removeAttr("value"))})),e.on("geocoder-suggest-coordinates.decidim",(function(e,t){u(t),c=!0,n(t)}));var s="".concat(e.data("coordinates")).split(",").map(parseFloat);Array.isArray(s)&&2===s.length&&u(s)}$((function(){var e=".meeting-service",t=new d({listSelector:".meeting-service:not(.hidden)",labelSelector:".card-title span:first",onPositionComputed:function(e,t){$(e).find("input[name$=\\[position\\]]").val(t)}}),n=new o({listSelector:".meeting-service:not(.hidden)",hideOnFirstSelector:".move-up-service",hideOnLastSelector:".move-down-service"}),i=function(){m(".meeting-services-list:not(.published)",{handle:".service-divider",placeholder:'<div style="border-style: dashed; border-color: #000"></div>',forcePlaceholderSize:!0,onSortUpdate:function(){t.run()}})};b({placeholderId:"meeting-service-id",wrapperSelector:".meeting-services",containerSelector:".meeting-services-list",fieldSelector:e,addFieldButtonSelector:".add-service",removeFieldButtonSelector:".remove-service",moveUpFieldButtonSelector:".move-up-service",moveDownFieldButtonSelector:".move-down-service",onAddField:function(){i(),t.run(),n.run()},onRemoveField:function(){t.run(),n.run()},onMoveUpField:function(){t.run(),n.run()},onMoveDownField:function(){t.run(),n.run()}}),i(),$(e).each((function(e,t){!function(e){"true"===e.find("input[name$=\\[deleted\\]]").val()&&(e.addClass("hidden"),e.hide())}($(t))})),t.run(),n.run();var r=$(".edit_meeting, .new_meeting, .copy_meetings");if(r.length>0){var a=r.find("#private_meeting"),l=r.find("#transparent"),c=function(){var e=a.find("input[type='checkbox']").prop("checked");l.find("input[type='checkbox']").attr("disabled","disabled"),e&&l.find("input[type='checkbox']").attr("disabled",!e)};a.on("change",c),c(),L(r.find("#meeting_address"));var u=r.find("#meeting_registration_type"),s=r.find("#meeting_registration_terms"),f=r.find("#meeting_registration_url"),p=r.find("#meeting_available_slots"),v=function(e,t,n){var i=e.val();t.toggle(i===n)};u.on("change",(function(e){var t=$(e.target);v(t,p,"on_this_platform"),v(t,s,"on_this_platform"),v(t,f,"on_different_platform")})),v(u,f,"on_different_platform");var h=r.find("#meeting_type_of_meeting"),g=r.find(".field[data-meeting-type='online']"),S=r.find(".field[data-meeting-type='in_person']"),y=r.find(".field[data-meeting-type='online-access-level']"),w=r.find("#meeting_iframe_embed_type"),_=function(e,t,n){var i=e.val();"hybrid"===i?t.show():(t.hide(),i===n&&t.show())};h.on("change",(function(e){var t=$(e.target),n=$("#meeting_iframe_embed_type select").val();_(t,g,"online"),_(t,S,"in_person"),"none"===n?y.hide():_(t,y,"online")})),_(h,g,"online"),_(h,S,"in_person"),M({controllerField:w,wrapperSelector:".iframe-fields",dependentFieldsSelector:".iframe-fields--access-level",dependentInputSelector:"input",enablingCondition:function(e){return"none"!==e.find("select").val()}})}}));n(39946);$((function(){var e=$('[name="meeting_registration_invite[existing_user]"');M({controllerField:e,wrapperSelector:".attendee-fields",dependentFieldsSelector:".attendee-fields--new-user",dependentInputSelector:"input",enablingCondition:function(){return $("#meeting_registration_invite_existing_user_false").is(":checked")}}),M({controllerField:e,wrapperSelector:".attendee-fields",dependentFieldsSelector:".attendee-fields--user-picker",dependentInputSelector:"input",enablingCondition:function(){return $("#meeting_registration_invite_existing_user_true").is(":checked")}})}))},76890:function(){$((function(){var e=$(".destroy-meeting-alert");e.length>0&&e.on("click",(function(){var t="".concat(e.data("invalid-destroy-message")," \n\n");t+=e.data("proposal-titles").replace(/\n\s/g,"\n"),alert(t)}))}))},39946:function(){$((function(){var e=$(".edit_meeting_registrations");if(e.length>0){var t=e.find("#meeting_registrations_enabled"),n=e.find("#meeting_available_slots"),i=e.find("#meeting_reserved_slots"),r=function(){var r=t.prop("checked");n.attr("disabled",!r),i.attr("disabled",!r),e.find(".editor-container").each((function(e,t){Quill.find(t).enable(r)}))};t.on("change",r),r()}}))}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.m=t,e=[],i.O=function(t,n,r,o){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var l=!0,d=0;d<n.length;d++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[d])}))?n.splice(d--,1):(l=!1,o<a&&(a=o));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={597:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],l=n[1],d=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(d)var u=d(i)}for(t&&t(n);c<a.length;c++)o=a[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},n=self.webpackChunkapp=self.webpackChunkapp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=i.O(void 0,[2415,4112,2884],(function(){return i(5938)}));r=i.O(r)}();
//# sourceMappingURL=decidim_meetings_admin-63bb47fcb575e9e60848.js.map