var e={hostname:"shoka.lostyu.me",root:"/",statics:"/",favicon:{normal:"images/favicon.ico",hidden:"images/failure.ico"},js:{valine:"js/valine.js",chart:"npm/frappe-charts@1.5.0/dist/frappe-charts.min.iife.min.js",copy_tex:"npm/katex@0/dist/contrib/copy-tex.min.js",mediumzoom:"npm/medium-zoom@1.0.5/dist/medium-zoom.min.js"},css:{valine:"css/comment.css",katex:"npm/katex@0/dist/katex.min.css",mermaid:"css/mermaid.css"},search:{appID:"8AVSL3TE18",apiKey:"439b6e54d1a5364824e689b5ca5a55db",indexName:"shoka",hits:{per_page:10}},valine:{appId:"GfnpjP6kVt5Hwl5FDnWDCEX3-gzGzoHsz",appKey:"5VPzAxojlyJTTif1RMYNBBQy",placeholder:"ヽ(○´∀`)ﾉ♪",avatar:"mp",pageSize:10,lang:"zh-CN",visitor:true,recordIP:true,serverURLs:null,requiredFields:["nick","mail"],enableQQ:true,masters:["hash of master@email.com","hash of master2@email.com","deea5a8d259d17182a53be1772e4c182"],masterTag:"主人",tips:"昵称框中填入QQ号，将自动获取QQ昵称&邮箱&头像；其他邮箱由Gavatar提供头像。"},quicklink:{timeout:3e3,priority:true},versoin:"0.1.1",audio:["563563649 || 花の戦士 - 樱花大战~炽热之血","430208037 || 偽りの空の先にあるもの - KOKIA"]};const t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const n=function(){return l("main > .inner").offsetHeight};const i=function(e,t,n){if(n){t()}else{var i=document.createElement("script");i.onload=i.onreadystatechange=function(e,n){if(n||!i.readyState||/loaded|complete/.test(i.readyState)){i.onload=i.onreadystatechange=null;i=undefined;if(!n&&t)setTimeout(t,0)}};i.src=e;document.head.appendChild(i)}};const a=function(t,n){return(e[t][n].indexOf("npm")>-1?"//cdn.jsdelivr.net/":u)+e[t][n]};const s=function(e,t,n){if(LOCAL[e]){i(a("js",e),t||function(){window[e]=true},n||window[e])}};const r=function(e,t){if(window["css"+e])return;if(LOCAL[e]){var n=document.createElement("link");n.attr("rel","stylesheet");n.href=a("css",e);document.head.appendChild(n);window["css"+e]=true}};const o=function(e){var t=e.text||e.textContent||e.innerHTML||"";var n=e.parentNode;n.removeChild(e);var i=document.createElement("script");if(e.id){i.id=e.id}if(e.className){i.className=e.className}if(e.type){i.type=e.type}if(e.src){i.src=e.src;i.async=false}if(e.dataset.pjax!==undefined){i.dataset.pjax=""}if(t!==""){i.appendChild(document.createTextNode(t))}n.appendChild(i)};const c=function(e,t,n){Velocity(e,"scroll",{duration:500,easing:"easeOutQuart",offset:t||-w,complete:n||function(){}})};const l=function(e,t){t=t||document;if(e.indexOf("#")===0){return t.getElementById(e.replace("#",""))}return t.querySelector(e)};l.all=function(e,t){t=t||document;return t.querySelectorAll(e)};l.each=function(e,t,n){return l.all(e,n).forEach(t)};Object.assign(HTMLElement.prototype,{wrap:function(e){this.parentNode.insertBefore(e,this);this.parentNode.removeChild(this);e.appendChild(this)},height:function(e){if(e){this.style.height=typeof e=="number"?e+"px":e}return this.getBoundingClientRect().height},width:function(e){if(e){this.style.width=typeof e=="number"?e+"px":e}return this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){if(t){return this.setAttribute(e,t)}else{return this.getAttribute(e)}},insertAfter:function(e){var t=this.parentNode;if(t.lastChild==this){t.appendChild(e)}else{t.insertBefore(e,this.nextSibling)}},display:function(e){this.style.display=e},child:function(e){return l(e,this)},find:function(e){return l.all(e,this)},_class:function(e,t,n){var i=t.indexOf(" ")?t.split(" "):[t];var a=this;i.forEach(function(t){if(e=="toggle"){a.classList.toggle(t,n)}else{a.classList[e](t)}})},addClass:function(e){this._class("add",e);return this},removeClass:function(e){this._class("remove",e);return this},toggleClass:function(e,t){this._class("toggle",e,t);return this},hasClass:function(e){return this.classList.contains(e)}});const d=function(e){var t=this,n={btns:["play-pause","music"],events:{"play-pause":function(e){if(t.player.media.paused){t.player.play()}else{t.player.pause()}},music:function(e){t.player.list.classList.toggle("on")}}};t.player={id:Math.floor(Math.random()*1e5),index:-1,media:null,buttons:{},utils:{random:function(e){return Math.floor(Math.random()*e)},list:function(e){return e.map(function(e){var e=e.split("||");var t=e[0].trim();return{url:t.indexOf("//")>0?t:"http://music.163.com/song/media/outer/url?id="+t+".mp3",title:e[1].trim()}})}},getSource:function(e){var n=this.options.mediaList.length;var i=function(e){if(e+1==n){e=-1}t.player.index=++e};switch(e){case"random":var a=this.utils.random(n);if(this.index!==a){this.index=a}else{i(this.index)}break;case"next":i(this.index);break}return this.options.mediaList[this.index]},refresh:function(e){if(e){if(this.options.rawList!==e){this.options.rawList=e;this.options.mediaList=this.utils.list(e);this.set("random");this.setPlayList()}}},set:function(e){var t=this.getSource(e);var n=false;if(!this.media.paused){n=true;this.stop()}this.media.attr("src",t.url);this.media.attr("title",t.title);if(n==true){this.play()}},setPlayList:function(){var e=t.player.list.child("ul");e.innerHTML="";this.options.mediaList.forEach(function(n,i){var a=document.createElement("li");a.innerHTML=n.title;a.addEventListener("click",function(e){var n=t.player.list.find("li")[t.player.index];if(t.player.index==i&&t.player.progress){if(t.player.media.paused){t.player.play()}else{t.player.media.currentTime=t.player.media.duration*Math.floor(e.clientX-n.left())/n.width()}return}t.player.setCurrent(i);t.player.play()});e.appendChild(a)});t.player.setCurrent(t.player.index)},setCurrent:function(e){if(e!=this.index){var n=this.list.find("li");if(n[this.index]){n[this.index].classList.remove("current");this.progress&&n[this.index].removeChild(this.progress)}if(e){this.index=e;this.set()}else{this.set("next")}}var i=t.player.list.find("li");if(i[this.index]){i[this.index].addClass("current");var a=document.createElement("div");i[this.index].appendChild(a);this.progress=a}},pause:function(){this.media.pause()},play:function(){this.media.play()},stop:function(){this.media.pause();this.media.currentTime=0}};var i={button:function(e){if(!t.player.buttons[e]){var n=document.createElement("div");n.addClass(e+" btn");n.addEventListener("click",t.player.options.events[e]||function(){});t.appendChild(n);t.player.buttons[e]=n}},audio:function(){if(!t.player.media){var e=document.createElement("audio");e.addEventListener("play",function(){t.addClass("playing");V(t.player.media.attr("title"))});e.addEventListener("pause",function(){t.classList.remove("playing")});e.addEventListener("timeupdate",function(){var n=Math.floor(e.currentTime/e.duration*100);t.player.progress.width(n+"%");if(n==100){t.player.setCurrent();t.player.play()}});t.appendChild(e);t.player.media=e}},list:function(){if(!t.player.list){var e=document.createElement("div");e.addClass("play-list");e.innerHTML='<div class="preview"></div><ul></ul>';t.player.list=e;t.insertAfter(e)}}},a=function(e){if(t.player.created)return;else t.player.created=true;t.player.options=Object.assign(n,e);t.player.options.btns.forEach(i.button);i.audio();i.list()};a()};Object.assign(HTMLElement.prototype,{initPlayer:d});var u=e.statics.indexOf("//")>0?e.statics:e.root;var f={x:"undefined",y:"undefined"};var h=0;var p,m;const v=document.getElementsByTagName("body")[0];const g=l("#container");const y=l(".loading");const C=l("#nav");const w=C.height();const b=l("#header");const L=C.child(".toggle");const x=l("#tool");const E=x.child(".player");const k=x.child(".back-to-top");const N=x.child(".chat");const T=l("#sidebar");const O=l("#brand");const I=l("#search");const M=l("#waves").top();const A=M-w;const j={timer:null,lock:false,show:function(){clearTimeout(this.timer);document.body.removeClass("loaded");Velocity(y,"fadeIn",{display:"flex",complete:function(){j.lock=false}})},hide:function(e){this.timer=setTimeout(this.vanish,e||3e3)},vanish:function(){if(j.lock)return;Velocity(y,"fadeOut");document.body.addClass("loaded");j.lock=true}};const H=function(e){if(e){window.document.documentElement.attr("data-theme",e)}else{window.document.documentElement.removeAttribute("data-theme")}};const R=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){if(e.matches){H("dark")}else{H()}});l(".theme").addEventListener("click",function(e){var t=e.currentTarget.child(".ic");if(t.hasClass("i-sun")){H("dark");t.removeClass("i-sun");t.addClass("i-moon")}else{H();t.removeClass("i-moon");t.addClass("i-sun")}})};const S=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":l('[rel="icon"]').attr("href",u+e.favicon.hidden);document.title=LOCAL.favicon.hide;j.show();clearTimeout(m);break;case"visible":l('[rel="icon"]').attr("href",u+e.favicon.normal);document.title=LOCAL.favicon.show;j.hide(1e3);m=setTimeout(function(){document.title=p},2e3);break}})};const V=function(e){if(!e)return;var t=document.createElement("div");t.innerHTML=e;t.addClass("tip");v.appendChild(t);window.setTimeout(function(){v.removeChild(t)},3e3)};const q=function(e){var t=n();if(t>document.body.offsetHeight){T.child(".quick").display("flex");T.child(".panels").height("100vh")}else{T.child(".quick").display("none")}};const z=function(e){var t=window.innerHeight;var i=n();var a=i>t?i-t:document.body.scrollHeight-t;var s=window.pageYOffset>M;var r=window.pageYOffset>0;if(s){l('meta[name="theme-color"]').attr("content","#FFF")}else{l('meta[name="theme-color"]').attr("content","#222")}C.toggleClass("show",s);x.toggleClass("affix",r);O.toggleClass("affix",r);T.toggleClass("affix",s&&document.body.offsetWidth>991);if(typeof f.y=="undefined"){f.y=window.pageYOffset}h=f.y-window.pageYOffset;if(h<0){C.removeClass("up");C.toggleClass("down",s)}else if(h>0){C.removeClass("down");C.toggleClass("up",s)}else{}f.y=window.pageYOffset;var o=Math.round(Math.min(100*window.pageYOffset/a,100))+"%";k.child("span").innerText=o;l(".percent").width(o)};const B=function(e){L.toggleClass("close");var t=T.hasClass("on")?"transition.slideRightOut":"transition.slideRightIn";Velocity(T,t,{duration:200,complete:function(){T.toggleClass("on")}})};const P=function(){var e=T.child(".inner");var t=T.find(".panel");if(T.child(".tab")){e.removeChild(T.child(".tab"))}var n=document.createElement("ul"),i="active";n.className="tab";["contents","related","overview"].forEach(function(e){var t=T.child(".panel."+e);if(t.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1){return}var a=document.createElement("li");var s=document.createElement("span");var r=document.createTextNode(t.attr("data-title"));s.appendChild(r);a.appendChild(s);a.addClass(e+" item");if(i){t.addClass(i);a.addClass(i)}else{t.removeClass("active")}a.addEventListener("click",function(e){var t=event.currentTarget;if(t.hasClass("active"))return;T.find(".tab .item").forEach(function(e){e.removeClass("active")});T.find(".panel").forEach(function(e){e.removeClass("active")});T.child(".panel."+t.className.replace(" item","")).addClass("active");Velocity(T.child(".panels > .inner"),"finish");Velocity(T.child(".panels > .inner"),"transition.slideUpBigIn");t.addClass("active")});n.appendChild(a);i=""});if(n.childNodes.length>1){e.insertBefore(n,e.childNodes[0]);T.child(".panels").style.paddingTop=""}else{T.child(".panels").style.paddingTop="10px"}};const _=function(){var e=l.all(".contents li");if(e.length<1){return}var t=Array.prototype.slice.call(e)||[];var n=null;t=t.map(function(e,t){var i=e.child("a.toc-link");var s=l(decodeURI(i.attr("href")));var r=s.child("a.anchor");var o=function(e){e.preventDefault();var i=l(decodeURI(e.currentTarget.attr("href")));n=t;c(i,-w,function(){a(t);n=null})};i.addEventListener("click",o);r&&r.addEventListener("click",o);return s});var i=T.child(".panels .inner");var a=function(n,a){var s=e[n];if(!s)return;if(s.hasClass("current")){return}l.each(".toc .active",function(e){e.removeClass("active current")});t.forEach(function(e){e.removeClass("active")});s.addClass("active current");t[n].addClass("active");var r=s.parentNode;while(!r.matches(".contents")){if(r.matches("li")){r.addClass("active");var o=l(r.child("a.toc-link").attr("href"));if(o){o.addClass("active")}}r=r.parentNode}Velocity(s,"scroll",{container:i,offset:-(i.offsetHeight/2)})};var s=function(e){var n=0;var i=e[n];if(i.boundingClientRect.top>0){n=t.indexOf(i.target);return n===0?0:n-1}for(;n<e.length;n++){if(e[n].boundingClientRect.top<=0){i=e[n]}else{return t.indexOf(i.target)}}return t.indexOf(i.target)};var r=function(){var e=new IntersectionObserver(function(e,t){var i=s(e)+(h<0?1:0);if(n===null){a(i)}},{rootMargin:"0px 0px -100% 0px",threshold:0});t.forEach(function(t){t&&e.observe(t)})};r()};const Q=function(){c(v)};const Y=function(){c(l("#footer"))};const D=function(){c(l("#comments"))};const F=function(){l.each(".menu .item",function(t){var n=t.child("a[href]");if(!n)return;var i=n.pathname===location.pathname||n.pathname===location.pathname.replace("index.html","");var a=!e.root.startsWith(n.pathname)&&location.pathname.startsWith(n.pathname);var s=n.hostname===location.hostname&&(i||a);t.toggleClass("active",s);t.parentNode.parentNode.toggleClass("expand",t.parentNode.hasClass("submenu")&&t.parentNode.child(".active"))})};const U=function(){if(l(".index.wrap")){var e=new IntersectionObserver(function(t){t.forEach(function(t){if(!window.IntersectionObserver){t.target.style.willChange="auto";if(t.target.hasClass("slide-up-in")===false){t.target.addClass("slide-up-in")}}else{if(t.target.hasClass("slide-up-in")){t.target.style.willChange="auto";e.unobserve(t.target)}else{if(t.isIntersecting){t.target.addClass("slide-up-in");t.target.style.willChange="auto";e.unobserve(t.target)}}}})},{root:null,threshold:[.44]});l.each(".index.wrap article.item, .index.wrap div.item",function(t){e.observe(t)})}var t;l.each(".cards .item",function(e,t){["mouseenter","touchstart"].forEach(function(t){e.addEventListener(t,function(t){if(l(".cards .item.active")){l(".cards .item.active").removeClass("active")}e.addClass("active")})});["mouseleave"].forEach(function(t){e.addEventListener(t,function(t){e.removeClass("active")})})})};const W=function(){l.each(".md img",function(e){var t;if(t=e.attr("title")){var n=document.createElement("span");var i=document.createTextNode(t);n.appendChild(i);n.addClass("image-info");e.insertAfter(n)}});if(l(".md :not(a) > img, .md > img")){LOCAL["mediumzoom"]=true;s("mediumzoom",function(){window.mediumZoom(".md :not(a) > img, .md > img",{background:"rgba(0, 0, 0, 0.6)"})},window.mediumZoom)}l.each("li ruby",function(e){var t=e.parentNode;if(e.parentNode.tagName!="LI"){t=e.parentNode.parentNode}t.addClass("ruby")});l.each(".md > table",function(e){const t=document.createElement("div");t.className="table-container";e.wrap(t)});l.each(".highlight > table",function(e){const t=document.createElement("div");t.className="code-container";e.wrap(t)});l.each("figure.highlight",function(e){var t=e.child(".code-container");var n=function(){e.removeClass("fullscreen");l("html").removeClass("fullscreen")};if(t&&t.height()>300){t.style.maxHeight="300px";t.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');var i=t.child(".show-btn");var a=i.child("i");var s=function(){t.style.maxHeight="";i.addClass("open")};var r=function(){t.style.maxHeight="300px";i.removeClass("open")};i.addEventListener("click",function(e){if(i.hasClass("open")){n();r();c(t.parentNode)}else{s()}})}e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');var o=e.child(".copy-btn");o.addEventListener("click",function(e){var n=e.currentTarget;var i=t.innerText.replace(/\n\n\t/g,"");var a=document.createElement("textarea");a.style.top=window.scrollY+"px";a.style.position="absolute";a.style.opacity="0";a.readOnly=true;a.value=i;document.body.append(a);const s=document.getSelection();const r=s.rangeCount>0?s.getRangeAt(0):false;a.select();a.setSelectionRange(0,i.length);a.readOnly=false;var o=document.execCommand("copy");n.child(".ic").className=o?"ic i-check":"ic i-times";a.blur();n.blur();if(r){s.removeAllRanges();s.addRange(r)}document.body.removeChild(a)});o.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.child(".ic").className="ic i-clipboard"},300)});var d=e.child(".breakline-btn");d.addEventListener("click",function(t){var n=t.currentTarget;if(e.hasClass("breakline")){e.removeClass("breakline");n.child(".ic").className="ic i-align-left"}else{e.addClass("breakline");n.child(".ic").className="ic i-align-justify"}});var u=e.child(".fullscreen-btn");var f=function(t){var i=t.currentTarget;if(e.hasClass("fullscreen")){n();r&&r();u.child(".ic").className="ic i-expand";c(e)}else{e.addClass("fullscreen");l("html").addClass("fullscreen");u.child(".ic").className="ic i-compress";s&&s()}};u.addEventListener("click",f);e.child("figcaption").addEventListener("click",f)});l.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});l.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var t=l("#qr");if(t.style.display==="inline-flex"){Velocity(t,"fadeOut")}else{Velocity(t,"transition.slideUpBigIn",{display:"inline-flex"})}})});l.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){if(e.hasClass("correct")){e.toggleClass("right");e.parentNode.parentNode.addClass("show")}else{e.toggleClass("wrong")}})});l.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.toggleClass("show")})});l.each("div.tab",function(e,t){var n=e.attr("data-id");var i=e.attr("data-title");var a=l("#"+n);if(!a){a=document.createElement("div");a.className="tabs";a.id=n;e.parentNode.insertBefore(a,e);s=document.createElement("ul");s.addClass("nav");a.appendChild(s)}var s=a.child(".nav");if(!s){s=document.createElement("ul");s.addClass("nav");a.appendChild(s)}var r=document.createElement("li");r.innerHTML=i;if(t==0){r.addClass("active");e.addClass("active")}r.addEventListener("click",function(t){var n=t.currentTarget;a.find(".active").forEach(function(e){e.removeClass("active")});e.addClass("active");n.addClass("active")});s.appendChild(r);a.appendChild(e)});$()};const K=function(){l.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));t.rel="noopener external nofollow noreferrer";t.target="_blank";t.className=e.className;t.title=e.title||e.innerText;t.innerHTML=e.innerHTML;if(e.dataset.backgroundImage){t.dataset.backgroundImage=e.dataset.backgroundImage}e.parentNode.replaceChild(t,e)})};const $=function(){var t=l("#comments");if(!t){N.display("none");return}else{N.display("")}var n=new IntersectionObserver(function(n,i){s("valine",function(){var a=n[0];r("valine");if(a.isIntersecting){var s=e.valine;s.el="#comments";s.path=t.attr("data-id");new Valine(s);Velocity(l("#comments"),"transition.bounceUpIn");i.disconnect()}},window.Valine)});n.observe(t)};const G=function(t){if(e.search===null)return;var n=instantsearch({indexName:e.search.indexName,searchClient:algoliasearch(e.search.appID,e.search.apiKey),searchFunction:function(e){var t=l(".search-input");if(t.value){e.search()}}});n.on("render",function(){t.refresh(l("#search-hits"))});n.addWidgets([instantsearch.widgets.configure({hitsPerPage:e.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(t){var n=t.categories.join('<i class="ic i-angle-right"></i>');return'<a href="'+e.root+t.path+'"><span>'+n+"</span>"+t._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);n.start();l.each(".search",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden";Velocity(I,"transition.shrinkIn",{duration:200,complete:function(){l(".search-input").focus()}})})});const i=function(){document.body.style.overflow="";Velocity(I,"transition.shrinkOut")};I.addEventListener("click",function(e){if(e.target===I){i()}});l(".close-btn").addEventListener("click",i);window.addEventListener("pjax:success",i);window.addEventListener("keyup",function(e){if(e.key==="Escape"){i()}})};const X=function(e){window.sessionStorage.setItem(e,f.y)};const Z=function(){X(window.location.href);if(T.hasClass("on")){Velocity(T,"transition.slideRightOut",{duration:200,complete:function(){T.removeClass("on");L.removeClass("close")}})}l(".content").innerHTML="";l(".content").appendChild(y);Velocity(y,"fadeIn",{duration:200})};const J=function(t){r("katex");s("copy_tex");r("mermaid");s("chart");if(!t){l.each("script[data-pjax]",o)}p=document.title;q();F();P();_();W();K();E.player.refresh(LOCAL.audio||e.audio||{});lozad(l.all("img, [data-background-image]"),{loaded:function(e){e.addClass("lozaded")}}).observe();j.hide();var n=window.sessionStorage.getItem(window.location.href);if(n){c(v,n);window.sessionStorage.removeItem(window.location.href)}U()};const ee=function(){document.body.oncopy=function(){V(LOCAL.copyright)};var t=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:false,cacheBust:false});e.quicklink.ignores=LOCAL.ignores;quicklink.listen(e.quicklink);S();R();L.addEventListener("click",B);l(".dimmer").addEventListener("click",B);l(".quick .down").addEventListener("click",Y);l(".quick .up").addEventListener("click",Q);k.addEventListener("click",Q);y.addEventListener("click",j.vanish);window.addEventListener("scroll",z);N.addEventListener("click",D);E.initPlayer();window.addEventListener("resize",q);window.addEventListener("pjax:send",Z);window.addEventListener("pjax:success",J);window.addEventListener("beforeunload",function(){X(window.location.href)});G(t);J(1)};window.addEventListener("DOMContentLoaded",ee);console.log("%c Theme.Shoka %c v"+e.versoin+" ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");