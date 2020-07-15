/* global home */

"use strict";

(function () {
    window.rootElement = document.getElementById("root");

    window.siteHeader = document.createElement("header");
    window.siteHeader.className = "site-header";
    window.siteHeader.id = "siteHeader";

    window.navigation = document.createElement("nav");
    window.navigation.className = "bottom-nav";

    window.mainContainer = document.createElement("main");
    window.mainContainer.className = "container";

    home.showHome();
})();
