(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4R7y":function(t,n,r){},"4l63":function(t,n,r){var e=r("I+eb"),o=r("wg0c");e({global:!0,forced:parseInt!=o},{parseInt:o})},"9I65":function(t,n,r){"use strict";r.d(n,"c",(function(){return e})),r.d(n,"b",(function(){return o})),r.d(n,"a",(function(){return i}));r("2B1R"),r("4l63"),r("rB9j"),r("Rm1S");var e=function(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},o=function(t){return t.map((function(t){return t/255}))},i=function(t){return t.match(/.{1,2}/g).map((function(t){return parseInt(t,16)}))}},HUPu:function(t,n,r){"use strict";r.r(n);var e=r("klUM"),o={props:{colors:{type:Array,default:function(){return[]}}},methods:{isLight:e.a}},i=(r("odqC"),r("KHd+")),a=Object(i.a)(o,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("ul",{staticClass:"flex h-full"},t._l(t.colors,(function(n){return r("li",{key:n,staticClass:"flex-grow"},[r("div",{staticClass:"brand__color",class:t.isLight(n)?"brand__color--light":"brand__color--dark",style:{backgroundColor:"#"+n}},[r("code",{staticClass:"brand__color__code smooth-transition",attrs:{dir:"ltr"}},[t._v("\n                "+t._s(n)+"\n            ")])])])})),0)}),[],!1,null,"e3ad57fc",null).exports,c=(r("oVuX"),r("9I65")),s={filters:{toRGB:function(t){return Object(c.a)(t)},toString:function(t){return t.join(", ")}},props:{colors:{type:Array,default:function(){return[]}}}},l=(r("w+pZ"),{components:{ColorBanner:a,ColorDetail:Object(i.a)(s,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"table"},[n("div",{staticClass:"flex-center bg-rb-violet-100"},[n("strong",{staticClass:"table__item table__item--color"},[this._v("\n            رنگ\n        ")]),n("strong",{staticClass:"table__item table__item--info"},[this._v("\n            اطلاعات\n        ")])])])}],!1,null,"8c1b793c",null).exports},metaInfo:function(){return{title:"رنگ‌های ".concat(this.$page.brand.title)}},computed:{brand:function(){return this.$page.brand||{}}}}),u=(r("mpRC"),null),f=Object(i.a)(l,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("Layout",[r("div",{staticClass:"color-banner hidden md:block"},[r("color-banner",{attrs:{colors:t.brand.colors}})],1),r("main",{staticClass:"wrapper text-black text-opacity-80 py-8"},[r("h1",{staticClass:"text-3xl font-bold mt-8 mb-4"},[t._v("\n            پالت رنگ‌های رسمی "+t._s(t.brand.title)+" به همراه کدهای RGB و HEX\n        ")]),t.brand.description?r("p",{staticClass:"mb-2"},[t._v("\n            "+t._s(t.brand.description)+"\n        ")]):t._e(),r("p",{staticClass:"mb-2"},[t._v("\n            در جدول زیر رنگ‌های رسمی برند "+t._s(t.brand.title)+" را مشاهده می‌کنید. برای اطمینان از این که متریال تبلیغاتی شما با برند "+t._s(t.brand.title)+" هماهنگ باشد، در کارهای خود از این رنگ‌ها استفاده کنید:\n        ")]),r("div",{staticClass:"color-detail"},[r("color-detail",{attrs:{colors:t.brand.colors}})],1)])])}),[],!1,null,"8e8d5d80",null);"function"==typeof u&&u(f);n.default=f.exports},PO4d:function(t,n,r){},QfqM:function(t,n,r){},Rm1S:function(t,n,r){"use strict";var e=r("14Sl"),o=r("glrk"),i=r("UMSQ"),a=r("HYAF"),c=r("iqWW"),s=r("FMNM");e("match",1,(function(t,n,r){return[function(n){var r=a(this),e=null==n?void 0:n[t];return void 0!==e?e.call(n,r):new RegExp(n)[t](String(r))},function(t){var e=r(n,t,this);if(e.done)return e.value;var a=o(t),l=String(this);if(!a.global)return s(a,l);var u=a.unicode;a.lastIndex=0;for(var f,d=[],b=0;null!==(f=s(a,l));){var p=String(f[0]);d[b]=p,""===p&&(a.lastIndex=c(l,i(a.lastIndex),u)),b++}return 0===b?null:d}]}))},klUM:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));var e=r("ODXe"),o=r("9I65"),i=function(t){var n=Object(o.b)(Object(o.a)(t)),r=Object(e.a)(n,3),i=r[0],a=r[1],c=r[2];return function(t){return t<=216/24389?t*(24389/27):116*Math.pow(t,1/3)-16}(.2126*Object(o.c)(i)+.7152*Object(o.c)(a)+.0722*Object(o.c)(c))>60}},mpRC:function(t,n,r){"use strict";r("PO4d")},odqC:function(t,n,r){"use strict";r("4R7y")},"w+pZ":function(t,n,r){"use strict";r("QfqM")},wg0c:function(t,n,r){var e=r("2oRo"),o=r("WKiH").trim,i=r("WJkJ"),a=e.parseInt,c=/^[+-]?0[Xx]/,s=8!==a(i+"08")||22!==a(i+"0x16");t.exports=s?function(t,n){var r=o(String(t));return a(r,n>>>0||(c.test(r)?16:10))}:a}}]);