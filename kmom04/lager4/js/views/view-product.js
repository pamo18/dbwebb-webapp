"use strict";
import m from 'mithril';
import { product } from "../models/product.js";
import { utils } from "../models/utils.js";

let productView = {
    oninit: function(vnode) {
        product.loadDetails(vnode.attrs.id);
    },
    titleText: product.show.name,
    container: "product-container",
    view: function() {
        return [
            utils.backButton("/view-stock"),
            m("h1", productView.titleText),
            m(`div.${productView.container}`, [
                m("div.product-details", [
                    m("p", "ID: " + product.show.id),
                    m("p", "Article number: " + product.show.article_number),
                    m("p", "Name: " + product.show.name),
                    m("p", "Description: " + product.show.description),
                    m("p", "Specifiers: " + product.show.specifiers),
                    m("p", "Stock: " + product.show.stock),
                    m("p", "Location: " + product.show.location),
                    m("p.price", "Price: " + product.show.price)
                ])
            ])
        ];
    }
};

export { productView };
