_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7eYB":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var l=p[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var s=a.props[l],f=r[l]||new Set;f.has(s)?o=!1:(f.add(s),r[l]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},"C+bE":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},KckH:function(e,t,n){var r=n("7eYB");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function u(e){return function(t){return r.createElement(l,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,u=e.title,l=c(e,["attr","title"]);return r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:n,style:i({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},T6oN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),c=n("obyI"),u=a.a.createElement;t.a=function(e){if(""===c.a.baseUrl&&(c.a.baseUrl=window.location.origin),""===c.a.baseUrl)return console.error("Please set a baseUrl in your site metadata!"),null;var t=e.title||c.a.title,n=e.description||c.a.description,r=new URL(e.path||"",c.a.baseUrl).href,a=e.image||c.a.image;return u(i.a,null,u("title",null,t),u("link",{rel:"canonical",href:r}),e.preconnectGitApi&&u("link",{rel:"preconnect",href:"https://api.github.com"}),u("meta",{name:"description",content:n}),a&&u("meta",{name:"image",content:a}),u("meta",{property:"og:url",content:r}),u("meta",{property:"og:type",content:"article"}),u("meta",{property:"og:title",content:t}),u("meta",{property:"og:description",content:n}),a&&u("meta",{property:"og:image",content:a}),e.imageOwnerProfile&&u("meta",{property:"og:image:owner",content:e.imageOwnerProfile}),u("meta",{name:"twitter:card",content:"summary_large_image"}),u("meta",{name:"twitter:creator",content:c.a.userName}),u("meta",{name:"twitter:title",content:t}),u("meta",{name:"twitter:description",content:n}),a&&u("meta",{name:"twitter:image",content:a}),e.imageOwnerProfile&&u("meta",{property:"twitter:image:owner",content:e.imageOwnerProfile}))}},TaPz:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Lnxd");function i(e){return Object(o.a)({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(e)}var c=n("+jxT"),u=n("vOnD"),l=n("T6oN"),s=n("obyI"),f=a.a.createElement;t.default=Object(u.a)((function(e){var t=e.className,n=s.a.userName,r=s.a.redditUserName,o=s.a.description,u=s.a.mail;return f(a.a.Fragment,null,f(l.a,{title:"About me",description:o,image:"http://zkindest.github.io/static/images/me.jpeg"}),f("section",{className:"".concat(t," about")},f("article",null,f("img",{src:"http://zkindest.github.io/static/images/me.jpeg",alt:"Photo of Afroz",className:"about__img"}),f("div",{className:"about__info"},f("p",null,"Hi "," ",f("span",{role:"img","aria-label":"waving hand emoji"},"\ud83d\udc4b "," "),"I'm Afroz, Full stack Developer based in Hyderabad, India."),f("p",null,"I have two years of experience in software development, and a passion for Front-End. My work involves a lot of HTML, CSS, and JavaScript/TypeScript (with React), but I also have plenty experience with back-end development and databases."),f("p",{className:"about__info--links"},f("a",{href:"https://gitstalk.netlify.app/zkindest",target:"_blank"},f("i",null,"stalk me")," "),"|\xa0",f("i",null,"reach me:"),"\xa0",f("a",{href:"mailto:".concat(u)},f(i,{style:{marginBottom:"-3px"}}),"\xa0Email"),f("a",{href:"https://www.reddit.com/user/".concat(r||n)},f(c.a,null),"\xa0Reddit"))))))})).withConfig({displayName:"about",componentId:"sc-1m6mu5r-0"})(["width:100%;position:relative;transition:var(--main-transition);.about{&__img{clip-path:circle(50% at 50% 50%);shape-outside:circle(50% at 50% 50%);float:left;width:10rem;height:10rem;margin:0rem 1.2rem;@media all and (max-width:530px){float:unset;display:grid;margin:0 auto;}}&__info{text-align:left;padding-top:.2rem;@media all and (max-width:530px){display:block;}&--links{a + a{margin-left:0.5em;}}}}"])},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),f=function(e){i(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},hIud:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("TaPz")}])},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),a=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}}},[["hIud",0,1,6,3]]]);