(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=()=>{const r=document.querySelector(".header-nav-mobile-button"),o=document.querySelector(".header-nav-mobile");document.querySelector(".header-nav-mobile-button-close");const s=document.querySelectorAll(".header-nav-mobile-item");document.querySelector(".header");const n=document.querySelector(".header-nav-mobile-button-open"),e=document.querySelector(".header-nav-mobile-button-close");r.addEventListener("click",()=>{o.classList.contains("is-open")?(o.classList.remove("is-open"),n.classList.remove("is-hidden"),e.classList.add("is-hidden")):(o.classList.add("is-open"),n.classList.add("is-hidden"),e.classList.remove("is-hidden"))}),s.forEach(t=>{t.addEventListener("click",()=>{o.classList.remove("is-open"),n.classList.remove("is-hidden"),e.classList.add("is-hidden")})})},l=()=>{const r=document.querySelector(".cookies-accept-js"),o=document.querySelector(".cookies-decline-js"),s=document.querySelector(".cookies-section");if(JSON.parse(localStorage.getItem("status"))){s.style.display="none";return}r.addEventListener("click",()=>{s.style.display="none",localStorage.setItem("status",JSON.stringify(!0))}),o.addEventListener("click",()=>{s.style.display="none",localStorage.setItem("status",JSON.stringify(!1))})};c();l();
//# sourceMappingURL=main-aeb8533b.js.map
