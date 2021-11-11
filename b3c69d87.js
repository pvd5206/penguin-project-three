/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class i{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=(t,...s)=>{const n=1===t.length?t[0]:s.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new i(n,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const e of t.cssRules)s+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const a=window.reactiveElementPolyfillSupport,l={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},c=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:c};class d extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$Eg(t,e,s=h){var i,n;const r=this.constructor._$Eh(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:l.toAttribute)(e,s.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var s,i,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),a=t.converter,c=null!==(n=null!==(i=null===(s=a)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==n?n:l.fromAttribute;this._$Ei=o,this[o]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var u;d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:d}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.0.1");const p=globalThis.trustedTypes,g=p?p.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,f="?"+v,m=`<${f}>`,$=document,b=(t="")=>$.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,x=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,S=/"/g,P=/^(?:script|style|textarea)$/i,k=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),T=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),L=new WeakMap,N=(t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new I(e.insertBefore(b(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o},H=$.createTreeWalker($,129,null,!1),M=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=A;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,h=0;for(;h<s.length&&(o.lastIndex=h,l=o.exec(s),null!==l);)h=o.lastIndex,o===A?"!--"===l[1]?o=y:void 0!==l[1]?o=x:void 0!==l[2]?(P.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=E):void 0!==l[3]&&(o=E):o===E?">"===l[0]?(o=null!=n?n:A,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?E:'"'===l[3]?S:C):o===S||o===C?o=E:o===y||o===x?o=A:(o=E,n=void 0);const d=o===E&&t[e+1].startsWith("/>")?" ":"";r+=o===A?s+m:c>=0?(i.push(a),s.slice(0,c)+"$lit$"+s.slice(c)+v+d):s+v+(-2===c?(i.push(void 0),e):d)}const a=r+(t[s]||"<?>")+(2===e?"</svg>":"");return[void 0!==g?g.createHTML(a):a,i]};class R{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,c]=M(t,e);if(this.el=R.createElement(l,s),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=H.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const s=c[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?B:"@"===e[1]?D:j})}else a.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(P.test(i.tagName)){const t=i.textContent.split(v),e=t.length-1;if(e>0){i.textContent=p?p.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],b()),H.nextNode(),a.push({type:2,index:++n});i.append(t[e],b())}}}else if(8===i.nodeType)if(i.data===f)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(v,t+1));)a.push({type:7,index:n}),t+=v.length-1}n++}}static createElement(t,e){const s=$.createElement("template");return s.innerHTML=t,s}}function z(t,e,s=t,i){var n,r,o,a;if(e===T)return e;let l=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const c=_(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,s,i)),void 0!==i?(null!==(o=(a=s)._$Cl)&&void 0!==o?o:a._$Cl=[])[i]=l:s._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,i)),e}class O{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(s,!0);H.currentNode=n;let r=H.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new I(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new V(r,this,t)),this.v.push(e),l=i[++a]}o!==(null==l?void 0:l.index)&&(r=H.nextNode(),o++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class I{constructor(t,e,s,i){var n;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),_(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==U&&_(this._$AH)?this._$AA.nextSibling.data=t:this.S($.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=R.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new O(n,this),e=t.p(this.options);t.m(s),this.S(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new R(t)),e}M(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new I(this.A(b()),this.A(b()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,s,i,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=z(this,t,e,0),r=!_(t)||t!==this._$AH&&t!==T,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=z(this,i[s+o],e,o),a===T&&(a=this._$AH[o]),r||(r=!_(a)||a!==this._$AH[o]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.k(t)}k(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends j{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===U?void 0:t}}class B extends j{constructor(){super(...arguments),this.type=4}k(t){t&&t!==U?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class D extends j{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=z(this,t,e,0))&&void 0!==s?s:U)===T)return;const i=this._$AH,n=t===U&&i!==U||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==U&&(i===U||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class V{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const W=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,J;null==W||W(R,I),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.0.1");class K extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=N(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}K.finalized=!0,K._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:K});const Z=globalThis.litElementPolyfillSupport;null==Z||Z({LitElement:K}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.0.1");class Y extends K{static get tag(){return"flash-card"}constructor(){super(),this.need="all need to succeed",setTimeout((()=>{Promise.resolve().then((function(){return rt}))}),0)}static get properties(){return{need:{type:String,reflect:!0}}}updated(t){t.forEach(((t,e)=>{"need"===e&&"joy"===this[e]&&this.classList.add("joyful")}))}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return n`:host{display:block}`}render(){return k` <h1>Make me awesome</h1> <p>Build the future we ${this.need}.</p> <slot></slot> `}static get haxProperties(){return new URL("../lib/flash-card.haxProperties.json",import.meta.url).href}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G,Q;customElements.define(Y.tag,Y);class X extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=N(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}X.finalized=!0,X._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:X});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:X}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.0.1"),
/**
 * Copyright 2021 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
window.I18NManagerStore=window.I18NManagerStore||{},window.I18NManagerStore.requestAvailability=()=>(window.I18NManagerStore.instance||(window.I18NManagerStore.instance=document.createElement("i18n-manager"),document.body.appendChild(window.I18NManagerStore.instance)),window.I18NManagerStore.instance);const et=window.I18NManagerStore.requestAvailability();class st extends HTMLElement{constructor(){super(),this.fetchTargets={},this.elements=[],this.locales=new Set([]),this.lang=this.documentLang,this.dir=this.documentDir}get documentLang(){return document.body.getAttribute("xml:lang")||document.body.getAttribute("lang")||document.documentElement.getAttribute("xml:lang")||document.documentElement.getAttribute("lang")||navigator.language||"en"}get documentDir(){return document.body.getAttribute("xml:dir")||document.body.getAttribute("dir")||document.documentElement.getAttribute("xml:dir")||document.documentElement.getAttribute("dir")||"ltr"}connectedCallback(){this.__ready=!0,window.addEventListener("i18n-manager-register-element",this.registerLocalizationEvent.bind(this)),window.addEventListener("languagechange",this.changeLanguageEvent.bind(this))}disconnectedCallback(){window.removeEventListener("i18n-manager-register-element",this.registerLocalizationEvent.bind(this)),window.removeEventListener("languagechange",this.changeLanguageEvent.bind(this))}changeLanguageEvent(t){this.lang=t.detail}registerLocalizationEvent(t){let e=this.detailNormalize(t.detail);e.namespace&&e.localesPath&&e.locales&&this.registerLocalization(e)}detailNormalize(t){if(!t.namespace&&t.context&&(t.namespace=t.context.tagName.toLowerCase()),!t.updateCallback&&t.context&&(t.context.requestUpdate?t.updateCallback="requestUpdate":t.context.render&&(t.updateCallback="render")),!t.localesPath&&t.basePath&&(t.localesPath=`${decodeURIComponent(t.basePath)}/../locales`),t.context&&t.namespace){t.context.t&&(t.context._t={...t.context.t});let e=this.elements.filter((e=>{if(e.namespace==t.namespace&&e.localesPath&&e.locales)return!0}));e&&e.length&&e[0]&&(t.localesPath=e[0].localesPath,t.locales=e[0].locales)}return t}registerLocalization(t){(!t.context&&0===this.elements.filter((e=>e.namespace===t.namespace)).length||0===this.elements.filter((e=>e.context===t.context)).length)&&(t=this.detailNormalize(t),this.elements.push(t),t.locales.forEach(this.locales.add,this.locales),this.lang&&this.__ready&&t.locales.includes(this.lang)&&(clearTimeout(this._debounce),this._debounce=setTimeout((()=>{this.updateLanguage(this.lang)}),0)))}static get tag(){return"i18n-manager"}async loadNamespaceFile(t,e=this.lang){const s=e.split("-");let i=this.elements.filter((i=>i.namespace===t&&(i.locales.includes(e)||i.locales.includes(s[0]))));if(i&&1===i.length){const t=i[0];var n="";return t.locales.includes(e)?n=`${t.localesPath}/${t.namespace}.${e}.json`:t.locales.includes(s[0])&&(n=`${t.localesPath}/${t.namespace}.${s[0]}.json`),""==n?{}:(this.fetchTargets[n]||(this.fetchTargets[n]=await fetch(n).then((t=>!(!t||!t.json)&&t.json()))),this.fetchTargets[n])}}async updateLanguage(t){if(t){const n=t.split("-"),r=this.elements.filter((e=>e.locales.includes(t)||e.locales.includes(n[0]))),o=this.elements.filter((e=>!e.locales.includes(t)&&!e.locales.includes(n[0])));if(0!==o.length)for(var e in o){let t=o[e];t.context&&(t.context.t={...t.context._t},t.updateCallback&&t.context[t.updateCallback]())}for(var e in r){let o=r[e];var s="";if(o.locales.includes(t)?s=`${o.localesPath}/${o.namespace}.${t}.json`:o.locales.includes(n[0])&&(s=`${o.localesPath}/${o.namespace}.${n[0]}.json`),this.fetchTargets[s]){if(o.context){let t=this.fetchTargets[s];for(var i in t)o.context.t[i]=t[i];o.context.t={...o.context.t},o.updateCallback&&o.context[o.updateCallback]()}}else if(this.fetchTargets[s]=await fetch(s).then((t=>!(!t||!t.json)&&t.json())),o.context){for(var i in this.fetchTargets[s])o.context.t[i]=this.fetchTargets[s][i];o.context.t={...o.context.t},o.updateCallback&&o.context&&o.context[o.updateCallback]()}}}}static get observedAttributes(){return["lang","dir"]}attributeChangedCallback(t,e,s){"lang"!=t&&"dir"!=t||this.dispatchEvent(new CustomEvent(`${t}-changed`,{detail:{value:s}})),"lang"==t&&s&&this.__ready&&this.updateLanguage(s)}get lang(){return this.getAttribute("lang")}set lang(t){t?this.setAttribute("lang",t):this.removeAttribute("lang")}get dir(){return this.getAttribute("dir")}set dir(t){t?this.setAttribute("dir",t):this.removeAttribute("dir")}}customElements.define(st.tag,st);class it extends(function(t){return class extends t{constructor(){super(),this.t={}}static get properties(){return{...super.properties,t:{type:Object}}}registerLocalization(t){t.namespace||(t.namespace=t.context.tagName.toLowerCase()),t.updateCallback||(t.context.requestUpdate?t.updateCallback="requestUpdate":t.context.render&&(t.updateCallback="render")),!t.localesPath&&t.basePath&&(t.localesPath=`${decodeURIComponent(t.basePath)}/../locales`),et.registerLocalization(t)}}}(X)){static get styles(){return[n`:host{display:block}:host:after{content:attr(words-text);position:var(--word-count-position,relative);display:var(--word-count-display,flex);flex-direction:var(--word-count-flex-direction,row-reverse);margin:var(--word-count-margin,12px);font-size:var(--word-count-font-size,10px);transition:var(--word-count-transition,.3s font-size,color ease);line-height:var(--word-count-line-height,16px);color:var(--word-count-color,#888)}:host(:active):after,:host(:focus):after,:host(:hover):after{font-size:var(--word-count-font-size-hover,12px);font-weight:var(--word-count-font-weight-hover,bold);color:var(--word-count-color-hover,#000)}.screen-reader-text{border:0;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;margin:-1px;width:1px;overflow:hidden;position:absolute!important;word-wrap:normal!important}`]}render(){return k` <slot></slot> <div class="screen-reader-text">${this.wordsPrefix}: ${this.words}</div> `}static get tag(){return"word-count"}constructor(){super(),this.wordsPrefix="Word count",this.t={wordsPrefix:this.wordsPrefix},this.registerLocalization({context:this,basePath:import.meta.url,locales:["es","fr","ja"]})}connectedCallback(){super.connectedCallback(),this.__observer=new MutationObserver(this._updateWords.bind(this)),this.__observer.observe(this,{attributes:!0,characterData:!0,childList:!0,subtree:!0})}disconnectedCallback(){this.__observer.disconnect(),super.disconnectedCallback()}update(t){super.update(t),t.has("t")&&(this.wordsPrefix=this.t.wordsPrefix),t.has("wordsPrefix")&&(this.t={wordsPrefix:this.wordsPrefix},this.setAttribute("words-text",`${this.wordsPrefix}: ${this.words}`)),t.has("words")&&this.setAttribute("words-text",`${this.wordsPrefix}: ${this.words}`)}static get properties(){return{...super.properties,words:{type:Number},wordsPrefix:{type:String,attribute:"words-prefix"}}}_updateWords(t){""!==this.textContent?this.words=parseInt(this.textContent.split(/\s+/g).length-1):this.words=0}}window.customElements.define(it.tag,it);class nt extends K{static get tag(){return"answer-box"}constructor(){super(),this.front="",this.back="",this.backFirst=!1}static get properties(){return{backFirst:{type:Boolean,attribute:"back-first"}}}firstUpdated(){this.querySelectorAll("*").forEach((t=>{t.hasAttribute("slot")&&("front"===t.getAttribute("slot")&&(this.front=t.innerHTML,this.removeChild(t),this.shadowRoot.removeChild(this.shadowRoot.querySelector("#front"))),"back"===t.getAttribute("slot")&&(this.back=t.innerHTML,this.removeChild(t),this.shadowRoot.removeChild(this.shadowRoot.querySelector("#back"))))})),this.backFirst?this.shadowRoot.querySelector("#question").innerHTML=this.back:this.shadowRoot.querySelector("#question").innerHTML=this.front}equalsIgnoringCase(t,e){return 0===t.localeCompare(e,void 0,{sensitivity:"base"})}checkAnswer(){let t=this.shadowRoot.getElementById("answer").value;this.backFirst||(this.equalsIgnoringCase(t,this.back)?this.setAttribute("data-correct-answer",""):this.removeAttribute("data-correct-answer")),this.backFirst&&(this.equalsIgnoringCase(t,this.front)?this.setAttribute("data-correct-answer",""):this.removeAttribute("data-correct-answer"))}static get styles(){return n`:host{display:flex;flex-direction:column;align-items:center}:host([need=joy]){color:#ff0;background-color:#000}.answer-section{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:300px;border-radius:20px;border:solid 1px gray}.answer-section:focus-within{border-color:#9ecaed;box-shadow:0 0 10px #9ecaed}input{border:none;background-color:none;padding:10px;margin:2px;border-radius:20px;font-size:14px}input:focus{outline:0}button{background-color:#19b9e6;color:#fff;font-size:14px;margin:none;padding:14px;border-radius:0 20px 20px 0;border:none}button:hover{opacity:.5}p{font-family:Helvetica;color:gray;font-weight:400;font-size:20px}`}render(){return k` <slot id="front" name="front"></slot> <slot id="back" name="back"></slot> <p id="question"></p> <div class="answer-section"> <input name="answer" id="answer" placeholder="Your answer"> <button @click="${this.checkAnswer}">Check Answer</button> </div> `}}customElements.define(nt.tag,nt);var rt=Object.freeze({__proto__:null,AnswerBox:nt});
