"use strict";
import m from 'mithril';
import { product } from "../models/product.js";
import camera from "../models/camera.js";

let productView = {
    oninit: function(vnode) {
        product.loadDetails(vnode.attrs.id);
    },
    container: "product-container",
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
        camera.currentId = product.show.id;
        return [
            m(`div.${productView.container}.slide-in`, [
                m("h1", "Details for " + product.show.name),
                m("div.product-details", [
                    m("p", "ID: " + product.show.id),
                    m("p", "Article number: " + product.show.article_number),
                    m("p", "Name: " + product.show.name),
                    m("p", "Description: " + product.show.description),
                    m("p", "Specifiers: " + product.show.specifiers),
                    m("p", "Stock: " + product.show.stock),
                    m("p", "Location: " + product.show.location),
                    m("p.price", "Price: " + product.show.price)
                ]),
                m("div.camera.pointer", [
                    m("i.material-icons", {
                        onclick: camera.getPicture
                    }, "photo_camera"),
                ]),
                m("div.image-frame", [
                    m("img#myImage.myImage", {
                        src: camera.showPicture()
                    })
                ])
            ])
        ];
    }
};

export { productView };
