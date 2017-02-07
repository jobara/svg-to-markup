var svg2m = svg2m || {};

(function (svg2m) {

    svg2m.getURLFromIMG = function (imgElm) {
        return $(imgElm).attr("src");
    };

    svg2m.convertSVG = function (imgElm) {
        $.get({
            url: svg2m.getURLFromIMG(imgElm),
            dataType: "html"
        })
        .done(function (markup) {
            $(imgElm).replaceWith(markup);
        })
        .fail(function (error) {
            console.log(error);
        });
    };

    svg2m.convertSVGs = function (imgElms) {
        $(imgElms).each(function (idx, elm) {
            svg2m.convertSVG(elm);
        });
    };
})(svg2m);
