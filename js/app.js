var e={version:"0.2.2",hostname:"https://shoka.lostyu.me",root:"/",statics:"//cdn.jsdelivr.net/gh/amehime/shoka@d1a31a15/",favicon:{normal:"images/favicon.ico",hidden:"images/failure.ico"},js:{valine:"gh/amehime/MiniValine@4.2.2-beta9/dist/MiniValine.min.js",chart:"npm/frappe-charts@1.5.0/dist/frappe-charts.min.iife.min.js",copy_tex:"npm/katex@0/dist/contrib/copy-tex.min.js",fancybox:"combine/npm/jquery@3.5.1/dist/jquery.min.js,npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js,npm/justifiedGallery@3.8.1/dist/js/jquery.justifiedGallery.min.js"},css:{valine:"css/comment.css",katex:"npm/katex@0/dist/katex.min.css",mermaid:"css/mermaid.css",fancybox:"combine/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css,npm/justifiedGallery@3.8.1/dist/css/justifiedGallery.min.css"},loader:{start:true,"switch":true},search:{appID:"8AVSL3TE18",apiKey:"439b6e54d1a5364824e689b5ca5a55db",indexName:"shoka",hits:{per_page:10}},valine:{appId:"GfnpjP6kVt5Hwl5FDnWDCEX3-gzGzoHsz",appKey:"5VPzAxojlyJTTif1RMYNBBQy",placeholder:"ヽ(○´∀`)ﾉ♪",avatar:"mp",pageSize:10,lang:"zh-CN",visitor:true,NoRecordIP:false,serverURLs:null,tagMeta:["主人","小伙伴","新朋友"],master:["deea5a8d259d17182a53be1772e4c182"],friends:["b9102961b7749ccda0c5c6c1d9d42e03","fc2c9b067f65c9e2d7057ba797f7cfca","14983359e7df56a2055c6b47753a66f8","8adafe8e74f58705cc6e0a1191e8c10b","1b0478861d9d76d9ba9624a0883198f0","d24719e3b7a66cbde951909bac991457","e75d515c7d17eac575bf0e89d4461b40","b90ed10c2395ddcfd33590a307ed3a4f","b10e532f516ea1f464636a8be2ab6daf","6bcf44de7033a4451f38d576fb6e6822","9c1f881af8a4c0e5d84528aae6271c7d","d03c1a5b7bed42f8bfecd084f359d2db","6bcf44de7033a4451f38d576fb6e6822","63888fafe3509785b63d09f1c44dc348","f934bb2298b268a59bf72c7f52344105","2a7765642415437fa16a54cd7f4442e2","d5e6f626299d1cc2ebb6a8b28dfbe4f3","f3517ae0315e5d5d5d99ea8c3415aff4","bbca35300364b268662a56b05d130341","406b2a0e1330c77fb4046e3ccd0a400e","5e14d26e8ebbf5b28fe734b82043d3ad","063d09d4cd137c27a94d0f74a9d26739"],powerMode:true},quicklink:{timeout:3e3,priority:true},audio:["https://music.163.com/#/playlist?id=2031842656"],fireworks:["rgba(255,182,185,.9)","rgba(250,227,217,.9)","rgba(187,222,214,.9)","rgba(138,198,209,.9)"]};const t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const a=function(){return d("main > .inner").offsetHeight};const i=function(e,t,a){if(a){t()}else{var i=document.createElement("script");i.onload=i.onreadystatechange=function(e,a){if(a||!i.readyState||/loaded|complete/.test(i.readyState)){i.onload=i.onreadystatechange=null;i=undefined;if(!a&&t)setTimeout(t,0)}};i.src=e;document.head.appendChild(i)}};const n=function(t,a){var i=e[t][a];if(i.indexOf("npm")>-1||i.indexOf("gh")>-1||i.indexOf("combine")>-1)return"//cdn.jsdelivr.net/"+i;if(i.indexOf("http")>-1)return i;return h+i};const s=function(e,t,a){if(LOCAL[e]){i(n("js",e),t||function(){window[e]=true},a||window[e])}};const r=function(e,t){if(window["css"+e])return;if(LOCAL[e]){document.head.createChild("link",{rel:"stylesheet",href:n("css",e)});window["css"+e]=true}};const c=function(e){var t=e.text||e.textContent||e.innerHTML||"";var a=e.parentNode;a.removeChild(e);var i=document.createElement("script");if(e.id){i.id=e.id}if(e.className){i.className=e.className}if(e.type){i.type=e.type}if(e.src){i.src=e.src;i.async=false}if(e.dataset.pjax!==undefined){i.dataset.pjax=""}if(t!==""){i.appendChild(document.createTextNode(t))}a.appendChild(i)};const o=function(e,t,a){var i={targets:typeof t=="number"?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:t||(typeof e=="number"?e:e.top()+document.documentElement.scrollTop-q),complete:function(){a&&a()}};anime(i)};const l=function(e,t,a){var i={};var n="none";switch(t){case 0:i={opacity:[1,0]};break;case 1:i={opacity:[0,1]};n="block";break;case"bounceUpIn":i={begin:function(t){e.display("block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]};n="block";break;case"shrinkIn":i={begin:function(t){e.display("block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1};n="block";break;case"slideRightIn":i={begin:function(t){e.display("block")},translateX:[100,0],opacity:[0,1]};n="block";break;case"slideRightOut":i={translateX:[0,100],opacity:[1,0]};break;default:i=t;n=t.display;break}anime(Object.assign({targets:e,duration:200,easing:"linear"},i)).finished.then(function(){e.display(n);a&&a()})};const d=function(e,t){t=t||document;if(e.indexOf("#")===0){return t.getElementById(e.replace("#",""))}return t.querySelector(e)};d.all=function(e,t){t=t||document;return t.querySelectorAll(e)};d.each=function(e,t,a){return d.all(e,a).forEach(t)};Object.assign(HTMLElement.prototype,{createChild:function(e,t){var a=document.createElement(e);Object.assign(a,t);this.appendChild(a);return a},wrap:function(e){var t=document.createElement("div");Object.assign(t,e);this.parentNode.insertBefore(t,this);this.parentNode.removeChild(this);t.appendChild(this)},height:function(e){if(e){this.style.height=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().height},width:function(e){if(e){this.style.width=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){if(t===null){return this.removeAttribute(e)}if(t){return this.setAttribute(e,t)}else{return this.getAttribute(e)}},insertAfter:function(e){var t=this.parentNode;if(t.lastChild==this){t.appendChild(e)}else{t.insertBefore(e,this.nextSibling)}},display:function(e){if(e==null){return this.style.display}else{this.style.display=e;return this}},child:function(e){return d(e,this)},find:function(e){return d.all(e,this)},_class:function(e,t,a){var i=t.indexOf(" ")?t.split(" "):[t];var n=this;i.forEach(function(t){if(e=="toggle"){n.classList.toggle(t,a)}else{n.classList[e](t)}})},addClass:function(e){this._class("add",e);return this},removeClass:function(e){this._class("remove",e);return this},toggleClass:function(e,t){this._class("toggle",e,t);return this},hasClass:function(e){return this.classList.contains(e)}});const u={get:function(e){return localStorage.getItem(e)},set:function(e,t){localStorage.setItem(e,t);return t},del:function(e){localStorage.removeItem(e)}};const f=function(e){var t=this,a={type:"audio",mode:"random",btns:["play-pause","music"],events:{"play-pause":function(e){if(t.media.source.paused){t.media.play()}else{t.media.pause()}},music:function(e){if(t.media.list.hasClass("show")){t.media.hideList()}else{t.media.list.addClass("show");t.media.scroll();t.media.changeTitle()}}}};var i={random:function(e){return Math.floor(Math.random()*e)},parse:function(e){var t=[];[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+).html","tencent","song"],["y.qq.com.*album/(\\w+).html","tencent","album"],["y.qq.com.*singer/(\\w+).html","tencent","artist"],["y.qq.com.*playsquare/(\\w+).html","tencent","playlist"],["y.qq.com.*playlist/(\\w+).html","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(function(a){var i=new RegExp(a[0]);var n=i.exec(e);if(n!==null){t=[a[1],a[2],n[1]]}});return t},fetch:function(e,t){var a=[];return new Promise(function(t,n){e.forEach(function(e){var n=i.parse(e);var s=JSON.stringify(n);var r=u.get(s);if(r){a.push.apply(a,JSON.parse(r));t(a)}else{fetch("https://api.i-meto.com/meting/api?server="+n[0]+"&type="+n[1]+"&id="+n[2]+"&r="+Math.random()).then(function(e){return e.json()}).then(function(e){u.set(s,JSON.stringify(e));a.push.apply(a,e);t(a)}).catch(function(e){})}})})},lrc:function(e){if(e){e=e.replace(/([^\]^\n])\[/g,function(e,t){return t+"\n["});const t=e.split("\n");var a=[];const i=t.length;for(var n=0;n<i;n++){const s=t[n].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g);const r=t[n].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(s){const c=s.length;for(var o=0;o<c;o++){const l=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(s[o]);const d=l[1]*60;const u=parseInt(l[2]);const f=l[4]?parseInt(l[4])/((l[4]+"").length===2?100:1e3):0;const h=d+u+f;a.push([h,r])}}}a=a.filter(function(e){return e[1]});a.sort(function(e,t){return e[0]-t[0]});return a}else{return[]}}};t.media={pointer:-1,loaded:false,source:null,buttons:{},playlist:[],lrc:{},fetch:function(e){var a=this;e=e||function(){};if(!this.loaded){if(this.options.rawList)i.fetch(this.options.rawList).then(function(i){a.playlist=i;n.list();a.setMode(t.media.options.mode);a.loaded=true;e()})}else{e()}},load:function(e){var t="";if(e&&e.length>0){if(this.options.rawList!==e){this.options.rawList=e;if(this.loaded){this.loaded=false;this.fetch()}}}else{t="none";this.pause()}for(var a in this.buttons){this.buttons[a].display(t)}},setMode:function(e){var a=this.playlist.length;if(!a)return;var n=function(e){if(e+1==a){e=-1}t.media.pointer=++e};switch(e){case"random":var s=i.random(a);if(this.pointer!==s){this.pointer=s}else{n(this.pointer)}break;case"next":n(this.pointer);break}this.setSource()},setCurrent:function(e){if(typeof e=="number"&&e!=this.pointer&&this.playlist[e]&&!this.playlist[e]["error"]){this.pointer=e;this.setSource()}},setSource:function(){var e=this.playlist[this.pointer];if(e["error"]){this.setMode("next");return}var t=false;if(!this.source.paused){t=true;this.stop()}this.source.attr("src",e.url);this.source.attr("title",e.title+" - "+e.author);n.progress();n.preview();if(t==true){this.play()}},play:function(){if(this.playlist[this.pointer]["error"]){this.setMode("next");return}var e=this;this.source.play().then(function(){e.changeTitle()}).catch(function(e){})},pause:function(){this.source.pause();document.title=v},stop:function(){this.source.pause();this.source.currentTime=0;document.title=v},scroll:function(){var e=this.list.find("li")[this.pointer];o(e,e.offsetTop)},scrollLrc:function(e){var t=this;if(!this.lrc.data)return;if(this.lrc.index>this.lrc.data.length-1||e<this.lrc.data[this.lrc.index][0]||(!this.lrc.data[this.lrc.index+1]||e>=this.lrc.data[this.lrc.index+1][0])){for(var a=0;a<this.lrc.data.length;a++){if(e>=this.lrc.data[a][0]&&(!this.lrc.data[a+1]||e<this.lrc.data[a+1][0])){t.lrc.index=a;var i=-(t.lrc.index-1);t.lrc.el.style.transform="translateY("+i+"rem)";t.lrc.el.style.webkitTransform="translateY("+i+"rem)";t.lrc.el.getElementsByClassName("current")[0].removeClass("current");t.lrc.el.getElementsByTagName("p")[a].addClass("current")}}}},hideList:function(){var e=this.list;e.addClass("hide");window.setTimeout(function(){e.removeClass("show hide")},300)},changeTitle:function(){if(!this.source.paused)document.title="Now Playing..."+this.playlist[this.pointer]["title"]+" - "+this.playlist[this.pointer]["author"]+" | "+v}};var n={button:function(e){if(!t.media.buttons[e]){var a=document.createElement("div");a.addClass(e+" btn");a.addEventListener("click",function(){t.media.fetch(t.media.options.events[e])});t.appendChild(a);t.media.buttons[e]=a}},audio:function(){if(!t.media.source){var e=document.createElement("audio");e.addEventListener("error",function(){t.media.list.find("li")[t.media.pointer].addClass("error");t.media.playlist[t.media.pointer]["error"]=true;t.media.setMode("next")});e.addEventListener("play",function(){t.addClass("playing");t.media.list.addClass("playing");U(e.attr("title"))});e.addEventListener("pause",function(){t.removeClass("playing");t.media.list.removeClass("playing")});e.addEventListener("timeupdate",function(){var a=Math.floor(e.currentTime/e.duration*100);t.media.progress.width(a+"%");if(t.media.lrc){t.media.scrollLrc(e.currentTime)}if(a==100){t.media.setMode("next");t.media.play()}});t.appendChild(e);t.media.source=e}},info:function(){if(!t.media.list){var e=document.createElement("div");e.addClass("play-list");e.innerHTML='<div class="preview"></div><ol></ol>';t.media.list=e;t.insertAfter(e);d("#main").addEventListener("click",function(){t.media.hideList()})}},list:function(){var e=t.media.list.child("ol");e.innerHTML="";t.media.playlist.forEach(function(a,i){var n=document.createElement("li");n.innerHTML='<span class="info"><span>'+a.title+"</span><span>"+a.author+"</span></span>";n.title=a.title+" - "+a.author;n.addEventListener("click",function(e){var a=e.currentTarget;if(t.media.pointer===i&&t.media.progress){if(t.media.source.paused){t.media.play()}else{t.media.source.currentTime=t.media.source.duration*Math.floor(e.clientX-a.left())/a.width()}return}t.media.setCurrent(i);t.media.play()});e.appendChild(n)})},progress:function(){if(t.media.progress){t.media.progress.parentNode.removeClass("current");t.media.progress.remove()}var e=t.media.list.find("li")[t.media.pointer];if(e){var a=document.createElement("div");a.addClass("progress");e.appendChild(a);t.media.progress=a;e.addClass("current");t.media.scroll()}},preview:function(){var e=t.media.list.child(".preview");var a=t.media.playlist[t.media.pointer];e.innerHTML='<div class="cover"><div class="disc"><img src="'+a.pic+'" class="blur" /></div></div>'+'<div class="info"><h4 class="title">'+a.title+"</h4><span>"+a.author+'</span><div class="lrc"></div></div>';var n="";fetch(a.lrc).then(function(e){return e.text()}).then(function(s){if(a!==t.media.playlist[t.media.pointer])return;t.media.lrc.data=i.lrc(s);var r="";t.media.lrc.data.forEach(function(e,t){n+="<p"+(t===0?' class="current"':"")+">"+e[1]+"</p>"});var c=document.createElement("div");c.addClass("inner");c.innerHTML=n;e.child(".lrc").innerHTML="";e.child(".lrc").appendChild(c);t.media.lrc.el=c;t.media.lrc.index=0}).catch(function(e){});e.child(".cover").addEventListener("click",t.media.options.events["play-pause"])}},s=function(e){if(t.media.created)return;t.media.options=Object.assign(a,e);t.media.options.btns.forEach(n.button);n[t.media.options.type]();n.info();t.media.created=true};s(e)};Object.assign(HTMLElement.prototype,{player:f});var h=e.statics.indexOf("//")>0?e.statics:e.root;var p={x:"undefined",y:"undefined"};var m=0;var v,g;const b=document.getElementsByTagName("body")[0];const y=document.documentElement;const w=d("#container");const C=d("#loading");const x=d("#nav");const L=d("#header");const k=x.child(".toggle");const E=d("#quick");const T=d("#sidebar");const N=d("#brand");var M=d("#tool"),O,j,I,H;var A=d("#search");var q,S,R;var z=0,B=window.location.href;var P;const D=lozad("img, [data-background-image]",{loaded:function(e){e.addClass("lozaded")}});const Y={timer:null,lock:false,show:function(){clearTimeout(this.timer);document.body.removeClass("loaded");C.attr("style","display:block");Y.lock=false},hide:function(t){if(!e.loader.start)t=-1;this.timer=setTimeout(this.vanish,t||3e3)},vanish:function(){if(Y.lock)return;if(e.loader.start)l(C,0);document.body.addClass("loaded");Y.lock=true}};const W=function(e){var t=d(".theme .ic");if(e){y.attr("data-theme",e);t.removeClass("i-sun");t.addClass("i-moon")}else{y.attr("data-theme",null);t.removeClass("i-moon");t.addClass("i-sun")}};const _=function(e){if(y.attr("data-theme")=="dark")e="#222";d('meta[name="theme-color"]').attr("content",e)};const F=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){if(e.matches){W("dark")}else{W()}});var e=u.get("theme");if(e){W(e)}d(".theme").addEventListener("click",function(e){var t=e.currentTarget.child(".ic");var a=b.createChild("div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'});var i=function(){l(a,{delay:2500,opacity:0},function(){b.removeChild(a)})};if(t.hasClass("i-sun")){var n=function(){a.addClass("dark");W("dark");u.set("theme","dark");i()}}else{a.addClass("dark");var n=function(){a.removeClass("dark");W();u.del("theme");i()}}l(a,1,function(){setTimeout(n,1e3)})})};const G=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":d('[rel="icon"]').attr("href",h+e.favicon.hidden);document.title=LOCAL.favicon.hide;if(e.loader.switch)Y.show();clearTimeout(g);break;case"visible":d('[rel="icon"]').attr("href",h+e.favicon.normal);document.title=LOCAL.favicon.show;if(e.loader.switch)Y.hide(1e3);g=setTimeout(function(){document.title=v},2e3);break}})};const U=function(e){if(!e)return;var t=b.createChild("div",{innerHTML:e,className:"tip"});setTimeout(function(){t.addClass("hide");setTimeout(function(){b.removeChild(t)},300)},3e3)};const V=function(e){q=x.height();S=L.height();R=S+d("#waves").height();K(null,1);T.style=""};const X=function(e){var t=window.innerHeight;var i=a();var n=i>t?i-t:document.body.scrollHeight-t;var s=window.pageYOffset>S;var r=window.pageYOffset>0;if(s){_("#FFF")}else{_("#222")}x.toggleClass("show",s);M.toggleClass("affix",r);N.toggleClass("affix",r);T.toggleClass("affix",window.pageYOffset>R&&document.body.offsetWidth>991);if(typeof p.y=="undefined"){p.y=window.pageYOffset}m=p.y-window.pageYOffset;if(m<0){x.removeClass("up");x.toggleClass("down",s)}else if(m>0){x.removeClass("down");x.toggleClass("up",s)}else{}p.y=window.pageYOffset;var c=Math.round(Math.min(100*window.pageYOffset/n,100))+"%";j.child("span").innerText=c;d(".percent").width(c)};const $=function(){u.set(B,p.y)};const J=function(e){var t=window.location.hash;var a=null;if(z){u.del(window.location.href);return}if(t)a=d(decodeURI(t));else{a=parseInt(u.get(window.location.href))}if(a){o(a);z=1}if(e&&t&&!z){o(a);z=1}};const Q=function(e,t){var a=b.createChild("textarea",{style:{top:window.scrollY+"px",position:"absolute",opacity:"0"},readOnly:true,value:e});const i=document.getSelection();const n=i.rangeCount>0?i.getRangeAt(0):false;a.select();a.setSelectionRange(0,e.length);a.readOnly=false;var s=document.execCommand("copy");t&&t(s);a.blur();if(n){i.removeAllRanges();i.addRange(n)}b.removeChild(a)};const K=function(e,t){if(T.hasClass("on")){T.removeClass("on");k.removeClass("close");l(T,"slideRightOut")}else{if(t)return;l(T,"slideRightIn",function(){T.addClass("on");k.addClass("close")})}};const Z=function(){var e=T.child(".inner");var t=T.find(".panel");if(T.child(".tab")){e.removeChild(T.child(".tab"))}var a=document.createElement("ul"),i="active";a.className="tab";["contents","related","overview"].forEach(function(e){var t=T.child(".panel."+e);if(t.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1){if(e=="contents"){H.display("none")}return}if(e=="contents"){H.display("")}var n=document.createElement("li");var s=document.createElement("span");var r=document.createTextNode(t.attr("data-title"));s.appendChild(r);n.appendChild(s);n.addClass(e+" item");if(i){t.addClass(i);n.addClass(i)}else{t.removeClass("active")}n.addEventListener("click",function(e){var t=event.currentTarget;if(t.hasClass("active"))return;T.find(".tab .item").forEach(function(e){e.removeClass("active")});T.find(".panel").forEach(function(e){e.removeClass("active")});T.child(".panel."+t.className.replace(" item","")).addClass("active");t.addClass("active")});a.appendChild(n);i=""});if(a.childNodes.length>1){e.insertBefore(a,e.childNodes[0]);T.child(".panels").style.paddingTop=""}else{T.child(".panels").style.paddingTop=".625rem"}};const ee=function(){var t=d.all(".contents li");if(t.length<1){return}var a=Array.prototype.slice.call(t)||[];var i=null;a=a.map(function(t,a){var n=t.child("a.toc-link");var r=d(decodeURI(n.attr("href")));if(!r)return;var c=r.child("a.anchor");var l=function(e){e.preventDefault();var t=d(decodeURI(e.currentTarget.attr("href")));i=a;o(t,null,function(){s(a);i=null})};n.addEventListener("click",l);c&&c.addEventListener("click",function(t){l(t);Q(e.hostname+"/"+LOCAL.path+t.currentTarget.attr("href"))});return r});var n=T.child(".contents.panel");var s=function(e,i){var s=t[e];if(!s)return;if(s.hasClass("current")){return}d.each(".toc .active",function(e){e&&e.removeClass("active current")});a.forEach(function(e){e&&e.removeClass("active")});s.addClass("active current");a[e]&&a[e].addClass("active");var r=s.parentNode;while(!r.matches(".contents")){if(r.matches("li")){r.addClass("active");var c=d(r.child("a.toc-link").attr("href"));if(c){c.addClass("active")}}r=r.parentNode}if(getComputedStyle(T).display!="none"&&n.hasClass("active")){o(n,s.offsetTop-n.offsetHeight/4)}};var r=function(e){var t=0;var i=e[t];if(i.boundingClientRect.top>0){t=a.indexOf(i.target);return t===0?0:t-1}for(;t<e.length;t++){if(e[t].boundingClientRect.top<=0){i=e[t]}else{return a.indexOf(i.target)}}return a.indexOf(i.target)};var c=function(){var e=new IntersectionObserver(function(e,t){var a=r(e)+(m<0?1:0);if(i===null){s(a)}},{rootMargin:"0px 0px -100% 0px",threshold:0});a.forEach(function(t){t&&e.observe(t)})};c()};const te=function(){o(0)};const ae=function(){o(parseInt(w.height()))};const ie=function(){o(d("#comments"))};const ne=function(){d.each(".menu .item:not(.title)",function(t){var a=t.child("a[href]");if(!a)return;var i=a.pathname===location.pathname||a.pathname===location.pathname.replace("index.html","");var n=!e.root.startsWith(a.pathname)&&location.pathname.startsWith(a.pathname);var s=a.hostname===location.hostname&&(i||n);t.toggleClass("active",s);t.parentNode.parentNode.toggleClass("expand",t.parentNode.hasClass("submenu")&&t.parentNode.child(".active"))})};const se=function(){if(!d(".index.wrap"))return;var e=new IntersectionObserver(function(t){t.forEach(function(t){if(!window.IntersectionObserver){if(t.target.hasClass("show")===false){t.target.addClass("show")}}else{if(t.target.hasClass("show")){e.unobserve(t.target)}else{if(t.isIntersecting){t.target.addClass("show");e.unobserve(t.target)}}}})},{root:null,threshold:[.3]});d.each(".index.wrap article.item, .index.wrap section.item",function(t){e.observe(t)});d(".index.wrap .item:first-child").addClass("show");d.each(".cards .item",function(e,t){["mouseenter","touchstart"].forEach(function(t){e.addEventListener(t,function(t){if(d(".cards .item.active")){d(".cards .item.active").removeClass("active")}e.addClass("active")})});["mouseleave"].forEach(function(t){e.addEventListener(t,function(t){e.removeClass("active")})})})};const re=function(){d.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));t.rel="noopener external nofollow noreferrer";t.target="_blank";t.className=e.className;t.title=e.title||e.innerText;t.innerHTML=e.innerHTML;if(e.dataset.backgroundImage){t.dataset.backgroundImage=e.dataset.backgroundImage}e.parentNode.replaceChild(t,e)})};const ce=function(){oe();if(!d(".md"))return;d(".post.block").oncopy=function(e){U(LOCAL.copyright);var t=d("#copyright");if(window.getSelection().toString().length>30&&t){e.preventDefault();var a="# "+t.child(".author").innerText;var i="# "+t.child(".link").innerText;var n="# "+t.child(".license").innerText;var s=a+"<br>"+i+"<br>"+n+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>");var r=a+"\n"+i+"\n"+n+"\n\n"+window.getSelection().toString().replace(/\r\n/g,"\n");if(e.clipboardData){e.clipboardData.setData("text/html",s);e.clipboardData.setData("text/plain",r)}else if(window.clipboardData){return window.clipboardData.setData("text",r)}}};if(d(".md img")){r("fancybox");s("fancybox",function(){var e=jQuery.noConflict();d.each("p.gallery",function(e){var t=document.createElement("div");t.className="gallery";t.attr("data-height",e.attr("data-height")||120);t.innerHTML=e.innerHTML.replace(/<br>/g,"");e.parentNode.insertBefore(t,e);e.remove()});d.each(".md img",function(t){var a=e(t);var i,n;if(!a.is("a img")){var s=a.attr("data-src")||a.attr("src");a.data("safe-src",s);var r=a.wrap('<a class="fancybox" href="'+s+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a");if(!a.is(".gallery img")){r.attr("data-fancybox","default").attr("rel","default");n="image-info"}else{n="jg-caption"}}if(i=t.attr("title")){var c=document.createElement("span");var o=document.createTextNode(i);c.appendChild(o);c.addClass(n);t.insertAfter(c)}});e("div.gallery").each(function(t,a){e(a).justifiedGallery({rowHeight:e(a).data("height")||120,rel:"gallery-"+t}).on("jg.complete",function(){e(this).find("a").each(function(e,a){a.attr("data-fancybox","gallery-"+t)})})});e.fancybox.defaults.hash=false;e(".fancybox").fancybox({loop:true,helpers:{overlay:{locked:false}}})},window.jQuery)}d.each("li ruby",function(e){var t=e.parentNode;if(e.parentNode.tagName!="LI"){t=e.parentNode.parentNode}t.addClass("ruby")});d.each(".md table",function(e){e.wrap({className:"table-container"})});d.each(".highlight > .table-container",function(e){e.className="code-container"});d.each("figure.highlight",function(e){var t=e.child(".code-container");var a=e.child("figcaption");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');var i=e.child(".copy-btn");i.addEventListener("click",function(e){var a=e.currentTarget;var i="",n="";t.find("pre").forEach(function(e){n+=i+e.innerText;i="\n"});Q(n,function(e){a.child(".ic").className=e?"ic i-check":"ic i-times";a.blur();U(LOCAL.copyright)})});i.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.child(".ic").className="ic i-clipboard"},1e3)});var n=e.child(".breakline-btn");n.addEventListener("click",function(t){var a=t.currentTarget;if(e.hasClass("breakline")){e.removeClass("breakline");a.child(".ic").className="ic i-align-left"}else{e.addClass("breakline");a.child(".ic").className="ic i-align-justify"}});var s=e.child(".fullscreen-btn");var r=function(){e.removeClass("fullscreen");e.scrollTop=0;b.removeClass("fullscreen");s.child(".ic").className="ic i-expand"};var c=function(t){var a=t.currentTarget;if(e.hasClass("fullscreen")){r();f&&f();o(e)}else{e.addClass("fullscreen");b.addClass("fullscreen");s.child(".ic").className="ic i-compress";u&&u()}};s.addEventListener("click",c);a&&a.addEventListener("click",c);if(t&&t.height()>300){t.style.maxHeight="300px";t.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');var l=t.child(".show-btn");var d=l.child("i");var u=function(){t.style.maxHeight="";l.addClass("open")};var f=function(){t.style.maxHeight="300px";l.removeClass("open")};l.addEventListener("click",function(e){if(l.hasClass("open")){r();f();o(t)}else{u()}})}});d.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});d.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var t=d("#qr");if(t.display()==="inline-flex"){l(t,0)}else{l(t,1,function(){t.display("inline-flex")})}})});d.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){if(e.hasClass("correct")){e.toggleClass("right");e.parentNode.parentNode.addClass("show")}else{e.toggleClass("wrong")}})});d.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.toggleClass("show")})});d.each(".quiz > p:first-child",function(e){var t=e.parentNode;var a="choice";if(t.hasClass("true")||t.hasClass("false"))a="true_false";if(t.hasClass("multi"))a="multiple";if(t.hasClass("fill"))a="gap_fill";if(t.hasClass("essay"))a="essay";e.attr("data-type",LOCAL.quiz[a])});d.each(".quiz .mistake",function(e){e.attr("data-type",LOCAL.quiz.mistake)});var e;d.each("div.tab",function(t,a){var i=t.attr("data-id");var n=t.attr("data-title");var s=d("#"+i);if(!s){s=document.createElement("div");s.className="tabs";s.id=i;s.innerHTML='<div class="show-btn"></div>';var r=s.child(".show-btn");r.addEventListener("click",function(e){o(s)});t.parentNode.insertBefore(s,t);e=true}else{e=false}var c=s.child(".nav");if(!c){c=s.createChild("ul",{className:"nav"})}var l=c.createChild("li",{innerHTML:n});if(e){l.addClass("active");t.addClass("active")}l.addEventListener("click",function(e){var a=e.currentTarget;s.find(".active").forEach(function(e){e.removeClass("active")});t.addClass("active");a.addClass("active")});s.appendChild(t)});d.each("div.tags a",function(e){e.className=["primary","success","info","warning","danger"][Math.floor(Math.random()*5)]})};const oe=function(){var e=d("#comments");if(!e){I.display("none");return}else{I.display("")}var t=new IntersectionObserver(function(e,t){var a=e[0];r("valine");if(a.isIntersecting){l(d("#comments"),"bounceUpIn");t.disconnect()}});t.observe(e)};const le=function(t){if(e.search===null)return;if(!A){A=b.createChild("div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})}var a=instantsearch({indexName:e.search.indexName,searchClient:algoliasearch(e.search.appID,e.search.apiKey),searchFunction:function(e){var t=d(".search-input");if(t.value){e.search()}}});a.on("render",function(){t.refresh(d("#search-hits"))});a.addWidgets([instantsearch.widgets.configure({hitsPerPage:e.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(t){var a=t.categories?"<span>"+t.categories.join('<i class="ic i-angle-right"></i>')+"</span>":"";return'<a href="'+e.root+t.path+'">'+a+t._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);a.start();d.each(".search",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden";l(A,"shrinkIn",function(){d(".search-input").focus()})})});const i=function(){document.body.style.overflow="";l(A,0)};A.addEventListener("click",function(e){if(e.target===A){i()}});d(".close-btn").addEventListener("click",i);window.addEventListener("pjax:success",i);window.addEventListener("keyup",function(e){if(e.key==="Escape"){i()}})};const de=function(){d.each(".overview .menu > .item",function(e){x.child(".menu").appendChild(e.cloneNode(true))});C.addEventListener("click",Y.vanish);k.addEventListener("click",K);d(".dimmer").addEventListener("click",K);E.child(".down").addEventListener("click",ae);E.child(".up").addEventListener("click",te);if(!M){M=L.createChild("div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'
})}O=M.child(".player");j=M.child(".back-to-top");I=M.child(".chat");H=M.child(".contents");j.addEventListener("click",te);I.addEventListener("click",ie);H.addEventListener("click",K);O.player()};const ue=function(){$();if(T.hasClass("on")){l(T,function(){T.removeClass("on");k.removeClass("close")})}d("#content").innerHTML="";d("#content").appendChild(C.lastChild.cloneNode(true));o(0)};const fe=function(t){z=0;B=window.location.href;r("katex");s("copy_tex");r("mermaid");s("chart");s("valine",function(){var t=Object.assign({},e.valine);t=Object.assign(t,LOCAL.valine||{});t.el="#comments";t.pathname=LOCAL.path;t.pjax=P;t.lazyload=D;new MiniValine(t);setTimeout(function(){J(1)},1e3)},window.MiniValine);if(!t){d.each("script[data-pjax]",c)}v=document.title;V();ne();Z();ee();re();ce();O.media.load(LOCAL.audio||e.audio||{});Y.hide();setTimeout(function(){J()},500);se();D.observe()};const he=function(){de();P=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:false,cacheBust:false});e.quicklink.ignores=LOCAL.ignores;quicklink.listen(e.quicklink);G();F();le(P);window.addEventListener("scroll",X);window.addEventListener("resize",V);window.addEventListener("pjax:send",ue);window.addEventListener("pjax:success",fe);window.addEventListener("beforeunload",function(){$()});fe(1)};window.addEventListener("DOMContentLoaded",he);console.log("%c Theme.Shoka v"+e.version+" %c https://shoka.lostyu.me/ ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");var pe=document.createElement("canvas");pe.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:9999999";document.body.appendChild(pe);var me=pe.getContext("2d");var ve=30;var ge=0;var be=0;var ye="ontouchstart"in window||navigator.msMaxTouchPoints?"touchstart":"mousedown";var we=e.fireworks;function Ce(){pe.width=window.innerWidth*2;pe.height=window.innerHeight*2;pe.style.width=window.innerWidth+"px";pe.style.height=window.innerHeight+"px";pe.getContext("2d").scale(2,2)}function xe(e){ge=e.clientX||e.touches&&e.touches[0].clientX;be=e.clientY||e.touches&&e.touches[0].clientY}function Le(e){var t=anime.random(0,360)*Math.PI/180;var a=anime.random(50,180);var i=[-1,1][anime.random(0,1)]*a;return{x:e.x+i*Math.cos(t),y:e.y+i*Math.sin(t)}}function ke(e,t){var a={};a.x=e;a.y=t;a.color=we[anime.random(0,we.length-1)];a.radius=anime.random(16,32);a.endPos=Le(a);a.draw=function(){me.beginPath();me.arc(a.x,a.y,a.radius,0,2*Math.PI,true);me.fillStyle=a.color;me.fill()};return a}function Ee(e,t){var a={};a.x=e;a.y=t;a.color="#FFF";a.radius=.1;a.alpha=.5;a.lineWidth=6;a.draw=function(){me.globalAlpha=a.alpha;me.beginPath();me.arc(a.x,a.y,a.radius,0,2*Math.PI,true);me.lineWidth=a.lineWidth;me.strokeStyle=a.color;me.stroke();me.globalAlpha=1};return a}function Te(e){for(var t=0;t<e.animatables.length;t++){e.animatables[t].target.draw()}}function Ne(e,t){var a=Ee(e,t);var i=[];for(var n=0;n<ve;n++){i.push(ke(e,t))}anime.timeline().add({targets:i,x:function(e){return e.endPos.x},y:function(e){return e.endPos.y},radius:.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:Te}).add({targets:a,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:Te},0)}var Me=anime({duration:Infinity,update:function(){me.clearRect(0,0,pe.width,pe.height)}});document.addEventListener(ye,function(e){Me.play();xe(e);Ne(ge,be)},false);Ce();window.addEventListener("resize",Ce,false);