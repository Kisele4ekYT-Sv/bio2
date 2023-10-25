"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3793],{50875:function(e,a,t){var n=t(94660);let r=(0,n.Ue)()(e=>({feedbackModalOpen:!1,paymentModalOpen:!1,addSectionModalOpen:!1,confirmModalOpen:!1,sectionsOrderModalOpen:!1,socialModalState:void 0,setSectionModalOpen:(a,t,n,r)=>e({addSectionModalOpen:a,addSectionModalType:t,editedRecordData:n,editedSectionId:r}),closeSectionModal:()=>{e({addSectionModalOpen:!1}),setTimeout(()=>e({addSectionModalType:void 0,editedRecordData:void 0}),300)},setSocialModalState:a=>e({socialModalState:a}),setSectionModalType:a=>e({addSectionModalType:a}),setConfirmModalOpen:a=>e({confirmModalOpen:a}),setEditedSectionData:a=>e({editedSectionData:a}),setFeedbackModalOpen:a=>e({feedbackModalOpen:a}),setPaymentModalOpen:a=>e({paymentModalOpen:a}),setSectionsOrderModalOpen:a=>e({sectionsOrderModalOpen:a})}));a.Z=r},92794:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(26705),r=t(20955),i=t(90203),l=t(41688),o=(0,r.forwardRef)((e,a)=>{let{value:t,children:o,onClick:s,successText:d="Copied!",useOrigin:c=!1,...u}=e,[m,f]=(0,l.Z)(),y=(0,r.useCallback)(e=>{f(c?location.origin+t:t),s&&s(e)},[f,c,t,s]);return(0,n.jsx)(i.Z,{text:d,open:!!m,children:(0,n.jsx)("button",{...u,onClick:y,ref:a,children:o})})})},56968:function(e,a,t){t.d(a,{Z:function(){return components_Loader}});var n=t(26705);t(20955);var r=t(81622);let i={xs:"h-4 w-4",sm:"h-6 w-6",md:"h-8 w-8",lg:"h-10 w-10"},l={white:"text-white",black:"text-black",gray800:"text-gray-800"};var components_Loader=e=>{let{size:a="md",color:t="white",className:o}=e;return(0,n.jsxs)("div",{role:"status",children:[(0,n.jsxs)("svg",{className:(0,r.AK)(o,"animate-spin")||(0,r.AK)(i[a],"animate-spin",l[t]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,n.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),(0,n.jsx)("span",{className:"sr-only",children:"Loading..."})]})}},24246:function(e,a,t){t.d(a,{u:function(){return Modal},Z:function(){return c}});var n=t(26705),r=t(20955),i=t(28712),l=t(14480),o=t(81622),s=t(24810),d=t(56968);let Modal=e=>{let{children:a,open:t,body:c,footer:u,isCloseButton:m=!0,title:f,description:y,submit:h="Add",cancel:b="Cancel",bodyClassName:p="overflow-y-auto",submitProps:g,cancelProps:x,footerProps:v,onCancel:z,onOpenChange:w,onSubmit:j,loading:N=!1,size:k="medium",destructive:C,...P}=e,[M,O]=(0,r.useState)(!1),S=(0,r.useRef)();return(0,n.jsxs)(i.fC,{ref:S,open:"boolean"==typeof t?t:M,onOpenChange:e=>{O(e),w&&w(e)},children:[(0,n.jsx)(i.xz,{asChild:!0,...P,children:a}),(0,n.jsxs)(i.h_,{children:[(0,n.jsx)(i.aV,{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),(0,n.jsxs)(i.VY,{className:(0,o.cn)("fixed left-1/2 top-1/2 z-50 flex max-h-[85vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-lg bg-gray-800 shadow-xl focus:outline-none","duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",{small:"max-w-sm",medium:"max-w-md",large:"max-w-xl",Xlarge:"max-w-4xl"}[k]),children:[(f||y)&&(0,n.jsxs)("div",{className:"relative border-b border-white/15 p-4 text-center sm:px-6",children:[m&&(0,n.jsx)(i.x8,{className:(0,o.cn)("btn absolute right-4 top-4 p-1 text-gray-100 opacity-50 hover:bg-white/15 hover:opacity-100",s.W4),children:(0,n.jsx)(l.Z,{className:"h-5 w-5"})}),f&&(0,n.jsx)(i.Dx,{className:"font-display text-lg font-medium uppercase",children:f}),y&&(0,n.jsx)(i.dk,{className:"mt-1 text-sm font-normal text-gray-300",children:y})]}),c&&(0,n.jsx)("div",{className:p,children:c}),!u&&(h||b)&&(0,n.jsxs)("div",{className:(0,o.cn)("flex flex-col gap-2 border-t border-white/15 p-4 sm:p-6 lg:flex-row-reverse"),...v,children:[h&&(0,n.jsx)(i.x8,{onClick:j,className:(0,o.cn)("btn btn-full",C?"btn-destructive-primary":"btn-primary","disabled:opacity-50 disabled:hover:cursor-default",s.W4),...g,children:N?(0,n.jsx)(d.Z,{color:"gray800"}):h}),b&&(0,n.jsx)(i.x8,{onClick:z,className:(0,o.cn)("btn btn-full btn-link text-gray-400 hover:text-gray-100",s.W4),...x,children:b})]}),u]})]})]})};var c=Modal},49917:function(e,a,t){t.r(a),t.d(a,{Button:function(){return s}});var n=t(26705),r=t(20955),i=t(67256),l=t(81622),o=t(55481);let s=r.forwardRef((e,a)=>{let{className:t,variant:r,size:s,fullWidth:d,icon:c,asChild:u=!1,...m}=e,f=u?i.g7:"button";return(0,n.jsx)(f,{className:(0,l.cn)((0,o.Z)({variant:r,size:s,fullWidth:d,icon:c,className:t})),ref:a,...m})});s.displayName="Button",a.default=s},55481:function(e,a,t){var n=t(67606);let r=(0,n.j)("inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-colors duration-100 ease-linear focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed",{variants:{variant:{primary:"bg-primary-400 text-black hover:bg-primary-500",secondary:"bg-white/15 text-gray-100 hover:bg-white/20 disabled:bg-white/15",white:"bg-white text-gray-950 hover:bg-gray-100",outlined:"text-gray-100 ring-1 ring-inset ring-gray-600 hover:ring-gray-400 disabled:ring-gray-600",ghost:"bg-transparent text-gray-100 hover:bg-white/15 disabled:bg-transparent",link:"bg-transparent text-gray-100 hover:underline disabled:no-underline",destructive:"ring-1 ring-red-500 ring-inset bg-transparent text-gray-100 hover:bg-red-500 hover:text-white disabled:bg-transparent",premium:"bg-premium-default/15 text-premium-default hover:bg-premium-default/25"},size:{sm:"px-3 py-1.5 text-sm",md:"px-4 py-[9px] text-sm",lg:"px-6 py-3 text-base"},fullWidth:{true:"w-full"},icon:{true:""}},compoundVariants:[{variant:"link",size:["sm","md","lg"],className:"px-0"},{icon:!0,size:"sm",className:"h-8 w-8 p-0"},{icon:!0,size:"md",className:"h-[38px] w-[38px] p-0"},{icon:!0,size:"lg",className:"h-12 w-12 p-0"}],defaultVariants:{variant:"primary",size:"md"}});a.Z=r},79363:function(e,a,t){t.d(a,{z:function(){return n.Button}});var n=t(49917);a.Z=n.default},20459:function(e,a,t){t.r(a),t.d(a,{Icon:function(){return Icon},default:function(){return l}});var n=t(26705),r=t(20955);let i={AvatarDefault:(0,r.lazy)(async()=>t.e(6907).then(t.bind(t,16907))),GameApexLegends:(0,r.lazy)(async()=>t.e(9793).then(t.bind(t,89793))),GameCounterStrikeGlobalOffensive:(0,r.lazy)(async()=>t.e(6058).then(t.bind(t,56058))),GameDota2:(0,r.lazy)(async()=>t.e(9081).then(t.bind(t,89081))),GameFortnite:(0,r.lazy)(async()=>t.e(2239).then(t.bind(t,92239))),GameLeagueOfLegends:(0,r.lazy)(async()=>t.e(1576).then(t.bind(t,51576))),GameOverwatch:(0,r.lazy)(async()=>t.e(2523).then(t.bind(t,2523))),GameRocketLeague:(0,r.lazy)(async()=>t.e(2394).then(t.bind(t,82394))),GamePubgBattlegrounds:(0,r.lazy)(async()=>t.e(4833).then(t.bind(t,64833))),GameRainbowSixSiege:(0,r.lazy)(async()=>t.e(4632).then(t.bind(t,94632))),GameCounterStrike2:(0,r.lazy)(async()=>t.e(7135).then(t.bind(t,37135))),GameSettingsValorantKeybindsEnd:(0,r.lazy)(async()=>t.e(1770).then(t.bind(t,81770))),GameSettingsValorantKeybindsStart:(0,r.lazy)(async()=>t.e(2532).then(t.bind(t,22532))),GameTeamfightTactics:(0,r.lazy)(async()=>t.e(229).then(t.bind(t,90229))),GameValorant:(0,r.lazy)(async()=>t.e(2664).then(t.bind(t,62664))),GameCallOfDutyWarzone:(0,r.lazy)(async()=>t.e(2130).then(t.bind(t,42130))),LogoKonect:(0,r.lazy)(async()=>t.e(4882).then(t.bind(t,14882))),LogoKonectLockup:(0,r.lazy)(async()=>t.e(1583).then(t.bind(t,61583))),PlatformBattleNet:(0,r.lazy)(async()=>t.e(4700).then(t.bind(t,34700))),PlatformDiscord:(0,r.lazy)(async()=>t.e(9619).then(t.bind(t,13171))),PlatformEmail:(0,r.lazy)(async()=>t.e(8932).then(t.bind(t,8932))),PlatformEpicGames:(0,r.lazy)(async()=>t.e(3760).then(t.bind(t,23760))),PlatformFacebook:(0,r.lazy)(async()=>t.e(7840).then(t.bind(t,83695))),PlatformFaceit:(0,r.lazy)(async()=>t.e(2801).then(t.bind(t,62801))),PlatformGamersclub:(0,r.lazy)(async()=>t.e(4955).then(t.bind(t,44955))),PlatformGoogle:(0,r.lazy)(async()=>t.e(4515).then(t.bind(t,34515))),PlatformInstagram:(0,r.lazy)(async()=>t.e(2467).then(t.bind(t,72467))),PlatformKick:(0,r.lazy)(async()=>t.e(5365).then(t.bind(t,85365))),PlatformLeagueOfLegends:(0,r.lazy)(async()=>t.e(3198).then(t.bind(t,73198))),PlatformOrigin:(0,r.lazy)(async()=>t.e(913).then(t.bind(t,70913))),PlatformPsn:(0,r.lazy)(async()=>t.e(8952).then(t.bind(t,18952))),PlatformRiotGames:(0,r.lazy)(async()=>t.e(6396).then(t.bind(t,86396))),PlatformSpotify:(0,r.lazy)(async()=>t.e(7197).then(t.bind(t,97197))),PlatformSteam:(0,r.lazy)(async()=>t.e(619).then(t.bind(t,30619))),PlatformTiktok:(0,r.lazy)(async()=>t.e(6193).then(t.bind(t,96193))),PlatformTwitch:(0,r.lazy)(async()=>t.e(6938).then(t.bind(t,76938))),PlatformTwitter:(0,r.lazy)(async()=>t.e(4950).then(t.bind(t,54950))),PlatformX:(0,r.lazy)(async()=>t.e(9803).then(t.bind(t,19803))),PlatformUbisoft:(0,r.lazy)(async()=>t.e(8772).then(t.bind(t,18772))),PlatformWebsite:(0,r.lazy)(async()=>t.e(1612).then(t.bind(t,21612))),PlatformXbox:(0,r.lazy)(async()=>t.e(5974).then(t.bind(t,55974))),PlatformYoutube:(0,r.lazy)(async()=>t.e(7464).then(t.bind(t,97464)))},Icon=e=>{let{icon:a,size:t=6,width:l,height:o,...s}=e,d=(0,r.useMemo)(()=>i[a],[a]);if(!d)return null;let c="h-".concat(t," w-").concat(t);return(0,n.jsx)(r.Suspense,{fallback:(0,n.jsx)("div",{className:c}),children:(0,n.jsx)(d,{width:l,height:o,className:c,...s})})};var l=Icon},9081:function(e,a,t){t.r(a),t.d(a,{Tabs:function(){return d},TabsContent:function(){return m},TabsList:function(){return c},TabsTrigger:function(){return u},default:function(){return f},tabsVariants:function(){return s}});var n=t(26705),r=t(20955),i=t(34522),l=t(67606),o=t(81622);let s=(0,l.j)("inline-flex w-full items-center justify-center whitespace-nowrap rounded text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{white:"text-gray-200 hover:bg-white/10 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-950",ghost:"text-gray-300 hover:bg-white/5 data-[state=active]:bg-white/10 data-[state=active]:text-gray-100"},size:{sm:"h-8 w-8 px-1.5",md:"px-4 py-2"}},defaultVariants:{variant:"white",size:"md"}}),d=i.fC,c=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,n.jsx)(i.aV,{ref:a,className:(0,o.cn)("flex items-center gap-1",t),...r})});c.displayName=i.aV.displayName;let u=r.forwardRef((e,a)=>{let{className:t,variant:r,size:l,...d}=e;return(0,n.jsx)(i.xz,{ref:a,className:(0,o.cn)(s({variant:r,size:l,className:t})),...d})});u.displayName=i.xz.displayName;let m=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,n.jsx)(i.VY,{ref:a,className:(0,o.cn)("mt-6 focus-visible:outline-none",t),...r})});m.displayName=i.VY.displayName;var f=d},22455:function(e,a,t){t.r(a);var n=t(26705);t(20955);var r=t(98567);a.default=e=>{let{text:a,offset:t=5,side:i,children:l,...o}=e;return(0,n.jsx)(r.zt,{delayDuration:300,children:(0,n.jsxs)(r.fC,{...o,children:[(0,n.jsx)(r.xz,{asChild:!0,children:l}),(0,n.jsx)(r.h_,{children:(0,n.jsx)(r.VY,{side:i,className:"z-[1000] overflow-hidden rounded-md border border-gray-700 bg-gray-950 px-3 py-1.5 text-xs font-medium text-gray-100 shadow-md duration-300 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",sideOffset:t,children:a})})]})})}},90203:function(e,a,t){var n=t(22455);a.Z=n.default},41688:function(e,a,t){var n=t(20955);a.Z=function(){let[e,a]=(0,n.useState)(null),copy=async e=>{var t;if(!(null===(t=navigator)||void 0===t?void 0:t.clipboard))return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(e),a(e),setTimeout(()=>a(null),1500),!0}catch(e){return console.warn("Copy failed",e),a(null),!1}};return[e,copy]}},81622:function(e,a,t){t.d(a,{AK:function(){return classNames},Cv:function(){return imageUrlToBase64},cn:function(){return cn},kC:function(){return capitalize},lV:function(){return slugify}});var n=t(23986);let classNames=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter(Boolean).join(" ")};function cn(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,n.m)(a)}let slugify=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/[^a-z0-9 ]/g,"").replace(/\s+/g,a)},capitalize=e=>e.charAt(0).toUpperCase()+e.slice(1),imageUrlToBase64=e=>fetch(e).then(e=>e.blob()).then(e=>new Promise((a,t)=>{let n=new FileReader;n.onloadend=()=>a(n.result),n.onerror=t,n.readAsDataURL(e)}))}}]);