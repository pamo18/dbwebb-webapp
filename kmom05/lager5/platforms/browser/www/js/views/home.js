"use strict";
import m from 'mithril';

let home = {
    titleText: "Welcome!",
    container: "home-container",
    greeting: (function() {
        var timeOfDayGreeting = "Hello";
        var now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Good morning";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "Good evening";
        }
        return timeOfDayGreeting + ", welcome to the Infinity Warehouses app.";
    })(),
    view: function() {
        return [
            m(`div.${home.container}`, [
                m("h1.title", home.titleText),
                m("p.center", home.greeting),
                m("div.loginreg", [
                    m("button.button.login",
                        {
                            href: "/login",
                            oncreate: m.route.link
                        },
                        "Login"
                    ),
                    m("button.button.login",
                        {
                            href: "/register",
                            oncreate: m.route.link
                        },
                        "Register"
                    )
                ]),
                m("div.warehouse", [
                    m("img[src=img/warehouse.jpg]", {
                        alt: "warehouse" })
                ]),
                m("p.center", "Please use this app to keep our warehouse" +
                    "stock up to date and correct.")
            ]),
        ];
    }
};

export { home };
