/* global menu, header, stock */

"use strict";

var product = function (item) {
    var showDetails = function () {
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
        var backButtonOuter = document.createElement("p");
        var backButtonInner = document.createElement("a");

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

        backButtonOuter.className = "outer-button";
        backButtonInner.className = "button";
        backButtonInner.href = "#";
        backButtonInner.textContent = "Back";
        backButtonInner.addEventListener("click", stock.showStock);
        backButtonOuter.appendChild(backButtonInner);

        siteHeader.appendChild(backButtonOuter);

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(productDetails);

        window.rootElement.appendChild(window.mainContainer);
    };

    return {
        product: product,
        showDetails: showDetails
    };
};
