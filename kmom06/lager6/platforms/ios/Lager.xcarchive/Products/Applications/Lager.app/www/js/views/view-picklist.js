"use strict";
import m from 'mithril';
import { order } from "../models/order.js";

let picklistView = {
    oninit: function(vnode) {
        order.loadPicklist(vnode.attrs.id);
    },
    titleText: "Pick list",
    container: "picklist-container",
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
        var packedButton = m("button.button.packed", {
            onclick: order.packOrder,
            ontouchstart: function() {
                this.classList.add("touch-button");
            },
            ontouchend: function() {
                this.classList.remove("touch-button");
            }
        }, "Mark as Packed");
        var message = m("p.center", "To continue all products must be checked!");
        var check = pickListCheck();

        function pickable(productID, stock, amount) {
            var p;

            if (stock - amount >= 0) {
                p = m(`input.check[type=checkbox][name=${productID}]`);
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
            m(`div.${picklistView.container}.slide-in`, [
                m("h1", picklistView.titleText),
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
                            m("tr.pointer", {
                                onclick: function() {
                                    if (pick.dom.checked) {
                                        pick.dom.checked = false;
                                    } else {
                                        pick.dom.checked = true;
                                    }
                                    check = pickListCheck();
                                },
                                ontouchstart: function() {
                                    this.classList.add("touch-row");
                                },
                                ontouchend: function() {
                                    this.classList.remove("touch-row");
                                }
                            }, [
                                m("td[data-title = Pick]", pick),
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
