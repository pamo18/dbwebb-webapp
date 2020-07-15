"use strict";

import m from "mithril";
import { config } from "../config/config.js";

let access = {
    current: { data: [] },
    loggedin: { data: [] },
    load: function() {
        var currentUser = {
            api_key: config.api,
            email: access.current.email,
            password: access.current.pass
        };

        return m.request({
            method: "POST",
            url: "https://lager.emilfolino.se/v2/auth/login",
            data: currentUser
        }).then(function(result) {
            access.loggedin = result;
            access.token.value = access.loggedin.data.token;
            m.route.set("/invoice");
        }).catch(function() {
            m.route.set("/register");
        });
    },
    save: function() {
        var newUser = {
            api_key: config.api,
            email: access.current.email,
            password: access.current.pass
        };

        return m.request({
            method: "POST",
            url: "https://lager.emilfolino.se/v2/auth/register",
            data: newUser
        }).then(function(result) {
            console.log(result);
            access.load();
        });
    },
    token: {
        value: ""
    }
};

export { access };
