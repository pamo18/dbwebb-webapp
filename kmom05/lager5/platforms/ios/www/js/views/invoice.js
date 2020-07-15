"use strict";
import m from 'mithril';
import { invoice } from "../models/invoice.js";

let invoiceView = {
    oninit: function() {
        invoice.load();
    },
    titleText: "Invoices",
    container: "invoice-container",
    view: function() {
        if (invoice.current.data.length === 0) {
            return [
                m("h2", "Sorry, no invoices available!"),
                m("button.button.add",
                    {
                        href: "/create-invoice",
                        oncreate: m.route.link
                    },
                    "Create invoice"
                )
            ];
        } else {
            return [
                m("h1", invoiceView.titleText),
                m(`div.${invoiceView.container}`, [
                    m("button.button.add",
                        {
                            href: "/create-invoice",
                            oncreate: m.route.link
                        },
                        "Create invoice"
                    ),
                    m("br"),
                    m("table.results", [
                        m("thead", [
                            m("tr", [
                                m("th", "Name"),
                                m("th", "Invoice ID"),
                                m("th", "Order ID"),
                                m("th", "View")
                            ])
                        ]),
                        invoice.current.data.map(function(row) {
                            return [
                                m("tr", [
                                    m("td[data-title = Name]", row.name),
                                    m("td[data-title = Invoice ID]", row.id),
                                    m("td[data-title = Order ID]", row.order_id),
                                    m("td[data-title = View]", [
                                        m("a", {
                                            href: "/view-invoice/" + row.id,
                                            oncreate: m.route.link
                                        }, [
                                            m("i.material-icons", "list")
                                        ])
                                    ])
                                ])
                            ];
                        })
                    ])
                ])
            ];
        }
    }
};

export { invoiceView };
