"use strict";
import m from 'mithril';
import { order } from "../models/order.js";
import { map } from "../models/map.js";
import position from "../models/position.js";

let orderDetailsView = {
    oninit: function(vnode) {
        order.loadPicklist(vnode.attrs.id);
        position.getPosition();
    },
    oncreate: function() {
        map.showMap();
    },
    container: "order-details-container",
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
        map.searchMap(order.show.data);
        map.showPosition();
        return [
            m(`div.${orderDetailsView.container}.slide-in`, [
                m("h1", `Order ${order.show.data.id}`),
                m("h3.center",
                    order.show.data.name + ", " +
                    order.show.data.address + ", " +
                    order.show.data.zip + ", " +
                    order.show.data.city + ", " +
                    order.show.data.country
                ),
                m("div#map.map", ""),
                m("h2", "Products"),
                m("table.results", [
                    m("thead", [
                        m("tr", [
                            m("th", "Product ID"),
                            m("th", "Name"),
                            m("th", "Amount")
                        ])
                    ]),
                    order.picklist.map(function(row) {
                        return [
                            m("tr", [
                                m("td[data-title = Product ID]", row.product_id),
                                m("td[data-title = Name]", row.name),
                                m("td[data-title = Amount]", row.amount)
                            ])
                        ];
                    })
                ]),
            ])
        ];
    }
};

export { orderDetailsView };
