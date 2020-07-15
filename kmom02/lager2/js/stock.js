// js/stock.js

"use strict";

import { header } from "./header.js";
import { menu } from "./menu.js";
import { product } from "./product.js";

var stock = {
    titleText: "Stock",
    showStock: function () {
        window.mainContainer.innerHTML = "";
        header.showHeader();
        menu.showMenu("folder");

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = stock.titleText;

        fetch("https://lager.emilfolino.se/v2/products?api_key=9605e96d5bbf42aba652df700ad01e69")
            .then(function (response) {
                return response.json();
            }).then(function(results) {
                var resultsTable = document.createElement("table");

                resultsTable.className = "results";
                resultsTable.innerHTML = "<tr><th>Product</th><th>Stock</th><tr>";

                results.data.forEach(function(row) {
                    var newRow = document.createElement("tr");
                    var itemName = document.createElement("td");
                    var itemStock = document.createElement("td");
                    var itemLink = document.createElement("a");

                    itemLink.href = "#";
                    itemLink.addEventListener("click", function () {
                        product.showDetails(row);
                    });
                    itemName.textContent = row.name;
                    itemStock.textContent = row.stock;

                    itemLink.appendChild(itemName);
                    newRow.appendChild(itemLink);
                    newRow.appendChild(itemStock);
                    resultsTable.appendChild(newRow);
                });

                window.mainContainer.appendChild(title);
                window.mainContainer.appendChild(resultsTable);
                window.rootElement.appendChild(window.mainContainer);
            }).catch(function(error) {
                console.log('Fetch failed with the error: ', error.message);
            });
    }
};

export { stock };
