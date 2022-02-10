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
        switch ($(".content > a").index(this) + 1) {
            case 1:
                sessionStorage.setItem("slideNum", 0);
                break;
            case 2:
                sessionStorage.setItem("slideNum", 9);
                break;
            case 3:
                sessionStorage.setItem("slideNum", 25);
                break;
            case 4:
                sessionStorage.setItem("slideNum", 0);
                break;
            case 5:
                sessionStorage.setItem("slideNum", 1);
                break;
            case 6:
                sessionStorage.setItem("slideNum", 3);
                break;
            case 7:
                sessionStorage.setItem("slideNum", 5);
                break;
            case 8:
                sessionStorage.setItem("slideNum", 7);
                break;
            case 9:
                sessionStorage.setItem("slideNum", 9);
                break;
            case 10:
                sessionStorage.setItem("slideNum", 11);
                break;
            case 11:
                sessionStorage.setItem("slideNum", 13);
                break;
            case 12:
                sessionStorage.setItem("slideNum", 15);
                break;
            default:
                break;
        }
    });
});
