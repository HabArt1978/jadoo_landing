export default function initDrawer() {
    const drawer = document.querySelector(".drawer");

    if (!drawer) return;

    const drawerOpenBtn = document.querySelector(".menu-button");
    drawerOpenBtn?.addEventListener("click", () => {
        drawer.classList.add("drawer--open");
    });

    const drawerCloseBtn = drawer.querySelector(".drawer__close-button");
    drawerCloseBtn?.addEventListener("click", () => {
        drawer.classList.remove("drawer--open");
    });

    const drawerBackdrop = drawer.querySelector(".drawer__backdrop");
    drawerBackdrop?.addEventListener("click", () => {
        drawer.classList.remove("drawer--open");
    });
}
