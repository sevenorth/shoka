var e={hostname:"shoka.lostyu.me",root:"/",statics:"//cdn.jsdelivr.net/gh/amehime/shoka@latest/",favicon:{normal:"images/favicon.ico",hidden:"images/failure.ico"},js:{valine:"js/valine.js",chart:"npm/frappe-charts@1.5.0/dist/frappe-charts.min.iife.min.js",copy_tex:"npm/katex@0/dist/contrib/copy-tex.min.js",mediumzoom:"npm/medium-zoom@1.0.5/dist/medium-zoom.min.js"},css:{valine:"css/comment.css",katex:"npm/katex@0/dist/katex.min.css",mermaid:"css/mermaid.css"},search:{appID:"8AVSL3TE18",apiKey:"439b6e54d1a5364824e689b5ca5a55db",indexName:"shoka",hits:{per_page:10}},valine:{appId:"GfnpjP6kVt5Hwl5FDnWDCEX3-gzGzoHsz",appKey:"5VPzAxojlyJTTif1RMYNBBQy",placeholder:"ヽ(○´∀`)ﾉ♪",avatar:"mp",pageSize:10,lang:"zh-CN",visitor:true,recordIP:true,serverURLs:null,requiredFields:["nick","mail"],enableQQ:true,masters:["hash of master@email.com","hash of master2@email.com","deea5a8d259d17182a53be1772e4c182"],masterTag:"主人",tips:"昵称框中填入QQ号，将自动获取QQ昵称&邮箱&头像；其他邮箱由Gavatar提供头像。"},quicklink:{timeout:3e3,priority:true},versoin:"0.1.1",audio:["https://music.163.com/#/my/m/music/playlist?id=2031842656"]};const t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const n=function(){return l("main > .inner").offsetHeight};const i=function(e,t,n){if(n){t()}else{var i=document.createElement("script");i.onload=i.onreadystatechange=function(e,n){if(n||!i.readyState||/loaded|complete/.test(i.readyState)){i.onload=i.onreadystatechange=null;i=undefined;if(!n&&t)setTimeout(t,0)}};i.src=e;document.head.appendChild(i)}};const a=function(t,n){return(e[t][n].indexOf("npm")>-1?"//cdn.jsdelivr.net/":f)+e[t][n]};const s=function(e,t,n){if(LOCAL[e]){i(a("js",e),t||function(){window[e]=true},n||window[e])}};const r=function(e,t){if(window["css"+e])return;if(LOCAL[e]){var n=document.createElement("link");n.attr("rel","stylesheet");n.href=a("css",e);document.head.appendChild(n);window["css"+e]=true}};const o=function(e){var t=e.text||e.textContent||e.innerHTML||"";var n=e.parentNode;n.removeChild(e);var i=document.createElement("script");if(e.id){i.id=e.id}if(e.className){i.className=e.className}if(e.type){i.type=e.type}if(e.src){i.src=e.src;i.async=false}if(e.dataset.pjax!==undefined){i.dataset.pjax=""}if(t!==""){i.appendChild(document.createTextNode(t))}n.appendChild(i)};const c=function(e,t,n){Velocity(e,"scroll",{duration:500,easing:"easeOutQuart",offset:t||-L,complete:n||function(){}})};const l=function(e,t){t=t||document;if(e.indexOf("#")===0){return t.getElementById(e.replace("#",""))}return t.querySelector(e)};l.all=function(e,t){t=t||document;return t.querySelectorAll(e)};l.each=function(e,t,n){return l.all(e,n).forEach(t)};Object.assign(HTMLElement.prototype,{wrap:function(e){this.parentNode.insertBefore(e,this);this.parentNode.removeChild(this);e.appendChild(this)},height:function(e){if(e){this.style.height=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().height},width:function(e){if(e){this.style.width=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){if(t===null){return this.removeAttribute(e)}if(t){return this.setAttribute(e,t)}else{return this.getAttribute(e)}},insertAfter:function(e){var t=this.parentNode;if(t.lastChild==this){t.appendChild(e)}else{t.insertBefore(e,this.nextSibling)}},display:function(e){this.style.display=e},child:function(e){return l(e,this)},find:function(e){return l.all(e,this)},_class:function(e,t,n){var i=t.indexOf(" ")?t.split(" "):[t];var a=this;i.forEach(function(t){if(e=="toggle"){a.classList.toggle(t,n)}else{a.classList[e](t)}})},addClass:function(e){this._class("add",e);return this},removeClass:function(e){this._class("remove",e);return this},toggleClass:function(e,t){this._class("toggle",e,t);return this},hasClass:function(e){return this.classList.contains(e)}});const d={get:function(e){return localStorage.getItem(e)},set:function(e,t){localStorage.setItem(e,t);return t},del:function(e){localStorage.removeItem(e)}};const u=function(e){var t=this,n={type:"audio",mode:"random",btns:["play-pause","music"],events:{"play-pause":function(e){if(t.media.source.paused){t.media.play()}else{t.media.pause()}},music:function(e){t.media.list.toggleClass("on");t.media.scroll()}}};var i={random:function(e){return Math.floor(Math.random()*e)},parse:function(e){var t=[];[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+).html","tencent","song"],["y.qq.com.*album/(\\w+).html","tencent","album"],["y.qq.com.*singer/(\\w+).html","tencent","artist"],["y.qq.com.*playsquare/(\\w+).html","tencent","playlist"],["y.qq.com.*playlist/(\\w+).html","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(function(n){var i=new RegExp(n[0]);var a=i.exec(e);if(a!==null){t=[n[1],n[2],a[1]]}});return t},lrc:function(e){if(e){e=e.replace(/([^\]^\n])\[/g,function(e,t){return t+"\n["});const t=e.split("\n");var n=[];const i=t.length;for(var a=0;a<i;a++){const s=t[a].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g);const r=t[a].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(s){const o=s.length;for(var c=0;c<o;c++){const l=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(s[c]);const d=l[1]*60;const u=parseInt(l[2]);const f=l[4]?parseInt(l[4])/((l[4]+"").length===2?100:1e3):0;const m=d+u+f;n.push([m,r])}}}n=n.filter(function(e){return e[1]});n.sort(function(e,t){return e[0]-t[0]});return n}else{return[]}}};t.media={pointer:-1,source:null,buttons:{},playlist:[],lrc:{},fetch:function(e,t){var n=this;var a=[];return new Promise(function(t,n){e.forEach(function(e){var n=i.parse(e);var s=JSON.stringify(n);var r=d.get(s);if(r){a.push.apply(a,JSON.parse(r));t(a)}else{fetch("https://api.i-meto.com/meting/api?server="+n[0]+"&type="+n[1]+"&id="+n[2]+"&r="+Math.random()).then(function(e){return e.json()}).then(function(e){d.set(s,JSON.stringify(e));a.push.apply(a,e);t(a)}).catch(function(e){})}})})},load:function(e){if(e){if(this.options.rawList!==e){var t=this;this.options.rawList=e;this.fetch(e).then(function(e){t.playlist=e;a.list();t.setMode(t.options.mode)})}}},setMode:function(e){var n=this.playlist.length;if(!n)return;var a=function(e){if(e+1==n){e=-1}t.media.pointer=++e};switch(e){case"random":var s=i.random(n);if(this.pointer!==s){this.pointer=s}else{a(this.pointer)}break;case"next":a(this.pointer);break}this.setSource()},setCurrent:function(e){if(typeof e=="number"&&e!=this.pointer&&this.playlist[e]&&!this.playlist[e]["error"]){this.pointer=e;this.setSource()}},setSource:function(){var e=this.playlist[this.pointer];if(e["error"]){return}var t=false;if(!this.source.paused){t=true;this.stop()}this.source.attr("src",e.url);this.source.attr("title",e.title+" - "+e.author);a.progress();a.preview();if(t==true){this.play()}},play:function(){if(this.playlist[this.pointer]["error"]){return}this.source.play();document.title="Now Playing..."+this.playlist[this.pointer]["title"]+" - "+this.playlist[this.pointer]["author"]+" | "+p},pause:function(){this.source.pause();document.title=p},stop:function(){this.source.pause();this.source.currentTime=0;document.title=p},scroll:function(){var e=this.list.find("li")[this.pointer];Velocity(e,"scroll",{container:e.parentNode})},scrollLrc:function(e){var t=this;if(!this.lrc)return;if(this.lrc.index>this.lrc.data.length-1||e<this.lrc.data[this.lrc.index][0]||(!this.lrc.data[this.lrc.index+1]||e>=this.lrc.data[this.lrc.index+1][0])){for(var n=0;n<this.lrc.data.length;n++){if(e>=this.lrc.data[n][0]&&(!this.lrc.data[n+1]||e<this.lrc.data[n+1][0])){t.lrc.index=n;var i=-(t.lrc.index-1);t.lrc.el.style.transform="translateY("+i+"rem)";t.lrc.el.style.webkitTransform="translateY("+i+"rem)";t.lrc.el.getElementsByClassName("current")[0].removeClass("current");t.lrc.el.getElementsByTagName("p")[n].addClass("current")}}}}};var a={button:function(e){if(!t.media.buttons[e]){var n=document.createElement("div");n.addClass(e+" btn");n.addEventListener("click",t.media.options.events[e]||function(){});t.appendChild(n);t.media.buttons[e]=n}},audio:function(){if(!t.media.source){var e=document.createElement("audio");e.addEventListener("error",function(){t.media.list.find("li")[t.media.pointer].addClass("error");t.media.playlist[t.media.pointer]["error"]=true;t.media.setMode("next")});e.addEventListener("play",function(){t.addClass("playing");t.media.list.addClass("playing");_(e.attr("title"))});e.addEventListener("pause",function(){t.removeClass("playing");t.media.list.removeClass("playing")});e.addEventListener("timeupdate",function(){var n=Math.floor(e.currentTime/e.duration*100);t.media.progress.width(n+"%");if(t.media.lrc){t.media.scrollLrc(e.currentTime)}if(n==100){t.media.setMode("next");t.media.play()}});t.appendChild(e);t.media.source=e}},info:function(){if(!t.media.list){var e=document.createElement("div");e.addClass("play-list");e.innerHTML='<div class="preview"></div><ol></ol>';t.media.list=e;t.insertAfter(e);l("#main").addEventListener("click",function(){t.media.list.removeClass("on")})}},list:function(){var e=t.media.list.child("ol");e.innerHTML="";t.media.playlist.forEach(function(n,i){var a=document.createElement("li");a.innerHTML='<span class="info"><span>'+n.title+"</span><span>"+n.author+"</span></span>";a.title=n.title+" - "+n.author;a.addEventListener("click",function(e){var n=e.currentTarget;if(t.media.pointer===i&&t.media.progress){if(t.media.source.paused){t.media.play()}else{t.media.source.currentTime=t.media.source.duration*Math.floor(e.clientX-n.left())/n.width()}return}t.media.setCurrent(i);t.media.play()});e.appendChild(a)})},progress:function(){if(t.media.progress){t.media.progress.parentNode.removeClass("current");t.media.progress.remove()}var e=t.media.list.find("li")[t.media.pointer];if(e){var n=document.createElement("div");n.addClass("progress");e.appendChild(n);t.media.progress=n;e.addClass("current");t.media.scroll()}},preview:function(){var e=t.media.list.child(".preview");var n=t.media.playlist[t.media.pointer];e.innerHTML='<div class="cover"><div class="disc"><img src="'+n.pic+'" /></div></div>'+'<div class="info"><h4 class="title">'+n.title+"</h4><span>"+n.author+'</span><div class="lrc"></div></div>';var a="";fetch(n.lrc).then(function(e){return e.text()}).then(function(s){if(n!==t.media.playlist[t.media.pointer])return;t.media.lrc.data=i.lrc(s);var r="";t.media.lrc.data.forEach(function(e,t){a+="<p"+(t===0?' class="current"':"")+">"+e[1]+"</p>"});var o=document.createElement("div");o.addClass("inner");o.innerHTML=a;e.child(".lrc").innerHTML="";e.child(".lrc").appendChild(o);t.media.lrc.el=o;t.media.lrc.index=0}).catch(function(e){});e.child(".cover").addEventListener("click",t.media.options.events["play-pause"])}},s=function(e){if(t.media.created)return;t.media.options=Object.assign(n,e);t.media.options.btns.forEach(a.button);a[t.media.options.type]();a.info();t.media.created=true};s(e)};Object.assign(HTMLElement.prototype,{player:u});var f=e.statics.indexOf("//")>0?e.statics:e.root;var m={x:"undefined",y:"undefined"};var h=0;var p,v;const g=document.getElementsByTagName("body")[0];const y=document.documentElement;const C=l("#container");const w=l("#loading");const b=l("#nav");const L=b.height();const x=l("#header");const E=b.child(".toggle");const k=l("#quick");const N=l("#tool");const T=N.child(".player");const O=N.child(".back-to-top");const M=N.child(".chat");const I=l("#sidebar");const H=l("#brand");const j=l("#search");const A=l("#content");const q=l("#waves").top();const S=q-L;const R={timer:null,lock:false,show:function(){clearTimeout(this.timer);document.body.removeClass("loaded");Velocity(w,"fadeIn",{display:"flex",complete:function(){R.lock=false}})},hide:function(e){this.timer=setTimeout(this.vanish,e||3e3)},vanish:function(){if(R.lock)return;Velocity(w,"fadeOut");document.body.addClass("loaded");R.lock=true}};const B=function(e){if(e){y.attr("data-theme",e)}else{y.attr("data-theme",null)}};const V=function(e){if(y.attr("data-theme")=="dark")e="#222";l('meta[name="theme-color"]').attr("content",e)};const z=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){if(e.matches){B("dark")}else{B()}});l(".theme").addEventListener("click",function(e){var t=e.currentTarget.child(".ic");if(t.hasClass("i-sun")){B("dark");t.removeClass("i-sun");t.addClass("i-moon")}else{B();t.removeClass("i-moon");t.addClass("i-sun")}})};const Y=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":l('[rel="icon"]').attr("href",f+e.favicon.hidden);document.title=LOCAL.favicon.hide;R.show();clearTimeout(v);break;case"visible":l('[rel="icon"]').attr("href",f+e.favicon.normal);document.title=LOCAL.favicon.show;R.hide(1e3);v=setTimeout(function(){document.title=p},2e3);break}})};const _=function(e){if(!e)return;var t=document.createElement("div");t.innerHTML=e;t.addClass("tip");g.appendChild(t);window.setTimeout(function(){g.removeChild(t)},3e3)};const P=function(e){var t=n();if(t>document.body.offsetHeight){k.display("flex");I.child(".panels").height("100vh")}else{k.display("none")}};const Q=function(e){var t=window.innerHeight;var i=n();var a=i>t?i-t:document.body.scrollHeight-t;var s=window.pageYOffset>q;var r=window.pageYOffset>0;if(s){V("#FFF")}else{V("#222")}b.toggleClass("show",s);N.toggleClass("affix",r);H.toggleClass("affix",r);I.toggleClass("affix",s&&document.body.offsetWidth>991);if(typeof m.y=="undefined"){m.y=window.pageYOffset}h=m.y-window.pageYOffset;if(h<0){b.removeClass("up");b.toggleClass("down",s)}else if(h>0){b.removeClass("down");b.toggleClass("up",s)}else{}m.y=window.pageYOffset;var o=Math.round(Math.min(100*window.pageYOffset/a,100))+"%";O.child("span").innerText=o;l(".percent").width(o)};const D=function(e){E.toggleClass("close");var t=I.hasClass("on")?"transition.slideRightOut":"transition.slideRightIn";Velocity(I,t,{duration:200,complete:function(){I.toggleClass("on")}})};const F=function(){var e=I.child(".inner");var t=I.find(".panel");if(I.child(".tab")){e.removeChild(I.child(".tab"))}var n=document.createElement("ul"),i="active";n.className="tab";["contents","related","overview"].forEach(function(e){var t=I.child(".panel."+e);if(t.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1){return}var a=document.createElement("li");var s=document.createElement("span");var r=document.createTextNode(t.attr("data-title"));s.appendChild(r);a.appendChild(s);a.addClass(e+" item");if(i){t.addClass(i);a.addClass(i)}else{t.removeClass("active")}a.addEventListener("click",function(e){var t=event.currentTarget;if(t.hasClass("active"))return;I.find(".tab .item").forEach(function(e){e.removeClass("active")});I.find(".panel").forEach(function(e){e.removeClass("active")});I.child(".panel."+t.className.replace(" item","")).addClass("active");t.addClass("active")});n.appendChild(a);i=""});if(n.childNodes.length>1){e.insertBefore(n,e.childNodes[0]);I.child(".panels").style.paddingTop=""}else{I.child(".panels").style.paddingTop="10px"}};const U=function(){var e=l.all(".contents li");if(e.length<1){return}var t=Array.prototype.slice.call(e)||[];var n=null;t=t.map(function(e,t){var i=e.child("a.toc-link");var s=l(decodeURI(i.attr("href")));var r=s.child("a.anchor");var o=function(e){e.preventDefault();var i=l(decodeURI(e.currentTarget.attr("href")));n=t;c(i,-L,function(){a(t);n=null})};i.addEventListener("click",o);r&&r.addEventListener("click",o);return s});var i=I.child(".panels .inner");var a=function(n,a){var s=e[n];if(!s)return;if(s.hasClass("current")){return}l.each(".toc .active",function(e){e.removeClass("active current")});t.forEach(function(e){e.removeClass("active")});s.addClass("active current");t[n].addClass("active");var r=s.parentNode;while(!r.matches(".contents")){if(r.matches("li")){r.addClass("active");var o=l(r.child("a.toc-link").attr("href"));if(o){o.addClass("active")}}r=r.parentNode}Velocity(s,"scroll",{container:i,offset:-(i.offsetHeight/2)})};var s=function(e){var n=0;var i=e[n];if(i.boundingClientRect.top>0){n=t.indexOf(i.target);return n===0?0:n-1}for(;n<e.length;n++){if(e[n].boundingClientRect.top<=0){i=e[n]}else{return t.indexOf(i.target)}}return t.indexOf(i.target)};var r=function(){var e=new IntersectionObserver(function(e,t){var i=s(e)+(h<0?1:0);if(n===null){a(i)}},{rootMargin:"0px 0px -100% 0px",threshold:0});t.forEach(function(t){t&&e.observe(t)})};r()};const W=function(){c(g)};const $=function(){c(g,C.height())};const J=function(){c(l("#comments"))};const G=function(){l.each(".menu .item",function(t){var n=t.child("a[href]");if(!n)return;var i=n.pathname===location.pathname||n.pathname===location.pathname.replace("index.html","");var a=!e.root.startsWith(n.pathname)&&location.pathname.startsWith(n.pathname);var s=n.hostname===location.hostname&&(i||a);t.toggleClass("active",s);t.parentNode.parentNode.toggleClass("expand",t.parentNode.hasClass("submenu")&&t.parentNode.child(".active"))})};const K=function(){if(l(".index.wrap")){var e=new IntersectionObserver(function(t){t.forEach(function(t){if(!window.IntersectionObserver){if(t.target.hasClass("show")===false){t.target.addClass("show")}}else{if(t.target.hasClass("show")){e.unobserve(t.target)}else{if(t.isIntersecting){t.target.addClass("show");e.unobserve(t.target)}}}})},{root:null,threshold:[.44]});l.each(".index.wrap article.item, .index.wrap section.item",function(t){e.observe(t)})}var t;l.each(".cards .item",function(e,t){["mouseenter","touchstart"].forEach(function(t){e.addEventListener(t,function(t){if(l(".cards .item.active")){l(".cards .item.active").removeClass("active")}e.addClass("active")})});["mouseleave"].forEach(function(t){e.addEventListener(t,function(t){e.removeClass("active")})})})};const X=function(){l.each(".md img",function(e){var t;if(t=e.attr("title")){var n=document.createElement("span");var i=document.createTextNode(t);n.appendChild(i);n.addClass("image-info");e.insertAfter(n)}});if(l(".md :not(a) > img, .md > img")){LOCAL["mediumzoom"]=true;s("mediumzoom",function(){window.mediumZoom(".md :not(a) > img, .md > img",{background:"rgba(0, 0, 0, 0.6)"})},window.mediumZoom)}l.each("li ruby",function(e){var t=e.parentNode;if(e.parentNode.tagName!="LI"){t=e.parentNode.parentNode}t.addClass("ruby")});l.each(".md > table",function(e){const t=document.createElement("div");t.className="table-container";e.wrap(t)});l.each(".highlight > table",function(e){const t=document.createElement("div");t.className="code-container";e.wrap(t)});l.each("figure.highlight",function(e){var t=e.child(".code-container");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');var n=e.child(".copy-btn");n.addEventListener("click",function(e){var n=e.currentTarget;var i=t.innerText.replace(/\n\n\t/g,"");var a=document.createElement("textarea");a.style.top=window.scrollY+"px";a.style.position="absolute";a.style.opacity="0";a.readOnly=true;a.value=i;document.body.append(a);const s=document.getSelection();const r=s.rangeCount>0?s.getRangeAt(0):false;a.select();a.setSelectionRange(0,i.length);a.readOnly=false;var o=document.execCommand("copy");n.child(".ic").className=o?"ic i-check":"ic i-times";a.blur();n.blur();if(r){s.removeAllRanges();s.addRange(r)}document.body.removeChild(a)});n.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.child(".ic").className="ic i-clipboard"},300)});var i=e.child(".breakline-btn");i.addEventListener("click",function(t){var n=t.currentTarget;if(e.hasClass("breakline")){e.removeClass("breakline");n.child(".ic").className="ic i-align-left"}else{e.addClass("breakline");n.child(".ic").className="ic i-align-justify"}});var a=e.child(".fullscreen-btn");var s=function(){e.removeClass("fullscreen");l("html").removeClass("fullscreen");a.child(".ic").className="ic i-expand"};var r=function(t){var n=t.currentTarget;if(e.hasClass("fullscreen")){s();f&&f();c(e)}else{e.addClass("fullscreen");l("html").addClass("fullscreen");a.child(".ic").className="ic i-compress";u&&u()}};a.addEventListener("click",r);e.child("figcaption").addEventListener("click",r);if(t&&t.height()>300){t.style.maxHeight="300px";t.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');var o=t.child(".show-btn");var d=o.child("i");var u=function(){t.style.maxHeight="";o.addClass("open")};var f=function(){t.style.maxHeight="300px";o.removeClass("open")};o.addEventListener("click",function(e){if(o.hasClass("open")){s();f();c(t.parentNode)}else{u()}})}});l.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});l.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var t=l("#qr");if(t.style.display==="inline-flex"){Velocity(t,"fadeOut")}else{Velocity(t,"transition.slideUpBigIn",{display:"inline-flex"})}})});l.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){if(e.hasClass("correct")){e.toggleClass("right");e.parentNode.parentNode.addClass("show")}else{e.toggleClass("wrong")}})});l.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.toggleClass("show")})});l.each("div.tab",function(e,t){var n=e.attr("data-id");var i=e.attr("data-title");var a=l("#"+n);if(!a){a=document.createElement("div");a.className="tabs";a.id=n;e.parentNode.insertBefore(a,e);s=document.createElement("ul");s.addClass("nav");a.appendChild(s)}var s=a.child(".nav");if(!s){s=document.createElement("ul");s.addClass("nav");a.appendChild(s)}var r=document.createElement("li");r.innerHTML=i;if(t==0){r.addClass("active");e.addClass("active")}r.addEventListener("click",function(t){var n=t.currentTarget;a.find(".active").forEach(function(e){e.removeClass("active")});e.addClass("active");n.addClass("active")});s.appendChild(r);a.appendChild(e)});ee()};const Z=function(){l.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));t.rel="noopener external nofollow noreferrer";t.target="_blank";t.className=e.className;t.title=e.title||e.innerText;t.innerHTML=e.innerHTML;if(e.dataset.backgroundImage){t.dataset.backgroundImage=e.dataset.backgroundImage}e.parentNode.replaceChild(t,e)})};const ee=function(){var t=l("#comments");if(!t){M.display("none");return}else{M.display("")}var n=new IntersectionObserver(function(n,i){s("valine",function(){var a=n[0];r("valine");if(a.isIntersecting){var s=e.valine;s.el="#comments";s.path=t.attr("data-id");new Valine(s);Velocity(l("#comments"),"transition.bounceUpIn");i.disconnect()}},window.Valine)});n.observe(t)};const te=function(t){if(e.search===null)return;var n=instantsearch({indexName:e.search.indexName,searchClient:algoliasearch(e.search.appID,e.search.apiKey),searchFunction:function(e){var t=l(".search-input");if(t.value){e.search()}}});n.on("render",function(){t.refresh(l("#search-hits"))});n.addWidgets([instantsearch.widgets.configure({hitsPerPage:e.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(t){var n=t.categories.join('<i class="ic i-angle-right"></i>');return'<a href="'+e.root+t.path+'"><span>'+n+"</span>"+t._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);n.start();l.each(".search",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden";Velocity(j,"transition.shrinkIn",{duration:200,complete:function(){l(".search-input").focus()}})})});const i=function(){document.body.style.overflow="";Velocity(j,"transition.shrinkOut")};j.addEventListener("click",function(e){if(e.target===j){i()}});l(".close-btn").addEventListener("click",i);window.addEventListener("pjax:success",i);window.addEventListener("keyup",function(e){if(e.key==="Escape"){i()}})};const ne=function(e){d.set(e,m.y)};const ie=function(){ne(window.location.href);if(I.hasClass("on")){Velocity(I,"transition.slideRightOut",{duration:200,complete:function(){I.removeClass("on");E.removeClass("close")}})}A.innerHTML=w.innerHTML};const ae=function(t){r("katex");s("copy_tex");r("mermaid");s("chart");if(!t){l.each("script[data-pjax]",o)}p=document.title;P();G();F();U();X();Z();T.media.load(LOCAL.audio||e.audio||{});lozad(l.all("img, [data-background-image]"),{loaded:function(e){e.addClass("lozaded")}}).observe();R.hide();var n=d.get(window.location.href);if(n){c(g,n);d.del(window.location.href)}K()};const se=function(){document.body.oncopy=function(){_(LOCAL.copyright)};var t=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:false,cacheBust:false});e.quicklink.ignores=LOCAL.ignores;quicklink.listen(e.quicklink);Y();z();E.addEventListener("click",D);l(".dimmer").addEventListener("click",D);k.child(".down").addEventListener("click",$);k.child(".up").addEventListener("click",W);O.addEventListener("click",W);w.addEventListener("click",R.vanish);window.addEventListener("scroll",Q);M.addEventListener("click",J);T.player();window.addEventListener("resize",P);window.addEventListener("pjax:send",ie);window.addEventListener("pjax:success",ae);window.addEventListener("beforeunload",function(){ne(window.location.href)});te(t);ae(1)};window.addEventListener("DOMContentLoaded",se);console.log("%c Theme.Shoka %c v"+e.versoin+" ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");