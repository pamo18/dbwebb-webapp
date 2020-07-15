// js/product.js

"use strict";

import { header } from "./header.js";
import { menu } from "./menu.js";
import { stock } from "./stock.js";
import utils from "./utils.js";

var product = {
    showDetails: function (item) {
        window.mainContainer.innerHTML = "";
        header.showHeader();
        menu.showMenu("folder");

        var title = document.createElement("h1");
        var productDetails = document.createElement("div");
        var productID = document.createElement("p");
        var productAN = document.createElement("p");
        var productName = document.createElement("p");
        var productDesc = document.createElement("p");
        var productSpec = document.createElement("p");
        var productStock = document.createElement("p");
        var productLocation = document.createElement("p");
        var productPrice = document.createElement("p");
        var siteHeader = document.getElementById("siteHeader");
        var backButton = utils.backButton(stock.showStock);

        title.className = "title";
        title.className = "details";
        title.textContent = item.name;
        productPrice.className = "price";
        productDetails.className = "product-details";

        productID.textContent = "ID:  " + item.id;
        productAN.textContent  = "Article number:  " + item.article_number;
        productName.textContent  = "Name:  " + item.name;
        productDesc.textContent  = "Description:  " + item.description;
        productSpec.textContent  = "Specifiers:  " + item.specifiers;
        productStock.textContent  = "Stock:  " + item.stock;
        productLocation.textContent  = "Location:  " + item.location;
        productPrice.textContent  = "Price:  " + item.price;

        productDetails.appendChild(productID);
        productDetails.appendChild(productAN);
        productDetails.appendChild(productName);
        productDetails.appendChild(productDesc);
        productDetails.appendChild(productSpec);
        productDetails.appendChild(productStock);
        productDetails.appendChild(productLocation);
        productDetails.appendChild(productPrice);

        siteHeader.appendChild(backButton);

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(productDetails);

        window.rootElement.appendChild(window.mainContainer);
    }
};

export { product };
