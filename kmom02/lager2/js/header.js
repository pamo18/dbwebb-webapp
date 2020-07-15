// js/header.js

"use strict";

var header = {
    titleText: "Infinity Warehouses",
    showHeader: function () {
        window.siteHeader.innerHTML = "";

        var headerText = document.createElement("p");

        headerText.className = "header-title";
        headerText.textContent = header.titleText;

        window.siteHeader.appendChild(headerText);
        window.rootElement.appendChild(window.siteHeader);
    }
};

export { header };
