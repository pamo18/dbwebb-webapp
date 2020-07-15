"use strict";
import m from 'mithril';
import { stations } from "../models/stations.js";
import { map } from "../models/map.js";
import position from "../models/position.js";

let stationDetails = {
    oninit: function(vnode) {
        stations.load();
        stations.show = stations.current.data.find(station => station.id == vnode.attrs.id);
    },
    oncreate: function() {
        position.getPosition();
        map.showMap();
        map.showStation([stations.show], true);
    },
    container: "product-container.content.page",
    view: function() {
        if (stations.show.length === 0) {
            return m.route.set(`/`);
        }
        map.showPosition();
        return [
            m(`div.${stationDetails.container}.slide-in`, [
                m("h1", stations.show.name + " Police Station"),
                m("div#map.map", ""),
                m("div.details", [
                    m("h4", "Location"),
                    m("p", stations.show.location.name),
                    m("h4", "Link"),
                    m("a", {
                        href: stations.show.Url
                    }, `${stations.show.name} Polis Station`),
                    m("h4", "Available Services:"),
                    m("ul", [
                        stations.show.services.map(function(row) {
                            return [
                                m("li", row.name)
                            ];
                        })
                    ])
                ])
            ])
        ];
    }
};

export { stationDetails };
