(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989,586],{6554:function(e,t,r){"use strict";r.d(t,{o:function(){return n},z:function(){return i}});var i={visible:{opacity:1},hidden:{opacity:0}},n={hidden:{y:"-100vh",opacity:0},visible:{y:"200px",opacity:1,transition:{delay:.5}}}},7989:function(e,t,r){"use strict";r.r(t);var i=r(7568),n=r(4051),o=r.n(n),s=r(5893),a=r(9409),l=r.n(a),c=r(9954),u=r(8357),d=r(8193),f=r(4992),p=r(7106),m=r(1190),_=r(8635),h=r(7294),x=r(1295),g=r(7041),v=r(2217),b=(r(6554),r(2960)),y=r(6501);t.default=function(e){var t,r=e.profAddress,n=(0,h.useState)({}),a=n[0],P=n[1],j=(0,h.useState)(!1),k=j[0],w=j[1];(0,v.Z)().then((function(e){w(e===r)}));var N=(0,g.getCookies)().loggedIn,E=(0,b.Z)().mintNFT;(0,h.useEffect)((function(){var e=function(){var e=(0,i.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Z)(r);case 2:t=e.sent,P(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then()}),[]);var C=(0,h.useState)(!1),S=(C[0],C[1]);return(0,s.jsxs)("div",{className:l().mainContainer,children:[N&&(0,s.jsx)(c.Z,{}),(0,s.jsxs)("div",{className:l().bigCard,children:[(0,s.jsx)("div",{children:(0,s.jsx)(y.x7,{position:"top-right",reverseOrder:!1})}),(0,s.jsxs)("div",{className:l().presentation,children:[(0,s.jsx)("img",{src:a.banner,alt:"",className:l().banner}),(0,s.jsxs)("div",{className:l().sides,children:[(0,s.jsx)("img",{src:a.imageUri,alt:"pfp",className:l().pfp}),(0,s.jsx)("div",{className:l().name,children:a.name}),(0,s.jsx)("label",{className:l().projectTags,children:null===(t=a.interests)||void 0===t?void 0:t.map((function(e,t){return(0,s.jsxs)("span",{children:["#",e," "]},t)}))}),(0,s.jsx)(u.Pd.Provider,{value:{size:"29px",color:"white"},children:(0,s.jsxs)("div",{className:l().links,children:[(0,s.jsx)("a",{className:l().aDecor,href:a.github,children:(0,s.jsx)(d.idJ,{})}),(0,s.jsx)("a",{className:l().aDecor,href:a.website,children:(0,s.jsx)(f.HmO,{})}),(0,s.jsx)("a",{className:l().aDecor,href:a.discord,children:(0,s.jsx)(p.dWL,{})}),(0,s.jsx)("a",{className:l().aDecor,href:a.twitter,children:(0,s.jsx)(d.h3E,{})})]})}),(0,s.jsx)("div",{className:l().description,children:a.about}),N&&k&&(0,s.jsx)(m.M,{children:(0,s.jsxs)(_.E.div,{className:l().iconSpace,onClick:(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:y.ZP.success("Minted NFT Successfully"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),y.ZP.error("You can have just 1 NFT\nOr try again if you have 0");case 10:S((function(e){return!e}));case 11:case"end":return e.stop()}}),e,null,[[0,6]])}))),whileHover:{scale:.9},whileTap:{scale:1},children:[(0,s.jsx)("div",{children:"Mint NFT"}),(0,s.jsx)(u.Pd.Provider,{value:{size:"29px",color:"white",className:l().checkedIcon2},children:(0,s.jsx)(p.Nwf,{})})]})}),!N&&(0,s.jsx)(m.M,{children:(0,s.jsx)(_.E.div,{className:l().iconSpace,onClick:function(){return S((function(e){return!e}))},whileHover:{scale:.9},whileTap:{scale:1},children:(0,s.jsx)("a",{href:"/",children:"Login To Explore More"})})})]})]})]})]})}},9954:function(e,t,r){"use strict";var i=r(7568),n=r(4051),o=r.n(n),s=r(5893),a=r(7294),l=r(5162),c=r.n(l),u=r(8635),d=r(1190),f=r(7516),p=r(8193),m=r(8357),_=r(9583),h=r(3854),x=r(6775),g=r(7041),v=r(1163),b={hidden:{opacity:0,x:"-100%",transition:{duration:.5}},show:{opacity:1,x:0,transition:{duration:.5}}};t.Z=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1],n=(0,v.useRouter)(),l=(0,g.getCookies)().wallet,y=function(){var e=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.v.getWallet().disconnect(),(0,g.deleteCookie)("wallet",{path:"/"}),(0,g.deleteCookie)("loggedIn",{path:"/"}),n.push("/").then();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.jsx)("div",{className:c().all,children:(0,s.jsxs)("div",{className:c().sideBody,children:[(0,s.jsx)(u.E.button,{className:c().toggle,onClick:function(){return r((function(e){return!e}))},whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,s.jsx)(m.Pd.Provider,{value:{size:"20px"},children:t?(0,s.jsx)(p.oHP,{}):(0,s.jsx)(f.ib2,{})})}),(0,s.jsx)(d.M,{children:t&&(0,s.jsx)(u.E.nav,{variants:b,initial:"hidden",animate:"show",exit:"hidden",className:c().sideNav,children:(0,s.jsx)(u.E.div,{className:c().innerNav,children:(0,s.jsx)("ul",{className:c().sideUl,children:(0,s.jsxs)(m.Pd.Provider,{value:{size:"25px",className:c().icons},children:[(0,s.jsx)(u.E.li,{className:c().sideLi,children:(0,s.jsxs)("a",{className:c().sideA,href:"/network",children:[" ",(0,s.jsx)(f.DaR,{})," Network"]})}),(0,s.jsx)(u.E.li,{className:c().sideLi,children:(0,s.jsxs)("a",{className:c().sideA,href:"/profile/".concat(l),children:[" ",(0,s.jsx)(_.wzp,{})," Profile"]})}),(0,s.jsx)(u.E.li,{className:c().sideLi,children:(0,s.jsxs)("a",{className:c().sideA,href:"/choose-one",children:[" ",(0,s.jsx)(p.$tL,{})," Projects Profile"]})}),(0,s.jsx)(u.E.li,{className:c().sideLi,children:(0,s.jsxs)("a",{className:c().sideA,href:"/proj-prof-settings",children:[" ",(0,s.jsx)(h.XlX,{})," Settings"]})}),(0,s.jsx)(u.E.li,{className:c().sideLi,children:(0,s.jsx)("div",{className:c().buttonSpace,children:(0,s.jsx)("button",{className:c().sideButton,onClick:(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),children:"Logout"})})})]})})})})})]})})}},1295:function(e,t,r){"use strict";var i=r(7568),n=r(4051),o=r.n(n),s=function(){var e=(0,i.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/fetchUserProfile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:t})});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.Z=s},2217:function(e,t,r){"use strict";var i=r(7568),n=r(4051),o=r.n(n),s=r(6775),a=function(){var e=(0,i.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"mumbai",e.next=4,s.v.initWallet("mumbai",{networkRpcUrl:"https://matic-mumbai.chainstacklabs.com"});case 4:return t=s.v.getWallet(),e.next=7,t.getAddress();case 7:return e.abrupt("return",e.sent.toLowerCase());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.Z=a},9409:function(e){e.exports={mainContainer:"Profile_mainContainer__G4nnl",bigCard:"Profile_bigCard__3Lljq",smallCard:"Profile_smallCard__XuB5Z",contributorsPicPic:"Profile_contributorsPicPic__sUMyY",bigCardLikes:"Profile_bigCardLikes__01VSC",presentation:"Profile_presentation__cQbjx",container:"Profile_container__fX9Pm",projectNumber:"Profile_projectNumber___uRli",projectButton:"Profile_projectButton__jl4Gi",aDecor:"Profile_aDecor__FhgAL",banner:"Profile_banner__4g48m",sides:"Profile_sides__8HVTE",pfp:"Profile_pfp__Rr_6e",name:"Profile_name__26mv4",projectTags:"Profile_projectTags__z1OWo",links:"Profile_links__WRyFj",description:"Profile_description__wOcAe",likeDiv:"Profile_likeDiv__YsMJk",iconLabel:"Profile_iconLabel__eMUYt",iconSpace:"Profile_iconSpace__rGAtL",likesSection:"Profile_likesSection__cH7Y_",likesSection2:"Profile_likesSection2__t_LxJ",someSpace:"Profile_someSpace__F1n8e",picturePost:"Profile_picturePost__bnFcI",postsBox:"Profile_postsBox__dSBzb",littleContainer:"Profile_littleContainer__R2v84",iconSpaceWrite:"Profile_iconSpaceWrite__8Ruz2",textArea:"Profile_textArea__SRs_a",inputText:"Profile_inputText__DyYRh",formInputNoMargin:"Profile_formInputNoMargin__UHxuo",formInput:"Profile_formInput__GBfGF",formTextArea:"Profile_formTextArea__YxrY_",contrForm:"Profile_contrForm__uR7W3",someInput:"Profile_someInput__5nAIe",checkedIcon2:"Profile_checkedIcon2___u1A9",thisLabel:"Profile_thisLabel__gM4nD",line:"Profile_line__U18rT",lookingForTitle:"Profile_lookingForTitle__W1Mce",lookingForPost:"Profile_lookingForPost__Qnxnb",lookingForTitle2:"Profile_lookingForTitle2___qTjc",cardTitle:"Profile_cardTitle__OuWQD",cardSubtitle:"Profile_cardSubtitle__vh4P7",lookingForSection:"Profile_lookingForSection__HeArk",lookingForSectionFirst:"Profile_lookingForSectionFirst__9nhqt",lookingForSubSection:"Profile_lookingForSubSection__9_Q7r",lookingForOptions:"Profile_lookingForOptions__E5RBq",pLookingForTitle:"Profile_pLookingForTitle__ZS8_I",pLookingForMoney:"Profile_pLookingForMoney__XlNh0",pLookingForTime:"Profile_pLookingForTime__Vwm56",pLookingForName:"Profile_pLookingForName__PWCgN",lookingForName:"Profile_lookingForName__fOzKP",lookingForDescription:"Profile_lookingForDescription__artRW",card:"Profile_card__C8gjV",sectionProjAndContr:"Profile_sectionProjAndContr__6RMDb",projectsAndContributions:"Profile_projectsAndContributions__9OUCm",contributorsSection:"Profile_contributorsSection__Yxje4",nameAndCont:"Profile_nameAndCont__iyoEa",thisFlex:"Profile_thisFlex__4B3aX",contributorsPic:"Profile_contributorsPic__2sr0t",printPosts:"Profile_printPosts___hW_5",postsBigBox:"Profile_postsBigBox__bjpa3",posts:"Profile_posts__s7RZU",postsTitle:"Profile_postsTitle__JL667",postsContent:"Profile_postsContent__rzVhQ"}},5162:function(e){e.exports={all:"Sidebar_all__lzVOf",sideNav:"Sidebar_sideNav__gu5I2",innerNav:"Sidebar_innerNav__gmHe8",toggle:"Sidebar_toggle__RBaKj",sideUl:"Sidebar_sideUl__dWR7M",sideLi:"Sidebar_sideLi__HYnr7",sideA:"Sidebar_sideA__9BjiC",icons:"Sidebar_icons__K1rss",buttonSpace:"Sidebar_buttonSpace__nuUr_",sideButton:"Sidebar_sideButton__1gjFA"}},1190:function(e,t,r){"use strict";r.d(t,{M:function(){return x}});var i=r(655),n=r(7294),o=r(9304),s=r(4735),a=r(8868);function l(){var e=(0,n.useRef)(!1);return(0,a.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var c=r(240),u=r(6681),d=r(6401),f=function(e){var t=e.children,r=e.initial,o=e.isPresent,s=e.onExitComplete,a=e.custom,l=e.presenceAffectsLayout,f=(0,u.h)(p),m=(0,d.M)(),_=(0,n.useMemo)((function(){return{id:m,initial:r,isPresent:o,custom:a,onExitComplete:function(e){var t,r;f.set(e,!0);try{for(var n=(0,i.XA)(f.values()),o=n.next();!o.done;o=n.next()){if(!o.value)return}}catch(a){t={error:a}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}null===s||void 0===s||s()},register:function(e){return f.set(e,!1),function(){return f.delete(e)}}}}),l?void 0:[o]);return(0,n.useMemo)((function(){f.forEach((function(e,t){return f.set(t,!1)}))}),[o]),n.useEffect((function(){!o&&!f.size&&(null===s||void 0===s||s())}),[o]),n.createElement(c.O.Provider,{value:_},t)};function p(){return new Map}var m=r(5364),_=r(5411),h=function(e){return e.key||""};var x=function(e){var t=e.children,r=e.custom,c=e.initial,u=void 0===c||c,d=e.onExitComplete,p=e.exitBeforeEnter,x=e.presenceAffectsLayout,g=void 0===x||x,v=(0,i.CR)(function(){var e=l(),t=(0,i.CR)((0,n.useState)(0),2),r=t[0],o=t[1],a=(0,n.useCallback)((function(){e.current&&o(r+1)}),[r]);return[(0,n.useCallback)((function(){return s.ZP.postRender(a)}),[a]),r]}(),1),b=v[0],y=(0,n.useContext)(m.p).forceRender;y&&(b=y);var P=l(),j=function(e){var t=[];return n.Children.forEach(e,(function(e){(0,n.isValidElement)(e)&&t.push(e)})),t}(t),k=j,w=new Set,N=(0,n.useRef)(k),E=(0,n.useRef)(new Map).current,C=(0,n.useRef)(!0);if((0,a.L)((function(){C.current=!1,function(e,t){e.forEach((function(e){var r=h(e);t.set(r,e)}))}(j,E),N.current=k})),(0,_.z)((function(){C.current=!0,E.clear(),w.clear()})),C.current)return n.createElement(n.Fragment,null,k.map((function(e){return n.createElement(f,{key:h(e),isPresent:!0,initial:!!u&&void 0,presenceAffectsLayout:g},e)})));k=(0,i.ev)([],(0,i.CR)(k),!1);for(var S=N.current.map(h),F=j.map(h),A=S.length,L=0;L<A;L++){var T=S[L];-1===F.indexOf(T)&&w.add(T)}return p&&w.size&&(k=[]),w.forEach((function(e){if(-1===F.indexOf(e)){var t=E.get(e);if(t){var i=S.indexOf(e);k.splice(i,0,n.createElement(f,{key:h(t),isPresent:!1,onExitComplete:function(){E.delete(e),w.delete(e);var t=N.current.findIndex((function(t){return t.key===e}));if(N.current.splice(t,1),!w.size){if(N.current=j,!1===P.current)return;b(),d&&d()}},custom:r,presenceAffectsLayout:g},t))}}})),k=k.map((function(e){var t=e.key;return w.has(t)?e:n.createElement(f,{key:h(e),isPresent:!0,presenceAffectsLayout:g},e)})),"production"!==o.O&&p&&k.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),n.createElement(n.Fragment,null,w.size?k:k.map((function(e){return(0,n.cloneElement)(e)})))}},6501:function(e,t,r){"use strict";r.d(t,{x7:function(){return K},ZP:function(){return ee}});var i=r(7294);let n={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let r="",i="",n="";for(let o in e){let s=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+s+";":i+="f"==o[1]?c(s,o):o+"{"+c(s,"k"==o[1]?"":t)+"}":"object"==typeof s?i+=c(s,t?t.replace(/([^,])+/g,(e=>o.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):o):null!=s&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=c.p?c.p(o,s):o+":"+s+";")}return r+(t&&n?t+"{"+n+"}":n)+i},u={},d=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+d(e[r]);return t}return e},f=(e,t,r,i,n)=>{let o=d(e),f=u[o]||(u[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!u[f]){let t=o!==e?e:(e=>{let t,r,i=[{}];for(;t=s.exec(e.replace(a,""));)t[4]?i.shift():t[3]?(r=t[3].replace(l," ").trim(),i.unshift(i[0][r]=i[0][r]||{})):i[0][t[1]]=t[2].replace(l," ").trim();return i[0]})(e);u[f]=c(n?{["@keyframes "+f]:t}:t,r?"":"."+f)}return((e,t,r)=>{-1==t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(u[f],t,i),f},p=(e,t,r)=>e.reduce(((e,i,n)=>{let o=t[n];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+i+(null==o?"":o)}),"");function m(e){let t=this||{},r=e.call?e(t.p):e;return f(r.unshift?r.raw?p(r,[].slice.call(arguments,1),t.p):r.reduce(((e,r)=>Object.assign(e,r&&r.call?r(t.p):r)),{}):r,o(t.target),t.g,t.o,t.k)}m.bind({g:1});let _,h,x,g=m.bind({k:1});function v(e,t){let r=this||{};return function(){let i=arguments;function n(o,s){let a=Object.assign({},o),l=a.className||n.className;r.p=Object.assign({theme:h&&h()},a),r.o=/ *go\d+/.test(l),a.className=m.apply(r,i)+(l?" "+l:""),t&&(a.ref=s);let c=e;return e[0]&&(c=a.as||e,delete a.as),x&&c[0]&&x(a),_(c,a)}return t?t(n):n}}var b=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,y=(()=>{let e=0;return()=>(++e).toString()})(),P=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),j=new Map,k=e=>{if(j.has(e))return;let t=setTimeout((()=>{j.delete(e),C({type:4,toastId:e})}),1e3);j.set(e,t)},w=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=j.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:r}=t;return e.toasts.find((e=>e.id===r.id))?w(e,{type:1,toast:r}):w(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?k(i):e.toasts.forEach((e=>{k(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===i||void 0===i?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+n})))}}},N=[],E={toasts:[],pausedAt:void 0},C=e=>{E=w(E,e),N.forEach((e=>{e(E)}))},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=e=>(t,r)=>{let i=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||y()}))(t,e,r);return C({type:2,toast:i}),i.id},A=(e,t)=>F("blank")(e,t);A.error=F("error"),A.success=F("success"),A.loading=F("loading"),A.custom=F("custom"),A.dismiss=e=>{C({type:3,toastId:e})},A.remove=e=>C({type:4,toastId:e}),A.promise=(e,t,r)=>{let i=A.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then((e=>(A.success(b(t.success,e),{id:i,...r,...null==r?void 0:r.success}),e))).catch((e=>{A.error(b(t.error,e),{id:i,...r,...null==r?void 0:r.error})})),e};var L=e=>{let{toasts:t,pausedAt:r}=((e={})=>{let[t,r]=(0,i.useState)(E);(0,i.useEffect)((()=>(N.push(r),()=>{let e=N.indexOf(r);e>-1&&N.splice(e,1)})),[t]);let n=t.toasts.map((t=>{var r,i;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}}));return{...t,toasts:n}})(e);(0,i.useEffect)((()=>{if(r)return;let e=Date.now(),i=t.map((t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout((()=>A.dismiss(t.id)),r);t.visible&&A.dismiss(t.id)}));return()=>{i.forEach((e=>e&&clearTimeout(e)))}}),[t,r]);let n=(0,i.useMemo)((()=>({startPause:()=>{C({type:5,time:Date.now()})},endPause:()=>{r&&C({type:6,time:Date.now()})},updateHeight:(e,t)=>C({type:1,toast:{id:e,height:t}}),calculateOffset:(e,r)=>{let{reverseOrder:i=!1,gutter:n=8,defaultPosition:o}=r||{},s=t.filter((t=>(t.position||o)===(e.position||o)&&t.height)),a=s.findIndex((t=>t.id===e.id)),l=s.filter(((e,t)=>t<a&&e.visible)).length;return s.filter((e=>e.visible)).slice(...i?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+n),0)}})),[t,r]);return{toasts:t,handlers:n}},T=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,O=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,M=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,R=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${T} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${O} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,z=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,I=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${z} 1s linear infinite;
`,D=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Z=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,$=v("div")`
  position: absolute;
