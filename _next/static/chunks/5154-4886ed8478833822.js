"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5154],{37673:function(e,t){/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=Symbol.for("react.element"),r=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.default_value"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),i=Object.assign,o={};function G(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||r}function H(){}function I(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||r}G.prototype.isReactComponent={},G.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},G.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},H.prototype=G.prototype;var s=I.prototype=new H;s.constructor=I,i(s,G.prototype),s.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,c={current:null},a={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,r){var i,o={},s=null,c=null;if(null!=t)for(i in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)u.call(t,i)&&!a.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var f=Array(l),h=0;h<l;h++)f[h]=arguments[h+2];o.children=f}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:s,ref:c,props:o,_owner:null}}},90952:function(e,t,n){e.exports=n(37673)},88202:function(e,t,n){n.d(t,{j:function(){return o}});var r=n(29492),i=n(46504);let FocusManager=class FocusManager extends r.l{#e;#t;#n;constructor(){super(),this.#n=e=>{if(!i.sk&&window.addEventListener){let listener=()=>e();return window.addEventListener("visibilitychange",listener,!1),()=>{window.removeEventListener("visibilitychange",listener)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.#e=e,e&&this.onFocus()}onFocus(){this.listeners.forEach(e=>{e()})}isFocused(){return"boolean"==typeof this.#e?this.#e:globalThis.document?.visibilityState!=="hidden"}};let o=new FocusManager},17156:function(e,t,n){n.d(t,{V:function(){return i}});var r=n(46504);let i=function(){let e=[],t=0,notifyFn=e=>{e()},batchNotifyFn=e=>{e()},schedule=n=>{t?e.push(n):(0,r.A4)(()=>{notifyFn(n)})},flush=()=>{let t=e;e=[],t.length&&(0,r.A4)(()=>{batchNotifyFn(()=>{t.forEach(e=>{notifyFn(e)})})})};return{batch:e=>{let n;t++;try{n=e()}finally{--t||flush()}return n},batchCalls:e=>(...t)=>{schedule(()=>{e(...t)})},schedule,setNotifyFunction:e=>{notifyFn=e},setBatchNotifyFunction:e=>{batchNotifyFn=e}}}()},23864:function(e,t,n){n.d(t,{N:function(){return o}});var r=n(29492),i=n(46504);let OnlineManager=class OnlineManager extends r.l{#r;#t;#n;constructor(){super(),this.#n=e=>{if(!i.sk&&window.addEventListener){let listener=()=>e();return window.addEventListener("online",listener,!1),window.addEventListener("offline",listener,!1),()=>{window.removeEventListener("online",listener),window.removeEventListener("offline",listener)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){this.#r=e,e&&this.onOnline()}onOnline(){this.listeners.forEach(e=>{e()})}isOnline(){return"boolean"==typeof this.#r?this.#r:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}};let o=new OnlineManager},43238:function(e,t,n){n.d(t,{DV:function(){return isCancelledError},Kw:function(){return canFetch},Mz:function(){return createRetryer}});var r=n(88202),i=n(23864),o=n(46504);function defaultRetryDelay(e){return Math.min(1e3*2**e,3e4)}function canFetch(e){return(e??"online")!=="online"||i.N.isOnline()}let CancelledError=class CancelledError{constructor(e){this.revert=e?.revert,this.silent=e?.silent}};function isCancelledError(e){return e instanceof CancelledError}function createRetryer(e){let t,n,s,u=!1,c=0,a=!1,l=new Promise((e,t)=>{n=e,s=t}),shouldPause=()=>!r.j.isFocused()||"always"!==e.networkMode&&!i.N.isOnline(),resolve=r=>{a||(a=!0,e.onSuccess?.(r),t?.(),n(r))},reject=n=>{a||(a=!0,e.onError?.(n),t?.(),s(n))},pause=()=>new Promise(n=>{t=e=>{let t=a||!shouldPause();return t&&n(e),t},e.onPause?.()}).then(()=>{t=void 0,a||e.onContinue?.()}),run=()=>{let t;if(!a){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(resolve).catch(t=>{if(a)return;let n=e.retry??3,r=e.retryDelay??defaultRetryDelay,i="function"==typeof r?r(c,t):r,s=!0===n||"number"==typeof n&&c<n||"function"==typeof n&&n(c,t);if(u||!s){reject(t);return}c++,e.onFail?.(c,t),(0,o._v)(i).then(()=>{if(shouldPause())return pause()}).then(()=>{u?reject(t):run()})})}};return canFetch(e.networkMode)?run():pause().then(run),{promise:l,cancel:t=>{a||(reject(new CancelledError(t)),e.abort?.())},continue:()=>{let e=t?.();return e?l:Promise.resolve()},cancelRetry:()=>{u=!0},continueRetry:()=>{u=!1}}}},29492:function(e,t,n){n.d(t,{l:function(){return Subscribable}});let Subscribable=class Subscribable{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.push(e),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(t=>t!==e),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}},46504:function(e,t,n){n.d(t,{A4:function(){return scheduleMicrotask},Ht:function(){return addToStart},Kp:function(){return timeUntilStale},PN:function(){return isValidTimeout},Q$:function(){return replaceEqualDeep},Rm:function(){return hashQueryKeyByOptions},SE:function(){return functionalUpdate},VS:function(){return shallowEqualObjects},VX:function(){return addToEnd},X7:function(){return matchMutation},Ym:function(){return hashKey},ZT:function(){return noop},_v:function(){return sleep},_x:function(){return matchQuery},oE:function(){return replaceData},sk:function(){return r},to:function(){return partialMatchKey}});let r="undefined"==typeof window||"Deno"in window;function noop(){}function functionalUpdate(e,t){return"function"==typeof e?e(t):e}function isValidTimeout(e){return"number"==typeof e&&e>=0&&e!==1/0}function timeUntilStale(e,t){return Math.max(e+(t||0)-Date.now(),0)}function matchQuery(e,t){let{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:u}=e;if(s){if(r){if(t.queryHash!==hashQueryKeyByOptions(s,t.options))return!1}else if(!partialMatchKey(t.queryKey,s))return!1}if("all"!==n){let e=t.isActive();if("active"===n&&!e||"inactive"===n&&e)return!1}return("boolean"!=typeof u||t.isStale()===u)&&(void 0===i||i===t.state.fetchStatus)&&(!o||!!o(t))}function matchMutation(e,t){let{exact:n,status:r,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(hashKey(t.options.mutationKey)!==hashKey(o))return!1}else if(!partialMatchKey(t.options.mutationKey,o))return!1}return(!r||t.state.status===r)&&(!i||!!i(t))}function hashQueryKeyByOptions(e,t){let n=t?.queryKeyHashFn||hashKey;return n(e)}function hashKey(e){return JSON.stringify(e,(e,t)=>isPlainObject(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t)}function partialMatchKey(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(n=>!partialMatchKey(e[n],t[n]))}function replaceEqualDeep(e,t){if(e===t)return e;let n=isPlainArray(e)&&isPlainArray(t);if(n||isPlainObject(e)&&isPlainObject(t)){let r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,s=n?[]:{},u=0;for(let r=0;r<o;r++){let o=n?r:i[r];s[o]=replaceEqualDeep(e[o],t[o]),s[o]===e[o]&&u++}return r===o&&u===r?e:s}return t}function shallowEqualObjects(e,t){if(e&&!t||t&&!e)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function isPlainArray(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function isPlainObject(e){if(!hasObjectPrototype(e))return!1;let t=e.constructor;if(void 0===t)return!0;let n=t.prototype;return!!(hasObjectPrototype(n)&&n.hasOwnProperty("isPrototypeOf"))}function hasObjectPrototype(e){return"[object Object]"===Object.prototype.toString.call(e)}function sleep(e){return new Promise(t=>{setTimeout(t,e)})}function scheduleMicrotask(e){sleep(0).then(e)}function replaceData(e,t,n){return"function"==typeof n.structuralSharing?n.structuralSharing(e,t):!1!==n.structuralSharing?replaceEqualDeep(e,t):t}function addToEnd(e,t,n=0){let r=[...e,t];return n&&r.length>n?r.slice(1):r}function addToStart(e,t,n=0){let r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}},70165:function(e,t,n){n.r(t),n.d(t,{QueryClientContext:function(){return i},QueryClientProvider:function(){return QueryClientProvider},useQueryClient:function(){return useQueryClient}});var r=n(20955);let i=r.createContext(void 0),useQueryClient=e=>{let t=r.useContext(i);if(e)return e;if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},QueryClientProvider=({client:e,children:t})=>(r.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),r.createElement(i.Provider,{value:e},t))}}]);