"use strict";

import m from 'mithril';

let layout = {
    view: function(vnode) {
        return [
            m("header.site-header", [
                m("p.header-title", {textContent: "Infinity Warehouses"})
            ]),
            m("nav.bottom-nav", [
                m("a[href=/]", {
                    oncreate: m.route.link,
                    className: (m.route.get() === "/" ? "active" : null)
                }, [
                    m("i.material-icons", {textContent: "archive"}),
                    m("span.icon-text", "Deliveries")
                ]),
                m("a[href=/add-delivery]", {
                    oncreate: m.route.link,
                    className: (m.route.get() === "/add-delivery" ? "active" : null)
                }, [
                    m("i.material-icons", {textContent: "add_box"}),
                    m("span.icon-text", "New delivery")
                ]),
                m("a[href=/add-product]", {
                    oncreate: m.route.link,
                    className: (m.route.get() === "/add-product" ? "active" : null)
                }, [
                    m("i.material-icons", {textContent: "add_box"}),
                    m("span.icon-text", "New product")
                ])
            ]),
            m("main.container", vnode.children)
        ];
    }
};

export { layout };
