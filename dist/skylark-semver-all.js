/**
 * skylark-semver - A version of semver.browser.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-semver/
 * @license MIT
 */
!function(r,e){var t=e.define,require=e.require,n="function"==typeof t&&t.amd,i=!n&&"undefined"!=typeof exports;if(!n&&!t){var s={};t=e.define=function(r,e,t){"function"==typeof t?(s[r]={factory:t,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var t=e.split("/"),n=r.split("/");t.pop();for(var i=0;i<n.length;i++)"."!=n[i]&&(".."==n[i]?t.pop():t.push(n[i]));return t.join("/")}(e,r)}),resolved:!1,exports:null},require(r)):s[r]={factory:null,resolved:!0,exports:t}},require=e.require=function(r){if(!s.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=s[r];if(!module.resolved){var t=[];module.deps.forEach(function(r){t.push(require(r))}),module.exports=module.factory.apply(e,t)||null,module.resolved=!0}return module.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-langx-ns/_attach",[],function(){return function(r,e,t){"string"==typeof e&&(e=e.split("."));for(var n=e.length,i=r,s=0,o=e[s++];s<n;)i=i[o]=i[o]||{},o=e[s++];return i[o]=t}}),r("skylark-langx-ns/ns",["./_attach"],function(r){var e={attach:function(t,n){return r(e,t,n)}};return e}),r("skylark-langx-ns/main",["./ns"],function(r){return r}),r("skylark-langx-ns",["skylark-langx-ns/main"],function(r){return r}),r("skylark-langx/skylark",["skylark-langx-ns"],function(r){return r}),r("skylark-semver/SemVer",["skylark-langx/skylark"],function(r){var exports=module.exports=N;exports.SEMVER_SPEC_VERSION="2.0.0";var e=exports.re=[],t=exports.src=[],n=0,i=n++;t[i]="0|[1-9]\\d*";var s=n++;t[s]="[0-9]+";var o=n++;t[o]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var a=n++;t[a]="("+t[i]+")\\.("+t[i]+")\\.("+t[i]+")";var u=n++;t[u]="("+t[s]+")\\.("+t[s]+")\\.("+t[s]+")";var c=n++;t[c]="(?:"+t[i]+"|"+t[o]+")";var p=n++;t[p]="(?:"+t[s]+"|"+t[o]+")";var f=n++;t[f]="(?:-("+t[c]+"(?:\\."+t[c]+")*))";var l=n++;t[l]="(?:-?("+t[p]+"(?:\\."+t[p]+")*))";var h=n++;t[h]="[0-9A-Za-z-]+";var v=n++;t[v]="(?:\\+("+t[h]+"(?:\\."+t[h]+")*))";var m=n++,g="v?"+t[a]+t[f]+"?"+t[v]+"?";t[m]="^"+g+"$";var y="[v=\\s]*"+t[u]+t[l]+"?"+t[v]+"?",k=n++;t[k]="^"+y+"$";var w=n++;t[w]="((?:<|>)?=?)";var d=n++;t[d]=t[s]+"|x|X|\\*";var x=n++;t[x]=t[i]+"|x|X|\\*";var $=n++;t[$]="[v=\\s]*("+t[x]+")(?:\\.("+t[x]+")(?:\\.("+t[x]+")(?:("+t[f]+"))?)?)?";var b=n++;t[b]="[v=\\s]*("+t[d]+")(?:\\.("+t[d]+")(?:\\.("+t[d]+")(?:("+t[l]+"))?)?)?";var j=n++;t[j]="^"+t[w]+"\\s*"+t[$]+"$";var E=n++;t[E]="^"+t[w]+"\\s*"+t[b]+"$";var S=n++;t[S]="(?:~>?)";var R=n++;t[R]="(\\s*)"+t[S]+"\\s+",e[R]=new RegExp(t[R],"g");var V=n++;t[V]="^"+t[S]+t[$]+"$";var I=n++;t[I]="^"+t[S]+t[b]+"$";var T=n++;t[T]="(?:\\^)";var q=n++;t[q]="(\\s*)"+t[T]+"\\s+",e[q]=new RegExp(t[q],"g");var A=n++;t[A]="^"+t[T]+t[$]+"$";var C=n++;t[C]="^"+t[T]+t[b]+"$";var M=n++;t[M]="^"+t[w]+"\\s*("+y+")$|^$";var P=n++;t[P]="^"+t[w]+"\\s*("+g+")$|^$";var _=n++;t[_]="(\\s*)"+t[w]+"\\s*("+y+"|"+t[$]+")",e[_]=new RegExp(t[_],"g");var z=n++;t[z]="^\\s*("+t[$]+")\\s+-\\s+("+t[$]+")\\s*$";var Z=n++;t[Z]="^\\s*("+t[b]+")\\s+-\\s+("+t[b]+")\\s*$";var L=n++;t[L]="(<|>)?=?\\s*\\*";for(var O=0;O<n;O++)e[O]||(e[O]=new RegExp(t[O]));function X(r,t){var n=t?e[k]:e[m];return n.test(r)?new N(r,t):null}function N(r,t){if(r instanceof N){if(r.loose===t)return r;r=r.version}else if("string"!=typeof r)throw new TypeError("Invalid Version: "+r);if(!(this instanceof N))return new N(r,t);this.loose=t;var n=r.trim().match(t?e[k]:e[m]);if(!n)throw new TypeError("Invalid Version: "+r);this.raw=r,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],n[4]?this.prerelease=n[4].split(".").map(function(r){return/^[0-9]+$/.test(r)?+r:r}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}exports.parse=X,exports.valid=function(r,e){var t=X(r,e);return t?t.version:null},exports.clean=function(r,e){var t=X(r,e);return t?t.version:null},exports.SemVer=N,N.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},N.prototype.inspect=function(){return'<SemVer "'+this+'">'},N.prototype.toString=function(){return this.version},N.prototype.compare=function(r){return r instanceof N||(r=new N(r,this.loose)),this.compareMain(r)||this.comparePre(r)},N.prototype.compareMain=function(r){return r instanceof N||(r=new N(r,this.loose)),D(this.major,r.major)||D(this.minor,r.minor)||D(this.patch,r.patch)},N.prototype.comparePre=function(r){if(r instanceof N||(r=new N(r,this.loose)),this.prerelease.length&&!r.prerelease.length)return-1;if(!this.prerelease.length&&r.prerelease.length)return 1;if(!this.prerelease.length&&!r.prerelease.length)return 0;var e=0;do{var t=this.prerelease[e],n=r.prerelease[e];if(void 0===t&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===t)return-1;if(t!==n)return D(t,n)}while(++e)},N.prototype.inc=function(r){switch(r){case"premajor":this.inc("major"),this.inc("pre");break;case"preminor":this.inc("minor"),this.inc("pre");break;case"prepatch":this.prerelease.length=0,this.inc("patch"),this.inc("pre");break;case"prerelease":0===this.prerelease.length&&this.inc("patch"),this.inc("pre");break;case"major":this.major++,this.minor=-1;case"minor":this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var e=this.prerelease.length;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}break;default:throw new Error("invalid increment argument: "+r)}return this.format(),this},exports.inc=function(r,e,t){try{return new N(r,t).inc(e).version}catch(r){return null}},exports.compareIdentifiers=D;var B=/^[0-9]+$/;function D(r,e){var t=B.test(r),n=B.test(e);return t&&n&&(r=+r,e=+e),t&&!n?-1:n&&!t?1:r<e?-1:r>e?1:0}function F(r,e,t){return new N(r,t).compare(e)}function G(r,e,t){return F(e,r,t)}function H(r,e,t){return F(r,e,t)>0}function J(r,e,t){return F(r,e,t)<0}function K(r,e,t){return 0===F(r,e,t)}function Q(r,e,t){return 0!==F(r,e,t)}function U(r,e,t){return F(r,e,t)>=0}function W(r,e,t){return F(r,e,t)<=0}function Y(r,e,t,n){var i;switch(e){case"===":i=r===t;break;case"!==":i=r!==t;break;case"":case"=":case"==":i=K(r,t,n);break;case"!=":i=Q(r,t,n);break;case">":i=H(r,t,n);break;case">=":i=U(r,t,n);break;case"<":i=J(r,t,n);break;case"<=":i=W(r,t,n);break;default:throw new TypeError("Invalid operator: "+e)}return i}function rr(r,e){if(r instanceof rr){if(r.loose===e)return r;r=r.value}if(!(this instanceof rr))return new rr(r,e);this.loose=e,this.parse(r),this.semver===er?this.value="":this.value=this.operator+this.semver.version}exports.rcompareIdentifiers=function(r,e){return D(e,r)},exports.compare=F,exports.compareLoose=function(r,e){return F(r,e,!0)},exports.rcompare=G,exports.sort=function(r,e){return r.sort(function(r,t){return exports.compare(r,t,e)})},exports.rsort=function(r,e){return r.sort(function(r,t){return exports.rcompare(r,t,e)})},exports.gt=H,exports.lt=J,exports.eq=K,exports.neq=Q,exports.gte=U,exports.lte=W,exports.cmp=Y,exports.Comparator=rr;var er={};function tr(r,e){if(r instanceof tr&&r.loose===e)return r;if(!(this instanceof tr))return new tr(r,e);if(this.loose=e,this.raw=r,this.set=r.split(/\s*\|\|\s*/).map(function(r){return this.parseRange(r.trim())},this).filter(function(r){return r.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+r);this.format()}function nr(r){return!r||"x"===r.toLowerCase()||"*"===r}function ir(r,e,t,n,i,s,o,a,u,c,p,f,l){return e=nr(t)?"":nr(n)?">="+t+".0.0-0":nr(i)?">="+t+"."+n+".0-0":">="+e,a=nr(u)?"":nr(c)?"<"+(+u+1)+".0.0-0":nr(p)?"<"+u+"."+(+c+1)+".0-0":f?"<="+u+"."+c+"."+p+"-"+f:"<="+a,(e+" "+a).trim()}function sr(r,e){for(var t=0;t<r.length;t++)if(!r[t].test(e))return!1;return!0}function or(r,e,t){try{e=new tr(e,t)}catch(r){return!1}return e.test(r)}function ar(r,e,t,n){var i,s,o,a,u;switch(r=new N(r,n),e=new tr(e,n),t){case">":i=H,s=W,o=J,a=">",u=">=";break;case"<":i=J,s=U,o=H,a="<",u="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(or(r,e,n))return!1;for(var c=0;c<e.set.length;++c){var p=e.set[c],f=null,l=null;if(p.forEach(function(r){f=f||r,l=l||r,i(r.semver,f.semver,n)?f=r:o(r.semver,l.semver,n)&&(l=r)}),f.operator===a||f.operator===u)return!1;if((!l.operator||l.operator===a)&&s(r,l.semver))return!1;if(l.operator===u&&o(r,l.semver))return!1}return!0}return rr.prototype.parse=function(r){var t=this.loose?e[M]:e[P],n=r.match(t);if(!n)throw new TypeError("Invalid comparator: "+r);this.operator=n[1],"="===this.operator&&(this.operator=""),n[2]?(this.semver=new N(n[2],this.loose),"<"!==this.operator||this.semver.prerelease.length||(this.semver.prerelease=["0"],this.semver.format())):this.semver=er},rr.prototype.inspect=function(){return'<SemVer Comparator "'+this+'">'},rr.prototype.toString=function(){return this.value},rr.prototype.test=function(r){return this.semver===er||Y(r,this.operator,this.semver,this.loose)},exports.Range=tr,tr.prototype.inspect=function(){return'<SemVer Range "'+this.range+'">'},tr.prototype.format=function(){return this.range=this.set.map(function(r){return r.join(" ").trim()}).join("||").trim(),this.range},tr.prototype.toString=function(){return this.range},tr.prototype.parseRange=function(r){var t=this.loose;r=r.trim();var n=t?e[Z]:e[z];r=(r=(r=(r=(r=r.replace(n,ir)).replace(e[_],"$1$2$3")).replace(e[R],"$1~")).replace(e[q],"$1^")).split(/\s+/).join(" ");var i=t?e[M]:e[P],s=r.split(" ").map(function(r){return function(r,t){return r=function(r,t){return r.trim().replace(e[L],"")}(r=function(r,t){return r.split(/\s+/).map(function(r){return function(r,t){r=r.trim();var n=t?e[E]:e[j];return r.replace(n,function(r,e,t,n,i,s){var o=nr(t),a=o||nr(n),u=a||nr(i),c=u;return"="===e&&c&&(e=""),e&&c?(o&&(t=0),a&&(n=0),u&&(i=0),">"===e&&(e=">=",o||(a?(t=+t+1,n=0,i=0):u&&(n=+n+1,i=0))),r=e+t+"."+n+"."+i+"-0"):o?r="*":a?r=">="+t+".0.0-0 <"+(+t+1)+".0.0-0":u&&(r=">="+t+"."+n+".0-0 <"+t+"."+(+n+1)+".0-0"),r})}(r,t)}).join(" ")}(r=function(r,t){return r.trim().split(/\s+/).map(function(r){return function(r,t){var n=t?e[I]:e[V];return r.replace(n,function(r,e,t,n,i){var s;return nr(e)?s="":nr(t)?s=">="+e+".0.0-0 <"+(+e+1)+".0.0-0":nr(n)?s=">="+e+"."+t+".0-0 <"+e+"."+(+t+1)+".0-0":i?("-"!==i.charAt(0)&&(i="-"+i),s=">="+e+"."+t+"."+n+i+" <"+e+"."+(+t+1)+".0-0"):s=">="+e+"."+t+"."+n+"-0 <"+e+"."+(+t+1)+".0-0",s})}(r,t)}).join(" ")}(r=function(r,t){return r.trim().split(/\s+/).map(function(r){return function(r,t){var n=t?e[C]:e[A];return r.replace(n,function(r,e,t,n,i){var s;return nr(e)?s="":nr(t)?s=">="+e+".0.0-0 <"+(+e+1)+".0.0-0":nr(n)?s="0"===e?">="+e+"."+t+".0-0 <"+e+"."+(+t+1)+".0-0":">="+e+"."+t+".0-0 <"+(+e+1)+".0.0-0":i?("-"!==i.charAt(0)&&(i="-"+i),s="0"===e?"0"===t?"="+e+"."+t+"."+n+i:">="+e+"."+t+"."+n+i+" <"+e+"."+(+t+1)+".0-0":">="+e+"."+t+"."+n+i+" <"+(+e+1)+".0.0-0"):s="0"===e?"0"===t?"="+e+"."+t+"."+n:">="+e+"."+t+"."+n+"-0 <"+e+"."+(+t+1)+".0-0":">="+e+"."+t+"."+n+"-0 <"+(+e+1)+".0.0-0",s})}(r,t)}).join(" ")}(r,t),t),t))}(r,t)}).join(" ").split(/\s+/);return this.loose&&(s=s.filter(function(r){return!!r.match(i)})),s=s.map(function(r){return new rr(r,t)})},exports.toComparators=function(r,e){return new tr(r,e).set.map(function(r){return r.map(function(r){return r.value}).join(" ").trim().split(" ")})},tr.prototype.test=function(r){if(!r)return!1;for(var e=0;e<this.set.length;e++)if(sr(this.set[e],r))return!0;return!1},exports.satisfies=or,exports.maxSatisfying=function(r,e,t){return r.filter(function(r){return or(r,e,t)}).sort(function(r,e){return G(r,e,t)})[0]||null},exports.validRange=function(r,e){try{return new tr(r,e).range||"*"}catch(r){return null}},exports.ltr=function(r,e,t){return ar(r,e,"<",t)},exports.gtr=function(r,e,t){return ar(r,e,">",t)},exports.outside=ar,r.attach("intg.SemVer",N)}),r("skylark-semver/main",["./SemVer"],function(r){return r}),r("skylark-semver",["skylark-semver/main"],function(r){return r})}(t),!n){var o=require("skylark-langx/skylark");i?module.exports=o:e.skylarkjs=o}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-semver-all.js.map