"use strict";(self["webpackChunkfirst_firebase_test"]=self["webpackChunkfirst_firebase_test"]||[]).push([[504],{34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},81:function(e,t,n){var r=n(9565),i=n(9306),o=n(8551),s=n(6823),a=n(851),c=TypeError;e.exports=function(e,t){var n=arguments.length<2?a(e):t;if(i(n))return o(r(n,e));throw new c(s(e)+" is not iterable")}},116:function(e,t,n){var r=n(6518),i=n(9565),o=n(2652),s=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("find",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{find:function(e){a(this);try{s(e)}catch(r){u(this,"throw",r)}if(h)return i(h,this,e);var t=c(this),n=0;return o(t,(function(t,r){if(e(t,n++))return r(t)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},283:function(e,t,n){var r=n(9504),i=n(9039),o=n(4901),s=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,v=r("".slice),m=r("".replace),g=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===v(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return s(r,"source")||(r.source=g(_,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return o(this)&&d(this).source||u(this)}),"toString")},350:function(e,t,n){var r=n(3724),i=n(9297),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},397:function(e,t,n){var r=n(7751);e.exports=r("document","documentElement")},421:function(e){e.exports={}},452:function(e,t,n){var r=n(9565),i=n(6840),o=n(7751),s=n(5966),a=n(9297),c=n(8227),u=n(3982),l=c("asyncDispose"),h=o("Promise");a(u,l)||i(u,l,(function(){var e=this;return new h((function(t,n){var i=s(e,"return");i?h.resolve(r(i,e)).then((function(){t(void 0)}),n):t(void 0)}))}))},507:function(e,t,n){var r=n(9565);e.exports=function(e,t,n){var i,o,s=n?e:e.iterator,a=e.next;while(!(i=r(a,s)).done)if(o=t(i.value),void 0!==o)return o}},511:function(e,t,n){var r=n(9167),i=n(9297),o=n(1951),s=n(4913).f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||s(t,e,{value:o.f(e)})}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},655:function(e,t,n){var r=n(6955),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},679:function(e,t,n){var r=n(1625),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},684:function(e){e.exports=function(e,t){var n="function"==typeof Iterator&&Iterator.prototype[e];if(n)try{n.call({next:null},t).next()}catch(r){return!0}}},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},747:function(e,t,n){var r=n(6699),i=n(6193),o=n(6249),s=Error.captureStackTrace;e.exports=function(e,t,n,a){o&&(s?s(e,t):r(e,"stack",i(n,a)))}},749:function(e,t,n){n(8111),n(1701);var r=n(774),i=n(852),o=n(3405),s=n(1363);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,o._addComponent)(e,new i.uA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,o.deleteApp)(this._delegate))))}_getService(e,t=o._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=o._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,o._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,o._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.FA("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:s,registerVersion:o.registerVersion,setLogLevel:o.setLogLevel,onLog:o.onLog,apps:null,SDK_VERSION:o.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:o}};function i(e){delete t[e]}function s(e){if(e=e||o._DEFAULT_ENTRY_NAME,!(0,r.gR)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,s={}){const a=o.initializeApp(i,s);if((0,r.gR)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(o._registerComponent(t)&&"PUBLIC"===t.type){const o=(e=s())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.zw)(o,t.serviceProps),n[a]=o,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),s["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.zw)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.tD,ErrorFactory:r.FA,deepExtend:r.zw}),e}const d=h(),f=new s.Vy("@firebase/app-compat"),p="@firebase/app-compat",v="0.4.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(e){(0,o.registerVersion)(p,v,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const e=(0,r.mS)();if(void 0!==e.firebase){f.warn("\n      Warning: Firebase is already defined in the global scope. Please make sure\n      Firebase library is only loaded once.\n    ");const t=e.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&f.warn("\n        Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n        ")}}catch(b){}const g=d;m();var y="firebase",_="11.9.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
g.registerVersion(y,_,"app-compat")},757:function(e,t,n){var r=n(7751),i=n(4901),o=n(1625),s=n(7040),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},774:function(e,t,n){n.d(t,{cY:function(){return w},FA:function(){return V},g:function(){return F},u:function(){return l},Uj:function(){return u},gR:function(){return B},tD:function(){return X},bD:function(){return K},zw:function(){return h},hp:function(){return Y},T9:function(){return _},Tj:function(){return y},XA:function(){return b},mS:function(){return f},Ku:function(){return te},ZQ:function(){return A},Bd:function(){return P},sr:function(){return D},zJ:function(){return I},c1:function(){return N},Im:function(){return W},lT:function(){return j},zW:function(){return M},jZ:function(){return R},lV:function(){return L},p7:function(){return x},gE:function(){return E},Am:function(){return G},I9:function(){return J},P1:function(){return k},eX:function(){return $}});n(4114),n(8111),n(7588),n(4979);const r=()=>{},i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==u||null==h)throw new a;const d=t<<2|s>>4;if(r.push(d),64!==u){const e=s<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(e){const t=i(e);return s.encodeByteArray(t,!0)},u=function(e){return c(e).replace(/\./g,"")},l=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function h(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&d(n)&&(e[n]=h(e[n],t[n]));return e}function d(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=()=>f().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/My-First-Firebase-Test/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},g=()=>{try{return r()||p()||v()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},y=e=>{var t,n;return null===(n=null===(t=g())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},_=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},b=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e){return e.endsWith(".cloudworkstations.dev")}async function E(e){const t=await fetch(e,{credentials:"include"});return t.ok}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={};function C(){const e={prod:[],emulator:[]};for(const t of Object.keys(S))S[t]?e.emulator.push(t):e.prod.push(t);return e}function T(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let O=!1;function k(e,t){if("undefined"===typeof window||"undefined"===typeof document||!I(window.location.host)||S[e]===t||S[e]||O)return;function n(e){return`__firebase__banner__${e}`}S[e]=t;const r="__firebase__banner",i=C(),o=i.prod.length>0;function s(){const e=document.getElementById(r);e&&e.remove()}function a(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}function c(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}function u(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{O=!0,s()},e}function l(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}function h(){const e=T(r),t=n("text"),i=document.getElementById(t)||document.createElement("span"),s=n("learnmore"),h=document.getElementById(s)||document.createElement("a"),d=n("preprendIcon"),f=document.getElementById(d)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;a(t),l(h,s);const n=u();c(f,d),t.append(f,i,h,n),document.body.appendChild(t)}o?(i.innerText="Preview backend disconnected.",f.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(f.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',i.innerText="Preview backend running in this workspace."),i.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",h):h()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function R(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(A())}function P(){return"undefined"!==typeof window||x()}function x(){return"undefined"!==typeof WorkerGlobalScope&&"undefined"!==typeof self&&self instanceof WorkerGlobalScope}function N(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function D(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function L(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function j(){const e=A();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function M(){try{return"object"===typeof indexedDB}catch(e){return!1}}function $(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U="FirebaseError";class F extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=U,Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?H(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new F(r,s,n);return a}}function H(e,t){return e.replace(z,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const z=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function W(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function K(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(q(n)&&q(o)){if(!K(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function q(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function J(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Y(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t){const n=new Z(e,t);return n.subscribe.bind(n)}class Z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=Q(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ee),void 0===r.error&&(r.error=ee),void 0===r.complete&&(r.complete=ee);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Q(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function ee(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function te(e){return e&&e._delegate?e._delegate:e}},851:function(e,t,n){var r=n(6955),i=n(5966),o=n(4117),s=n(6269),a=n(8227),c=a("iterator");e.exports=function(e){if(!o(e))return i(e,c)||i(e,"@@iterator")||s[r(e)]}},852:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return i}});n(8111),n(2489),n(1701),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(774);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1072:function(e,t,n){var r=n(1828),i=n(8727);e.exports=Object.keys||function(e){return r(e,i)}},1148:function(e,t,n){var r=n(6518),i=n(9565),o=n(2652),s=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("every",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{every:function(e){a(this);try{s(e)}catch(r){u(this,"throw",r)}if(h)return i(h,this,e);var t=c(this),n=0;return!o(t,(function(t,r){if(!e(t,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1181:function(e,t,n){var r,i,o,s=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",v=a.TypeError,m=a.WeakMap,g=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new v("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw new v(p);return t.facade=e,_.set(e,t),t},i=function(e){return _.get(e)||{}},o=function(e){return _.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(l(e,b))throw new v(p);return t.facade=e,u(e,b,t),t},i=function(e){return l(e,b)?e[b]:{}},o=function(e){return l(e,b)}}e.exports={set:r,get:i,has:o,enforce:g,getterFor:y}},1202:function(e,t,n){n(4113)},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},1363:function(e,t,n){n.d(t,{$b:function(){return i},Ey:function(){return h},He:function(){return l},Vy:function(){return u}});n(4114),n(8111),n(2489),n(1701);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},1385:function(e,t,n){var r=n(9539);e.exports=function(e,t,n){for(var i=e.length-1;i>=0;i--)if(void 0!==e[i])try{n=r(e[i].iterator,t,n)}catch(o){t="throw",n=o}if("throw"===t)throw n;return n}},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1656:function(e,t,n){function r(e,t,n,r,i,o,s,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,{A:function(){return r}})},1698:function(e,t,n){var r=n(6518),i=n(4204),o=n(9835),s=n(4916),a=!s("union")||!o("union");r({target:"Set",proto:!0,real:!0,forced:a},{union:i})},1701:function(e,t,n){var r=n(6518),i=n(9565),o=n(9306),s=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(9539),h=n(684),d=n(4549),f=n(6395),p=!f&&!h("map",(function(){})),v=!f&&!p&&d("map",TypeError),m=f||p||v,g=c((function(){var e=this.iterator,t=s(i(this.next,e)),n=this.done=!!t.done;if(!n)return u(e,this.mapper,[t.value,this.counter++],!0)}));r({target:"Iterator",proto:!0,real:!0,forced:m},{map:function(e){s(this);try{o(e)}catch(t){l(this,"throw",t)}return v?i(v,this,e):new g(a(this),{mapper:e})}})},1767:function(e){e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},1828:function(e,t,n){var r=n(9504),i=n(9297),o=n(5397),s=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},1951:function(e,t,n){var r=n(8227);t.f=r},2106:function(e,t,n){var r=n(283),i=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},2140:function(e,t,n){var r=n(8227),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},2195:function(e,t,n){var r=n(9504),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},2211:function(e,t,n){var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},2360:function(e,t,n){var r,i=n(8551),o=n(6801),s=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",d="<",f="prototype",p="script",v=l("IE_PROTO"),m=function(){},g=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},_=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?y(r):_():y(r);var e=s.length;while(e--)delete b[f][s[e]];return b()};a[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=i(e),n=new m,m[f]=null,n[v]=e):n=b(),void 0===t?n:o.f(n,t)}},2475:function(e,t,n){var r=n(6518),i=n(8527),o=n(4916),s=!o("isSupersetOf",(function(e){return!e}));r({target:"Set",proto:!0,real:!0,forced:s},{isSupersetOf:i})},2489:function(e,t,n){var r=n(6518),i=n(9565),o=n(9306),s=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(6395),h=n(9539),d=n(684),f=n(4549),p=!l&&!d("filter",(function(){})),v=!l&&!p&&f("filter",TypeError),m=l||p||v,g=c((function(){var e,t,n,r=this.iterator,o=this.predicate,a=this.next;while(1){if(e=s(i(a,r)),t=this.done=!!e.done,t)return;if(n=e.value,u(r,o,[n,this.counter++],!0))return n}}));r({target:"Iterator",proto:!0,real:!0,forced:m},{filter:function(e){s(this);try{o(e)}catch(t){h(this,"throw",t)}return v?i(v,this,e):new g(a(this),{predicate:e})}})},2529:function(e){e.exports=function(e,t){return{value:e,done:t}}},2603:function(e,t,n){var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},2652:function(e,t,n){var r=n(6080),i=n(9565),o=n(8551),s=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),d=n(9539),f=TypeError,p=function(e,t){this.stopped=e,this.result=t},v=p.prototype;e.exports=function(e,t,n){var m,g,y,_,b,w,I,E=n&&n.that,S=!(!n||!n.AS_ENTRIES),C=!(!n||!n.IS_RECORD),T=!(!n||!n.IS_ITERATOR),O=!(!n||!n.INTERRUPTED),k=r(t,E),A=function(e){return m&&d(m,"normal"),new p(!0,e)},R=function(e){return S?(o(e),O?k(e[0],e[1],A):k(e[0],e[1])):O?k(e,A):k(e)};if(C)m=e.iterator;else if(T)m=e;else{if(g=h(e),!g)throw new f(s(e)+" is not iterable");if(a(g)){for(y=0,_=c(e);_>y;y++)if(b=R(e[y]),b&&u(v,b))return b;return new p(!1)}m=l(e,g)}w=C?e.next:m.next;while(!(I=i(w,m)).done){try{b=R(I.value)}catch(P){d(m,"throw",P)}if("object"==typeof b&&b&&u(v,b))return b}return new p(!1)}},2777:function(e,t,n){var r=n(9565),i=n(34),o=n(757),s=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},2787:function(e,t,n){var r=n(9297),i=n(4901),o=n(8981),s=n(6119),a=n(2211),c=s("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=o(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},2796:function(e,t,n){var r=n(9039),i=n(4901),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},2812:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},2839:function(e,t,n){var r=n(4576),i=r.navigator,o=i&&i.userAgent;e.exports=o?String(o):""},2967:function(e,t,n){var r=n(6706),i=n(34),o=n(7750),s=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return o(n),s(r),i(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},3167:function(e,t,n){var r=n(4901),i=n(34),o=n(2967);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},3275:function(e,t,n){n(7324)},3392:function(e,t,n){var r=n(9504),i=0,o=Math.random(),s=r(1.1.toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3405:function(e,t,n){n.r(t),n.d(t,{FirebaseError:function(){return o.g},SDK_VERSION:function(){return Ce},_DEFAULT_ENTRY_NAME:function(){return ae},_addComponent:function(){return de},_addOrOverwriteComponent:function(){return fe},_apps:function(){return ue},_clearComponents:function(){return _e},_components:function(){return he},_getProvider:function(){return ve},_isFirebaseApp:function(){return ge},_isFirebaseServerApp:function(){return ye},_registerComponent:function(){return pe},_removeServiceInstance:function(){return me},_serverApps:function(){return le},deleteApp:function(){return Re},getApp:function(){return ke},getApps:function(){return Ae},initializeApp:function(){return Te},initializeServerApp:function(){return Oe},onLog:function(){return xe},registerVersion:function(){return Pe},setLogLevel:function(){return Ne}});n(4114),n(8111),n(2489),n(1701),n(3579);var r=n(852),i=n(1363),o=n(774);n(4979);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,v=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(I(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),v.set(t,e),t}function g(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(h.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&g(e),s(e,u())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),v.set(t,e)),t}const E=e=>v.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=I(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(I(s.result),e.oldVersion,e.newVersion,I(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const C=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],O=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(O.get(t))return O.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!C.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return O.set(t,o),o}_((e=>({...e,get:(t,n,r)=>k(t,n)||e.get(t,n,r),has:(t,n)=>!!k(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",x="0.13.1",N=new i.Vy("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",j="@firebase/analytics",M="@firebase/app-check-compat",$="@firebase/app-check",U="@firebase/auth",F="@firebase/auth-compat",V="@firebase/database",H="@firebase/data-connect",z="@firebase/database-compat",B="@firebase/functions",W="@firebase/functions-compat",K="@firebase/installations",q="@firebase/installations-compat",G="@firebase/messaging",J="@firebase/messaging-compat",Y="@firebase/performance",X="@firebase/performance-compat",Z="@firebase/remote-config",Q="@firebase/remote-config-compat",ee="@firebase/storage",te="@firebase/storage-compat",ne="@firebase/firestore",re="@firebase/ai",ie="@firebase/firestore-compat",oe="firebase",se="11.9.0",ae="[DEFAULT]",ce={[P]:"fire-core",[D]:"fire-core-compat",[j]:"fire-analytics",[L]:"fire-analytics-compat",[$]:"fire-app-check",[M]:"fire-app-check-compat",[U]:"fire-auth",[F]:"fire-auth-compat",[V]:"fire-rtdb",[H]:"fire-data-connect",[z]:"fire-rtdb-compat",[B]:"fire-fn",[W]:"fire-fn-compat",[K]:"fire-iid",[q]:"fire-iid-compat",[G]:"fire-fcm",[J]:"fire-fcm-compat",[Y]:"fire-perf",[X]:"fire-perf-compat",[Z]:"fire-rc",[Q]:"fire-rc-compat",[ee]:"fire-gcs",[te]:"fire-gcs-compat",[ne]:"fire-fst",[ie]:"fire-fst-compat",[re]:"fire-vertex","fire-js":"fire-js",[oe]:"fire-js-all"},ue=new Map,le=new Map,he=new Map;function de(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function fe(e,t){e.container.addOrOverwriteComponent(t)}function pe(e){const t=e.name;if(he.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;he.set(t,e);for(const n of ue.values())de(n,e);for(const n of le.values())de(n,e);return!0}function ve(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function me(e,t,n=ae){ve(e,t).clearInstance(n)}function ge(e){return void 0!==e.options}function ye(e){return null!==e&&void 0!==e&&void 0!==e.settings}function _e(){he.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},we=new o.FA("app","Firebase",be);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw we.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t){const n=(0,o.u)(e.split(".")[1]);if(null===n)return void console.error(`FirebaseServerApp ${t} is invalid: second part could not be parsed.`);const r=JSON.parse(n).exp;if(void 0===r)return void console.error(`FirebaseServerApp ${t} is invalid: expiration claim could not be parsed`);const i=1e3*JSON.parse(n).exp,s=(new Date).getTime(),a=i-s;a<=0&&console.error(`FirebaseServerApp ${t} is invalid: the token has expired.`)}class Se extends Ie{constructor(e,t,n,r){const i=void 0===t.automaticDataCollectionEnabled||t.automaticDataCollectionEnabled,o={name:n,automaticDataCollectionEnabled:i};if(void 0!==e.apiKey)super(e,o,r);else{const t=e;super(t.options,o,r)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:i},t),this._serverConfig.authIdToken&&Ee(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Ee(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,"undefined"!==typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry((()=>{this.automaticCleanup()}))),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Pe(P,x,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Re(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw we.create("server-app-deleted")}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=se;function Te(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:ae,automaticDataCollectionEnabled:!0},t),s=i.name;if("string"!==typeof s||!s)throw we.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.T9)()),!n)throw we.create("no-options");const a=ue.get(s);if(a){if((0,o.bD)(n,a.options)&&(0,o.bD)(i,a.config))return a;throw we.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const r of he.values())c.addComponent(r);const u=new Ie(n,i,c);return ue.set(s,u),u}function Oe(e,t){if((0,o.Bd)()&&!(0,o.p7)())throw we.create("invalid-server-app-environment");let n;void 0===t.automaticDataCollectionEnabled&&(t.automaticDataCollectionEnabled=!0),n=ge(e)?e.options:e;const i=Object.assign(Object.assign({},t),n);void 0!==i.releaseOnDeref&&delete i.releaseOnDeref;const s=e=>[...e].reduce(((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0),0);if(void 0!==t.releaseOnDeref&&"undefined"===typeof FinalizationRegistry)throw we.create("finalization-registry-not-supported",{});const a=""+s(JSON.stringify(i)),c=le.get(a);if(c)return c.incRefCount(t.releaseOnDeref),c;const u=new r.h1(a);for(const r of he.values())u.addComponent(r);const l=new Se(n,t,a,u);return le.set(a,l),l}function ke(e=ae){const t=ue.get(e);if(!t&&e===ae&&(0,o.T9)())return Te();if(!t)throw we.create("no-app",{appName:e});return t}function Ae(){return Array.from(ue.values())}async function Re(e){let t=!1;const n=e.name;if(ue.has(n))t=!0,ue.delete(n);else if(le.has(n)){const r=e;r.decRefCount()<=0&&(le.delete(n),t=!0)}t&&(await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Pe(e,t,n){var i;let o=null!==(i=ce[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}pe(new r.uA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}function xe(e,t){if(null!==e&&"function"!==typeof e)throw we.create("invalid-log-argument");(0,i.Ey)(e,t)}function Ne(e){(0,i.He)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="firebase-heartbeat-database",Le=1,je="firebase-heartbeat-store";let Me=null;function $e(){return Me||(Me=S(De,Le,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(je)}catch(n){console.warn(n)}}}}).catch((e=>{throw we.create("idb-open",{originalErrorMessage:e.message})}))),Me}async function Ue(e){try{const t=await $e(),n=t.transaction(je),r=await n.objectStore(je).get(Ve(e));return await n.done,r}catch(t){if(t instanceof o.g)N.warn(t.message);else{const e=we.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});N.warn(e.message)}}}async function Fe(e,t){try{const n=await $e(),r=n.transaction(je,"readwrite"),i=r.objectStore(je);await i.put(t,Ve(e)),await r.done}catch(n){if(n instanceof o.g)N.warn(n.message);else{const e=we.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(e.message)}}}function Ve(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=1024,ze=30;class Be{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=We();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>ze){const e=Je(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){N.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=We(),{heartbeatsToSend:n,unsentEntries:r}=Ke(this._heartbeatsCache.heartbeats),i=(0,o.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return N.warn(t),""}}}function We(){const e=new Date;return e.toISOString().substring(0,10)}function Ke(e,t=He){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ge(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ge(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.zW)()&&(0,o.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ue(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Fe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Fe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ge(e){return(0,o.Uj)(JSON.stringify({version:2,heartbeats:e})).length}function Je(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e){pe(new r.uA("platform-logger",(e=>new A(e)),"PRIVATE")),pe(new r.uA("heartbeat",(e=>new Be(e)),"PRIVATE")),Pe(P,x,e),Pe(P,x,"esm2017"),Pe("fire-js","")}Ye("")},3440:function(e,t,n){var r=n(7080),i=n(4402),o=n(9286),s=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;e.exports=function(e){var t=r(this),n=a(e),i=o(t);return s(t)<=n.size?c(t,(function(e){n.includes(e)&&h(i,e)})):u(n.getIterator(),(function(e){l(i,e)&&h(i,e)})),i}},3506:function(e,t,n){var r=n(3925),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw new o("Can't set "+i(e)+" as a prototype")}},3579:function(e,t,n){var r=n(6518),i=n(9565),o=n(2652),s=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("some",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{some:function(e){a(this);try{s(e)}catch(r){u(this,"throw",r)}if(h)return i(h,this,e);var t=c(this),n=0;return o(t,(function(t,r){if(e(t,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},3650:function(e,t,n){var r=n(7080),i=n(4402),o=n(9286),s=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;e.exports=function(e){var t=r(this),n=s(e).getIterator(),i=o(t);return a(n,(function(e){u(t,e)?l(i,e):c(i,e)})),i}},3706:function(e,t,n){var r=n(9504),i=n(4901),o=n(7629),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},3717:function(e,t){t.f=Object.getOwnPropertySymbols},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},3789:function(e,t,n){var r=n(9306),i=n(8551),o=n(9565),s=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,d=function(e,t){this.set=e,this.size=h(t,0),this.has=r(e.has),this.keys=r(e.keys)};d.prototype={getIterator:function(){return a(i(o(this.keys,this.set)))},includes:function(e){return o(this.has,this.set,e)}},e.exports=function(e){i(e);var t=+e.size;if(t!==t)throw new l(c);var n=s(t);if(n<0)throw new u(c);return new d(e,n)}},3838:function(e,t,n){var r=n(7080),i=n(5170),o=n(8469),s=n(3789);e.exports=function(e){var t=r(this),n=s(e);return!(i(t)>n.size)&&!1!==o(t,(function(e){if(!n.includes(e))return!1}),!0)}},3853:function(e,t,n){var r=n(6518),i=n(4449),o=n(4916),s=!o("isDisjointFrom",(function(e){return!e}));r({target:"Set",proto:!0,real:!0,forced:s},{isDisjointFrom:i})},3925:function(e,t,n){var r=n(34);e.exports=function(e){return r(e)||null===e}},3982:function(e,t,n){var r,i,o=n(4576),s=n(7629),a=n(4901),c=n(2360),u=n(2787),l=n(6840),h=n(8227),d=n(6395),f="USE_FUNCTION_CONSTRUCTOR",p=h("asyncIterator"),v=o.AsyncIterator,m=s.AsyncIteratorPrototype;if(m)r=m;else if(a(v))r=v.prototype;else if(s[f]||o[f])try{i=u(u(u(Function("return async function*(){}()")()))),u(i)===Object.prototype&&(r=i)}catch(g){}r?d&&(r=c(r)):r={},a(r[p])||l(r,p,(function(){return this})),e.exports=r},4055:function(e,t,n){var r=n(4576),i=n(34),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},4113:function(e,t,n){var r=n(4576),i=n(511),o=n(4913).f,s=n(7347).f,a=r.Symbol;if(i("asyncDispose"),a){var c=s(a,"asyncDispose");c.enumerable&&c.configurable&&c.writable&&o(a,"asyncDispose",{value:c.value,enumerable:!1,configurable:!1,writable:!1})}},4114:function(e,t,n){var r=n(6518),i=n(8981),o=n(6198),s=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},4117:function(e){e.exports=function(e){return null===e||void 0===e}},4147:function(e,t,n){n(452)},4159:function(e,t,n){n.d(t,{eJ:function(){return $t},xI:function(){return ti},hg:function(){return Ht},x9:function(){return Ut},CI:function(){return zt}});n(4114),n(8111),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(3405),i=n(774),o=n(1363);n(9687),n(4147),n(6037),n(1202),n(3275);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new i.FA("auth","Firebase",c()),h=new o.Vy("@firebase/auth");function d(e,...t){h.logLevel<=o.$b.WARN&&h.warn(`Auth (${r.SDK_VERSION}): ${e}`,...t)}function f(e,...t){h.logLevel<=o.$b.ERROR&&h.error(`Auth (${r.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw y(e,...t)}function v(e,...t){return y(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},u()),{[t]:n}),o=new i.FA("auth","Firebase",r);return o.create(t,{appName:e.name})}function g(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function _(e,t,...n){if(!e)throw y(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function w(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function T(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},P=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],x=new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,n,r,o={}){return L(e,o,(async()=>{let o={},s={};r&&("GET"===t?s=r:o={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:c},o);return(0,i.c1)()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&(0,i.zJ)(e.emulatorConfig.host)&&(u.credentials="include"),A.fetch()(await M(e,e.config.apiHost,n,a),u)}))}async function L(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},R),t);try{const t=new U(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw F(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw F(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);p(e,a)}}catch(o){if(o instanceof i.g)throw o;p(e,"network-request-failed",{message:String(o)})}}async function j(e,t,n,r,i={}){const o=await D(e,t,n,r,i);return"mfaPendingCredential"in o&&p(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function M(e,t,n,r){const i=`${t}${n}?${r}`,o=e,s=o.config.emulator?k(e.config,i):`${e.config.apiScheme}://${i}`;if(P.includes(n)&&(await o._persistenceManagerAvailable,"COOKIE"===o._getPersistenceType())){const e=o._getPersistence();return e._getFinalTarget(s).toString()}return s}function $(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class U{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(v(this.auth,"network-request-failed"))),x.get())}))}}function F(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=v(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return void 0!==e&&void 0!==e.enterprise}class H{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return D(e,"GET","/v2/recaptchaConfig",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function W(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),o=J(r);_(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:r,authTime:K(G(o.auth_time)),issuedAtTime:K(G(o.iat)),expirationTime:K(G(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function J(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(o){return f("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function Y(e){const t=J(e);return _(t,"internal-error"),_("undefined"!==typeof t.exp,"internal-error"),_("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&Z(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Z({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){var t;const n=e.auth,r=await e.getIdToken(),i=await X(e,W(n,{idToken:r}));_(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ie(o.providerUserInfo):[],a=re(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ee(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ne(e){const t=(0,i.Ku)(e);await te(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function re(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ie(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const n=await L(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,s=await M(e,r,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:n};return e.emulatorConfig&&(0,i.zJ)(e.emulatorConfig.host)&&(c.credentials="include"),A.fetch()(s,c)}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function se(e,t){return D(e,"POST","/v2/accounts:revokeToken",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_("undefined"!==typeof e.idToken,"internal-error"),_("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_(0!==e.length,"internal-error");const t=Y(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(_(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await oe(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ae;return n&&(_("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(_("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(_("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){_("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ee(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await X(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return ne(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await te(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r._isFirebaseServerApp)(this.auth.app))return Promise.reject(g(this.auth));const e=await this.getIdToken();return await X(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:I,stsTokenManager:E}=t;_(y&&E,e,"internal-error");const S=ae.fromJSON(this.name,E);_("string"===typeof y,e,"internal-error"),ce(l,e.name),ce(h,e.name),_("boolean"===typeof b,e,"internal-error"),_("boolean"===typeof w,e,"internal-error"),ce(d,e.name),ce(f,e.name),ce(p,e.name),ce(v,e.name),ce(m,e.name),ce(g,e.name);const C=new ue({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:m,lastLoginAt:g});return I&&Array.isArray(I)&&(C.providerData=I.map((e=>Object.assign({},e)))),v&&(C._redirectEventId=v),C}static async _fromIdTokenResponse(e,t,n=!1){const r=new ae;r.updateFromServerResponse(t);const i=new ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await te(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];_(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?ie(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),s=new ae;s.updateFromIdToken(n);const a=new ue({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ee(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function he(e){w(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class ve{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"===typeof e){const t=await W(this.auth,{idToken:e}).catch((()=>{}));return t?ue._fromGetAccountInfoResponse(this.auth,t,e):null}return ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ve(he(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||he(fe);const o=pe(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){let n;if("string"===typeof t){const r=await W(e,{idToken:t}).catch((()=>{}));if(!r)break;n=await ue._fromGetAccountInfoResponse(e,r,t)}else n=ue._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new ve(i,e,n)):new ve(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Ee(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||_e(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ye(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _e(e=(0,i.ZQ)()){return/crios\//i.test(e)}function be(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function we(e=(0,i.ZQ)()){return/android/i.test(e)}function Ie(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Ee(e=(0,i.ZQ)()){return/webos/i.test(e)}function Se(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ce(e=(0,i.ZQ)()){var t;return Se(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Te(){return(0,i.lT)()&&10===document.documentMode}function Oe(e=(0,i.ZQ)()){return Se(e)||we(e)||Ee(e)||Ie(e)||/windows phone/i.test(e)||be(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e,t=[]){let n;switch(e){case"Browser":n=me((0,i.ZQ)());break;case"Worker":n=`${me((0,i.ZQ)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.SDK_VERSION}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e,t={}){return D(e,"GET","/v2/passwordPolicy",N(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=6;class xe{constructor(e){var t,n,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:Pe,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Le(this),this.idTokenSubscription=new Le(this),this.beforeStateQueue=new Ae(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise((e=>this._resolvePersistenceManagerAvailable=e))}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue((async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await ve.create(this,e),null===(n=this._resolvePersistenceManagerAvailable)||void 0===n||n.call(this),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await W(this,{idToken:e}),n=await ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r._isFirebaseServerApp)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==r||!(null===s||void 0===s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await te(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r._isFirebaseServerApp)(this.app))return Promise.reject(g(this));const t=e?(0,i.Ku)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r._isFirebaseServerApp)(this.app)?Promise.reject(g(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r._isFirebaseServerApp)(this.app)?Promise.reject(g(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(he(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Re(this),t=new xe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await se(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&he(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await ve.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(s,this,"internal-error"),s.then((()=>{o||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{o=!0,i()}}{const n=e.addObserver(t);return()=>{o=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ke(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if((0,r._isFirebaseServerApp)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function De(e){return(0,i.Ku)(e)}class Le{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let je={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Me(e){je=e}function $e(e){return je.loadJS(e)}function Ue(){return je.recaptchaEnterpriseScript}function Fe(){return je.gapiScript}function Ve(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(){this.enterprise=new ze}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ze{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Be="recaptcha-enterprise",We="NO_RECAPTCHA";class Ke{constructor(e){this.type=Be,this.auth=De(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{z(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new H(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;V(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(We)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const e=new He;return e.execute("siteKey",{action:"verify"})}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&V(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Ue();0!==t.length&&(t+=n),$e(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function qe(e,t,n,r=!1,i=!1){const o=new Ke(e);let s;if(i)s=We;else try{s=await o.verify(n)}catch(c){s=await o.verify(n,!0)}const a=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ge(e,t,n,r,i){var o,s;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await qe(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await qe(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}if("PHONE_PROVIDER"===i){if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("PHONE_PROVIDER")){const i=await qe(e,t,n);return r(e,i).catch((async i=>{var o;if("AUDIT"===(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await qe(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)}))}{const i=await qe(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+" provider is not supported.")}async function Je(e){const t=De(e),n=await z(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new H(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){const e=new Ke(t);e.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e,t){const n=(0,r._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const o=n.initialize({options:t});return o}function Xe(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(he);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ze(e,t,n){const r=De(e);_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Qe(t),{host:a,port:c}=et(t),u=null===c?"":`:${c}`,l={url:`${s}//${a}${u}/`},h=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator)return _(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void _((0,i.bD)(l,r.config.emulator)&&(0,i.bD)(h,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=l,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,(0,i.zJ)(a)?((0,i.gE)(`${s}//${a}${u}`),(0,i.P1)("Auth",!0)):o||nt()}function Qe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function et(e){const t=Qe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:tt(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:tt(t)}}}function tt(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function nt(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t){return D(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ot(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}async function at(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends rt{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ct(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ct(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ge(e,t,"signInWithPassword",ot,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return st(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ge(e,n,"signUpPassword",it,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return at(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="http://localhost";class ht extends rt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new ht(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ut(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ut(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ut(e,t)}buildRequest(){const e={requestUri:lt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}async function ft(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}async function pt(e,t){const n=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}const vt={["USER_NOT_FOUND"]:"user-not-found"};async function mt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return j(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,n),vt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends rt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new gt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new gt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ft(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return pt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return mt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new gt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _t(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],o=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return o||r||n||t||e}class bt{constructor(e){var t,n,r,o,s,a;const c=(0,i.I9)((0,i.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=yt(null!==(r=c["mode"])&&void 0!==r?r:null);_(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["lang"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=_t(e);try{return new bt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(){this.providerId=wt.PROVIDER_ID}static credential(e,t){return ct._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=bt.parseLink(t);return _(n,"argument-error"),ct._fromEmailAndCode(e,n.code,n.tenantId)}}wt.PROVIDER_ID="password",wt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",wt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends It{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St extends Et{constructor(){super("facebook.com")}static credential(e){return ht._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch(t){return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com",St.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends Et{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ht._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ct.credential(t,n)}catch(r){return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com",Ct.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends Et{constructor(){super("github.com")}static credential(e){return ht._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch(t){return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com",Tt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot extends Et{constructor(){super("twitter.com")}static credential(e,t){return ht._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ot.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function kt(e,t){return j(e,"POST","/v1/accounts:signUp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot.TWITTER_SIGN_IN_METHOD="twitter.com",Ot.PROVIDER_ID="twitter.com";class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ue._fromIdTokenResponse(e,n,r),o=Rt(n),s=new At({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Rt(n);return new At({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Rt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Pt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Pt(e,t,n,r)}}function xt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Pt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(e,t,n=!1){const r=await X(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return At._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Dt(e,t,n=!1){const{auth:i}=e;if((0,r._isFirebaseServerApp)(i.app))return Promise.reject(g(i));const o="reauthenticate";try{const r=await X(e,xt(i,o,t,e),n);_(r.idToken,i,"internal-error");const s=J(r.idToken);_(s,i,"internal-error");const{sub:a}=s;return _(e.uid===a,i,"user-mismatch"),At._forOperation(e,o,r)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(e,t,n=!1){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(g(e));const i="signIn",o=await xt(e,i,t),s=await At._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(s.user),s}async function jt(e,t){return Lt(De(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mt(e){const t=De(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function $t(e,t,n){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(g(e));const i=De(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},s=Ge(i,o,"signUpPassword",kt,"EMAIL_PASSWORD_PROVIDER"),a=await s.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Mt(e),t})),c=await At._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Ut(e,t,n){return(0,r._isFirebaseServerApp)(e.app)?Promise.reject(g(e)):jt((0,i.Ku)(e),wt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Mt(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function Vt(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}function Ht(e,t,n,r){return(0,i.Ku)(e).onAuthStateChanged(t,n,r)}function zt(e){return(0,i.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function Wt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}function Kt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function qt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}new WeakMap;const Gt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gt,"1"),this.storage.removeItem(Gt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=1e3,Xt=10;class Zt extends Jt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Te()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Xt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Yt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zt.type="LOCAL";const Qt=Zt,en=1e3;
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(e){var t,n;const r=e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),i=RegExp(`${r}=([^;]+)`);return null!==(n=null===(t=document.cookie.match(i))||void 0===t?void 0:t[1])&&void 0!==n?n:null}function nn(e){const t="http:"===window.location.protocol;return`${t?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`}class rn{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(void 0===typeof window)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return!("boolean"===typeof isSecureContext&&!isSecureContext)&&("undefined"!==typeof navigator&&"undefined"!==typeof document&&(null===(e=navigator.cookieEnabled)||void 0===e||e))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=nn(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return null===e||void 0===e?void 0:e.value}return tn(t)}async _remove(e){if(!this._isAvailable())return;const t=await this._get(e);if(!t)return;const n=nn(e);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch((()=>{}))}_addListener(e,t){if(!this._isAvailable())return;const n=nn(e);if(window.cookieStore){const e=e=>{const r=e.changed.find((e=>e.name===n));r&&t(r.value);const i=e.deleted.find((e=>e.name===n));i&&t(null)},r=()=>window.cookieStore.removeEventListener("change",e);return this.listenerUnsubscribes.set(t,r),window.cookieStore.addEventListener("change",e)}let r=tn(n);const i=setInterval((()=>{const e=tn(n);e!==r&&(t(e),r=e)}),en),o=()=>clearInterval(i);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}rn.type="COOKIE";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class on extends Jt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}on.type="SESSION";const sn=on;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new cn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await an(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function un(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn.receivers=[];class ln{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=un("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function dn(e){hn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return"undefined"!==typeof hn()["WorkerGlobalScope"]&&"function"===typeof hn()["importScripts"]}async function pn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function vn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function mn(){return fn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="firebaseLocalStorageDb",yn=1,_n="firebaseLocalStorage",bn="fbase_key";class wn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function In(e,t){return e.transaction([_n],t?"readwrite":"readonly").objectStore(_n)}function En(){const e=indexedDB.deleteDatabase(gn);return new wn(e).toPromise()}function Sn(){const e=indexedDB.open(gn,yn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(_n,{keyPath:bn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(_n)?t(n):(n.close(),await En(),t(await Sn()))}))}))}async function Cn(e,t,n){const r=In(e,!0).put({[bn]:t,value:n});return new wn(r).toPromise()}async function Tn(e,t){const n=In(e,!1).get(t),r=await new wn(n).toPromise();return void 0===r?null:r.value}function On(e,t){const n=In(e,!0).delete(t);return new wn(n).toPromise()}const kn=800,An=3;class Rn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Sn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>An)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cn._getInstance(mn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await pn(),!this.activeServiceWorker)return;this.sender=new ln(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&vn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sn();return await Cn(e,Gt,"1"),await On(e,Gt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Cn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Tn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>On(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=In(e,!1).getAll();return new wn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),kn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Rn.type="LOCAL";const Pn=Rn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}function Nn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}function Dn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve("rcb"),new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ln="recaptcha";async function jn(e,t,n){var r;if(!e._getRecaptchaConfig())try{await Je(e)}catch(i){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){_("enroll"===t.type,e,"internal-error");const r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},o=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===We){_((null===n||void 0===n?void 0:n.type)===Ln,e,"argument-error");const r=await Mn(e,t,n);return Bt(e,r)}return Bt(e,t)},s=Ge(e,r,"mfaSmsEnrollment",o,"PHONE_PROVIDER"),a=await s.catch((e=>Promise.reject(e)));return a.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const o=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;_(o,e,"missing-multi-factor-info");const s={mfaPendingCredential:t.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===We){_((null===n||void 0===n?void 0:n.type)===Ln,e,"argument-error");const r=await Mn(e,t,n);return xn(e,r)}return xn(e,t)},c=Ge(e,s,"mfaSmsSignIn",a,"PHONE_PROVIDER"),u=await c.catch((e=>Promise.reject(e)));return u.phoneResponseInfo.sessionInfo}}{const t={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"},r=async(e,t)=>{if(t.captchaResponse===We){_((null===n||void 0===n?void 0:n.type)===Ln,e,"argument-error");const r=await Mn(e,t,n);return dt(e,r)}return dt(e,t)},o=Ge(e,t,"sendVerificationCode",r,"PHONE_PROVIDER"),s=await o.catch((e=>Promise.reject(e)));return s.sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function Mn(e,t,n){_(n.type===Ln,e,"argument-error");const r=await n.verify();_("string"===typeof r,e,"argument-error");const i=Object.assign({},t);if("phoneEnrollmentInfo"in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,o=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:o}}),i}if("phoneSignInInfo"in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.providerId=$n.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return jn(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return gt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return $n.credentialFromTaggedObject(t)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?gt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Un(e,t){return t?he(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n.PROVIDER_ID="phone",$n.PHONE_SIGN_IN_METHOD="phone";class Fn extends rt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ut(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ut(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ut(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Vn(e){return Lt(e.auth,new Fn(e),e.bypassAuthState)}function Hn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Dt(n,new Fn(e),e.bypassAuthState)}async function zn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Nt(n,new Fn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vn;case"linkViaPopup":case"linkViaRedirect":return zn;case"reauthViaPopup":case"reauthViaRedirect":return Hn;default:p(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new O(2e3,1e4);class Kn extends Bn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=un();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(v(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Wn.get())};e()}}Kn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qn="pendingRedirect",Gn=new Map;class Jn extends Bn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Gn.get(this.auth._key());if(!e){try{const t=await Yn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Gn.set(this.auth._key(),e)}return this.bypassAuthState||Gn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Yn(e,t){const n=Qn(t),r=Zn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Xn(e,t){Gn.set(e._key(),t)}function Zn(e){return he(e._redirectPersistence)}function Qn(e){return pe(qn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(e,t,n=!1){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(g(e));const i=De(e),o=Un(i,t),s=new Jn(i,o,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tr=6e5;class nr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!or(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ir(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(v(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tr&&this.cachedEventUids.clear(),this.cachedEventUids.has(rr(e))}saveEventToCache(e){this.cachedEventUids.add(rr(e)),this.lastProcessedEventTime=Date.now()}}function rr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ir({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function or(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ir(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t={}){return D(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cr=/^https?/;async function ur(e){if(e.config.emulator)return;const{authorizedDomains:t}=await sr(e);for(const r of t)try{if(lr(r))return}catch(n){}p(e,"unauthorized-domain")}function lr(e){const t=I(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!cr.test(n))return!1;if(ar.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new O(3e4,6e4);function dr(){const e=hn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function fr(e){return new Promise(((t,n)=>{var r,i,o;function s(){dr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{dr(),n(v(e,"network-request-failed"))},timeout:hr.get()})}if(null===(i=null===(r=hn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=hn().gapi)||void 0===o?void 0:o.load)){const t=Ve("iframefcb");return hn()[t]=()=>{gapi.load?s():n(v(e,"network-request-failed"))},$e(`${Fe()}?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw pr=null,e}))}let pr=null;function vr(e){return pr=pr||fr(e),pr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new O(5e3,15e3),gr="__/auth/iframe",yr="emulator/auth/iframe",_r={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},br=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wr(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?k(t,yr):`https://${e.config.authDomain}/${gr}`,o={apiKey:t.apiKey,appName:e.name,v:r.SDK_VERSION},s=br.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,i.Am)(o).slice(1)}`}async function Ir(e){const t=await vr(e),n=hn().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:wr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_r,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=v(e,"network-request-failed"),o=hn().setTimeout((()=>{r(i)}),mr.get());function s(){hn().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sr=500,Cr=600,Tr="_blank",Or="http://localhost";class kr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ar(e,t,n,r=Sr,o=Cr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Er),{width:r.toString(),height:o.toString(),top:s,left:a}),l=(0,i.ZQ)().toLowerCase();n&&(c=_e(l)?Tr:n),ge(l)&&(t=t||Or,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ce(l)&&"_self"!==c)return Rr(t||"",c),new kr(null);const d=window.open(t||"",c,h);_(d,e,"popup-blocked");try{d.focus()}catch(f){}return new kr(d)}function Rr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="__/auth/handler",xr="emulator/auth/handler",Nr=encodeURIComponent("fac");async function Dr(e,t,n,o,s,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:r.SDK_VERSION,eventId:s};if(t instanceof It){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Et){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${Nr}=${encodeURIComponent(l)}`:"";return`${Lr(e)}?${(0,i.Am)(u).slice(1)}${h}`}function Lr({config:e}){return e.emulator?k(e,xr):`https://${e.authDomain}/${Pr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="webStorageSupport";class Mr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sn,this._completeRedirectFn=er,this._overrideRedirectResult=Xn}async _openPopup(e,t,n,r){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Dr(e,t,n,I(),r);return Ar(e,o,un())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Dr(e,t,n,I(),r);return dn(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ir(e),n=new nr(e);return t.register("authEvent",(t=>{_(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(jr,{type:jr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[jr];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ur(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oe()||ye()||Se()}}const $r=Mr;class Ur{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class Fr extends Ur{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Fr(e)}_finalizeEnroll(e,t,n){return Wt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Nn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Vr{constructor(){}static assertion(e){return Fr._fromCredential(e)}}Vr.FACTOR_ID="phone";class Hr{static assertionForEnrollment(e,t){return zr._fromSecret(e,t)}static assertionForSignIn(e,t){return zr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;_("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Kt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Br._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Hr.FACTOR_ID="totp";class zr extends Ur{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new zr(t,void 0,e)}static _fromEnrollmentId(e,t){return new zr(t,e)}async _finalizeEnroll(e,t,n){return _("undefined"!==typeof this.secret,e,"argument-error"),qt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){_(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Dn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Br{constructor(e,t,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Br(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Wr(e)||Wr(t))&&(r=!0),r&&(Wr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Wr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Wr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Kr="@firebase/auth",qr="1.10.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yr(e){(0,r._registerComponent)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;_(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ke(e)},u=new Ne(r,i,o,c);return Xe(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r._registerComponent)(new a.uA("auth-internal",(e=>{const t=De(e.getProvider("auth").getImmediate());return(e=>new Gr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.registerVersion)(Kr,qr,Jr(e)),(0,r.registerVersion)(Kr,qr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=300,Zr=(0,i.XA)("authIdTokenMaxAge")||Xr;let Qr=null;const ei=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Zr)return;const i=null===n||void 0===n?void 0:n.token;Qr!==i&&(Qr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ti(e=(0,r.getApp)()){const t=(0,r._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ye(e,{popupRedirectResolver:$r,persistence:[Pn,Qt,sn]}),o=(0,i.XA)("authTokenSyncURL");if(o&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(o,location.origin);if(location.origin===e.origin){const t=ei(e.toString());Vt(n,t,(()=>t(n.currentUser))),Ft(n,(e=>t(e)))}}const s=(0,i.Tj)("auth");return s&&Ze(n,`http://${s}`),n}function ni(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Me({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=v("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ni().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Yr("Browser")},4204:function(e,t,n){var r=n(7080),i=n(4402).add,o=n(9286),s=n(3789),a=n(507);e.exports=function(e){var t=r(this),n=s(e).getIterator(),c=o(t);return a(n,(function(e){i(c,e)})),c}},4209:function(e,t,n){var r=n(8227),i=n(6269),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},4215:function(e,t,n){var r=n(4576),i=n(2839),o=n(2195),s=function(e){return i.slice(0,e.length)===e};e.exports=function(){return s("Bun/")?"BUN":s("Cloudflare-Workers")?"CLOUDFLARE":s("Deno/")?"DENO":s("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===o(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},4270:function(e,t,n){var r=n(9565),i=n(4901),o=n(34),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw new s("Can't convert object to primitive value")}},4376:function(e,t,n){var r=n(2195);e.exports=Array.isArray||function(e){return"Array"===r(e)}},4402:function(e,t,n){var r=n(9504),i=Set.prototype;e.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},4449:function(e,t,n){var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(8469),c=n(507),u=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(o(t)<=n.size)return!1!==a(t,(function(e){if(n.includes(e))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(e){if(i(t,e))return u(l,"normal",!1)}))}},4495:function(e,t,n){var r=n(9519),i=n(9039),o=n(4576),s=o.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},4527:function(e,t,n){var r=n(3724),i=n(4376),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw new o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4549:function(e,t,n){var r=n(4576);e.exports=function(e,t){var n=r.Iterator,i=n&&n.prototype,o=i&&i[e],s=!1;if(o)try{o.call({next:function(){return{done:!0}},return:function(){s=!0}},-1)}catch(a){a instanceof t||(s=!1)}if(!s)return o}},4576:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},4659:function(e,t,n){var r=n(3724),i=n(4913),o=n(6980);e.exports=function(e,t,n){r?i.f(e,t,o(0,n)):e[t]=n}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},4913:function(e,t,n){var r=n(3724),i=n(5917),o=n(8686),s=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},4916:function(e,t,n){var r=n(7751),i=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},o=function(e){return{size:e,has:function(){return!0},keys:function(){throw new Error("e")}}};e.exports=function(e,t){var n=r("Set");try{(new n)[e](i(0));try{return(new n)[e](i(-1)),!1}catch(a){if(!t)return!0;try{return(new n)[e](o(-1/0)),!1}catch(c){var s=new n;return s.add(1),s.add(2),t(s[e](o(1/0)))}}}catch(c){return!1}}},4979:function(e,t,n){var r=n(6518),i=n(4576),o=n(7751),s=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),d=n(5002),f=n(6193),p=n(3724),v=n(6395),m="DOMException",g=o("Error"),y=o(m),_=function(){u(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=new g(t);return i.name=m,a(r,"stack",s(1,f(i.stack,1))),l(r,this,_),r},b=_.prototype=y.prototype,w="stack"in new g(m),I="stack"in new y(1,2),E=y&&p&&Object.getOwnPropertyDescriptor(i,m),S=!!E&&!(E.writable&&E.configurable),C=w&&!S&&!I;r({global:!0,constructor:!0,forced:v||C},{DOMException:C?_:y});var T=o(m),O=T.prototype;if(O.constructor!==T)for(var k in v||a(O,"constructor",s(1,T)),d)if(c(d,k)){var A=d[k],R=A.s;c(T,R)||a(T,R,s(6,A.c))}},5002:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},5024:function(e,t,n){var r=n(6518),i=n(3650),o=n(9835),s=n(4916),a=!s("symmetricDifference")||!o("symmetricDifference");r({target:"Set",proto:!0,real:!0,forced:a},{symmetricDifference:i})},5031:function(e,t,n){var r=n(7751),i=n(9504),o=n(8480),s=n(3717),a=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},5170:function(e,t,n){var r=n(6706),i=n(4402);e.exports=r(i.proto,"size","get")||function(e){return e.size}},5397:function(e,t,n){var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},5610:function(e,t,n){var r=n(1291),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},5876:function(e,t,n){var r=n(6518),i=n(3838),o=n(4916),s=!o("isSubsetOf",(function(e){return e}));r({target:"Set",proto:!0,real:!0,forced:s},{isSubsetOf:i})},5917:function(e,t,n){var r=n(3724),i=n(9039),o=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},5966:function(e,t,n){var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},6037:function(e,t,n){n(6382)},6080:function(e,t,n){var r=n(7476),i=n(9306),o=n(616),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?s(e,t):function(){return e.apply(t,arguments)}}},6119:function(e,t,n){var r=n(5745),i=n(3392),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},6178:function(e,t,n){n.d(t,{Ay:function(){return It}});n(4114),n(8111),n(1148),n(2489),n(7588),n(1701),n(3579);function r(e,t){for(var n in t)e[n]=t[n];return e}var i=/[!'()*]/g,o=function(e){return"%"+e.charCodeAt(0).toString(16)},s=/%2C/g,a=function(e){return encodeURIComponent(e).replace(i,o).replace(s,",")};function c(e){try{return decodeURIComponent(e)}catch(t){0}return e}function u(e,t,n){void 0===t&&(t={});var r,i=n||h;try{r=i(e||"")}catch(a){r={}}for(var o in t){var s=t[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(e){return null==e||"object"===typeof e?e:String(e)};function h(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function d(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(a(t)):r.push(a(t)+"="+a(e)))})),r.join("&")}return a(t)+"="+a(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var f=/\/?$/;function p(e,t,n,r){var i=r&&r.options.stringifyQuery,o=t.query||{};try{o=v(o)}catch(a){}var s={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:o,params:t.params||{},fullPath:y(t,i),matched:e?g(e):[]};return n&&(s.redirectedFrom=y(n,i)),Object.freeze(s)}function v(e){if(Array.isArray(e))return e.map(v);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=v(e[n]);return t}return e}var m=p(null,{path:"/"});function g(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function y(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var o=t||d;return(n||"/")+o(r)+i}function _(e,t,n){return t===m?e===t:!!t&&(e.path&&t.path?e.path.replace(f,"")===t.path.replace(f,"")&&(n||e.hash===t.hash&&b(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&b(e.query,t.query)&&b(e.params,t.params))))}function b(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var o=e[n],s=r[i];if(s!==n)return!1;var a=t[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?b(o,a):String(o)===String(a)}))}function w(e,t){return 0===e.path.replace(f,"/").indexOf(t.path.replace(f,"/"))&&(!t.hash||e.hash===t.hash)&&I(e.query,t.query)}function I(e,t){for(var n in t)if(!(n in e))return!1;return!0}function E(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var S={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,o=t.parent,s=t.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,d=!1;while(o&&o._routerRoot!==o){var f=o.$vnode?o.$vnode.data:{};f.routerView&&h++,f.keepAlive&&o._directInactive&&o._inactive&&(d=!0),o=o.$parent}if(s.routerViewDepth=h,d){var p=l[c],v=p&&p.component;return v?(p.configProps&&C(v,s,p.route,p.configProps),a(v,s,i)):a()}var m=u.matched[h],g=m&&m.components[c];if(!m||!g)return l[c]=null,a();l[c]={component:g},s.registerRouteInstance=function(e,t){var n=m.instances[c];(t&&n!==e||!t&&n===e)&&(m.instances[c]=t)},(s.hook||(s.hook={})).prepatch=function(e,t){m.instances[c]=t.componentInstance},s.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==m.instances[c]&&(m.instances[c]=e.componentInstance),E(u)};var y=m.props&&m.props[c];return y&&(r(l[c],{route:u,configProps:y}),C(g,s,u,y)),a(g,s,i)}};function C(e,t,n,i){var o=t.props=T(n,i);if(o){o=t.props=r({},o);var s=t.attrs=t.attrs||{};for(var a in o)e.props&&a in e.props||(s[a]=o[a],delete o[a])}}function T(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function O(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var o=e.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function k(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function A(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var R=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},P=Y,x=M,N=$,D=V,L=J,j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(e,t){var n,r=[],i=0,o=0,s="",a=t&&t.delimiter||"/";while(null!=(n=j.exec(e))){var c=n[0],u=n[1],l=n.index;if(s+=e.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=e[o],d=n[2],f=n[3],p=n[4],v=n[5],m=n[6],g=n[7];s&&(r.push(s),s="");var y=null!=d&&null!=h&&h!==d,_="+"===m||"*"===m,b="?"===m||"*"===m,w=n[2]||a,I=p||v;r.push({name:f||i++,prefix:d||"",delimiter:w,optional:b,repeat:_,partial:y,asterisk:!!g,pattern:I?z(I):g?".*":"[^"+H(w)+"]+?"})}}return o<e.length&&(s+=e.substr(o)),s&&r.push(s),r}function $(e,t){return V(M(e,t),t)}function U(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function F(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function V(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",W(t)));return function(t,r){for(var i="",o=t||{},s=r||{},a=s.pretty?U:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(R(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?F(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function H(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function B(e,t){return e.keys=t,e}function W(e){return e&&e.sensitive?"":"i"}function K(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return B(e,t)}function q(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Y(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",W(n));return B(o,t)}function G(e,t,n){return J(M(e,n),t,n)}function J(e,t,n){R(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<e.length;s++){var a=e[s];if("string"===typeof a)o+=H(a);else{var c=H(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=H(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",B(new RegExp("^"+o,W(n)),t)}function Y(e,t,n){return R(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?K(e,t):R(e)?q(e,t,n):G(e,t,n)}P.parse=x,P.compile=N,P.tokensToFunction=D,P.tokensToRegExp=L;var X=Object.create(null);function Z(e,t,n){t=t||{};try{var r=X[e]||(X[e]=P.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function Q(e,t,n,i){var o="string"===typeof e?{path:e}:e;if(o._normalized)return o;if(o.name){o=r({},e);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&t){o=r({},o),o._normalized=!0;var a=r(r({},t.params),o.params);if(t.name)o.name=t.name,o.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;o.path=Z(c,a,"path "+t.path)}else 0;return o}var l=k(o.path||""),h=t&&t.path||"/",d=l.path?O(l.path,h,n||o.append):h,f=u(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var ee,te=[String,Object],ne=[String,Array],re=function(){},ie={name:"RouterLink",props:{to:{type:te,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:ne,default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,v=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?f:this.exactActiveClass,g=a.redirectedFrom?p(null,Q(a.redirectedFrom),null,n):a;u[m]=_(i,g,this.exactPath),u[v]=this.exact||this.exactPath?u[m]:w(i,g);var y=u[m]?this.ariaCurrentValue:null,b=function(e){oe(e)&&(t.replace?n.replace(s,re):n.push(s,re))},I={click:oe};Array.isArray(this.event)?this.event.forEach((function(e){I[e]=b})):I[this.event]=b;var E={class:u},S=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[v],isExactActive:u[m]});if(S){if(1===S.length)return S[0];if(S.length>1||!S.length)return 0===S.length?e():e("span",{},S)}if("a"===this.tag)E.on=I,E.attrs={href:c,"aria-current":y};else{var C=se(this.$slots.default);if(C){C.isStatic=!1;var T=C.data=r({},C.data);for(var O in T.on=T.on||{},T.on){var k=T.on[O];O in I&&(T.on[O]=Array.isArray(k)?k:[k])}for(var A in I)A in T.on?T.on[A].push(I[A]):T.on[A]=b;var R=C.data.attrs=r({},C.data.attrs);R.href=c,R["aria-current"]=y}else E.on=I}return e(this.tag,E,this.$slots.default)}};function oe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function se(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=se(t.children)))return t}}function ae(e){if(!ae.installed||ee!==e){ae.installed=!0,ee=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",S),e.component("RouterLink",ie);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ce="undefined"!==typeof window;function ue(e,t,n,r,i){var o=t||[],s=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){le(o,s,a,e,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function le(e,t,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=de(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:he(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?A(o+"/"+r.path):void 0;le(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};le(e,t,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function he(e,t){var n=P(e,[],t);return n}function de(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:A(t.path+"/"+e)}function fe(e,t){var n=ue(e),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(e){ue(e,r,i,o)}function a(e,t){var n="object"!==typeof e?o[e]:void 0;ue([t||e],r,i,o,n),n&&n.alias.length&&ue(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,o,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,s){var a=Q(e,n,!1,t),c=a.name;if(c){var u=o[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Z(u.path,a.params,'named route "'+c+'"'),d(u,a,s)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],v=i[p];if(pe(v.regex,a.path,a.params))return d(v,a,s)}}return d(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(p(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,f=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,f=s.hasOwnProperty("params")?s.params:f,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var v=ve(c,e),m=Z(v,f,'redirect route with path "'+v+'"');return u({_normalized:!0,path:m,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=Z(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return t.params=i.params,d(s,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):p(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function pe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=e.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function ve(e,t){return O(e,t.parent?t.parent.path:"/",!0)}var me=ce&&window.performance&&window.performance.now?window.performance:Date;function ge(){return me.now().toFixed(3)}var ye=ge();function _e(){return ye}function be(e){return ye=e}var we=Object.create(null);function Ie(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=_e(),window.history.replaceState(n,"",t),window.addEventListener("popstate",Ce),function(){window.removeEventListener("popstate",Ce)}}function Ee(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var o=Te(),s=i.call(e,t,n,r?o:null);s&&("function"===typeof s.then?s.then((function(e){Ne(e,o)})).catch((function(e){0})):Ne(s,o))}))}}function Se(){var e=_e();e&&(we[e]={x:window.pageXOffset,y:window.pageYOffset})}function Ce(e){Se(),e.state&&e.state.key&&be(e.state.key)}function Te(){var e=_e();if(e)return we[e]}function Oe(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function ke(e){return Pe(e.x)||Pe(e.y)}function Ae(e){return{x:Pe(e.x)?e.x:window.pageXOffset,y:Pe(e.y)?e.y:window.pageYOffset}}function Re(e){return{x:Pe(e.x)?e.x:0,y:Pe(e.y)?e.y:0}}function Pe(e){return"number"===typeof e}var xe=/^#\d/;function Ne(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=xe.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=Re(i),t=Oe(r,i)}else ke(e)&&(t=Ae(e))}else n&&ke(e)&&(t=Ae(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var De=ce&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Le(e,t){Se();var n=window.history;try{if(t){var i=r({},n.state);i.key=_e(),n.replaceState(i,"",e)}else n.pushState({key:be(ge())},"",e)}catch(o){window.location[t?"replace":"assign"](e)}}function je(e){Le(e,!0)}var Me={redirected:2,aborted:4,cancelled:8,duplicated:16};function $e(e,t){return He(e,t,Me.redirected,'Redirected when going from "'+e.fullPath+'" to "'+Be(t)+'" via a navigation guard.')}function Ue(e,t){var n=He(e,t,Me.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Fe(e,t){return He(e,t,Me.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function Ve(e,t){return He(e,t,Me.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function He(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var ze=["params","query","hash"];function Be(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return ze.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function We(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Ke(e,t){return We(e)&&e._isRouter&&(null==t||e.type===t)}function qe(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}function Ge(e){return function(t,n,r){var i=!1,o=0,s=null;Je(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,o++;var c,u=Qe((function(t){Ze(t)&&(t=t.default),e.resolved="function"===typeof t?t:ee.extend(t),n.components[a]=t,o--,o<=0&&r()})),l=Qe((function(e){var t="Failed to resolve async component "+a+": "+e;s||(s=We(e)?e:new Error(t),r(s))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Je(e,t){return Ye(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Ye(e){return Array.prototype.concat.apply([],e)}var Xe="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Ze(e){return e.__esModule||Xe&&"Module"===e[Symbol.toStringTag]}function Qe(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var et=function(e,t){this.router=e,this.base=tt(t),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function tt(e){if(!e)if(ce){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function nt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function rt(e,t,n,r){var i=Je(e,(function(e,r,i,o){var s=it(e,t);if(s)return Array.isArray(s)?s.map((function(e){return n(e,r,i,o)})):n(s,r,i,o)}));return Ye(r?i.reverse():i)}function it(e,t){return"function"!==typeof e&&(e=ee.extend(e)),e.options[t]}function ot(e){return rt(e,"beforeRouteLeave",at,!0)}function st(e){return rt(e,"beforeRouteUpdate",at)}function at(e,t){if(t)return function(){return e.apply(t,arguments)}}function ct(e){return rt(e,"beforeRouteEnter",(function(e,t,n,r){return ut(e,n,r)}))}function ut(e,t,n){return function(r,i,o){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),o(e)}))}}et.prototype.listen=function(e){this.cb=e},et.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},et.prototype.onError=function(e){this.errorCbs.push(e)},et.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(s){throw this.errorCbs.forEach((function(e){e(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(Ke(e,Me.redirected)&&o===m||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},et.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var o=function(e){!Ke(e)&&We(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},s=e.matched.length-1,a=i.matched.length-1;if(_(e,i)&&s===a&&e.matched[s]===i.matched[a])return this.ensureURL(),e.hash&&Ee(this.router,i,e,!1),o(Ue(i,e));var c=nt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(ot(l),this.router.beforeHooks,st(u),h.map((function(e){return e.beforeEnter})),Ge(h)),f=function(t,n){if(r.pending!==e)return o(Fe(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),o(Ve(i,e))):We(t)?(r.ensureURL(!0),o(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(o($e(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(s){o(s)}};qe(d,f,(function(){var n=ct(h),s=n.concat(r.router.resolveHooks);qe(s,f,(function(){if(r.pending!==e)return o(Fe(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){E(e)}))}))}))},et.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},et.prototype.setupListeners=function(){},et.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=m,this.pending=null};var lt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=ht(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=De&&n;r&&this.listeners.push(Ie());var i=function(){var n=e.current,i=ht(e.base);e.current===m&&i===e._startLocation||e.transitionTo(i,(function(e){r&&Ee(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Le(A(r.base+e.fullPath)),Ee(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){je(A(r.base+e.fullPath)),Ee(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(ht(this.base)!==this.current.fullPath){var t=A(this.base+this.current.fullPath);e?Le(t):je(t)}},t.prototype.getCurrentLocation=function(){return ht(this.base)},t}(et);function ht(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(A(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var dt=function(e){function t(t,n,r){e.call(this,t,n),r&&ft(this.base)||pt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=De&&n;r&&this.listeners.push(Ie());var i=function(){var t=e.current;pt()&&e.transitionTo(vt(),(function(n){r&&Ee(e.router,n,t,!0),De||yt(n.fullPath)}))},o=De?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){gt(e.fullPath),Ee(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){yt(e.fullPath),Ee(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;vt()!==t&&(e?gt(t):yt(t))},t.prototype.getCurrentLocation=function(){return vt()},t}(et);function ft(e){var t=ht(e);if(!/^\/#/.test(t))return window.location.replace(A(e+"/#"+t)),!0}function pt(){var e=vt();return"/"===e.charAt(0)||(yt("/"+e),!1)}function vt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function mt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function gt(e){De?Le(mt(e)):window.location.hash=e}function yt(e){De?je(mt(e)):window.location.replace(mt(e))}var _t=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){Ke(e,Me.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(et),bt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=fe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!De&&!1!==e.fallback,this.fallback&&(t="hash"),ce||(t="abstract"),this.mode=t,t){case"history":this.history=new lt(this,e.base);break;case"hash":this.history=new dt(this,e.base,this.fallback);break;case"abstract":this.history=new _t(this,e.base);break;default:0}},wt={currentRoute:{configurable:!0}};bt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},wt.currentRoute.get=function(){return this.history&&this.history.current},bt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof lt||n instanceof dt){var r=function(e){var r=n.current,i=t.options.scrollBehavior,o=De&&i;o&&"fullPath"in e&&Ee(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},bt.prototype.beforeEach=function(e){return Et(this.beforeHooks,e)},bt.prototype.beforeResolve=function(e){return Et(this.resolveHooks,e)},bt.prototype.afterEach=function(e){return Et(this.afterHooks,e)},bt.prototype.onReady=function(e,t){this.history.onReady(e,t)},bt.prototype.onError=function(e){this.history.onError(e)},bt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},bt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},bt.prototype.go=function(e){this.history.go(e)},bt.prototype.back=function(){this.go(-1)},bt.prototype.forward=function(){this.go(1)},bt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},bt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=Q(e,t,n,this),i=this.match(r,t),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=St(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},bt.prototype.getRoutes=function(){return this.matcher.getRoutes()},bt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},bt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(bt.prototype,wt);var It=bt;function Et(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function St(e,t,n){var r="hash"===n?"#"+t:t;return e?A(e+"/"+r):r}bt.install=ae,bt.version="3.6.5",bt.isNavigationFailure=Ke,bt.NavigationFailureType=Me,bt.START_LOCATION=m,ce&&window.Vue&&window.Vue.use(bt)},6193:function(e,t,n){var r=n(9504),i=Error,o=r("".replace),s=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},6249:function(e,t,n){var r=n(9039),i=n(6980);e.exports=!r((function(){var e=new Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},6269:function(e){e.exports={}},6279:function(e,t,n){var r=n(6840);e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},6319:function(e,t,n){var r=n(8551),i=n(9539);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(s){i(e,"throw",s)}}},6368:function(e,t,n){var r=n(6518),i=n(4576),o=n(9225).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==o},{clearImmediate:o})},6382:function(e,t,n){var r=n(9565),i=n(6840),o=n(5966),s=n(9297),a=n(8227),c=n(7657).IteratorPrototype,u=a("dispose");s(c,u)||i(c,u,(function(){var e=o(this,"return");e&&r(e,this)}))},6395:function(e){e.exports=!1},6400:function(e,t,n){n.d(t,{Wp:function(){return r.initializeApp}});var r=n(3405),i="firebase",o="11.9.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.registerVersion)(i,o,"app")},6518:function(e,t,n){var r=n(4576),i=n(7347).f,o=n(6699),s=n(6840),a=n(9433),c=n(7740),u=n(2796);e.exports=function(e,t){var n,l,h,d,f,p,v=e.target,m=e.global,g=e.stat;if(l=m?r:g?r[v]||a(v,{}):r[v]&&r[v].prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:v+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},6699:function(e,t,n){var r=n(3724),i=n(4913),o=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},6706:function(e,t,n){var r=n(9504),i=n(9306);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(o){}}},6801:function(e,t,n){var r=n(3724),i=n(8686),o=n(4913),s=n(8551),a=n(5397),c=n(1072);t.f=r&&!i?Object.defineProperties:function(e,t){s(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)o.f(e,n=i[l++],r[n]);return e}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},6840:function(e,t,n){var r=n(4901),i=n(4913),o=n(283),s=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&o(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},6848:function(e,t,n){n.d(t,{Ay:function(){return Zr}});n(4114),n(8111),n(1148),n(2489),n(7588),n(1701),n(8237),n(3579),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(9687),n(9848);var r=Object.freeze({}),i=Array.isArray;function o(e){return void 0===e||null===e}function s(e){return void 0!==e&&null!==e}function a(e){return!0===e}function c(e){return!1===e}function u(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return"function"===typeof e}function h(e){return null!==e&&"object"===typeof e}var d=Object.prototype.toString;function f(e){return"[object Object]"===d.call(e)}function p(e){return"[object RegExp]"===d.call(e)}function v(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function m(e){return s(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function g(e){return null==e?"":Array.isArray(e)||f(e)&&e.toString===d?JSON.stringify(e,y,2):String(e)}function y(e,t){return t&&t.__v_isRef?t.value:t}function _(e){var t=parseFloat(e);return isNaN(t)?e:t}function b(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}b("slot,component",!0);var w=b("key,ref,slot,slot-scope,is");function I(e,t){var n=e.length;if(n){if(t===e[n-1])return void(e.length=n-1);var r=e.indexOf(t);if(r>-1)return e.splice(r,1)}}var E=Object.prototype.hasOwnProperty;function S(e,t){return E.call(e,t)}function C(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var T=/-(\w)/g,O=C((function(e){return e.replace(T,(function(e,t){return t?t.toUpperCase():""}))})),k=C((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),A=/\B([A-Z])/g,R=C((function(e){return e.replace(A,"-$1").toLowerCase()}));function P(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function x(e,t){return e.bind(t)}var N=Function.prototype.bind?x:P;function D(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function L(e,t){for(var n in t)e[n]=t[n];return e}function j(e){for(var t={},n=0;n<e.length;n++)e[n]&&L(t,e[n]);return t}function M(e,t,n){}var $=function(e,t,n){return!1},U=function(e){return e};function F(e,t){if(e===t)return!0;var n=h(e),r=h(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return F(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var s=Object.keys(e),a=Object.keys(t);return s.length===a.length&&s.every((function(n){return F(e[n],t[n])}))}catch(c){return!1}}function V(e,t){for(var n=0;n<e.length;n++)if(F(e[n],t))return n;return-1}function H(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function z(e,t){return e===t?0===e&&1/e!==1/t:e===e||t===t}var B="data-server-rendered",W=["component","directive","filter"],K=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:$,isReservedAttr:$,isUnknownElement:$,getTagNamespace:M,parsePlatformTagName:U,mustUseProp:$,async:!0,_lifecycleHooks:K},G=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function J(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function Y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var X=new RegExp("[^".concat(G.source,".$_\\d]"));function Z(e){if(!X.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var Q="__proto__"in{},ee="undefined"!==typeof window,te=ee&&window.navigator.userAgent.toLowerCase(),ne=te&&/msie|trident/.test(te),re=te&&te.indexOf("msie 9.0")>0,ie=te&&te.indexOf("edge/")>0;te&&te.indexOf("android");var oe=te&&/iphone|ipad|ipod|ios/.test(te);te&&/chrome\/\d+/.test(te),te&&/phantomjs/.test(te);var se,ae=te&&te.match(/firefox\/(\d+)/),ce={}.watch,ue=!1;if(ee)try{var le={};Object.defineProperty(le,"passive",{get:function(){ue=!0}}),window.addEventListener("test-passive",null,le)}catch(Qs){}var he=function(){return void 0===se&&(se=!ee&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),se},de=ee&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function fe(e){return"function"===typeof e&&/native code/.test(e.toString())}var pe,ve="undefined"!==typeof Symbol&&fe(Symbol)&&"undefined"!==typeof Reflect&&fe(Reflect.ownKeys);pe="undefined"!==typeof Set&&fe(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var me=null;function ge(e){void 0===e&&(e=null),e||me&&me._scope.off(),me=e,e&&e._scope.on()}var ye=function(){function e(e,t,n,r,i,o,s,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),_e=function(e){void 0===e&&(e="");var t=new ye;return t.text=e,t.isComment=!0,t};function be(e){return new ye(void 0,void 0,void 0,String(e))}function we(e){var t=new ye(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}"function"===typeof SuppressedError&&SuppressedError;var Ie=0,Ee=[],Se=function(){for(var e=0;e<Ee.length;e++){var t=Ee[e];t.subs=t.subs.filter((function(e){return e})),t._pending=!1}Ee.length=0},Ce=function(){function e(){this._pending=!1,this.id=Ie++,this.subs=[]}return e.prototype.addSub=function(e){this.subs.push(e)},e.prototype.removeSub=function(e){this.subs[this.subs.indexOf(e)]=null,this._pending||(this._pending=!0,Ee.push(this))},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(e){var t=this.subs.filter((function(e){return e}));for(var n=0,r=t.length;n<r;n++){var i=t[n];0,i.update()}},e}();Ce.target=null;var Te=[];function Oe(e){Te.push(e),Ce.target=e}function ke(){Te.pop(),Ce.target=Te[Te.length-1]}var Ae=Array.prototype,Re=Object.create(Ae),Pe=["push","pop","shift","unshift","splice","sort","reverse"];Pe.forEach((function(e){var t=Ae[e];Y(Re,e,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=t.apply(this,n),s=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var xe=Object.getOwnPropertyNames(Re),Ne={},De=!0;function Le(e){De=e}var je={notify:M,depend:M,addSub:M,removeSub:M},Me=function(){function e(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),this.value=e,this.shallow=t,this.mock=n,this.dep=n?je:new Ce,this.vmCount=0,Y(e,"__ob__",this),i(e)){if(!n)if(Q)e.__proto__=Re;else for(var r=0,o=xe.length;r<o;r++){var s=xe[r];Y(e,s,Re[s])}t||this.observeArray(e)}else{var a=Object.keys(e);for(r=0;r<a.length;r++){s=a[r];Ue(e,s,Ne,void 0,t,n)}}}return e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)$e(e[t],!1,this.mock)},e}();function $e(e,t,n){return e&&S(e,"__ob__")&&e.__ob__ instanceof Me?e.__ob__:!De||!n&&he()||!i(e)&&!f(e)||!Object.isExtensible(e)||e.__v_skip||Ke(e)||e instanceof ye?void 0:new Me(e,t,n)}function Ue(e,t,n,r,o,s,a){void 0===a&&(a=!1);var c=new Ce,u=Object.getOwnPropertyDescriptor(e,t);if(!u||!1!==u.configurable){var l=u&&u.get,h=u&&u.set;l&&!h||n!==Ne&&2!==arguments.length||(n=e[t]);var d=o?n&&n.__ob__:$e(n,!1,s);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=l?l.call(e):n;return Ce.target&&(c.depend(),d&&(d.dep.depend(),i(t)&&He(t))),Ke(t)&&!o?t.value:t},set:function(t){var r=l?l.call(e):n;if(z(r,t)){if(h)h.call(e,t);else{if(l)return;if(!o&&Ke(r)&&!Ke(t))return void(r.value=t);n=t}d=o?t&&t.__ob__:$e(t,!1,s),c.notify()}}}),c}}function Fe(e,t,n){if(!We(e)){var r=e.__ob__;return i(e)&&v(t)?(e.length=Math.max(e.length,t),e.splice(t,1,n),r&&!r.shallow&&r.mock&&$e(n,!1,!0),n):t in e&&!(t in Object.prototype)?(e[t]=n,n):e._isVue||r&&r.vmCount?n:r?(Ue(r.value,t,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(e[t]=n,n)}}function Ve(e,t){if(i(e)&&v(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||We(e)||S(e,t)&&(delete e[t],n&&n.dep.notify())}}function He(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),i(t)&&He(t)}function ze(e){return Be(e,!0),Y(e,"__v_isShallow",!0),e}function Be(e,t){if(!We(e)){$e(e,t,he());0}}function We(e){return!(!e||!e.__v_isReadonly)}function Ke(e){return!(!e||!0!==e.__v_isRef)}function qe(e,t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){var e=t[n];if(Ke(e))return e.value;var r=e&&e.__ob__;return r&&r.dep.depend(),e},set:function(e){var r=t[n];Ke(r)&&!Ke(e)?r.value=e:t[n]=e}})}var Ge="watcher";"".concat(Ge," callback"),"".concat(Ge," getter"),"".concat(Ge," cleanup");var Je;var Ye=function(){function e(e){void 0===e&&(e=!1),this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Je,!e&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}return e.prototype.run=function(e){if(this.active){var t=Je;try{return Je=this,e()}finally{Je=t}}else 0},e.prototype.on=function(){Je=this},e.prototype.off=function(){Je=this.parent},e.prototype.stop=function(e){if(this.active){var t=void 0,n=void 0;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].teardown();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},e}();function Xe(e,t){void 0===t&&(t=Je),t&&t.active&&t.effects.push(e)}function Ze(){return Je}function Qe(e){var t=e._provided,n=e.$parent&&e.$parent._provided;return n===t?e._provided=Object.create(n):t}var et=C((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function tt(e,t){function n(){var e=n.fns;if(!i(e))return Xt(e,null,arguments,t,"v-on handler");for(var r=e.slice(),o=0;o<r.length;o++)Xt(r[o],null,arguments,t,"v-on handler")}return n.fns=e,n}function nt(e,t,n,r,i,s){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=et(c),o(u)||(o(l)?(o(u.fns)&&(u=e[c]=tt(u,s)),a(h.once)&&(u=e[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)o(e[c])&&(h=et(c),r(h.name,t[c],h.capture))}function rt(e,t,n){var r;e instanceof ye&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function c(){n.apply(this,arguments),I(r.fns,c)}o(i)?r=tt([c]):s(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=tt([i,c]),r.merged=!0,e[t]=r}function it(e,t,n){var r=t.options.props;if(!o(r)){var i={},a=e.attrs,c=e.props;if(s(a)||s(c))for(var u in r){var l=R(u);ot(i,c,u,l,!0)||ot(i,a,u,l,!1)}return i}}function ot(e,t,n,r,i){if(s(t)){if(S(t,n))return e[n]=t[n],i||delete t[n],!0;if(S(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function st(e){for(var t=0;t<e.length;t++)if(i(e[t]))return Array.prototype.concat.apply([],e);return e}function at(e){return u(e)?[be(e)]:i(e)?ut(e):void 0}function ct(e){return s(e)&&s(e.text)&&c(e.isComment)}function ut(e,t){var n,r,c,l,h=[];for(n=0;n<e.length;n++)r=e[n],o(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=ut(r,"".concat(t||"","_").concat(n)),ct(r[0])&&ct(l)&&(h[c]=be(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?ct(l)?h[c]=be(l.text+r):""!==r&&h.push(be(r)):ct(r)&&ct(l)?h[c]=be(l.text+r.text):(a(e._isVList)&&s(r.tag)&&o(r.key)&&s(t)&&(r.key="__vlist".concat(t,"_").concat(n,"__")),h.push(r)));return h}function lt(e,t){var n,r,o,a,c=null;if(i(e)||"string"===typeof e)for(c=new Array(e.length),n=0,r=e.length;n<r;n++)c[n]=t(e[n],n);else if("number"===typeof e)for(c=new Array(e),n=0;n<e;n++)c[n]=t(n+1,n);else if(h(e))if(ve&&e[Symbol.iterator]){c=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)c.push(t(l.value,c.length)),l=u.next()}else for(o=Object.keys(e),c=new Array(o.length),n=0,r=o.length;n<r;n++)a=o[n],c[n]=t(e[a],a,n);return s(c)||(c=[]),c._isVList=!0,c}function ht(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=L(L({},r),n)),i=o(n)||(l(t)?t():t)):i=this.$slots[e]||(l(t)?t():t);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function dt(e){return Cr(this.$options,"filters",e,!0)||U}function ft(e,t){return i(e)?-1===e.indexOf(t):e!==t}function pt(e,t,n,r,i){var o=q.keyCodes[t]||n;return i&&r&&!q.keyCodes[t]?ft(i,r):o?ft(o,e):r?R(r)!==t:void 0===e}function vt(e,t,n,r,o){if(n)if(h(n)){i(n)&&(n=j(n));var s=void 0,a=function(i){if("class"===i||"style"===i||w(i))s=e;else{var a=e.attrs&&e.attrs.type;s=r||q.mustUseProp(t,a,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=O(i),u=R(i);if(!(c in s)&&!(u in s)&&(s[i]=n[i],o)){var l=e.on||(e.on={});l["update:".concat(i)]=function(e){n[i]=e}}};for(var c in n)a(c)}else;return e}function mt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),yt(r,"__static__".concat(e),!1)),r}function gt(e,t,n){return yt(e,"__once__".concat(t).concat(n?"_".concat(n):""),!0),e}function yt(e,t,n){if(i(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&_t(e[r],"".concat(t,"_").concat(r),n);else _t(e,t,n)}function _t(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function bt(e,t){if(t)if(f(t)){var n=e.on=e.on?L({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function wt(e,t,n,r){t=t||{$stable:!n};for(var o=0;o<e.length;o++){var s=e[o];i(s)?wt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return r&&(t.$key=r),t}function It(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Et(e,t){return"string"===typeof e?t+e:e}function St(e){e._o=gt,e._n=_,e._s=g,e._l=lt,e._t=ht,e._q=F,e._i=V,e._m=mt,e._f=dt,e._k=pt,e._b=vt,e._v=be,e._e=_e,e._u=wt,e._g=bt,e._d=It,e._p=Et}function Ct(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==t&&o.fnContext!==t||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Tt)&&delete n[u];return n}function Tt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Ot(e){return e.isComment&&e.asyncFactory}function kt(e,t,n,i){var o,s=Object.keys(n).length>0,a=t?!!t.$stable:!s,c=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==r&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=At(e,n,u,t[u]))}else o={};for(var l in n)l in o||(o[l]=Rt(n,l));return t&&Object.isExtensible(t)&&(t._normalized=o),Y(o,"$stable",a),Y(o,"$key",c),Y(o,"$hasNormal",s),o}function At(e,t,n,r){var o=function(){var t=me;ge(e);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:at(n);var o=n&&n[0];return ge(t),n&&(!o||1===n.length&&o.isComment&&!Ot(o))?void 0:n};return r.proxy&&Object.defineProperty(t,n,{get:o,enumerable:!0,configurable:!0}),o}function Rt(e,t){return function(){return e[t]}}function Pt(e){var t=e.$options,n=t.setup;if(n){var r=e._setupContext=xt(e);ge(e),Oe();var i=Xt(n,null,[e._props||ze({}),r],e,"setup");if(ke(),ge(),l(i))t.render=i;else if(h(i))if(e._setupState=i,i.__sfc){var o=e._setupProxy={};for(var s in i)"__sfc"!==s&&qe(o,i,s)}else for(var s in i)J(s)||qe(e,i,s);else 0}}function xt(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};Y(t,"_v_attr_proxy",!0),Nt(t,e.$attrs,r,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};Nt(t,e.$listeners,r,e,"$listeners")}return e._listenersProxy},get slots(){return Lt(e)},emit:N(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return qe(e,t,n)}))}}}function Nt(e,t,n,r,i){var o=!1;for(var s in t)s in e?t[s]!==n[s]&&(o=!0):(o=!0,Dt(e,s,r,i));for(var s in e)s in t||(o=!0,delete e[s]);return o}function Dt(e,t,n,r){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n[r][t]}})}function Lt(e){return e._slotsProxy||jt(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function jt(e,t){for(var n in t)e[n]=t[n];for(var n in e)n in t||delete e[n]}function Mt(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=Ct(t._renderChildren,i),e.$scopedSlots=n?kt(e.$parent,n.data.scopedSlots,e.$slots):r,e._c=function(t,n,r,i){return Kt(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Kt(e,t,n,r,i,!0)};var o=n&&n.data;Ue(e,"$attrs",o&&o.attrs||r,null,!0),Ue(e,"$listeners",t._parentListeners||r,null,!0)}var $t=null;function Ut(e){St(e.prototype),e.prototype.$nextTick=function(e){return ln(e,this)},e.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t._parentVnode;r&&e._isMounted&&(e.$scopedSlots=kt(e.$parent,r.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&jt(e._slotsProxy,e.$scopedSlots)),e.$vnode=r;var o,s=me,a=$t;try{ge(e),$t=e,o=n.call(e._renderProxy,e.$createElement)}catch(Qs){Yt(Qs,e,"render"),o=e._vnode}finally{$t=a,ge(s)}return i(o)&&1===o.length&&(o=o[0]),o instanceof ye||(o=_e()),o.parent=r,o}}function Ft(e,t){return(e.__esModule||ve&&"Module"===e[Symbol.toStringTag])&&(e=e.default),h(e)?t.extend(e):e}function Vt(e,t,n,r,i){var o=_e();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function Ht(e,t){if(a(e.error)&&s(e.errorComp))return e.errorComp;if(s(e.resolved))return e.resolved;var n=$t;if(n&&s(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),a(e.loading)&&s(e.loadingComp))return e.loadingComp;if(n&&!s(e.owners)){var r=e.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return I(r,n)}));var l=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=H((function(n){e.resolved=Ft(n,t),i?r.length=0:l(!0)})),f=H((function(t){s(e.errorComp)&&(e.error=!0,l(!0))})),p=e(d,f);return h(p)&&(m(p)?o(e.resolved)&&p.then(d,f):m(p.component)&&(p.component.then(d,f),s(p.error)&&(e.errorComp=Ft(p.error,t)),s(p.loading)&&(e.loadingComp=Ft(p.loading,t),0===p.delay?e.loading=!0:c=setTimeout((function(){c=null,o(e.resolved)&&o(e.error)&&(e.loading=!0,l(!1))}),p.delay||200)),s(p.timeout)&&(u=setTimeout((function(){u=null,o(e.resolved)&&f(null)}),p.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function zt(e){if(i(e))for(var t=0;t<e.length;t++){var n=e[t];if(s(n)&&(s(n.componentOptions)||Ot(n)))return n}}var Bt=1,Wt=2;function Kt(e,t,n,r,o,s){return(i(n)||u(n))&&(o=r,r=n,n=void 0),a(s)&&(o=Wt),qt(e,t,n,r,o)}function qt(e,t,n,r,o){if(s(n)&&s(n.__ob__))return _e();if(s(n)&&s(n.is)&&(t=n.is),!t)return _e();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===Wt?r=at(r):o===Bt&&(r=st(r)),"string"===typeof t){var u=void 0;c=e.$vnode&&e.$vnode.ns||q.getTagNamespace(t),a=q.isReservedTag(t)?new ye(q.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!s(u=Cr(e.$options,"components",t))?new ye(t,n,r,void 0,void 0,e):cr(u,n,e,r,t)}else a=cr(t,n,e,r);return i(a)?a:s(a)?(s(c)&&Gt(a,c),s(n)&&Jt(n),a):_e()}function Gt(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),s(e.children))for(var r=0,i=e.children.length;r<i;r++){var c=e.children[r];s(c.tag)&&(o(c.ns)||a(n)&&"svg"!==c.tag)&&Gt(c,t,n)}}function Jt(e){h(e.style)&&vn(e.style),h(e.class)&&vn(e.class)}function Yt(e,t,n){Oe();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,e,t,n);if(s)return}catch(Qs){Zt(Qs,r,"errorCaptured hook")}}}Zt(e,t,n)}finally{ke()}}function Xt(e,t,n,r,i){var o;try{o=n?e.apply(t,n):e.call(t),o&&!o._isVue&&m(o)&&!o._handled&&(o.catch((function(e){return Yt(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(Qs){Yt(Qs,r,i)}return o}function Zt(e,t,n){if(q.errorHandler)try{return q.errorHandler.call(null,e,t,n)}catch(Qs){Qs!==e&&Qt(Qs,null,"config.errorHandler")}Qt(e,t,n)}function Qt(e,t,n){if(!ee||"undefined"===typeof console)throw e;console.error(e)}var en,tn=!1,nn=[],rn=!1;function on(){rn=!1;var e=nn.slice(0);nn.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&fe(Promise)){var sn=Promise.resolve();en=function(){sn.then(on),oe&&setTimeout(M)},tn=!0}else if(ne||"undefined"===typeof MutationObserver||!fe(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())en="undefined"!==typeof setImmediate&&fe(setImmediate)?function(){setImmediate(on)}:function(){setTimeout(on,0)};else{var an=1,cn=new MutationObserver(on),un=document.createTextNode(String(an));cn.observe(un,{characterData:!0}),en=function(){an=(an+1)%2,un.data=String(an)},tn=!0}function ln(e,t){var n;if(nn.push((function(){if(e)try{e.call(t)}catch(Qs){Yt(Qs,t,"nextTick")}else n&&n(t)})),rn||(rn=!0,en()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}function hn(e){return function(t,n){if(void 0===n&&(n=me),n)return dn(n,e,t)}}function dn(e,t,n){var r=e.$options;r[t]=gr(r[t],n)}hn("beforeMount"),hn("mounted"),hn("beforeUpdate"),hn("updated"),hn("beforeDestroy"),hn("destroyed"),hn("activated"),hn("deactivated"),hn("serverPrefetch"),hn("renderTracked"),hn("renderTriggered"),hn("errorCaptured");var fn="2.7.16";var pn=new pe;function vn(e){return mn(e,pn),pn.clear(),e}function mn(e,t){var n,r,o=i(e);if(!(!o&&!h(e)||e.__v_skip||Object.isFrozen(e)||e instanceof ye)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(o){n=e.length;while(n--)mn(e[n],t)}else if(Ke(e))mn(e.value,t);else{r=Object.keys(e),n=r.length;while(n--)mn(e[r[n]],t)}}}var gn,yn=0,_n=function(){function e(e,t,n,r,i){Xe(this,Je&&!Je._vm?Je:e?e._scope:void 0),(this.vm=e)&&i&&(e._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++yn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pe,this.newDepIds=new pe,this.expression="",l(t)?this.getter=t:(this.getter=Z(t),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){var e;Oe(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Qs){if(!this.user)throw Qs;Yt(Qs,t,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&vn(e),ke(),this.cleanupDeps()}return e},e.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},e.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Xn(this)},e.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||h(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'.concat(this.expression,'"');Xt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&I(this.vm._scope.effects,this),this.active){var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function bn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Sn(e,t)}function wn(e,t){gn.$on(e,t)}function In(e,t){gn.$off(e,t)}function En(e,t){var n=gn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function Sn(e,t,n){gn=e,nt(t,n||{},wn,In,En,e),gn=void 0}function Cn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(i(e))for(var o=0,s=e.length;o<s;o++)r.$on(e[o],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(e)){for(var r=0,o=e.length;r<o;r++)n.$off(e[r],t);return n}var s,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;var c=a.length;while(c--)if(s=a[c],s===t||s.fn===t){a.splice(c,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?D(n):n;for(var r=D(arguments,1),i='event handler for "'.concat(e,'"'),o=0,s=n.length;o<s;o++)Xt(n[o],t,r,t,i)}return t}}var Tn=null;function On(e){var t=Tn;return Tn=e,function(){Tn=t}}function kn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._provided=n?n._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function An(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=On(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var s=n;while(s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode)s.$parent.$el=s.$el,s=s.$parent},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ln(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||I(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ln(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Rn(e,t,n){var r;e.$el=t,e.$options.render||(e.$options.render=_e),Ln(e,"beforeMount"),r=function(){e._update(e._render(),n)};var i={before:function(){e._isMounted&&!e._isDestroyed&&Ln(e,"beforeUpdate")}};new _n(e,r,M,i,!0),n=!1;var o=e._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==e.$vnode&&(e._isMounted=!0,Ln(e,"mounted")),e}function Pn(e,t,n,i,o){var s=i.data.scopedSlots,a=e.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&e.$scopedSlots.$key!==s.$key||!s&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o;var h=i.data.attrs||r;e._attrsProxy&&Nt(e._attrsProxy,h,l.data&&l.data.attrs||r,e,"$attrs")&&(u=!0),e.$attrs=h,n=n||r;var d=e.$options._parentListeners;if(e._listenersProxy&&Nt(e._listenersProxy,n,d||r,e,"$listeners"),e.$listeners=e.$options._parentListeners=n,Sn(e,n,d),t&&e.$options.props){Le(!1);for(var f=e._props,p=e.$options._propKeys||[],v=0;v<p.length;v++){var m=p[v],g=e.$options.props;f[m]=Tr(m,g,t,e)}Le(!0),e.$options.propsData=t}u&&(e.$slots=Ct(o,i.context),e.$forceUpdate())}function xn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Nn(e,t){if(t){if(e._directInactive=!1,xn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Nn(e.$children[n]);Ln(e,"activated")}}function Dn(e,t){if((!t||(e._directInactive=!0,!xn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Dn(e.$children[n]);Ln(e,"deactivated")}}function Ln(e,t,n,r){void 0===r&&(r=!0),Oe();var i=me,o=Ze();r&&ge(e);var s=e.$options[t],a="".concat(t," hook");if(s)for(var c=0,u=s.length;c<u;c++)Xt(s[c],e,n||null,e,a);e._hasHookEvent&&e.$emit("hook:"+t),r&&(ge(i),o&&o.on()),ke()}var jn=[],Mn=[],$n={},Un=!1,Fn=!1,Vn=0;function Hn(){Vn=jn.length=Mn.length=0,$n={},Un=Fn=!1}var zn=0,Bn=Date.now;if(ee&&!ne){var Wn=window.performance;Wn&&"function"===typeof Wn.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return Wn.now()})}var Kn=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function qn(){var e,t;for(zn=Bn(),Fn=!0,jn.sort(Kn),Vn=0;Vn<jn.length;Vn++)e=jn[Vn],e.before&&e.before(),t=e.id,$n[t]=null,e.run();var n=Mn.slice(),r=jn.slice();Hn(),Yn(n),Gn(r),Se(),de&&q.devtools&&de.emit("flush")}function Gn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Ln(r,"updated")}}function Jn(e){e._inactive=!1,Mn.push(e)}function Yn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Nn(e[t],!0)}function Xn(e){var t=e.id;if(null==$n[t]&&(e!==Ce.target||!e.noRecurse)){if($n[t]=!0,Fn){var n=jn.length-1;while(n>Vn&&jn[n].id>e.id)n--;jn.splice(n+1,0,e)}else jn.push(e);Un||(Un=!0,ln(qn))}}function Zn(e){var t=e.$options.provide;if(t){var n=l(t)?t.call(e):t;if(!h(n))return;for(var r=Qe(e),i=ve?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Qn(e){var t=er(e.$options.inject,e);t&&(Le(!1),Object.keys(t).forEach((function(n){Ue(e,n,t[n])})),Le(!0))}function er(e,t){if(e){for(var n=Object.create(null),r=ve?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=e[o].from;if(s in t._provided)n[o]=t._provided[s];else if("default"in e[o]){var a=e[o].default;n[o]=l(a)?a.call(t):a}else 0}}return n}}function tr(e,t,n,o,s){var c,u=this,l=s.options;S(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var h=a(l._compiled),d=!h;this.data=e,this.props=t,this.children=n,this.parent=o,this.listeners=e.on||r,this.injections=er(l.inject,o),this.slots=function(){return u.$slots||kt(o,e.scopedSlots,u.$slots=Ct(n,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return kt(o,e.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=kt(o,e.scopedSlots,this.$slots)),l._scopeId?this._c=function(e,t,n,r){var s=Kt(c,e,t,n,r,d);return s&&!i(s)&&(s.fnScopeId=l._scopeId,s.fnContext=o),s}:this._c=function(e,t,n,r){return Kt(c,e,t,n,r,d)}}function nr(e,t,n,o,a){var c=e.options,u={},l=c.props;if(s(l))for(var h in l)u[h]=Tr(h,l,t||r);else s(n.attrs)&&ir(u,n.attrs),s(n.props)&&ir(u,n.props);var d=new tr(n,u,a,o,e),f=c.render.call(null,d._c,d);if(f instanceof ye)return rr(f,n,d.parent,c,d);if(i(f)){for(var p=at(f)||[],v=new Array(p.length),m=0;m<p.length;m++)v[m]=rr(p[m],n,d.parent,c,d);return v}}function rr(e,t,n,r,i){var o=we(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function ir(e,t){for(var n in t)e[O(n)]=t[n]}function or(e){return e.name||e.__name||e._componentTag}St(tr.prototype);var sr={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;sr.prepatch(n,n)}else{var r=e.componentInstance=ur(e,Tn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;Pn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Ln(n,"mounted")),e.data.keepAlive&&(t._isMounted?Jn(n):Nn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Dn(t,!0):t.$destroy())}},ar=Object.keys(sr);function cr(e,t,n,r,i){if(!o(e)){var c=n.$options._base;if(h(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(o(e.cid)&&(u=e,e=Ht(u,c),void 0===e))return Vt(u,t,n,r,i);t=t||{},Yr(e),s(t.model)&&dr(e.options,t);var l=it(t,e,i);if(a(e.options.functional))return nr(e,l,t,n,r);var d=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}lr(t);var p=or(e.options)||i,v=new ye("vue-component-".concat(e.cid).concat(p?"-".concat(p):""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:l,listeners:d,tag:i,children:r},u);return v}}}function ur(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function lr(e){for(var t=e.hook||(e.hook={}),n=0;n<ar.length;n++){var r=ar[n],i=t[r],o=sr[r];i===o||i&&i._merged||(t[r]=i?hr(o,i):o)}}function hr(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function dr(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var o=t.on||(t.on={}),a=o[r],c=t.model.callback;s(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(o[r]=[c].concat(a)):o[r]=c}var fr=M,pr=q.optionMergeStrategies;function vr(e,t,n){if(void 0===n&&(n=!0),!t)return e;for(var r,i,o,s=ve?Reflect.ownKeys(t):Object.keys(t),a=0;a<s.length;a++)r=s[a],"__ob__"!==r&&(i=e[r],o=t[r],n&&S(e,r)?i!==o&&f(i)&&f(o)&&vr(i,o):Fe(e,r,o));return e}function mr(e,t,n){return n?function(){var r=l(t)?t.call(n,n):t,i=l(e)?e.call(n,n):e;return r?vr(r,i):i}:t?e?function(){return vr(l(t)?t.call(this,this):t,l(e)?e.call(this,this):e)}:t:e}function gr(e,t){var n=t?e?e.concat(t):i(t)?t:[t]:e;return n?yr(n):n}function yr(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function _r(e,t,n,r){var i=Object.create(e||null);return t?L(i,t):i}pr.data=function(e,t,n){return n?mr(e,t,n):t&&"function"!==typeof t?e:mr(e,t)},K.forEach((function(e){pr[e]=gr})),W.forEach((function(e){pr[e+"s"]=_r})),pr.watch=function(e,t,n,r){if(e===ce&&(e=void 0),t===ce&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var o={};for(var s in L(o,e),t){var a=o[s],c=t[s];a&&!i(a)&&(a=[a]),o[s]=a?a.concat(c):i(c)?c:[c]}return o},pr.props=pr.methods=pr.inject=pr.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return L(i,e),t&&L(i,t),i},pr.provide=function(e,t){return e?function(){var n=Object.create(null);return vr(n,l(e)?e.call(this):e),t&&vr(n,l(t)?t.call(this):t,!1),n}:t};var br=function(e,t){return void 0===t?e:t};function wr(e,t){var n=e.props;if(n){var r,o,s,a={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(s=O(o),a[s]={type:null})}else if(f(n))for(var c in n)o=n[c],s=O(c),a[s]=f(o)?o:{type:o};else 0;e.props=a}}function Ir(e,t){var n=e.inject;if(n){var r=e.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var s in n){var a=n[s];r[s]=f(a)?L({from:s},a):{from:a}}else 0}}function Er(e){var t=e.directives;if(t)for(var n in t){var r=t[n];l(r)&&(t[n]={bind:r,update:r})}}function Sr(e,t,n){if(l(t)&&(t=t.options),wr(t,n),Ir(t,n),Er(t),!t._base&&(t.extends&&(e=Sr(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Sr(e,t.mixins[r],n);var o,s={};for(o in e)a(o);for(o in t)S(e,o)||a(o);function a(r){var i=pr[r]||br;s[r]=i(e[r],t[r],n,r)}return s}function Cr(e,t,n,r){if("string"===typeof n){var i=e[t];if(S(i,n))return i[n];var o=O(n);if(S(i,o))return i[o];var s=k(o);if(S(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Tr(e,t,n,r){var i=t[e],o=!S(n,e),s=n[e],a=Pr(Boolean,i.type);if(a>-1)if(o&&!S(i,"default"))s=!1;else if(""===s||s===R(e)){var c=Pr(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Or(r,i,e);var u=De;Le(!0),$e(s),Le(u)}return s}function Or(e,t,n){if(S(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:l(r)&&"Function"!==Ar(t.type)?r.call(e):r}}var kr=/^\s*function (\w+)/;function Ar(e){var t=e&&e.toString().match(kr);return t?t[1]:""}function Rr(e,t){return Ar(e)===Ar(t)}function Pr(e,t){if(!i(t))return Rr(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Rr(t[n],e))return n;return-1}var xr={enumerable:!0,configurable:!0,get:M,set:M};function Nr(e,t,n){xr.get=function(){return this[t][n]},xr.set=function(e){this[t][n]=e},Object.defineProperty(e,n,xr)}function Dr(e){var t=e.$options;if(t.props&&Lr(e,t.props),Pt(e),t.methods&&zr(e,t.methods),t.data)jr(e);else{var n=$e(e._data={});n&&n.vmCount++}t.computed&&Ur(e,t.computed),t.watch&&t.watch!==ce&&Br(e,t.watch)}function Lr(e,t){var n=e.$options.propsData||{},r=e._props=ze({}),i=e.$options._propKeys=[],o=!e.$parent;o||Le(!1);var s=function(o){i.push(o);var s=Tr(o,t,n,e);Ue(r,o,s,void 0,!0),o in e||Nr(e,"_props",o)};for(var a in t)s(a);Le(!0)}function jr(e){var t=e.$options.data;t=e._data=l(t)?Mr(t,e):t||{},f(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var o=n[i];0,r&&S(r,o)||J(o)||Nr(e,"_data",o)}var s=$e(t);s&&s.vmCount++}function Mr(e,t){Oe();try{return e.call(t,t)}catch(Qs){return Yt(Qs,t,"data()"),{}}finally{ke()}}var $r={lazy:!0};function Ur(e,t){var n=e._computedWatchers=Object.create(null),r=he();for(var i in t){var o=t[i],s=l(o)?o:o.get;0,r||(n[i]=new _n(e,s||M,M,$r)),i in e||Fr(e,i,o)}}function Fr(e,t,n){var r=!he();l(n)?(xr.get=r?Vr(t):Hr(n),xr.set=M):(xr.get=n.get?r&&!1!==n.cache?Vr(t):Hr(n.get):M,xr.set=n.set||M),Object.defineProperty(e,t,xr)}function Vr(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),Ce.target&&t.depend(),t.value}}function Hr(e){return function(){return e.call(this,this)}}function zr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?M:N(t[n],e)}function Br(e,t){for(var n in t){var r=t[n];if(i(r))for(var o=0;o<r.length;o++)Wr(e,n,r[o]);else Wr(e,n,r)}}function Wr(e,t,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function Kr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Fe,e.prototype.$delete=Ve,e.prototype.$watch=function(e,t,n){var r=this;if(f(t))return Wr(r,e,t,n);n=n||{},n.user=!0;var i=new _n(r,e,t,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');Oe(),Xt(t,r,[i.value],r,o),ke()}return function(){i.teardown()}}}var qr=0;function Gr(e){e.prototype._init=function(e){var t=this;t._uid=qr++,t._isVue=!0,t.__v_skip=!0,t._scope=new Ye(!0),t._scope.parent=void 0,t._scope._vm=!0,e&&e._isComponent?Jr(t,e):t.$options=Sr(Yr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,kn(t),bn(t),Mt(t),Ln(t,"beforeCreate",void 0,!1),Qn(t),Dr(t),Zn(t),Ln(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Jr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Yr(e){var t=e.options;if(e.super){var n=Yr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Xr(e);i&&L(e.extendOptions,i),t=e.options=Sr(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Xr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Zr(e){this._init(e)}function Qr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=D(arguments,1);return n.unshift(this),l(e.install)?e.install.apply(e,n):l(e)&&e.apply(null,n),t.push(e),this}}function ei(e){e.mixin=function(e){return this.options=Sr(this.options,e),this}}function ti(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=or(e)||or(n.options);var s=function(e){this._init(e)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=t++,s.options=Sr(n.options,e),s["super"]=n,s.options.props&&ni(s),s.options.computed&&ri(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,W.forEach((function(e){s[e]=n[e]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=e,s.sealedOptions=L({},s.options),i[r]=s,s}}function ni(e){var t=e.options.props;for(var n in t)Nr(e.prototype,"_props",n)}function ri(e){var t=e.options.computed;for(var n in t)Fr(e.prototype,n,t[n])}function ii(e){W.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&l(n)&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function oi(e){return e&&(or(e.Ctor.options)||e.tag)}function si(e,t){return i(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!p(e)&&e.test(t)}function ai(e,t){var n=e.cache,r=e.keys,i=e._vnode,o=e.$vnode;for(var s in n){var a=n[s];if(a){var c=a.name;c&&!t(c)&&ci(n,s,r,i)}}o.componentOptions.children=void 0}function ci(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,I(n,t)}Gr(Zr),Kr(Zr),Cn(Zr),An(Zr),Ut(Zr);var ui=[String,RegExp,Array],li={name:"keep-alive",abstract:!0,props:{include:ui,exclude:ui,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;t[i]={name:oi(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&ci(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)ci(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){ai(e,(function(e){return si(t,e)}))})),this.$watch("exclude",(function(t){ai(e,(function(e){return!si(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=zt(e),n=t&&t.componentOptions;if(n){var r=oi(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!si(o,r))||s&&r&&si(s,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,I(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},hi={KeepAlive:li};function di(e){var t={get:function(){return q}};Object.defineProperty(e,"config",t),e.util={warn:fr,extend:L,mergeOptions:Sr,defineReactive:Ue},e.set=Fe,e.delete=Ve,e.nextTick=ln,e.observable=function(e){return $e(e),e},e.options=Object.create(null),W.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,L(e.options.components,hi),Qr(e),ei(e),ti(e),ii(e)}di(Zr),Object.defineProperty(Zr.prototype,"$isServer",{get:he}),Object.defineProperty(Zr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Zr,"FunctionalRenderContext",{value:tr}),Zr.version=fn;var fi=b("style,class"),pi=b("input,textarea,option,select,progress"),vi=function(e,t,n){return"value"===n&&pi(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},mi=b("contenteditable,draggable,spellcheck"),gi=b("events,caret,typing,plaintext-only"),yi=function(e,t){return Ei(t)||"false"===t?"false":"contenteditable"===e&&gi(t)?t:"true"},_i=b("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),bi="http://www.w3.org/1999/xlink",wi=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Ii=function(e){return wi(e)?e.slice(6,e.length):""},Ei=function(e){return null==e||!1===e};function Si(e){var t=e.data,n=e,r=e;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Ci(r.data,t));while(s(n=n.parent))n&&n.data&&(t=Ci(t,n.data));return Ti(t.staticClass,t.class)}function Ci(e,t){return{staticClass:Oi(e.staticClass,t.staticClass),class:s(e.class)?[e.class,t.class]:t.class}}function Ti(e,t){return s(e)||s(t)?Oi(e,ki(t)):""}function Oi(e,t){return e?t?e+" "+t:e:t||""}function ki(e){return Array.isArray(e)?Ai(e):h(e)?Ri(e):"string"===typeof e?e:""}function Ai(e){for(var t,n="",r=0,i=e.length;r<i;r++)s(t=ki(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function Ri(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var Pi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},xi=b("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ni=b("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Di=function(e){return xi(e)||Ni(e)};function Li(e){return Ni(e)?"svg":"math"===e?"math":void 0}var ji=Object.create(null);function Mi(e){if(!ee)return!0;if(Di(e))return!1;if(e=e.toLowerCase(),null!=ji[e])return ji[e];var t=document.createElement(e);return e.indexOf("-")>-1?ji[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ji[e]=/HTMLUnknownElement/.test(t.toString())}var $i=b("text,number,password,search,email,tel,url");function Ui(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function Fi(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Vi(e,t){return document.createElementNS(Pi[e],t)}function Hi(e){return document.createTextNode(e)}function zi(e){return document.createComment(e)}function Bi(e,t,n){e.insertBefore(t,n)}function Wi(e,t){e.removeChild(t)}function Ki(e,t){e.appendChild(t)}function qi(e){return e.parentNode}function Gi(e){return e.nextSibling}function Ji(e){return e.tagName}function Yi(e,t){e.textContent=t}function Xi(e,t){e.setAttribute(t,"")}var Zi=Object.freeze({__proto__:null,createElement:Fi,createElementNS:Vi,createTextNode:Hi,createComment:zi,insertBefore:Bi,removeChild:Wi,appendChild:Ki,parentNode:qi,nextSibling:Gi,tagName:Ji,setTextContent:Yi,setStyleScope:Xi}),Qi={create:function(e,t){eo(t)},update:function(e,t){e.data.ref!==t.data.ref&&(eo(e,!0),eo(t))},destroy:function(e){eo(e,!0)}};function eo(e,t){var n=e.data.ref;if(s(n)){var r=e.context,o=e.componentInstance||e.elm,a=t?null:o,c=t?void 0:o;if(l(n))Xt(n,r,[a],r,"template ref function");else{var u=e.data.refInFor,h="string"===typeof n||"number"===typeof n,d=Ke(n),f=r.$refs;if(h||d)if(u){var p=h?f[n]:n.value;t?i(p)&&I(p,o):i(p)?p.includes(o)||p.push(o):h?(f[n]=[o],to(r,n,f[n])):n.value=[o]}else if(h){if(t&&f[n]!==o)return;f[n]=c,to(r,n,a)}else if(d){if(t&&n.value!==o)return;n.value=a}else 0}}}function to(e,t,n){var r=e._setupState;r&&S(r,t)&&(Ke(r[t])?r[t].value=n:r[t]=n)}var no=new ye("",{},[]),ro=["create","activate","update","remove","destroy"];function io(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&s(e.data)===s(t.data)&&oo(e,t)||a(e.isAsyncPlaceholder)&&o(t.asyncFactory.error))}function oo(e,t){if("input"!==e.tag)return!0;var n,r=s(n=e.data)&&s(n=n.attrs)&&n.type,i=s(n=t.data)&&s(n=n.attrs)&&n.type;return r===i||$i(r)&&$i(i)}function so(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,s(i)&&(o[i]=r);return o}function ao(e){var t,n,r={},c=e.modules,l=e.nodeOps;for(t=0;t<ro.length;++t)for(r[ro[t]]=[],n=0;n<c.length;++n)s(c[n][ro[t]])&&r[ro[t]].push(c[n][ro[t]]);function h(e){return new ye(l.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&f(e)}return n.listeners=t,n}function f(e){var t=l.parentNode(e);s(t)&&l.removeChild(t,e)}function p(e,t,n,r,i,o,c){if(s(e.elm)&&s(o)&&(e=o[c]=we(e)),e.isRootInsert=!i,!v(e,t,n,r)){var u=e.data,h=e.children,d=e.tag;s(d)?(e.elm=e.ns?l.createElementNS(e.ns,d):l.createElement(d,e),E(e),_(e,h,t),s(u)&&I(e,t),y(n,e.elm,r)):a(e.isComment)?(e.elm=l.createComment(e.text),y(n,e.elm,r)):(e.elm=l.createTextNode(e.text),y(n,e.elm,r))}}function v(e,t,n,r){var i=e.data;if(s(i)){var o=s(e.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(e,!1),s(e.componentInstance))return m(e,t),y(n,e.elm,r),a(o)&&g(e,t,n,r),!0}}function m(e,t){s(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,w(e)?(I(e,t),E(e)):(eo(e),t.push(e))}function g(e,t,n,i){var o,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](no,a);t.push(a);break}y(n,e.elm,i)}function y(e,t,n){s(e)&&(s(n)?l.parentNode(n)===e&&l.insertBefore(e,t,n):l.appendChild(e,t))}function _(e,t,n){if(i(t)){0;for(var r=0;r<t.length;++r)p(t[r],n,e.elm,null,!0,t,r)}else u(e.text)&&l.appendChild(e.elm,l.createTextNode(String(e.text)))}function w(e){while(e.componentInstance)e=e.componentInstance._vnode;return s(e.tag)}function I(e,n){for(var i=0;i<r.create.length;++i)r.create[i](no,e);t=e.data.hook,s(t)&&(s(t.create)&&t.create(no,e),s(t.insert)&&n.push(e))}function E(e){var t;if(s(t=e.fnScopeId))l.setStyleScope(e.elm,t);else{var n=e;while(n)s(t=n.context)&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t),n=n.parent}s(t=Tn)&&t!==e.context&&t!==e.fnContext&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t)}function S(e,t,n,r,i,o){for(;r<=i;++r)p(n[r],o,e,t,!1,n,r)}function C(e){var t,n,i=e.data;if(s(i))for(s(t=i.hook)&&s(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(s(t=e.children))for(n=0;n<e.children.length;++n)C(e.children[n])}function T(e,t,n){for(;t<=n;++t){var r=e[t];s(r)&&(s(r.tag)?(O(r),C(r)):f(r.elm))}}function O(e,t){if(s(t)||s(e.data)){var n,i=r.remove.length+1;for(s(t)?t.listeners+=i:t=d(e.elm,i),s(n=e.componentInstance)&&s(n=n._vnode)&&s(n.data)&&O(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);s(n=e.data.hook)&&s(n=n.remove)?n(e,t):t()}else f(e.elm)}function k(e,t,n,r,i){var a,c,u,h,d=0,f=0,v=t.length-1,m=t[0],g=t[v],y=n.length-1,_=n[0],b=n[y],w=!i;while(d<=v&&f<=y)o(m)?m=t[++d]:o(g)?g=t[--v]:io(m,_)?(R(m,_,r,n,f),m=t[++d],_=n[++f]):io(g,b)?(R(g,b,r,n,y),g=t[--v],b=n[--y]):io(m,b)?(R(m,b,r,n,y),w&&l.insertBefore(e,m.elm,l.nextSibling(g.elm)),m=t[++d],b=n[--y]):io(g,_)?(R(g,_,r,n,f),w&&l.insertBefore(e,g.elm,m.elm),g=t[--v],_=n[++f]):(o(a)&&(a=so(t,d,v)),c=s(_.key)?a[_.key]:A(_,t,d,v),o(c)?p(_,r,e,m.elm,!1,n,f):(u=t[c],io(u,_)?(R(u,_,r,n,f),t[c]=void 0,w&&l.insertBefore(e,u.elm,m.elm)):p(_,r,e,m.elm,!1,n,f)),_=n[++f]);d>v?(h=o(n[y+1])?null:n[y+1].elm,S(e,h,n,f,y,r)):f>y&&T(t,d,v)}function A(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(s(o)&&io(e,o))return i}}function R(e,t,n,i,c,u){if(e!==t){s(t.elm)&&s(i)&&(t=i[c]=we(t));var h=t.elm=e.elm;if(a(e.isAsyncPlaceholder))s(t.asyncFactory.resolved)?N(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;s(f)&&s(d=f.hook)&&s(d=d.prepatch)&&d(e,t);var p=e.children,v=t.children;if(s(f)&&w(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);s(d=f.hook)&&s(d=d.update)&&d(e,t)}o(t.text)?s(p)&&s(v)?p!==v&&k(h,p,v,n,u):s(v)?(s(e.text)&&l.setTextContent(h,""),S(h,null,v,0,v.length-1,n)):s(p)?T(p,0,p.length-1):s(e.text)&&l.setTextContent(h,""):e.text!==t.text&&l.setTextContent(h,t.text),s(f)&&s(d=f.hook)&&s(d=d.postpatch)&&d(e,t)}}}function P(e,t,n){if(a(n)&&s(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var x=b("attrs,class,staticClass,staticStyle,key");function N(e,t,n,r){var i,o=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,a(t.isComment)&&s(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(t,!0),s(i=t.componentInstance)))return m(t,n),!0;if(s(o)){if(s(u))if(e.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!N(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else _(t,u,n);if(s(c)){var f=!1;for(var p in c)if(!x(p)){f=!0,I(t,n);break}!f&&c["class"]&&vn(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,i){if(!o(t)){var c=!1,u=[];if(o(e))c=!0,p(t,u);else{var d=s(e.nodeType);if(!d&&io(e,t))R(e,t,u,null,null,i);else{if(d){if(1===e.nodeType&&e.hasAttribute(B)&&(e.removeAttribute(B),n=!0),a(n)&&N(e,t,u))return P(t,u,!0),e;e=h(e)}var f=e.elm,v=l.parentNode(f);if(p(t,u,f._leaveCb?null:v,l.nextSibling(f)),s(t.parent)){var m=t.parent,g=w(t);while(m){for(var y=0;y<r.destroy.length;++y)r.destroy[y](m);if(m.elm=t.elm,g){for(var _=0;_<r.create.length;++_)r.create[_](no,m);var b=m.data.hook.insert;if(b.merged)for(var I=b.fns.slice(1),E=0;E<I.length;E++)I[E]()}else eo(m);m=m.parent}}s(v)?T([e],0,0):s(e.tag)&&C(e)}}return P(t,u,c),t.elm}s(e)&&C(e)}}var co={create:uo,update:uo,destroy:function(e){uo(e,no)}};function uo(e,t){(e.data.directives||t.data.directives)&&lo(e,t)}function lo(e,t){var n,r,i,o=e===no,s=t===no,a=fo(e.data.directives,e.context),c=fo(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,vo(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(vo(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)vo(u[n],"inserted",t,e)};o?rt(t,"insert",h):h()}if(l.length&&rt(t,"postpatch",(function(){for(var n=0;n<l.length;n++)vo(l[n],"componentUpdated",t,e)})),!o)for(n in a)c[n]||vo(a[n],"unbind",e,e,s)}var ho=Object.create(null);function fo(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++){if(r=e[n],r.modifiers||(r.modifiers=ho),i[po(r)]=r,t._setupState&&t._setupState.__sfc){var o=r.def||Cr(t,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||Cr(t.$options,"directives",r.name,!0)}return i}function po(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function vo(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(Qs){Yt(Qs,n.context,"directive ".concat(e.name," ").concat(t," hook"))}}var mo=[Qi,co];function go(e,t){var n=t.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(e.data.attrs)||!o(t.data.attrs))){var r,i,c,u=t.elm,l=e.data.attrs||{},h=t.data.attrs||{};for(r in(s(h.__ob__)||a(h._v_attr_proxy))&&(h=t.data.attrs=L({},h)),h)i=h[r],c=l[r],c!==i&&yo(u,r,i,t.data.pre);for(r in(ne||ie)&&h.value!==l.value&&yo(u,"value",h.value),l)o(h[r])&&(wi(r)?u.removeAttributeNS(bi,Ii(r)):mi(r)||u.removeAttribute(r))}}function yo(e,t,n,r){r||e.tagName.indexOf("-")>-1?_o(e,t,n):_i(t)?Ei(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):mi(t)?e.setAttribute(t,yi(t,n)):wi(t)?Ei(n)?e.removeAttributeNS(bi,Ii(t)):e.setAttributeNS(bi,t,n):_o(e,t,n)}function _o(e,t,n){if(Ei(n))e.removeAttribute(t);else{if(ne&&!re&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var bo={create:go,update:go};function wo(e,t){var n=t.elm,r=t.data,i=e.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var a=Si(t),c=n._transitionClasses;s(c)&&(a=Oi(a,ki(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Io,Eo={create:wo,update:wo},So="__r",Co="__c";function To(e){if(s(e[So])){var t=ne?"change":"input";e[t]=[].concat(e[So],e[t]||[]),delete e[So]}s(e[Co])&&(e.change=[].concat(e[Co],e.change||[]),delete e[Co])}function Oo(e,t,n){var r=Io;return function i(){var o=t.apply(null,arguments);null!==o&&Ro(e,i,n,r)}}var ko=tn&&!(ae&&Number(ae[1])<=53);function Ao(e,t,n,r){if(ko){var i=zn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}Io.addEventListener(e,t,ue?{capture:n,passive:r}:n)}function Ro(e,t,n,r){(r||Io).removeEventListener(e,t._wrapper||t,n)}function Po(e,t){if(!o(e.data.on)||!o(t.data.on)){var n=t.data.on||{},r=e.data.on||{};Io=t.elm||e.elm,To(n),nt(n,r,Ao,Ro,Oo,t.context),Io=void 0}}var xo,No={create:Po,update:Po,destroy:function(e){return Po(e,no)}};function Do(e,t){if(!o(e.data.domProps)||!o(t.data.domProps)){var n,r,i=t.elm,c=e.data.domProps||{},u=t.data.domProps||{};for(n in(s(u.__ob__)||a(u._v_attr_proxy))&&(u=t.data.domProps=L({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=o(r)?"":String(r);Lo(i,l)&&(i.value=l)}else if("innerHTML"===n&&Ni(i.tagName)&&o(i.innerHTML)){xo=xo||document.createElement("div"),xo.innerHTML="<svg>".concat(r,"</svg>");var h=xo.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Qs){}}}}function Lo(e,t){return!e.composing&&("OPTION"===e.tagName||jo(e,t)||Mo(e,t))}function jo(e,t){var n=!0;try{n=document.activeElement!==e}catch(Qs){}return n&&e.value!==t}function Mo(e,t){var n=e.value,r=e._vModifiers;if(s(r)){if(r.number)return _(n)!==_(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var $o={create:Do,update:Do},Uo=C((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function Fo(e){var t=Vo(e.style);return e.staticStyle?L(e.staticStyle,t):t}function Vo(e){return Array.isArray(e)?j(e):"string"===typeof e?Uo(e):e}function Ho(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=Fo(i.data))&&L(r,n)}(n=Fo(e.data))&&L(r,n);var o=e;while(o=o.parent)o.data&&(n=Fo(o.data))&&L(r,n);return r}var zo,Bo=/^--/,Wo=/\s*!important$/,Ko=function(e,t,n){if(Bo.test(t))e.style.setProperty(t,n);else if(Wo.test(n))e.style.setProperty(R(t),n.replace(Wo,""),"important");else{var r=Go(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},qo=["Webkit","Moz","ms"],Go=C((function(e){if(zo=zo||document.createElement("div").style,e=O(e),"filter"!==e&&e in zo)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<qo.length;n++){var r=qo[n]+t;if(r in zo)return r}}));function Jo(e,t){var n=t.data,r=e.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,a,c=t.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=Vo(t.data.style)||{};t.data.normalizedStyle=s(d.__ob__)?L({},d):d;var f=Ho(t,!0);for(a in h)o(f[a])&&Ko(c,a,"");for(a in f)i=f[a],Ko(c,a,null==i?"":i)}}var Yo={create:Jo,update:Jo},Xo=/\s+/;function Zo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Xo).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" ".concat(e.getAttribute("class")||""," ");n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Qo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Xo).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" ".concat(e.getAttribute("class")||""," "),r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function es(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&L(t,ts(e.name||"v")),L(t,e),t}return"string"===typeof e?ts(e):void 0}}var ts=C((function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}})),ns=ee&&!re,rs="transition",is="animation",os="transition",ss="transitionend",as="animation",cs="animationend";ns&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(os="WebkitTransition",ss="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(as="WebkitAnimation",cs="webkitAnimationEnd"));var us=ee?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function ls(e){us((function(){us(e)}))}function hs(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Zo(e,t))}function ds(e,t){e._transitionClasses&&I(e._transitionClasses,t),Qo(e,t)}function fs(e,t,n){var r=vs(e,t),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===rs?ss:cs,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),e.addEventListener(a,l)}var ps=/\b(transform|all)(,|$)/;function vs(e,t){var n,r=window.getComputedStyle(e),i=(r[os+"Delay"]||"").split(", "),o=(r[os+"Duration"]||"").split(", "),s=ms(i,o),a=(r[as+"Delay"]||"").split(", "),c=(r[as+"Duration"]||"").split(", "),u=ms(a,c),l=0,h=0;t===rs?s>0&&(n=rs,l=s,h=o.length):t===is?u>0&&(n=is,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?rs:is:null,h=n?n===rs?o.length:c.length:0);var d=n===rs&&ps.test(r[os+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function ms(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return gs(t)+gs(e[n])})))}function gs(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ys(e,t){var n=e.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=es(e.data.transition);if(!o(r)&&!s(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,v=r.appearActiveClass,m=r.beforeEnter,g=r.enter,y=r.afterEnter,b=r.enterCancelled,w=r.beforeAppear,I=r.appear,E=r.afterAppear,S=r.appearCancelled,C=r.duration,T=Tn,O=Tn.$vnode;while(O&&O.parent)T=O.context,O=O.parent;var k=!T._isMounted||!e.isRootInsert;if(!k||I||""===I){var A=k&&f?f:c,R=k&&v?v:d,P=k&&p?p:u,x=k&&w||m,N=k&&l(I)?I:g,D=k&&E||y,L=k&&S||b,j=_(h(C)?C.enter:C);0;var M=!1!==i&&!re,$=ws(N),U=n._enterCb=H((function(){M&&(ds(n,P),ds(n,R)),U.cancelled?(M&&ds(n,A),L&&L(n)):D&&D(n),n._enterCb=null}));e.data.show||rt(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,U)})),x&&x(n),M&&(hs(n,A),hs(n,R),ls((function(){ds(n,A),U.cancelled||(hs(n,P),$||(bs(j)?setTimeout(U,j):fs(n,a,U)))}))),e.data.show&&(t&&t(),N&&N(n,U)),M||$||U()}}}function _s(e,t){var n=e.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=es(e.data.transition);if(o(r)||1!==n.nodeType)return t();if(!s(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,v=r.leaveCancelled,m=r.delayLeave,g=r.duration,y=!1!==i&&!re,b=ws(f),w=_(h(g)?g.leave:g);0;var I=n._leaveCb=H((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),y&&(ds(n,u),ds(n,l)),I.cancelled?(y&&ds(n,c),v&&v(n)):(t(),p&&p(n)),n._leaveCb=null}));m?m(E):E()}function E(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),y&&(hs(n,c),hs(n,l),ls((function(){ds(n,c),I.cancelled||(hs(n,u),b||(bs(w)?setTimeout(I,w):fs(n,a,I)))}))),f&&f(n,I),y||b||I())}}function bs(e){return"number"===typeof e&&!isNaN(e)}function ws(e){if(o(e))return!1;var t=e.fns;return s(t)?ws(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Is(e,t){!0!==t.data.show&&ys(t)}var Es=ee?{create:Is,activate:Is,remove:function(e,t){!0!==e.data.show?_s(e,t):t()}}:{},Ss=[bo,Eo,No,$o,Yo,Es],Cs=Ss.concat(mo),Ts=ao({nodeOps:Zi,modules:Cs});re&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&Ds(e,"input")}));var Os={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?rt(n,"postpatch",(function(){Os.componentUpdated(e,t,n)})):ks(e,t,n.context),e._vOptions=[].map.call(e.options,Ps)):("textarea"===n.tag||$i(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",xs),e.addEventListener("compositionend",Ns),e.addEventListener("change",Ns),re&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){ks(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Ps);if(i.some((function(e,t){return!F(e,r[t])}))){var o=e.multiple?t.value.some((function(e){return Rs(e,i)})):t.value!==t.oldValue&&Rs(t.value,i);o&&Ds(e,"change")}}}};function ks(e,t,n){As(e,t,n),(ne||ie)&&setTimeout((function(){As(e,t,n)}),0)}function As(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=e.options.length;a<c;a++)if(s=e.options[a],i)o=V(r,Ps(s))>-1,s.selected!==o&&(s.selected=o);else if(F(Ps(s),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function Rs(e,t){return t.every((function(t){return!F(t,e)}))}function Ps(e){return"_value"in e?e._value:e.value}function xs(e){e.target.composing=!0}function Ns(e){e.target.composing&&(e.target.composing=!1,Ds(e.target,"input"))}function Ds(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Ls(e){return!e.componentInstance||e.data&&e.data.transition?e:Ls(e.componentInstance._vnode)}var js={bind:function(e,t,n){var r=t.value;n=Ls(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,ys(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=Ls(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?ys(n,(function(){e.style.display=e.__vOriginalDisplay})):_s(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},Ms={model:Os,show:js},$s={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Us(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Us(zt(t.children)):e}function Fs(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var r in i)t[O(r)]=i[r];return t}function Vs(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function Hs(e){while(e=e.parent)if(e.data.transition)return!0}function zs(e,t){return t.key===e.key&&t.tag===e.tag}var Bs=function(e){return e.tag||Ot(e)},Ws=function(e){return"show"===e.name},Ks={name:"transition",props:$s,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Bs),n.length)){0;var r=this.mode;0;var i=n[0];if(Hs(this.$vnode))return i;var o=Us(i);if(!o)return i;if(this._leaving)return Vs(e,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:u(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=Fs(this),c=this._vnode,l=Us(c);if(o.data.directives&&o.data.directives.some(Ws)&&(o.data.show=!0),l&&l.data&&!zs(o,l)&&!Ot(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=L({},a);if("out-in"===r)return this._leaving=!0,rt(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),Vs(e,i);if("in-out"===r){if(Ot(o))return c;var d,f=function(){d()};rt(a,"afterEnter",f),rt(a,"enterCancelled",f),rt(h,"delayLeave",(function(e){d=e}))}}return i}}},qs=L({tag:String,moveClass:String},$s);delete qs.mode;var Gs={props:qs,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=On(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=Fs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Js),e.forEach(Ys),e.forEach(Xs),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;hs(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(ss,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(ss,e),n._moveCb=null,ds(n,t))})}})))},methods:{hasMove:function(e,t){if(!ns)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Qo(n,e)})),Zo(n,t),n.style.display="none",this.$el.appendChild(n);var r=vs(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Js(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Ys(e){e.data.newPos=e.elm.getBoundingClientRect()}function Xs(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Zs={Transition:Ks,TransitionGroup:Gs};Zr.config.mustUseProp=vi,Zr.config.isReservedTag=Di,Zr.config.isReservedAttr=fi,Zr.config.getTagNamespace=Li,Zr.config.isUnknownElement=Mi,L(Zr.options.directives,Ms),L(Zr.options.components,Zs),Zr.prototype.__patch__=ee?Ts:M,Zr.prototype.$mount=function(e,t){return e=e&&ee?Ui(e):void 0,Rn(this,e,t)},ee&&setTimeout((function(){q.devtools&&de&&de.emit("init",Zr)}),0)},6955:function(e,t,n){var r=n(2140),i=n(4901),o=n(2195),s=n(8227),a=s("toStringTag"),c=Object,u="Arguments"===o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?o(t):"Object"===(r=o(t))&&i(t.callee)?"Arguments":r}},6969:function(e,t,n){var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7055:function(e,t,n){var r=n(9504),i=n(9039),o=n(2195),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"===o(e)?a(e,""):s(e)}:s},7080:function(e,t,n){var r=n(4402).has;e.exports=function(e){return r(e),e}},7324:function(e,t,n){var r=n(4576),i=n(511),o=n(4913).f,s=n(7347).f,a=r.Symbol;if(i("dispose"),a){var c=s(a,"dispose");c.enumerable&&c.configurable&&c.writable&&o(a,"dispose",{value:c.value,enumerable:!1,configurable:!1,writable:!1})}},7347:function(e,t,n){var r=n(3724),i=n(9565),o=n(8773),s=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},7476:function(e,t,n){var r=n(2195),i=n(9504);e.exports=function(e){if("Function"===r(e))return i(e)}},7588:function(e,t,n){var r=n(6518),i=n(9565),o=n(2652),s=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("forEach",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{forEach:function(e){a(this);try{s(e)}catch(r){u(this,"throw",r)}if(h)return i(h,this,e);var t=c(this),n=0;o(t,(function(t){e(t,n++)}),{IS_RECORD:!0})}})},7629:function(e,t,n){var r=n(6395),i=n(4576),o=n(9433),s="__core-js_shared__",a=e.exports=i[s]||o(s,{});(a.versions||(a.versions=[])).push({version:"3.43.0",mode:r?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.43.0/LICENSE",source:"https://github.com/zloirock/core-js"})},7642:function(e,t,n){var r=n(6518),i=n(3440),o=n(9039),s=n(4916),a=!s("difference",(function(e){return 0===e.size})),c=a||o((function(){var e={size:1,has:function(){return!0},keys:function(){var e=0;return{next:function(){var n=e++>1;return t.has(1)&&t.clear(),{done:n,value:2}}}}},t=new Set([1,2,3,4]);return 3!==t.difference(e).size}));r({target:"Set",proto:!0,real:!0,forced:c},{difference:i})},7657:function(e,t,n){var r,i,o,s=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),d=n(8227),f=n(6395),p=d("iterator"),v=!1;[].keys&&(o=[].keys(),"next"in o?(i=l(l(o)),i!==Object.prototype&&(r=i)):v=!0);var m=!c(r)||s((function(){var e={};return r[p].call(e)!==e}));m?r={}:f&&(r=u(r)),a(r[p])||h(r,p,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:v}},7680:function(e,t,n){var r=n(9504);e.exports=r([].slice)},7740:function(e,t,n){var r=n(9297),i=n(5031),o=n(7347),s=n(4913);e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},7750:function(e,t,n){var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},7751:function(e,t,n){var r=n(4576),i=n(4901),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8004:function(e,t,n){var r=n(6518),i=n(9039),o=n(8750),s=n(4916),a=!s("intersection",(function(e){return 2===e.size&&e.has(1)&&e.has(2)}))||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:o})},8014:function(e,t,n){var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8111:function(e,t,n){var r=n(6518),i=n(4576),o=n(679),s=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(4659),h=n(9039),d=n(9297),f=n(8227),p=n(7657).IteratorPrototype,v=n(3724),m=n(6395),g="constructor",y="Iterator",_=f("toStringTag"),b=TypeError,w=i[y],I=m||!a(w)||w.prototype!==p||!h((function(){w({})})),E=function(){if(o(this,p),c(this)===p)throw new b("Abstract class Iterator not directly constructable")},S=function(e,t){v?u(p,e,{configurable:!0,get:function(){return t},set:function(t){if(s(this),this===p)throw new b("You can't redefine this property");d(this,e)?this[e]=t:l(this,e,t)}}):p[e]=t};d(p,_)||S(_,y),!I&&d(p,g)&&p[g]!==Object||S(g,E),E.prototype=p,r({global:!0,constructor:!0,forced:I},{Iterator:E})},8227:function(e,t,n){var r=n(4576),i=n(5745),o=n(9297),s=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||s;e.exports=function(e){return o(l,e)||(l[e]=a&&o(u,e)?u[e]:h("Symbol."+e)),l[e]}},8237:function(e,t,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767),c=n(9539),u=n(4549),l=n(8745),h=n(9039),d=TypeError,f=h((function(){[].keys().reduce((function(){}),void 0)})),p=!f&&u("reduce",d);r({target:"Iterator",proto:!0,real:!0,forced:f||p},{reduce:function(e){s(this);try{o(e)}catch(h){c(this,"throw",h)}var t=arguments.length<2,n=t?void 0:arguments[1];if(p)return l(p,this,t?[e]:[e,n]);var r=a(this),u=0;if(i(r,(function(r){t?(t=!1,n=r):n=e(n,r,u),u++}),{IS_RECORD:!0}),t)throw new d("Reduce of empty iterator with no initial value");return n}})},8469:function(e,t,n){var r=n(9504),i=n(507),o=n(4402),s=o.Set,a=o.proto,c=r(a.forEach),u=r(a.keys),l=u(new s).next;e.exports=function(e,t,n){return n?i({iterator:u(e),next:l},t):c(e,t)}},8480:function(e,t,n){var r=n(1828),i=n(8727),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},8527:function(e,t,n){var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(507),c=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(o(t)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(e){if(!i(t,e))return c(u,"normal",!1)}))}},8551:function(e,t,n){var r=n(34),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not an object")}},8574:function(e,t,n){var r=n(4215);e.exports="NODE"===r},8622:function(e,t,n){var r=n(4576),i=n(4901),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},8686:function(e,t,n){var r=n(3724),i=n(9039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8745:function(e,t,n){var r=n(616),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},8750:function(e,t,n){var r=n(7080),i=n(4402),o=n(5170),s=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;e.exports=function(e){var t=r(this),n=s(e),i=new u;return o(t)>n.size?c(n.getIterator(),(function(e){h(t,e)&&l(i,e)})):a(t,(function(e){n.includes(e)&&l(i,e)})),i}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},8940:function(e,t,n){var r=n(6518),i=n(4576),o=n(1625),s=n(2787),a=n(2967),c=n(7740),u=n(2360),l=n(6699),h=n(6980),d=n(747),f=n(2603),p=n(8227),v=n(9039),m=n(6395),g=i.SuppressedError,y=p("toStringTag"),_=Error,b=!!g&&3!==g.length,w=!!g&&v((function(){return 4===new g(1,2,3,{cause:4}).cause})),I=b||w,E=function(e,t,n){var r,i=o(S,this);return a?r=!I||i&&s(this)!==S?a(new _,i?s(this):S):new g:(r=i?this:u(S),l(r,y,"Error")),void 0!==n&&l(r,"message",f(n)),d(r,E,r.stack,1),l(r,"error",e),l(r,"suppressed",t),r};a?a(E,_):c(E,_,{name:!0});var S=E.prototype=I?g.prototype:u(_.prototype,{constructor:h(1,E),message:h(1,""),name:h(1,"SuppressedError")});I&&!m&&(S.constructor=E),r({global:!0,constructor:!0,arity:3,forced:I},{SuppressedError:E})},8981:function(e,t,n){var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},9167:function(e,t,n){var r=n(4576);e.exports=r},9225:function(e,t,n){var r,i,o,s,a=n(4576),c=n(8745),u=n(6080),l=n(4901),h=n(9297),d=n(9039),f=n(397),p=n(7680),v=n(4055),m=n(2812),g=n(9544),y=n(8574),_=a.setImmediate,b=a.clearImmediate,w=a.process,I=a.Dispatch,E=a.Function,S=a.MessageChannel,C=a.String,T=0,O={},k="onreadystatechange";d((function(){r=a.location}));var A=function(e){if(h(O,e)){var t=O[e];delete O[e],t()}},R=function(e){return function(){A(e)}},P=function(e){A(e.data)},x=function(e){a.postMessage(C(e),r.protocol+"//"+r.host)};_&&b||(_=function(e){m(arguments.length,1);var t=l(e)?e:E(e),n=p(arguments,1);return O[++T]=function(){c(t,void 0,n)},i(T),T},b=function(e){delete O[e]},y?i=function(e){w.nextTick(R(e))}:I&&I.now?i=function(e){I.now(R(e))}:S&&!g?(o=new S,s=o.port2,o.port1.onmessage=P,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(x)?(i=x,a.addEventListener("message",P,!1)):i=k in v("script")?function(e){f.appendChild(v("script"))[k]=function(){f.removeChild(this),A(e)}}:function(e){setTimeout(R(e),0)}),e.exports={set:_,clear:b}},9286:function(e,t,n){var r=n(4402),i=n(8469),o=r.Set,s=r.add;e.exports=function(e){var t=new o;return i(e,(function(e){s(t,e)})),t}},9297:function(e,t,n){var r=n(9504),i=n(8981),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},9306:function(e,t,n){var r=n(4901),i=n(6823),o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not a function")}},9309:function(e,t,n){var r=n(6518),i=n(4576),o=n(9225).set,s=n(9472),a=i.setImmediate?s(o,!1):o;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==a},{setImmediate:a})},9433:function(e,t,n){var r=n(4576),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9462:function(e,t,n){var r=n(9565),i=n(2360),o=n(6699),s=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),d=n(9539),f=n(1385),p=a("toStringTag"),v="IteratorHelper",m="WrapForValidIterator",g="normal",y="throw",_=c.set,b=function(e){var t=c.getterFor(e?m:v);return s(i(l),{next:function(){var n=t(this);if(e)return n.nextHandler();if(n.done)return h(void 0,!0);try{var r=n.nextHandler();return n.returnHandlerResult?r:h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=t(this),i=n.iterator;if(n.done=!0,e){var o=u(i,"return");return o?r(o,i):h(void 0,!0)}if(n.inner)try{d(n.inner.iterator,g)}catch(s){return d(i,y,s)}if(n.openIters)try{f(n.openIters,g)}catch(s){return d(i,y,s)}return i&&d(i,g),h(void 0,!0)}})},w=b(!0),I=b(!1);o(I,p,"Iterator Helper"),e.exports=function(e,t,n){var r=function(r,i){i?(i.iterator=r.iterator,i.next=r.next):i=r,i.type=t?m:v,i.returnHandlerResult=!!n,i.nextHandler=e,i.counter=0,i.done=!1,_(this,i)};return r.prototype=t?w:I,r}},9472:function(e,t,n){var r=n(4576),i=n(8745),o=n(4901),s=n(4215),a=n(2839),c=n(7680),u=n(2812),l=r.Function,h=/MSIE .\./.test(a)||"BUN"===s&&function(){var e=r.Bun.version.split(".");return e.length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2])}();e.exports=function(e,t){var n=t?2:1;return h?function(r,s){var a=u(arguments.length,1)>n,h=o(r)?r:l(r),d=a?c(arguments,n):[],f=a?function(){i(h,this,d)}:h;return t?e(f,s):e(f)}:e}},9504:function(e,t,n){var r=n(616),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},9519:function(e,t,n){var r,i,o=n(4576),s=n(2839),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},9539:function(e,t,n){var r=n(9565),i=n(8551),o=n(5966);e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},9544:function(e,t,n){var r=n(2839);e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},9565:function(e,t,n){var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},9617:function(e,t,n){var r=n(5397),i=n(5610),o=n(6198),s=function(e){return function(t,n,s){var a=r(t),c=o(a);if(0===c)return!e&&-1;var u,l=i(s,c);if(e&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},9687:function(e,t,n){n(8940)},9835:function(e){e.exports=function(e){try{var t=new Set,n={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return t.clear(),t.add(4),function(){return{done:!0}}}})}},r=t[e](n);return 1!==r.size||4!==r.values().next().value}catch(i){return!1}}},9848:function(e,t,n){n(6368),n(9309)}}]);
//# sourceMappingURL=chunk-vendors.2934f914.js.map