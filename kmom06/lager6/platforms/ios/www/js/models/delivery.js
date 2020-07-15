"use strict";

import m from "mithril";
import { config } from "../config/config.js";
import { product } from "../models/product.js";

let delivery = {
    current: { data: [] },
    load: function() {
        return m.request({
            method: "GET",
            url: `https://lager.emilfolino.se/v2/deliveries?api_key=${config.api}`
        }).then(function(result) {
            delivery.current = result;
            console.log(result);
        });
    },
    save: function() {
        var newDelivery = {
            api_key: config.api,
            product_id: delivery.current.product_id,
            amount: delivery.current.amount,
            delivery_date: delivery.current.delivery_date,
            comment: delivery.current.comment
        };

        return m.request({
            method: "POST",
            url: "https://lager.emilfolino.se/v2/deliveries",
            data: newDelivery
        }).then(function() {
            product.addStock(newDelivery.product_id, newDelivery.amount);
            m.route.set("/delivery");
        });
    }
};

export { delivery };