`,W=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,H=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${H} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return void 0!==t?"string"==typeof t?i.createElement(U,null,t):t:"blank"===r?null:i.createElement(W,null,i.createElement(I,{...n}),"loading"!==r&&i.createElement($,null,"error"===r?i.createElement(R,{...n}):i.createElement(Z,{...n})))},V=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,X=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,q=v("div",i.forwardRef)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,G=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,J=i.memo((({toast:e,position:t,style:r,children:n})=>{let o=null!=e&&e.height?((e,t)=>{let r=e.includes("top")?1:-1,[i,n]=P()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[V(r),X(r)];return{animation:t?`${g(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},s=i.createElement(Y,{toast:e}),a=i.createElement(G,{...e.ariaProps},b(e.message,e));return i.createElement(q,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof n?n({icon:s,message:a}):i.createElement(i.Fragment,null,s,a))}));!function(e,t,r,i){c.p=t,_=e,h=r,x=i}(i.createElement);var Q=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,K=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:o,containerStyle:s,containerClassName:a})=>{let{toasts:l,handlers:c}=L(r);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map((r=>{let s=r.position||t,a=((e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:P()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...n}})(s,c.calculateOffset(r,{reverseOrder:e,gutter:n,defaultPosition:t})),l=r.height?void 0:(e=>t=>{t&&setTimeout((()=>{let r=t.getBoundingClientRect();e(r)}))})((e=>{c.updateHeight(r.id,e.height)}));return i.createElement("div",{ref:l,className:r.visible?Q:"",key:r.id,style:a},"custom"===r.type?b(r.message,r):o?o(r):i.createElement(J,{toast:r,position:s}))})))},ee=A}}]);