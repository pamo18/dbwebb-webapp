"use strict";
import m from 'mithril';
import { order } from "../models/order.js";

let orderView = {
    oninit: function() {
        order.load();
    },
    titleText: "New orders",
    container: "order-container",
    view: function() {
        if (order.current.data.length === 0) {
            return [
                m("h2", "Sorry, no orders available!")
            ];
        } else {
            return [
                m(`div.${orderView.container}`, [
                    m("h1", orderView.titleText),
                    m("table.results", [
                        m("thead", [
                            m("tr", [
                                m("th", "Order ID"),
                                m("th", "Name"),
                                m("th", "Rows"),
                                m("th", "Status"),
                                m("th", "Pick list"),
                            ])
                        ]),
                        order.current.data.map(function(row) {
                            if (row.status_id == 100) {
                                return [
                                    m("tr.pointer", {
                                        href: "/view-picklist/" + row.id,
                                        oncreate: m.route.link,
                                        ontouchstart: function() {
                                            this.classList.add("touch-row");
                                        },
                                        ontouchend: function() {
                                            this.classList.remove("touch-row");
                                        }
                                    }, [
                                        m("td[data-title = Order ID]", row.id),
                                        m("td[data-title = Name]", row.name),
                                        m("td[data-title = Rows]", row.order_items.length),
                                        m("td[data-title = Status]", row.status),
                                        m("td[data-title = Pick list]", [
                                            m("a[href=#]", [
                                                m("i.material-icons", "list")
                                            ])
                                        ])
                                    ])
                                ];
                            }
                        })
                    ])
                ])
            ];
        }
    }
};

export { orderView };
