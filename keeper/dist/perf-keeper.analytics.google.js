var perfKeeperAnalyticsGoogle=function(e){"use strict";var m=Function("return this")(),t={prefix:"",normalize:function(e){return e},sendZeroValues:!1,useTabName:function(e){var n=e.pathname;return("/"===n?"index":n).replace(/[\/\.]+/g,"-").replace(/^-|-$/g,"")}};function a(e,n){return e&&n in e?e[n]:t[n]}return e.googleAnalytics=function(e,n){var u=a(e,"prefix")||"",o=a(e,"useTabName"),g=a(e,"sendZeroValues"),t=[],l=function(e){n?n("send",e):t.push(e)};return n||function e(){(n=m.gtag?function(e,n){m.gtag("event","timing_complete",{name:n.timingVar,value:n.timingValue,event_category:n.timingCategory,event_label:n.timingLabel})}:m.ga)?(t.forEach(l),t.length=0):setTimeout(e,500)}(),function(e){if(null!==(n=e).start&&null!==n.end){var n,t=e.name,a="value",i=e.parent;if(i)for(a=e.name;;){if(!i.parent){t=i.name;break}a=i.name+"_"+a,i=i.parent}var r=Math.round(e.end-e.start);(r||g)&&l({hitType:"timing",timingCategory:""+u+t,timingVar:a,timingValue:r,timingLabel:o?o(m.location):void 0})}}},e}({});
