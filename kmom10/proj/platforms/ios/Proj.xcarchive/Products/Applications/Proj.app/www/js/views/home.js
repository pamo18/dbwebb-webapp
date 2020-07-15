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
        return timeOfDayGreeting + ", Welcome to the Police app.";
    })(),
    view: function() {
        return [
            m(`div.${home.container}`, [
                m("h2.title", home.titleText),
                m("p.center", home.greeting),
                m("div.loginreg", [
                    m("button.button.login",
                        {
                            href: "/login",
                            oncreate: m.route.link,
                            ontouchstart: function() {
                                this.classList.add("touch-button");
                            },
                            ontouchend: function() {
                                this.classList.remove("touch-button");
                            }
                        },
                        "Login"
                    ),
                    m("button.button.login",
                        {
                            href: "/register",
                            oncreate: m.route.link,
                            ontouchstart: function() {
                                this.classList.add("touch-button");
                            },
                            ontouchend: function() {
                                this.classList.remove("touch-button");
                            }
                        },
                        "Register"
                    )
                ]),
                m("div.home", [
                    m("img[src=img/event1.jpg]", {
                        alt: "police" })
                ]),
                m("h4.center", "This app will keep you up to date " +
                    "with recent police activity in Sweden.")
            ]),
        ];
    }
};

export { home };
