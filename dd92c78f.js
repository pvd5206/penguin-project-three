import{s as t,r as e,p as r}from"./0be1ccd8.js";class s extends t{static get tag(){return"image-prompt"}static get styles(){return e`:host{display:block}:host([correct]){display:block;color:red;opacity:.5}`}constructor(){super(),this.imgSrc="grey box",this.imgTag=`https://loremflickr.com/320/240/${this.imgSrc}`}static get properties(){return{...super.properties,imgSrc:{type:String,reflect:!0,attribute:"img-src"},imgTag:{type:String},correct:{type:Boolean,reflect:!0}}}updated(t){t.forEach(((t,e)=>{"correct"===e&&"joy"===this[e]&&this.classList.add("joyful")}))}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),this.imgTag=`https://loremflickr.com/320/240/${this.imgSrc}`}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return r` <img src="${this.imgTag}" alt="default img"> `}static get haxProperties(){return new URL("../lib/FlashCard.haxProperties.json",import.meta.url).href}}customElements.define(s.tag,s);export{s as promptImg};
