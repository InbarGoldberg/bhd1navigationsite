var nSubChapter = 0;
var nSlide = 0;
var content;

$(function () {

    //hides all the intros because the animation of those slides cancels the display none.
    $("#slide9").hide();
    $("#slide25").hide();
    $("#slide30").hide();
    $("#logo").on("click", function () {
        sessionStorage.removeItem("slideNum");
    })
    nSlide = Number(sessionStorage.getItem("slideNum"));
    if (nSlide !== 0) {
        $("#slide0").hide();
        // if there are more than two slides with the same title so in case of refresh it will fix the title.
        if (nSlide >= 1 && nSlide <= 4) {
            $("#chapter-ttl").text("רשת הקואורדינטות");
            $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
            $(".menu-chapter-sub-ttl:eq(0)").addClass("menu-active");
        }

        if (nSlide >= 11 && nSlide <= 14) {
            $("#chapter-ttl").text("מציאת נ.צ.");
            $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
            $(".menu-chapter-sub-ttl:eq(4)").addClass("menu-active");
        }

        if (nSlide >= 15 && nSlide <= 21) {
            $("#chapter-ttl").text("מדידת אזימוט");
            $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
            $(".menu-chapter-sub-ttl:eq(5)").addClass("menu-active");
        }

        if (nSlide >= 22 && nSlide <= 24) {
            $("#chapter-ttl").text("מדידת מרחקים");
            $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
            $(".menu-chapter-sub-ttl:eq(6)").addClass("menu-active");
        }

        $(".mov-btns").css({ position: "fixed", bottom: "0", width: "100vw", fontSize: "1.5rem", justifyContent: "space-between" });
        $("#slide" + nSlide).show();
        eval("showSlide" + nSlide + "()");
    }

    else {
        showSlide0();
    }

    //open/close the menu.
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
    $("#chapter-ttl").text("מרכיבי המפה");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(0)").addClass("menu-active");
    $(".mov-btns").css({ position: "static", width: "auto", fontSize: "1.2rem", justifyContent: "flex-end" });
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide1() {
    $("#chapter-ttl").text("רשת הקואורדינטות");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(0)").addClass("menu-active");

    $(".mov-btns").css({ position: "fixed", bottom: "0", width: "100vw", fontSize: "1.5rem", justifyContent: "space-between" });
    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[0].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[0].getBoundingClientRect().top });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide2() {
    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[1].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[1].getBoundingClientRect().top });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).css({ opacity: "0" });

    if ($("#circles2").css("display") === "none") {
        $("#tap2").delay(1500).animate({ opacity: "1" });
    }

    $("#content-table2 > tbody > tr:nth-of-type(2) > td:nth-of-type(3)").on("click", function () {
        $("#tap2").css({ opacity: "0" });
        $("#first-ttl2, #first-p2").hide();
        $("#first-ttl2-a, #first-p2-a").show();
        $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[1].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[1].getBoundingClientRect().top });
        $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });

        $("#dot-coords2").delay(100).show("fold", 750).delay(100, function () {
            $("#content-table2 > tbody > tr > td:nth-of-type(3)").css({ borderLeft: "0.15rem solid #962020" });
            $("#content-table2 > tbody > tr:nth-of-type(2) > td").css({ borderBottom: "0.15rem solid #962020" });
            $("#circles2").delay(1000).show("fade", 500);
            $("#tap2-a").delay(1250).show("fade", 500);
            setTimeout(function () {
                $("#first-ttl2-a").css({ animationDelay: "0s" });
                $("#first-p2-a").css({ animationDelay: "0.5s" });
            }, 3750);
            $("#content-table2 > tbody > tr:nth-of-type(1) > td:nth-of-type(2)").on("click", function () {
                $("#tap2").css({ opacity: "0" });
                nxtSlide();
            });
        });
    });
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide3() {
    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[2].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[2].getBoundingClientRect().top });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).css({ opacity: "0" });

    $(".km-txt").delay(500).show("fade", 500);
    $("#content-table3 > tbody > tr:nth-of-type(1) > td:nth-of-type(2)").animate({ borderBottomColor: "#962020", borderLeftColor: "#962020", backgroundColor: "rgba(150, 32, 32, 0.3)" }, 500);
    $("#tap3").delay(1000).show("fade", 500);
    $("#hor-coord3, #tap3").on("click", function () {
        $("#hor-coord3, #tap3").off();
        nxtSlide();
    });
    setTimeout(function () {
        $("#first-ttl3").css({ animationDelay: "0s" });
        $("#first-p3").css({ animationDelay: "0.5s" });
    }, 3750);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide4() {
    $("#chapter-ttl").text("רשת הקואורדינטות");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(0)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[3].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[3].getBoundingClientRect().top });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide5() {
    $("#chapter-ttl").text("תבליט");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(1)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

var nLastTd6 = 0;
function showSlide6() {
    $("#chapter-ttl").text("תבליט");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(1)").addClass("menu-active");

    if (nLastTd6 === 0) {
        $("#second-table6 > tbody > tr > td:first-of-type").delay(850).animate({ backgroundColor: "rgba(255, 255, 255, 0.4)", fontSize: "1.2rem" }, 400);
        $("#second-p" + nSlide).delay(850).show("fade", 400);
        setTimeout(function () {
            $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
            $("#content-img" + nSlide).delay(250).show("fade", 400);
        }, 850);
        $("#second-table6 > tbody > tr > td").on("click", showTerms6);
    }
    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

function showTerms6() {
    if (nLastTd6 === 0) {
        nLastTd6 = 1;
    }
    $("#second-table6 > tbody > tr > td:nth-of-type(" + nLastTd6 + ")").animate({ backgroundColor: "rgba(255, 255, 255, 0)", fontSize: "1rem" }, 250);
    $("#second-p" + nSlide).hide();
    $("#content-img" + nSlide).hide();
    $(this).animate({ backgroundColor: "rgba(255, 255, 255, 0.4)", fontSize: "1.2rem" }, 400);
    switch ($(this).index() + 1) {
        case 1:
            $("#second-p" + nSlide).html("גובה מוחלט נמדד מעל לפני הים (הים הוא נקודת האפס). <br /> בדוגמא הגובה המוחלט של נקודה A הוא 120 מ'.");
            $("#content-img" + nSlide).attr("src", "media1/absoluteHeight.png");
            break;
        case 2:
            $("#second-p" + nSlide).html("גובה יחסי הוא הגובה של נקודה ביחס לנקודה אחרת, ההפרש בין 2 הנקודות. <br /> בדוגמא הגובה היחסי בין A ל - B הוא 170 מ'.");
            $("#content-img" + nSlide).attr("src", "media1/relativeHeight.png");
            break;
        case 3:
            $("#second-p" + nSlide).html("נקודות גובה מציינות גובה מוחלט בבלט מקומי, לרב ימצאו על כיפות (פסגת הר או גבעה). לדוגמא הנקודה האדומה במפה שלפניכם.");
            $("#content-img" + nSlide).attr("src", "media1/heightPoint.png");
            break;
        case 4:
            $("#second-p" + nSlide).html("נקודות גובה שמכל נקודת גובה אפשר לראות לפחות שתי נקודות גובה נוספות. נקודות טריג בדרך כלל יהיו מסומנות בשטח בבזנט.");
            $("#content-img" + nSlide).attr("src", "media1/trigPoints.jpeg");
            break;
        default:
            break;
    }
    $("#second-p" + nSlide).delay(100).show("fade", 400);
    setTimeout(function () {
        $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
        $("#content-img" + nSlide).delay(250).show("fade", 400);
    }, 100);
    nLastTd6 = $(this).index() + 1;
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide7() {
    $("#chapter-ttl").text("תכסית");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(2)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

var nLastTd8 = 0;
function showSlide8() {
    $("#chapter-ttl").text("תכסית");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(2)").addClass("menu-active");

    if (nLastTd8 === 0) {
        $("#second-table8 > tbody > tr > td:first-of-type").delay(850).animate({ backgroundColor: "rgba(255, 255, 255, 0.4)", fontSize: "1.3rem" }, 400);
        $("#second-p" + nSlide).delay(850).show("fade", 400);
        setTimeout(function () {
            $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
            $("#content-img" + nSlide).delay(250).show("fade", 400);
        }, 850);
        $("#second-table8 > tbody > tr > td").on("click", showTerms8);
    }
    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div8").css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

function showTerms8() {
    if (nLastTd8 === 0) {
        nLastTd8 = 1;
    }
    $("#second-table8 > tbody > tr > td:nth-of-type(" + nLastTd8 + ")").animate({ backgroundColor: "rgba(255, 255, 255, 0)", fontSize: "1.1rem" }, 250);
    $("#second-p" + nSlide).hide();
    $("#content-img" + nSlide).hide();
    $(this).animate({ backgroundColor: "rgba(255, 255, 255, 0.4)", fontSize: "1.3rem" }, 400);
    switch ($(this).index()) {
        case 0:
            $("#second-p" + nSlide).html("סימנים בצבע חום שייכים בדרך כלל <b> לקרקע, תבליט וצירים. </b>");
            $("#content-img" + nSlide).attr("src", "media1/brownOnMap.png");
            break;
        case 1:
            $("#second-p" + nSlide).html("סימנים בצבע כחול שייכים בדרך כלל <b> לרשת הקואורדינטות, מים (נחלים, אגמים וכו'). </b>");
            $("#content-img" + nSlide).attr("src", "media1/blueOnMap.png");
            break;
        case 2:
            $("#second-p" + nSlide).html("סימנים בצבע שחור שייכים בדרך כלל <b> למבנים, דרכים, שמות ונקודות גובה וטריג. </b>");
            $("#content-img" + nSlide).attr("src", "media1/blackOnMap.png");
            break;
        case 3:
            $("#second-p" + nSlide).html("סימנים בצבע ירוק שייכים בדרך כלל <b> לצמחייה. </b>");
            $("#content-img" + nSlide).attr("src", "media1/greenOnMap.png");
            break;
    }
    $("#second-p" + nSlide).delay(100).show("fade", 400);
    setTimeout(function () {
        $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
        $("#content-img" + nSlide).delay(250).show("fade", 400);
    }, 100);
    nLastTd8 = $(this).index() + 1;
}


// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////


function showSlide9() {
    $("#chapter-ttl").text("מד הקואורדינטות");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(1)").addClass("menu-active");
    $(".mov-btns").css({ position: "static", width: "auto", fontSize: "1.2rem", justifyContent: "flex-end" });
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

var nImgToggle;

function showSlide10() {
    $("#chapter-ttl").text("הכרת מד הקואורדינטות");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(3)").addClass("menu-active");

    if (nImgToggle !== 0) {
        $("#content-img10").on("click", function () {
            $(this).hide("scale", { percent: 0 }, 400);
            $("#first-p10").hide();
            $("#first-p10-a").show();
            $("#content-img10-a").delay(800).show("scale", { percent: 0 }, 400);
            $("#content-img10").off();
            $("#nxt-btn10").delay(1500).show("fade", 500);
            nImgToggle = 0;
        });
    }

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div10").css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $(".mov-btns").css({ position: "fixed", bottom: "0", width: "100vw", fontSize: "1.5rem", justifyContent: "space-between" });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide11() {
    $("#chapter-ttl").text("מציאת נ.צ.");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(4)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[4].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[4].getBoundingClientRect().top });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);

    if ($("#dot-coords11").css("display") === "none") {
        $("#dot-coords11").delay(100).show("fold", 750).delay(100, function () {
            $("#content-table11 > tbody > tr > td:nth-of-type(2)").css({ borderLeft: "0.15rem solid #962020" });
            $("#content-table11 > tbody > tr:nth-of-type(2) > td").css({ borderBottom: "0.15rem solid #962020" });
            $(".bold-coord").animate({ color: "#ecc874" }, 500);
            $("#circles11").delay(1000).show("fade", 500);
            $("#nxt-btn11").delay(3000).show("fade", 500);

            setTimeout(function () {
                $("#first-ttl11").css({ animationDelay: "0s" });
                $("#first-p11").css({ animationDelay: "0.5s" });
            }, 2750);
        });
    }
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide12() {
    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[5].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[5].getBoundingClientRect().top });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

var nDrag;

function showSlide13() {
    if (nDrag !== 0) {
        nDrag = 0;

        $("#first-p13 ~ b").hide();
        $("#nxt-btn" + nSlide).hide();
        $("#tap13").delay(1000).animate({ opacity: "1" });

        $("#content-table13 > tbody > tr:nth-of-type(2) > td:nth-of-type(2)").on("click", function () {
            $("#tap13").css({ opacity: "0" });

            $("#first-ttl13, #first-p13").hide();
            $("#first-p13 ~ b").show("fade");

            $("#coordinate-meter13").delay(500).show(500);
            $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
            $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[6].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[6].getBoundingClientRect().top });
            $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });

            $("#coordinate-meter13").draggable({ revert: "invalid" });
            $("#dot-square13").droppable({
                accept: "#coordinate-meter13",
                drop: function (event, ui) {
                    $("#content-table13").css({ zIndex: "1028" });
                    $("#coordinate-meter13").animate({ width: "115vw" });

                    $("#first-ttl13, #first-p13, #first-p13 ~ b").hide();
                    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
                    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[6].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[6].getBoundingClientRect().top });
                    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
                    $("#coordinate-meter13").animate({ left: document.getElementById("dot-square13").getBoundingClientRect().left, top: document.getElementById("dot-square13").getBoundingClientRect().bottom - $("#coordinate-meter14").height() - 5 });

                    setTimeout(function () {
                        $("#coordinate-meter13").css({ transform: "scaleX(-1)" }).animate({ left: document.getElementById("dot-square13").getBoundingClientRect().left, top: document.getElementById("dot-square13").getBoundingClientRect().bottom - $("#coordinate-meter13").height() });
                        $("#dot-coords13").delay(750).show("fold", 750);
                        $(".dot-coord-num").delay(1500).show("fade", 300);
                        $("#coordinate-meter13").draggable("disable");

                        $("#pop-div13").css({ top: "5rem" }).delay(2250).show("fade", 500);
                        $("#nxt-btn" + nSlide).delay(2500).show("fade").on("click", nxtSlide);
                    }, 500);
                }
            });
        });
    }

    else {
        $("#nxt-btn" + nSlide).on("click", nxtSlide);
    }

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[6].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[6].getBoundingClientRect().top });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
}

