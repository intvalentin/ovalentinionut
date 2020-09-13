var theme = 1;
document.getElementById("round-theme-button").addEventListener("click", function (evnt) {
    if (theme == 1) {
        document.querySelectorAll("[class^=round-theme]").forEach(el => {el.classList.remove("round-theme-white"); el.classList.add("round-theme-dark")});
        
        //Default
        document.getElementById("body").classList.remove("background-white");
        document.getElementById("body").classList.add("background-dark");
        //Default

        theme++;
    } else {
        document.querySelectorAll("[class^=round-theme]").forEach(el => {el.classList.remove("round-theme-dark"); el.classList.add("round-theme-white")});
        //Default
        document.getElementById("body").classList.remove("background-dark");
        document.getElementById("body").classList.add("background-white");
        //Default
        theme--;
    }
});