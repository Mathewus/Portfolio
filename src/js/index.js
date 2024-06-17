
document.addEventListener("DOMContentLoaded", function () {
    
    const links = document.querySelectorAll("#itens .nav-link");
    const menu = document.getElementById('menu');
    const submenu = document.getElementById('bgsub-menu');
    const fadeElements = document.querySelectorAll('.fade-element');
    const navbar = document.querySelector('.fa-bars');

    function setActiveLink() {
        let current = "";
        document.querySelectorAll("section").forEach(section => {
            if (pageYOffset >= section.offsetTop - section.clientHeight / 3) {
                current = section.id;
            }
        });
        links.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
        });
    }

    function handleScroll() {
        setActiveLink();

        if (window.pageYOffset > 50) {
            menu.classList.add('active-menu');
            submenu.classList.add('active-menu');
        } else {
            menu.classList.remove('active-menu');
            submenu.classList.remove('active-menu');
        }


        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                el.classList.add('fade-in');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll();


    navbar.addEventListener("click", () => {

        menu.classList.toggle("show");
        navbar.classList.toggle("fa-xmark");


    });


});