function drag13() {
    $("#pop-div13").css({ top: event.touches[0].clientY - 95 });
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

var nDrag14;


function showSlide14() {
    $("#chapter-ttl").text("מציאת נ.צ.");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(4)").addClass("menu-active");

    if (nDrag14 !== 0) {
        nDrag14 = 0;
        $("#input-group14").hide();
        $("#coordinate-meter14").draggable({ revert: "invalid" });
        $("#dot-square14").droppable({
            accept: "#coordinate-meter14",
            drop: function (event, ui) {
                $("#content-table14").css({ zIndex: "1028" });
                $("#coordinate-meter14").animate({ width: "115vw" });
                setTimeout(function () {
                    $("#coordinate-meter14").css({ transform: "scaleX(-1)" }).animate({ left: document.getElementById("dot-square14").getBoundingClientRect().left, top: document.getElementById("dot-square14").getBoundingClientRect().bottom - $("#coordinate-meter14").height() - 5 });
                    $("#coordinate-meter14").draggable("disable");

                    $("#first-ttl14, #first-p14").hide();
                    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
                    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[7].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[7].getBoundingClientRect().top });
                    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
                    $("#coordinate-meter14").animate({ left: document.getElementById("dot-square14").getBoundingClientRect().left, top: document.getElementById("dot-square14").getBoundingClientRect().bottom - $("#coordinate-meter14").height() - 5 });

                    $("#input-group14").delay(1000).show("fade");
                    $("#check-input14").on("focus", function () {
                        if ($("#pop-div14").css("display") === "block") {
                            $("#check-input14").val("");
                            $("#pop-div14").hide("drop");
                            $("#check-btn14").attr("aria-disabled", "true").addClass("disabled");
                        }
                    });
                    $("#check-input14").on("input", function () {
                        if ($("#check-input14").val().length === 6) {
                            $("#check-input14").val($("#check-input14").val() + "/");
                        }
                        if ($("#check-input14").val().length === 13) {
                            $("#check-btn14").attr("aria-disabled", "false").removeClass("disabled");
                        }
                        else {
                            $("#check-btn14").attr("aria-disabled", "true").addClass("disabled");
                        }
                    });
                    $("#check-btn14").on("click", waypointCheck);
                }, 500);
            }
        });
    }

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[7].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[7].getBoundingClientRect().top });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

