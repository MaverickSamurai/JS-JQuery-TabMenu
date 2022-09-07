$(function () {

    let head = $(".tab-area .tab-main div");

    let contents = $(".tab-area .tab-body div");

    for (const header of head) {

        $(header).on("click", function () {
            let activeElem = $(".active");
    
            $(activeElem).removeClass("active");
    
            $(this).addClass("active");

            for (const content of contents) {
                if ($(this).attr("data-id") == $(content).attr("data-id")) {
                    $(content).removeClass("d-none");
                } else {
                    $(content).addClass("d-none");
                }
            }
        });
    }

});
