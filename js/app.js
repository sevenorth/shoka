Object.assign(HTMLElement.prototype,{wrap:function(e){this.parentNode.insertBefore(e,this);this.parentNode.removeChild(this);e.appendChild(this)},height:function(){return this.getBoundingClientRect().height},top:function(){return this.getBoundingClientRect().top},attr:function(e,t){if(t){return this.setAttribute(e,t)}else{return this.getAttribute(e)}}});const e=function(e){if(e.indexOf("#")>0){return document.getElementById(e.replace("#",""))}return document.querySelector(e)};e.all=function(e){return document.querySelectorAll(e)};e.each=function(t,n){return e.all(t).forEach(n)};const t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var n={x:"undefined",y:"undefined"};var i=0;var a,o;const c=e("body > .container");const s=e(".container > header nav");const r=s.height();const l=e(".container > header");const d=l.height();const u=d-r;const f=e(".back-to-top");const v=function(){return e("main > .inner > .content").offsetHeight};const h=function(t){var n=v();if(n>document.body.offsetHeight){e(".sidebar .quick").style.display="flex";e(".sidebar .panels").style.height=document.body.offsetHeight+"px"}else{e(".sidebar .quick").style.display="none"}};const m=function(t){var a=window.innerHeight;var o=v();var r=o>a?o-a:document.body.scrollHeight-a;var l=c.scrollTop>u;s.classList.toggle("show",l);e("main .sidebar").classList.toggle("affix",l&&document.body.offsetWidth>991);if(typeof n.y=="undefined"){n.y=c.scrollTop}i=n.y-c.scrollTop;if(i<0){s.classList.remove("up");s.classList.toggle("down",l)}else if(i>0){s.classList.remove("down");s.classList.toggle("up",l)}else{}n.y=c.scrollTop;var d=Math.round(Math.min(100*c.scrollTop/r,100))+"%";f.querySelector("span").innerText=d;e(".quick .percent").style.width=d};const g=function(t){const n=e("main .sidebar");e(".toggle.menu").classList.toggle("close");var i=n.classList.contains("on")?"transition.slideRightOut":"transition.slideRightIn";Velocity(n,i,{duration:200,complete:function(){n.classList.toggle("on")}})};const p=function(){e.each(".menu .item",function(e){var t=e.querySelector("a[href]");if(!t)return;var n=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html","");var i=!CONFIG.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname);e.classList.toggle("active",t.hostname===location.hostname&&(n||i))})};const L=function(){var t=e(".sidebar .inner");var n=e.all(".sidebar .panel");if(e(".sidebar ul.tab")){t.removeChild(e(".sidebar ul.tab"))}var i=document.createElement("ul"),a="active";i.className="tab";["contents","related","overview"].forEach(function(t){var n=e(".sidebar .panel."+t);if(n.innerHTML.length<1){return}var o=document.createElement("li");var c=document.createElement("span");var s=document.createTextNode(n.attr("data-title"));c.appendChild(s);o.appendChild(c);o.classList.add(t);if(a){n.classList.add(a);o.classList.add(a)}else{n.classList.remove("active")}o.addEventListener("click",function(t){var n=event.currentTarget;if(n.classList.contains("active"))return;e.each(".sidebar .tab li",function(e){e.classList.remove("active")});e.each(".sidebar .panel",function(e){e.classList.remove("active")});e(".sidebar .panel."+n.className).classList.add("active");n.classList.add("active")});i.appendChild(o);a=""});if(i.childNodes.length>1){t.insertBefore(i,t.childNodes[0]);e(".sidebar .panels").style.paddingTop="68px"}else{e(".sidebar .panels").style.paddingTop="10px"}};const b=function(){var t=e.all(".contents li");if(t.length<1){return}var n=Array.prototype.slice.call(t)||[];n=n.map(function(t,n){var i=t.querySelector("a.toc-link");i.addEventListener("click",function(t){t.preventDefault();var i=e(t.currentTarget.attr("href"));w(c.scrollTop+i.top()-i.height()-u-r,function(){o(n)})});return e(i.attr("href"))});var a=e(".contents.panel");var o=function(i){var o=t[i];if(!o)return;if(o.classList.contains("current")){return}e.each(".toc .active",function(e){e.classList.remove("active","current")});n.forEach(function(e){e.classList.remove("active")});o.classList.add("active","current");n[i].classList.add("active");var c=o.parentNode;while(!c.matches(".contents")){if(c.matches("li")){c.classList.add("active");var s=e(c.querySelector("a.toc-link").attr("href"));if(s){s.classList.add("active")}}c=c.parentNode}Velocity(o,"scroll",{duration:200,container:a})};var s=function(e){var t=0;var i=e[t];if(i.boundingClientRect.top>0){t=n.indexOf(i.target);return t===0?0:t-1}for(;t<e.length;t++){if(e[t].boundingClientRect.top<=0){i=e[t]}else{return n.indexOf(i.target)}}return n.indexOf(i.target)};var l=function(){var e=new IntersectionObserver(function(e,t){var n=s(e)+(i>0?0:1);o(n)},{root:c,threshold:0});n.forEach(function(t){t&&e.observe(t)})};l()};const y=function(){e.each("figure.highlight",function(e){const t=e.querySelector("figcaption");if(t){t.insertAdjacentHTML("afterBegin",'<div class="carbon"><div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div></div>')}e.insertAdjacentHTML("beforeend",'<div class="copy-btn"><i class="fa fa-clipboard fa-fw"></i></div>');var n=e.querySelector(".copy-btn");n.addEventListener("click",function(e){var t=e.currentTarget;var n=t.parentNode.querySelector("pre.code").innerText;var i=document.createElement("textarea");i.style.top=window.scrollY+"px";i.style.position="absolute";i.style.opacity="0";i.readOnly=true;i.value=n;document.body.append(i);const a=document.getSelection();const o=a.rangeCount>0?a.getRangeAt(0):false;i.select();i.setSelectionRange(0,n.length);i.readOnly=false;var c=document.execCommand("copy");t.querySelector("i").className=c?"fa fa-check fa-fw":"fa fa-times fa-fw";i.blur();t.blur();if(o){a.removeAllRanges();a.addRange(o)}document.body.removeChild(i)});n.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.querySelector("i").className="fa fa-clipboard fa-fw"},300)})});e.each("table",function(e){const t=document.createElement("div");t.className="table-container";e.wrap(t)});e.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});e.each(".reward button",function(t){t.addEventListener("click",function(t){t.preventDefault();e("#qr").classList.toggle("show")})});e.each(".options li",function(e){e.addEventListener("click",function(t){if(e.classList.contains("correct")){e.classList.toggle("right");e.parentNode.parentNode.classList.toggle("show")}else{e.classList.toggle("wrong")}})});e.each(".quiz.true, .quiz.false, .quiz.essay",function(e){e.addEventListener("click",function(t){e.classList.toggle("show")})});x()};const w=function(t,n){Velocity(e("main .content"),"scroll",{duration:500,container:c,offset:t,complete:n||function(){}})};const E=function(){w(-d)};const k=function(){w(v()+e(".container > footer").offsetHeight)};const x=function(){var t=e("#comments");if(!t){return}var n=new IntersectionObserver(function(e,n){var i=e[0];if(i.isIntersecting){var a=CONFIG.comments;a.el="#comments";a.path=t.attr("data-id");new Valine(a);n.disconnect()}});n.observe(t);return n};const N=function(){var e=t(1,4);[1,2,3,4].forEach(function(t){l.classList.toggle("bg"+t,t==e)})};const T=function(e){window.sessionStorage.setItem(e,n.y-u-r)};const q=function(){var e=window.sessionStorage.getItem(window.location.href);if(e){w(e);window.sessionStorage.removeItem(window.location.href)}a=document.title;p();L();b();y();h()};const C=function(){var t=new Pjax({selectors:["head title",".languages",".pjax"],analytics:false,cacheBust:false});document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":e('[rel="icon"]').attr("href",CONFIG.favicon.hidden);document.title=CONFIG.favicon.hide;clearTimeout(o);break;case"visible":e('[rel="icon"]').attr("href",CONFIG.favicon.normal);document.title=CONFIG.favicon.show;o=setTimeout(function(){document.title=a},2e3);break}});e(".toggle.menu").addEventListener("click",g);e(".dimmer").addEventListener("click",g);e(".quick .up").addEventListener("click",E);e(".quick .down").addEventListener("click",k);setInterval(N,3e4);c.addEventListener("scroll",m);f.addEventListener("click",E);window.addEventListener("resize",h);window.addEventListener("pjax:send",function(){T(window.location.href)});window.addEventListener("pjax:success",q);window.addEventListener("beforeunload",function(){T(window.location.href)});q()};window.addEventListener("DOMContentLoaded",C);