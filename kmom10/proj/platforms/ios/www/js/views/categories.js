"use strict";

import m from 'mithril';
import { events } from "../models/events.js";

var categories = {
    view: function (vnode) {
        var cat = [];

        events.current.data.map(function(row) {
            var categoryType = row.type;

            categoryType = categoryType.replace(/[' ']/g, "");
            categoryType = categoryType.replace(/[/]/gi, '&');
            categoryType = categoryType.replace(/[,]/gi, '-');
            if (!cat.includes(categoryType)) {
                cat.push(categoryType);
            }
            if (vnode.attrs) {
                if (vnode.attrs.id == row.id) {
                    vnode.attrs.type = categoryType;
                }
            }
        });
        return  [
            m("nav#category-nav.options-nav", [
                m("a", {
                    href: `#!/events-view`,
                    textContent: "Alla",
                    className: (function() {
                        var linkClass = null;

                        if (!vnode.attrs.type) {
                            linkClass = "active underline";
                        }
                        return linkClass;
                    })()
                }),
                cat.map(function(row) {
                    return [
                        m("a", {
                            href: `#!/events-view/${row}`,
                            textContent: row,
                            className: (function() {
                                var linkClass = null;

                                if (vnode.attrs) {
                                    if (vnode.attrs.type == row) {
                                        linkClass = "active underline";
                                    }
                                }
                                return linkClass;
                            })()
                        })
                    ];
                })
            ])
        ];
    }
};

export { categories };
