/* global cordova */
"use strict";
var m = require("mithril");

import PullToRefresh from 'pulltorefreshjs';
import { connection } from "./models/connection.js";
import { access } from "./models/access.js";
import { layout } from './views/layout';
import { home } from './views/home';
import { eventsView} from './views/events-view';
import { stationsView } from './views/stations-view';
import { regionsView } from './views/regions-view';
import { eventDetails } from './views/event-details';
import { stationDetails } from './views/station-details';
import { registerUser } from './views/register';
import { loginUser } from './views/login';

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        console.log("Ready to take off");
        console.log(cordova.file);
        console.log(connection.check());
        access.session();

        PullToRefresh.init({
            mainElement: 'body',
            instructionsPullToRefresh: 'Pull down to refresh the page',
            instructionsReleaseToRefresh: 'Release to refresh the page',
            instructionsRefreshing: 'Refreshing the page',
            onRefresh() {
                window.location.reload();
                m.route.set("/events-view");
            }
        });

        m.route(document.body, "/", {
            "/": {
                render: function() {
                    return m(layout, m(home));
                }
            },
            "/register": {
                render: function() {
                    return m(layout, m(registerUser));
                }
            },
            "/login": {
                render: function() {
                    return m(layout, m(loginUser));
                }
            },
            "/events-view": {
                render: function(vnode) {
                    return m(layout, vnode.attrs, m(eventsView));
                }
            },
            "/events-view/:type": {
                render: function(vnode) {
                    return m(layout, vnode.attrs, m(eventsView, vnode.attrs));
                }
            },
            "/event-details/:id": {
                render: function(vnode) {
                    return m(layout, vnode.attrs, m(eventDetails, vnode.attrs));
                }
            },
            "/stations-view": {
                render: function(vnode) {
                    if (access.token.value) {
                        return m(layout, vnode.attrs, m(stationsView));
                    } else {
                        return m.route.set("/login");
                    }
                }
            },
            "/stations-view/:service": {
                render: function(vnode) {
                    if (access.token.value) {
                        return m(layout, vnode.attrs, m(stationsView, vnode.attrs));
                    } else {
                        return m.route.set("/login");
                    }
                }
            },
            "/station-details": {
                render: function(vnode) {
                    if (access.token.value) {
                        return m(layout, vnode.attrs, m(stationDetails, vnode.attrs));
                    } else {
                        return m.route.set("/login");
                    }
                }
            },
            "/station-details/:id": {
                render: function(vnode) {
                    if (access.token.value) {
                        return m(layout, vnode.attrs, m(stationDetails, vnode.attrs));
                    } else {
                        return m.route.set("/login");
                    }
                }
            },
            "/regions-view": {
                render: function() {
                    if (access.token.value) {
                        return m(layout, m(regionsView));
                    } else {
                        return m.route.set("/login");
                    }
                }
            },
        });
    }
};

app.initialize();
