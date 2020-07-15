/* global menu, header, product */

"use strict";

var stock = (function () {
    var showStock = function () {
        window.mainContainer.innerHTML = "";
        header.showHeader();
        menu.showMenu("folder");

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Stock";

        fetch("https://lager.emilfolino.se/v2/products?api_key=9605e96d5bbf42aba652df700ad01e69")
            .then(function (response) {
                return response.json();
            }).then(function(results) {
                var resultsTable = document.createElement("table");

                resultsTable.className = "products";
                resultsTable.innerHTML = "<tr><th>Product</th><th>Stock</th><tr>";

                results.data.forEach(function(row) {
                    var newRow = document.createElement("tr");
                    var itemName = document.createElement("td");
                    var itemStock = document.createElement("td");
                    var itemLink = document.createElement("a");

                    itemLink.href = "#";
                    itemLink.addEventListener("click", product(row).showDetails);
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

        // var githubRequest = new XMLHttpRequest();
        // githubRequest.addEventListener("load", renderGithubRepos);
        // githubRequest.open("GET", "https://api.github.com/users/emilfolino/repos");
        // githubRequest.send();
    };

    // var renderGithubRepos = function () {
    //     var repos = JSON.parse(this.responseText);
    //
    //     repos.forEach(function(repo) {
    //         var repoElement = document.createElement("p");
    //         repoElement.textContent = repo.name;
    //         window.mainContainer.appendChild(repoElement);
    //     });
    //
    //     window.rootElement.appendChild(window.mainContainer);
    //
    //     showMenu("folder");
    // }

    return {
        showStock: showStock
    };
})(stock);
