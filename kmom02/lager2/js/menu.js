// js/menu.js

"use strict";

import { home } from "./home.js";
import { stock } from "./stock.js";
import { newOrders } from "./new-orders.js";

var menu = {
    showMenu: function (selected) {
        window.navigation.innerHTML = "";

        var navElements = [{name: "Home", class: "home", nav: home.showHome},
            {name: "Stock", class: "folder", nav: stock.showStock},
            {name: "New orders", class: "shopping_cart", nav: newOrders.showNewOrders}];

        navElements.forEach(function (element) {
            var navElement = document.createElement("a");

            if (selected === element.class) {
                navElement.className = "active";
            }

            navElement.href = "#";
            navElement.addEventListener("click", element.nav);

            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);

            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);

            window.navigation.appendChild(navElement);
        });

        window.rootElement.appendChild(window.navigation);
    }
};

export { menu };
