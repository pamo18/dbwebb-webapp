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
                m(`div.${stockView.container}`, [
                    m("h1", stockView.titleText),
                    m("table.results", [
                        m("thead", [
                            m("tr", [
                                m("th", "Product"),
                                m("th", "Stock"),
                            ])
                        ]),
                        product.current.data.map(function(row) {
                            return [
                                m("tr.pointer", {
                                    href: "/view-product/" + row.id,
                                    oncreate: m.route.link,
                                    ontouchstart: function() {
                                        this.classList.add("touch-row");
                                    },
                                    ontouchend: function() {
                                        this.classList.remove("touch-row");
                                    }
                                }, [
                                    m("td[data-title = Product]", row.name),
                                    m("td[data-title = Stock]", row.stock)
                                ])
                            ];
                        })
                    ])
                ]),
                m("button.button.add",
                    {
                        href: "/add-product",
                        oncreate: m.route.link,
                        ontouchstart: function() {
                            this.classList.add("touch-button");
                        },
                        ontouchend: function() {
                            this.classList.remove("touch-button");
                        }
                    },
                    "Add product"
                )
            ];
        }
    }
};

export { stockView };
