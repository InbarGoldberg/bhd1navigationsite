var nSubChapter = 0;
var nSlide = 0;
var content;

$(function () {
    $("#slide21").hide();
    $("#logo").on("click", function () {
        sessionStorage.removeItem("slideNum");
    })
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
    if (nSlide >= 1 && nSlide <= 13 && nSlide % 2 === 1) {
        $("#content-img" + nSlide).get(0).pause();
    }
    nSlide++;
    $("#slide" + nSlide).show();
    sessionStorage.setItem("slideNum", nSlide);
    eval("showSlide" + nSlide + "()");
}

function prvSlide() {
    $("#prv-btn" + nSlide).off();
    $("#nxt-btn" + nSlide).off();
    $("#slide" + nSlide).hide();
    if (nSlide >= 1 && nSlide <= 13 && nSlide % 2 === 1) {
        $("#content-img" + nSlide).get(0).pause();
    }
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
    $("#chapter-ttl").text("כיפה");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(1)").addClass("menu-active");

    $(".mov-btns").css({ position: "fixed", bottom: "0", width: "100vw", fontSize: "1.5rem", justifyContent: "space-between" });
    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

var nFindCount, nFindTotal, aDone = [], aStart = [];

function showSlide2() {
    $("#chapter-ttl").text("כיפה");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(1)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);

    if (aDone[2] !== 0) {
        $("#nxt-btn" + nSlide).hide();
        $("#content-img2 > .find-div").css({ backgroundColor: "rgba(115, 163, 17, 0)" }).off().on("click", findDivs);
        nFindCount = 0;
        nFindTotal = 3;
        if (aStart[2] !== 0) {
            aStart[2] = 0;
        }
    }
}

function findDivs() {
    nFindCount++;
    $(this).off().animate({ backgroundColor: "rgba(115, 163, 17, 0.5)" }, 500);
    if (nFindCount === nFindTotal) {
        // $("#content-img" + nSlide + " > .find-div").off();
        aDone[nSlide] = 0;
        $("#pop-div" + nSlide).css({ top: "8rem" }).delay(200).show("fade", 500);
        $("#nxt-btn" + nSlide).delay(250).show("fade");
    }
}

function drag() {
    $("#pop-div" + nSlide).css({ top: event.touches[0].clientY - 95 });
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide3() {
    $("#chapter-ttl").text("שלוחה");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(2)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide4() {
    $("#chapter-ttl").text("שלוחה");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(2)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);

    if (aDone[4] !== 0) {
        $("#nxt-btn" + nSlide).hide();
        nFindCount = 0;
        nFindTotal = 1;
        if (aStart[4] !== 0) {
            $("#content-img4 > .find-div").on("click", findDivs);
            aStart[4] = 0;
        }
    }
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide5() {
    $("#chapter-ttl").text("כתף");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(3)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide6() {
    $("#chapter-ttl").text("כתף");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(3)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);

    if (aDone[6] !== 0) {
        $("#nxt-btn" + nSlide).hide();
        $("#content-img6 > .find-div").css({ backgroundColor: "rgba(115, 163, 17, 0)" }).off().on("click", findDivs);
        nFindCount = 0;
        nFindTotal = 4;
        if (aStart[6] !== 0) {
            aStart[6] = 0;
        }
    }
}


// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide7() {
    $("#chapter-ttl").text("אוכף");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(4)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide8() {
    $("#chapter-ttl").text("אוכף");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(4)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);

    if (aDone[8] !== 0) {
        $("#nxt-btn" + nSlide).hide();
        nFindCount = 0;
        nFindTotal = 1;
        if (aStart[8] !== 0) {
            $("#content-img8 > .find-div").on("click", findDivs);
            $("#find-div8-bonus").on("click", function () {
                $(this).off().animate({ backgroundColor: "rgba(17, 163, 139, 0.5)", color: "whitesmoke" }, 500);
            });
            aStart[8] = 0;
        }
    }
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide9() {
    $("#chapter-ttl").text("גיא");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(5)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide10() {
    $("#chapter-ttl").text("גיא");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(5)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);

    if (aDone[10] !== 0) {
        $("#nxt-btn" + nSlide).hide();
        $("#content-img10 > .find-div").css({ backgroundColor: "rgba(115, 163, 17, 0)" }).off().on("click", findDivs);
        nFindCount = 0;
        nFindTotal = 4;
        if (aStart[10] !== 0) {
            aStart[10] = 0;
        }
    }
}


// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide11() {
    $("#chapter-ttl").text("כיפה סמויה");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(6)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide12() {
    $("#chapter-ttl").text("כיפה סמויה");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(6)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);

    
    if (aDone[12] !== 0) {
        $("#nxt-btn" + nSlide).hide();
        $("#content-img10 > .find-div").css({ backgroundColor: "rgba(115, 163, 17, 0)" });
        nFindCount = 0;
        nFindTotal = 1;
        if (aStart[12] !== 0) {
            $("#content-img12 > .find-div").on("click", findDivs);
            aStart[12] = 0;
        }
    }
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide13() {
    $("#chapter-ttl").text("מכתש");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(7)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide14() {
    $("#chapter-ttl").text("מכתש");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(7)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide15() {
    $("#chapter-ttl").text("מדרון");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(8)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide16() {
    $("#chapter-ttl").text("מדרון קצוב");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(0)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide17() {
    $("#chapter-ttl").text("מדרון קעור");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(1)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide18() {
    $("#chapter-ttl").text("מדרון קמור");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(2)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide19() {
    $("#chapter-ttl").text("מצוק");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(3)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

var nDrag, nDropCount = 0, elDrop, sDrag, nDragTop, aDragOffsetTop = [];
function showSlide20() {
    $("#chapter-ttl").text("תרגול");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-sub-ttl:eq(4)").addClass("menu-active");

    $("#img-div" + nSlide).css({ height: ($("body").height() - document.getElementById("img-div" + nSlide).getBoundingClientRect().top - 10) });
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $(".content-img-tirgul").css({ height: $("#tirgul-table20 > tbody > tr > td").height() })
    $("#drag20").css({ width: $("#content-img20-1").height() * 2.11, height: $("#content-img20-1").height() });
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);

    if (nDrag !== 0) {
        nDrag = 0;
        $("#nxt-btn" + nSlide).hide();

        for (var i = 1; i <= 6; i++) {
            aDragOffsetTop[i] = $("#content-img20-" + i).offset().top;
        }

        $(".tirgul-move").on("drag", function () {
            $("#tap20").hide();
            $(this).css({ zIndex: "1030" });
        });

        $(".tirgul-move").draggable({
            revert: function (is_valid_drop) {
                if (!is_valid_drop) {
                    $(this).addClass("animate__swing");
                    setTimeout(function () {
                        $(".tirgul-move").removeClass("animate__swing");
                    }, 510);
                    return true;
                }
                else {
                    $(this).removeClass("animate__swing");
                }
            }
        });

        $("#content-img20-a6").parent().droppable({ accept: "#content-img20-6" });
        $("#content-img20-b1").parent().droppable({ accept: "#content-img20-1" });
        $("#content-img20-c4").parent().droppable({ accept: "#content-img20-4" });
        $("#content-img20-d3").parent().droppable({ accept: "#content-img20-3" });
        $("#content-img20-e2").parent().droppable({ accept: "#content-img20-2" });
        $("#content-img20-f5").parent().droppable({ accept: "#content-img20-5" });
        $("#content-img20-a6").droppable({ accept: "#content-img20-6" });
        $("#content-img20-b1").droppable({ accept: "#content-img20-1" });
        $("#content-img20-c4").droppable({ accept: "#content-img20-4" });
        $("#content-img20-d3").droppable({ accept: "#content-img20-3" });
        $("#content-img20-e2").droppable({ accept: "#content-img20-2" });
        $("#content-img20-f5").droppable({ accept: "#content-img20-5" });

        $(".tirgul-accept").parent().droppable({
            drop: function (event, ui) {
                elDrop = $(this).children().last();
                sDrag = "#content-img20-" + String($(elDrop).attr("id")).slice("-1");
                setTimeout(function () {
                    if ($(sDrag).css("opacity") === "1") {
                        dropFunc(event, ui);
                    }
                }, 50);
            }
        });

        $(".tirgul-accept").droppable({
            drop: function (event, ui) {
                elDrop = $(this);
                dropFunc(event, ui);
            }
        });
    }
}

function dropFunc(event, ui) {
    sDrag = "#content-img20-" + String($(elDrop).attr("id")).slice("-1");
    $(sDrag).css({ zIndex: "1027" }).animate({ left: elDrop.offset().left - $("#tirgul-table20").offset().left - elDrop.width() - 16, top: elDrop.offset().top - aDragOffsetTop[Number(String($(elDrop).attr("id")).slice("-1"))], opacity: "0.85" });
    nDropCount++;
    $(sDrag).draggable("disable");
    if (nDropCount === 6) {
        $("#pop-div" + nSlide).delay(200).show("fade", 500);
        $("#nxt-btn" + nSlide).delay(250).show("fade");
    }
}


// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////


function showSlide21() {
    $("#chapter-ttl").text("סוף החלק השני");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
}