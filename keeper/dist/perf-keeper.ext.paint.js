var perfKeeperExtPaint=function(t){"use strict";var f=Function("return this")(),m=f.document,l=f.performance;l&&l.now||Date.now;var v=[];var p={};return t.defaultPaintTimingsOptions=p,t.paintTimings=function(t,n){void 0===n&&(n=p);var r,o,s,u,i,e,a=(r="pk-paint",o=t,i={},[function(t,n,e,a){var r=i;v.concat(t).forEach(function(t){var n=r.nested||(r.nested={});r=n[t]||(n[t]={name:t})}),null!=r.end?r.end+=e-n:(r.start=n,r.end=e,r.unit=a)},function(t,n,e,a){i.name=t?r+"-"+t:r,i.start=n,i.end=e,function n(t,e){var a=t.nested,r=a?Object.keys(a):v;if(r.length){var i=(e||o).group(t.name,t.start);i._=!0,i.unit=s||"ms",(!1===u?r:r.sort()).forEach(function(t){n(a[t],i)}),i.stop(t.end)}else e.add(t.name,t.start,t.end),e.entries[e.entries.length-1].unit=t.unit||e.unit}(i,null),a&&(i={})}]),c=a[0],d=a[1];e=function t(){try{var n=l.getEntriesByType("paint");if(1<n.length){var e=0,a=0;n.sort(function(t,n){return t.startTime-n.startTime}).forEach(function(t){a=t.startTime,e=Math.max(e,a),c(t.name,0,a)}),d(null,0,e,!0)}else setTimeout(t,250)}catch(t){}},"complete"===m.readyState?e():f.addEventListener("DOMContentLoaded",e)},t}({});