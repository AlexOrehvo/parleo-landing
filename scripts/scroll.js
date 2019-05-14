$(function () {
    $.scrollify({
        section: ".page",
        sectionName: "page-name",
        easing: "easeOutCubic",
        setHeights: true,
        overflowScroll: true,
        scrollSpeed: 600,
        scrollbars: false,
        before: function(i, panels) {
            var ref = panels[i].attr("data-page-name");
            $(".pages-dots .active").removeClass("active");
            $(".pages-dots").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function() {
            var pagination = '<ul class="pages-dots">';
            $(".page").each(function(i) {
                pagination += '<li><a class="' + (i === 0 ? "active " : "") + '" href="#' + $(this).attr("data-page-name") + '"><span class="hover-text">' + $(this).attr("data-page-name").charAt(0).toUpperCase() + $(this).attr("data-page-name").slice(1) + '</span></a></li>';
            });
            pagination += "</ul>";
            $(".container-fluid").append(pagination);
            $(".pages-dots a").on("click", $.scrollify.move);
        }
    });
});
