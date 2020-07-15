"use strict";
import m from 'mithril';
import { stations } from "../models/stations.js";

let stationsView = {
    container: "stations-container.content",
    view: function(vnode) {
        var count = 1;
        var services = 0;

        function getImage() {
            if (count > 5) {
                count = 1;
            }
            var image = `img/station${count}.jpg`;

            count += 1;
            return image;
        }
        if (stations.current.data.length === 0) {
            return [
                m("h2", "Loading...  It can take up to 10 seconds to complete first time.")
            ];
        } else {
            return [
                m(`div.${stationsView.container}`, [
                    m("div.results", [
                        stations.current.data.map(function(row) {
                            if (vnode.attrs.service) {
                                var stationHasServices = row.services.filter(function(service) {
                                    var name = service.name;

                                    name = name.replace(/[' ']/g, "");
                                    name = name.replace(/[/]/gi, '&');
                                    name = name.replace(/[,]/gi, '-');

                                    return (name == vnode.attrs.service);
                                });

                                if (stationHasServices.length === 0) {
                                    return;
                                }
                            }
                            return [
                                m("div#result.result.pointer", {
                                    href: "/station-details/" + row.id,
                                    oncreate: m.route.link,
                                    ontouchstart: function() {
                                        this.classList.add("touch-row");
                                    },
                                    ontouchend: function() {
                                        this.classList.remove("touch-row");
                                    }
                                }, [
                                    m("div.event-frame-img", [
                                        m("img", {
                                            src: getImage()
                                        }),
                                    ]),
                                    m("div.event-frame-txt", [
                                        m("p.station-heading", {
                                            textContent: row.name + " Police station"
                                        }),
                                        m("p.service-list-heading", "Available Services:"),
                                        m("p.service-list", row.services.map(function(service) {
                                            var name = service.name;

                                            name = name.replace(/[' ']/g, "");
                                            name = name.replace(/[/]/gi, '&');
                                            name = name.replace(/[,]/gi, '-');
                                            return [
                                                m("a.service", {
                                                    href: `#!/stations-view/${name}`,
                                                    onclick: (function(e) {
                                                        e.stopPropagation();
                                                    }),
                                                    textContent: (function() {
                                                        services += 1;
                                                        if (row.services.length == services) {
                                                            services = 0;
                                                            return service.name;
                                                        } else {
                                                            return service.name + " | ";
                                                        }
                                                    })()
                                                })
                                            ];
                                        })),
                                    ])
                                ])
                            ];
                        })
                    ])
                ])
            ];
        }
    }
};

export { stationsView };
