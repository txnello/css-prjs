let resizeObserver = new ResizeObserver(() => { 
    if(window.innerWidth > 800) {
        document.getElementById("box").classList = ["boxCoverLeft"];
        document.getElementById("coverImg").classList = ["coverLeft"];
        document.getElementById("data").classList = ["cardDataCoverLeft"];
    } else {
        document.getElementById("box").classList = ["boxCoverTop"];
        document.getElementById("coverImg").classList = ["coverTop"];
        document.getElementById("data").classList = ["cardDataCoverTop"];
    }
}); 

resizeObserver.observe(document.getElementsByTagName("body")[0]);