function drag14() {
    $("#pop-div14").css({ top: event.touches[0].clientY - 95 });
}

var horVal, verVal;

function waypointCheck() {
    var inputVal14 = $("#check-input14").val();
    horVal = Number(inputVal14.substring(7));
    verVal = Number(inputVal14.substring(0, 6));
    if (verVal >= 247000 && verVal < 250000 && horVal >= 756000 && horVal < 759000) {
        showPoint();
        if (inputVal14 === "249400/757300") {
            $("#dot14-a").remove();
            $("#pop-div14").hide().text("תשובה נכונה ! : )").css({ top: "5rem" }).show();
            $("#nxt-btn" + nSlide).delay(750).show("fade");
        }
        else {
            $("#pop-div14").hide().text(" הנ.צ שרשמת לא נכון (הנקודה האדומה במפה) ").css({ top: "5rem" }).show();
        }
    }
    else {
        if (inputVal14 === "757300/249400") {
            $("#pop-div14").hide().html("הנ.צ. נכון אבל בסדר הפוך <br/> <b> קודם רושמים את קו האורך ואז את קו הרוחב<b>").css({ top: "5rem" }).show();
        }
        else if (horVal >= 247000 && horVal < 250000 && verVal >= 756000 && verVal < 759000) {
            $("#pop-div14").hide().text("קודם רושמים את קו האורך ואז את קו הרוחב !").css({ top: "5rem" }).show();
        }
        else {
            $("#pop-div14").hide().text(" צר לי לבשר לך הנ.צ. שרשמת לא נמצא על קטע המפה : ( ").css({ top: "5rem" }).show();
        }
    }
}

