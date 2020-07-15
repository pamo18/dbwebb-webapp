/*eslint max-len: ["error", { "code": 140 }]*/
"use strict";
import m from 'mithril';
import { events } from "../models/events.js";
import { utils } from "../models/utils.js";

let eventsView = {
    container: "events-container.content",
    view: function(vnode) {
        var count = 1;

        function getImage() {
            if (count > 5) {
                count = 1;
            }
            var image = `img/event${count}.jpg`;

            count += 1;
            return image;
        }
        if (events.current.data.length === 0) {
            return [
                m("h2", "Loading...  It can take up to 10 seconds to complete first time.")
            ];
        } else {
            return [
                m(`div.${eventsView.container}`, [
                    m("div.results", [
                        events.current.data.map(function(row) {
                            row.type = row.type.replace(/[' ']/g, "");
                            row.type = row.type.replace(/[/]/gi, '&');
                            row.type = row.type.replace(/[,]/gi, '-');
                            if (vnode.attrs.type) {
                                if (row.type != vnode.attrs.type) {
                                    return;
                                }
                            }
                            return [
                                m("div#result.result.pointer", {
                                    href: `/event-details/${row.id}`,
                                    oncreate: m.route.link,
                                    ontouchstart: function() {
                                        this.classList.add("touch-row");
                                    },
                                    ontouchend: function() {
                                        this.classList.remove("touch-row");
                                    },
                                }, [
                                    m("div.event-frame-img", [
                                        m("img", {
                                            src: getImage()
                                        }),
                                    ]),
                                    m("div.event-frame-txt", [
                                        m("p.summary", {
                                            textContent: (function() {
                                                var summary;

                                                if (window.matchMedia("(min-width: 800px)").matches) {
                                                    summary = row.summary;
                                                } else {
                                                    if (row.summary.length < 75) {
                                                        summary = row.summary;
                                                    } else {
                                                        summary = row.summary.substring(0, 75) + "...";
                                                    }
                                                }
                                                return summary;
                                            })()
                                        }),
                                        // eslint-disable-next-line
                                        m("p.time-cat", utils.getTimeDif(row.datetime) + " | " +  row.location.name + " | ",
                                            m("a.category", {
                                                href: `#!/events-view/${row.type}`,
                                                onclick: (function(e) {
                                                    e.stopPropagation();
                                                })
                                            }, row.type)
                                        )
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

export { eventsView };
