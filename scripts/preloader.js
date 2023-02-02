(function init_preloader(){
    window.addEventListener("load", remove_preloader);

    function remove_preloader()
    {
        const preloader = document.querySelector("#preloader");
        preloader.classList.add("loaded");
    }
})()

