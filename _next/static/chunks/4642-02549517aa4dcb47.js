"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4642,4859,6907],{16907:function(e,t,n){n.r(t);var a,r=n(90952);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.default=function(e){return r.createElement("svg",_extends({fill:"currentColor",viewBox:"0 0 24 24",width:"1em",height:"1em"},e),a||(a=r.createElement("path",{d:"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"})))}},2759:function(e,t,n){n.d(t,{Z:function(){return a}});var a=(0,n(91683).Z)("world","IconWorld",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M3.6 9h16.8",key:"svg-1"}],["path",{d:"M3.6 15h16.8",key:"svg-2"}],["path",{d:"M11.5 3a17 17 0 0 0 0 18",key:"svg-3"}],["path",{d:"M12.5 3a17 17 0 0 1 0 18",key:"svg-4"}]])},92794:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(26705),r=n(20955),o=n(90203),i=n(41688),l=(0,r.forwardRef)((e,t)=>{let{value:n,children:l,onClick:c,successText:s="Copied!",useOrigin:f=!1,...u}=e,[h,d]=(0,i.Z)(),y=(0,r.useCallback)(e=>{d(f?location.origin+n:n),c&&c(e)},[d,f,n,c]);return(0,a.jsx)(o.Z,{text:s,open:!!h,children:(0,a.jsx)("button",{...u,onClick:y,ref:t,children:l})})})},27158:function(e,t,n){n.r(t),n.d(t,{capitalize:function(){return capitalize},default:function(){return PlatformLink_PlatformLink}});var a=n(26705);n(20955);var r=n(61396),o=n.n(r),i=(0,n(91683).Z)("mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]]),l=n(2759),c=n(82749),s=n(92794),f=n(25399),u=n(90203),h=n(85455);let capitalize=e=>e.replace(/(?:^|\s|["'([{])+\S/g,e=>e.toUpperCase());var PlatformLink_PlatformLink=e=>{let{id:t,value:n,type:r,icon:d,url:y}=e,{data:m}=(0,c.useSession)(),onClick=()=>{var e;(0,h.O)({event:{name:"SocialClick",elementId:"".concat(t)},accessToken:null==m?void 0:null===(e=m.user)||void 0===e?void 0:e.accessToken})},b={PlatformBattleNet:"hover:bg-battlenet hover:text-white",PlatformEpicGames:"hover:bg-white hover:text-black",PlatformFaceit:"hover:bg-faceit hover:text-white",PlatformGamersclub:"hover:bg-gamersclub hover:text-white",PlatformLeagueOfLegends:"hover:bg-leagueoflegends hover:text-white",PlatformOrigin:"hover:bg-origin hover:text-white",PlatformPsn:"hover:bg-psn hover:text-white",PlatformRiotGames:"hover:bg-riotgames hover:text-white",PlatformSteam:"hover:bg-steam hover:text-white",PlatformUbisoft:"hover:bg-ubisoft hover:text-white",PlatformXbox:"hover:bg-xbox hover:text-white",PlatformDiscord:"hover:bg-discord hover:text-white",PlatformFacebook:"hover:bg-facebook hover:text-white",PlatformInstagram:"hover:bg-instagram hover:text-white",PlatformSpotify:"hover:bg-spotify hover:text-black",PlatformTiktok:"hover:bg-tiktok hover:text-white",PlatformTwitch:"hover:bg-twitch hover:text-white",PlatformTwitter:"hover:bg-twitter hover:text-white",PlatformYoutube:"hover:bg-youtube hover:text-white",PlatformKick:"hover:bg-kick hover:text-black"}[d];return"email"===r?(0,a.jsx)(u.Z,{text:"Email",children:(0,a.jsx)(s.Z,{onClick:onClick,value:n,className:"inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gray-900/30 text-sm text-gray-100 transition-colors hover:bg-black/80 hover:text-white",children:(0,a.jsx)(i,{className:"h-5 w-5 shrink-0"})})}):"website"===r?(0,a.jsx)(u.Z,{text:"Website",children:(0,a.jsx)(o(),{onClick:onClick,href:y||n,target:"_blank",className:"inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gray-900/30 text-sm text-gray-100 transition-colors hover:bg-black/80 hover:text-white",children:(0,a.jsx)(l.Z,{className:"h-5 w-5 shrink-0"})})}):y?(0,a.jsx)(u.Z,{text:n,children:(0,a.jsx)(o(),{onClick:onClick,href:y,target:"_blank",className:"inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gray-900/30 text-sm text-gray-100 transition-colors ".concat(b),children:(0,a.jsx)(f.Z,{icon:d,className:"h-5 w-5 shrink-0"})})}):(0,a.jsx)(u.Z,{text:n,children:(0,a.jsx)(s.Z,{onClick:onClick,value:n,successText:"Copied!",children:(0,a.jsx)("div",{className:"inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gray-900/30 text-sm text-gray-100 transition-colors ".concat(b),children:(0,a.jsx)(f.Z,{icon:d,className:"h-5 w-5 shrink-0"})})})})}},14859:function(e,t,n){n.r(t),n.d(t,{trackEvent:function(){return trackEvent}});var a=n(26705),r=n(20955);let trackEvent=async e=>{let{event:t,params:a,eventOptions:r}=e,{track:o}=await n.e(9109).then(n.bind(n,89109)),{promise:i}=o(t,a,r);return await i};t.default=e=>((0,r.useEffect)(()=>{trackEvent(e)},[]),(0,a.jsx)(a.Fragment,{}))},28260:function(e,t,n){n.d(t,{L:function(){return a.trackEvent}});var a=n(14859);t.Z=a.default},67448:function(e,t,n){n.r(t),n.d(t,{trackRails:function(){return trackRails}});var a=n(26705),r=n(20955),o=n(82749),i=n(24810);let trackRails=e=>{let{event:t,accessToken:n}=e;fetch("".concat(i.XJ,"/tk"),{method:"POST",headers:{authorization:n||"","content-type":"application/json"},body:JSON.stringify({event:t,referrer:document.referrer})})};t.default=e=>{let{event:t}=e,n=(0,r.useRef)(!1),{data:i,status:l}=(0,o.useSession)();return(0,r.useEffect)(()=>{if(!n.current&&"loading"!==l){var e;n.current=!0,trackRails({event:t,accessToken:null==i?void 0:null===(e=i.user)||void 0===e?void 0:e.accessToken})}},[l,i,t]),(0,a.jsx)(a.Fragment,{})}},85455:function(e,t,n){n.d(t,{O:function(){return a.trackRails}});var a=n(67448)},20459:function(e,t,n){n.r(t),n.d(t,{Icon:function(){return Icon},default:function(){return i}});var a=n(26705),r=n(20955);let o={AvatarDefault:(0,r.lazy)(async()=>n.e(6907).then(n.bind(n,16907))),GameApexLegends:(0,r.lazy)(async()=>n.e(9793).then(n.bind(n,89793))),GameCounterStrikeGlobalOffensive:(0,r.lazy)(async()=>n.e(6058).then(n.bind(n,56058))),GameDota2:(0,r.lazy)(async()=>n.e(9081).then(n.bind(n,89081))),GameFortnite:(0,r.lazy)(async()=>n.e(2239).then(n.bind(n,92239))),GameLeagueOfLegends:(0,r.lazy)(async()=>n.e(1576).then(n.bind(n,51576))),GameOverwatch:(0,r.lazy)(async()=>n.e(2523).then(n.bind(n,2523))),GameRocketLeague:(0,r.lazy)(async()=>n.e(2394).then(n.bind(n,82394))),GamePubgBattlegrounds:(0,r.lazy)(async()=>n.e(4833).then(n.bind(n,64833))),GameRainbowSixSiege:(0,r.lazy)(async()=>n.e(4632).then(n.bind(n,94632))),GameCounterStrike2:(0,r.lazy)(async()=>n.e(7135).then(n.bind(n,37135))),GameSettingsValorantKeybindsEnd:(0,r.lazy)(async()=>n.e(1770).then(n.bind(n,81770))),GameSettingsValorantKeybindsStart:(0,r.lazy)(async()=>n.e(2532).then(n.bind(n,22532))),GameTeamfightTactics:(0,r.lazy)(async()=>n.e(229).then(n.bind(n,90229))),GameValorant:(0,r.lazy)(async()=>n.e(2664).then(n.bind(n,62664))),GameCallOfDutyWarzone:(0,r.lazy)(async()=>n.e(2130).then(n.bind(n,42130))),LogoKonect:(0,r.lazy)(async()=>n.e(4882).then(n.bind(n,14882))),LogoKonectLockup:(0,r.lazy)(async()=>n.e(1583).then(n.bind(n,61583))),PlatformBattleNet:(0,r.lazy)(async()=>n.e(4700).then(n.bind(n,34700))),PlatformDiscord:(0,r.lazy)(async()=>n.e(9619).then(n.bind(n,13171))),PlatformEmail:(0,r.lazy)(async()=>n.e(8932).then(n.bind(n,8932))),PlatformEpicGames:(0,r.lazy)(async()=>n.e(3760).then(n.bind(n,23760))),PlatformFacebook:(0,r.lazy)(async()=>n.e(7840).then(n.bind(n,83695))),PlatformFaceit:(0,r.lazy)(async()=>n.e(2801).then(n.bind(n,62801))),PlatformGamersclub:(0,r.lazy)(async()=>n.e(4955).then(n.bind(n,44955))),PlatformGoogle:(0,r.lazy)(async()=>n.e(4515).then(n.bind(n,34515))),PlatformInstagram:(0,r.lazy)(async()=>n.e(2467).then(n.bind(n,72467))),PlatformKick:(0,r.lazy)(async()=>n.e(5365).then(n.bind(n,85365))),PlatformLeagueOfLegends:(0,r.lazy)(async()=>n.e(3198).then(n.bind(n,73198))),PlatformOrigin:(0,r.lazy)(async()=>n.e(913).then(n.bind(n,70913))),PlatformPsn:(0,r.lazy)(async()=>n.e(8952).then(n.bind(n,18952))),PlatformRiotGames:(0,r.lazy)(async()=>n.e(6396).then(n.bind(n,86396))),PlatformSpotify:(0,r.lazy)(async()=>n.e(7197).then(n.bind(n,97197))),PlatformSteam:(0,r.lazy)(async()=>n.e(619).then(n.bind(n,30619))),PlatformTiktok:(0,r.lazy)(async()=>n.e(6193).then(n.bind(n,96193))),PlatformTwitch:(0,r.lazy)(async()=>n.e(6938).then(n.bind(n,76938))),PlatformTwitter:(0,r.lazy)(async()=>n.e(4950).then(n.bind(n,54950))),PlatformX:(0,r.lazy)(async()=>n.e(9803).then(n.bind(n,19803))),PlatformUbisoft:(0,r.lazy)(async()=>n.e(8772).then(n.bind(n,18772))),PlatformWebsite:(0,r.lazy)(async()=>n.e(1612).then(n.bind(n,21612))),PlatformXbox:(0,r.lazy)(async()=>n.e(5974).then(n.bind(n,55974))),PlatformYoutube:(0,r.lazy)(async()=>n.e(7464).then(n.bind(n,97464)))},Icon=e=>{let{icon:t,size:n=6,width:i,height:l,...c}=e,s=(0,r.useMemo)(()=>o[t],[t]);if(!s)return null;let f="h-".concat(n," w-").concat(n);return(0,a.jsx)(r.Suspense,{fallback:(0,a.jsx)("div",{className:f}),children:(0,a.jsx)(s,{width:i,height:l,className:f,...c})})};var i=Icon},25399:function(e,t,n){var a=n(20459);t.Z=a.default},22455:function(e,t,n){n.r(t);var a=n(26705);n(20955);var r=n(98567);t.default=e=>{let{text:t,offset:n=5,side:o,children:i,...l}=e;return(0,a.jsx)(r.zt,{delayDuration:300,children:(0,a.jsxs)(r.fC,{...l,children:[(0,a.jsx)(r.xz,{asChild:!0,children:i}),(0,a.jsx)(r.h_,{children:(0,a.jsx)(r.VY,{side:o,className:"z-[1000] overflow-hidden rounded-md border border-gray-700 bg-gray-950 px-3 py-1.5 text-xs font-medium text-gray-100 shadow-md duration-300 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",sideOffset:n,children:t})})]})})}},90203:function(e,t,n){var a=n(22455);t.Z=a.default},19167:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return suspense},NoSSR:function(){return NoSSR}});let a=n(11283);function suspense(){let e=Error(a.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=a.NEXT_DYNAMIC_NO_SSR_CODE,e}function NoSSR(e){let{children:t}=e;return t}},41688:function(e,t,n){var a=n(20955);t.Z=function(){let[e,t]=(0,a.useState)(null),copy=async e=>{var n;if(!(null===(n=navigator)||void 0===n?void 0:n.clipboard))return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(e),t(e),setTimeout(()=>t(null),1500),!0}catch(e){return console.warn("Copy failed",e),t(null),!1}};return[e,copy]}},81622:function(e,t,n){n.d(t,{AK:function(){return classNames},Cv:function(){return imageUrlToBase64},cn:function(){return cn},kC:function(){return capitalize},lV:function(){return slugify}});var a=n(23986);let classNames=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")};function cn(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m)(t)}let slugify=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/[^a-z0-9 ]/g,"").replace(/\s+/g,t)},capitalize=e=>e.charAt(0).toUpperCase()+e.slice(1),imageUrlToBase64=e=>fetch(e).then(e=>e.blob()).then(e=>new Promise((t,n)=>{let a=new FileReader;a.onloadend=()=>t(a.result),a.onerror=n,a.readAsDataURL(e)}))},37673:function(e,t){/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=Symbol.for("react.element"),a=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.default_value"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),r=Object.assign,o={};function G(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||a}function H(){}function I(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||a}G.prototype.isReactComponent={},G.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},G.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},H.prototype=G.prototype;var i=I.prototype=new H;i.constructor=I,r(i,G.prototype),i.isPureReactComponent=!0;var l=Object.prototype.hasOwnProperty,c={current:null},s={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,a){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);var f=arguments.length-2;if(1===f)o.children=a;else if(1<f){for(var u=Array(f),h=0;h<f;h++)u[h]=arguments[h+2];o.children=u}if(e&&e.defaultProps)for(r in f=e.defaultProps)void 0===o[r]&&(o[r]=f[r]);return{$$typeof:n,type:e,key:i,ref:c,props:o,_owner:null}}},90952:function(e,t,n){e.exports=n(37673)}}]);