// Cambiar el icono
const NAV_ICON = document.getElementById("icon-togle");

NAV_ICON.addEventListener("click", () => {
    const NAV_MENU = document.getElementById("menu");
    const NAV_OVERLAY = document.querySelector(".nav-overlay");
    const ICON_BARS = "bars";
    const ICON_XMARK = "xmark";
    let iconClass = NAV_ICON.className;
    const BODY = document.body;

    NAV_OVERLAY.classList.toggle("nav-overlay--active");
    NAV_MENU.classList.toggle("nav-menu--active");
    
    
    if ( iconClass.includes(ICON_BARS) ) {
        BODY.style.overflowY = 'hidden';
        NAV_ICON.className = `fa-solid fa-${ICON_XMARK}`;

    }
    else if (iconClass.includes(ICON_XMARK)) {
        BODY.style.overflowY = 'unset';
        NAV_ICON.className = `fa-solid fa-${ICON_BARS}`;

        NAV_MENU.classList.remove("nav-menu--active");
    }



});
