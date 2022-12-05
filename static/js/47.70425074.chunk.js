"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[47],{47:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var o=n(885),r=n(791),a=n(731),i=n(211);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=n(982);function f(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=f(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var p=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=f(e))&&(o&&(o+=" "),o+=t);return o},m=["theme","type"],v=["delay","staleId"],g=function(e){return"number"==typeof e&&!isNaN(e)},h=function(e){return"string"==typeof e},y=function(e){return"function"==typeof e},E=function(e){return h(e)||y(e)?e:null},b=function(e){return(0,r.isValidElement)(e)||h(e)||y(e)||g(e)};function T(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,p=e.isIn,m=a?"".concat(t,"--").concat(i):t,v=a?"".concat(n,"--").concat(i):n,g=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),o=function e(o){var r;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,d.Z)(n)))};(e=t.classList).add.apply(e,(0,d.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,r.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};p||(c?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),r.createElement(r.Fragment,null,o)}}function O(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var C={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,d.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},_=function(e){var t=e.theme,n=e.type,o=l(e,m);return r.createElement("svg",u({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},I={info:function(e){return r.createElement(_,u({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(_,u({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(_,u({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(_,u({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function x(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],a=(0,r.useState)([]),i=(0,o.Z)(a,2),s=i[0],c=i[1],f=(0,r.useRef)(null),p=(0,r.useRef)(new Map).current,m=function(e){return-1!==s.indexOf(e)},T=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return p.get(e)}}).current;function _(e){var t=e.containerId;!T.props.limit||t&&T.containerId!==t||(T.count-=T.queue.length,T.queue=[])}function x(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function w(){var e=T.queue.shift();N(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var o=t.delay,a=t.staleId,i=l(t,v);if(b(e)&&!function(e){return!f.current||T.props.enableMultiContainer&&e.containerId!==T.props.containerId||p.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,c=i.updateId,d=i.data,m=T.props,_=function(){return x(s)},L=null==c;L&&T.count++;var R,k,P=u(u(u({},m),{},{style:m.toastStyle,key:T.toastKey++},i),{},{toastId:s,updateId:c,data:d,closeToast:_,isIn:!1,className:E(i.className||m.toastClassName),bodyClassName:E(i.bodyClassName||m.bodyClassName),progressClassName:E(i.progressClassName||m.progressClassName),autoClose:!i.isLoading&&(R=i.autoClose,k=m.autoClose,!1===R||g(R)&&R>0?R:k),deleteToast:function(){var e=O(p.get(s),"removed");p.delete(s),C.emit(4,e);var t=T.queue.length;if(T.count=null==s?T.count-T.displayedToast:T.count-1,T.count<0&&(T.count=0),t>0){var o=null==s?T.props.limit:1;if(1===t||1===o)T.displayedToast++,w();else{var r=o>t?t:o;T.displayedToast=r;for(var a=0;a<r;a++)w()}}else n()}});P.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,i=null,s={theme:t,type:n};return!1===a||(y(a)?i=a(s):(0,r.isValidElement)(a)?i=(0,r.cloneElement)(a,s):h(a)||g(a)?i=a:o?i=I.spinner():function(e){return e in I}(n)&&(i=I[n](s))),i}(P),y(i.onOpen)&&(P.onOpen=i.onOpen),y(i.onClose)&&(P.onClose=i.onClose),P.closeButton=m.closeButton,!1===i.closeButton||b(i.closeButton)?P.closeButton=i.closeButton:!0===i.closeButton&&(P.closeButton=!b(m.closeButton)||m.closeButton);var j=e;(0,r.isValidElement)(e)&&!h(e.type)?j=(0,r.cloneElement)(e,{closeToast:_,toastProps:P,data:d}):y(e)&&(j=e({closeToast:_,toastProps:P,data:d})),m.limit&&m.limit>0&&T.count>m.limit&&L?T.queue.push({toastContent:j,toastProps:P,staleId:a}):g(o)?setTimeout((function(){N(j,P,a)}),o):N(j,P,a)}}function N(e,t,n){var o=t.toastId;n&&p.delete(n);var r={content:e,props:t};p.set(o,r),c((function(e){return[].concat((0,d.Z)(e),[o]).filter((function(e){return e!==n}))})),C.emit(4,O(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return T.containerId=e.containerId,C.cancelEmit(3).on(0,L).on(1,(function(e){return f.current&&x(e)})).on(5,_).emit(2,T),function(){p.clear(),C.emit(3,T)}}),[]),(0,r.useEffect)((function(){T.props=e,T.isToastActive=m,T.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(p.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:f,isToastActive:m}}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function N(e){var t=(0,r.useState)(!1),n=(0,o.Z)(t,2),a=n[0],i=n[1],s=(0,r.useState)(!1),c=(0,o.Z)(s,2),u=c[0],l=c[1],d=(0,r.useRef)(null),f=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,E=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",I),document.addEventListener("touchmove",_),document.addEventListener("touchend",I);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=w(t.nativeEvent),f.y=L(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?C():O()}}function O(){i(!0)}function C(){i(!1)}function _(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&C(),f.x=w(t),f.y=L(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function I(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",I);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,r.useEffect)((function(){p.current=e})),(0,r.useEffect)((function(){return d.current&&d.current.addEventListener("d",O,{once:!0}),y(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;y(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",O),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var x={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&v&&(x.onMouseEnter=C,x.onMouseLeave=O),E&&(x.onClick=function(e){h&&h(e),f.canCloseOnClick&&g()}),{playToast:O,pauseToast:C,isRunning:a,preventExitTransition:u,toastRef:d,eventHandlers:x}}function R(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function k(e){var t=e.delay,n=e.isRunning,o=e.closeToast,a=e.type,i=void 0===a?"default":a,c=e.hide,l=e.className,d=e.style,f=e.controlledProgress,m=e.progress,v=e.rtl,g=e.isIn,h=e.theme,E=c||f&&0===m,b=u(u({},d),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:E?0:1});f&&(b.transform="scaleX(".concat(m,")"));var T=p("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":v}),O=y(l)?l({rtl:v,type:i,defaultClassName:T}):p(T,l);return r.createElement("div",s({role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:O,style:b},f&&m>=1?"onTransitionEnd":"onAnimationEnd",f&&m<1?null:function(){g&&o()}))}var P=function(e){var t=N(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,l=e.autoClose,d=e.onClick,f=e.type,m=e.hideProgressBar,v=e.closeToast,g=e.transition,h=e.position,E=e.className,b=e.style,T=e.bodyClassName,O=e.bodyStyle,C=e.progressClassName,_=e.progressStyle,I=e.updateId,x=e.role,w=e.progress,L=e.rtl,P=e.toastId,j=e.deleteToast,M=e.isIn,D=e.isLoading,S=e.iconOut,z=e.closeOnClick,B=e.theme,A=p("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":z}),Z=y(E)?E({rtl:L,position:h,type:f,defaultClassName:A}):p(A,E),F=!!w||!l,q={closeToast:v,type:f,theme:B},H=null;return!1===s||(H=y(s)?s(q):(0,r.isValidElement)(s)?(0,r.cloneElement)(s,q):R(q)),r.createElement(g,{isIn:M,done:j,position:h,preventExitTransition:o,nodeRef:a},r.createElement("div",u(u({id:P,onClick:d,className:Z},i),{},{style:b,ref:a}),r.createElement("div",u(u({},M&&{role:x}),{},{className:y(T)?T({type:f}):p("Toastify__toast-body",T),style:O}),null!=S&&r.createElement("div",{className:p("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},S),r.createElement("div",null,c)),H,r.createElement(k,u(u({},I&&!F?{key:"pb-".concat(I)}:{}),{},{rtl:L,theme:B,delay:l,isRunning:n,isIn:M,closeToast:v,hide:m,type:f,style:_,className:C,controlledProgress:F,progress:w||0}))))},j=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},M=T(j("bounce",!0)),D=(T(j("slide",!0)),T(j("zoom")),T(j("flip")),(0,r.forwardRef)((function(e,t){var n=x(e),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,l=e.rtl,d=e.containerId;function f(e){var t=p("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return y(s)?s({position:e,rtl:l,defaultClassName:t}):p(t,E(s))}return(0,r.useEffect)((function(){t&&(t.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:d},o((function(e,t){var n=t.length?u({},c):u(u({},c),{},{pointerEvents:"none"});return r.createElement("div",{className:f(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,a=e.props;return r.createElement(P,u(u({},a),{},{isIn:i(a.toastId),style:u(u({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:"top-right",transition:M,autoClose:5e3,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var S,z=new Map,B=[],A=1;function Z(){return""+A++}function F(e){return e&&(h(e.toastId)||g(e.toastId))?e.toastId:Z()}function q(e,t){return z.size>0?C.emit(0,e,t):B.push({content:e,options:t}),t.toastId}function H(e,t){return u(u({},t),{},{type:t&&t.type||e,toastId:F(t)})}function Q(e){return function(t,n){return q(t,H(e,n))}}function V(e,t){return q(e,H("default",t))}V.loading=function(e,t){return q(e,H("default",u({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},V.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=h(r)?V.loading(r,n):V.loading(r.render,u(u({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,r){if(null!=t){var a=u(u(u({type:e},s),n),{},{data:r}),i=h(t)?{render:t}:t;return o?V.update(o,u(u({},a),i)):V(i.render,u(u({},a),i)),r}V.dismiss(o)},l=y(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),l},V.success=Q("success"),V.info=Q("info"),V.error=Q("error"),V.warning=Q("warning"),V.warn=V.warning,V.dark=function(e,t){return q(e,H("default",u({theme:"dark"},t)))},V.dismiss=function(e){z.size>0?C.emit(1,e):B=B.filter((function(t){return null!=e&&t.options.toastId!==e}))},V.clearWaitingQueue=function(e){return void 0===e&&(e={}),C.emit(5,e)},V.isActive=function(e){var t=!1;return z.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},V.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=z.get(n||S);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=u(u(u({},o),t),{},{toastId:t.toastId||e,updateId:Z()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,q(i,a)}}),0)},V.done=function(e){V.update(e,{progress:1})},V.onChange=function(e){return C.on(4,e),function(){C.off(4,e)}},V.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},V.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},C.on(2,(function(e){S=e.containerId||e,z.set(S,e),B.forEach((function(e){C.emit(0,e.content,e.options)})),B=[]})).on(3,(function(e){z.delete(e.containerId||e),0===z.size&&C.off(0).off(1).off(5)}));var Y,G,U,W=n(168),X=n(996),K=X.Z.form(Y||(Y=(0,W.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 24px;\n  gap: 16px;\n"]))),J=X.Z.input(G||(G=(0,W.Z)(["\n  display: inline-block;\n  width: 200px;\n  font: inherit;\n  font-size: 20px;\n  border: 2px solid #49eff2;\n  border-radius: 10px;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),$=X.Z.button(U||(U=(0,W.Z)(["\n  display: inline-block;\n  width: 60px;\n  height: 48px;\n  border: 0;\n  border-radius: 10px;\n  background-size: 40%;\n  background-color: #49eff2;\n  color: white;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),ee=n(184),te=function(e){var t=e.onSubmit,n=(0,r.useState)(""),a=(0,o.Z)(n,2),i=a[0],s=a[1];return(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsxs)(K,{onSubmit:function(e){e.preventDefault(),""!==i?t(i):V.warn("You have not entered anything, please enter your request!")},children:[(0,ee.jsx)(J,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",onChange:function(e){s(e.currentTarget.value.toLowerCase())}}),(0,ee.jsx)($,{type:"submit",children:(0,ee.jsx)("span",{children:"Search"})})]}),(0,ee.jsx)(D,{autoClose:2e3,position:"top-center"})]})},ne=n(560),oe=function(){var e,t=(0,r.useState)([]),n=(0,o.Z)(t,2),s=n[0],c=n[1],u=(0,a.lr)(""),l=(0,o.Z)(u,2),d=l[0],f=l[1],p=null!==(e=d.get("query"))&&void 0!==e?e:"";return(0,r.useEffect)((function(){p&&(0,i.qF)(p).then((function(e){e.length?c(e):V.error("Sorry, there are no movies matching your search query. Please try again.")}))}),[p]),(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)(te,{onSubmit:function(e){f(""!==e?{query:e}:{})}}),(0,ee.jsx)(ne.O,{list:s}),(0,ee.jsx)(D,{autoClose:2e3,position:"top-center"})]})}}}]);
//# sourceMappingURL=47.70425074.chunk.js.map