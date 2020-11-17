// ==UserScript==
// @name         PMK_Style_Fixer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Фиксит ссылки на стили
// @author       1323ED5
// @match        https://el.pmkedu.pro/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let links = document.head.querySelectorAll("link");

    for(let i = 0; i < links.length; i++){
        links[i].href = links[i].href.replace(/https?/, "https");
    }
    console.log("PMK_Style_Fixer: Done");
})();
