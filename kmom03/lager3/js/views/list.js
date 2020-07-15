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
                m("h1", "Deliveries"),
                m("div.delivery-container", [
                    m("table.results", [
                        m("tr", [
                            m("th", "Delivery ID"),
                            m("th", "Date"),
                            m("th", "Product"),
                            m("th", "Amount"),
                            m("th", "Comment"),
                        ]),
                        delivery.current.data.map(function(row) {
                            return [
                                m("tr", [
                                    m("td", row.id),
                                    m("td", row.delivery_date),
                                    m("td", row.product_name),
                                    m("td", row.amount),
                                    m("td", row.comment)
                                ])
                            ];
                        })
                    ])
                ]),
                m("button.button.add",
                    {
                        href: "/add-delivery",
                        oncreate: m.route.link
                    },
                    "New delivery"
                )
            ];
        }
    }
};

export { list };
