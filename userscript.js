// ==UserScript==
// @name         PMK_STYLE_FIXER
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Style_fixer
// @author       1323ED5
// @match        https://el.pmkedu.pro/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let links = document.head.querySelectorAll("link");
    let re = /https?/;
    console.log(links);
    for(let i = 0; i < links.length; i++){
        links[i].href = links[i].href.replace(re, "https");
        console.log(links[i]);
    }
    console.log("done");
})();
