"use strict";
import { access } from "../models/access.js";

import m from 'mithril';
import { utils } from "../models/utils.js";

var layout = {
    view: function (vnode) {
        var invoiceView = (function() {
            if (access.token.value) {
                return {
                    name: "Invoices",
                    class: "folder",
                    nav: ["/invoice", "/view-invoice", "/create-invoice"]
                };
            }
        })();
        var navElements = [
            {name: "Home", class: "home", nav: ["/", "/login", "/register"]},
            {name: "Stock", class: "folder", nav: ["/view-stock", "/view-product"]},
            {name: "Orders", class: "shopping_cart", nav: ["/view-order", "/view-picklist"]},
            {name: "Deliveries", class: "archive", nav: ["/delivery"]},
            {name: "+ Delivery", class: "add_box", nav: ["/add-delivery"]},
            {name: "+ Product", class: "add_box", nav: ["/add-product"]},
            invoiceView
        ];
        var splitLink = "/" + m.route.get().split("/")[1];
        var navbar = (function() {
            var n = [];

            navElements.forEach(function (element) {
                if (element) {
                    n.push(
                        m(`a[href=${element.nav[0]}]`, {
                            oncreate: m.route.link,
                            className: (element.nav.includes(splitLink) ? "active" : null)
                        }, [
                            m("i.material-icons", {textContent: element.class}),
                            m("span.icon-text", element.name)
                        ]));
                }
            });

            return n;
        })();

        return  [
            m("header.site-header", {id: "site-header"}, [
                m("p.header-title", {textContent: "Infinity Warehouses"}),
                utils.backButton(splitLink)
            ]),
            m("nav.bottom-nav", navbar),
            m("main.container", vnode.children)
        ];
    }
};

export { layout };
