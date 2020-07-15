"use strict";
import m from 'mithril';

import { access } from "./models/access.js";
import { layout } from './views/layout';
import { home } from './views/home';
import { stockView } from './views/view-stock';
import { productView } from './views/view-product';
import { orderView } from './views/view-order';
import { picklistView } from './views/view-picklist';
import { list } from './views/list';
import { addDelivery } from './views/add-delivery';
import { addProduct } from './views/add-product';
import { registerUser } from './views/register';
import { loginUser } from './views/login';
import { invoiceView } from './views/invoice';
import { invoiceDetails } from './views/view-invoice';
import { invoiceCreate } from './views/create-invoice';

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(layout, m(home));
        }
    },
    "/view-stock": {
        render: function() {
            return m(layout, m(stockView));
        }
    },
    "/view-product/:id": {
        render: function(vnode) {
            return m(layout, m(productView, vnode.attrs));
        }
    },
    "/view-order": {
        render: function() {
            return m(layout, m(orderView));
        }
    },
    "/view-picklist/:id": {
        render: function(vnode) {
            return m(layout, m(picklistView, vnode.attrs));
        }
    },
    "/delivery": {
        render: function() {
            return m(layout, m(list));
        }
    },
    "/add-delivery": {
        render: function() {
            return m(layout, m(addDelivery));
        }
    },
    "/add-product": {
        render: function() {
            return m(layout, m(addProduct));
        }
    },
    "/register": {
        render: function() {
            return m(layout, m(registerUser));
        }
    },
    "/login": {
        render: function() {
            return m(layout, m(loginUser));
        }
    },
    "/invoice": {
        render: function() {
            if (access.token.value) {
                return m(layout, m(invoiceView));
            } else {
                return m.route.set("/login");
            }
        }
    },
    "/view-invoice/:id": {
        render: function(vnode) {
            if (access.token.value) {
                return m(layout, m(invoiceDetails, vnode.attrs));
            } else {
                return m.route.set("/login");
            }
        }
    },
    "/create-invoice": {
        render: function() {
            if (access.token.value) {
                return m(layout, m(invoiceCreate));
            } else {
                return m.route.set("/login");
            }
        }
    }
});
