/*eslint max-len: ["error", { "code": 140 }]*/
"use strict";
import m from 'mithril';
import { events } from "../models/events.js";
import { regions } from "../models/regions.js";
import { map } from "../models/map.js";
import position from "../models/position.js";

let eventDetails = {
    foundCode: null,
    foundPopulation: null,
    oninit: function(vnode) {
        position.getPosition();
        events.nearbyStation(vnode.attrs.id);
    },
    oncreate: function() {
        map.showMap();
        map.showEvent(events.show, true);
        if (events.nearby) {
            map.showStation(events.nearby);
        }
        var foundRegion = regions.current.data.find(function(region) {
            return region.kommun == events.show.location.name;
        });

        if (foundRegion) {
            eventDetails.foundCode =  m("p.region-stats", "Code: " + foundRegion.kommunkod);
            eventDetails.foundPopulation = m(
                "p.region-stats", "Population: " + foundRegion['folkmängd 31 december 2018']
            );
        }
    },
    container: "product-container.content.page",
    view: function() {
        console.log(events.show);
        if (events.show.length === 0) {
            return m.route.set(`/`);
        }
        map.showPosition();
        return [
            m(`div.${eventDetails.container}.slide-in`, [
                m("h1", events.show.name),
                m("div#map.map", ""),
                m("div.details", [
                    m("h4", "Nearby Police Stations"),
                    m("div.nearby-station", [
                        events.show.station.map(function (nearby) {
                            return [
                                m("p", [
                                    m("button.button", {
                                        href: `/station-details?id=${nearby.id}&event=${events.show.id}`,
                                        oncreate: m.route.link,
                                        ontouchstart: function() {
                                            this.classList.add("touch-row");
                                        },
                                        ontouchend: function() {
                                            this.classList.remove("touch-row");
                                        }
                                    }, nearby.name)
                                ])
                            ];
                        })
                    ]),
                    m("h4", {
                        textContent: `${events.show.type} i ${events.show.location.name}`
                    }),
                    eventDetails.foundCode,
                    eventDetails.foundPopulation,
                    m("h4", "Summary"),
                    m("p", events.show.summary),
                    m("h4", "Time"),
                    m("p", events.show.datetime),
                    m("h4", "Link"),
                    m("a", {
                        href: events.show.url
                    }, "Polis händelse")
                ])
            ])
        ];
    }
};

export { eventDetails };