var verCoordTd, horCoordTr;

function showPoint() {
    if (verCoordTd !== null) {
        $("#dot14-a").remove();
    }
    if (verVal >= 247000 && verVal < 248000) {
        verCoordTd = 3;
    }
    else if (verVal >= 248000 && verVal < 249000) {
        verCoordTd = 2;
    }
    else if (verVal >= 249000 && verVal < 250000) {
        verCoordTd = 1;
    }

    if (horVal >= 756000 && horVal < 757000) {
        horCoordTr = 3;
    }
    else if (horVal >= 757000 && horVal < 758000) {
        horCoordTr = 2;
    }
    else if (horVal >= 758000 && horVal < 759000) {
        horCoordTr = 1;
    }

    $("#content-table14 > tbody > tr:nth-of-type(" + horCoordTr + ") > td:nth-of-type(" + verCoordTd + ")")
        .css({ textAlign: "left", verticalAlign: "bottom" })
        .append("<div class='dot' id='dot14-a' valign=bottom></div>");

    $("#dot14-a").css({ bottom: (horVal % 1000) * 7 / 300 - 3.55 + "vw", left: (verVal % 1000) * 7 / 300 - 2 + "vw" });
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide15() {
    $("#chapter-ttl").text("מדידת אזימוט");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(5)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

var nGif;

function showSlide16() {
    if (nGif !== 0) {
        nGif = 0;
        $("#content-img16").on("click", function () {
            if ($(this).attr("src") === "media1/angle2.gif") {
                $(this).attr("src", "media1/angle2.png");
            }
            else {
                $(this).attr("src", "media1/angle2.gif");
            }
        });
    }

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide17() {
    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[8].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[8].getBoundingClientRect().top });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide18() {
    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[9].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[9].getBoundingClientRect().top });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide19() {
    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[10].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[10].getBoundingClientRect().top });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

