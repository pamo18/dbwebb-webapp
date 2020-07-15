"use strict";
import m from 'mithril';
import { regions } from "../models/regions.js";

let regionsView = {
    container: "regions-container.content",
    view: function() {
        if (regions.current.data.length === 0) {
            return [
                m("h2", "Loading...  It can take up to 10 seconds to complete first time.")
            ];
        } else {
            return [
                m(`div.${regionsView.container}`, [
                    m("table.tabel-results", [
                        m("thead", [
                            m("tr", [
                                m("th", "Region"),
                                m("th", "Code"),
                                m("th", "Population (Dec 2018)")
                            ])
                        ]),
                        regions.current.data.map(function(row) {
                            return [
                                m("tr", [
                                    m("td[data-title = Region]", row.kommun),
                                    m("td[data-title = Code]", row.kommunkod),
                                    m("td[data-title = Population (Dec 2018)]",
                                        row['folkmängd 31 december 2018']
                                    )
                                ])
                            ];
                        })
                    ])
                ])
            ];
        }
    }
};

export { regionsView };
