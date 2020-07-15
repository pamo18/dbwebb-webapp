"use strict";
import m from 'mithril';
import { delivery } from "../models/delivery.js";
import { product } from "../models/product.js";
import { utils } from "../models/utils.js";

let addDelivery = {
    oninit: function() {
        product.load();
    },
    view: function() {
        return [
            m("div.add-delivery-container", [
                m("h1", "Add new delivery"),
                m("form.add-delivery", {
                    onsubmit: function(event) {
                        event.preventDefault();
                        delivery.save();
                    }
                }, [
                    m("button.button.add-product[href=/add-product]", {
                        oncreate: m.route.link,
                        ontouchstart: function() {
                            this.classList.add("touch-button");
                        },
                        ontouchend: function() {
                            this.classList.remove("touch-button");
                        }
                    }, "New product"),
                    m("label.input-label", "Product ID"),
                    m("select.input", {
                        onchange: function (e) {
                            delivery.current.product_id = e.target.value;
                        },
                        value: delivery.current.product_id
                    }, [
                        m("option[hidden]", "Please select below"),
                        product.current.data.map(function(row) {
                            return m(`option[value=${row.id}]`, `${row.id}: ${row.name}`);
                        })
                    ]),
                    m("label.input-label", "Amount"),
                    m("input.input[type=number][required][placeholder=amount]", {
                        oninput: function (e) {
                            delivery.current.amount = e.target.value;
                        }
                    }),
                    m("label.input-label", "Date"),
                    m("input.input[type=date][placeholder=yyyy-mm-dd]", {
                        oncreate: function () {
                            delivery.current.delivery_date = utils.getToday();
                        },
                        oninput: function (e) {
                            delivery.current.delivery_date = e.target.value;
                        },
                        value: delivery.current.delivery_date
                    }),
                    m("label.input-label", "Comment"),
                    m("textarea.input.text-input[placeholder=optional]", {
                        oncreate: function () {
                            delivery.current.comment = "New delivery";
                        },
                        oninput: function (e) {
                            delivery.current.comment = e.target.value;
                        },
                        value: delivery.current.comment
                    }),
                    m("input[type=submit][value=Save].button.add", {
                        ontouchstart: function() {
                            this.classList.add("touch-button");
                        },
                        ontouchend: function() {
                            this.classList.remove("touch-button");
                        }
                    }, "Save")
                ])
            ])
        ];
    }
};

export { addDelivery };
