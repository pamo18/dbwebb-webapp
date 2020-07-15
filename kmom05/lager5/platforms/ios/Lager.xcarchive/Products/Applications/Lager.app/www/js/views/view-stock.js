"use strict";
import m from 'mithril';
import { product } from "../models/product.js";

let stockView = {
    oninit: function() {
        product.load();
    },
    titleText: "Stock",
    container: "stock-container",
    view: function() {
        if (product.current.data.length === 0) {
            return [
                m("h2", "Sorry, no products available!"),
                m("button.button.add",
                    {
                        href: "/add-product",
                        oncreate: m.route.link
                    },
                    "Add Product"
                )
            ];
        } else {
            return [
                m("h1", stockView.titleText),
                m(`div.${stockView.container}`, [
                    m("table.results", [
                        m("thead", [
                            m("tr", [
                                m("th", "Product"),
                                m("th", "Stock"),
                            ])
                        ]),
                        product.current.data.map(function(row) {
                            return [
                                m("tr", [
                                    m("a", {
                                        href: "/view-product/" + row.id,
                                        oncreate: m.route.link
                                    },
                                    [
                                        m("td[data-title = Product]", row.name)
                                    ]),
                                    m("td[data-title = Stock]", row.stock)
                                ])
                            ];
                        })
                    ])
                ]),
                m("button.button.add",
                    {
                        href: "/add-product",
                        oncreate: m.route.link
                    },
                    "Add product"
                )
            ];
        }
    }
};

export { stockView };
