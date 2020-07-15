"use strict";

import m from "mithril";
import { config } from "../config/config.js";
import { product } from "../models/product.js";

let order = {
    current: { data: [] },
    show: { data: [] },
    picklist: [],
    load: function() {
        return m.request({
            method: "GET",
            url: `https://lager.emilfolino.se/v2/orders?api_key=${config.api}`
        }).then(function(result) {
            order.current = result;
            console.log(result);
        });
    },
    loadPicklist: function(id) {
        return m.request({
            method: "GET",
            url: `https://lager.emilfolino.se/v2/orders/${id}?api_key=${config.api}`
        }).then(function(result) {
            order.show = result;
            order.picklist = result.data.order_items;
            console.log(result);
        });
    },
    packOrder: function () {
        order.updateStatus(200);
        order.picklist.forEach(function(row) {
            product.removeStock(row);
        });
        m.route.set("/view-order");
        console.log("Order Packed");
    },
    updateStatus: function(code) {
        var updatedOrder = {
            id: order.show.data.id,
            name: order.show.data.name,
            address: order.show.data.address,
            zip: order.show.data.zip,
            city: order.show.data.city,
            country: order.show.data.country,
            status_id: code,
            api_key: config.api
        };

        return m.request({
            method: "PUT",
            url: "https://lager.emilfolino.se/v2/orders",
            data: updatedOrder
        }).then(function() {
            console.log("Order status updated");
        });
    }
};

export { order };
