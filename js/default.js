{/* Variables for dragging window */ }
var div = null;
var lastDiv = null;
var offset = [0, 0];
var isDown = false;
var mousePosition;
const root = document.documentElement;
var elements = document.getElementsByClassName("classname");

document.addEventListener("DOMContentLoaded", function (event) {

    // document.getElementById('deskDiv').classList.add("fade-in");
    // document.getElementById('deskDiv').classList.remove("fade-out-fast");
    // document.getElementById('openWindows').classList.remove("fade-out-fast");
    // document.getElementById('openWindows').classList.add("fade-in");
    document.getElementById('body').classList.add("bg");
});





//Variables for windows
//To see if windows are maximized or not
var isMaximized = [];
//Opened windows
var windowsNumber = 0;


if (document.addEventListener) {
    document.addEventListener("hover", function (evnt) {
        if (evnt.target.classList.contains('shadow-sm')) {
            this.hover(evnt.target);
        }
    });
    // document.getElementsByClassName("openedWindows").addEventListener("click", dragWindow( this));
}
function closeWindow(element) {
    let id = element.getAttribute('data-window');
    let elem = document.getElementById('window' + id);
    elem.classList.add('fade-out-fast');
    setTimeout(function () {
        elem.innerHTML = "";
        elem.remove();
        delete isMaximized["" + id + ""];
    }, 400);

}
function minimizeWindow(id) {

}

//Maximize window
function maximizeWindow(element) {
    let id = element.getAttribute('data-window');
    let elem = document.getElementById('window' + id);

    if (isMaximized["" + id + ""] == null) {
        isMaximized.push({ key: "" + id + "", value: "yes" });
        elem.style.width = "100%";
        elem.style.height = "100%";
        elem.style.left = "0%";
        elem.style.top = "0%";
        isMaximized["" + id + ""] = "yes";
    }
    else if (isMaximized["" + id + ""] == "yes") {
        elem.style.width = "60%";
        elem.style.height = "80%";
        elem.style.top = "20%";
        elem.style.left = "20%";
        isMaximized["" + id + ""] = "no";
    } else {
        elem.style.width = "100%";
        elem.style.height = "100%";
        elem.style.left = "0%";
        elem.style.top = "0%";
        isMaximized["" + id + ""] = "yes";
    }


}
//Drag Window
function dragWindow(element) {
    isDown = true;
    div = document.getElementById(element.getAttribute('data-window'));
    offset = [
        div.offsetLeft - event.clientX,
        div.offsetTop - event.clientY
    ];
    mousePosition = {

        x: event.clientX,
        y: event.clientY

    };
    div.style.left = (mousePosition.x + offset[0]) + 'px';
    div.style.top = (mousePosition.y + offset[1]) + 'px';
    if (lastDiv != null) {
        lastDiv.style.zIndex--;
    }
    div.style.zIndex++;
    lastDiv = div;
}

function dragWindowMouseUp() {
    isDown = false;
    div = null;
}
document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isDown && div != null) {
        mousePosition = {

            x: event.clientX,
            y: event.clientY

        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.top = (mousePosition.y + offset[1]) + 'px';

    }
}, true);

//Refresh option from right click menu
function resetWindows() {
    var elem = document.getElementById("refreshMenu");
    if (elem.innerHTML != "") {
        elem.innerHTML = "";
    }

}

//Refresh desktop icons
function refresh() {
    var windowsMenuIcons = document.getElementsByClassName('desktop-icons');
    var elem = document.getElementById("refreshMenu");
    elem.innerHTML = "";
    for (var i = 0; i < windowsMenuIcons.length; i++) {
        windowsMenuIcons[i].classList.add("refresh");


    }
    setTimeout(function () {
        for (var i = 0; i < windowsMenuIcons.length; i++) {


            windowsMenuIcons[i].classList.remove("refresh");

        }
    }, 500);
}

//Open window or link based on desktop icons
function desktopIconClick(id) {
    var elem = document.getElementById("openWindows");
    switch (id) {
        case "icon-computer":
            elem.innerHTML += "<div class='container' style='position:absolute; left:20%; top:20%; background-color:white; width:45%; height:55%;'></div>";
            break;
        case "icon-projects":

            break;
        case "icon-linkedin":
            var win = window.open('https://www.linkedin.com/in/ovalentinionut/', '_blank');
            win.focus();
            break;
        case "icon-github":
            var win = window.open('https://github.com/intvalentin', '_blank');
            win.focus();
            break;
        case "icon-cv":
            elem.insertAdjacentHTML('beforeend', '<div class="round-theme round-container  round-shadow pdf  openedWindows container" id="window' + windowsNumber + '" value="pdf1" style="position: absolute; z-index:1; width: 64vw; height: 84%; left: 18vw; top: 0.7vw; ">                <div class="round-row  windowBar" style="cursor: grab; max-height: 30px;" data-window="window' + windowsNumber + '"   onmousedown="dragWindow(this)" onmouseup="dragWindowMouseUp()">                    <div class="round-col-12  round-right">                        <div class="round-row">                            <!-- <div class="round-col-3">                                <img class="round-cursor-pointer" id="minimzeWindowButton" data-window="window' + windowsNumber + '" onclick="minimizeWindow(this)" src="./images/minimize.svg" />                            </div> -->                            <div class="round-col-3">                                <img class="round-cursor-pointer" style="padding: 1px;" id="maximizeWindowButton" data-window="' + windowsNumber + '" onclick="maximizeWindow(this)" src="./images/maximize.png" />                            </div>                            <div class="round-col-3">                                <img class="round-cursor-pointer" style="padding: 1px;" id="closeWindowButton" data-window="' + windowsNumber + '" onclick="closeWindow(this)" src="./images/close.png" />                            </div>                        </div>                    </div>                </div>                <div class="round-row round-elem-vert">                    <object class="round-col-12" data="./images/Olteanu_Ionut Valentin_Resume.pdf" type="application/pdf" style="width:100%;  border-radius: 13px; flex-grow: 1;">                        alt : <a href="./images/Olteanu_Ionut Valentin_Resume.pdf">test.pdf</a>                    </object>                </div>            </div>');
            windowsNumber++;
            break;
        case "icon-certifications":
            break;

    }
}


//Open specific Phone or PC view based on site home options
function insertDevice(name) {

    document.getElementById('secondDiv').classList.add("fade-out");



    if (name == 'd2') {



    }
}

//Show 'windows' left corner menu
function showDesktopMenu() {
    var windowsMenuIcons = document.getElementsByClassName('windowsMenuIcons');
    if (document.getElementById('windowsMenu').classList.contains('fade-in-large')) {

        document.getElementById('windowsMenu').classList.add("fade-out-large");

        for (var i = 0; i < windowsMenuIcons.length; i++) {
            windowsMenuIcons[i].classList.add("fade-out-fast");
            windowsMenuIcons[i].classList.remove("fade-in-fast");
        }
        document.getElementById('windowsMenu').classList.remove("fade-in-large");

    } else {

        document.getElementById('windowsMenu').classList.add("fade-in-large");
        //setTimeout(function () {
        for (var i = 0; i < windowsMenuIcons.length; i++) {
            windowsMenuIcons[i].classList.add("fade-in-fast");
            windowsMenuIcons[i].classList.remove("fade-out-fast");
        }
        //}, 200);
        document.getElementById('windowsMenu').classList.remove("fade-out-large");
    }

}