"use strict";
import m from 'mithril';

import { layout } from './views/layout';
import { list } from './views/list';
import { addDelivery } from './views/add-delivery';
import { addProduct } from './views/add-product';

m.route(document.body, "/", {
    "/": {
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
    }
});
