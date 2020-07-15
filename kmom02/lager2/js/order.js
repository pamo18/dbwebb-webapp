// js/order.js

"use strict";

import { header } from "./header.js";
import { menu } from "./menu.js";
import { newOrders } from "./new-orders.js";
import utils from "./utils.js";

var order = {
    titleText: "Pick list",
    packOrder: function (order) {
        var updatedOrder = {
            id: order.id,
            name: order.name,
            address: order.address,
            zip: order.zip,
            city: order.city,
            country: order.country,
            status_id: 200,
            api_key: "9605e96d5bbf42aba652df700ad01e69"
        };
        var json = JSON.stringify(updatedOrder);
        var request = new XMLHttpRequest();

        request.addEventListener("load", function (e) {
            console.log(e);
        });
        request.open("PUT", "https://lager.emilfolino.se/v2/orders");
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send(json);
    },
    updateStock: function (order) {
        order.order_items.forEach(function(row) {
            var updatedProduct = {
                id: row.product_id,
                article_number: row.article_number,
                name: row.name,
                description: row.description,
                specifiers: row.specifiers,
                stock: (row.stock - row.amount),
                location: row.location,
                price: row.price,
                api_key: "9605e96d5bbf42aba652df700ad01e69"
            };
            var json = JSON.stringify(updatedProduct);
            var request = new XMLHttpRequest();

            request.addEventListener("load", function (e) {
                console.log(e);
                (newOrders.showNewOrders)();
            });
            request.open("PUT", "https://lager.emilfolino.se/v2/products");
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send(json);
        });
    },
    showOrder: function (orderDetails) {
        window.mainContainer.innerHTML = "";
        header.showHeader();
        menu.showMenu("shopping_cart");

        var title = document.createElement("h1");
        var siteHeader = document.getElementById("siteHeader");
        var backButton = utils.backButton(newOrders.showNewOrders);
        var packedButton = document.createElement("button");
        var details = document.createElement("div");
        var orderID = document.createElement("p");
        var orderName = document.createElement("p");
        var resultsTable = document.createElement("table");
        var message = document.createElement("p");

        title.className = "title";
        title.className = "details";
        title.textContent = order.titleText;

        packedButton.className = "button packed hide";
        packedButton.textContent = "Mark as Packed";
        packedButton.addEventListener("click", function() {
            order.packOrder(orderDetails);
            order.updateStock(orderDetails);
        });

        details.className = "center";
        orderID.textContent = "Order ID: " + orderDetails.id;
        orderName.textContent = "Customer: " + orderDetails.name;
        resultsTable.className = "results";
        message.className = "center";

        var checkProduct = "<th>Pick</th>";
        var heading1 = "<th>Product ID</th>";
        var heading2 = "<th>Name</th>";
        var heading3 = "<th>Amount</th>";
        var heading4 = "<th>Stock</th>";
        var heading5 = "<th>Location</th>";

        resultsTable.innerHTML =
            `<tr>
            ${checkProduct}
            ${heading1}
            ${heading2}
            ${heading3}
            ${heading4}
            ${heading5}
            <tr>`;

        orderDetails.order_items.forEach(function(row) {
            var newRow = document.createElement("tr");
            var checkbox = document.createElement("input");
            var noStock = document.createElement("i");
            var productID = document.createElement("td");
            var productName = document.createElement("td");
            var amount = document.createElement("td");
            var stock = document.createElement("td");

            if (row.stock - row.amount < 0) {
                stock.className = "red";
            }
            var location = document.createElement("td");

            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("name", row.product_id);
            checkbox.addEventListener("click", function () {
                var countCheck = document.querySelectorAll(
                    'input[type="checkbox"]:checked').length;

                if (orderDetails.order_items.length == countCheck) {
                    message.classList.add("hide");
                    message.classList.remove("view");
                    packedButton.classList.remove("hide");
                    packedButton.classList.add("view");
                } else {
                    message.classList.add("view");
                    message.classList.remove("hide");
                    packedButton.classList.add("hide");
                    packedButton.classList.remove("view");
                }
            });
            noStock.className = "material-icons";
            noStock.textContent = "warning";
            message.textContent = "To continue all products must be checked!";
            productID.textContent = row.product_id;
            productName.textContent = row.name;
            amount.textContent = row.amount;
            stock.textContent = row.stock;
            location.textContent = row.location;

            if (row.stock - row.amount >= 0) {
                newRow.appendChild(checkbox);
            } else {
                newRow.appendChild(noStock);
            }

            newRow.appendChild(productID);
            newRow.appendChild(productName);
            newRow.appendChild(amount);
            newRow.appendChild(stock);
            newRow.appendChild(location);
            resultsTable.appendChild(newRow);
        });

        siteHeader.appendChild(backButton);
        details.appendChild(orderID);
        details.appendChild(orderName);

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(details);
        window.mainContainer.appendChild(resultsTable);
        window.mainContainer.appendChild(packedButton);
        window.mainContainer.appendChild(message);

        window.rootElement.appendChild(window.mainContainer);
    }
};

export { order };
