$(function () {
    var c = 0;
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 0 && c === 0) {
            $("#logo > img").animate({ height: "2.7rem" }, 200);
            c++;
        }
        else if (document.documentElement.scrollTop === 0) {
            $("#logo > img").animate({ height: "6rem" }, 200);
            c = 0;
        }
    };

    $(".collapsible").on("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });

    $(".content > a").on("click", function () {
        switch ($(this).index() + 1) {
            case 1:
                sessionStorage.setItem("slideNum", 0);
                break;

            case 2:
                sessionStorage.setItem("slideNum", 9);
                break;

            case 3:
                sessionStorage.setItem("slideNum", 26);
                break;

            default:
                break;
        }
    });
});