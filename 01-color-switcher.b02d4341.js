!function(){var t=null;document.querySelector("[data-start]").addEventListener("click",(function(){var e=document.body;t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));e.style.backgroundColor=t}),1e3),document.querySelector("[data-start]").disabled=!0,document.querySelector("[data-stop]").disabled=!1})),document.querySelector("[data-stop]").addEventListener("click",(function(){clearInterval(t),document.querySelector("[data-start]").disabled=!1,document.querySelector("[data-stop]").disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.b02d4341.js.map