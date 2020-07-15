"use strict";

import m from "mithril";

let product = {
    api: "9605e96d5bbf42aba652df700ad01e69",
    current: { data: [] },
    load: function() {
        return m.request({
            method: "GET",
            url: `https://lager.emilfolino.se/v2/products?api_key=${product.api}`
        }).then(function(result) {
            product.current = result;
            console.log(result);
        });
    },
    save: function() {
        var newProduct = {
            article_number: product.current.article_number,
            name: product.current.name,
            description: product.current.description,
            specifiers: product.current.specifiers,
            stock: product.current.stock,
            location: product.current.location,
            price: product.current.price,
            api_key: product.api
        };

        return m.request({
            method: "POST",
            url: "https://lager.emilfolino.se/v2/products",
            data: newProduct
        }).then(function() {
            m.route.set("/add-delivery");
        });
    },
    loadSpecific: function(id) {
        return m.request({
            method: "GET",
            url: `https://lager.emilfolino.se/v2/products/${id}?api_key=${product.api}`
        }).then(function(result) {
            product.current = result;
            console.log(result);
        });
    },
    updateStock: async function(id, amount) {
        let productToUpdate;

        product.current.data.forEach(function(row) {
            if (row.id == id) {
                productToUpdate = row;
            }
        });
        var updateProduct = {
            id: productToUpdate.id,
            article_number: productToUpdate.article_number,
            name: productToUpdate.name,
            description: productToUpdate.description,
            specifiers: productToUpdate.specifiers,
            stock: parseInt(productToUpdate.stock) + parseInt(amount),
            location: productToUpdate.location,
            price: productToUpdate.price,
            api_key: product.api
        };

        console.log(updateProduct);
        return m.request({
            method: "PUT",
            url: "https://lager.emilfolino.se/v2/products",
            data: updateProduct
        }).then(function() {
            m.route.set("/#!");
        });
    }
};

export { product };
