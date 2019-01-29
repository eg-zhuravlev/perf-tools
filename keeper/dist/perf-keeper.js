var perfKeeper=function(n){"use strict";var M=null,T="font-weight: bold;",j=Function("return this")(),e=j.Date.now,t=e(),q=j.console,z=j.performance||{},C="groupCollapsed",D="mark",O="measure",_="clearMarks",H="clearMeasures";function I(n,e){return"color: #"+((n="KiB"===e?n/5:"fps"===e?70-n:n)<2?"ccc":n<5?"666":n<10?"333":n<30?"f90":n<60?"f60":"f00")}function r(n){var a,f=n.perf||z,l=n.prefix||"",d=n.console||q,c=n.warn||d.warn&&d.warn.bind(d),r=n.analytics||[],i=n.print,p=n.disabled,h=!!(n.timeline&&f[D]&&f[O]&&f[_]&&f[H]),m=[],o=[],v=[],g=[],w=0,k=!1;function x(n){var e=r.length;if(e)for(;e--;)r[e](n);else o.unshift(n)}function s(n){var e=n.id,t=""+l+n.name;f[O](t,e),f[_](e),f[H](t)}function e(){!function n(e){for(var t,r,i,o,s,u,a,f,c=0,p=0;c<e.length;c++)i=(r=e[c]).unit,r.end===M||r.active||(f=(a=r.entries)?a.length:0,t=r.start,o=(r.end-t)/("KiB"===i?1024:1),u=""+l+r.name+": %c"+("raw"===i?o:o.toFixed(3)+i),f<1?(d.log(u,""+T+I(o,i)),p+=o):(d[d[C]&&(r._||f<2)?C:"group"](u,I(o,i)),3<(s=o-n(a))&&(x(b("[[unknown]]",r,!1,t,t+s)),d.log(l+"[[unknown]]: %c"+s.toFixed(3)+"ms",""+T+I(s,i))),p+=o,d.groupEnd()),r.parent===M&&(e.splice(c,1),c--));return k=!1,p}(m)}function u(n){n!=M?(i=n)&&u():!1===k&&(k=!0,(j.requestAnimationFrame||setTimeout)(e))}function b(n,e,t,r,i,o){var s=""+l+n+"-"+ ++w+"-mark";e===a&&(e=g[0]||M);var u={id:s,name:n,parent:e,entries:t?[]:M,unit:"ms",active:+t,start:r!=M?r:f.now(),end:i!=M?i:M,stop:t?y:K};return e===M?!p&&m.push(u):e.end!==M&&i==M?c('[keeper] Group "'+e.name+'" is stopped'):p||(u.unit=e.unit,e.active++,e.entries.push(u)),t?(u.add=F,u.time=N,u.timeEnd=A,u.group=G,u.mark=B,!p&&!o&&g.unshift(u)):!p&&v.push(u),!p&&r==M&&h&&f[D](s),u}function K(n){return this.end===M&&(this.end=0<=n?n:f.now(),n==M&&h&&s(this),x(this),E(this.parent,n)),this}function y(n){return t(this),E(this,n),this}function E(n,e){if(i&&u(),n!==M)if(0<n.active)0==--n.active&&E(n,e);else if(n.end===M){var t=g.indexOf(n);-1<t&&g.splice(t,1),n.end=0<=e?e:f.now(),e==M&&h&&s(n),x(n),E(n.parent,e)}}function F(n,e,t){0<=e&&e<=t&&b(n,this,!1,e).stop(t)}function N(n,e){var t=b(n,this,!1);if(null==e)return t;e(),t.stop()}function A(n){if(!p){for(var e=v.length,t=void 0;e--;)if((t=v[e]).name===n)return t.stop(),void v.splice(e,1);c&&c('[keeper] Timer "'+n+"\" doesn't exist")}}function t(n){for(var e,t=n.entries,r=t.length;r--;)(e=t[r]).entries===M&&e.stop()}function B(n){t(this),this.time(n)}function G(n,e,t){return!0===e&&(t=e,e=M),b(n,t?M:this,!0,e,M,t)}return a={perf:f,entries:m,print:u,disable:function(n){p=n},setAnalytics:function(n){for(var e=n.length;e--;)for(var t=o.length;t--;)n[e](o[t]);r=n,o.length=0},add:F,time:N,timeEnd:A,group:G,groupEnd:function(n,e){for(var t=0;t<g.length;t++)if(n==M||g[t].name===n)return void g[t].stop(e);c('[keeper] Group "'+n+'" not found')}}}z.now=z.now||z.webkitNow||z.mozNow||z.msNow||function(){return e()-t};var i=j.perfKeeper?j.perfKeeper.system:r({print:/^(file:|https?:\/\/(localhost|artifact-project))/.test(j.location+""),timeline:!0,prefix:"⚡️"});return n.color=I,n.create=r,n.system=i,n}({});