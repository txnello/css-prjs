let resizeObserver = new ResizeObserver(() => {
    // double check to avoid flickering
    if (window.innerWidth > 850 && document.getElementById("theme").getAttribute("href") === "styles/mobileStyle.css") {
        document.getElementById("theme").setAttribute("href", "styles/desktopStyle.css");
    }

    if (window.innerWidth <= 850 && document.getElementById("theme").getAttribute("href") === "styles/desktopStyle.css") {
        document.getElementById("theme").setAttribute("href", "styles/mobileStyle.css");
    }
}); 

resizeObserver.observe(document.getElementsByTagName("body")[0]);