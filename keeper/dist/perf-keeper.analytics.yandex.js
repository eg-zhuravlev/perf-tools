var perfKeeperAnalyticsYandex=function(n){"use strict";Function("return this")();var r={prefix:"",sendZeroValues:!1,useTabName:function(n){var e=n.pathname;return("/"===e?"index":e).replace(/[\/\.]+/g,"-").replace(/^-|-$/g,"")}};function a(n,e){return n&&e in n?n[e]:r[e]}return n.yandexAnalytics=function(n,e){var r=a(n,"id"),s=a(n,"prefix"),c=a(n,"useTabName"),f=a(n,"sendZeroValues"),t=[],l=function(n){e?e(r,"params",n):t.push(n)};return!e&&function n(){(e=window.ym)?(t.forEach(l),t.length=0):setTimeout(n,500)}(),function(n){if(null!==(e=n).start&&null!==e.end){for(var e,r=[],t={},a=n;r.unshift(a.name),a=a.parent;);c&&r.push("__page__",c(location));for(var u=t,i=0,o=r.length-1;i<o;i++)u=u[(0===i&&s?s:"")+r[i]]={};u[r[o]]=Math.round(n.end-n.start),(u[r[o]]||f)&&l(t)}}},n}({});
