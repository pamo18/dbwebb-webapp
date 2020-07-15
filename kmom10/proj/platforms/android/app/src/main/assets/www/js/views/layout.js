/*eslint max-len: ["error", { "code": 140 }]*/
"use strict";
import { access } from "../models/access.js";

import m from 'mithril';
import { events } from "../models/events.js";
import { stations } from "../models/stations.js";
import { regions } from "../models/regions.js";
import { categories } from '../views/categories';
import { services } from '../views/services';
import { utils } from "../models/utils.js";

var layout = {
    oninit: function() {
        regions.load();
        events.load();
        stations.load();
    },
    view: function (vnode) {
        var title = "";
        var containerClass = ".container";
        var navElements = [
            {name: "Home", class: "home", nav: ["/", "/login", "/register"]},
            {name: "Events", class: "description", nav: ["/events-view", "/event-details"]}
        ];

        if (access.token.value) {
            navElements.push(
                {name: "Stations", class: "local_taxi", nav: ["/stations-view", "/station-details"]},
                {name: "Regions", class: "assessment", nav: ["/regions-view"]}
            );
        }

        var splitLink = "/" + m.route.get().split("/")[1];

        splitLink = splitLink.split("?")[0];

        function isActive(element) {
            var activeClass;

            if (element.nav.includes(splitLink)) {
                activeClass = "active";
                title = "Police | " + element.name;
            } else {
                activeClass = null;
            }
            return activeClass;
        }

        function hasScrollBar() {
            var scrollBarType;
            var eventsPage = navElements.filter(element => element.name == "Events");
            var stationsPage = navElements.filter(element => element.name == "Stations");

            eventsPage = (eventsPage.length > 0 ? eventsPage[0].nav.includes(splitLink) : null);
            stationsPage = (stationsPage.length > 0 ? stationsPage[0].nav.includes(splitLink) : null);

            if (eventsPage) {
                scrollBarType = m(categories, vnode.attrs);
                containerClass += ".has-scroll-bar";
            } else if (stationsPage) {
                scrollBarType = m(services, vnode.attrs);
                containerClass += ".has-scroll-bar";
            } else {
                scrollBarType = null;
            }
            return scrollBarType;
        }

        function makeNavbar() {
            var n = [];

            navElements.forEach(function (element) {
                if (element) {
                    n.push(
                        m(`a[href=${element.nav[0]}]`, {
                            oncreate: m.route.link,
                            className: isActive(element)
                        },
                        [
                            m("i.material-icons", {textContent: element.class}),
                            m("span.icon-text", element.name)
                        ]));
                }
            });

            return n;
        }

        var navbar = makeNavbar();
        var scrollBar = hasScrollBar();
        var backButton = utils.backButton(splitLink, vnode);

        return  [
            m("div.header", [
                m("header.site-header", {id: "site-header"}, [
                    m("h1.header-title", {textContent: title}),
                    backButton
                ]),
                m("nav.bottom-nav", navbar),
                scrollBar
            ]),
            m(`main${containerClass}`, vnode.children)
        ];
    }
};

export { layout };
