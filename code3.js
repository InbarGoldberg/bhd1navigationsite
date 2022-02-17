var nSubChapter = 0;
var nSlide = 0;
var content;

$(function () {
    $("#slide9").hide();
    $("#logo").on("click", function () {
        sessionStorage.removeItem("slideNum");
    });
    nSlide = Number(sessionStorage.getItem("slideNum"));
    if (nSlide !== 0) {
        $("#slide0").hide();

        $(".mov-btns").css({ position: "fixed", bottom: "0", width: "100vw", fontSize: "1.5rem", justifyContent: "space-between" });
        $("#slide" + nSlide).show();
        eval("showSlide" + nSlide + "()");
    }

    else {
        showSlide0();
    }

    $("#menu-btn").on("click", function () {
        this.classList.toggle("active");
        content = this.nextElementSibling;
        if (content.style.maxHeight) {
            $("#menu-close").hide();
            content.style.maxHeight = null;
        }
        else {
            $("#menu-close").show();
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
    $("#menu-close").on("click", function () {
        $("#menu-close").hide();
        content.style.maxHeight = null;
    });

    $(".menu-chapter-sub-ttl, .menu-chapter-ttl").on("click", function () {
        $("#menu-close").hide();
        $("#prv-btn" + nSlide).off();
        $("#nxt-btn" + nSlide).off();
        $("#slide" + nSlide).hide();

        $("#menu-btn").removeClass("active");
        content.style.maxHeight = null;

        nSlide = $(this).attr("id");
        sessionStorage.setItem("slideNum", nSlide);

        $(".mov-btns").css({ position: "fixed", bottom: "0", width: "100vw", fontSize: "1.5rem", justifyContent: "space-between" });
        $("#slide" + nSlide).show();
        eval("showSlide" + nSlide + "()");
    });
});


// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////


function nxtSlide() {
    $("#prv-btn" + nSlide).off();
    $("#nxt-btn" + nSlide).off();
    $("#slide" + nSlide).hide();
    nSlide++;
    $("#slide" + nSlide).show();
    sessionStorage.setItem("slideNum", nSlide);
    eval("showSlide" + nSlide + "()");
}

function prvSlide() {
    $("#prv-btn" + nSlide).off();
    $("#nxt-btn" + nSlide).off();
    $("#slide" + nSlide).hide();
    nSlide--;
    $("#slide" + nSlide).show();
    sessionStorage.setItem("slideNum", nSlide);
    eval("showSlide" + nSlide + "()");
}


// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////


function showSlide0() {
    $("#chapter-ttl").text("מבוא");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(0)").addClass("menu-active");
    $(".mov-btns").css({ position: "static", width: "auto", fontSize: "1.2rem", justifyContent: "flex-end" });
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide1() {
    $("#chapter-ttl").text("קו רכס");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(1)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $(".mov-btns").css({ position: "fixed", bottom: "0", width: "100vw", fontSize: "1.5rem", justifyContent: "space-between" });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide2() {
    $("#chapter-ttl").text("קו אפיק");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(2)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide3() {
    $("#chapter-ttl").text("אגן");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(3)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide4() {
    $("#chapter-ttl").text("ראש האגן");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(4)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide5() {
    $("#chapter-ttl").text("מוצא האגן");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(5)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide6() {
    $("#chapter-ttl").text("קודקוד אגנים");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(6)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

var nLastTd7 = 0;
function showSlide7() {
    $("#chapter-ttl").text("שלבי ניתוח");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(7)").addClass("menu-active");

    if (nLastTd7 === 0) {
        $("#second-table7 > tbody > tr > td:first-of-type").delay(850).animate({ backgroundColor: "rgba(255, 255, 255, 0.4)", fontSize: "1.2rem" }, 400);
        $("#second-p" + nSlide).delay(850).show("fade", 400);
        setTimeout(function () {
            $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
            $("#content-img" + nSlide).delay(250).show("fade", 400);
        }, 850);
        $("#second-table7 > tbody > tr > td").on("click", showTerms7);
    }
    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

function showTerms7() {
    if (nLastTd7 === 0) {
        nLastTd7 = 1;
    }
    $("#second-table7 > tbody > tr > td:nth-of-type(" + nLastTd7 + ")").animate({ backgroundColor: "rgba(255, 255, 255, 0)", fontSize: "1rem" }, 250);
    $("#content-img" + nSlide).hide();
    $(this).animate({ backgroundColor: "rgba(255, 255, 255, 0.4)", fontSize: "1.2rem" }, 400);
    switch ($(this).index() + 1) {
        case 1:
            $("#content-img" + nSlide).attr("src", "media3/aganimKipot.png");
            break;
        case 2:
            $("#content-img" + nSlide).attr("src", "media3/aganim1.gif");
            break;
        case 3:
            $("#content-img" + nSlide).attr("src", "media3/aganim2.gif");
            break;
        default:
            break;
    }
    $("#content-img" + nSlide).delay(100).show("fade", 400);
    nLastTd7 = $(this).index() + 1;
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide8() {
    $("#chapter-ttl").text("שלבי ניתוח");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(7)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $(".mov-btns").css({ position: "fixed", bottom: "0", width: "100vw", fontSize: "1.5rem", justifyContent: "space-between" });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}


// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////


function showSlide9() {
    $("#chapter-ttl").text("סוף החלק השלישי");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
}