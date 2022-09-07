







function removePreload() {
    document.body.classList.remove('preload');
    document.removeEventListener('DOMContentLoaded', removePreload)
}

function init () {
    //remove the preload class
    document.addEventListener('DOMContentLoaded', removePreload)
}

init();