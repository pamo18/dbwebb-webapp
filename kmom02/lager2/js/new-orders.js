// js/new-orders.js

"use strict";

import { header } from "./header.js";
import { menu } from "./menu.js";
import { order } from "./order.js";

var newOrders = {
    titleText: "New orders",
    showNewOrders: function () {
        window.mainContainer.innerHTML = "";
        header.showHeader();
        menu.showMenu("shopping_cart");

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = newOrders.titleText;

        fetch("https://lager.emilfolino.se/v2/orders?api_key=9605e96d5bbf42aba652df700ad01e69")
            .then(function (response) {
                return response.json();
            }).then(function(results) {
                var resultsTable = document.createElement("table");

                resultsTable.className = "results";

                var heading1 = "<th>Order ID</th>";
                var heading2 = "<th>Name</th>";
                var heading3 = "<th>Rows</th>";
                var heading4 = "<th>Status</th>";
                var heading5 = "<th>Pick list</th>";

                resultsTable.innerHTML =
                    `<tr>
                    ${heading1}
                    ${heading2}
                    ${heading3}
                    ${heading4}
                    ${heading5}
                    <tr>`;

                results.data.forEach(function(row) {
                    if (row.status_id == 100) {
                        var newRow = document.createElement("tr");
                        var orderID = document.createElement("td");
                        var orderName = document.createElement("td");
                        var orderStatus = document.createElement("td");
                        var orderCount = document.createElement("td");
                        var linkPickList = document.createElement("td");

                        orderID.textContent = row.id;
                        orderName.textContent = row.name;
                        orderStatus.textContent = row.status;
                        orderCount.textContent = row.order_items.length;

                        var orderLink = document.createElement("a");
                        var icon = document.createElement("i");

                        orderLink.href = "#";
                        orderLink.addEventListener("click", function () {
                            order.showOrder(row);
                        });

                        icon.className = "material-icons";
                        icon.textContent = "list";

                        orderLink.appendChild(icon);
                        linkPickList.appendChild(orderLink);

                        newRow.appendChild(orderID);
                        newRow.appendChild(orderName);
                        newRow.appendChild(orderCount);
                        newRow.appendChild(orderStatus);
                        newRow.appendChild(linkPickList);

                        resultsTable.appendChild(newRow);
                    }
                });

                window.mainContainer.appendChild(title);
                window.mainContainer.appendChild(resultsTable);
                window.rootElement.appendChild(window.mainContainer);
            }).catch(function(error) {
                console.log('Fetch failed with the error: ', error.message);
            });
    }
};

export { newOrders };
