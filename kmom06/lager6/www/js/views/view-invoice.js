"use strict";
import m from 'mithril';
import { invoice } from "../models/invoice.js";

let invoiceDetails = {
    oninit: function(vnode) {
        invoice.loadDetails(vnode.attrs.id);
    },
    container: "order-container",
    onbeforeremove: function(vnode) {
        vnode.dom.classList.add("slide-out");
        return new Promise(function(resolve) {
            setTimeout(function() {
                vnode.dom.classList.remove("slide-out");
                resolve();
            }, 250);
        });
    },
    view: function() {
        return [
            m(`div.${invoiceDetails.container}.slide-in`, [
                m("h1", `Invoice for ${invoice.show.name}`),
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
