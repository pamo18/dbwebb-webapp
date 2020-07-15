"use strict";
import m from 'mithril';
import { delivery } from "../models/delivery.js";

let list = {
    oninit: function() {
        delivery.load();
    },
    view: function() {
        if (delivery.current.data.length === 0) {
            return [
                m("h2", "Sorry, no deliveries available!"),
                m("button.button.add",
                    {
                        href: "/add-delivery",
                        oncreate: m.route.link
                    },
                    "Add Delivery"
                )
            ];
        } else {
            return [
                m("div.delivery-container", [
                    m("h1", "Deliveries"),
                    m("table.results", [
                        m("thead", [
                            m("tr", [
                                m("th", "Delivery ID"),
                                m("th", "Date"),
                                m("th", "Product"),
                                m("th", "Amount"),
                                m("th", "Comment"),
                            ])
                        ]),
                        delivery.current.data.map(function(row) {
                            return [
                                m("tr", [
                                    m("td[data-title = Delivery ID]", row.id),
                                    m("td[data-title = Date]", row.delivery_date),
                                    m("td[data-title = Product]", row.product_name),
                                    m("td[data-title = Amount]", row.amount),
                                    m("td[data-title = Comment]", row.comment)
                                ])
                            ];
                        })
                    ])
                ]),
                m("button.button.add",
                    {
                        href: "/add-delivery",
                        oncreate: m.route.link,
                        ontouchstart: function() {
                            this.classList.add("touch-button");
                        },
                        ontouchend: function() {
                            this.classList.remove("touch-button");
                        }
                    },
                    "New delivery"
                )
            ];
        }
    }
};

export { list };
