"use strict";

import m from "mithril";

let utils = {
    getToday: function() {
        var d = new Date();
        var year = d.getFullYear();
        var mth =  (d.getMonth() < 10 ? "0" + (d.getMonth() + 1): (d.getMonth() + 1));
        var day =  (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());

        return year + "-" + mth + "-" + day;
    },
    getDate: function(date) {
        date = date.split(" ", 2);
        var d = new Date(date[0]);

        var year = d.getFullYear();
        var mth =  (d.getMonth() < 10 ? "0" + (d.getMonth() + 1): (d.getMonth() + 1));
        var day =  (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());

        return year + "-" + mth + "-" + day;
    },
    getTime: function(date) {
        date = date.split(" ", 2);

        var theDate = date[0];
        var year = theDate.split("-", 1);
        var mth = theDate.split("-", 2)[1];
        var day = theDate.split("-", 3)[2];

        var time = date[1];
        var h = time.split(":", 1);
        var m = time.split(":", 2)[1];
        var s = time.split(":", 3)[2];
        var d = new Date(year, mth, day, h, m, s);

        var hour = (d.getHours() < 10 ? "0" + d.getHours(): d.getHours());
        var minute = (d.getMinutes() < 10 ? "0" + d.getMinutes(): d.getMinutes());
        var second = (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds());

        return hour + ":" + minute + ":" + second;
    },
    getTimeDif: function (date) {
        date = date.split(" ", 2);

        var theDate = date[0];
        var year = theDate.split("-", 1);
        var mth = theDate.split("-", 2)[1] - 1;
        var day = theDate.split("-", 3)[2];

        var time = date[1];
        var h = time.split(":", 1);
        var m = time.split(":", 2)[1];
        var s = time.split(":", 3)[2];
        var dt1 = new Date(year, mth, day, h, m, s);

        var dt2 = new Date();
        var diff =(dt2.getTime() - dt1.getTime()) / 1000;

        diff /= 60;
        var result = Math.abs(Math.round(diff));

        if (result >= 60) {
            result = Math.round(result / 60) + "h";
        } else {
            result = result + "m";
        }
        return result;
    },
    getFutureDate: function(days) {
        var d = new Date();

        d.setDate(d.getDate() + days);
        var year = d.getFullYear();
        var mth =  (d.getMonth() < 10 ? "0" + (d.getMonth() + 1): (d.getMonth() + 1));
        var day =  (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());

        return year + "-" + mth + "-" + day;
    },
    backButton: function(current, vnode) {
        var link;
        var backLinks = [];

        backLinks["/event-details"] = "/events-view";
        backLinks["/station-details"] = "/stations-view";

        if (vnode && vnode.attrs.event) {
            link = `/event-details/${vnode.attrs.event}`;
        } else if (backLinks[current]) {
            link = backLinks[current];
        }

        if (link) {
            var back = m("button.button.back", {
                href: link,
                oncreate: m.route.link,
                ontouchstart: function() {
                    this.classList.add("touch-button");
                },
                ontouchend: function() {
                    this.classList.remove("touch-button");
                }
            }, [
                m("i.material-icons back-icon", "chevron_left")
            ]);

            return back;
        }
    }
};

export { utils };
