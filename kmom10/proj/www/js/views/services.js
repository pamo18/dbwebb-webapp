"use strict";

import m from 'mithril';
import { stations } from "../models/stations.js";

var services = {
    view: function (vnode) {
        var stationsServices = [];

        if (vnode.attrs.service) {
            vnode.attrs.service = [vnode.attrs.service];
        } else {
            vnode.attrs.service = [];
        }
        stations.current.data.map(function(row) {
            row.services.map(function(service) {
                var serviceName = service.name;

                serviceName = serviceName.replace(/[' ']/g, "");
                serviceName = serviceName.replace(/[/]/gi, '&');
                serviceName = serviceName.replace(/[,]/gi, '-');
                if (!stationsServices.includes(serviceName)) {
                    stationsServices.push(serviceName);
                }
                if (vnode.attrs.id) {
                    if (row.id == vnode.attrs.id) {
                        vnode.attrs.service.push(serviceName);
                    }
                }
            });
        });
        return  [
            m("nav#service-nav.options-nav", [
                m("a", {
                    href: `#!/stations-view`,
                    textContent: "Alla",
                    className: (function() {
                        var linkClass = null;

                        if (vnode.attrs.service.length === 0) {
                            linkClass = "active underline";
                        }
                        return linkClass;
                    })()
                }),
                stationsServices.map(function(row) {
                    return [
                        m("a", {
                            href: `#!/stations-view/${row}`,
                            textContent: row,
                            className: (function() {
                                var linkClass = null;

                                if (vnode.attrs) {
                                    if (vnode.attrs.service.includes(row)) {
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

export { services };
