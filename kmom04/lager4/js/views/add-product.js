"use strict";
import m from 'mithril';
import { product } from "../models/product.js";

let addProduct = {
    oninit: function() {
        product.load();
    },
    view: function() {
        return [
            m("h1", "Add new product"),
            m("div.add-product-container", [
                m("form.add-product", {
                    onsubmit: function(event) {
                        event.preventDefault();
                        product.save();
                    }
                }, [
                    m("label.input-label", "Article number"),
                    m("input.input[type=text][required][placeholder=article number]", {
                        oninput: function (e) {
                            product.current.article_number = e.target.value;
                        },
                        value: product.current.article_number
                    }),
                    m("label.input-label", "Name"),
                    m("input.input[type=text][required][placeholder=name]", {
                        oninput: function (e) {
                            product.current.name = e.target.value;
                        },
                        value: product.current.name
                    }),
                    m("label.input-label", "Description"),
                    m("textarea.input.text-input[required][placeholder=desciption]", {
                        oninput: function (e) {
                            product.current.description = e.target.value;
                        },
                        value: product.current.description
                    }),
                    m("label.input-label", "Specifiers"),
                    m("input.input[type=text][required][placeholder=specifiers]", {
                        oninput: function (e) {
                            product.current.specifiers = e.target.value;
                        },
                        value: product.current.specifiers
                    }),
                    m("label.input-label", "Stock"),
                    m("input.input[type=number][required][placeholder=stock]", {
                        oninput: function (e) {
                            product.current.stock = e.target.value;
                        },
                        value: product.current.stock
                    }),
                    m("label.input-label", "Location"),
                    m("input.input[type=text][required][placeholder=location]", {
                        oninput: function (e) {
                            product.current.location = e.target.value;
                        },
                        value: product.current.location
                    }),
                    m("label.input-label", "Price"),
                    m("input.input[type=number][required][placeholder=price]", {
                        oninput: function (e) {
                            product.current.price = e.target.value;
                        },
                        value: product.current.price
                    }),
                    m("input[type=submit][value=Save].button.add", "Save")
                ])
            ])
        ];
    }
};

export { addProduct };
