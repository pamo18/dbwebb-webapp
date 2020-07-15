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
    getDate: function(days) {
        var d = new Date();

        d.setDate(d.getDate() + days);
        var year = d.getFullYear();
        var mth =  (d.getMonth() < 10 ? "0" + (d.getMonth() + 1): (d.getMonth() + 1));
        var day =  (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());

        return year + "-" + mth + "-" + day;
    },
    backButton: function(current) {
        var backLinks = [];

        backLinks["/view-product"] = "/view-stock";
        backLinks["/view-picklist"] = "/view-order";
        backLinks["/create-invoice"] = "/invoice";
        backLinks["/view-invoice"] = "/invoice";
        backLinks["/view-order-details"] = "/view-packed";

        if (backLinks[current]) {
            var back = m("button.button.back", {
                href: backLinks[current],
                oncreate: m.route.link,
                ontouchstart: function() {
                    this.classList.add("touch-button");
                },
                ontouchend: function() {
                    this.classList.remove("touch-button");
                }
            }, [
                m("i.material-icons", "arrow_back")
            ]);

            return back;
        }
    }
};

export { utils };
