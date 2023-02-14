(()=>{"use strict";const e={render:function(){const e=document.querySelector("#content"),t=document.createElement("h1");t.classList.add("restaurant-title"),t.textContent="Welcome to Franko restaurant";const n=document.createElement("p");n.classList.add("restaurant-description"),n.textContent="Lorem ipsum dolor sit amet consectetur adipisicing\n    elit. Sint debitis nobis esse officia ipsam\n    aspernatur odio autem perferendis suscipit\n    mollitia impedit dolor ipsa quaerat, corporis\n    atque exercitationem voluptatibus quas! Amet,\n    necessitatibus, totam itaque consequatur tempore\n    voluptates facilis unde iure non quibusdam sunt.\n    Quasi expedita nostrum rem odit saepe soluta\n    laboriosam!";const a=document.createElement("p");a.classList.add("restaurant-description"),a.textContent="Lorem ipsum dolor sit amet consectetur adipisicing\n    elit. Alias fugiat amet accusantium, commodi\n    corporis adipisci sed molestias libero quaerat\n    odit eos dolores magnam perferendis similique, ut\n    repellendus? Assumenda, sapiente unde?",e.appendChild(t),e.appendChild(n),e.appendChild(a)}},t=[{name:"bambino burger",ingredients:"homemade butter bun, mayonnaise burger,\n        field lettuce, beef, BAMBINO liquid\n        cheese, scrambled egg with spring onion,\n        bacon chips, homemade avocado salsa,\n        chilli pepper",imgUrl:"./images/bambino-burger.jpg",price:9.5},{name:"double beef burger",ingredients:"homemade butter bun, burger mayonnaise,\n        field lettuce, 150g beef, two slices of\n        Chedar cheese, 130g shredded beef, two\n        slices of Limburger cheese",imgUrl:"./images/double-beef.jpg",price:17.5},{name:"ham and cheese pizza",ingredients:"pizza dough, tomato base, Chedar cheese,\n        ham sausage, corn",imgUrl:"./images/ham-pizza.jpg",price:7.5},{name:"hot-dog classic",ingredients:"homemade butter roll, burger mayonnaise,\n        field lettuce, sausage XXL with cheese,\n        Cheddar cheese, roasted onions, BBQ sauce",imgUrl:"./images/hot-dog-classic.jpg",price:5.5}],n={render:function(){const e=t.map((({name:e,ingredients:t,imgUrl:n,price:a})=>function(e,t,n,a){const d=document.createElement("div");d.classList.add("menu-item");const i=document.createElement("div"),c=document.createElement("div");c.classList.add("item-name"),c.textContent=e;const o=document.createElement("p");o.classList.add("item-ingredients"),o.textContent=t,i.appendChild(c),i.appendChild(o);const s=document.createElement("img");s.src=n;const r=document.createElement("div");return r.classList.add("item-price"),a+="",r.textContent=a.replace(/(?<=\.)\d*/,(e=>e.padEnd(2,"0")))+"€",d.appendChild(i),d.appendChild(s),d.appendChild(r),d}(e,t,n,a))),n=document.querySelector("#content");e.forEach((e=>n.appendChild(e)))}},a=[{day:"Mon",time:"10:18"},{day:"Tue",time:"10:18"},{day:"Wed",time:"10:18"},{day:"Thu",time:"10:18"},{day:"Fri",time:"10:18"},{day:"Sat",time:"closed"},{day:"Sun",time:"closed"}],d="Sládkovičova 3204, 926 01 Sereď",i="franko@gmail.com",c="+421905811410";const o={render:function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("contact-info");const n=function(){const e=document.createElement("div");e.classList.add("open-hours");const t=document.createElement("div");return t.textContent="open hours",e.appendChild(t),a.map((({day:e,time:t})=>function(e,t){const n=document.createElement("div");n.classList.add("open-hour");const a=document.createElement("span");a.classList.add("day"),a.textContent=e;const d=document.createElement("span");return d.classList.add("time"),d.textContent=t,n.appendChild(a),n.appendChild(d),n}(e,t))).forEach((t=>e.appendChild(t))),e}(),o=function(){const e=document.createElement("div");e.classList.add("address");const t=document.createElement("div");t.textContent="address";const n=document.createElement("span");return n.textContent=d,e.appendChild(t),e.appendChild(n),e}(),s=function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("div");t.textContent="contact";const n=document.createElement("div"),a=document.createElement("div");a.classList.add("email");const d=document.createElement("span");d.textContent="email:";const o=document.createElement("span");o.textContent=i,a.appendChild(d),a.appendChild(o);const s=document.createElement("div");s.classList.add("email");const r=document.createElement("span");r.textContent="phone:";const m=document.createElement("span");return m.textContent=c,s.appendChild(r),s.appendChild(m),n.appendChild(a),n.appendChild(s),e.appendChild(t),e.appendChild(n),e}();t.appendChild(n),t.appendChild(o),t.appendChild(s),e.appendChild(t)}};function s(t){!function(e){document.querySelectorAll(".tab").forEach((e=>e.classList.remove("active"))),e.classList.add("active")}(t),function(t){switch(document.querySelector("#content").innerHTML="",t){case"home":default:e.render();break;case"menu":n.render();break;case"contact":o.render()}}(t.id)}function r(e,t,n){const a=document.createElement("span");return a.id=e,a.textContent=t,a.classList.add("tab"),n&&a.classList.add("active"),a.addEventListener("click",(function(){s(this)})),a}!function(){const t=function(){const e=document.createElement("header"),t=r("home","home",!0),n=r("menu","menu",!1),a=r("contact","contact",!1);return e.appendChild(t),e.appendChild(n),e.appendChild(a),e}(),n=function(){const e=document.createElement("div");return e.id="content",e.classList.add("content"),e}(),a=function(){const e=document.createElement("footer"),t=document.createElement("span");return t.textContent="@copyright all rights reserved",e.appendChild(t),e}(),d=document.querySelector(".container");d.appendChild(t),d.appendChild(n),d.appendChild(a),e.render()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWNBLEVBQ2xCbUQsRUFBSXJELFVBQVVDLElBQUksT0FDZDhELEdBQ0FWLEVBQUlyRCxVQUFVQyxJQUFJLFVBR3RCb0QsRUFBSVcsaUJBQWlCLFNBQVMsV0FDMUJaLEVBQVVhLEtBQ2QsSUFFT1osQ0FDWCxFQ21CTyxXQUNILE1BQU1hLEVBakNWLFdBQ0ksTUFBTUEsRUFBU3RFLFNBQVNHLGNBQWMsVUFFaEM0RCxFQUFPRyxFQUFVLE9BQVEsUUFBUSxHQUNqQ3JDLEVBQU9xQyxFQUFVLE9BQVEsUUFBUSxHQUNqQ25CLEVBQVVtQixFQUFVLFVBQVcsV0FBVyxHQU1oRCxPQUpBSSxFQUFPN0QsWUFBWXNELEdBQ25CTyxFQUFPN0QsWUFBWW9CLEdBQ25CeUMsRUFBTzdELFlBQVlzQyxHQUVadUIsQ0FDWCxDQXFCbUJDLEdBQ1R4RSxFQXBCVixXQUNJLE1BQU1BLEVBQVVDLFNBQVNHLGNBQWMsT0FJdkMsT0FIQUosRUFBUWtFLEdBQUssVUFDYmxFLEVBQVFLLFVBQVVDLElBQUksV0FFZk4sQ0FDWCxDQWNvQnlFLEdBQ1ZDLEVBYlYsV0FDSSxNQUFNQSxFQUFTekUsU0FBU0csY0FBYyxVQUNoQ3VFLEVBQVkxRSxTQUFTRyxjQUFjLFFBS3pDLE9BSkF1RSxFQUFVcEUsWUFBYyxpQ0FFeEJtRSxFQUFPaEUsWUFBWWlFLEdBRVpELENBQ1gsQ0FLbUJFLEdBRVRDLEVBQVk1RSxTQUFTQyxjQUFjLGNBQ3pDMkUsRUFBVW5FLFlBQVk2RCxHQUN0Qk0sRUFBVW5FLFlBQVlWLEdBQ3RCNkUsRUFBVW5FLFlBQVlnRSxHQUV0QlYsRUFBS2pFLFFBQ1QsQ0M1Q0ErRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFiQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlTG9hZGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYi5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkSW5pdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LXRpdGxlXCIpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEZyYW5rbyByZXN0YXVyYW50XCI7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAxLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LWRlc2NyaXB0aW9uXCIpO1xuICAgIHAxLnRleHRDb250ZW50ID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nXG4gICAgZWxpdC4gU2ludCBkZWJpdGlzIG5vYmlzIGVzc2Ugb2ZmaWNpYSBpcHNhbVxuICAgIGFzcGVybmF0dXIgb2RpbyBhdXRlbSBwZXJmZXJlbmRpcyBzdXNjaXBpdFxuICAgIG1vbGxpdGlhIGltcGVkaXQgZG9sb3IgaXBzYSBxdWFlcmF0LCBjb3Jwb3Jpc1xuICAgIGF0cXVlIGV4ZXJjaXRhdGlvbmVtIHZvbHVwdGF0aWJ1cyBxdWFzISBBbWV0LFxuICAgIG5lY2Vzc2l0YXRpYnVzLCB0b3RhbSBpdGFxdWUgY29uc2VxdWF0dXIgdGVtcG9yZVxuICAgIHZvbHVwdGF0ZXMgZmFjaWxpcyB1bmRlIGl1cmUgbm9uIHF1aWJ1c2RhbSBzdW50LlxuICAgIFF1YXNpIGV4cGVkaXRhIG5vc3RydW0gcmVtIG9kaXQgc2FlcGUgc29sdXRhXG4gICAgbGFib3Jpb3NhbSFgO1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwMi5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC1kZXNjcmlwdGlvblwiKTtcbiAgICBwMi50ZXh0Q29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xuICAgIGVsaXQuIEFsaWFzIGZ1Z2lhdCBhbWV0IGFjY3VzYW50aXVtLCBjb21tb2RpXG4gICAgY29ycG9yaXMgYWRpcGlzY2kgc2VkIG1vbGVzdGlhcyBsaWJlcm8gcXVhZXJhdFxuICAgIG9kaXQgZW9zIGRvbG9yZXMgbWFnbmFtIHBlcmZlcmVuZGlzIHNpbWlsaXF1ZSwgdXRcbiAgICByZXBlbGxlbmR1cz8gQXNzdW1lbmRhLCBzYXBpZW50ZSB1bmRlP2A7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGgxKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHAxKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHAyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlcixcbn07XG4iLCJjb25zdCBtZW51c0RhdGEgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcImJhbWJpbm8gYnVyZ2VyXCIsXG4gICAgICAgIGluZ3JlZGllbnRzOiBgaG9tZW1hZGUgYnV0dGVyIGJ1biwgbWF5b25uYWlzZSBidXJnZXIsXG4gICAgICAgIGZpZWxkIGxldHR1Y2UsIGJlZWYsIEJBTUJJTk8gbGlxdWlkXG4gICAgICAgIGNoZWVzZSwgc2NyYW1ibGVkIGVnZyB3aXRoIHNwcmluZyBvbmlvbixcbiAgICAgICAgYmFjb24gY2hpcHMsIGhvbWVtYWRlIGF2b2NhZG8gc2Fsc2EsXG4gICAgICAgIGNoaWxsaSBwZXBwZXJgLFxuICAgICAgICBpbWdVcmw6IFwiLi9pbWFnZXMvYmFtYmluby1idXJnZXIuanBnXCIsXG4gICAgICAgIHByaWNlOiA5LjUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiZG91YmxlIGJlZWYgYnVyZ2VyXCIsXG4gICAgICAgIGluZ3JlZGllbnRzOiBgaG9tZW1hZGUgYnV0dGVyIGJ1biwgYnVyZ2VyIG1heW9ubmFpc2UsXG4gICAgICAgIGZpZWxkIGxldHR1Y2UsIDE1MGcgYmVlZiwgdHdvIHNsaWNlcyBvZlxuICAgICAgICBDaGVkYXIgY2hlZXNlLCAxMzBnIHNocmVkZGVkIGJlZWYsIHR3b1xuICAgICAgICBzbGljZXMgb2YgTGltYnVyZ2VyIGNoZWVzZWAsXG4gICAgICAgIGltZ1VybDogXCIuL2ltYWdlcy9kb3VibGUtYmVlZi5qcGdcIixcbiAgICAgICAgcHJpY2U6IDE3LjUsXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgbmFtZTogXCJoYW0gYW5kIGNoZWVzZSBwaXp6YVwiLFxuICAgICAgICBpbmdyZWRpZW50czogYHBpenphIGRvdWdoLCB0b21hdG8gYmFzZSwgQ2hlZGFyIGNoZWVzZSxcbiAgICAgICAgaGFtIHNhdXNhZ2UsIGNvcm5gLFxuICAgICAgICBpbWdVcmw6IFwiLi9pbWFnZXMvaGFtLXBpenphLmpwZ1wiLFxuICAgICAgICBwcmljZTogNy41LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImhvdC1kb2cgY2xhc3NpY1wiLFxuICAgICAgICBpbmdyZWRpZW50czogYGhvbWVtYWRlIGJ1dHRlciByb2xsLCBidXJnZXIgbWF5b25uYWlzZSxcbiAgICAgICAgZmllbGQgbGV0dHVjZSwgc2F1c2FnZSBYWEwgd2l0aCBjaGVlc2UsXG4gICAgICAgIENoZWRkYXIgY2hlZXNlLCByb2FzdGVkIG9uaW9ucywgQkJRIHNhdWNlYCxcbiAgICAgICAgaW1nVXJsOiBcIi4vaW1hZ2VzL2hvdC1kb2ctY2xhc3NpYy5qcGdcIixcbiAgICAgICAgcHJpY2U6IDUuNSxcbiAgICB9LFxuXTtcblxuZnVuY3Rpb24gbWVudUl0ZW0obmFtZSwgaW5ncmVkaWVudHMsIGltZ1VybCwgcHJpY2UpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1uYW1lXCIpO1xuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBjb25zdCBpdGVtSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtSW5ncmVkaWVudHMuY2xhc3NMaXN0LmFkZChcIml0ZW0taW5ncmVkaWVudHNcIik7XG4gICAgaXRlbUluZ3JlZGllbnRzLnRleHRDb250ZW50ID0gaW5ncmVkaWVudHM7XG5cbiAgICBpdGVtRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChpdGVtSW5ncmVkaWVudHMpO1xuXG4gICAgY29uc3QgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpdGVtSW1hZ2Uuc3JjID0gaW1nVXJsO1xuICAgIGNvbnN0IEl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgSXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXByaWNlXCIpO1xuICAgIHByaWNlICs9IFwiXCI7XG4gICAgSXRlbVByaWNlLnRleHRDb250ZW50ID1cbiAgICAgICAgcHJpY2UucmVwbGFjZSgvKD88PVxcLilcXGQqLywgKG1hdGNoKSA9PiBtYXRjaC5wYWRFbmQoMiwgXCIwXCIpKSArIC8vIG1ha2Ugc3VyZSBwcmljZSBpcyBkaXNwbGF5IHdpdGggdHJhaWxpbmcgemVyb1xuICAgICAgICBcIuKCrFwiO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKEl0ZW1QcmljZSk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGNvbnN0IG1lbnVzID0gbWVudXNEYXRhLm1hcChcbiAgICAgICAgKHsgbmFtZSwgaW5ncmVkaWVudHMsIGltZ1VybCwgcHJpY2UgfSkgPT5cbiAgICAgICAgICAgIG1lbnVJdGVtKG5hbWUsIGluZ3JlZGllbnRzLCBpbWdVcmwsIHByaWNlKVxuICAgICk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgbWVudXMuZm9yRWFjaCgobWVudSkgPT4gY29udGVudC5hcHBlbmRDaGlsZChtZW51KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZW5kZXIsXG59O1xuIiwiY29uc3Qgb3BlbkhvdXJzRGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGRheTogXCJNb25cIixcbiAgICAgICAgdGltZTogXCIxMDoxOFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBkYXk6IFwiVHVlXCIsXG4gICAgICAgIHRpbWU6IFwiMTA6MThcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZGF5OiBcIldlZFwiLFxuICAgICAgICB0aW1lOiBcIjEwOjE4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGRheTogXCJUaHVcIixcbiAgICAgICAgdGltZTogXCIxMDoxOFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBkYXk6IFwiRnJpXCIsXG4gICAgICAgIHRpbWU6IFwiMTA6MThcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZGF5OiBcIlNhdFwiLFxuICAgICAgICB0aW1lOiBcImNsb3NlZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBkYXk6IFwiU3VuXCIsXG4gICAgICAgIHRpbWU6IFwiY2xvc2VkXCIsXG4gICAgfSxcbl07XG5cbmNvbnN0IGFkZHJlc3NEYXRhID0ge1xuICAgIHN0cmVldDogXCJTbMOhZGtvdmnEjW92YSAzMjA0LCA5MjYgMDEgU2VyZcSPXCIsXG59O1xuXG5jb25zdCBjb250YWN0RGF0YSA9IHtcbiAgICBlbWFpbDogXCJmcmFua29AZ21haWwuY29tXCIsXG4gICAgcGhvbmU6IFwiKzQyMTkwNTgxMTQxMFwiLFxufTtcblxuZnVuY3Rpb24gY3JlYXRlT3BlbkhvdXIoZGF5LCB0aW1lKSB7XG4gICAgY29uc3Qgb3BlbkhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG9wZW5Ib3VyLmNsYXNzTGlzdC5hZGQoXCJvcGVuLWhvdXJcIik7XG5cbiAgICBjb25zdCBkYXlET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkYXlET00uY2xhc3NMaXN0LmFkZChcImRheVwiKTtcbiAgICBkYXlET00udGV4dENvbnRlbnQgPSBkYXk7XG5cbiAgICBjb25zdCB0aW1lRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGltZURPTS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcbiAgICB0aW1lRE9NLnRleHRDb250ZW50ID0gdGltZTtcblxuICAgIG9wZW5Ib3VyLmFwcGVuZENoaWxkKGRheURPTSk7XG4gICAgb3BlbkhvdXIuYXBwZW5kQ2hpbGQodGltZURPTSk7XG5cbiAgICByZXR1cm4gb3BlbkhvdXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wZW5Ib3VycygpIHtcbiAgICBjb25zdCBvcGVuSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG9wZW5Ib3Vycy5jbGFzc0xpc3QuYWRkKFwib3Blbi1ob3Vyc1wiKTtcblxuICAgIGNvbnN0IGhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSBcIm9wZW4gaG91cnNcIjtcbiAgICBvcGVuSG91cnMuYXBwZW5kQ2hpbGQoaG91cnNUaXRsZSk7XG5cbiAgICBvcGVuSG91cnNEYXRhXG4gICAgICAgIC5tYXAoKHsgZGF5LCB0aW1lIH0pID0+IGNyZWF0ZU9wZW5Ib3VyKGRheSwgdGltZSkpXG4gICAgICAgIC5mb3JFYWNoKChvcGVuSG91cikgPT4gb3BlbkhvdXJzLmFwcGVuZENoaWxkKG9wZW5Ib3VyKSk7XG5cbiAgICByZXR1cm4gb3BlbkhvdXJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRyZXNzKCkge1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImFkZHJlc3NcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcImFkZHJlc3NcIjtcbiAgICBjb25zdCBzdHJlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzdHJlZXQudGV4dENvbnRlbnQgPSBhZGRyZXNzRGF0YS5zdHJlZXQ7XG5cbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKHN0cmVldCk7XG5cbiAgICByZXR1cm4gYWRkcmVzcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJjb250YWN0XCI7XG5cbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZChcImVtYWlsXCIpO1xuICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gXCJlbWFpbDpcIjtcbiAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBlbWFpbEFkZHJlc3MudGV4dENvbnRlbnQgPSBjb250YWN0RGF0YS5lbWFpbDtcbiAgICBlbWFpbC5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcbiAgICBlbWFpbC5hcHBlbmRDaGlsZChlbWFpbEFkZHJlc3MpO1xuXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBob25lLmNsYXNzTGlzdC5hZGQoXCJlbWFpbFwiKTtcbiAgICBjb25zdCBwaG9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcGhvbmVMYWJlbC50ZXh0Q29udGVudCA9IFwicGhvbmU6XCI7XG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9IGNvbnRhY3REYXRhLnBob25lO1xuICAgIHBob25lLmFwcGVuZENoaWxkKHBob25lTGFiZWwpO1xuICAgIHBob25lLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocGhvbmUpO1xuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICAgIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbmZvXCIpO1xuXG4gICAgY29uc3Qgb3BlbkhvdXJzID0gY3JlYXRlT3BlbkhvdXJzKCk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGNyZWF0ZUFkZHJlc3MoKTtcbiAgICBjb25zdCBjb250YWN0ID0gY3JlYXRlQ29udGFjdCgpO1xuXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQob3BlbkhvdXJzKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVuZGVyLFxufTtcbiIsImltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSBcIi4vcGFnZUxvYWRlclwiO1xuXG5mdW5jdGlvbiBzZXRBY3RpdmVUYWIodGFiKSB7XG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiXCIpO1xuXG4gICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICB0YWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRhYih0YWIpIHtcbiAgICBzZXRBY3RpdmVUYWIodGFiKTtcbiAgICBsb2FkUGFnZSh0YWIuaWQpO1xufVxuIiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vcGFnZXMvbWVudVwiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vcGFnZXMvY29udGFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFBhZ2UocGFnZUlkKSB7XG4gICAgY2xlYXJQYWdlKCk7XG4gICAgc3dpdGNoIChwYWdlSWQpIHtcbiAgICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgICAgIGhvbWUucmVuZGVyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1lbnVcIjpcbiAgICAgICAgICAgIG1lbnUucmVuZGVyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNvbnRhY3RcIjpcbiAgICAgICAgICAgIGNvbnRhY3QucmVuZGVyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGhvbWUucmVuZGVyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbn1cbiIsImltcG9ydCB7IHN3aXRjaFRhYiB9IGZyb20gXCIuL3RhYkNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYihpZCwgdGV4dENvbnRlbnQsIGlzQWN0aXZlKSB7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGFiLmlkID0gaWQ7XG4gICAgdGFiLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2hUYWIodGhpcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFiO1xufVxuIiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xuaW1wb3J0IHsgY3JlYXRlVGFiIH0gZnJvbSBcIi4vdGFiXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgaG9tZSA9IGNyZWF0ZVRhYihcImhvbWVcIiwgXCJob21lXCIsIHRydWUpO1xuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVUYWIoXCJtZW51XCIsIFwibWVudVwiLCBmYWxzZSk7XG4gICAgY29uc3QgY29udGFjdCA9IGNyZWF0ZVRhYihcImNvbnRhY3RcIiwgXCJjb250YWN0XCIsIGZhbHNlKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChob21lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBcIkBjb3B5cmlnaHQgYWxsIHJpZ2h0cyByZXNlcnZlZFwiO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29uc3QgY29udGVudCA9IGNyZWF0ZUNvbnRlbnQoKTtcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIGhvbWUucmVuZGVyKCk7XG59XG4iLCJpbXBvcnQgeyBpbml0UGFnZSB9IGZyb20gXCIuL2xvYWRJbml0XCI7XG5cbmluaXRQYWdlKCk7XG4iXSwibmFtZXMiOlsicmVuZGVyIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImgxIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwicDEiLCJwMiIsImFwcGVuZENoaWxkIiwibWVudXNEYXRhIiwibmFtZSIsImluZ3JlZGllbnRzIiwiaW1nVXJsIiwicHJpY2UiLCJtZW51cyIsIm1hcCIsIml0ZW0iLCJpdGVtRGVzY3JpcHRpb24iLCJpdGVtTmFtZSIsIml0ZW1JbmdyZWRpZW50cyIsIml0ZW1JbWFnZSIsInNyYyIsIkl0ZW1QcmljZSIsInJlcGxhY2UiLCJtYXRjaCIsInBhZEVuZCIsIm1lbnVJdGVtIiwiZm9yRWFjaCIsIm1lbnUiLCJvcGVuSG91cnNEYXRhIiwiZGF5IiwidGltZSIsImFkZHJlc3NEYXRhIiwiY29udGFjdERhdGEiLCJjb250YWN0SW5mbyIsIm9wZW5Ib3VycyIsImhvdXJzVGl0bGUiLCJvcGVuSG91ciIsImRheURPTSIsInRpbWVET00iLCJjcmVhdGVPcGVuSG91ciIsImNyZWF0ZU9wZW5Ib3VycyIsImFkZHJlc3MiLCJ0aXRsZSIsInN0cmVldCIsImNyZWF0ZUFkZHJlc3MiLCJjb250YWN0Iiwid3JhcHBlciIsImVtYWlsIiwiZW1haWxMYWJlbCIsImVtYWlsQWRkcmVzcyIsInBob25lIiwicGhvbmVMYWJlbCIsInBob25lTnVtYmVyIiwiY3JlYXRlQ29udGFjdCIsInN3aXRjaFRhYiIsInRhYiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmUiLCJzZXRBY3RpdmVUYWIiLCJwYWdlSWQiLCJpbm5lckhUTUwiLCJob21lIiwibG9hZFBhZ2UiLCJpZCIsImNyZWF0ZVRhYiIsImlzQWN0aXZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoaXMiLCJoZWFkZXIiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVDb250ZW50IiwiZm9vdGVyIiwiY29weXJpZ2h0IiwiY3JlYXRlRm9vdGVyIiwiY29udGFpbmVyIiwiaW5pdFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9