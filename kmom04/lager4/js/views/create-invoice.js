"use strict";
import m from 'mithril';
import { invoice } from "../models/invoice.js";
import { order } from "../models/order.js";
import { utils } from "../models/utils.js";

let invoiceCreate = {
    oninit: function() {
        order.load();
    },
    titleText: "Create invoice",
    container: "create-invoice-container",
    view: function() {
        return [
            utils.backButton("/invoice"),
            m("h1", invoiceCreate.titleText),
            m(`div.${invoiceCreate.container}`, [
                m("form.create-invoice", {
                    onsubmit: function(event) {
                        event.preventDefault();
                        invoice.save();
                    }
                }, [
                    m("label.input-label", "Order"),
                    m("select.input", {
                        onchange: function (e) {
                            invoice.current.order_id = e.target.value;
                        },
                        value: invoice.current.order_id
                    }, [
                        m("option[hidden]", "Please select below"),
                        order.current.data.map(function(row) {
                            if (row.status_id != 600) {
                                return m(`option[value=${row.id}]`, `${row.id}: ${row.name}`);
                            }
                        })
                    ]),
                    m("input[type=submit][value=Create].button.add", "Create")
                ])
            ])
        ];
    }
};

export { invoiceCreate };