nClicked = 0;

function showSlide20() {
    if (nClicked === 0) {
        $("#nxt-btn" + nSlide).hide();
        $("#content-img20").on("click", function () {
            $("#first-p20, #first-p20 ~ b").hide();
            $("#first-p20-a").show();
            setTimeout(function () {
                $("#content-img20").attr("src", "media1/compassRotated.png");
                $("#content-img20-txt").delay(750).show("fade", 750).width($("#content-img20").width())
                    .css({ top: document.getElementById("content-img20").getBoundingClientRect().top });
                $("#nxt-btn" + nSlide).delay(500).show("fade");
            }, 1650);
            $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
            $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
            $("#content-img20").off();
            nClicked = 1;
        });
    }

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide21() {
    $("#chapter-ttl").text("מדידת אזימוט");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(5)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide22() {
    $("#chapter-ttl").text("מדידת מרחקים");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(6)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-img" + nSlide).css({ left: document.getElementsByClassName("content-table")[11].getBoundingClientRect().left, top: document.getElementsByClassName("content-table")[11].getBoundingClientRect().top });
    $("#dot22-b").css({ left: document.getElementById("dot22-a").getBoundingClientRect().left, top: document.getElementById("dot22-a").getBoundingClientRect().top });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide23() {
    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide24() {
    $("#chapter-ttl").text("מדידת מרחקים");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(6)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////


function showSlide25() {
    $("#chapter-ttl").text("סוגי מפות");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(2)").addClass("menu-active");
    $(".mov-btns").css({ position: "static", width: "auto", fontSize: "1.2rem", justifyContent: "flex-end" });
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}


// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide26() {
    $("#chapter-ttl").text("מפה לבנה");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(7)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $(".mov-btns").css({ position: "fixed", bottom: "0", width: "100vw", fontSize: "1.5rem", justifyContent: "space-between" });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide27() {
    $("#chapter-ttl").text('מפת תצ"א');
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(8)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide28() {
    $("#chapter-ttl").text("מפת אורטופוטו");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(9)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide29() {
    $("#chapter-ttl").text("מפת קוד / שליטה");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(10)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////


function showSlide30() {
    $("#chapter-ttl").text("סוף החלק הראשון");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
}