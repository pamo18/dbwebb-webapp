"use strict";
import m from 'mithril';
import { order } from "../models/order.js";

let picklistView = {
    oninit: function(vnode) {
        order.loadPicklist(vnode.attrs.id);
    },
    titleText: "Pick list",
    container: "picklist-container",
    view: function() {
        var packedButton = m("button.button.packed", {
            onclick: order.packOrder
        }, "Mark as Packed");
        var message = m("p.center", "To continue all products must be checked!");
        var check = pickListCheck();

        function pickable(productID, stock, amount) {
            var p;

            if (stock - amount >= 0) {
                p = m(`input[type=checkbox][name=${productID}]`);
            } else {
                p = m("i.material-icons", "warning");
            }
            return p;
        }
        function pickListCheck() {
            var countCheck = document.querySelectorAll(
                'input[type="checkbox"]:checked').length;

            if (order.picklist.length == countCheck) {
                return packedButton;
            } else {
                return message;
            }
        }
        return [
            m("h1", picklistView.titleText),
            m(`div.${picklistView.container}`, [
                m("p.center", "Order ID: " + order.show.data.id),
                m("p.center", "Customer: " + order.show.data.name),
                m("table.results", [
                    m("thead", [
                        m("tr", [
                            m("th", "Pick"),
                            m("th", "Product ID"),
                            m("th", "Name"),
                            m("th", "Amount"),
                            m("th", "Stock"),
                            m("th", "Location"),
                        ])
                    ]),
                    order.picklist.map(function(row) {
                        var pick = pickable(row.product_id, row.stock, row.amount);

                        return [
                            m("tr", [
                                m("td[data-title = Pick]", {
                                    onclick: function () {
                                        check = pickListCheck();
                                    }
                                }, pick),
                                m("td[data-title = Product ID]", row.product_id),
                                m("td[data-title = Name]", row.name),
                                m("td[data-title = Amount]", row.amount),
                                m("td[data-title = Stock]", row.stock),
                                m("td[data-title = Location]", row.location)
                            ])
                        ];
                    })
                ]),
                check
            ])
        ];
    }
};

export { picklistView };
