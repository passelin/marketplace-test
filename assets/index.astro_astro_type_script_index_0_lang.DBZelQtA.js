import{f as p,F as v,o as b,d as y,e as i}from"./search.ByW7tflT.js";import"./preload-helper.CGb4-Esy.js";const g={plugin:{icon:"🔌",label:"Plugins",color:"#7c3aed",href:"plugins/"},agent:{icon:"🤖",label:"Agents",color:"#2563eb",href:"agents/"},instruction:{icon:"📋",label:"Instructions",color:"#0891b2",href:"instructions/"},skill:{icon:"⚡",label:"Skills",color:"#ca8a04",href:"skills/"},hook:{icon:"🪝",label:"Hooks",color:"#c2410c",href:"hooks/"},workflow:{icon:"⚙️",label:"Workflows",color:"#15803d",href:"workflows/"}},m=Object.keys(g),d=new v;function $(e,t,l){const a=d.highlight(e.title,t),c=e.description??"",o=c.length>110?c.slice(0,110)+"…":c,n=o?d.highlight(o,t):"";if(e.rawUrl)return`<button type="button" class="gs-result" data-raw-url="${i(e.rawUrl)}" data-title="${i(e.title)}" data-type="${i(e.type)}">
      <div class="gs-title">${a}</div>
      ${n?`<div class="gs-desc">${n}</div>`:""}
    </button>`;const r=`${l}?q=${encodeURIComponent(e.title)}`;return`<a href="${i(r)}" class="gs-result">
    <div class="gs-title">${a}</div>
    ${n?`<div class="gs-desc">${n}</div>`:""}
  </a>`}function w(e,t,l){const a=g[e]??{icon:"📦",label:e,color:"#888",href:"#"};return`<div class="gs-group">
    <div class="gs-group-header" style="--type-color:${a.color}">
      <span class="gs-group-icon">${a.icon}</span>
      <span class="gs-group-label">${i(a.label)}</span>
      <span class="gs-group-count">${t.length}</span>
    </div>
    ${t.map(c=>$(c,l,a.href)).join("")}
  </div>`}async function k(){const e=document.getElementById("global-search-input"),t=document.getElementById("global-search-results"),l=document.getElementById("categories-section");if(!e||!t)return;const a=await p("search-index.json");a&&d.setItems(a);function c(){const o=e.value.trim();if(o.length<2){t.innerHTML="",t.hidden=!0,l&&(l.hidden=!1);return}l&&(l.hidden=!0);const n=d.search(o,{limit:60});if(n.length===0)t.innerHTML='<div class="gs-empty">No results found</div>';else{const r=new Map;for(const s of n)r.has(s.type)||r.set(s.type,[]),r.get(s.type).push(s);const u=[...m,...r.keys()].filter((s,f,h)=>h.indexOf(s)===f);t.innerHTML=u.filter(s=>r.has(s)).map(s=>w(s,r.get(s),o)).join("")}t.hidden=!1}t.addEventListener("click",o=>{const n=o.target.closest(".gs-result[data-raw-url]");if(!n)return;o.preventDefault();const r=n.dataset.rawUrl,u=n.dataset.title??"",s=n.dataset.type??"";t.hidden=!0,e.value="",l&&(l.hidden=!1),b(r,u,s)}),e.addEventListener("input",y(c,150)),e.addEventListener("keydown",o=>{o.key==="Escape"&&(e.value="",c(),e.blur())})}document.addEventListener("DOMContentLoaded",k);
