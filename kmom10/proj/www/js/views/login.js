"use strict";
import m from 'mithril';
import { access } from "../models/access.js";

let loginUser = {
    titleText: "Login",
    container: "login-container",
    view: function() {
        if (access.token.value) {
            return [
                m(`div.${loginUser.container}`, [
                    m("h1.center", "Logged in!")
                ])];
        } else {
            return [
                m(`div.${loginUser.container}`, [
                    m("h1", loginUser.titleText),
                    m("form.login", {
                        onsubmit: function(event) {
                            access.load(),
                            event.preventDefault();
                        }
                    }, [
                        m("label.input-label", "Email"),
                        m("input.input[type=email][required][placeholder=me@email.se]", {
                            oninput: function (e) {
                                access.current.email = e.target.value;
                            },
                            value: access.current.email
                        }),
                        m("label.input-label", "Password"),
                        m("input.input[type=password][required][placeholder=password]", {
                            oninput: function (e) {
                                access.current.pass = e.target.value;
                            },
                            value: access.current.pass
                        }),
                        m("input[type=submit][value=Login].button.add", {
                            ontouchstart: function() {
                                this.classList.add("touch-button");
                            },
                            ontouchend: function() {
                                this.classList.remove("touch-button");
                            }
                        }, "Login")
                    ])
                ])
            ];
        }
    }
};

export { loginUser };
