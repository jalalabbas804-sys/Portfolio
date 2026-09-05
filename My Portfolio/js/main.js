/* =====================================================
   MAIN PORTFOLIO SCRIPT
===================================================== */


/* =====================================================
   PAGE LOADER
===================================================== */

window.addEventListener(
    "load",
    () => {

        const loader =
            document.querySelector(
                ".page-loader"
            );


        if (!loader) return;


        setTimeout(
            () => {

                loader.classList.add(
                    "hide"
                );

            },
            600
        );

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const menuToggle =
            document.querySelector(
                ".menu-toggle"
            );


        const navMenu =
            document.querySelector(
                ".nav-menu"
            );


        if (
            !menuToggle ||
            !navMenu
        ) return;


        menuToggle.addEventListener(
            "click",
            () => {

                navMenu.classList.toggle(
                    "active"
                );

            }
        );


        /* Close after clicking link */

        navMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navMenu.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }
);


/* =====================================================
   NAVBAR SCROLL
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(
                ".navbar"
            );


        if (!navbar) return;


        if (
            window.scrollY > 40
        ) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =====================================================
   ACTIVE NAV LINK
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        const links =
            document.querySelectorAll(
                ".nav-menu a"
            );


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                !entry.isIntersecting
                            ) return;


                            links.forEach(
                                link => {

                                    link.classList.remove(
                                        "active"
                                    );


                                    if (
                                        link.getAttribute(
                                            "href"
                                        ) ===
                                        "#" +
                                        entry.target.id
                                    ) {

                                        link.classList.add(
                                            "active"
                                        );

                                    }

                                }
                            );

                        }
                    );

                },
                {
                    rootMargin:
                        "-35% 0px -55% 0px"
                }
            );


        sections.forEach(
            section =>
                observer.observe(section)
        );

    }
);


/* =====================================================
   BACK TO TOP
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        const button =
            document.getElementById(
                "back-to-top"
            );


        if (!button) return;


        if (
            window.scrollY > 500
        ) {

            button.classList.add(
                "show"
            );

        } else {

            button.classList.remove(
                "show"
            );

        }

    }
);


document.addEventListener(
    "DOMContentLoaded",
    () => {

        const button =
            document.getElementById(
                "back-to-top"
            );


        if (!button) return;


        button.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }
);


/* =====================================================
   PROJECT MODAL CLOSE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const modal =
            document.getElementById(
                "project-modal"
            );


        const close =
            document.querySelector(
                ".modal-close"
            );


        const overlay =
            document.querySelector(
                ".modal-overlay"
            );


        function closeModal() {

            modal.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "modal-open"
            );


            const media =
                document.getElementById(
                    "modal-media"
                );


            if (media) {

                media.innerHTML = "";

            }

        }


        if (close) {

            close.addEventListener(
                "click",
                closeModal
            );

        }


        if (overlay) {

            overlay.addEventListener(
                "click",
                closeModal
            );

        }


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    closeModal();

                }

            }
        );

    }
);


/* =====================================================
   CONTACT FORM
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const form =
            document.getElementById(
                "contact-form"
            );


        if (!form) return;


        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const button =
                    form.querySelector(
                        ".send-btn"
                    );


                const success =
                    document.getElementById(
                        "form-success"
                    );


                const name =
                    document.getElementById(
                        "name"
                    ).value.trim();


                const email =
                    document.getElementById(
                        "email"
                    ).value.trim();


                const message =
                    document.getElementById(
                        "message"
                    ).value.trim();


                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    return;

                }


                /* Loading animation */

                button.classList.add(
                    "loading"
                );


                success.classList.remove(
                    "show"
                );


                setTimeout(
                    () => {

                        button.classList.remove(
                            "loading"
                        );


                        success.classList.add(
                            "show"
                        );


                        /*
                         * Opens user's email application.
                         */

                        const subject =
                            encodeURIComponent(
                                "Portfolio Project Inquiry"
                            );


                        const body =
                            encodeURIComponent(
                                `Hello Jalal,

Name: ${name}

Email: ${email}

Message:
${message}`
                            );


                        window.location.href =
                            `mailto:jalalabbas804@gmail.com?subject=${subject}&body=${body}`;


                        form.reset();

                    },
                    1000
                );

            }
        );

    }
);


/* =====================================================
   IMAGE ERROR HANDLER
===================================================== */

document.addEventListener(
    "error",
    event => {

        if (
            event.target.tagName === "IMG"
        ) {

            event.target.classList.add(
                "image-error"
            );

        }

    },
    true
);