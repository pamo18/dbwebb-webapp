
"use strict";

var header = (function () {
    var showHeader = function () {
        window.siteHeader.innerHTML = "";

        var headerText = document.createElement("p");

        headerText.className ="header-title";
        headerText.textContent = "Infinity Warehouses";

        window.siteHeader.appendChild(headerText);
        window.rootElement.appendChild(window.siteHeader);
    };

    return {
        showHeader: showHeader
    };
})(header);
