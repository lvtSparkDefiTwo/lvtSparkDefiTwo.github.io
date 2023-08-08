/*! For license information please see 1.bba97bc7.chunk.js.LICENSE.txt */
(this.webpackJsonpAPL=this.webpackJsonpAPL||[]).push([[1],{1017:function(e,t,r){"use strict";r.r(t),r.d(t,"Mutex",(function(){return u})),r.d(t,"Semaphore",(function(){return i})),r.d(t,"withTimeout",(function(){return c}));function n(e,t,r,n){return new(r||(r=Promise))((function(o,i){function u(e){try{a(n.next(e))}catch(t){i(t)}}function c(e){try{a(n.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,c)}a((n=n.apply(e,t||[])).next())}))}function o(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(c){i=[6,c],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;Object.create;var i=function(){function e(e){if(this._maxConcurrency=e,this._queue=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}return e.prototype.acquire=function(){var e=this,t=this.isLocked(),r=new Promise((function(t){return e._queue.push(t)}));return t||this._dispatch(),r},e.prototype.runExclusive=function(e){return n(this,void 0,void 0,(function(){var t,r,n;return o(this,(function(o){switch(o.label){case 0:return[4,this.acquire()];case 1:t=o.sent(),r=t[0],n=t[1],o.label=2;case 2:return o.trys.push([2,,4,5]),[4,e(r)];case 3:return[2,o.sent()];case 4:return n(),[7];case 5:return[2]}}))}))},e.prototype.isLocked=function(){return this._value<=0},e.prototype.release=function(){if(this._maxConcurrency>1)throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){var e=this._currentReleaser;this._currentReleaser=void 0,e()}},e.prototype._dispatch=function(){var e=this,t=this._queue.shift();if(t){var r=!1;this._currentReleaser=function(){r||(r=!0,e._value++,e._dispatch())},t([this._value--,this._currentReleaser])}},e}(),u=function(){function e(){this._semaphore=new i(1)}return e.prototype.acquire=function(){return n(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return[4,this._semaphore.acquire()];case 1:return e=t.sent(),[2,e[1]]}}))}))},e.prototype.runExclusive=function(e){return this._semaphore.runExclusive((function(){return e()}))},e.prototype.isLocked=function(){return this._semaphore.isLocked()},e.prototype.release=function(){this._semaphore.release()},e}();function c(e,t,r){var i=this;return void 0===r&&(r=new Error("timeout")),{acquire:function(){return new Promise((function(u,c){return n(i,void 0,void 0,(function(){var n,i;return o(this,(function(o){switch(o.label){case 0:return n=!1,setTimeout((function(){n=!0,c(r)}),t),[4,e.acquire()];case 1:return i=o.sent(),n?(Array.isArray(i)?i[1]:i)():u(i),[2]}}))}))}))},runExclusive:function(e){return n(this,void 0,void 0,(function(){var t,r;return o(this,(function(n){switch(n.label){case 0:t=function(){},n.label=1;case 1:return n.trys.push([1,,7,8]),[4,this.acquire()];case 2:return r=n.sent(),Array.isArray(r)?(t=r[1],[4,e(r[0])]):[3,4];case 3:return[2,n.sent()];case 4:return t=r,[4,e()];case 5:return[2,n.sent()];case 6:return[3,8];case 7:return t(),[7];case 8:return[2]}}))}))},release:function(){e.release()},isLocked:function(){return e.isLocked()}}}},1360:function(e,t,r){var n=r(2),o=r(84),i=r(61),u=r(62),c=r(214),a=r(732),s=r(339),f=r(167),l=r(168),h=(r(752),r(993),r(1361)),p=function(e,t){return e+t},v=["sync","latest"],y=function(e){"use strict";f(r,e);var t=l(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(this,r),(e=t.call(this))._blockResetDuration=n.blockResetDuration||2e4,e._blockResetTimeout,e._currentBlock=null,e._isRunning=!1,e._onNewListener=e._onNewListener.bind(c(e)),e._onRemoveListener=e._onRemoveListener.bind(c(e)),e._resetCurrentBlock=e._resetCurrentBlock.bind(c(e)),e._setupInternalEvents(),e}return u(r,[{key:"isRunning",value:function(){return this._isRunning}},{key:"getCurrentBlock",value:function(){return this._currentBlock}},{key:"getLatestBlock",value:function(){var e=o(n.mark((function e(){var t,r=this;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._currentBlock){e.next=2;break}return e.abrupt("return",this._currentBlock);case 2:return e.next=4,new Promise((function(e){return r.once("latest",e)}));case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeAllListeners",value:function(e){e?a(s(r.prototype),"removeAllListeners",this).call(this,e):a(s(r.prototype),"removeAllListeners",this).call(this),this._setupInternalEvents(),this._onRemoveListener()}},{key:"_start",value:function(){}},{key:"_end",value:function(){}},{key:"_setupInternalEvents",value:function(){this.removeListener("newListener",this._onNewListener),this.removeListener("removeListener",this._onRemoveListener),this.on("newListener",this._onNewListener),this.on("removeListener",this._onRemoveListener)}},{key:"_onNewListener",value:function(e,t){v.includes(e)&&this._maybeStart()}},{key:"_onRemoveListener",value:function(e,t){this._getBlockTrackerEventCount()>0||this._maybeEnd()}},{key:"_maybeStart",value:function(){this._isRunning||(this._isRunning=!0,this._cancelBlockResetTimeout(),this._start())}},{key:"_maybeEnd",value:function(){this._isRunning&&(this._isRunning=!1,this._setupBlockResetTimeout(),this._end())}},{key:"_getBlockTrackerEventCount",value:function(){var e=this;return v.map((function(t){return e.listenerCount(t)})).reduce(p)}},{key:"_newPotentialLatest",value:function(e){var t=this._currentBlock;t&&d(e)<=d(t)||this._setCurrentBlock(e)}},{key:"_setCurrentBlock",value:function(e){var t=this._currentBlock;this._currentBlock=e,this.emit("latest",e),this.emit("sync",{oldBlock:t,newBlock:e})}},{key:"_setupBlockResetTimeout",value:function(){this._cancelBlockResetTimeout(),this._blockResetTimeout=setTimeout(this._resetCurrentBlock,this._blockResetDuration),this._blockResetTimeout.unref&&this._blockResetTimeout.unref()}},{key:"_cancelBlockResetTimeout",value:function(){clearTimeout(this._blockResetTimeout)}},{key:"_resetCurrentBlock",value:function(){this._currentBlock=null}}]),r}(h);function d(e){return Number.parseInt(e,16)}e.exports=y},1361:function(e,t,r){var n=r(99),o=r(85),i="object"===typeof Reflect?Reflect:null,u=i&&"function"===typeof i.apply?i.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};function c(){o.call(this)}function a(e,t,r){try{u(e,t,r)}catch(n){setTimeout((function(){throw n}))}}function s(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}e.exports=c,n.inherits(c,o),c.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,o=this._events;if(void 0!==o)n=n&&void 0===o.error;else if(!n)return!1;if(n){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var u=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw u.context=i,u}var c=o[e];if(void 0===c)return!1;if("function"===typeof c)a(c,this,t);else{var f=c.length,l=s(c,f);for(r=0;r<f;++r)a(l[r],this,t)}return!0}},693:function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return o})),r.d(t,"__assign",(function(){return i})),r.d(t,"__rest",(function(){return u})),r.d(t,"__decorate",(function(){return c})),r.d(t,"__param",(function(){return a})),r.d(t,"__metadata",(function(){return s})),r.d(t,"__awaiter",(function(){return f})),r.d(t,"__generator",(function(){return l})),r.d(t,"__createBinding",(function(){return h})),r.d(t,"__exportStar",(function(){return p})),r.d(t,"__values",(function(){return v})),r.d(t,"__read",(function(){return y})),r.d(t,"__spread",(function(){return d})),r.d(t,"__spreadArrays",(function(){return _})),r.d(t,"__await",(function(){return b})),r.d(t,"__asyncGenerator",(function(){return m})),r.d(t,"__asyncDelegator",(function(){return w})),r.d(t,"__asyncValues",(function(){return k})),r.d(t,"__makeTemplateObject",(function(){return g})),r.d(t,"__importStar",(function(){return x})),r.d(t,"__importDefault",(function(){return O})),r.d(t,"__classPrivateFieldGet",(function(){return R})),r.d(t,"__classPrivateFieldSet",(function(){return L}));var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function u(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function c(e,t,r,n){var o,i=arguments.length,u=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)u=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(u=(i<3?o(u):i>3?o(t,r,u):o(t,r))||u);return i>3&&u&&Object.defineProperty(t,r,u),u}function a(e,t){return function(r,n){t(r,n,e)}}function s(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,r,n){return new(r||(r=Promise))((function(o,i){function u(e){try{a(n.next(e))}catch(t){i(t)}}function c(e){try{a(n.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,c)}a((n=n.apply(e,t||[])).next())}))}function l(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(c){i=[6,c],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function h(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function p(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function v(e){var t="function"===typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(c){o={error:c}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function d(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function _(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],u=0,c=i.length;u<c;u++,o++)n[o]=i[u];return n}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function m(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||c(e,t)}))})}function c(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(a,s):f(i[0][2],r)}catch(n){f(i[0][3],n)}var r}function a(e){c("next",e)}function s(e){c("throw",e)}function f(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function w(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function k(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=v(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function g(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function O(e){return e&&e.__esModule?e:{default:e}}function R(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function L(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},719:function(e,t,r){"use strict";var n=r(61),o=r(62),i=r(167),u=r(168);function c(e,t,r){try{Reflect.apply(e,t,r)}catch(n){setTimeout((function(){throw n}))}}function a(e){for(var t=e.length,r=new Array(t),n=0;n<t;n+=1)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){i(r,e);var t=u(r);function r(){return n(this,r),t.apply(this,arguments)}return o(r,[{key:"emit",value:function(e){var t="error"===e,r=this._events;if(void 0!==r)t=t&&void 0===r.error;else if(!t)return!1;for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];if(t){var u;if(o.length>0&&(u=o[0]),u instanceof Error)throw u;var s=new Error("Unhandled error.".concat(u?" (".concat(u.message,")"):""));throw s.context=u,s}var f=r[e];if(void 0===f)return!1;if("function"===typeof f)c(f,this,o);else for(var l=f.length,h=a(f),p=0;p<l;p+=1)c(h[p],this,o);return!0}}]),r}(r(85).EventEmitter);t.default=s},732:function(e,t,r){var n=r(759);function o(t,r,i){return"undefined"!==typeof Reflect&&Reflect.get?e.exports=o=Reflect.get:e.exports=o=function(e,t,r){var o=n(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(r):i.value}},o(t,r,i||t)}e.exports=o},733:function(e,t,r){var n=r(339),o=r(217),i=r(838),u=r(342);function c(t){var r="function"===typeof Map?new Map:void 0;return e.exports=c=function(e){if(null===e||!i(e))return e;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return u(e,arguments,n(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},c(t)}e.exports=c},759:function(e,t,r){var n=r(339);e.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n(e)););return e}},760:function(e,t){e.exports=o,o.default=o,o.stable=u,o.stableStringify=u;var r=[],n=[];function o(e,t,o){var i;for(!function e(t,o,i,u){var c;if("object"===typeof t&&null!==t){for(c=0;c<i.length;c++)if(i[c]===t){var a=Object.getOwnPropertyDescriptor(u,o);return void(void 0!==a.get?a.configurable?(Object.defineProperty(u,o,{value:"[Circular]"}),r.push([u,o,t,a])):n.push([t,o]):(u[o]="[Circular]",r.push([u,o,t])))}if(i.push(t),Array.isArray(t))for(c=0;c<t.length;c++)e(t[c],c,i,t);else{var s=Object.keys(t);for(c=0;c<s.length;c++){var f=s[c];e(t[f],f,i,t)}}i.pop()}}(e,"",[],void 0),i=0===n.length?JSON.stringify(e,t,o):JSON.stringify(e,c(t),o);0!==r.length;){var u=r.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}return i}function i(e,t){return e<t?-1:e>t?1:0}function u(e,t,o){var u,a=function e(t,o,u,c){var a;if("object"===typeof t&&null!==t){for(a=0;a<u.length;a++)if(u[a]===t){var s=Object.getOwnPropertyDescriptor(c,o);return void(void 0!==s.get?s.configurable?(Object.defineProperty(c,o,{value:"[Circular]"}),r.push([c,o,t,s])):n.push([t,o]):(c[o]="[Circular]",r.push([c,o,t])))}if("function"===typeof t.toJSON)return;if(u.push(t),Array.isArray(t))for(a=0;a<t.length;a++)e(t[a],a,u,t);else{var f={},l=Object.keys(t).sort(i);for(a=0;a<l.length;a++){var h=l[a];e(t[h],h,u,t),f[h]=t[h]}if(void 0===c)return f;r.push([c,o,t]),c[o]=f}u.pop()}}(e,"",[],void 0)||e;for(u=0===n.length?JSON.stringify(a,t,o):JSON.stringify(a,c(t),o);0!==r.length;){var s=r.pop();4===s.length?Object.defineProperty(s[0],s[1],s[3]):s[0][s[1]]=s[2]}return u}function c(e){return e=void 0!==e?e:function(e,t){return t},function(t,r){if(n.length>0)for(var o=0;o<n.length;o++){var i=n[o];if(i[1]===t&&i[0]===r){r="[Circular]",n.splice(o,1);break}}return e.call(this,t,r)}}},838:function(e,t){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},992:function(e,t,r){var n=r(2),o=r(84),i=r(61),u=r(62),c=r(167),a=r(168),s=r(993),f=r(1360),l=function(e){"use strict";c(r,e);var t=a(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(i(this,r),!n.provider)throw new Error("PollingBlockTracker - no provider specified.");var o=n.pollingInterval||2e4,u=n.retryTimeout||o/10,c=void 0===n.keepEventLoopActive||n.keepEventLoopActive,a=n.setSkipCacheFlag||!1;return(e=t.call(this,Object.assign({blockResetDuration:o},n)))._provider=n.provider,e._pollingInterval=o,e._retryTimeout=u,e._keepEventLoopActive=c,e._setSkipCacheFlag=a,e}return u(r,[{key:"checkForLatestBlock",value:function(){var e=o(n.mark((function e(){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._updateLatestBlock();case 2:return e.next=4,this.getLatestBlock();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_start",value:function(){var e=this;this._performSync().catch((function(t){return e.emit("error",t)}))}},{key:"_performSync",value:function(){var e=o(n.mark((function e(){var t;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._isRunning){e.next=16;break}return e.prev=1,e.next=4,this._updateLatestBlock();case 4:return e.next=6,h(this._pollingInterval,!this._keepEventLoopActive);case 6:e.next=14;break;case 8:e.prev=8,e.t0=e.catch(1),t=new Error("PollingBlockTracker - encountered an error while attempting to update latest block:\n".concat(e.t0.stack));try{this.emit("error",t)}catch(r){console.error(t)}return e.next=14,h(this._retryTimeout,!this._keepEventLoopActive);case 14:e.next=0;break;case 16:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"_updateLatestBlock",value:function(){var e=o(n.mark((function e(){var t;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchLatestBlock();case 2:t=e.sent,this._newPotentialLatest(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_fetchLatestBlock",value:function(){var e=o(n.mark((function e(){var t,r,o=this;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={jsonrpc:"2.0",id:1,method:"eth_blockNumber",params:[]},this._setSkipCacheFlag&&(t.skipCache=!0),e.next=4,s((function(e){return o._provider.sendAsync(t,e)}))();case 4:if(!(r=e.sent).error){e.next=7;break}throw new Error("PollingBlockTracker - encountered error fetching block:\n".concat(r.error));case 7:return e.abrupt("return",r.result);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),r}(f);function h(e,t){return new Promise((function(r){var n=setTimeout(r,e);n.unref&&t&&n.unref()}))}e.exports=l},993:function(e,t,r){"use strict";var n=function(e,t){return function(){for(var r=this,n=t.promiseModule,o=new Array(arguments.length),i=0;i<arguments.length;i++)o[i]=arguments[i];return new n((function(n,i){t.errorFirst?o.push((function(e,r){if(t.multiArgs){for(var o=new Array(arguments.length-1),u=1;u<arguments.length;u++)o[u-1]=arguments[u];e?(o.unshift(e),i(o)):n(o)}else e?i(e):n(r)})):o.push((function(e){if(t.multiArgs){for(var r=new Array(arguments.length-1),o=0;o<arguments.length;o++)r[o]=arguments[o];n(r)}else n(e)})),e.apply(r,o)}))}};e.exports=function(e,t){t=Object.assign({exclude:[/.+(Sync|Stream)$/],errorFirst:!0,promiseModule:Promise},t);var r,o=function(e){var r=function(t){return"string"===typeof t?e===t:t.test(e)};return t.include?t.include.some(r):!t.exclude.some(r)};for(var i in r="function"===typeof e?function(){return t.excludeMain?e.apply(this,arguments):n(e,t).apply(this,arguments)}:Object.create(Object.getPrototypeOf(e)),e){var u=e[i];r[i]="function"===typeof u&&o(i)?n(u,t):u}return r}}}]);