var imagesId = {
    "img1": false,
    "img2": false,
    "img3": false,
    "img4": false
};

function imgClicked(id) {
    if (!imagesId[id]) {
        imagesId[id] = true;
        document.getElementById(id).className = 'imgClicked';
        setTimeout(function() { document.getElementById(id + "-text").classList.add('showText'); }, 200);

        for (const [key, value] of Object.entries(imagesId)) {
            if (key != id) {
                imagesId[key] = false;
                document.getElementById(key).classList.remove('imgClicked');
                document.getElementById(key + "-text").classList.remove('showText');
            }
        }
    } else {
        imagesId[id] = false;
        document.getElementById(id).classList.remove('imgClicked');
        document.getElementById(id + "-text").classList.remove('showText');
    }

    
}