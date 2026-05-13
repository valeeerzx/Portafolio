document.addEventListener("DOMContentLoaded", () => {

    fetch("components/menu.html")
        .then(response => response.text())
        .then(data => {

            document.getElementById("menu-container").innerHTML = data;

            const script = document.createElement("script");
            script.src = "js/menu.js";

            document.body.appendChild(script);
        })
        .catch(err => console.error("Error cargando menu:", err));

    fetch("components/about.html")
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById("about-container");
            if (!container) return;

            container.innerHTML = data;

            setTimeout(() => {
                startTypingEffect();
                initAboutAnimation();
            }, 50);
        })
        .catch(err => console.error("Error cargando about:", err));

    fetch("components/projects.html")
        .then(res => {
            if (!res.ok) throw new Error("Projects no cargó");
            return res.text();
        })
        .then(data => {
            document.getElementById("projects-container").innerHTML = data;
            initProjectsAnimation();
        })
        .catch(err => {
            console.error("ERROR PROJECTS:", err);
        });

});


function startTypingEffect() {
    const texts = [
        "Fresh Graduate",
        "Happy Coding",
        "Junior Programmer",
        "Frontend Developer"
    ];

    let i = 0;
    let j = 0;
    let isDeleting = false;

    const el = document.getElementById("typing-small");
    if (!el) return;

    function type() {
        const current = texts[i];

        if (!isDeleting) {
            el.textContent = current.substring(0, j + 1);
            j++;

            if (j === current.length) {
                isDeleting = true;
                setTimeout(type, 1200);
                return;
            }
        } else {
            el.textContent = current.substring(0, j - 1);
            j--;

            if (j === 0) {
                isDeleting = false;
                i = (i + 1) % texts.length;
            }
        }
        setTimeout(type, isDeleting ? 60 : 120);
    }
    type();
}

function initAboutAnimation() {
    const about = document.querySelector(".about-section");
    if (!about) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(about);
}

function initProjectsAnimation() {
    const projects = document.querySelector(".projects-section");
    if (!projects) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(projects);
}