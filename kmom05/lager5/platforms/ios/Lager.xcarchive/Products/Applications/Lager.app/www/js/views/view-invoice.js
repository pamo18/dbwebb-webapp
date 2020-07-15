"use strict";
import m from 'mithril';
import { invoice } from "../models/invoice.js";

let invoiceDetails = {
    oninit: function(vnode) {
        invoice.loadDetails(vnode.attrs.id);
    },
    container: "order-container",
    view: function() {
        return [
            m("h1", `Invoice for ${invoice.show.name}`),
            m(`div.${invoiceDetails.container}`, [
                m("div.invoice-details", [
                    m("p", "ID: " + invoice.show.id),
                    m("p", "Order ID: " + invoice.show.order_id),
                    m("p", "Name: " + invoice.show.name),
                    m("p", "Address: " + invoice.show.address),
                    m("p", "Zip: " + invoice.show.zip),
                    m("p", "City: " + invoice.show.city),
                    m("p", "Country: " + invoice.show.country),
                    m("p.price", "Total price: " + invoice.show.total_price),
                    m("p", "Creation Date: " + invoice.show.creation_date),
                    m("p", "Due Date: " + invoice.show.due_date)
                ])
            ])
        ];
    }
};

export { invoiceDetails };
