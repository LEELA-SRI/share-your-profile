"use strict";
const nav_mainPage = document.getElementsByClassName("nav-mainPage");
const nav_catPage = document.getElementsByClassName("nav-catalogPage");
const nav_commPage = document.getElementsByClassName("nav-commPage");
const nav_resPage = document.getElementsByClassName("nav-resPage");
const nav_priPage = document.getElementsByClassName("nav-priPage");

var scrollbar = window.scrollY;

if (scrollbar > 20) {
    document.getElementsByClassName("mob-nav")[0].style.background = "#FFF";
    document.getElementsByClassName("mob-nav")[0].style.color = "#1A191D";

    document.getElementsByClassName("mob-nav-frame-right")[0].style.filer =
        "invert(100%)";

    document.getElementsByClassName("nav-bar-desktop")[0].style.background =
        "#FFF";
    document.getElementsByClassName("nav-bar-desktop")[0].style.color = "#121212";
} else {
    document.getElementsByClassName("nav-bar-desktop")[0].style.background =
        "#1A191D";
    document.getElementsByClassName("nav-bar-desktop")[0].style.color = "#FFF";

    document.getElementsByClassName("mob-nav")[0].style.background = "#1A191D";
    document.getElementsByClassName("mob-nav")[0].style.color = "#fff";

    document.getElementsByClassName("mob-nav-frame-right")[0].style.filter =
        "invert(0%)";
}

function hideMobNavigationMenu() {
    document.querySelector("body").style.overflowY = "scroll";
    nav_commPage[0].style.display = "none";
    nav_catPage[0].style.display = "none";
    nav_mainPage[0].style.display = "none";
    nav_resPage[0].style.display = "none";
    nav_priPage[0].style.display = "none";
}

function showMobMainNavigationMenu() {
    document.querySelector("body").style.overflow = "hidden";
    nav_commPage[0].style.display = "none";
    nav_catPage[0].style.display = "none";
    nav_mainPage[0].style.display = "block";
    nav_resPage[0].style.display = "none";
    nav_priPage[0].style.display = "none";
}

function showMobCatNavigationMenu() {
    nav_commPage[0].style.display = "none";
    nav_catPage[0].style.display = "block";
    nav_mainPage[0].style.display = "block";
    nav_resPage[0].style.display = "none";
    nav_priPage[0].style.display = "none";
}

function showMobCommNavigationMenu() {
    nav_commPage[0].style.display = "block";
    nav_catPage[0].style.display = "none";
    nav_mainPage[0].style.display = "block";
    nav_resPage[0].style.display = "none";
    nav_priPage[0].style.display = "none";
}

function showMobResNavigationMenu() {
    nav_commPage[0].style.display = "res";
    nav_catPage[0].style.display = "none";
    nav_mainPage[0].style.display = "block";
    nav_resPage[0].style.display = "block";
    nav_priPage[0].style.display = "none";
}

function showMobPriNavigationMenu() {
    nav_commPage[0].style.display = "none";
    nav_catPage[0].style.display = "none";
    nav_mainPage[0].style.display = "block";
    nav_resPage[0].style.display = "none";
    nav_priPage[0].style.display = "block";
}

window.addEventListener("scroll", function (event) {
    var scrollbar = window.scrollY;
    if (scrollbar > 20) {
        document.getElementsByClassName("mob-nav")[0].style.background = "#FFF";

        document.getElementsByClassName("mob-nav")[0].style.color = "#1A191D";

        document.getElementsByClassName("mob-nav-frame-right")[0].style.filter =
            "invert(100%)";

        document.getElementsByClassName("nav-bar-desktop")[0].style.background =
            "#FFF";
        document.getElementsByClassName("nav-bar-desktop")[0].style.color =
            "#121212";
    } else {
        document.getElementsByClassName("nav-bar-desktop")[0].style.background =
            "#1A191D";
        document.getElementsByClassName("nav-bar-desktop")[0].style.color = "#FFF";

        document.getElementsByClassName("mob-nav-frame-right")[0].style.filter =
            "invert(0%)";

        document.getElementsByClassName("mob-nav")[0].style.background = "#1A191D";

        document.getElementsByClassName("mob-nav")[0].style.color = "#fff";
    }
});
