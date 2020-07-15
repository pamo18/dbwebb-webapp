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
    backButton: function(link) {
        var back = m("button.button.back", {
            href: link,
            oncreate: m.route.link
        }, [
            m("i.material-icons", "arrow_back")
        ]);

        return back;
    }
};

export { utils };
