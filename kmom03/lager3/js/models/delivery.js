"use strict";

import m from "mithril";
import { product } from "../models/product.js";

let delivery = {
    api: "9605e96d5bbf42aba652df700ad01e69",
    current: { data: [] },
    load: function() {
        return m.request({
            method: "GET",
            url: `https://lager.emilfolino.se/v2/deliveries?api_key=${delivery.api}`
        }).then(function(result) {
            delivery.current = result;
            console.log(result);
        });
    },
    save: function() {
        var newDelivery = {
            api_key: delivery.api,
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
            product.updateStock(newDelivery.product_id, newDelivery.amount);
            m.route.set("/#!");
        });
    }
};

export { delivery };
