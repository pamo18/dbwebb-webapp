"use strict";

import m from "mithril";
import { config } from "../config/config.js";
import { access } from "../models/access.js";
import { order } from "../models/order.js";
import { utils } from "../models/utils.js";

let invoice = {
    current: { data: [] },
    show: [],
    load: function() {
        return m.request({
            method: "GET",
            url: `https://lager.emilfolino.se/v2/invoices?api_key=${config.api}`,
            headers: {
                "x-access-token": access.token.value
            }
        }).then(function(result) {
            invoice.current = result;
            console.log(result);
        });
    },
    save: async function() {
        var total = 0;

        await order.loadPicklist(invoice.current.order_id);

        order.picklist.forEach(function(row) {
            total += parseInt(row.amount) * parseInt(row.price);
        });
        var newInvoice = {
            api_key: config.api,
            order_id: invoice.current.order_id,
            total_price: total,
            creation_date: utils.getToday(),
            due_date: utils.getDate(30)
        };

        return m.request({
            method: "POST",
            url: "https://lager.emilfolino.se/v2/invoices",
            headers: {
                "x-access-token": access.token.value
            },
            data: newInvoice
        }).then(function() {
            order.updateStatus(600);
            m.route.set("/invoice");
        });
    },
    loadDetails: async function(id) {
        return m.request({
            method: "GET",
            url: `https://lager.emilfolino.se/v2/invoices/${id}?api_key=${config.api}`,
            headers: {
                "x-access-token": access.token.value
            }
        }).then(function(result) {
            invoice.show = result.data;
            console.log(result);
        });
    },
};

export { invoice };
