var XDate=function(e,t,n,r){function i(){var t=this instanceof i?this:new i,n=arguments,r=n.length;if("boolean"==typeof n[r-1]){var u=n[--r];n=D(n,0,r)}if(r)if(1==r){if(r=n[0],r instanceof e)t[0]=new e(r.getTime());else if("number"==typeof r)t[0]=new e(r);else if(r instanceof i){var n=t,a=new e(r[0].getTime());s(r)&&(a.toString=k),n[0]=a}else if("string"==typeof r){t[0]=new e(0);e:{for(var n=r,r=u||!1,a=i.parsers,f=0,c;f<a.length;f++)if(c=a[f](n,r,t)){t=c;break e}t[0]=new e(n)}}}else t[0]=new e(O.apply(e,n)),u||(t[0]=U(t[0]));else t[0]=new e;return"boolean"==typeof u&&o(t,u),t}function s(e){return e[0].toString===k}function o(t,n,r){return n?s(t)||(r&&(n=t[0],n=new e(O(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())),t[0]=n),t[0].toString=k):s(t)&&(t[0]=r?U(t[0]):new e(t[0].getTime())),t}function u(e,t,n,r,i){var s=w(M,e[0],i);e=w(C,e[0],i),i=!1,2==r.length&&"boolean"==typeof r[1]&&(i=r[1],r=[n]),n=1==t?(n%12+12)%12:s(1),e(t,r),i&&s(1)!=n&&(e(1,[s(1)-1]),e(2,[S(s(0),s(1))]))}function a(e,n,r,i){r=Number(r);var s=t.floor(r);e["set"+N[n]](e["get"+N[n]]()+s,i||!1),s!=r&&6>n&&a(e,n+1,(r-s)*J[n],i)}function f(e,n,r){e=e.clone().setUTCMode(!0,!0),n=i(n).setUTCMode(!0,!0);var s=0;if(0==r||1==r){for(var o=6;o>=r;o--)s/=J[o],s+=M(n,!1,o)-M(e,!1,o);1==r&&(s+=12*(n.getFullYear()-e.getFullYear()))}else 2==r?(r=e.toDate().setUTCHours(0,0,0,0),s=n.toDate().setUTCHours(0,0,0,0),s=t.round((s-r)/864e5)+(n-s-(e-r))/864e5):s=(n-e)/[36e5,6e4,1e3,1][r-3];return s}function c(n){var r=n(0),i=n(1),s=n(2);return n=new e(O(r,i,s)),r=g(l(r,i,s)),t.floor(t.round((n-r)/864e5)/7)+1}function l(t,n,r){return n=new e(O(t,n,r)),n<g(t)?t-1:n>=g(t+1)?t+1:t}function g(t){return t=new e(O(t,0,4)),t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+6)%7),t}function d(e,t,n,i){var s=w(M,e,i),o=w(C,e,i);n===r&&(n=l(s(0),s(1),s(2))),n=g(n),i||(n=U(n)),e.setTime(n.getTime()),o(2,[s(2)+7*(t-1)])}function h(e,t,n,r,s){var o=i.locales,u=o[i.defaultLocale]||{},a=w(M,e,s);return n=("string"==typeof n?o[n]:n)||{},m(e,t,function(e){if(r)for(var t=(7==e?2:e)-1;0<=t;t--)r.push(a(t));return a(e)},function(e){return n[e]||u[e]},s)}function m(e,t,n,i,s){for(var o,u,a="";o=t.match(L);){if(a+=t.substr(0,o.index),o[1]){u=a;for(var f=e,c=o[1],l=n,g=i,d=s,h=c.length,y="";0<h;)a=T(f,c.substr(0,h),l,g,d),a!==r?(y+=a,c=c.substr(h),h=c.length):h--;a=u+(y+c)}else o[3]?(u=m(e,o[4],n,i,s),parseInt(u.replace(/\D/g,""),10)&&(a+=u)):a+=o[7]||"'";t=t.substr(o.index+o[0].length)}return a+t}function T(e,n,r,s,o){var u=i.formatters[n];if("string"==typeof u)return m(e,u,r,s,o);if("function"==typeof u)return u(e,o||!1,s);switch(n){case"fff":return z(r(6),3);case"s":return r(5);case"ss":return z(r(5));case"m":return r(4);case"mm":return z(r(4));case"h":return r(3)%12||12;case"hh":return z(r(3)%12||12);case"H":return r(3);case"HH":return z(r(3));case"d":return r(2);case"dd":return z(r(2));case"ddd":return s("dayNamesShort")[r(7)]||"";case"dddd":return s("dayNames")[r(7)]||"";case"M":return r(1)+1;case"MM":return z(r(1)+1);case"MMM":return s("monthNamesShort")[r(1)]||"";case"MMMM":return s("monthNames")[r(1)]||"";case"yy":return(r(0)+"").substring(2);case"yyyy":return r(0);case"t":return y(r,s).substr(0,1).toLowerCase();case"tt":return y(r,s).toLowerCase();case"T":return y(r,s).substr(0,1);case"TT":return y(r,s);case"z":case"zz":case"zzz":return o?n="Z":(s=e.getTimezoneOffset(),e=0>s?"+":"-",r=t.floor(t.abs(s)/60),s=t.abs(s)%60,o=r,"zz"==n?o=z(r):"zzz"==n&&(o=z(r)+":"+z(s)),n=e+o),n;case"w":return c(r);case"ww":return z(c(r));case"S":return n=r(2),10<n&&20>n?"th":["st","nd","rd"][n%10-1]||"th"}}function y(e,t){return t(12>e(3)?"amDesignator":"pmDesignator")}function p(e){return!isNaN(e[0].getTime())}function M(e,t,n){return e["get"+(t?"UTC":"")+N[n]]()}function C(e,t,n,r){e["set"+(t?"UTC":"")+N[n]].apply(e,r)}function U(t){return new e(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds())}function S(t,n){return 32-new e(O(t,n,32)).getUTCDate()}function v(e){return function(){return e.apply(r,[this].concat(D(arguments)))}}function w(e){var t=D(arguments,1);return function(){return e.apply(r,t.concat(D(arguments)))}}function D(e,t,i){return n.prototype.slice.call(e,t||0,i===r?e.length:i)}function b(e,t){for(var n=0;n<e.length;n++)t(e[n],n)}function z(e,t){for(t=t||2,e+="";e.length<t;)e="0"+e;return e}var N="FullYear Month Date Hours Minutes Seconds Milliseconds Day Year".split(" "),H=["Years","Months","Days"],J=[12,31,24,60,60,1e3,1],L=/(([a-zA-Z])\2*)|(\((('.*?'|\(.*?\)|.)*?)\))|('(.*?)')/,O=e.UTC,k=e.prototype.toUTCString,A=i.prototype;return A.length=1,A.splice=n.prototype.splice,A.getUTCMode=v(s),A.setUTCMode=v(o),A.getTimezoneOffset=function(){return s(this)?0:this[0].getTimezoneOffset()},b(N,function(e,t){A["get"+e]=function(){return M(this[0],s(this),t)},8!=t&&(A["getUTC"+e]=function(){return M(this[0],!0,t)}),7!=t&&(A["set"+e]=function(e){return u(this,t,e,arguments,s(this)),this},8!=t&&(A["setUTC"+e]=function(e){return u(this,t,e,arguments,!0),this},A["add"+(H[t]||e)]=function(e,n){return a(this,t,e,n),this},A["diff"+(H[t]||e)]=function(e){return f(this,e,t)}))}),A.getWeek=function(){return c(w(M,this,!1))},A.getUTCWeek=function(){return c(w(M,this,!0))},A.setWeek=function(e,t){return d(this,e,t,!1),this},A.setUTCWeek=function(e,t){return d(this,e,t,!0),this},A.addWeeks=function(e){return this.addDays(7*Number(e))},A.diffWeeks=function(e){return f(this,e,2)/7},i.parsers=[function(t,n,r){if(t=t.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/)){var i=new e(O(t[1],t[3]?t[3]-1:0,t[5]||1,t[7]||0,t[8]||0,t[10]||0,t[12]?1e3*Number("0."+t[12]):0));return t[13]?t[14]&&i.setUTCMinutes(i.getUTCMinutes()+("-"==t[15]?1:-1)*(60*Number(t[16])+(t[18]?Number(t[18]):0))):n||(i=U(i)),r.setTime(i.getTime())}}],i.parse=function(e){return+i(""+e)},A.toString=function(e,t,n){return e!==r&&p(this)?h(this,e,t,n,s(this)):this[0].toString()},A.toUTCString=A.toGMTString=function(e,t,n){return e!==r&&p(this)?h(this,e,t,n,!0):this[0].toUTCString()},A.toISOString=function(){return this.toUTCString("yyyy-MM-dd'T'HH:mm:ss(.fff)zzz")},i.defaultLocale="",i.locales={"":{monthNames:"Janvier Février Mars Avril Mai Juin Juillet Août Septembre Octobre Novembre Décembre".split(" "),monthNamesShort:"Jan Fév Mar Avr Mai Jui Juil Aou Sep Oct Nov Dec".split(" "),dayNames:"Dimanche Lundi Mardi Mercredi Jeudi Vendredi Samedi".split(" "),dayNamesShort:"Dim Lun Mar Mer Jeu Ven Sam".split(" "),amDesignator:"AM",pmDesignator:"PM"}},i.formatters={i:"yyyy-MM-dd'T'HH:mm:ss(.fff)",u:"yyyy-MM-dd'T'HH:mm:ss(.fff)zzz"},b("getTime valueOf toDateString toTimeString toLocaleString toLocaleDateString toLocaleTimeString toJSON".split(" "),function(e){A[e]=function(){return this[0][e]()}}),A.setTime=function(e){return this[0].setTime(e),this},A.valid=v(p),A.clone=function(){return new i(this)},A.clearTime=function(){return this.setHours(0,0,0,0)},A.toDate=function(){return new e(this[0].getTime())},i.now=function(){return(new e).getTime()},i.today=function(){return(new i).clearTime()},i.UTC=O,i.getDaysInMonth=S,"undefined"!=typeof module&&module.exports&&(module.exports=i),"function"==typeof define&&define.amd&&define([],function(){return i}),i}(Date,Math,Array);