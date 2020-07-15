"use strict";

import m from "mithril";
import { config } from "../config/config.js";

let product = {
    current: { data: [] },
    show: [],
    load: function() {
        return m.request({
            method: "GET",
            url: `https://lager.emilfolino.se/v2/products?api_key=${config.api}`
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
            api_key: config.api
        };

        return m.request({
            method: "POST",
            url: "https://lager.emilfolino.se/v2/products",
            data: newProduct
        }).then(function() {
            m.route.set("/add-delivery");
        });
    },
    loadDetails: function(id) {
        return m.request({
            method: "GET",
            url: `https://lager.emilfolino.se/v2/products/${id}?api_key=${config.api}`
        }).then(function(result) {
            product.show = result.data;
            console.log(result);
        });
    },
    addStock: async function(id, amount) {
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
            api_key: config.api
        };

        console.log(updateProduct);
        return m.request({
            method: "PUT",
            url: "https://lager.emilfolino.se/v2/products",
            data: updateProduct
        }).then(function() {
            console.log("Delivery added");
        });
    },
    removeStock: async function(item) {
        var updateProduct = {
            id: item.product_id,
            article_number: item.article_number,
            name: item.name,
            description: item.description,
            specifiers: item.specifiers,
            stock: parseInt(item.stock) - parseInt(item.amount),
            location: item.location,
            price: item.price,
            api_key: config.api
        };

        console.log(updateProduct);
        return m.request({
            method: "PUT",
            url: "https://lager.emilfolino.se/v2/products",
            data: updateProduct
        }).then(function() {
            console.log("Stock updated");
        });
    }
};

export { product };
