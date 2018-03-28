webpackJsonp([35783957827783],{82:function(t,e,n){"use strict";function r(t){return t}function o(t,e,n){function o(t,e){var n=g.hasOwnProperty(e)?g[e]:null;b.hasOwnProperty(e)&&c("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&c("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function a(t,n){if(n){c("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),c(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=t.prototype,a=r.__reactAutoBindPairs;n.hasOwnProperty(u)&&N.mixins(t,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==u){var s=n[i],p=r.hasOwnProperty(i);if(o(p,i),N.hasOwnProperty(i))N[i](t,s);else{var l=g.hasOwnProperty(i),y="function"==typeof s,d=y&&!l&&!p&&n.autobind!==!1;if(d)a.push(i,s),r[i]=s;else if(p){var h=g[i];c(l&&("DEFINE_MANY_MERGED"===h||"DEFINE_MANY"===h),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",h,i),"DEFINE_MANY_MERGED"===h?r[i]=f(r[i],s):"DEFINE_MANY"===h&&(r[i]=m(r[i],s))}else r[i]=s}}}else;}function p(t,e){if(e)for(var n in e){var r=e[n];if(e.hasOwnProperty(n)){var o=n in N;c(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in t;c(!a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),t[n]=r}}}function l(t,e){c(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(c(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function f(t,e){return function(){var n=t.apply(this,arguments),r=e.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return l(o,n),l(o,r),o}}function m(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function y(t,e){var n=e.bind(t);return n}function d(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var r=e[n],o=e[n+1];t[r]=y(t,o)}}function h(t){var e=r(function(t,r,o){this.__reactAutoBindPairs.length&&d(this),this.props=t,this.context=r,this.refs=s,this.updater=o||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;c("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=a});e.prototype=new D,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],E.forEach(a.bind(null,e)),a(e,_),a(e,t),a(e,v),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),c(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in g)e.prototype[o]||(e.prototype[o]=null);return e}var E=[],g={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},N={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)a(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=i({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=i({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=f(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=i({},t.propTypes,e)},statics:function(t,e){p(t,e)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},b={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},D=function(){};return i(D.prototype,t.prototype,b),h}var a,i=n(4),s=n(30),c=n(1),u="mixins";a={},t.exports=o},139:function(t,e){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,a=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,u=c&&c(Object);t.exports=function t(e,p,l){if("string"!=typeof p){if(u){var f=c(p);f&&f!==u&&t(e,f,l)}var m=a(p);i&&(m=m.concat(i(p)));for(var y=0;y<m.length;++y){var d=m[y];if(!(n[d]||r[d]||l&&l[d])){var h=s(p,d);try{o(e,d,h)}catch(t){}}}return e}return e}},4:function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function r(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=r()?Object.assign:function(t,e){for(var r,s,c=n(t),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var p in r)a.call(r,p)&&(c[p]=r[p]);if(o){s=o(r);for(var l=0;l<s.length;l++)i.call(r,s[l])&&(c[s[l]]=r[s[l]])}}return c}},263:function(t,e){},182:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(5),a=r(o),i=n(135);r(i);n(263);var s=[{text:"Twitter",url:"https://twitter.com/marcelcutts"},{text:"Talks",url:"https://speakerdex.co/marcel"},{text:"Medium",url:"https://medium.com/@marcel.cutts/latest"},{text:"Email",url:"mailto:marcel@asgard.tech"}],c=function(t){var e=t.content;return a.default.createElement("a",{href:e.url,className:"externalLink"}," ",e.text," ")},u=function(){return a.default.createElement("div",{className:"index"},a.default.createElement("h1",null,"Marcel Cutts"),a.default.createElement("p",{className:"narcissism"},"Technologist with a relentless vendetta against mediocrity."),a.default.createElement("div",{className:"externalLinkContainer"}," ",s.map(function(t){return a.default.createElement(c,{content:t,key:t.text})})," "))};e.default=u,t.exports=e.default}});
//# sourceMappingURL=component---src-pages-index-js-53179cdc8aa7b53efb36.js.map