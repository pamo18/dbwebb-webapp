"use strict";
import m from 'mithril';
import { access } from "../models/access.js";

let registerUser = {
    titleText: "Register",
    container: "register-container",
    view: function() {
        return [
            m("h1", registerUser.titleText),
            m(`div.${registerUser.container}`, [
                m("form.login", {
                    onsubmit: function(event) {
                        access.save(),
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
                    m("input[type=submit][value=Register].button.add", "Register")
                ])
            ])
        ];
    }
};

export { registerUser };
