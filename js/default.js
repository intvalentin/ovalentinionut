{/* Variables for dragging window */ }
var div = null;
var lastDiv = null;
var offset = [0, 0];
var isDown = false;
var mousePosition;
const root = document.documentElement;
var elements = document.getElementsByClassName("classname");
var pageLocation = "";
document.addEventListener("DOMContentLoaded", function (event) {

    // document.getElementById('deskDiv').classList.add("fade-in");
    // document.getElementById('deskDiv').classList.remove("fade-out-fast");
    // document.getElementById('openWindows').classList.remove("fade-out-fast");
    // document.getElementById('openWindows').classList.add("fade-in");
    document.getElementById('body').classList.add("bg");
    root.style.setProperty('--themev1', '#ffffff7c !important');
    root.style.setProperty('--themev2', 'black !important');
    root.style.setProperty('--themev3', 'none');
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
        elem.style.height = "89.6%";
        elem.style.left = "0%";
        elem.style.top = "0%";
        isMaximized["" + id + ""] = "yes";
    }
    else if (isMaximized["" + id + ""] == "yes") {
        elem.style.width = "60%";
        elem.style.height = "80%";
        elem.style.top = "7%";
        elem.style.left = "20%";
        isMaximized["" + id + ""] = "no";
    } else {
        elem.style.width = "100%";
        elem.style.height = "89.6%";
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




//Open window or link based on desktop icons
function desktopIconClick(id) {
    var elem = document.getElementById("openWindows");
    switch (id) {
        case "icon-computer":
            elem.innerHTML += "<div class='container' style='position:absolute; left:20%; top:20%; background-color:white; width:45%; height:55%;'></div>";
            break;
        case "icon-projects":
            elem.innerHTML = '<div class="round-hide round-container round-shadow-default round-m2"><div class="round-row"><div class="round-text-div round-theme round-shadow-default">2020</div></div><div class="round-row"><div class="round-col-4 round-col-phone-12"><div class="round-theme round-theme-white round-card-v1-m round-shadow"><div class="round-card-img-v1"> <img id="icon-github" src="./projects-imgs/2.png"/></div><div class="round-card-content-v1"><p class="round-row">PriceEPCG</p><p> - Application to see the history of prices on PcGarage and Emag (online stores). <br/></p><div class="round-row"> <button id="project-2" class="round-button-normal-xlarge" onclick="desktopIconClick(this.id)">Read more</button></div></div></div></div><div class="round-col-4 round-col-phone-12"><div class="round-theme round-theme-white round-card-v1-m round-shadow"><div class="round-card-img-v1"> <img id="icon-github" src="./projects-imgs/3.png"/></div><div class="round-card-content-v1"><p class="round-row">Project IGI</p><p> - Online Application Angular & C# / TypeScript / Sql server<br/></p><div class="round-row"> <button id="project-3" class="round-button-normal-xlarge" onclick="desktopIconClick(this.id)">Read more</button></div></div></div></div><div class="round-col-4 round-col-phone-12"><div class="round-theme round-theme-white round-card-v1-m round-shadow"><div class="round-card-img-v1"> <img id="icon-github" src="./projects-imgs/5.png"/></div><div class="round-card-content-v1"><p class="round-row">Project PRECIS (Meter management system for SMM warehouses)</p><p> - Online Application Angular & C# / TypeScript / Sql server<br/></p><div class="round-row"> <button class="round-button-normal-xlarge">Read more</button></div></div></div></div></div></div><div class="round-hide round-container round-shadow-default round-m2"><div class="round-row"><div class="round-text-div round-theme round-shadow-default">2019</div></div><div class="round-row"><div class="round-col-4 round-col-phone-12"><div class="round-theme round-theme-white round-card-v1-m round-shadow"><div class="round-card-img-v1"> <img id="icon-github" src="./projects-imgs/1.png"/></div><div class="round-card-content-v1"><p class="round-row">Intlearn</p><p> - E-learning system for learning algorithms and data structures, C#/ASP.NET Core MVC/MS SQL<br/> - WEB application with the objective to provide support for learning of algorithms and data structures.</p><div class="round-row"> <button id="project-1" class="round-button-normal-xlarge" onclick="desktopIconClick(this.id)">Read more</button></div></div></div></div><div class="round-col-4 round-col-phone-12"><div class="round-theme round-theme-white round-card-v1-m round-shadow"><div class="round-card-img-v1"> <img id="icon-github" src="./projects-imgs/4.png"/></div><div class="round-card-content-v1"><p class="round-row">Small projects</p><p> - View on Github<br/></p><div class="round-row"> <button id="project-small" class="round-button-normal-xlarge" onclick="desktopIconClick(this.id)">Go to Github</button></div></div></div></div></div></div></div>'
            document.getElementById('backButton').style.display = 'none';
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
            elem.innerHTML = '<div class="round-container" style="height: 100%;"><div class="round-row round-fill"> <object class="round-col-12" data="./images/Olteanu_Ionut Valentin_Resume.pdf" type="application/pdf" style="width:100%; border-radius: 13px; flex-grow: 1;"> alt : <a href="./images/Olteanu_Ionut Valentin_Resume.pdf">test.pdf</a> </object></div></div><div style="height: 100px;"></div>';
            windowsNumber++;
            break;
        case "icon-certifications":
            break;
        case "project-1":
            elem.innerHTML = '<div class="container"><div class="round-row"><div class="round-col-3 round-col-phone-12 round-theme round-shadow round-m3" style="font-size: xx-large;"> Intlearn</div></div><div class="round-row "><div class="round-col-5 round-col-phone-12 round-m5" style="font-size: medium;"><div class="round-theme round-col-12 round-shadow round-text-div round-m1"> WEB application with the objective to provide support for learning of algorithms and data structures</div><div class="round-col-12 round-theme round-shadow round-text-div round-m1"> Developed using Model View Controller(MVC) architecture</div><div class="round-col-12 round-theme round-shadow round-text-div round-m1"> Designed use-case diagram</div><div class="round-col-12 round-theme round-shadow round-text-div round-m1"> Designed database(MS SQL): User requirements, Conceptual design, Logical design, Physical design, Implementation</div><div class="round-col-12 round-theme round-shadow round-text-div round-m1"> Worked with database using Entity Framework Core</div><div class="round-col-12 round-theme round-shadow round-text-div round-m1"> Used asynchronous programming using async / await to increase performance and responsiveness</div><div class="round-col-12 round-theme round-shadow round-text-div round-m1"> Used Razor for embedding server-based code into webpages</div><div class="round-col-12 round-theme round-shadow round-text-div round-m1"> Used CSS Framework for developing responsive and mobile-first interface</div></div><div class="round-col-5 round-col-phone-12 round-m5"> <iframe style="width: inherit; height: -webkit-fill-available;" frameborder="0" src="https://mega.nz/embed/FsZyiJKQ#srftZ9qVPecrYCZLYtwKDivLcR4VAW-LVJruWkH4TwI" allowfullscreen ></iframe></div><div class="round-col-5 round-col-phone-12 round-m5"> <img class="round-shadow-default" src="./projects-imgs/1_1.PNG" /></div><div class="round-col-5 round-col-phone-12 round-m5"> <img class="round-shadow-default" src="./projects-imgs/1_2.PNG" /></div><div class="round-col-5 round-col-phone-12 round-m5"> <img class="round-shadow-default" style="width: 300px;" src="./projects-imgs/1_3.PNG" /></div><div class="round-col-5 round-col-phone-12 round-m5"> <img class="round-shadow-default" src="./projects-imgs/1_4.PNG" /></div><div class="round-col-5 round-col-phone-12 round-m5"> <img class="round-shadow-default" src="./projects-imgs/1_5.PNG" /></div><div class="round-col-5 round-col-phone-12 round-m5"> <img class="round-shadow-default" src="./projects-imgs/1_6.PNG" /></div><div class="round-col-5 round-col-phone-12 round-m5"> <img class="round-shadow-default" src="./projects-imgs/1_7.PNG" /></div><div class="round-col-5 round-col-phone-12 round-m5"> <img class="round-shadow-default" src="./projects-imgs/1_8.PNG" /></div></div></div><div style="height: 100px;"></div>';
            pageLocation = 'icon-projects';
            document.getElementById('backButton').style.display = 'initial';
            break;
        case "project-2":
            elem.innerHTML = '<div class="container"><div class="round-row"><div class="round-col-3 round-col-phone-12 round-theme round-shadow round-m3" style="font-size: xx-large;"> PriceEPCG</div></div><div class="round-row "><div class="round-col-4 round-col-phone-12 round-m5" style="font-size: medium;"><div class="round-theme round-col-12 round-shadow round-text-div round-m1"> Application to see the history of prices on PcGarage and Emag (online stores).</div><div class="round-col-12 round-theme round-shadow round-text-div round-m1"> Wrote C# programs to read and store prices from PcGarage and Emag.</div><div class="round-col-12 round-theme round-shadow round-text-div round-m1"> Used Chart.js for displaying data.</div><div class="round-col-12 round-theme round-shadow round-text-div round-m1"> You can search products by using manufacturer code or using product link. More info in \'Help\' section in app.</div><div class="round-col-12 round-m1"><div class="round-row"><div class="round-col-5"> <button id="viewPriceEPCG" class="round-button-normal-medium round-m2" onclick="desktopIconClick(this.id)">View application</button></div><div class="round-col-5"> <button id="viewPriceEPCGGithub" class="round-button-normal-medium round-m2" onclick="desktopIconClick(this.id)">View on Github</button></div></div></div></div><div class="round-col-9 round-col-phone-12 round-m5"> <img class="round-shadow-default" src="./projects-imgs/2.PNG" /></div><div class="round-col-9 round-col-phone-12 round-m5"> <img class="round-shadow-default" src="./projects-imgs/2_1.PNG" /></div></div></div><div style="height: 100px;"></div>';
            pageLocation = 'icon-projects';
            document.getElementById('backButton').style.display = 'initial';
            break;
        case "project-3":
            elem.innerHTML = '<div class="container"><div class="round-row"><div class="round-col-4 round-col-phone-12 round-theme round-shadow round-m3" style="font-size: xx-large;"> Project IGI (Online Application Portal)</div></div><div class="round-row "><div class="round-col-5 round-col-phone-12 round-m5" style="font-size: medium;"><div class="round-theme round-col-12 round-shadow round-text-div round-m1"> Project developed working at TECHNOHUB</div><div class="round-theme round-col-12 round-shadow round-text-div round-m1"> Worked with the team on frontend & backend. (C# / TypeScript)</div><div class="round-col-12 round-theme round-shadow round-text-div round-m1"> Worked on implementing the business design of the application.</div><div class="round-col-12 round-theme round-shadow round-text-div round-m1"> Developed and modified T-SQL transactions.</div><div class="round-col-12 round-theme round-shadow round-text-div round-m1"> Implemented responsive UI design. (Bootstrap grid & Material Angular)</div><div class="round-col-12 round-m1"><div class="round-row"><div class="round-col-5"> <button id="viewIGIProject" class="round-button-normal-medium round-m2" onclick="desktopIconClick(this.id)">View application</button></div></div></div></div><div class="round-col-8 round-col-phone-12 round-m5"> <img class="round-shadow-default" src="./projects-imgs/3_1.PNG" /></div><div class="round-col-8 round-col-phone-12 round-m5"> <img class="round-shadow-default" src="./projects-imgs/3_2.PNG" /></div><div class="round-col-8 round-col-phone-12 round-m5"> <img class="round-shadow-default" src="./projects-imgs/3_3.PNG" /></div><div class="round-col-8 round-col-phone-12 round-m5"> <img class="round-shadow-default" src="./projects-imgs/3_4.PNG" /></div><div class="round-col-8 round-col-phone-12 round-m5"> <img class="round-shadow-default" style="width: 300px;" src="./projects-imgs/3_5.PNG" /></div></div></div><div style="height: 100px;"></div>';
            pageLocation = 'icon-projects';
            document.getElementById('backButton').style.display = 'initial';
            break;
        case "project-small":
            var win = window.open('https://github.com/intvalentin', '_blank');
            break;
        case "viewPriceEPCG":
            var win = window.open('https://intvalentin.github.io/PriceEPCG/', '_blank');
            break;
        case "viewPriceEPCGGithub":
            var win = window.open('https://github.com/intvalentin/PriceEPCG', '_blank');
            break;
        case "viewIGIProject":
            var win = window.open('https://portaligi.mai.gov.ro/portaligi/', '_blank');
            break;

    }
    document.getElementById("round-menu-v1").style.transform = "translateX(102%)" ;
    document.querySelectorAll("[class^=round-hide]").forEach(el => {el.style.opacity = 1;});
}
function goBack() {
    desktopIconClick(pageLocation);
}

