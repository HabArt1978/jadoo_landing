const modals = {
    youtubePlayer: {
        openElementSelector: ".banner-section .play-button",
        modalElementSelector: "#youtubePlayerModal",
    },
    loginForm: {
        openElementSelector: "header nav #loginBtn",
        modalElementSelector: "#loginModal",
    },
    singInForm: {
        openElementSelector: "header nav #signUpBtn",
        modalElementSelector: "#signUpModal",
    },
};

export default function initModals() {
    Object.entries(modals).forEach(([_, modalConfig]) => {
        const openElement = document.querySelector(
            modalConfig.openElementSelector
        );
        const modalElement = document.querySelector(
            modalConfig.modalElementSelector
        );

        if (!openElement || !modalElement) return;

        openElement.addEventListener("click", () => {
            modalElement.classList.add("modal--open");
        });

        modalElement
            .querySelector(".modal__close-btn")
            ?.addEventListener("click", () => {
                modalElement.classList.remove("modal--open");
            });

        modalElement
            .querySelector(".modal__backdrop")
            ?.addEventListener("click", () => {
                modalElement.classList.remove("modal--open");
            });
    });
}
